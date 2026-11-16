import type { Category, HistoryEvent } from './data'

// September 1937 in Nazi Germany: the Nuremberg Rally, the Deutsches Stadion
// cornerstone, Göring's antisemitic warning, and Mussolini's state visit.
export const germanySeptemberSources = {
  sepGeSept: { name: 'Wikipedia · September 1937', url: 'https://en.wikipedia.org/wiki/September_1937' },
}

type SourceId = keyof typeof germanySeptemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep37-ge-${id}`, year: 1937, month: 9, country: 'germany', day,
    date: `1937年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanySeptemberEvents: HistoryEvent[] = [
  record('goering-stuttgart-speech', 2, '政治', '戈林在斯图加特发表反犹讲话', '德国 · 斯图加特',
    '戈林警告称，如果再次抵制纳粹德国，造成的损失将由德国犹太人承担。',
    '9月2日，纳粹德国航空部长赫尔曼·戈林在斯图加特发表讲话，警告如果再次发生抵制纳粹德国的行动，“造成的任何损失都将由德国犹太人承担”。\n\n讲话是纳粹政权把反犹迫害与国家报复相联系的公开威胁，不等于当天已经实施新的掠夺措施。具体讲话原文与后续反犹政策须据德国档案；本条只记讲话。',
    'sepGeSept',
    '1937年9月事件汇编记9月2日戈林斯图加特讲话与“损失由德国犹太人承担”表述；讲话原文未逐字校读。',
    ['sepGeSept'], ['hitler']),
  record('nuremberg-manifesto', 7, '外交', '希特勒在纽伦堡集会上发表宣言', '德国 · 纽伦堡',
    '希特勒的宣言在纽伦堡集会上宣读，表示愿与意大利、日本共同对抗共产主义。',
    '9月7日，希特勒的宣言在纽伦堡集会上由阿道夫·瓦格纳宣读，表示愿与意大利和日本站在一起，进行反对共产主义的“防御斗争”。宣言把德意日三国在反共名义下联系起来。\n\n宣言是纳粹外交与宣传的节点，不等于三国当天签订正式军事同盟；德意日轴心与反共产国际协定在此前已经形成。具体宣言文本与三国交涉须据德国外交部档案。本条只记宣读。',
    'sepGeSept',
    '1937年9月事件汇编记9月7日希特勒宣言在纽伦堡集会宣读；宣言原文与三国交涉未逐条核对。',
    ['sepGeSept'], ['hitler']),
  record('deutsches-stadion', 9, '文化', '希特勒为“德意志体育场”奠基', '德国 · 纽伦堡',
    '希特勒在纽伦堡为计划中的“德意志体育场”奠基，该工程最终未完成。',
    '9月9日，希特勒在纽伦堡为“德意志体育场”（Deutsches Stadion）奠基。该体育场由阿尔伯特·施佩尔设计，计划容纳40万人，是纳粹纪念性建筑规划的一部分；工程最终未完成。\n\n奠基是纳粹建筑与宣传的节点，不等于体育场当天开工或建成；具体设计、预算与停工原因须据档案。本条只记奠基。',
    'sepGeSept',
    '1937年9月事件汇编记9月9日希特勒为德意志体育场奠基、工程未完成；设计档案与施工记录未逐条核对。',
    ['sepGeSept'], ['hitler']),
  record('mussolini-visit', 25, '外交', '墨索里尼访问德国', '德国 · 慕尼黑',
    '意大利总理墨索里尼抵达慕尼黑，开始对德国为期五天的正式访问。',
    '9月25日，意大利总理贝尼托·墨索里尼抵达慕尼黑，开始对德国为期五天的正式访问。访问包括阅兵、集会与德意首脑会谈，展示两国轴心关系。\n\n访问是德意外交与宣传的节点，不等于两国当天签署新的军事同盟；具体会谈内容与后续协议须据两国外交档案。本条只记访问开始。',
    'sepGeSept',
    '1937年9月事件汇编记9月25日墨索里尼抵达慕尼黑、开始五天访问；会谈记录与协议未逐条核对。',
    ['sepGeSept'], ['hitler']),
]
