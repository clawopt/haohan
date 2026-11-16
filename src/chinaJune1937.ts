import type { Category, HistoryEvent } from './data'

// June 1937: the Lushan talks, the Seven Gentlemen trial, a Sino-Japanese
// wireless dispute in Tianjin, and Yang Hucheng's departure abroad.
export const chinaJuneSources = {
  junCnLushan: { name: '中新网 · 西安事变后周恩来与蒋介石的五次谈判始末', url: 'https://www.chinanews.com.cn/cul/news/2008/04-17/1223439.shtml' },
  junCnQi: { name: '澎湃新闻 · “七君子”案审讯录', url: 'https://m.thepaper.cn/baijiahao_28824097' },
  junCnYang: { name: '西安市档案网 · 西安事变后杨虎城被逼出国的艰难历程', url: 'https://www.xadaj.gov.cn/gczy/zdhc/1803618904851038209.html' },
  junCnTianjin: { name: '抗日战争纪念网 · 中华民族抗日编年（1937年6月）', url: 'https://m.krzzjn.com/show-653-927.html' },
}

type SourceId = keyof typeof chinaJuneSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `jun37-cn-${id}`, year: 1937, month: 6, country: 'china', day,
    date: `1937年6月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaJuneEvents: HistoryEvent[] = [
  record('lushan-talks', 4, '政治', '周恩来赴庐山与蒋介石谈判', '江西 · 庐山',
    '周恩来带着民族统一纲领草案上庐山，与蒋介石进行多次会谈。',
    '6月4日，周恩来抵达庐山，与蒋介石进行第一次庐山谈判。他带去中共中央起草的《关于御侮救亡、复兴中国的民族统一纲领（草案）》及十三项具体问题，从6月8日到15日与蒋介石多次交谈，宋美龄、张冲在座。\n\n庐山谈判是西安、杭州谈判之后的又一轮国共交涉。蒋介石对中共纲领草案不予置理，另提成立国民革命同盟会等主张，双方在红军改编、边区政权与领导权问题上仍有分歧；谈判未达成全面协议，7月卢沟桥事变后形势改变。',
    ['zhouenlai', 'chiang'], ['cpc-central', 'nanjing-government'], 'junCnLushan', {
      topicIds: ['united-front'], precision: 'range', endDay: 15, date: '1937年6月4日—15日',
      evidenceNote: '中新网与人民网资料记6月4日周恩来上庐山、6月8日至15日多次会谈；会谈记录与纲领草案原文未逐字校读。',
    }),
  record('seven-gentlemen-trial', 11, '政治', '江苏高等法院开庭审理“七君子”案', '江苏 · 苏州',
    '苏州法院两次开庭审理沈钧儒等七人，审判在舆论压力下进行。',
    '6月11日，江苏省高等法院在苏州第一次公开审理沈钧儒、章乃器、邹韬奋、李公朴、沙千里、史良、王造时七人。法院原计划不公开审理，因被告与辩护律师抗议，家属和记者获准旁听。6月25日第二次开庭，沈钧儒等坚持抗日救国的立场。\n\n两次审判发生在全面抗战爆发前，是国内救亡运动与国民党司法压制冲突的焦点。审判未使七君子获释；7月卢沟桥事变后，在社会各界营救下，他们于7月底至8月初出狱。本条只记6月11日首次开庭。',
    [], ['press-world'], 'junCnQi', {
      topicIds: ['united-front'], references: ['junCnTianjin'],
      evidenceNote: '澎湃与中新网资料记6月11日、25日两次开庭及庭上抗议；庭审记录与判决书未逐条核对，出狱日期不写入本条。',
    }),
  record('tianjin-wireless', 4, '外交', '国民政府要求日本撤除天津军用无线电话', '中国 · 天津',
    '国民政府就日本在天津设置的军用无线电话向日本提出撤除要求。',
    '6月4日，国民政府要求日本撤除在天津设置的军用无线电话。抗日战争纪念网《中华民族抗日编年（1937年6月）》把这一交涉与近卫内阁成立、周恩来赴庐山等事件并列记载。\n\n天津是日本在华北驻军与特务活动的重要据点，军用无线电话涉及驻军通信与情报。国民政府的撤除要求是外交交涉，不等于日本当天同意或撤除；具体交涉过程、日方回应与设备情况须据外交档案。本条只记提出要求。',
    [], ['nanjing-government', 'japan'], 'junCnTianjin', {
      evidenceNote: '单一年表条目记6月4日国民政府要求日本撤除天津军用无线电话；照会原文与日方回应未逐条核对。',
    }),
  record('yang-hucheng-departs', 29, '政治', '杨虎城乘船离开上海出国', '上海 → 欧美',
    '被逼出国的杨虎城乘“胡佛总统”号离开上海，开始欧美考察。',
    '6月29日，杨虎城与夫人谢葆真等乘“胡佛总统”号轮船离开上海，前往欧美考察。此前他于5月27日从西安到上海，6月16日被国民政府军事委员会委派为“欧美军事考察专员”。\n\n杨虎城出国是西安事变善后的结果，实际是蒋介石剥夺其军权的安排。他在抗战爆发后多次要求回国参战，1937年11月回国后即被软禁，1949年遇害。本条只记6月29日离沪出国，不把后来遭遇写入当日。',
    ['yanghucheng'], ['nanjing-government'], 'junCnYang', {
      topicIds: ['xian-incident'],
      evidenceNote: '西安市档案网记5月27日到上海、6月16日委派考察、6月29日乘胡佛总统号出国；船期与送行人员见回忆资料，未逐条核对。',
    }),
]
