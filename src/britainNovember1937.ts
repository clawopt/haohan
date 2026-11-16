import type { Category, HistoryEvent } from './data'

// November 1937 in Britain: MacDonald's death, Palestine military courts,
// air-raid shelters, and an agent to Franco.
export const britainNovemberSources = {
  novBrNov: { name: 'Wikipedia · November 1937', url: 'https://en.wikipedia.org/wiki/November_1937' },
}

type SourceId = keyof typeof britainNovemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov37-br-${id}`, year: 1937, month: 11, country: 'britain', day,
    date: `1937年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainNovemberEvents: HistoryEvent[] = [
  record('macdonald-death', 9, '政治', '拉姆齐·麦克唐纳去世', '英国 · 大西洋',
    '英国前首相拉姆齐·麦克唐纳去世，享年71岁。',
    '11月9日，英国前首相拉姆齐·麦克唐纳在前往南美的船上去世，享年71岁。他是英国工党创始人之一，曾于1924年和1929—1935年出任首相，后领导国民联合政府。\n\n麦克唐纳的去世是英国政治史节点，不等于其政治路线当天终结；葬礼与历史评价须据当时报道与传记。本条只记去世。',
    'novBrNov',
    '麦克唐纳条目与1937年11月事件汇编记11月9日去世、享年71岁；病史与葬礼记录未逐条核对。',
    ['novBrNov'], []),
  record('palestine-courts', 11, '外交', '英国在巴勒斯坦设立特别军事法庭', '巴勒斯坦 · 耶路撒冷',
    '英国托管当局设立特别军事法庭，审判涉嫌携带武器的阿拉伯人。',
    '11月11日，英国驻巴勒斯坦专员设立特别军事法庭，审判涉嫌恐怖活动的嫌疑人；凡携带未经许可的枪支、炸弹或弹药者可能被判处死刑。此举是英国镇压1936—1939年阿拉伯起义的措施。\n\n军事法庭是殖民镇压政策的一部分，不等于起义当天停止；具体审判、处决与各方反应须据英国托管档案。本条只记设立。',
    'novBrNov',
    '1937年11月事件汇编记11月11日英国在巴勒斯坦设立特别军事法庭；托管档案与审判记录未逐条核对。',
    ['novBrNov'], []),
  record('air-raid-shelters', 16, '政治', '英国议会投票建设防空洞', '英国 · 伦敦',
    '英国议员投票决定在大多数城镇建设防空洞，应对空袭威胁。',
    '11月16日，英国议会投票决定在大多数城镇建设防空洞。此前西班牙内战与日本空袭中国城市的画面加剧了英国对空袭的担忧，政府开始把民防纳入重整军备计划。\n\n投票是民防政策节点，不等于防空洞当天开工或覆盖全国；具体预算、选址与建设进度须据英国内政部档案。本条只记投票。',
    'novBrNov',
    '1937年11月事件汇编记11月16日英国议会投票建设防空洞；内政部档案与建设记录未逐条核对。',
    ['novBrNov'], ['chamberlain']),
  record('hodgson-burgos', 16, '外交', '英国任命驻佛朗哥方面代表', '西班牙 · 布尔戈斯',
    '英国任命罗伯特·霍奇森为驻佛朗哥政权代表，属于事实上的承认。',
    '11月16日，英国政府宣布任命罗伯特·霍奇森为驻西班牙布尔戈斯佛朗哥政权的代表。这一任命未构成正式外交承认，但被视为对佛朗哥方面的事实承认，是佛朗哥政权的外交收获。\n\n任命是英国对西班牙内战“不干涉”政策的调整，不等于英国当天承认佛朗哥政府或停止与共和国方面接触；具体任命文件与后续政策须据英国外交部档案。本条只记任命。',
    'novBrNov',
    '1937年11月事件汇编记11月16日英国任命霍奇森为驻布尔戈斯代表；外交部档案与西班牙方面反应未逐条核对。',
    ['novBrNov'], ['chamberlain']),
]
