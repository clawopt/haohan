import type { Category, HistoryEvent } from './data'

// February 1937 in Japan: the Hayashi cabinet takes office, the Bank of Japan
// changes leadership, and the Kwantung Army and the government push new
// policies toward North China and Manchuria.
export const japanFebruarySources = {
  febJpHayashi: { name: '日本国立国会图书馆 · 近代日本档案：宇垣内阁流产与林铣十郎组阁', url: 'https://www.ndl.go.jp/modern/e/cha4/description08.html' },
  febJpJacar: { name: 'JACAR · 日本战时与战后时期年表：1937年2月', url: 'https://www.jacar.go.jp/english/exhibition/glossary_en/tochikiko-henten/table/history.html' },
  febJpBoj: { name: '日本银行 · 第十四代总裁池田成彬', url: 'https://www.boj.or.jp/about/outline/history/pre_gov/sousai14.htm' },
  febJpChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
  febJpPujie: { name: 'Wikipedia · Pujie（溥杰）', url: 'https://en.wikipedia.org/wiki/Pujie' },
}

type SourceId = keyof typeof japanFebruarySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `feb37-jp-${id}`, year: 1937, month: 2, country: 'japan', day,
    date: `1937年2月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记任命、声明或会面的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanFebruaryEvents: HistoryEvent[] = [
  record('hayashi-cabinet', 2, '政治', '林铣十郎内阁成立', '日本 · 东京',
    '在陆军支持下，林铣十郎接替广田弘毅组阁。',
    '2月2日，林铣十郎在陆军支持下成立内阁，接替1月底辞职的广田弘毅内阁。此前宇垣一成奉命组阁，因陆军拒绝推荐陆军大臣而失败；林铣十郎随后受命组阁。\n\n林内阁试图建立超党派色彩的内阁，要求阁员脱离政党，但政党与军部之间的矛盾并未消失。内阁在数月后解散众议院并举行大选，随后于6月辞职。',
    ['hirohito'], 'febJpHayashi', {
      topicIds: ['japanese-cabinets'],
      references: ['febJpJacar'],
      evidenceNote: '国立国会图书馆与JACAR年表均记2月2日林内阁成立；组阁过程与宇垣失败见1月条目。内阁后来的解散与辞职不写入本条日期。',
    }),
  record('pujie-engagement', 2, '社会', '溥杰与嵯峨浩在东京举行订婚仪式', '日本 · 东京 · 伪满洲国“大使馆”',
    '伪满洲国皇弟溥杰与日本贵族嵯峨浩订婚，婚礼预定4月举行。',
    '2月2日，伪满洲国皇帝溥仪的弟弟溥杰与日本侯爵嵯峨实胜之女嵯峨浩，在东京的伪满洲国“大使馆”举行订婚仪式。婚礼预定于4月3日举行。\n\n这桩婚姻发生在日本扶植伪满洲国、强化所谓“日满一体”的背景下，具有政治象征意义。本条只记订婚仪式，不把预定婚礼写成2月已经完成。',
    [], 'febJpPujie', {
      evidenceNote: '日期、地点与预定婚期见溥杰条目及所引Lebra研究；日文原始报纸与订婚仪式记录未逐条核对。',
    }),
  record('kwantung-plan', 7, '军事', '关东军制定1937年度治安肃正计划纲要', '中国东北',
    '关东军制定年度“治安肃正”计划，加紧对东北抗日武装的讨伐。',
    '2月7日，日本关东军司令部制定《1937年度关东军治安肃正计划纲要》，加紧对东北抗日武装的“讨伐”。\n\n“治安肃正”是日本在伪满洲国统治下对抗日力量进行军事镇压与地方控制的计划。人民网大事记只记计划制定，未列具体作战部署与实施结果，本条不补写后来各次“讨伐”的战况。',
    ['kwantung-army'], 'febJpChronology', {
      references: ['febJpJacar'],
      evidenceNote: '单一大事记条目给出2月7日与计划名称；计划全文与关东军实施记录未逐条核对。',
    }),
  record('boj-governor', 9, '经济', '池田成彬就任日本银行总裁', '日本 · 东京',
    '池田成彬接任日本银行总裁，进入昭和十二年的金融管理阶段。',
    '2月9日，池田成彬就任日本银行第十四代总裁。日本银行官方履历记其在任时间为1937年2月至7月。\n\n池田就任时，日本正面对军费扩张、外汇管理与金融梗塞的压力。总裁更替是人事节点，不能据此推断当天已经改变货币政策。',
    [], 'febJpBoj', {
      references: ['febJpJacar'],
      evidenceNote: '日本银行官方总裁履历支持任期起点与人物；JACAR年表记2月9日就任。具体任命仪式与同日金融决策未展开。',
    }),
  record('boj-statement', 10, '经济', '日本银行声明将在金融梗塞时进行买入操作', '日本 · 东京',
    '日本银行就金融梗塞时的市场操作作出公开声明。',
    '2月10日，日本银行发表声明，表示在出现金融梗塞时将进行买入操作（买操作）。JACAR年表把这项声明记在池田成彬就任总裁之后。\n\n声明属于金融管理工具的表态，不等于当天已经向市场实际投放资金；具体操作规模、对象与实施时间未由所引年表说明。',
    [], 'febJpJacar', {
      evidenceNote: 'JACAR年表仅记“金融梗塞时进行买操作”的声明；未读日本银行原公告，因此不写操作金额与具体票据种类。',
    }),
  record('north-china-policy', 20, '外交', '日本政府发出《第三次处理华北纲要》', '日本 · 东京',
    '日本政府提出新的华北政策纲要，继续推进对华北的侵略与渗透。',
    '2月20日，日本政府发出《第三次处理华北纲要》。这是日本在侵占中国东北后，针对华北局势制定的又一份政策文件。\n\n人民网大事记只记纲要的发出日期与名称，未列条款内容。纲要延续了日本对华北的特殊化要求，但具体条款与执行情况须另据日本外交文书核对；本条不据后来的战争进程补写纲要细节。',
    [], 'febJpChronology', {
      evidenceNote: '单一大事记条目给出2月20日与文件名；纲要原文未逐条校读，正文只作方向性表述。',
    }),
]
