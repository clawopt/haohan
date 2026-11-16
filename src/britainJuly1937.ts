import type { Category, HistoryEvent } from './data'

// July 1937 in Britain: the Peel Commission recommends partition, Mosley's
// Blackshirts march, and Wimbledon and the Open produce new champions.
export const britainJulySources = {
  julBrJuly: { name: 'Wikipedia · July 1937', url: 'https://en.wikipedia.org/wiki/July_1937' },
  julBrHolditch: { name: 'Wikipedia · Holditch Colliery disaster', url: 'https://en.wikipedia.org/wiki/Holditch_Colliery_disaster' },
  julBrWimbledon: { name: 'Wikipedia · 1937 Wimbledon Championships', url: 'https://en.wikipedia.org/wiki/1937_Wimbledon_Championships' },
  julBrMosley: { name: 'Wikipedia · Oswald Mosley', url: 'https://en.wikipedia.org/wiki/Oswald_Mosley' },
  julBrPeel: { name: 'Wikipedia · Peel Commission', url: 'https://en.wikipedia.org/wiki/Peel_Commission' },
  julBrOpen: { name: 'Wikipedia · 1937 Open Championship', url: 'https://en.wikipedia.org/wiki/1937_Open_Championship' },
}

type SourceId = keyof typeof britainJulySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jul37-br-${id}`, year: 1937, month: 7, country: 'britain', day,
    date: `1937年7月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainJulyEvents: HistoryEvent[] = [
  record('holditch-colliery', 2, '社会', '霍尔德奇煤矿瓦斯爆炸', '英国 · 斯塔福德郡',
    '霍尔德奇煤矿发生爆炸，30名矿工死亡。',
    '7月2日，英国斯塔福德郡霍尔德奇煤矿发生瓦斯爆炸，30名矿工死亡。事故是英国1930年代严重的矿难之一，暴露出矿井安全与通风管理的问题。\n\n矿难是工业安全史的节点，不等于英国当天已经修改矿业安全法规；具体事故原因、调查结论与赔偿须据矿业监察档案。本条只记爆炸与死亡人数。',
    'julBrHolditch',
    'Holditch Colliery disaster条目与1937年7月事件汇编记7月2日与30人死亡；事故调查报告未逐条核对。',
    ['julBrJuly'], []),
  record('wimbledon-budge', 2, '文化', '唐·巴奇赢得温网男单冠军', '英国 · 伦敦 · 温布尔登',
    '美国选手唐·巴奇击败德国选手冯·克拉姆，赢得温网男单冠军。',
    '7月2日，美国网球选手唐·巴奇在温布尔登男单决赛中击败德国选手戈特弗里德·冯·克拉姆，夺得冠军。比赛发生在1930年代网球黄金时期，巴奇后来成为首位完成年度全满贯的男选手。\n\n温网冠军是体育文化节点，不等于当时网球已经职业化；赛事纪录、观众人数与选手背景须据网球档案。本条只记比赛结果。',
    'julBrWimbledon',
    '1937年温网条目与7月事件汇编记7月2日巴奇击败冯·克拉姆；比赛记录与观众人数未逐条核对。',
    ['julBrJuly'], []),
  record('mosley-march', 4, '政治', '莫斯利黑衫军游行与反法西斯冲突', '英国 · 伦敦',
    '奥斯瓦尔德·莫斯利的黑衫军游行与反法西斯群众发生冲突，27人被捕。',
    '7月4日，奥斯瓦尔德·莫斯利领导的英国法西斯联盟（黑衫军）约7000人从肯特镇游行至特拉法加广场，与试图阻拦的反法西斯群众发生冲突。警方部署2383人维持秩序，27人被捕。\n\n游行是1930年代英国法西斯运动与反法西斯对抗的公开事件，不等于英国社会已经法西斯化；具体冲突经过、伤亡与警方处置须据当时报道与档案。本条只记游行与被捕人数。',
    'julBrMosley',
    '莫斯利条目与1937年7月事件汇编记7月4日7000人游行、2383名警察与27人被捕；冲突细节未逐条核对。',
    ['julBrJuly'], []),
  record('peel-commission', 7, '外交', '皮尔委员会报告建议巴勒斯坦分治', '英国 · 伦敦',
    '英国巴勒斯坦皇家委员会报告建议结束委任统治，将巴勒斯坦分为阿拉伯国家与犹太国家。',
    '7月7日，英国巴勒斯坦皇家委员会（皮尔委员会）公布报告，建议结束英国对巴勒斯坦的委任统治，把巴勒斯坦分为阿拉伯国家与犹太国家，并保留英国控制的圣地与走廊。英国政府当天表示同意报告结论，并准备寻求国际联盟授权实施分治。\n\n报告是英国对巴勒斯坦政策的重要转折，不等于分治方案当天已经实施；阿拉伯方面与犹太方面对报告反应不一，分治计划最终未能执行。具体边界、人口与各方反应须据委员会报告与外交档案。',
    'julBrPeel',
    '皮尔委员会条目与1937年7月事件汇编记7月7日报告公布与分治建议；报告全文与各方反应未逐条核对。',
    ['julBrJuly'], []),
  record('open-championship', 9, '文化', '亨利·科顿赢得英国公开赛', '英国 · 绍斯波特 · 皇家伯克代尔',
    '英国高尔夫球手亨利·科顿赢得1937年英国公开赛。',
    '7月9日，英国高尔夫球手亨利·科顿在皇家伯克代尔球场赢得1937年英国公开赛。科顿是1930年代英国高尔夫的代表人物，此后又两次赢得公开赛。\n\n公开赛冠军是体育文化节点，不等于英国高尔夫整体水平已经领先；比赛成绩、观众与奖金须据高尔夫档案。本条只记夺冠。',
    'julBrOpen',
    '1937年英国公开赛条目与7月事件汇编记7月9日科顿夺冠；比赛记录与奖金未逐条核对。',
    ['julBrJuly'], []),
]
