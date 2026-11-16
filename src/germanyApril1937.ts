import type { Category, HistoryEvent } from './data'

// April 1937 in Nazi Germany: the Condor Legion's air war in Spain, Hitler's
// birthday displays, rearmament prototypes, and the ban on B'nai B'rith.
export const germanyAprilSources = {
  aprGeApril: { name: 'Wikipedia · April 1937', url: 'https://en.wikipedia.org/wiki/April_1937' },
  aprGeJaen: { name: 'Wikipedia · Bombing of Jaén', url: 'https://en.wikipedia.org/wiki/Bombing_of_Ja%C3%A9n' },
  aprGeGuernica: { name: 'Wikipedia · Bombing of Guernica', url: 'https://en.wikipedia.org/wiki/Bombing_of_Guernica' },
  aprGeStamps: { name: 'Stamp Collecting World · 第三帝国1937年纪念邮票', url: 'https://www.stamp-collecting-world.com/thirdreich_1937.html' },
  aprGeJu89: { name: 'Wikipedia · Junkers Ju 89', url: 'https://en.wikipedia.org/wiki/Junkers_Ju_89' },
  aprGeVolkshalle: { name: 'Wikipedia · Volkshalle', url: 'https://en.wikipedia.org/wiki/Volkshalle' },
  aprGeBnai: { name: 'Wikipedia · B’nai B’rith', url: 'https://en.wikipedia.org/wiki/B%27nai_B%27rith' },
}

type SourceId = keyof typeof germanyAprilSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `apr37-ge-${id}`, year: 1937, month: 4, country: 'germany', day,
    date: `1937年4月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyAprilEvents: HistoryEvent[] = [
  record('jaen-bombing', 1, '军事', '秃鹰军团轰炸哈恩', '西班牙 · 哈恩',
    '德国秃鹰军团轰炸西班牙哈恩，造成大量平民死亡。',
    '4月1日，德国“秃鹰军团”对西班牙哈恩实施轰炸，造成159人死亡。哈恩当时位于共和国控制区，轰炸是德国对佛朗哥一方军事支持的一部分，也是西班牙内战中外空军介入的早期案例。\n\n轰炸的具体目标、投弹数量与军事理由须据德国空军与西班牙档案；本条只记日期、执行方与死亡人数。平民伤亡数字在不同资料中可能有差异。',
    'aprGeJaen',
    '哈恩轰炸条目记4月1日、秃鹰军团与159人死亡；德军作战记录与西班牙地方档案未逐条核对。',
    ['aprGeApril'], []),
  record('hitler-stamps', 5, '文化', '首批希特勒头像邮票在德国发行', '德国',
    '德国发行首批印有希特勒头像的邮票，纪念其48岁生日。',
    '4月5日，德国发行首批印有希特勒头像的邮票，纪念希特勒4月20日的48岁生日。邮票把国家元首形象纳入日常邮政用品，是纳粹个人崇拜与宣传体系的一部分。\n\n邮票发行是宣传与文化节点，不等同于政治制度的改变；发行量、面值与设计者须据邮政档案。本条只记发行日期与纪念对象。',
    'aprGeStamps',
    '1937年4月事件汇编与第三帝国邮票目录记4月5日首批希特勒头像邮票发行；邮票目录与发行量未逐项核对。',
    ['aprGeApril'], ['hitler']),
  record('ju89-first-flight', 11, '军事', '容克 Ju 89 原型机首飞', '德国 · 德绍',
    '容克 Ju 89 重型轰炸机原型机完成首飞，但未进入量产。',
    '4月11日，容克 Ju 89 重型轰炸机原型机完成首次飞行。该机是德国空军远程重型轰炸机探索项目的一部分，最终没有进入批量生产。\n\n首飞是航空技术节点，不等于德国空军当天已经装备重型轰炸机；原型机性能、项目取消原因与后续机型须据航空史资料。本条只记首飞。',
    'aprGeJu89',
    'Ju 89条目记4月11日首飞与未量产；试飞数据与项目档案未逐条核对。',
    ['aprGeApril'], []),
  record('hitler-birthday-parade', 20, '政治', '希特勒48岁生日阅兵', '德国 · 柏林',
    '希特勒检阅一万四千名军队，施佩尔展示“人民大厅”模型。',
    '4月20日，希特勒在柏林检阅一万四千名军队，庆祝48岁生日。建筑师阿尔伯特·施佩尔同时向希特勒展示“人民大厅”（Volkshalle）的渲染图与首个模型，该建筑计划属于柏林“世界之都日耳曼尼亚”的改造方案。\n\n阅兵与建筑模型是纳粹政权展示权力与规划未来的宣传节点，不等于“人民大厅”已经开工或建成。阅兵规模、参加部队与建筑方案的后续变化须据档案。',
    'aprGeApril',
    '1937年4月事件汇编记4月20日一万四千人阅兵与施佩尔展示Volkshalle模型；阅兵记录与建筑档案未逐条核对。',
    ['aprGeVolkshalle'], ['hitler']),
  record('bnai-brith-ban', 20, '政治', '纳粹德国禁止 B’nai B’rith', '德国 · 柏林',
    '纳粹当局以“传播共产主义宣传”为由禁止犹太组织 B’nai B’rith。',
    '4月20日，纳粹德国以个别成员“传播共产主义宣传”为由，禁止犹太组织 B’nai B’rith 在德国活动。该组织此前已在纳粹统治下受到限制，禁令使其公开活动被迫停止。\n\n禁令是纳粹对犹太社团组织化生活的打压，属于1930年代反犹政策的一部分。具体查禁程序、财产处置与成员命运须据档案；本条只记禁令与官方理由，不把指控当作事实。',
    'aprGeBnai',
    'B’nai B’rith条目与1937年4月事件汇编记4月20日禁令及官方理由；查禁文件与财产处置未逐条核对。',
    ['aprGeApril'], []),
  record('guernica-bombing', 26, '军事', '秃鹰军团轰炸格尔尼卡', '西班牙 · 格尔尼卡',
    '德国秃鹰军团与意大利空军轰炸格尔尼卡，城镇被毁，大量平民死亡。',
    '4月26日，德国“秃鹰军团”与意大利空军对西班牙巴斯克城镇格尔尼卡实施大规模轰炸，城镇大部分被毁，大量平民死亡。轰炸发生在佛朗哥军队进攻巴斯克地区期间，目标包括桥梁、道路与城镇中心。\n\n格尔尼卡轰炸是西班牙内战中最著名的平民灾难之一，毕加索后来以此为题材创作壁画。死亡人数在资料中有不同统计；佛朗哥方面曾否认责任，把破坏归咎于共和派，本条不采用这一宣传说法。',
    'aprGeGuernica',
    '格尔尼卡轰炸条目记4月26日、秃鹰军团与意大利空军参与；死亡人数存在不同统计，具体架次与目标未逐条核对。',
    ['aprGeApril'], []),
]
