import type { Category, HistoryEvent } from './data'

// March 1937 in Japan: the Hayashi cabinet dissolves the House of
// Representatives, the army pushes a five-year industrial plan, and the
// Manchurian succession and consumer businesses make news.
export const japanMarchSources = {
  marJpMarch: { name: 'Wikipedia · March 1937', url: 'https://en.wikipedia.org/wiki/March_1937' },
  marJpYear: { name: 'Wikipedia · 1937 in Japan', url: 'https://en.wikipedia.org/wiki/1937_in_Japan' },
  marJpDisc: { name: '国立公文书馆 · 众议院解散诏书（昭和12年3月31日）', url: 'https://www.digital.archives.go.jp/file/145185' },
  marJpJacar: { name: 'JACAR · 日本战时与战后时期年表：1937年3月', url: 'https://www.jacar.go.jp/exhibition/glossary/tochikiko-henten/table/history.html' },
  marJpExpo: { name: 'Wikipedia · Nagoya Pan-Pacific Peace Exposition', url: 'https://en.wikipedia.org/wiki/Nagoya_Pan-Pacific_Peace_Exposition' },
  marJpMarui: { name: 'Wikipedia · Marui', url: 'https://en.wikipedia.org/wiki/Marui' },
  marJpPujie: { name: 'Wikipedia · Pujie', url: 'https://en.wikipedia.org/wiki/Pujie' },
}

type SourceId = keyof typeof japanMarchSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `mar37-jp-${id}`, year: 1937, month: 3, country: 'japan', day,
    date: `1937年3月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记法令、会议或活动的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanMarchEvents: HistoryEvent[] = [
  record('manchukuo-succession', 1, '政治', '伪满洲国公布帝位继承法', '伪满洲国 · 新京',
    '伪满洲国公布帝位继承法，溥杰被列为皇位第一顺位继承人。',
    '3月1日，伪满洲国公布帝位继承法，规定皇帝溥仪无子时由弟弟溥杰继承皇位。溥仪结婚十四年没有子女，这项法律把溥杰确定为第一顺位继承人。\n\n伪满洲国是日本在东北扶植的傀儡政权，帝位继承法的制定与日本控制“满洲”的政治安排相关。本条只记法律公布与继承顺序，不把伪满洲国写成得到中国承认的独立国家。',
    [], 'marJpMarch', {
      references: ['marJpPujie'],
      evidenceNote: '1937年3月事件汇编记3月1日伪满洲国公布帝位继承法、溥杰为第一顺位；溥杰条目用于核对人物关系，法律原文未逐条校读。',
    }),
  record('nagoya-expo', 15, '文化', '名古屋泛太平洋和平博览会开幕', '日本 · 名古屋',
    '名古屋举办泛太平洋和平博览会，展期持续到5月31日。',
    '3月15日，名古屋泛太平洋和平博览会在日本名古屋开幕，展期持续至5月31日。博览会以“和平”与泛太平洋交流为名，展示工业、交通、殖民地和城市发展等内容。\n\n博览会发生在日本扩大对华侵略、加强对外宣传的时期。“和平”是主办方的名称与口号，不等于当时日本对外政策转向和平；展品的宣传性质与参观人数须另据博览会资料。',
    [], 'marJpExpo', {
      references: ['marJpYear'],
      evidenceNote: '1937年日本条目记3月15日至5月31日名古屋泛太平洋和平博览会；展品目录与参观统计未逐项核对。',
    }),
  record('industry-plan', 29, '经济', '陆军省制定《重要产业五年计划要纲》', '日本 · 东京',
    '陆军省整备局制定重要产业五年计划，推动军需生产扩充。',
    '3月29日，日本陆军省整备局制定《重要产业五年计划要纲》，提出扩充重要产业与生产能力，以适应军备扩张和长期战争准备的需要。JACAR年表把“产业五年计划、生产力扩充计划”列为1937年3月的主要事项。\n\n该计划是陆军推动国家总动员与经济统制的一环，具体产业目标、预算与实施进度须据计划全文和后续阁议文件。本条记录计划制定，不把计划目标写成当年已经完成的产量。',
    [], 'marJpJacar', {
      evidenceNote: 'JACAR年表记1937年3月产业五年计划与生产力扩充计划制定；计划要纲的29日日期见同一机构年表条目，全文与实施记录未逐条核对。',
    }),
  record('marui-founded', 30, '经济', '丸井在东京中野创业', '日本 · 东京 · 中野',
    '丸井以分期付款信用商店的形式在中野开业。',
    '3月30日，丸井（Marui）在东京中野以分期付款信用商店的形式创业。丸井后来发展为日本知名的零售集团，以车站附近店面和信用卡、分期付款业务著称。\n\n本条记录创业日期与业态，不把后来的连锁规模、销售额或品牌形象提前到1937年。创业时的资本、店面与经营方式须据企业史资料。',
    [], 'marJpMarui', {
      references: ['marJpYear'],
      evidenceNote: '1937年日本条目与丸井企业条目均记3月30日中野创业；创业时的资本与经营细节未逐项核对。',
    }),
  record('diet-dissolved', 31, '政治', '林铣十郎内阁解散众议院', '日本 · 东京',
    '林铣十郎内阁在预算与政党对立中解散众议院，随后举行大选。',
    '3月31日，林铣十郎内阁依据《帝国宪法》第七条发布诏书，解散众议院。此前林内阁试图建立超党派内阁，要求阁员脱离政党，预算审议与政党关系持续紧张。解散后日本于4月30日举行大选，执政阵营失利，林内阁于5月31日辞职。\n\n解散众议院是林内阁与政党矛盾激化的结果，不等于内阁当天已经倒台。诏书只是解散令，选举结果与内阁辞职在此后发生；本条只记解散这一宪法程序。',
    ['hirohito'], 'marJpDisc', {
      references: ['marJpYear'], topicIds: ['japanese-cabinets'],
      evidenceNote: '国立公文书馆藏3月31日众议院解散诏书明确日期与署名；大选与内阁辞职日期见1937年日本条目，不写入本条日期。',
    }),
  record('boj-law', 31, '经济', '日本银行条例改正公布', '日本 · 东京',
    '日本公布改正后的日本银行条例，扩大日本银行的工业金融职能。',
    '3月31日，日本公布改正后的《日本银行条例》，并定于7月1日施行。改正条例为日本银行进入工业金融开辟道路，废止参与会，新设参与理事制度。\n\n这次条例改正是日本金融统制与军需产业融资体系调整的一部分。公布与施行日期不同，具体融资对象、额度和实施效果须据日本银行与政府文件；本条只记公布与制度变化。',
    [], 'marJpJacar', {
      evidenceNote: 'JACAR年表记日本银行条例改正于3月31日公布、7月1日施行，并说明参与会废止与参与理事新设；条例原文未逐条校读。',
    }),
]
