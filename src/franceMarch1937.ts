import type { Category, HistoryEvent } from './data'

// March 1937 in France: the Popular Front faces the Clichy shooting, a defense
// loan and naval patrols, while industry and education mark quieter changes.
export const franceMarchSources = {
  marFrChrono: { name: 'Un peu d’Histoire · 法国1937年大事记', url: 'https://www.unpeudhistoire.fr/histoire-france%26annee-1937.html' },
  marFrMarch: { name: 'Wikipedia · March 1937', url: 'https://en.wikipedia.org/wiki/March_1937' },
  marFrClichy: { name: 'Gauche MIP · 1937年3月16日克利希反法西斯游行遭警察枪击', url: 'https://www.gauchemip.org/spip.php?article21634' },
}

type SourceId = keyof typeof franceMarchSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `mar37-fr-${id}`, year: 1937, month: 3, country: 'france', day,
    date: `1937年3月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceMarchEvents: HistoryEvent[] = [
  record('steamer-mine', 1, '军事', '法国轮船“玛丽-泰蕾兹·勒博尔涅”号触雷', '西班牙 · 帕拉莫斯附近海域',
    '法国轮船在同一雷区触雷，勉强驶入帕拉莫斯港。',
    '3月1日，法国轮船“玛丽-泰蕾兹·勒博尔涅”号在西班牙帕拉莫斯附近触雷。这里正是此前英国邮轮“兰多弗里城堡”号受损的同一海域。船只受损后仍驶入帕拉莫斯港。\n\n水雷来源与布设方在资料中未明确，不能据此认定某一方蓄意攻击法国船只。事件显示西班牙内战外溢对中立国航运的威胁；伤亡与船体损伤细节未在所引资料中展开。',
    'marFrMarch',
    '1937年3月事件汇编记3月1日法国轮船触雷并驶入帕拉莫斯；水雷来源与伤亡数字未由该资料说明。',
    [], []),
  record('ppa-founded', 11, '政治', '哈吉在阿尔及尔创立阿尔及利亚人民党', '法属阿尔及利亚 · 阿尔及尔',
    '梅萨利·哈吉创建阿尔及利亚人民党，推动阿尔及利亚民族独立。',
    '3月11日，梅萨利·哈吉在阿尔及尔创立阿尔及利亚人民党（PPA）。该党继承“北非之星”的民族主义路线，要求阿尔及利亚摆脱法国殖民统治、实现独立。\n\n阿尔及利亚当时是法国殖民地，PPA 的成立是殖民统治下民族主义组织化的节点。法国当局随后对 PPA 进行压制，党的活动与殖民当局的镇压须分别理解；本条只记成立这一行为。',
    'marFrChrono',
    'Un peu d’Histoire 法国年表记3月11日哈吉在阿尔及尔创建PPA；阿尔及利亚殖民档案与党的成立文件未逐条核对。',
    [], []),
  record('defense-loan', 12, '经济', '法国发行国防公债', '法国',
    '法国政府发行国防公债，为重整军备筹措资金。',
    '3月12日，法国发行国防公债，为重整军备筹措资金。公债发行发生在欧洲局势紧张、法国军费上升的背景下，与人民阵线政府此前的国防开支和航空工业国有化相联系。\n\n公债发行是财政与军事准备的节点，不等于认购额当天已经完成或全部用于国防。具体利率、期限与认购结果须据法国财政部与银行档案；本条只记发行行为。',
    'marFrChrono',
    'Un peu d’Histoire 法国年表记3月12日发行国防公债；公债条款与认购统计未逐项核对。',
    [], ['blum']),
  record('spanish-patrol', 14, '军事', '法国海军参加四国巡逻西班牙海域', '西班牙周边海域',
    '法国与英、德、意海军开始分区巡逻，阻止武器和志愿者进入西班牙。',
    '3月14日零时起，法国、英国、德国和意大利的海军开始巡逻西班牙海域，执行“不干涉”安排。法国负责部分地中海与比斯开湾海域，巡逻目的是阻止外国武器和志愿者进入西班牙内战。\n\n法国是“不干涉”政策的主要推动者之一，但巡逻并未真正阻断德国、意大利对佛朗哥的援助，也未阻止苏联对共和国的援助。本条只记法国海军参加巡逻的开始。',
    'marFrMarch',
    '1937年3月事件汇编记3月14日四国海军巡逻开始；法国海军分区与舰船记录未逐项核对。',
    [], ['blum']),
  record('clichy-shooting', 16, '政治', '克利希反法西斯游行遭警察枪击', '法国 · 巴黎近郊克利希',
    '警察向反对极右集会的游行人群开枪，造成死伤。',
    '3月16日，法国极右组织“法兰西社会党”（原火十字团）在巴黎近郊克利希举行集会。左翼政党与工会号召反对集会，人群在会场外围与警方对峙，警察开枪，造成数人死亡、约两百人受伤。\n\n克利希枪击事件发生在人民阵线政府执政期间，加深了左翼对政府与内政部长多莫瓦的不信任，也成为人民阵线内部矛盾激化的标志之一。死亡人数在不同资料中有4人、5人等表述，本条不取单一数字。',
    'marFrClichy',
    'Gauche MIP专题与Un peu d’Histoire年表均记3月16日克利希枪击；死亡人数有4人与5人表述，伤者约200人，具体名单与调查结论未逐条核对。',
    ['marFrChrono'], ['blum']),
  record('de-chambrun-shot', 17, '外交', '前法国驻意大利大使德·尚布伦遇刺受伤', '法国 · 巴黎',
    '一名女子枪击前驻意大使夏尔·德·尚布伦，击中其大腿。',
    '3月17日，法国前驻意大利大使夏尔·德·尚布伦在巴黎被一名女子枪击，大腿受伤。袭击者称德·尚布伦破坏了她与墨索里尼的友谊，事件带有个人与政治交织的色彩。\n\n德·尚布伦是法国对意外交的资深人物，遇刺事件发生在法意关系紧张、西班牙内战外溢的时期。袭击者的动机供述不等于已经证实的外交阴谋；本条只记枪击与受伤。',
    'marFrMarch',
    '1937年3月事件汇编记3月17日德·尚布伦遇刺与袭击者动机；法国警方与法院记录未核对。',
    [], []),
  record('zay-circular', 22, '社会', '教育部长扎伊发布关于学生过劳问题的通函', '法国 · 巴黎',
    '教育部长让·扎伊就学生过劳与应试压力发布通函。',
    '3月22日，法国教育部长让·扎伊发布通函，针对学生过劳与“填鸭式”应试教育提出改进要求。通函要求学校关注课业负担与考试压力，调整教学安排。\n\n这是人民阵线时期教育改革的一项行政措施，属于教育管理层面的调整，不等于学制或课程体系当天已经全面改革。通函的具体条款、适用范围与执行情况须据教育部档案。',
    'marFrChrono',
    'Un peu d’Histoire 法国年表记3月22日扎伊通函；通函全文与各校执行情况未逐条核对。',
    [], []),
  record('citroen-traction', 24, '经济', '雪铁龙推出前轮驱动7CV“Traction Avant”', '法国 · 巴黎',
    '雪铁龙展示首款量产前轮驱动轿车7CV“Traction Avant”。',
    '3月24日，雪铁龙展示7CV“Traction Avant”轿车，这是该公司首款量产的前轮驱动车型。前轮驱动、承载式车身与独立悬挂等技术使这款车成为1930年代法国汽车工业的代表作之一。\n\n车展或发布是产品亮相节点，不等于当天已经完成量产与交付。车型的生产周期、产量与二战期间的使用情况须据雪铁龙企业史；本条只记发布。',
    'marFrChrono',
    'Un peu d’Histoire 法国年表记3月24日雪铁龙展示7CV Traction Avant；企业史与量产记录未逐项核对。',
    [], []),
]
