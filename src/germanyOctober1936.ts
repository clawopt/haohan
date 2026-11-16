import type { Category, HistoryEvent } from './data'

// October 1936 in Nazi Germany: the Reich Central Office for persecution,
// Jewish teachers expelled, the Four Year Plan, and the Berlin-Rome Axis.
export const germanyOctober1936Sources = {
  oct36GeDec: { name: 'Wikipedia · October 1936', url: 'https://en.wikipedia.org/wiki/October_1936' },
  oct36GeOffice: { name: '德国联邦档案馆 · 帝国反同性恋与堕胎中央办公室的设立', url: 'https://www.bundesarchiv.de/themen-entdecken/online-entdecken/dokumente-zur-zeitgeschichte/die-gruendung-der-reichszentrale-zur-bekaempfung-der-homosexualitaet-und-der-abtreibung/' },
  oct36GePlan: { name: '德国数字图书馆 · 四年计划全权代表档案', url: 'https://www.deutsche-digitale-bibliothek.de/item/YL5GKVX5TH6WFT3N4S6I5HGI2NZ3MUSV' },
  oct36GeAxis: { name: '新华网 · 二战策源地如何形成', url: 'https://www.xinhuanet.com/world/2015-04/30/c_127750176.htm' },
}

type SourceId = keyof typeof germanyOctober1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct36-ge-${id}`, year: 1936, month: 10, country: 'germany', day,
    date: `1936年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyOctober1936Events: HistoryEvent[] = [
  record('reich-central-office', 10, '政治', '纳粹设立“帝国反同性恋与堕胎中央办公室”', '德国 · 柏林',
    '希姆莱下令设立中央办公室，集中迫害同性恋者并打击堕胎。',
    '10月10日，党卫队全国领袖希姆莱以秘密命令设立“帝国反同性恋与堕胎中央办公室”，机构设在帝国刑事警察局内，负责集中搜集名单、协调各地警方迫害同性恋者，并打击堕胎。\n\n这一机构是纳粹政权社会控制与人口政策的一部分，其设立使针对性迫害进一步制度化；具体命令、机构运作与受害者人数须据德国联邦档案馆与相关研究。本条只记机构设立。',
    'oct36GeOffice',
    '德国联邦档案馆记1936年10月10日希姆莱以秘密命令设立该中央办公室；命令原文与受害者统计未逐条核对。',
    ['oct36GeDec'], []),
  record('jewish-teachers-ban', 15, '政治', '犹太教师被禁止在公立学校任教', '德国 · 柏林',
    '纳粹政权禁止犹太教师继续在德国公立学校任教。',
    '10月15日，纳粹德国禁止犹太教师继续在公立学校任教。此前犹太学生已受到限制，这一措施把歧视进一步推进到教师队伍，迫使犹太教育工作者离职或转入犹太学校。\n\n禁令是纳粹种族政策与教育控制的一环，不等于所有犹太教师当天同时离校；具体法令、执行范围与个人遭遇须据德国档案与回忆资料。本条只记禁令。',
    'oct36GeDec',
    '1936年10月事件汇编记10月15日犹太教师被禁止在公立学校任教；法令原文与执行记录未逐条核对。',
    ['oct36GeDec'], ['hitler']),
  record('four-year-plan', 18, '经济', '纳粹德国设立“四年计划”全权代表', '德国 · 柏林',
    '希特勒任命戈林为四年计划全权代表，推动德国经济转入战争轨道。',
    '10月18日，纳粹德国颁布实施四年计划的相关法令，希特勒任命赫尔曼·戈林为四年计划全权代表。计划要求在四年内实现经济自给与军备扩张，把德国经济进一步纳入战争准备。\n\n四年计划是纳粹军备与经济动员的关键制度，不等于德国经济当天完成转型；具体法令、机构与执行情况须据德国联邦档案与纽伦堡审判资料。本条只记全权代表任命。',
    'oct36GePlan',
    '德国数字图书馆与纽伦堡审判资料记1936年10月18日法令任命戈林为四年计划全权代表；法令条文与执行记录未逐条核对。',
    ['oct36GeDec'], ['hitler']),
  record('berlin-rome-axis', 25, '外交', '德意签订协定，形成“柏林—罗马轴心”', '德国 · 柏林',
    '德国与意大利签订协定，建立“柏林—罗马轴心”。',
    '10月24日，希特勒在柏林会见意大利外长齐亚诺，提出建立大同盟；25日，德国与意大利签订协定，建立“柏林—罗马轴心”。墨索里尼在11月1日的演说中公开称该协定开启欧洲历史的“新时代”。\n\n协定是德意两国在西班牙内战与对外扩张中相互靠拢的节点，尚不等于正式军事同盟；具体条款、秘密议定书与后续军事合作须据外交档案。本条只记协定签订。',
    'oct36GeAxis',
    '新华网与1936年10月事件汇编记10月25日德意签订协定、建立柏林—罗马轴心；协定文本与谈判记录未逐条核对。',
    ['oct36GeDec'], ['hitler']),
]
