import type { CountryId, HistoryEvent } from './data'

interface TopicDefinition {
  id: string
  name: string
  description: string
}

export interface TopicTag extends TopicDefinition {
  baseId: string
  country: CountryId | null
}

const special: [string, string, string][] = [
  ['xian-incident', '西安事变', '西安事变善后的文电、调停、驻防交涉与三方关系。'],
  ['united-front', '抗日统一战线', '围绕停止内战、合作抗日及红军改编的活动。'],
  ['yanan-relocation', '迁驻延安', '中央机关与人员迁往延安的行程、警卫准备及欢迎活动。'],
  ['gaotai', '高台战事', '红五军取得高台、攻守战与失守的已收录记录。'],
  ['cadre-education', '干部教育', '抗大更名、开学、招生以及中央党校迁校。'],
  ['sunrise-discussion', '《日出》讨论', '剧本评论、编辑策划与公演宣传的刊载活动。'],
  ['income-tax', '所得税开征', '所得税实施及职业团体对条例的讨论。'],
  ['industry', '工业生产', '已收录的工业建设与生产活动。'],
  ['literary-exchange', '文学译介与编辑', '出版、翻译通信与作家结集活动。'],
  ['japanese-cabinets', '日本内阁更替', '内阁辞职、受命组阁及组阁失败的活动。'],
  ['roosevelt', '罗斯福执政活动', '罗斯福的会见、演说、就职与总统交接记录。'],
  ['full-resistance', '全面抗战', '1937年7月起中国全面抗战阶段的已收录事件。'],
  ['world-war', '第二次世界大战', '1939年9月至1945年的世界战争与相关政治外交。'],
  ['before-war', '战前国际局势', '1937年至1939年欧洲战争爆发前的海外事件。'],
  ['lugou', '卢沟桥与华北抗战', '卢沟桥事变、华北防御与相关抗战活动。'],
  ['shanghai-war', '淞沪会战', '上海战场与相关抵抗活动。'],
  ['nanjing-atrocity', '南京大屠杀', '南京大屠杀相关历史记录。'],
  ['xuzhou', '徐州与台儿庄', '徐州会战与台儿庄战役。'],
  ['wuhan', '武汉会战', '武汉战场的相关历史事件。'],
  ['hundred-regiments', '百团大战', '华北敌后交通破袭及百团大战。'],
  ['burma', '滇缅战场', '中国远征军、缅甸战场与滇西抗战。'],
  ['allied-conferences', '同盟国会议', '大西洋宪章、开罗、德黑兰、雅尔塔与波茨坦等会议。'],
  ['victory', '战争结束与受降', '战争末期的投降、受降与胜利纪念。'],
  ['postwar', '战后秩序', '1949年已收录的国家建设与国际关系事件。'],
  ['dynasties', '王朝沿革', '中国古代王朝建立、更替及历史时期节点。'],
  ['ancient-world', '古代文明', '近代以前的世界文明与国家活动。'],
]
const countryNames: Record<CountryId, string> = {
  china: '中国', britain: '英国', germany: '德国', japan: '日本', korea: '朝鲜', ussr: '苏联', usa: '美国',
  france: '法国', egypt: '古埃及', greece: '爱琴文明', rome: '罗马', persia: '波斯',
  abbasid: '阿拔斯王朝', ottoman: '奥斯曼帝国',
}
const countryTopics: Record<string, TopicDefinition> = Object.fromEntries([
  ...special.map(([id, name, description]) => ({ id, name, description })),
].map(item => [item.id, item]))
export const topicTags: Record<string, TopicTag> = {}

export function topicLabel(id: string) {
  const tag = topicTags[id]
  return tag ? `${tag.country ? countryNames[tag.country] : '全球'} · ${tag.name}` : id
}

function scopedTopicId(baseId: string, country: CountryId) {
  const definition = countryTopics[baseId]
  if (!definition) return baseId
  const id = `${country}:${baseId}`
  topicTags[id] ??= { ...definition, id, baseId, country }
  return id
}

// Assign only topical relationships supported by the existing record. A person
// mentioned in background text is not enough to place an event in their thread.
const xianSources = new Set(['janXian', 'janPolicy', 'janMao', 'janZhou', 'janLetters', 'janTalks', 'janLi'])
export function attachTopicTags(items: HistoryEvent[]) {
  for (const item of items) {
    const ids = new Set(item.topicIds.filter(id => !id.startsWith('field-')).map(id => topicTags[id]?.baseId ?? id))
    const add = (id: string, applies: boolean) => { if (applies) ids.add(id) }
    add('xian-incident', Boolean(item.archive && item.country === 'china' && xianSources.has(item.source)))
    add('united-front', ids.has('xian-incident') || (item.country === 'china' && /红军主力改编|国共合作|统一战线/.test(item.title)))
    add('yanan-relocation', item.source === 'janYan')
    add('gaotai', /jan37-gaotai-/.test(item.id))
    add('cadre-education', ['janSchool', 'janPartySchool'].includes(item.source))
    add('sunrise-discussion', item.source === 'janSunrise')
    add('income-tax', item.source === 'janTax')
    add('industry', item.source === 'janSteel')
    add('literary-exchange', ['janDigest', 'janGe', 'janBa', 'janChe'].includes(item.source))
    add('japanese-cabinets', item.country === 'japan' && (item.source === 'janJapan' || /内阁|组阁/.test(item.title)))
    add('roosevelt', item.source === 'janFdr' || item.source === 'janFdrDay' || (item.country === 'usa' && item.title.includes('罗斯福')))
    add('full-resistance', item.country === 'china' && item.year >= 1937 && item.year <= 1945 && (item.year > 1937 || item.month >= 7))
    add('world-war', item.year <= 1945 && (item.year > 1939 || (item.year === 1939 && item.month >= 9)))
    add('before-war', item.country !== 'china' && item.year >= 1937 && (item.year < 1939 || (item.year === 1939 && item.month < 9)))
    add('lugou', item.country === 'china' && /卢沟桥|平型关|忻口|华北/.test(item.title))
    add('shanghai-war', /淞沪|四行仓库/.test(item.title))
    add('nanjing-atrocity', item.title.includes('南京大屠杀'))
    add('xuzhou', /徐州|台儿庄/.test(item.title))
    add('wuhan', item.title.includes('武汉会战'))
    add('hundred-regiments', item.title.includes('百团大战'))
    add('burma', /缅|同古|远征军|仁安羌|滇西/.test(item.title))
    add('allied-conferences', /开罗会议|德黑兰会议|雅尔塔会议|波茨坦会议|大西洋宪章/.test(item.title))
    add('victory', item.year === 1945 && /投降|受降|胜利|欧洲战事结束/.test(item.title))
    add('postwar', item.year === 1949)
    add('dynasties', item.country === 'china' && item.year < 1912)
    add('ancient-world', item.country !== 'china' && item.year < 1912)
    item.topicIds = [...ids].map(id => scopedTopicId(id, item.country))
  }
}
