export const SITE_URL = 'https://haohan.sotoolai.com'
export const SITE_NAME = '浩汉'
export const HOME_TITLE = '浩汉 · 中国与世界历史时间轴、历史事件与人物生平'
export const HOME_DESCRIPTION = '以中国历史为主线，阅读同时代的世界。浏览1937年1月八国逐日活动、1937—1945年抗战大事记、古代文明节点与独立人物生平，查看历史日期、史料出处及核验说明。'

export const absoluteUrl = (path: string) => new URL(path, `${SITE_URL}/`).href
export const archiveHref = (path: string) => typeof window !== 'undefined' && window.location.protocol === 'file:' ? absoluteUrl(path) : path
export const eventPath = (id: string) => `/events/${encodeURIComponent(id)}/`
export const personPath = (id: string) => `/people/${encodeURIComponent(id)}/`
export const yearPath = (year: number) => `/timeline/${year < 0 ? `bce-${-year}` : year}/`
export const monthPath = (year: number, month: number) => `${yearPath(year)}${String(month).padStart(2, '0')}/`
export const dayPath = (year: number, month: number, day: number) => `${monthPath(year, month)}${String(day).padStart(2, '0')}/`
export const countryPath = (id: string) => `/countries/${encodeURIComponent(id)}/`
export const countryMonthPath = (id: string, year: number, month: number) => `${countryPath(id)}${year}/${String(month).padStart(2, '0')}/`
export const topicPath = (id: string) => `/topics/${id.split(':').map(encodeURIComponent).join('/')}/`

// Preserve new-tab, modifier-click and browser link behavior.
export function isPlainClick(event: { button: number; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean; altKey: boolean; defaultPrevented: boolean }) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.defaultPrevented
}
