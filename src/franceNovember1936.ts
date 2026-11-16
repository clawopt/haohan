import type { Category, HistoryEvent } from './data'

// November 1936 in France: the Salengro affair convulses the Chamber and ends
// in the interior minister's suicide; a gunpowder explosion kills 40.
export const franceNovember1936Sources = {
  nov36FrDec: { name: 'Wikipedia · November 1936', url: 'https://en.wikipedia.org/wiki/November_1936' },
  nov36FrSalengro: { name: 'Wikipedia · Roger Salengro', url: 'https://en.wikipedia.org/wiki/Roger_Salengro' },
}

type SourceId = keyof typeof franceNovember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov36-fr-${id}`, year: 1936, month: 11, country: 'france', day,
    date: `1936年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceNovember1936Events: HistoryEvent[] = [
  record('chamber-fistfight', 13, '政治', '法国众议院因萨朗格罗指控爆发斗殴', '法国 · 巴黎',
    '右翼报纸指控内政部长萨朗格罗战时逃亡，众议院围绕指控爆发二十分钟斗殴。',
    '11月13日，法国众议院围绕右翼报纸对内政部长罗歇·萨朗格罗“战时逃亡”的指控爆发激烈争吵，演变为约二十分钟的斗殴。萨朗格罗此前已由军事委员会证明清白，但右翼报刊继续攻击。\n\n冲突是1930年代法国人民阵线政府与右翼媒体对立的一个缩影，也显示政治诽谤如何冲击共和制度；具体指控、辩论记录与军事委员会结论须据议会档案。本条只记斗殴。',
    'nov36FrDec',
    '1936年11月事件汇编记11月13日法国众议院因右翼报纸对萨朗格罗的指控爆发约二十分钟斗殴；议会记录与军事委员会文件未逐条核对。',
    ['nov36FrSalengro'], ['blum']),
  record('salengro-suicide', 18, '政治', '法国内政部长萨朗格罗自杀', '法国 · 巴黎',
    '在右翼报刊持续攻击下，法国内政部长罗歇·萨朗格罗自杀身亡。',
    '11月18日，法国内政部长罗歇·萨朗格罗在巴黎附近的家中自杀身亡。右翼报刊此前持续指控他在第一次世界大战中逃亡，尽管军事委员会已证明其清白。事件震动法国政坛，人民阵线政府与右翼媒体关系进一步恶化。\n\n萨朗格罗之死是人民阵线时期政治撕裂的重要节点，不等于右翼报刊的指控因此停止；具体遗书、调查与葬礼须据当时报刊与警方档案。本条只记自杀。',
    'nov36FrSalengro',
    '萨朗格罗条目与1936年11月事件汇编记11月18日自杀、军事委员会已证其清白；遗书与调查记录未逐条核对。',
    ['nov36FrDec'], ['blum']),
  record('marseille-explosion', 16, '社会', '马赛附近火药厂爆炸', '法国 · 马赛',
    '马赛附近一家火药厂发生爆炸，40人死亡。',
    '11月16日，法国马赛附近一家火药厂发生爆炸，造成40人死亡。事故是法国1930年代严重的工业灾难之一，暴露出火药与军工生产中的安全风险。\n\n爆炸发生在欧洲重整军备与军工扩张的背景下，具体原因、伤亡名单与调查结论须据工厂与地方档案；本条只记爆炸与死亡人数。',
    'nov36FrDec',
    '1936年11月事件汇编记11月16日马赛附近火药厂爆炸、40人死亡；事故调查与工厂档案未逐条核对。',
    [], []),
]
