import type { Category, HistoryEvent } from './data'

// October 1937 in France: the Yugoslav pact, the death of Babar's creator,
// Reims Cathedral's reconsecration, and a French freighter sunk off Spain.
export const franceOctoberSources = {
  octFrOct: { name: 'Wikipedia · October 1937', url: 'https://en.wikipedia.org/wiki/October_1937' },
}

type SourceId = keyof typeof franceOctoberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct37-fr-${id}`, year: 1937, month: 10, country: 'france', day,
    date: `1937年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceOctoberEvents: HistoryEvent[] = [
  record('yugoslavia-pact', 12, '外交', '法国与南斯拉夫延长互助条约', '法国 · 巴黎 / 南斯拉夫 · 贝尔格莱德',
    '法国与南斯拉夫将1927年互助条约延长五年。',
    '10月12日，法国与南斯拉夫将1927年签订的互助条约延长五年。条约是法国在东欧集体安全体系的一部分，面对德国与意大利扩张的压力。\n\n延长条约是外交节点，不等于法国当天获得新的军事承诺或南斯拉夫得到实际援助；具体条款与后续执行须据两国外交档案。本条只记延长。',
    'octFrOct',
    '1937年10月事件汇编记10月12日法国与南斯拉夫延长互助条约五年；条约文本与谈判记录未逐条核对。',
    ['octFrOct'], ['blum']),
  record('brunhoff-death', 16, '文化', '《大象巴巴》作者让·德·布伦霍夫去世', '法国 · 巴黎',
    '法国作家、插画家让·德·布伦霍夫去世，享年37岁。',
    '10月16日，法国作家、插画家让·德·布伦霍夫因肺结核去世，享年37岁。他创作了著名儿童图画书《大象巴巴》（Babar the Elephant），以简洁线条与温暖叙事闻名。\n\n布伦霍夫的去世是儿童文学史节点，不等于“巴巴”系列当天停止出版；其子后来继续创作该系列。具体作品版本与版权须据出版档案。本条只记去世。',
    'octFrOct',
    '让·德·布伦霍夫条目与1937年10月事件汇编记10月16日去世、享年37岁；病史与出版记录未逐条核对。',
    ['octFrOct'], []),
  record('reims-reconsecration', 18, '文化', '兰斯大教堂重新祝圣', '法国 · 兰斯',
    '在第一次世界大战中严重受损的兰斯大教堂重新祝圣。',
    '10月18日，法国兰斯大教堂在第一次世界大战中严重受损后重新祝圣。教堂在1914—1918年间遭炮击与火灾，战后经过长期修复；重新祝圣标志着修复的重要阶段。\n\n重新祝圣是文化遗产修复与法德战争记忆的节点，不等于教堂所有修复工程当天完成；具体修复范围、资金与后续工程须据建筑档案。本条只记祝圣。',
    'octFrOct',
    '1937年10月事件汇编记10月18日兰斯大教堂重新祝圣；修复档案与仪式记录未逐条核对。',
    ['octFrOct'], []),
  record('oued-mellah-sunk', 24, '军事', '法国货轮“乌埃德·梅拉”号被炸沉', '地中海 · 巴塞罗那以东',
    '法国货轮“乌埃德·梅拉”号在巴塞罗那以东被不明国籍飞机炸沉。',
    '10月24日，法国货轮“乌埃德·梅拉”号在西班牙巴塞罗那以东海域被一架不明国籍飞机轰炸沉没。事件发生在西班牙内战外溢、地中海航运频繁遭袭的背景下。\n\n袭击方身份在资料中未明确，不能据此认定某一国蓄意攻击法国船只；具体调查与外交交涉须据法国海军与外交部档案。本条只记击沉。',
    'octFrOct',
    '1937年10月事件汇编记10月24日“乌埃德·梅拉”号在巴塞罗那以东被不明国籍飞机炸沉；袭击方与调查记录未逐条核对。',
    ['octFrOct'], []),
]
