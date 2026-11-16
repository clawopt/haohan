import type { Category, HistoryEvent } from './data'

// May 1937 in Nazi Germany: the Hindenburg disaster, the order to rush the
// LZ 130, a new order for foreign diplomats, and a press campaign against
// Cardinal Mundelein.
export const germanyMaySources = {
  mayGeMay: { name: 'Wikipedia · May 1937', url: 'https://en.wikipedia.org/wiki/May_1937' },
  mayGeHindenburg: { name: 'Wikipedia · Hindenburg disaster', url: 'https://en.wikipedia.org/wiki/Hindenburg_disaster' },
  mayGeLZ130: { name: 'Wikipedia · LZ 130 Graf Zeppelin II', url: 'https://en.wikipedia.org/wiki/LZ_130_Graf_Zeppelin_II' },
  mayGeEagle: { name: 'Wikipedia · Order of the German Eagle', url: 'https://en.wikipedia.org/wiki/Order_of_the_German_Eagle' },
  mayGeMundelein: { name: 'Wikipedia · Paper hanger (Mundelein’s speech)', url: 'https://en.wikipedia.org/wiki/Paper_hanger_(Mundelein%27s_speech)' },
}

type SourceId = keyof typeof germanyMaySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `may37-ge-${id}`, year: 1937, month: 5, country: 'germany', day,
    date: `1937年5月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyMayEvents: HistoryEvent[] = [
  record('german-eagle-order', 1, '外交', '纳粹德国设立“德国鹰勋章”', '德国 · 柏林',
    '纳粹政权设立德国鹰勋章，授予外国外交官与友好人士。',
    '5月1日，纳粹德国设立“德国鹰勋章”（Order of the German Eagle），授予外国外交官、国家元首与对德友好人士。勋章分为若干等级，是纳粹政权用于外交笼络与宣传的工具。\n\n设立勋章是外交礼仪与政治符号，不等于受勋者支持纳粹意识形态；具体受勋名单与授予标准须据德国外交部档案。本条只记设立。',
    'mayGeEagle',
    '德国鹰勋章条目与1937年5月事件汇编记5月1日设立；受勋名单与授予记录未逐条核对。',
    ['mayGeMay'], ['hitler']),
  record('hindenburg-disaster', 6, '社会', '“兴登堡”号飞艇在美国起火坠毁', '美国 · 新泽西州莱克赫斯特',
    '德国“兴登堡”号飞艇在着陆时起火，36人死亡，飞艇时代受到重创。',
    '5月6日，德国“兴登堡”号飞艇在美国新泽西州莱克赫斯特海军航空站着陆时起火坠毁，造成36人死亡。事故被新闻纪录片与广播现场报道，播音员赫伯特·莫里森的“Oh, the humanity!”成为著名广播片段。\n\n事故原因有静电、氢气泄漏与纵火等多种说法，调查结论存在争议。飞艇坠毁使公众对商业飞艇运输的信心急剧下降，但德国继续建造LZ 130；本条只记事故与伤亡。',
    'mayGeHindenburg',
    '兴登堡事故条目记5月6日、36人死亡与现场报道；事故原因与调查结论存在不同说法，未采用单一结论。',
    ['mayGeMay'], []),
  record('lz130-rushed', 7, '经济', '戈林下令加紧建造LZ 130飞艇', '德国 · 腓特烈港',
    '兴登堡号事故后，德国航空部长戈林仍下令加紧完成LZ 130飞艇。',
    '5月7日，德国航空部长赫尔曼·戈林下令加紧建造LZ 130“齐柏林伯爵二世”号飞艇。LZ 130是“兴登堡”号的姊妹舰，原本计划使用氦气，但美国拒绝供应，最终改用氢气。\n\n命令反映纳粹政权在事故后仍试图维持飞艇运输与宣传项目，不等于LZ 130当天建成或投入商业运营。该飞艇于1938年首飞，二战爆发后未进入商业客运；具体建造进度须据企业档案。',
    'mayGeLZ130',
    'LZ 130条目与1937年5月事件汇编记5月7日戈林下令加紧建造；氦气供应与后续建造时间见同一资料，未逐条核对。',
    ['mayGeMay'], ['hitler']),
  record('mundelein-press-campaign', 19, '外交', '德国报刊要求梵蒂冈谴责芝加哥大主教', '德国 · 柏林',
    '德国报刊攻击芝加哥大主教蒙德莱因的反纳粹言论，要求梵蒂冈公开谴责。',
    '5月19日，德国报刊要求梵蒂冈公开谴责芝加哥大主教乔治·蒙德莱因。蒙德莱因此前在演讲中批评纳粹宣传，把希特勒称为“奥地利裱糊匠”，并讽刺戈培尔。纳粹党机关报《攻击报》称蒙德莱因侮辱了德国元首与德国人民，要求教廷表态。\n\n这是纳粹政权利用报刊对外国教会人士施压的宣传行动，不等于梵蒂冈当天作出回应。具体社论、外交交涉与教廷立场须据德国宣传部与梵蒂冈档案；本条只记报刊攻势。',
    'mayGeMundelein',
    '1937年5月事件汇编引《芝加哥论坛报》5月20日报道，记5月19日德国报刊要求梵蒂冈谴责蒙德莱因；报纸原版与外交档案未逐条核对。',
    ['mayGeMay'], []),
]
