import type { Category, HistoryEvent } from './data'

// April 1937 in France: the Normandie sets a transatlantic record, the
// Popular Front government reshuffles prefects, and the press reports Guernica.
export const franceAprilSources = {
  aprFrChrono: { name: 'Un peu d’Histoire · 法国1937年大事记', url: 'https://www.unpeudhistoire.fr/histoire-france%26annee-1937.html' },
  aprFrApril: { name: 'Wikipedia · April 1937', url: 'https://en.wikipedia.org/wiki/April_1937' },
  aprFrNormandie: { name: 'Wikipedia · SS Normandie', url: 'https://en.wikipedia.org/wiki/SS_Normandie' },
}

type SourceId = keyof typeof franceAprilSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `apr37-fr-${id}`, year: 1937, month: 4, country: 'france', day,
    date: `1937年4月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceAprilEvents: HistoryEvent[] = [
  record('normandie-record', 5, '经济', '“诺曼底”号创大西洋横渡速度纪录', '法国 · 勒阿弗尔 → 美国 · 纽约',
    '法国邮轮“诺曼底”号以平均30.98节横渡大西洋，创下新纪录。',
    '4月5日，法国邮轮“诺曼底”号以平均30.98节的速度完成大西洋横渡，创下新的跨大西洋速度纪录。该船是1930年代法国商船队的旗舰，以流线型船体与装饰艺术风格内部设计著称。\n\n速度纪录是航运与工程节点，不等于法国航运业整体超过英美；纪录的认证、航程与载客情况须据航运档案。本条只记这次横渡。',
    'aprFrNormandie',
    '“诺曼底”号条目与1937年4月事件汇编记4月5日30.98节纪录；航运记录与认证文件未逐条核对。',
    ['aprFrApril'], []),
  record('obelisk-listed', 13, '文化', '巴黎协和广场方尖碑列入历史古迹清单', '法国 · 巴黎',
    '协和广场的卢克索方尖碑被列入法国历史古迹清单。',
    '4月13日，巴黎协和广场的卢克索方尖碑被列入法国历史古迹清单。方尖碑由埃及赠予法国，1836年竖立在协和广场，是巴黎城市景观与法埃文化交流的重要标志。\n\n列入清单是文物保护与行政认定，不等于方尖碑当天发生物理变化；具体分类文件、保护范围与修复记录须据法国文化部档案。本条只记列级。',
    'aprFrChrono',
    'Un peu d’Histoire法国年表记4月13日方尖碑列级；法国历史古迹档案与列级文件未逐条核对。',
    ['aprFrApril'], []),
  record('moulin-appointment', 24, '政治', '让·穆兰被任命为巴黎编外省长', '法国 · 巴黎',
    '让·穆兰被任命为巴黎编外省长，进入法国地方行政高层。',
    '4月24日，让·穆兰被任命为巴黎“编外省长”（préfet hors cadre）。穆兰此后在法国地方行政与抵抗运动中扮演重要角色，1943年任法国抵抗运动全国委员会主席，同年被盖世太保逮捕并死于酷刑。\n\n1937年的任命是行政职务节点，不等于穆兰当天已经进入抵抗运动领导层；其战时经历在此后展开。具体任命文件、职务范围与后续调动须据法国行政档案。',
    'aprFrChrono',
    'Un peu d’Histoire法国年表记4月24日穆兰被任命为巴黎编外省长；任命文件与职务记录未逐条核对，战时经历不写入本条。',
    [], []),
  record('belgium-locarno', 24, '外交', '法国同意比利时退出洛迦诺安全义务', '法国 · 巴黎',
    '法国与英国允许比利时解除《洛迦诺条约》中的相互安全义务。',
    '4月24日，法国与英国允许比利时退出《洛迦诺条约》所规定的安全义务。比利时寻求恢复中立地位，避免被卷入法德冲突；法国同意解除对比利时的军事义务，比利时则重申独立与中立。\n\n这一安排改变了1925年洛迦诺体系下的西欧安全结构，也削弱了法国在德国西翼的集体安全安排。具体换文与条约文本须据法国外交部档案；本条只记法国的同意。',
    'aprFrApril',
    '1937年4月事件汇编记4月24日英法允许比利时退出洛迦诺安全义务；法国外交部换文未逐条核对。',
    [], ['blum']),
  record('ce-soir-guernica', 30, '文化', '《今晚报》头版报道格尔尼卡轰炸', '法国 · 巴黎',
    '阿拉贡主办的《今晚报》在头版报道格尔尼卡轰炸，配以现场消息。',
    '4月30日，法国作家路易·阿拉贡主办的《今晚报》（Ce soir）在头版报道德国秃鹰军团轰炸西班牙格尔尼卡的消息。报道把巴斯克城镇被毁与平民伤亡带入法国公众视野，成为法国左翼舆论关注西班牙内战的重要节点。\n\n报纸报道是新闻与舆论事件，不等于法国政府当天改变“不干涉”政策；报道内容、消息来源与读者反应须据报纸原版。本条只记头版报道。',
    'aprFrChrono',
    'Un peu d’Histoire法国年表记4月30日《今晚报》头版报道格尔尼卡轰炸；报纸原版与阿拉贡编辑记录未逐条核对。',
    ['aprFrApril'], []),
]
