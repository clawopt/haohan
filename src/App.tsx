import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, LayoutGroup, MotionConfig, motion, useIsPresent, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, BookOpen,
  Bookmark, Check, Compass, Crosshair, ExternalLink,
  Github, Globe2, Landmark, Search, Sparkles, Star,
  Tag, Users, X,
} from 'lucide-react'
import {
  countriesFor, dateOrder, entities, eras, eventDay, eventDisplayDay, events, formatYear, images, onDay, personNames, personTextParts, plainText, sources, topicLabel, topicTags,
} from './data'
import type { Category, CountryId, Entity, Era, HistoryEvent } from './data'
import ChronicleScene, { countryName, knownYears } from './ChronicleScene'
import { archiveHref, eventPath, isPlainClick, personPath } from './site'
import { nearestTopicYear, topicYears } from './topicTimeline'

type Overlay = 'search' | 'people' | 'saved' | 'eras' | 'sources' | 'about' | HistoryEvent | null
const eraForYear = (year: number) => year >= 1937 && year <= 1945 ? eras.find(item => item.id === 'war') : eras.find(item => item.year === year)

function useFocusScope(active: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  const closeRef = useRef(close)
  closeRef.current = close
  useEffect(() => {
    if (!active) return
    const previous = document.activeElement as HTMLElement | null
    const root = ref.current
    const selector = 'button:not([disabled]), a[href], input, select, [tabindex="0"]'
    const preferred = root?.querySelector<HTMLElement>('[data-autofocus]') ?? root?.querySelector<HTMLElement>(selector)
    preferred?.focus()
    function keyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopImmediatePropagation()
        closeRef.current()
      }
      if (event.key !== 'Tab' || !root) return
      const focusable = [...root.querySelectorAll<HTMLElement>(selector)].filter(el => el.getClientRects().length)
      const first = focusable[0], last = focusable[focusable.length - 1]
      if (!first) { event.preventDefault(); return }
      if (event.shiftKey && (document.activeElement === first || !root.contains(document.activeElement))) {
        event.preventDefault(); last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !root.contains(document.activeElement))) {
        event.preventDefault(); first.focus()
      }
    }
    document.addEventListener('keydown', keyboard, true)
    return () => {
      document.removeEventListener('keydown', keyboard, true)
      if (previous?.isConnected) previous.focus()
    }
  }, [active])
  return ref
}

function Modal({ children, title, close, wide = false, suspended = false, layoutId }: {
  children: ReactNode; title: string; close: () => void; wide?: boolean; suspended?: boolean; layoutId?: string
}) {
  const present = useIsPresent()
  const ref = useFocusScope(!suspended && present, close)
  return <motion.div className="modal-backdrop" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div layoutId={layoutId} className={`modal ${wide ? 'modal-wide' : ''}`} ref={ref} role="dialog" aria-modal="true" aria-label={title}
      initial={layoutId ? false : { y: 24, scale: .97 }} animate={{ y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 270, damping: 29 }}
      inert={suspended || !present} onClick={e => e.stopPropagation()}>
      <button className="icon-button modal-close" aria-label="关闭窗口" onClick={close}><X size={20} /></button>
      <div className="modal-scroll">{children}</div>
    </motion.div>
  </motion.div>
}

function InlineText({ text, open }: { text: string; open: (id: string) => void }) {
  return <>{personTextParts(text).map((part, index) => part.personId
    ? <a href={archiveHref(personPath(part.personId))} key={index} className="inline-link"
      onClick={e => { if (isPlainClick(e)) { e.preventDefault(); open(part.personId!) } }}>{part.text}</a>
    : <span key={index}>{part.text}</span>)}</>
}

function EntityLink({ id, open, compact = false }: { id: string; open: (id: string) => void; compact?: boolean }) {
  const item = entities[id]
  if (!item) return null
  if (item.type !== '人物') return <span className={`entity-chip entity-static ${compact ? 'compact' : ''}`}><Landmark size={11} />{item.name}</span>
  return <a className={`entity-chip ${compact ? 'compact' : ''}`} href={archiveHref(personPath(id))}
    onClick={e => { if (isPlainClick(e)) { e.preventDefault(); open(id) } }}>
    <Users size={11} />
    {item.name}<ArrowUpRight size={10} />
  </a>
}

function EventCard({ item, open, openEntity, openTopic, saved, toggleSaved, featured = false, scene = false, animated = true }: {
  item: HistoryEvent; open: (event: HistoryEvent) => void; openEntity: (id: string) => void;
  saved: boolean; toggleSaved: (id: string) => void; featured?: boolean; scene?: boolean; animated?: boolean
  openTopic: (id: string) => void;
}) {
  const [imageFailed, setImageFailed] = useState(false)
  const x = useMotionValue(0), y = useMotionValue(0)
  const rotateX = useSpring(x, { stiffness: 180, damping: 22 })
  const rotateY = useSpring(y, { stiffness: 180, damping: 22 })
  return <motion.article layoutId={scene ? `event-${item.id}` : undefined}
    className={`event-card ${featured ? 'event-featured' : ''}`} data-event-id={item.id}
    style={{ rotateX: animated ? rotateX : 0, rotateY: animated ? rotateY : 0, transformPerspective: 1100 }}
    whileHover={animated ? { y: -5, scale: 1.015 } : undefined}
    onPointerMove={e => {
      if (!animated || e.pointerType !== 'mouse') return
      const rect = e.currentTarget.getBoundingClientRect()
      x.set(-(e.clientY - rect.top - rect.height / 2) / rect.height * 4)
      y.set((e.clientX - rect.left - rect.width / 2) / rect.width * 5)
    }}
    onPointerLeave={() => { x.set(0); y.set(0) }}
    transition={{ type: 'spring', stiffness: 270, damping: 29 }}>
    <span className="card-corner corner-tl" aria-hidden="true" /><span className="card-corner corner-br" aria-hidden="true" />
    {featured && item.image && !imageFailed && <button className="event-image-button" onClick={() => open(item)} aria-label={`查看${item.title}`}>
      <img src={images[item.image]} alt={`${item.title}的历史氛围示意图`} onError={() => setImageFailed(true)} />
      <span className="image-caption">历史氛围示意</span>
      <span className="image-zoom"><ArrowUpRight size={17} /></span>
    </button>}
    <div className="event-body">
      <div className="event-meta"><span className="event-date">{item.date}</span>
        <button className={`save-button ${saved ? 'saved' : ''}`} onClick={() => toggleSaved(item.id)}
          aria-label={`${saved ? '取消典藏' : '典藏'}${item.title}`} aria-pressed={saved}><Bookmark size={13} fill={saved ? 'currentColor' : 'none'} /></button>
      </div>
      <a className="event-title-button" href={archiveHref(eventPath(item.id))} onClick={e => { if (isPlainClick(e)) { e.preventDefault(); open(item) } }}><h3>{item.title}</h3><ArrowUpRight size={15} /></a>
      <p><InlineText text={item.summary} open={openEntity} /></p>
      {item.archive && <div className="activity-coordinate"><span>{item.location}</span><b className={item.precision === 'day' ? 'exact-date' : ''}>{item.precision === 'day' ? '定日' : item.precision === 'range' ? '跨日' : item.precision === 'approximate' ? '约日' : item.precision === 'disputed' ? '待核' : '月级'}</b></div>}
      <div className="event-bottom"><span className={`category-tag category-${item.category}`}><i />{item.category}</span>
        <div className="card-entities">{item.entities.filter(id => id !== item.country).slice(0, featured ? 2 : 1).map(id =>
          <EntityLink key={id} id={id} open={openEntity} compact />)}
          <EntityLink id={item.country} open={openEntity} compact />
        </div>
      </div>
      {item.topicIds.length > 0 && <div className="event-topics" aria-label={`${item.title}的标签`}><Tag size={10} />
        {item.topicIds.slice(0, 2).map(id => <button key={id} onClick={() => openTopic(id)} aria-label={`按${topicLabel(id)}筛选当前事件`}>{topicLabel(id)}</button>)}
        {item.topicIds.length > 2 && <button className="more-card-tags" onClick={() => open(item)} aria-label={`查看${item.title}的全部标签`}>+{item.topicIds.length - 2}</button>}
      </div>}
    </div>
  </motion.article>
}

function EntityWindow({ entity, close }: {
  entity: Entity; close: () => void
}) {
  const present = useIsPresent()
  const ref = useFocusScope(present, close)
  return <motion.div className="entity-backdrop" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div className="entity-window" role="dialog" aria-modal="true" aria-label={`${entity.name}生平`} data-biography-id={entity.id}
      initial={{ x: 55, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 25, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 250, damping: 28 }}
      ref={ref} inert={!present} onClick={e => e.stopPropagation()}>
      <div className="entity-window-top"><span><span className="tiny-diamond" />人物志 / BIOGRAPHY</span>
        <button className="icon-button" aria-label="关闭人物生平" onClick={close}><X size={18} /></button></div>
      <div className="entity-identity"><div className="entity-monogram">{entity.name.replace('·', '').slice(0, 1)}</div>
        <div><span className="eyebrow">{entity.type}</span><h2>{entity.name}</h2><p>{entity.lifespan}</p></div></div>
      <p className="entity-role">{entity.subtitle}</p>
      {!entity.biography?.some(section => section.text === entity.description) &&
        <p className="entity-description">{entity.description}</p>}
      {entity.biographyNote && <p className="biography-note">{entity.biographyNote}</p>}
      <div className="divider-label"><span>生平详述</span><i /></div>
      <article className="person-biography" aria-label={`${entity.name}生平详述`}>
        {entity.biography?.map((section, index) => <section key={index}>
          <div className="biography-section-heading"><h3>{section.title}</h3><span>{section.period}</span></div>
          <p>{section.text}</p>
        </section>)}
      </article>
      {Boolean(entity.biographySources?.length) && <><div className="divider-label"><span>生平资料</span><i /></div>
        <div className="entity-evidence">{entity.biographySources!.map(id => <a key={id} href={sources[id].url} target="_blank" rel="noreferrer"><BookOpen size={12} />{sources[id].name}<ExternalLink size={11} /></a>)}</div></>}
    </motion.div>
  </motion.div>
}

export default function App() {
  const [era, setEra] = useState<Era>(eras.find(item => item.id === 'war')!)
  const [year, setYear] = useState(1937)
  const [month, setMonth] = useState<number | null>(null)
  const [view, setView] = useState<'overview' | 'records'>('overview')
  const [monthPinned, setMonthPinned] = useState(false)
  const [day, setDay] = useState<number | null>(null)
  const [country, setCountry] = useState<CountryId>('china')
  const [category, setCategory] = useState<'全部' | Category>('全部')
  const [topic, setTopic] = useState('')
  const reducedMotion = useReducedMotion()
  const [animated, setAnimated] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [locatedEvent, setLocatedEvent] = useState<string | null>(null)
  const [overlay, setOverlay] = useState<Overlay>(null)
  const [entityId, setEntityId] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [toast, setToast] = useState('')
  const [saved, setSaved] = useState<string[]>([])
  const [savedReady, setSavedReady] = useState(false)
  const [stars, setStars] = useState<number | null>(null)
  useEffect(() => {
    let active = true
    let last = 0
    function loadStars() {
      if (Date.now() - last < 15000) return
      last = Date.now()
      fetch('https://api.github.com/repos/clawopt/haohan', { cache: 'no-store', headers: { Accept: 'application/vnd.github+json' } })
        .then(response => response.ok ? response.json() : null)
        .then(data => { if (active && typeof data?.stargazers_count === 'number') setStars(data.stargazers_count) })
        .catch(() => {})
    }
    function onVisible() { if (document.visibilityState === 'visible') loadStars() }
    loadStars()
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', loadStars)
    return () => {
      active = false
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', loadStars)
    }
  }, [])
  const availableCountries = countriesFor(era, year)
  const navigableYears = topic ? topicYears(topic) : knownYears
  const isWar = era.id === 'war'
  const visualTheme = isWar && year === 1945 ? 'dawn' : era.theme
  const openEntity = (id: string) => { if (entities[id]?.type === '人物') setEntityId(id) }
  const closeOverlay = () => { setOverlay(null); setQuery('') }
  function selectEra(item: Era, newYear = item.year, nextTopic = '') {
    setEra(item); setYear(newYear); setCountry(topicTags[nextTopic]?.country ?? 'china'); setCategory('全部'); setLocatedEvent(null); setTopic(nextTopic)
    setView('overview'); setMonth(null); setDay(null); setMonthPinned(false)
  }
  function selectYear(value: number) {
    if (!navigableYears.includes(value)) return
    const found = eraForYear(value)
    if (!found) return
    const filtered = Boolean(topic) || category !== '全部' || (monthPinned && month !== null)
    if (filtered) {
      // A tag or category is active: changing the year keeps the filtered
      // detailed records instead of dropping back to the annual chronicle.
      setEra(found); setYear(value); setLocatedEvent(null)
      if (topic) setCountry(topicTags[topic]?.country ?? country)
      setView('records')
      if (monthPinned && month !== null) { setMonth(month); setDay(day) }
      else { setMonth(firstMonthFor(value, category, topic)); setDay(null); setMonthPinned(false) }
      return
    }
    selectEra(found, value, '')
  }
  function moveYear(direction: number) {
    const next = navigableYears[navigableYears.indexOf(year) + direction]
    if (next !== undefined) selectYear(next)
  }
  function selectMonth(value: number | null) {
    setMonth(value); setView(value === null ? 'overview' : 'records'); setMonthPinned(value !== null)
    setDay(null); setLocatedEvent(null)
  }
  function firstMonthFor(targetYear: number, targetCategory: '全部' | Category, targetTopic: string) {
    for (let value = 1; value <= 12; value++) {
      if (events.some(event => event.year === targetYear && event.month === value &&
        (targetCategory === '全部' || event.category === targetCategory) &&
        (!targetTopic || event.topicIds.includes(targetTopic)))) return value
    }
    return 1
  }
  function chooseCategory(value: '全部' | Category) {
    setCategory(value)
    // The annual chronicle is only the initial view; any category tab,
    // including "全部事件", opens that year's records. A selected month stays.
    if (view === 'overview' || month === null || !monthPinned) {
      setMonth(firstMonthFor(year, value, topic)); setDay(null); setView('records'); setMonthPinned(false)
    }
    setPlaying(false)
  }
  function exploreCategory(id: CountryId, value: Category) {
    setView('records'); setMonth(firstMonthFor(year, value, topic)); setDay(null); setMonthPinned(false); setCountry(id); setCategory(value)
    setPlaying(false); setLocatedEvent(null)
  }
  function exploreJanuary() {
    selectMonth(firstMonthFor(year, '全部', topic)); setCategory('全部'); setCountry(topicTags[topic]?.country ?? 'china'); setPlaying(false)
  }
  function exploreYear() {
    setView('records'); setMonth(firstMonthFor(year, category, topic)); setDay(null); setMonthPinned(false); setPlaying(false); setLocatedEvent(null)
  }
  function toggleSaved(id: string) {
    setSaved(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id])
    setToast(saved.includes(id) ? '已从典藏中移除' : '已收入典藏档案')
  }
  function openEvent(item: HistoryEvent) { setOverlay(item); setEntityId(null) }
  function openTopic(id: string) {
    if (id) {
      const nextYear = nearestTopicYear(id, year)
      const nextEra = nextYear !== undefined ? eraForYear(nextYear) : undefined
      if (!nextEra || nextYear === undefined) return
      const keepMonth = month, keepDay = day
      const keepPinned = monthPinned && month !== null
      selectEra(nextEra, nextYear, id)
      // A tag opens the detailed events, not the annual chronicle. Keep an
      // explicitly chosen month; otherwise start at its first month.
      setView('records')
      if (keepPinned) { setMonth(keepMonth); setDay(keepDay); setMonthPinned(true) }
      else { setMonth(firstMonthFor(nextYear, '全部', id)); setDay(null); setMonthPinned(false) }
    } else setTopic('')
    setPlaying(false); setLocatedEvent(null)
    setEntityId(null); closeOverlay()
  }
  function locateEvent(item: HistoryEvent) {
    const nextEra = eraForYear(item.year)
    if (!nextEra) return
    selectEra(nextEra, item.year, item.topicIds.includes(topic) ? topic : '')
    setView('records'); setCountry(item.country)
    if (item.archive) { setMonth(item.month); setDay(eventDisplayDay(item)); setMonthPinned(true) }
    setLocatedEvent(item.id); closeOverlay()
  }
  useEffect(() => {
    try {
      const data: unknown = JSON.parse(localStorage.getItem('haohan-saved') ?? '[]')
      setSaved(Array.isArray(data) ? data.filter((id): id is string => typeof id === 'string' && events.some(e => e.id === id)) : [])
    } catch { /* Storage is optional. */ }
    setSavedReady(true)
    const params = new URLSearchParams(window.location.search)
    const item = events.find(event => event.id === params.get('event'))
    if (item) {
      selectYear(item.year); setCountry(item.country)
      setView('records')
      if (item.archive) { setMonth(item.month); setDay(eventDisplayDay(item)); setMonthPinned(true) }
      setLocatedEvent(item.id); openEvent(item)
    } else {
      const requestedYear = Number(params.get('year'))
      const requestedTopic = params.get('topic') ?? ''
      const validTopic = topicYears(requestedTopic).length ? requestedTopic : ''
      const targetYear = knownYears.includes(requestedYear) ? requestedYear : year
      const resolvedYear = validTopic ? nearestTopicYear(validTopic, targetYear)! : targetYear
      const targetEra = eraForYear(resolvedYear)
      if (targetEra && ((params.has('year') && knownYears.includes(requestedYear)) || validTopic)) {
        selectEra(targetEra, resolvedYear, validTopic)
        const targetMonth = Number(params.get('month'))
        const targetCategory = params.get('category') as Category | null
        const resolvedCategory = targetCategory && ['政治', '军事', '经济', '文化', '社会', '外交', '战役'].includes(targetCategory) ? targetCategory : '全部'
        if (resolvedYear === targetYear && params.has('month') && targetMonth >= 1 && targetMonth <= 12) selectMonth(targetMonth)
        else if (resolvedYear === targetYear && params.get('view') === 'records') {
          setView('records')
          setMonth(firstMonthFor(resolvedYear, resolvedCategory, validTopic))
          setMonthPinned(false)
        }
        const targetCountry = params.get('country') as CountryId | null
        if (targetCountry && countriesFor(targetEra, resolvedYear).includes(targetCountry)) setCountry(targetCountry)
        if (resolvedYear === targetYear && resolvedCategory !== '全部') setCategory(resolvedCategory)
      }
      const person = params.get('person')
      if (person) openEntity(person)
    }
  }, [])
  useEffect(() => {
    if (!savedReady) return
    try { localStorage.setItem('haohan-saved', JSON.stringify(saved)) } catch { /* Private browsing may disable local storage. */ }
  }, [saved, savedReady])
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2500)
    return () => clearTimeout(timer)
  }, [toast])
  useEffect(() => { if (reducedMotion) setAnimated(false) }, [reducedMotion])
  useEffect(() => {
    if (!playing || overlay || entityId) return
    const timer = setTimeout(() => {
      if (year === 1937 && month === 1) {
        if (day === null || day === -1) setDay(1)
        else if (day < 31) setDay(day + 1)
        else setPlaying(false)
        return
      }
      const next = navigableYears[navigableYears.indexOf(year) + 1]
      if (next !== undefined) selectYear(next)
      else setPlaying(false)
    }, 5500)
    return () => clearTimeout(timer)
  }, [playing, year, month, day, overlay, entityId, topic])
  useEffect(() => {
    function keyboard(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (!entityId) setOverlay('search')
      }
      const target = event.target as HTMLElement
      if (overlay || entityId || ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(target.tagName)) return
      if (event.key === 'ArrowLeft') { event.preventDefault(); moveYear(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); moveYear(1) }
    }
    document.addEventListener('keydown', keyboard)
    return () => document.removeEventListener('keydown', keyboard)
  })
  const results = useMemo(() => {
    const value = query.trim().toLocaleLowerCase()
    if (!value) return []
    return events.filter(item => `${item.date} ${item.title} ${item.location ?? ''} ${item.category} ${item.summary} ${plainText(item.detail)} ${item.entities.map(id => entities[id]?.name).join(' ')} ${item.topicIds.map(topicLabel).join(' ')}`.toLocaleLowerCase().includes(value))
      .sort((a, b) => a.year - b.year || dateOrder(a) - dateOrder(b)).slice(0, 60)
  }, [query])
  const personResults = Object.values(entities).filter(item => item.type === '人物' && (!query
    || `${item.name}${item.subtitle}`.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    || Object.entries(personNames).some(([name, id]) => id === item.id && name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))))
  const detailEvent = overlay && typeof overlay === 'object' ? overlay : null
  const detailDay = detailEvent && year === detailEvent.year && month === detailEvent.month && day && day > 0 && onDay(detailEvent, day) ? day : detailEvent ? eventDay(detailEvent) : 0
  const sameTime = detailEvent ? detailEvent.archive ? events.filter(item => item.id !== detailEvent.id && item.year === detailEvent.year && item.month === detailEvent.month &&
    (detailEvent.precision === 'month' ? item.precision === 'month' : item.precision !== 'month' && onDay(item, detailDay)))
    .sort((a, b) => (a.country === detailEvent.country ? 0 : 1) - (b.country === detailEvent.country ? 0 : 1) || dateOrder(a) - dateOrder(b)).slice(0, 6) : events.filter(item => item.year === detailEvent.year && item.country !== detailEvent.country)
    .sort((a, b) => Math.abs(a.month - detailEvent.month) - Math.abs(b.month - detailEvent.month))
    .filter((item, i, all) => all.findIndex(e => e.country === item.country) === i).slice(0, 3) : []
  return <MotionConfig reducedMotion={animated ? 'never' : 'always'} transition={animated ? { duration: .3 } : { duration: 0 }}><LayoutGroup>
    <div className={`app theme-${visualTheme} ${animated ? '' : 'motion-off'}`} inert={Boolean(overlay || entityId)}>
      <header className="topbar">
        <a className="brand" href={archiveHref('/')} onClick={e => { if (isPlainClick(e)) { e.preventDefault(); setTopic(''); selectEra(eras.find(e => e.id === 'war')!) } }} aria-label="浩汉首页">
          <span className="brand-mark"><Landmark size={24} strokeWidth={1.2} /><i /></span>
          <h1 className="brand-name">浩汉<small>HAO HAN</small></h1>
          <span className="brand-divider" /><span className="brand-tagline">在时间中，读懂世界</span>
        </a>
        <nav className="top-nav" aria-label="主导航">
          <button className="active" onClick={() => { closeOverlay(); document.querySelector('.scene-viewport')?.scrollTo({ top: 0, behavior: animated ? 'smooth' : 'instant' }) }}><BookOpen size={15} />历史长卷</button>
          <button onClick={() => { setQuery(''); setOverlay('people') }}><Users size={15} />人物志</button>
          <button onClick={() => setOverlay('saved')}><Bookmark size={14} />典藏档案{saved.length > 0 && <span className="nav-count">{saved.length}</span>}</button>
        </nav>
        <button className="search-trigger" onClick={() => setOverlay('search')}><Search size={15} /><span>搜索历史、人物</span><kbd>⌘ K</kbd></button>
        <a className="github-link" href="https://github.com/clawopt/haohan" target="_blank" rel="noreferrer"
          aria-label={`在 GitHub 打开浩汉项目${stars === null ? '' : `，${stars} 个 Star`}`}>
          <Github size={16} strokeWidth={1.4} />
          {stars !== null && <span className="github-stars"><Star size={10} strokeWidth={1.6} />{stars.toLocaleString('en-US')}</span>}
        </a>
        <button className="about-button icon-button" onClick={() => setOverlay('about')} aria-label="关于浩汉"><Compass size={22} strokeWidth={1.2} /></button>
      </header>

      <ChronicleScene year={year} era={era} countries={availableCountries} country={country} setCountry={setCountry}
        topic={topic} chooseTopic={openTopic}
        month={month} day={day} setMonth={selectMonth} setDay={setDay}
        overview={view === 'overview'} exploreCategory={exploreCategory} exploreJanuary={exploreJanuary} exploreYear={exploreYear}
        category={category} setCategory={chooseCategory} selectYear={selectYear} animated={animated} setAnimated={setAnimated}
        playing={playing} setPlaying={setPlaying} blocked={Boolean(overlay || entityId)}
        openSources={() => setOverlay('sources')} locatedEvent={locatedEvent}
        renderEvent={item => <EventCard item={item} open={openEvent} openEntity={openEntity} openTopic={openTopic} saved={saved.includes(item.id)}
          toggleSaved={toggleSaved} featured={item.country === 'china' && Boolean(item.image && item.featured)} scene animated={animated} />} />
    </div>

    <AnimatePresence mode="wait">
    {detailEvent && <Modal key={detailEvent.id} title={detailEvent.title} close={closeOverlay} suspended={Boolean(entityId)} layoutId={`event-${detailEvent.id}`}>
      <div className="modal-eyebrow"><BookOpen size={15} />{detailEvent.archive ? '活动档案' : '历史事件档案'}<span>NO. {String(events.indexOf(detailEvent) + 1).padStart(3, '0')}</span></div>
      <div className="detail-category"><span className={`category-tag category-${detailEvent.category}`}><i />{detailEvent.category}</span><span>{detailEvent.date}</span></div>
      <h2 className="modal-title">{detailEvent.title}</h2><p className="detail-summary">{detailEvent.summary}</p>
      <div className="detail-coordinate"><div><span>时间</span><b>{detailEvent.date}</b></div><div><span>区域</span><b>{countryName(detailEvent.country, detailEvent.year)}</b></div><div><span>事件类型</span><b>{detailEvent.category}</b></div></div>
      {detailEvent.location && <div className="detail-location"><Crosshair size={14} />{detailEvent.location}</div>}
      <div className="detail-text"><InlineText text={detailEvent.detail} open={openEntity} /></div>
      {detailEvent.evidenceNote && <div className="evidence-note"><span>{detailEvent.precision === 'day' ? '日级记录' : detailEvent.precision === 'range' ? '跨日记录' : detailEvent.precision === 'approximate' ? '约日记录' : detailEvent.precision === 'disputed' ? '日期待核' : '月级记录'} · 日期依据</span><p>{detailEvent.evidenceNote}</p></div>}
      {detailEvent.topicIds.length > 0 && <><div className="divider-label"><span>事件标签 · 筛选当前页面</span><i /></div>
        <div className="detail-topics">{detailEvent.topicIds.map(id => <button key={id} onClick={() => openTopic(id)}><Tag size={11} />{topicLabel(id)}<ArrowRight size={11} /></button>)}</div></>}
      {detailEvent.entities.some(id => entities[id]?.type === '人物') && <><div className="divider-label"><span>历史中的人物</span><i /></div><div className="detail-entities">{detailEvent.entities.filter(id => entities[id]?.type === '人物').map(id => <EntityLink key={id} id={id} open={openEntity} />)}</div></>}
      {sameTime.length > 0 && <div className="detail-same-time"><div className="divider-label"><span>{detailEvent.archive ? detailEvent.precision === 'month' ? '同月其他未定日活动' : detailEvent.precision === 'approximate' || detailEvent.precision === 'disputed' ? '所记日期附近的其他活动' : `1月${detailDay}日其他活动与跨日进程 · 各地日历` : `与此同时 · ${formatYear(detailEvent.year)}年的世界`}</span><i /></div>
        {sameTime.map(item => <button key={item.id} onClick={() => openEvent(item)}><span>{countryName(item.country, item.year)}</span><div><b>{item.title}</b><small>{item.date}</small></div><ArrowUpRight size={15} /></button>)}</div>}
      <div className="detail-source">{[...new Set([detailEvent.source, ...(detailEvent.references ?? [])])].map(id => <a key={id} href={sources[id].url} target="_blank" rel="noreferrer"><BookOpen size={13} />{sources[id].name}<ExternalLink size={11} /></a>)}</div>
      <div className="detail-actions"><button className={`primary-button ${saved.includes(detailEvent.id) ? 'is-saved' : ''}`} onClick={() => toggleSaved(detailEvent.id)}>{saved.includes(detailEvent.id) ? <Check size={15} /> : <Bookmark size={15} />}{saved.includes(detailEvent.id) ? '已收入典藏' : '收入典藏档案'}</button>
        <a className="text-button" href={archiveHref(eventPath(detailEvent.id))}>阅读独立档案<ExternalLink size={14} /></a>
        <button className="text-button" onClick={() => locateEvent(detailEvent)}>定位到历史长卷<ArrowRight size={14} /></button></div>
    </Modal>}

    {overlay === 'search' && <Modal key="search" title="搜索历史" close={closeOverlay} wide suspended={Boolean(entityId)}>
      <div className="modal-eyebrow"><Search size={15} />寻迹历史</div><h2 className="modal-title">每个名字，都有回响。</h2>
      <div className="modal-search"><Search size={19} /><input data-autofocus placeholder="搜索事件、人物、国家或年份…" value={query} onChange={e => setQuery(e.target.value)} aria-label="历史搜索" />{query && <button className="icon-button" onClick={() => setQuery('')} aria-label="清空搜索"><X size={16} /></button>}</div>
      {!query.trim() ? <><p className="muted-label">从这些记忆开始</p><div className="search-suggestions">{['1937年1月', '周恩来', '重庆电力炼钢厂', '高台', '文摘', '1945'].map(value => <button key={value} onClick={() => setQuery(value)}>{value}<ArrowUpRight size={12} /></button>)}</div><div className="search-hint"><Compass size={36} strokeWidth={1} /><p>跨越时间，寻找你想了解的那段历史。</p><small>已收录 {events.length} 条事件与 {Object.keys(entities).length} 份人物 / 组织 / 文明档案</small></div></> :
        <><p className="muted-label">{results.length ? `找到 ${results.length}${results.length === 60 ? '+' : ''} 条相关活动` : '暂无匹配的事件，试试另一个关键词'}</p><div className="search-results">{results.map(item => <button key={item.id} onClick={() => openEvent(item)}><span>{formatYear(item.year)}<small>{countryName(item.country, item.year)}</small></span><div><b>{item.title}</b><p>{item.date}</p></div><ArrowUpRight size={16} /></button>)}</div></>}
    </Modal>}

    {overlay === 'people' && <Modal key="people" title="人物志" close={closeOverlay} wide suspended={Boolean(entityId)}>
      <div className="modal-eyebrow"><Users size={15} />人物志 / LIVES IN HISTORY</div><h2 className="modal-title">时代里的每一个名字。</h2><p className="modal-description">点击人物，阅读早年、主要经历与晚年生活。</p>
      <div className="modal-search"><Search size={17} /><input data-autofocus placeholder="寻找历史人物…" aria-label="搜索人物" value={query} onChange={e => setQuery(e.target.value)} /></div>
      <div className="people-grid">{personResults.map(item => <button key={item.id} onClick={() => openEntity(item.id)}><span className="person-character">{item.name.slice(0, 1)}</span><div><b>{item.name}</b><small>{item.lifespan}</small><p>{item.subtitle}</p></div><ArrowUpRight size={14} /></button>)}</div>
      {!personResults.length && <p className="muted-label">没有找到这个名字，请尝试其他关键词。</p>}
    </Modal>}

    {overlay === 'saved' && <Modal key="saved" title="典藏档案" close={closeOverlay} wide suspended={Boolean(entityId)}>
      <div className="modal-eyebrow"><Bookmark size={15} />典藏档案 / YOUR COLLECTION</div><h2 className="modal-title">把历史的片刻，留下。</h2><p className="modal-description">共典藏 {saved.length} 条活动，保存在当前浏览器。</p>
      {saved.length ? <div className="saved-grid">{events.filter(item => saved.includes(item.id)).map(item => <EventCard key={item.id} item={item} open={openEvent} openEntity={openEntity} openTopic={openTopic} saved toggleSaved={toggleSaved} />)}</div> :
        <div className="collection-empty"><Bookmark size={42} strokeWidth={1} /><h3>长卷里，总有值得铭记的一页。</h3><p>点击活动上的书签，将它收入你的典藏。</p><button className="primary-button" onClick={closeOverlay}>继续探索历史<ArrowRight size={15} /></button></div>}
    </Modal>}

    {overlay === 'eras' && <Modal key="eras" title="穿越时代" close={closeOverlay} wide suspended={Boolean(entityId)}>
      <div className="modal-eyebrow"><Compass size={16} />五千年 · 一卷山河</div><h2 className="modal-title">选择一个时代，走进历史。</h2><p className="modal-description">抗战篇章收录逐年大事记，其他时代提供代表性节点与同期世界。</p>
      <div className="era-map">{eras.map(item => {
        const choices = navigableYears.filter(value => eraForYear(value)?.id === item.id)
        return <button key={item.id} className={`era-map-card theme-${item.theme} ${era.id === item.id ? 'active' : ''}`}
          disabled={!choices.length} onClick={() => { selectYear(choices[0]); closeOverlay() }}>
          <span className="tiny-diamond" /><strong>{item.name}</strong><small>{item.range}</small>
          <span>{item.id === 'war' ? '1937—1945 · 抗战篇章' : item.subtitle.slice(0, 16) + '…'}</span><ArrowUpRight size={15} />
        </button>
      })}</div>
    </Modal>}

    {overlay === 'sources' && <Modal key="sources" title="史料与纪年说明" close={closeOverlay} suspended={Boolean(entityId)}>
      <div className="modal-eyebrow"><BookOpen size={15} />阅读这卷历史</div><h2 className="modal-title">史料与纪年说明</h2>
      <div className="source-notes"><p>抗战篇章重点呈现 1937—1945 年全面抗战。中国人民的抗日战争自 1931 年起持续十四年；八年指全面抗战阶段。</p><p>时间轴默认按年排列，各国事件在同一年内按开始月份及已知日期排序。时间尺的断点表示尚未收录的年份，刻度间距不是实际时间跨度。近代事件尽可能标注公历日期。跨年战役按开始年份编排；有日期分歧时保留月份范围。德国投降标明生效时刻。</p><p>远古年代使用“约”与世纪，不把考古分期写成精确日。其他朝代目前是代表性节点，并非完整年表。同期概况在详情中明确标注。</p><p>顶部海外文明顺序按本 Demo 的同期事件关联编排，不代表国力排名；中国固定在第一列。国家、朝代、政权的存续会分别解释。</p><p>页面插画用于营造历史氛围，由 AI 生成，均不是史料照片。每则事件详情提供延伸阅读的史料入口，部分细节仍需进一步逐条校核。</p></div>
      <div className="evidence-note"><span>1937年1月 · 日级样本</span><p>以书信、文电、会谈、行程、出版及生产活动为单位收录。定日、跨日、约日、待核、月级分别标注；刊出日不替代写作日，发令日不替代到达日，经费安排不等于实际到账。空白日期表示本样本未收录。各国沿用当地日历，尚未统一到同一时区。</p><p>现有记录以西安善后和红军相关政治军事史料较密，经济、文化、普通民众及其他区域覆盖仍有缺口。单篇资料支持的条目提供直接出处，不能理解为已完成多源逐日穷尽核验。</p></div>
      <div className="divider-label"><span>参考与延伸阅读</span><i /></div><div className="sources-list">{Object.entries(sources).map(([id, item]) => <a key={id} href={item.url} target="_blank" rel="noreferrer"><BookOpen size={14} /><span>{item.name}</span><ExternalLink size={14} /></a>)}</div>
    </Modal>}

    {overlay === 'about' && <Modal key="about" title="关于浩汉" close={closeOverlay} suspended={Boolean(entityId)}>
      <div className="about-compass"><Compass size={72} strokeWidth={0.7} /></div><h2 className="about-title">浩汉</h2><p className="about-slogan">在时间中，读懂世界。</p><p className="modal-description about-description">一条中国历史的时间长卷，一幅同一时刻的世界。沿年代前行，跨文明眺望；走近每一个事件，也走近历史中的每一个人。</p>
      <div className="about-features"><span><Globe2 size={17} />时间 × 文明</span><span><Users size={17} />人物生平</span><span><Sparkles size={17} />时代色彩</span></div>
      <p className="about-archive-links"><a href={archiveHref('/about/')}>关于与内容编写原则</a><a href={archiveHref('/sources/')}>史料与核验说明</a></p>
      <button className="primary-button about-start" onClick={closeOverlay}>继续我的历史旅程<ArrowRight size={15} /></button>
    </Modal>}

    </AnimatePresence>
    <AnimatePresence>
    {entityId && entities[entityId]?.type === '人物' && <EntityWindow key={entityId} entity={entities[entityId]} close={() => setEntityId(null)} />}
    </AnimatePresence>
    {toast && <div className="toast" role="status"><Check size={15} />{toast}</div>}
    <a className="skip-link" href="#chronicle">浩汉历史长卷</a>
  </LayoutGroup></MotionConfig>
}
