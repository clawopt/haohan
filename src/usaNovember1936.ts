import type { Category, HistoryEvent } from './data'

// November 1936 in the United States: Roosevelt's landslide re-election, the
// Bay Bridge, the relaunch of Life, and a Rachmaninoff premiere.
export const usaNovember1936Sources = {
  nov36UsDec: { name: 'Wikipedia · November 1936', url: 'https://en.wikipedia.org/wiki/November_1936' },
  nov36UsElection: { name: 'Wikipedia · 1936 United States presidential election', url: 'https://en.wikipedia.org/wiki/1936_United_States_presidential_election' },
  nov36UsBridge: { name: 'Wikipedia · San Francisco–Oakland Bay Bridge', url: 'https://en.wikipedia.org/wiki/San_Francisco%E2%80%93Oakland_Bay_Bridge' },
  nov36UsLife: { name: 'Wikipedia · Life (magazine)', url: 'https://en.wikipedia.org/wiki/Life_(magazine)' },
}

type SourceId = keyof typeof usaNovember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov36-us-${id}`, year: 1936, month: 11, country: 'usa', day,
    date: `1936年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaNovember1936Events: HistoryEvent[] = [
  record('roosevelt-reelected', 3, '政治', '罗斯福以压倒性优势连任总统', '美国 · 全国',
    '罗斯福在1936年总统选举中赢得46个州，以压倒性优势连任。',
    '11月3日，美国举行总统选举。民主党候选人富兰克林·罗斯福击败共和党候选人阿尔夫·兰登，赢得46个州、523张选举人票，以压倒性优势连任。这次选举是美国历史上选举人票差距最大的选举之一。\n\n选举结果反映新政联盟在工人、城市选民与少数族裔中的支持，也为罗斯福第二任期的行政改革与外交政策提供政治基础。具体普选票数、各州结果与国会席位须据选举档案；本条只记选举结果。',
    'nov36UsElection',
    '1936年美国总统选举资料与11月事件汇编记11月3日罗斯福赢得46州、523张选举人票；普选票与各州细节未逐条核对。',
    ['nov36UsDec'], ['roosevelt']),
  record('bay-bridge-opens', 12, '经济', '旧金山—奥克兰海湾大桥通车', '美国 · 旧金山',
    '连接旧金山与奥克兰的海湾大桥建成通车。',
    '11月12日，旧金山—奥克兰海湾大桥建成通车，连接旧金山半岛与东湾奥克兰。大桥是当时世界上最长的跨海大桥之一，显著改善了湾区交通与通勤，也成为1930年代美国公共工程的重要标志。\n\n大桥通车是区域交通与经济节点，不等于所有配套道路当天完成；具体造价、工期与技术细节须据交通档案。本条只记通车。',
    'nov36UsBridge',
    '海湾大桥条目与1936年11月事件汇编记11月12日通车；造价、工期与工程细节未逐条核对。',
    ['nov36UsDec'], []),
  record('rachmaninoff-premiere', 6, '文化', '拉赫玛尼诺夫第三交响曲在费城首演', '美国 · 费城',
    '拉赫玛尼诺夫《第三交响曲》由费城交响乐团首演，斯托科夫斯基指挥。',
    '11月6日，拉赫玛尼诺夫《A小调第三交响曲》（作品44）在费城首演，由莱奥波德·斯托科夫斯基指挥费城交响乐团。作品是拉赫玛尼诺夫晚年重要交响创作，首演后评价不一，随后逐渐进入常演曲目。\n\n首演是美国音乐生活的重要节点，不等于作品当天获得一致好评；具体排练、评论与录音须据乐团档案。本条只记首演。',
    'nov36UsDec',
    '1936年11月事件汇编记11月6日拉赫玛尼诺夫第三交响曲由费城交响乐团首演、斯托科夫斯基指挥；评论与乐团档案未逐条核对。',
    [], []),
  record('life-relaunch', 23, '文化', '《生活》杂志以图片周刊形式复刊', '美国 · 纽约',
    '亨利·卢斯创办的《生活》图片周刊首次出版。',
    '11月23日，亨利·卢斯旗下的《生活》（Life）以图片周刊形式在纽约复刊，首期以照片报道为核心，开创了美国大型图片新闻杂志的模式。杂志此后影响了20世纪新闻摄影与大众视觉文化。\n\n复刊是新闻与摄影文化节点，不等于图片周刊立即成为全国性媒体；首期印量、摄影师与后续发行须据出版档案。本条只记复刊。',
    'nov36UsLife',
    '《生活》杂志条目与1936年11月事件汇编记11月23日图片周刊首期出版；首期印量与发行数据未逐条核对。',
    ['nov36UsDec'], []),
]
