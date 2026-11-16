import type { Category, HistoryEvent } from './data'

// March 1937 in colonial Korea: the shrine-worship crisis deepens at the
// Pyongyang mission schools, and Korean literature loses one of its young
// writers.
const archive = (url: string, title: string) => ({
  name: `崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校 · ${title}`,
  url,
})

export const koreaMarchSources = {
  marKoNovel: { name: '文学人新闻 · 李泰俊《福德房》与城北洞', url: 'https://www.munhakin.kr/news/articleView.html?idxno=7394' },
  marKoKim: { name: 'Wikipedia · Kim Yujeong（金裕贞）', url: 'https://en.wikipedia.org/wiki/Kim_Yujeong' },
  marKoSungsil: archive('https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf', '1937年危机'),
}

type SourceId = keyof typeof koreaMarchSources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `mar37-korea-${id}`, year: 1937, month: 3, country: 'korea', day,
    date: day ? `1937年3月${day}日` : '1937年3月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaMarchEvents: HistoryEvent[] = [
  record('kim-yujeong-death', 29, '文化', '小说家金裕贞去世', '朝鲜 · 京城',
    '朝鲜短篇小说家金裕贞病逝，年仅29岁。',
    '3月29日，朝鲜短篇小说家金裕贞在京城病逝，年仅29岁。他出生于江原道春川，代表作包括《春·春》《동백꽃》（山茶花）等，以乡土语言、讽刺与人情描写著称。\n\n金裕贞的去世是朝鲜近代文学史上的损失。他的作品在殖民统治与农村贫困的背景下写成，不能简单归入“乡土文学”或“抵抗文学”单一标签；具体作品评价与文学史地位须另据研究。',
    'marKoKim',
    '维基百科金裕贞条目记1937年3月29日去世与代表作；朝鲜文学史研究与作品原文未逐条核对。',
  ),
  record('bodeokbang', undefined, '文化', '李泰俊《福德房》发表于《朝光》3月号', '朝鲜 · 京城',
    '李泰俊的短篇小说《福德房》在《朝光》3月号发表。',
    '1937年3月，李泰俊的短篇小说《福德房》在杂志《朝光》3月号发表。作品以京城一家“福德房”（房地产中介）为背景，描写安初试、徐参议、朴熙完等老人在殖民统治与城市变化中的没落与怀旧。\n\n《福德房》是1930年代朝鲜短篇小说的代表作之一。发表月份明确到3月，具体出版日未在资料中说明，本条不补写日期；作品评价与作者后来的文学活动须分别理解。',
    'marKoNovel',
    '文学人新闻记1937年3月《朝光》发表《福德房》及作品梗概；《朝光》原刊与作品全文未逐页核对。',
  ),
  record('sungsil-shrine', undefined, '社会', '平壤三崇拒绝神社参拜，废校危机加深', '朝鲜 · 平壤',
    '崇实专门学校、崇实中学与崇义女校拒绝神社参拜，与殖民当局的冲突持续。',
    '1937年，平壤“三崇”——崇实专门学校、崇实中学与崇义女学校——因拒绝神社参拜与殖民当局冲突不断。日本在1930年代把神社参拜强加给基督教学校，三崇校方与 Mission 拒绝参拜，当局则以废校、转让和分离引继相威胁。\n\n三崇的抵抗是朝鲜基督教界与日本殖民教育政策冲突的集中表现。校方的拒绝不等于所有师生与家长立场一致；学校最终在1938年前后被废校或改组，具体交涉日期须据校史与总督府档案。',
    'marKoSungsil',
    '崇实大学金胜泰研究梳理1930年代神社参拜强制与三崇废校危机；1937年3月的具体交涉日期未在论文中逐日列出，本条只记月份。',
  ),
  record('imperial-subject-education', undefined, '政治', '朝鲜总督府强化“皇国臣民”教育', '朝鲜 · 京城',
    '殖民当局通过誓词、体操与神社参拜强化对朝鲜学生的思想统制。',
    '1937年，朝鲜总督府在学校中强化“皇国臣民”教育：学生被要求背诵《皇国臣民誓词》、做“皇国臣民体操”，并参加神社参拜。这些仪式与课程把天皇制意识形态、同化政策和战时动员结合到日常教育中。\n\n这类措施不是某一天单独颁布的法令，而是1930年代后期逐步强化的政策组合。具体实施范围、开始日期与地方差异须据《朝鲜总督府官报》和学校档案；本条记1937年3月的政策状态，不把某一仪式写成全国同日开始。',
    'marKoSungsil',
    '崇实大学研究引用1937年12月总督府学务局机密资料，说明“皇道主义、内鲜一体、忍苦锻炼”三原则与誓词、体操、神社参拜的关系；1937年3月的具体执行文件未逐条核对。',
  ),
]
