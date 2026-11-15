import { useEffect, useRef, useState } from 'react'
import { Search, Tag, X } from 'lucide-react'
import { events, topicLabel, topicTags } from './data'
import type { CountryId, HistoryEvent } from './data'

const tagCounts = Object.fromEntries(Object.keys(topicTags).map(id =>
  [id, events.filter(item => item.topicIds.includes(id)).length]))

export default function TopicPicker({ selected, candidates, country, close, choose }: {
  selected: string; close: () => void; choose: (id: string) => void;
  candidates: HistoryEvent[]; country: CountryId;
}) {
  const [query, setQuery] = useState('')
  const root = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const trigger = root.current?.closest('.category-area')?.querySelector<HTMLButtonElement>('.topic-more')
    input.current?.focus()
    function outside(event: PointerEvent) {
      const target = event.target as HTMLElement
      if (!root.current?.contains(target) && !target.closest('.topic-more')) close()
    }
    function keyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault(); event.stopImmediatePropagation()
        close(); trigger?.focus()
      }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', keyboard, true)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', keyboard, true)
    }
  }, [close])
  const scopedCounts = Object.fromEntries(Object.keys(topicTags).map(id =>
    [id, candidates.filter(item => item.topicIds.includes(id)).length]))
  const searchTerms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean)
  const available = Object.values(topicTags).filter(item => tagCounts[item.id] > 0 &&
    searchTerms.every(term => `${topicLabel(item.id)} ${item.description}`.toLocaleLowerCase().includes(term)))
    .sort((a, b) => Number(scopedCounts[b.id] > 0) - Number(scopedCounts[a.id] > 0) ||
      Number(b.country === country) - Number(a.country === country))
  return <div className="topic-picker" ref={root} role="dialog" aria-label="更多事件标签">
    <div className="topic-picker-top"><span><Tag size={13} />事件标签</span>
      <button className="icon-button" onClick={close} aria-label="关闭事件标签"><X size={15} /></button></div>
    <div className="topic-search"><Search size={14} /><input ref={input} aria-label="搜索事件标签" placeholder="搜索国别、西安事变、高台…" value={query} onChange={event => setQuery(event.target.value)} /></div>
    <div className="topic-options">{available.length > 0 && <section><span className="topic-group-label">专题</span>
      <div>{available.map(item => {
        const active = selected === item.id
        return <button key={item.id} className={`${active ? 'selected' : ''} ${scopedCounts[item.id] ? '' : 'is-empty'}`}
          onClick={() => choose(item.id)} aria-pressed={active} title={item.description}>
          <span>{topicLabel(item.id)}</span><small>{scopedCounts[item.id]}</small>
        </button>
      })}</div></section>}
    {!available.length && <p className="topic-no-match">没有匹配的标签，试试“西安”或“延安”。</p>}</div>
    <p className="topic-picker-hint">选择标签会聚焦并高亮相关年度，其余年份暂不可选。国别标签仅筛选标注国家，其他国家保留同期内容；数量对应当前时间和分类条件。</p>
    {selected && <button className="topic-clear" onClick={() => choose('')}>清除标签筛选<X size={12} /></button>}
  </div>
}
