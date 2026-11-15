import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode, PointerEvent as ReactPointerEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight, BookOpen, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Crosshair,
  Landmark, Move, Pause, Play, Shield, Sparkles, Tag, X,
} from 'lucide-react'
import { dateOrder, entities, eventDay, eventDisplayDay, events, formatYear, inCategory, onDay, onDisplayDay, topicLabel, topicTags, undatedPeriod } from './data'
import type { Category, CountryId, Era, HistoryEvent } from './data'
import TopicPicker from './TopicPicker'

export const knownYears = [...new Set(events.map(event => event.year))].sort((a, b) => a - b)
export function countryName(id: CountryId, year: number) {
  if (id === 'britain' && year < 1707) return '英格兰'
  if (id === 'rome' && year > 395 && year !== 420) return '东罗马'
  if (id === 'greece' && year > -1100) return '希腊地区'
  return entities[id].name
}
const english: Partial<Record<CountryId, string>> = {
  china: 'CHINA', britain: 'BRITAIN', germany: 'GERMANY', japan: 'JAPAN', korea: 'KOREA', ussr: 'SOVIET UNION',
  usa: 'UNITED STATES', france: 'FRANCE', egypt: 'ANCIENT EGYPT', greece: 'AEGEAN WORLD',
  rome: 'ROME', abbasid: 'ABBASID', ottoman: 'OTTOMAN',
}
const categories: ('全部' | Category)[] = ['全部', '政治', '军事', '经济', '文化', '社会', '外交', '战役']

function Atmosphere({ active, theme }: { active: boolean; theme: Era['theme'] }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context || !active) return
    let width = 0, height = 0, frame = 0, last = 0
    const points = Array.from({ length: 34 }, (_, i) => ({
      x: (i * .618033) % 1, y: (i * .414213) % 1, size: i % 7 === 0 ? 1.4 : .65,
      speed: .004 + (i % 5) * .002, phase: i,
    }))
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width; height = entry.contentRect.height
      const ratio = Math.min(window.devicePixelRatio, 2)
      canvas.width = width * ratio; canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    })
    resize.observe(canvas)
    function paint(time: number) {
      const dt = Math.min((time - last) / 1000, .04)
      last = time
      context!.clearRect(0, 0, width, height)
      points.forEach(point => {
        point.y = (point.y - dt * point.speed + 1) % 1
        const alpha = .14 + (Math.sin(time * .0005 + point.phase) + 1) * .14
        context!.fillStyle = theme === 'jade' ? `rgba(135,173,159,${alpha})` : `rgba(201,172,122,${alpha})`
        context!.beginPath()
        context!.arc(point.x * width + Math.sin(time * .0001 + point.phase) * 12, point.y * height, point.size, 0, Math.PI * 2)
        context!.fill()
      })
      frame = requestAnimationFrame(paint)
    }
    function visibility() {
      cancelAnimationFrame(frame)
      if (!document.hidden) { last = performance.now(); frame = requestAnimationFrame(paint) }
    }
    frame = requestAnimationFrame(paint)
    document.addEventListener('visibilitychange', visibility)
    return () => {
      cancelAnimationFrame(frame); resize.disconnect()
      document.removeEventListener('visibilitychange', visibility)
      context.clearRect(0, 0, width, height)
    }
  }, [active, theme])
  return <div className="atmosphere" aria-hidden="true">
    <svg className="terrain-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 11 }, (_, i) => <path key={i}
        d={`M ${390 + i * 21} -80 C ${1000 + i * 32} ${140 + i * 22}, ${260 + i * 27} ${350 + i * 20}, ${920 + i * 25} ${520 + i * 21} S ${1420 + i * 23} 780, 1380 1080`} />)}
      <circle cx="1080" cy="270" r="194" /><circle cx="1080" cy="270" r="207" />
    </svg>
    <div className="ambient-haze" /><div className="scene-grain" /><canvas ref={ref} />
  </div>
}

function DateDrilldown({ year, month, day, changeMonth, changeDay, close, animated }: {
  year: number; month: number | null; day: number | null;
  changeMonth: (month: number | null) => void; changeDay: (day: number | null) => void; close: () => void; animated: boolean
}) {
  const [daysOpen, setDaysOpen] = useState(day !== null)
  const scroll = useRef<HTMLDivElement>(null)
  const yearItems = events.filter(item => item.year === year)
  const periodItems = yearItems.filter(item => item.month === month)
  const daysInMonth = month ? new Date(year, month, 0).getDate() : 0
  const undatedCount = periodItems.filter(item => item.precision === 'month').length
  function scrollToSelection() {
    const root = scroll.current
    const selected = root?.querySelector<HTMLElement>('.day-node.active, .date-undated.active') ?? root?.querySelector<HTMLElement>('.month-node.active')
    if (!root || !selected) return
    const top = selected.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop
    root.scrollTo({ top: Math.max(0, top - root.clientHeight * .25), behavior: 'instant' })
  }
  useEffect(() => { scrollToSelection() }, [month, daysOpen])
  function chooseMonth(value: number) {
    const daily = yearItems.some(item => item.archive && item.month === value)
    if (value !== month) changeMonth(value)
    if (!daily) { setDaysOpen(false); close(); return }
    if (value === month) setDaysOpen(previous => !previous)
    else setDaysOpen(true)
  }
  return <div className="date-drilldown" role="dialog" aria-label={`${formatYear(year)}年日期下钻`}>
    <div className="date-drilldown-top">
      <div><span>月 / 日</span><strong>{formatYear(year)}</strong></div>
      <button className="icon-button" aria-label="收起月日选择" onClick={close}><X size={17} /></button>
    </div>
    <div className="date-drilldown-body" ref={scroll}>
      <button className={`date-year-all ${month === null ? 'active' : ''}`} aria-label="查看全年事件" aria-pressed={month === null}
        onClick={() => { changeMonth(null); setDaysOpen(false); close() }}><span>全年</span><small>{yearItems.length}条记录</small><ArrowRight size={13} /></button>
      <ol className="month-ruler" aria-label="月份时间轴">{Array.from({ length: 12 }, (_, index) => {
        const value = index + 1
        const monthItems = yearItems.filter(item => item.month === value)
        const daily = monthItems.some(item => item.archive)
        return <li key={value} className="month-step" data-month={value}>
          <button className={`month-node ${month === value ? 'active' : ''} ${monthItems.length ? 'populated' : ''}`}
          onClick={() => chooseMonth(value)} aria-label={`${value}月${daily ? '逐日档案' : '事件'}`}
          aria-pressed={month === value} aria-expanded={daily ? month === value && daysOpen : undefined}
          aria-controls={daily ? 'ruler-day-timeline' : undefined}>
          <span className="subruler-ticks" aria-hidden="true"><i /><i /><i /></span>
          <time>{String(value).padStart(2, '0')}<small>月</small></time><i />
          {daily && <ChevronDown className={month === value && daysOpen ? 'month-expanded' : ''} size={11} />}
          </button>
          <AnimatePresence initial={false}>
            {month === value && daily && daysOpen && <motion.div key={`${year}-${value}`} id="ruler-day-timeline" className="ruler-day-section"
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: animated ? .2 : 0 }} onAnimationComplete={scrollToSelection}>
              <button className={`date-month-all ${day === null ? 'active' : ''}`} onClick={() => { changeDay(null); close() }} aria-pressed={day === null}>全月</button>
              <ol className="day-ruler" aria-label="日期时间轴">
                {Array.from({ length: daysInMonth }, (_, index) => {
                  const date = index + 1
                  const count = periodItems.filter(item => eventDay(item) === date && item.precision === 'day').length
                  const ongoing = periodItems.some(item => item.precision === 'range' && onDay(item, date))
                  const undated = periodItems.filter(item => item.precision === 'month' && eventDisplayDay(item) === date).length
                  return <li key={date}><button className={`day-node ${day === date ? 'active' : ''} ${count ? 'has-record' : ''} ${ongoing ? 'ongoing-day' : ''} ${undated ? 'has-undated' : ''}`}
                    onClick={() => { changeDay(date); close() }} aria-pressed={day === date}
                    aria-label={`${month}月${date}日，${count}条定日记录${ongoing ? '，有跨日活动' : ''}${undated ? `，附近有${undated}条未定日活动` : ''}`}>
                    <span className="subruler-ticks" aria-hidden="true"><i /><i /><i /></span>
                    <time>{String(date).padStart(2, '0')}<small>日</small></time><i />
                  </button></li>
                })}
              </ol>
              <button className={`date-undated ${day === -1 ? 'active' : ''}`} onClick={() => { changeDay(-1); close() }} aria-pressed={day === -1}
                aria-label={`未定日，${undatedCount}条月级记录`}>未定日</button>
            </motion.div>}
          </AnimatePresence>
        </li>
      })}</ol>
    </div>
    <div className="date-selection" aria-live="polite"><span>当前范围</span>
        <b>{month === null ? `${formatYear(year)}年 · 全年` : `${formatYear(year)}.${String(month).padStart(2, '0')}${day === null ? ' · 全月' : day === -1 ? ' · 未定日' : `.${String(day).padStart(2, '0')}`}`}</b></div>
  </div>
}

function YearRuler({ year, select, animated, month, day, changeMonth, changeDay, blocked, pause }: {
  year: number; select: (year: number) => void; animated: boolean;
  month: number | null; day: number | null; blocked: boolean;
  changeMonth: (month: number | null) => void; changeDay: (day: number | null) => void
  pause: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const root = useRef<HTMLElement>(null)
  const [expandedYear, setExpandedYear] = useState<number | null>(null)
  const expanded = expandedYear === year && !blocked
  const close = useCallback(() => setExpandedYear(null), [])
  useEffect(() => { setExpandedYear(previous => previous === year ? previous : null) }, [year])
  useEffect(() => {
    if (blocked) close()
  }, [blocked, close])
  useEffect(() => {
    if (!expanded) return
    const preferred = root.current?.querySelector<HTMLButtonElement>('.day-node.active, .date-undated.active') ??
      root.current?.querySelector<HTMLButtonElement>('.month-node.active') ??
      root.current?.querySelector<HTMLButtonElement>('.date-year-all')
    preferred?.focus({ preventScroll: true })
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) close()
    }
    function keyboard(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      event.preventDefault(); event.stopPropagation(); close()
      ref.current?.querySelector<HTMLButtonElement>(`[data-year="${year}"]`)?.focus({ preventScroll: true })
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', keyboard)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', keyboard)
    }
  }, [expanded, close, year])
  useEffect(() => {
    const node = ref.current?.querySelector<HTMLElement>(`[data-year="${year}"]`)
    if (node && ref.current) {
      ref.current.scrollTo({
        top: node.offsetTop - ref.current.clientHeight * .34,
        behavior: animated ? 'smooth' : 'instant',
      })
    }
  }, [year, animated])
  return <aside className={`year-ruler ${expanded ? 'dates-expanded' : ''}`} ref={root} aria-label="年份时间轴">
    <span className="ruler-screw screw-top" aria-hidden="true" />
    <div className="ruler-scroll" ref={ref}>
      <div className="ruler-years">
        {knownYears.map((value, index) => <div key={value} className="ruler-step">
          {index > 0 && value - knownYears[index - 1] > 1 &&
            <div className="ruler-gap" aria-label="未收录年份间隔"><i /><i /></div>}
          <button className={`year-node ${value === year ? 'current' : ''}`} data-year={value}
            onClick={() => {
              pause()
              if (value !== year) { select(value); setExpandedYear(null) }
              else setExpandedYear(expanded ? null : value)
            }}
            aria-label={`${value <= -1046 ? '约' : ''}${formatYear(value)}年`}
            aria-current={value === year ? 'date' : undefined} aria-expanded={value === year && expanded}
            aria-controls={value === year && expanded ? 'left-date-navigation' : undefined}
            title={value === year ? expanded ? '收起月份与日期' : '展开月份与日期' : '选择年份'}>
            {value === year && <motion.span className="ruler-cursor" layoutId="ruler-cursor"
              transition={{ type: 'spring', stiffness: 310, damping: 30, duration: animated ? undefined : 0 }}>
              <i /><b /><i />
            </motion.span>}
            <span className="ruler-ticks" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <span className="year-label"><time>{value <= -1046 && <small>约</small>}{value < 0 && <small>前</small>}{Math.abs(value)}</time>
              {value === year && <span className="ruler-selection">{month === null ? '全年' : `${String(month).padStart(2, '0')}月${day === null ? '' : day === -1 ? ' · 未定' : ` · ${String(day).padStart(2, '0')}`}`}</span>}</span>
            {value === year && <ChevronRight size={11} className="year-disclosure" />}
            <span className="ruler-notch" aria-hidden="true" />
          </button>
        </div>)}
      </div>
    </div>
    <AnimatePresence>
      {expanded && <motion.div id="left-date-navigation" className="left-date-navigation" key={year}
        initial={{ x: animated ? -12 : 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: animated ? -8 : 0, opacity: 0 }}
        transition={{ duration: animated ? .18 : 0 }}>
        <DateDrilldown year={year} month={month} day={day} changeMonth={changeMonth} changeDay={changeDay} animated={animated}
          close={() => { close(); ref.current?.querySelector<HTMLButtonElement>(`[data-year="${year}"]`)?.focus({ preventScroll: true }) }} />
      </motion.div>}
    </AnimatePresence>
    <span className="ruler-screw screw-bottom" aria-hidden="true" />
  </aside>
}

export default function ChronicleScene({
  year, era, countries, country, setCountry, category, setCategory, selectYear, animated,
  setAnimated, playing, setPlaying, blocked, renderEvent, openSources, locatedEvent,
  month, day, setMonth, setDay,
  topic, chooseTopic,
}: {
  year: number; era: Era; countries: CountryId[]; country: CountryId; setCountry: (id: CountryId) => void;
  category: '全部' | Category; setCategory: (category: '全部' | Category) => void;
  selectYear: (year: number) => void; animated: boolean; setAnimated: (value: boolean) => void;
  playing: boolean; setPlaying: (value: boolean) => void; blocked: boolean;
  renderEvent: (item: HistoryEvent, index: number) => ReactNode;
  openSources: () => void; locatedEvent: string | null;
  month: number | null; day: number | null; setMonth: (month: number | null) => void; setDay: (day: number | null) => void;
  topic: string; chooseTopic: (id: string) => void;
}) {
  const viewport = useRef<HTMLDivElement>(null)
  const moreButton = useRef<HTMLButtonElement>(null)
  const previousTopic = useRef(topic)
  const headers = useRef<Record<string, HTMLDivElement | null>>({})
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const [dragging, setDragging] = useState(false)
  const [focusOpen, setFocusOpen] = useState(false)
  const [countryOrder, setCountryOrder] = useState<CountryId[]>(countries)
  const [hiddenCountries, setHiddenCountries] = useState<CountryId[]>([])
  const focusButton = useRef<HTMLButtonElement>(null)
  const focusPanel = useRef<HTMLDivElement>(null)
  const [topicMenuOpen, setTopicMenuOpen] = useState(false)
  const closeTopicMenu = useCallback(() => setTopicMenuOpen(false), [])
  const yearIndex = knownYears.indexOf(year)
  const yearItems = events.filter(item => item.year === year)
  const hasDailyArchive = yearItems.some(item => item.archive && item.month === month)
  const periodItems = yearItems.filter(item => (month === null || item.month === month))
  const candidates = periodItems.filter(item => inCategory(item, category) &&
    (day === null || (day === -1 ? item.precision === 'month' : onDisplayDay(item, day))))
  const activeTopic = topicTags[topic]
  const items = candidates.filter(item => item.country !== activeTopic?.country || item.topicIds.includes(topic))
  const visibleCountries = countryOrder.filter(id => !hiddenCountries.includes(id))
  const visibleItems = items.filter(item => visibleCountries.includes(item.country))
  const focusCustom = hiddenCountries.length > 0 || countryOrder.some((id, index) => id !== countries[index])
  const sceneKey = `${year}-${month}-${day}-${category}-${topic}`
  function changeMonth(value: number | null) { setMonth(value); setDay(null); setPlaying(false) }
  function changeDay(value: number | null) { setDay(value); setPlaying(false) }
  function toggleCountry(id: CountryId) {
    if (hiddenCountries.includes(id)) {
      setHiddenCountries(previous => previous.filter(item => item !== id))
    } else if (visibleCountries.length > 1) {
      setHiddenCountries(previous => [...previous, id])
    }
  }
  function moveCountry(id: CountryId, direction: number) {
    setCountryOrder(previous => {
      const index = previous.indexOf(id), target = index + direction
      if (index < 0 || target < 0 || target >= previous.length) return previous
      const next = [...previous]
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
  }
  function resetFocus() {
    setCountryOrder(countries)
    setHiddenCountries([])
  }
  useEffect(() => {
    setCountryOrder(countries)
    setHiddenCountries([])
    setFocusOpen(false)
  }, [year])
  useEffect(() => { if (blocked) setFocusOpen(false) }, [blocked])
  useEffect(() => {
    if (!focusOpen) return
    focusPanel.current?.querySelector<HTMLInputElement>('input')?.focus()
    function outside(event: PointerEvent) {
      const target = event.target as Node
      if (!focusPanel.current?.contains(target) && !focusButton.current?.contains(target)) setFocusOpen(false)
    }
    function keyboard(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      event.preventDefault(); event.stopImmediatePropagation()
      setFocusOpen(false); focusButton.current?.focus({ preventScroll: true })
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', keyboard, true)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', keyboard, true)
    }
  }, [focusOpen])
  useEffect(() => {
    if (hiddenCountries.includes(country)) {
      const next = countryOrder.find(id => !hiddenCountries.includes(id))
      if (next) setCountry(next)
    }
  }, [hiddenCountries, countryOrder, country, setCountry])
  useEffect(() => { setTopicMenuOpen(false) }, [year, month, day, blocked])
  useEffect(() => {
    if (topic !== previousTopic.current) moreButton.current?.focus({ preventScroll: true })
    previousTopic.current = topic
  }, [topic])
  useEffect(() => {
    const root = viewport.current
    root?.scrollTo({ top: 0, left: root.scrollLeft, behavior: 'instant' })
  }, [year, month, day, category, topic])
  useEffect(() => {
    const root = viewport.current, header = headers.current[country]
    if (root && header) root.scrollTo({ left: Math.max(0, header.offsetLeft - 25), behavior: animated ? 'smooth' : 'instant' })
  }, [country, year, month, day, category, topic, animated, countryOrder, hiddenCountries])
  useEffect(() => {
    if (!locatedEvent || blocked) return
    const timer = setTimeout(() => {
      const card = [...(viewport.current?.querySelectorAll<HTMLElement>('[data-event-id]') ?? [])]
        .find(node => node.dataset.eventId === locatedEvent)
      card?.scrollIntoView({ block: 'center', inline: 'center', behavior: animated ? 'smooth' : 'instant' })
      card?.querySelector<HTMLElement>('.event-title-button')?.focus({ preventScroll: true })
    }, animated ? 750 : 50)
    return () => clearTimeout(timer)
  }, [locatedEvent, blocked, animated])
  function startDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || event.button !== 0 || (event.target as HTMLElement).closest('button,a,article')) return
    const root = viewport.current!
    drag.current = { x: event.clientX, y: event.clientY, left: root.scrollLeft, top: root.scrollTop }
    root.setPointerCapture(event.pointerId)
    setDragging(true)
  }
  function pan(event: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current || !viewport.current) return
    viewport.current.scrollLeft = drag.current.left + drag.current.x - event.clientX
    viewport.current.scrollTop = drag.current.top + drag.current.y - event.clientY
  }
  function stopDrag() { drag.current = null; setDragging(false) }
  return <div className="workspace">
    <YearRuler year={year} select={selectYear} animated={animated} month={month} day={day}
      changeMonth={changeMonth} changeDay={changeDay} blocked={blocked} pause={() => setPlaying(false)} />
    <main className="chronicle-scene" id="chronicle" aria-label={`${formatYear(year)}年各国历史事件轴${topic ? `，筛选${topicLabel(topic)}` : ''}`}>
      <Atmosphere active={animated && !blocked} theme={year === 1945 ? 'dawn' : era.theme} />
      <div className={`scene-toolbar ${focusOpen ? 'focus-open' : ''} ${topicMenuOpen ? 'topic-open' : ''}`}>
        <div className="category-area"><div className="category-filters" aria-label="事件分类">{categories.map(value => <Fragment key={value}><button
          className={category === value ? 'active' : ''} aria-pressed={category === value} onClick={() => setCategory(value)}>
          {value === '全部' ? '全部事件' : value}{value === category && <span>{String(visibleItems.length).padStart(2, '0')}</span>}
        </button>{value === '全部' && <button ref={moreButton} className={`topic-more ${topic || topicMenuOpen ? 'active' : ''}`}
          onClick={() => { setFocusOpen(false); setTopicMenuOpen(!topicMenuOpen); setPlaying(false) }} aria-label="更多事件标签"
          aria-haspopup="dialog" aria-expanded={topicMenuOpen}><Tag size={11} />更多{topic && <i />}</button>}
          {value === '全部' && topic && <button className="active-topic-filter" onClick={() => chooseTopic('')} aria-label="清除标签筛选" title={`清除${topicLabel(topic)}筛选`}>
            {topicLabel(topic)}<X size={11} /></button>}</Fragment>)}</div>
        {topicMenuOpen && <TopicPicker selected={topic} candidates={candidates} country={country} close={closeTopicMenu} choose={id => { chooseTopic(id); closeTopicMenu(); moreButton.current?.focus({ preventScroll: true }) }} />}</div>
        <div className="scene-tools">
          <div className="focus-area">
            <button ref={focusButton} className={`focus-trigger ${focusOpen || focusCustom ? 'active' : ''}`}
              onClick={() => { setTopicMenuOpen(false); setPlaying(false); setFocusOpen(!focusOpen) }}
              aria-label="选择并排序国家" aria-haspopup="dialog" aria-expanded={focusOpen}>
              <Crosshair size={15} /><span>聚焦</span>
            </button>
            {focusOpen && <div className="country-focus" ref={focusPanel} role="dialog" aria-label="选择并排序国家">
              <div className="country-focus-top"><span><Crosshair size={13} />聚焦国家</span>
                <button className="icon-button" aria-label="关闭聚焦设置" onClick={() => { setFocusOpen(false); focusButton.current?.focus({ preventScroll: true }) }}><X size={15} /></button></div>
              <p className="country-focus-hint">默认按与中国关联度排序；勾选要显示的国家，用箭头调整顺序。</p>
              <ol className="country-focus-list">{countryOrder.map((id, index) => {
                const visible = !hiddenCountries.includes(id)
                return <li key={id} className={visible ? '' : 'is-hidden'}>
                  <label>
                    <input type="checkbox" checked={visible} disabled={visible && visibleCountries.length === 1}
                      onChange={() => toggleCountry(id)} aria-label={`显示${countryName(id, year)}`} />
                    <span>{countryName(id, year)}<small>{english[id]}</small></span>
                  </label>
                  <div className="country-order-controls">
                    <button type="button" aria-label={`上移${countryName(id, year)}`} disabled={index === 0}
                      onClick={() => moveCountry(id, -1)}><ChevronUp size={12} /></button>
                    <button type="button" aria-label={`下移${countryName(id, year)}`} disabled={index === countryOrder.length - 1}
                      onClick={() => moveCountry(id, 1)}><ChevronDown size={12} /></button>
                  </div>
                </li>
              })}</ol>
              <div className="country-focus-actions">
                <button onClick={() => setHiddenCountries([])}>全部显示</button>
                <button onClick={resetFocus}>恢复默认</button>
              </div>
              <p className="country-focus-count">{visibleCountries.length} / {countryOrder.length} 个国家</p>
            </div>}
          </div>
          <button className={animated ? 'active' : ''} onClick={() => setAnimated(!animated)} aria-label="动态效果" aria-pressed={animated}><Sparkles size={14} /><span>动效</span></button>
        </div>
      </div>
      <div className={`scene-viewport ${dragging ? 'is-dragging' : ''}`} ref={viewport}
        onPointerDown={startDrag} onPointerMove={pan} onPointerUp={stopDrag} onPointerCancel={stopDrag}>
        <div className="country-axis" aria-label="同期区域">
          {visibleCountries.map(id => {
            const count = items.filter(item => item.country === id).length
            return <motion.div key={id} layout="position" ref={node => { headers.current[id] = node }}
              transition={{ type: 'spring', stiffness: 240, damping: 29 }}
              className={`country-heading ${id === 'china' ? 'home-country' : ''} ${country === id ? 'focused-country' : ''}`} data-country={id}>
              <button className="country-select" onClick={() => setCountry(id)} aria-pressed={country === id}>
                <span className="country-symbol">{id === 'china' ? <Landmark size={23} strokeWidth={1} /> : <Shield size={21} strokeWidth={1} />}</span>
                <span><strong>{countryName(id, year)}</strong><small>{english[id]}</small></span>
              </button>
              <span className="country-number" title={`${count} 条事件`}>{count}</span>
              <i className="header-pin" aria-hidden="true" />
            </motion.div>
          })}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={sceneKey} className={`event-landscape ${hasDailyArchive ? 'daily-landscape' : ''}`} data-year={year} data-month={month ?? ''} data-day={day ?? ''} data-topic={topic}
            initial={animated ? { opacity: 0, y: 28, filter: 'blur(5px)' } : false}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: animated ? -15 : 0, filter: animated ? 'blur(4px)' : 'blur(0px)' }}
            transition={{ duration: animated ? .32 : 0 }}>
            {visibleCountries.map((id, column) => {
              const ordered = items.filter(item => item.country === id).sort((a, b) => dateOrder(a) - dateOrder(b))
              return <div key={id} className={`event-track ${id === 'china' ? 'china-track' : ''}`}
                data-country={id}>
                <div className="track-rail" aria-hidden="true"><span className="track-light" /></div>
                <ol className="track-events">
                  {ordered.map((item, index) => {
                    const undated = item.precision === 'month'
                    const isNewDate = hasDailyArchive && (index === 0 || ordered[index - 1].month !== item.month ||
                      eventDisplayDay(ordered[index - 1]) !== eventDisplayDay(item) || (ordered[index - 1].precision === 'month') !== undated ||
                      (undated && undatedPeriod(ordered[index - 1]) !== undatedPeriod(item)))
                    return <motion.li key={item.id} className={`track-event ${index % 2 ? 'offset-event' : ''} ${isNewDate ? 'new-date' : ''}`}
                    data-display-day={eventDisplayDay(item)} data-date-precision={item.precision}
                    style={{ marginTop: isNewDate ? 47 : index === 0 ? 14 + (item.month - 1) * 5 : 23 + Math.min(ordered[index].month - ordered[index - 1].month, 3) * 10 }}
                    initial={animated ? { opacity: 0, x: -16, y: 14 } : false}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: animated ? column * .03 + Math.min(index, 5) * .055 : 0, duration: animated ? .4 : 0 }}>
                    {isNewDate && <div className={`date-pin ${undated ? 'undated-pin' : ''}`}><time>{undated ? `${String(item.month).padStart(2, '0')} / ${undatedPeriod(item)} · 未定日` : `${String(item.month).padStart(2, '0')} . ${String(day && day > 0 ? day : eventDay(item)).padStart(2, '0')}`}</time><i /></div>}
                    <span className="event-connector" aria-hidden="true"><i /><b /></span>
                    <span className="event-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    {renderEvent(item, index)}
                  </motion.li>})}
                </ol>
                {!ordered.length && <div className="quiet-period"><span className="empty-node" /><p>{id === activeTopic?.country ? `当前条件下暂无“${topicLabel(topic)}”记录` : day !== null ? day === -1 ? '暂无月级活动记载' : '未收录这一天的具体活动' : month !== null ? '这个月暂无收录' : category === '全部' ? '这一年暂无收录' : `暂无${category}事件`}</p>
                  {hasDailyArchive && <small>未收录不代表没有发生</small>}
                  {id === activeTopic?.country && <button onClick={() => chooseTopic('')}>清除标签筛选<ArrowRight size={12} /></button>}
                  {category !== '全部' && <button onClick={() => setCategory('全部')}>查看全部<ArrowRight size={12} /></button>}
                </div>}
                <div className="track-end" aria-hidden="true"><i /><span>{formatYear(year)} / {String(ordered.length).padStart(2, '0')}</span></div>
              </div>
            })}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="scene-footer">
        <div className="transport">
          <button className="icon-button" onClick={() => selectYear(knownYears[yearIndex - 1])} disabled={yearIndex === 0} aria-label="上一个年份"><ChevronLeft size={16} /></button>
          <span className="transport-year" aria-live="polite">{formatYear(year)}<small>{month ? `${String(month).padStart(2, '0')}${day && day > 0 ? ` / ${String(day).padStart(2, '0')}` : ''}` : year < 0 ? 'BCE' : 'CE'}</small></span>
          <button className="icon-button" onClick={() => selectYear(knownYears[yearIndex + 1])} disabled={yearIndex === knownYears.length - 1} aria-label="下一个年份"><ChevronRight size={16} /></button>
          <span className="transport-divider" />
          <button className={`roam-button ${playing ? 'playing' : ''}`} onClick={() => setPlaying(!playing)} aria-label={playing ? '暂停时间漫游' : '开始时间漫游'} aria-pressed={playing}>
            {playing ? <Pause size={13} /> : <Play size={13} />}<span>{hasDailyArchive ? '逐日漫游' : '时间漫游'}</span>
          </button>
          {playing && !blocked && <motion.i key={`${year}-${day}`} className="roam-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5.5, ease: 'linear' }} />}
        </div>
        <span className="scene-hint"><Move size={12} />拖动空白处或横向滚动查看国家 · 点击事件展开</span>
        <div className="world-controls">
          <button className="icon-button" aria-label="向左探索文明" onClick={() => viewport.current?.scrollBy({ left: -330, behavior: animated ? 'smooth' : 'instant' })}><ChevronLeft size={13} /></button>
          <button className="icon-button" aria-label="向右探索文明" onClick={() => viewport.current?.scrollBy({ left: 330, behavior: animated ? 'smooth' : 'instant' })}><ChevronRight size={13} /></button>
        </div>
        <button className="source-trigger" onClick={openSources}><BookOpen size={13} /><span>史料</span></button>
      </div>
    </main>
  </div>
}
