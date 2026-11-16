import type { Category, HistoryEvent } from './data'

// March 1937 in Nazi Germany: church-state conflict over the papal encyclical,
// police roundups, and the diplomatic fallout from rearmament and the Spanish
// patrol scheme.
export const germanyMarchSources = {
  marGeMarch: { name: 'Wikipedia · March 1937', url: 'https://en.wikipedia.org/wiki/March_1937' },
  marGeEncyclical: { name: 'Wikipedia · Mit brennender Sorge', url: 'https://en.wikipedia.org/wiki/Mit_brennender_Sorge' },
  marGeDodd: { name: 'Wikipedia · William Dodd (ambassador)', url: 'https://en.wikipedia.org/wiki/William_Dodd_(ambassador)' },
  marGeHimmler: { name: 'Wikipedia · Heinrich Himmler', url: 'https://en.wikipedia.org/wiki/Heinrich_Himmler' },
}

type SourceId = keyof typeof germanyMarchSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `mar37-ge-${id}`, year: 1937, month: 3, country: 'germany', day,
    date: `1937年3月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyMarchEvents: HistoryEvent[] = [
  record('us-apology', 5, '外交', '美国国务院就拉瓜迪亚言论向德国道歉', '德国 · 柏林 / 美国 · 华盛顿',
    '纽约市长拉瓜迪亚批评希特勒后，美国国务院向德国政府致歉。',
    '3月5日，美国国务院就纽约市长菲奥雷洛·拉瓜迪亚此前对希特勒的言论向德国政府正式道歉。拉瓜迪亚在3月3日对犹太妇女团体的演讲中，把希特勒称为“威胁世界和平的褐衫狂人”，并提议在1939年纽约世界博览会设置“恐怖馆”展示其形象。\n\n国务院的道歉是外交程序，不代表拉瓜迪亚收回言论，也不代表美国社会对纳粹政权态度一致。美国当时仍保持中立政策，德国方面对美方舆论的抗议另见多德大使的记录。',
    'marGeMarch',
    '1937年3月事件汇编记3月5日美国国务院道歉；拉瓜迪亚演讲内容见3月3日条目，德国外交部照会原文未核对。',
    ['marGeDodd'], []),
  record('himmler-arrests', 9, '政治', '希姆莱下令逮捕“职业罪犯”', '德国 · 柏林',
    '希姆莱下令逮捕刑满后仍被视为“职业罪犯”的人，约两千人未经指控被送入集中营。',
    '3月9日，党卫队全国领袖希姆莱下令逮捕所谓“职业罪犯”：凡有两次以上犯罪记录、刑满后仍处于自由状态者，均被列入抓捕范围。随后几天，约两千人未经正式指控被逮捕并送入集中营。\n\n这次行动是纳粹政权以“预防性拘押”名义扩大警察权力的组成部分，与同年夏季针对所谓“反社会分子”的大规模抓捕相连。被捕者并非都经法院重新审判；具体人数与集中营分配见党卫队与警方档案。',
    'marGeHimmler',
    '1937年3月事件汇编记3月9日希姆莱下令、随后数日约两千人被捕并送入集中营；命令原文与集中营登记未逐页核对。',
    ['marGeMarch'], []),
  record('encyclical-published', 10, '社会', '教皇通谕《Mit brennender Sorge》发表', '梵蒂冈 / 德国',
    '教皇庇护十一世发表通谕，谴责纳粹政权违反《帝国政教协定》。',
    '3月10日，教皇庇护十一世发表通谕《Mit brennender Sorge》（“怀着深切忧虑”），谴责纳粹德国违反1933年《帝国政教协定》，批评把种族、国家与领袖置于信仰之上的意识形态。通谕以德文写成，避免在德国翻译时被曲解。\n\n通谕是梵蒂冈对纳粹宗教政策的公开批评，不等于教会与纳粹政权全面决裂，也不代表德国天主教徒的一致反应。通谕的起草、秘密运入德国与在教堂宣读的过程须分别理解。',
    'marGeEncyclical',
    '通谕条目记3月10日发表、德文写作与内容要点；通谕原文与梵蒂冈档案未逐字校读，3月21日宣读另条记录。',
    ['marGeMarch'], []),
  record('dodd-protest', 12, '外交', '美国大使多德就德国报刊攻击美国提出抗议', '德国 · 柏林',
    '多德向德国外长牛赖特抗议德国报刊对美国的攻击。',
    '3月12日，美国驻德国大使威廉·多德向德国外交部长康斯坦丁·冯·牛赖特提出抗议，反对德国报刊近期对美国的攻击。牛赖特表示遗憾，但没有给出正式答复。\n\n这次交涉发生在拉瓜迪亚言论与美方道歉之后，反映纳粹宣传机器与美德外交之间的紧张。抗议是外交沟通，不等于德国政府已改变报刊宣传方针；具体文章与宣传指令须据德国外交部档案。',
    'marGeDodd',
    '多德条目记3月12日抗议与牛赖特的回应；德国外交部档案与涉事报刊原文未逐条核对。',
    ['marGeMarch'], []),
  record('spanish-patrol', 14, '军事', '四国海军开始巡逻西班牙海域', '西班牙周边海域',
    '英、法、德、意四国海军开始巡逻，阻止武器和志愿者进入西班牙。',
    '3月14日零时起，英国、法国、德国和意大利的海军开始巡逻西班牙海域，目的是执行“不干涉”安排、阻止外国武器和志愿者进入西班牙内战。巡逻海域按国别分区，德国与意大利的参与使这一机制同时带有承认其海军存在的意味。\n\n巡逻并未真正阻断对西班牙的军事援助，德国和意大利继续支持佛朗哥一方，苏联则援助共和国。本条只记巡逻开始这一多边安排，不把“不干涉”写成各国实际中立。',
    'marGeMarch',
    '1937年3月事件汇编记3月14日零时起四国海军巡逻西班牙海域；巡逻分区、舰船与执行效果未逐项核对。',
    [], []),
  record('encyclical-read', 21, '社会', '通谕在德国天主教堂宣读', '德国 · 各地天主教堂',
    '《Mit brennender Sorge》在德国天主教堂讲道中宣读，副本此前秘密运入。',
    '3月21日，教皇通谕《Mit brennender Sorge》在德国各地天主教堂的讲道中宣读。由于纳粹当局可能查禁，通谕副本此前被秘密运入德国，并在3月21日同时分发到各堂区。\n\n宣读使通谕内容直接进入德国天主教徒的公共空间，也引发纳粹政权的报复与限制。宣读范围、被捕神职人员与后续措施在不同教区资料中有差异；本条只记宣读这一天的行动。',
    'marGeMarch',
    '1937年3月事件汇编记3月21日通谕在德国教堂宣读、副本秘密运入；各教区宣读记录与当局反应未逐条核对。',
    ['marGeEncyclical'], []),
  record('voelkischer-response', 22, '政治', '《人民观察家报》回应教皇通谕', '德国 · 柏林',
    '纳粹党机关报发表社论，称与教廷的协定也不具有不可动摇的永恒价值。',
    '3月22日，纳粹党机关报《人民观察家报》就教皇通谕发表社论。社论称“即使与教廷的协定也不具有神圣、不可触动和永恒的价值”，把教廷的批评说成对德国国家利益的干涉。\n\n这是纳粹政权对通谕的公开宣传回应，不是德国政府的正式外交照会。社论反映了政权把政教协定视为可随时重新解释的政治工具；具体宣传指令与后续政教冲突须另据档案。',
    'marGeMarch',
    '1937年3月事件汇编记3月22日《人民观察家报》社论及引文；报纸原版与宣传部指令未逐条核对。',
    ['marGeEncyclical'], []),
]
