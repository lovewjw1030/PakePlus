window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!doctype html>
<html lang="zh-CN" id="htmlRoot">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <title>FocusWord | 智能词汇本</title>

  <style>
    @font-face {
      font-family: 'Playfair Display';
      font-style: italic;
      font-weight: 600;
      font-display: swap;
      src: local('Playfair Display'), local('Georgia');
    }
  </style>
  <script>
var GLOBAL_VOCAB = [
  { id: "g1", category: "高中3500词", word: "abandon", phonetic: "/əˈbændən/", translation: "放弃；遗弃", example: "He abandoned his plan to travel abroad." },
  { id: "g2", category: "高中3500词", word: "ability", phonetic: "/əˈbɪləti/", translation: "能力；才能", example: "She has the ability to solve complex problems." },
  { id: "g3", category: "高中3500词", word: "able", phonetic: "/ˈeɪbl/", translation: "能够的；有能力的", example: "She is able to speak three languages." },
  { id: "g4", category: "高中3500词", word: "abnormal", phonetic: "/æbˈnɔːrml/", translation: "反常的；异常的", example: "The abnormal weather worried the farmers." },
  { id: "g5", category: "高中3500词", word: "aboard", phonetic: "/əˈbɔːrd/", translation: "在船/飞机/车上", example: "All passengers went aboard the plane." },
  { id: "g6", category: "高中3500词", word: "abolish", phonetic: "/əˈbɒlɪʃ/", translation: "废除；废止", example: "The government decided to abolish the old law." },
  { id: "g7", category: "高中3500词", word: "about", phonetic: "/əˈbaʊt/", translation: "关于；大约", example: "Tell me about your holiday." },
  { id: "g8", category: "高中3500词", word: "above", phonetic: "/əˈbʌv/", translation: "在……上方；超过", example: "The plane flew above the clouds." },
  { id: "g9", category: "高中3500词", word: "abroad", phonetic: "/əˈbrɔːd/", translation: "在国外；到国外", example: "She went abroad to study medicine." },
  { id: "g10", category: "高中3500词", word: "absence", phonetic: "/ˈæbsəns/", translation: "缺席；缺乏", example: "His absence from the meeting was noticed." },
  { id: "g11", category: "高中3500词", word: "absent", phonetic: "/ˈæbsənt/", translation: "缺席的；不在的", example: "Three students were absent from class today." },
  { id: "g12", category: "高中3500词", word: "absolute", phonetic: "/ˈæbsəluːt/", translation: "绝对的；完全的", example: "I have absolute confidence in her ability." },
  { id: "g13", category: "高中3500词", word: "absorb", phonetic: "/əbˈzɔːrb/", translation: "吸收；吸引", example: "Plants absorb carbon dioxide from the air." },
  { id: "g14", category: "高中3500词", word: "abstract", phonetic: "/ˈæbstrækt/", translation: "抽象的；摘要", example: "The concept is too abstract for young children." },
  { id: "g15", category: "高中3500词", word: "abundant", phonetic: "/əˈbʌndənt/", translation: "丰富的；充裕的", example: "The country has abundant natural resources." },
  { id: "g16", category: "高中3500词", word: "abundantly", phonetic: "/əˈbʌndəntli/", translation: "丰富地", example: "The garden grows abundantly." },
  { id: "g17", category: "高中3500词", word: "abuse", phonetic: "/əˈbjuːz/", translation: "滥用；虐待", example: "Drug abuse is a serious social problem." },
  { id: "g18", category: "高中3500词", word: "academic", phonetic: "/ˌækəˈdemɪk/", translation: "学术的；学业的", example: "She has an excellent academic record." },
  { id: "g19", category: "高中3500词", word: "academy", phonetic: "/əˈkædəmi/", translation: "学院；学会", example: "She attended a military academy." },
  { id: "g20", category: "高中3500词", word: "accelerate", phonetic: "/əkˈseləreɪt/", translation: "加速；促进", example: "The car accelerated rapidly." },
  { id: "g21", category: "高中3500词", word: "accent", phonetic: "/ˈæksənt/", translation: "口音；重音", example: "She speaks English with a Chinese accent." },
  { id: "g22", category: "高中3500词", word: "accept", phonetic: "/əkˈsept/", translation: "接受；认可", example: "Please accept my sincere apology." },
  { id: "g23", category: "高中3500词", word: "access", phonetic: "/ˈækses/", translation: "通道；进入；访问", example: "Students have access to the library." },
  { id: "g24", category: "高中3500词", word: "accident", phonetic: "/ˈæksɪdənt/", translation: "事故；意外", example: "The car accident happened at the corner." },
  { id: "g25", category: "高中3500词", word: "accommodate", phonetic: "/əˈkɒmədeɪt/", translation: "容纳；提供住宿", example: "The hotel can accommodate 500 guests." },
  { id: "g26", category: "高中3500词", word: "accompany", phonetic: "/əˈkʌmpəni/", translation: "陪伴；伴随", example: "She accompanied her mother to the hospital." },
  { id: "g27", category: "高中3500词", word: "accomplish", phonetic: "/əˈkɒmplɪʃ/", translation: "完成；实现", example: "He accomplished his goal ahead of schedule." },
  { id: "g28", category: "高中3500词", word: "accomplishment", phonetic: "/əˈkɒmplɪʃmənt/", translation: "成就；完成", example: "Learning a language is a great accomplishment." },
  { id: "g29", category: "高中3500词", word: "account", phonetic: "/əˈkaʊnt/", translation: "账户；叙述", example: "She opened a bank account yesterday." },
  { id: "g30", category: "高中3500词", word: "accumulate", phonetic: "/əˈkjuːmjəleɪt/", translation: "积累；积聚", example: "He accumulated a fortune over the years." },
  { id: "g31", category: "高中3500词", word: "accurate", phonetic: "/ˈækjərət/", translation: "精确的；准确的", example: "The data must be accurate and reliable." },
  { id: "g32", category: "高中3500词", word: "accuse", phonetic: "/əˈkjuːz/", translation: "控告；指责", example: "He was accused of stealing the money." },
  { id: "g33", category: "高中3500词", word: "accustomed", phonetic: "/əˈkʌstəmd/", translation: "习惯的", example: "She is accustomed to getting up early." },
  { id: "g34", category: "高中3500词", word: "achieve", phonetic: "/əˈtʃiːv/", translation: "达到；实现", example: "She achieved her dream of becoming a doctor." },
  { id: "g35", category: "高中3500词", word: "acknowledge", phonetic: "/əkˈnɒlɪdʒ/", translation: "承认；感谢", example: "He acknowledged his mistake publicly." },
  { id: "g36", category: "高中3500词", word: "acknowledgment", phonetic: "/əkˈnɒlɪdʒmənt/", translation: "承认；感谢", example: "She received acknowledgment for her work." },
  { id: "g37", category: "高中3500词", word: "acquire", phonetic: "/əˈkwaɪər/", translation: "获得；学到", example: "She acquired a taste for classical music." },
  { id: "g38", category: "高中3500词", word: "across", phonetic: "/əˈkrɒs/", translation: "穿过；横过", example: "The boy ran across the road." },
  { id: "g39", category: "高中3500词", word: "act", phonetic: "/ækt/", translation: "行动；表演；法令", example: "We must act quickly to solve the problem." },
  { id: "g40", category: "高中3500词", word: "action", phonetic: "/ˈækʃn/", translation: "行动；行为", example: "Actions speak louder than words." },
  { id: "g41", category: "高中3500词", word: "active", phonetic: "/ˈæktɪv/", translation: "积极的；活跃的", example: "She is very active in school activities." },
  { id: "g42", category: "高中3500词", word: "activity", phonetic: "/ækˈtɪvəti/", translation: "活动", example: "There are many outdoor activities to enjoy." },
  { id: "g43", category: "高中3500词", word: "actual", phonetic: "/ˈæktʃuəl/", translation: "实际的；真实的", example: "What is the actual cost of the project?" },
  { id: "g44", category: "高中3500词", word: "acute", phonetic: "/əˈkjuːt/", translation: "敏锐的；急性的", example: "She has an acute sense of hearing." },
  { id: "g45", category: "高中3500词", word: "adapt", phonetic: "/əˈdæpt/", translation: "适应；改编", example: "Animals must adapt to changing environments." },
  { id: "g46", category: "高中3500词", word: "add", phonetic: "/æd/", translation: "添加；增加", example: "Please add some sugar to my coffee." },
  { id: "g47", category: "高中3500词", word: "address", phonetic: "/əˈdres/", translation: "地址；演讲", example: "What is your home address?" },
  { id: "g48", category: "高中3500词", word: "adequate", phonetic: "/ˈædɪkwət/", translation: "足够的；适当的", example: "The food supply is adequate for the winter." },
  { id: "g49", category: "高中3500词", word: "adjust", phonetic: "/əˈdʒʌst/", translation: "调整；适应", example: "You need to adjust the settings of the camera." },
  { id: "g50", category: "高中3500词", word: "administration", phonetic: "/ədˌmɪnɪˈstreɪʃn/", translation: "管理；行政", example: "The administration decided to cut costs." },
  { id: "g51", category: "高中3500词", word: "admire", phonetic: "/ədˈmaɪər/", translation: "钦佩；赞赏", example: "I admire her courage and determination." },
  { id: "g52", category: "高中3500词", word: "admit", phonetic: "/ədˈmɪt/", translation: "承认；准许进入", example: "He admitted that he was wrong." },
  { id: "g53", category: "高中3500词", word: "adolescent", phonetic: "/ˌædəˈlesnt/", translation: "青少年的；青少年", example: "Many adolescents struggle with identity issues." },
  { id: "g54", category: "高中3500词", word: "adopt", phonetic: "/əˈdɒpt/", translation: "采纳；收养", example: "They decided to adopt a child." },
  { id: "g55", category: "高中3500词", word: "adult", phonetic: "/ˈædʌlt/", translation: "成年人；成年的", example: "This movie is only for adults." },
  { id: "g56", category: "高中3500词", word: "advance", phonetic: "/ədˈvɑːns/", translation: "前进；进步", example: "Technology has advanced rapidly in recent years." },
  { id: "g57", category: "高中3500词", word: "advantage", phonetic: "/ədˈvɑːntɪdʒ/", translation: "优势；有利条件", example: "Knowing two languages is a great advantage." },
  { id: "g58", category: "高中3500词", word: "adventure", phonetic: "/ədˈventʃər/", translation: "冒险；奇遇", example: "The children had an exciting adventure in the forest." },
  { id: "g59", category: "高中3500词", word: "adventurous", phonetic: "/ədˈventʃərəs/", translation: "爱冒险的", example: "She is an adventurous traveler." },
  { id: "g60", category: "高中3500词", word: "advertise", phonetic: "/ˈædvərtaɪz/", translation: "做广告；宣传", example: "The company advertised their new product on TV." },
  { id: "g61", category: "高中3500词", word: "advertisement", phonetic: "/ədˈvɜːrtɪsmənt/", translation: "广告", example: "The advertisement attracted many customers." },
  { id: "g62", category: "高中3500词", word: "advice", phonetic: "/ədˈvaɪs/", translation: "建议；忠告", example: "Can you give me some advice on studying?" },
  { id: "g63", category: "高中3500词", word: "advise", phonetic: "/ədˈvaɪz/", translation: "建议；劝告", example: "The doctor advised him to rest more." },
  { id: "g64", category: "高中3500词", word: "advocate", phonetic: "/ˈædvəkeɪt/", translation: "提倡；拥护者", example: "She advocates for equal rights." },
  { id: "g65", category: "高中3500词", word: "affair", phonetic: "/əˈfeər/", translation: "事务；事件", example: "The minister handled the affair carefully." },
  { id: "g66", category: "高中3500词", word: "affect", phonetic: "/əˈfekt/", translation: "影响；感动", example: "The bad weather affected our travel plans." },
  { id: "g67", category: "高中3500词", word: "afford", phonetic: "/əˈfɔːrd/", translation: "负担得起；提供", example: "I cannot afford to buy a new car." },
  { id: "g68", category: "高中3500词", word: "afraid", phonetic: "/əˈfreɪd/", translation: "害怕的；担心的", example: "Don't be afraid of making mistakes." },
  { id: "g69", category: "高中3500词", word: "after", phonetic: "/ˈɑːftər/", translation: "在……之后", example: "We went home after the movie." },
  { id: "g70", category: "高中3500词", word: "afternoon", phonetic: "/ˌɑːftərˈnuːn/", translation: "下午", example: "I have a meeting this afternoon." },
  { id: "g71", category: "高中3500词", word: "afterward", phonetic: "/ˈɑːftərwərd/", translation: "后来", example: "They went home afterward." },
  { id: "g72", category: "高中3500词", word: "again", phonetic: "/əˈɡen/", translation: "又；再", example: "Can you say that again?" },
  { id: "g73", category: "高中3500词", word: "against", phonetic: "/əˈɡenst/", translation: "反对；靠着", example: "He voted against the proposal." },
  { id: "g74", category: "高中3500词", word: "age", phonetic: "/eɪdʒ/", translation: "年龄；时代", example: "What age did you start learning English?" },
  { id: "g75", category: "高中3500词", word: "agency", phonetic: "/ˈeɪdʒənsi/", translation: "代理机构；社", example: "She works for a travel agency." },
  { id: "g76", category: "高中3500词", word: "agent", phonetic: "/ˈeɪdʒənt/", translation: "代理人；特工", example: "The agent helped us find a good house." },
  { id: "g77", category: "高中3500词", word: "aggressive", phonetic: "/əˈɡresɪv/", translation: "好斗的；有进取心的", example: "He is an aggressive salesman." },
  { id: "g78", category: "高中3500词", word: "ago", phonetic: "/əˈɡəʊ/", translation: "以前", example: "I visited London two years ago." },
  { id: "g79", category: "高中3500词", word: "agree", phonetic: "/əˈɡriː/", translation: "同意；赞成", example: "I agree with your opinion on this matter." },
  { id: "g80", category: "高中3500词", word: "agreement", phonetic: "/əˈɡriːmənt/", translation: "协议；同意", example: "They signed a trade agreement." },
  { id: "g81", category: "高中3500词", word: "agriculture", phonetic: "/ˈæɡrɪkʌltʃər/", translation: "农业；农学", example: "Agriculture is the backbone of the economy." },
  { id: "g82", category: "高中3500词", word: "ahead", phonetic: "/əˈhed/", translation: "在前；向前", example: "Go straight ahead and you will see the school." },
  { id: "g83", category: "高中3500词", word: "aid", phonetic: "/eɪd/", translation: "援助；帮助", example: "The country received foreign aid." },
  { id: "g84", category: "高中3500词", word: "aim", phonetic: "/eɪm/", translation: "目标；瞄准", example: "My aim is to become a scientist." },
  { id: "g85", category: "高中3500词", word: "air", phonetic: "/eər/", translation: "空气；空中", example: "The air in the mountains is very fresh." },
  { id: "g86", category: "高中3500词", word: "aircraft", phonetic: "/ˈeərkrɑːft/", translation: "飞机；航空器", example: "All aircraft must be inspected before takeoff." },
  { id: "g87", category: "高中3500词", word: "airline", phonetic: "/ˈeərlaɪn/", translation: "航空公司", example: "Which airline are you flying with?" },
  { id: "g88", category: "高中3500词", word: "airplane", phonetic: "/ˈeərpleɪn/", translation: "飞机", example: "The airplane landed safely." },
  { id: "g89", category: "高中3500词", word: "airport", phonetic: "/ˈeərpɔːrt/", translation: "机场", example: "We arrived at the airport two hours early." },
  { id: "g90", category: "高中3500词", word: "alarm", phonetic: "/əˈlɑːrm/", translation: "警报；惊慌", example: "The fire alarm went off suddenly." },
  { id: "g91", category: "高中3500词", word: "album", phonetic: "/ˈælbəm/", translation: "相册；专辑", example: "She showed me her photo album." },
  { id: "g92", category: "高中3500词", word: "alcohol", phonetic: "/ˈælkəhɒl/", translation: "酒精；酒", example: "He does not drink alcohol." },
  { id: "g93", category: "高中3500词", word: "alive", phonetic: "/əˈlaɪv/", translation: "活着的；有活力的", example: "The injured man is still alive." },
  { id: "g94", category: "高中3500词", word: "all", phonetic: "/ɔːl/", translation: "全部的；所有的", example: "All the students passed the exam." },
  { id: "g95", category: "高中3500词", word: "allergic", phonetic: "/əˈlɜːrdʒɪk/", translation: "过敏的", example: "She is allergic to pollen." },
  { id: "g96", category: "高中3500词", word: "allocate", phonetic: "/ˈæləkeɪt/", translation: "分配；拨出", example: "The government allocated funds for education." },
  { id: "g97", category: "高中3500词", word: "allow", phonetic: "/əˈlaʊ/", translation: "允许；准许", example: "Smoking is not allowed in public places." },
  { id: "g98", category: "高中3500词", word: "allowance", phonetic: "/əˈlaʊəns/", translation: "津贴", example: "She gives her children a weekly allowance." },
  { id: "g99", category: "高中3500词", word: "almost", phonetic: "/ˈɔːlməʊst/", translation: "几乎；差不多", example: "She almost missed the bus." },
  { id: "g100", category: "高中3500词", word: "alone", phonetic: "/əˈləʊn/", translation: "单独的；独自的", example: "He lives alone in a small apartment." },
  { id: "g101", category: "高中3500词", word: "along", phonetic: "/əˈlɒŋ/", translation: "沿着；一起", example: "We walked along the river." },
  { id: "g102", category: "高中3500词", word: "alongside", phonetic: "/əˌlɒŋˈsaɪd/", translation: "在……旁边；与……一起", example: "The boat docked alongside the pier." },
  { id: "g103", category: "高中3500词", word: "alphabet", phonetic: "/ˈælfəbet/", translation: "字母表", example: "She learned the English alphabet." },
  { id: "g104", category: "高中3500词", word: "already", phonetic: "/ɔːlˈredi/", translation: "已经", example: "I have already finished my homework." },
  { id: "g105", category: "高中3500词", word: "also", phonetic: "/ˈɔːlsəʊ/", translation: "也；而且", example: "She also speaks French." },
  { id: "g106", category: "高中3500词", word: "alter", phonetic: "/ˈɔːltər/", translation: "改变；修改", example: "We need to alter our plans slightly." },
  { id: "g107", category: "高中3500词", word: "alternative", phonetic: "/ɔːlˈtɜːrnətɪv/", translation: "可供选择的；替代方案", example: "We have no alternative but to wait." },
  { id: "g108", category: "高中3500词", word: "although", phonetic: "/ɔːlˈðəʊ/", translation: "虽然；尽管", example: "Although it rained, we still went out." },
  { id: "g109", category: "高中3500词", word: "altogether", phonetic: "/ˌɔːltəˈɡeðər/", translation: "完全地；总共", example: "That is altogether a different matter." },
  { id: "g110", category: "高中3500词", word: "always", phonetic: "/ˈɔːlweɪz/", translation: "总是；一直", example: "She always arrives on time." },
  { id: "g111", category: "高中3500词", word: "amaze", phonetic: "/əˈmeɪz/", translation: "使惊奇；使惊叹", example: "Her performance amazed the audience." },
  { id: "g112", category: "高中3500词", word: "ambition", phonetic: "/æmˈbɪʃn/", translation: "雄心；抱负", example: "His ambition is to become a successful entrepreneur." },
  { id: "g113", category: "高中3500词", word: "ambitious", phonetic: "/æmˈbɪʃəs/", translation: "有雄心的", example: "She is an ambitious student." },
  { id: "g114", category: "高中3500词", word: "ambulance", phonetic: "/ˈæmbjələns/", translation: "救护车", example: "Call an ambulance immediately!" },
  { id: "g115", category: "高中3500词", word: "among", phonetic: "/əˈmʌŋ/", translation: "在……之中", example: "She is the tallest among her classmates." },
  { id: "g116", category: "高中3500词", word: "amount", phonetic: "/əˈmaʊnt/", translation: "数量；总额", example: "A large amount of money was raised." },
  { id: "g117", category: "高中3500词", word: "ample", phonetic: "/ˈæmpl/", translation: "充足的", example: "There is ample evidence." },
  { id: "g118", category: "高中3500词", word: "amuse", phonetic: "/əˈmjuːz/", translation: "逗乐；使消遣", example: "The clown amused the children at the party." },
  { id: "g119", category: "高中3500词", word: "analyze", phonetic: "/ˈænəlaɪz/", translation: "分析；解析", example: "Scientists analyze the data carefully." },
  { id: "g120", category: "高中3500词", word: "ancestor", phonetic: "/ˈænsestər/", translation: "祖先；祖宗", example: "My ancestors came from Ireland." },
  { id: "g121", category: "高中3500词", word: "ancient", phonetic: "/ˈeɪnʃənt/", translation: "古代的；古老的", example: "The ancient temple is over 1000 years old." },
  { id: "g122", category: "高中3500词", word: "anger", phonetic: "/ˈæŋɡər/", translation: "愤怒", example: "He could not hide his anger." },
  { id: "g123", category: "高中3500词", word: "angle", phonetic: "/ˈæŋɡl/", translation: "角度；观点", example: "Look at the problem from a different angle." },
  { id: "g124", category: "高中3500词", word: "angry", phonetic: "/ˈæŋɡri/", translation: "生气的；愤怒的", example: "She was angry at his rude behavior." },
  { id: "g125", category: "高中3500词", word: "animal", phonetic: "/ˈænɪml/", translation: "动物", example: "The zoo has many different animals." },
  { id: "g126", category: "高中3500词", word: "ankle", phonetic: "/ˈæŋkl/", translation: "脚踝", example: "She twisted her ankle while running." },
  { id: "g127", category: "高中3500词", word: "anniversary", phonetic: "/ˌænɪˈvɜːrsəri/", translation: "周年纪念日", example: "They celebrated their wedding anniversary." },
  { id: "g128", category: "高中3500词", word: "announce", phonetic: "/əˈnaʊns/", translation: "宣布；通告", example: "The principal announced the exam results." },
  { id: "g129", category: "高中3500词", word: "annual", phonetic: "/ˈænjuəl/", translation: "每年的；年度的", example: "The annual meeting will be held in May." },
  { id: "g130", category: "高中3500词", word: "another", phonetic: "/əˈnʌðər/", translation: "另一个；又一个", example: "Would you like another cup of tea?" },
  { id: "g131", category: "高中3500词", word: "answer", phonetic: "/ˈɑːnsər/", translation: "回答；答案", example: "Do you know the answer to this question?" },
  { id: "g132", category: "高中3500词", word: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", translation: "预期；期望", example: "She anticipated the question." },
  { id: "g133", category: "高中3500词", word: "anxiety", phonetic: "/æŋˈzaɪəti/", translation: "焦虑；担忧", example: "She felt anxiety before the exam." },
  { id: "g134", category: "高中3500词", word: "anxious", phonetic: "/ˈæŋkʃəs/", translation: "焦虑的；渴望的", example: "He was anxious about the result." },
  { id: "g135", category: "高中3500词", word: "any", phonetic: "/ˈeni/", translation: "任何的；一些", example: "Do you have any questions?" },
  { id: "g136", category: "高中3500词", word: "anybody", phonetic: "/ˈenibɒdi/", translation: "任何人", example: "Is anybody there?" },
  { id: "g137", category: "高中3500词", word: "anyhow", phonetic: "/ˈenihaʊ/", translation: "无论如何；不管怎样", example: "Anyhow, we must finish the work today." },
  { id: "g138", category: "高中3500词", word: "anyone", phonetic: "/ˈeniwʌn/", translation: "任何人", example: "Can anyone answer this question?" },
  { id: "g139", category: "高中3500词", word: "anything", phonetic: "/ˈeniθɪŋ/", translation: "任何事物", example: "Is there anything I can do to help?" },
  { id: "g140", category: "高中3500词", word: "anyway", phonetic: "/ˈeniweɪ/", translation: "无论如何", example: "Anyway, let's get started." },
  { id: "g141", category: "高中3500词", word: "apart", phonetic: "/əˈpɑːrt/", translation: "分开地；相距", example: "The two cities are 50 miles apart." },
  { id: "g142", category: "高中3500词", word: "apartment", phonetic: "/əˈpɑːrtmənt/", translation: "公寓", example: "They live in a small apartment." },
  { id: "g143", category: "高中3500词", word: "apologize", phonetic: "/əˈpɒlədʒaɪz/", translation: "道歉；谢罪", example: "I must apologize for my late reply." },
  { id: "g144", category: "高中3500词", word: "apology", phonetic: "/əˈpɒlədʒi/", translation: "道歉；歉意", example: "Please accept my sincere apology." },
  { id: "g145", category: "高中3500词", word: "apparent", phonetic: "/əˈpærənt/", translation: "明显的；表面上的", example: "It was apparent that she was tired." },
  { id: "g146", category: "高中3500词", word: "appeal", phonetic: "/əˈpiːl/", translation: "呼吁；吸引", example: "The charity appealed for donations." },
  { id: "g147", category: "高中3500词", word: "appear", phonetic: "/əˈpɪər/", translation: "出现；似乎", example: "She appeared at the door suddenly." },
  { id: "g148", category: "高中3500词", word: "appetite", phonetic: "/ˈæpɪtaɪt/", translation: "食欲；欲望", example: "Exercise gives you a good appetite." },
  { id: "g149", category: "高中3500词", word: "apple", phonetic: "/ˈæpl/", translation: "苹果", example: "An apple a day keeps the doctor away." },
  { id: "g150", category: "高中3500词", word: "appliance", phonetic: "/əˈplaɪəns/", translation: "电器", example: "The kitchen has modern appliances." },
  { id: "g151", category: "高中3500词", word: "application", phonetic: "/ˌæplɪˈkeɪʃn/", translation: "申请；应用", example: "Please fill in the application form." },
  { id: "g152", category: "高中3500词", word: "apply", phonetic: "/əˈplaɪ/", translation: "申请；应用", example: "She applied for a scholarship." },
  { id: "g153", category: "高中3500词", word: "appoint", phonetic: "/əˈpɔɪnt/", translation: "任命；约定", example: "He was appointed as the new manager." },
  { id: "g154", category: "高中3500词", word: "appreciate", phonetic: "/əˈpriːʃieɪt/", translation: "感激；欣赏", example: "I really appreciate your help." },
  { id: "g155", category: "高中3500词", word: "appreciation", phonetic: "/əˌpriːʃiˈeɪʃn/", translation: "欣赏；感激", example: "She showed appreciation for the gift." },
  { id: "g156", category: "高中3500词", word: "approach", phonetic: "/əˈprəʊtʃ/", translation: "接近；方法", example: "We need a new approach to this problem." },
  { id: "g157", category: "高中3500词", word: "appropriate", phonetic: "/əˈprəʊpriət/", translation: "适当的；合适的", example: "This is not an appropriate time to discuss it." },
  { id: "g158", category: "高中3500词", word: "approve", phonetic: "/əˈpruːv/", translation: "批准；赞成", example: "The committee approved the proposal." },
  { id: "g159", category: "高中3500词", word: "approximate", phonetic: "/əˈprɒksɪmət/", translation: "大约的", example: "The approximate cost is $100." },
  { id: "g160", category: "高中3500词", word: "approximately", phonetic: "/əˈprɒksɪmətli/", translation: "大约", example: "There were approximately 200 people." },
  { id: "g161", category: "高中3500词", word: "arch", phonetic: "/ɑːrtʃ/", translation: "拱门", example: "The bridge has a stone arch." },
  { id: "g162", category: "高中3500词", word: "architect", phonetic: "/ˈɑːrkɪtekt/", translation: "建筑师", example: "The architect designed a beautiful building." },
  { id: "g163", category: "高中3500词", word: "area", phonetic: "/ˈeəriə/", translation: "地区；面积", example: "This area is known for its beautiful scenery." },
  { id: "g164", category: "高中3500词", word: "argue", phonetic: "/ˈɑːrɡjuː/", translation: "争论；辩论", example: "They argued about the best way to solve the problem." },
  { id: "g165", category: "高中3500词", word: "argument", phonetic: "/ˈɑːrɡjumənt/", translation: "争论；论点", example: "They had a heated argument about politics." },
  { id: "g166", category: "高中3500词", word: "arise", phonetic: "/əˈraɪz/", translation: "出现；产生", example: "New problems arose during the project." },
  { id: "g167", category: "高中3500词", word: "arithmetic", phonetic: "/əˈrɪθmətɪk/", translation: "算术", example: "She is good at arithmetic." },
  { id: "g168", category: "高中3500词", word: "arm", phonetic: "/ɑːrm/", translation: "手臂；武器", example: "She carried the baby in her arms." },
  { id: "g169", category: "高中3500词", word: "army", phonetic: "/ˈɑːrmi/", translation: "军队", example: "He joined the army when he was eighteen." },
  { id: "g170", category: "高中3500词", word: "around", phonetic: "/əˈraʊnd/", translation: "周围；大约", example: "There are many trees around the school." },
  { id: "g171", category: "高中3500词", word: "arrange", phonetic: "/əˈreɪndʒ/", translation: "安排；整理", example: "She arranged the flowers beautifully." },
  { id: "g172", category: "高中3500词", word: "arrangement", phonetic: "/əˈreɪndʒmənt/", translation: "安排；布置", example: "She made the arrangements." },
  { id: "g173", category: "高中3500词", word: "arrest", phonetic: "/əˈrest/", translation: "逮捕；拘留", example: "The police arrested the suspect last night." },
  { id: "g174", category: "高中3500词", word: "arrival", phonetic: "/əˈraɪvl/", translation: "到达；到来", example: "We await your safe arrival." },
  { id: "g175", category: "高中3500词", word: "arrive", phonetic: "/əˈraɪv/", translation: "到达；抵达", example: "The train arrived on time." },
  { id: "g176", category: "高中3500词", word: "arrow", phonetic: "/ˈærəʊ/", translation: "箭；箭头", example: "Follow the arrows to find the exit." },
  { id: "g177", category: "高中3500词", word: "art", phonetic: "/ɑːrt/", translation: "艺术；美术", example: "She studied art at university." },
  { id: "g178", category: "高中3500词", word: "article", phonetic: "/ˈɑːrtɪkl/", translation: "文章；物品", example: "I read an interesting article in the newspaper." },
  { id: "g179", category: "高中3500词", word: "artificial", phonetic: "/ˌɑːrtɪˈfɪʃl/", translation: "人造的；虚假的", example: "Artificial intelligence is changing our lives." },
  { id: "g180", category: "高中3500词", word: "artist", phonetic: "/ˈɑːrtɪst/", translation: "艺术家；画家", example: "The artist painted a beautiful landscape." },
  { id: "g181", category: "高中3500词", word: "as", phonetic: "/æz/", translation: "作为；如同；当", example: "As a student, you should study hard." },
  { id: "g182", category: "高中3500词", word: "ash", phonetic: "/æʃ/", translation: "灰；灰烬", example: "Cigarette ash fell on the carpet." },
  { id: "g183", category: "高中3500词", word: "ashamed", phonetic: "/əˈʃeɪmd/", translation: "惭愧的；羞耻的", example: "He felt ashamed of his behavior." },
  { id: "g184", category: "高中3500词", word: "aside", phonetic: "/əˈsaɪd/", translation: "在旁边；留出", example: "She put the book aside and went to sleep." },
  { id: "g185", category: "高中3500词", word: "ask", phonetic: "/ɑːsk/", translation: "问；要求", example: "May I ask you a question?" },
  { id: "g186", category: "高中3500词", word: "asleep", phonetic: "/əˈsliːp/", translation: "睡着的", example: "The baby fell asleep in her arms." },
  { id: "g187", category: "高中3500词", word: "aspect", phonetic: "/ˈæspekt/", translation: "方面；外观", example: "We need to consider every aspect of the problem." },
  { id: "g188", category: "高中3500词", word: "assess", phonetic: "/əˈses/", translation: "评估；评定", example: "Teachers assess students' progress regularly." },
  { id: "g189", category: "高中3500词", word: "assessment", phonetic: "/əˈsesmənt/", translation: "评估", example: "The assessment was fair." },
  { id: "g190", category: "高中3500词", word: "asset", phonetic: "/ˈæset/", translation: "资产；优点", example: "She is a valuable asset to the team." },
  { id: "g191", category: "高中3500词", word: "assign", phonetic: "/əˈsaɪn/", translation: "分配；指派", example: "The teacher assigned homework to the students." },
  { id: "g192", category: "高中3500词", word: "assignment", phonetic: "/əˈsaɪnmənt/", translation: "作业；任务", example: "She completed the assignment." },
  { id: "g193", category: "高中3500词", word: "assist", phonetic: "/əˈsɪst/", translation: "帮助；协助", example: "She assisted the elderly man across the road." },
  { id: "g194", category: "高中3500词", word: "assistance", phonetic: "/əˈsɪstəns/", translation: "帮助；援助", example: "Thank you for your assistance." },
  { id: "g195", category: "高中3500词", word: "associate", phonetic: "/əˈsoʊʃieɪt/", translation: "联想；联合", example: "People associate owls with wisdom." },
  { id: "g196", category: "高中3500词", word: "association", phonetic: "/əˌsoʊʃiˈeɪʃn/", translation: "协会；联合", example: "She is a member of the tennis association." },
  { id: "g197", category: "高中3500词", word: "assume", phonetic: "/əˈsjuːm/", translation: "假设；承担", example: "I assume that you have read the report." },
  { id: "g198", category: "高中3500词", word: "assumption", phonetic: "/əˈsʌmpʃn/", translation: "假设；假定", example: "Your assumption is not based on facts." },
  { id: "g199", category: "高中3500词", word: "assurance", phonetic: "/əˈʃʊərəns/", translation: "保证", example: "She gave her assurance." },
  { id: "g200", category: "高中3500词", word: "astonish", phonetic: "/əˈstɒnɪʃ/", translation: "使惊讶", example: "The news astonished everyone in the room." },
  { id: "g201", category: "高中3500词", word: "astronaut", phonetic: "/ˈæstrənɔːt/", translation: "宇航员", example: "The astronaut walked in space." },
  { id: "g202", category: "高中3500词", word: "athletic", phonetic: "/æθˈletɪk/", translation: "运动的", example: "She is very athletic." },
  { id: "g203", category: "高中3500词", word: "atmosphere", phonetic: "/ˈætməsfɪər/", translation: "大气；气氛", example: "The atmosphere of the meeting was very tense." },
  { id: "g204", category: "高中3500词", word: "attach", phonetic: "/əˈtætʃ/", translation: "附上；系；贴", example: "Please attach a recent photo to your application." },
  { id: "g205", category: "高中3500词", word: "attack", phonetic: "/əˈtæk/", translation: "攻击；进攻", example: "The enemy attacked at dawn." },
  { id: "g206", category: "高中3500词", word: "attain", phonetic: "/əˈteɪn/", translation: "达到", example: "She attained her goal." },
  { id: "g207", category: "高中3500词", word: "attempt", phonetic: "/əˈtempt/", translation: "尝试；企图", example: "He attempted to climb the mountain alone." },
  { id: "g208", category: "高中3500词", word: "attend", phonetic: "/əˈtend/", translation: "出席；参加", example: "All students must attend the assembly." },
  { id: "g209", category: "高中3500词", word: "attention", phonetic: "/əˈtenʃn/", translation: "注意力；关注", example: "Please pay attention to the teacher." },
  { id: "g210", category: "高中3500词", word: "attitude", phonetic: "/ˈætɪtjuːd/", translation: "态度；看法", example: "A positive attitude is important for success." },
  { id: "g211", category: "高中3500词", word: "attract", phonetic: "/əˈtrækt/", translation: "吸引；引起", example: "The beautiful scenery attracts many tourists." },
  { id: "g212", category: "高中3500词", word: "attraction", phonetic: "/əˈtrækʃn/", translation: "吸引；景点", example: "The museum is a major tourist attraction." },
  { id: "g213", category: "高中3500词", word: "auction", phonetic: "/ˈɔːkʃn/", translation: "拍卖", example: "The painting was sold at auction." },
  { id: "g214", category: "高中3500词", word: "audience", phonetic: "/ˈɔːdiəns/", translation: "观众；听众", example: "The audience cheered loudly at the end of the show." },
  { id: "g215", category: "高中3500词", word: "aunt", phonetic: "/ɑːnt/", translation: "阿姨；姑妈", example: "My aunt lives in Shanghai." },
  { id: "g216", category: "高中3500词", word: "authentic", phonetic: "/ɔːˈθentɪk/", translation: "真正的", example: "Is this an authentic document?" },
  { id: "g217", category: "高中3500词", word: "author", phonetic: "/ˈɔːθər/", translation: "作者；作家", example: "Who is the author of this book?" },
  { id: "g218", category: "高中3500词", word: "authority", phonetic: "/ɔːˈθɒrəti/", translation: "权力；当局", example: "The local authority decided to build a new school." },
  { id: "g219", category: "高中3500词", word: "automatic", phonetic: "/ˌɔːtəˈmætɪk/", translation: "自动的", example: "The doors open automatically." },
  { id: "g220", category: "高中3500词", word: "autonomous", phonetic: "/ɔːˈtɒnəməs/", translation: "自治的", example: "The region is autonomous." },
  { id: "g221", category: "高中3500词", word: "autumn", phonetic: "/ˈɔːtəm/", translation: "秋天", example: "The leaves turn red in autumn." },
  { id: "g222", category: "高中3500词", word: "available", phonetic: "/əˈveɪləbl/", translation: "可用的；可得到的", example: "The room is available next week." },
  { id: "g223", category: "高中3500词", word: "avenue", phonetic: "/ˈævənjuː/", translation: "大道；林荫道", example: "They walked down the avenue." },
  { id: "g224", category: "高中3500词", word: "average", phonetic: "/ˈævərɪdʒ/", translation: "平均的；普通的", example: "The average temperature in summer is 30°C." },
  { id: "g225", category: "高中3500词", word: "avoid", phonetic: "/əˈvɔɪd/", translation: "避免；回避", example: "You should avoid making the same mistake." },
  { id: "g226", category: "高中3500词", word: "await", phonetic: "/əˈweɪt/", translation: "等待", example: "She awaited the results." },
  { id: "g227", category: "高中3500词", word: "awake", phonetic: "/əˈweɪk/", translation: "醒着的", example: "She lay awake all night worrying." },
  { id: "g228", category: "高中3500词", word: "award", phonetic: "/əˈwɔːrd/", translation: "奖品；授予", example: "She won the award for best actress." },
  { id: "g229", category: "高中3500词", word: "aware", phonetic: "/əˈweər/", translation: "意识到的；知道的", example: "Are you aware of the risks involved?" },
  { id: "g230", category: "高中3500词", word: "awareness", phonetic: "/əˈweərnəs/", translation: "意识", example: "She raised awareness of the issue." },
  { id: "g231", category: "高中3500词", word: "away", phonetic: "/əˈweɪ/", translation: "离开；远离", example: "Please go away and leave me alone." },
  { id: "g232", category: "高中3500词", word: "awful", phonetic: "/ˈɔːfl/", translation: "可怕的；糟糕的", example: "The weather was awful yesterday." },
  { id: "g233", category: "高中3500词", word: "awkward", phonetic: "/ˈɔːkwərd/", translation: "尴尬的；笨拙的", example: "There was an awkward silence." },
  { id: "g234", category: "高中3500词", word: "baby", phonetic: "/ˈbeɪbi/", translation: "婴儿", example: "The baby is sleeping peacefully." },
  { id: "g235", category: "高中3500词", word: "back", phonetic: "/bæk/", translation: "背部；后面；回来", example: "She went back to her hometown." },
  { id: "g236", category: "高中3500词", word: "backward", phonetic: "/ˈbækwərd/", translation: "向后的；落后的", example: "He took a backward step." },
  { id: "g237", category: "高中3500词", word: "bad", phonetic: "/bæd/", translation: "坏的；糟糕的", example: "The weather was bad yesterday." },
  { id: "g238", category: "高中3500词", word: "badminton", phonetic: "/ˈbædmɪntən/", translation: "羽毛球", example: "We played badminton after school." },
  { id: "g239", category: "高中3500词", word: "bag", phonetic: "/bæɡ/", translation: "包；袋子", example: "She carried a heavy bag." },
  { id: "g240", category: "高中3500词", word: "baggage", phonetic: "/ˈbæɡɪdʒ/", translation: "行李", example: "Please collect your baggage at the carousel." },
  { id: "g241", category: "高中3500词", word: "bake", phonetic: "/beɪk/", translation: "烤；烘焙", example: "She baked a cake for the party." },
  { id: "g242", category: "高中3500词", word: "bakery", phonetic: "/ˈbeɪkəri/", translation: "面包店", example: "She bought bread at the bakery." },
  { id: "g243", category: "高中3500词", word: "balance", phonetic: "/ˈbæləns/", translation: "平衡；天平", example: "You need to balance work and life." },
  { id: "g244", category: "高中3500词", word: "balcony", phonetic: "/ˈbælkəni/", translation: "阳台", example: "She stood on the balcony." },
  { id: "g245", category: "高中3500词", word: "ball", phonetic: "/bɔːl/", translation: "球；舞会", example: "The boy kicked the ball." },
  { id: "g246", category: "高中3500词", word: "ballet", phonetic: "/ˈbæleɪ/", translation: "芭蕾舞", example: "She has been learning ballet since she was five." },
  { id: "g247", category: "高中3500词", word: "balloon", phonetic: "/bəˈluːn/", translation: "气球", example: "The children played with colorful balloons." },
  { id: "g248", category: "高中3500词", word: "ban", phonetic: "/bæn/", translation: "禁止；禁令", example: "Smoking is banned in all public places." },
  { id: "g249", category: "高中3500词", word: "banana", phonetic: "/bəˈnɑːnə/", translation: "香蕉", example: "Monkeys like to eat bananas." },
  { id: "g250", category: "高中3500词", word: "band", phonetic: "/bænd/", translation: "乐队；带子", example: "The band played until midnight." },
  { id: "g251", category: "高中3500词", word: "bandage", phonetic: "/ˈbændɪdʒ/", translation: "绷带", example: "She put a bandage on the wound." },
  { id: "g252", category: "高中3500词", word: "bank", phonetic: "/bæŋk/", translation: "银行；岸", example: "I need to go to the bank to withdraw money." },
  { id: "g253", category: "高中3500词", word: "bankrupt", phonetic: "/ˈbæŋkrʌpt/", translation: "破产的", example: "The company went bankrupt." },
  { id: "g254", category: "高中3500词", word: "bar", phonetic: "/bɑːr/", translation: "酒吧；条；障碍", example: "Let's meet at the bar after work." },
  { id: "g255", category: "高中3500词", word: "barbecue", phonetic: "/ˈbɑːrbɪkjuː/", translation: "烧烤", example: "We had a barbecue in the backyard." },
  { id: "g256", category: "高中3500词", word: "bargain", phonetic: "/ˈbɑːrɡɪn/", translation: "讨价还价；便宜货", example: "She bargained with the shopkeeper over the price." },
  { id: "g257", category: "高中3500词", word: "barrier", phonetic: "/ˈbæriər/", translation: "障碍；屏障", example: "Language can be a barrier to communication." },
  { id: "g258", category: "高中3500词", word: "base", phonetic: "/beɪs/", translation: "基础；基地", example: "The company has its base in London." },
  { id: "g259", category: "高中3500词", word: "baseball", phonetic: "/ˈbeɪsbɔːl/", translation: "棒球", example: "Baseball is very popular in America." },
  { id: "g260", category: "高中3500词", word: "basement", phonetic: "/ˈbeɪsmənt/", translation: "地下室", example: "They stored old furniture in the basement." },
  { id: "g261", category: "高中3500词", word: "basic", phonetic: "/ˈbeɪsɪk/", translation: "基本的；基础的", example: "Food and shelter are basic human needs." },
  { id: "g262", category: "高中3500词", word: "basin", phonetic: "/ˈbeɪsn/", translation: "盆；盆地", example: "She washed her face in the basin." },
  { id: "g263", category: "高中3500词", word: "basis", phonetic: "/ˈbeɪsɪs/", translation: "基础；根据", example: "Trust is the basis of any good relationship." },
  { id: "g264", category: "高中3500词", word: "basket", phonetic: "/ˈbɑːskɪt/", translation: "篮子", example: "She carried a basket of flowers." },
  { id: "g265", category: "高中3500词", word: "basketball", phonetic: "/ˈbɑːskɪtbɔːl/", translation: "篮球", example: "He plays basketball every weekend." },
  { id: "g266", category: "高中3500词", word: "bat", phonetic: "/bæt/", translation: "蝙蝠；球拍", example: "He swung the bat and hit the ball." },
  { id: "g267", category: "高中3500词", word: "bath", phonetic: "/bɑːθ/", translation: "洗澡；浴缸", example: "I take a bath every evening." },
  { id: "g268", category: "高中3500词", word: "bathe", phonetic: "/beɪð/", translation: "洗澡；沐浴", example: "The doctor told him to bathe the wound." },
  { id: "g269", category: "高中3500词", word: "bathroom", phonetic: "/ˈbɑːθruːm/", translation: "浴室；洗手间", example: "Where is the bathroom?" },
  { id: "g270", category: "高中3500词", word: "battery", phonetic: "/ˈbætəri/", translation: "电池", example: "My phone battery is running low." },
  { id: "g271", category: "高中3500词", word: "battle", phonetic: "/ˈbætl/", translation: "战斗；斗争", example: "They fought a fierce battle against the enemy." },
  { id: "g272", category: "高中3500词", word: "bay", phonetic: "/beɪ/", translation: "海湾", example: "The hotel has a beautiful view of the bay." },
  { id: "g273", category: "高中3500词", word: "beach", phonetic: "/biːtʃ/", translation: "海滩", example: "We spent the day at the beach." },
  { id: "g274", category: "高中3500词", word: "bean", phonetic: "/biːn/", translation: "豆子", example: "She planted beans in the garden." },
  { id: "g275", category: "高中3500词", word: "bear", phonetic: "/beər/", translation: "忍受；承担；熊", example: "She could not bear the pain any longer." },
  { id: "g276", category: "高中3500词", word: "beard", phonetic: "/bɪərd/", translation: "胡须", example: "He grew a beard over the winter." },
  { id: "g277", category: "高中3500词", word: "beat", phonetic: "/biːt/", translation: "打败；跳动", example: "She beat him at tennis." },
  { id: "g278", category: "高中3500词", word: "beautiful", phonetic: "/ˈbjuːtɪfl/", translation: "美丽的", example: "What a beautiful sunset!" },
  { id: "g279", category: "高中3500词", word: "beauty", phonetic: "/ˈbjuːti/", translation: "美；美丽", example: "We admired the beauty of the sunset." },
  { id: "g280", category: "高中3500词", word: "because", phonetic: "/bɪˈkɒz/", translation: "因为", example: "I stayed home because it was raining." },
  { id: "g281", category: "高中3500词", word: "become", phonetic: "/bɪˈkʌm/", translation: "成为；变得", example: "She became a doctor last year." },
  { id: "g282", category: "高中3500词", word: "bed", phonetic: "/bed/", translation: "床", example: "It's time to go to bed." },
  { id: "g283", category: "高中3500词", word: "bedroom", phonetic: "/ˈbedruːm/", translation: "卧室", example: "The bedroom faces the garden." },
  { id: "g284", category: "高中3500词", word: "bee", phonetic: "/biː/", translation: "蜜蜂", example: "Bees make honey." },
  { id: "g285", category: "高中3500词", word: "beef", phonetic: "/biːf/", translation: "牛肉", example: "We had roast beef for dinner." },
  { id: "g286", category: "高中3500词", word: "beer", phonetic: "/bɪər/", translation: "啤酒", example: "Would you like a glass of beer?" },
  { id: "g287", category: "高中3500词", word: "before", phonetic: "/bɪˈfɔːr/", translation: "在……之前", example: "Wash your hands before eating." },
  { id: "g288", category: "高中3500词", word: "beg", phonetic: "/beɡ/", translation: "乞求；恳求", example: "He begged his mother to let him go." },
  { id: "g289", category: "高中3500词", word: "begin", phonetic: "/bɪˈɡɪn/", translation: "开始", example: "The class begins at eight o'clock." },
  { id: "g290", category: "高中3500词", word: "behalf", phonetic: "/bɪˈhɑːf/", translation: "代表", example: "She spoke on behalf of the team." },
  { id: "g291", category: "高中3500词", word: "behave", phonetic: "/bɪˈheɪv/", translation: "表现；行为", example: "Children should learn to behave properly." },
  { id: "g292", category: "高中3500词", word: "behavior", phonetic: "/bɪˈheɪvjər/", translation: "行为；举止", example: "His behavior was very strange." },
  { id: "g293", category: "高中3500词", word: "behind", phonetic: "/bɪˈhaɪnd/", translation: "在……后面", example: "The sun went behind the clouds." },
  { id: "g294", category: "高中3500词", word: "being", phonetic: "/ˈbiːɪŋ/", translation: "存在；生物", example: "Human beings need food and water." },
  { id: "g295", category: "高中3500词", word: "belief", phonetic: "/bɪˈliːf/", translation: "信仰；信念", example: "She has a strong belief in justice." },
  { id: "g296", category: "高中3500词", word: "believe", phonetic: "/bɪˈliːv/", translation: "相信；认为", example: "I believe you are telling the truth." },
  { id: "g297", category: "高中3500词", word: "bell", phonetic: "/bel/", translation: "铃；钟", example: "The bell rang for the end of class." },
  { id: "g298", category: "高中3500词", word: "belong", phonetic: "/bɪˈlɒŋ/", translation: "属于", example: "This book belongs to the library." },
  { id: "g299", category: "高中3500词", word: "beloved", phonetic: "/bɪˈlʌvɪd/", translation: "深爱的", example: "She is my beloved friend." },
  { id: "g300", category: "高中3500词", word: "below", phonetic: "/bɪˈləʊ/", translation: "在……下面", example: "The temperature dropped below zero." },
  { id: "g301", category: "高中3500词", word: "belt", phonetic: "/belt/", translation: "腰带；地带", example: "He wore a black leather belt." },
  { id: "g302", category: "高中3500词", word: "bench", phonetic: "/bentʃ/", translation: "长凳", example: "They sat on the bench in the park." },
  { id: "g303", category: "高中3500词", word: "bend", phonetic: "/bend/", translation: "弯曲；弯腰", example: "Bend your knees when you lift heavy objects." },
  { id: "g304", category: "高中3500词", word: "beneath", phonetic: "/bɪˈniːθ/", translation: "在……下方", example: "The valley lies beneath the mountain." },
  { id: "g305", category: "高中3500词", word: "beneficial", phonetic: "/ˌbenɪˈfɪʃl/", translation: "有益的", example: "Exercise is beneficial." },
  { id: "g306", category: "高中3500词", word: "benefit", phonetic: "/ˈbenɪfɪt/", translation: "利益；好处", example: "Regular exercise has many health benefits." },
  { id: "g307", category: "高中3500词", word: "beside", phonetic: "/bɪˈsaɪd/", translation: "在……旁边", example: "She sat beside me during the movie." },
  { id: "g308", category: "高中3500词", word: "besides", phonetic: "/bɪˈsaɪdz/", translation: "此外；除了", example: "Besides English, she also speaks French." },
  { id: "g309", category: "高中3500词", word: "best", phonetic: "/best/", translation: "最好的", example: "She is the best student in the class." },
  { id: "g310", category: "高中3500词", word: "bet", phonetic: "/bet/", translation: "打赌", example: "I bet you can't guess the answer." },
  { id: "g311", category: "高中3500词", word: "betray", phonetic: "/bɪˈtreɪ/", translation: "背叛", example: "She betrayed his trust." },
  { id: "g312", category: "高中3500词", word: "better", phonetic: "/ˈbetər/", translation: "更好的", example: "This book is better than the last one." },
  { id: "g313", category: "高中3500词", word: "between", phonetic: "/bɪˈtwiːn/", translation: "在……之间", example: "The meeting is between 2 and 4 pm." },
  { id: "g314", category: "高中3500词", word: "beyond", phonetic: "/bɪˈjɒnd/", translation: "在…之外；超出", example: "The view was beyond description." },
  { id: "g315", category: "高中3500词", word: "bicycle", phonetic: "/ˈbaɪsɪkl/", translation: "自行车", example: "She rides her bicycle to school every day." },
  { id: "g316", category: "高中3500词", word: "big", phonetic: "/bɪɡ/", translation: "大的", example: "They live in a big house." },
  { id: "g317", category: "高中3500词", word: "bill", phonetic: "/bɪl/", translation: "账单；法案", example: "Have you paid the electricity bill?" },
  { id: "g318", category: "高中3500词", word: "billion", phonetic: "/ˈbɪljən/", translation: "十亿", example: "The company made a billion dollars in profit." },
  { id: "g319", category: "高中3500词", word: "biography", phonetic: "/baɪˈɒɡrəfi/", translation: "传记", example: "She wrote a biography of the president." },
  { id: "g320", category: "高中3500词", word: "biology", phonetic: "/baɪˈɒlədʒi/", translation: "生物学", example: "She is studying biology at university." },
  { id: "g321", category: "高中3500词", word: "bird", phonetic: "/bɜːrd/", translation: "鸟", example: "The bird built a nest in the tree." },
  { id: "g322", category: "高中3500词", word: "birth", phonetic: "/bɜːrθ/", translation: "出生；诞生", example: "She gave birth to a healthy baby." },
  { id: "g323", category: "高中3500词", word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", translation: "生日", example: "Happy birthday to you!" },
  { id: "g324", category: "高中3500词", word: "biscuit", phonetic: "/ˈbɪskɪt/", translation: "饼干", example: "Would you like a biscuit with your tea?" },
  { id: "g325", category: "高中3500词", word: "bit", phonetic: "/bɪt/", translation: "一点；小块", example: "I'm a bit tired today." },
  { id: "g326", category: "高中3500词", word: "bite", phonetic: "/baɪt/", translation: "咬；叮", example: "The dog bit the man on the leg." },
  { id: "g327", category: "高中3500词", word: "bitter", phonetic: "/ˈbɪtər/", translation: "苦的；痛苦的", example: "The medicine tastes very bitter." },
  { id: "g328", category: "高中3500词", word: "bitterness", phonetic: "/ˈbɪtərnəs/", translation: "苦涩；怨恨", example: "She spoke with bitterness." },
  { id: "g329", category: "高中3500词", word: "black", phonetic: "/blæk/", translation: "黑色的", example: "She wore a black dress to the party." },
  { id: "g330", category: "高中3500词", word: "blame", phonetic: "/bleɪm/", translation: "责备；怪", example: "Don't blame yourself for the failure." },
  { id: "g331", category: "高中3500词", word: "blank", phonetic: "/blæŋk/", translation: "空白的", example: "Please fill in the blank spaces." },
  { id: "g332", category: "高中3500词", word: "blanket", phonetic: "/ˈblæŋkɪt/", translation: "毯子", example: "She wrapped herself in a warm blanket." },
  { id: "g333", category: "高中3500词", word: "blast", phonetic: "/blɑːst/", translation: "爆炸", example: "The blast was heard miles away." },
  { id: "g334", category: "高中3500词", word: "blaze", phonetic: "/bleɪz/", translation: "火焰", example: "The blaze destroyed the building." },
  { id: "g335", category: "高中3500词", word: "bleed", phonetic: "/bliːd/", translation: "流血", example: "His nose began to bleed." },
  { id: "g336", category: "高中3500词", word: "blend", phonetic: "/blend/", translation: "混合；融合", example: "Blend the flour and sugar together." },
  { id: "g337", category: "高中3500词", word: "bless", phonetic: "/bles/", translation: "祝福；保佑", example: "May God bless you." },
  { id: "g338", category: "高中3500词", word: "blind", phonetic: "/blaɪnd/", translation: "盲的", example: "The blind man walked with a stick." },
  { id: "g339", category: "高中3500词", word: "block", phonetic: "/blɒk/", translation: "街区；阻塞", example: "A fallen tree blocked the road." },
  { id: "g340", category: "高中3500词", word: "blood", phonetic: "/blʌd/", translation: "血；血液", example: "He donated blood at the hospital." },
  { id: "g341", category: "高中3500词", word: "bloom", phonetic: "/bluːm/", translation: "开花；繁盛", example: "The roses are in full bloom." },
  { id: "g342", category: "高中3500词", word: "blouse", phonetic: "/blaʊz/", translation: "女衬衫", example: "She bought a new silk blouse." },
  { id: "g343", category: "高中3500词", word: "blow", phonetic: "/bləʊ/", translation: "吹；打击", example: "The wind blew the leaves away." },
  { id: "g344", category: "高中3500词", word: "blue", phonetic: "/bluː/", translation: "蓝色的", example: "The sky is blue today." },
  { id: "g345", category: "高中3500词", word: "blunder", phonetic: "/ˈblʌndər/", translation: "愚蠢的错误", example: "She made a terrible blunder." },
  { id: "g346", category: "高中3500词", word: "blush", phonetic: "/blʌʃ/", translation: "脸红", example: "She blushed with embarrassment." },
  { id: "g347", category: "高中3500词", word: "board", phonetic: "/bɔːrd/", translation: "板；上船/车", example: "Please board the plane now." },
  { id: "g348", category: "高中3500词", word: "boat", phonetic: "/bəʊt/", translation: "船", example: "We went for a ride on the boat." },
  { id: "g349", category: "高中3500词", word: "body", phonetic: "/ˈbɒdi/", translation: "身体；主体", example: "Exercise is good for the body." },
  { id: "g350", category: "高中3500词", word: "boil", phonetic: "/bɔɪl/", translation: "煮沸；沸腾", example: "Boil the water before drinking it." },
  { id: "g351", category: "高中3500词", word: "bomb", phonetic: "/bɒm/", translation: "炸弹", example: "The bomb exploded in the city center." },
  { id: "g352", category: "高中3500词", word: "bond", phonetic: "/bɒnd/", translation: "纽带；债券", example: "The bond between mother and child is strong." },
  { id: "g353", category: "高中3500词", word: "bone", phonetic: "/bəʊn/", translation: "骨头", example: "He broke a bone in his arm." },
  { id: "g354", category: "高中3500词", word: "bonus", phonetic: "/ˈbəʊnəs/", translation: "奖金", example: "She received a bonus." },
  { id: "g355", category: "高中3500词", word: "book", phonetic: "/bʊk/", translation: "书；预订", example: "I have booked a table for two." },
  { id: "g356", category: "高中3500词", word: "boom", phonetic: "/buːm/", translation: "繁荣", example: "The economy is booming." },
  { id: "g357", category: "高中3500词", word: "boot", phonetic: "/buːt/", translation: "靴子", example: "She wore leather boots." },
  { id: "g358", category: "高中3500词", word: "booth", phonetic: "/buːð/", translation: "摊位；电话亭", example: "She waited in the phone booth." },
  { id: "g359", category: "高中3500词", word: "border", phonetic: "/ˈbɔːrdər/", translation: "边界；边境", example: "They crossed the border at midnight." },
  { id: "g360", category: "高中3500词", word: "bore", phonetic: "/bɔːr/", translation: "使厌烦", example: "The long speech bored the audience." },
  { id: "g361", category: "高中3500词", word: "boring", phonetic: "/ˈbɔːrɪŋ/", translation: "无聊的；乏味的", example: "The movie was very boring." },
  { id: "g362", category: "高中3500词", word: "born", phonetic: "/bɔːrn/", translation: "出生的", example: "She was born in Beijing." },
  { id: "g363", category: "高中3500词", word: "borrow", phonetic: "/ˈbɒrəʊ/", translation: "借入", example: "Can I borrow your pen?" },
  { id: "g364", category: "高中3500词", word: "boss", phonetic: "/bɒs/", translation: "老板；上司", example: "My boss is very strict." },
  { id: "g365", category: "高中3500词", word: "both", phonetic: "/bəʊθ/", translation: "两者都", example: "Both of my parents are teachers." },
  { id: "g366", category: "高中3500词", word: "bother", phonetic: "/ˈbɒðər/", translation: "打扰；烦扰", example: "Sorry to bother you, but I need some help." },
  { id: "g367", category: "高中3500词", word: "bottle", phonetic: "/ˈbɒtl/", translation: "瓶子", example: "She drank a bottle of water." },
  { id: "g368", category: "高中3500词", word: "bottom", phonetic: "/ˈbɒtəm/", translation: "底部；底", example: "There is a hole in the bottom of the bucket." },
  { id: "g369", category: "高中3500词", word: "bounce", phonetic: "/baʊns/", translation: "弹跳", example: "The ball bounced over the wall." },
  { id: "g370", category: "高中3500词", word: "bound", phonetic: "/baʊnd/", translation: "一定的；受约束的", example: "You are bound to succeed if you work hard." },
  { id: "g371", category: "高中3500词", word: "boundary", phonetic: "/ˈbaʊndri/", translation: "边界；界限", example: "The river forms the boundary between the two countries." },
  { id: "g372", category: "高中3500词", word: "bow", phonetic: "/baʊ/", translation: "鞠躬；弓", example: "She bowed to the audience." },
  { id: "g373", category: "高中3500词", word: "bowl", phonetic: "/bəʊl/", translation: "碗", example: "She ate a bowl of rice for lunch." },
  { id: "g374", category: "高中3500词", word: "box", phonetic: "/bɒks/", translation: "盒子；箱子", example: "She opened the box and found a gift inside." },
  { id: "g375", category: "高中3500词", word: "boy", phonetic: "/bɔɪ/", translation: "男孩", example: "The boy is playing in the garden." },
  { id: "g376", category: "高中3500词", word: "brain", phonetic: "/breɪn/", translation: "大脑；脑力", example: "Use your brain to solve this puzzle." },
  { id: "g377", category: "高中3500词", word: "brake", phonetic: "/breɪk/", translation: "刹车", example: "She applied the brakes." },
  { id: "g378", category: "高中3500词", word: "branch", phonetic: "/brɑːntʃ/", translation: "树枝；分支", example: "The company has branches all over the country." },
  { id: "g379", category: "高中3500词", word: "brand", phonetic: "/brænd/", translation: "品牌；商标", example: "This is a famous brand of clothing." },
  { id: "g380", category: "高中3500词", word: "brave", phonetic: "/breɪv/", translation: "勇敢的", example: "The brave soldier saved many lives." },
  { id: "g381", category: "高中3500词", word: "bravery", phonetic: "/ˈbreɪvəri/", translation: "勇敢", example: "She showed great bravery." },
  { id: "g382", category: "高中3500词", word: "bread", phonetic: "/bred/", translation: "面包", example: "She bought a loaf of bread." },
  { id: "g383", category: "高中3500词", word: "break", phonetic: "/breɪk/", translation: "打破；休息", example: "Be careful not to break the glass." },
  { id: "g384", category: "高中3500词", word: "breakfast", phonetic: "/ˈbrekfəst/", translation: "早餐", example: "What did you have for breakfast?" },
  { id: "g385", category: "高中3500词", word: "breakthrough", phonetic: "/ˈbreɪkθruː/", translation: "突破", example: "The scientists made a breakthrough." },
  { id: "g386", category: "高中3500词", word: "breath", phonetic: "/breθ/", translation: "呼吸；气息", example: "She took a deep breath before speaking." },
  { id: "g387", category: "高中3500词", word: "breathe", phonetic: "/briːð/", translation: "呼吸", example: "It's good to breathe fresh air." },
  { id: "g388", category: "高中3500词", word: "breathless", phonetic: "/ˈbreθləs/", translation: "气喘吁吁的", example: "She was breathless after running up the stairs." },
  { id: "g389", category: "高中3500词", word: "breeze", phonetic: "/briːz/", translation: "微风", example: "A gentle breeze blew." },
  { id: "g390", category: "高中3500词", word: "brick", phonetic: "/brɪk/", translation: "砖", example: "The house is made of red bricks." },
  { id: "g391", category: "高中3500词", word: "bride", phonetic: "/braɪd/", translation: "新娘", example: "The bride looked beautiful." },
  { id: "g392", category: "高中3500词", word: "bridegroom", phonetic: "/ˈbraɪdɡruːm/", translation: "新郎", example: "The bridegroom waited at the altar." },
  { id: "g393", category: "高中3500词", word: "bridge", phonetic: "/brɪdʒ/", translation: "桥", example: "We walked across the bridge." },
  { id: "g394", category: "高中3500词", word: "brief", phonetic: "/briːf/", translation: "简短的；短暂的", example: "He gave a brief introduction of himself." },
  { id: "g395", category: "高中3500词", word: "briefcase", phonetic: "/ˈbriːfkeɪs/", translation: "公文包", example: "She carried a briefcase." },
  { id: "g396", category: "高中3500词", word: "bright", phonetic: "/braɪt/", translation: "明亮的；聪明的", example: "The sun was very bright today." },
  { id: "g397", category: "高中3500词", word: "brilliant", phonetic: "/ˈbrɪliənt/", translation: "杰出的；灿烂的", example: "She came up with a brilliant idea." },
  { id: "g398", category: "高中3500词", word: "bring", phonetic: "/brɪŋ/", translation: "带来", example: "Please bring your textbook to class." },
  { id: "g399", category: "高中3500词", word: "brink", phonetic: "/brɪŋk/", translation: "边缘", example: "The company was on the brink of collapse." },
  { id: "g400", category: "高中3500词", word: "brisk", phonetic: "/brɪsk/", translation: "轻快的", example: "She walked at a brisk pace." },
  { id: "g401", category: "高中3500词", word: "broad", phonetic: "/brɔːd/", translation: "宽阔的；广泛的", example: "The river is very broad at this point." },
  { id: "g402", category: "高中3500词", word: "broadcast", phonetic: "/ˈbrɔːdkɑːst/", translation: "广播；播放", example: "The news was broadcast on national television." },
  { id: "g403", category: "高中3500词", word: "broaden", phonetic: "/ˈbrɔːdn/", translation: "扩大", example: "Travel broadens the mind." },
  { id: "g404", category: "高中3500词", word: "brochure", phonetic: "/ˈbrəʊʃər/", translation: "小册子", example: "She picked up a travel brochure." },
  { id: "g405", category: "高中3500词", word: "broken", phonetic: "/ˈbrəʊkən/", translation: "破碎的；坏的", example: "The window was broken." },
  { id: "g406", category: "高中3500词", word: "bronze", phonetic: "/brɒnz/", translation: "青铜", example: "She won a bronze medal." },
  { id: "g407", category: "高中3500词", word: "broom", phonetic: "/bruːm/", translation: "扫帚", example: "She swept the floor with a broom." },
  { id: "g408", category: "高中3500词", word: "brother", phonetic: "/ˈbrʌðər/", translation: "兄弟", example: "My brother is two years older than me." },
  { id: "g409", category: "高中3500词", word: "brown", phonetic: "/braʊn/", translation: "棕色的", example: "She has brown hair." },
  { id: "g410", category: "高中3500词", word: "brush", phonetic: "/brʌʃ/", translation: "刷子；刷", example: "Brush your teeth twice a day." },
  { id: "g411", category: "高中3500词", word: "brutal", phonetic: "/ˈbruːtl/", translation: "残忍的", example: "The attack was brutal." },
  { id: "g412", category: "高中3500词", word: "bubble", phonetic: "/ˈbʌbl/", translation: "气泡", example: "The children blew bubbles." },
  { id: "g413", category: "高中3500词", word: "bucket", phonetic: "/ˈbʌkɪt/", translation: "桶", example: "She filled the bucket with water." },
  { id: "g414", category: "高中3500词", word: "budget", phonetic: "/ˈbʌdʒɪt/", translation: "预算", example: "We need to cut the budget this year." },
  { id: "g415", category: "高中3500词", word: "bug", phonetic: "/bʌɡ/", translation: "虫子；故障", example: "She found a bug in the software." },
  { id: "g416", category: "高中3500词", word: "build", phonetic: "/bɪld/", translation: "建造；建设", example: "They plan to build a new school." },
  { id: "g417", category: "高中3500词", word: "building", phonetic: "/ˈbɪldɪŋ/", translation: "建筑物", example: "The building has twenty floors." },
  { id: "g418", category: "高中3500词", word: "bulk", phonetic: "/bʌlk/", translation: "大量", example: "She bought in bulk." },
  { id: "g419", category: "高中3500词", word: "bullet", phonetic: "/ˈbʊlɪt/", translation: "子弹", example: "The bullet missed him." },
  { id: "g420", category: "高中3500词", word: "bunch", phonetic: "/bʌntʃ/", translation: "束；串", example: "She received a bunch of flowers." },
  { id: "g421", category: "高中3500词", word: "burden", phonetic: "/ˈbɜːrdn/", translation: "负担；重担", example: "The debt was a heavy burden on the family." },
  { id: "g422", category: "高中3500词", word: "bureau", phonetic: "/ˈbjʊərəʊ/", translation: "局；办事处", example: "She works at the tax bureau." },
  { id: "g423", category: "高中3500词", word: "burglar", phonetic: "/ˈbɜːrɡlər/", translation: "窃贼", example: "A burglar broke into the house." },
  { id: "g424", category: "高中3500词", word: "burn", phonetic: "/bɜːrn/", translation: "燃烧；烧伤", example: "Be careful not to burn yourself." },
  { id: "g425", category: "高中3500词", word: "burst", phonetic: "/bɜːrst/", translation: "爆发；突然破裂", example: "The pipe burst and water flooded the room." },
  { id: "g426", category: "高中3500词", word: "bury", phonetic: "/ˈberi/", translation: "埋葬；掩埋", example: "They buried the treasure under the tree." },
  { id: "g427", category: "高中3500词", word: "bus", phonetic: "/bʌs/", translation: "公共汽车", example: "She takes the bus to school every day." },
  { id: "g428", category: "高中3500词", word: "bush", phonetic: "/bʊʃ/", translation: "灌木", example: "The cat hid behind the bush." },
  { id: "g429", category: "高中3500词", word: "business", phonetic: "/ˈbɪznəs/", translation: "商业；生意", example: "He runs his own business." },
  { id: "g430", category: "高中3500词", word: "busy", phonetic: "/ˈbɪzi/", translation: "忙碌的", example: "She is busy preparing for the exam." },
  { id: "g431", category: "高中3500词", word: "but", phonetic: "/bʌt/", translation: "但是", example: "I want to go, but I have to study." },
  { id: "g432", category: "高中3500词", word: "butcher", phonetic: "/ˈbʊtʃər/", translation: "屠夫；肉商", example: "She bought some meat from the butcher." },
  { id: "g433", category: "高中3500词", word: "butter", phonetic: "/ˈbʌtər/", translation: "黄油", example: "She spread butter on the bread." },
  { id: "g434", category: "高中3500词", word: "button", phonetic: "/ˈbʌtn/", translation: "纽扣；按钮", example: "Press the button to start the machine." },
  { id: "g435", category: "高中3500词", word: "buy", phonetic: "/baɪ/", translation: "买", example: "She bought a new dress for the party." },
  { id: "g436", category: "高中3500词", word: "by", phonetic: "/baɪ/", translation: "通过；在……旁边", example: "She traveled by train." },
  { id: "g437", category: "高中3500词", word: "cab", phonetic: "/kæb/", translation: "出租车", example: "We took a cab to the airport." },
  { id: "g438", category: "高中3500词", word: "cabbage", phonetic: "/ˈkæbɪdʒ/", translation: "卷心菜", example: "She added some cabbage to the soup." },
  { id: "g439", category: "高中3500词", word: "cabin", phonetic: "/ˈkæbɪn/", translation: "小屋；机舱", example: "She stayed in a cabin by the lake." },
  { id: "g440", category: "高中3500词", word: "cafe", phonetic: "/ˈkæfeɪ/", translation: "咖啡馆", example: "Let's meet at the cafe." },
  { id: "g441", category: "高中3500词", word: "cage", phonetic: "/keɪdʒ/", translation: "笼子", example: "The bird was kept in a cage." },
  { id: "g442", category: "高中3500词", word: "cake", phonetic: "/keɪk/", translation: "蛋糕", example: "She baked a chocolate cake." },
  { id: "g443", category: "高中3500词", word: "calculate", phonetic: "/ˈkælkjuleɪt/", translation: "计算", example: "Can you calculate the total cost?" },
  { id: "g444", category: "高中3500词", word: "calculation", phonetic: "/ˌkælkjuˈleɪʃn/", translation: "计算", example: "She made a quick calculation." },
  { id: "g445", category: "高中3500词", word: "calendar", phonetic: "/ˈkælɪndər/", translation: "日历", example: "Mark the date on your calendar." },
  { id: "g446", category: "高中3500词", word: "call", phonetic: "/kɔːl/", translation: "叫；打电话", example: "Please call me when you arrive." },
  { id: "g447", category: "高中3500词", word: "calm", phonetic: "/kɑːm/", translation: "平静的；镇静的", example: "Try to keep calm in an emergency." },
  { id: "g448", category: "高中3500词", word: "calmness", phonetic: "/ˈkɑːmnəs/", translation: "平静", example: "She maintained her calmness." },
  { id: "g449", category: "高中3500词", word: "camera", phonetic: "/ˈkæmərə/", translation: "照相机", example: "She took a photo with her camera." },
  { id: "g450", category: "高中3500词", word: "camp", phonetic: "/kæmp/", translation: "营地；露营", example: "We went camping last weekend." },
  { id: "g451", category: "高中3500词", word: "campaign", phonetic: "/kæmˈpeɪn/", translation: "运动；战役", example: "They launched a campaign against pollution." },
  { id: "g452", category: "高中3500词", word: "can", phonetic: "/kæn/", translation: "能；罐头", example: "Can you help me with this?" },
  { id: "g453", category: "高中3500词", word: "canal", phonetic: "/kəˈnæl/", translation: "运河；渠道", example: "The Panama Canal connects two oceans." },
  { id: "g454", category: "高中3500词", word: "cancel", phonetic: "/ˈkænsl/", translation: "取消；撤销", example: "The flight was cancelled due to bad weather." },
  { id: "g455", category: "高中3500词", word: "cancer", phonetic: "/ˈkænsər/", translation: "癌症", example: "Early detection can help cure cancer." },
  { id: "g456", category: "高中3500词", word: "candidate", phonetic: "/ˈkændɪdeɪt/", translation: "候选人；应试者", example: "There are three candidates for the position." },
  { id: "g457", category: "高中3500词", word: "candle", phonetic: "/ˈkændl/", translation: "蜡烛", example: "She lit a candle in the dark room." },
  { id: "g458", category: "高中3500词", word: "candy", phonetic: "/ˈkændi/", translation: "糖果", example: "Children love candy." },
  { id: "g459", category: "高中3500词", word: "canvas", phonetic: "/ˈkænvəs/", translation: "帆布；画布", example: "She painted on canvas." },
  { id: "g460", category: "高中3500词", word: "cap", phonetic: "/kæp/", translation: "帽子；盖", example: "He wore a baseball cap." },
  { id: "g461", category: "高中3500词", word: "capable", phonetic: "/ˈkeɪpəbl/", translation: "有能力的", example: "She is capable of handling any situation." },
  { id: "g462", category: "高中3500词", word: "capacity", phonetic: "/kəˈpæsəti/", translation: "容量；能力", example: "The stadium has a capacity of 50,000." },
  { id: "g463", category: "高中3500词", word: "cape", phonetic: "/keɪp/", translation: "海角；披风", example: "The lighthouse stands on the cape." },
  { id: "g464", category: "高中3500词", word: "capital", phonetic: "/ˈkæpɪtl/", translation: "首都；资本", example: "Beijing is the capital of China." },
  { id: "g465", category: "高中3500词", word: "capsule", phonetic: "/ˈkæpsjuːl/", translation: "胶囊", example: "She took a capsule." },
  { id: "g466", category: "高中3500词", word: "captain", phonetic: "/ˈkæptɪn/", translation: "队长；船长", example: "He is the captain of the football team." },
  { id: "g467", category: "高中3500词", word: "caption", phonetic: "/ˈkæpʃn/", translation: "标题；字幕", example: "The caption explained the photo." },
  { id: "g468", category: "高中3500词", word: "capture", phonetic: "/ˈkæptʃər/", translation: "捕获；俘获", example: "The police captured the criminal." },
  { id: "g469", category: "高中3500词", word: "car", phonetic: "/kɑːr/", translation: "汽车", example: "She drives her car to work." },
  { id: "g470", category: "高中3500词", word: "carbon", phonetic: "/ˈkɑːrbən/", translation: "碳", example: "Carbon dioxide contributes to global warming." },
  { id: "g471", category: "高中3500词", word: "card", phonetic: "/kɑːrd/", translation: "卡片；纸牌", example: "She sent me a birthday card." },
  { id: "g472", category: "高中3500词", word: "care", phonetic: "/keər/", translation: "关心；照顾", example: "She takes care of her elderly mother." },
  { id: "g473", category: "高中3500词", word: "career", phonetic: "/kəˈrɪər/", translation: "职业；事业", example: "She has a successful career in medicine." },
  { id: "g474", category: "高中3500词", word: "careful", phonetic: "/ˈkeərfl/", translation: "小心的；仔细的", example: "Be careful when crossing the road." },
  { id: "g475", category: "高中3500词", word: "careless", phonetic: "/ˈkeələs/", translation: "粗心的", example: "He made a careless mistake." },
  { id: "g476", category: "高中3500词", word: "carpenter", phonetic: "/ˈkɑːrpəntər/", translation: "木匠", example: "The carpenter made a table." },
  { id: "g477", category: "高中3500词", word: "carpet", phonetic: "/ˈkɑːrpɪt/", translation: "地毯", example: "The living room has a new carpet." },
  { id: "g478", category: "高中3500词", word: "carrot", phonetic: "/ˈkærət/", translation: "胡萝卜", example: "Rabbits like to eat carrots." },
  { id: "g479", category: "高中3500词", word: "carry", phonetic: "/ˈkæri/", translation: "携带；搬运", example: "She carried the baby in her arms." },
  { id: "g480", category: "高中3500词", word: "cart", phonetic: "/kɑːrt/", translation: "手推车", example: "She pushed the shopping cart." },
  { id: "g481", category: "高中3500词", word: "case", phonetic: "/keɪs/", translation: "情况；箱子", example: "In that case, we need to change our plan." },
  { id: "g482", category: "高中3500词", word: "cash", phonetic: "/kæʃ/", translation: "现金", example: "Do you have enough cash?" },
  { id: "g483", category: "高中3500词", word: "cassette", phonetic: "/kəˈset/", translation: "磁带", example: "She listened to music on a cassette." },
  { id: "g484", category: "高中3500词", word: "cast", phonetic: "/kɑːst/", translation: "投掷；选派", example: "She cast her vote in the election." },
  { id: "g485", category: "高中3500词", word: "castle", phonetic: "/ˈkɑːsl/", translation: "城堡", example: "The old castle stands on the hilltop." },
  { id: "g486", category: "高中3500词", word: "casual", phonetic: "/ˈkæʒuəl/", translation: "随意的；非正式的", example: "He wore casual clothes to the party." },
  { id: "g487", category: "高中3500词", word: "casualty", phonetic: "/ˈkæʒuəlti/", translation: "伤亡人员", example: "There were many casualties." },
  { id: "g488", category: "高中3500词", word: "cat", phonetic: "/kæt/", translation: "猫", example: "The cat sat on the windowsill." },
  { id: "g489", category: "高中3500词", word: "catalog", phonetic: "/ˈkætəlɒɡ/", translation: "目录", example: "You can find the product in the catalog." },
  { id: "g490", category: "高中3500词", word: "catalogue", phonetic: "/ˈkætəlɒɡ/", translation: "目录", example: "She browsed the catalogue." },
  { id: "g491", category: "高中3500词", word: "catch", phonetic: "/kætʃ/", translation: "抓住；赶上", example: "She caught the ball with one hand." },
  { id: "g492", category: "高中3500词", word: "category", phonetic: "/ˈkætəɡəri/", translation: "类别；种类", example: "Books are arranged by category." },
  { id: "g493", category: "高中3500词", word: "cattle", phonetic: "/ˈkætl/", translation: "牛", example: "The farmer has many cattle." },
  { id: "g494", category: "高中3500词", word: "cause", phonetic: "/kɔːz/", translation: "原因；引起", example: "Smoking can cause lung cancer." },
  { id: "g495", category: "高中3500词", word: "caution", phonetic: "/ˈkɔːʃn/", translation: "谨慎；警告", example: "Proceed with caution." },
  { id: "g496", category: "高中3500词", word: "cave", phonetic: "/keɪv/", translation: "洞穴", example: "They explored the cave." },
  { id: "g497", category: "高中3500词", word: "ceiling", phonetic: "/ˈsiːlɪŋ/", translation: "天花板", example: "The ceiling of the room is very high." },
  { id: "g498", category: "高中3500词", word: "celebrate", phonetic: "/ˈselɪbreɪt/", translation: "庆祝", example: "We celebrated his birthday with a big party." },
  { id: "g499", category: "高中3500词", word: "celebration", phonetic: "/ˌselɪˈbreɪʃn/", translation: "庆祝；庆典", example: "The celebration lasted all night." },
  { id: "g500", category: "高中3500词", word: "cell", phonetic: "/sel/", translation: "细胞；牢房", example: "All living things are made of cells." },
  { id: "g501", category: "高中3500词", word: "cellar", phonetic: "/ˈselər/", translation: "地窖", example: "She stored wine in the cellar." },
  { id: "g502", category: "高中3500词", word: "cemetery", phonetic: "/ˈsemətri/", translation: "墓地", example: "They visited the cemetery." },
  { id: "g503", category: "高中3500词", word: "cent", phonetic: "/sent/", translation: "分；百分之一", example: "The candy costs fifty cents." },
  { id: "g504", category: "高中3500词", word: "central", phonetic: "/ˈsentrəl/", translation: "中心的；主要的", example: "The hotel is in a central location." },
  { id: "g505", category: "高中3500词", word: "centre", phonetic: "/ˈsentər/", translation: "中心", example: "The city centre is very busy." },
  { id: "g506", category: "高中3500词", word: "century", phonetic: "/ˈsentʃəri/", translation: "世纪；百年", example: "This building was built in the 19th century." },
  { id: "g507", category: "高中3500词", word: "ceremony", phonetic: "/ˈserəməni/", translation: "仪式；典礼", example: "The wedding ceremony was beautiful." },
  { id: "g508", category: "高中3500词", word: "certain", phonetic: "/ˈsɜːrtn/", translation: "确定的；某些", example: "I am certain that he will come." },
  { id: "g509", category: "高中3500词", word: "certificate", phonetic: "/sərˈtɪfɪkət/", translation: "证书；证明", example: "She received a certificate of achievement." },
  { id: "g510", category: "高中3500词", word: "chain", phonetic: "/tʃeɪn/", translation: "链子；连锁", example: "She wore a gold chain around her neck." },
  { id: "g511", category: "高中3500词", word: "chair", phonetic: "/tʃeər/", translation: "椅子", example: "Please take a chair." },
  { id: "g512", category: "高中3500词", word: "chairman", phonetic: "/ˈtʃeərmən/", translation: "主席；董事长", example: "The chairman called the meeting to order." },
  { id: "g513", category: "高中3500词", word: "challenge", phonetic: "/ˈtʃælɪndʒ/", translation: "挑战", example: "Learning a new language is a challenge." },
  { id: "g514", category: "高中3500词", word: "chamber", phonetic: "/ˈtʃeɪmbər/", translation: "房间；议会", example: "The chamber was beautifully decorated." },
  { id: "g515", category: "高中3500词", word: "champion", phonetic: "/ˈtʃæmpiən/", translation: "冠军；拥护者", example: "She is the world champion in swimming." },
  { id: "g516", category: "高中3500词", word: "championship", phonetic: "/ˈtʃæmpiənʃɪp/", translation: "锦标赛", example: "She won the championship." },
  { id: "g517", category: "高中3500词", word: "chance", phonetic: "/tʃɑːns/", translation: "机会；可能性", example: "This is your last chance." },
  { id: "g518", category: "高中3500词", word: "change", phonetic: "/tʃeɪndʒ/", translation: "改变；零钱", example: "We need to change our plans." },
  { id: "g519", category: "高中3500词", word: "channel", phonetic: "/ˈtʃænl/", translation: "频道；渠道", example: "What channel is the news on?" },
  { id: "g520", category: "高中3500词", word: "chant", phonetic: "/tʃɑːnt/", translation: "吟唱", example: "The crowd chanted slogans." },
  { id: "g521", category: "高中3500词", word: "chapel", phonetic: "/ˈtʃæpl/", translation: "小教堂", example: "They prayed in the chapel." },
  { id: "g522", category: "高中3500词", word: "chapter", phonetic: "/ˈtʃæptər/", translation: "章节", example: "Read chapter three for homework." },
  { id: "g523", category: "高中3500词", word: "character", phonetic: "/ˈkærəktər/", translation: "性格；角色；字符", example: "She is a woman of strong character." },
  { id: "g524", category: "高中3500词", word: "characteristic", phonetic: "/ˌkærəktəˈrɪstɪk/", translation: "特征；特点", example: "Kindness is her best characteristic." },
  { id: "g525", category: "高中3500词", word: "characterize", phonetic: "/ˈkærəktəraɪz/", translation: "描述……的特征", example: "The book is characterized by humor." },
  { id: "g526", category: "高中3500词", word: "charge", phonetic: "/tʃɑːrdʒ/", translation: "收费；指控；充电", example: "He was charged with theft." },
  { id: "g527", category: "高中3500词", word: "charity", phonetic: "/ˈtʃærəti/", translation: "慈善；施舍", example: "She donated money to charity." },
  { id: "g528", category: "高中3500词", word: "charm", phonetic: "/tʃɑːrm/", translation: "魅力", example: "She has great charm." },
  { id: "g529", category: "高中3500词", word: "chart", phonetic: "/tʃɑːrt/", translation: "图表", example: "The chart shows the sales figures." },
  { id: "g530", category: "高中3500词", word: "charter", phonetic: "/ˈtʃɑːrtər/", translation: "宪章；包租", example: "They chartered a bus." },
  { id: "g531", category: "高中3500词", word: "chase", phonetic: "/tʃeɪs/", translation: "追赶；追捕", example: "The dog chased the cat up the tree." },
  { id: "g532", category: "高中3500词", word: "cheap", phonetic: "/tʃiːp/", translation: "便宜的", example: "The vegetables are cheap in summer." },
  { id: "g533", category: "高中3500词", word: "cheat", phonetic: "/tʃiːt/", translation: "欺骗；作弊", example: "He was caught cheating in the exam." },
  { id: "g534", category: "高中3500词", word: "check", phonetic: "/tʃek/", translation: "检查；核对", example: "Please check your answers carefully." },
  { id: "g535", category: "高中3500词", word: "cheek", phonetic: "/tʃiːk/", translation: "脸颊", example: "She kissed him on the cheek." },
  { id: "g536", category: "高中3500词", word: "cheer", phonetic: "/tʃɪər/", translation: "欢呼；加油", example: "The crowd cheered the team on." },
  { id: "g537", category: "高中3500词", word: "cheerful", phonetic: "/ˈtʃɪərfl/", translation: "快乐的；高兴的", example: "She has a cheerful personality." },
  { id: "g538", category: "高中3500词", word: "cheese", phonetic: "/tʃiːz/", translation: "奶酪", example: "Would you like some cheese with your bread?" },
  { id: "g539", category: "高中3500词", word: "chemical", phonetic: "/ˈkemɪkl/", translation: "化学的；化学品", example: "The factory produces chemical products." },
  { id: "g540", category: "高中3500词", word: "chemistry", phonetic: "/ˈkemɪstri/", translation: "化学", example: "She is good at chemistry." },
  { id: "g541", category: "高中3500词", word: "cheque", phonetic: "/tʃek/", translation: "支票", example: "She paid by cheque." },
  { id: "g542", category: "高中3500词", word: "chess", phonetic: "/tʃes/", translation: "国际象棋", example: "He enjoys playing chess." },
  { id: "g543", category: "高中3500词", word: "chest", phonetic: "/tʃest/", translation: "胸部；箱子", example: "He felt a pain in his chest." },
  { id: "g544", category: "高中3500词", word: "chicken", phonetic: "/ˈtʃɪkɪn/", translation: "鸡；鸡肉", example: "We had roast chicken for dinner." },
  { id: "g545", category: "高中3500词", word: "chief", phonetic: "/tʃiːf/", translation: "首要的；首领", example: "He is the chief editor of the newspaper." },
  { id: "g546", category: "高中3500词", word: "child", phonetic: "/tʃaɪld/", translation: "孩子", example: "The child was playing in the park." },
  { id: "g547", category: "高中3500词", word: "childhood", phonetic: "/ˈtʃaɪldhʊd/", translation: "童年", example: "She had a happy childhood." },
  { id: "g548", category: "高中3500词", word: "chill", phonetic: "/tʃɪl/", translation: "寒冷", example: "There was a chill in the air." },
  { id: "g549", category: "高中3500词", word: "chimney", phonetic: "/ˈtʃɪmni/", translation: "烟囱", example: "Smoke came out of the chimney." },
  { id: "g550", category: "高中3500词", word: "chin", phonetic: "/tʃɪn/", translation: "下巴", example: "He rested his chin on his hand." },
  { id: "g551", category: "高中3500词", word: "chip", phonetic: "/tʃɪp/", translation: "芯片；薯条", example: "The computer needs a new chip." },
  { id: "g552", category: "高中3500词", word: "chocolate", phonetic: "/ˈtʃɒklət/", translation: "巧克力", example: "She loves eating chocolate." },
  { id: "g553", category: "高中3500词", word: "choice", phonetic: "/tʃɔɪs/", translation: "选择", example: "You have to make a choice." },
  { id: "g554", category: "高中3500词", word: "choir", phonetic: "/kwaɪər/", translation: "合唱团", example: "She sings in the choir." },
  { id: "g555", category: "高中3500词", word: "choose", phonetic: "/tʃuːz/", translation: "选择；挑选", example: "You can choose any color you like." },
  { id: "g556", category: "高中3500词", word: "chop", phonetic: "/tʃɒp/", translation: "砍；剁", example: "She chopped the vegetables." },
  { id: "g557", category: "高中3500词", word: "chore", phonetic: "/tʃɔːr/", translation: "家务杂事", example: "She did her daily chores." },
  { id: "g558", category: "高中3500词", word: "chronic", phonetic: "/ˈkrɒnɪk/", translation: "慢性的；长期的", example: "She has a chronic illness." },
  { id: "g559", category: "高中3500词", word: "church", phonetic: "/tʃɜːrtʃ/", translation: "教堂", example: "They go to church every Sunday." },
  { id: "g560", category: "高中3500词", word: "cigarette", phonetic: "/ˌsɪɡəˈret/", translation: "香烟", example: "Smoking cigarettes is harmful to health." },
  { id: "g561", category: "高中3500词", word: "cinema", phonetic: "/ˈsɪnəmə/", translation: "电影院", example: "We went to the cinema last night." },
  { id: "g562", category: "高中3500词", word: "circle", phonetic: "/ˈsɜːrkl/", translation: "圆；圈子", example: "The children sat in a circle." },
  { id: "g563", category: "高中3500词", word: "circumstance", phonetic: "/ˈsɜːrkəmstæns/", translation: "环境；情况", example: "Under no circumstances should you give up." },
  { id: "g564", category: "高中3500词", word: "citizen", phonetic: "/ˈsɪtɪzn/", translation: "公民；市民", example: "Every citizen has the right to vote." },
  { id: "g565", category: "高中3500词", word: "citizenship", phonetic: "/ˈsɪtɪznʃɪp/", translation: "公民身份", example: "She applied for citizenship." },
  { id: "g566", category: "高中3500词", word: "civil", phonetic: "/ˈsɪvl/", translation: "公民的；文明的", example: "Everyone has civil rights." },
  { id: "g567", category: "高中3500词", word: "civilization", phonetic: "/ˌsɪvəlaɪˈzeɪʃn/", translation: "文明", example: "Ancient civilizations fascinate her." },
  { id: "g568", category: "高中3500词", word: "claim", phonetic: "/kleɪm/", translation: "声称；要求", example: "He claimed that he was innocent." },
  { id: "g569", category: "高中3500词", word: "clap", phonetic: "/klæp/", translation: "鼓掌；拍手", example: "The audience clapped after the performance." },
  { id: "g570", category: "高中3500词", word: "clarify", phonetic: "/ˈklærɪfaɪ/", translation: "澄清；阐明", example: "Could you clarify your statement?" },
  { id: "g571", category: "高中3500词", word: "class", phonetic: "/klɑːs/", translation: "班级；课；等级", example: "The class starts at 9 am." },
  { id: "g572", category: "高中3500词", word: "classic", phonetic: "/ˈklæsɪk/", translation: "经典的；名著", example: "This is a classic novel." },
  { id: "g573", category: "高中3500词", word: "classify", phonetic: "/ˈklæsɪfaɪ/", translation: "分类", example: "She classified the documents." },
  { id: "g574", category: "高中3500词", word: "classroom", phonetic: "/ˈklɑːsruːm/", translation: "教室", example: "The classroom is very clean." },
  { id: "g575", category: "高中3500词", word: "clean", phonetic: "/kliːn/", translation: "干净的；打扫", example: "Please keep the room clean." },
  { id: "g576", category: "高中3500词", word: "clear", phonetic: "/klɪər/", translation: "清楚的；清除", example: "Is it clear what you need to do?" },
  { id: "g577", category: "高中3500词", word: "clerk", phonetic: "/klɑːrk/", translation: "职员；店员", example: "The clerk helped me find the book." },
  { id: "g578", category: "高中3500词", word: "clever", phonetic: "/ˈklevər/", translation: "聪明的", example: "She is a clever student." },
  { id: "g579", category: "高中3500词", word: "click", phonetic: "/klɪk/", translation: "点击", example: "Click the link to visit the website." },
  { id: "g580", category: "高中3500词", word: "climate", phonetic: "/ˈklaɪmət/", translation: "气候", example: "Climate change is a global concern." },
  { id: "g581", category: "高中3500词", word: "climax", phonetic: "/ˈklaɪmæks/", translation: "高潮", example: "The story reaches its climax." },
  { id: "g582", category: "高中3500词", word: "cling", phonetic: "/klɪŋ/", translation: "紧握；依恋", example: "She clung to the rope." },
  { id: "g583", category: "高中3500词", word: "clinic", phonetic: "/ˈklɪnɪk/", translation: "诊所", example: "She went to the clinic for a checkup." },
  { id: "g584", category: "高中3500词", word: "clip", phonetic: "/klɪp/", translation: "夹子；剪辑", example: "She clipped the papers together." },
  { id: "g585", category: "高中3500词", word: "clock", phonetic: "/klɒk/", translation: "钟", example: "The clock on the wall shows ten." },
  { id: "g586", category: "高中3500词", word: "clone", phonetic: "/kləʊn/", translation: "克隆", example: "Scientists have successfully cloned a sheep." },
  { id: "g587", category: "高中3500词", word: "close", phonetic: "/kləʊz/", translation: "关闭；接近的", example: "Please close the door behind you." },
  { id: "g588", category: "高中3500词", word: "cloth", phonetic: "/klɒθ/", translation: "布；织物", example: "She wiped the table with a cloth." },
  { id: "g589", category: "高中3500词", word: "clothes", phonetic: "/kləʊðz/", translation: "衣服", example: "She bought some new clothes." },
  { id: "g590", category: "高中3500词", word: "clothing", phonetic: "/ˈkləʊðɪŋ/", translation: "服装；衣物", example: "Warm clothing is needed in winter." },
  { id: "g591", category: "高中3500词", word: "cloud", phonetic: "/klaʊd/", translation: "云", example: "The sky was full of dark clouds." },
  { id: "g592", category: "高中3500词", word: "cloudy", phonetic: "/ˈklaʊdi/", translation: "多云的", example: "It is cloudy today." },
  { id: "g593", category: "高中3500词", word: "club", phonetic: "/klʌb/", translation: "俱乐部；棍棒", example: "She joined the tennis club." },
  { id: "g594", category: "高中3500词", word: "clue", phonetic: "/kluː/", translation: "线索", example: "The police found a clue." },
  { id: "g595", category: "高中3500词", word: "cluster", phonetic: "/ˈklʌstər/", translation: "群；簇", example: "A cluster of stars was visible." },
  { id: "g596", category: "高中3500词", word: "clutch", phonetic: "/klʌtʃ/", translation: "紧握", example: "She clutched her bag tightly." },
  { id: "g597", category: "高中3500词", word: "coach", phonetic: "/kəʊtʃ/", translation: "教练；长途汽车", example: "The coach trained the team well." },
  { id: "g598", category: "高中3500词", word: "coal", phonetic: "/kəʊl/", translation: "煤", example: "Coal is a fossil fuel." },
  { id: "g599", category: "高中3500词", word: "coarse", phonetic: "/kɔːrs/", translation: "粗糙的", example: "The fabric was coarse." },
  { id: "g600", category: "高中3500词", word: "coast", phonetic: "/kəʊst/", translation: "海岸", example: "We walked along the coast." },
  { id: "g601", category: "高中3500词", word: "coat", phonetic: "/kəʊt/", translation: "外套；涂层", example: "She put on her winter coat." },
  { id: "g602", category: "高中3500词", word: "code", phonetic: "/kəʊd/", translation: "代码；密码", example: "What is the code for the door?" },
  { id: "g603", category: "高中3500词", word: "coffee", phonetic: "/ˈkɒfi/", translation: "咖啡", example: "Would you like a cup of coffee?" },
  { id: "g604", category: "高中3500词", word: "coin", phonetic: "/kɔɪn/", translation: "硬币", example: "She tossed a coin to decide." },
  { id: "g605", category: "高中3500词", word: "coincidence", phonetic: "/kəʊˈɪnsɪdəns/", translation: "巧合", example: "What a coincidence to meet you here!" },
  { id: "g606", category: "高中3500词", word: "cold", phonetic: "/kəʊld/", translation: "冷的；感冒", example: "It is very cold in winter." },
  { id: "g607", category: "高中3500词", word: "collaborate", phonetic: "/kəˈlæbəreɪt/", translation: "合作", example: "They collaborated on the project." },
  { id: "g608", category: "高中3500词", word: "collapse", phonetic: "/kəˈlæps/", translation: "倒塌；崩溃", example: "The old building collapsed during the earthquake." },
  { id: "g609", category: "高中3500词", word: "collar", phonetic: "/ˈkɒlər/", translation: "衣领", example: "The dog wore a collar with a name tag." },
  { id: "g610", category: "高中3500词", word: "colleague", phonetic: "/ˈkɒliːɡ/", translation: "同事", example: "She works well with her colleagues." },
  { id: "g611", category: "高中3500词", word: "collect", phonetic: "/kəˈlekt/", translation: "收集；聚集", example: "He collects stamps as a hobby." },
  { id: "g612", category: "高中3500词", word: "collection", phonetic: "/kəˈlekʃn/", translation: "收藏；收集", example: "She has a large collection of books." },
  { id: "g613", category: "高中3500词", word: "college", phonetic: "/ˈkɒlɪdʒ/", translation: "学院；大学", example: "She goes to college in London." },
  { id: "g614", category: "高中3500词", word: "collision", phonetic: "/kəˈlɪʒn/", translation: "碰撞", example: "There was a collision between two cars." },
  { id: "g615", category: "高中3500词", word: "colonial", phonetic: "/kəˈləʊniəl/", translation: "殖民的", example: "The country has a colonial history." },
  { id: "g616", category: "高中3500词", word: "colony", phonetic: "/ˈkɒləni/", translation: "殖民地", example: "The country was once a colony." },
  { id: "g617", category: "高中3500词", word: "color", phonetic: "/ˈkʌlər/", translation: "颜色", example: "What is your favorite color?" },
  { id: "g618", category: "高中3500词", word: "column", phonetic: "/ˈkɒləm/", translation: "柱；专栏", example: "She writes a column for the newspaper." },
  { id: "g619", category: "高中3500词", word: "combination", phonetic: "/ˌkɒmbɪˈneɪʃn/", translation: "结合；组合", example: "The combination of flavors was delicious." },
  { id: "g620", category: "高中3500词", word: "combine", phonetic: "/kəmˈbaɪn/", translation: "结合；联合", example: "We should combine theory with practice." },
  { id: "g621", category: "高中3500词", word: "come", phonetic: "/kʌm/", translation: "来；来到", example: "Please come here." },
  { id: "g622", category: "高中3500词", word: "comedy", phonetic: "/ˈkɒmədi/", translation: "喜剧", example: "We watched a funny comedy." },
  { id: "g623", category: "高中3500词", word: "comet", phonetic: "/ˈkɒmɪt/", translation: "彗星", example: "The comet was visible last night." },
  { id: "g624", category: "高中3500词", word: "comfort", phonetic: "/ˈkʌmfərt/", translation: "安慰；舒适", example: "The mother tried to comfort her crying child." },
  { id: "g625", category: "高中3500词", word: "comfortable", phonetic: "/ˈkʌmfərtəbl/", translation: "舒适的", example: "This chair is very comfortable." },
  { id: "g626", category: "高中3500词", word: "comic", phonetic: "/ˈkɒmɪk/", translation: "喜剧的；漫画", example: "She reads comic books." },
  { id: "g627", category: "高中3500词", word: "command", phonetic: "/kəˈmɑːnd/", translation: "命令；指挥", example: "The officer commanded the soldiers to advance." },
  { id: "g628", category: "高中3500词", word: "commemorate", phonetic: "/kəˈmeməreɪt/", translation: "纪念", example: "They commemorated the event." },
  { id: "g629", category: "高中3500词", word: "comment", phonetic: "/ˈkɒment/", translation: "评论；意见", example: "He refused to comment on the issue." },
  { id: "g630", category: "高中3500词", word: "commentary", phonetic: "/ˈkɒməntri/", translation: "评论；解说", example: "She listened to the commentary." },
  { id: "g631", category: "高中3500词", word: "commerce", phonetic: "/ˈkɒmɜːrs/", translation: "商业", example: "International commerce is growing." },
  { id: "g632", category: "高中3500词", word: "commission", phonetic: "/kəˈmɪʃn/", translation: "委员会；佣金", example: "She received a commission." },
  { id: "g633", category: "高中3500词", word: "commit", phonetic: "/kəˈmɪt/", translation: "犯（罪）；承诺", example: "He committed himself to the project." },
  { id: "g634", category: "高中3500词", word: "commitment", phonetic: "/kəˈmɪtmənt/", translation: "承诺；投入", example: "She showed great commitment." },
  { id: "g635", category: "高中3500词", word: "committee", phonetic: "/kəˈmɪti/", translation: "委员会", example: "The committee will meet tomorrow." },
  { id: "g636", category: "高中3500词", word: "commodity", phonetic: "/kəˈmɒdəti/", translation: "商品", example: "Oil is an important commodity." },
  { id: "g637", category: "高中3500词", word: "common", phonetic: "/ˈkɒmən/", translation: "常见的；共同的", example: "This is a common mistake." },
  { id: "g638", category: "高中3500词", word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", translation: "交流；传达", example: "We communicate mainly by email." },
  { id: "g639", category: "高中3500词", word: "community", phonetic: "/kəˈmjuːnəti/", translation: "社区；团体", example: "The local community organized a charity event." },
  { id: "g640", category: "高中3500词", word: "commute", phonetic: "/kəˈmjuːt/", translation: "通勤", example: "She commutes to work by train." },
  { id: "g641", category: "高中3500词", word: "compact", phonetic: "/ˈkɒmpækt/", translation: "紧凑的", example: "The apartment is compact but comfortable." },
  { id: "g642", category: "高中3500词", word: "companion", phonetic: "/kəmˈpænjən/", translation: "同伴；伙伴", example: "A dog is a faithful companion." },
  { id: "g643", category: "高中3500词", word: "company", phonetic: "/ˈkʌmpəni/", translation: "公司；陪伴", example: "She works for a large company." },
  { id: "g644", category: "高中3500词", word: "comparable", phonetic: "/ˈkɒmpərəbl/", translation: "可比的", example: "The two products are comparable." },
  { id: "g645", category: "高中3500词", word: "comparative", phonetic: "/kəmˈpærətɪv/", translation: "比较的", example: "She studied comparative literature." },
  { id: "g646", category: "高中3500词", word: "compare", phonetic: "/kəmˈpeər/", translation: "比较；对比", example: "Compare the two reports and find the differences." },
  { id: "g647", category: "高中3500词", word: "compel", phonetic: "/kəmˈpel/", translation: "强迫", example: "She was compelled to resign." },
  { id: "g648", category: "高中3500词", word: "compensate", phonetic: "/ˈkɒmpenseɪt/", translation: "补偿", example: "She was compensated for her loss." },
  { id: "g649", category: "高中3500词", word: "compensation", phonetic: "/ˌkɒmpenˈseɪʃn/", translation: "补偿", example: "She received compensation." },
  { id: "g650", category: "高中3500词", word: "compete", phonetic: "/kəmˈpiːt/", translation: "竞争；比赛", example: "Students compete for scholarships every year." },
  { id: "g651", category: "高中3500词", word: "competence", phonetic: "/ˈkɒmpɪtəns/", translation: "能力", example: "She demonstrated her competence." },
  { id: "g652", category: "高中3500词", word: "competent", phonetic: "/ˈkɒmpɪtənt/", translation: "胜任的", example: "She is a competent teacher." },
  { id: "g653", category: "高中3500词", word: "competitor", phonetic: "/kəmˈpetɪtər/", translation: "竞争者；参赛者", example: "There were 50 competitors in the race." },
  { id: "g654", category: "高中3500词", word: "compile", phonetic: "/kəmˈpaɪl/", translation: "编译；汇编", example: "She compiled a list of words." },
  { id: "g655", category: "高中3500词", word: "complaint", phonetic: "/kəmˈpleɪnt/", translation: "投诉；抱怨", example: "He filed a complaint about the service." },
  { id: "g656", category: "高中3500词", word: "complement", phonetic: "/ˈkɒmplɪmənt/", translation: "补充", example: "The wine complements the meal." },
  { id: "g657", category: "高中3500词", word: "complete", phonetic: "/kəmˈpliːt/", translation: "完成的；完整的", example: "Have you completed the form?" },
  { id: "g658", category: "高中3500词", word: "complex", phonetic: "/ˈkɒmpleks/", translation: "复杂的；综合体", example: "The problem is more complex than we thought." },
  { id: "g659", category: "高中3500词", word: "complexity", phonetic: "/kəmˈpleksəti/", translation: "复杂性", example: "The complexity of the issue is clear." },
  { id: "g660", category: "高中3500词", word: "comply", phonetic: "/kəmˈplaɪ/", translation: "遵守", example: "She complied with the rules." },
  { id: "g661", category: "高中3500词", word: "component", phonetic: "/kəmˈpəʊnənt/", translation: "组成部分；零件", example: "Each component must be tested." },
  { id: "g662", category: "高中3500词", word: "compose", phonetic: "/kəmˈpəʊz/", translation: "组成；创作", example: "She composed a beautiful piece of music." },
  { id: "g663", category: "高中3500词", word: "composition", phonetic: "/ˌkɒmpəˈzɪʃn/", translation: "作文；组成", example: "She wrote a composition about her holiday." },
  { id: "g664", category: "高中3500词", word: "comprehend", phonetic: "/ˌkɒmprɪˈhend/", translation: "理解", example: "She could not comprehend the instructions." },
  { id: "g665", category: "高中3500词", word: "comprehension", phonetic: "/ˌkɒmprɪˈhenʃn/", translation: "理解；理解力", example: "Reading improves your comprehension." },
  { id: "g666", category: "高中3500词", word: "comprehensive", phonetic: "/ˌkɒmprɪˈhensɪv/", translation: "全面的", example: "She gave a comprehensive report." },
  { id: "g667", category: "高中3500词", word: "compromise", phonetic: "/ˈkɒmprəmaɪz/", translation: "妥协；折中", example: "They reached a compromise after long negotiations." },
  { id: "g668", category: "高中3500词", word: "compulsory", phonetic: "/kəmˈpʌlsəri/", translation: "义务的；强制的", example: "Education is compulsory." },
  { id: "g669", category: "高中3500词", word: "computer", phonetic: "/kəmˈpjuːtər/", translation: "计算机", example: "She uses a computer for her work." },
  { id: "g670", category: "高中3500词", word: "conceal", phonetic: "/kənˈsiːl/", translation: "隐藏", example: "She concealed her feelings." },
  { id: "g671", category: "高中3500词", word: "conceive", phonetic: "/kənˈsiːv/", translation: "构想；怀孕", example: "She conceived a brilliant idea." },
  { id: "g672", category: "高中3500词", word: "concentrate", phonetic: "/ˈkɒnsntreɪt/", translation: "集中；专心", example: "Please concentrate on your work." },
  { id: "g673", category: "高中3500词", word: "concentration", phonetic: "/ˌkɒnsnˈtreɪʃn/", translation: "集中；浓度", example: "She has poor concentration." },
  { id: "g674", category: "高中3500词", word: "concept", phonetic: "/ˈkɒnsept/", translation: "概念；观念", example: "The concept of freedom means different things to different people." },
  { id: "g675", category: "高中3500词", word: "conception", phonetic: "/kənˈsepʃn/", translation: "概念；构想", example: "The conception of the project was brilliant." },
  { id: "g676", category: "高中3500词", word: "concern", phonetic: "/kənˈsɜːrn/", translation: "关心；涉及", example: "Environmental pollution is a major concern." },
  { id: "g677", category: "高中3500词", word: "concerning", phonetic: "/kənˈsɜːrnɪŋ/", translation: "关于", example: "She asked concerning the schedule." },
  { id: "g678", category: "高中3500词", word: "concession", phonetic: "/kənˈseʃn/", translation: "让步", example: "She made a concession." },
  { id: "g679", category: "高中3500词", word: "conclude", phonetic: "/kənˈkluːd/", translation: "得出结论；结束", example: "We concluded that the plan was feasible." },
  { id: "g680", category: "高中3500词", word: "conclusion", phonetic: "/kənˈkluːʒn/", translation: "结论；结束", example: "What conclusion did you reach?" },
  { id: "g681", category: "高中3500词", word: "concrete", phonetic: "/ˈkɒŋkriːt/", translation: "混凝土；具体的", example: "We need concrete evidence." },
  { id: "g682", category: "高中3500词", word: "condemn", phonetic: "/kənˈdem/", translation: "谴责", example: "She condemned the violence." },
  { id: "g683", category: "高中3500词", word: "condense", phonetic: "/kənˈdens/", translation: "浓缩；凝结", example: "She condensed the report." },
  { id: "g684", category: "高中3500词", word: "condition", phonetic: "/kənˈdɪʃn/", translation: "条件；状况", example: "The car is in good condition." },
  { id: "g685", category: "高中3500词", word: "conduct", phonetic: "/kənˈdʌkt/", translation: "进行；指挥；行为", example: "The scientist conducted an experiment." },
  { id: "g686", category: "高中3500词", word: "conductor", phonetic: "/kənˈdʌktər/", translation: "指挥；导体", example: "She is an orchestra conductor." },
  { id: "g687", category: "高中3500词", word: "conference", phonetic: "/ˈkɒnfərəns/", translation: "会议；讨论会", example: "She attended an international conference." },
  { id: "g688", category: "高中3500词", word: "confess", phonetic: "/kənˈfes/", translation: "承认；坦白", example: "She confessed her mistake." },
  { id: "g689", category: "高中3500词", word: "confession", phonetic: "/kənˈfeʃn/", translation: "坦白", example: "She made a confession." },
  { id: "g690", category: "高中3500词", word: "confidence", phonetic: "/ˈkɒnfɪdəns/", translation: "信心；自信", example: "She has confidence in her abilities." },
  { id: "g691", category: "高中3500词", word: "confident", phonetic: "/ˈkɒnfɪdənt/", translation: "自信的；确信的", example: "She is confident about the exam." },
  { id: "g692", category: "高中3500词", word: "confine", phonetic: "/kənˈfaɪn/", translation: "限制", example: "She was confined to bed." },
  { id: "g693", category: "高中3500词", word: "confirm", phonetic: "/kənˈfɜːrm/", translation: "确认；证实", example: "Please confirm your reservation by email." },
  { id: "g694", category: "高中3500词", word: "confirmation", phonetic: "/ˌkɒnfərˈmeɪʃn/", translation: "确认", example: "She received confirmation." },
  { id: "g695", category: "高中3500词", word: "conflict", phonetic: "/ˈkɒnflɪkt/", translation: "冲突；矛盾", example: "There was a conflict between the two countries." },
  { id: "g696", category: "高中3500词", word: "confront", phonetic: "/kənˈfrʌnt/", translation: "面对", example: "She confronted the problem." },
  { id: "g697", category: "高中3500词", word: "confrontation", phonetic: "/ˌkɒnfrʌnˈteɪʃn/", translation: "对抗", example: "She avoided confrontation." },
  { id: "g698", category: "高中3500词", word: "confuse", phonetic: "/kənˈfjuːz/", translation: "使困惑；混淆", example: "The instructions confused me." },
  { id: "g699", category: "高中3500词", word: "congregation", phonetic: "/ˌkɒŋɡrɪˈɡeɪʃn/", translation: "集合；会众", example: "The congregation gathered." },
  { id: "g700", category: "高中3500词", word: "congress", phonetic: "/ˈkɒŋɡres/", translation: "国会", example: "Congress passed the law." },
  { id: "g701", category: "高中3500词", word: "conjunction", phonetic: "/kənˈdʒʌŋkʃn/", translation: "连词；结合", example: "Use the word in conjunction with others." },
  { id: "g702", category: "高中3500词", word: "connect", phonetic: "/kəˈnekt/", translation: "连接；联系", example: "The bridge connects the two islands." },
  { id: "g703", category: "高中3500词", word: "connection", phonetic: "/kəˈnekʃn/", translation: "连接；关系", example: "Is there a connection between the two events?" },
  { id: "g704", category: "高中3500词", word: "conscience", phonetic: "/ˈkɒnʃəns/", translation: "良心；道德感", example: "He had a guilty conscience about lying." },
  { id: "g705", category: "高中3500词", word: "conscious", phonetic: "/ˈkɒnʃəs/", translation: "意识到的；有意的", example: "She was conscious of being watched." },
  { id: "g706", category: "高中3500词", word: "consciousness", phonetic: "/ˈkɒnʃəsnəs/", translation: "意识", example: "She lost consciousness." },
  { id: "g707", category: "高中3500词", word: "consequence", phonetic: "/ˈkɒnsɪkwəns/", translation: "结果；后果", example: "You must accept the consequences of your actions." },
  { id: "g708", category: "高中3500词", word: "consequently", phonetic: "/ˈkɒnsɪkwəntli/", translation: "因此", example: "She was late; consequently, she missed the meeting." },
  { id: "g709", category: "高中3500词", word: "conservation", phonetic: "/ˌkɒnsərˈveɪʃn/", translation: "保护；保存", example: "Wildlife conservation is very important." },
  { id: "g710", category: "高中3500词", word: "conservative", phonetic: "/kənˈsɜːrvətɪv/", translation: "保守的", example: "He has conservative views on education." },
  { id: "g711", category: "高中3500词", word: "conserve", phonetic: "/kənˈsɜːrv/", translation: "保存；节约", example: "We should conserve water." },
  { id: "g712", category: "高中3500词", word: "consider", phonetic: "/kənˈsɪdər/", translation: "考虑；认为", example: "Please consider my suggestion carefully." },
  { id: "g713", category: "高中3500词", word: "considerable", phonetic: "/kənˈsɪdərəbl/", translation: "相当大的", example: "She made considerable progress." },
  { id: "g714", category: "高中3500词", word: "considerably", phonetic: "/kənˈsɪdərəbli/", translation: "相当多地", example: "The price has increased considerably." },
  { id: "g715", category: "高中3500词", word: "considerate", phonetic: "/kənˈsɪdərət/", translation: "体贴的；考虑周到的", example: "It was considerate of you to bring an umbrella." },
  { id: "g716", category: "高中3500词", word: "consideration", phonetic: "/kənˌsɪdəˈreɪʃn/", translation: "考虑", example: "She took it into consideration." },
  { id: "g717", category: "高中3500词", word: "consist", phonetic: "/kənˈsɪst/", translation: "由…组成", example: "Water consists of hydrogen and oxygen." },
  { id: "g718", category: "高中3500词", word: "consistent", phonetic: "/kənˈsɪstənt/", translation: "一致的", example: "She is consistent in her work." },
  { id: "g719", category: "高中3500词", word: "consistently", phonetic: "/kənˈsɪstəntli/", translation: "一贯地", example: "She consistently performs well." },
  { id: "g720", category: "高中3500词", word: "constant", phonetic: "/ˈkɒnstənt/", translation: "不断的；恒定的", example: "The noise was a constant distraction." },
  { id: "g721", category: "高中3500词", word: "constantly", phonetic: "/ˈkɒnstəntli/", translation: "不断地", example: "She is constantly improving." },
  { id: "g722", category: "高中3500词", word: "constitute", phonetic: "/ˈkɒnstɪtjuːt/", translation: "构成", example: "Women constitute half the population." },
  { id: "g723", category: "高中3500词", word: "constitution", phonetic: "/ˌkɒnstɪˈtjuːʃn/", translation: "宪法", example: "The constitution guarantees freedom." },
  { id: "g724", category: "高中3500词", word: "construct", phonetic: "/kənˈstrʌkt/", translation: "建造；构建", example: "They plan to construct a new bridge." },
  { id: "g725", category: "高中3500词", word: "construction", phonetic: "/kənˈstrʌkʃn/", translation: "建设；建筑", example: "The construction of the building took two years." },
  { id: "g726", category: "高中3500词", word: "consult", phonetic: "/kənˈsʌlt/", translation: "咨询；查阅", example: "You should consult a doctor immediately." },
  { id: "g727", category: "高中3500词", word: "consultant", phonetic: "/kənˈsʌltənt/", translation: "顾问", example: "She hired a consultant." },
  { id: "g728", category: "高中3500词", word: "consume", phonetic: "/kənˈsjuːm/", translation: "消耗；消费", example: "The car consumes a lot of fuel." },
  { id: "g729", category: "高中3500词", word: "consumer", phonetic: "/kənˈsjuːmər/", translation: "消费者", example: "Consumer demand is high." },
  { id: "g730", category: "高中3500词", word: "consumption", phonetic: "/kənˈsʌmpʃn/", translation: "消费", example: "Energy consumption has increased." },
  { id: "g731", category: "高中3500词", word: "contact", phonetic: "/ˈkɒntækt/", translation: "联系；接触", example: "Please contact us for more information." },
  { id: "g732", category: "高中3500词", word: "contain", phonetic: "/kənˈteɪn/", translation: "包含；容纳", example: "The box contains old photographs." },
  { id: "g733", category: "高中3500词", word: "container", phonetic: "/kənˈteɪnər/", translation: "容器；集装箱", example: "The container was filled with water." },
  { id: "g734", category: "高中3500词", word: "contemporary", phonetic: "/kənˈtemprəri/", translation: "当代的；同时代的", example: "Contemporary art is often controversial." },
  { id: "g735", category: "高中3500词", word: "contempt", phonetic: "/kənˈtempt/", translation: "轻视", example: "She showed contempt for the rules." },
  { id: "g736", category: "高中3500词", word: "content", phonetic: "/ˈkɒntent/", translation: "内容；满足的", example: "Are you content with your current job?" },
  { id: "g737", category: "高中3500词", word: "contest", phonetic: "/ˈkɒntest/", translation: "比赛；竞赛", example: "She won the speech contest." },
  { id: "g738", category: "高中3500词", word: "context", phonetic: "/ˈkɒntekst/", translation: "上下文；背景", example: "You should read it in context." },
  { id: "g739", category: "高中3500词", word: "continent", phonetic: "/ˈkɒntɪnənt/", translation: "大陆；洲", example: "Asia is the largest continent." },
  { id: "g740", category: "高中3500词", word: "continue", phonetic: "/kənˈtɪnjuː/", translation: "继续", example: "Please continue with your work." },
  { id: "g741", category: "高中3500词", word: "contract", phonetic: "/ˈkɒntrækt/", translation: "合同；收缩", example: "Both parties signed the contract." },
  { id: "g742", category: "高中3500词", word: "contradict", phonetic: "/ˌkɒntrəˈdɪkt/", translation: "矛盾；反驳", example: "His actions contradict his words." },
  { id: "g743", category: "高中3500词", word: "contradiction", phonetic: "/ˌkɒntrəˈdɪkʃn/", translation: "矛盾", example: "There is a contradiction in the statement." },
  { id: "g744", category: "高中3500词", word: "contrary", phonetic: "/ˈkɒntrəri/", translation: "相反的", example: "On the contrary, I think it is a good idea." },
  { id: "g745", category: "高中3500词", word: "contrast", phonetic: "/ˈkɒntrɑːst/", translation: "对比", example: "There is a contrast between the two." },
  { id: "g746", category: "高中3500词", word: "contribute", phonetic: "/kənˈtrɪbjuːt/", translation: "贡献；捐助", example: "She contributed a lot to the project." },
  { id: "g747", category: "高中3500词", word: "contribution", phonetic: "/ˌkɒntrɪˈbjuːʃn/", translation: "贡献；捐助", example: "He made a great contribution to science." },
  { id: "g748", category: "高中3500词", word: "control", phonetic: "/kənˈtrəʊl/", translation: "控制；管理", example: "She has good control over the car." },
  { id: "g749", category: "高中3500词", word: "controversial", phonetic: "/ˌkɒntrəˈvɜːrʃl/", translation: "有争议的", example: "The topic is very controversial." },
  { id: "g750", category: "高中3500词", word: "controversy", phonetic: "/ˈkɒntrəvɜːrsi/", translation: "争议", example: "The decision caused controversy." },
  { id: "g751", category: "高中3500词", word: "convenience", phonetic: "/kənˈviːniəns/", translation: "方便；便利", example: "The hotel offers every convenience." },
  { id: "g752", category: "高中3500词", word: "convenient", phonetic: "/kənˈviːniənt/", translation: "方便的", example: "Is it convenient for you to meet tomorrow?" },
  { id: "g753", category: "高中3500词", word: "convention", phonetic: "/kənˈvenʃn/", translation: "惯例；大会", example: "The convention was held in New York." },
  { id: "g754", category: "高中3500词", word: "conventional", phonetic: "/kənˈvenʃənl/", translation: "传统的", example: "She has conventional views." },
  { id: "g755", category: "高中3500词", word: "conversation", phonetic: "/ˌkɒnvərˈseɪʃn/", translation: "对话；会话", example: "They had a long conversation." },
  { id: "g756", category: "高中3500词", word: "conversion", phonetic: "/kənˈvɜːrʃn/", translation: "转换", example: "The conversion was successful." },
  { id: "g757", category: "高中3500词", word: "convert", phonetic: "/kənˈvɜːrt/", translation: "转换", example: "She converted the file." },
  { id: "g758", category: "高中3500词", word: "convey", phonetic: "/kənˈveɪ/", translation: "传达", example: "She conveyed her message." },
  { id: "g759", category: "高中3500词", word: "conviction", phonetic: "/kənˈvɪkʃn/", translation: "定罪；信念", example: "She spoke with conviction." },
  { id: "g760", category: "高中3500词", word: "convince", phonetic: "/kənˈvɪns/", translation: "说服；使确信", example: "He convinced me that he was right." },
  { id: "g761", category: "高中3500词", word: "cook", phonetic: "/kʊk/", translation: "烹饪；厨师", example: "She cooked a delicious meal." },
  { id: "g762", category: "高中3500词", word: "cookie", phonetic: "/ˈkʊki/", translation: "饼干；小甜点", example: "The children love cookies." },
  { id: "g763", category: "高中3500词", word: "cool", phonetic: "/kuːl/", translation: "凉爽的；酷的", example: "It is cool in the evening." },
  { id: "g764", category: "高中3500词", word: "cooperate", phonetic: "/kəʊˈɒpəreɪt/", translation: "合作；协作", example: "We must cooperate with each other." },
  { id: "g765", category: "高中3500词", word: "cooperation", phonetic: "/kəʊˌɒpəˈreɪʃn/", translation: "合作", example: "Thank you for your cooperation." },
  { id: "g766", category: "高中3500词", word: "cooperative", phonetic: "/kəʊˈɒpərətɪv/", translation: "合作的", example: "She is a cooperative student." },
  { id: "g767", category: "高中3500词", word: "coordinate", phonetic: "/kəʊˈɔːrdɪneɪt/", translation: "协调", example: "She coordinated the project." },
  { id: "g768", category: "高中3500词", word: "cope", phonetic: "/kəʊp/", translation: "应对；处理", example: "She learned to cope with stress." },
  { id: "g769", category: "高中3500词", word: "copy", phonetic: "/ˈkɒpi/", translation: "复制；副本", example: "Please make a copy of this document." },
  { id: "g770", category: "高中3500词", word: "copyright", phonetic: "/ˈkɒpiraɪt/", translation: "版权", example: "The book is under copyright." },
  { id: "g771", category: "高中3500词", word: "cord", phonetic: "/kɔːrd/", translation: "绳索", example: "She tied the package with a cord." },
  { id: "g772", category: "高中3500词", word: "core", phonetic: "/kɔːr/", translation: "核心；果核", example: "The core of the problem is lack of money." },
  { id: "g773", category: "高中3500词", word: "corn", phonetic: "/kɔːrn/", translation: "玉米", example: "The farmer grew corn in the field." },
  { id: "g774", category: "高中3500词", word: "corner", phonetic: "/ˈkɔːrnər/", translation: "角落；拐角", example: "The shop is on the corner of the street." },
  { id: "g775", category: "高中3500词", word: "corporation", phonetic: "/ˌkɔːrpəˈreɪʃn/", translation: "公司", example: "She works for a large corporation." },
  { id: "g776", category: "高中3500词", word: "correct", phonetic: "/kəˈrekt/", translation: "正确的；纠正", example: "Is this answer correct?" },
  { id: "g777", category: "高中3500词", word: "correction", phonetic: "/kəˈrekʃn/", translation: "改正", example: "She made corrections to the essay." },
  { id: "g778", category: "高中3500词", word: "correspond", phonetic: "/ˌkɒrɪˈspɒnd/", translation: "通信；相符", example: "The results correspond with our expectations." },
  { id: "g779", category: "高中3500词", word: "correspondence", phonetic: "/ˌkɒrɪˈspɒndəns/", translation: "通信", example: "She kept up correspondence with her friend." },
  { id: "g780", category: "高中3500词", word: "corresponding", phonetic: "/ˌkɒrɪˈspɒndɪŋ/", translation: "相应的", example: "There was a corresponding increase." },
  { id: "g781", category: "高中3500词", word: "corridor", phonetic: "/ˈkɒrɪdɔːr/", translation: "走廊", example: "She walked down the corridor." },
  { id: "g782", category: "高中3500词", word: "corrupt", phonetic: "/kəˈrʌpt/", translation: "腐败的", example: "The official was corrupt." },
  { id: "g783", category: "高中3500词", word: "cost", phonetic: "/kɒst/", translation: "花费；成本", example: "How much does it cost?" },
  { id: "g784", category: "高中3500词", word: "costume", phonetic: "/ˈkɒstjuːm/", translation: "服装；戏装", example: "She wore a traditional costume." },
  { id: "g785", category: "高中3500词", word: "cottage", phonetic: "/ˈkɒtɪdʒ/", translation: "小屋；村舍", example: "They stayed in a cottage by the lake." },
  { id: "g786", category: "高中3500词", word: "cotton", phonetic: "/ˈkɒtn/", translation: "棉花；棉", example: "This shirt is made of cotton." },
  { id: "g787", category: "高中3500词", word: "cough", phonetic: "/kɒf/", translation: "咳嗽", example: "She had a bad cough." },
  { id: "g788", category: "高中3500词", word: "could", phonetic: "/kʊd/", translation: "能；可以", example: "Could you help me please?" },
  { id: "g789", category: "高中3500词", word: "council", phonetic: "/ˈkaʊnsl/", translation: "委员会", example: "The council made a decision." },
  { id: "g790", category: "高中3500词", word: "counsel", phonetic: "/ˈkaʊnsl/", translation: "忠告；律师", example: "She sought counsel." },
  { id: "g791", category: "高中3500词", word: "count", phonetic: "/kaʊnt/", translation: "数；计算", example: "Can you count from one to ten?" },
  { id: "g792", category: "高中3500词", word: "counter", phonetic: "/ˈkaʊntər/", translation: "柜台；计数器", example: "She paid at the counter." },
  { id: "g793", category: "高中3500词", word: "counterpart", phonetic: "/ˈkaʊntərpɑːrt/", translation: "对应的人/物", example: "She met her Chinese counterpart." },
  { id: "g794", category: "高中3500词", word: "countless", phonetic: "/ˈkaʊntləs/", translation: "无数的", example: "She has helped countless people." },
  { id: "g795", category: "高中3500词", word: "country", phonetic: "/ˈkʌntri/", translation: "国家；乡村", example: "China is a large country." },
  { id: "g796", category: "高中3500词", word: "countryside", phonetic: "/ˈkʌntrisaɪd/", translation: "乡村；农村", example: "She loves the peaceful countryside." },
  { id: "g797", category: "高中3500词", word: "county", phonetic: "/ˈkaʊnti/", translation: "县；郡", example: "He lives in the county of Kent." },
  { id: "g798", category: "高中3500词", word: "couple", phonetic: "/ˈkʌpl/", translation: "一对；夫妇", example: "A couple of friends came to visit." },
  { id: "g799", category: "高中3500词", word: "coupon", phonetic: "/ˈkuːpɒn/", translation: "优惠券", example: "She used a coupon." },
  { id: "g800", category: "高中3500词", word: "courage", phonetic: "/ˈkʌrɪdʒ/", translation: "勇气；胆量", example: "It takes courage to speak in public." },
  { id: "g801", category: "高中3500词", word: "course", phonetic: "/kɔːrs/", translation: "课程；过程", example: "She is taking a computer course." },
  { id: "g802", category: "高中3500词", word: "court", phonetic: "/kɔːrt/", translation: "法庭；球场", example: "The case was taken to court." },
  { id: "g803", category: "高中3500词", word: "courtyard", phonetic: "/ˈkɔːrtjɑːrd/", translation: "庭院", example: "The children played in the courtyard." },
  { id: "g804", category: "高中3500词", word: "cousin", phonetic: "/ˈkʌzn/", translation: "堂/表兄弟姐妹", example: "My cousin lives in Shanghai." },
  { id: "g805", category: "高中3500词", word: "cover", phonetic: "/ˈkʌvər/", translation: "覆盖；封面", example: "Please cover the table with a cloth." },
  { id: "g806", category: "高中3500词", word: "cow", phonetic: "/kaʊ/", translation: "奶牛", example: "The cow produces milk every day." },
  { id: "g807", category: "高中3500词", word: "craft", phonetic: "/krɑːft/", translation: "工艺；手艺", example: "She learned the craft of pottery." },
  { id: "g808", category: "高中3500词", word: "crash", phonetic: "/kræʃ/", translation: "碰撞；崩溃", example: "The car crashed into a tree." },
  { id: "g809", category: "高中3500词", word: "crawl", phonetic: "/krɔːl/", translation: "爬行", example: "The baby crawled across the floor." },
  { id: "g810", category: "高中3500词", word: "crazy", phonetic: "/ˈkreɪzi/", translation: "疯狂的；着迷的", example: "She is crazy about music." },
  { id: "g811", category: "高中3500词", word: "cream", phonetic: "/kriːm/", translation: "奶油；面霜", example: "Would you like cream in your coffee?" },
  { id: "g812", category: "高中3500词", word: "create", phonetic: "/kriˈeɪt/", translation: "创造；创建", example: "The artist created a beautiful painting." },
  { id: "g813", category: "高中3500词", word: "creative", phonetic: "/kriˈeɪtɪv/", translation: "创造性的", example: "She has a very creative mind." },
  { id: "g814", category: "高中3500词", word: "creativity", phonetic: "/ˌkriːeɪˈtɪvəti/", translation: "创造力", example: "She has great creativity." },
  { id: "g815", category: "高中3500词", word: "creature", phonetic: "/ˈkriːtʃər/", translation: "生物；动物", example: "All creatures need water to survive." },
  { id: "g816", category: "高中3500词", word: "credential", phonetic: "/krɪˈdenʃl/", translation: "证书；资格", example: "She presented her credentials." },
  { id: "g817", category: "高中3500词", word: "credit", phonetic: "/ˈkredɪt/", translation: "信用；学分", example: "She earned credits for the course." },
  { id: "g818", category: "高中3500词", word: "crew", phonetic: "/kruː/", translation: "全体人员；船员", example: "The crew worked together to sail the ship." },
  { id: "g819", category: "高中3500词", word: "cricket", phonetic: "/ˈkrɪkɪt/", translation: "蟋蟀；板球", example: "They played cricket." },
  { id: "g820", category: "高中3500词", word: "crime", phonetic: "/kraɪm/", translation: "犯罪；罪行", example: "The crime rate has increased this year." },
  { id: "g821", category: "高中3500词", word: "criminal", phonetic: "/ˈkrɪmɪnl/", translation: "罪犯；犯罪的", example: "The criminal was sent to prison." },
  { id: "g822", category: "高中3500词", word: "crisis", phonetic: "/ˈkraɪsɪs/", translation: "危机", example: "The country is facing an economic crisis." },
  { id: "g823", category: "高中3500词", word: "criterion", phonetic: "/kraɪˈtɪəriən/", translation: "标准；准则", example: "What criteria do you use for selection?" },
  { id: "g824", category: "高中3500词", word: "critic", phonetic: "/ˈkrɪtɪk/", translation: "评论家", example: "She is a film critic." },
  { id: "g825", category: "高中3500词", word: "critical", phonetic: "/ˈkrɪtɪkl/", translation: "批评的；关键的", example: "This is a critical moment for the company." },
  { id: "g826", category: "高中3500词", word: "criticism", phonetic: "/ˈkrɪtɪsɪzəm/", translation: "批评", example: "She accepted the criticism." },
  { id: "g827", category: "高中3500词", word: "criticize", phonetic: "/ˈkrɪtɪsaɪz/", translation: "批评", example: "She criticized the plan." },
  { id: "g828", category: "高中3500词", word: "crop", phonetic: "/krɒp/", translation: "庄稼；作物", example: "The farmers are harvesting their crops." },
  { id: "g829", category: "高中3500词", word: "cross", phonetic: "/krɒs/", translation: "穿过；交叉", example: "Look both ways before you cross the road." },
  { id: "g830", category: "高中3500词", word: "crossing", phonetic: "/ˈkrɒsɪŋ/", translation: "十字路口；横穿", example: "Use the crossing to get across the road." },
  { id: "g831", category: "高中3500词", word: "crowd", phonetic: "/kraʊd/", translation: "人群", example: "A large crowd gathered in the square." },
  { id: "g832", category: "高中3500词", word: "crowded", phonetic: "/ˈkraʊdɪd/", translation: "拥挤的", example: "The bus was very crowded." },
  { id: "g833", category: "高中3500词", word: "crucial", phonetic: "/ˈkruːʃl/", translation: "至关重要的", example: "Education is crucial for personal development." },
  { id: "g834", category: "高中3500词", word: "cruel", phonetic: "/ˈkruːəl/", translation: "残忍的", example: "It is cruel to hurt animals." },
  { id: "g835", category: "高中3500词", word: "cruise", phonetic: "/kruːz/", translation: "巡游", example: "They went on a cruise." },
  { id: "g836", category: "高中3500词", word: "crush", phonetic: "/krʌʃ/", translation: "压碎；镇压", example: "The car was crushed in the accident." },
  { id: "g837", category: "高中3500词", word: "crust", phonetic: "/krʌst/", translation: "外壳；面包皮", example: "She cut the crust off the bread." },
  { id: "g838", category: "高中3500词", word: "cry", phonetic: "/kraɪ/", translation: "哭；喊叫", example: "The baby started to cry." },
  { id: "g839", category: "高中3500词", word: "crystal", phonetic: "/ˈkrɪstl/", translation: "水晶", example: "The vase was made of crystal." },
  { id: "g840", category: "高中3500词", word: "cube", phonetic: "/kjuːb/", translation: "立方体", example: "She cut the cheese into cubes." },
  { id: "g841", category: "高中3500词", word: "cubic", phonetic: "/ˈkjuːbɪk/", translation: "立方的", example: "The cubic capacity is 100." },
  { id: "g842", category: "高中3500词", word: "cuisine", phonetic: "/kwɪˈziːn/", translation: "烹饪", example: "She enjoys French cuisine." },
  { id: "g843", category: "高中3500词", word: "cultivate", phonetic: "/ˈkʌltɪveɪt/", translation: "培养；耕种", example: "She cultivated her skills." },
  { id: "g844", category: "高中3500词", word: "cultural", phonetic: "/ˈkʌltʃərəl/", translation: "文化的", example: "We visited some cultural sites." },
  { id: "g845", category: "高中3500词", word: "culture", phonetic: "/ˈkʌltʃər/", translation: "文化", example: "Chinese culture has a long history." },
  { id: "g846", category: "高中3500词", word: "cup", phonetic: "/kʌp/", translation: "杯子", example: "Would you like a cup of tea?" },
  { id: "g847", category: "高中3500词", word: "cupboard", phonetic: "/ˈkʌbərd/", translation: "橱柜", example: "The plates are in the cupboard." },
  { id: "g848", category: "高中3500词", word: "cure", phonetic: "/kjʊər/", translation: "治愈；疗法", example: "The doctor cured him of the disease." },
  { id: "g849", category: "高中3500词", word: "curiosity", phonetic: "/ˌkjʊəriˈɒsəti/", translation: "好奇心", example: "Curiosity drove him to explore the cave." },
  { id: "g850", category: "高中3500词", word: "curious", phonetic: "/ˈkjʊriəs/", translation: "好奇的", example: "Children are naturally curious about the world." },
  { id: "g851", category: "高中3500词", word: "curl", phonetic: "/kɜːrl/", translation: "卷发；卷曲", example: "She has beautiful curls." },
  { id: "g852", category: "高中3500词", word: "currency", phonetic: "/ˈkʌrənsi/", translation: "货币；通货", example: "The euro is the currency of many European countries." },
  { id: "g853", category: "高中3500词", word: "current", phonetic: "/ˈkʌrənt/", translation: "当前的；水流", example: "What is your current address?" },
  { id: "g854", category: "高中3500词", word: "curriculum", phonetic: "/kəˈrɪkjələm/", translation: "课程", example: "The school has updated its curriculum." },
  { id: "g855", category: "高中3500词", word: "curse", phonetic: "/kɜːrs/", translation: "诅咒", example: "She cursed her luck." },
  { id: "g856", category: "高中3500词", word: "curtain", phonetic: "/ˈkɜːrtn/", translation: "窗帘", example: "She drew the curtains." },
  { id: "g857", category: "高中3500词", word: "cushion", phonetic: "/ˈkʊʃn/", translation: "垫子", example: "She put a cushion on the chair." },
  { id: "g858", category: "高中3500词", word: "custom", phonetic: "/ˈkʌstəm/", translation: "习俗；海关", example: "It is a custom to give gifts at Christmas." },
  { id: "g859", category: "高中3500词", word: "customer", phonetic: "/ˈkʌstəmər/", translation: "顾客", example: "The customer was very satisfied." },
  { id: "g860", category: "高中3500词", word: "customs", phonetic: "/ˈkʌstəmz/", translation: "海关", example: "She went through customs." },
  { id: "g861", category: "高中3500词", word: "cut", phonetic: "/kʌt/", translation: "切；割", example: "She cut the cake into pieces." },
  { id: "g862", category: "高中3500词", word: "cycle", phonetic: "/ˈsaɪkl/", translation: "循环；骑自行车", example: "She cycles to work every day." },
  { id: "g863", category: "高中3500词", word: "daily", phonetic: "/ˈdeɪli/", translation: "每日的；日常的", example: "She reads the daily newspaper." },
  { id: "g864", category: "高中3500词", word: "damage", phonetic: "/ˈdæmɪdʒ/", translation: "损害；伤害", example: "The storm caused serious damage to the crops." },
  { id: "g865", category: "高中3500词", word: "damp", phonetic: "/dæmp/", translation: "潮湿的", example: "The room was cold and damp." },
  { id: "g866", category: "高中3500词", word: "dance", phonetic: "/dɑːns/", translation: "跳舞；舞蹈", example: "She loves to dance." },
  { id: "g867", category: "高中3500词", word: "danger", phonetic: "/ˈdeɪndʒər/", translation: "危险", example: "The children were in danger." },
  { id: "g868", category: "高中3500词", word: "dangerous", phonetic: "/ˈdeɪndʒərəs/", translation: "危险的", example: "It is dangerous to swim here." },
  { id: "g869", category: "高中3500词", word: "dare", phonetic: "/deər/", translation: "敢；胆敢", example: "How dare you say that!" },
  { id: "g870", category: "高中3500词", word: "dark", phonetic: "/dɑːrk/", translation: "黑暗的；暗的", example: "It was getting dark outside." },
  { id: "g871", category: "高中3500词", word: "darkness", phonetic: "/ˈdɑːrknəs/", translation: "黑暗", example: "The room was in complete darkness." },
  { id: "g872", category: "高中3500词", word: "dash", phonetic: "/dæʃ/", translation: "猛冲；破折号", example: "She made a dash for the door." },
  { id: "g873", category: "高中3500词", word: "data", phonetic: "/ˈdeɪtə/", translation: "数据；资料", example: "The data shows a clear trend." },
  { id: "g874", category: "高中3500词", word: "database", phonetic: "/ˈdeɪtəbeɪs/", translation: "数据库", example: "The information is stored in a database." },
  { id: "g875", category: "高中3500词", word: "date", phonetic: "/deɪt/", translation: "日期；约会", example: "What is the date today?" },
  { id: "g876", category: "高中3500词", word: "daughter", phonetic: "/ˈdɔːtər/", translation: "女儿", example: "She has a daughter and a son." },
  { id: "g877", category: "高中3500词", word: "dawn", phonetic: "/dɔːn/", translation: "黎明；拂晓", example: "We woke at dawn." },
  { id: "g878", category: "高中3500词", word: "day", phonetic: "/deɪ/", translation: "天；白天", example: "What a beautiful day!" },
  { id: "g879", category: "高中3500词", word: "deadline", phonetic: "/ˈdedlaɪn/", translation: "截止日期", example: "The deadline for the project is Friday." },
  { id: "g880", category: "高中3500词", word: "deaf", phonetic: "/def/", translation: "聋的", example: "The deaf man used sign language." },
  { id: "g881", category: "高中3500词", word: "deal", phonetic: "/diːl/", translation: "处理；交易", example: "We need to deal with this problem." },
  { id: "g882", category: "高中3500词", word: "dear", phonetic: "/dɪər/", translation: "亲爱的；昂贵的", example: "Dear friends, welcome to our school." },
  { id: "g883", category: "高中3500词", word: "death", phonetic: "/deθ/", translation: "死亡", example: "The death of his dog made him sad." },
  { id: "g884", category: "高中3500词", word: "debate", phonetic: "/dɪˈbeɪt/", translation: "辩论；争论", example: "The students had a heated debate on the topic." },
  { id: "g885", category: "高中3500词", word: "debt", phonetic: "/det/", translation: "债务；欠款", example: "He is in debt because of his gambling." },
  { id: "g886", category: "高中3500词", word: "decade", phonetic: "/ˈdekeɪd/", translation: "十年", example: "The company has grown over the past decade." },
  { id: "g887", category: "高中3500词", word: "decent", phonetic: "/ˈdiːsnt/", translation: "体面的", example: "She earns a decent salary." },
  { id: "g888", category: "高中3500词", word: "decide", phonetic: "/dɪˈsaɪd/", translation: "决定", example: "She decided to study abroad." },
  { id: "g889", category: "高中3500词", word: "decision", phonetic: "/dɪˈsɪʒn/", translation: "决定；决心", example: "She made the right decision." },
  { id: "g890", category: "高中3500词", word: "declaration", phonetic: "/ˌdekləˈreɪʃn/", translation: "宣言", example: "She signed the declaration." },
  { id: "g891", category: "高中3500词", word: "declare", phonetic: "/dɪˈkleər/", translation: "宣布；声明", example: "The president declared a state of emergency." },
  { id: "g892", category: "高中3500词", word: "decline", phonetic: "/dɪˈklaɪn/", translation: "下降；拒绝", example: "The population of the village is declining." },
  { id: "g893", category: "高中3500词", word: "decorate", phonetic: "/ˈdekəreɪt/", translation: "装饰；装修", example: "They decorated the room for the party." },
  { id: "g894", category: "高中3500词", word: "decoration", phonetic: "/ˌdekəˈreɪʃn/", translation: "装饰；装饰品", example: "The Christmas decorations were beautiful." },
  { id: "g895", category: "高中3500词", word: "decrease", phonetic: "/dɪˈkriːs/", translation: "减少；降低", example: "The number of accidents has decreased." },
  { id: "g896", category: "高中3500词", word: "dedicate", phonetic: "/ˈdedɪkeɪt/", translation: "致力于", example: "She dedicated her life to science." },
  { id: "g897", category: "高中3500词", word: "dedication", phonetic: "/ˌdedɪˈkeɪʃn/", translation: "奉献", example: "Her dedication is admirable." },
  { id: "g898", category: "高中3500词", word: "deed", phonetic: "/diːd/", translation: "行为", example: "She did a good deed." },
  { id: "g899", category: "高中3500词", word: "deep", phonetic: "/diːp/", translation: "深的", example: "The lake is very deep." },
  { id: "g900", category: "高中3500词", word: "deeply", phonetic: "/ˈdiːpli/", translation: "深深地", example: "She was deeply moved by the story." },
  { id: "g901", category: "高中3500词", word: "deer", phonetic: "/dɪər/", translation: "鹿", example: "We saw a deer in the forest." },
  { id: "g902", category: "高中3500词", word: "default", phonetic: "/dɪˈfɔːlt/", translation: "默认；违约", example: "The default setting is fine." },
  { id: "g903", category: "高中3500词", word: "defeat", phonetic: "/dɪˈfiːt/", translation: "打败；击败", example: "Our team defeated the opponents." },
  { id: "g904", category: "高中3500词", word: "defend", phonetic: "/dɪˈfend/", translation: "防御；保卫", example: "The soldiers defended the city bravely." },
  { id: "g905", category: "高中3500词", word: "defense", phonetic: "/dɪˈfens/", translation: "防御；辩护", example: "The country needs a strong defense." },
  { id: "g906", category: "高中3500词", word: "deficit", phonetic: "/ˈdefɪsɪt/", translation: "赤字", example: "The government has a budget deficit." },
  { id: "g907", category: "高中3500词", word: "define", phonetic: "/dɪˈfaɪn/", translation: "定义；界定", example: "How do you define success?" },
  { id: "g908", category: "高中3500词", word: "definite", phonetic: "/ˈdefɪnət/", translation: "明确的；确定的", example: "We need a definite answer." },
  { id: "g909", category: "高中3500词", word: "definitely", phonetic: "/ˈdefɪnətli/", translation: "明确地；当然", example: "I will definitely come to the party." },
  { id: "g910", category: "高中3500词", word: "definition", phonetic: "/ˌdefɪˈnɪʃn/", translation: "定义", example: "What is the definition of this word?" },
  { id: "g911", category: "高中3500词", word: "degree", phonetic: "/dɪˈɡriː/", translation: "程度；学位", example: "She has a master's degree in education." },
  { id: "g912", category: "高中3500词", word: "delay", phonetic: "/dɪˈleɪ/", translation: "推迟；延误", example: "The flight was delayed for two hours." },
  { id: "g913", category: "高中3500词", word: "delegate", phonetic: "/ˈdelɪɡət/", translation: "代表", example: "She was a delegate at the conference." },
  { id: "g914", category: "高中3500词", word: "delegation", phonetic: "/ˌdelɪˈɡeɪʃn/", translation: "代表团", example: "She led the delegation." },
  { id: "g915", category: "高中3500词", word: "delete", phonetic: "/dɪˈliːt/", translation: "删除", example: "Please delete the old files." },
  { id: "g916", category: "高中3500词", word: "deliberate", phonetic: "/dɪˈlɪbərət/", translation: "故意的；深思熟虑的", example: "It was a deliberate attempt to mislead the public." },
  { id: "g917", category: "高中3500词", word: "deliberately", phonetic: "/dɪˈlɪbərətli/", translation: "故意地", example: "She deliberately ignored my message." },
  { id: "g918", category: "高中3500词", word: "delicate", phonetic: "/ˈdelɪkət/", translation: "精致的；脆弱的", example: "Handle the delicate glass with care." },
  { id: "g919", category: "高中3500词", word: "delicious", phonetic: "/dɪˈlɪʃəs/", translation: "美味的", example: "The cake looks delicious." },
  { id: "g920", category: "高中3500词", word: "delight", phonetic: "/dɪˈlaɪt/", translation: "高兴；使高兴", example: "The children were filled with delight." },
  { id: "g921", category: "高中3500词", word: "delighted", phonetic: "/dɪˈlaɪtɪd/", translation: "高兴的", example: "I am delighted to meet you." },
  { id: "g922", category: "高中3500词", word: "deliver", phonetic: "/dɪˈlɪvər/", translation: "递送；发表", example: "The postman delivered the parcel this morning." },
  { id: "g923", category: "高中3500词", word: "demand", phonetic: "/dɪˈmɑːnd/", translation: "要求；需求", example: "There is a great demand for skilled workers." },
  { id: "g924", category: "高中3500词", word: "democracy", phonetic: "/dɪˈmɒkrəsi/", translation: "民主", example: "We live in a democracy." },
  { id: "g925", category: "高中3500词", word: "democratic", phonetic: "/ˌdeməˈkrætɪk/", translation: "民主的", example: "She supports democratic principles." },
  { id: "g926", category: "高中3500词", word: "demonstrate", phonetic: "/ˈdemənstreɪt/", translation: "证明；示范", example: "The experiment demonstrated the theory." },
  { id: "g927", category: "高中3500词", word: "demonstration", phonetic: "/ˌdemənˈstreɪʃn/", translation: "示范；示威", example: "She gave a demonstration." },
  { id: "g928", category: "高中3500词", word: "denial", phonetic: "/dɪˈnaɪəl/", translation: "否认", example: "His denial of the accusation was firm." },
  { id: "g929", category: "高中3500词", word: "density", phonetic: "/ˈdensəti/", translation: "密度", example: "The population density is high." },
  { id: "g930", category: "高中3500词", word: "dentist", phonetic: "/ˈdentɪst/", translation: "牙医", example: "I have an appointment with the dentist." },
  { id: "g931", category: "高中3500词", word: "deny", phonetic: "/dɪˈnaɪ/", translation: "否认；拒绝", example: "He denied stealing the money." },
  { id: "g932", category: "高中3500词", word: "depart", phonetic: "/dɪˈpɑːrt/", translation: "出发；离开", example: "The train departs at 8 am." },
  { id: "g933", category: "高中3500词", word: "department", phonetic: "/dɪˈpɑːrtmənt/", translation: "部门；系", example: "She works in the sales department." },
  { id: "g934", category: "高中3500词", word: "departure", phonetic: "/dɪˈpɑːrtʃər/", translation: "离开；出发", example: "The departure time has been changed." },
  { id: "g935", category: "高中3500词", word: "depend", phonetic: "/dɪˈpend/", translation: "依赖；取决于", example: "Success depends on hard work." },
  { id: "g936", category: "高中3500词", word: "dependent", phonetic: "/dɪˈpendənt/", translation: "依赖的", example: "She is dependent on her parents." },
  { id: "g937", category: "高中3500词", word: "deposit", phonetic: "/dɪˈpɒzɪt/", translation: "存款；押金", example: "You need to pay a deposit to reserve the room." },
  { id: "g938", category: "高中3500词", word: "depress", phonetic: "/dɪˈpres/", translation: "使沮丧；压下", example: "The bad news depressed her." },
  { id: "g939", category: "高中3500词", word: "depression", phonetic: "/dɪˈpreʃn/", translation: "沮丧；萧条", example: "She suffered from depression." },
  { id: "g940", category: "高中3500词", word: "deprive", phonetic: "/dɪˈpraɪv/", translation: "剥夺", example: "She was deprived of sleep." },
  { id: "g941", category: "高中3500词", word: "depth", phonetic: "/depθ/", translation: "深度", example: "The depth of the ocean is amazing." },
  { id: "g942", category: "高中3500词", word: "derive", phonetic: "/dɪˈraɪv/", translation: "来源于；获得", example: "The word derives from Latin." },
  { id: "g943", category: "高中3500词", word: "descend", phonetic: "/dɪˈsend/", translation: "下降", example: "She descended the stairs." },
  { id: "g944", category: "高中3500词", word: "descent", phonetic: "/dɪˈsent/", translation: "下降；血统", example: "She is of Chinese descent." },
  { id: "g945", category: "高中3500词", word: "describe", phonetic: "/dɪˈskraɪb/", translation: "描述", example: "Can you describe what happened?" },
  { id: "g946", category: "高中3500词", word: "description", phonetic: "/dɪˈskrɪpʃn/", translation: "描述；描写", example: "The description matches the suspect." },
  { id: "g947", category: "高中3500词", word: "desert", phonetic: "/ˈdezərt/", translation: "沙漠", example: "The Sahara is the largest desert." },
  { id: "g948", category: "高中3500词", word: "deserve", phonetic: "/dɪˈzɜːrv/", translation: "值得；应得", example: "You deserve a reward for your hard work." },
  { id: "g949", category: "高中3500词", word: "design", phonetic: "/dɪˈzaɪn/", translation: "设计；图案", example: "She designed a beautiful dress." },
  { id: "g950", category: "高中3500词", word: "designer", phonetic: "/dɪˈzaɪnər/", translation: "设计师", example: "She is a fashion designer." },
  { id: "g951", category: "高中3500词", word: "desire", phonetic: "/dɪˈzaɪər/", translation: "渴望；欲望", example: "He has a strong desire to succeed." },
  { id: "g952", category: "高中3500词", word: "desk", phonetic: "/desk/", translation: "书桌", example: "She sat at her desk and studied." },
  { id: "g953", category: "高中3500词", word: "desperate", phonetic: "/ˈdespərət/", translation: "绝望的；不顾一切的", example: "She was desperate for help." },
  { id: "g954", category: "高中3500词", word: "desperately", phonetic: "/ˈdespərətli/", translation: "拼命地；绝望地", example: "He desperately tried to escape." },
  { id: "g955", category: "高中3500词", word: "despite", phonetic: "/dɪˈspaɪt/", translation: "尽管", example: "Despite the rain, they went out for a walk." },
  { id: "g956", category: "高中3500词", word: "dessert", phonetic: "/dɪˈzɜːrt/", translation: "甜点", example: "What would you like for dessert?" },
  { id: "g957", category: "高中3500词", word: "destination", phonetic: "/ˌdestɪˈneɪʃn/", translation: "目的地", example: "We arrived at our destination at sunset." },
  { id: "g958", category: "高中3500词", word: "destiny", phonetic: "/ˈdestɪni/", translation: "命运", example: "She believed in destiny." },
  { id: "g959", category: "高中3500词", word: "destroy", phonetic: "/dɪˈstrɔɪ/", translation: "破坏；毁灭", example: "The fire destroyed the entire building." },
  { id: "g960", category: "高中3500词", word: "destruction", phonetic: "/dɪˈstrʌkʃn/", translation: "破坏；毁灭", example: "The destruction of the forest is alarming." },
  { id: "g961", category: "高中3500词", word: "detachment", phonetic: "/dɪˈtætʃmənt/", translation: "超然； detachment", example: "She showed detachment." },
  { id: "g962", category: "高中3500词", word: "detail", phonetic: "/ˈdiːteɪl/", translation: "细节", example: "Please explain in detail." },
  { id: "g963", category: "高中3500词", word: "detailed", phonetic: "/ˈdiːteɪld/", translation: "详细的", example: "She gave a detailed description." },
  { id: "g964", category: "高中3500词", word: "detect", phonetic: "/dɪˈtekt/", translation: "发现；侦测", example: "The device can detect harmful chemicals." },
  { id: "g965", category: "高中3500词", word: "determination", phonetic: "/dɪˌtɜːrmɪˈneɪʃn/", translation: "决心", example: "She showed great determination." },
  { id: "g966", category: "高中3500词", word: "determine", phonetic: "/dɪˈtɜːrmɪn/", translation: "决定；确定", example: "We need to determine the cause of the problem." },
  { id: "g967", category: "高中3500词", word: "devastate", phonetic: "/ˈdevəsteɪt/", translation: "毁灭", example: "The flood devastated the town." },
  { id: "g968", category: "高中3500词", word: "develop", phonetic: "/dɪˈveləp/", translation: "发展；开发", example: "The city has developed rapidly in recent years." },
  { id: "g969", category: "高中3500词", word: "development", phonetic: "/dɪˈveləpmənt/", translation: "发展；开发", example: "Economic development is a priority." },
  { id: "g970", category: "高中3500词", word: "device", phonetic: "/dɪˈvaɪs/", translation: "装置；设备", example: "This device can save energy." },
  { id: "g971", category: "高中3500词", word: "devote", phonetic: "/dɪˈvəʊt/", translation: "致力于；奉献", example: "She devoted her life to teaching." },
  { id: "g972", category: "高中3500词", word: "devotion", phonetic: "/dɪˈvəʊʃn/", translation: "奉献；忠诚", example: "Her devotion to her family is admirable." },
  { id: "g973", category: "高中3500词", word: "diagnose", phonetic: "/ˈdaɪəɡnəʊz/", translation: "诊断", example: "The doctor diagnosed the illness." },
  { id: "g974", category: "高中3500词", word: "diagnosis", phonetic: "/ˌdaɪəɡˈnəʊsɪs/", translation: "诊断", example: "The diagnosis was correct." },
  { id: "g975", category: "高中3500词", word: "diagram", phonetic: "/ˈdaɪəɡræm/", translation: "图表；示意图", example: "The diagram shows how the machine works." },
  { id: "g976", category: "高中3500词", word: "dialog", phonetic: "/ˈdaɪəlɒɡ/", translation: "对话", example: "The dialog between the two leaders was productive." },
  { id: "g977", category: "高中3500词", word: "diamond", phonetic: "/ˈdaɪəmənd/", translation: "钻石", example: "She wore a diamond ring." },
  { id: "g978", category: "高中3500词", word: "diary", phonetic: "/ˈdaɪəri/", translation: "日记", example: "She writes in her diary every day." },
  { id: "g979", category: "高中3500词", word: "dictation", phonetic: "/dɪkˈteɪʃn/", translation: "听写", example: "She took dictation." },
  { id: "g980", category: "高中3500词", word: "dictionary", phonetic: "/ˈdɪkʃənri/", translation: "字典；词典", example: "Look up the word in the dictionary." },
  { id: "g981", category: "高中3500词", word: "die", phonetic: "/daɪ/", translation: "死；死亡", example: "Plants die without water." },
  { id: "g982", category: "高中3500词", word: "diet", phonetic: "/ˈdaɪət/", translation: "饮食；节食", example: "A balanced diet is important for health." },
  { id: "g983", category: "高中3500词", word: "differ", phonetic: "/ˈdɪfər/", translation: "不同；相异", example: "Their opinions differ on this matter." },
  { id: "g984", category: "高中3500词", word: "difference", phonetic: "/ˈdɪfrəns/", translation: "不同；差异", example: "What is the difference between the two?" },
  { id: "g985", category: "高中3500词", word: "different", phonetic: "/ˈdɪfrənt/", translation: "不同的", example: "They have different opinions." },
  { id: "g986", category: "高中3500词", word: "difficult", phonetic: "/ˈdɪfɪkəlt/", translation: "困难的", example: "The exam was very difficult." },
  { id: "g987", category: "高中3500词", word: "difficulty", phonetic: "/ˈdɪfɪkəlti/", translation: "困难", example: "She had difficulty understanding the text." },
  { id: "g988", category: "高中3500词", word: "dig", phonetic: "/dɪɡ/", translation: "挖；掘", example: "They dug a hole in the ground." },
  { id: "g989", category: "高中3500词", word: "digest", phonetic: "/daɪˈdʒest/", translation: "消化；摘要", example: "Some foods are hard to digest." },
  { id: "g990", category: "高中3500词", word: "digital", phonetic: "/ˈdɪdʒɪtl/", translation: "数字的", example: "We live in a digital age." },
  { id: "g991", category: "高中3500词", word: "dignity", phonetic: "/ˈdɪɡnəti/", translation: "尊严；高贵", example: "Everyone should be treated with dignity." },
  { id: "g992", category: "高中3500词", word: "dilemma", phonetic: "/dɪˈlemə/", translation: "困境；两难", example: "She faced the dilemma of choosing between career and family." },
  { id: "g993", category: "高中3500词", word: "dimension", phonetic: "/daɪˈmenʃn/", translation: "维度；尺寸", example: "The painting adds a new dimension to the room." },
  { id: "g994", category: "高中3500词", word: "diminish", phonetic: "/dɪˈmɪnɪʃ/", translation: "减少", example: "Her enthusiasm diminished." },
  { id: "g995", category: "高中3500词", word: "dinner", phonetic: "/ˈdɪnər/", translation: "晚餐", example: "We had a delicious dinner." },
  { id: "g996", category: "高中3500词", word: "dip", phonetic: "/dɪp/", translation: "浸；蘸", example: "She dipped the bread in the soup." },
  { id: "g997", category: "高中3500词", word: "diploma", phonetic: "/dɪˈpləʊmə/", translation: "毕业证书", example: "She received her diploma." },
  { id: "g998", category: "高中3500词", word: "diplomatic", phonetic: "/ˌdɪpləˈmætɪk/", translation: "外交的", example: "She has diplomatic skills." },
  { id: "g999", category: "高中3500词", word: "direct", phonetic: "/dɪˈrekt/", translation: "直接的；指挥", example: "The road leads direct to the city." },
  { id: "g1000", category: "高中3500词", word: "direction", phonetic: "/dɪˈrekʃn/", translation: "方向；指导", example: "He walked in the wrong direction." },
  { id: "g1001", category: "高中3500词", word: "directly", phonetic: "/dɪˈrektli/", translation: "直接地", example: "She answered the question directly." },
  { id: "g1002", category: "高中3500词", word: "director", phonetic: "/dɪˈrektər/", translation: "导演；主管", example: "He is the director of the company." },
  { id: "g1003", category: "高中3500词", word: "directory", phonetic: "/dɪˈrektəri/", translation: "目录；电话簿", example: "She looked up the number in the directory." },
  { id: "g1004", category: "高中3500词", word: "dirt", phonetic: "/dɜːrt/", translation: "泥土；污垢", example: "His clothes were covered in dirt." },
  { id: "g1005", category: "高中3500词", word: "dirty", phonetic: "/ˈdɜːrti/", translation: "脏的", example: "The room was dirty." },
  { id: "g1006", category: "高中3500词", word: "disability", phonetic: "/ˌdɪsəˈbɪləti/", translation: "残疾；缺陷", example: "The building is accessible to people with disabilities." },
  { id: "g1007", category: "高中3500词", word: "disabled", phonetic: "/dɪsˈeɪbld/", translation: "残疾的", example: "The building has access for disabled people." },
  { id: "g1008", category: "高中3500词", word: "disadvantage", phonetic: "/ˌdɪsədˈvɑːntɪdʒ/", translation: "不利；劣势", example: "One disadvantage is the cost." },
  { id: "g1009", category: "高中3500词", word: "disagree", phonetic: "/ˌdɪsəˈɡriː/", translation: "不同意", example: "I disagree with your opinion." },
  { id: "g1010", category: "高中3500词", word: "disagreement", phonetic: "/ˌdɪsəˈɡriːmənt/", translation: "分歧", example: "They had a disagreement." },
  { id: "g1011", category: "高中3500词", word: "disappear", phonetic: "/ˌdɪsəˈpɪər/", translation: "消失", example: "The sun disappeared behind the clouds." },
  { id: "g1012", category: "高中3500词", word: "disappearance", phonetic: "/ˌdɪsəˈpɪərəns/", translation: "消失", example: "The disappearance was mysterious." },
  { id: "g1013", category: "高中3500词", word: "disappoint", phonetic: "/ˌdɪsəˈpɔɪnt/", translation: "使失望", example: "The result disappointed everyone." },
  { id: "g1014", category: "高中3500词", word: "disappointment", phonetic: "/ˌdɪsəˈpɔɪntmənt/", translation: "失望", example: "To my disappointment, he didn't come." },
  { id: "g1015", category: "高中3500词", word: "disaster", phonetic: "/dɪˈzɑːstər/", translation: "灾难", example: "The earthquake was a terrible disaster." },
  { id: "g1016", category: "高中3500词", word: "discipline", phonetic: "/ˈdɪsəplɪn/", translation: "纪律；学科", example: "Self-discipline is the key to success." },
  { id: "g1017", category: "高中3500词", word: "discount", phonetic: "/ˈdɪskaʊnt/", translation: "折扣", example: "Students get a discount on tickets." },
  { id: "g1018", category: "高中3500词", word: "discourse", phonetic: "/ˈdɪskɔːrs/", translation: "话语；论述", example: "She analyzed the discourse." },
  { id: "g1019", category: "高中3500词", word: "discover", phonetic: "/dɪˈskʌvər/", translation: "发现", example: "Columbus discovered America in 1492." },
  { id: "g1020", category: "高中3500词", word: "discovery", phonetic: "/dɪˈskʌvəri/", translation: "发现", example: "The discovery of penicillin changed medicine." },
  { id: "g1021", category: "高中3500词", word: "discrimination", phonetic: "/dɪˌskrɪmɪˈneɪʃn/", translation: "歧视；辨别", example: "Racial discrimination is illegal." },
  { id: "g1022", category: "高中3500词", word: "discuss", phonetic: "/dɪˈskʌs/", translation: "讨论", example: "We need to discuss the plan." },
  { id: "g1023", category: "高中3500词", word: "discussion", phonetic: "/dɪˈskʌʃn/", translation: "讨论", example: "The discussion lasted two hours." },
  { id: "g1024", category: "高中3500词", word: "disease", phonetic: "/dɪˈziːz/", translation: "疾病", example: "Heart disease is a major health problem." },
  { id: "g1025", category: "高中3500词", word: "disgrace", phonetic: "/dɪsˈɡreɪs/", translation: "耻辱", example: "She brought disgrace on the family." },
  { id: "g1026", category: "高中3500词", word: "disguise", phonetic: "/dɪsˈɡaɪz/", translation: "伪装；假扮", example: "He disguised himself as a waiter." },
  { id: "g1027", category: "高中3500词", word: "disgust", phonetic: "/dɪsˈɡʌst/", translation: "厌恶", example: "She looked at it with disgust." },
  { id: "g1028", category: "高中3500词", word: "dish", phonetic: "/dɪʃ/", translation: "盘子；菜肴", example: "She prepared a delicious dish." },
  { id: "g1029", category: "高中3500词", word: "disk", phonetic: "/dɪsk/", translation: "磁盘", example: "Save the file to disk." },
  { id: "g1030", category: "高中3500词", word: "dismiss", phonetic: "/dɪsˈmɪs/", translation: "解散；解雇", example: "The teacher dismissed the class early." },
  { id: "g1031", category: "高中3500词", word: "disorder", phonetic: "/dɪsˈɔːrdər/", translation: "混乱；失调", example: "The room was in disorder." },
  { id: "g1032", category: "高中3500词", word: "dispatch", phonetic: "/dɪˈspætʃ/", translation: "派遣", example: "She dispatched the letter." },
  { id: "g1033", category: "高中3500词", word: "disperse", phonetic: "/dɪˈspɜːrs/", translation: "分散", example: "The crowd dispersed." },
  { id: "g1034", category: "高中3500词", word: "displace", phonetic: "/dɪsˈpleɪs/", translation: "取代；使离开", example: "The flood displaced many people." },
  { id: "g1035", category: "高中3500词", word: "display", phonetic: "/dɪˈspleɪ/", translation: "展示；陈列", example: "The museum displays ancient artifacts." },
  { id: "g1036", category: "高中3500词", word: "disposal", phonetic: "/dɪˈspəʊzl/", translation: "处理", example: "The disposal of waste is important." },
  { id: "g1037", category: "高中3500词", word: "dispose", phonetic: "/dɪˈspəʊz/", translation: "处理", example: "She disposed of the old clothes." },
  { id: "g1038", category: "高中3500词", word: "dispute", phonetic: "/dɪˈspjuːt/", translation: "争论；纠纷", example: "The border dispute lasted for years." },
  { id: "g1039", category: "高中3500词", word: "disrupt", phonetic: "/dɪsˈrʌpt/", translation: "扰乱", example: "The protest disrupted traffic." },
  { id: "g1040", category: "高中3500词", word: "dissolve", phonetic: "/dɪˈzɒlv/", translation: "溶解", example: "Sugar dissolves in water." },
  { id: "g1041", category: "高中3500词", word: "distance", phonetic: "/ˈdɪstəns/", translation: "距离", example: "The distance between the two cities is 100 km." },
  { id: "g1042", category: "高中3500词", word: "distant", phonetic: "/ˈdɪstənt/", translation: "遥远的", example: "She heard distant thunder." },
  { id: "g1043", category: "高中3500词", word: "distinct", phonetic: "/dɪˈstɪŋkt/", translation: "明显的；独特的", example: "There is a distinct difference." },
  { id: "g1044", category: "高中3500词", word: "distinction", phonetic: "/dɪˈstɪŋkʃn/", translation: "区别；荣誉", example: "She passed with distinction." },
  { id: "g1045", category: "高中3500词", word: "distinguish", phonetic: "/dɪˈstɪŋɡwɪʃ/", translation: "区分；辨别", example: "Can you distinguish the two species?" },
  { id: "g1046", category: "高中3500词", word: "distribute", phonetic: "/dɪˈstrɪbjuːt/", translation: "分配；分发", example: "The teacher distributed the exam papers." },
  { id: "g1047", category: "高中3500词", word: "distribution", phonetic: "/ˌdɪstrɪˈbjuːʃn/", translation: "分配；分布", example: "The distribution of wealth is uneven." },
  { id: "g1048", category: "高中3500词", word: "district", phonetic: "/ˈdɪstrɪkt/", translation: "地区；区域", example: "She lives in a residential district." },
  { id: "g1049", category: "高中3500词", word: "disturb", phonetic: "/dɪˈstɜːrb/", translation: "打扰；扰乱", example: "Please do not disturb the sleeping baby." },
  { id: "g1050", category: "高中3500词", word: "diverse", phonetic: "/daɪˈvɜːrs/", translation: "多样的；不同的", example: "The city has a diverse population." },
  { id: "g1051", category: "高中3500词", word: "diversity", phonetic: "/daɪˈvɜːrsəti/", translation: "多样性", example: "We should celebrate cultural diversity." },
  { id: "g1052", category: "高中3500词", word: "divide", phonetic: "/dɪˈvaɪd/", translation: "分开；除", example: "Divide the cake into equal pieces." },
  { id: "g1053", category: "高中3500词", word: "division", phonetic: "/dɪˈvɪʒn/", translation: "分开；部门", example: "The company has several divisions." },
  { id: "g1054", category: "高中3500词", word: "divorce", phonetic: "/dɪˈvɔːrs/", translation: "离婚", example: "They got a divorce last year." },
  { id: "g1055", category: "高中3500词", word: "dizzy", phonetic: "/ˈdɪzi/", translation: "头晕的", example: "She felt dizzy and sat down." },
  { id: "g1056", category: "高中3500词", word: "do", phonetic: "/duː/", translation: "做；干", example: "What do you want to do?" },
  { id: "g1057", category: "高中3500词", word: "doctor", phonetic: "/ˈdɒktər/", translation: "医生；博士", example: "You should see a doctor." },
  { id: "g1058", category: "高中3500词", word: "doctrine", phonetic: "/ˈdɒktrɪn/", translation: "教义；学说", example: "She studied the doctrine." },
  { id: "g1059", category: "高中3500词", word: "document", phonetic: "/ˈdɒkjumənt/", translation: "文件；文档", example: "Please sign this document." },
  { id: "g1060", category: "高中3500词", word: "documentary", phonetic: "/ˌdɒkjuˈmentəri/", translation: "纪录片", example: "She watched a documentary." },
  { id: "g1061", category: "高中3500词", word: "dog", phonetic: "/dɒɡ/", translation: "狗", example: "The dog barked loudly." },
  { id: "g1062", category: "高中3500词", word: "dollar", phonetic: "/ˈdɒlər/", translation: "美元", example: "The book costs five dollars." },
  { id: "g1063", category: "高中3500词", word: "domain", phonetic: "/dəˈmeɪn/", translation: "领域", example: "This is not my domain of expertise." },
  { id: "g1064", category: "高中3500词", word: "domestic", phonetic: "/dəˈmestɪk/", translation: "国内的；家庭的", example: "Domestic flights are cheaper than international ones." },
  { id: "g1065", category: "高中3500词", word: "dominant", phonetic: "/ˈdɒmɪnənt/", translation: "占主导的；显著的", example: "English is the dominant language." },
  { id: "g1066", category: "高中3500词", word: "dominate", phonetic: "/ˈdɒmɪneɪt/", translation: "支配；控制", example: "The company dominates the market." },
  { id: "g1067", category: "高中3500词", word: "donate", phonetic: "/dəʊˈneɪt/", translation: "捐赠", example: "She donated money to the orphanage." },
  { id: "g1068", category: "高中3500词", word: "doom", phonetic: "/duːm/", translation: "厄运", example: "The project seemed doomed." },
  { id: "g1069", category: "高中3500词", word: "door", phonetic: "/dɔːr/", translation: "门", example: "Please close the door." },
  { id: "g1070", category: "高中3500词", word: "dormitory", phonetic: "/ˈdɔːrmɪtəri/", translation: "宿舍", example: "The students live in the dormitory." },
  { id: "g1071", category: "高中3500词", word: "dose", phonetic: "/dəʊs/", translation: "剂量", example: "She took a dose of medicine." },
  { id: "g1072", category: "高中3500词", word: "dot", phonetic: "/dɒt/", translation: "点；小圆点", example: "Please sign on the dotted line." },
  { id: "g1073", category: "高中3500词", word: "double", phonetic: "/ˈdʌbl/", translation: "双倍的；翻倍", example: "The price has doubled." },
  { id: "g1074", category: "高中3500词", word: "doubt", phonetic: "/daʊt/", translation: "怀疑；疑问", example: "I have no doubt that he will succeed." },
  { id: "g1075", category: "高中3500词", word: "down", phonetic: "/daʊn/", translation: "向下", example: "She ran down the stairs." },
  { id: "g1076", category: "高中3500词", word: "download", phonetic: "/ˌdaʊnˈləʊd/", translation: "下载", example: "You can download the app for free." },
  { id: "g1077", category: "高中3500词", word: "downtown", phonetic: "/ˌdaʊnˈtaʊn/", translation: "市中心", example: "We went shopping downtown." },
  { id: "g1078", category: "高中3500词", word: "downward", phonetic: "/ˈdaʊnwərd/", translation: "向下的", example: "The path leads downward." },
  { id: "g1079", category: "高中3500词", word: "draft", phonetic: "/drɑːft/", translation: "草稿；草案", example: "This is only the first draft of the report." },
  { id: "g1080", category: "高中3500词", word: "drag", phonetic: "/dræɡ/", translation: "拖；拉", example: "He dragged the heavy box across the floor." },
  { id: "g1081", category: "高中3500词", word: "dragon", phonetic: "/ˈdræɡən/", translation: "龙", example: "The dragon is a symbol of China." },
  { id: "g1082", category: "高中3500词", word: "drain", phonetic: "/dreɪn/", translation: "排水；消耗", example: "She drained the water." },
  { id: "g1083", category: "高中3500词", word: "drama", phonetic: "/ˈdrɑːmə/", translation: "戏剧；戏剧性事件", example: "She studied drama at university." },
  { id: "g1084", category: "高中3500词", word: "dramatic", phonetic: "/drəˈmætɪk/", translation: "戏剧性的；巨大的", example: "There was a dramatic improvement." },
  { id: "g1085", category: "高中3500词", word: "drastic", phonetic: "/ˈdræstɪk/", translation: "激烈的", example: "She took drastic measures." },
  { id: "g1086", category: "高中3500词", word: "draw", phonetic: "/drɔː/", translation: "画；拉", example: "She drew a picture of the house." },
  { id: "g1087", category: "高中3500词", word: "drawback", phonetic: "/ˈdrɔːbæk/", translation: "缺点", example: "The main drawback is the cost." },
  { id: "g1088", category: "高中3500词", word: "drawer", phonetic: "/ˈdrɔːər/", translation: "抽屉", example: "The keys are in the top drawer." },
  { id: "g1089", category: "高中3500词", word: "drawing", phonetic: "/ˈdrɔːɪŋ/", translation: "绘画；图画", example: "She is good at drawing." },
  { id: "g1090", category: "高中3500词", word: "dream", phonetic: "/driːm/", translation: "梦；梦想", example: "She had a dream of becoming a pilot." },
  { id: "g1091", category: "高中3500词", word: "dress", phonetic: "/dres/", translation: "连衣裙；穿衣", example: "She dressed her baby warmly." },
  { id: "g1092", category: "高中3500词", word: "drift", phonetic: "/drɪft/", translation: "漂流；漂移", example: "The boat drifted down the river." },
  { id: "g1093", category: "高中3500词", word: "drill", phonetic: "/drɪl/", translation: "钻；训练", example: "The teacher drilled the students in grammar." },
  { id: "g1094", category: "高中3500词", word: "drink", phonetic: "/drɪŋk/", translation: "喝；饮料", example: "Would you like something to drink?" },
  { id: "g1095", category: "高中3500词", word: "drip", phonetic: "/drɪp/", translation: "滴下", example: "Water was dripping from the tap." },
  { id: "g1096", category: "高中3500词", word: "drive", phonetic: "/draɪv/", translation: "驾驶；驱使", example: "She drives to work every day." },
  { id: "g1097", category: "高中3500词", word: "drop", phonetic: "/drɒp/", translation: "落下；滴", example: "She dropped the glass and it broke." },
  { id: "g1098", category: "高中3500词", word: "drought", phonetic: "/draʊt/", translation: "干旱", example: "The drought lasted for months." },
  { id: "g1099", category: "高中3500词", word: "drown", phonetic: "/draʊn/", translation: "淹死", example: "She nearly drowned." },
  { id: "g1100", category: "高中3500词", word: "drug", phonetic: "/drʌɡ/", translation: "药物；毒品", example: "The doctor prescribed a new drug." },
  { id: "g1101", category: "高中3500词", word: "dry", phonetic: "/draɪ/", translation: "干的；弄干", example: "The clothes are dry now." },
  { id: "g1102", category: "高中3500词", word: "duck", phonetic: "/dʌk/", translation: "鸭子", example: "The ducks swam in the pond." },
  { id: "g1103", category: "高中3500词", word: "due", phonetic: "/djuː/", translation: "到期的；预期的", example: "The rent is due on Monday." },
  { id: "g1104", category: "高中3500词", word: "dull", phonetic: "/dʌl/", translation: "迟钝的；无聊的", example: "The lecture was so dull that I fell asleep." },
  { id: "g1105", category: "高中3500词", word: "dumb", phonetic: "/dʌm/", translation: "哑的；愚蠢的", example: "He was struck dumb with surprise." },
  { id: "g1106", category: "高中3500词", word: "dump", phonetic: "/dʌmp/", translation: "倾倒；垃圾场", example: "Don't dump rubbish here." },
  { id: "g1107", category: "高中3500词", word: "durable", phonetic: "/ˈdjʊərəbl/", translation: "耐用的", example: "This material is very durable." },
  { id: "g1108", category: "高中3500词", word: "duration", phonetic: "/djʊˈreɪʃn/", translation: "持续时间", example: "The duration of the course is six months." },
  { id: "g1109", category: "高中3500词", word: "dust", phonetic: "/dʌst/", translation: "灰尘", example: "The furniture was covered in dust." },
  { id: "g1110", category: "高中3500词", word: "dusty", phonetic: "/ˈdʌsti/", translation: "多尘的", example: "The road was dry and dusty." },
  { id: "g1111", category: "高中3500词", word: "duty", phonetic: "/ˈdjuːti/", translation: "责任；义务", example: "It is our duty to protect the environment." },
  { id: "g1112", category: "高中3500词", word: "dwelling", phonetic: "/ˈdwelɪŋ/", translation: "住所", example: "She found a new dwelling." },
  { id: "g1113", category: "高中3500词", word: "dynamic", phonetic: "/daɪˈnæmɪk/", translation: "动态的；充满活力的", example: "She is a dynamic leader." },
  { id: "g1114", category: "高中3500词", word: "each", phonetic: "/iːtʃ/", translation: "每个；各自", example: "Each student has a textbook." },
  { id: "g1115", category: "高中3500词", word: "eager", phonetic: "/ˈiːɡər/", translation: "渴望的；热切的", example: "The students were eager to learn." },
  { id: "g1116", category: "高中3500词", word: "eagle", phonetic: "/ˈiːɡl/", translation: "鹰", example: "The eagle soared high above." },
  { id: "g1117", category: "高中3500词", word: "ear", phonetic: "/ɪər/", translation: "耳朵", example: "She whispered in my ear." },
  { id: "g1118", category: "高中3500词", word: "early", phonetic: "/ˈɜːrli/", translation: "早的", example: "She gets up early every morning." },
  { id: "g1119", category: "高中3500词", word: "earn", phonetic: "/ɜːrn/", translation: "赚得；赢得", example: "He earns a good salary as an engineer." },
  { id: "g1120", category: "高中3500词", word: "earth", phonetic: "/ɜːrθ/", translation: "地球；泥土", example: "The earth revolves around the sun." },
  { id: "g1121", category: "高中3500词", word: "earthquake", phonetic: "/ˈɜːrθkweɪk/", translation: "地震", example: "The earthquake caused great damage." },
  { id: "g1122", category: "高中3500词", word: "ease", phonetic: "/iːz/", translation: "轻松；减轻", example: "The medicine eased the pain." },
  { id: "g1123", category: "高中3500词", word: "easily", phonetic: "/ˈiːzəli/", translation: "容易地", example: "She can easily finish the task." },
  { id: "g1124", category: "高中3500词", word: "east", phonetic: "/iːst/", translation: "东方", example: "The sun rises in the east." },
  { id: "g1125", category: "高中3500词", word: "eastern", phonetic: "/ˈiːstərn/", translation: "东方的", example: "China is an eastern country." },
  { id: "g1126", category: "高中3500词", word: "easy", phonetic: "/ˈiːzi/", translation: "容易的", example: "The test was easy." },
  { id: "g1127", category: "高中3500词", word: "eat", phonetic: "/iːt/", translation: "吃", example: "Let's eat lunch together." },
  { id: "g1128", category: "高中3500词", word: "ecology", phonetic: "/ɪˈkɒlədʒi/", translation: "生态学", example: "Ecology is the study of the environment." },
  { id: "g1129", category: "高中3500词", word: "economic", phonetic: "/ˌiːkəˈnɒmɪk/", translation: "经济的", example: "The economic situation is improving." },
  { id: "g1130", category: "高中3500词", word: "economy", phonetic: "/ɪˈkɒnəmi/", translation: "经济", example: "The economy is growing steadily." },
  { id: "g1131", category: "高中3500词", word: "edge", phonetic: "/edʒ/", translation: "边缘；优势", example: "She stood at the edge of the cliff." },
  { id: "g1132", category: "高中3500词", word: "edition", phonetic: "/ɪˈdɪʃn/", translation: "版本", example: "This is the latest edition of the book." },
  { id: "g1133", category: "高中3500词", word: "editor", phonetic: "/ˈedɪtər/", translation: "编辑", example: "She works as an editor." },
  { id: "g1134", category: "高中3500词", word: "educate", phonetic: "/ˈedʒukeɪt/", translation: "教育；培养", example: "Parents should educate their children about safety." },
  { id: "g1135", category: "高中3500词", word: "education", phonetic: "/ˌedʒuˈkeɪʃn/", translation: "教育", example: "Education is important for everyone." },
  { id: "g1136", category: "高中3500词", word: "effect", phonetic: "/ɪˈfekt/", translation: "效果；影响", example: "The medicine had a good effect on him." },
  { id: "g1137", category: "高中3500词", word: "effective", phonetic: "/ɪˈfektɪv/", translation: "有效的", example: "This is an effective method." },
  { id: "g1138", category: "高中3500词", word: "efficiency", phonetic: "/ɪˈfɪʃnsi/", translation: "效率", example: "We need to improve our work efficiency." },
  { id: "g1139", category: "高中3500词", word: "efficient", phonetic: "/ɪˈfɪʃnt/", translation: "高效的", example: "She is an efficient worker." },
  { id: "g1140", category: "高中3500词", word: "effort", phonetic: "/ˈefərt/", translation: "努力；成就", example: "He made every effort to pass the exam." },
  { id: "g1141", category: "高中3500词", word: "egg", phonetic: "/eɡ/", translation: "蛋；鸡蛋", example: "She had a boiled egg for breakfast." },
  { id: "g1142", category: "高中3500词", word: "either", phonetic: "/ˈaɪðər/", translation: "任一的；也", example: "You can choose either book." },
  { id: "g1143", category: "高中3500词", word: "elder", phonetic: "/ˈeldər/", translation: "年长的；长辈", example: "We should respect our elders." },
  { id: "g1144", category: "高中3500词", word: "elderly", phonetic: "/ˈeldəli/", translation: "上了年纪的", example: "The elderly need special care." },
  { id: "g1145", category: "高中3500词", word: "elect", phonetic: "/ɪˈlekt/", translation: "选举", example: "They elected a new president." },
  { id: "g1146", category: "高中3500词", word: "election", phonetic: "/ɪˈlekʃn/", translation: "选举", example: "The election will be held next month." },
  { id: "g1147", category: "高中3500词", word: "electric", phonetic: "/ɪˈlektrɪk/", translation: "电的；电动的", example: "She bought an electric toothbrush." },
  { id: "g1148", category: "高中3500词", word: "electrical", phonetic: "/ɪˈlektrɪkl/", translation: "电的；电气的", example: "He is an electrical engineer." },
  { id: "g1149", category: "高中3500词", word: "electricity", phonetic: "/ɪˌlekˈtrɪsəti/", translation: "电", example: "The electricity was cut off." },
  { id: "g1150", category: "高中3500词", word: "electronic", phonetic: "/ɪˌlekˈtrɒnɪk/", translation: "电子的", example: "She bought an electronic dictionary." },
  { id: "g1151", category: "高中3500词", word: "elegant", phonetic: "/ˈelɪɡənt/", translation: "优雅的；精美的", example: "She looked elegant in her new dress." },
  { id: "g1152", category: "高中3500词", word: "element", phonetic: "/ˈelɪmənt/", translation: "元素；要素", example: "Water is composed of two elements." },
  { id: "g1153", category: "高中3500词", word: "eliminate", phonetic: "/ɪˈlɪmɪneɪt/", translation: "消除；淘汰", example: "We need to eliminate all sources of pollution." },
  { id: "g1154", category: "高中3500词", word: "else", phonetic: "/els/", translation: "其他的；另外", example: "What else do you need?" },
  { id: "g1155", category: "高中3500词", word: "elsewhere", phonetic: "/ˌelsˈweər/", translation: "在别处", example: "You can find the information elsewhere." },
  { id: "g1156", category: "高中3500词", word: "email", phonetic: "/ˈiːmeɪl/", translation: "电子邮件", example: "I'll send you an email." },
  { id: "g1157", category: "高中3500词", word: "embarrass", phonetic: "/ɪmˈbærəs/", translation: "使尴尬", example: "The question embarrassed him." },
  { id: "g1158", category: "高中3500词", word: "embassy", phonetic: "/ˈembəsi/", translation: "大使馆", example: "She works at the British Embassy." },
  { id: "g1159", category: "高中3500词", word: "embrace", phonetic: "/ɪmˈbreɪs/", translation: "拥抱；接受", example: "We should embrace new challenges." },
  { id: "g1160", category: "高中3500词", word: "emerge", phonetic: "/ɪmˈmɜːrdʒ/", translation: "出现；浮现", example: "New evidence emerged during the investigation." },
  { id: "g1161", category: "高中3500词", word: "emergency", phonetic: "/ɪˈmɜːrdʒənsi/", translation: "紧急情况", example: "Call 911 in case of emergency." },
  { id: "g1162", category: "高中3500词", word: "emotion", phonetic: "/ɪˈməʊʃn/", translation: "情感；情绪", example: "She showed no emotion when she heard the news." },
  { id: "g1163", category: "高中3500词", word: "emotional", phonetic: "/ɪˈməʊʃənl/", translation: "情感的", example: "She became very emotional." },
  { id: "g1164", category: "高中3500词", word: "emperor", phonetic: "/ˈempərər/", translation: "皇帝", example: "The emperor ruled the empire." },
  { id: "g1165", category: "高中3500词", word: "emphasize", phonetic: "/ˈemfəsaɪz/", translation: "强调", example: "The teacher emphasized the importance of reading." },
  { id: "g1166", category: "高中3500词", word: "empire", phonetic: "/ˈempaɪər/", translation: "帝国", example: "The Roman Empire lasted for centuries." },
  { id: "g1167", category: "高中3500词", word: "employ", phonetic: "/ɪmˈplɔɪ/", translation: "雇用；使用", example: "The company employs over 500 workers." },
  { id: "g1168", category: "高中3500词", word: "employee", phonetic: "/ɪmˈplɔɪiː/", translation: "雇员", example: "The employees went on strike." },
  { id: "g1169", category: "高中3500词", word: "employer", phonetic: "/ɪmˈplɔɪər/", translation: "雇主", example: "The employer offered a raise." },
  { id: "g1170", category: "高中3500词", word: "empty", phonetic: "/ˈempti/", translation: "空的", example: "The room was empty." },
  { id: "g1171", category: "高中3500词", word: "enable", phonetic: "/ɪˈneɪbl/", translation: "使能够", example: "Technology enables us to communicate easily." },
  { id: "g1172", category: "高中3500词", word: "enclose", phonetic: "/ɪnˈkləʊz/", translation: "围住；附上", example: "Please enclose a recent photo." },
  { id: "g1173", category: "高中3500词", word: "encounter", phonetic: "/ɪnˈkaʊntər/", translation: "遭遇；邂逅", example: "I encountered an old friend at the mall." },
  { id: "g1174", category: "高中3500词", word: "encourage", phonetic: "/ɪnˈkʌrɪdʒ/", translation: "鼓励；激励", example: "My teacher encouraged me to study harder." },
  { id: "g1175", category: "高中3500词", word: "end", phonetic: "/end/", translation: "结束；末端", example: "The movie came to an end." },
  { id: "g1176", category: "高中3500词", word: "endure", phonetic: "/ɪnˈdjʊər/", translation: "忍受；持续", example: "She endured great pain during the treatment." },
  { id: "g1177", category: "高中3500词", word: "enemy", phonetic: "/ˈenəmi/", translation: "敌人", example: "The two countries were enemies." },
  { id: "g1178", category: "高中3500词", word: "energetic", phonetic: "/ˌenərˈdʒetɪk/", translation: "精力充沛的", example: "She is an energetic young woman." },
  { id: "g1179", category: "高中3500词", word: "energy", phonetic: "/ˈenərdʒi/", translation: "能量；精力", example: "He has a lot of energy for his age." },
  { id: "g1180", category: "高中3500词", word: "engage", phonetic: "/ɪnˈɡeɪdʒ/", translation: "从事；吸引", example: "She is engaged in cancer research." },
  { id: "g1181", category: "高中3500词", word: "engine", phonetic: "/ˈendʒɪn/", translation: "引擎；发动机", example: "The car engine needs repair." },
  { id: "g1182", category: "高中3500词", word: "engineer", phonetic: "/ˌendʒɪˈnɪər/", translation: "工程师", example: "He works as a software engineer." },
  { id: "g1183", category: "高中3500词", word: "engineering", phonetic: "/ˌendʒɪˈnɪərɪŋ/", translation: "工程学", example: "She is studying engineering." },
  { id: "g1184", category: "高中3500词", word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", translation: "享受；欣赏", example: "I enjoy reading books." },
  { id: "g1185", category: "高中3500词", word: "enjoyable", phonetic: "/ɪnˈdʒɔɪəbl/", translation: "令人愉快的", example: "The trip was very enjoyable." },
  { id: "g1186", category: "高中3500词", word: "enlarge", phonetic: "/ɪnˈlɑːrdʒ/", translation: "扩大；放大", example: "They plan to enlarge the house." },
  { id: "g1187", category: "高中3500词", word: "enormous", phonetic: "/ɪˈnɔːrməs/", translation: "巨大的", example: "The project requires an enormous amount of money." },
  { id: "g1188", category: "高中3500词", word: "enough", phonetic: "/ɪˈnʌf/", translation: "足够的", example: "Do you have enough money?" },
  { id: "g1189", category: "高中3500词", word: "ensure", phonetic: "/ɪnˈʃʊər/", translation: "确保；保证", example: "Please ensure that all doors are locked." },
  { id: "g1190", category: "高中3500词", word: "enter", phonetic: "/ˈentər/", translation: "进入", example: "Please enter the room quietly." },
  { id: "g1191", category: "高中3500词", word: "enterprise", phonetic: "/ˈentərpraɪz/", translation: "企业；事业", example: "She runs a successful enterprise." },
  { id: "g1192", category: "高中3500词", word: "entertainment", phonetic: "/ˌentərˈteɪnmənt/", translation: "娱乐", example: "The city offers many forms of entertainment." },
  { id: "g1193", category: "高中3500词", word: "enthusiasm", phonetic: "/ɪnˈθjuːziæzəm/", translation: "热情；热忱", example: "She showed great enthusiasm for the project." },
  { id: "g1194", category: "高中3500词", word: "enthusiastic", phonetic: "/ɪnˌθjuːziˈæstɪk/", translation: "热情的", example: "He is enthusiastic about sports." },
  { id: "g1195", category: "高中3500词", word: "entire", phonetic: "/ɪnˈtaɪər/", translation: "整个的；全部的", example: "The entire class passed the exam." },
  { id: "g1196", category: "高中3500词", word: "entry", phonetic: "/ˈentri/", translation: "进入；入口", example: "The entry fee is ten dollars." },
  { id: "g1197", category: "高中3500词", word: "envelope", phonetic: "/ˈenvələʊp/", translation: "信封", example: "Put the letter in the envelope." },
  { id: "g1198", category: "高中3500词", word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", translation: "环境", example: "We must protect the environment." },
  { id: "g1199", category: "高中3500词", word: "envy", phonetic: "/ˈenvi/", translation: "嫉妒；羡慕", example: "She envied her friend's success." },
  { id: "g1200", category: "高中3500词", word: "equal", phonetic: "/ˈiːkwəl/", translation: "相等的；等于", example: "All people are equal." },
  { id: "g1201", category: "高中3500词", word: "equally", phonetic: "/ˈiːkwəli/", translation: "平等地；同样地", example: "They should be treated equally." },
  { id: "g1202", category: "高中3500词", word: "equip", phonetic: "/ɪˈkwɪp/", translation: "装备；配备", example: "The school is well equipped with computers." },
  { id: "g1203", category: "高中3500词", word: "equipment", phonetic: "/ɪˈkwɪpmənt/", translation: "设备；装备", example: "The gym has modern equipment." },
  { id: "g1204", category: "高中3500词", word: "era", phonetic: "/ˈɪərə/", translation: "时代；纪元", example: "We live in the digital era." },
  { id: "g1205", category: "高中3500词", word: "error", phonetic: "/ˈerər/", translation: "错误；过失", example: "The report contains several errors." },
  { id: "g1206", category: "高中3500词", word: "escape", phonetic: "/ɪˈskeɪp/", translation: "逃跑；逃脱", example: "The prisoner escaped from the jail." },
  { id: "g1207", category: "高中3500词", word: "especially", phonetic: "/ɪˈspeʃəli/", translation: "尤其；特别", example: "She loves fruit, especially apples." },
  { id: "g1208", category: "高中3500词", word: "essay", phonetic: "/ˈeseɪ/", translation: "文章；论文", example: "She wrote an essay on climate change." },
  { id: "g1209", category: "高中3500词", word: "essential", phonetic: "/ɪˈsenʃl/", translation: "基本的；必要的", example: "Water is essential for life." },
  { id: "g1210", category: "高中3500词", word: "establish", phonetic: "/ɪˈstæblɪʃ/", translation: "建立；设立", example: "The school was established in 1950." },
  { id: "g1211", category: "高中3500词", word: "estate", phonetic: "/ɪˈsteɪt/", translation: "地产；庄园", example: "She inherited a large estate." },
  { id: "g1212", category: "高中3500词", word: "estimate", phonetic: "/ˈestɪmeɪt/", translation: "估计；估价", example: "We estimate the cost at about $500." },
  { id: "g1213", category: "高中3500词", word: "evaluate", phonetic: "/ɪˈvæljueɪt/", translation: "评估；评价", example: "Teachers evaluate students' performance regularly." },
  { id: "g1214", category: "高中3500词", word: "even", phonetic: "/ˈiːvn/", translation: "甚至；即使", example: "She didn't even say goodbye." },
  { id: "g1215", category: "高中3500词", word: "evening", phonetic: "/ˈiːvnɪŋ/", translation: "晚上；傍晚", example: "We had dinner in the evening." },
  { id: "g1216", category: "高中3500词", word: "event", phonetic: "/ɪˈvent/", translation: "事件；赛事", example: "The event was a great success." },
  { id: "g1217", category: "高中3500词", word: "eventually", phonetic: "/ɪˈventʃuəli/", translation: "最终；终于", example: "He eventually found a job after months of searching." },
  { id: "g1218", category: "高中3500词", word: "ever", phonetic: "/ˈevər/", translation: "曾经；究竟", example: "Have you ever been to Paris?" },
  { id: "g1219", category: "高中3500词", word: "every", phonetic: "/ˈevri/", translation: "每个；每一", example: "Every student must attend the meeting." },
  { id: "g1220", category: "高中3500词", word: "everybody", phonetic: "/ˈevribɒdi/", translation: "每个人", example: "Everybody knows the answer." },
  { id: "g1221", category: "高中3500词", word: "everyday", phonetic: "/ˈevrideɪ/", translation: "日常的", example: "This is an everyday occurrence." },
  { id: "g1222", category: "高中3500词", word: "everyone", phonetic: "/ˈevriwʌn/", translation: "每个人", example: "Everyone is here." },
  { id: "g1223", category: "高中3500词", word: "everything", phonetic: "/ˈevriθɪŋ/", translation: "一切", example: "Everything is ready." },
  { id: "g1224", category: "高中3500词", word: "everywhere", phonetic: "/ˈevriweər/", translation: "到处", example: "I looked everywhere for my keys." },
  { id: "g1225", category: "高中3500词", word: "evidence", phonetic: "/ˈevɪdəns/", translation: "证据；证明", example: "There is no evidence to support his claim." },
  { id: "g1226", category: "高中3500词", word: "evil", phonetic: "/ˈiːvl/", translation: "邪恶的；罪恶", example: "Good will overcome evil in the end." },
  { id: "g1227", category: "高中3500词", word: "evolution", phonetic: "/ˌiːvəˈluːʃn/", translation: "进化；演变", example: "The theory of evolution is widely accepted." },
  { id: "g1228", category: "高中3500词", word: "evolve", phonetic: "/ɪˈvɒlv/", translation: "进化；发展", example: "The species evolved over millions of years." },
  { id: "g1229", category: "高中3500词", word: "exact", phonetic: "/ɪɡˈzækt/", translation: "精确的", example: "What is the exact time?" },
  { id: "g1230", category: "高中3500词", word: "exactly", phonetic: "/ɪɡˈzæktli/", translation: "确切地", example: "That is exactly what I meant." },
  { id: "g1231", category: "高中3500词", word: "exam", phonetic: "/ɪɡˈzæm/", translation: "考试", example: "She did well in the exam." },
  { id: "g1232", category: "高中3500词", word: "examination", phonetic: "/ɪɡˌzæmɪˈneɪʃn/", translation: "考试；检查", example: "The examination lasts two hours." },
  { id: "g1233", category: "高中3500词", word: "examine", phonetic: "/ɪɡˈzæmɪn/", translation: "检查；考试", example: "The doctor examined the patient carefully." },
  { id: "g1234", category: "高中3500词", word: "example", phonetic: "/ɪɡˈzɑːmpl/", translation: "例子；榜样", example: "Can you give an example?" },
  { id: "g1235", category: "高中3500词", word: "exceed", phonetic: "/ɪkˈsiːd/", translation: "超过；超越", example: "The results exceeded our expectations." },
  { id: "g1236", category: "高中3500词", word: "excellent", phonetic: "/ˈeksələnt/", translation: "优秀的", example: "She got excellent grades." },
  { id: "g1237", category: "高中3500词", word: "except", phonetic: "/ɪkˈsept/", translation: "除了", example: "Everyone came except John." },
  { id: "g1238", category: "高中3500词", word: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", translation: "交换；兑换", example: "They exchanged gifts at the party." },
  { id: "g1239", category: "高中3500词", word: "excite", phonetic: "/ɪkˈsaɪt/", translation: "使兴奋", example: "The news excited everyone." },
  { id: "g1240", category: "高中3500词", word: "excitement", phonetic: "/ɪkˈsaɪtmənt/", translation: "兴奋；激动", example: "The children jumped with excitement." },
  { id: "g1241", category: "高中3500词", word: "exciting", phonetic: "/ɪkˈsaɪtɪŋ/", translation: "令人兴奋的", example: "It was an exciting game." },
  { id: "g1242", category: "高中3500词", word: "exclude", phonetic: "/ɪkˈskluːd/", translation: "排除；排斥", example: "Don't exclude anyone from the activity." },
  { id: "g1243", category: "高中3500词", word: "excuse", phonetic: "/ɪkˈskjuːz/", translation: "原谅；借口", example: "Please excuse my late arrival." },
  { id: "g1244", category: "高中3500词", word: "exercise", phonetic: "/ˈeksərsaɪz/", translation: "锻炼；练习", example: "Regular exercise is good for your health." },
  { id: "g1245", category: "高中3500词", word: "exhibit", phonetic: "/ɪɡˈzɪbɪt/", translation: "展览；展示", example: "The museum exhibits paintings by local artists." },
  { id: "g1246", category: "高中3500词", word: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", translation: "展览会", example: "We visited the art exhibition." },
  { id: "g1247", category: "高中3500词", word: "exist", phonetic: "/ɪɡˈzɪst/", translation: "存在", example: "Do you believe that aliens exist?" },
  { id: "g1248", category: "高中3500词", word: "existence", phonetic: "/ɪɡˈzɪstəns/", translation: "存在；生存", example: "Pollution threatens our existence." },
  { id: "g1249", category: "高中3500词", word: "exit", phonetic: "/ˈeksɪt/", translation: "出口；退出", example: "Please use the emergency exit." },
  { id: "g1250", category: "高中3500词", word: "expand", phonetic: "/ɪkˈspænd/", translation: "扩大；扩展", example: "The company plans to expand its business." },
  { id: "g1251", category: "高中3500词", word: "expansion", phonetic: "/ɪkˈspænʃn/", translation: "扩张；膨胀", example: "The expansion of the city is rapid." },
  { id: "g1252", category: "高中3500词", word: "expect", phonetic: "/ɪkˈspekt/", translation: "期望；预期", example: "We expect a lot of rain this month." },
  { id: "g1253", category: "高中3500词", word: "expectation", phonetic: "/ˌekspekˈteɪʃn/", translation: "期望；预期", example: "The results exceeded our expectations." },
  { id: "g1254", category: "高中3500词", word: "expense", phonetic: "/ɪkˈspens/", translation: "费用；开支", example: "The expense of living in the city is high." },
  { id: "g1255", category: "高中3500词", word: "expensive", phonetic: "/ɪkˈspensɪv/", translation: "昂贵的", example: "The car is too expensive." },
  { id: "g1256", category: "高中3500词", word: "experience", phonetic: "/ɪkˈspɪriəns/", translation: "经验；经历", example: "She has many years of teaching experience." },
  { id: "g1257", category: "高中3500词", word: "experiment", phonetic: "/ɪkˈsperɪmənt/", translation: "实验", example: "The students conducted a chemistry experiment." },
  { id: "g1258", category: "高中3500词", word: "expert", phonetic: "/ˈekspɜːrt/", translation: "专家", example: "She is an expert in child psychology." },
  { id: "g1259", category: "高中3500词", word: "explain", phonetic: "/ɪkˈspleɪn/", translation: "解释", example: "Can you explain this to me?" },
  { id: "g1260", category: "高中3500词", word: "explanation", phonetic: "/ˌekspləˈneɪʃn/", translation: "解释", example: "She gave a clear explanation." },
  { id: "g1261", category: "高中3500词", word: "explicit", phonetic: "/ɪkˈsplɪsɪt/", translation: "明确的；清楚的", example: "The instructions were explicit." },
  { id: "g1262", category: "高中3500词", word: "explode", phonetic: "/ɪkˈspləʊd/", translation: "爆炸", example: "The bomb exploded in the street." },
  { id: "g1263", category: "高中3500词", word: "exploit", phonetic: "/ɪkˈsplɔɪt/", translation: "开发；利用", example: "We should exploit renewable energy sources." },
  { id: "g1264", category: "高中3500词", word: "explore", phonetic: "/ɪkˈsplɔːr/", translation: "探索；考察", example: "Scientists explore the depths of the ocean." },
  { id: "g1265", category: "高中3500词", word: "explosion", phonetic: "/ɪkˈspləʊʒn/", translation: "爆炸", example: "The explosion was heard miles away." },
  { id: "g1266", category: "高中3500词", word: "export", phonetic: "/ɪkˈspɔːrt/", translation: "出口", example: "The country exports coffee." },
  { id: "g1267", category: "高中3500词", word: "expose", phonetic: "/ɪkˈspəʊz/", translation: "暴露；揭露", example: "The report exposed the truth about the scandal." },
  { id: "g1268", category: "高中3500词", word: "exposure", phonetic: "/ɪkˈspəʊʒər/", translation: "暴露；曝光", example: "Prolonged exposure to the sun is harmful." },
  { id: "g1269", category: "高中3500词", word: "express", phonetic: "/ɪkˈspres/", translation: "表达；快递", example: "She expressed her gratitude to the team." },
  { id: "g1270", category: "高中3500词", word: "expression", phonetic: "/ɪkˈspreʃn/", translation: "表达；表情", example: "His expression was serious." },
  { id: "g1271", category: "高中3500词", word: "extend", phonetic: "/ɪkˈstend/", translation: "延伸；扩大", example: "We decided to extend the deadline." },
  { id: "g1272", category: "高中3500词", word: "extension", phonetic: "/ɪkˈstenʃn/", translation: "延伸；分机", example: "The extension of the deadline was welcomed." },
  { id: "g1273", category: "高中3500词", word: "extensive", phonetic: "/ɪkˈstensɪv/", translation: "广泛的；大量的", example: "She has extensive knowledge of history." },
  { id: "g1274", category: "高中3500词", word: "extent", phonetic: "/ɪkˈstent/", translation: "程度；范围", example: "To some extent, I agree with you." },
  { id: "g1275", category: "高中3500词", word: "extra", phonetic: "/ˈekstrə/", translation: "额外的", example: "We need extra help." },
  { id: "g1276", category: "高中3500词", word: "extraordinary", phonetic: "/ɪkˈstrɔːrdnri/", translation: "非凡的；特别的", example: "She has an extraordinary talent for music." },
  { id: "g1277", category: "高中3500词", word: "extreme", phonetic: "/ɪkˈstriːm/", translation: "极端的；极度的", example: "The weather was extremely cold last winter." },
  { id: "g1278", category: "高中3500词", word: "extremely", phonetic: "/ɪkˈstriːmli/", translation: "极其；非常", example: "She is extremely talented." },
  { id: "g1279", category: "高中3500词", word: "eye", phonetic: "/aɪ/", translation: "眼睛", example: "She has blue eyes." },
  { id: "g1280", category: "高中3500词", word: "eyesight", phonetic: "/ˈaɪsaɪt/", translation: "视力", example: "His eyesight is getting worse." },
  { id: "g1281", category: "高中3500词", word: "fabric", phonetic: "/ˈfæbrɪk/", translation: "织物；结构", example: "This fabric is very soft." },
  { id: "g1282", category: "高中3500词", word: "face", phonetic: "/feɪs/", translation: "脸；面对", example: "She faced the challenge bravely." },
  { id: "g1283", category: "高中3500词", word: "facility", phonetic: "/fəˈsɪləti/", translation: "设施；设备", example: "The hotel has excellent sports facilities." },
  { id: "g1284", category: "高中3500词", word: "fact", phonetic: "/fækt/", translation: "事实", example: "It is a fact that the earth is round." },
  { id: "g1285", category: "高中3500词", word: "factor", phonetic: "/ˈfæktər/", translation: "因素", example: "Price is an important factor in our decision." },
  { id: "g1286", category: "高中3500词", word: "factory", phonetic: "/ˈfæktəri/", translation: "工厂", example: "He works in a factory." },
  { id: "g1287", category: "高中3500词", word: "fail", phonetic: "/feɪl/", translation: "失败；不及格", example: "She failed the math test." },
  { id: "g1288", category: "高中3500词", word: "failure", phonetic: "/ˈfeɪljər/", translation: "失败", example: "Failure is the mother of success." },
  { id: "g1289", category: "高中3500词", word: "faint", phonetic: "/feɪnt/", translation: "微弱的；晕倒", example: "She felt faint and sat down." },
  { id: "g1290", category: "高中3500词", word: "fair", phonetic: "/feər/", translation: "公平的；集市", example: "That is not fair." },
  { id: "g1291", category: "高中3500词", word: "fairly", phonetic: "/ˈfeəli/", translation: "相当；公平地", example: "She is fairly tall." },
  { id: "g1292", category: "高中3500词", word: "faith", phonetic: "/feɪθ/", translation: "信仰；信心", example: "I have faith in your ability to succeed." },
  { id: "g1293", category: "高中3500词", word: "fall", phonetic: "/fɔːl/", translation: "落下；秋天", example: "Leaves fall in autumn." },
  { id: "g1294", category: "高中3500词", word: "false", phonetic: "/fɔːls/", translation: "错误的；假的", example: "The statement is false." },
  { id: "g1295", category: "高中3500词", word: "familiar", phonetic: "/fəˈmɪliər/", translation: "熟悉的", example: "This song sounds familiar to me." },
  { id: "g1296", category: "高中3500词", word: "family", phonetic: "/ˈfæməli/", translation: "家庭", example: "My family lives in Beijing." },
  { id: "g1297", category: "高中3500词", word: "famous", phonetic: "/ˈfeɪməs/", translation: "著名的", example: "She is a famous actress." },
  { id: "g1298", category: "高中3500词", word: "fan", phonetic: "/fæn/", translation: "风扇；迷", example: "She is a big fan of pop music." },
  { id: "g1299", category: "高中3500词", word: "fancy", phonetic: "/ˈfænsi/", translation: "想象；精致的", example: "I fancy a cup of tea." },
  { id: "g1300", category: "高中3500词", word: "fantastic", phonetic: "/fænˈtæstɪk/", translation: "极好的", example: "The view is fantastic." },
  { id: "g1301", category: "高中3500词", word: "far", phonetic: "/fɑːr/", translation: "远的", example: "How far is the school?" },
  { id: "g1302", category: "高中3500词", word: "fare", phonetic: "/feər/", translation: "车费；票价", example: "The bus fare is two dollars." },
  { id: "g1303", category: "高中3500词", word: "farm", phonetic: "/fɑːrm/", translation: "农场", example: "They live on a farm." },
  { id: "g1304", category: "高中3500词", word: "farmer", phonetic: "/ˈfɑːrmər/", translation: "农民", example: "The farmer grows wheat." },
  { id: "g1305", category: "高中3500词", word: "fascinate", phonetic: "/ˈfæsɪneɪt/", translation: "使着迷", example: "The story fascinated the children." },
  { id: "g1306", category: "高中3500词", word: "fashion", phonetic: "/ˈfæʃn/", translation: "时尚；方式", example: "She is always interested in the latest fashion." },
  { id: "g1307", category: "高中3500词", word: "fashionable", phonetic: "/ˈfæʃnəbl/", translation: "时尚的", example: "Short skirts are fashionable this year." },
  { id: "g1308", category: "高中3500词", word: "fast", phonetic: "/fɑːst/", translation: "快的；快速地", example: "She runs very fast." },
  { id: "g1309", category: "高中3500词", word: "fat", phonetic: "/fæt/", translation: "胖的；脂肪", example: "This meat has too much fat." },
  { id: "g1310", category: "高中3500词", word: "fate", phonetic: "/feɪt/", translation: "命运", example: "It was fate that brought them together." },
  { id: "g1311", category: "高中3500词", word: "father", phonetic: "/ˈfɑːðər/", translation: "父亲", example: "Her father is a doctor." },
  { id: "g1312", category: "高中3500词", word: "fault", phonetic: "/fɔːlt/", translation: "过错；缺点", example: "It was my fault that we were late." },
  { id: "g1313", category: "高中3500词", word: "favor", phonetic: "/ˈfeɪvər/", translation: "好感；支持", example: "Could you do me a favor?" },
  { id: "g1314", category: "高中3500词", word: "favorite", phonetic: "/ˈfeɪvərɪt/", translation: "最喜欢的", example: "What is your favorite color?" },
  { id: "g1315", category: "高中3500词", word: "fear", phonetic: "/fɪər/", translation: "害怕；恐惧", example: "She has a fear of spiders." },
  { id: "g1316", category: "高中3500词", word: "feast", phonetic: "/fiːst/", translation: "盛宴", example: "The wedding feast was magnificent." },
  { id: "g1317", category: "高中3500词", word: "feather", phonetic: "/ˈfeðər/", translation: "羽毛", example: "The bird lost a feather." },
  { id: "g1318", category: "高中3500词", word: "feature", phonetic: "/ˈfiːtʃər/", translation: "特征；特色", example: "The phone has many new features." },
  { id: "g1319", category: "高中3500词", word: "February", phonetic: "/ˈfebruəri/", translation: "二月", example: "February is the shortest month." },
  { id: "g1320", category: "高中3500词", word: "fee", phonetic: "/fiː/", translation: "费用", example: "The entrance fee is ten dollars." },
  { id: "g1321", category: "高中3500词", word: "feed", phonetic: "/fiːd/", translation: "喂养", example: "She feeds the cat every morning." },
  { id: "g1322", category: "高中3500词", word: "feel", phonetic: "/fiːl/", translation: "感觉", example: "I feel happy today." },
  { id: "g1323", category: "高中3500词", word: "fellow", phonetic: "/ˈfeləʊ/", translation: "同伴；家伙", example: "He is a pleasant fellow." },
  { id: "g1324", category: "高中3500词", word: "female", phonetic: "/ˈfiːmeɪl/", translation: "女性的；女性", example: "The female bird sits on the eggs." },
  { id: "g1325", category: "高中3500词", word: "fence", phonetic: "/fens/", translation: "栅栏", example: "They built a fence around the garden." },
  { id: "g1326", category: "高中3500词", word: "festival", phonetic: "/ˈfestɪvl/", translation: "节日；庆典", example: "The Spring Festival is the most important Chinese festival." },
  { id: "g1327", category: "高中3500词", word: "fetch", phonetic: "/fetʃ/", translation: "去取；去拿", example: "Please fetch me a glass of water." },
  { id: "g1328", category: "高中3500词", word: "fever", phonetic: "/ˈfiːvər/", translation: "发烧", example: "She has a high fever." },
  { id: "g1329", category: "高中3500词", word: "few", phonetic: "/fjuː/", translation: "很少的", example: "Few people know the answer." },
  { id: "g1330", category: "高中3500词", word: "fiction", phonetic: "/ˈfɪkʃn/", translation: "小说；虚构", example: "She enjoys reading fiction." },
  { id: "g1331", category: "高中3500词", word: "field", phonetic: "/fiːld/", translation: "田地；领域", example: "The farmers work in the fields." },
  { id: "g1332", category: "高中3500词", word: "fierce", phonetic: "/fɪərs/", translation: "凶猛的；激烈的", example: "There is fierce competition among the companies." },
  { id: "g1333", category: "高中3500词", word: "fifteen", phonetic: "/ˌfɪfˈtiːn/", translation: "十五", example: "She is fifteen years old." },
  { id: "g1334", category: "高中3500词", word: "fifth", phonetic: "/fɪfθ/", translation: "第五", example: "This is the fifth time." },
  { id: "g1335", category: "高中3500词", word: "fifty", phonetic: "/ˈfɪfti/", translation: "五十", example: "There are fifty students in the class." },
  { id: "g1336", category: "高中3500词", word: "fight", phonetic: "/faɪt/", translation: "战斗；打架", example: "They fought for their freedom." },
  { id: "g1337", category: "高中3500词", word: "figure", phonetic: "/ˈfɪɡər/", translation: "数字；人物；身材", example: "She has a slim figure." },
  { id: "g1338", category: "高中3500词", word: "file", phonetic: "/faɪl/", translation: "文件；档案", example: "Please save the file." },
  { id: "g1339", category: "高中3500词", word: "fill", phonetic: "/fɪl/", translation: "填满；装满", example: "Please fill in the form." },
  { id: "g1340", category: "高中3500词", word: "film", phonetic: "/fɪlm/", translation: "电影；胶片", example: "We watched a good film last night." },
  { id: "g1341", category: "高中3500词", word: "final", phonetic: "/ˈfaɪnl/", translation: "最后的；决赛", example: "The final exam is next week." },
  { id: "g1342", category: "高中3500词", word: "finally", phonetic: "/ˈfaɪnəli/", translation: "最终", example: "She finally arrived." },
  { id: "g1343", category: "高中3500词", word: "finance", phonetic: "/ˈfaɪnæns/", translation: "金融；财政", example: "He works in the finance department." },
  { id: "g1344", category: "高中3500词", word: "financial", phonetic: "/faɪˈnænʃl/", translation: "金融的；财政的", example: "The company has financial problems." },
  { id: "g1345", category: "高中3500词", word: "find", phonetic: "/faɪnd/", translation: "找到；发现", example: "I can't find my keys." },
  { id: "g1346", category: "高中3500词", word: "fine", phonetic: "/faɪn/", translation: "好的；罚款", example: "The weather is fine today." },
  { id: "g1347", category: "高中3500词", word: "finger", phonetic: "/ˈfɪŋɡər/", translation: "手指", example: "She pointed her finger at the map." },
  { id: "g1348", category: "高中3500词", word: "finish", phonetic: "/ˈfɪnɪʃ/", translation: "完成", example: "Have you finished your homework?" },
  { id: "g1349", category: "高中3500词", word: "fire", phonetic: "/ˈfaɪər/", translation: "火；解雇", example: "The house was on fire." },
  { id: "g1350", category: "高中3500词", word: "firm", phonetic: "/fɜːrm/", translation: "坚固的；公司", example: "She spoke in a firm voice." },
  { id: "g1351", category: "高中3500词", word: "first", phonetic: "/fɜːrst/", translation: "第一的", example: "She was the first to arrive." },
  { id: "g1352", category: "高中3500词", word: "fish", phonetic: "/fɪʃ/", translation: "鱼", example: "We went fishing by the river." },
  { id: "g1353", category: "高中3500词", word: "fit", phonetic: "/fɪt/", translation: "适合；健康的", example: "This dress doesn't fit me." },
  { id: "g1354", category: "高中3500词", word: "five", phonetic: "/faɪv/", translation: "五", example: "There are five people in my family." },
  { id: "g1355", category: "高中3500词", word: "fix", phonetic: "/fɪks/", translation: "修理；固定", example: "Can you fix the broken window?" },
  { id: "g1356", category: "高中3500词", word: "flag", phonetic: "/flæɡ/", translation: "旗帜", example: "The flag was flying in the wind." },
  { id: "g1357", category: "高中3500词", word: "flame", phonetic: "/fleɪm/", translation: "火焰", example: "The flame flickered in the wind." },
  { id: "g1358", category: "高中3500词", word: "flash", phonetic: "/flæʃ/", translation: "闪光；闪过", example: "The lightning flashed across the sky." },
  { id: "g1359", category: "高中3500词", word: "flat", phonetic: "/flæt/", translation: "平的；公寓", example: "She lives in a flat." },
  { id: "g1360", category: "高中3500词", word: "flavor", phonetic: "/ˈfleɪvər/", translation: "味道；风味", example: "This ice cream has a delicious flavor." },
  { id: "g1361", category: "高中3500词", word: "flee", phonetic: "/fliː/", translation: "逃跑", example: "The thieves fled the scene." },
  { id: "g1362", category: "高中3500词", word: "flesh", phonetic: "/fleʃ/", translation: "肉；肉体", example: "The knife cut into the flesh." },
  { id: "g1363", category: "高中3500词", word: "flexible", phonetic: "/ˈfleksəbl/", translation: "灵活的；可弯曲的", example: "We need a more flexible schedule." },
  { id: "g1364", category: "高中3500词", word: "flight", phonetic: "/flaɪt/", translation: "航班；飞行", example: "Our flight was delayed by two hours." },
  { id: "g1365", category: "高中3500词", word: "float", phonetic: "/fləʊt/", translation: "漂浮", example: "The boat floated down the river." },
  { id: "g1366", category: "高中3500词", word: "flood", phonetic: "/flʌd/", translation: "洪水；淹没", example: "The heavy rain caused a flood." },
  { id: "g1367", category: "高中3500词", word: "floor", phonetic: "/flɔːr/", translation: "地板；楼层", example: "The office is on the second floor." },
  { id: "g1368", category: "高中3500词", word: "flour", phonetic: "/ˈflaʊər/", translation: "面粉", example: "She added flour to the mixture." },
  { id: "g1369", category: "高中3500词", word: "flow", phonetic: "/fləʊ/", translation: "流动", example: "The river flows into the sea." },
  { id: "g1370", category: "高中3500词", word: "flower", phonetic: "/ˈflaʊər/", translation: "花", example: "The garden is full of flowers." },
  { id: "g1371", category: "高中3500词", word: "flu", phonetic: "/fluː/", translation: "流感", example: "She caught the flu." },
  { id: "g1372", category: "高中3500词", word: "fluent", phonetic: "/ˈfluːənt/", translation: "流利的", example: "She is fluent in English." },
  { id: "g1373", category: "高中3500词", word: "fly", phonetic: "/flaɪ/", translation: "飞；苍蝇", example: "Birds fly in the sky." },
  { id: "g1374", category: "高中3500词", word: "focus", phonetic: "/ˈfəʊkəs/", translation: "集中；焦点", example: "Focus on your studies and ignore distractions." },
  { id: "g1375", category: "高中3500词", word: "fog", phonetic: "/fɒɡ/", translation: "雾", example: "The fog made driving dangerous." },
  { id: "g1376", category: "高中3500词", word: "fold", phonetic: "/fəʊld/", translation: "折叠", example: "She folded the letter and put it in the envelope." },
  { id: "g1377", category: "高中3500词", word: "folk", phonetic: "/fəʊk/", translation: "民间的；人们", example: "She enjoys folk music." },
  { id: "g1378", category: "高中3500词", word: "follow", phonetic: "/ˈfɒləʊ/", translation: "跟随；遵循", example: "Please follow the instructions." },
  { id: "g1379", category: "高中3500词", word: "following", phonetic: "/ˈfɒləʊɪŋ/", translation: "接下来的；下列的", example: "The following day, they left the city." },
  { id: "g1380", category: "高中3500词", word: "fond", phonetic: "/fɒnd/", translation: "喜爱的", example: "She is fond of reading." },
  { id: "g1381", category: "高中3500词", word: "food", phonetic: "/fuːd/", translation: "食物", example: "Chinese food is delicious." },
  { id: "g1382", category: "高中3500词", word: "fool", phonetic: "/fuːl/", translation: "傻瓜；愚弄", example: "Don't be a fool." },
  { id: "g1383", category: "高中3500词", word: "foolish", phonetic: "/ˈfuːlɪʃ/", translation: "愚蠢的", example: "It was foolish of him to say that." },
  { id: "g1384", category: "高中3500词", word: "foot", phonetic: "/fʊt/", translation: "脚；英尺", example: "She hurt her foot." },
  { id: "g1385", category: "高中3500词", word: "football", phonetic: "/ˈfʊtbɔːl/", translation: "足球", example: "He plays football every weekend." },
  { id: "g1386", category: "高中3500词", word: "for", phonetic: "/fɔːr/", translation: "为了；因为", example: "This gift is for you." },
  { id: "g1387", category: "高中3500词", word: "forbid", phonetic: "/fərˈbɪd/", translation: "禁止", example: "My parents forbid me to stay out late." },
  { id: "g1388", category: "高中3500词", word: "force", phonetic: "/fɔːrs/", translation: "力量；强迫", example: "The force of the wind was strong." },
  { id: "g1389", category: "高中3500词", word: "forecast", phonetic: "/ˈfɔːrkɑːst/", translation: "预测；预报", example: "The weather forecast says it will rain tomorrow." },
  { id: "g1390", category: "高中3500词", word: "forehead", phonetic: "/ˈfɔːrhed/", translation: "前额", example: "She wiped the sweat from her forehead." },
  { id: "g1391", category: "高中3500词", word: "foreign", phonetic: "/ˈfɒrɪn/", translation: "外国的", example: "She speaks three foreign languages." },
  { id: "g1392", category: "高中3500词", word: "forest", phonetic: "/ˈfɒrɪst/", translation: "森林", example: "We walked through the forest." },
  { id: "g1393", category: "高中3500词", word: "forever", phonetic: "/fərˈevər/", translation: "永远", example: "I will love you forever." },
  { id: "g1394", category: "高中3500词", word: "forget", phonetic: "/fərˈɡet/", translation: "忘记", example: "Don't forget to bring your book." },
  { id: "g1395", category: "高中3500词", word: "forgive", phonetic: "/fərˈɡɪv/", translation: "原谅；宽恕", example: "I'll never forgive him for what he did." },
  { id: "g1396", category: "高中3500词", word: "fork", phonetic: "/fɔːrk/", translation: "叉；岔口", example: "Use a fork to eat the pasta." },
  { id: "g1397", category: "高中3500词", word: "form", phonetic: "/fɔːrm/", translation: "形式；表格", example: "Please fill in this form." },
  { id: "g1398", category: "高中3500词", word: "formal", phonetic: "/ˈfɔːrml/", translation: "正式的", example: "You should wear formal clothes to the interview." },
  { id: "g1399", category: "高中3500词", word: "former", phonetic: "/ˈfɔːrmər/", translation: "以前的；前者", example: "She is the former president of the club." },
  { id: "g1400", category: "高中3500词", word: "formula", phonetic: "/ˈfɔːrmjələ/", translation: "公式；配方", example: "The formula for water is H2O." },
  { id: "g1401", category: "高中3500词", word: "forth", phonetic: "/fɔːrθ/", translation: "向前；向外", example: "He stepped forth." },
  { id: "g1402", category: "高中3500词", word: "fortune", phonetic: "/ˈfɔːrtʃuːn/", translation: "运气；财富", example: "He made a fortune in the stock market." },
  { id: "g1403", category: "高中3500词", word: "forty", phonetic: "/ˈfɔːrti/", translation: "四十", example: "There are forty students in the class." },
  { id: "g1404", category: "高中3500词", word: "forward", phonetic: "/ˈfɔːrwərd/", translation: "向前的", example: "Please step forward." },
  { id: "g1405", category: "高中3500词", word: "found", phonetic: "/faʊnd/", translation: "建立；创立", example: "The school was founded in 1950." },
  { id: "g1406", category: "高中3500词", word: "foundation", phonetic: "/faʊnˈdeɪʃn/", translation: "基础；基金会", example: "Hard work is the foundation of success." },
  { id: "g1407", category: "高中3500词", word: "fountain", phonetic: "/ˈfaʊntɪn/", translation: "喷泉", example: "The fountain in the park is beautiful." },
  { id: "g1408", category: "高中3500词", word: "fox", phonetic: "/fɒks/", translation: "狐狸", example: "The fox is a clever animal." },
  { id: "g1409", category: "高中3500词", word: "fragile", phonetic: "/ˈfrædʒaɪl/", translation: "脆弱的；易碎的", example: "Be careful with the fragile vase." },
  { id: "g1410", category: "高中3500词", word: "frame", phonetic: "/freɪm/", translation: "框架；相框", example: "She bought a new picture frame." },
  { id: "g1411", category: "高中3500词", word: "framework", phonetic: "/ˈfreɪmwɜːrk/", translation: "框架；体制", example: "We need a legal framework." },
  { id: "g1412", category: "高中3500词", word: "free", phonetic: "/friː/", translation: "自由的；免费的", example: "The tickets are free." },
  { id: "g1413", category: "高中3500词", word: "freedom", phonetic: "/ˈfriːdəm/", translation: "自由", example: "Everyone has the right to freedom." },
  { id: "g1414", category: "高中3500词", word: "freeze", phonetic: "/friːz/", translation: "冻结；结冰", example: "Water freezes at zero degrees." },
  { id: "g1415", category: "高中3500词", word: "frequent", phonetic: "/ˈfriːkwənt/", translation: "频繁的", example: "Frequent exercise is good for health." },
  { id: "g1416", category: "高中3500词", word: "frequently", phonetic: "/ˈfriːkwəntli/", translation: "频繁地", example: "She frequently visits her grandmother." },
  { id: "g1417", category: "高中3500词", word: "fresh", phonetic: "/freʃ/", translation: "新鲜的", example: "The vegetables are fresh." },
  { id: "g1418", category: "高中3500词", word: "fridge", phonetic: "/frɪdʒ/", translation: "冰箱", example: "Put the milk in the fridge." },
  { id: "g1419", category: "高中3500词", word: "friend", phonetic: "/frend/", translation: "朋友", example: "She is my best friend." },
  { id: "g1420", category: "高中3500词", word: "friendly", phonetic: "/ˈfrendli/", translation: "友好的", example: "The people here are very friendly." },
  { id: "g1421", category: "高中3500词", word: "friendship", phonetic: "/ˈfrendʃɪp/", translation: "友谊", example: "Their friendship lasted for years." },
  { id: "g1422", category: "高中3500词", word: "frighten", phonetic: "/ˈfraɪtn/", translation: "使害怕", example: "The loud noise frightened the baby." },
  { id: "g1423", category: "高中3500词", word: "frog", phonetic: "/frɒɡ/", translation: "青蛙", example: "Frogs live near water." },
  { id: "g1424", category: "高中3500词", word: "from", phonetic: "/frɒm/", translation: "从；来自", example: "She is from Shanghai." },
  { id: "g1425", category: "高中3500词", word: "front", phonetic: "/frʌnt/", translation: "前面的；正面", example: "The car is parked in front of the house." },
  { id: "g1426", category: "高中3500词", word: "frontier", phonetic: "/ˈfrʌntɪər/", translation: "边境；前沿", example: "They crossed the frontier." },
  { id: "g1427", category: "高中3500词", word: "frost", phonetic: "/frɒst/", translation: "霜", example: "The frost covered the ground." },
  { id: "g1428", category: "高中3500词", word: "frown", phonetic: "/fraʊn/", translation: "皱眉", example: "She frowned at the bad news." },
  { id: "g1429", category: "高中3500词", word: "fruit", phonetic: "/fruːt/", translation: "水果", example: "Eat more fruit and vegetables." },
  { id: "g1430", category: "高中3500词", word: "frustrate", phonetic: "/frʌˈstreɪt/", translation: "使沮丧；挫败", example: "The delay frustrated all of us." },
  { id: "g1431", category: "高中3500词", word: "fry", phonetic: "/fraɪ/", translation: "油炸", example: "She fried the eggs." },
  { id: "g1432", category: "高中3500词", word: "fuel", phonetic: "/fjuːəl/", translation: "燃料", example: "The car ran out of fuel." },
  { id: "g1433", category: "高中3500词", word: "fulfill", phonetic: "/fʊlˈfɪl/", translation: "实现；履行", example: "She fulfilled her promise to visit us." },
  { id: "g1434", category: "高中3500词", word: "full", phonetic: "/fʊl/", translation: "满的；完整的", example: "The glass is full." },
  { id: "g1435", category: "高中3500词", word: "fun", phonetic: "/fʌn/", translation: "乐趣；有趣的", example: "We had a lot of fun." },
  { id: "g1436", category: "高中3500词", word: "function", phonetic: "/ˈfʌŋkʃn/", translation: "功能；作用", example: "What is the function of this device?" },
  { id: "g1437", category: "高中3500词", word: "fund", phonetic: "/fʌnd/", translation: "基金；资金", example: "The school raised funds for the trip." },
  { id: "g1438", category: "高中3500词", word: "fundamental", phonetic: "/ˌfʌndəˈmentl/", translation: "基本的；根本的", example: "Reading is a fundamental skill." },
  { id: "g1439", category: "高中3500词", word: "funny", phonetic: "/ˈfʌni/", translation: "有趣的；滑稽的", example: "The joke was very funny." },
  { id: "g1440", category: "高中3500词", word: "fur", phonetic: "/fɜːr/", translation: "毛皮", example: "The cat has soft fur." },
  { id: "g1441", category: "高中3500词", word: "furniture", phonetic: "/ˈfɜːrnɪtʃər/", translation: "家具", example: "We bought some new furniture for the living room." },
  { id: "g1442", category: "高中3500词", word: "further", phonetic: "/ˈfɜːrðər/", translation: "更远的；进一步的", example: "We need to discuss this further." },
  { id: "g1443", category: "高中3500词", word: "furthermore", phonetic: "/ˌfɜːrðərˈmɔːr/", translation: "此外；而且", example: "Furthermore, the cost is too high." },
  { id: "g1444", category: "高中3500词", word: "future", phonetic: "/ˈfjuːtʃər/", translation: "未来", example: "What are your plans for the future?" },
  { id: "g1445", category: "高中3500词", word: "gain", phonetic: "/ɡeɪn/", translation: "获得；增加", example: "She gained a lot of experience from the job." },
  { id: "g1446", category: "高中3500词", word: "gallery", phonetic: "/ˈɡæləri/", translation: "画廊；走廊", example: "We visited the art gallery yesterday." },
  { id: "g1447", category: "高中3500词", word: "game", phonetic: "/ɡeɪm/", translation: "游戏；比赛", example: "Let's play a game." },
  { id: "g1448", category: "高中3500词", word: "gang", phonetic: "/ɡæŋ/", translation: "一帮；团伙", example: "A gang of boys was playing football." },
  { id: "g1449", category: "高中3500词", word: "gap", phonetic: "/ɡæp/", translation: "差距；缺口", example: "There is a wide gap between the rich and the poor." },
  { id: "g1450", category: "高中3500词", word: "garage", phonetic: "/ˈɡærɑːʒ/", translation: "车库；修车厂", example: "The car is in the garage." },
  { id: "g1451", category: "高中3500词", word: "garden", phonetic: "/ˈɡɑːrdn/", translation: "花园", example: "She grows roses in her garden." },
  { id: "g1452", category: "高中3500词", word: "garlic", phonetic: "/ˈɡɑːrlɪk/", translation: "大蒜", example: "Add some garlic to the dish." },
  { id: "g1453", category: "高中3500词", word: "gas", phonetic: "/ɡæs/", translation: "气体；汽油", example: "The car needs more gas." },
  { id: "g1454", category: "高中3500词", word: "gate", phonetic: "/ɡeɪt/", translation: "大门", example: "The school gate opens at 7 am." },
  { id: "g1455", category: "高中3500词", word: "gather", phonetic: "/ˈɡæðər/", translation: "聚集；收集", example: "People gathered in the square for the concert." },
  { id: "g1456", category: "高中3500词", word: "gay", phonetic: "/ɡeɪ/", translation: "快乐的；同性恋的", example: "The atmosphere was gay and festive." },
  { id: "g1457", category: "高中3500词", word: "general", phonetic: "/ˈdʒenərəl/", translation: "一般的；将军", example: "In general, the plan worked well." },
  { id: "g1458", category: "高中3500词", word: "generally", phonetic: "/ˈdʒenərəli/", translation: "通常；普遍地", example: "Generally speaking, it is a good idea." },
  { id: "g1459", category: "高中3500词", word: "generate", phonetic: "/ˈdʒenəreɪt/", translation: "产生；发生", example: "Wind turbines generate electricity." },
  { id: "g1460", category: "高中3500词", word: "generation", phonetic: "/ˌdʒenəˈreɪʃn/", translation: "一代人", example: "The younger generation thinks differently." },
  { id: "g1461", category: "高中3500词", word: "generous", phonetic: "/ˈdʒenərəs/", translation: "慷慨的；大方的", example: "He is very generous with his time." },
  { id: "g1462", category: "高中3500词", word: "genius", phonetic: "/ˈdʒiːniəs/", translation: "天才", example: "Einstein was a genius in physics." },
  { id: "g1463", category: "高中3500词", word: "gentle", phonetic: "/ˈdʒentl/", translation: "温柔的；温和的", example: "She has a gentle voice." },
  { id: "g1464", category: "高中3500词", word: "gentleman", phonetic: "/ˈdʒentlmən/", translation: "绅士", example: "He is a real gentleman." },
  { id: "g1465", category: "高中3500词", word: "genuine", phonetic: "/ˈdʒenjuɪn/", translation: "真正的；真诚的", example: "Is this painting genuine or a copy?" },
  { id: "g1466", category: "高中3500词", word: "geography", phonetic: "/dʒiˈɒɡrəfi/", translation: "地理", example: "She is good at geography." },
  { id: "g1467", category: "高中3500词", word: "gesture", phonetic: "/ˈdʒestʃər/", translation: "手势；姿态", example: "He made a gesture of apology." },
  { id: "g1468", category: "高中3500词", word: "get", phonetic: "/ɡet/", translation: "得到；变得", example: "Can you get me a glass of water?" },
  { id: "g1469", category: "高中3500词", word: "ghost", phonetic: "/ɡəʊst/", translation: "鬼；幽灵", example: "Do you believe in ghosts?" },
  { id: "g1470", category: "高中3500词", word: "giant", phonetic: "/ˈdʒaɪənt/", translation: "巨人；巨大的", example: "The giant tree is over 500 years old." },
  { id: "g1471", category: "高中3500词", word: "gift", phonetic: "/ɡɪft/", translation: "礼物；天赋", example: "She has a gift for music." },
  { id: "g1472", category: "高中3500词", word: "gifted", phonetic: "/ˈɡɪftɪd/", translation: "有天赋的", example: "She is a gifted student." },
  { id: "g1473", category: "高中3500词", word: "girl", phonetic: "/ɡɜːrl/", translation: "女孩", example: "The girl is reading a book." },
  { id: "g1474", category: "高中3500词", word: "give", phonetic: "/ɡɪv/", translation: "给；赠送", example: "Please give me a hand." },
  { id: "g1475", category: "高中3500词", word: "glad", phonetic: "/ɡlæd/", translation: "高兴的", example: "I am glad to see you." },
  { id: "g1476", category: "高中3500词", word: "glance", phonetic: "/ɡlɑːns/", translation: "一瞥；扫视", example: "She glanced at the clock." },
  { id: "g1477", category: "高中3500词", word: "glass", phonetic: "/ɡlɑːs/", translation: "玻璃；玻璃杯", example: "She poured water into the glass." },
  { id: "g1478", category: "高中3500词", word: "global", phonetic: "/ˈɡləʊbl/", translation: "全球的", example: "Global warming is a serious issue." },
  { id: "g1479", category: "高中3500词", word: "globe", phonetic: "/ɡləʊb/", translation: "地球；球体", example: "She traveled around the globe." },
  { id: "g1480", category: "高中3500词", word: "glory", phonetic: "/ˈɡlɔːri/", translation: "光荣；荣耀", example: "They won glory for their country." },
  { id: "g1481", category: "高中3500词", word: "go", phonetic: "/ɡəʊ/", translation: "去；变得", example: "Let's go to the park." },
  { id: "g1482", category: "高中3500词", word: "goal", phonetic: "/ɡəʊl/", translation: "目标；球门", example: "She achieved her goal." },
  { id: "g1483", category: "高中3500词", word: "goat", phonetic: "/ɡəʊt/", translation: "山羊", example: "The goat was eating grass." },
  { id: "g1484", category: "高中3500词", word: "god", phonetic: "/ɡɒd/", translation: "上帝；神", example: "Thank God you are safe." },
  { id: "g1485", category: "高中3500词", word: "gold", phonetic: "/ɡəʊld/", translation: "金子；金色的", example: "She won a gold medal." },
  { id: "g1486", category: "高中3500词", word: "golden", phonetic: "/ˈɡəʊldən/", translation: "金色的；宝贵的", example: "It was a golden opportunity." },
  { id: "g1487", category: "高中3500词", word: "golf", phonetic: "/ɡɒlf/", translation: "高尔夫球", example: "He enjoys playing golf." },
  { id: "g1488", category: "高中3500词", word: "good", phonetic: "/ɡʊd/", translation: "好的", example: "She is a good student." },
  { id: "g1489", category: "高中3500词", word: "goods", phonetic: "/ɡʊdz/", translation: "商品；货物", example: "The goods were delivered on time." },
  { id: "g1490", category: "高中3500词", word: "govern", phonetic: "/ˈɡʌvərn/", translation: "统治；管理", example: "The country is governed by a president." },
  { id: "g1491", category: "高中3500词", word: "government", phonetic: "/ˈɡʌvərnmənt/", translation: "政府", example: "The government made a new policy." },
  { id: "g1492", category: "高中3500词", word: "governor", phonetic: "/ˈɡʌvərnər/", translation: "州长；主管", example: "He was elected governor." },
  { id: "g1493", category: "高中3500词", word: "grab", phonetic: "/ɡræb/", translation: "抓住；夺取", example: "She grabbed her bag and ran." },
  { id: "g1494", category: "高中3500词", word: "grace", phonetic: "/ɡreɪs/", translation: "优雅；恩典", example: "She danced with grace." },
  { id: "g1495", category: "高中3500词", word: "grade", phonetic: "/ɡreɪd/", translation: "等级；成绩", example: "She got good grades in all subjects." },
  { id: "g1496", category: "高中3500词", word: "gradual", phonetic: "/ˈɡrædʒuəl/", translation: "逐渐的", example: "There has been a gradual improvement in her health." },
  { id: "g1497", category: "高中3500词", word: "gradually", phonetic: "/ˈɡrædʒuəli/", translation: "逐渐地", example: "The situation gradually improved." },
  { id: "g1498", category: "高中3500词", word: "graduate", phonetic: "/ˈɡrædʒueɪt/", translation: "毕业；毕业生", example: "She graduated from Harvard University." },
  { id: "g1499", category: "高中3500词", word: "grain", phonetic: "/ɡreɪn/", translation: "谷物；颗粒", example: "The farmer grows grain." },
  { id: "g1500", category: "高中3500词", word: "grammar", phonetic: "/ˈɡræmər/", translation: "语法", example: "She is studying English grammar." },
  { id: "g1501", category: "高中3500词", word: "grand", phonetic: "/ɡrænd/", translation: "宏伟的；重大的", example: "The hotel has a grand entrance." },
  { id: "g1502", category: "高中3500词", word: "grandchild", phonetic: "/ˈɡrændtʃaɪld/", translation: "孙子/孙女", example: "She has three grandchildren." },
  { id: "g1503", category: "高中3500词", word: "grandparent", phonetic: "/ˈɡrænperənt/", translation: "祖父母", example: "Her grandparents live in the country." },
  { id: "g1504", category: "高中3500词", word: "grant", phonetic: "/ɡrɑːnt/", translation: "授予；拨款", example: "The government granted them permission to build." },
  { id: "g1505", category: "高中3500词", word: "grape", phonetic: "/ɡreɪp/", translation: "葡萄", example: "She bought a bunch of grapes." },
  { id: "g1506", category: "高中3500词", word: "grasp", phonetic: "/ɡrɑːsp/", translation: "抓住；理解", example: "She grasped the rope firmly." },
  { id: "g1507", category: "高中3500词", word: "grass", phonetic: "/ɡrɑːs/", translation: "草", example: "The grass is green in spring." },
  { id: "g1508", category: "高中3500词", word: "grateful", phonetic: "/ˈɡreɪtfl/", translation: "感激的", example: "I am grateful for your support." },
  { id: "g1509", category: "高中3500词", word: "grave", phonetic: "/ɡreɪv/", translation: "坟墓；严重的", example: "The situation is very grave." },
  { id: "g1510", category: "高中3500词", word: "great", phonetic: "/ɡreɪt/", translation: "伟大的；大量的", example: "She is a great musician." },
  { id: "g1511", category: "高中3500词", word: "greedy", phonetic: "/ˈɡriːdi/", translation: "贪婪的", example: "Don't be greedy." },
  { id: "g1512", category: "高中3500词", word: "green", phonetic: "/ɡriːn/", translation: "绿色的", example: "The trees are green." },
  { id: "g1513", category: "高中3500词", word: "greet", phonetic: "/ɡriːt/", translation: "问候；迎接", example: "She greeted us with a smile." },
  { id: "g1514", category: "高中3500词", word: "greeting", phonetic: "/ˈɡriːtɪŋ/", translation: "问候；贺卡", example: "She sent Christmas greetings." },
  { id: "g1515", category: "高中3500词", word: "grey", phonetic: "/ɡreɪ/", translation: "灰色的", example: "The sky was grey." },
  { id: "g1516", category: "高中3500词", word: "grocery", phonetic: "/ˈɡrəʊsəri/", translation: "杂货店", example: "She went to the grocery store." },
  { id: "g1517", category: "高中3500词", word: "ground", phonetic: "/ɡraʊnd/", translation: "地面；理由", example: "The ground was covered with snow." },
  { id: "g1518", category: "高中3500词", word: "group", phonetic: "/ɡruːp/", translation: "组；群", example: "The students work in groups." },
  { id: "g1519", category: "高中3500词", word: "grow", phonetic: "/ɡrəʊ/", translation: "生长；种植", example: "Plants grow quickly in spring." },
  { id: "g1520", category: "高中3500词", word: "growth", phonetic: "/ɡrəʊθ/", translation: "增长；发展", example: "Economic growth has slowed down." },
  { id: "g1521", category: "高中3500词", word: "guarantee", phonetic: "/ˌɡærənˈtiː/", translation: "保证；担保", example: "We guarantee the quality of our products." },
  { id: "g1522", category: "高中3500词", word: "guard", phonetic: "/ɡɑːrd/", translation: "守卫；警卫", example: "The guard stopped him at the gate." },
  { id: "g1523", category: "高中3500词", word: "guess", phonetic: "/ɡes/", translation: "猜测", example: "Can you guess the answer?" },
  { id: "g1524", category: "高中3500词", word: "guest", phonetic: "/ɡest/", translation: "客人", example: "We have guests for dinner." },
  { id: "g1525", category: "高中3500词", word: "guidance", phonetic: "/ˈɡaɪdns/", translation: "指导", example: "She needs guidance from her teacher." },
  { id: "g1526", category: "高中3500词", word: "guide", phonetic: "/ɡaɪd/", translation: "向导；指南", example: "The guide showed us around the museum." },
  { id: "g1527", category: "高中3500词", word: "guilty", phonetic: "/ˈɡɪlti/", translation: "有罪的；内疚的", example: "He felt guilty about lying to his mother." },
  { id: "g1528", category: "高中3500词", word: "guitar", phonetic: "/ɡɪˈtɑːr/", translation: "吉他", example: "She plays the guitar." },
  { id: "g1529", category: "高中3500词", word: "gun", phonetic: "/ɡʌn/", translation: "枪", example: "The police officer carried a gun." },
  { id: "g1530", category: "高中3500词", word: "gym", phonetic: "/dʒɪm/", translation: "健身房", example: "She goes to the gym every day." },
  { id: "g1531", category: "高中3500词", word: "gymnastics", phonetic: "/dʒɪmˈnæstɪks/", translation: "体操", example: "She is good at gymnastics." },
  { id: "g1532", category: "高中3500词", word: "habit", phonetic: "/ˈhæbɪt/", translation: "习惯", example: "She has a habit of reading before bed." },
  { id: "g1533", category: "高中3500词", word: "hair", phonetic: "/heər/", translation: "头发", example: "She has long black hair." },
  { id: "g1534", category: "高中3500词", word: "half", phonetic: "/hɑːf/", translation: "一半", example: "Half of the students are girls." },
  { id: "g1535", category: "高中3500词", word: "hall", phonetic: "/hɔːl/", translation: "大厅；走廊", example: "The concert was held in the hall." },
  { id: "g1536", category: "高中3500词", word: "ham", phonetic: "/hæm/", translation: "火腿", example: "She made a ham sandwich." },
  { id: "g1537", category: "高中3500词", word: "hamburger", phonetic: "/ˈhæmbɜːrɡər/", translation: "汉堡包", example: "He ordered a hamburger and fries." },
  { id: "g1538", category: "高中3500词", word: "hammer", phonetic: "/ˈhæmər/", translation: "锤子", example: "She hit the nail with a hammer." },
  { id: "g1539", category: "高中3500词", word: "hand", phonetic: "/hænd/", translation: "手；递", example: "Please hand me the book." },
  { id: "g1540", category: "高中3500词", word: "handful", phonetic: "/ˈhændfl/", translation: "一把；少数", example: "Only a handful of people came." },
  { id: "g1541", category: "高中3500词", word: "handle", phonetic: "/ˈhændl/", translation: "处理；把手", example: "She knows how to handle difficult situations." },
  { id: "g1542", category: "高中3500词", word: "handsome", phonetic: "/ˈhænsəm/", translation: "英俊的", example: "He is a handsome young man." },
  { id: "g1543", category: "高中3500词", word: "handwriting", phonetic: "/ˈhændraɪtɪŋ/", translation: "笔迹", example: "Her handwriting is very neat." },
  { id: "g1544", category: "高中3500词", word: "hang", phonetic: "/hæŋ/", translation: "悬挂；绞死", example: "She hung the picture on the wall." },
  { id: "g1545", category: "高中3500词", word: "happen", phonetic: "/ˈhæpən/", translation: "发生", example: "What happened to him?" },
  { id: "g1546", category: "高中3500词", word: "happiness", phonetic: "/ˈhæpɪnəs/", translation: "幸福；快乐", example: "Money cannot buy happiness." },
  { id: "g1547", category: "高中3500词", word: "happy", phonetic: "/ˈhæpi/", translation: "快乐的", example: "I am happy to help you." },
  { id: "g1548", category: "高中3500词", word: "harbor", phonetic: "/ˈhɑːrbər/", translation: "港口", example: "The ship entered the harbor." },
  { id: "g1549", category: "高中3500词", word: "hard", phonetic: "/hɑːrd/", translation: "困难的；硬的", example: "She works very hard." },
  { id: "g1550", category: "高中3500词", word: "hardly", phonetic: "/ˈhɑːrdli/", translation: "几乎不", example: "I can hardly believe it." },
  { id: "g1551", category: "高中3500词", word: "hardship", phonetic: "/ˈhɑːrdʃɪp/", translation: "困难；苦难", example: "They endured great hardship during the war." },
  { id: "g1552", category: "高中3500词", word: "harm", phonetic: "/hɑːrm/", translation: "伤害；损害", example: "Smoking harms your health." },
  { id: "g1553", category: "高中3500词", word: "harmful", phonetic: "/ˈhɑːrmfl/", translation: "有害的", example: "Too much sun is harmful." },
  { id: "g1554", category: "高中3500词", word: "harmony", phonetic: "/ˈhɑːrməni/", translation: "和谐；协调", example: "They live together in harmony." },
  { id: "g1555", category: "高中3500词", word: "harvest", phonetic: "/ˈhɑːrvɪst/", translation: "收获；收割", example: "The farmers had a good harvest this year." },
  { id: "g1556", category: "高中3500词", word: "hat", phonetic: "/hæt/", translation: "帽子", example: "She wore a straw hat." },
  { id: "g1557", category: "高中3500词", word: "hate", phonetic: "/heɪt/", translation: "恨；厌恶", example: "I hate lying." },
  { id: "g1558", category: "高中3500词", word: "have", phonetic: "/hæv/", translation: "有；吃", example: "I have two brothers." },
  { id: "g1559", category: "高中3500词", word: "head", phonetic: "/hed/", translation: "头；首领", example: "She shook her head." },
  { id: "g1560", category: "高中3500词", word: "headache", phonetic: "/ˈhedeɪk/", translation: "头痛", example: "I have a bad headache." },
  { id: "g1561", category: "高中3500词", word: "headline", phonetic: "/ˈhedlaɪn/", translation: "标题", example: "The headline caught my attention." },
  { id: "g1562", category: "高中3500词", word: "headmaster", phonetic: "/ˌhedˈmɑːstər/", translation: "校长", example: "The headmaster gave a speech." },
  { id: "g1563", category: "高中3500词", word: "health", phonetic: "/helθ/", translation: "健康", example: "Health is more important than wealth." },
  { id: "g1564", category: "高中3500词", word: "healthy", phonetic: "/ˈhelθi/", translation: "健康的", example: "She has a healthy diet." },
  { id: "g1565", category: "高中3500词", word: "hear", phonetic: "/hɪər/", translation: "听到；听说", example: "I can hear the birds singing." },
  { id: "g1566", category: "高中3500词", word: "heart", phonetic: "/hɑːrt/", translation: "心；心脏", example: "She has a kind heart." },
  { id: "g1567", category: "高中3500词", word: "heat", phonetic: "/hiːt/", translation: "热；加热", example: "The heat of the sun was intense." },
  { id: "g1568", category: "高中3500词", word: "heaven", phonetic: "/ˈhevn/", translation: "天堂；天空", example: "Heaven helps those who help themselves." },
  { id: "g1569", category: "高中3500词", word: "heavy", phonetic: "/ˈhevi/", translation: "重的", example: "The box is too heavy for me." },
  { id: "g1570", category: "高中3500词", word: "height", phonetic: "/haɪt/", translation: "高度", example: "What is the height of the building?" },
  { id: "g1571", category: "高中3500词", word: "helicopter", phonetic: "/ˈhelɪkɒptər/", translation: "直升机", example: "The helicopter landed on the roof." },
  { id: "g1572", category: "高中3500词", word: "hello", phonetic: "/həˈləʊ/", translation: "你好", example: "Hello, how are you?" },
  { id: "g1573", category: "高中3500词", word: "helmet", phonetic: "/ˈhelmɪt/", translation: "头盔", example: "Wear a helmet when riding a bike." },
  { id: "g1574", category: "高中3500词", word: "help", phonetic: "/help/", translation: "帮助", example: "Can you help me?" },
  { id: "g1575", category: "高中3500词", word: "helpful", phonetic: "/ˈhelpfl/", translation: "有帮助的", example: "She is very helpful." },
  { id: "g1576", category: "高中3500词", word: "hen", phonetic: "/hen/", translation: "母鸡", example: "The hen laid an egg." },
  { id: "g1577", category: "高中3500词", word: "her", phonetic: "/hɜːr/", translation: "她的；她", example: "This is her book." },
  { id: "g1578", category: "高中3500词", word: "here", phonetic: "/hɪər/", translation: "这里", example: "Come here, please." },
  { id: "g1579", category: "高中3500词", word: "hero", phonetic: "/ˈhɪərəʊ/", translation: "英雄", example: "He is a national hero." },
  { id: "g1580", category: "高中3500词", word: "heroine", phonetic: "/ˈherəʊɪn/", translation: "女英雄", example: "She was the heroine of the story." },
  { id: "g1581", category: "高中3500词", word: "hers", phonetic: "/hɜːrz/", translation: "她的", example: "The book is hers." },
  { id: "g1582", category: "高中3500词", word: "herself", phonetic: "/hɜːrˈself/", translation: "她自己", example: "She did it herself." },
  { id: "g1583", category: "高中3500词", word: "hesitate", phonetic: "/ˈhezɪteɪt/", translation: "犹豫；踌躇", example: "Don't hesitate to ask for help." },
  { id: "g1584", category: "高中3500词", word: "hi", phonetic: "/haɪ/", translation: "嗨", example: "Hi, nice to meet you." },
  { id: "g1585", category: "高中3500词", word: "hide", phonetic: "/haɪd/", translation: "隐藏", example: "She hid behind the door." },
  { id: "g1586", category: "高中3500词", word: "high", phonetic: "/haɪ/", translation: "高的", example: "The mountain is very high." },
  { id: "g1587", category: "高中3500词", word: "highlight", phonetic: "/ˈhaɪlaɪt/", translation: "强调；亮点", example: "The report highlights the main problems." },
  { id: "g1588", category: "高中3500词", word: "highly", phonetic: "/ˈhaɪli/", translation: "高度地", example: "She is highly respected." },
  { id: "g1589", category: "高中3500词", word: "highway", phonetic: "/ˈhaɪweɪ/", translation: "公路", example: "The highway connects the two cities." },
  { id: "g1590", category: "高中3500词", word: "hill", phonetic: "/hɪl/", translation: "小山", example: "We climbed the hill." },
  { id: "g1591", category: "高中3500词", word: "him", phonetic: "/hɪm/", translation: "他", example: "Give it to him." },
  { id: "g1592", category: "高中3500词", word: "himself", phonetic: "/hɪmˈself/", translation: "他自己", example: "He did it himself." },
  { id: "g1593", category: "高中3500词", word: "hire", phonetic: "/ˈhaɪər/", translation: "雇用；租金", example: "They hired a car for the trip." },
  { id: "g1594", category: "高中3500词", word: "his", phonetic: "/hɪz/", translation: "他的", example: "This is his book." },
  { id: "g1595", category: "高中3500词", word: "historic", phonetic: "/hɪˈstɒrɪk/", translation: "有历史意义的", example: "It was a historic moment." },
  { id: "g1596", category: "高中3500词", word: "historical", phonetic: "/hɪˈstɒrɪkl/", translation: "历史的", example: "She is studying historical documents." },
  { id: "g1597", category: "高中3500词", word: "history", phonetic: "/ˈhɪstri/", translation: "历史", example: "China has a long history." },
  { id: "g1598", category: "高中3500词", word: "hit", phonetic: "/hɪt/", translation: "打；击中", example: "The ball hit the window." },
  { id: "g1599", category: "高中3500词", word: "hobby", phonetic: "/ˈhɒbi/", translation: "爱好", example: "Her hobby is painting." },
  { id: "g1600", category: "高中3500词", word: "hold", phonetic: "/həʊld/", translation: "拿着；举行", example: "She held the baby in her arms." },
  { id: "g1601", category: "高中3500词", word: "hole", phonetic: "/həʊl/", translation: "洞；孔", example: "There is a hole in my sock." },
  { id: "g1602", category: "高中3500词", word: "holiday", phonetic: "/ˈhɒlədeɪ/", translation: "假日；假期", example: "We went to the beach for the holiday." },
  { id: "g1603", category: "高中3500词", word: "holy", phonetic: "/ˈhəʊli/", translation: "神圣的", example: "The temple is a holy place." },
  { id: "g1604", category: "高中3500词", word: "home", phonetic: "/həʊm/", translation: "家", example: "She went home after school." },
  { id: "g1605", category: "高中3500词", word: "homeland", phonetic: "/ˈhəʊmlænd/", translation: "祖国", example: "She loves her homeland." },
  { id: "g1606", category: "高中3500词", word: "hometown", phonetic: "/ˈhəʊmtaʊn/", translation: "家乡", example: "My hometown is a small village." },
  { id: "g1607", category: "高中3500词", word: "homework", phonetic: "/ˈhəʊmwɜːrk/", translation: "家庭作业", example: "Have you finished your homework?" },
  { id: "g1608", category: "高中3500词", word: "honest", phonetic: "/ˈɒnɪst/", translation: "诚实的", example: "He is an honest man." },
  { id: "g1609", category: "高中3500词", word: "honey", phonetic: "/ˈhʌni/", translation: "蜂蜜；亲爱的", example: "She added honey to her tea." },
  { id: "g1610", category: "高中3500词", word: "honor", phonetic: "/ˈɒnər/", translation: "荣誉；尊敬", example: "It is an honor to be invited here." },
  { id: "g1611", category: "高中3500词", word: "hook", phonetic: "/hʊk/", translation: "钩子", example: "Hang your coat on the hook." },
  { id: "g1612", category: "高中3500词", word: "hope", phonetic: "/həʊp/", translation: "希望", example: "I hope to see you again." },
  { id: "g1613", category: "高中3500词", word: "hopeful", phonetic: "/ˈhəʊpfl/", translation: "有希望的", example: "She is hopeful about the future." },
  { id: "g1614", category: "高中3500词", word: "hopeless", phonetic: "/ˈhəʊpləs/", translation: "绝望的", example: "The situation seemed hopeless." },
  { id: "g1615", category: "高中3500词", word: "horizon", phonetic: "/həˈraɪzn/", translation: "地平线；眼界", example: "The sun sank below the horizon." },
  { id: "g1616", category: "高中3500词", word: "horrible", phonetic: "/ˈhɒrəbl/", translation: "可怕的", example: "The weather was horrible." },
  { id: "g1617", category: "高中3500词", word: "horror", phonetic: "/ˈhɒrər/", translation: "恐怖", example: "She watched in horror." },
  { id: "g1618", category: "高中3500词", word: "horse", phonetic: "/hɔːrs/", translation: "马", example: "She rode a horse." },
  { id: "g1619", category: "高中3500词", word: "hospital", phonetic: "/ˈhɒspɪtl/", translation: "医院", example: "He was taken to the hospital." },
  { id: "g1620", category: "高中3500词", word: "host", phonetic: "/həʊst/", translation: "主人；主持人", example: "She was the host of the party." },
  { id: "g1621", category: "高中3500词", word: "hostess", phonetic: "/ˈhəʊstəs/", translation: "女主人", example: "The hostess greeted the guests." },
  { id: "g1622", category: "高中3500词", word: "hostile", phonetic: "/ˈhɒstaɪl/", translation: "敌意的；不友好的", example: "They received a hostile reception." },
  { id: "g1623", category: "高中3500词", word: "hot", phonetic: "/hɒt/", translation: "热的；辣的", example: "The soup is very hot." },
  { id: "g1624", category: "高中3500词", word: "hotel", phonetic: "/həʊˈtel/", translation: "旅馆", example: "We stayed at a hotel." },
  { id: "g1625", category: "高中3500词", word: "hour", phonetic: "/ˈaʊər/", translation: "小时", example: "The class lasts one hour." },
  { id: "g1626", category: "高中3500词", word: "house", phonetic: "/haʊs/", translation: "房子", example: "They bought a new house." },
  { id: "g1627", category: "高中3500词", word: "household", phonetic: "/ˈhaʊshəʊld/", translation: "家庭的；一家人", example: "She manages the household." },
  { id: "g1628", category: "高中3500词", word: "housewife", phonetic: "/ˈhaʊswaɪf/", translation: "家庭主妇", example: "She is a housewife." },
  { id: "g1629", category: "高中3500词", word: "housework", phonetic: "/ˈhaʊswɜːrk/", translation: "家务", example: "She does the housework every day." },
  { id: "g1630", category: "高中3500词", word: "how", phonetic: "/haʊ/", translation: "怎样；多么", example: "How are you?" },
  { id: "g1631", category: "高中3500词", word: "however", phonetic: "/haʊˈevər/", translation: "然而", example: "However, there is a problem." },
  { id: "g1632", category: "高中3500词", word: "hug", phonetic: "/hʌɡ/", translation: "拥抱", example: "She hugged her mother." },
  { id: "g1633", category: "高中3500词", word: "huge", phonetic: "/hjuːdʒ/", translation: "巨大的", example: "The elephant is huge." },
  { id: "g1634", category: "高中3500词", word: "human", phonetic: "/ˈhjuːmən/", translation: "人类的；人", example: "Human beings are social animals." },
  { id: "g1635", category: "高中3500词", word: "humble", phonetic: "/ˈhʌmbl/", translation: "谦虚的；卑微的", example: "He is a humble man despite his great success." },
  { id: "g1636", category: "高中3500词", word: "humor", phonetic: "/ˈhjuːmər/", translation: "幽默", example: "He has a great sense of humor." },
  { id: "g1637", category: "高中3500词", word: "humorous", phonetic: "/ˈhjuːmərəs/", translation: "幽默的", example: "He told a humorous story." },
  { id: "g1638", category: "高中3500词", word: "hunger", phonetic: "/ˈhʌŋɡər/", translation: "饥饿", example: "Hunger is a serious problem." },
  { id: "g1639", category: "高中3500词", word: "hungry", phonetic: "/ˈhʌŋɡri/", translation: "饥饿的", example: "I am very hungry." },
  { id: "g1640", category: "高中3500词", word: "hunt", phonetic: "/hʌnt/", translation: "打猎；搜索", example: "They went hunting in the forest." },
  { id: "g1641", category: "高中3500词", word: "hunter", phonetic: "/ˈhʌntər/", translation: "猎人", example: "The hunter tracked the deer." },
  { id: "g1642", category: "高中3500词", word: "hurry", phonetic: "/ˈhʌri/", translation: "匆忙", example: "Don't hurry, take your time." },
  { id: "g1643", category: "高中3500词", word: "hurt", phonetic: "/hɜːrt/", translation: "伤害；疼痛", example: "She hurt her leg." },
  { id: "g1644", category: "高中3500词", word: "husband", phonetic: "/ˈhʌzbənd/", translation: "丈夫", example: "Her husband is a teacher." },
  { id: "g1645", category: "高中3500词", word: "ice", phonetic: "/aɪs/", translation: "冰", example: "The lake was covered with ice." },
  { id: "g1646", category: "高中3500词", word: "ice cream", phonetic: "/ˌaɪs ˈkriːm/", translation: "冰淇淋", example: "Children love ice cream." },
  { id: "g1647", category: "高中3500词", word: "idea", phonetic: "/aɪˈdɪə/", translation: "想法；主意", example: "That is a good idea." },
  { id: "g1648", category: "高中3500词", word: "ideal", phonetic: "/aɪˈdɪəl/", translation: "理想的；理想", example: "This is the ideal place for a picnic." },
  { id: "g1649", category: "高中3500词", word: "identical", phonetic: "/aɪˈdentɪkl/", translation: "完全相同的", example: "The twins look identical." },
  { id: "g1650", category: "高中3500词", word: "identify", phonetic: "/aɪˈdentɪfaɪ/", translation: "识别；确认", example: "Can you identify the suspect?" },
  { id: "g1651", category: "高中3500词", word: "identity", phonetic: "/aɪˈdentəti/", translation: "身份；特性", example: "Please verify your identity at the counter." },
  { id: "g1652", category: "高中3500词", word: "ignore", phonetic: "/ɪɡˈnɔːr/", translation: "忽视；不理", example: "You cannot ignore the problem forever." },
  { id: "g1653", category: "高中3500词", word: "ill", phonetic: "/ɪl/", translation: "生病的", example: "She is ill in bed." },
  { id: "g1654", category: "高中3500词", word: "illegal", phonetic: "/ɪˈliːɡl/", translation: "非法的", example: "It is illegal to park here." },
  { id: "g1655", category: "高中3500词", word: "illness", phonetic: "/ˈɪlnəs/", translation: "疾病", example: "She recovered from her illness." },
  { id: "g1656", category: "高中3500词", word: "illustrate", phonetic: "/ˈɪləstreɪt/", translation: "说明；图解", example: "The teacher illustrated the concept with an example." },
  { id: "g1657", category: "高中3500词", word: "image", phonetic: "/ˈɪmɪdʒ/", translation: "形象；图像", example: "The company needs to improve its image." },
  { id: "g1658", category: "高中3500词", word: "imagination", phonetic: "/ɪˌmædʒɪˈneɪʃn/", translation: "想象力", example: "She has a vivid imagination." },
  { id: "g1659", category: "高中3500词", word: "imagine", phonetic: "/ɪˈmædʒɪn/", translation: "想象", example: "Imagine living on the moon!" },
  { id: "g1660", category: "高中3500词", word: "immediate", phonetic: "/ɪˈmiːdiət/", translation: "立即的；直接的", example: "We need an immediate response." },
  { id: "g1661", category: "高中3500词", word: "immediately", phonetic: "/ɪˈmiːdiətli/", translation: "立即", example: "She left immediately." },
  { id: "g1662", category: "高中3500词", word: "immigrant", phonetic: "/ˈɪmɪɡrənt/", translation: "移民", example: "The immigrants started a new life." },
  { id: "g1663", category: "高中3500词", word: "immigration", phonetic: "/ˌɪmɪˈɡreɪʃn/", translation: "移民", example: "Immigration laws are strict." },
  { id: "g1664", category: "高中3500词", word: "impact", phonetic: "/ˈɪmpækt/", translation: "影响；冲击", example: "The policy had a positive impact on education." },
  { id: "g1665", category: "高中3500词", word: "imply", phonetic: "/ɪmˈplaɪ/", translation: "暗示；意味着", example: "Are you implying that I am wrong?" },
  { id: "g1666", category: "高中3500词", word: "import", phonetic: "/ɪmˈpɔːrt/", translation: "进口；输入", example: "The country imports oil." },
  { id: "g1667", category: "高中3500词", word: "importance", phonetic: "/ɪmˈpɔːrtns/", translation: "重要性", example: "She understood the importance of education." },
  { id: "g1668", category: "高中3500词", word: "important", phonetic: "/ɪmˈpɔːrtənt/", translation: "重要的", example: "It is important to study hard." },
  { id: "g1669", category: "高中3500词", word: "impose", phonetic: "/ɪmˈpəʊz/", translation: "强加；征收", example: "The government imposed a new tax." },
  { id: "g1670", category: "高中3500词", word: "impossible", phonetic: "/ɪmˈpɒsəbl/", translation: "不可能的", example: "Nothing is impossible." },
  { id: "g1671", category: "高中3500词", word: "impress", phonetic: "/ɪmˈpres/", translation: "使印象深刻", example: "She impressed the judges with her performance." },
  { id: "g1672", category: "高中3500词", word: "impression", phonetic: "/ɪmˈpreʃn/", translation: "印象", example: "She made a good impression." },
  { id: "g1673", category: "高中3500词", word: "impressive", phonetic: "/ɪmˈpresɪv/", translation: "令人印象深刻的", example: "The performance was impressive." },
  { id: "g1674", category: "高中3500词", word: "improve", phonetic: "/ɪmˈpruːv/", translation: "改善；提高", example: "We need to improve our English skills." },
  { id: "g1675", category: "高中3500词", word: "improvement", phonetic: "/ɪmˈpruːvmənt/", translation: "改进；改善", example: "There has been a great improvement." },
  { id: "g1676", category: "高中3500词", word: "in", phonetic: "/ɪn/", translation: "在……里面", example: "She is in the room." },
  { id: "g1677", category: "高中3500词", word: "incident", phonetic: "/ˈɪnsɪdənt/", translation: "事件；事故", example: "There was a strange incident at the school." },
  { id: "g1678", category: "高中3500词", word: "include", phonetic: "/ɪnˈkluːd/", translation: "包括", example: "The price includes breakfast." },
  { id: "g1679", category: "高中3500词", word: "income", phonetic: "/ˈɪnkʌm/", translation: "收入", example: "His monthly income is about 5,000 dollars." },
  { id: "g1680", category: "高中3500词", word: "increase", phonetic: "/ɪnˈkriːs/", translation: "增加；增长", example: "The population has increased rapidly." },
  { id: "g1681", category: "高中3500词", word: "increasingly", phonetic: "/ɪnˈkriːsɪŋli/", translation: "越来越", example: "It is increasingly difficult to find a job." },
  { id: "g1682", category: "高中3500词", word: "incredible", phonetic: "/ɪnˈkredəbl/", translation: "难以置信的", example: "The story was incredible." },
  { id: "g1683", category: "高中3500词", word: "indeed", phonetic: "/ɪnˈdiːd/", translation: "确实；真正地", example: "It is indeed a great honor." },
  { id: "g1684", category: "高中3500词", word: "independence", phonetic: "/ˌɪndɪˈpendəns/", translation: "独立", example: "The country gained independence." },
  { id: "g1685", category: "高中3500词", word: "independent", phonetic: "/ˌɪndɪˈpendənt/", translation: "独立的", example: "She is an independent woman." },
  { id: "g1686", category: "高中3500词", word: "indicate", phonetic: "/ˈɪndɪkeɪt/", translation: "表明；指示", example: "The survey indicates that most people agree." },
  { id: "g1687", category: "高中3500词", word: "individual", phonetic: "/ˌɪndɪˈvɪdʒuəl/", translation: "个人的；个体", example: "Each individual has different needs." },
  { id: "g1688", category: "高中3500词", word: "indoor", phonetic: "/ˈɪndɔːr/", translation: "室内的", example: "We played indoor games." },
  { id: "g1689", category: "高中3500词", word: "indoors", phonetic: "/ˌɪnˈdɔːrz/", translation: "在室内", example: "It's raining, so let's stay indoors." },
  { id: "g1690", category: "高中3500词", word: "industry", phonetic: "/ˈɪndəstri/", translation: "工业；产业", example: "The tourism industry is growing." },
  { id: "g1691", category: "高中3500词", word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", translation: "不可避免的", example: "Change is inevitable in life." },
  { id: "g1692", category: "高中3500词", word: "influence", phonetic: "/ˈɪnfluəns/", translation: "影响；势力", example: "Parents have a great influence on their children." },
  { id: "g1693", category: "高中3500词", word: "inform", phonetic: "/ɪnˈfɔːrm/", translation: "通知；告知", example: "Please inform us of any changes." },
  { id: "g1694", category: "高中3500词", word: "information", phonetic: "/ˌɪnfərˈmeɪʃn/", translation: "信息", example: "Can you give me some information?" },
  { id: "g1695", category: "高中3500词", word: "initial", phonetic: "/ɪˈnɪʃl/", translation: "最初的；首字母", example: "My initial reaction was surprise." },
  { id: "g1696", category: "高中3500词", word: "injury", phonetic: "/ˈɪndʒəri/", translation: "伤害；受伤处", example: "She suffered a serious injury." },
  { id: "g1697", category: "高中3500词", word: "inner", phonetic: "/ˈɪnər/", translation: "内部的；内心的", example: "She found inner peace." },
  { id: "g1698", category: "高中3500词", word: "innocent", phonetic: "/ˈɪnəsnt/", translation: "无辜的；天真的", example: "He was proved innocent of the crime." },
  { id: "g1699", category: "高中3500词", word: "innovate", phonetic: "/ˈɪnəveɪt/", translation: "创新", example: "Companies must innovate to stay competitive." },
  { id: "g1700", category: "高中3500词", word: "input", phonetic: "/ˈɪnpʊt/", translation: "输入", example: "We need more input from the team." },
  { id: "g1701", category: "高中3500词", word: "inquire", phonetic: "/ɪnˈkwaɪər/", translation: "询问", example: "She inquired about the schedule." },
  { id: "g1702", category: "高中3500词", word: "inquiry", phonetic: "/ɪnˈkwaɪəri/", translation: "询问；调查", example: "The police made an inquiry." },
  { id: "g1703", category: "高中3500词", word: "insect", phonetic: "/ˈɪnsekt/", translation: "昆虫", example: "Bees are useful insects." },
  { id: "g1704", category: "高中3500词", word: "insert", phonetic: "/ɪnˈsɜːrt/", translation: "插入", example: "Insert the key and turn it." },
  { id: "g1705", category: "高中3500词", word: "inside", phonetic: "/ˌɪnˈsaɪd/", translation: "里面", example: "The cat is inside the box." },
  { id: "g1706", category: "高中3500词", word: "insist", phonetic: "/ɪnˈsɪst/", translation: "坚持；强调", example: "She insisted on paying for the meal." },
  { id: "g1707", category: "高中3500词", word: "inspect", phonetic: "/ɪnˈspekt/", translation: "检查；视察", example: "The health inspector visited the restaurant." },
  { id: "g1708", category: "高中3500词", word: "inspire", phonetic: "/ɪnˈspaɪər/", translation: "激励；启发", example: "Her story inspired many young people." },
  { id: "g1709", category: "高中3500词", word: "install", phonetic: "/ɪnˈstɔːl/", translation: "安装", example: "They installed a new air conditioner." },
  { id: "g1710", category: "高中3500词", word: "instance", phonetic: "/ˈɪnstəns/", translation: "例子；实例", example: "For instance, you can use email." },
  { id: "g1711", category: "高中3500词", word: "instant", phonetic: "/ˈɪnstənt/", translation: "立即的；瞬间", example: "The internet provides instant access to information." },
  { id: "g1712", category: "高中3500词", word: "instead", phonetic: "/ɪnˈsted/", translation: "代替；反而", example: "Let's walk instead of driving." },
  { id: "g1713", category: "高中3500词", word: "institute", phonetic: "/ˈɪnstɪtjuːt/", translation: "学院；机构", example: "She works at a research institute." },
  { id: "g1714", category: "高中3500词", word: "institution", phonetic: "/ˌɪnstɪˈtjuːʃn/", translation: "机构；制度", example: "The university is a respected institution." },
  { id: "g1715", category: "高中3500词", word: "instruct", phonetic: "/ɪnˈstrʌkt/", translation: "指示；教授", example: "The teacher instructed the students to read the passage." },
  { id: "g1716", category: "高中3500词", word: "instruction", phonetic: "/ɪnˈstrʌkʃn/", translation: "指示；说明", example: "Follow the instructions carefully." },
  { id: "g1717", category: "高中3500词", word: "instrument", phonetic: "/ˈɪnstrəmənt/", translation: "乐器；工具", example: "She plays several musical instruments." },
  { id: "g1718", category: "高中3500词", word: "insurance", phonetic: "/ɪnˈʃʊərəns/", translation: "保险", example: "Do you have health insurance?" },
  { id: "g1719", category: "高中3500词", word: "intellectual", phonetic: "/ˌɪntəˈlektʃuəl/", translation: "智力的；知识分子", example: "She is an intellectual woman." },
  { id: "g1720", category: "高中3500词", word: "intelligence", phonetic: "/ɪnˈtelɪdʒəns/", translation: "智力；情报", example: "Artificial intelligence is changing the world." },
  { id: "g1721", category: "高中3500词", word: "intelligent", phonetic: "/ɪnˈtelɪdʒənt/", translation: "聪明的", example: "Dolphins are intelligent animals." },
  { id: "g1722", category: "高中3500词", word: "intend", phonetic: "/ɪnˈtend/", translation: "打算；想要", example: "I intend to study abroad next year." },
  { id: "g1723", category: "高中3500词", word: "intense", phonetic: "/ɪnˈtens/", translation: "强烈的；紧张的", example: "The competition was very intense." },
  { id: "g1724", category: "高中3500词", word: "intention", phonetic: "/ɪnˈtenʃn/", translation: "意图；目的", example: "He had no intention of hurting anyone." },
  { id: "g1725", category: "高中3500词", word: "interact", phonetic: "/ˌɪntərˈækt/", translation: "互动；交流", example: "Children learn by interacting with their environment." },
  { id: "g1726", category: "高中3500词", word: "interest", phonetic: "/ˈɪntrəst/", translation: "兴趣；利息", example: "She has a great interest in art." },
  { id: "g1727", category: "高中3500词", word: "interested", phonetic: "/ˈɪntrəstɪd/", translation: "感兴趣的", example: "I am interested in science." },
  { id: "g1728", category: "高中3500词", word: "interesting", phonetic: "/ˈɪntrəstɪŋ/", translation: "有趣的", example: "The book is very interesting." },
  { id: "g1729", category: "高中3500词", word: "interfere", phonetic: "/ˌɪntərˈfɪər/", translation: "干涉；妨碍", example: "Don't interfere in other people's affairs." },
  { id: "g1730", category: "高中3500词", word: "internal", phonetic: "/ɪnˈtɜːrnl/", translation: "内部的", example: "The internal structure is complex." },
  { id: "g1731", category: "高中3500词", word: "international", phonetic: "/ˌɪntəˈnæʃnəl/", translation: "国际的", example: "She speaks at international conferences." },
  { id: "g1732", category: "高中3500词", word: "internet", phonetic: "/ˈɪntərnet/", translation: "互联网", example: "I found the information on the internet." },
  { id: "g1733", category: "高中3500词", word: "interpret", phonetic: "/ɪnˈtɜːrprɪt/", translation: "解释；口译", example: "How do you interpret this data?" },
  { id: "g1734", category: "高中3500词", word: "interpretation", phonetic: "/ɪnˌtɜːrprɪˈteɪʃn/", translation: "解释；口译", example: "The interpretation of the law is unclear." },
  { id: "g1735", category: "高中3500词", word: "interpreter", phonetic: "/ɪnˈtɜːrprɪtər/", translation: "口译员", example: "She works as an interpreter." },
  { id: "g1736", category: "高中3500词", word: "interrupt", phonetic: "/ˌɪntəˈrʌpt/", translation: "打断；中断", example: "Please don't interrupt me while I'm speaking." },
  { id: "g1737", category: "高中3500词", word: "interval", phonetic: "/ˈɪntəvl/", translation: "间隔", example: "There was a short interval between acts." },
  { id: "g1738", category: "高中3500词", word: "interview", phonetic: "/ˈɪntərvjuː/", translation: "面试；采访", example: "She has a job interview tomorrow." },
  { id: "g1739", category: "高中3500词", word: "into", phonetic: "/ˈɪntuː/", translation: "到……里面", example: "She walked into the room." },
  { id: "g1740", category: "高中3500词", word: "introduce", phonetic: "/ˌɪntrəˈdjuːs/", translation: "介绍；引进", example: "Let me introduce myself." },
  { id: "g1741", category: "高中3500词", word: "introduction", phonetic: "/ˌɪntrəˈdʌkʃn/", translation: "介绍；引言", example: "The book has a good introduction." },
  { id: "g1742", category: "高中3500词", word: "invade", phonetic: "/ɪnˈveɪd/", translation: "入侵；侵略", example: "The army invaded the neighboring country." },
  { id: "g1743", category: "高中3500词", word: "invasion", phonetic: "/ɪnˈveɪʒn/", translation: "入侵", example: "The invasion caused a war." },
  { id: "g1744", category: "高中3500词", word: "invent", phonetic: "/ɪnˈvent/", translation: "发明", example: "Who invented the telephone?" },
  { id: "g1745", category: "高中3500词", word: "invention", phonetic: "/ɪnˈvenʃn/", translation: "发明", example: "The invention changed the world." },
  { id: "g1746", category: "高中3500词", word: "invest", phonetic: "/ɪnˈvest/", translation: "投资", example: "He invested all his money in the company." },
  { id: "g1747", category: "高中3500词", word: "investigate", phonetic: "/ɪnˈvestɪɡeɪt/", translation: "调查；研究", example: "The police are investigating the crime." },
  { id: "g1748", category: "高中3500词", word: "investigation", phonetic: "/ɪnˌvestɪˈɡeɪʃn/", translation: "调查", example: "The investigation is still ongoing." },
  { id: "g1749", category: "高中3500词", word: "investment", phonetic: "/ɪnˈvestmənt/", translation: "投资", example: "The investment paid off." },
  { id: "g1750", category: "高中3500词", word: "invisible", phonetic: "/ɪnˈvɪzəbl/", translation: "看不见的", example: "Germs are invisible to the naked eye." },
  { id: "g1751", category: "高中3500词", word: "invitation", phonetic: "/ˌɪnvɪˈteɪʃn/", translation: "邀请", example: "She received an invitation to the party." },
  { id: "g1752", category: "高中3500词", word: "invite", phonetic: "/ɪnˈvaɪt/", translation: "邀请", example: "She invited me to her birthday party." },
  { id: "g1753", category: "高中3500词", word: "involve", phonetic: "/ɪnˈvɒlv/", translation: "涉及；包含", example: "The project involves a lot of research." },
  { id: "g1754", category: "高中3500词", word: "iron", phonetic: "/ˈaɪərn/", translation: "铁；熨斗", example: "She ironed the shirt." },
  { id: "g1755", category: "高中3500词", word: "island", phonetic: "/ˈaɪlənd/", translation: "岛", example: "The island is very beautiful." },
  { id: "g1756", category: "高中3500词", word: "isolate", phonetic: "/ˈaɪsəleɪt/", translation: "隔离；孤立", example: "The patient was isolated to prevent infection." },
  { id: "g1757", category: "高中3500词", word: "issue", phonetic: "/ˈɪʃuː/", translation: "问题；发行", example: "Environmental issues are very important." },
  { id: "g1758", category: "高中3500词", word: "it", phonetic: "/ɪt/", translation: "它", example: "It is a beautiful day." },
  { id: "g1759", category: "高中3500词", word: "item", phonetic: "/ˈaɪtəm/", translation: "项目；物品", example: "The first item on the list is milk." },
  { id: "g1760", category: "高中3500词", word: "its", phonetic: "/ɪts/", translation: "它的", example: "The dog wagged its tail." },
  { id: "g1761", category: "高中3500词", word: "itself", phonetic: "/ɪtˈself/", translation: "它自己", example: "The cat washed itself." },
  { id: "g1762", category: "高中3500词", word: "jacket", phonetic: "/ˈdʒækɪt/", translation: "夹克", example: "She wore a leather jacket." },
  { id: "g1763", category: "高中3500词", word: "jam", phonetic: "/dʒæm/", translation: "果酱；拥挤", example: "She spread strawberry jam on the bread." },
  { id: "g1764", category: "高中3500词", word: "January", phonetic: "/ˈdʒænjuəri/", translation: "一月", example: "January is the first month of the year." },
  { id: "g1765", category: "高中3500词", word: "jar", phonetic: "/dʒɑːr/", translation: "罐子", example: "She kept the cookies in a jar." },
  { id: "g1766", category: "高中3500词", word: "jaw", phonetic: "/dʒɔː/", translation: "下巴；颌", example: "He broke his jaw in the accident." },
  { id: "g1767", category: "高中3500词", word: "jazz", phonetic: "/dʒæz/", translation: "爵士乐", example: "She enjoys listening to jazz." },
  { id: "g1768", category: "高中3500词", word: "jealous", phonetic: "/ˈdʒeləs/", translation: "嫉妒的", example: "Don't be jealous of others' success." },
  { id: "g1769", category: "高中3500词", word: "jeans", phonetic: "/dʒiːnz/", translation: "牛仔裤", example: "He wore jeans and a T-shirt." },
  { id: "g1770", category: "高中3500词", word: "jet", phonetic: "/dʒet/", translation: "喷气式飞机", example: "The jet flew overhead." },
  { id: "g1771", category: "高中3500词", word: "jewel", phonetic: "/ˈdʒuːəl/", translation: "宝石", example: "She wore expensive jewels." },
  { id: "g1772", category: "高中3500词", word: "jewelry", phonetic: "/ˈdʒuːəlri/", translation: "珠宝", example: "She bought some jewelry." },
  { id: "g1773", category: "高中3500词", word: "job", phonetic: "/dʒɒb/", translation: "工作", example: "She has a new job." },
  { id: "g1774", category: "高中3500词", word: "jog", phonetic: "/dʒɒɡ/", translation: "慢跑", example: "She jogs every morning." },
  { id: "g1775", category: "高中3500词", word: "join", phonetic: "/dʒɔɪn/", translation: "加入；连接", example: "She joined the club." },
  { id: "g1776", category: "高中3500词", word: "joint", phonetic: "/dʒɔɪnt/", translation: "联合的；关节", example: "They made a joint effort." },
  { id: "g1777", category: "高中3500词", word: "joke", phonetic: "/dʒəʊk/", translation: "笑话", example: "He told a funny joke." },
  { id: "g1778", category: "高中3500词", word: "journal", phonetic: "/ˈdʒɜːrnl/", translation: "日志；期刊", example: "She keeps a journal every day." },
  { id: "g1779", category: "高中3500词", word: "journalist", phonetic: "/ˈdʒɜːrnəlɪst/", translation: "记者", example: "She works as a journalist for a newspaper." },
  { id: "g1780", category: "高中3500词", word: "journey", phonetic: "/ˈdʒɜːrni/", translation: "旅程", example: "The journey took three hours." },
  { id: "g1781", category: "高中3500词", word: "joy", phonetic: "/dʒɔɪ/", translation: "欢乐；喜悦", example: "She was filled with joy." },
  { id: "g1782", category: "高中3500词", word: "judge", phonetic: "/dʒʌdʒ/", translation: "判断；法官", example: "Don't judge a person by their appearance." },
  { id: "g1783", category: "高中3500词", word: "judgment", phonetic: "/ˈdʒʌdʒmənt/", translation: "判断；判决", example: "She showed good judgment." },
  { id: "g1784", category: "高中3500词", word: "juice", phonetic: "/dʒuːs/", translation: "果汁", example: "She drank a glass of orange juice." },
  { id: "g1785", category: "高中3500词", word: "July", phonetic: "/dʒuˈlaɪ/", translation: "七月", example: "July is a hot month." },
  { id: "g1786", category: "高中3500词", word: "jump", phonetic: "/dʒʌmp/", translation: "跳", example: "She jumped over the fence." },
  { id: "g1787", category: "高中3500词", word: "June", phonetic: "/dʒuːn/", translation: "六月", example: "We graduate in June." },
  { id: "g1788", category: "高中3500词", word: "jungle", phonetic: "/ˈdʒʌŋɡl/", translation: "丛林", example: "They explored the jungle." },
  { id: "g1789", category: "高中3500词", word: "junior", phonetic: "/ˈdʒuːniər/", translation: "初级的；低年级的", example: "She is a junior student." },
  { id: "g1790", category: "高中3500词", word: "jury", phonetic: "/ˈdʒʊəri/", translation: "陪审团", example: "The jury reached a verdict." },
  { id: "g1791", category: "高中3500词", word: "just", phonetic: "/dʒʌst/", translation: "刚刚；只是", example: "I just finished my homework." },
  { id: "g1792", category: "高中3500词", word: "justice", phonetic: "/ˈdʒʌstɪs/", translation: "正义；司法", example: "Everyone deserves justice." },
  { id: "g1793", category: "高中3500词", word: "justify", phonetic: "/ˈdʒʌstɪfaɪ/", translation: "证明…正当", example: "How can you justify such behavior?" },
  { id: "g1794", category: "高中3500词", word: "keen", phonetic: "/kiːn/", translation: "热切的；敏锐的", example: "She is keen on learning new things." },
  { id: "g1795", category: "高中3500词", word: "keep", phonetic: "/kiːp/", translation: "保持；保留", example: "Keep quiet, please." },
  { id: "g1796", category: "高中3500词", word: "key", phonetic: "/kiː/", translation: "钥匙；关键的", example: "This is the key to success." },
  { id: "g1797", category: "高中3500词", word: "keyboard", phonetic: "/ˈkiːbɔːrd/", translation: "键盘", example: "She typed on the keyboard." },
  { id: "g1798", category: "高中3500词", word: "kick", phonetic: "/kɪk/", translation: "踢", example: "He kicked the ball." },
  { id: "g1799", category: "高中3500词", word: "kid", phonetic: "/kɪd/", translation: "小孩；开玩笑", example: "She has three kids." },
  { id: "g1800", category: "高中3500词", word: "kidnap", phonetic: "/ˈkɪdnæp/", translation: "绑架", example: "The child was kidnapped." },
  { id: "g1801", category: "高中3500词", word: "kill", phonetic: "/kɪl/", translation: "杀死", example: "The cold weather killed the plants." },
  { id: "g1802", category: "高中3500词", word: "kilogram", phonetic: "/ˈkɪləɡræm/", translation: "千克", example: "She bought two kilograms of apples." },
  { id: "g1803", category: "高中3500词", word: "kilometer", phonetic: "/ˈkɪləmiːtər/", translation: "千米", example: "The distance is five kilometers." },
  { id: "g1804", category: "高中3500词", word: "kind", phonetic: "/kaɪnd/", translation: "种类；善良的", example: "She is a kind person." },
  { id: "g1805", category: "高中3500词", word: "kindergarten", phonetic: "/ˈkɪndərɡɑːrtən/", translation: "幼儿园", example: "The child goes to kindergarten." },
  { id: "g1806", category: "高中3500词", word: "kindness", phonetic: "/ˈkaɪndnəs/", translation: "善良；好意", example: "She showed great kindness." },
  { id: "g1807", category: "高中3500词", word: "king", phonetic: "/kɪŋ/", translation: "国王", example: "The king ruled wisely." },
  { id: "g1808", category: "高中3500词", word: "kingdom", phonetic: "/ˈkɪŋdəm/", translation: "王国", example: "The United Kingdom is in Europe." },
  { id: "g1809", category: "高中3500词", word: "kiss", phonetic: "/kɪs/", translation: "吻", example: "She kissed her mother goodbye." },
  { id: "g1810", category: "高中3500词", word: "kitchen", phonetic: "/ˈkɪtʃɪn/", translation: "厨房", example: "She is cooking in the kitchen." },
  { id: "g1811", category: "高中3500词", word: "kite", phonetic: "/kaɪt/", translation: "风筝", example: "The children flew kites." },
  { id: "g1812", category: "高中3500词", word: "knee", phonetic: "/niː/", translation: "膝盖", example: "She fell and hurt her knee." },
  { id: "g1813", category: "高中3500词", word: "knife", phonetic: "/naɪf/", translation: "刀", example: "She cut the bread with a knife." },
  { id: "g1814", category: "高中3500词", word: "knock", phonetic: "/nɒk/", translation: "敲；击", example: "Someone is knocking at the door." },
  { id: "g1815", category: "高中3500词", word: "know", phonetic: "/nəʊ/", translation: "知道；认识", example: "I know the answer." },
  { id: "g1816", category: "高中3500词", word: "knowledge", phonetic: "/ˈnɒlɪdʒ/", translation: "知识", example: "Knowledge is power." },
  { id: "g1817", category: "高中3500词", word: "lab", phonetic: "/læb/", translation: "实验室", example: "She works in the lab." },
  { id: "g1818", category: "高中3500词", word: "label", phonetic: "/ˈleɪbl/", translation: "标签；标注", example: "Read the label before taking the medicine." },
  { id: "g1819", category: "高中3500词", word: "labor", phonetic: "/ˈleɪbər/", translation: "劳动", example: "Manual labor is hard work." },
  { id: "g1820", category: "高中3500词", word: "lack", phonetic: "/læk/", translation: "缺乏；不足", example: "The project failed due to lack of funds." },
  { id: "g1821", category: "高中3500词", word: "lad", phonetic: "/læd/", translation: "少年；小伙子", example: "He is a bright young lad." },
  { id: "g1822", category: "高中3500词", word: "ladder", phonetic: "/ˈlædər/", translation: "梯子", example: "She climbed the ladder." },
  { id: "g1823", category: "高中3500词", word: "lady", phonetic: "/ˈleɪdi/", translation: "女士；夫人", example: "She is a kind old lady." },
  { id: "g1824", category: "高中3500词", word: "lake", phonetic: "/leɪk/", translation: "湖", example: "We swam in the lake." },
  { id: "g1825", category: "高中3500词", word: "lamb", phonetic: "/læm/", translation: "小羊；羊肉", example: "The lamb was following its mother." },
  { id: "g1826", category: "高中3500词", word: "lame", phonetic: "/leɪm/", translation: "跛的；站不住脚的", example: "The horse went lame." },
  { id: "g1827", category: "高中3500词", word: "lamp", phonetic: "/læmp/", translation: "灯", example: "She turned on the lamp." },
  { id: "g1828", category: "高中3500词", word: "land", phonetic: "/lænd/", translation: "陆地；着陆", example: "The plane landed safely." },
  { id: "g1829", category: "高中3500词", word: "landlord", phonetic: "/ˈlændlɔːrd/", translation: "房东；地主", example: "The landlord collected the rent." },
  { id: "g1830", category: "高中3500词", word: "landscape", phonetic: "/ˈlændskeɪp/", translation: "风景；景观", example: "The landscape of the countryside is beautiful." },
  { id: "g1831", category: "高中3500词", word: "lane", phonetic: "/leɪn/", translation: "小巷；车道", example: "The car was in the fast lane." },
  { id: "g1832", category: "高中3500词", word: "language", phonetic: "/ˈlæŋɡwɪdʒ/", translation: "语言", example: "She speaks three languages." },
  { id: "g1833", category: "高中3500词", word: "lantern", phonetic: "/ˈlæntərn/", translation: "灯笼", example: "We hung lanterns for the festival." },
  { id: "g1834", category: "高中3500词", word: "laptop", phonetic: "/ˈlæptɒp/", translation: "笔记本电脑", example: "She brought her laptop to class." },
  { id: "g1835", category: "高中3500词", word: "large", phonetic: "/lɑːrdʒ/", translation: "大的", example: "They live in a large house." },
  { id: "g1836", category: "高中3500词", word: "last", phonetic: "/lɑːst/", translation: "最后的；持续", example: "She was the last to arrive." },
  { id: "g1837", category: "高中3500词", word: "late", phonetic: "/leɪt/", translation: "迟的；晚的", example: "She was late for school." },
  { id: "g1838", category: "高中3500词", word: "lately", phonetic: "/ˈleɪtli/", translation: "最近", example: "Have you seen him lately?" },
  { id: "g1839", category: "高中3500词", word: "later", phonetic: "/ˈleɪtər/", translation: "后来", example: "We can discuss it later." },
  { id: "g1840", category: "高中3500词", word: "latter", phonetic: "/ˈlætər/", translation: "后者的", example: "Of the two, I prefer the latter." },
  { id: "g1841", category: "高中3500词", word: "laugh", phonetic: "/lɑːf/", translation: "笑", example: "She laughed at the joke." },
  { id: "g1842", category: "高中3500词", word: "laughter", phonetic: "/ˈlɑːftər/", translation: "笑声", example: "The room was filled with laughter." },
  { id: "g1843", category: "高中3500词", word: "launch", phonetic: "/lɔːntʃ/", translation: "发射；发起", example: "They launched a new product last week." },
  { id: "g1844", category: "高中3500词", word: "laundry", phonetic: "/ˈlɔːndri/", translation: "洗衣店；要洗的衣服", example: "She did the laundry." },
  { id: "g1845", category: "高中3500词", word: "law", phonetic: "/lɔː/", translation: "法律", example: "Everyone must obey the law." },
  { id: "g1846", category: "高中3500词", word: "lawn", phonetic: "/lɔːn/", translation: "草坪", example: "The children played on the lawn." },
  { id: "g1847", category: "高中3500词", word: "lawyer", phonetic: "/ˈlɔːjər/", translation: "律师", example: "She hired a lawyer." },
  { id: "g1848", category: "高中3500词", word: "lay", phonetic: "/leɪ/", translation: "放置；下蛋", example: "She laid the book on the table." },
  { id: "g1849", category: "高中3500词", word: "layer", phonetic: "/ˈleɪər/", translation: "层", example: "There was a layer of dust on the table." },
  { id: "g1850", category: "高中3500词", word: "lazy", phonetic: "/ˈleɪzi/", translation: "懒惰的", example: "He is too lazy to exercise." },
  { id: "g1851", category: "高中3500词", word: "lead", phonetic: "/liːd/", translation: "领导；导致", example: "She leads the team." },
  { id: "g1852", category: "高中3500词", word: "leader", phonetic: "/ˈliːdər/", translation: "领导者", example: "She is a natural leader." },
  { id: "g1853", category: "高中3500词", word: "leadership", phonetic: "/ˈliːdərʃɪp/", translation: "领导力", example: "She showed great leadership." },
  { id: "g1854", category: "高中3500词", word: "leaf", phonetic: "/liːf/", translation: "叶子", example: "The leaves turn yellow in autumn." },
  { id: "g1855", category: "高中3500词", word: "league", phonetic: "/liːɡ/", translation: "联盟", example: "She plays in the basketball league." },
  { id: "g1856", category: "高中3500词", word: "leak", phonetic: "/liːk/", translation: "泄漏", example: "The pipe is leaking." },
  { id: "g1857", category: "高中3500词", word: "lean", phonetic: "/liːn/", translation: "倚靠；瘦的", example: "She leaned against the wall." },
  { id: "g1858", category: "高中3500词", word: "leap", phonetic: "/liːp/", translation: "跳跃", example: "The cat leaped over the fence." },
  { id: "g1859", category: "高中3500词", word: "learn", phonetic: "/lɜːrn/", translation: "学习", example: "She learns quickly." },
  { id: "g1860", category: "高中3500词", word: "learned", phonetic: "/ˈlɜːrnd/", translation: "有学问的", example: "He is a learned professor." },
  { id: "g1861", category: "高中3500词", word: "least", phonetic: "/liːst/", translation: "最少的", example: "At least we tried." },
  { id: "g1862", category: "高中3500词", word: "leather", phonetic: "/ˈleðər/", translation: "皮革", example: "She bought a leather bag." },
  { id: "g1863", category: "高中3500词", word: "leave", phonetic: "/liːv/", translation: "离开；留下", example: "She left the room quietly." },
  { id: "g1864", category: "高中3500词", word: "lecture", phonetic: "/ˈlektʃər/", translation: "讲座；演讲", example: "The professor gave a lecture on history." },
  { id: "g1865", category: "高中3500词", word: "left", phonetic: "/left/", translation: "左边的；离开", example: "Turn left at the corner." },
  { id: "g1866", category: "高中3500词", word: "leg", phonetic: "/leɡ/", translation: "腿", example: "She broke her leg." },
  { id: "g1867", category: "高中3500词", word: "legal", phonetic: "/ˈliːɡl/", translation: "合法的；法律的", example: "Is it legal to download this file?" },
  { id: "g1868", category: "高中3500词", word: "legend", phonetic: "/ˈledʒənd/", translation: "传说；传奇", example: "The legend of Robin Hood is well known." },
  { id: "g1869", category: "高中3500词", word: "leisure", phonetic: "/ˈleʒər/", translation: "闲暇；休闲", example: "He enjoys reading in his leisure time." },
  { id: "g1870", category: "高中3500词", word: "lemon", phonetic: "/ˈlemən/", translation: "柠檬", example: "She added lemon to her tea." },
  { id: "g1871", category: "高中3500词", word: "lend", phonetic: "/lend/", translation: "借出", example: "Can you lend me some money?" },
  { id: "g1872", category: "高中3500词", word: "length", phonetic: "/leŋθ/", translation: "长度", example: "The length of the road is 10 km." },
  { id: "g1873", category: "高中3500词", word: "lesson", phonetic: "/ˈlesn/", translation: "课；教训", example: "We learned a valuable lesson." },
  { id: "g1874", category: "高中3500词", word: "let", phonetic: "/let/", translation: "让", example: "Let me help you." },
  { id: "g1875", category: "高中3500词", word: "letter", phonetic: "/ˈletər/", translation: "信；字母", example: "She wrote a letter to her friend." },
  { id: "g1876", category: "高中3500词", word: "level", phonetic: "/ˈlevl/", translation: "水平；等级", example: "The water level is rising." },
  { id: "g1877", category: "高中3500词", word: "liberty", phonetic: "/ˈlɪbərti/", translation: "自由", example: "Everyone has the right to liberty." },
  { id: "g1878", category: "高中3500词", word: "librarian", phonetic: "/laɪˈbreəriən/", translation: "图书管理员", example: "The librarian helped me find the book." },
  { id: "g1879", category: "高中3500词", word: "library", phonetic: "/ˈlaɪbrəri/", translation: "图书馆", example: "She studies in the library." },
  { id: "g1880", category: "高中3500词", word: "license", phonetic: "/ˈlaɪsns/", translation: "执照；许可证", example: "You need a license to drive a car." },
  { id: "g1881", category: "高中3500词", word: "lid", phonetic: "/lɪd/", translation: "盖子", example: "She took the lid off the pot." },
  { id: "g1882", category: "高中3500词", word: "lie", phonetic: "/laɪ/", translation: "躺；说谎", example: "She lay on the grass." },
  { id: "g1883", category: "高中3500词", word: "life", phonetic: "/laɪf/", translation: "生命；生活", example: "Life is beautiful." },
  { id: "g1884", category: "高中3500词", word: "lifestyle", phonetic: "/ˈlaɪfstaɪl/", translation: "生活方式", example: "She has a healthy lifestyle." },
  { id: "g1885", category: "高中3500词", word: "lifetime", phonetic: "/ˈlaɪftaɪm/", translation: "一生", example: "It was a once-in-a-lifetime opportunity." },
  { id: "g1886", category: "高中3500词", word: "lift", phonetic: "/lɪft/", translation: "举起；电梯", example: "Can you lift this box?" },
  { id: "g1887", category: "高中3500词", word: "light", phonetic: "/laɪt/", translation: "光；轻的", example: "Turn on the light, please." },
  { id: "g1888", category: "高中3500词", word: "lightning", phonetic: "/ˈlaɪtnɪŋ/", translation: "闪电", example: "The lightning lit up the sky." },
  { id: "g1889", category: "高中3500词", word: "like", phonetic: "/laɪk/", translation: "喜欢；像", example: "I like reading books." },
  { id: "g1890", category: "高中3500词", word: "likely", phonetic: "/ˈlaɪkli/", translation: "可能的", example: "It is likely to rain tomorrow." },
  { id: "g1891", category: "高中3500词", word: "limit", phonetic: "/ˈlɪmɪt/", translation: "限制；界限", example: "There is a speed limit on this road." },
  { id: "g1892", category: "高中3500词", word: "limitation", phonetic: "/ˌlɪmɪˈteɪʃn/", translation: "限制；局限性", example: "We must accept our limitations." },
  { id: "g1893", category: "高中3500词", word: "line", phonetic: "/laɪn/", translation: "线；排", example: "Please stand in line." },
  { id: "g1894", category: "高中3500词", word: "link", phonetic: "/lɪŋk/", translation: "联系；连接", example: "Police linked the two crimes together." },
  { id: "g1895", category: "高中3500词", word: "lion", phonetic: "/ˈlaɪən/", translation: "狮子", example: "The lion is the king of the jungle." },
  { id: "g1896", category: "高中3500词", word: "lip", phonetic: "/lɪp/", translation: "嘴唇", example: "She had a smile on her lips." },
  { id: "g1897", category: "高中3500词", word: "liquid", phonetic: "/ˈlɪkwɪd/", translation: "液体", example: "Water is a liquid." },
  { id: "g1898", category: "高中3500词", word: "list", phonetic: "/lɪst/", translation: "列表；列出", example: "She made a shopping list." },
  { id: "g1899", category: "高中3500词", word: "listen", phonetic: "/ˈlɪsn/", translation: "听", example: "Listen carefully to the teacher." },
  { id: "g1900", category: "高中3500词", word: "literacy", phonetic: "/ˈlɪtərəsi/", translation: "读写能力", example: "Adult literacy rates have improved." },
  { id: "g1901", category: "高中3500词", word: "literary", phonetic: "/ˈlɪtərəri/", translation: "文学的", example: "She has a literary talent." },
  { id: "g1902", category: "高中3500词", word: "literature", phonetic: "/ˈlɪtrətʃər/", translation: "文学", example: "She has a deep love for English literature." },
  { id: "g1903", category: "高中3500词", word: "litter", phonetic: "/ˈlɪtər/", translation: "垃圾；乱丢", example: "Don't litter the park." },
  { id: "g1904", category: "高中3500词", word: "little", phonetic: "/ˈlɪtl/", translation: "小的；少的", example: "She has little time." },
  { id: "g1905", category: "高中3500词", word: "live", phonetic: "/lɪv/", translation: "居住；活的", example: "She lives in Beijing." },
  { id: "g1906", category: "高中3500词", word: "lively", phonetic: "/ˈlaɪvli/", translation: "活泼的", example: "She has a lively personality." },
  { id: "g1907", category: "高中3500词", word: "living", phonetic: "/ˈlɪvɪŋ/", translation: "活着的；生计", example: "She makes a living as a teacher." },
  { id: "g1908", category: "高中3500词", word: "load", phonetic: "/ləʊd/", translation: "装载；负担", example: "She loaded the boxes onto the truck." },
  { id: "g1909", category: "高中3500词", word: "loaf", phonetic: "/ləʊf/", translation: "一条面包", example: "She bought a loaf of bread." },
  { id: "g1910", category: "高中3500词", word: "loan", phonetic: "/ləʊn/", translation: "贷款；借出", example: "She took out a loan to buy a house." },
  { id: "g1911", category: "高中3500词", word: "local", phonetic: "/ˈləʊkl/", translation: "当地的", example: "She shops at the local market." },
  { id: "g1912", category: "高中3500词", word: "locate", phonetic: "/ləʊˈkeɪt/", translation: "定位；位于", example: "The office is located in the city center." },
  { id: "g1913", category: "高中3500词", word: "location", phonetic: "/ləʊˈkeɪʃn/", translation: "位置", example: "This is a good location for a shop." },
  { id: "g1914", category: "高中3500词", word: "lock", phonetic: "/lɒk/", translation: "锁", example: "Lock the door when you leave." },
  { id: "g1915", category: "高中3500词", word: "lodge", phonetic: "/lɒdʒ/", translation: "住宿；小屋", example: "We lodged at a small inn." },
  { id: "g1916", category: "高中3500词", word: "log", phonetic: "/lɒɡ/", translation: "原木；日志", example: "She kept a log of her journey." },
  { id: "g1917", category: "高中3500词", word: "logic", phonetic: "/ˈlɒdʒɪk/", translation: "逻辑", example: "His argument lacks logic." },
  { id: "g1918", category: "高中3500词", word: "logical", phonetic: "/ˈlɒdʒɪkl/", translation: "逻辑的；合理的", example: "Your argument is not logical." },
  { id: "g1919", category: "高中3500词", word: "lonely", phonetic: "/ˈləʊnli/", translation: "孤独的", example: "She felt lonely in the new city." },
  { id: "g1920", category: "高中3500词", word: "long", phonetic: "/lɒŋ/", translation: "长的；渴望", example: "She has long hair." },
  { id: "g1921", category: "高中3500词", word: "look", phonetic: "/lʊk/", translation: "看；看起来", example: "Look at the blackboard." },
  { id: "g1922", category: "高中3500词", word: "loose", phonetic: "/luːs/", translation: "松的", example: "The button is loose." },
  { id: "g1923", category: "高中3500词", word: "lord", phonetic: "/lɔːrd/", translation: "领主；上帝", example: "The lord of the manor." },
  { id: "g1924", category: "高中3500词", word: "lorry", phonetic: "/ˈlɒri/", translation: "卡车", example: "The lorry carried goods." },
  { id: "g1925", category: "高中3500词", word: "lose", phonetic: "/luːz/", translation: "失去；输", example: "She lost her keys." },
  { id: "g1926", category: "高中3500词", word: "loss", phonetic: "/lɒs/", translation: "损失", example: "The company suffered a loss." },
  { id: "g1927", category: "高中3500词", word: "lot", phonetic: "/lɒt/", translation: "许多", example: "She has a lot of friends." },
  { id: "g1928", category: "高中3500词", word: "loud", phonetic: "/laʊd/", translation: "大声的", example: "The music was too loud." },
  { id: "g1929", category: "高中3500词", word: "love", phonetic: "/lʌv/", translation: "爱", example: "She loves her family." },
  { id: "g1930", category: "高中3500词", word: "lovely", phonetic: "/ˈlʌvli/", translation: "可爱的", example: "What a lovely day!" },
  { id: "g1931", category: "高中3500词", word: "low", phonetic: "/ləʊ/", translation: "低的", example: "The temperature is very low." },
  { id: "g1932", category: "高中3500词", word: "lower", phonetic: "/ˈləʊər/", translation: "较低的；降低", example: "She lowered her voice." },
  { id: "g1933", category: "高中3500词", word: "luck", phonetic: "/lʌk/", translation: "运气", example: "Good luck with your exam!" },
  { id: "g1934", category: "高中3500词", word: "lucky", phonetic: "/ˈlʌki/", translation: "幸运的", example: "She is very lucky." },
  { id: "g1935", category: "高中3500词", word: "luggage", phonetic: "/ˈlʌɡɪdʒ/", translation: "行李", example: "She carried her luggage." },
  { id: "g1936", category: "高中3500词", word: "lump", phonetic: "/lʌmp/", translation: "块；肿块", example: "She found a lump of sugar." },
  { id: "g1937", category: "高中3500词", word: "lunch", phonetic: "/lʌntʃ/", translation: "午餐", example: "We had lunch at noon." },
  { id: "g1938", category: "高中3500词", word: "lung", phonetic: "/lʌŋ/", translation: "肺", example: "Smoking damages your lungs." },
  { id: "g1939", category: "高中3500词", word: "machine", phonetic: "/məˈʃiːn/", translation: "机器", example: "The machine is out of order." },
  { id: "g1940", category: "高中3500词", word: "mad", phonetic: "/mæd/", translation: "疯狂的；生气的", example: "She was mad with anger." },
  { id: "g1941", category: "高中3500词", word: "magazine", phonetic: "/ˌmæɡəˈziːn/", translation: "杂志", example: "She reads fashion magazines." },
  { id: "g1942", category: "高中3500词", word: "magic", phonetic: "/ˈmædʒɪk/", translation: "魔法；魔术", example: "The magician performed magic tricks." },
  { id: "g1943", category: "高中3500词", word: "magical", phonetic: "/ˈmædʒɪkl/", translation: "有魔力的", example: "The view was magical." },
  { id: "g1944", category: "高中3500词", word: "maid", phonetic: "/meɪd/", translation: "女仆", example: "The maid cleaned the room." },
  { id: "g1945", category: "高中3500词", word: "mail", phonetic: "/meɪl/", translation: "邮件；邮寄", example: "She sent the letter by mail." },
  { id: "g1946", category: "高中3500词", word: "mailbox", phonetic: "/ˈmeɪlbɒks/", translation: "邮箱", example: "Check the mailbox for letters." },
  { id: "g1947", category: "高中3500词", word: "main", phonetic: "/meɪn/", translation: "主要的", example: "The main reason is the cost." },
  { id: "g1948", category: "高中3500词", word: "mainland", phonetic: "/ˈmeɪnlænd/", translation: "大陆", example: "She traveled to the mainland." },
  { id: "g1949", category: "高中3500词", word: "mainly", phonetic: "/ˈmeɪnli/", translation: "主要地", example: "The audience was mainly students." },
  { id: "g1950", category: "高中3500词", word: "maintain", phonetic: "/meɪnˈteɪn/", translation: "维持；保养", example: "It is important to maintain a healthy lifestyle." },
  { id: "g1951", category: "高中3500词", word: "major", phonetic: "/ˈmeɪdʒər/", translation: "主要的；专业", example: "English is my major at university." },
  { id: "g1952", category: "高中3500词", word: "majority", phonetic: "/məˈdʒɒrəti/", translation: "多数", example: "The majority of students passed." },
  { id: "g1953", category: "高中3500词", word: "make", phonetic: "/meɪk/", translation: "制作；使", example: "She made a cake." },
  { id: "g1954", category: "高中3500词", word: "male", phonetic: "/meɪl/", translation: "男性的；男性", example: "The male bird is more colorful." },
  { id: "g1955", category: "高中3500词", word: "mall", phonetic: "/mɔːl/", translation: "购物中心", example: "We went shopping at the mall." },
  { id: "g1956", category: "高中3500词", word: "man", phonetic: "/mæn/", translation: "男人", example: "He is a kind man." },
  { id: "g1957", category: "高中3500词", word: "manage", phonetic: "/ˈmænɪdʒ/", translation: "管理；设法", example: "She manages the company very well." },
  { id: "g1958", category: "高中3500词", word: "management", phonetic: "/ˈmænɪdʒmənt/", translation: "管理", example: "The management decided to cut costs." },
  { id: "g1959", category: "高中3500词", word: "manager", phonetic: "/ˈmænɪdʒər/", translation: "经理", example: "She is the hotel manager." },
  { id: "g1960", category: "高中3500词", word: "manner", phonetic: "/ˈmænər/", translation: "方式；礼貌", example: "She has good manners." },
  { id: "g1961", category: "高中3500词", word: "manufacture", phonetic: "/ˌmænjuˈfæktʃər/", translation: "制造；生产", example: "The factory manufactures electronic goods." },
  { id: "g1962", category: "高中3500词", word: "many", phonetic: "/ˈmeni/", translation: "许多", example: "How many students are there?" },
  { id: "g1963", category: "高中3500词", word: "map", phonetic: "/mæp/", translation: "地图", example: "She looked at the map." },
  { id: "g1964", category: "高中3500词", word: "march", phonetic: "/mɑːrtʃ/", translation: "行军；三月", example: "The soldiers marched forward." },
  { id: "g1965", category: "高中3500词", word: "margin", phonetic: "/ˈmɑːrdʒɪn/", translation: "边缘；利润", example: "Write in the margin of the page." },
  { id: "g1966", category: "高中3500词", word: "mark", phonetic: "/mɑːrk/", translation: "标记；分数", example: "She got high marks in the exam." },
  { id: "g1967", category: "高中3500词", word: "market", phonetic: "/ˈmɑːrkɪt/", translation: "市场", example: "She went to the market." },
  { id: "g1968", category: "高中3500词", word: "marriage", phonetic: "/ˈmærɪdʒ/", translation: "婚姻", example: "Their marriage is happy." },
  { id: "g1969", category: "高中3500词", word: "married", phonetic: "/ˈmærid/", translation: "已婚的", example: "She is married with two children." },
  { id: "g1970", category: "高中3500词", word: "marry", phonetic: "/ˈmæri/", translation: "结婚", example: "She married her college sweetheart." },
  { id: "g1971", category: "高中3500词", word: "mask", phonetic: "/mɑːsk/", translation: "面具；口罩", example: "She wore a mask at the party." },
  { id: "g1972", category: "高中3500词", word: "mass", phonetic: "/mæs/", translation: "大量；群众", example: "There were masses of people." },
  { id: "g1973", category: "高中3500词", word: "master", phonetic: "/ˈmɑːstər/", translation: "掌握；大师", example: "She has mastered three foreign languages." },
  { id: "g1974", category: "高中3500词", word: "mat", phonetic: "/mæt/", translation: "垫子", example: "She wiped her feet on the mat." },
  { id: "g1975", category: "高中3500词", word: "match", phonetic: "/mætʃ/", translation: "比赛；匹配", example: "Our team won the match." },
  { id: "g1976", category: "高中3500词", word: "mate", phonetic: "/meɪt/", translation: "伙伴；配偶", example: "She is his mate." },
  { id: "g1977", category: "高中3500词", word: "material", phonetic: "/məˈtɪəriəl/", translation: "材料；物质的", example: "What material is this made of?" },
  { id: "g1978", category: "高中3500词", word: "math", phonetic: "/mæθ/", translation: "数学", example: "She is good at math." },
  { id: "g1979", category: "高中3500词", word: "matter", phonetic: "/ˈmætər/", translation: "事情；重要", example: "What is the matter?" },
  { id: "g1980", category: "高中3500词", word: "mature", phonetic: "/məˈtʃʊər/", translation: "成熟的", example: "He is very mature for his age." },
  { id: "g1981", category: "高中3500词", word: "maximum", phonetic: "/ˈmæksɪməm/", translation: "最大的；最大值", example: "The maximum speed is 120 km/h." },
  { id: "g1982", category: "高中3500词", word: "may", phonetic: "/meɪ/", translation: "可以；可能", example: "May I come in?" },
  { id: "g1983", category: "高中3500词", word: "maybe", phonetic: "/ˈmeɪbi/", translation: "也许", example: "Maybe it will rain tomorrow." },
  { id: "g1984", category: "高中3500词", word: "mayor", phonetic: "/meər/", translation: "市长", example: "The mayor gave a speech." },
  { id: "g1985", category: "高中3500词", word: "me", phonetic: "/miː/", translation: "我", example: "Give it to me." },
  { id: "g1986", category: "高中3500词", word: "meal", phonetic: "/miːl/", translation: "一餐", example: "We had a big meal." },
  { id: "g1987", category: "高中3500词", word: "mean", phonetic: "/miːn/", translation: "意味着；刻薄的", example: "What does this word mean?" },
  { id: "g1988", category: "高中3500词", word: "meaning", phonetic: "/ˈmiːnɪŋ/", translation: "意思；意义", example: "What is the meaning of life?" },
  { id: "g1989", category: "高中3500词", word: "means", phonetic: "/miːnz/", translation: "手段；方法", example: "By means of hard work, she succeeded." },
  { id: "g1990", category: "高中3500词", word: "meanwhile", phonetic: "/ˈmiːnwaɪl/", translation: "同时", example: "Meanwhile, the children were playing." },
  { id: "g1991", category: "高中3500词", word: "measure", phonetic: "/ˈmeʒər/", translation: "测量；措施", example: "We must take measures to reduce pollution." },
  { id: "g1992", category: "高中3500词", word: "measurement", phonetic: "/ˈmeʒərmənt/", translation: "测量；尺寸", example: "The measurements are accurate." },
  { id: "g1993", category: "高中3500词", word: "meat", phonetic: "/miːt/", translation: "肉", example: "She does not eat meat." },
  { id: "g1994", category: "高中3500词", word: "medal", phonetic: "/ˈmedl/", translation: "奖牌", example: "She won a gold medal." },
  { id: "g1995", category: "高中3500词", word: "media", phonetic: "/ˈmiːdiə/", translation: "媒体", example: "The news spread quickly through social media." },
  { id: "g1996", category: "高中3500词", word: "medical", phonetic: "/ˈmedɪkl/", translation: "医学的", example: "She needs medical attention." },
  { id: "g1997", category: "高中3500词", word: "medicine", phonetic: "/ˈmedɪsn/", translation: "药物；医学", example: "Take the medicine three times a day." },
  { id: "g1998", category: "高中3500词", word: "medium", phonetic: "/ˈmiːdiəm/", translation: "中等的；媒介", example: "She prefers a medium size." },
  { id: "g1999", category: "高中3500词", word: "meet", phonetic: "/miːt/", translation: "遇见；满足", example: "Nice to meet you." },
  { id: "g2000", category: "高中3500词", word: "meeting", phonetic: "/ˈmiːtɪŋ/", translation: "会议", example: "The meeting starts at 2 pm." },
  { id: "g2001", category: "高中3500词", word: "melon", phonetic: "/ˈmelən/", translation: "瓜", example: "She bought a watermelon." },
  { id: "g2002", category: "高中3500词", word: "member", phonetic: "/ˈmembər/", translation: "成员", example: "She is a member of the club." },
  { id: "g2003", category: "高中3500词", word: "memorial", phonetic: "/məˈmɔːriəl/", translation: "纪念的；纪念碑", example: "They built a memorial to the heroes." },
  { id: "g2004", category: "高中3500词", word: "memory", phonetic: "/ˈmeməri/", translation: "记忆", example: "She has a good memory." },
  { id: "g2005", category: "高中3500词", word: "mend", phonetic: "/mend/", translation: "修理", example: "She mended the torn shirt." },
  { id: "g2006", category: "高中3500词", word: "mental", phonetic: "/ˈmentl/", translation: "精神的；心理的", example: "Mental health is as important as physical health." },
  { id: "g2007", category: "高中3500词", word: "mention", phonetic: "/ˈmenʃn/", translation: "提到；提及", example: "He didn't mention anything about the trip." },
  { id: "g2008", category: "高中3500词", word: "menu", phonetic: "/ˈmenjuː/", translation: "菜单", example: "Can I see the menu, please?" },
  { id: "g2009", category: "高中3500词", word: "merchant", phonetic: "/ˈmɜːrtʃənt/", translation: "商人", example: "The merchant traded in silk." },
  { id: "g2010", category: "高中3500词", word: "mercy", phonetic: "/ˈmɜːrsi/", translation: "怜悯；仁慈", example: "They showed no mercy to the enemy." },
  { id: "g2011", category: "高中3500词", word: "mere", phonetic: "/mɪər/", translation: "仅仅的", example: "She is a mere child." },
  { id: "g2012", category: "高中3500词", word: "merely", phonetic: "/ˈmɪəli/", translation: "仅仅；只不过", example: "He is merely a child." },
  { id: "g2013", category: "高中3500词", word: "mess", phonetic: "/mes/", translation: "混乱", example: "The room was in a mess." },
  { id: "g2014", category: "高中3500词", word: "message", phonetic: "/ˈmesɪdʒ/", translation: "消息；信息", example: "She left a message for you." },
  { id: "g2015", category: "高中3500词", word: "metal", phonetic: "/ˈmetl/", translation: "金属", example: "Gold is a precious metal." },
  { id: "g2016", category: "高中3500词", word: "method", phonetic: "/ˈmeθəd/", translation: "方法；办法", example: "We need a new method of teaching." },
  { id: "g2017", category: "高中3500词", word: "midday", phonetic: "/ˌmɪdˈdeɪ/", translation: "正午", example: "We had lunch at midday." },
  { id: "g2018", category: "高中3500词", word: "middle", phonetic: "/ˈmɪdl/", translation: "中间的", example: "She sat in the middle of the row." },
  { id: "g2019", category: "高中3500词", word: "midnight", phonetic: "/ˈmɪdnaɪt/", translation: "午夜", example: "He arrived at midnight." },
  { id: "g2020", category: "高中3500词", word: "might", phonetic: "/maɪt/", translation: "可能；力量", example: "It might rain tomorrow." },
  { id: "g2021", category: "高中3500词", word: "mild", phonetic: "/maɪld/", translation: "温和的", example: "The weather is mild in spring." },
  { id: "g2022", category: "高中3500词", word: "military", phonetic: "/ˈmɪlətri/", translation: "军事的；军队", example: "He served in the military for ten years." },
  { id: "g2023", category: "高中3500词", word: "milk", phonetic: "/mɪlk/", translation: "牛奶", example: "She drinks milk every day." },
  { id: "g2024", category: "高中3500词", word: "mill", phonetic: "/mɪl/", translation: "磨坊；工厂", example: "The old mill is now a museum." },
  { id: "g2025", category: "高中3500词", word: "million", phonetic: "/ˈmɪljən/", translation: "百万", example: "She made a million dollars." },
  { id: "g2026", category: "高中3500词", word: "mind", phonetic: "/maɪnd/", translation: "头脑；介意", example: "Would you mind opening the window?" },
  { id: "g2027", category: "高中3500词", word: "mine", phonetic: "/maɪn/", translation: "我的；矿", example: "The book is mine." },
  { id: "g2028", category: "高中3500词", word: "mineral", phonetic: "/ˈmɪnərəl/", translation: "矿物", example: "Minerals are essential for health." },
  { id: "g2029", category: "高中3500词", word: "minimum", phonetic: "/ˈmɪnɪməm/", translation: "最小的；最小值", example: "The minimum wage has been raised." },
  { id: "g2030", category: "高中3500词", word: "minister", phonetic: "/ˈmɪnɪstər/", translation: "部长；牧师", example: "The prime minister held a press conference." },
  { id: "g2031", category: "高中3500词", word: "minor", phonetic: "/ˈmaɪnər/", translation: "较小的；次要的", example: "There were only minor injuries in the accident." },
  { id: "g2032", category: "高中3500词", word: "minority", phonetic: "/maɪˈnɒrəti/", translation: "少数；少数民族", example: "Only a minority voted against it." },
  { id: "g2033", category: "高中3500词", word: "minus", phonetic: "/ˈmaɪnəs/", translation: "减；负的", example: "Five minus three equals two." },
  { id: "g2034", category: "高中3500词", word: "minute", phonetic: "/ˈmɪnɪt/", translation: "分钟", example: "Wait a minute, please." },
  { id: "g2035", category: "高中3500词", word: "miracle", phonetic: "/ˈmɪrəkl/", translation: "奇迹", example: "It was a miracle that he survived the crash." },
  { id: "g2036", category: "高中3500词", word: "mirror", phonetic: "/ˈmɪrər/", translation: "镜子", example: "She looked in the mirror." },
  { id: "g2037", category: "高中3500词", word: "miss", phonetic: "/mɪs/", translation: "想念；错过", example: "I miss my family." },
  { id: "g2038", category: "高中3500词", word: "missile", phonetic: "/ˈmɪsaɪl/", translation: "导弹", example: "The missile was launched." },
  { id: "g2039", category: "高中3500词", word: "mission", phonetic: "/ˈmɪʃn/", translation: "任务；使命", example: "She completed her mission." },
  { id: "g2040", category: "高中3500词", word: "mistake", phonetic: "/mɪˈsteɪk/", translation: "错误", example: "She made a mistake." },
  { id: "g2041", category: "高中3500词", word: "mistaken", phonetic: "/mɪˈsteɪkən/", translation: "错误的", example: "You are mistaken about that." },
  { id: "g2042", category: "高中3500词", word: "mix", phonetic: "/mɪks/", translation: "混合", example: "Mix the flour and sugar together." },
  { id: "g2043", category: "高中3500词", word: "mixture", phonetic: "/ˈmɪkstʃər/", translation: "混合物", example: "The mixture was poured into a bowl." },
  { id: "g2044", category: "高中3500词", word: "mobile", phonetic: "/ˈməʊbaɪl/", translation: "移动的；手机", example: "She bought a new mobile phone." },
  { id: "g2045", category: "高中3500词", word: "model", phonetic: "/ˈmɒdl/", translation: "模型；模特", example: "She is a fashion model." },
  { id: "g2046", category: "高中3500词", word: "moderate", phonetic: "/ˈmɒdərət/", translation: "适度的；温和的", example: "Moderate exercise is good for health." },
  { id: "g2047", category: "高中3500词", word: "modern", phonetic: "/ˈmɒdərn/", translation: "现代的", example: "She prefers modern art." },
  { id: "g2048", category: "高中3500词", word: "modest", phonetic: "/ˈmɒdɪst/", translation: "谦虚的", example: "She is modest about her achievements." },
  { id: "g2049", category: "高中3500词", word: "modify", phonetic: "/ˈmɒdɪfaɪ/", translation: "修改；调整", example: "We need to modify the original plan." },
  { id: "g2050", category: "高中3500词", word: "mom", phonetic: "/mɒm/", translation: "妈妈", example: "My mom is a teacher." },
  { id: "g2051", category: "高中3500词", word: "moment", phonetic: "/ˈməʊmənt/", translation: "时刻；片刻", example: "Just a moment, please." },
  { id: "g2052", category: "高中3500词", word: "money", phonetic: "/ˈmʌni/", translation: "钱", example: "She saved a lot of money." },
  { id: "g2053", category: "高中3500词", word: "monitor", phonetic: "/ˈmɒnɪtər/", translation: "监视；显示器", example: "The teacher monitors the students' progress." },
  { id: "g2054", category: "高中3500词", word: "monkey", phonetic: "/ˈmʌŋki/", translation: "猴子", example: "The monkey climbed the tree." },
  { id: "g2055", category: "高中3500词", word: "month", phonetic: "/mʌnθ/", translation: "月", example: "She visits her grandmother once a month." },
  { id: "g2056", category: "高中3500词", word: "monument", phonetic: "/ˈmɒnjumənt/", translation: "纪念碑", example: "The monument was built in 1900." },
  { id: "g2057", category: "高中3500词", word: "mood", phonetic: "/muːd/", translation: "心情", example: "She is in a good mood." },
  { id: "g2058", category: "高中3500词", word: "moon", phonetic: "/muːn/", translation: "月亮", example: "The moon was full last night." },
  { id: "g2059", category: "高中3500词", word: "moral", phonetic: "/ˈmɒrəl/", translation: "道德的；寓意", example: "He has high moral standards." },
  { id: "g2060", category: "高中3500词", word: "more", phonetic: "/mɔːr/", translation: "更多的", example: "I need more time." },
  { id: "g2061", category: "高中3500词", word: "moreover", phonetic: "/mɔːrˈəʊvər/", translation: "此外", example: "Moreover, the plan is too expensive." },
  { id: "g2062", category: "高中3500词", word: "morning", phonetic: "/ˈmɔːrnɪŋ/", translation: "早上", example: "She gets up early in the morning." },
  { id: "g2063", category: "高中3500词", word: "most", phonetic: "/məʊst/", translation: "最多的；最", example: "She is the most intelligent student." },
  { id: "g2064", category: "高中3500词", word: "mostly", phonetic: "/ˈməʊstli/", translation: "主要地", example: "The audience was mostly young people." },
  { id: "g2065", category: "高中3500词", word: "mother", phonetic: "/ˈmʌðər/", translation: "母亲", example: "Her mother is a doctor." },
  { id: "g2066", category: "高中3500词", word: "motion", phonetic: "/ˈməʊʃn/", translation: "运动；动议", example: "She made a motion with her hand." },
  { id: "g2067", category: "高中3500词", word: "motivate", phonetic: "/ˈməʊtɪveɪt/", translation: "激励；激发", example: "What motivates you to work so hard?" },
  { id: "g2068", category: "高中3500词", word: "motivation", phonetic: "/ˌməʊtɪˈveɪʃn/", translation: "动机；积极性", example: "She lacks motivation." },
  { id: "g2069", category: "高中3500词", word: "motive", phonetic: "/ˈməʊtɪv/", translation: "动机；目的", example: "What was his motive for the crime?" },
  { id: "g2070", category: "高中3500词", word: "motor", phonetic: "/ˈməʊtər/", translation: "发动机；马达", example: "The motor needs repair." },
  { id: "g2071", category: "高中3500词", word: "mount", phonetic: "/maʊnt/", translation: "登上；山", example: "She mounted the horse." },
  { id: "g2072", category: "高中3500词", word: "mountain", phonetic: "/ˈmaʊntɪn/", translation: "山", example: "We climbed the mountain." },
  { id: "g2073", category: "高中3500词", word: "mourn", phonetic: "/mɔːrn/", translation: "哀悼", example: "They mourned the loss of their friend." },
  { id: "g2074", category: "高中3500词", word: "mouse", phonetic: "/maʊs/", translation: "老鼠；鼠标", example: "She clicked the mouse." },
  { id: "g2075", category: "高中3500词", word: "mouth", phonetic: "/maʊθ/", translation: "嘴", example: "Open your mouth." },
  { id: "g2076", category: "高中3500词", word: "move", phonetic: "/muːv/", translation: "移动；感动", example: "She moved to a new city." },
  { id: "g2077", category: "高中3500词", word: "movement", phonetic: "/ˈmuːvmənt/", translation: "运动；动作", example: "The movement for equality grew." },
  { id: "g2078", category: "高中3500词", word: "movie", phonetic: "/ˈmuːvi/", translation: "电影", example: "We went to see a movie." },
  { id: "g2079", category: "高中3500词", word: "much", phonetic: "/mʌtʃ/", translation: "很多", example: "How much does it cost?" },
  { id: "g2080", category: "高中3500词", word: "mud", phonetic: "/mʌd/", translation: "泥", example: "The children played in the mud." },
  { id: "g2081", category: "高中3500词", word: "multiple", phonetic: "/ˈmʌltɪpl/", translation: "多种的；多重的", example: "There are multiple reasons for the failure." },
  { id: "g2082", category: "高中3500词", word: "multiply", phonetic: "/ˈmʌltɪplaɪ/", translation: "乘；繁殖", example: "Three multiplied by four equals twelve." },
  { id: "g2083", category: "高中3500词", word: "murder", phonetic: "/ˈmɜːrdər/", translation: "谋杀", example: "He was charged with murder." },
  { id: "g2084", category: "高中3500词", word: "muscle", phonetic: "/ˈmʌsl/", translation: "肌肉", example: "Exercise builds muscle." },
  { id: "g2085", category: "高中3500词", word: "museum", phonetic: "/mjuːˈziːəm/", translation: "博物馆", example: "We visited the museum." },
  { id: "g2086", category: "高中3500词", word: "mushroom", phonetic: "/ˈmʌʃruːm/", translation: "蘑菇", example: "She added mushrooms to the soup." },
  { id: "g2087", category: "高中3500词", word: "music", phonetic: "/ˈmjuːzɪk/", translation: "音乐", example: "She enjoys listening to music." },
  { id: "g2088", category: "高中3500词", word: "musical", phonetic: "/ˈmjuːzɪkl/", translation: "音乐的", example: "She has musical talent." },
  { id: "g2089", category: "高中3500词", word: "musician", phonetic: "/mjuːˈzɪʃn/", translation: "音乐家", example: "She is a talented musician." },
  { id: "g2090", category: "高中3500词", word: "must", phonetic: "/mʌst/", translation: "必须", example: "You must finish your homework." },
  { id: "g2091", category: "高中3500词", word: "mutual", phonetic: "/ˈmjuːtʃuəl/", translation: "相互的；共同的", example: "They have mutual respect for each other." },
  { id: "g2092", category: "高中3500词", word: "my", phonetic: "/maɪ/", translation: "我的", example: "This is my book." },
  { id: "g2093", category: "高中3500词", word: "myself", phonetic: "/maɪˈself/", translation: "我自己", example: "I did it myself." },
  { id: "g2094", category: "高中3500词", word: "mystery", phonetic: "/ˈmɪstəri/", translation: "神秘；谜", example: "The disappearance remains a mystery." },
  { id: "g2095", category: "高中3500词", word: "myth", phonetic: "/mɪθ/", translation: "神话", example: "The myth of the hero has been told for centuries." },
  { id: "g2096", category: "高中3500词", word: "nail", phonetic: "/neɪl/", translation: "钉子；指甲", example: "She painted her nails." },
  { id: "g2097", category: "高中3500词", word: "name", phonetic: "/neɪm/", translation: "名字；命名", example: "What is your name?" },
  { id: "g2098", category: "高中3500词", word: "narrow", phonetic: "/ˈnærəʊ/", translation: "狭窄的；勉强的", example: "The road was too narrow for two cars." },
  { id: "g2099", category: "高中3500词", word: "nation", phonetic: "/ˈneɪʃn/", translation: "国家；民族", example: "The nation celebrated its independence." },
  { id: "g2100", category: "高中3500词", word: "national", phonetic: "/ˈnæʃnəl/", translation: "国家的；民族的", example: "The national flag was raised." },
  { id: "g2101", category: "高中3500词", word: "nationality", phonetic: "/ˌnæʃəˈnæləti/", translation: "国籍", example: "What is your nationality?" },
  { id: "g2102", category: "高中3500词", word: "native", phonetic: "/ˈneɪtɪv/", translation: "本地的；本族人", example: "She is a native of Beijing." },
  { id: "g2103", category: "高中3500词", word: "natural", phonetic: "/ˈnætʃərəl/", translation: "自然的", example: "It is natural to feel nervous." },
  { id: "g2104", category: "高中3500词", word: "naturally", phonetic: "/ˈnætʃərəli/", translation: "自然地", example: "She naturally agreed." },
  { id: "g2105", category: "高中3500词", word: "nature", phonetic: "/ˈneɪtʃər/", translation: "自然；本性", example: "She loves the beauty of nature." },
  { id: "g2106", category: "高中3500词", word: "navigate", phonetic: "/ˈnævɪɡeɪt/", translation: "导航；航行", example: "We navigated through the busy streets." },
  { id: "g2107", category: "高中3500词", word: "navy", phonetic: "/ˈneɪvi/", translation: "海军", example: "He joined the navy." },
  { id: "g2108", category: "高中3500词", word: "near", phonetic: "/nɪər/", translation: "近的", example: "The school is near my house." },
  { id: "g2109", category: "高中3500词", word: "nearby", phonetic: "/ˌnɪərˈbaɪ/", translation: "附近的", example: "There is a park nearby." },
  { id: "g2110", category: "高中3500词", word: "nearly", phonetic: "/ˈnɪəli/", translation: "几乎", example: "She nearly missed the bus." },
  { id: "g2111", category: "高中3500词", word: "neat", phonetic: "/niːt/", translation: "整洁的", example: "Her room is always neat." },
  { id: "g2112", category: "高中3500词", word: "necessary", phonetic: "/ˈnesəsəri/", translation: "必要的", example: "Sleep is necessary for health." },
  { id: "g2113", category: "高中3500词", word: "neck", phonetic: "/nek/", translation: "脖子", example: "She wore a scarf around her neck." },
  { id: "g2114", category: "高中3500词", word: "necklace", phonetic: "/ˈnekləs/", translation: "项链", example: "She received a pearl necklace." },
  { id: "g2115", category: "高中3500词", word: "need", phonetic: "/niːd/", translation: "需要", example: "I need your help." },
  { id: "g2116", category: "高中3500词", word: "needle", phonetic: "/ˈniːdl/", translation: "针", example: "She threaded the needle." },
  { id: "g2117", category: "高中3500词", word: "negative", phonetic: "/ˈneɡətɪv/", translation: "消极的；否定的", example: "Don't be so negative about everything." },
  { id: "g2118", category: "高中3500词", word: "neglect", phonetic: "/nɪˈɡlekt/", translation: "忽视；疏忽", example: "He neglected his health while working hard." },
  { id: "g2119", category: "高中3500词", word: "negotiate", phonetic: "/nɪˈɡəʊʃieɪt/", translation: "谈判；协商", example: "They negotiated a peace agreement." },
  { id: "g2120", category: "高中3500词", word: "neighbor", phonetic: "/ˈneɪbər/", translation: "邻居", example: "She is a good neighbor." },
  { id: "g2121", category: "高中3500词", word: "neighborhood", phonetic: "/ˈneɪbərhʊd/", translation: "社区；附近", example: "The neighborhood is very quiet." },
  { id: "g2122", category: "高中3500词", word: "neither", phonetic: "/ˈnaɪðər/", translation: "两者都不", example: "Neither answer is correct." },
  { id: "g2123", category: "高中3500词", word: "nephew", phonetic: "/ˈnefjuː/", translation: "侄子", example: "Her nephew is five years old." },
  { id: "g2124", category: "高中3500词", word: "nerve", phonetic: "/nɜːrv/", translation: "神经；勇气", example: "She had the nerve to ask for more." },
  { id: "g2125", category: "高中3500词", word: "nervous", phonetic: "/ˈnɜːrvəs/", translation: "紧张的", example: "She felt nervous before the exam." },
  { id: "g2126", category: "高中3500词", word: "nest", phonetic: "/nest/", translation: "巢", example: "The bird built a nest." },
  { id: "g2127", category: "高中3500词", word: "net", phonetic: "/net/", translation: "网", example: "She caught fish with a net." },
  { id: "g2128", category: "高中3500词", word: "network", phonetic: "/ˈnetwɜːrk/", translation: "网络", example: "The computer network is down." },
  { id: "g2129", category: "高中3500词", word: "neutral", phonetic: "/ˈnjuːtrəl/", translation: "中立的；中性的", example: "She remained neutral in the argument." },
  { id: "g2130", category: "高中3500词", word: "never", phonetic: "/ˈnevər/", translation: "从不", example: "She never eats breakfast." },
  { id: "g2131", category: "高中3500词", word: "nevertheless", phonetic: "/ˌnevərðəˈles/", translation: "然而；不过", example: "It was raining; nevertheless, they went out." },
  { id: "g2132", category: "高中3500词", word: "new", phonetic: "/njuː/", translation: "新的", example: "She bought a new dress." },
  { id: "g2133", category: "高中3500词", word: "news", phonetic: "/njuːz/", translation: "新闻", example: "I heard the news on TV." },
  { id: "g2134", category: "高中3500词", word: "newspaper", phonetic: "/ˈnjuːzpeɪpər/", translation: "报纸", example: "She reads the newspaper every day." },
  { id: "g2135", category: "高中3500词", word: "next", phonetic: "/nekst/", translation: "下一个的", example: "What is the next step?" },
  { id: "g2136", category: "高中3500词", word: "nice", phonetic: "/naɪs/", translation: "好的；令人愉快的", example: "It is nice to meet you." },
  { id: "g2137", category: "高中3500词", word: "niece", phonetic: "/niːs/", translation: "侄女", example: "Her niece is very cute." },
  { id: "g2138", category: "高中3500词", word: "night", phonetic: "/naɪt/", translation: "夜晚", example: "She works at night." },
  { id: "g2139", category: "高中3500词", word: "nightmare", phonetic: "/ˈnaɪtmeər/", translation: "噩梦", example: "She had a nightmare." },
  { id: "g2140", category: "高中3500词", word: "nine", phonetic: "/naɪn/", translation: "九", example: "There are nine players on the team." },
  { id: "g2141", category: "高中3500词", word: "nineteen", phonetic: "/ˌnaɪnˈtiːn/", translation: "十九", example: "She is nineteen years old." },
  { id: "g2142", category: "高中3500词", word: "ninety", phonetic: "/ˈnaɪnti/", translation: "九十", example: "There are ninety students." },
  { id: "g2143", category: "高中3500词", word: "no", phonetic: "/nəʊ/", translation: "不；没有", example: "No smoking here." },
  { id: "g2144", category: "高中3500词", word: "noble", phonetic: "/ˈnəʊbl/", translation: "高尚的；贵族的", example: "He had a noble character." },
  { id: "g2145", category: "高中3500词", word: "nobody", phonetic: "/ˈnəʊbɒdi/", translation: "没有人", example: "Nobody came to the party." },
  { id: "g2146", category: "高中3500词", word: "nod", phonetic: "/nɒd/", translation: "点头", example: "She nodded in agreement." },
  { id: "g2147", category: "高中3500词", word: "noise", phonetic: "/nɔɪz/", translation: "噪音", example: "Don't make so much noise." },
  { id: "g2148", category: "高中3500词", word: "noisy", phonetic: "/ˈnɔɪzi/", translation: "吵闹的", example: "The classroom was very noisy." },
  { id: "g2149", category: "高中3500词", word: "nominate", phonetic: "/ˈnɒmɪneɪt/", translation: "提名；任命", example: "She was nominated for the award." },
  { id: "g2150", category: "高中3500词", word: "none", phonetic: "/nʌn/", translation: "没有一个", example: "None of them came." },
  { id: "g2151", category: "高中3500词", word: "nonsense", phonetic: "/ˈnɒnsəns/", translation: "废话", example: "That is nonsense." },
  { id: "g2152", category: "高中3500词", word: "noon", phonetic: "/nuːn/", translation: "正午", example: "We will meet at noon." },
  { id: "g2153", category: "高中3500词", word: "nor", phonetic: "/nɔːr/", translation: "也不", example: "Neither he nor she came." },
  { id: "g2154", category: "高中3500词", word: "normal", phonetic: "/ˈnɔːrml/", translation: "正常的", example: "It is normal to feel nervous before an exam." },
  { id: "g2155", category: "高中3500词", word: "normally", phonetic: "/ˈnɔːrməli/", translation: "通常", example: "She normally arrives at eight." },
  { id: "g2156", category: "高中3500词", word: "north", phonetic: "/nɔːrθ/", translation: "北方", example: "Beijing is in the north of China." },
  { id: "g2157", category: "高中3500词", word: "northern", phonetic: "/ˈnɔːrðərn/", translation: "北方的", example: "She lives in the northern part of the country." },
  { id: "g2158", category: "高中3500词", word: "nose", phonetic: "/nəʊz/", translation: "鼻子", example: "She has a runny nose." },
  { id: "g2159", category: "高中3500词", word: "not", phonetic: "/nɒt/", translation: "不", example: "She is not here." },
  { id: "g2160", category: "高中3500词", word: "notable", phonetic: "/ˈnəʊtəbl/", translation: "显著的；著名的", example: "She made notable contributions to science." },
  { id: "g2161", category: "高中3500词", word: "note", phonetic: "/nəʊt/", translation: "笔记；注意", example: "She took notes during the lecture." },
  { id: "g2162", category: "高中3500词", word: "notebook", phonetic: "/ˈnəʊtbʊk/", translation: "笔记本", example: "She wrote in her notebook." },
  { id: "g2163", category: "高中3500词", word: "nothing", phonetic: "/ˈnʌθɪŋ/", translation: "什么也没有", example: "There is nothing to worry about." },
  { id: "g2164", category: "高中3500词", word: "notice", phonetic: "/ˈnəʊtɪs/", translation: "注意；通知", example: "Did you notice the change?" },
  { id: "g2165", category: "高中3500词", word: "notify", phonetic: "/ˈnəʊtɪfaɪ/", translation: "通知；报告", example: "Please notify us of any changes." },
  { id: "g2166", category: "高中3500词", word: "notion", phonetic: "/ˈnəʊʃn/", translation: "概念；观念", example: "I reject the notion that money brings happiness." },
  { id: "g2167", category: "高中3500词", word: "novel", phonetic: "/ˈnɒvl/", translation: "小说；新颖的", example: "She is reading a novel." },
  { id: "g2168", category: "高中3500词", word: "novelist", phonetic: "/ˈnɒvəlɪst/", translation: "小说家", example: "She is a famous novelist." },
  { id: "g2169", category: "高中3500词", word: "November", phonetic: "/nəʊˈvembər/", translation: "十一月", example: "November is a cold month." },
  { id: "g2170", category: "高中3500词", word: "now", phonetic: "/naʊ/", translation: "现在", example: "What are you doing now?" },
  { id: "g2171", category: "高中3500词", word: "nowadays", phonetic: "/ˈnaʊədeɪz/", translation: "如今", example: "Nowadays people use smartphones." },
  { id: "g2172", category: "高中3500词", word: "nowhere", phonetic: "/ˈnəʊweər/", translation: "无处", example: "The key was nowhere to be found." },
  { id: "g2173", category: "高中3500词", word: "nuclear", phonetic: "/ˈnjuːkliər/", translation: "核的；原子能的", example: "Nuclear energy is a controversial topic." },
  { id: "g2174", category: "高中3500词", word: "number", phonetic: "/ˈnʌmbər/", translation: "数字；号码", example: "What is your phone number?" },
  { id: "g2175", category: "高中3500词", word: "numerous", phonetic: "/ˈnjuːmərəs/", translation: "许多的", example: "There are numerous reasons to be optimistic." },
  { id: "g2176", category: "高中3500词", word: "nurse", phonetic: "/nɜːrs/", translation: "护士", example: "The nurse took care of the patient." },
  { id: "g2177", category: "高中3500词", word: "nursery", phonetic: "/ˈnɜːrsəri/", translation: "托儿所", example: "The child goes to nursery." },
  { id: "g2178", category: "高中3500词", word: "nut", phonetic: "/nʌt/", translation: "坚果", example: "She is allergic to nuts." },
  { id: "g2179", category: "高中3500词", word: "nutrition", phonetic: "/njuːˈtrɪʃn/", translation: "营养", example: "Good nutrition is essential for children's growth." },
  { id: "g2180", category: "高中3500词", word: "o'clock", phonetic: "/əˈklɒk/", translation: "……点钟", example: "It is three o'clock." },
  { id: "g2181", category: "高中3500词", word: "obey", phonetic: "/əˈbeɪ/", translation: "服从；遵守", example: "Everyone must obey the law." },
  { id: "g2182", category: "高中3500词", word: "object", phonetic: "/əbˈdʒekt/", translation: "反对；物体", example: "I object to the proposal." },
  { id: "g2183", category: "高中3500词", word: "objection", phonetic: "/əbˈdʒekʃn/", translation: "反对", example: "She raised an objection." },
  { id: "g2184", category: "高中3500词", word: "objective", phonetic: "/əbˈdʒektɪv/", translation: "客观的；目标", example: "We must remain objective in our judgment." },
  { id: "g2185", category: "高中3500词", word: "oblige", phonetic: "/əˈblaɪdʒ/", translation: "迫使；感激", example: "The law obliges parents to send children to school." },
  { id: "g2186", category: "高中3500词", word: "observation", phonetic: "/ˌɒbzərˈveɪʃn/", translation: "观察", example: "She made an interesting observation." },
  { id: "g2187", category: "高中3500词", word: "observe", phonetic: "/əbˈzɜːrv/", translation: "观察；遵守", example: "Scientists observe the behavior of animals." },
  { id: "g2188", category: "高中3500词", word: "obtain", phonetic: "/əbˈteɪn/", translation: "获得；得到", example: "She obtained a scholarship to study abroad." },
  { id: "g2189", category: "高中3500词", word: "obvious", phonetic: "/ˈɒbviəs/", translation: "明显的", example: "It is obvious that he is lying." },
  { id: "g2190", category: "高中3500词", word: "obviously", phonetic: "/ˈɒbviəsli/", translation: "显然", example: "Obviously, she was upset." },
  { id: "g2191", category: "高中3500词", word: "occasion", phonetic: "/əˈkeɪʒn/", translation: "场合；时机", example: "He dressed formally for the occasion." },
  { id: "g2192", category: "高中3500词", word: "occasional", phonetic: "/əˈkeɪʒənl/", translation: "偶尔的", example: "She makes occasional visits." },
  { id: "g2193", category: "高中3500词", word: "occasionally", phonetic: "/əˈkeɪʒənəli/", translation: "偶尔", example: "She occasionally goes to the cinema." },
  { id: "g2194", category: "高中3500词", word: "occupation", phonetic: "/ˌɒkjuˈpeɪʃn/", translation: "职业；占领", example: "What is your occupation?" },
  { id: "g2195", category: "高中3500词", word: "occupy", phonetic: "/ˈɒkjupaɪ/", translation: "占据；使忙碌", example: "The meeting occupied most of the morning." },
  { id: "g2196", category: "高中3500词", word: "occur", phonetic: "/əˈkɜːr/", translation: "发生；出现", example: "The accident occurred at midnight." },
  { id: "g2197", category: "高中3500词", word: "ocean", phonetic: "/ˈəʊʃn/", translation: "海洋", example: "The Pacific Ocean is the largest." },
  { id: "g2198", category: "高中3500词", word: "October", phonetic: "/ɒkˈtəʊbər/", translation: "十月", example: "October is a beautiful month." },
  { id: "g2199", category: "高中3500词", word: "odd", phonetic: "/ɒd/", translation: "奇怪的；奇数的", example: "That is an odd question." },
  { id: "g2200", category: "高中3500词", word: "of", phonetic: "/ɒv/", translation: "……的", example: "She is a friend of mine." },
  { id: "g2201", category: "高中3500词", word: "off", phonetic: "/ɒf/", translation: "离开；关", example: "Turn off the light." },
  { id: "g2202", category: "高中3500词", word: "offence", phonetic: "/əˈfens/", translation: "冒犯；犯罪", example: "No offence intended." },
  { id: "g2203", category: "高中3500词", word: "offend", phonetic: "/əˈfend/", translation: "冒犯；得罪", example: "I didn't mean to offend anyone." },
  { id: "g2204", category: "高中3500词", word: "offer", phonetic: "/ˈɒfər/", translation: "提供；提议", example: "She offered to help." },
  { id: "g2205", category: "高中3500词", word: "office", phonetic: "/ˈɒfɪs/", translation: "办公室", example: "She works in an office." },
  { id: "g2206", category: "高中3500词", word: "officer", phonetic: "/ˈɒfɪsər/", translation: "军官；官员", example: "He is a police officer." },
  { id: "g2207", category: "高中3500词", word: "official", phonetic: "/əˈfɪʃl/", translation: "官方的；官员", example: "The official announcement was made yesterday." },
  { id: "g2208", category: "高中3500词", word: "often", phonetic: "/ˈɒfn/", translation: "经常", example: "She often goes to the library." },
  { id: "g2209", category: "高中3500词", word: "oh", phonetic: "/əʊ/", translation: "哦", example: "Oh, I see." },
  { id: "g2210", category: "高中3500词", word: "oil", phonetic: "/ɔɪl/", translation: "油；石油", example: "The price of oil has risen." },
  { id: "g2211", category: "高中3500词", word: "okay", phonetic: "/ˌəʊˈkeɪ/", translation: "好的", example: "Is it okay if I leave early?" },
  { id: "g2212", category: "高中3500词", word: "old", phonetic: "/əʊld/", translation: "老的；旧的", example: "She is ten years old." },
  { id: "g2213", category: "高中3500词", word: "Olympic", phonetic: "/əˈlɪmpɪk/", translation: "奥运会的", example: "She won an Olympic medal." },
  { id: "g2214", category: "高中3500词", word: "on", phonetic: "/ɒn/", translation: "在……上面；关于", example: "The book is on the table." },
  { id: "g2215", category: "高中3500词", word: "once", phonetic: "/wʌns/", translation: "一次；曾经", example: "She visited Paris once." },
  { id: "g2216", category: "高中3500词", word: "one", phonetic: "/wʌn/", translation: "一", example: "One of the students is absent." },
  { id: "g2217", category: "高中3500词", word: "oneself", phonetic: "/wʌnˈself/", translation: "自己", example: "One should believe in oneself." },
  { id: "g2218", category: "高中3500词", word: "onion", phonetic: "/ˈʌnjən/", translation: "洋葱", example: "She chopped the onion." },
  { id: "g2219", category: "高中3500词", word: "online", phonetic: "/ˌɒnˈlaɪn/", translation: "在线的", example: "She took an online course." },
  { id: "g2220", category: "高中3500词", word: "only", phonetic: "/ˈəʊnli/", translation: "唯一的；只", example: "She is the only child." },
  { id: "g2221", category: "高中3500词", word: "onto", phonetic: "/ˈɒntuː/", translation: "到……上面", example: "She stepped onto the stage." },
  { id: "g2222", category: "高中3500词", word: "open", phonetic: "/ˈəʊpən/", translation: "打开；开放的", example: "Open the window, please." },
  { id: "g2223", category: "高中3500词", word: "opening", phonetic: "/ˈəʊpənɪŋ/", translation: "开口；开幕式", example: "The opening ceremony was grand." },
  { id: "g2224", category: "高中3500词", word: "opera", phonetic: "/ˈɒpərə/", translation: "歌剧", example: "She enjoys going to the opera." },
  { id: "g2225", category: "高中3500词", word: "operate", phonetic: "/ˈɒpəreɪt/", translation: "操作；运营", example: "The machine operates very efficiently." },
  { id: "g2226", category: "高中3500词", word: "operation", phonetic: "/ˌɒpəˈreɪʃn/", translation: "操作；手术", example: "The operation was successful." },
  { id: "g2227", category: "高中3500词", word: "operator", phonetic: "/ˈɒpəreɪtər/", translation: "操作员", example: "She is a telephone operator." },
  { id: "g2228", category: "高中3500词", word: "opinion", phonetic: "/əˈpɪnjən/", translation: "意见；看法", example: "In my opinion, this is the best solution." },
  { id: "g2229", category: "高中3500词", word: "opponent", phonetic: "/əˈpəʊnənt/", translation: "对手", example: "She defeated her opponent." },
  { id: "g2230", category: "高中3500词", word: "opportunity", phonetic: "/ˌɒpərˈtjuːnəti/", translation: "机会", example: "This is a great opportunity." },
  { id: "g2231", category: "高中3500词", word: "oppose", phonetic: "/əˈpəʊz/", translation: "反对；对抗", example: "Many people opposed the new law." },
  { id: "g2232", category: "高中3500词", word: "opposite", phonetic: "/ˈɒpəzɪt/", translation: "对面的；相反的", example: "The bank is opposite the post office." },
  { id: "g2233", category: "高中3500词", word: "opposition", phonetic: "/ˌɒpəˈzɪʃn/", translation: "反对；反对派", example: "There was strong opposition to the plan." },
  { id: "g2234", category: "高中3500词", word: "optimistic", phonetic: "/ˌɒptɪˈmɪstɪk/", translation: "乐观的", example: "She is optimistic about the future." },
  { id: "g2235", category: "高中3500词", word: "option", phonetic: "/ˈɒpʃn/", translation: "选择；选项", example: "We have several options to choose from." },
  { id: "g2236", category: "高中3500词", word: "optional", phonetic: "/ˈɒpʃənl/", translation: "可选择的", example: "Attendance is optional." },
  { id: "g2237", category: "高中3500词", word: "or", phonetic: "/ɔːr/", translation: "或者；否则", example: "Would you like tea or coffee?" },
  { id: "g2238", category: "高中3500词", word: "oral", phonetic: "/ˈɔːrəl/", translation: "口头的", example: "We had an oral exam in English." },
  { id: "g2239", category: "高中3500词", word: "orange", phonetic: "/ˈɒrɪndʒ/", translation: "橙子；橙色的", example: "She drank orange juice." },
  { id: "g2240", category: "高中3500词", word: "orbit", phonetic: "/ˈɔːrbɪt/", translation: "轨道", example: "The satellite orbits the earth." },
  { id: "g2241", category: "高中3500词", word: "order", phonetic: "/ˈɔːrdər/", translation: "命令；顺序", example: "She ordered a cup of coffee." },
  { id: "g2242", category: "高中3500词", word: "ordinary", phonetic: "/ˈɔːrdnri/", translation: "普通的", example: "She is an ordinary student." },
  { id: "g2243", category: "高中3500词", word: "organ", phonetic: "/ˈɔːrɡən/", translation: "器官；机构", example: "The heart is a vital organ." },
  { id: "g2244", category: "高中3500词", word: "organic", phonetic: "/ɔːˈɡænɪk/", translation: "有机的", example: "She buys organic food." },
  { id: "g2245", category: "高中3500词", word: "organization", phonetic: "/ˌɔːrɡənaɪˈzeɪʃn/", translation: "组织", example: "She works for a charity organization." },
  { id: "g2246", category: "高中3500词", word: "organize", phonetic: "/ˈɔːrɡənaɪz/", translation: "组织", example: "She organized a party." },
  { id: "g2247", category: "高中3500词", word: "origin", phonetic: "/ˈɒrɪdʒɪn/", translation: "起源；出身", example: "The origin of the universe remains a mystery." },
  { id: "g2248", category: "高中3500词", word: "original", phonetic: "/əˈrɪdʒənl/", translation: "原始的；独创的", example: "The original idea was much simpler." },
  { id: "g2249", category: "高中3500词", word: "other", phonetic: "/ˈʌðər/", translation: "其他的", example: "Do you have any other questions?" },
  { id: "g2250", category: "高中3500词", word: "otherwise", phonetic: "/ˈʌðərwaɪz/", translation: "否则", example: "Hurry up, otherwise you'll be late." },
  { id: "g2251", category: "高中3500词", word: "ought", phonetic: "/ɔːt/", translation: "应该", example: "You ought to apologize." },
  { id: "g2252", category: "高中3500词", word: "our", phonetic: "/ˈaʊər/", translation: "我们的", example: "This is our classroom." },
  { id: "g2253", category: "高中3500词", word: "ours", phonetic: "/ˈaʊərz/", translation: "我们的", example: "The house is ours." },
  { id: "g2254", category: "高中3500词", word: "ourselves", phonetic: "/ˌaʊərˈselvz/", translation: "我们自己", example: "We did it ourselves." },
  { id: "g2255", category: "高中3500词", word: "out", phonetic: "/aʊt/", translation: "在外面", example: "She went out for a walk." },
  { id: "g2256", category: "高中3500词", word: "outcome", phonetic: "/ˈaʊtkʌm/", translation: "结果；成果", example: "The outcome of the election was surprising." },
  { id: "g2257", category: "高中3500词", word: "outdoor", phonetic: "/ˈaʊtdɔːr/", translation: "户外的", example: "We enjoy outdoor activities." },
  { id: "g2258", category: "高中3500词", word: "outdoors", phonetic: "/ˌaʊtˈdɔːrz/", translation: "在户外", example: "She likes to play outdoors." },
  { id: "g2259", category: "高中3500词", word: "outer", phonetic: "/ˈaʊtər/", translation: "外部的", example: "The outer wall was painted white." },
  { id: "g2260", category: "高中3500词", word: "outline", phonetic: "/ˈaʊtlaɪn/", translation: "概述；轮廓", example: "She outlined the main points of the plan." },
  { id: "g2261", category: "高中3500词", word: "output", phonetic: "/ˈaʊtpʊt/", translation: "产量；输出", example: "The factory increased its output this year." },
  { id: "g2262", category: "高中3500词", word: "outside", phonetic: "/ˌaʊtˈsaɪd/", translation: "外面", example: "It is cold outside." },
  { id: "g2263", category: "高中3500词", word: "outstanding", phonetic: "/aʊtˈstændɪŋ/", translation: "杰出的", example: "She is an outstanding student." },
  { id: "g2264", category: "高中3500词", word: "over", phonetic: "/ˈəʊvər/", translation: "在……上方；超过", example: "The plane flew over the city." },
  { id: "g2265", category: "高中3500词", word: "overcome", phonetic: "/ˌəʊvərˈkʌm/", translation: "克服；战胜", example: "She overcame many difficulties to succeed." },
  { id: "g2266", category: "高中3500词", word: "overlook", phonetic: "/ˌəʊvərˈlʊk/", translation: "忽视；俯瞰", example: "Don't overlook the small details." },
  { id: "g2267", category: "高中3500词", word: "overweight", phonetic: "/ˌəʊvərˈweɪt/", translation: "超重的", example: "He is slightly overweight." },
  { id: "g2268", category: "高中3500词", word: "overwhelm", phonetic: "/ˌəʊvərˈwelm/", translation: "压倒；淹没", example: "She was overwhelmed by the support she received." },
  { id: "g2269", category: "高中3500词", word: "owe", phonetic: "/əʊ/", translation: "欠；归功于", example: "I owe my success to my parents." },
  { id: "g2270", category: "高中3500词", word: "own", phonetic: "/əʊn/", translation: "自己的；拥有", example: "She owns a small business." },
  { id: "g2271", category: "高中3500词", word: "owner", phonetic: "/ˈəʊnər/", translation: "主人", example: "Who is the owner of the car?" },
  { id: "g2272", category: "高中3500词", word: "oxygen", phonetic: "/ˈɒksɪdʒən/", translation: "氧气", example: "Plants produce oxygen." },
  { id: "g2273", category: "高中3500词", word: "pace", phonetic: "/peɪs/", translation: "步伐；速度", example: "He walked at a fast pace." },
  { id: "g2274", category: "高中3500词", word: "pack", phonetic: "/pæk/", translation: "打包；包", example: "She packed her suitcase." },
  { id: "g2275", category: "高中3500词", word: "package", phonetic: "/ˈpækɪdʒ/", translation: "包裹；套餐", example: "She sent a package by post." },
  { id: "g2276", category: "高中3500词", word: "packet", phonetic: "/ˈpækɪt/", translation: "小包", example: "She bought a packet of biscuits." },
  { id: "g2277", category: "高中3500词", word: "page", phonetic: "/peɪdʒ/", translation: "页", example: "Turn to page ten." },
  { id: "g2278", category: "高中3500词", word: "pain", phonetic: "/peɪn/", translation: "疼痛；痛苦", example: "She had a pain in her back." },
  { id: "g2279", category: "高中3500词", word: "painful", phonetic: "/ˈpeɪnfl/", translation: "痛苦的", example: "The wound was painful." },
  { id: "g2280", category: "高中3500词", word: "paint", phonetic: "/peɪnt/", translation: "油漆；绘画", example: "She painted the door blue." },
  { id: "g2281", category: "高中3500词", word: "painting", phonetic: "/ˈpeɪntɪŋ/", translation: "绘画；画作", example: "The painting is very beautiful." },
  { id: "g2282", category: "高中3500词", word: "pair", phonetic: "/peər/", translation: "一对；一双", example: "She bought a new pair of shoes." },
  { id: "g2283", category: "高中3500词", word: "palace", phonetic: "/ˈpæləs/", translation: "宫殿", example: "The palace is open to visitors." },
  { id: "g2284", category: "高中3500词", word: "pale", phonetic: "/peɪl/", translation: "苍白的", example: "She looked pale and tired." },
  { id: "g2285", category: "高中3500词", word: "pan", phonetic: "/pæn/", translation: "平底锅", example: "She fried the eggs in a pan." },
  { id: "g2286", category: "高中3500词", word: "panel", phonetic: "/ˈpænl/", translation: "面板；小组", example: "A panel of experts discussed the issue." },
  { id: "g2287", category: "高中3500词", word: "panic", phonetic: "/ˈpænɪk/", translation: "恐慌；惊慌", example: "The crowd panicked when the fire broke out." },
  { id: "g2288", category: "高中3500词", word: "paper", phonetic: "/ˈpeɪpər/", translation: "纸；论文", example: "She wrote her name on the paper." },
  { id: "g2289", category: "高中3500词", word: "paperwork", phonetic: "/ˈpeɪpərwɜːrk/", translation: "文书工作", example: "She has a lot of paperwork." },
  { id: "g2290", category: "高中3500词", word: "paragraph", phonetic: "/ˈpærəɡrɑːf/", translation: "段落", example: "Read the first paragraph." },
  { id: "g2291", category: "高中3500词", word: "parallel", phonetic: "/ˈpærəlel/", translation: "平行的；类似的", example: "His story has a parallel in history." },
  { id: "g2292", category: "高中3500词", word: "parcel", phonetic: "/ˈpɑːrsl/", translation: "包裹", example: "She received a parcel in the mail." },
  { id: "g2293", category: "高中3500词", word: "pardon", phonetic: "/ˈpɑːrdn/", translation: "原谅；赦免", example: "Pardon me, could you repeat that?" },
  { id: "g2294", category: "高中3500词", word: "parent", phonetic: "/ˈpeərənt/", translation: "父/母", example: "Her parents are both teachers." },
  { id: "g2295", category: "高中3500词", word: "park", phonetic: "/pɑːrk/", translation: "公园；停车", example: "She parked the car." },
  { id: "g2296", category: "高中3500词", word: "parliament", phonetic: "/ˈpɑːrləmənt/", translation: "议会", example: "The parliament passed the law." },
  { id: "g2297", category: "高中3500词", word: "part", phonetic: "/pɑːrt/", translation: "部分；角色", example: "She played the part of Juliet." },
  { id: "g2298", category: "高中3500词", word: "participate", phonetic: "/pɑːrˈtɪsɪpeɪt/", translation: "参加；参与", example: "Everyone should participate in the discussion." },
  { id: "g2299", category: "高中3500词", word: "particular", phonetic: "/pərˈtɪkjələr/", translation: "特定的；挑剔的", example: "Is there anything in particular you want?" },
  { id: "g2300", category: "高中3500词", word: "particularly", phonetic: "/pərˈtɪkjələli/", translation: "特别地", example: "She is particularly good at math." },
  { id: "g2301", category: "高中3500词", word: "partly", phonetic: "/ˈpɑːrtli/", translation: "部分地", example: "The success was partly due to luck." },
  { id: "g2302", category: "高中3500词", word: "partner", phonetic: "/ˈpɑːrtnər/", translation: "伙伴；搭档", example: "She is my business partner." },
  { id: "g2303", category: "高中3500词", word: "party", phonetic: "/ˈpɑːrti/", translation: "聚会；政党", example: "She had a birthday party." },
  { id: "g2304", category: "高中3500词", word: "pass", phonetic: "/pɑːs/", translation: "通过；传递", example: "She passed the exam." },
  { id: "g2305", category: "高中3500词", word: "passage", phonetic: "/ˈpæsɪdʒ/", translation: "段落；通道", example: "Read the passage and answer the questions." },
  { id: "g2306", category: "高中3500词", word: "passenger", phonetic: "/ˈpæsɪndʒər/", translation: "乘客", example: "The passengers boarded the plane." },
  { id: "g2307", category: "高中3500词", word: "passion", phonetic: "/ˈpæʃn/", translation: "热情；激情", example: "She has a passion for music." },
  { id: "g2308", category: "高中3500词", word: "passive", phonetic: "/ˈpæsɪv/", translation: "被动的；消极的", example: "Don't be passive; take action!" },
  { id: "g2309", category: "高中3500词", word: "passport", phonetic: "/ˈpɑːspɔːrt/", translation: "护照", example: "Don't forget your passport." },
  { id: "g2310", category: "高中3500词", word: "past", phonetic: "/pɑːst/", translation: "过去的；经过", example: "She walked past the school." },
  { id: "g2311", category: "高中3500词", word: "path", phonetic: "/pɑːθ/", translation: "小路；路径", example: "They walked along the path." },
  { id: "g2312", category: "高中3500词", word: "patience", phonetic: "/ˈpeɪʃns/", translation: "耐心", example: "You need patience when teaching children." },
  { id: "g2313", category: "高中3500词", word: "patient", phonetic: "/ˈpeɪʃnt/", translation: "耐心的；病人", example: "Be patient, it takes time." },
  { id: "g2314", category: "高中3500词", word: "pattern", phonetic: "/ˈpætn/", translation: "模式；图案", example: "There is a pattern in the data." },
  { id: "g2315", category: "高中3500词", word: "pause", phonetic: "/pɔːz/", translation: "暂停；停顿", example: "He paused for a moment before answering." },
  { id: "g2316", category: "高中3500词", word: "pay", phonetic: "/peɪ/", translation: "支付", example: "She paid the bill." },
  { id: "g2317", category: "高中3500词", word: "payment", phonetic: "/ˈpeɪmənt/", translation: "支付；付款", example: "The payment is due on Friday." },
  { id: "g2318", category: "高中3500词", word: "peace", phonetic: "/piːs/", translation: "和平", example: "We all want peace." },
  { id: "g2319", category: "高中3500词", word: "peaceful", phonetic: "/ˈpiːsfl/", translation: "和平的；宁静的", example: "The village is very peaceful." },
  { id: "g2320", category: "高中3500词", word: "peach", phonetic: "/piːtʃ/", translation: "桃子", example: "She ate a juicy peach." },
  { id: "g2321", category: "高中3500词", word: "peak", phonetic: "/piːk/", translation: "山峰；顶峰", example: "They reached the peak of the mountain." },
  { id: "g2322", category: "高中3500词", word: "pear", phonetic: "/peər/", translation: "梨", example: "She bought some pears." },
  { id: "g2323", category: "高中3500词", word: "pen", phonetic: "/pen/", translation: "钢笔", example: "She wrote with a pen." },
  { id: "g2324", category: "高中3500词", word: "penalty", phonetic: "/ˈpenəlti/", translation: "处罚；罚款", example: "The penalty for speeding is a fine." },
  { id: "g2325", category: "高中3500词", word: "pencil", phonetic: "/ˈpensl/", translation: "铅笔", example: "She drew a picture with a pencil." },
  { id: "g2326", category: "高中3500词", word: "penny", phonetic: "/ˈpeni/", translation: "便士", example: "It costs a few pennies." },
  { id: "g2327", category: "高中3500词", word: "pension", phonetic: "/ˈpenʃn/", translation: "养老金", example: "She receives a pension." },
  { id: "g2328", category: "高中3500词", word: "people", phonetic: "/ˈpiːpl/", translation: "人们", example: "Many people attended the event." },
  { id: "g2329", category: "高中3500词", word: "pepper", phonetic: "/ˈpepər/", translation: "胡椒", example: "She added pepper to the soup." },
  { id: "g2330", category: "高中3500词", word: "per", phonetic: "/pɜːr/", translation: "每", example: "The car travels 60 km per hour." },
  { id: "g2331", category: "高中3500词", word: "perceive", phonetic: "/pərˈsiːv/", translation: "感知；察觉", example: "I perceived a change in her attitude." },
  { id: "g2332", category: "高中3500词", word: "percent", phonetic: "/pərˈsent/", translation: "百分比", example: "Fifty percent of the students passed the exam." },
  { id: "g2333", category: "高中3500词", word: "percentage", phonetic: "/pərˈsentɪdʒ/", translation: "百分比", example: "The percentage has increased." },
  { id: "g2334", category: "高中3500词", word: "perfect", phonetic: "/ˈpɜːrfɪkt/", translation: "完美的", example: "The weather was perfect." },
  { id: "g2335", category: "高中3500词", word: "perform", phonetic: "/pərˈfɔːrm/", translation: "执行；表演", example: "The team performed very well in the competition." },
  { id: "g2336", category: "高中3500词", word: "performance", phonetic: "/pərˈfɔːrməns/", translation: "表演；表现", example: "Her performance was excellent." },
  { id: "g2337", category: "高中3500词", word: "perfume", phonetic: "/ˈpɜːrfjuːm/", translation: "香水", example: "She wore expensive perfume." },
  { id: "g2338", category: "高中3500词", word: "perhaps", phonetic: "/pərˈhæps/", translation: "也许", example: "Perhaps it will rain." },
  { id: "g2339", category: "高中3500词", word: "period", phonetic: "/ˈpɪəriəd/", translation: "时期；句号", example: "She lived in London for a period." },
  { id: "g2340", category: "高中3500词", word: "permanent", phonetic: "/ˈpɜːrmənənt/", translation: "永久的；固定的", example: "She is looking for a permanent job." },
  { id: "g2341", category: "高中3500词", word: "permission", phonetic: "/pərˈmɪʃn/", translation: "许可", example: "She asked for permission to leave." },
  { id: "g2342", category: "高中3500词", word: "permit", phonetic: "/pərˈmɪt/", translation: "允许；许可证", example: "Photography is not permitted in the museum." },
  { id: "g2343", category: "高中3500词", word: "persist", phonetic: "/pərˈsɪst/", translation: "坚持；持续", example: "He persisted in his efforts despite difficulties." },
  { id: "g2344", category: "高中3500词", word: "person", phonetic: "/ˈpɜːrsn/", translation: "人", example: "She is a kind person." },
  { id: "g2345", category: "高中3500词", word: "personal", phonetic: "/ˈpɜːrsənl/", translation: "个人的", example: "This is a personal matter." },
  { id: "g2346", category: "高中3500词", word: "personality", phonetic: "/ˌpɜːrsəˈnæləti/", translation: "个性", example: "She has a strong personality." },
  { id: "g2347", category: "高中3500词", word: "personally", phonetic: "/ˈpɜːrsənəli/", translation: "就个人而言", example: "Personally, I disagree." },
  { id: "g2348", category: "高中3500词", word: "perspective", phonetic: "/pərˈspektɪv/", translation: "视角；观点", example: "Try to see things from a different perspective." },
  { id: "g2349", category: "高中3500词", word: "persuade", phonetic: "/pərˈsweɪd/", translation: "说服；劝服", example: "She persuaded him to change his mind." },
  { id: "g2350", category: "高中3500词", word: "pet", phonetic: "/pet/", translation: "宠物", example: "She has a pet cat." },
  { id: "g2351", category: "高中3500词", word: "petrol", phonetic: "/ˈpetrəl/", translation: "汽油", example: "The car needs petrol." },
  { id: "g2352", category: "高中3500词", word: "phenomenon", phonetic: "/fɪˈnɒmɪnən/", translation: "现象", example: "Global warming is a well-known phenomenon." },
  { id: "g2353", category: "高中3500词", word: "philosophy", phonetic: "/fɪˈlɒsəfi/", translation: "哲学", example: "She studied philosophy at university." },
  { id: "g2354", category: "高中3500词", word: "phone", phonetic: "/fəʊn/", translation: "电话", example: "She answered the phone." },
  { id: "g2355", category: "高中3500词", word: "photo", phonetic: "/ˈfəʊtəʊ/", translation: "照片", example: "She took a photo of the sunset." },
  { id: "g2356", category: "高中3500词", word: "photograph", phonetic: "/ˈfəʊtəɡrɑːf/", translation: "照片", example: "She took a photograph." },
  { id: "g2357", category: "高中3500词", word: "photographer", phonetic: "/fəˈtɒɡrəfər/", translation: "摄影师", example: "She is a professional photographer." },
  { id: "g2358", category: "高中3500词", word: "phrase", phonetic: "/freɪz/", translation: "短语", example: "Learn common phrases in English." },
  { id: "g2359", category: "高中3500词", word: "physical", phonetic: "/ˈfɪzɪkl/", translation: "身体的；物理的", example: "Regular physical exercise is important." },
  { id: "g2360", category: "高中3500词", word: "physician", phonetic: "/fɪˈzɪʃn/", translation: "内科医生", example: "She consulted her physician." },
  { id: "g2361", category: "高中3500词", word: "physics", phonetic: "/ˈfɪzɪks/", translation: "物理学", example: "She is studying physics." },
  { id: "g2362", category: "高中3500词", word: "piano", phonetic: "/piˈænəʊ/", translation: "钢琴", example: "She plays the piano." },
  { id: "g2363", category: "高中3500词", word: "pick", phonetic: "/pɪk/", translation: "挑选；采摘", example: "She picked some flowers." },
  { id: "g2364", category: "高中3500词", word: "picnic", phonetic: "/ˈpɪknɪk/", translation: "野餐", example: "We had a picnic by the lake." },
  { id: "g2365", category: "高中3500词", word: "picture", phonetic: "/ˈpɪktʃər/", translation: "图片；画", example: "She drew a picture." },
  { id: "g2366", category: "高中3500词", word: "pie", phonetic: "/paɪ/", translation: "馅饼", example: "She baked an apple pie." },
  { id: "g2367", category: "高中3500词", word: "piece", phonetic: "/piːs/", translation: "片；块", example: "She cut the cake into pieces." },
  { id: "g2368", category: "高中3500词", word: "pig", phonetic: "/pɪɡ/", translation: "猪", example: "The farmer raised pigs." },
  { id: "g2369", category: "高中3500词", word: "pile", phonetic: "/paɪl/", translation: "堆", example: "She piled the books on the desk." },
  { id: "g2370", category: "高中3500词", word: "pill", phonetic: "/pɪl/", translation: "药丸", example: "She took a pain pill." },
  { id: "g2371", category: "高中3500词", word: "pillow", phonetic: "/ˈpɪləʊ/", translation: "枕头", example: "She fluffed the pillow." },
  { id: "g2372", category: "高中3500词", word: "pilot", phonetic: "/ˈpaɪlət/", translation: "飞行员", example: "The pilot landed the plane safely." },
  { id: "g2373", category: "高中3500词", word: "pin", phonetic: "/pɪn/", translation: "大头针；别针", example: "She pinned the notice to the board." },
  { id: "g2374", category: "高中3500词", word: "pine", phonetic: "/paɪn/", translation: "松树", example: "The forest is full of pine trees." },
  { id: "g2375", category: "高中3500词", word: "pink", phonetic: "/pɪŋk/", translation: "粉红色的", example: "She wore a pink dress." },
  { id: "g2376", category: "高中3500词", word: "pipe", phonetic: "/paɪp/", translation: "管子；管道", example: "The water pipe burst." },
  { id: "g2377", category: "高中3500词", word: "pity", phonetic: "/ˈpɪti/", translation: "同情；遗憾", example: "It is a pity you can't come." },
  { id: "g2378", category: "高中3500词", word: "place", phonetic: "/pleɪs/", translation: "地方；放置", example: "She placed the book on the shelf." },
  { id: "g2379", category: "高中3500词", word: "plain", phonetic: "/pleɪn/", translation: "朴素的；平原", example: "She wore a plain white shirt." },
  { id: "g2380", category: "高中3500词", word: "plan", phonetic: "/plæn/", translation: "计划", example: "She made a plan for the trip." },
  { id: "g2381", category: "高中3500词", word: "plane", phonetic: "/pleɪn/", translation: "飞机", example: "The plane took off on time." },
  { id: "g2382", category: "高中3500词", word: "planet", phonetic: "/ˈplænɪt/", translation: "行星", example: "Earth is the third planet from the sun." },
  { id: "g2383", category: "高中3500词", word: "plant", phonetic: "/plɑːnt/", translation: "植物；工厂", example: "She watered the plants." },
  { id: "g2384", category: "高中3500词", word: "plastic", phonetic: "/ˈplæstɪk/", translation: "塑料的；塑料", example: "She used a plastic bag." },
  { id: "g2385", category: "高中3500词", word: "plate", phonetic: "/pleɪt/", translation: "盘子", example: "She put the food on the plate." },
  { id: "g2386", category: "高中3500词", word: "platform", phonetic: "/ˈplætfɔːrm/", translation: "平台；站台", example: "The train arrives at platform 3." },
  { id: "g2387", category: "高中3500词", word: "play", phonetic: "/pleɪ/", translation: "玩；播放", example: "She plays tennis every weekend." },
  { id: "g2388", category: "高中3500词", word: "player", phonetic: "/ˈpleɪər/", translation: "选手；播放器", example: "She is a talented player." },
  { id: "g2389", category: "高中3500词", word: "playground", phonetic: "/ˈpleɪɡraʊnd/", translation: "操场", example: "The children are in the playground." },
  { id: "g2390", category: "高中3500词", word: "pleasant", phonetic: "/ˈpleznt/", translation: "令人愉快的", example: "She had a pleasant afternoon." },
  { id: "g2391", category: "高中3500词", word: "please", phonetic: "/pliːz/", translation: "请；使高兴", example: "Please sit down." },
  { id: "g2392", category: "高中3500词", word: "pleasure", phonetic: "/ˈpleʒər/", translation: "快乐；荣幸", example: "It's a pleasure to meet you." },
  { id: "g2393", category: "高中3500词", word: "pledge", phonetic: "/pledʒ/", translation: "保证；承诺", example: "He made a pledge to donate money." },
  { id: "g2394", category: "高中3500词", word: "plenty", phonetic: "/ˈplenti/", translation: "大量", example: "There is plenty of food." },
  { id: "g2395", category: "高中3500词", word: "plot", phonetic: "/plɒt/", translation: "情节；阴谋", example: "The plot of the novel is very exciting." },
  { id: "g2396", category: "高中3500词", word: "plug", phonetic: "/plʌɡ/", translation: "插头；塞子", example: "She plugged in the computer." },
  { id: "g2397", category: "高中3500词", word: "plus", phonetic: "/plʌs/", translation: "加；加上", example: "Two plus three equals five." },
  { id: "g2398", category: "高中3500词", word: "pocket", phonetic: "/ˈpɒkɪt/", translation: "口袋", example: "She put the keys in her pocket." },
  { id: "g2399", category: "高中3500词", word: "poem", phonetic: "/ˈpəʊəm/", translation: "诗", example: "She wrote a poem." },
  { id: "g2400", category: "高中3500词", word: "poet", phonetic: "/ˈpəʊət/", translation: "诗人", example: "He is a famous poet." },
  { id: "g2401", category: "高中3500词", word: "poetry", phonetic: "/ˈpəʊətri/", translation: "诗歌", example: "She loves poetry." },
  { id: "g2402", category: "高中3500词", word: "point", phonetic: "/pɔɪnt/", translation: "点；指出", example: "She pointed at the map." },
  { id: "g2403", category: "高中3500词", word: "poison", phonetic: "/ˈpɔɪzn/", translation: "毒药；毒害", example: "The chemical can poison the water supply." },
  { id: "g2404", category: "高中3500词", word: "poisonous", phonetic: "/ˈpɔɪzənəs/", translation: "有毒的", example: "Some mushrooms are poisonous." },
  { id: "g2405", category: "高中3500词", word: "pole", phonetic: "/pəʊl/", translation: "杆；极", example: "The flag was on a pole." },
  { id: "g2406", category: "高中3500词", word: "police", phonetic: "/pəˈliːs/", translation: "警察", example: "She called the police." },
  { id: "g2407", category: "高中3500词", word: "policeman", phonetic: "/pəˈliːsmən/", translation: "男警察", example: "The policeman helped the old lady." },
  { id: "g2408", category: "高中3500词", word: "policy", phonetic: "/ˈpɒləsi/", translation: "政策；方针", example: "The company has a strict safety policy." },
  { id: "g2409", category: "高中3500词", word: "polish", phonetic: "/ˈpɒlɪʃ/", translation: "磨光；润色", example: "She polished the silver until it shone." },
  { id: "g2410", category: "高中3500词", word: "polite", phonetic: "/pəˈlaɪt/", translation: "有礼貌的", example: "She is very polite." },
  { id: "g2411", category: "高中3500词", word: "political", phonetic: "/pəˈlɪtɪkl/", translation: "政治的", example: "She has strong political views." },
  { id: "g2412", category: "高中3500词", word: "politician", phonetic: "/ˌpɒləˈtɪʃn/", translation: "政治家", example: "He is a famous politician." },
  { id: "g2413", category: "高中3500词", word: "politics", phonetic: "/ˈpɒlətɪks/", translation: "政治", example: "He is interested in local politics." },
  { id: "g2414", category: "高中3500词", word: "pollute", phonetic: "/pəˈluːt/", translation: "污染", example: "Factories should not pollute the rivers." },
  { id: "g2415", category: "高中3500词", word: "pollution", phonetic: "/pəˈluːʃn/", translation: "污染", example: "Air pollution is a serious problem." },
  { id: "g2416", category: "高中3500词", word: "pond", phonetic: "/pɒnd/", translation: "池塘", example: "The ducks swam in the pond." },
  { id: "g2417", category: "高中3500词", word: "pool", phonetic: "/puːl/", translation: "水池；游泳池", example: "She swam in the pool." },
  { id: "g2418", category: "高中3500词", word: "poor", phonetic: "/pʊər/", translation: "贫穷的；可怜的", example: "The poor family needed help." },
  { id: "g2419", category: "高中3500词", word: "pop", phonetic: "/pɒp/", translation: "流行的；砰的一声", example: "She likes pop music." },
  { id: "g2420", category: "高中3500词", word: "popular", phonetic: "/ˈpɒpjələr/", translation: "流行的；受欢迎的", example: "This song is very popular among young people." },
  { id: "g2421", category: "高中3500词", word: "population", phonetic: "/ˌpɒpjuˈleɪʃn/", translation: "人口", example: "The population of the city is growing fast." },
  { id: "g2422", category: "高中3500词", word: "pork", phonetic: "/pɔːrk/", translation: "猪肉", example: "She bought some pork." },
  { id: "g2423", category: "高中3500词", word: "porridge", phonetic: "/ˈpɒrɪdʒ/", translation: "粥", example: "She had porridge for breakfast." },
  { id: "g2424", category: "高中3500词", word: "port", phonetic: "/pɔːrt/", translation: "港口", example: "The ship arrived at the port." },
  { id: "g2425", category: "高中3500词", word: "portable", phonetic: "/ˈpɔːrtəbl/", translation: "便携的", example: "She bought a portable computer." },
  { id: "g2426", category: "高中3500词", word: "porter", phonetic: "/ˈpɔːrtər/", translation: "搬运工", example: "The porter carried the luggage." },
  { id: "g2427", category: "高中3500词", word: "portion", phonetic: "/ˈpɔːrʃn/", translation: "部分；一份", example: "She ate a small portion." },
  { id: "g2428", category: "高中3500词", word: "portrait", phonetic: "/ˈpɔːrtreɪt/", translation: "肖像；描写", example: "She painted a portrait of her mother." },
  { id: "g2429", category: "高中3500词", word: "pose", phonetic: "/pəʊz/", translation: "姿势；提出", example: "She posed for a photograph." },
  { id: "g2430", category: "高中3500词", word: "position", phonetic: "/pəˈzɪʃn/", translation: "位置；职位", example: "She applied for the position." },
  { id: "g2431", category: "高中3500词", word: "positive", phonetic: "/ˈpɒzətɪv/", translation: "积极的；肯定的", example: "She has a positive attitude." },
  { id: "g2432", category: "高中3500词", word: "possess", phonetic: "/pəˈzes/", translation: "拥有；具有", example: "He possesses great wealth." },
  { id: "g2433", category: "高中3500词", word: "possession", phonetic: "/pəˈzeʃn/", translation: "财产；拥有", example: "She lost all her possessions." },
  { id: "g2434", category: "高中3500词", word: "possibility", phonetic: "/ˌpɒsəˈbɪləti/", translation: "可能性", example: "There is a possibility of rain." },
  { id: "g2435", category: "高中3500词", word: "possible", phonetic: "/ˈpɒsəbl/", translation: "可能的", example: "Is it possible to finish today?" },
  { id: "g2436", category: "高中3500词", word: "possibly", phonetic: "/ˈpɒsəbli/", translation: "可能地", example: "She could possibly come tomorrow." },
  { id: "g2437", category: "高中3500词", word: "post", phonetic: "/pəʊst/", translation: "邮寄；职位", example: "She posted the letter." },
  { id: "g2438", category: "高中3500词", word: "postage", phonetic: "/ˈpəʊstɪdʒ/", translation: "邮费", example: "The postage is two dollars." },
  { id: "g2439", category: "高中3500词", word: "postcard", phonetic: "/ˈpəʊstkɑːrd/", translation: "明信片", example: "She sent a postcard from Paris." },
  { id: "g2440", category: "高中3500词", word: "poster", phonetic: "/ˈpəʊstər/", translation: "海报", example: "She put up a poster." },
  { id: "g2441", category: "高中3500词", word: "postman", phonetic: "/ˈpəʊstmən/", translation: "邮递员", example: "The postman delivered the mail." },
  { id: "g2442", category: "高中3500词", word: "postpone", phonetic: "/pəˈspəʊn/", translation: "推迟；延期", example: "The meeting was postponed until next week." },
  { id: "g2443", category: "高中3500词", word: "pot", phonetic: "/pɒt/", translation: "锅；壶", example: "She boiled water in a pot." },
  { id: "g2444", category: "高中3500词", word: "potato", phonetic: "/pəˈteɪtəʊ/", translation: "土豆", example: "She made mashed potatoes." },
  { id: "g2445", category: "高中3500词", word: "potential", phonetic: "/pəˈtenʃl/", translation: "潜在的；潜力", example: "She has the potential to become a great leader." },
  { id: "g2446", category: "高中3500词", word: "pound", phonetic: "/paʊnd/", translation: "磅；英镑", example: "She lost five pounds." },
  { id: "g2447", category: "高中3500词", word: "pour", phonetic: "/pɔːr/", translation: "倒；倾泻", example: "She poured tea into the cup." },
  { id: "g2448", category: "高中3500词", word: "poverty", phonetic: "/ˈpɒvərti/", translation: "贫穷；贫困", example: "Many people live in poverty in this area." },
  { id: "g2449", category: "高中3500词", word: "powder", phonetic: "/ˈpaʊdər/", translation: "粉末", example: "She added some powder to the mixture." },
  { id: "g2450", category: "高中3500词", word: "power", phonetic: "/ˈpaʊər/", translation: "力量；权力", example: "Knowledge is power." },
  { id: "g2451", category: "高中3500词", word: "powerful", phonetic: "/ˈpaʊərfl/", translation: "强大的", example: "She is a powerful leader." },
  { id: "g2452", category: "高中3500词", word: "practical", phonetic: "/ˈpræktɪkl/", translation: "实际的；实用的", example: "We need a practical solution to the problem." },
  { id: "g2453", category: "高中3500词", word: "practice", phonetic: "/ˈpræktɪs/", translation: "练习；实践", example: "Practice makes perfect." },
  { id: "g2454", category: "高中3500词", word: "praise", phonetic: "/preɪz/", translation: "表扬；赞美", example: "The teacher praised the student for his effort." },
  { id: "g2455", category: "高中3500词", word: "pray", phonetic: "/preɪ/", translation: "祈祷", example: "She prayed for peace." },
  { id: "g2456", category: "高中3500词", word: "prayer", phonetic: "/preər/", translation: "祈祷", example: "She said a prayer." },
  { id: "g2457", category: "高中3500词", word: "precious", phonetic: "/ˈpreʃəs/", translation: "珍贵的；宝贵的", example: "Time is the most precious thing we have." },
  { id: "g2458", category: "高中3500词", word: "precise", phonetic: "/prɪˈsaɪs/", translation: "精确的；准确的", example: "Please give me the precise location." },
  { id: "g2459", category: "高中3500词", word: "predict", phonetic: "/prɪˈdɪkt/", translation: "预测；预言", example: "It is difficult to predict the weather." },
  { id: "g2460", category: "高中3500词", word: "preference", phonetic: "/ˈprefərəns/", translation: "偏好；优先", example: "She has a preference for classical music." },
  { id: "g2461", category: "高中3500词", word: "pregnant", phonetic: "/ˈpreɡnənt/", translation: "怀孕的", example: "She is pregnant with her first child." },
  { id: "g2462", category: "高中3500词", word: "prejudice", phonetic: "/ˈpredʒudɪs/", translation: "偏见；歧视", example: "We should fight against racial prejudice." },
  { id: "g2463", category: "高中3500词", word: "preparation", phonetic: "/ˌprepəˈreɪʃn/", translation: "准备", example: "She made preparations for the trip." },
  { id: "g2464", category: "高中3500词", word: "prepare", phonetic: "/prɪˈpeər/", translation: "准备", example: "She is preparing for the final exam." },
  { id: "g2465", category: "高中3500词", word: "prescribe", phonetic: "/prɪˈskraɪb/", translation: "开处方", example: "The doctor prescribed some medicine." },
  { id: "g2466", category: "高中3500词", word: "presence", phonetic: "/ˈprezns/", translation: "出席；存在", example: "She was surprised by his presence." },
  { id: "g2467", category: "高中3500词", word: "present", phonetic: "/ˈpreznt/", translation: "现在的；礼物", example: "She received many presents." },
  { id: "g2468", category: "高中3500词", word: "presentation", phonetic: "/ˌpreznˈteɪʃn/", translation: "展示；报告", example: "She gave a presentation." },
  { id: "g2469", category: "高中3500词", word: "preserve", phonetic: "/prɪˈzɜːrv/", translation: "保存；保护", example: "We must preserve our cultural heritage." },
  { id: "g2470", category: "高中3500词", word: "president", phonetic: "/ˈprezɪdənt/", translation: "总统；主席", example: "The president made a speech." },
  { id: "g2471", category: "高中3500词", word: "press", phonetic: "/pres/", translation: "按；新闻", example: "Press the button to start." },
  { id: "g2472", category: "高中3500词", word: "pressure", phonetic: "/ˈpreʃər/", translation: "压力；压强", example: "She is under a lot of pressure at work." },
  { id: "g2473", category: "高中3500词", word: "pretend", phonetic: "/prɪˈtend/", translation: "假装", example: "He pretended not to hear the question." },
  { id: "g2474", category: "高中3500词", word: "pretty", phonetic: "/ˈprɪti/", translation: "漂亮的；相当", example: "She looks pretty today." },
  { id: "g2475", category: "高中3500词", word: "prevent", phonetic: "/prɪˈvent/", translation: "阻止；预防", example: "She prevented the accident." },
  { id: "g2476", category: "高中3500词", word: "previous", phonetic: "/ˈpriːviəs/", translation: "以前的；先前的", example: "She had no previous experience in teaching." },
  { id: "g2477", category: "高中3500词", word: "previously", phonetic: "/ˈpriːviəsli/", translation: "以前", example: "She had previously worked in London." },
  { id: "g2478", category: "高中3500词", word: "price", phonetic: "/praɪs/", translation: "价格", example: "What is the price of this book?" },
  { id: "g2479", category: "高中3500词", word: "pride", phonetic: "/praɪd/", translation: "骄傲；自豪", example: "She takes pride in her work." },
  { id: "g2480", category: "高中3500词", word: "primary", phonetic: "/ˈpraɪməri/", translation: "主要的；初等的", example: "She is in primary school." },
  { id: "g2481", category: "高中3500词", word: "prime", phonetic: "/praɪm/", translation: "首要的；最佳的", example: "She is in her prime." },
  { id: "g2482", category: "高中3500词", word: "primitive", phonetic: "/ˈprɪmɪtɪv/", translation: "原始的", example: "They lived in primitive conditions." },
  { id: "g2483", category: "高中3500词", word: "prince", phonetic: "/prɪns/", translation: "王子", example: "The prince married a commoner." },
  { id: "g2484", category: "高中3500词", word: "princess", phonetic: "/ˌprɪnˈses/", translation: "公主", example: "The princess lived in a castle." },
  { id: "g2485", category: "高中3500词", word: "principal", phonetic: "/ˈprɪnsəpl/", translation: "主要的；校长", example: "The principal cause was poverty." },
  { id: "g2486", category: "高中3500词", word: "principle", phonetic: "/ˈprɪnsəpl/", translation: "原则；原理", example: "He sticks to his principles no matter what." },
  { id: "g2487", category: "高中3500词", word: "print", phonetic: "/prɪnt/", translation: "打印", example: "She printed the document." },
  { id: "g2488", category: "高中3500词", word: "printer", phonetic: "/ˈprɪntər/", translation: "打印机", example: "The printer is out of ink." },
  { id: "g2489", category: "高中3500词", word: "prior", phonetic: "/ˈpraɪər/", translation: "先前的", example: "She had no prior knowledge." },
  { id: "g2490", category: "高中3500词", word: "priority", phonetic: "/praɪˈɒrəti/", translation: "优先；优先事项", example: "Education should be a top priority." },
  { id: "g2491", category: "高中3500词", word: "prison", phonetic: "/ˈprɪzn/", translation: "监狱", example: "He was sent to prison." },
  { id: "g2492", category: "高中3500词", word: "prisoner", phonetic: "/ˈprɪznər/", translation: "囚犯", example: "The prisoner escaped." },
  { id: "g2493", category: "高中3500词", word: "private", phonetic: "/ˈpraɪvət/", translation: "私人的", example: "This is a private matter." },
  { id: "g2494", category: "高中3500词", word: "privilege", phonetic: "/ˈprɪvəlɪdʒ/", translation: "特权；荣幸", example: "It is a privilege to work with you." },
  { id: "g2495", category: "高中3500词", word: "prize", phonetic: "/praɪz/", translation: "奖品；奖赏", example: "She won first prize." },
  { id: "g2496", category: "高中3500词", word: "probable", phonetic: "/ˈprɒbəbl/", translation: "可能的", example: "It is probable that it will rain." },
  { id: "g2497", category: "高中3500词", word: "probably", phonetic: "/ˈprɒbəbli/", translation: "大概", example: "She will probably come." },
  { id: "g2498", category: "高中3500词", word: "problem", phonetic: "/ˈprɒbləm/", translation: "问题", example: "What is the problem?" },
  { id: "g2499", category: "高中3500词", word: "procedure", phonetic: "/prəˈsiːdʒər/", translation: "程序；步骤", example: "Follow the procedure carefully." },
  { id: "g2500", category: "高中3500词", word: "proceed", phonetic: "/prəˈsiːd/", translation: "继续；进行", example: "Please proceed with the next step." },
  { id: "g2501", category: "高中3500词", word: "process", phonetic: "/ˈprəʊses/", translation: "过程；加工", example: "Learning is a gradual process." },
  { id: "g2502", category: "高中3500词", word: "produce", phonetic: "/prəˈdjuːs/", translation: "生产；农产品", example: "The factory produces cars." },
  { id: "g2503", category: "高中3500词", word: "product", phonetic: "/ˈprɒdʌkt/", translation: "产品", example: "The product is of high quality." },
  { id: "g2504", category: "高中3500词", word: "production", phonetic: "/prəˈdʌkʃn/", translation: "生产", example: "Production has increased." },
  { id: "g2505", category: "高中3500词", word: "profession", phonetic: "/prəˈfeʃn/", translation: "职业；专业", example: "Teaching is a noble profession." },
  { id: "g2506", category: "高中3500词", word: "professional", phonetic: "/prəˈfeʃənl/", translation: "专业的", example: "She is a professional dancer." },
  { id: "g2507", category: "高中3500词", word: "professor", phonetic: "/prəˈfesər/", translation: "教授", example: "She is a university professor." },
  { id: "g2508", category: "高中3500词", word: "profile", phonetic: "/ˈprəʊfaɪl/", translation: "简介；轮廓", example: "She updated her online profile." },
  { id: "g2509", category: "高中3500词", word: "profit", phonetic: "/ˈprɒfɪt/", translation: "利润；收益", example: "The company made a large profit this year." },
  { id: "g2510", category: "高中3500词", word: "program", phonetic: "/ˈprəʊɡræm/", translation: "程序；节目", example: "The computer program is very useful." },
  { id: "g2511", category: "高中3500词", word: "progress", phonetic: "/ˈprəʊɡres/", translation: "进步；进展", example: "She has made great progress in English." },
  { id: "g2512", category: "高中3500词", word: "project", phonetic: "/ˈprɒdʒekt/", translation: "项目；工程", example: "The project was completed on time." },
  { id: "g2513", category: "高中3500词", word: "promise", phonetic: "/ˈprɒmɪs/", translation: "承诺", example: "She promised to come early." },
  { id: "g2514", category: "高中3500词", word: "promote", phonetic: "/prəˈməʊt/", translation: "促进；推广", example: "The campaign promotes healthy eating." },
  { id: "g2515", category: "高中3500词", word: "prompt", phonetic: "/prɒmpt/", translation: "促使；迅速的", example: "His curiosity prompted him to ask questions." },
  { id: "g2516", category: "高中3500词", word: "pronounce", phonetic: "/prəˈnaʊns/", translation: "发音", example: "How do you pronounce this word?" },
  { id: "g2517", category: "高中3500词", word: "pronunciation", phonetic: "/prəˌnʌnsiˈeɪʃn/", translation: "发音", example: "Her pronunciation is excellent." },
  { id: "g2518", category: "高中3500词", word: "proof", phonetic: "/pruːf/", translation: "证据", example: "She had no proof of the claim." },
  { id: "g2519", category: "高中3500词", word: "proper", phonetic: "/ˈprɒpər/", translation: "适当的", example: "She did the proper thing." },
  { id: "g2520", category: "高中3500词", word: "properly", phonetic: "/ˈprɒpəli/", translation: "适当地", example: "She handled the situation properly." },
  { id: "g2521", category: "高中3500词", word: "property", phonetic: "/ˈprɒpərti/", translation: "财产；性质", example: "She owns a lot of property." },
  { id: "g2522", category: "高中3500词", word: "proportion", phonetic: "/prəˈpɔːʃn/", translation: "比例；部分", example: "A large proportion of students passed the exam." },
  { id: "g2523", category: "高中3500词", word: "proposal", phonetic: "/prəˈpəʊzl/", translation: "提议；求婚", example: "She made a proposal." },
  { id: "g2524", category: "高中3500词", word: "propose", phonetic: "/prəˈpəʊz/", translation: "提议；建议", example: "He proposed a new plan for the project." },
  { id: "g2525", category: "高中3500词", word: "prospect", phonetic: "/ˈprɒspekt/", translation: "前景；展望", example: "The prospects for economic growth are good." },
  { id: "g2526", category: "高中3500词", word: "protect", phonetic: "/prəˈtekt/", translation: "保护", example: "We must protect the environment for future generations." },
  { id: "g2527", category: "高中3500词", word: "protection", phonetic: "/prəˈtekʃn/", translation: "保护", example: "She needs protection." },
  { id: "g2528", category: "高中3500词", word: "protest", phonetic: "/prəˈtest/", translation: "抗议；反对", example: "Citizens protested against the new law." },
  { id: "g2529", category: "高中3500词", word: "proud", phonetic: "/praʊd/", translation: "骄傲的", example: "She is proud of her children." },
  { id: "g2530", category: "高中3500词", word: "prove", phonetic: "/pruːv/", translation: "证明", example: "He proved that he was innocent." },
  { id: "g2531", category: "高中3500词", word: "provide", phonetic: "/prəˈvaɪd/", translation: "提供", example: "The school provides free meals for students." },
  { id: "g2532", category: "高中3500词", word: "provided", phonetic: "/prəˈvaɪdɪd/", translation: "如果；假如", example: "I will go provided you come too." },
  { id: "g2533", category: "高中3500词", word: "province", phonetic: "/ˈprɒvɪns/", translation: "省", example: "She lives in Guangdong Province." },
  { id: "g2534", category: "高中3500词", word: "provision", phonetic: "/prəˈvɪʒn/", translation: "供应；规定", example: "The provision of food was inadequate." },
  { id: "g2535", category: "高中3500词", word: "provoke", phonetic: "/prəˈvəʊk/", translation: "激怒；引起", example: "His comments provoked a strong reaction." },
  { id: "g2536", category: "高中3500词", word: "psychology", phonetic: "/saɪˈkɒlədʒi/", translation: "心理学", example: "She is studying psychology." },
  { id: "g2537", category: "高中3500词", word: "pub", phonetic: "/pʌb/", translation: "酒馆", example: "They met at the pub." },
  { id: "g2538", category: "高中3500词", word: "public", phonetic: "/ˈpʌblɪk/", translation: "公共的；公众", example: "The park is open to the public." },
  { id: "g2539", category: "高中3500词", word: "publication", phonetic: "/ˌpʌblɪˈkeɪʃn/", translation: "出版；出版物", example: "The publication of the book was delayed." },
  { id: "g2540", category: "高中3500词", word: "publish", phonetic: "/ˈpʌblɪʃ/", translation: "出版；发表", example: "She published her first novel at age 25." },
  { id: "g2541", category: "高中3500词", word: "pull", phonetic: "/pʊl/", translation: "拉", example: "She pulled the door open." },
  { id: "g2542", category: "高中3500词", word: "pulse", phonetic: "/pʌls/", translation: "脉搏", example: "The nurse checked his pulse." },
  { id: "g2543", category: "高中3500词", word: "pump", phonetic: "/pʌmp/", translation: "泵；抽水", example: "She pumped air into the tire." },
  { id: "g2544", category: "高中3500词", word: "punch", phonetic: "/pʌntʃ/", translation: "打孔；拳击", example: "He punched the wall in anger." },
  { id: "g2545", category: "高中3500词", word: "punish", phonetic: "/ˈpʌnɪʃ/", translation: "惩罚", example: "She was punished for being late." },
  { id: "g2546", category: "高中3500词", word: "punishment", phonetic: "/ˈpʌnɪʃmənt/", translation: "惩罚", example: "The punishment was too severe." },
  { id: "g2547", category: "高中3500词", word: "pupil", phonetic: "/ˈpjuːpl/", translation: "学生；瞳孔", example: "She is a pupil at the local school." },
  { id: "g2548", category: "高中3500词", word: "purchase", phonetic: "/ˈpɜːrtʃəs/", translation: "购买", example: "She purchased a new laptop online." },
  { id: "g2549", category: "高中3500词", word: "pure", phonetic: "/pjʊər/", translation: "纯净的；纯粹的", example: "The water is pure." },
  { id: "g2550", category: "高中3500词", word: "purple", phonetic: "/ˈpɜːrpl/", translation: "紫色的", example: "She wore a purple dress." },
  { id: "g2551", category: "高中3500词", word: "purpose", phonetic: "/ˈpɜːrpəs/", translation: "目的", example: "What is the purpose of the meeting?" },
  { id: "g2552", category: "高中3500词", word: "purse", phonetic: "/pɜːrs/", translation: "钱包", example: "She lost her purse." },
  { id: "g2553", category: "高中3500词", word: "pursue", phonetic: "/pərˈsjuː/", translation: "追求", example: "She pursued her dream." },
  { id: "g2554", category: "高中3500词", word: "pursuit", phonetic: "/pərˈsjuːt/", translation: "追求", example: "The pursuit of happiness is important." },
  { id: "g2555", category: "高中3500词", word: "push", phonetic: "/pʊʃ/", translation: "推", example: "She pushed the door open." },
  { id: "g2556", category: "高中3500词", word: "put", phonetic: "/pʊt/", translation: "放", example: "She put the book on the table." },
  { id: "g2557", category: "高中3500词", word: "puzzle", phonetic: "/ˈpʌzl/", translation: "谜；困惑", example: "She solved the puzzle." },
  { id: "g2558", category: "高中3500词", word: "qualify", phonetic: "/ˈkwɒlɪfaɪ/", translation: "使合格；取得资格", example: "She qualified as a doctor last year." },
  { id: "g2559", category: "高中3500词", word: "quality", phonetic: "/ˈkwɒləti/", translation: "质量；品质", example: "The quality of the product is excellent." },
  { id: "g2560", category: "高中3500词", word: "quantity", phonetic: "/ˈkwɒntəti/", translation: "数量", example: "We need a large quantity of food for the event." },
  { id: "g2561", category: "高中3500词", word: "quarrel", phonetic: "/ˈkwɒrəl/", translation: "争吵", example: "They had a quarrel about money." },
  { id: "g2562", category: "高中3500词", word: "quarter", phonetic: "/ˈkwɔːrtər/", translation: "四分之一", example: "A quarter of the students are girls." },
  { id: "g2563", category: "高中3500词", word: "queen", phonetic: "/kwiːn/", translation: "女王；王后", example: "The queen addressed the nation." },
  { id: "g2564", category: "高中3500词", word: "question", phonetic: "/ˈkwestʃən/", translation: "问题", example: "She asked a question." },
  { id: "g2565", category: "高中3500词", word: "queue", phonetic: "/kjuː/", translation: "队列；排队", example: "People queued up to buy tickets." },
  { id: "g2566", category: "高中3500词", word: "quick", phonetic: "/kwɪk/", translation: "快的", example: "She is a quick learner." },
  { id: "g2567", category: "高中3500词", word: "quickly", phonetic: "/ˈkwɪkli/", translation: "快速地", example: "She finished the work quickly." },
  { id: "g2568", category: "高中3500词", word: "quiet", phonetic: "/ˈkwaɪət/", translation: "安静的", example: "Please be quiet." },
  { id: "g2569", category: "高中3500词", word: "quietly", phonetic: "/ˈkwaɪətli/", translation: "安静地", example: "She left the room quietly." },
  { id: "g2570", category: "高中3500词", word: "quit", phonetic: "/kwɪt/", translation: "放弃；退出", example: "He quit smoking last year." },
  { id: "g2571", category: "高中3500词", word: "quite", phonetic: "/kwaɪt/", translation: "相当", example: "She is quite tall." },
  { id: "g2572", category: "高中3500词", word: "quiz", phonetic: "/kwɪz/", translation: "测验", example: "We had a quiz in class." },
  { id: "g2573", category: "高中3500词", word: "quote", phonetic: "/kwəʊt/", translation: "引用；报价", example: "She quoted a famous poet in her speech." },
  { id: "g2574", category: "高中3500词", word: "rabbit", phonetic: "/ˈræbɪt/", translation: "兔子", example: "The rabbit hopped across the field." },
  { id: "g2575", category: "高中3500词", word: "race", phonetic: "/reɪs/", translation: "比赛；种族", example: "She won the race." },
  { id: "g2576", category: "高中3500词", word: "racial", phonetic: "/ˈreɪʃl/", translation: "种族的", example: "Racial equality is important." },
  { id: "g2577", category: "高中3500词", word: "radiation", phonetic: "/ˌreɪdiˈeɪʃn/", translation: "辐射", example: "The radiation level is high." },
  { id: "g2578", category: "高中3500词", word: "radical", phonetic: "/ˈrædɪkl/", translation: "根本的；激进的", example: "She proposed radical changes." },
  { id: "g2579", category: "高中3500词", word: "radio", phonetic: "/ˈreɪdiəʊ/", translation: "收音机；无线电", example: "She listened to the radio." },
  { id: "g2580", category: "高中3500词", word: "rag", phonetic: "/ræɡ/", translation: "破布", example: "She cleaned the window with a rag." },
  { id: "g2581", category: "高中3500词", word: "rage", phonetic: "/reɪdʒ/", translation: "愤怒", example: "He flew into a rage." },
  { id: "g2582", category: "高中3500词", word: "rail", phonetic: "/reɪl/", translation: "铁路；栏杆", example: "She leaned on the rail." },
  { id: "g2583", category: "高中3500词", word: "railroad", phonetic: "/ˈreɪlrəʊd/", translation: "铁路", example: "The railroad crosses the country." },
  { id: "g2584", category: "高中3500词", word: "railway", phonetic: "/ˈreɪlweɪ/", translation: "铁路", example: "She traveled by railway." },
  { id: "g2585", category: "高中3500词", word: "rain", phonetic: "/reɪn/", translation: "雨", example: "It is raining outside." },
  { id: "g2586", category: "高中3500词", word: "rainbow", phonetic: "/ˈreɪnbəʊ/", translation: "彩虹", example: "A rainbow appeared after the rain." },
  { id: "g2587", category: "高中3500词", word: "raincoat", phonetic: "/ˈreɪnkəʊt/", translation: "雨衣", example: "She wore a raincoat." },
  { id: "g2588", category: "高中3500词", word: "rainy", phonetic: "/ˈreɪni/", translation: "多雨的", example: "It is a rainy day." },
  { id: "g2589", category: "高中3500词", word: "raise", phonetic: "/reɪz/", translation: "举起；筹集", example: "She raised her hand." },
  { id: "g2590", category: "高中3500词", word: "random", phonetic: "/ˈrændəm/", translation: "随机的；任意的", example: "The sample was selected at random." },
  { id: "g2591", category: "高中3500词", word: "range", phonetic: "/reɪndʒ/", translation: "范围；幅度", example: "The price range is from $10 to $50." },
  { id: "g2592", category: "高中3500词", word: "rank", phonetic: "/ræŋk/", translation: "等级；排名", example: "She ranks first in her class." },
  { id: "g2593", category: "高中3500词", word: "rapid", phonetic: "/ˈræpɪd/", translation: "迅速的", example: "The city has seen rapid growth." },
  { id: "g2594", category: "高中3500词", word: "rare", phonetic: "/reər/", translation: "稀有的；罕见的", example: "This is a rare opportunity." },
  { id: "g2595", category: "高中3500词", word: "rarely", phonetic: "/ˈreəli/", translation: "很少", example: "She rarely goes out." },
  { id: "g2596", category: "高中3500词", word: "rat", phonetic: "/ræt/", translation: "老鼠", example: "The rat ran across the floor." },
  { id: "g2597", category: "高中3500词", word: "rate", phonetic: "/reɪt/", translation: "比率；速率", example: "The unemployment rate has risen." },
  { id: "g2598", category: "高中3500词", word: "rather", phonetic: "/ˈrɑːðər/", translation: "相当；宁愿", example: "I would rather stay home." },
  { id: "g2599", category: "高中3500词", word: "raw", phonetic: "/rɔː/", translation: "生的；未加工的", example: "She ate raw vegetables." },
  { id: "g2600", category: "高中3500词", word: "ray", phonetic: "/reɪ/", translation: "光线", example: "A ray of sunlight came through." },
  { id: "g2601", category: "高中3500词", word: "reach", phonetic: "/riːtʃ/", translation: "到达；伸手", example: "She reached the station on time." },
  { id: "g2602", category: "高中3500词", word: "react", phonetic: "/riˈækt/", translation: "反应", example: "How did she react to the news?" },
  { id: "g2603", category: "高中3500词", word: "reaction", phonetic: "/riˈækʃn/", translation: "反应", example: "What was her reaction?" },
  { id: "g2604", category: "高中3500词", word: "read", phonetic: "/riːd/", translation: "阅读", example: "She reads every day." },
  { id: "g2605", category: "高中3500词", word: "reader", phonetic: "/ˈriːdər/", translation: "读者", example: "She is an avid reader." },
  { id: "g2606", category: "高中3500词", word: "reading", phonetic: "/ˈriːdɪŋ/", translation: "阅读", example: "She enjoys reading." },
  { id: "g2607", category: "高中3500词", word: "ready", phonetic: "/ˈredi/", translation: "准备好的", example: "Are you ready?" },
  { id: "g2608", category: "高中3500词", word: "real", phonetic: "/rɪəl/", translation: "真实的", example: "Is this real gold?" },
  { id: "g2609", category: "高中3500词", word: "realistic", phonetic: "/ˌriːəˈlɪstɪk/", translation: "现实的", example: "She has realistic expectations." },
  { id: "g2610", category: "高中3500词", word: "reality", phonetic: "/riˈæləti/", translation: "现实", example: "We must face reality." },
  { id: "g2611", category: "高中3500词", word: "realize", phonetic: "/ˈriːəlaɪz/", translation: "意识到；实现", example: "She realized her mistake." },
  { id: "g2612", category: "高中3500词", word: "really", phonetic: "/ˈrɪːəli/", translation: "真正地", example: "She is really talented." },
  { id: "g2613", category: "高中3500词", word: "reason", phonetic: "/ˈriːzn/", translation: "原因；推理", example: "What is the reason?" },
  { id: "g2614", category: "高中3500词", word: "reasonable", phonetic: "/ˈriːznəbl/", translation: "合理的；公道的", example: "The price seems reasonable." },
  { id: "g2615", category: "高中3500词", word: "rebel", phonetic: "/rɪˈbel/", translation: "反叛", example: "The students rebelled against the rules." },
  { id: "g2616", category: "高中3500词", word: "recall", phonetic: "/rɪˈkɔːl/", translation: "回忆；召回", example: "I can't recall his name." },
  { id: "g2617", category: "高中3500词", word: "receive", phonetic: "/rɪˈsiːv/", translation: "收到", example: "She received a letter." },
  { id: "g2618", category: "高中3500词", word: "recent", phonetic: "/ˈriːsnt/", translation: "最近的", example: "She made a recent discovery." },
  { id: "g2619", category: "高中3500词", word: "recently", phonetic: "/ˈriːsntli/", translation: "最近", example: "She recently moved to Beijing." },
  { id: "g2620", category: "高中3500词", word: "reception", phonetic: "/rɪˈsepʃn/", translation: "接待；欢迎会", example: "The reception was held in the garden." },
  { id: "g2621", category: "高中3500词", word: "recipe", phonetic: "/ˈresəpi/", translation: "食谱", example: "She followed a recipe." },
  { id: "g2622", category: "高中3500词", word: "recite", phonetic: "/rɪˈsaɪt/", translation: "背诵", example: "She recited a poem." },
  { id: "g2623", category: "高中3500词", word: "recognize", phonetic: "/ˈrekəɡnaɪz/", translation: "认出；承认", example: "I didn't recognize her at first." },
  { id: "g2624", category: "高中3500词", word: "recommend", phonetic: "/ˌrekəˈmend/", translation: "推荐；建议", example: "I recommend this book to everyone." },
  { id: "g2625", category: "高中3500词", word: "record", phonetic: "/ˈrekɔːrd/", translation: "记录；唱片", example: "She set a new record." },
  { id: "g2626", category: "高中3500词", word: "recorder", phonetic: "/rɪˈkɔːrdər/", translation: "录音机", example: "She used a recorder." },
  { id: "g2627", category: "高中3500词", word: "recover", phonetic: "/rɪˈkʌvər/", translation: "恢复；康复", example: "She is recovering from the illness." },
  { id: "g2628", category: "高中3500词", word: "recreation", phonetic: "/ˌrekriˈeɪʃn/", translation: "娱乐", example: "She enjoys outdoor recreation." },
  { id: "g2629", category: "高中3500词", word: "recycle", phonetic: "/ˌriːˈsaɪkl/", translation: "回收利用", example: "We should recycle paper." },
  { id: "g2630", category: "高中3500词", word: "red", phonetic: "/red/", translation: "红色的", example: "She wore a red dress." },
  { id: "g2631", category: "高中3500词", word: "reduce", phonetic: "/rɪˈdjuːs/", translation: "减少；降低", example: "We must reduce carbon emissions." },
  { id: "g2632", category: "高中3500词", word: "refer", phonetic: "/rɪˈfɜːr/", translation: "提及；参考", example: "Please refer to the manual for details." },
  { id: "g2633", category: "高中3500词", word: "reference", phonetic: "/ˈrefərəns/", translation: "参考；推荐信", example: "She provided a reference." },
  { id: "g2634", category: "高中3500词", word: "reflect", phonetic: "/rɪˈflekt/", translation: "反映；反射", example: "The results reflect the students' hard work." },
  { id: "g2635", category: "高中3500词", word: "reflection", phonetic: "/rɪˈflekʃn/", translation: "反映；倒影", example: "She saw her reflection in the water." },
  { id: "g2636", category: "高中3500词", word: "reform", phonetic: "/rɪˈfɔːrm/", translation: "改革", example: "The government carried out educational reform." },
  { id: "g2637", category: "高中3500词", word: "refresh", phonetic: "/rɪˈfreʃ/", translation: "使恢复；刷新", example: "A cup of coffee will refresh you." },
  { id: "g2638", category: "高中3500词", word: "refrigerator", phonetic: "/rɪˈfrɪdʒəreɪtər/", translation: "冰箱", example: "Put the milk in the refrigerator." },
  { id: "g2639", category: "高中3500词", word: "refuse", phonetic: "/rɪˈfjuːz/", translation: "拒绝", example: "She refused to answer the question." },
  { id: "g2640", category: "高中3500词", word: "regard", phonetic: "/rɪˈɡɑːrd/", translation: "看待；关于", example: "I regard him as my best friend." },
  { id: "g2641", category: "高中3500词", word: "regarding", phonetic: "/rɪˈɡɑːrdɪŋ/", translation: "关于", example: "She asked regarding the schedule." },
  { id: "g2642", category: "高中3500词", word: "region", phonetic: "/ˈriːdʒən/", translation: "地区", example: "She lives in a mountainous region." },
  { id: "g2643", category: "高中3500词", word: "register", phonetic: "/ˈredʒɪstər/", translation: "注册；登记", example: "You need to register online first." },
  { id: "g2644", category: "高中3500词", word: "regret", phonetic: "/rɪˈɡret/", translation: "遗憾；后悔", example: "She regretted her decision." },
  { id: "g2645", category: "高中3500词", word: "regular", phonetic: "/ˈreɡjələr/", translation: "规律的；定期的", example: "She has a regular routine." },
  { id: "g2646", category: "高中3500词", word: "regulate", phonetic: "/ˈreɡjuleɪt/", translation: "调节；管理", example: "The government regulates the industry." },
  { id: "g2647", category: "高中3500词", word: "regulation", phonetic: "/ˌreɡjuˈleɪʃn/", translation: "规则；管理", example: "There are strict regulations." },
  { id: "g2648", category: "高中3500词", word: "reject", phonetic: "/rɪˈdʒekt/", translation: "拒绝；驳回", example: "The committee rejected the proposal." },
  { id: "g2649", category: "高中3500词", word: "relate", phonetic: "/rɪˈleɪt/", translation: "联系；涉及", example: "How does this relate to the topic?" },
  { id: "g2650", category: "高中3500词", word: "relation", phonetic: "/rɪˈleɪʃn/", translation: "关系；亲戚", example: "She has good relations with her neighbors." },
  { id: "g2651", category: "高中3500词", word: "relationship", phonetic: "/rɪˈleɪʃnʃɪp/", translation: "关系", example: "Their relationship is strong." },
  { id: "g2652", category: "高中3500词", word: "relative", phonetic: "/ˈrelətɪv/", translation: "亲戚；相对的", example: "She has many relatives in the city." },
  { id: "g2653", category: "高中3500词", word: "relax", phonetic: "/rɪˈlæks/", translation: "放松", example: "She relaxed on the beach." },
  { id: "g2654", category: "高中3500词", word: "relay", phonetic: "/rɪˈleɪ/", translation: "转播；接力", example: "She relayed the message." },
  { id: "g2655", category: "高中3500词", word: "release", phonetic: "/rɪˈliːs/", translation: "释放；发布", example: "The film will be released next month." },
  { id: "g2656", category: "高中3500词", word: "relevant", phonetic: "/ˈreləvənt/", translation: "相关的", example: "Please provide all relevant documents." },
  { id: "g2657", category: "高中3500词", word: "reliable", phonetic: "/rɪˈlaɪəbl/", translation: "可靠的", example: "She is a reliable friend." },
  { id: "g2658", category: "高中3500词", word: "relief", phonetic: "/rɪˈliːf/", translation: "宽慰；救济", example: "It was a relief to hear the good news." },
  { id: "g2659", category: "高中3500词", word: "religion", phonetic: "/rɪˈlɪdʒən/", translation: "宗教", example: "Freedom of religion is a basic right." },
  { id: "g2660", category: "高中3500词", word: "religious", phonetic: "/rɪˈlɪdʒəs/", translation: "宗教的", example: "She is a religious person." },
  { id: "g2661", category: "高中3500词", word: "reluctant", phonetic: "/rɪˈlʌktənt/", translation: "不情愿的", example: "He was reluctant to admit his mistake." },
  { id: "g2662", category: "高中3500词", word: "rely", phonetic: "/rɪˈlaɪ/", translation: "依赖；依靠", example: "You can rely on me for help." },
  { id: "g2663", category: "高中3500词", word: "remain", phonetic: "/rɪˈmeɪn/", translation: "保持；剩余", example: "She remained calm during the crisis." },
  { id: "g2664", category: "高中3500词", word: "remark", phonetic: "/rɪˈmɑːrk/", translation: "评论；言辞", example: "He made a rude remark about her." },
  { id: "g2665", category: "高中3500词", word: "remarkable", phonetic: "/rɪˈmɑːrkəbl/", translation: "显著的", example: "She made remarkable progress." },
  { id: "g2666", category: "高中3500词", word: "remedy", phonetic: "/ˈremədi/", translation: "补救；治疗", example: "There is no easy remedy for the problem." },
  { id: "g2667", category: "高中3500词", word: "remember", phonetic: "/rɪˈmembər/", translation: "记住", example: "Remember to lock the door." },
  { id: "g2668", category: "高中3500词", word: "remind", phonetic: "/rɪˈmaɪnd/", translation: "提醒", example: "She reminded me of the meeting." },
  { id: "g2669", category: "高中3500词", word: "remote", phonetic: "/rɪˈməʊt/", translation: "偏远的；遥控的", example: "They live in a remote village." },
  { id: "g2670", category: "高中3500词", word: "remove", phonetic: "/rɪˈmuːv/", translation: "移除；消除", example: "Please remove your shoes before entering." },
  { id: "g2671", category: "高中3500词", word: "renew", phonetic: "/rɪˈnjuː/", translation: "续期；更新", example: "I need to renew my passport." },
  { id: "g2672", category: "高中3500词", word: "rent", phonetic: "/rent/", translation: "租金；租用", example: "How much is the rent for this apartment?" },
  { id: "g2673", category: "高中3500词", word: "repair", phonetic: "/rɪˈpeər/", translation: "修理；修补", example: "He repaired the broken window." },
  { id: "g2674", category: "高中3500词", word: "repeat", phonetic: "/rɪˈpiːt/", translation: "重复", example: "Could you repeat that, please?" },
  { id: "g2675", category: "高中3500词", word: "replace", phonetic: "/rɪˈpleɪs/", translation: "替换；取代", example: "She replaced the old computer with a new one." },
  { id: "g2676", category: "高中3500词", word: "reply", phonetic: "/rɪˈplaɪ/", translation: "回复", example: "She replied to the email." },
  { id: "g2677", category: "高中3500词", word: "report", phonetic: "/rɪˈpɔːrt/", translation: "报告", example: "She wrote a report." },
  { id: "g2678", category: "高中3500词", word: "reporter", phonetic: "/rɪˈpɔːrtər/", translation: "记者", example: "She is a news reporter." },
  { id: "g2679", category: "高中3500词", word: "represent", phonetic: "/ˌreprɪˈzent/", translation: "代表；表示", example: "The dove represents peace." },
  { id: "g2680", category: "高中3500词", word: "representative", phonetic: "/ˌreprɪˈzentətɪv/", translation: "代表", example: "She is a union representative." },
  { id: "g2681", category: "高中3500词", word: "republic", phonetic: "/rɪˈpʌblɪk/", translation: "共和国", example: "China is a people's republic." },
  { id: "g2682", category: "高中3500词", word: "reputation", phonetic: "/ˌrepjuˈteɪʃn/", translation: "名声；声誉", example: "The restaurant has a good reputation." },
  { id: "g2683", category: "高中3500词", word: "request", phonetic: "/rɪˈkwest/", translation: "请求；要求", example: "He made a request for help." },
  { id: "g2684", category: "高中3500词", word: "require", phonetic: "/rɪˈkwaɪər/", translation: "需要；要求", example: "The job requires a lot of patience." },
  { id: "g2685", category: "高中3500词", word: "requirement", phonetic: "/rɪˈkwaɪəmənt/", translation: "要求", example: "What are the requirements?" },
  { id: "g2686", category: "高中3500词", word: "rescue", phonetic: "/ˈreskjuː/", translation: "营救；救援", example: "The firefighters rescued the people from the building." },
  { id: "g2687", category: "高中3500词", word: "research", phonetic: "/rɪˈsɜːrtʃ/", translation: "研究", example: "She is doing research." },
  { id: "g2688", category: "高中3500词", word: "researcher", phonetic: "/rɪˈsɜːrtʃər/", translation: "研究人员", example: "She is a researcher." },
  { id: "g2689", category: "高中3500词", word: "resemble", phonetic: "/rɪˈzembl/", translation: "类似；像", example: "She closely resembles her mother." },
  { id: "g2690", category: "高中3500词", word: "reserve", phonetic: "/rɪˈzɜːrv/", translation: "保留；预订", example: "I'd like to reserve a table for two." },
  { id: "g2691", category: "高中3500词", word: "resident", phonetic: "/ˈrezɪdənt/", translation: "居民", example: "She is a local resident." },
  { id: "g2692", category: "高中3500词", word: "resign", phonetic: "/rɪˈzaɪn/", translation: "辞职", example: "He resigned from his position last month." },
  { id: "g2693", category: "高中3500词", word: "resist", phonetic: "/rɪˈzɪst/", translation: "抵抗；抵制", example: "She couldn't resist the temptation." },
  { id: "g2694", category: "高中3500词", word: "resistance", phonetic: "/rɪˈzɪstəns/", translation: "抵抗；阻力", example: "There was strong resistance." },
  { id: "g2695", category: "高中3500词", word: "resolution", phonetic: "/ˌrezəˈluːʃn/", translation: "决心；决议", example: "She made a New Year's resolution." },
  { id: "g2696", category: "高中3500词", word: "resolve", phonetic: "/rɪˈzɒlv/", translation: "解决；决心", example: "We must resolve this conflict peacefully." },
  { id: "g2697", category: "高中3500词", word: "resort", phonetic: "/rɪˈzɔːrt/", translation: "度假地；诉诸", example: "They decided to resort to legal action." },
  { id: "g2698", category: "高中3500词", word: "resource", phonetic: "/rɪˈzɔːrs/", translation: "资源", example: "We should use natural resources wisely." },
  { id: "g2699", category: "高中3500词", word: "respect", phonetic: "/rɪˈspekt/", translation: "尊重", example: "She respects her teachers." },
  { id: "g2700", category: "高中3500词", word: "respond", phonetic: "/rɪˈspɒnd/", translation: "回应；反应", example: "She didn't respond to my email." },
  { id: "g2701", category: "高中3500词", word: "response", phonetic: "/rɪˈspɒns/", translation: "回应", example: "What was her response?" },
  { id: "g2702", category: "高中3500词", word: "responsibility", phonetic: "/rɪˌspɒnsəˈbɪləti/", translation: "责任", example: "She takes her responsibilities seriously." },
  { id: "g2703", category: "高中3500词", word: "responsible", phonetic: "/rɪˈspɒnsəbl/", translation: "负责的", example: "Who is responsible for this project?" },
  { id: "g2704", category: "高中3500词", word: "rest", phonetic: "/rest/", translation: "休息；其余的", example: "She took a rest." },
  { id: "g2705", category: "高中3500词", word: "restaurant", phonetic: "/ˈrestrɒnt/", translation: "餐厅", example: "We had dinner at a restaurant." },
  { id: "g2706", category: "高中3500词", word: "restore", phonetic: "/rɪˈstɔːr/", translation: "恢复；修复", example: "They restored the old painting." },
  { id: "g2707", category: "高中3500词", word: "restrict", phonetic: "/rɪˈstrɪkt/", translation: "限制；约束", example: "Access to the area is restricted." },
  { id: "g2708", category: "高中3500词", word: "result", phonetic: "/rɪˈzʌlt/", translation: "结果", example: "The result was better than expected." },
  { id: "g2709", category: "高中3500词", word: "retire", phonetic: "/rɪˈtaɪər/", translation: "退休", example: "He retired at the age of 60." },
  { id: "g2710", category: "高中3500词", word: "retirement", phonetic: "/rɪˈtaɪərmənt/", translation: "退休", example: "She enjoys her retirement." },
  { id: "g2711", category: "高中3500词", word: "return", phonetic: "/rɪˈtɜːrn/", translation: "返回；归还", example: "She returned the book." },
  { id: "g2712", category: "高中3500词", word: "reveal", phonetic: "/rɪˈviːl/", translation: "揭示；透露", example: "The report reveals some surprising facts." },
  { id: "g2713", category: "高中3500词", word: "revenue", phonetic: "/ˈrevənjuː/", translation: "收入；税收", example: "The company's revenue increased by 10%." },
  { id: "g2714", category: "高中3500词", word: "reverse", phonetic: "/rɪˈvɜːrs/", translation: "相反的；颠倒", example: "The decision was reversed on appeal." },
  { id: "g2715", category: "高中3500词", word: "review", phonetic: "/rɪˈvjuː/", translation: "复习；评论", example: "Let's review the main points." },
  { id: "g2716", category: "高中3500词", word: "revise", phonetic: "/rɪˈvaɪz/", translation: "修订；复习", example: "She revised her essay before submitting it." },
  { id: "g2717", category: "高中3500词", word: "revision", phonetic: "/rɪˈvɪʒn/", translation: "复习；修订", example: "She did some revision for the exam." },
  { id: "g2718", category: "高中3500词", word: "revolution", phonetic: "/ˌrevəˈluːʃn/", translation: "革命", example: "The Industrial Revolution changed the world." },
  { id: "g2719", category: "高中3500词", word: "reward", phonetic: "/rɪˈwɔːrd/", translation: "奖赏；报酬", example: "Hard work will bring its own reward." },
  { id: "g2720", category: "高中3500词", word: "rhythm", phonetic: "/ˈrɪðəm/", translation: "节奏；韵律", example: "The music has a strong rhythm." },
  { id: "g2721", category: "高中3500词", word: "rice", phonetic: "/raɪs/", translation: "米饭；稻", example: "She ate a bowl of rice." },
  { id: "g2722", category: "高中3500词", word: "rich", phonetic: "/rɪtʃ/", translation: "富有的；丰富的", example: "She comes from a rich family." },
  { id: "g2723", category: "高中3500词", word: "rid", phonetic: "/rɪd/", translation: "使摆脱", example: "She got rid of the old clothes." },
  { id: "g2724", category: "高中3500词", word: "ride", phonetic: "/raɪd/", translation: "骑；乘坐", example: "She rides her bike to school." },
  { id: "g2725", category: "高中3500词", word: "ridiculous", phonetic: "/rɪˈdɪkjələs/", translation: "荒谬的；可笑的", example: "That's a ridiculous idea." },
  { id: "g2726", category: "高中3500词", word: "right", phonetic: "/raɪt/", translation: "对的；权利", example: "Turn right at the corner." },
  { id: "g2727", category: "高中3500词", word: "rigid", phonetic: "/ˈrɪdʒɪd/", translation: "严格的；僵硬的", example: "The rules are too rigid." },
  { id: "g2728", category: "高中3500词", word: "ring", phonetic: "/rɪŋ/", translation: "戒指；铃声", example: "She wore a gold ring." },
  { id: "g2729", category: "高中3500词", word: "ripe", phonetic: "/raɪp/", translation: "成熟的", example: "The fruit is ripe." },
  { id: "g2730", category: "高中3500词", word: "rise", phonetic: "/raɪz/", translation: "上升；起床", example: "The sun rises in the east." },
  { id: "g2731", category: "高中3500词", word: "risk", phonetic: "/rɪsk/", translation: "风险；冒险", example: "There is a risk of flooding." },
  { id: "g2732", category: "高中3500词", word: "rival", phonetic: "/ˈraɪvl/", translation: "对手；竞争者", example: "The two companies are fierce rivals." },
  { id: "g2733", category: "高中3500词", word: "river", phonetic: "/ˈrɪvər/", translation: "河流", example: "The river flows through the city." },
  { id: "g2734", category: "高中3500词", word: "road", phonetic: "/rəʊd/", translation: "道路", example: "The road was very busy." },
  { id: "g2735", category: "高中3500词", word: "roast", phonetic: "/rəʊst/", translation: "烤", example: "She roasted the chicken." },
  { id: "g2736", category: "高中3500词", word: "rob", phonetic: "/rɒb/", translation: "抢劫", example: "The bank was robbed." },
  { id: "g2737", category: "高中3500词", word: "robot", phonetic: "/ˈrəʊbɒt/", translation: "机器人", example: "The robot can walk and talk." },
  { id: "g2738", category: "高中3500词", word: "rock", phonetic: "/rɒk/", translation: "岩石；摇滚乐", example: "She sat on a rock." },
  { id: "g2739", category: "高中3500词", word: "role", phonetic: "/rəʊl/", translation: "角色；作用", example: "She played an important role in the project." },
  { id: "g2740", category: "高中3500词", word: "roll", phonetic: "/rəʊl/", translation: "滚动；卷", example: "She rolled the dough." },
  { id: "g2741", category: "高中3500词", word: "romantic", phonetic: "/rəʊˈmæntɪk/", translation: "浪漫的", example: "She had a romantic dinner." },
  { id: "g2742", category: "高中3500词", word: "roof", phonetic: "/ruːf/", translation: "屋顶", example: "The roof needs repair." },
  { id: "g2743", category: "高中3500词", word: "room", phonetic: "/ruːm/", translation: "房间；空间", example: "She cleaned the room." },
  { id: "g2744", category: "高中3500词", word: "root", phonetic: "/ruːt/", translation: "根；根源", example: "The root of the problem is money." },
  { id: "g2745", category: "高中3500词", word: "rope", phonetic: "/rəʊp/", translation: "绳子", example: "She tied the box with a rope." },
  { id: "g2746", category: "高中3500词", word: "rose", phonetic: "/rəʊz/", translation: "玫瑰", example: "She received a bouquet of roses." },
  { id: "g2747", category: "高中3500词", word: "rot", phonetic: "/rɒt/", translation: "腐烂", example: "The fruit began to rot." },
  { id: "g2748", category: "高中3500词", word: "rough", phonetic: "/rʌf/", translation: "粗糙的；大致的", example: "The surface was rough." },
  { id: "g2749", category: "高中3500词", word: "round", phonetic: "/raʊnd/", translation: "圆的；围绕", example: "She sat round the table." },
  { id: "g2750", category: "高中3500词", word: "route", phonetic: "/ruːt/", translation: "路线", example: "We took a different route." },
  { id: "g2751", category: "高中3500词", word: "routine", phonetic: "/ruːˈtiːn/", translation: "常规；日常的", example: "Exercise should be part of your daily routine." },
  { id: "g2752", category: "高中3500词", word: "row", phonetic: "/rəʊ/", translation: "排；划船", example: "She sat in the front row." },
  { id: "g2753", category: "高中3500词", word: "royal", phonetic: "/ˈrɔɪəl/", translation: "皇家的；高贵的", example: "The royal family lives in the palace." },
  { id: "g2754", category: "高中3500词", word: "rub", phonetic: "/rʌb/", translation: "摩擦", example: "She rubbed her eyes." },
  { id: "g2755", category: "高中3500词", word: "rubber", phonetic: "/ˈrʌbər/", translation: "橡胶", example: "She has a rubber band." },
  { id: "g2756", category: "高中3500词", word: "rubbish", phonetic: "/ˈrʌbɪʃ/", translation: "垃圾", example: "Put the rubbish in the bin." },
  { id: "g2757", category: "高中3500词", word: "rude", phonetic: "/ruːd/", translation: "粗鲁的", example: "He was very rude." },
  { id: "g2758", category: "高中3500词", word: "ruin", phonetic: "/ˈruːɪn/", translation: "毁灭；废墟", example: "The storm ruined the crops." },
  { id: "g2759", category: "高中3500词", word: "rule", phonetic: "/ruːl/", translation: "规则；统治", example: "You must follow the rules." },
  { id: "g2760", category: "高中3500词", word: "ruler", phonetic: "/ˈruːlər/", translation: "尺子；统治者", example: "She measured it with a ruler." },
  { id: "g2761", category: "高中3500词", word: "run", phonetic: "/rʌn/", translation: "跑；经营", example: "She runs every morning." },
  { id: "g2762", category: "高中3500词", word: "rural", phonetic: "/ˈrʊərəl/", translation: "农村的", example: "She grew up in a rural area." },
  { id: "g2763", category: "高中3500词", word: "rush", phonetic: "/rʌʃ/", translation: "冲；匆忙", example: "She rushed to the station." },
  { id: "g2764", category: "高中3500词", word: "sacrifice", phonetic: "/ˈsækrɪfaɪs/", translation: "牺牲；献祭", example: "Parents often sacrifice for their children." },
  { id: "g2765", category: "高中3500词", word: "sad", phonetic: "/sæd/", translation: "悲伤的", example: "She felt sad about the news." },
  { id: "g2766", category: "高中3500词", word: "sadness", phonetic: "/ˈsædnəs/", translation: "悲伤", example: "She couldn't hide her sadness." },
  { id: "g2767", category: "高中3500词", word: "safe", phonetic: "/seɪf/", translation: "安全的", example: "Keep your money in a safe place." },
  { id: "g2768", category: "高中3500词", word: "safety", phonetic: "/ˈseɪfti/", translation: "安全", example: "Safety is our top priority." },
  { id: "g2769", category: "高中3500词", word: "sail", phonetic: "/seɪl/", translation: "航行；帆", example: "She sailed across the ocean." },
  { id: "g2770", category: "高中3500词", word: "sailor", phonetic: "/ˈseɪlər/", translation: "水手", example: "The sailor traveled the world." },
  { id: "g2771", category: "高中3500词", word: "salad", phonetic: "/ˈsæləd/", translation: "沙拉", example: "She ordered a green salad." },
  { id: "g2772", category: "高中3500词", word: "salary", phonetic: "/ˈsæləri/", translation: "薪水", example: "He earns a high salary." },
  { id: "g2773", category: "高中3500词", word: "sale", phonetic: "/seɪl/", translation: "销售", example: "The house is for sale." },
  { id: "g2774", category: "高中3500词", word: "salt", phonetic: "/sɔːlt/", translation: "盐", example: "She added a pinch of salt." },
  { id: "g2775", category: "高中3500词", word: "salty", phonetic: "/ˈsɔːlti/", translation: "咸的", example: "The soup is too salty." },
  { id: "g2776", category: "高中3500词", word: "same", phonetic: "/seɪm/", translation: "相同的", example: "We are in the same class." },
  { id: "g2777", category: "高中3500词", word: "sample", phonetic: "/ˈsɑːmpl/", translation: "样本；样品", example: "They took a sample of the water." },
  { id: "g2778", category: "高中3500词", word: "sand", phonetic: "/sænd/", translation: "沙", example: "The children played in the sand." },
  { id: "g2779", category: "高中3500词", word: "sandwich", phonetic: "/ˈsænwɪtʃ/", translation: "三明治", example: "She made a cheese sandwich." },
  { id: "g2780", category: "高中3500词", word: "satellite", phonetic: "/ˈsætəlaɪt/", translation: "卫星", example: "The satellite orbits the earth." },
  { id: "g2781", category: "高中3500词", word: "satisfaction", phonetic: "/ˌsætɪsˈfækʃn/", translation: "满意", example: "She expressed her satisfaction." },
  { id: "g2782", category: "高中3500词", word: "satisfy", phonetic: "/ˈsætɪsfaɪ/", translation: "满足；使满意", example: "Nothing satisfies her." },
  { id: "g2783", category: "高中3500词", word: "Saturday", phonetic: "/ˈsætərdeɪ/", translation: "星期六", example: "We went shopping on Saturday." },
  { id: "g2784", category: "高中3500词", word: "save", phonetic: "/seɪv/", translation: "拯救；节省", example: "She saved money for the trip." },
  { id: "g2785", category: "高中3500词", word: "say", phonetic: "/seɪ/", translation: "说", example: "What did she say?" },
  { id: "g2786", category: "高中3500词", word: "scale", phonetic: "/skeɪl/", translation: "规模；刻度", example: "The project was done on a large scale." },
  { id: "g2787", category: "高中3500词", word: "scandal", phonetic: "/ˈskændl/", translation: "丑闻", example: "The scandal damaged his reputation." },
  { id: "g2788", category: "高中3500词", word: "scarce", phonetic: "/skeərs/", translation: "稀缺的；不足的", example: "Clean water is scarce in some regions." },
  { id: "g2789", category: "高中3500词", word: "scare", phonetic: "/skeər/", translation: "使害怕", example: "The noise scared the children." },
  { id: "g2790", category: "高中3500词", word: "scatter", phonetic: "/ˈskætər/", translation: "散开；撒", example: "The birds scattered at the sound." },
  { id: "g2791", category: "高中3500词", word: "scene", phonetic: "/siːn/", translation: "场景；景色", example: "The scene at the beach was beautiful." },
  { id: "g2792", category: "高中3500词", word: "scenery", phonetic: "/ˈsiːnəri/", translation: "风景", example: "The scenery was beautiful." },
  { id: "g2793", category: "高中3500词", word: "schedule", phonetic: "/ˈʃedjuːl/", translation: "时间表；安排", example: "The project is ahead of schedule." },
  { id: "g2794", category: "高中3500词", word: "scheme", phonetic: "/skiːm/", translation: "计划；方案", example: "The government launched a new scheme." },
  { id: "g2795", category: "高中3500词", word: "scholar", phonetic: "/ˈskɒlər/", translation: "学者", example: "He is a famous scholar." },
  { id: "g2796", category: "高中3500词", word: "scholarship", phonetic: "/ˈskɒlərʃɪp/", translation: "奖学金", example: "She won a scholarship to the university." },
  { id: "g2797", category: "高中3500词", word: "school", phonetic: "/skuːl/", translation: "学校", example: "She walks to school every day." },
  { id: "g2798", category: "高中3500词", word: "science", phonetic: "/ˈsaɪəns/", translation: "科学", example: "She is interested in science." },
  { id: "g2799", category: "高中3500词", word: "scientific", phonetic: "/ˌsaɪənˈtɪfɪk/", translation: "科学的", example: "She used scientific methods." },
  { id: "g2800", category: "高中3500词", word: "scientist", phonetic: "/ˈsaɪəntɪst/", translation: "科学家", example: "She is a famous scientist." },
  { id: "g2801", category: "高中3500词", word: "scissors", phonetic: "/ˈsɪzərz/", translation: "剪刀", example: "She cut the paper with scissors." },
  { id: "g2802", category: "高中3500词", word: "scold", phonetic: "/skəʊld/", translation: "责骂", example: "Her mother scolded her." },
  { id: "g2803", category: "高中3500词", word: "scope", phonetic: "/skəʊp/", translation: "范围；机会", example: "The scope of the project is limited." },
  { id: "g2804", category: "高中3500词", word: "score", phonetic: "/skɔːr/", translation: "得分；分数", example: "She scored high marks." },
  { id: "g2805", category: "高中3500词", word: "scratch", phonetic: "/skrætʃ/", translation: "抓；划", example: "The cat scratched my hand." },
  { id: "g2806", category: "高中3500词", word: "scream", phonetic: "/skriːm/", translation: "尖叫", example: "She screamed in terror." },
  { id: "g2807", category: "高中3500词", word: "screen", phonetic: "/skriːn/", translation: "屏幕；筛选", example: "She looked at the computer screen." },
  { id: "g2808", category: "高中3500词", word: "sculpture", phonetic: "/ˈskʌlptʃər/", translation: "雕塑", example: "The museum has many famous sculptures." },
  { id: "g2809", category: "高中3500词", word: "sea", phonetic: "/siː/", translation: "海", example: "We swam in the sea." },
  { id: "g2810", category: "高中3500词", word: "seal", phonetic: "/siːl/", translation: "海豹；密封", example: "She sealed the envelope." },
  { id: "g2811", category: "高中3500词", word: "search", phonetic: "/sɜːrtʃ/", translation: "搜索", example: "She searched for her keys." },
  { id: "g2812", category: "高中3500词", word: "season", phonetic: "/ˈsiːzn/", translation: "季节", example: "Spring is my favorite season." },
  { id: "g2813", category: "高中3500词", word: "seat", phonetic: "/siːt/", translation: "座位", example: "She took a seat by the window." },
  { id: "g2814", category: "高中3500词", word: "second", phonetic: "/ˈsekənd/", translation: "第二的；秒", example: "She came second in the race." },
  { id: "g2815", category: "高中3500词", word: "secondary", phonetic: "/ˈsekəndəri/", translation: "次要的；中学的", example: "She attends a secondary school." },
  { id: "g2816", category: "高中3500词", word: "secret", phonetic: "/ˈsiːkrɪt/", translation: "秘密的", example: "She kept it a secret." },
  { id: "g2817", category: "高中3500词", word: "secretary", phonetic: "/ˈsekrətəri/", translation: "秘书", example: "She works as a secretary." },
  { id: "g2818", category: "高中3500词", word: "section", phonetic: "/ˈsekʃn/", translation: "部分；部门", example: "Read section two of the book." },
  { id: "g2819", category: "高中3500词", word: "sector", phonetic: "/ˈsektər/", translation: "部门；领域", example: "She works in the public sector." },
  { id: "g2820", category: "高中3500词", word: "secure", phonetic: "/sɪˈkjʊər/", translation: "安全的；获得", example: "She secured a good job." },
  { id: "g2821", category: "高中3500词", word: "security", phonetic: "/sɪˈkjʊərəti/", translation: "安全；证券", example: "National security is a top priority." },
  { id: "g2822", category: "高中3500词", word: "see", phonetic: "/siː/", translation: "看见", example: "I can see the mountains." },
  { id: "g2823", category: "高中3500词", word: "seed", phonetic: "/siːd/", translation: "种子", example: "She planted the seeds in the garden." },
  { id: "g2824", category: "高中3500词", word: "seek", phonetic: "/siːk/", translation: "寻找；寻求", example: "Many people seek happiness in life." },
  { id: "g2825", category: "高中3500词", word: "seem", phonetic: "/siːm/", translation: "似乎", example: "She seems happy." },
  { id: "g2826", category: "高中3500词", word: "seize", phonetic: "/siːz/", translation: "抓住；夺取", example: "She seized the opportunity." },
  { id: "g2827", category: "高中3500词", word: "seldom", phonetic: "/ˈseldəm/", translation: "很少", example: "She seldom goes to the cinema." },
  { id: "g2828", category: "高中3500词", word: "select", phonetic: "/sɪˈlekt/", translation: "选择；挑选", example: "She was selected for the team." },
  { id: "g2829", category: "高中3500词", word: "selection", phonetic: "/sɪˈlekʃn/", translation: "选择；选集", example: "The selection was excellent." },
  { id: "g2830", category: "高中3500词", word: "self", phonetic: "/self/", translation: "自己", example: "She put herself first." },
  { id: "g2831", category: "高中3500词", word: "selfish", phonetic: "/ˈselfɪʃ/", translation: "自私的", example: "He is very selfish." },
  { id: "g2832", category: "高中3500词", word: "sell", phonetic: "/sel/", translation: "卖", example: "She sold her old car." },
  { id: "g2833", category: "高中3500词", word: "send", phonetic: "/send/", translation: "发送", example: "She sent an email." },
  { id: "g2834", category: "高中3500词", word: "senior", phonetic: "/ˈsiːniər/", translation: "高级的；年长的", example: "She is a senior manager at the company." },
  { id: "g2835", category: "高中3500词", word: "sense", phonetic: "/sens/", translation: "感觉；意义", example: "She has a good sense of humor." },
  { id: "g2836", category: "高中3500词", word: "sensitive", phonetic: "/ˈsensətɪv/", translation: "敏感的", example: "Be careful—this is a sensitive topic." },
  { id: "g2837", category: "高中3500词", word: "sentence", phonetic: "/ˈsentəns/", translation: "句子；判决", example: "Write a sentence using this word." },
  { id: "g2838", category: "高中3500词", word: "separate", phonetic: "/ˈsepəreɪt/", translation: "分开的；分离", example: "They went their separate ways." },
  { id: "g2839", category: "高中3500词", word: "separation", phonetic: "/ˌsepəˈreɪʃn/", translation: "分离", example: "The separation was difficult." },
  { id: "g2840", category: "高中3500词", word: "September", phonetic: "/sepˈtembər/", translation: "九月", example: "School starts in September." },
  { id: "g2841", category: "高中3500词", word: "sequence", phonetic: "/ˈsiːkwəns/", translation: "顺序；序列", example: "The events happened in a specific sequence." },
  { id: "g2842", category: "高中3500词", word: "series", phonetic: "/ˈsɪəriːz/", translation: "系列；连续", example: "She watched a TV series." },
  { id: "g2843", category: "高中3500词", word: "serious", phonetic: "/ˈsɪəriəs/", translation: "严肃的；严重的", example: "She is serious about her studies." },
  { id: "g2844", category: "高中3500词", word: "seriously", phonetic: "/ˈsɪəriəsli/", translation: "严肃地；严重地", example: "She was seriously injured." },
  { id: "g2845", category: "高中3500词", word: "servant", phonetic: "/ˈsɜːrvənt/", translation: "仆人", example: "They had several servants." },
  { id: "g2846", category: "高中3500词", word: "serve", phonetic: "/sɜːrv/", translation: "服务；供应", example: "She served dinner at 7 pm." },
  { id: "g2847", category: "高中3500词", word: "service", phonetic: "/ˈsɜːrvɪs/", translation: "服务", example: "The service at the hotel was excellent." },
  { id: "g2848", category: "高中3500词", word: "session", phonetic: "/ˈseʃn/", translation: "会议；一段时间", example: "The training session lasts two hours." },
  { id: "g2849", category: "高中3500词", word: "set", phonetic: "/set/", translation: "设置；一套", example: "She set the alarm for 6 am." },
  { id: "g2850", category: "高中3500词", word: "settle", phonetic: "/ˈsetl/", translation: "解决；定居", example: "They settled in a small town." },
  { id: "g2851", category: "高中3500词", word: "settlement", phonetic: "/ˈsetlmənt/", translation: "解决；定居点", example: "They reached a settlement." },
  { id: "g2852", category: "高中3500词", word: "seven", phonetic: "/ˈsevn/", translation: "七", example: "There are seven days in a week." },
  { id: "g2853", category: "高中3500词", word: "seventeen", phonetic: "/ˌsevnˈtiːn/", translation: "十七", example: "She is seventeen years old." },
  { id: "g2854", category: "高中3500词", word: "seventy", phonetic: "/ˈsevnti/", translation: "七十", example: "She is seventy years old." },
  { id: "g2855", category: "高中3500词", word: "several", phonetic: "/ˈsevrəl/", translation: "几个", example: "She has several friends." },
  { id: "g2856", category: "高中3500词", word: "severe", phonetic: "/sɪˈvɪər/", translation: "严重的；严厉的", example: "The storm caused severe damage." },
  { id: "g2857", category: "高中3500词", word: "sew", phonetic: "/səʊ/", translation: "缝纫", example: "She sewed a button on the shirt." },
  { id: "g2858", category: "高中3500词", word: "sex", phonetic: "/seks/", translation: "性别", example: "She was discriminated against because of her sex." },
  { id: "g2859", category: "高中3500词", word: "shade", phonetic: "/ʃeɪd/", translation: "阴凉处", example: "She sat in the shade." },
  { id: "g2860", category: "高中3500词", word: "shadow", phonetic: "/ˈʃædəʊ/", translation: "影子；阴影", example: "The tree cast a long shadow." },
  { id: "g2861", category: "高中3500词", word: "shake", phonetic: "/ʃeɪk/", translation: "摇动；发抖", example: "She shook her head." },
  { id: "g2862", category: "高中3500词", word: "shall", phonetic: "/ʃæl/", translation: "将要", example: "Shall we go now?" },
  { id: "g2863", category: "高中3500词", word: "shallow", phonetic: "/ˈʃæləʊ/", translation: "浅的；肤浅的", example: "The water is shallow near the shore." },
  { id: "g2864", category: "高中3500词", word: "shame", phonetic: "/ʃeɪm/", translation: "羞耻；遗憾", example: "What a shame!" },
  { id: "g2865", category: "高中3500词", word: "shape", phonetic: "/ʃeɪp/", translation: "形状；塑造", example: "She is in good shape." },
  { id: "g2866", category: "高中3500词", word: "share", phonetic: "/ʃeər/", translation: "分享；股份", example: "She shared her lunch with me." },
  { id: "g2867", category: "高中3500词", word: "sharp", phonetic: "/ʃɑːrp/", translation: "锋利的；急剧的", example: "The knife is very sharp." },
  { id: "g2868", category: "高中3500词", word: "shave", phonetic: "/ʃeɪv/", translation: "刮胡子", example: "He shaves every morning." },
  { id: "g2869", category: "高中3500词", word: "she", phonetic: "/ʃiː/", translation: "她", example: "She is my sister." },
  { id: "g2870", category: "高中3500词", word: "sheep", phonetic: "/ʃiːp/", translation: "羊", example: "The farmer has many sheep." },
  { id: "g2871", category: "高中3500词", word: "sheer", phonetic: "/ʃɪər/", translation: "纯粹的；陡峭的", example: "It was sheer luck." },
  { id: "g2872", category: "高中3500词", word: "sheet", phonetic: "/ʃiːt/", translation: "床单；一张", example: "She changed the bed sheets." },
  { id: "g2873", category: "高中3500词", word: "shelf", phonetic: "/ʃelf/", translation: "架子", example: "She put the book on the shelf." },
  { id: "g2874", category: "高中3500词", word: "shell", phonetic: "/ʃel/", translation: "壳；贝壳", example: "She collected shells on the beach." },
  { id: "g2875", category: "高中3500词", word: "shelter", phonetic: "/ˈʃeltər/", translation: "庇护；避难所", example: "They took shelter from the rain." },
  { id: "g2876", category: "高中3500词", word: "shift", phonetic: "/ʃɪft/", translation: "转变；轮班", example: "There has been a shift in public opinion." },
  { id: "g2877", category: "高中3500词", word: "shine", phonetic: "/ʃaɪn/", translation: "照耀", example: "The sun is shining." },
  { id: "g2878", category: "高中3500词", word: "ship", phonetic: "/ʃɪp/", translation: "船", example: "The ship sailed across the ocean." },
  { id: "g2879", category: "高中3500词", word: "shirt", phonetic: "/ʃɜːrt/", translation: "衬衫", example: "He wore a white shirt." },
  { id: "g2880", category: "高中3500词", word: "shock", phonetic: "/ʃɒk/", translation: "震惊；电击", example: "The news was a shock." },
  { id: "g2881", category: "高中3500词", word: "shoe", phonetic: "/ʃuː/", translation: "鞋", example: "She bought a new pair of shoes." },
  { id: "g2882", category: "高中3500词", word: "shoot", phonetic: "/ʃuːt/", translation: "射击；拍摄", example: "She shot an arrow." },
  { id: "g2883", category: "高中3500词", word: "shop", phonetic: "/ʃɒp/", translation: "商店", example: "She went to the shop." },
  { id: "g2884", category: "高中3500词", word: "shopkeeper", phonetic: "/ˈʃɒpkiːpər/", translation: "店主", example: "The shopkeeper was very friendly." },
  { id: "g2885", category: "高中3500词", word: "shopping", phonetic: "/ˈʃɒpɪŋ/", translation: "购物", example: "She went shopping yesterday." },
  { id: "g2886", category: "高中3500词", word: "shore", phonetic: "/ʃɔːr/", translation: "岸", example: "We walked along the shore." },
  { id: "g2887", category: "高中3500词", word: "short", phonetic: "/ʃɔːrt/", translation: "短的；矮的", example: "She has short hair." },
  { id: "g2888", category: "高中3500词", word: "shortage", phonetic: "/ˈʃɔːrtɪdʒ/", translation: "短缺；不足", example: "There is a shortage of fresh water." },
  { id: "g2889", category: "高中3500词", word: "shortcoming", phonetic: "/ˈʃɔːrtkʌmɪŋ/", translation: "缺点", example: "Everyone has shortcomings." },
  { id: "g2890", category: "高中3500词", word: "shortly", phonetic: "/ˈʃɔːrtli/", translation: "不久", example: "She will arrive shortly." },
  { id: "g2891", category: "高中3500词", word: "shorts", phonetic: "/ʃɔːrts/", translation: "短裤", example: "She wore shorts in summer." },
  { id: "g2892", category: "高中3500词", word: "shot", phonetic: "/ʃɒt/", translation: "射击；镜头", example: "She took a shot at the goal." },
  { id: "g2893", category: "高中3500词", word: "should", phonetic: "/ʃʊd/", translation: "应该", example: "You should study harder." },
  { id: "g2894", category: "高中3500词", word: "shoulder", phonetic: "/ˈʃəʊldər/", translation: "肩膀", example: "She carried the bag on her shoulder." },
  { id: "g2895", category: "高中3500词", word: "shout", phonetic: "/ʃaʊt/", translation: "喊叫", example: "She shouted for help." },
  { id: "g2896", category: "高中3500词", word: "show", phonetic: "/ʃəʊ/", translation: "展示；表演", example: "She showed me her photos." },
  { id: "g2897", category: "高中3500词", word: "shower", phonetic: "/ˈʃaʊər/", translation: "淋浴；阵雨", example: "She took a shower." },
  { id: "g2898", category: "高中3500词", word: "shrink", phonetic: "/ʃrɪŋk/", translation: "缩小；收缩", example: "The sweater shrank in the wash." },
  { id: "g2899", category: "高中3500词", word: "shut", phonetic: "/ʃʌt/", translation: "关闭", example: "Shut the door, please." },
  { id: "g2900", category: "高中3500词", word: "shy", phonetic: "/ʃaɪ/", translation: "害羞的", example: "She is very shy." },
  { id: "g2901", category: "高中3500词", word: "sick", phonetic: "/sɪk/", translation: "生病的；恶心的", example: "She felt sick." },
  { id: "g2902", category: "高中3500词", word: "side", phonetic: "/saɪd/", translation: "边；方面", example: "She sat by my side." },
  { id: "g2903", category: "高中3500词", word: "sideways", phonetic: "/ˈsaɪdweɪz/", translation: "向旁边", example: "She moved sideways." },
  { id: "g2904", category: "高中3500词", word: "sigh", phonetic: "/saɪ/", translation: "叹气", example: "She sighed deeply." },
  { id: "g2905", category: "高中3500词", word: "sight", phonetic: "/saɪt/", translation: "视力；景象", example: "She lost her sight." },
  { id: "g2906", category: "高中3500词", word: "sightseeing", phonetic: "/ˈsaɪtsiːɪŋ/", translation: "观光", example: "They went sightseeing in Paris." },
  { id: "g2907", category: "高中3500词", word: "sign", phonetic: "/saɪn/", translation: "标志；签名", example: "She signed the document." },
  { id: "g2908", category: "高中3500词", word: "signal", phonetic: "/ˈsɪɡnl/", translation: "信号；标志", example: "The red light is a signal to stop." },
  { id: "g2909", category: "高中3500词", word: "signature", phonetic: "/ˈsɪɡnətʃər/", translation: "签名", example: "She put her signature on the paper." },
  { id: "g2910", category: "高中3500词", word: "significance", phonetic: "/sɪɡˈnɪfɪkəns/", translation: "重要性", example: "The discovery has great significance." },
  { id: "g2911", category: "高中3500词", word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", translation: "重要的；显著的", example: "There has been a significant improvement." },
  { id: "g2912", category: "高中3500词", word: "silence", phonetic: "/ˈsaɪləns/", translation: "沉默", example: "There was complete silence." },
  { id: "g2913", category: "高中3500词", word: "silent", phonetic: "/ˈsaɪlənt/", translation: "沉默的", example: "She remained silent." },
  { id: "g2914", category: "高中3500词", word: "silk", phonetic: "/sɪlk/", translation: "丝绸", example: "She wore a silk dress." },
  { id: "g2915", category: "高中3500词", word: "silly", phonetic: "/ˈsɪli/", translation: "愚蠢的", example: "Don't be silly." },
  { id: "g2916", category: "高中3500词", word: "silver", phonetic: "/ˈsɪlvər/", translation: "银", example: "She won a silver medal." },
  { id: "g2917", category: "高中3500词", word: "similar", phonetic: "/ˈsɪmələr/", translation: "相似的", example: "The two stories are very similar." },
  { id: "g2918", category: "高中3500词", word: "similarity", phonetic: "/ˌsɪməˈlærəti/", translation: "相似之处", example: "There are many similarities." },
  { id: "g2919", category: "高中3500词", word: "simple", phonetic: "/ˈsɪmpl/", translation: "简单的", example: "The answer is simple." },
  { id: "g2920", category: "高中3500词", word: "simplify", phonetic: "/ˈsɪmplɪfaɪ/", translation: "简化", example: "Try to simplify the process." },
  { id: "g2921", category: "高中3500词", word: "simply", phonetic: "/ˈsɪmpli/", translation: "简单地；仅仅", example: "She is simply the best." },
  { id: "g2922", category: "高中3500词", word: "simulate", phonetic: "/ˈsɪmjuleɪt/", translation: "模拟", example: "The program simulates real-life situations." },
  { id: "g2923", category: "高中3500词", word: "since", phonetic: "/sɪns/", translation: "自从；因为", example: "She has lived here since 2010." },
  { id: "g2924", category: "高中3500词", word: "sincere", phonetic: "/sɪnˈsɪər/", translation: "真诚的", example: "Please accept my sincere apologies." },
  { id: "g2925", category: "高中3500词", word: "sing", phonetic: "/sɪŋ/", translation: "唱歌", example: "She sings beautifully." },
  { id: "g2926", category: "高中3500词", word: "singer", phonetic: "/ˈsɪŋər/", translation: "歌手", example: "She is a famous singer." },
  { id: "g2927", category: "高中3500词", word: "single", phonetic: "/ˈsɪŋɡl/", translation: "单一的；单身的", example: "She is a single mother." },
  { id: "g2928", category: "高中3500词", word: "sink", phonetic: "/sɪŋk/", translation: "下沉；水槽", example: "The ship sank." },
  { id: "g2929", category: "高中3500词", word: "sir", phonetic: "/sɜːr/", translation: "先生", example: "Thank you, sir." },
  { id: "g2930", category: "高中3500词", word: "sister", phonetic: "/ˈsɪstər/", translation: "姐妹", example: "She is my younger sister." },
  { id: "g2931", category: "高中3500词", word: "sit", phonetic: "/sɪt/", translation: "坐", example: "Please sit down." },
  { id: "g2932", category: "高中3500词", word: "site", phonetic: "/saɪt/", translation: "地点；网站", example: "She visited the construction site." },
  { id: "g2933", category: "高中3500词", word: "situation", phonetic: "/ˌsɪtʃuˈeɪʃn/", translation: "情况；形势", example: "The situation is getting better." },
  { id: "g2934", category: "高中3500词", word: "six", phonetic: "/sɪks/", translation: "六", example: "She is six years old." },
  { id: "g2935", category: "高中3500词", word: "sixteen", phonetic: "/ˌsɪksˈtiːn/", translation: "十六", example: "She is sixteen years old." },
  { id: "g2936", category: "高中3500词", word: "sixty", phonetic: "/ˈsɪksti/", translation: "六十", example: "There are sixty minutes in an hour." },
  { id: "g2937", category: "高中3500词", word: "size", phonetic: "/saɪz/", translation: "尺寸；大小", example: "What size do you wear?" },
  { id: "g2938", category: "高中3500词", word: "skate", phonetic: "/skeɪt/", translation: "滑冰", example: "She goes skating in winter." },
  { id: "g2939", category: "高中3500词", word: "sketch", phonetic: "/sketʃ/", translation: "素描；概述", example: "She sketched a portrait of her friend." },
  { id: "g2940", category: "高中3500词", word: "ski", phonetic: "/skiː/", translation: "滑雪", example: "They went skiing last weekend." },
  { id: "g2941", category: "高中3500词", word: "skill", phonetic: "/skɪl/", translation: "技能；技巧", example: "Communication is an important skill." },
  { id: "g2942", category: "高中3500词", word: "skilled", phonetic: "/skɪld/", translation: "熟练的", example: "She is a skilled worker." },
  { id: "g2943", category: "高中3500词", word: "skin", phonetic: "/skɪn/", translation: "皮肤", example: "She has soft skin." },
  { id: "g2944", category: "高中3500词", word: "skip", phonetic: "/skɪp/", translation: "跳过；蹦跳", example: "She skipped the introduction." },
  { id: "g2945", category: "高中3500词", word: "skirt", phonetic: "/skɜːrt/", translation: "裙子", example: "She wore a long skirt." },
  { id: "g2946", category: "高中3500词", word: "sky", phonetic: "/skaɪ/", translation: "天空", example: "The sky is blue." },
  { id: "g2947", category: "高中3500词", word: "slave", phonetic: "/sleɪv/", translation: "奴隶", example: "Slaves were freed long ago." },
  { id: "g2948", category: "高中3500词", word: "slavery", phonetic: "/ˈsleɪvəri/", translation: "奴隶制", example: "Slavery was abolished in the 19th century." },
  { id: "g2949", category: "高中3500词", word: "sleep", phonetic: "/sliːp/", translation: "睡觉", example: "She slept for eight hours." },
  { id: "g2950", category: "高中3500词", word: "sleepy", phonetic: "/ˈsliːpi/", translation: "困倦的", example: "She felt sleepy." },
  { id: "g2951", category: "高中3500词", word: "slice", phonetic: "/slaɪs/", translation: "切片；部分", example: "She cut a slice of cake." },
  { id: "g2952", category: "高中3500词", word: "slide", phonetic: "/slaɪd/", translation: "滑动；幻灯片", example: "She slid across the ice." },
  { id: "g2953", category: "高中3500词", word: "slight", phonetic: "/slaɪt/", translation: "轻微的", example: "There was a slight change in the plan." },
  { id: "g2954", category: "高中3500词", word: "slightly", phonetic: "/ˈslaɪtli/", translation: "稍微", example: "She was slightly annoyed." },
  { id: "g2955", category: "高中3500词", word: "slim", phonetic: "/slɪm/", translation: "苗条的；微小的", example: "She has a slim figure." },
  { id: "g2956", category: "高中3500词", word: "slip", phonetic: "/slɪp/", translation: "滑倒；溜走", example: "Be careful not to slip on the ice." },
  { id: "g2957", category: "高中3500词", word: "slow", phonetic: "/sləʊ/", translation: "慢的", example: "She walks very slowly." },
  { id: "g2958", category: "高中3500词", word: "small", phonetic: "/smɔːl/", translation: "小的", example: "She lives in a small town." },
  { id: "g2959", category: "高中3500词", word: "smart", phonetic: "/smɑːrt/", translation: "聪明的；时髦的", example: "She is a smart student." },
  { id: "g2960", category: "高中3500词", word: "smell", phonetic: "/smel/", translation: "闻；气味", example: "The flowers smell sweet." },
  { id: "g2961", category: "高中3500词", word: "smile", phonetic: "/smaɪl/", translation: "微笑", example: "She smiled at me." },
  { id: "g2962", category: "高中3500词", word: "smoke", phonetic: "/sməʊk/", translation: "烟；吸烟", example: "She doesn't smoke." },
  { id: "g2963", category: "高中3500词", word: "smooth", phonetic: "/smuːð/", translation: "光滑的；顺利的", example: "The road was smooth and flat." },
  { id: "g2964", category: "高中3500词", word: "snake", phonetic: "/sneɪk/", translation: "蛇", example: "She is afraid of snakes." },
  { id: "g2965", category: "高中3500词", word: "snow", phonetic: "/snəʊ/", translation: "雪", example: "It is snowing outside." },
  { id: "g2966", category: "高中3500词", word: "snowy", phonetic: "/ˈsnəʊi/", translation: "下雪的", example: "It was a snowy day." },
  { id: "g2967", category: "高中3500词", word: "so", phonetic: "/səʊ/", translation: "所以；如此", example: "She was tired, so she went to bed." },
  { id: "g2968", category: "高中3500词", word: "soap", phonetic: "/səʊp/", translation: "肥皂", example: "She washed her hands with soap." },
  { id: "g2969", category: "高中3500词", word: "soccer", phonetic: "/ˈsɒkər/", translation: "足球", example: "She plays soccer after school." },
  { id: "g2970", category: "高中3500词", word: "social", phonetic: "/ˈsəʊʃl/", translation: "社会的；社交的", example: "Social media has changed communication." },
  { id: "g2971", category: "高中3500词", word: "socialism", phonetic: "/ˈsəʊʃəlɪzəm/", translation: "社会主义", example: "She studied socialism." },
  { id: "g2972", category: "高中3500词", word: "society", phonetic: "/səˈsaɪəti/", translation: "社会", example: "She contributed to society." },
  { id: "g2973", category: "高中3500词", word: "sock", phonetic: "/sɒk/", translation: "袜子", example: "She bought a pair of socks." },
  { id: "g2974", category: "高中3500词", word: "soft", phonetic: "/sɒft/", translation: "柔软的", example: "The pillow is very soft." },
  { id: "g2975", category: "高中3500词", word: "software", phonetic: "/ˈsɒftweər/", translation: "软件", example: "She installed new software." },
  { id: "g2976", category: "高中3500词", word: "soil", phonetic: "/sɔɪl/", translation: "土壤", example: "The soil is very fertile." },
  { id: "g2977", category: "高中3500词", word: "solar", phonetic: "/ˈsəʊlər/", translation: "太阳的", example: "Solar energy is renewable." },
  { id: "g2978", category: "高中3500词", word: "soldier", phonetic: "/ˈsəʊldʒər/", translation: "士兵", example: "The soldiers marched forward." },
  { id: "g2979", category: "高中3500词", word: "solid", phonetic: "/ˈsɒlɪd/", translation: "固体的；坚固的", example: "The table is made of solid wood." },
  { id: "g2980", category: "高中3500词", word: "solution", phonetic: "/səˈluːʃn/", translation: "解决方案；溶液", example: "We need to find a solution to the problem." },
  { id: "g2981", category: "高中3500词", word: "solve", phonetic: "/sɒlv/", translation: "解决", example: "Can you solve this math problem?" },
  { id: "g2982", category: "高中3500词", word: "some", phonetic: "/sʌm/", translation: "一些", example: "She needs some help." },
  { id: "g2983", category: "高中3500词", word: "somebody", phonetic: "/ˈsʌmbɒdi/", translation: "某人", example: "Somebody called you." },
  { id: "g2984", category: "高中3500词", word: "somehow", phonetic: "/ˈsʌmhaʊ/", translation: "以某种方式", example: "She somehow managed to finish." },
  { id: "g2985", category: "高中3500词", word: "someone", phonetic: "/ˈsʌmwʌn/", translation: "某人", example: "Someone is at the door." },
  { id: "g2986", category: "高中3500词", word: "something", phonetic: "/ˈsʌmθɪŋ/", translation: "某事", example: "She said something interesting." },
  { id: "g2987", category: "高中3500词", word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", translation: "有时", example: "She sometimes walks to school." },
  { id: "g2988", category: "高中3500词", word: "somewhat", phonetic: "/ˈsʌmwɒt/", translation: "稍微", example: "She was somewhat disappointed." },
  { id: "g2989", category: "高中3500词", word: "somewhere", phonetic: "/ˈsʌmweər/", translation: "某处", example: "She went somewhere quiet." },
  { id: "g2990", category: "高中3500词", word: "son", phonetic: "/sʌn/", translation: "儿子", example: "She has a son and a daughter." },
  { id: "g2991", category: "高中3500词", word: "song", phonetic: "/sɒŋ/", translation: "歌曲", example: "She sang a beautiful song." },
  { id: "g2992", category: "高中3500词", word: "soon", phonetic: "/suːn/", translation: "很快", example: "She will be here soon." },
  { id: "g2993", category: "高中3500词", word: "sophisticated", phonetic: "/səˈfɪstɪkeɪtɪd/", translation: "精密的；老练的", example: "The equipment is very sophisticated." },
  { id: "g2994", category: "高中3500词", word: "sorry", phonetic: "/ˈsɒri/", translation: "抱歉的", example: "I am sorry for being late." },
  { id: "g2995", category: "高中3500词", word: "sort", phonetic: "/sɔːrt/", translation: "种类；排序", example: "She sorted the letters." },
  { id: "g2996", category: "高中3500词", word: "soul", phonetic: "/səʊl/", translation: "灵魂", example: "She has a kind soul." },
  { id: "g2997", category: "高中3500词", word: "sound", phonetic: "/saʊnd/", translation: "声音；听起来", example: "That sounds like a good idea." },
  { id: "g2998", category: "高中3500词", word: "soup", phonetic: "/suːp/", translation: "汤", example: "She made chicken soup." },
  { id: "g2999", category: "高中3500词", word: "sour", phonetic: "/saʊər/", translation: "酸的", example: "The lemon is very sour." },
  { id: "g3000", category: "高中3500词", word: "source", phonetic: "/sɔːrs/", translation: "来源；源泉", example: "What is the source of the information?" },
  { id: "g3001", category: "高中3500词", word: "south", phonetic: "/saʊθ/", translation: "南方", example: "She lives in the south." },
  { id: "g3002", category: "高中3500词", word: "southern", phonetic: "/ˈsʌðərn/", translation: "南方的", example: "She visited the southern coast." },
  { id: "g3003", category: "高中3500词", word: "space", phonetic: "/speɪs/", translation: "空间；太空", example: "She traveled into space." },
  { id: "g3004", category: "高中3500词", word: "spade", phonetic: "/speɪd/", translation: "铲子", example: "She dug with a spade." },
  { id: "g3005", category: "高中3500词", word: "spare", phonetic: "/speər/", translation: "多余的；抽出", example: "She has no spare time." },
  { id: "g3006", category: "高中3500词", word: "speak", phonetic: "/spiːk/", translation: "说话", example: "She speaks three languages." },
  { id: "g3007", category: "高中3500词", word: "speaker", phonetic: "/ˈspiːkər/", translation: "演讲者；扬声器", example: "She is a good speaker." },
  { id: "g3008", category: "高中3500词", word: "special", phonetic: "/ˈspeʃl/", translation: "特别的", example: "She has a special talent." },
  { id: "g3009", category: "高中3500词", word: "specialist", phonetic: "/ˈspeʃəlɪst/", translation: "专家", example: "She is a specialist in this field." },
  { id: "g3010", category: "高中3500词", word: "specific", phonetic: "/spəˈsɪfɪk/", translation: "具体的；特定的", example: "Can you be more specific?" },
  { id: "g3011", category: "高中3500词", word: "speech", phonetic: "/spiːtʃ/", translation: "演讲", example: "She gave a speech." },
  { id: "g3012", category: "高中3500词", word: "speed", phonetic: "/spiːd/", translation: "速度", example: "She drove at high speed." },
  { id: "g3013", category: "高中3500词", word: "spell", phonetic: "/spel/", translation: "拼写", example: "How do you spell your name?" },
  { id: "g3014", category: "高中3500词", word: "spelling", phonetic: "/ˈspelɪŋ/", translation: "拼写", example: "Her spelling is excellent." },
  { id: "g3015", category: "高中3500词", word: "spend", phonetic: "/spend/", translation: "花费；度过", example: "She spent the weekend at home." },
  { id: "g3016", category: "高中3500词", word: "spin", phonetic: "/spɪn/", translation: "旋转", example: "She spun around." },
  { id: "g3017", category: "高中3500词", word: "spirit", phonetic: "/ˈspɪrɪt/", translation: "精神；灵魂", example: "They showed great team spirit." },
  { id: "g3018", category: "高中3500词", word: "spiritual", phonetic: "/ˈspɪrɪtʃuəl/", translation: "精神的；心灵的", example: "She has a spiritual experience." },
  { id: "g3019", category: "高中3500词", word: "spit", phonetic: "/spɪt/", translation: "吐", example: "Don't spit on the ground." },
  { id: "g3020", category: "高中3500词", word: "splendid", phonetic: "/ˈsplendɪd/", translation: "壮丽的", example: "The view was splendid." },
  { id: "g3021", category: "高中3500词", word: "split", phonetic: "/splɪt/", translation: "分裂；劈开", example: "She split the wood." },
  { id: "g3022", category: "高中3500词", word: "spoken", phonetic: "/ˈspəʊkən/", translation: "口头的", example: "She has good spoken English." },
  { id: "g3023", category: "高中3500词", word: "sponsor", phonetic: "/ˈspɒnsər/", translation: "赞助；发起", example: "The event is sponsored by a local company." },
  { id: "g3024", category: "高中3500词", word: "spoon", phonetic: "/spuːn/", translation: "勺子", example: "She ate soup with a spoon." },
  { id: "g3025", category: "高中3500词", word: "sport", phonetic: "/spɔːrt/", translation: "运动", example: "She enjoys sports." },
  { id: "g3026", category: "高中3500词", word: "spot", phonetic: "/spɒt/", translation: "地点；发现", example: "She spotted her friend in the crowd." },
  { id: "g3027", category: "高中3500词", word: "spray", phonetic: "/spreɪ/", translation: "喷雾", example: "She sprayed perfume." },
  { id: "g3028", category: "高中3500词", word: "spread", phonetic: "/spred/", translation: "传播；展开", example: "The news spread quickly." },
  { id: "g3029", category: "高中3500词", word: "spring", phonetic: "/sprɪŋ/", translation: "春天；泉水", example: "Flowers bloom in spring." },
  { id: "g3030", category: "高中3500词", word: "spy", phonetic: "/spaɪ/", translation: "间谍", example: "She was accused of being a spy." },
  { id: "g3031", category: "高中3500词", word: "square", phonetic: "/skweər/", translation: "正方形；广场", example: "The hotel is near the square." },
  { id: "g3032", category: "高中3500词", word: "squeeze", phonetic: "/skwiːz/", translation: "挤压", example: "She squeezed the lemon." },
  { id: "g3033", category: "高中3500词", word: "stable", phonetic: "/ˈsteɪbl/", translation: "稳定的；马厩", example: "The economy is now stable." },
  { id: "g3034", category: "高中3500词", word: "staff", phonetic: "/stɑːf/", translation: "员工", example: "The staff are very friendly." },
  { id: "g3035", category: "高中3500词", word: "stage", phonetic: "/steɪdʒ/", translation: "阶段；舞台", example: "She is at the final stage of her project." },
  { id: "g3036", category: "高中3500词", word: "stain", phonetic: "/steɪn/", translation: "污点", example: "She removed the stain." },
  { id: "g3037", category: "高中3500词", word: "stair", phonetic: "/steər/", translation: "楼梯", example: "She climbed the stairs." },
  { id: "g3038", category: "高中3500词", word: "stake", phonetic: "/steɪk/", translation: "赌注；利害关系", example: "She has a stake in the company." },
  { id: "g3039", category: "高中3500词", word: "stale", phonetic: "/steɪl/", translation: "不新鲜的", example: "The bread is stale." },
  { id: "g3040", category: "高中3500词", word: "stalk", phonetic: "/stɔːk/", translation: "茎；跟踪", example: "She stalked through the forest." },
  { id: "g3041", category: "高中3500词", word: "stall", phonetic: "/stɔːl/", translation: "摊位；畜栏", example: "She bought fruit from a stall." },
  { id: "g3042", category: "高中3500词", word: "stamp", phonetic: "/stæmp/", translation: "邮票；跺脚", example: "She collected stamps." },
  { id: "g3043", category: "高中3500词", word: "stand", phonetic: "/stænd/", translation: "站；忍受", example: "She stood by the window." },
  { id: "g3044", category: "高中3500词", word: "standard", phonetic: "/ˈstændərd/", translation: "标准", example: "The hotel meets high standards." },
  { id: "g3045", category: "高中3500词", word: "star", phonetic: "/stɑːr/", translation: "星星；明星", example: "She is a movie star." },
  { id: "g3046", category: "高中3500词", word: "stare", phonetic: "/steər/", translation: "凝视", example: "She stared at the screen." },
  { id: "g3047", category: "高中3500词", word: "start", phonetic: "/stɑːrt/", translation: "开始", example: "She started her new job." },
  { id: "g3048", category: "高中3500词", word: "starve", phonetic: "/stɑːrv/", translation: "挨饿", example: "The people were starving." },
  { id: "g3049", category: "高中3500词", word: "state", phonetic: "/steɪt/", translation: "状态；州", example: "She is in a good state of mind." },
  { id: "g3050", category: "高中3500词", word: "statement", phonetic: "/ˈsteɪtmənt/", translation: "声明", example: "She made a public statement." },
  { id: "g3051", category: "高中3500词", word: "station", phonetic: "/ˈsteɪʃn/", translation: "车站；站", example: "She arrived at the station." },
  { id: "g3052", category: "高中3500词", word: "status", phonetic: "/ˈsteɪtəs/", translation: "地位；状态", example: "What is the current status of the project?" },
  { id: "g3053", category: "高中3500词", word: "stay", phonetic: "/steɪ/", translation: "停留", example: "She stayed at home." },
  { id: "g3054", category: "高中3500词", word: "steady", phonetic: "/ˈstedi/", translation: "稳定的；平稳的", example: "The economy shows steady growth." },
  { id: "g3055", category: "高中3500词", word: "steak", phonetic: "/steɪk/", translation: "牛排", example: "She ordered a steak." },
  { id: "g3056", category: "高中3500词", word: "steal", phonetic: "/stiːl/", translation: "偷", example: "Someone stole her wallet." },
  { id: "g3057", category: "高中3500词", word: "steam", phonetic: "/stiːm/", translation: "蒸汽", example: "The steam rose from the pot." },
  { id: "g3058", category: "高中3500词", word: "steel", phonetic: "/stiːl/", translation: "钢", example: "The bridge is made of steel." },
  { id: "g3059", category: "高中3500词", word: "steep", phonetic: "/stiːp/", translation: "陡峭的", example: "The hill is very steep." },
  { id: "g3060", category: "高中3500词", word: "steer", phonetic: "/stɪər/", translation: "驾驶；引导", example: "She steered the car carefully." },
  { id: "g3061", category: "高中3500词", word: "stem", phonetic: "/stem/", translation: "茎；起源", example: "The stem of the flower is long." },
  { id: "g3062", category: "高中3500词", word: "step", phonetic: "/step/", translation: "步；步骤", example: "She took a step forward." },
  { id: "g3063", category: "高中3500词", word: "stick", phonetic: "/stɪk/", translation: "棍子；粘贴", example: "She stuck the note on the wall." },
  { id: "g3064", category: "高中3500词", word: "still", phonetic: "/stɪl/", translation: "仍然；静止的", example: "She is still sleeping." },
  { id: "g3065", category: "高中3500词", word: "stimulate", phonetic: "/ˈstɪmjuleɪt/", translation: "刺激；激励", example: "The policy stimulated economic growth." },
  { id: "g3066", category: "高中3500词", word: "stir", phonetic: "/stɜːr/", translation: "搅拌；激起", example: "She stirred the soup." },
  { id: "g3067", category: "高中3500词", word: "stock", phonetic: "/stɒk/", translation: "库存；股票", example: "The shop has a good stock of books." },
  { id: "g3068", category: "高中3500词", word: "stomach", phonetic: "/ˈstʌmək/", translation: "胃", example: "She has a stomachache." },
  { id: "g3069", category: "高中3500词", word: "stone", phonetic: "/stəʊn/", translation: "石头", example: "She threw a stone." },
  { id: "g3070", category: "高中3500词", word: "stop", phonetic: "/stɒp/", translation: "停止", example: "She stopped the car." },
  { id: "g3071", category: "高中3500词", word: "storage", phonetic: "/ˈstɔːrɪdʒ/", translation: "存储", example: "She needs more storage space." },
  { id: "g3072", category: "高中3500词", word: "store", phonetic: "/stɔːr/", translation: "商店；储存", example: "She works at a clothing store." },
  { id: "g3073", category: "高中3500词", word: "storm", phonetic: "/stɔːrm/", translation: "暴风雨", example: "The storm caused damage." },
  { id: "g3074", category: "高中3500词", word: "story", phonetic: "/ˈstɔːri/", translation: "故事", example: "She told a story." },
  { id: "g3075", category: "高中3500词", word: "stout", phonetic: "/staʊt/", translation: "矮胖的；坚强的", example: "He was a stout man." },
  { id: "g3076", category: "高中3500词", word: "stove", phonetic: "/stəʊv/", translation: "炉子", example: "She cooked on the stove." },
  { id: "g3077", category: "高中3500词", word: "straight", phonetic: "/streɪt/", translation: "直的；直接地", example: "Go straight ahead." },
  { id: "g3078", category: "高中3500词", word: "strange", phonetic: "/streɪndʒ/", translation: "奇怪的", example: "She had a strange dream." },
  { id: "g3079", category: "高中3500词", word: "stranger", phonetic: "/ˈstreɪndʒər/", translation: "陌生人", example: "Don't talk to strangers." },
  { id: "g3080", category: "高中3500词", word: "strategy", phonetic: "/ˈstrætədʒi/", translation: "策略；战略", example: "We need a new marketing strategy." },
  { id: "g3081", category: "高中3500词", word: "straw", phonetic: "/strɔː/", translation: "稻草；吸管", example: "She drank through a straw." },
  { id: "g3082", category: "高中3500词", word: "strawberry", phonetic: "/ˈstrɔːbəri/", translation: "草莓", example: "She ate fresh strawberries." },
  { id: "g3083", category: "高中3500词", word: "stream", phonetic: "/striːm/", translation: "溪流", example: "They sat by the stream." },
  { id: "g3084", category: "高中3500词", word: "street", phonetic: "/striːt/", translation: "街道", example: "She lives on Main Street." },
  { id: "g3085", category: "高中3500词", word: "strength", phonetic: "/streŋθ/", translation: "力量；优点", example: "Her greatest strength is her patience." },
  { id: "g3086", category: "高中3500词", word: "strengthen", phonetic: "/ˈstreŋθn/", translation: "加强", example: "She strengthened her muscles." },
  { id: "g3087", category: "高中3500词", word: "stress", phonetic: "/stres/", translation: "压力；强调", example: "Too much stress is bad for your health." },
  { id: "g3088", category: "高中3500词", word: "stretch", phonetic: "/stretʃ/", translation: "伸展；延伸", example: "She stretched her arms after sitting for hours." },
  { id: "g3089", category: "高中3500词", word: "strict", phonetic: "/strɪkt/", translation: "严格的", example: "The teacher is very strict." },
  { id: "g3090", category: "高中3500词", word: "strike", phonetic: "/straɪk/", translation: "罢工；打击", example: "The workers went on strike for better pay." },
  { id: "g3091", category: "高中3500词", word: "string", phonetic: "/strɪŋ/", translation: "绳子；弦", example: "She tied the package with string." },
  { id: "g3092", category: "高中3500词", word: "strip", phonetic: "/strɪp/", translation: "条；脱去", example: "She tore the paper into strips." },
  { id: "g3093", category: "高中3500词", word: "stripe", phonetic: "/straɪp/", translation: "条纹", example: "The zebra has black and white stripes." },
  { id: "g3094", category: "高中3500词", word: "stroke", phonetic: "/strəʊk/", translation: "中风；击", example: "She had a stroke." },
  { id: "g3095", category: "高中3500词", word: "strong", phonetic: "/strɒŋ/", translation: "强壮的", example: "She is very strong." },
  { id: "g3096", category: "高中3500词", word: "structure", phonetic: "/ˈstrʌktʃər/", translation: "结构；建筑", example: "The structure of the building is very strong." },
  { id: "g3097", category: "高中3500词", word: "struggle", phonetic: "/ˈstrʌɡl/", translation: "斗争；挣扎", example: "She struggled to find a job." },
  { id: "g3098", category: "高中3500词", word: "stubborn", phonetic: "/ˈstʌbərn/", translation: "固执的", example: "She is very stubborn." },
  { id: "g3099", category: "高中3500词", word: "student", phonetic: "/ˈstjuːdnt/", translation: "学生", example: "She is a good student." },
  { id: "g3100", category: "高中3500词", word: "studio", phonetic: "/ˈstjuːdiəʊ/", translation: "工作室；演播室", example: "She works in a recording studio." },
  { id: "g3101", category: "高中3500词", word: "study", phonetic: "/ˈstʌdi/", translation: "学习；研究", example: "She studies hard every day." },
  { id: "g3102", category: "高中3500词", word: "stuff", phonetic: "/stʌf/", translation: "东西；材料", example: "What is this stuff made of?" },
  { id: "g3103", category: "高中3500词", word: "stupid", phonetic: "/ˈstjuːpɪd/", translation: "愚蠢的", example: "That was a stupid mistake." },
  { id: "g3104", category: "高中3500词", word: "style", phonetic: "/staɪl/", translation: "风格", example: "She has a unique style." },
  { id: "g3105", category: "高中3500词", word: "subject", phonetic: "/ˈsʌbdʒɪkt/", translation: "科目；主题", example: "What is your favorite subject?" },
  { id: "g3106", category: "高中3500词", word: "submit", phonetic: "/səbˈmɪt/", translation: "提交；服从", example: "Please submit your report by Friday." },
  { id: "g3107", category: "高中3500词", word: "subscribe", phonetic: "/səbˈskraɪb/", translation: "订阅", example: "She subscribes to the magazine." },
  { id: "g3108", category: "高中3500词", word: "subsequent", phonetic: "/ˈsʌbsɪkwənt/", translation: "随后的", example: "Subsequent events proved her right." },
  { id: "g3109", category: "高中3500词", word: "substance", phonetic: "/ˈsʌbstəns/", translation: "物质；实质", example: "Water is a common substance." },
  { id: "g3110", category: "高中3500词", word: "substitute", phonetic: "/ˈsʌbstɪtjuːt/", translation: "替代品；替代", example: "You can use honey as a substitute for sugar." },
  { id: "g3111", category: "高中3500词", word: "succeed", phonetic: "/səkˈsiːd/", translation: "成功；继承", example: "She succeeded in passing the exam." },
  { id: "g3112", category: "高中3500词", word: "success", phonetic: "/səkˈses/", translation: "成功", example: "She achieved great success." },
  { id: "g3113", category: "高中3500词", word: "successful", phonetic: "/səkˈsesfl/", translation: "成功的", example: "She is a successful businesswoman." },
  { id: "g3114", category: "高中3500词", word: "such", phonetic: "/sʌtʃ/", translation: "如此的", example: "I have never seen such a beautiful sunset." },
  { id: "g3115", category: "高中3500词", word: "suck", phonetic: "/sʌk/", translation: "吮吸", example: "The baby sucked the milk." },
  { id: "g3116", category: "高中3500词", word: "sudden", phonetic: "/ˈsʌdn/", translation: "突然的", example: "There was a sudden noise." },
  { id: "g3117", category: "高中3500词", word: "suddenly", phonetic: "/ˈsʌdnli/", translation: "突然地", example: "She suddenly appeared." },
  { id: "g3118", category: "高中3500词", word: "suffer", phonetic: "/ˈsʌfər/", translation: "遭受", example: "She suffered from a headache." },
  { id: "g3119", category: "高中3500词", word: "suffering", phonetic: "/ˈsʌfərɪŋ/", translation: "痛苦", example: "The suffering of the people was great." },
  { id: "g3120", category: "高中3500词", word: "sufficient", phonetic: "/səˈfɪʃnt/", translation: "足够的", example: "We have sufficient evidence to proceed." },
  { id: "g3121", category: "高中3500词", word: "sugar", phonetic: "/ˈʃʊɡər/", translation: "糖", example: "She added sugar to her coffee." },
  { id: "g3122", category: "高中3500词", word: "suggest", phonetic: "/səˈdʒest/", translation: "建议；暗示", example: "I suggest that we leave now." },
  { id: "g3123", category: "高中3500词", word: "suggestion", phonetic: "/səˈdʒestʃən/", translation: "建议", example: "She made a helpful suggestion." },
  { id: "g3124", category: "高中3500词", word: "suit", phonetic: "/suːt/", translation: "适合；套装", example: "This job suits her perfectly." },
  { id: "g3125", category: "高中3500词", word: "suitable", phonetic: "/ˈsuːtəbl/", translation: "合适的", example: "Is this dress suitable for the party?" },
  { id: "g3126", category: "高中3500词", word: "suite", phonetic: "/swiːt/", translation: "套房", example: "She booked a suite at the hotel." },
  { id: "g3127", category: "高中3500词", word: "sum", phonetic: "/sʌm/", translation: "总和；金额", example: "She paid a large sum of money." },
  { id: "g3128", category: "高中3500词", word: "summarize", phonetic: "/ˈsʌməraɪz/", translation: "总结；概括", example: "Please summarize the main points." },
  { id: "g3129", category: "高中3500词", word: "summary", phonetic: "/ˈsʌməri/", translation: "摘要", example: "She wrote a summary of the article." },
  { id: "g3130", category: "高中3500词", word: "summer", phonetic: "/ˈsʌmər/", translation: "夏天", example: "We went to the beach in summer." },
  { id: "g3131", category: "高中3500词", word: "sun", phonetic: "/sʌn/", translation: "太阳", example: "The sun is shining brightly." },
  { id: "g3132", category: "高中3500词", word: "Sunday", phonetic: "/ˈsʌndeɪ/", translation: "星期日", example: "We rest on Sunday." },
  { id: "g3133", category: "高中3500词", word: "sunlight", phonetic: "/ˈsʌnlaɪt/", translation: "阳光", example: "The room was filled with sunlight." },
  { id: "g3134", category: "高中3500词", word: "sunny", phonetic: "/ˈsʌni/", translation: "晴朗的", example: "It is a sunny day." },
  { id: "g3135", category: "高中3500词", word: "sunrise", phonetic: "/ˈsʌnraɪz/", translation: "日出", example: "We watched the sunrise." },
  { id: "g3136", category: "高中3500词", word: "sunset", phonetic: "/ˈsʌnset/", translation: "日落", example: "The sunset was beautiful." },
  { id: "g3137", category: "高中3500词", word: "sunshine", phonetic: "/ˈsʌnʃaɪn/", translation: "阳光", example: "She sat in the sunshine." },
  { id: "g3138", category: "高中3500词", word: "super", phonetic: "/ˈsuːpər/", translation: "超级的", example: "She is a super student." },
  { id: "g3139", category: "高中3500词", word: "superb", phonetic: "/suːˈpɜːrb/", translation: "极好的", example: "The performance was superb." },
  { id: "g3140", category: "高中3500词", word: "superior", phonetic: "/suːˈpɪəriər/", translation: "优越的；上级", example: "This product is superior to the old one." },
  { id: "g3141", category: "高中3500词", word: "supermarket", phonetic: "/ˈsuːpərmɑːrkɪt/", translation: "超市", example: "She went to the supermarket." },
  { id: "g3142", category: "高中3500词", word: "supper", phonetic: "/ˈsʌpər/", translation: "晚餐", example: "She prepared supper." },
  { id: "g3143", category: "高中3500词", word: "supplement", phonetic: "/ˈsʌplɪmənt/", translation: "补充；增刊", example: "She takes vitamin supplements every day." },
  { id: "g3144", category: "高中3500词", word: "supply", phonetic: "/səˈplaɪ/", translation: "供应；供给", example: "The farm supplies vegetables to the market." },
  { id: "g3145", category: "高中3500词", word: "support", phonetic: "/səˈpɔːrt/", translation: "支持；支撑", example: "We support your decision." },
  { id: "g3146", category: "高中3500词", word: "supporter", phonetic: "/səˈpɔːrtər/", translation: "支持者", example: "She is a strong supporter of the plan." },
  { id: "g3147", category: "高中3500词", word: "suppose", phonetic: "/səˈpəʊz/", translation: "假设；认为", example: "I suppose you're right." },
  { id: "g3148", category: "高中3500词", word: "supreme", phonetic: "/suːˈpriːm/", translation: "最高的；至上的", example: "The Supreme Court made the final decision." },
  { id: "g3149", category: "高中3500词", word: "sure", phonetic: "/ʃʊər/", translation: "确定的", example: "Are you sure?" },
  { id: "g3150", category: "高中3500词", word: "surely", phonetic: "/ˈʃʊəli/", translation: "确实地", example: "She will surely succeed." },
  { id: "g3151", category: "高中3500词", word: "surface", phonetic: "/ˈsɜːrfɪs/", translation: "表面", example: "The surface of the lake was calm." },
  { id: "g3152", category: "高中3500词", word: "surgeon", phonetic: "/ˈsɜːrdʒən/", translation: "外科医生", example: "The surgeon performed the operation." },
  { id: "g3153", category: "高中3500词", word: "surgery", phonetic: "/ˈsɜːrdʒəri/", translation: "手术", example: "He underwent surgery last week." },
  { id: "g3154", category: "高中3500词", word: "surplus", phonetic: "/ˈsɜːrpləs/", translation: "剩余；盈余", example: "The country has a trade surplus." },
  { id: "g3155", category: "高中3500词", word: "surprise", phonetic: "/sərˈpraɪz/", translation: "惊喜；使惊讶", example: "She surprised everyone." },
  { id: "g3156", category: "高中3500词", word: "surprising", phonetic: "/sərˈpraɪzɪŋ/", translation: "令人惊讶的", example: "The result was surprising." },
  { id: "g3157", category: "高中3500词", word: "surprisingly", phonetic: "/sərˈpraɪzɪŋli/", translation: "令人惊讶地", example: "Surprisingly, she agreed." },
  { id: "g3158", category: "高中3500词", word: "surround", phonetic: "/səˈraʊnd/", translation: "包围；环绕", example: "The house is surrounded by trees." },
  { id: "g3159", category: "高中3500词", word: "surrounding", phonetic: "/səˈraʊndɪŋ/", translation: "周围的", example: "The surrounding area is beautiful." },
  { id: "g3160", category: "高中3500词", word: "survey", phonetic: "/ˈsɜːrveɪ/", translation: "调查", example: "They conducted a survey on customer satisfaction." },
  { id: "g3161", category: "高中3500词", word: "survival", phonetic: "/sərˈvaɪvl/", translation: "生存", example: "The survival of the species is at risk." },
  { id: "g3162", category: "高中3500词", word: "survive", phonetic: "/sərˈvaɪv/", translation: "幸存；存活", example: "She survived the earthquake." },
  { id: "g3163", category: "高中3500词", word: "suspect", phonetic: "/səˈspekt/", translation: "怀疑；嫌疑人", example: "I suspect that he is lying." },
  { id: "g3164", category: "高中3500词", word: "suspend", phonetic: "/səˈspend/", translation: "暂停；悬挂", example: "The player was suspended for two games." },
  { id: "g3165", category: "高中3500词", word: "suspicion", phonetic: "/səˈspɪʃn/", translation: "怀疑", example: "She had a suspicion about him." },
  { id: "g3166", category: "高中3500词", word: "sustain", phonetic: "/səˈsteɪn/", translation: "维持；支撑", example: "The economy cannot sustain such growth." },
  { id: "g3167", category: "高中3500词", word: "swallow", phonetic: "/ˈswɒləʊ/", translation: "吞咽；燕子", example: "She swallowed the medicine with water." },
  { id: "g3168", category: "高中3500词", word: "swear", phonetic: "/sweər/", translation: "发誓；咒骂", example: "He swore to tell the truth." },
  { id: "g3169", category: "高中3500词", word: "sweat", phonetic: "/swet/", translation: "汗水", example: "She was covered in sweat." },
  { id: "g3170", category: "高中3500词", word: "sweater", phonetic: "/ˈswetər/", translation: "毛衣", example: "She wore a warm sweater." },
  { id: "g3171", category: "高中3500词", word: "sweep", phonetic: "/swiːp/", translation: "扫；席卷", example: "She swept the floor." },
  { id: "g3172", category: "高中3500词", word: "sweet", phonetic: "/swiːt/", translation: "甜的；糖果", example: "The cake is very sweet." },
  { id: "g3173", category: "高中3500词", word: "swim", phonetic: "/swɪm/", translation: "游泳", example: "She swims every day." },
  { id: "g3174", category: "高中3500词", word: "swing", phonetic: "/swɪŋ/", translation: "摇摆；秋千", example: "She swung her arms." },
  { id: "g3175", category: "高中3500词", word: "switch", phonetic: "/swɪtʃ/", translation: "开关；转换", example: "She switched off the light." },
  { id: "g3176", category: "高中3500词", word: "sword", phonetic: "/sɔːrd/", translation: "剑", example: "The knight drew his sword." },
  { id: "g3177", category: "高中3500词", word: "symbol", phonetic: "/ˈsɪmbl/", translation: "符号；象征", example: "The dove is a symbol of peace." },
  { id: "g3178", category: "高中3500词", word: "sympathy", phonetic: "/ˈsɪmpəθi/", translation: "同情", example: "I have sympathy for the victims." },
  { id: "g3179", category: "高中3500词", word: "symptom", phonetic: "/ˈsɪmptəm/", translation: "症状", example: "Fever is a symptom of the disease." },
  { id: "g3180", category: "高中3500词", word: "system", phonetic: "/ˈsɪstəm/", translation: "系统；制度", example: "The education system needs reform." },
  { id: "g3181", category: "高中3500词", word: "systematic", phonetic: "/ˌsɪstəˈmætɪk/", translation: "系统的", example: "She used a systematic approach." },
  { id: "g3182", category: "高中3500词", word: "table", phonetic: "/ˈteɪbl/", translation: "桌子；表格", example: "She put the book on the table." },
  { id: "g3183", category: "高中3500词", word: "tablet", phonetic: "/ˈtæblɪt/", translation: "药片；平板电脑", example: "She took a tablet for the headache." },
  { id: "g3184", category: "高中3500词", word: "tactic", phonetic: "/ˈtæktɪk/", translation: "战术；策略", example: "She used clever tactics." },
  { id: "g3185", category: "高中3500词", word: "tail", phonetic: "/teɪl/", translation: "尾巴", example: "The dog wagged its tail." },
  { id: "g3186", category: "高中3500词", word: "tailor", phonetic: "/ˈteɪlər/", translation: "裁缝", example: "The tailor made her a dress." },
  { id: "g3187", category: "高中3500词", word: "take", phonetic: "/teɪk/", translation: "拿；带", example: "She took the bus to school." },
  { id: "g3188", category: "高中3500词", word: "tale", phonetic: "/teɪl/", translation: "故事", example: "She told a fairy tale." },
  { id: "g3189", category: "高中3500词", word: "talent", phonetic: "/ˈtælənt/", translation: "天赋；人才", example: "She has a talent for painting." },
  { id: "g3190", category: "高中3500词", word: "talented", phonetic: "/ˈtæləntɪd/", translation: "有天赋的", example: "She is a talented artist." },
  { id: "g3191", category: "高中3500词", word: "talk", phonetic: "/tɔːk/", translation: "谈话", example: "She talked to her friend." },
  { id: "g3192", category: "高中3500词", word: "tall", phonetic: "/tɔːl/", translation: "高的", example: "She is very tall." },
  { id: "g3193", category: "高中3500词", word: "tank", phonetic: "/tæŋk/", translation: "坦克；水箱", example: "The fish tank needs cleaning." },
  { id: "g3194", category: "高中3500词", word: "tap", phonetic: "/tæp/", translation: "轻拍；水龙头", example: "She tapped him on the shoulder." },
  { id: "g3195", category: "高中3500词", word: "tape", phonetic: "/teɪp/", translation: "磁带；胶带", example: "She played the tape." },
  { id: "g3196", category: "高中3500词", word: "target", phonetic: "/ˈtɑːrɡɪt/", translation: "目标；靶子", example: "We need to reach our sales target." },
  { id: "g3197", category: "高中3500词", word: "task", phonetic: "/tɑːsk/", translation: "任务", example: "She completed the task." },
  { id: "g3198", category: "高中3500词", word: "taste", phonetic: "/teɪst/", translation: "味道；品尝", example: "The food tastes delicious." },
  { id: "g3199", category: "高中3500词", word: "tax", phonetic: "/tæks/", translation: "税", example: "She paid her taxes." },
  { id: "g3200", category: "高中3500词", word: "taxi", phonetic: "/ˈtæksi/", translation: "出租车", example: "She took a taxi to the airport." },
  { id: "g3201", category: "高中3500词", word: "tea", phonetic: "/tiː/", translation: "茶", example: "She drank a cup of tea." },
  { id: "g3202", category: "高中3500词", word: "teach", phonetic: "/tiːtʃ/", translation: "教", example: "She teaches English." },
  { id: "g3203", category: "高中3500词", word: "teacher", phonetic: "/ˈtiːtʃər/", translation: "老师", example: "She is a good teacher." },
  { id: "g3204", category: "高中3500词", word: "teaching", phonetic: "/ˈtiːtʃɪŋ/", translation: "教学", example: "She has a teaching certificate." },
  { id: "g3205", category: "高中3500词", word: "team", phonetic: "/tiːm/", translation: "团队", example: "She is on the basketball team." },
  { id: "g3206", category: "高中3500词", word: "tear", phonetic: "/tɪər/", translation: "眼泪；撕", example: "Tears ran down her face." },
  { id: "g3207", category: "高中3500词", word: "technical", phonetic: "/ˈteknɪkl/", translation: "技术的", example: "She has technical skills." },
  { id: "g3208", category: "高中3500词", word: "technique", phonetic: "/tekˈniːk/", translation: "技术；技巧", example: "She learned new painting techniques." },
  { id: "g3209", category: "高中3500词", word: "technology", phonetic: "/tekˈnɒlədʒi/", translation: "技术；科技", example: "Technology is changing rapidly." },
  { id: "g3210", category: "高中3500词", word: "teenager", phonetic: "/ˈtiːneɪdʒər/", translation: "青少年", example: "She is a typical teenager." },
  { id: "g3211", category: "高中3500词", word: "telegram", phonetic: "/ˈtelɪɡræm/", translation: "电报", example: "She sent a telegram." },
  { id: "g3212", category: "高中3500词", word: "telegraph", phonetic: "/ˈtelɪɡrɑːf/", translation: "电报", example: "The telegraph was invented in the 19th century." },
  { id: "g3213", category: "高中3500词", word: "telephone", phonetic: "/ˈtelɪfəʊn/", translation: "电话", example: "She answered the telephone." },
  { id: "g3214", category: "高中3500词", word: "television", phonetic: "/ˈtelɪvɪʒn/", translation: "电视", example: "She watched television." },
  { id: "g3215", category: "高中3500词", word: "tell", phonetic: "/tel/", translation: "告诉", example: "She told me a story." },
  { id: "g3216", category: "高中3500词", word: "temperature", phonetic: "/ˈtemprətʃər/", translation: "温度", example: "The temperature is rising." },
  { id: "g3217", category: "高中3500词", word: "temple", phonetic: "/ˈtempl/", translation: "寺庙", example: "They visited the ancient temple." },
  { id: "g3218", category: "高中3500词", word: "temporary", phonetic: "/ˈtemprəri/", translation: "临时的", example: "This is only a temporary solution." },
  { id: "g3219", category: "高中3500词", word: "ten", phonetic: "/ten/", translation: "十", example: "She is ten years old." },
  { id: "g3220", category: "高中3500词", word: "tend", phonetic: "/tend/", translation: "倾向；照料", example: "She tends to be late for meetings." },
  { id: "g3221", category: "高中3500词", word: "tendency", phonetic: "/ˈtendənsi/", translation: "趋势；倾向", example: "There is a tendency for prices to rise." },
  { id: "g3222", category: "高中3500词", word: "tennis", phonetic: "/ˈtenɪs/", translation: "网球", example: "She plays tennis every weekend." },
  { id: "g3223", category: "高中3500词", word: "tense", phonetic: "/tens/", translation: "紧张的；时态", example: "She felt tense before the exam." },
  { id: "g3224", category: "高中3500词", word: "tension", phonetic: "/ˈtenʃn/", translation: "紧张；张力", example: "There was tension between the two groups." },
  { id: "g3225", category: "高中3500词", word: "tent", phonetic: "/tent/", translation: "帐篷", example: "They set up a tent." },
  { id: "g3226", category: "高中3500词", word: "term", phonetic: "/tɜːrm/", translation: "学期；术语", example: "The school term starts in September." },
  { id: "g3227", category: "高中3500词", word: "terminal", phonetic: "/ˈtɜːrmɪnl/", translation: "终点站；终端", example: "The flight departs from terminal 2." },
  { id: "g3228", category: "高中3500词", word: "terrible", phonetic: "/ˈterəbl/", translation: "可怕的", example: "The weather was terrible." },
  { id: "g3229", category: "高中3500词", word: "terrific", phonetic: "/təˈrɪfɪk/", translation: "极好的", example: "She did a terrific job." },
  { id: "g3230", category: "高中3500词", word: "terrified", phonetic: "/ˈterɪfaɪd/", translation: "非常害怕的", example: "She was terrified of the dark." },
  { id: "g3231", category: "高中3500词", word: "territory", phonetic: "/ˈterɪtəri/", translation: "领土；领域", example: "The country defended its territory." },
  { id: "g3232", category: "高中3500词", word: "terror", phonetic: "/ˈterər/", translation: "恐怖", example: "She screamed in terror." },
  { id: "g3233", category: "高中3500词", word: "terrorism", phonetic: "/ˈterərɪzəm/", translation: "恐怖主义", example: "Terrorism is a global problem." },
  { id: "g3234", category: "高中3500词", word: "terrorist", phonetic: "/ˈterərɪst/", translation: "恐怖分子", example: "The terrorists were arrested." },
  { id: "g3235", category: "高中3500词", word: "test", phonetic: "/test/", translation: "测试", example: "She passed the test." },
  { id: "g3236", category: "高中3500词", word: "text", phonetic: "/tekst/", translation: "文本；课文", example: "She read the text carefully." },
  { id: "g3237", category: "高中3500词", word: "textbook", phonetic: "/ˈtekstbʊk/", translation: "教科书", example: "She bought a new textbook." },
  { id: "g3238", category: "高中3500词", word: "than", phonetic: "/ðæn/", translation: "比", example: "She is taller than me." },
  { id: "g3239", category: "高中3500词", word: "thank", phonetic: "/θæŋk/", translation: "感谢", example: "Thank you for your help." },
  { id: "g3240", category: "高中3500词", word: "thankful", phonetic: "/ˈθæŋkfl/", translation: "感激的", example: "She was thankful for the support." },
  { id: "g3241", category: "高中3500词", word: "that", phonetic: "/ðæt/", translation: "那个", example: "That is a good idea." },
  { id: "g3242", category: "高中3500词", word: "the", phonetic: "/ðə/", translation: "这/那个", example: "The book is on the table." },
  { id: "g3243", category: "高中3500词", word: "theater", phonetic: "/ˈθɪətər/", translation: "剧院", example: "She went to the theater." },
  { id: "g3244", category: "高中3500词", word: "theme", phonetic: "/θiːm/", translation: "主题", example: "The theme of the party was Hawaiian." },
  { id: "g3245", category: "高中3500词", word: "themselves", phonetic: "/ðəmˈselvz/", translation: "他们自己", example: "They did it themselves." },
  { id: "g3246", category: "高中3500词", word: "then", phonetic: "/ðen/", translation: "然后", example: "She finished and then left." },
  { id: "g3247", category: "高中3500词", word: "theory", phonetic: "/ˈθɪəri/", translation: "理论；学说", example: "In theory, the plan should work." },
  { id: "g3248", category: "高中3500词", word: "therapy", phonetic: "/ˈθerəpi/", translation: "治疗；疗法", example: "She is receiving physical therapy." },
  { id: "g3249", category: "高中3500词", word: "there", phonetic: "/ðeər/", translation: "那里", example: "She is over there." },
  { id: "g3250", category: "高中3500词", word: "therefore", phonetic: "/ˈðeərfɔːr/", translation: "因此", example: "He was ill; therefore, he couldn't attend." },
  { id: "g3251", category: "高中3500词", word: "thermometer", phonetic: "/θərˈmɒmɪtər/", translation: "温度计", example: "She used a thermometer." },
  { id: "g3252", category: "高中3500词", word: "these", phonetic: "/ðiːz/", translation: "这些", example: "These are my books." },
  { id: "g3253", category: "高中3500词", word: "they", phonetic: "/ðeɪ/", translation: "他们", example: "They are my friends." },
  { id: "g3254", category: "高中3500词", word: "thick", phonetic: "/θɪk/", translation: "厚的；浓的", example: "The fog was very thick." },
  { id: "g3255", category: "高中3500词", word: "thief", phonetic: "/θiːf/", translation: "小偷", example: "The thief stole her purse." },
  { id: "g3256", category: "高中3500词", word: "thin", phonetic: "/θɪn/", translation: "薄的；瘦的", example: "She is very thin." },
  { id: "g3257", category: "高中3500词", word: "thing", phonetic: "/θɪŋ/", translation: "东西；事情", example: "What is that thing?" },
  { id: "g3258", category: "高中3500词", word: "think", phonetic: "/θɪŋk/", translation: "想；认为", example: "I think you are right." },
  { id: "g3259", category: "高中3500词", word: "thinking", phonetic: "/ˈθɪŋkɪŋ/", translation: "思考；想法", example: "She is known for her clear thinking." },
  { id: "g3260", category: "高中3500词", word: "third", phonetic: "/θɜːrd/", translation: "第三", example: "She came third in the race." },
  { id: "g3261", category: "高中3500词", word: "thirst", phonetic: "/θɜːrst/", translation: "口渴", example: "She died of thirst." },
  { id: "g3262", category: "高中3500词", word: "thirsty", phonetic: "/ˈθɜːrsti/", translation: "口渴的", example: "She was very thirsty." },
  { id: "g3263", category: "高中3500词", word: "thirteen", phonetic: "/ˌθɜːrˈtiːn/", translation: "十三", example: "She is thirteen years old." },
  { id: "g3264", category: "高中3500词", word: "thirty", phonetic: "/ˈθɜːrti/", translation: "三十", example: "She is thirty years old." },
  { id: "g3265", category: "高中3500词", word: "this", phonetic: "/ðɪs/", translation: "这个", example: "This is my book." },
  { id: "g3266", category: "高中3500词", word: "thorough", phonetic: "/ˈθʌrə/", translation: "彻底的；详尽的", example: "The police made a thorough investigation." },
  { id: "g3267", category: "高中3500词", word: "those", phonetic: "/ðəʊz/", translation: "那些", example: "Those are my shoes." },
  { id: "g3268", category: "高中3500词", word: "though", phonetic: "/ðəʊ/", translation: "虽然", example: "Though she was tired, she kept working." },
  { id: "g3269", category: "高中3500词", word: "thought", phonetic: "/θɔːt/", translation: "想法；思想", example: "She had a good thought." },
  { id: "g3270", category: "高中3500词", word: "thousand", phonetic: "/ˈθaʊzənd/", translation: "一千", example: "There were a thousand people." },
  { id: "g3271", category: "高中3500词", word: "thread", phonetic: "/θred/", translation: "线", example: "She threaded the needle." },
  { id: "g3272", category: "高中3500词", word: "threat", phonetic: "/θret/", translation: "威胁", example: "Pollution is a threat to the environment." },
  { id: "g3273", category: "高中3500词", word: "threaten", phonetic: "/ˈθretn/", translation: "威胁", example: "She was threatened with dismissal." },
  { id: "g3274", category: "高中3500词", word: "three", phonetic: "/θriː/", translation: "三", example: "She has three children." },
  { id: "g3275", category: "高中3500词", word: "thrill", phonetic: "/θrɪl/", translation: "使兴奋", example: "She was thrilled by the news." },
  { id: "g3276", category: "高中3500词", word: "thriller", phonetic: "/ˈθrɪlər/", translation: "惊悚片", example: "She enjoys reading thrillers." },
  { id: "g3277", category: "高中3500词", word: "thrive", phonetic: "/θraɪv/", translation: "兴旺；茁壮成长", example: "The business is thriving." },
  { id: "g3278", category: "高中3500词", word: "throat", phonetic: "/θrəʊt/", translation: "喉咙", example: "She had a sore throat." },
  { id: "g3279", category: "高中3500词", word: "through", phonetic: "/θruː/", translation: "通过；穿过", example: "She walked through the door." },
  { id: "g3280", category: "高中3500词", word: "throughout", phonetic: "/θruːˈaʊt/", translation: "遍及；自始至终", example: "She remained calm throughout." },
  { id: "g3281", category: "高中3500词", word: "throw", phonetic: "/θrəʊ/", translation: "扔", example: "She threw the ball." },
  { id: "g3282", category: "高中3500词", word: "thunder", phonetic: "/ˈθʌndər/", translation: "雷", example: "The thunder was very loud." },
  { id: "g3283", category: "高中3500词", word: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", translation: "星期四", example: "We have a meeting on Thursday." },
  { id: "g3284", category: "高中3500词", word: "thus", phonetic: "/ðʌs/", translation: "因此", example: "She worked hard, thus achieving her goal." },
  { id: "g3285", category: "高中3500词", word: "tick", phonetic: "/tɪk/", translation: "打勾；滴答声", example: "She ticked the correct answer." },
  { id: "g3286", category: "高中3500词", word: "ticket", phonetic: "/ˈtɪkɪt/", translation: "票", example: "She bought a ticket." },
  { id: "g3287", category: "高中3500词", word: "tide", phonetic: "/taɪd/", translation: "潮汐", example: "The tide was coming in." },
  { id: "g3288", category: "高中3500词", word: "tidy", phonetic: "/ˈtaɪdi/", translation: "整洁的；整理", example: "Please keep your room tidy." },
  { id: "g3289", category: "高中3500词", word: "tie", phonetic: "/taɪ/", translation: "系；领带", example: "She tied her shoelaces." },
  { id: "g3290", category: "高中3500词", word: "tiger", phonetic: "/ˈtaɪɡər/", translation: "老虎", example: "The tiger is an endangered species." },
  { id: "g3291", category: "高中3500词", word: "tight", phonetic: "/taɪt/", translation: "紧的", example: "The shoes are too tight." },
  { id: "g3292", category: "高中3500词", word: "till", phonetic: "/tɪl/", translation: "直到", example: "She waited till midnight." },
  { id: "g3293", category: "高中3500词", word: "time", phonetic: "/taɪm/", translation: "时间", example: "What time is it?" },
  { id: "g3294", category: "高中3500词", word: "timetable", phonetic: "/ˈtaɪmteɪbl/", translation: "时间表", example: "Check the timetable for the next bus." },
  { id: "g3295", category: "高中3500词", word: "tin", phonetic: "/tɪn/", translation: "罐头；锡", example: "She opened a tin of beans." },
  { id: "g3296", category: "高中3500词", word: "tiny", phonetic: "/ˈtaɪni/", translation: "极小的", example: "The baby's fingers were tiny." },
  { id: "g3297", category: "高中3500词", word: "tip", phonetic: "/tɪp/", translation: "尖端；小费", example: "She left a tip for the waiter." },
  { id: "g3298", category: "高中3500词", word: "tire", phonetic: "/ˈtaɪər/", translation: "轮胎；使疲倦", example: "The car needs new tires." },
  { id: "g3299", category: "高中3500词", word: "tired", phonetic: "/ˈtaɪərd/", translation: "疲倦的", example: "She was very tired." },
  { id: "g3300", category: "高中3500词", word: "tiresome", phonetic: "/ˈtaɪərsəm/", translation: "令人厌烦的", example: "The journey was tiresome." },
  { id: "g3301", category: "高中3500词", word: "tissue", phonetic: "/ˈtɪʃuː/", translation: "组织；纸巾", example: "She used a tissue to wipe her tears." },
  { id: "g3302", category: "高中3500词", word: "title", phonetic: "/ˈtaɪtl/", translation: "标题；头衔", example: "What is the title of the book?" },
  { id: "g3303", category: "高中3500词", word: "to", phonetic: "/tuː/", translation: "到；向", example: "She went to the park." },
  { id: "g3304", category: "高中3500词", word: "toast", phonetic: "/təʊst/", translation: "吐司；祝酒", example: "She made toast for breakfast." },
  { id: "g3305", category: "高中3500词", word: "tobacco", phonetic: "/təˈbækəʊ/", translation: "烟草", example: "Tobacco is harmful to health." },
  { id: "g3306", category: "高中3500词", word: "today", phonetic: "/təˈdeɪ/", translation: "今天", example: "What day is today?" },
  { id: "g3307", category: "高中3500词", word: "toe", phonetic: "/təʊ/", translation: "脚趾", example: "She stubbed her toe." },
  { id: "g3308", category: "高中3500词", word: "together", phonetic: "/təˈɡeðər/", translation: "一起", example: "They went together." },
  { id: "g3309", category: "高中3500词", word: "toilet", phonetic: "/ˈtɔɪlət/", translation: "厕所", example: "Where is the toilet?" },
  { id: "g3310", category: "高中3500词", word: "tolerance", phonetic: "/ˈtɒlərəns/", translation: "容忍；宽容", example: "We need more tolerance in society." },
  { id: "g3311", category: "高中3500词", word: "tolerate", phonetic: "/ˈtɒləreɪt/", translation: "容忍", example: "She cannot tolerate laziness." },
  { id: "g3312", category: "高中3500词", word: "tomato", phonetic: "/təˈmɑːtəʊ/", translation: "番茄", example: "She added tomatoes to the salad." },
  { id: "g3313", category: "高中3500词", word: "tomb", phonetic: "/tuːm/", translation: "坟墓", example: "They visited the ancient tomb." },
  { id: "g3314", category: "高中3500词", word: "tomorrow", phonetic: "/təˈmɒrəʊ/", translation: "明天", example: "She will come tomorrow." },
  { id: "g3315", category: "高中3500词", word: "ton", phonetic: "/tʌn/", translation: "吨", example: "The ship carried a ton of coal." },
  { id: "g3316", category: "高中3500词", word: "tone", phonetic: "/təʊn/", translation: "语调；色调", example: "She spoke in a friendly tone." },
  { id: "g3317", category: "高中3500词", word: "tongue", phonetic: "/tʌŋ/", translation: "舌头；语言", example: "She bit her tongue." },
  { id: "g3318", category: "高中3500词", word: "tonight", phonetic: "/təˈnaɪt/", translation: "今晚", example: "She is going out tonight." },
  { id: "g3319", category: "高中3500词", word: "too", phonetic: "/tuː/", translation: "也；太", example: "She is too tired." },
  { id: "g3320", category: "高中3500词", word: "tool", phonetic: "/tuːl/", translation: "工具", example: "She used the right tool." },
  { id: "g3321", category: "高中3500词", word: "tooth", phonetic: "/tuːθ/", translation: "牙齿", example: "She brushed her teeth." },
  { id: "g3322", category: "高中3500词", word: "toothache", phonetic: "/ˈtuːθeɪk/", translation: "牙痛", example: "She has a toothache." },
  { id: "g3323", category: "高中3500词", word: "top", phonetic: "/tɒp/", translation: "顶部", example: "She climbed to the top." },
  { id: "g3324", category: "高中3500词", word: "topic", phonetic: "/ˈtɒpɪk/", translation: "话题；主题", example: "What topic are you writing about?" },
  { id: "g3325", category: "高中3500词", word: "torch", phonetic: "/tɔːrtʃ/", translation: "手电筒；火炬", example: "She shone the torch." },
  { id: "g3326", category: "高中3500词", word: "torture", phonetic: "/ˈtɔːrtʃər/", translation: "折磨；拷问", example: "The prisoners were subjected to torture." },
  { id: "g3327", category: "高中3500词", word: "total", phonetic: "/ˈtəʊtl/", translation: "总共的；总计", example: "The total cost is fifty dollars." },
  { id: "g3328", category: "高中3500词", word: "totally", phonetic: "/ˈtəʊtəli/", translation: "完全地", example: "She totally agreed." },
  { id: "g3329", category: "高中3500词", word: "touch", phonetic: "/tʌtʃ/", translation: "触摸；感动", example: "Don't touch the painting." },
  { id: "g3330", category: "高中3500词", word: "tough", phonetic: "/tʌf/", translation: "坚韧的；困难的", example: "The exam was tough." },
  { id: "g3331", category: "高中3500词", word: "tour", phonetic: "/tʊər/", translation: "旅游", example: "She went on a tour of Europe." },
  { id: "g3332", category: "高中3500词", word: "tourism", phonetic: "/ˈtʊərɪzəm/", translation: "旅游业", example: "Tourism is important for the economy." },
  { id: "g3333", category: "高中3500词", word: "tourist", phonetic: "/ˈtʊərɪst/", translation: "游客", example: "The city attracts many tourists." },
  { id: "g3334", category: "高中3500词", word: "tournament", phonetic: "/ˈtʊərnəmənt/", translation: "锦标赛", example: "She won the tennis tournament." },
  { id: "g3335", category: "高中3500词", word: "toward", phonetic: "/təˈwɔːrd/", translation: "朝向", example: "She walked toward the door." },
  { id: "g3336", category: "高中3500词", word: "towel", phonetic: "/ˈtaʊəl/", translation: "毛巾", example: "She dried herself with a towel." },
  { id: "g3337", category: "高中3500词", word: "tower", phonetic: "/ˈtaʊər/", translation: "塔", example: "The TV tower is very tall." },
  { id: "g3338", category: "高中3500词", word: "town", phonetic: "/taʊn/", translation: "城镇", example: "She lives in a small town." },
  { id: "g3339", category: "高中3500词", word: "toy", phonetic: "/tɔɪ/", translation: "玩具", example: "The children played with toys." },
  { id: "g3340", category: "高中3500词", word: "trace", phonetic: "/treɪs/", translation: "追踪；痕迹", example: "The police traced the call." },
  { id: "g3341", category: "高中3500词", word: "track", phonetic: "/træk/", translation: "轨道；追踪", example: "She ran on the track." },
  { id: "g3342", category: "高中3500词", word: "trade", phonetic: "/treɪd/", translation: "贸易", example: "She works in international trade." },
  { id: "g3343", category: "高中3500词", word: "tradition", phonetic: "/trəˈdɪʃn/", translation: "传统", example: "It is a tradition to eat mooncakes at Mid-Autumn Festival." },
  { id: "g3344", category: "高中3500词", word: "traditional", phonetic: "/trəˈdɪʃənl/", translation: "传统的", example: "She wore traditional dress." },
  { id: "g3345", category: "高中3500词", word: "traffic", phonetic: "/ˈtræfɪk/", translation: "交通", example: "The traffic was very heavy." },
  { id: "g3346", category: "高中3500词", word: "trail", phonetic: "/treɪl/", translation: "小径；痕迹", example: "They followed the trail." },
  { id: "g3347", category: "高中3500词", word: "train", phonetic: "/treɪn/", translation: "火车；训练", example: "She trained for the marathon." },
  { id: "g3348", category: "高中3500词", word: "training", phonetic: "/ˈtreɪnɪŋ/", translation: "训练", example: "She received special training." },
  { id: "g3349", category: "高中3500词", word: "transfer", phonetic: "/trænsˈfɜːr/", translation: "转移；调动", example: "He was transferred to another department." },
  { id: "g3350", category: "高中3500词", word: "transform", phonetic: "/trænsˈfɔːrm/", translation: "转变；改造", example: "Technology has transformed our lives." },
  { id: "g3351", category: "高中3500词", word: "transition", phonetic: "/trænˈzɪʃn/", translation: "过渡；转变", example: "The country is in a period of transition." },
  { id: "g3352", category: "高中3500词", word: "translate", phonetic: "/trænsˈleɪt/", translation: "翻译", example: "She translated the book from English to Chinese." },
  { id: "g3353", category: "高中3500词", word: "translation", phonetic: "/trænsˈleɪʃn/", translation: "翻译", example: "The translation was excellent." },
  { id: "g3354", category: "高中3500词", word: "translator", phonetic: "/trænsˈleɪtər/", translation: "翻译员", example: "She works as a translator." },
  { id: "g3355", category: "高中3500词", word: "transport", phonetic: "/ˈtrænspɔːrt/", translation: "运输；交通", example: "Public transport is very convenient here." },
  { id: "g3356", category: "高中3500词", word: "transportation", phonetic: "/ˌtrænspɔːrˈteɪʃn/", translation: "交通", example: "Public transportation is convenient." },
  { id: "g3357", category: "高中3500词", word: "trap", phonetic: "/træp/", translation: "陷阱", example: "She was trapped in the elevator." },
  { id: "g3358", category: "高中3500词", word: "travel", phonetic: "/ˈtrævl/", translation: "旅行", example: "She loves to travel." },
  { id: "g3359", category: "高中3500词", word: "traveler", phonetic: "/ˈtrævələr/", translation: "旅行者", example: "She is an experienced traveler." },
  { id: "g3360", category: "高中3500词", word: "treasure", phonetic: "/ˈtreʒər/", translation: "财宝；珍惜", example: "She treasures her family photos." },
  { id: "g3361", category: "高中3500词", word: "treat", phonetic: "/triːt/", translation: "对待；治疗", example: "She treated him kindly." },
  { id: "g3362", category: "高中3500词", word: "treatment", phonetic: "/ˈtriːtmənt/", translation: "治疗；对待", example: "She received medical treatment." },
  { id: "g3363", category: "高中3500词", word: "treaty", phonetic: "/ˈtriːti/", translation: "条约", example: "They signed a peace treaty." },
  { id: "g3364", category: "高中3500词", word: "tree", phonetic: "/triː/", translation: "树", example: "The tree is very old." },
  { id: "g3365", category: "高中3500词", word: "trend", phonetic: "/trend/", translation: "趋势；潮流", example: "There is a growing trend towards online shopping." },
  { id: "g3366", category: "高中3500词", word: "trial", phonetic: "/ˈtraɪəl/", translation: "审判；试验", example: "The case will go to trial next month." },
  { id: "g3367", category: "高中3500词", word: "triangle", phonetic: "/ˈtraɪæŋɡl/", translation: "三角形", example: "Draw a triangle." },
  { id: "g3368", category: "高中3500词", word: "trick", phonetic: "/trɪk/", translation: "诡计；戏法", example: "She played a trick on him." },
  { id: "g3369", category: "高中3500词", word: "trigger", phonetic: "/ˈtrɪɡər/", translation: "触发；引起", example: "The incident triggered a debate." },
  { id: "g3370", category: "高中3500词", word: "trip", phonetic: "/trɪp/", translation: "旅行", example: "She went on a business trip." },
  { id: "g3371", category: "高中3500词", word: "triumph", phonetic: "/ˈtraɪʌmf/", translation: "胜利；成功", example: "The team celebrated their triumph." },
  { id: "g3372", category: "高中3500词", word: "troop", phonetic: "/truːp/", translation: "军队", example: "The troops marched forward." },
  { id: "g3373", category: "高中3500词", word: "tropical", phonetic: "/ˈtrɒpɪkl/", translation: "热带的", example: "Mangoes grow in tropical climates." },
  { id: "g3374", category: "高中3500词", word: "trouble", phonetic: "/ˈtrʌbl/", translation: "麻烦", example: "She is in trouble." },
  { id: "g3375", category: "高中3500词", word: "troublesome", phonetic: "/ˈtrʌblsəm/", translation: "令人烦恼的", example: "The child was troublesome." },
  { id: "g3376", category: "高中3500词", word: "trousers", phonetic: "/ˈtraʊzərz/", translation: "裤子", example: "She bought a new pair of trousers." },
  { id: "g3377", category: "高中3500词", word: "truck", phonetic: "/trʌk/", translation: "卡车", example: "The truck carried goods." },
  { id: "g3378", category: "高中3500词", word: "true", phonetic: "/truː/", translation: "真实的", example: "Is the story true?" },
  { id: "g3379", category: "高中3500词", word: "truly", phonetic: "/ˈtruːli/", translation: "真正地", example: "She is truly talented." },
  { id: "g3380", category: "高中3500词", word: "trunk", phonetic: "/trʌŋk/", translation: "树干；行李箱", example: "She packed the trunk." },
  { id: "g3381", category: "高中3500词", word: "trust", phonetic: "/trʌst/", translation: "信任；信赖", example: "You need to trust your team members." },
  { id: "g3382", category: "高中3500词", word: "truth", phonetic: "/truːθ/", translation: "真相", example: "She told the truth." },
  { id: "g3383", category: "高中3500词", word: "try", phonetic: "/traɪ/", translation: "尝试", example: "She tried her best." },
  { id: "g3384", category: "高中3500词", word: "tube", phonetic: "/tjuːb/", translation: "管；地铁", example: "She traveled by tube." },
  { id: "g3385", category: "高中3500词", word: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", translation: "星期二", example: "She has a class on Tuesday." },
  { id: "g3386", category: "高中3500词", word: "tune", phonetic: "/tjuːn/", translation: "曲调；调音", example: "She hummed a tune." },
  { id: "g3387", category: "高中3500词", word: "tunnel", phonetic: "/ˈtʌnl/", translation: "隧道", example: "The train went through the tunnel." },
  { id: "g3388", category: "高中3500词", word: "turkey", phonetic: "/ˈtɜːrki/", translation: "火鸡", example: "They had turkey for Thanksgiving." },
  { id: "g3389", category: "高中3500词", word: "turn", phonetic: "/tɜːrn/", translation: "转；轮流", example: "Turn left at the corner." },
  { id: "g3390", category: "高中3500词", word: "tutor", phonetic: "/ˈtjuːtər/", translation: "导师；家教", example: "She hired a math tutor." },
  { id: "g3391", category: "高中3500词", word: "twice", phonetic: "/twaɪs/", translation: "两次", example: "She visited Paris twice." },
  { id: "g3392", category: "高中3500词", word: "twin", phonetic: "/twɪn/", translation: "双胞胎", example: "She has twin sisters." },
  { id: "g3393", category: "高中3500词", word: "twist", phonetic: "/twɪst/", translation: "扭曲；转动", example: "She twisted her ankle." },
  { id: "g3394", category: "高中3500词", word: "two", phonetic: "/tuː/", translation: "二", example: "She has two brothers." },
  { id: "g3395", category: "高中3500词", word: "type", phonetic: "/taɪp/", translation: "类型；打字", example: "She typed the letter." },
  { id: "g3396", category: "高中3500词", word: "typewriter", phonetic: "/ˈtaɪpraɪtər/", translation: "打字机", example: "She used a typewriter." },
  { id: "g3397", category: "高中3500词", word: "typical", phonetic: "/ˈtɪpɪkl/", translation: "典型的", example: "This is a typical English village." },
  { id: "g3398", category: "高中3500词", word: "typist", phonetic: "/ˈtaɪpɪst/", translation: "打字员", example: "She works as a typist." },
  { id: "g3399", category: "高中3500词", word: "tyre", phonetic: "/ˈtaɪər/", translation: "轮胎", example: "The tyre was flat." },
  { id: "g3400", category: "高中3500词", word: "ugly", phonetic: "/ˈʌɡli/", translation: "丑陋的", example: "The building was ugly." },
  { id: "g3401", category: "高中3500词", word: "ultimate", phonetic: "/ˈʌltɪmət/", translation: "最终的；根本的", example: "The ultimate goal is world peace." },
  { id: "g3402", category: "高中3500词", word: "umbrella", phonetic: "/ʌmˈbrelə/", translation: "雨伞", example: "She carried an umbrella." },
  { id: "g3403", category: "高中3500词", word: "unable", phonetic: "/ʌnˈeɪbl/", translation: "不能的", example: "She was unable to attend." },
  { id: "g3404", category: "高中3500词", word: "unbearable", phonetic: "/ʌnˈbeərəbl/", translation: "难以忍受的", example: "The heat was unbearable." },
  { id: "g3405", category: "高中3500词", word: "uncertain", phonetic: "/ʌnˈsɜːrtn/", translation: "不确定的", example: "The future is uncertain." },
  { id: "g3406", category: "高中3500词", word: "uncle", phonetic: "/ˈʌŋkl/", translation: "叔叔", example: "Her uncle lives in London." },
  { id: "g3407", category: "高中3500词", word: "uncomfortable", phonetic: "/ʌnˈkʌmftəbl/", translation: "不舒服的", example: "The chair was uncomfortable." },
  { id: "g3408", category: "高中3500词", word: "unconscious", phonetic: "/ʌnˈkɒnʃəs/", translation: "无意识的", example: "She was unconscious for two hours." },
  { id: "g3409", category: "高中3500词", word: "under", phonetic: "/ˈʌndər/", translation: "在……下面", example: "The cat is under the table." },
  { id: "g3410", category: "高中3500词", word: "undergo", phonetic: "/ˌʌndərˈɡəʊ/", translation: "经历；承受", example: "She underwent surgery last week." },
  { id: "g3411", category: "高中3500词", word: "underground", phonetic: "/ˈʌndərɡraʊnd/", translation: "地下的；地铁", example: "She took the underground." },
  { id: "g3412", category: "高中3500词", word: "underline", phonetic: "/ˌʌndərˈlaɪn/", translation: "下划线；强调", example: "She underlined the important words." },
  { id: "g3413", category: "高中3500词", word: "understand", phonetic: "/ˌʌndərˈstænd/", translation: "理解", example: "She understands the problem." },
  { id: "g3414", category: "高中3500词", word: "understanding", phonetic: "/ˌʌndərˈstændɪŋ/", translation: "理解；善解人意的", example: "She showed great understanding." },
  { id: "g3415", category: "高中3500词", word: "undertake", phonetic: "/ˌʌndərˈteɪk/", translation: "承担；从事", example: "He undertook the task willingly." },
  { id: "g3416", category: "高中3500词", word: "unemployment", phonetic: "/ˌʌnɪmˈplɔɪmənt/", translation: "失业", example: "Unemployment is rising." },
  { id: "g3417", category: "高中3500词", word: "unfair", phonetic: "/ʌnˈfeər/", translation: "不公平的", example: "The decision was unfair." },
  { id: "g3418", category: "高中3500词", word: "unfortunate", phonetic: "/ʌnˈfɔːrtʃənət/", translation: "不幸的", example: "She was unfortunate to lose her job." },
  { id: "g3419", category: "高中3500词", word: "unfortunately", phonetic: "/ʌnˈfɔːrtʃənətli/", translation: "不幸地", example: "Unfortunately, she couldn't come." },
  { id: "g3420", category: "高中3500词", word: "unhappy", phonetic: "/ʌnˈhæpi/", translation: "不快乐的", example: "She felt unhappy." },
  { id: "g3421", category: "高中3500词", word: "uniform", phonetic: "/ˈjuːnɪfɔːrm/", translation: "制服", example: "She wore a school uniform." },
  { id: "g3422", category: "高中3500词", word: "union", phonetic: "/ˈjuːniən/", translation: "联盟；工会", example: "She joined the trade union." },
  { id: "g3423", category: "高中3500词", word: "unique", phonetic: "/juˈniːk/", translation: "独特的；唯一的", example: "Every person's fingerprint is unique." },
  { id: "g3424", category: "高中3500词", word: "unit", phonetic: "/ˈjuːnɪt/", translation: "单位；单元", example: "The book has ten units." },
  { id: "g3425", category: "高中3500词", word: "unite", phonetic: "/juːˈnaɪt/", translation: "团结", example: "They united against the enemy." },
  { id: "g3426", category: "高中3500词", word: "united", phonetic: "/juːˈnaɪtɪd/", translation: "联合的", example: "The United Nations is in New York." },
  { id: "g3427", category: "高中3500词", word: "universal", phonetic: "/ˌjuːnɪˈvɜːrsl/", translation: "普遍的；全世界的", example: "Music is a universal language." },
  { id: "g3428", category: "高中3500词", word: "universe", phonetic: "/ˈjuːnɪvɜːrs/", translation: "宇宙", example: "The universe is vast." },
  { id: "g3429", category: "高中3500词", word: "university", phonetic: "/ˌjuːnɪˈvɜːrsəti/", translation: "大学", example: "She goes to university." },
  { id: "g3430", category: "高中3500词", word: "unless", phonetic: "/ənˈles/", translation: "除非", example: "I won't go unless you come too." },
  { id: "g3431", category: "高中3500词", word: "unlike", phonetic: "/ʌnˈlaɪk/", translation: "不像", example: "She is unlike her sister." },
  { id: "g3432", category: "高中3500词", word: "unlikely", phonetic: "/ʌnˈlaɪkli/", translation: "不太可能的", example: "It is unlikely to rain." },
  { id: "g3433", category: "高中3500词", word: "until", phonetic: "/ənˈtɪl/", translation: "直到", example: "She waited until 5 pm." },
  { id: "g3434", category: "高中3500词", word: "unusual", phonetic: "/ʌnˈjuːʒuəl/", translation: "不寻常的", example: "The weather was unusual." },
  { id: "g3435", category: "高中3500词", word: "up", phonetic: "/ʌp/", translation: "向上", example: "She looked up at the sky." },
  { id: "g3436", category: "高中3500词", word: "up-to-date", phonetic: "/ˌʌptəˈdeɪt/", translation: "最新的", example: "The information is up-to-date." },
  { id: "g3437", category: "高中3500词", word: "update", phonetic: "/ʌpˈdeɪt/", translation: "更新", example: "Please update your contact information." },
  { id: "g3438", category: "高中3500词", word: "upgrade", phonetic: "/ʌpˈɡreɪd/", translation: "升级", example: "We need to upgrade our computer system." },
  { id: "g3439", category: "高中3500词", word: "upon", phonetic: "/əˈpɒn/", translation: "在……之上", example: "Once upon a time, there was a princess." },
  { id: "g3440", category: "高中3500词", word: "upper", phonetic: "/ˈʌpər/", translation: "上面的；较高的", example: "She lives on the upper floor." },
  { id: "g3441", category: "高中3500词", word: "upset", phonetic: "/ʌpˈset/", translation: "心烦的", example: "She was upset by the news." },
  { id: "g3442", category: "高中3500词", word: "upstairs", phonetic: "/ˌʌpˈsteərz/", translation: "楼上", example: "She went upstairs to bed." },
  { id: "g3443", category: "高中3500词", word: "urban", phonetic: "/ˈɜːrbən/", translation: "城市的", example: "Urban areas have more job opportunities." },
  { id: "g3444", category: "高中3500词", word: "urge", phonetic: "/ɜːrdʒ/", translation: "催促；敦促", example: "She urged him to study harder." },
  { id: "g3445", category: "高中3500词", word: "urgent", phonetic: "/ˈɜːrdʒənt/", translation: "紧急的", example: "This is an urgent matter." },
  { id: "g3446", category: "高中3500词", word: "us", phonetic: "/ʌs/", translation: "我们", example: "She invited us to dinner." },
  { id: "g3447", category: "高中3500词", word: "usage", phonetic: "/ˈjuːsɪdʒ/", translation: "用法", example: "The usage of this word is correct." },
  { id: "g3448", category: "高中3500词", word: "use", phonetic: "/juːz/", translation: "使用", example: "She used a computer." },
  { id: "g3449", category: "高中3500词", word: "used", phonetic: "/juːzd/", translation: "习惯的；用过的", example: "She is used to getting up early." },
  { id: "g3450", category: "高中3500词", word: "useful", phonetic: "/ˈjuːsfl/", translation: "有用的", example: "This tool is very useful." },
  { id: "g3451", category: "高中3500词", word: "useless", phonetic: "/ˈjuːsləs/", translation: "无用的", example: "The advice was useless." },
  { id: "g3452", category: "高中3500词", word: "user", phonetic: "/ˈjuːzər/", translation: "用户", example: "She is a regular user." },
  { id: "g3453", category: "高中3500词", word: "usual", phonetic: "/ˈjuːʒuəl/", translation: "通常的", example: "She arrived at the usual time." },
  { id: "g3454", category: "高中3500词", word: "usually", phonetic: "/ˈjuːʒuəli/", translation: "通常", example: "She usually walks to school." },
  { id: "g3455", category: "高中3500词", word: "utility", phonetic: "/juːˈtɪləti/", translation: "实用；公用事业", example: "The utility bills are high." },
  { id: "g3456", category: "高中3500词", word: "utilize", phonetic: "/ˈjuːtəlaɪz/", translation: "利用", example: "We should utilize all available resources." },
  { id: "g3457", category: "高中3500词", word: "vacant", phonetic: "/ˈveɪkənt/", translation: "空的；空缺的", example: "The position is currently vacant." },
  { id: "g3458", category: "高中3500词", word: "vacation", phonetic: "/veɪˈkeɪʃn/", translation: "假期", example: "She went on vacation." },
  { id: "g3459", category: "高中3500词", word: "vague", phonetic: "/veɪɡ/", translation: "模糊的；含糊的", example: "She gave a vague answer." },
  { id: "g3460", category: "高中3500词", word: "valid", phonetic: "/ˈvælɪd/", translation: "有效的；合理的", example: "Your ticket is no longer valid." },
  { id: "g3461", category: "高中3500词", word: "valley", phonetic: "/ˈvæli/", translation: "山谷；流域", example: "The village is in a beautiful valley." },
  { id: "g3462", category: "高中3500词", word: "valuable", phonetic: "/ˈvæljuəbl/", translation: "有价值的；贵重的", example: "Time is the most valuable resource." },
  { id: "g3463", category: "高中3500词", word: "value", phonetic: "/ˈvæljuː/", translation: "价值", example: "She values friendship." },
  { id: "g3464", category: "高中3500词", word: "van", phonetic: "/væn/", translation: "货车", example: "The van delivered the package." },
  { id: "g3465", category: "高中3500词", word: "vanish", phonetic: "/ˈvænɪʃ/", translation: "消失", example: "The rabbit vanished into the hat." },
  { id: "g3466", category: "高中3500词", word: "variety", phonetic: "/vəˈraɪəti/", translation: "多样性；种类", example: "There is a variety of food to choose from." },
  { id: "g3467", category: "高中3500词", word: "various", phonetic: "/ˈveəriəs/", translation: "各种各样的", example: "She has various hobbies." },
  { id: "g3468", category: "高中3500词", word: "vary", phonetic: "/ˈveəri/", translation: "变化", example: "Prices vary according to season." },
  { id: "g3469", category: "高中3500词", word: "vast", phonetic: "/vɑːst/", translation: "广阔的；巨大的", example: "The desert is a vast area." },
  { id: "g3470", category: "高中3500词", word: "vegetable", phonetic: "/ˈvedʒtəbl/", translation: "蔬菜", example: "She eats a lot of vegetables." },
  { id: "g3471", category: "高中3500词", word: "vehicle", phonetic: "/ˈviːɪkl/", translation: "车辆", example: "The vehicle was damaged." },
  { id: "g3472", category: "高中3500词", word: "venture", phonetic: "/ˈventʃər/", translation: "冒险；企业", example: "Starting a business is a risky venture." },
  { id: "g3473", category: "高中3500词", word: "version", phonetic: "/ˈvɜːrʃn/", translation: "版本", example: "This is the latest version of the software." },
  { id: "g3474", category: "高中3500词", word: "very", phonetic: "/ˈveri/", translation: "非常", example: "She is very tall." },
  { id: "g3475", category: "高中3500词", word: "vest", phonetic: "/vest/", translation: "背心", example: "She wore a warm vest." },
  { id: "g3476", category: "高中3500词", word: "via", phonetic: "/ˈvaɪə/", translation: "通过", example: "She sent the message via email." },
  { id: "g3477", category: "高中3500词", word: "vice", phonetic: "/vaɪs/", translation: "副的；恶习", example: "She is the vice president." },
  { id: "g3478", category: "高中3500词", word: "victim", phonetic: "/ˈvɪktɪm/", translation: "受害者", example: "She was the victim of a scam." },
  { id: "g3479", category: "高中3500词", word: "victory", phonetic: "/ˈvɪktəri/", translation: "胜利", example: "They celebrated their victory." },
  { id: "g3480", category: "高中3500词", word: "video", phonetic: "/ˈvɪdiəʊ/", translation: "视频", example: "She watched a video." },
  { id: "g3481", category: "高中3500词", word: "view", phonetic: "/vjuː/", translation: "观点；风景", example: "She has a beautiful view from her window." },
  { id: "g3482", category: "高中3500词", word: "viewer", phonetic: "/ˈvjuːər/", translation: "观众", example: "The show has millions of viewers." },
  { id: "g3483", category: "高中3500词", word: "village", phonetic: "/ˈvɪlɪdʒ/", translation: "村庄", example: "She lives in a small village." },
  { id: "g3484", category: "高中3500词", word: "violence", phonetic: "/ˈvaɪələns/", translation: "暴力", example: "We must stop violence in schools." },
  { id: "g3485", category: "高中3500词", word: "violent", phonetic: "/ˈvaɪələnt/", translation: "暴力的", example: "The storm was violent." },
  { id: "g3486", category: "高中3500词", word: "violin", phonetic: "/ˌvaɪəˈlɪn/", translation: "小提琴", example: "She plays the violin." },
  { id: "g3487", category: "高中3500词", word: "virtual", phonetic: "/ˈvɜːrtʃuəl/", translation: "虚拟的；实际的", example: "Virtual reality technology is advancing." },
  { id: "g3488", category: "高中3500词", word: "virtue", phonetic: "/ˈvɜːrtʃuː/", translation: "美德；优点", example: "Honesty is a virtue." },
  { id: "g3489", category: "高中3500词", word: "visible", phonetic: "/ˈvɪzəbl/", translation: "可见的", example: "The building is visible from here." },
  { id: "g3490", category: "高中3500词", word: "vision", phonetic: "/ˈvɪʒn/", translation: "视力；愿景", example: "She has a clear vision for the company." },
  { id: "g3491", category: "高中3500词", word: "visit", phonetic: "/ˈvɪzɪt/", translation: "访问；参观", example: "She visited her grandmother." },
  { id: "g3492", category: "高中3500词", word: "visitor", phonetic: "/ˈvɪzɪtər/", translation: "访客", example: "The museum receives many visitors." },
  { id: "g3493", category: "高中3500词", word: "visual", phonetic: "/ˈvɪʒuəl/", translation: "视觉的", example: "She has strong visual skills." },
  { id: "g3494", category: "高中3500词", word: "vital", phonetic: "/ˈvaɪtl/", translation: "至关重要的", example: "Water is vital for survival." },
  { id: "g3495", category: "高中3500词", word: "vivid", phonetic: "/ˈvɪvɪd/", translation: "生动的；鲜明的", example: "She gave a vivid description of the event." },
  { id: "g3496", category: "高中3500词", word: "vocabulary", phonetic: "/vəˈkæbjələri/", translation: "词汇", example: "Reading helps expand your vocabulary." },
  { id: "g3497", category: "高中3500词", word: "voice", phonetic: "/vɔɪs/", translation: "声音", example: "She has a beautiful voice." },
  { id: "g3498", category: "高中3500词", word: "volcano", phonetic: "/vɒlˈkeɪnəʊ/", translation: "火山", example: "The volcano erupted last year." },
  { id: "g3499", category: "高中3500词", word: "volleyball", phonetic: "/ˈvɒlibɔːl/", translation: "排球", example: "She plays volleyball." },
  { id: "g3500", category: "高中3500词", word: "volume", phonetic: "/ˈvɒljuːm/", translation: "体积；音量", example: "Please turn down the volume." },
  { id: "g3501", category: "高中3500词", word: "voluntary", phonetic: "/ˈvɒləntri/", translation: "自愿的；志愿的", example: "Participation is completely voluntary." },
  { id: "g3502", category: "高中3500词", word: "volunteer", phonetic: "/ˌvɒlənˈtɪər/", translation: "志愿者", example: "She works as a volunteer." },
  { id: "g3503", category: "高中3500词", word: "vote", phonetic: "/vəʊt/", translation: "投票；选举", example: "Everyone has the right to vote." },
  { id: "g3504", category: "高中3500词", word: "voyage", phonetic: "/ˈvɔɪɪdʒ/", translation: "航行", example: "They made a voyage across the ocean." },
  { id: "g3505", category: "高中3500词", word: "vulnerable", phonetic: "/ˈvʌlnərəbl/", translation: "脆弱的；易受伤的", example: "Children are vulnerable to illness." },
  { id: "g3506", category: "高中3500词", word: "wage", phonetic: "/weɪdʒ/", translation: "工资", example: "The minimum wage has increased." },
  { id: "g3507", category: "高中3500词", word: "waist", phonetic: "/weɪst/", translation: "腰部", example: "She has a slim waist." },
  { id: "g3508", category: "高中3500词", word: "wait", phonetic: "/weɪt/", translation: "等待", example: "She waited for the bus." },
  { id: "g3509", category: "高中3500词", word: "waiter", phonetic: "/ˈweɪtər/", translation: "服务员", example: "The waiter brought the menu." },
  { id: "g3510", category: "高中3500词", word: "waitress", phonetic: "/ˈweɪtrəs/", translation: "女服务员", example: "The waitress took our order." },
  { id: "g3511", category: "高中3500词", word: "wake", phonetic: "/weɪk/", translation: "醒来", example: "She woke up early." },
  { id: "g3512", category: "高中3500词", word: "walk", phonetic: "/wɔːk/", translation: "步行", example: "She walks to school." },
  { id: "g3513", category: "高中3500词", word: "wall", phonetic: "/wɔːl/", translation: "墙", example: "She painted the wall." },
  { id: "g3514", category: "高中3500词", word: "wander", phonetic: "/ˈwɒndər/", translation: "漫步；徘徊", example: "They wandered through the old town." },
  { id: "g3515", category: "高中3500词", word: "want", phonetic: "/wɒnt/", translation: "想要", example: "She wants to be a doctor." },
  { id: "g3516", category: "高中3500词", word: "war", phonetic: "/wɔːr/", translation: "战争", example: "The war lasted five years." },
  { id: "g3517", category: "高中3500词", word: "ward", phonetic: "/wɔːrd/", translation: "病房", example: "She was admitted to the ward." },
  { id: "g3518", category: "高中3500词", word: "warm", phonetic: "/wɔːrm/", translation: "温暖的", example: "The weather is warm today." },
  { id: "g3519", category: "高中3500词", word: "warmth", phonetic: "/wɔːrmθ/", translation: "温暖", example: "She felt the warmth of the sun." },
  { id: "g3520", category: "高中3500词", word: "warn", phonetic: "/wɔːrn/", translation: "警告", example: "She warned him about the danger." },
  { id: "g3521", category: "高中3500词", word: "warning", phonetic: "/ˈwɔːrnɪŋ/", translation: "警告", example: "She ignored the warning." },
  { id: "g3522", category: "高中3500词", word: "wash", phonetic: "/wɒʃ/", translation: "洗", example: "She washed her hands." },
  { id: "g3523", category: "高中3500词", word: "waste", phonetic: "/weɪst/", translation: "浪费", example: "Don't waste time." },
  { id: "g3524", category: "高中3500词", word: "watch", phonetic: "/wɒtʃ/", translation: "观看；手表", example: "She watched the movie." },
  { id: "g3525", category: "高中3500词", word: "water", phonetic: "/ˈwɔːtər/", translation: "水", example: "She drank a glass of water." },
  { id: "g3526", category: "高中3500词", word: "waterfall", phonetic: "/ˈwɔːtərfɔːl/", translation: "瀑布", example: "The waterfall was magnificent." },
  { id: "g3527", category: "高中3500词", word: "wave", phonetic: "/weɪv/", translation: "波浪；挥手", example: "She waved goodbye." },
  { id: "g3528", category: "高中3500词", word: "way", phonetic: "/weɪ/", translation: "方式；道路", example: "She found a new way to solve the problem." },
  { id: "g3529", category: "高中3500词", word: "we", phonetic: "/wiː/", translation: "我们", example: "We are students." },
  { id: "g3530", category: "高中3500词", word: "weak", phonetic: "/wiːk/", translation: "虚弱的", example: "She felt weak after the illness." },
  { id: "g3531", category: "高中3500词", word: "weakness", phonetic: "/ˈwiːknəs/", translation: "弱点", example: "She admitted her weakness." },
  { id: "g3532", category: "高中3500词", word: "wealth", phonetic: "/welθ/", translation: "财富", example: "Health is more important than wealth." },
  { id: "g3533", category: "高中3500词", word: "wealthy", phonetic: "/ˈwelθi/", translation: "富有的", example: "She comes from a wealthy family." },
  { id: "g3534", category: "高中3500词", word: "weapon", phonetic: "/ˈwepən/", translation: "武器", example: "Nuclear weapons are a threat to humanity." },
  { id: "g3535", category: "高中3500词", word: "wear", phonetic: "/weər/", translation: "穿", example: "She wore a red dress." },
  { id: "g3536", category: "高中3500词", word: "weather", phonetic: "/ˈweðər/", translation: "天气", example: "The weather is nice today." },
  { id: "g3537", category: "高中3500词", word: "web", phonetic: "/web/", translation: "网", example: "She searched the web." },
  { id: "g3538", category: "高中3500词", word: "website", phonetic: "/ˈwebsaɪt/", translation: "网站", example: "She visited the website." },
  { id: "g3539", category: "高中3500词", word: "wedding", phonetic: "/ˈwedɪŋ/", translation: "婚礼", example: "She attended a wedding." },
  { id: "g3540", category: "高中3500词", word: "Wednesday", phonetic: "/ˈwenzdeɪ/", translation: "星期三", example: "She has a meeting on Wednesday." },
  { id: "g3541", category: "高中3500词", word: "weed", phonetic: "/wiːd/", translation: "杂草", example: "She pulled the weeds." },
  { id: "g3542", category: "高中3500词", word: "week", phonetic: "/wiːk/", translation: "周", example: "She works five days a week." },
  { id: "g3543", category: "高中3500词", word: "weekday", phonetic: "/ˈwiːkdeɪ/", translation: "工作日", example: "She is busy on weekdays." },
  { id: "g3544", category: "高中3500词", word: "weekend", phonetic: "/ˌwiːkˈend/", translation: "周末", example: "She relaxed on the weekend." },
  { id: "g3545", category: "高中3500词", word: "weekly", phonetic: "/ˈwiːkli/", translation: "每周的", example: "She reads a weekly magazine." },
  { id: "g3546", category: "高中3500词", word: "weigh", phonetic: "/weɪ/", translation: "称重", example: "She weighed the fruit." },
  { id: "g3547", category: "高中3500词", word: "weight", phonetic: "/weɪt/", translation: "重量", example: "She lost weight." },
  { id: "g3548", category: "高中3500词", word: "welcome", phonetic: "/ˈwelkəm/", translation: "欢迎", example: "Welcome to our school." },
  { id: "g3549", category: "高中3500词", word: "welfare", phonetic: "/ˈwelfeər/", translation: "福利；幸福", example: "The government provides welfare for the poor." },
  { id: "g3550", category: "高中3500词", word: "well", phonetic: "/wel/", translation: "好的；井", example: "She is doing well." },
  { id: "g3551", category: "高中3500词", word: "west", phonetic: "/west/", translation: "西方", example: "The sun sets in the west." },
  { id: "g3552", category: "高中3500词", word: "western", phonetic: "/ˈwestərn/", translation: "西方的", example: "She enjoys western music." },
  { id: "g3553", category: "高中3500词", word: "wet", phonetic: "/wet/", translation: "湿的", example: "The ground was wet." },
  { id: "g3554", category: "高中3500词", word: "what", phonetic: "/wɒt/", translation: "什么", example: "What is your name?" },
  { id: "g3555", category: "高中3500词", word: "whatever", phonetic: "/wɒtˈevər/", translation: "无论什么", example: "Whatever happens, stay calm." },
  { id: "g3556", category: "高中3500词", word: "wheat", phonetic: "/wiːt/", translation: "小麦", example: "The farmer grows wheat." },
  { id: "g3557", category: "高中3500词", word: "wheel", phonetic: "/wiːl/", translation: "轮子", example: "The car has four wheels." },
  { id: "g3558", category: "高中3500词", word: "when", phonetic: "/wen/", translation: "当……时候", example: "When did you arrive?" },
  { id: "g3559", category: "高中3500词", word: "whenever", phonetic: "/wenˈevər/", translation: "每当", example: "Whenever she calls, I answer." },
  { id: "g3560", category: "高中3500词", word: "where", phonetic: "/weər/", translation: "在哪里", example: "Where do you live?" },
  { id: "g3561", category: "高中3500词", word: "wherever", phonetic: "/weərˈevər/", translation: "无论哪里", example: "Wherever she goes, she makes friends." },
  { id: "g3562", category: "高中3500词", word: "whether", phonetic: "/ˈweðər/", translation: "是否", example: "She asked whether he would come." },
  { id: "g3563", category: "高中3500词", word: "which", phonetic: "/wɪtʃ/", translation: "哪个", example: "Which book do you prefer?" },
  { id: "g3564", category: "高中3500词", word: "whichever", phonetic: "/wɪtʃˈevər/", translation: "无论哪个", example: "Choose whichever you like." },
  { id: "g3565", category: "高中3500词", word: "while", phonetic: "/waɪl/", translation: "当……时候；虽然", example: "She read while he slept." },
  { id: "g3566", category: "高中3500词", word: "whisper", phonetic: "/ˈwɪspər/", translation: "低语；耳语", example: "She whispered something in my ear." },
  { id: "g3567", category: "高中3500词", word: "whistle", phonetic: "/ˈwɪsl/", translation: "口哨", example: "She whistled a tune." },
  { id: "g3568", category: "高中3500词", word: "white", phonetic: "/waɪt/", translation: "白色的", example: "She wore a white dress." },
  { id: "g3569", category: "高中3500词", word: "who", phonetic: "/huː/", translation: "谁", example: "Who is that person?" },
  { id: "g3570", category: "高中3500词", word: "whole", phonetic: "/həʊl/", translation: "整个的", example: "She ate the whole cake." },
  { id: "g3571", category: "高中3500词", word: "whom", phonetic: "/huːm/", translation: "谁（宾格）", example: "To whom did you write?" },
  { id: "g3572", category: "高中3500词", word: "whose", phonetic: "/huːz/", translation: "谁的", example: "Whose book is this?" },
  { id: "g3573", category: "高中3500词", word: "why", phonetic: "/waɪ/", translation: "为什么", example: "Why are you late?" },
  { id: "g3574", category: "高中3500词", word: "wicked", phonetic: "/ˈwɪkɪd/", translation: "邪恶的", example: "The wicked witch was defeated." },
  { id: "g3575", category: "高中3500词", word: "wide", phonetic: "/waɪd/", translation: "宽的", example: "The road is very wide." },
  { id: "g3576", category: "高中3500词", word: "widely", phonetic: "/ˈwaɪdli/", translation: "广泛地", example: "She is widely known." },
  { id: "g3577", category: "高中3500词", word: "widespread", phonetic: "/ˈwaɪdspred/", translation: "广泛的；普遍的", example: "The disease is widespread in the area." },
  { id: "g3578", category: "高中3500词", word: "wife", phonetic: "/waɪf/", translation: "妻子", example: "His wife is a teacher." },
  { id: "g3579", category: "高中3500词", word: "wild", phonetic: "/waɪld/", translation: "野生的", example: "They saw wild animals." },
  { id: "g3580", category: "高中3500词", word: "wildlife", phonetic: "/ˈwaɪldlaɪf/", translation: "野生动物", example: "We should protect wildlife." },
  { id: "g3581", category: "高中3500词", word: "will", phonetic: "/wɪl/", translation: "将要；意志", example: "She will come tomorrow." },
  { id: "g3582", category: "高中3500词", word: "willing", phonetic: "/ˈwɪlɪŋ/", translation: "愿意的", example: "She is willing to help." },
  { id: "g3583", category: "高中3500词", word: "win", phonetic: "/wɪn/", translation: "赢", example: "She won the prize." },
  { id: "g3584", category: "高中3500词", word: "wind", phonetic: "/wɪnd/", translation: "风", example: "The wind was strong." },
  { id: "g3585", category: "高中3500词", word: "window", phonetic: "/ˈwɪndəʊ/", translation: "窗户", example: "She opened the window." },
  { id: "g3586", category: "高中3500词", word: "windy", phonetic: "/ˈwɪndi/", translation: "有风的", example: "It is windy today." },
  { id: "g3587", category: "高中3500词", word: "wine", phonetic: "/waɪn/", translation: "葡萄酒", example: "She ordered a glass of wine." },
  { id: "g3588", category: "高中3500词", word: "wing", phonetic: "/wɪŋ/", translation: "翅膀", example: "The bird spread its wings." },
  { id: "g3589", category: "高中3500词", word: "winner", phonetic: "/ˈwɪnər/", translation: "获胜者", example: "She was the winner." },
  { id: "g3590", category: "高中3500词", word: "winter", phonetic: "/ˈwɪntər/", translation: "冬天", example: "It snows in winter." },
  { id: "g3591", category: "高中3500词", word: "wipe", phonetic: "/waɪp/", translation: "擦", example: "She wiped the table." },
  { id: "g3592", category: "高中3500词", word: "wire", phonetic: "/ˈwaɪər/", translation: "电线", example: "The wire was broken." },
  { id: "g3593", category: "高中3500词", word: "wireless", phonetic: "/ˈwaɪələs/", translation: "无线的", example: "She has a wireless connection." },
  { id: "g3594", category: "高中3500词", word: "wisdom", phonetic: "/ˈwɪzdəm/", translation: "智慧", example: "With age comes wisdom." },
  { id: "g3595", category: "高中3500词", word: "wise", phonetic: "/waɪz/", translation: "明智的", example: "She made a wise decision." },
  { id: "g3596", category: "高中3500词", word: "wish", phonetic: "/wɪʃ/", translation: "愿望", example: "She wished him good luck." },
  { id: "g3597", category: "高中3500词", word: "with", phonetic: "/wɪð/", translation: "和；用", example: "She went with her friends." },
  { id: "g3598", category: "高中3500词", word: "withdraw", phonetic: "/wɪðˈdrɔː/", translation: "撤回；取款", example: "She withdrew money from the bank." },
  { id: "g3599", category: "高中3500词", word: "within", phonetic: "/wɪˈðɪn/", translation: "在……之内", example: "She will return within an hour." },
  { id: "g3600", category: "高中3500词", word: "without", phonetic: "/wɪˈðaʊt/", translation: "没有", example: "She left without saying goodbye." },
  { id: "g3601", category: "高中3500词", word: "witness", phonetic: "/ˈwɪtnəs/", translation: "目击者；见证", example: "She witnessed the accident." },
  { id: "g3602", category: "高中3500词", word: "wolf", phonetic: "/wʊlf/", translation: "狼", example: "The wolf howled at the moon." },
  { id: "g3603", category: "高中3500词", word: "woman", phonetic: "/ˈwʊmən/", translation: "女人", example: "She is a kind woman." },
  { id: "g3604", category: "高中3500词", word: "wonder", phonetic: "/ˈwʌndər/", translation: "想知道；奇迹", example: "She wondered what happened." },
  { id: "g3605", category: "高中3500词", word: "wonderful", phonetic: "/ˈwʌndərfl/", translation: "精彩的", example: "She had a wonderful time." },
  { id: "g3606", category: "高中3500词", word: "wood", phonetic: "/wʊd/", translation: "木头；树林", example: "The table is made of wood." },
  { id: "g3607", category: "高中3500词", word: "wooden", phonetic: "/ˈwʊdn/", translation: "木制的", example: "She has a wooden chair." },
  { id: "g3608", category: "高中3500词", word: "wool", phonetic: "/wʊl/", translation: "羊毛", example: "She wore a wool sweater." },
  { id: "g3609", category: "高中3500词", word: "word", phonetic: "/wɜːrd/", translation: "单词；话", example: "She learned new words." },
  { id: "g3610", category: "高中3500词", word: "work", phonetic: "/wɜːrk/", translation: "工作", example: "She works hard." },
  { id: "g3611", category: "高中3500词", word: "worker", phonetic: "/ˈwɜːrkər/", translation: "工人", example: "She is a factory worker." },
  { id: "g3612", category: "高中3500词", word: "workforce", phonetic: "/ˈwɜːrkfɔːrs/", translation: "劳动力", example: "The workforce is growing." },
  { id: "g3613", category: "高中3500词", word: "world", phonetic: "/wɜːrld/", translation: "世界", example: "She traveled around the world." },
  { id: "g3614", category: "高中3500词", word: "worldwide", phonetic: "/ˌwɜːrldˈwaɪd/", translation: "全世界的", example: "The company has a worldwide presence." },
  { id: "g3615", category: "高中3500词", word: "worm", phonetic: "/wɜːrm/", translation: "虫子", example: "The bird caught a worm." },
  { id: "g3616", category: "高中3500词", word: "worried", phonetic: "/ˈwʌrid/", translation: "担心的", example: "She looked worried." },
  { id: "g3617", category: "高中3500词", word: "worry", phonetic: "/ˈwʌri/", translation: "担心", example: "Don't worry about it." },
  { id: "g3618", category: "高中3500词", word: "worse", phonetic: "/wɜːrs/", translation: "更坏的", example: "The weather got worse." },
  { id: "g3619", category: "高中3500词", word: "worship", phonetic: "/ˈwɜːrʃɪp/", translation: "崇拜；礼拜", example: "People go to church to worship." },
  { id: "g3620", category: "高中3500词", word: "worst", phonetic: "/wɜːrst/", translation: "最坏的", example: "That was the worst day." },
  { id: "g3621", category: "高中3500词", word: "worth", phonetic: "/wɜːrθ/", translation: "值得的", example: "The book is worth reading." },
  { id: "g3622", category: "高中3500词", word: "worthwhile", phonetic: "/ˌwɜːrθˈwaɪl/", translation: "值得的", example: "The effort was worthwhile." },
  { id: "g3623", category: "高中3500词", word: "worthy", phonetic: "/ˈwɜːrði/", translation: "值得的", example: "She is worthy of praise." },
  { id: "g3624", category: "高中3500词", word: "would", phonetic: "/wʊd/", translation: "会；愿意", example: "She would like some tea." },
  { id: "g3625", category: "高中3500词", word: "wound", phonetic: "/wuːnd/", translation: "伤口；伤害", example: "The soldier had a deep wound." },
  { id: "g3626", category: "高中3500词", word: "wrap", phonetic: "/ræp/", translation: "包；裹", example: "She wrapped the gift in paper." },
  { id: "g3627", category: "高中3500词", word: "wrist", phonetic: "/rɪst/", translation: "手腕", example: "She wore a watch on her wrist." },
  { id: "g3628", category: "高中3500词", word: "write", phonetic: "/raɪt/", translation: "写", example: "She wrote a letter." },
  { id: "g3629", category: "高中3500词", word: "writer", phonetic: "/ˈraɪtər/", translation: "作家", example: "She is a famous writer." },
  { id: "g3630", category: "高中3500词", word: "writing", phonetic: "/ˈraɪtɪŋ/", translation: "写作", example: "She enjoys creative writing." },
  { id: "g3631", category: "高中3500词", word: "wrong", phonetic: "/rɒŋ/", translation: "错误的", example: "She was wrong about that." },
  { id: "g3632", category: "高中3500词", word: "X-ray", phonetic: "/ˈeks reɪ/", translation: "X射线", example: "She had an X-ray taken." },
  { id: "g3633", category: "高中3500词", word: "yard", phonetic: "/jɑːrd/", translation: "院子；码", example: "She played in the yard." },
  { id: "g3634", category: "高中3500词", word: "year", phonetic: "/jɪər/", translation: "年", example: "She is ten years old." },
  { id: "g3635", category: "高中3500词", word: "yell", phonetic: "/jel/", translation: "大喊", example: "She yelled for help." },
  { id: "g3636", category: "高中3500词", word: "yellow", phonetic: "/ˈjeləʊ/", translation: "黄色的", example: "The sunflower is yellow." },
  { id: "g3637", category: "高中3500词", word: "yes", phonetic: "/jes/", translation: "是", example: "Yes, I agree." },
  { id: "g3638", category: "高中3500词", word: "yesterday", phonetic: "/ˈjestərdeɪ/", translation: "昨天", example: "She arrived yesterday." },
  { id: "g3639", category: "高中3500词", word: "yet", phonetic: "/jet/", translation: "还；然而", example: "She hasn't finished yet." },
  { id: "g3640", category: "高中3500词", word: "yield", phonetic: "/jiːld/", translation: "产出；屈服", example: "The farm yields a good harvest every year." },
  { id: "g3641", category: "高中3500词", word: "yoghurt", phonetic: "/ˈjɒɡərt/", translation: "酸奶", example: "She ate yoghurt for breakfast." },
  { id: "g3642", category: "高中3500词", word: "you", phonetic: "/juː/", translation: "你；你们", example: "You are very kind." },
  { id: "g3643", category: "高中3500词", word: "young", phonetic: "/jʌŋ/", translation: "年轻的", example: "She is a young woman." },
  { id: "g3644", category: "高中3500词", word: "youngster", phonetic: "/ˈjʌŋstər/", translation: "年轻人", example: "The youngsters played football." },
  { id: "g3645", category: "高中3500词", word: "your", phonetic: "/jɔːr/", translation: "你的", example: "This is your book." },
  { id: "g3646", category: "高中3500词", word: "yours", phonetic: "/jɔːrz/", translation: "你的", example: "The book is yours." },
  { id: "g3647", category: "高中3500词", word: "yourself", phonetic: "/jɔːrˈself/", translation: "你自己", example: "Do it yourself." },
  { id: "g3648", category: "高中3500词", word: "youth", phonetic: "/juːθ/", translation: "青春；青年", example: "She spent her youth in the countryside." },
  { id: "g3649", category: "高中3500词", word: "zero", phonetic: "/ˈzɪərəʊ/", translation: "零", example: "The temperature dropped to zero." },
  { id: "g3650", category: "高中3500词", word: "zip", phonetic: "/zɪp/", translation: "拉链", example: "She zipped up her jacket." },
  { id: "g3651", category: "高中3500词", word: "zone", phonetic: "/zəʊn/", translation: "区域；地带", example: "This is a no-smoking zone." },
  { id: "g3652", category: "高中3500词", word: "zoo", phonetic: "/zuː/", translation: "动物园", example: "We visited the zoo." }
];

</script>

  <style>
    :root {
      color-scheme: dark;
      --bg-0: #0b0f19;
      --bg-1: #111827;
      --bg-2: #1f2937;
      --bg-3: #0f172a;
      --text: #f3f4f6;
      --muted: #9ca3af;
      --subtle: #6b7280;
      --line: rgba(255, 255, 255, 0.08);
      --line-strong: rgba(255, 255, 255, 0.16);
      --surface: rgba(255, 255, 255, 0.05);
      --surface-hover: rgba(255, 255, 255, 0.09);
      --surface-glass: linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
      --accent: #38bdf8;
      --shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
      --shadow-soft: 0 10px 34px rgba(0, 0, 0, 0.2);
      
      --radius-sm: 8px;
      --radius: 14px;
      --radius-lg: 20px;
      --font: Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", sans-serif;
      --fast: 160ms cubic-bezier(.2, .84, .28, 1);
    }

    :root.light-mode {
      color-scheme: light;
      --bg-0: #f0f4f8;
      --bg-1: #e2e8f0;
      --bg-2: #ffffff;
      --text: #0f172a;
      --muted: #475569;
      --subtle: #94a3b8;
      --line: rgba(0, 0, 0, 0.08);
      --line-strong: rgba(0, 0, 0, 0.15);
      --surface: rgba(255, 255, 255, 0.7);
      --surface-hover: rgba(255, 255, 255, 0.95);
      --surface-glass: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5));
      --accent: #0ea5e9;
    }

    /* iOS 26 玻璃态主题 */
    :root.glass-mode {
      color-scheme: dark;
      --bg-0: #1a1a2e;
      --bg-1: #16213e;
      --bg-2: #0f3460;
      --text: #e8eaf6;
      --muted: #9fa8da;
      --subtle: #7986cb;
      --line: rgba(255, 255, 255, 0.12);
      --line-strong: rgba(255, 255, 255, 0.22);
      --surface: rgba(255, 255, 255, 0.08);
      --surface-hover: rgba(255, 255, 255, 0.14);
      --surface-glass: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04));
      --accent: #7c4dff;
      --shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
      --shadow-soft: 0 10px 34px rgba(0, 0, 0, 0.15);
    }
    :root.glass-mode body::before {
      background: conic-gradient(from 225deg at 50% 45%,
        rgba(124, 77, 255, 0.18),
        rgba(68, 138, 255, 0.18),
        rgba(0, 176, 255, 0.18),
        rgba(0, 230, 180, 0.18),
        rgba(124, 77, 255, 0.18));
      opacity: 1;
    }
    :root.glass-mode .glass-panel {
      backdrop-filter: blur(40px) saturate(1.5);
      -webkit-backdrop-filter: blur(40px) saturate(1.5);
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04));
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    :root.glass-mode .btn {
      backdrop-filter: blur(24px) saturate(1.4);
      -webkit-backdrop-filter: blur(24px) saturate(1.4);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    :root.glass-mode .btn:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.25);
    }
    :root.glass-mode .primary-btn {
      background: linear-gradient(135deg, #7c4dff, #448aff);
      box-shadow: 0 12px 32px rgba(124, 77, 255, 0.3);
    }
    :root.glass-mode .brand-mark {
      backdrop-filter: blur(24px) saturate(1.4);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    :root.glass-mode .word-card {
      backdrop-filter: blur(30px) saturate(1.3);
      -webkit-backdrop-filter: blur(30px) saturate(1.3);
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
      border: 1px solid rgba(255, 255, 255, 0.12);
    }
    :root.glass-mode .word-card:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.22);
    }
    :root.glass-mode .word-card.last-viewed {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px var(--accent), 0 0 24px rgba(124, 77, 255, 0.2);
    }
    :root.glass-mode .book-header {
      background: rgba(26, 26, 46, 0.75);
      backdrop-filter: blur(30px) saturate(1.4);
    }
    :root.glass-mode .flash-face {
      backdrop-filter: blur(40px) saturate(1.5);
      -webkit-backdrop-filter: blur(40px) saturate(1.5);
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04));
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    :root.glass-mode .daily-limit-setting {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }
    :root.glass-mode .daily-limit-input {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }
    :root.glass-mode .category-select {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }
    :root.glass-mode .search-input {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }
    :root.glass-mode .status-tag {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }
    :root.glass-mode .status-tag.due {
      background: rgba(124, 77, 255, 0.2);
      color: #b388ff;
      border-color: rgba(124, 77, 255, 0.4);
    }
    :root.glass-mode .daily-limit-input option,
    :root.glass-mode .category-select option {
      background: #1a1a2e;
      color: #e8eaf6;
    }

    /* 樱花主题 */
    :root.sakura-mode {
      color-scheme: dark;
      --bg-0: #2d1b2e;
      --bg-1: #3d2239;
      --bg-2: #4a2a42;
      --text: #fce4ec;
      --muted: #ce93d8;
      --subtle: #ab47bc;
      --line: rgba(255, 183, 197, 0.1);
      --line-strong: rgba(255, 183, 197, 0.2);
      --surface: rgba(255, 183, 197, 0.06);
      --surface-hover: rgba(255, 183, 197, 0.12);
      --surface-glass: linear-gradient(145deg, rgba(255, 183, 197, 0.1), rgba(255, 183, 197, 0.03));
      --accent: #f48fb1;
      --shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
      --shadow-soft: 0 10px 34px rgba(0, 0, 0, 0.15);
    }
    :root.sakura-mode body::before {
      background: conic-gradient(from 200deg at 50% 45%,
        rgba(244, 143, 177, 0.2),
        rgba(206, 147, 216, 0.2),
        rgba(255, 183, 197, 0.2),
        rgba(240, 98, 146, 0.18),
        rgba(244, 143, 177, 0.2));
      opacity: 1;
    }
    :root.sakura-mode .glass-panel {
      backdrop-filter: blur(40px) saturate(1.4);
      background: linear-gradient(145deg, rgba(255, 183, 197, 0.1), rgba(255, 183, 197, 0.03));
      border: 1px solid rgba(255, 183, 197, 0.15);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 183, 197, 0.08);
    }
    :root.sakura-mode .primary-btn {
      background: linear-gradient(135deg, #f48fb1, #ec407a);
      box-shadow: 0 12px 32px rgba(244, 143, 177, 0.3);
    }
    :root.sakura-mode .word-card {
      backdrop-filter: blur(30px) saturate(1.3);
      background: linear-gradient(145deg, rgba(255, 183, 197, 0.08), rgba(255, 183, 197, 0.02));
      border: 1px solid rgba(255, 183, 197, 0.1);
    }
    :root.sakura-mode .word-card:hover { background: rgba(255, 183, 197, 0.12); border-color: rgba(255, 183, 197, 0.2); }
    :root.sakura-mode .word-card.last-viewed { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 0 24px rgba(244, 143, 177, 0.2); }
    :root.sakura-mode .flash-face {
      backdrop-filter: blur(40px) saturate(1.4);
      background: linear-gradient(145deg, rgba(255, 183, 197, 0.1), rgba(255, 183, 197, 0.03));
      border: 1px solid rgba(255, 183, 197, 0.18);
    }
    :root.sakura-mode .status-tag.due { background: rgba(244, 143, 177, 0.2); color: #f48fb1; border-color: rgba(244, 143, 177, 0.4); }
    :root.sakura-mode .daily-limit-input option, :root.sakura-mode .category-select option { background: #2d1b2e; color: #fce4ec; }

    /* 极光主题 */
    :root.aurora-mode {
      color-scheme: dark;
      --bg-0: #0a1f1a;
      --bg-1: #0d2b24;
      --bg-2: #0f3d33;
      --text: #e0f2f1;
      --muted: #80cbc4;
      --subtle: #4db6ac;
      --line: rgba(128, 203, 196, 0.1);
      --line-strong: rgba(128, 203, 196, 0.2);
      --surface: rgba(128, 203, 196, 0.06);
      --surface-hover: rgba(128, 203, 196, 0.12);
      --surface-glass: linear-gradient(145deg, rgba(128, 203, 196, 0.1), rgba(128, 203, 196, 0.03));
      --accent: #26a69a;
      --shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
      --shadow-soft: 0 10px 34px rgba(0, 0, 0, 0.2);
    }
    :root.aurora-mode body::before {
      background: conic-gradient(from 180deg at 50% 40%,
        rgba(0, 230, 118, 0.15),
        rgba(38, 166, 154, 0.18),
        rgba(0, 176, 255, 0.15),
        rgba(128, 203, 196, 0.18),
        rgba(0, 230, 118, 0.15));
      opacity: 1;
    }
    :root.aurora-mode .glass-panel {
      backdrop-filter: blur(40px) saturate(1.5);
      background: linear-gradient(145deg, rgba(128, 203, 196, 0.1), rgba(128, 203, 196, 0.03));
      border: 1px solid rgba(128, 203, 196, 0.15);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(128, 203, 196, 0.08);
    }
    :root.aurora-mode .primary-btn {
      background: linear-gradient(135deg, #26a69a, #00c853);
      box-shadow: 0 12px 32px rgba(38, 166, 154, 0.3);
    }
    :root.aurora-mode .word-card {
      backdrop-filter: blur(30px) saturate(1.3);
      background: linear-gradient(145deg, rgba(128, 203, 196, 0.08), rgba(128, 203, 196, 0.02));
      border: 1px solid rgba(128, 203, 196, 0.1);
    }
    :root.aurora-mode .word-card:hover { background: rgba(128, 203, 196, 0.12); border-color: rgba(128, 203, 196, 0.2); }
    :root.aurora-mode .word-card.last-viewed { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 0 24px rgba(38, 166, 154, 0.2); }
    :root.aurora-mode .flash-face {
      backdrop-filter: blur(40px) saturate(1.5);
      background: linear-gradient(145deg, rgba(128, 203, 196, 0.1), rgba(128, 203, 196, 0.03));
      border: 1px solid rgba(128, 203, 196, 0.18);
    }
    :root.aurora-mode .status-tag.due { background: rgba(38, 166, 154, 0.2); color: #4db6ac; border-color: rgba(38, 166, 154, 0.4); }
    :root.aurora-mode .daily-limit-input option, :root.aurora-mode .category-select option { background: #0a1f1a; color: #e0f2f1; }

    /* 日落主题 */
    :root.sunset-mode {
      color-scheme: dark;
      --bg-0: #1f1210;
      --bg-1: #2d1a14;
      --bg-2: #3d2318;
      --text: #fff3e0;
      --muted: #ffab91;
      --subtle: #ff8a65;
      --line: rgba(255, 171, 145, 0.1);
      --line-strong: rgba(255, 171, 145, 0.2);
      --surface: rgba(255, 171, 145, 0.06);
      --surface-hover: rgba(255, 171, 145, 0.12);
      --surface-glass: linear-gradient(145deg, rgba(255, 171, 145, 0.1), rgba(255, 171, 145, 0.03));
      --accent: #ff7043;
      --shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
      --shadow-soft: 0 10px 34px rgba(0, 0, 0, 0.2);
    }
    :root.sunset-mode body::before {
      background: conic-gradient(from 210deg at 50% 50%,
        rgba(255, 112, 67, 0.2),
        rgba(255, 167, 38, 0.2),
        rgba(255, 213, 79, 0.15),
        rgba(239, 83, 80, 0.18),
        rgba(255, 112, 67, 0.2));
      opacity: 1;
    }
    :root.sunset-mode .glass-panel {
      backdrop-filter: blur(40px) saturate(1.5);
      background: linear-gradient(145deg, rgba(255, 171, 145, 0.1), rgba(255, 171, 145, 0.03));
      border: 1px solid rgba(255, 171, 145, 0.15);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 171, 145, 0.08);
    }
    :root.sunset-mode .primary-btn {
      background: linear-gradient(135deg, #ff7043, #ffab40);
      box-shadow: 0 12px 32px rgba(255, 112, 67, 0.3);
    }
    :root.sunset-mode .word-card {
      backdrop-filter: blur(30px) saturate(1.3);
      background: linear-gradient(145deg, rgba(255, 171, 145, 0.08), rgba(255, 171, 145, 0.02));
      border: 1px solid rgba(255, 171, 145, 0.1);
    }
    :root.sunset-mode .word-card:hover { background: rgba(255, 171, 145, 0.12); border-color: rgba(255, 171, 145, 0.2); }
    :root.sunset-mode .word-card.last-viewed { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 0 24px rgba(255, 112, 67, 0.2); }
    :root.sunset-mode .flash-face {
      backdrop-filter: blur(40px) saturate(1.5);
      background: linear-gradient(145deg, rgba(255, 171, 145, 0.1), rgba(255, 171, 145, 0.03));
      border: 1px solid rgba(255, 171, 145, 0.18);
    }
    :root.sunset-mode .status-tag.due { background: rgba(255, 112, 67, 0.2); color: #ff8a65; border-color: rgba(255, 112, 67, 0.4); }
    :root.sunset-mode .daily-limit-input option, :root.sunset-mode .category-select option { background: #1f1210; color: #fff3e0; }

    /* 墨韵主题 */
    :root.ink-mode {
      color-scheme: dark;
      --bg-0: #1a1a1a;
      --bg-1: #222222;
      --bg-2: #2a2a2a;
      --text: #e8e0d4;
      --muted: #a89f91;
      --subtle: #8c8278;
      --line: rgba(168, 159, 145, 0.1);
      --line-strong: rgba(168, 159, 145, 0.2);
      --surface: rgba(168, 159, 145, 0.06);
      --surface-hover: rgba(168, 159, 145, 0.1);
      --surface-glass: linear-gradient(145deg, rgba(168, 159, 145, 0.08), rgba(168, 159, 145, 0.02));
      --accent: #c9a96e;
      --shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
      --shadow-soft: 0 10px 34px rgba(0, 0, 0, 0.2);
    }
    :root.ink-mode body::before {
      background: conic-gradient(from 240deg at 50% 50%,
        rgba(201, 169, 110, 0.12),
        rgba(139, 119, 90, 0.1),
        rgba(201, 169, 110, 0.08),
        rgba(168, 159, 145, 0.1),
        rgba(201, 169, 110, 0.12));
      opacity: 1;
    }
    :root.ink-mode .glass-panel {
      backdrop-filter: blur(40px) saturate(1.2);
      background: linear-gradient(145deg, rgba(168, 159, 145, 0.08), rgba(168, 159, 145, 0.02));
      border: 1px solid rgba(168, 159, 145, 0.12);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(168, 159, 145, 0.06);
    }
    :root.ink-mode .primary-btn {
      background: linear-gradient(135deg, #c9a96e, #a68b5b);
      box-shadow: 0 12px 32px rgba(201, 169, 110, 0.25);
    }
    :root.ink-mode .word-card {
      backdrop-filter: blur(30px) saturate(1.2);
      background: linear-gradient(145deg, rgba(168, 159, 145, 0.06), rgba(168, 159, 145, 0.02));
      border: 1px solid rgba(168, 159, 145, 0.1);
    }
    :root.ink-mode .word-card:hover { background: rgba(168, 159, 145, 0.1); border-color: rgba(168, 159, 145, 0.18); }
    :root.ink-mode .word-card.last-viewed { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 0 24px rgba(201, 169, 110, 0.15); }
    :root.ink-mode .flash-face {
      backdrop-filter: blur(40px) saturate(1.2);
      background: linear-gradient(145deg, rgba(168, 159, 145, 0.08), rgba(168, 159, 145, 0.02));
      border: 1px solid rgba(168, 159, 145, 0.15);
    }
    :root.ink-mode .status-tag.due { background: rgba(201, 169, 110, 0.15); color: #c9a96e; border-color: rgba(201, 169, 110, 0.35); }
    :root.ink-mode .daily-limit-input option, :root.ink-mode .category-select option { background: #1a1a1a; color: #e8e0d4; }

    /* 设置页面 - Apple Glassmorphism 风格 */
    .settings-container { max-width: 620px; margin: 0 auto; display: flex; flex-direction: column; gap: 28px; padding-bottom: 40px; }

    .apple-group { }
    .apple-group-header { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); padding: 0 4px 8px; }
    .apple-group-body {
      border-radius: 16px; overflow: hidden;
      background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
      backdrop-filter: blur(40px) saturate(1.4); -webkit-backdrop-filter: blur(40px) saturate(1.4);
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06);
    }
    :root.light-mode .apple-group-body {
      background: linear-gradient(145deg, rgba(255,255,255,0.85), rgba(255,255,255,0.6));
      border-color: rgba(0,0,0,0.08);
      box-shadow: 0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8);
    }

    /* 主题选择行 */
    .apple-theme-row { display: flex; flex-direction: column; }
    .apple-theme-option {
      display: flex; align-items: center; gap: 14px; padding: 14px 18px; cursor: pointer;
      transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
    }
    .apple-theme-option:not(:last-child)::after {
      content: ''; position: absolute; bottom: 0; left: 56px; right: 18px; height: 1px;
      background: var(--line);
    }
    .apple-theme-option:hover {
      background: rgba(255,255,255,0.06);
    }
    :root.light-mode .apple-theme-option:hover {
      background: rgba(0,0,0,0.03);
    }
    .apple-theme-option.active { background: rgba(255,255,255,0.04); }
    :root.light-mode .apple-theme-option.active { background: rgba(0,0,0,0.02); }

    .apple-theme-swatch {
      width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .dark-swatch { background: linear-gradient(145deg, #1f2937, #0b0f19); border: 1px solid rgba(255,255,255,0.15); }
    .light-swatch { background: linear-gradient(145deg, #ffffff, #f0f4f8); border: 1px solid rgba(0,0,0,0.1); }
    .glass-swatch { background: linear-gradient(145deg, rgba(124,77,255,0.5), rgba(68,138,255,0.5)); border: 1px solid rgba(255,255,255,0.25); backdrop-filter: blur(8px); }
    .sakura-swatch { background: linear-gradient(145deg, #f48fb1, #ec407a); border: 1px solid rgba(255,255,255,0.2); }
    .aurora-swatch { background: linear-gradient(145deg, #26a69a, #00c853); border: 1px solid rgba(255,255,255,0.2); }
    .sunset-swatch { background: linear-gradient(145deg, #ff7043, #ffab40); border: 1px solid rgba(255,255,255,0.2); }
    .ink-swatch { background: linear-gradient(145deg, #c9a96e, #8c8278); border: 1px solid rgba(255,255,255,0.15); }

    .apple-theme-info { display: flex; flex-direction: column; flex: 1; }
    .apple-theme-name { font-size: 0.95rem; font-weight: 600; }
    .apple-theme-desc { font-size: 0.78rem; color: var(--muted); margin-top: 2px; }

    .apple-check { width: 22px; height: 22px; flex-shrink: 0; opacity: 0; transform: scale(0.5); transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
    .apple-check svg { width: 100%; height: 100%; color: var(--accent); }
    .apple-theme-option.active .apple-check { opacity: 1; transform: scale(1); }

    /* 操作按钮 */
    .apple-action-btn {
      display: flex; align-items: center; gap: 14px; width: 100%; padding: 14px 18px;
      background: transparent; border: none; color: var(--text); cursor: pointer;
      font-family: inherit; text-align: left;
      transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
    }
    .apple-action-btn:not(:last-child)::after {
      content: ''; position: absolute; bottom: 0; left: 56px; right: 18px; height: 1px;
      background: var(--line);
    }
    .apple-action-btn:hover {
      background: rgba(255,255,255,0.06);
      backdrop-filter: blur(20px) saturate(1.3); -webkit-backdrop-filter: blur(20px) saturate(1.3);
    }
    :root.light-mode .apple-action-btn:hover {
      background: rgba(0,0,0,0.03);
    }
    .apple-action-btn.danger .apple-action-name { color: #ef4444; }
    .apple-action-btn.danger:hover { background: rgba(239,68,68,0.06); }

    .apple-action-icon {
      width: 36px; height: 36px; border-radius: 9px; flex-shrink: 0;
      display: grid; place-items: center;
    }
    .apple-action-icon svg { width: 18px; height: 18px; }

    .apple-action-info { display: flex; flex-direction: column; flex: 1; }
    .apple-action-name { font-size: 0.95rem; font-weight: 500; }
    .apple-action-desc { font-size: 0.78rem; color: var(--muted); margin-top: 2px; }

    .apple-chevron { width: 18px; height: 18px; color: var(--subtle); flex-shrink: 0; }

    /* Toggle 开关 */
    .apple-toggle-row {
      display: flex; align-items: center; gap: 14px; padding: 14px 18px;
      position: relative;
    }
    .apple-toggle-row:not(:last-child)::after {
      content: ''; position: absolute; bottom: 0; left: 56px; right: 18px; height: 1px;
      background: var(--line);
    }
    .apple-toggle { position: relative; display: inline-block; width: 51px; height: 31px; flex-shrink: 0; }
    .apple-toggle input { opacity: 0; width: 0; height: 0; }
    .apple-toggle-slider {
      position: absolute; inset: 0; border-radius: 31px; cursor: pointer;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    :root.light-mode .apple-toggle-slider {
      background: rgba(0,0,0,0.1); border-color: rgba(0,0,0,0.12);
    }
    .apple-toggle-slider::before {
      content: ''; position: absolute; width: 27px; height: 27px; left: 1px; bottom: 1px;
      border-radius: 50%; background: white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .apple-toggle input:checked + .apple-toggle-slider {
      background: var(--accent); border-color: var(--accent);
    }
    .apple-toggle input:checked + .apple-toggle-slider::before {
      transform: translateX(20px);
    }

    /* 信息行 */
    .apple-info-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 13px 18px; font-size: 0.95rem;
      position: relative;
    }
    .apple-info-row:not(:last-child)::after {
      content: ''; position: absolute; bottom: 0; left: 18px; right: 18px; height: 1px;
      background: var(--line);
    }

    @media (max-width: 480px) {
      .settings-container { padding: 0 8px 40px; }
      .apple-group-body { border-radius: 14px; }
      .apple-theme-option, .apple-action-btn, .apple-toggle-row, .apple-info-row { padding: 12px 14px; }
    }

    /* 特效选择网格 */
    .apple-fx-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; padding: 14px 18px; }
    .apple-fx-option { text-align: center; cursor: pointer; border-radius: 12px; padding: 8px 4px; border: 2px solid transparent; transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .apple-fx-option:hover { background: rgba(255,255,255,0.04); }
    .apple-fx-option.active { border-color: var(--accent); background: rgba(255,255,255,0.03); }
    .apple-fx-preview { width: 100%; aspect-ratio: 1; border-radius: 10px; margin-bottom: 6px; overflow: hidden; position: relative; }
    .apple-fx-name { font-size: 0.75rem; font-weight: 600; color: var(--muted); }
    .apple-fx-option.active .apple-fx-name { color: var(--accent); }

    .fx-prev-default { background: linear-gradient(135deg, #0b0f19, #1f2937); }
    .fx-prev-default::after { content:''; position:absolute; inset:20%; border-radius:50%; background: conic-gradient(from 225deg, rgba(56,189,248,0.4), rgba(129,140,248,0.4), rgba(192,132,252,0.4), rgba(45,212,191,0.4), rgba(56,189,248,0.4)); filter: blur(8px); }
    .fx-prev-aurora { background: linear-gradient(135deg, #0b0f19, #1a1a2e); }
    .fx-prev-aurora::after { content:''; position:absolute; inset:15%; border-radius:40%; background: conic-gradient(from 180deg, rgba(124,77,255,0.5), rgba(68,138,255,0.5), rgba(0,176,255,0.5), rgba(124,77,255,0.5)); filter: blur(6px); animation: fxSpin 8s linear infinite; }
    .fx-prev-particles { background: #0b0f19; }
    .fx-prev-particles::after { content:'✦ ✦ ✦'; position:absolute; inset:0; display:flex; align-items:center; justify-content:center; gap:4px; font-size:10px; color: rgba(56,189,248,0.6); letter-spacing: 2px; }
    .fx-prev-mesh { background: linear-gradient(135deg, #1a1a2e, #0f172a); }
    .fx-prev-mesh::after { content:''; position:absolute; inset:20%; background: linear-gradient(45deg, rgba(124,77,255,0.3), rgba(56,189,248,0.3), rgba(16,185,129,0.3)); border-radius: 30%; filter: blur(4px); }
    .fx-prev-ripple { background: #0b0f19; }
    .fx-prev-ripple::after { content:''; position:absolute; inset:25%; border-radius:50%; border: 2px solid rgba(56,189,248,0.3); box-shadow: 0 0 0 4px rgba(56,189,248,0.1), 0 0 0 8px rgba(56,189,248,0.05); }

    @keyframes fxSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @media (max-width: 480px) { .apple-fx-grid { grid-template-columns: repeat(5, 1fr); gap: 6px; padding: 10px 12px; } }

    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
    html { min-height: 100%; }
    body {
      min-height: 100vh; margin: 0;
      font-family: var(--font); color: var(--text); background: var(--bg-0);
      transition: background 0.5s ease, color 0.5s ease;
      -webkit-font-smoothing: antialiased;
    }
    body::before {
      content: ""; position: fixed; inset: 0; z-index: -2;
      background: conic-gradient(from 225deg at 50% 45%, rgba(56, 189, 248, 0.12), rgba(129, 140, 248, 0.12), rgba(192, 132, 252, 0.12), rgba(45, 212, 191, 0.12), rgba(56, 189, 248, 0.12));
      filter: blur(100px) saturate(1.2); opacity: 0.9;
      transform: scale(1.4);
      transition: opacity 0.5s ease;
      will-change: transform, opacity;
      pointer-events: none;
    }
    :root.light-mode body::before { opacity: 1; }
    body::after { content: ""; display: none; }

    /* 特效画布 */
    #effectCanvas { position: fixed; inset: 0; z-index: -1; pointer-events: none; opacity: 0; transition: opacity 0.8s ease; }
    #effectCanvas.active { opacity: 1; }
    /* 极光特效时隐藏默认body::before，由canvas接管 */
    body.fx-aurora #effectCanvas { opacity: 1; }
    body.fx-aurora::before { opacity: 0 !important; }
    body.fx-particles #effectCanvas { opacity: 1; }
    body.fx-particles::before { opacity: 0 !important; }
    body.fx-mesh #effectCanvas { opacity: 1; }
    body.fx-mesh::before { opacity: 0 !important; }
    body.fx-ripple #effectCanvas { opacity: 1; }
    body.fx-ripple::before { opacity: 0 !important; }
    /* 默认极光模式保留body::before */
    body.fx-default::before { opacity: 0.9; }
    body.fx-default #effectCanvas { opacity: 0; }

    button, input, select { font: inherit; }
    button { border: 0; cursor: pointer; outline: none; }
    
    .app { width: min(1180px, calc(100% - 40px)); min-height: 100vh; margin: 0 auto; padding: 28px 0 44px; -webkit-overflow-scrolling: touch; }
    .shell-header { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 32px; }
    .brand { display: inline-flex; align-items: center; gap: 12px; background: transparent; padding: 0; }
    .brand:hover .brand-mark { transform: scale(1.05); border-color: var(--accent); }
    .brand-mark { display: grid; width: 44px; height: 44px; place-items: center; color: var(--accent); border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow-soft); backdrop-filter: blur(18px); -webkit-transform: translateZ(0); transform: translateZ(0); outline: 1px solid transparent; transition: all var(--fast); }
    .brand-title { display: grid; gap: 2px; text-align: left; }
    .brand-title strong { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-size: 1.35rem; font-weight: 700; background: linear-gradient(120deg, var(--text) 30%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .brand-title span { color: var(--muted); font-size: 0.8rem; }
    .top-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .icon { width: 18px; height: 18px; flex: 0 0 auto; }

    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 42px; padding: 0 16px; border: 1px solid var(--line); border-radius: var(--radius); color: var(--text); background: var(--surface); box-shadow: var(--shadow-soft); backdrop-filter: blur(18px); -webkit-transform: translateZ(0); transform: translateZ(0); outline: 1px solid transparent; font-size: 0.9rem; font-weight: 600; transition: all var(--fast); }
    .btn:hover { transform: translateY(-1.5px); border-color: var(--line-strong); background: var(--surface-hover); }
    .btn.icon-only { width: 42px; padding: 0; border-radius: var(--radius-sm); }
    .primary-btn { color: #fff; border: none; background: linear-gradient(135deg, #38bdf8, #818cf8); box-shadow: 0 12px 32px rgba(99, 102, 241, 0.25); }
    :root.light-mode .primary-btn { color: #fff; }

    .view { display: none; }
    .view.active { display: block; animation: pageIn 400ms ease both; }
    .dashboard-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr); gap: 20px; align-items: stretch; }
    .glass-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--surface-glass); box-shadow: var(--shadow); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); -webkit-transform: translateZ(0); transform: translateZ(0); overflow: hidden; outline: 1px solid transparent; }
    
    .hero-panel { padding: 40px; display: flex; flex-direction: column; justify-content: space-between; min-height: 480px;}
    .hero-copy h1 { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-size: 4.2rem; margin: 0; font-weight: 700; line-height: 1.1; letter-spacing: -0.01em; background: linear-gradient(135deg, var(--text) 40%, var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-copy p { margin: 16px 0 0; color: var(--muted); font-size: 1.05rem; line-height: 1.6; }
    .hero-actions { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 40px;}
    .hero-actions .btn { min-height: 54px; font-size: 1.05rem; width: 100%; }

    .side-stack { display: grid; gap: 20px; }
    .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .stat-card { padding: 20px; text-align: center; }
    .stat-card span { color: var(--muted); font-size: 0.85rem; font-weight: 600; }
    .stat-card strong { display: block; margin-top: 8px; font-size: 2.2rem; font-weight: 800; }

    /* 连续学习天数 */
    .streak-panel { padding: 20px; }
    .streak-header { display: flex; align-items: center; gap: 14px; }
    .streak-icon-wrap { width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; flex-shrink: 0; background: linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(239, 68, 68, 0.15)); }
    .streak-flame { width: 26px; height: 26px; color: #fb923c; }
    .streak-info { flex: 1; display: flex; align-items: baseline; gap: 4px; flex-wrap: wrap; }
    .streak-label { font-size: 0.85rem; color: var(--muted); font-weight: 600; width: 100%; }
    .streak-count { font-size: 2rem; font-weight: 800; color: #fb923c; line-height: 1; }
    .streak-unit { font-size: 0.9rem; color: var(--muted); font-weight: 600; }
    .streak-best { text-align: right; flex-shrink: 0; }
    .streak-best-label { display: block; font-size: 0.75rem; color: var(--muted); font-weight: 600; }
    .streak-best strong { font-size: 1.2rem; font-weight: 700; color: var(--text); }
    .streak-week { display: flex; gap: 6px; margin-top: 16px; justify-content: space-between; }
    .streak-day { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; }
    .streak-day-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--line); transition: all 0.3s ease; }
    .streak-day-dot.active { background: #fb923c; box-shadow: 0 0 8px rgba(251, 146, 60, 0.4); }
    .streak-day-dot.today { background: var(--accent); box-shadow: 0 0 8px rgba(var(--accent-rgb, 56,189,248), 0.4); animation: streakPulse 2s ease-in-out infinite; }
    .streak-day-label { font-size: 0.65rem; color: var(--subtle); font-weight: 600; }
    @keyframes streakPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
    @media (max-width: 768px) { .streak-panel { padding: 16px; } .streak-count { font-size: 1.6rem; } }

    .panel { padding: 24px; }
    .panel-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .panel-title h2 { margin: 0; font-size: 1.15rem; }
    
    .daily-limit-setting { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px; background: var(--surface); border-radius: var(--radius); margin-bottom: 12px; border: 1px solid var(--line); }
    .daily-limit-setting span { font-size: 0.9rem; color: var(--muted); }
    .daily-limit-input { flex: 0 0 auto; height: 36px; padding: 0 12px; background: var(--bg-0); color: var(--text); border: 1px solid var(--line); border-radius: var(--radius-sm); font-weight: 600; cursor: pointer; }
    
    /* 下拉菜单颜色覆盖，避免白底白字 */
    .daily-limit-input option, .category-select option { background: #111827; color: #f3f4f6; }
    :root.light-mode .daily-limit-input option, :root.light-mode .category-select option { background: #ffffff; color: #0f172a; }

    .mini-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
    .mini-list li { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--surface); border-radius: var(--radius-sm); border: 1px solid var(--line); }
    .mini-word strong { display: block; font-size: 1rem; }
    .mini-word span { display: block; font-size: 0.8rem; color: var(--muted); margin-top: 4px; }
    .status-tag { padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: var(--surface); border: 1px solid var(--line); }
    .status-tag.due { background: rgba(14, 165, 233, 0.2); color: var(--accent); border-color: rgba(14, 165, 233, 0.4); }

    .book-header { position: sticky; top: 0; z-index: 90; padding: 16px 0; background: rgba(11, 15, 25, 0.85); backdrop-filter: blur(12px); -webkit-transform: translateZ(0); transform: translateZ(0); outline: 1px solid transparent; display: flex; gap: 16px; align-items: center; margin-bottom: 24px; flex-wrap: wrap;}
    :root.light-mode .book-header { background: rgba(240, 244, 248, 0.85); }
    .book-header h2 { margin: 0; font-size: 1.2rem; flex-grow: 1; }
    .filter-group { display: flex; gap: 12px; width: 100%; max-width: 500px; }
    .category-select { flex: 0 0 140px; height: 48px; padding: 0 12px; background: var(--surface); color: var(--text); border: 1px solid var(--line); border-radius: var(--radius); outline: none; cursor: pointer;}
    .search-wrap { position: relative; flex-grow: 1; }
    .search-wrap svg { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--subtle); width: 18px; }
    .search-input { width: 100%; height: 48px; padding: 0 16px 0 44px; background: var(--surface); color: var(--text); border: 1px solid var(--line); border-radius: var(--radius); outline: none; }
    .search-input:focus { border-color: var(--accent); }

    .book-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
    .book-grid.layout-list { grid-template-columns: 1fr; gap: 10px; }
    
    .layout-toggle-btn { flex: 0 0 48px; height: 48px; display: grid; place-items: center; background: var(--surface); color: var(--text); border: 1px solid var(--line); border-radius: var(--radius); cursor: pointer; transition: all var(--fast); }
    .layout-toggle-btn:hover { background: var(--surface-hover); border-color: var(--accent); color: var(--accent); transform: translateY(-1.5px);}
    .layout-toggle-btn .icon { width: 18px; height: 18px; }

    .word-card { padding: 20px; background: var(--surface-glass); border: 1px solid var(--line); border-radius: var(--radius); cursor: pointer; transition: all var(--fast); display: flex; justify-content: space-between; align-items: center; }
    .word-card:hover { transform: translateY(-3px); border-color: var(--line-strong); background: var(--surface-hover); }
    .word-card.last-viewed { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 0 20px rgba(14, 165, 233, 0.15); background: var(--surface-hover); position: relative; }
    .word-card.last-viewed::after { content: '上次位置'; position: absolute; top: -10px; left: 12px; padding: 2px 8px; background: var(--accent); color: #fff; font-size: 0.7rem; font-weight: 700; border-radius: 4px; }
    .word-card-content strong { font-size: 1.3rem; display: block; margin-bottom: 6px;}
    .word-card-content span { font-size: 0.85rem; color: var(--muted); }
    .word-card-meta { text-align: right; }
    .word-card-meta .cat { font-size: 0.75rem; color: var(--accent); margin-bottom: 4px; display: block; }

    .card-toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .card-stage { min-height: 560px; padding: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    
    .card-flex-wrap { display: flex; align-items: center; justify-content: center; gap: 20px; width: 100%; max-width: 800px; }
    .flashcard-wrap { flex-grow: 1; width: min(600px, 100%); perspective: 1500px; }
    .flashcard { position: relative; width: 100%; height: 420px; transform-style: preserve-3d; transition: transform 600ms cubic-bezier(.2, .8, .2, 1); }
    .flashcard.is-flipped { transform: rotateY(180deg); }

    .flash-face { position: absolute; inset: 0; padding: 40px; display: flex; flex-direction: column; justify-content: center; background: var(--surface-glass); border: 1px solid var(--line-strong); border-radius: var(--radius-lg); box-shadow: var(--shadow); backface-visibility: hidden; -webkit-backface-visibility: hidden; cursor: pointer; }
    .flash-face.front { align-items: center; text-align: center; }
    .flash-face.back { transform: rotateY(180deg); }

    .word-main { margin: 0; font-size: 4.5rem; font-weight: 800; letter-spacing: -0.02em; }
    .phonetic { margin-top: 12px; color: var(--accent); font-size: 1.2rem; font-weight: 500; }
    .front-trans { margin-top: 24px; font-size: 1.8rem; font-weight: 700; color: var(--text); display: none; }
    
    .translation { margin: 0; font-size: 2.2rem; font-weight: 700; }
    .example { margin: 24px 0 0; color: var(--muted); font-size: 1.1rem; line-height: 1.6; }

    .side-reveal-btn { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; width: 64px; height: 100px; border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); color: var(--subtle); font-size: 0.85rem; font-weight: 600; flex-shrink: 0; transition: all var(--fast); }
    .side-reveal-btn:hover { background: var(--surface-hover); color: var(--text); border-color: var(--line-strong); transform: translateY(-2px);}
    .side-reveal-btn .icon { width: 24px; height: 24px; }

    .feedback-bar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; width: 100%; max-width: 800px; margin-top: 24px; }
    .feedback-btn { min-height: 60px; border-radius: var(--radius); font-size: 1rem; font-weight: 600; border: 1px solid transparent; transition: all var(--fast); cursor: pointer; }
    .feedback-btn.forget { background: rgba(239, 68, 68, 0.15); color: #ef4444; border-color: rgba(239, 68, 68, 0.3); }
    .feedback-btn.fuzzy { background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: rgba(245, 158, 11, 0.3); }
    .feedback-btn.familiar { background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3); }
    .feedback-btn:hover { transform: translateY(-2px); filter: brightness(1.2); box-shadow: var(--shadow-soft); }

    .audio-btn { margin-top: 20px; width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: var(--surface); border: 1px solid var(--line); color: var(--accent); }
    .audio-btn:hover { background: var(--surface-hover); }

    /* 默写专属样式 */
    .dict-panel { width: 100%; max-width: 900px; text-align: center; position: relative; display: flex; flex-direction: column; justify-content: center; }
    .dict-prompt { font-size: 2.2rem; margin-bottom: 40px; color: var(--text); font-weight: 700; line-height: 1.5; min-height: 2.5em; display: flex; align-items: center; justify-content: center; padding: 0 20px;}
    .dict-slots { display: flex; flex-wrap: wrap; gap: 4px 8px; justify-content: center; margin: 30px 0 50px; cursor: text; min-height: 44px; transform: scale(1.1); }
    .dict-slot { min-width: 24px; height: 38px; border-bottom: 2px solid var(--line-strong); display: inline-flex; align-items: center; justify-content: center; font-family: monospace; font-size: 1.6rem; font-weight: bold; color: var(--text); transition: border-color var(--fast), color var(--fast); }
    .dict-slot.space { min-width: 14px; border-bottom: none; }
    .dict-slot.dash { border-bottom: none; }
    .dict-slot.correct { color: #10b981; border-bottom-color: #10b981; }
    .dict-slot.wrong { color: #ef4444; border-bottom-color: #ef4444; }
    
    /* 键盘输入闪烁光标 */
    @keyframes blinkCursor { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    .dict-slot.cursor-active { position: relative; }
    .dict-slot.cursor-active::before { content: ''; position: absolute; left: 0; top: 15%; bottom: 15%; width: 2.5px; background-color: var(--text); animation: blinkCursor 1s step-end infinite; }
    
    @keyframes shakeWord { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 50% { transform: translateX(6px); } 75% { transform: translateX(-6px); } }
    .shake-wrapper { animation: shakeWord 0.3s forwards; }

    .dict-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .dict-actions .btn { min-width: 110px; }

    /* 全览滑动特效 */
    .slide-page-transition { animation: slideIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
    @keyframes slideIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }

    .toast { position: fixed; bottom: 24px; right: 24px; padding: 14px 20px; background: var(--text); color: var(--bg-0); border-radius: var(--radius-sm); font-weight: 600; box-shadow: var(--shadow); z-index: 100; transform: translateY(20px); opacity: 0; transition: all var(--fast); pointer-events: none; }
    .toast.show { transform: translateY(0); opacity: 1; }
    @keyframes pageIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 768px) {
      .app { width: 100%; padding: 0 16px 16px; }
      .shell-header { padding: 16px 0; margin-bottom: 24px; }
      .dashboard-grid, .hero-actions, .filter-group { grid-template-columns: 1fr; }
      .hero-panel { min-height: auto; padding: 24px; }
      .hero-copy h1 { font-size: 3rem; }
      .card-stage { padding: 20px; min-height: 500px; }
      .card-flex-wrap { flex-direction: column; gap: 16px; }
      .side-reveal-btn { width: 100%; height: 48px; flex-direction: row; }
      .word-main { font-size: 3.2rem; }
      .translation { font-size: 1.8rem; }
      .front-trans { font-size: 1.5rem; }
      .feedback-bar { grid-template-columns: 1fr; }
      .dict-prompt { font-size: 1.6rem; margin-bottom: 20px; }
      .dict-slots { transform: scale(0.95); gap: 2px 4px; }
      .dict-actions .btn { flex: 1 1 45%; }
    }
  </style>
</head>
<body class="fx-default">
  <canvas id="effectCanvas"></canvas>
  <div class="app">
    <header class="shell-header">
      <button class="brand" id="brandHome" aria-label="返回首页">
        <span class="brand-mark">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </span>
        <span class="brand-title"><strong>FocusWord</strong><span>智能记忆训练</span></span>
      </button>
      <div class="top-actions">
        <button class="btn icon-only" id="themeToggle">
          <svg class="icon sun-icon" style="display:none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg class="icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
        <button class="btn icon-only" id="settingsBtn" title="设置">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
        <input id="importFile" type="file" accept=".json, .txt" style="display:none;" />
        <button class="btn" id="importBtn">导入词库</button>
        <button class="btn" id="exportBtn">导出备份</button>
      </div>
    </header>

    <main>
      <!-- 主页 Dashboard -->
      <section class="view active" id="dashboardView">
        <div class="dashboard-grid">
          <div class="glass-panel hero-panel">
            <div class="hero-copy">
              <h1>FocusWord</h1>
              <p>采用 SM-2 间隔重复算法的智能词汇本。<br>系统会追踪你的记忆曲线，自动安排那些**即将遗忘**的单词在最合适的时间出现。不用死记硬背，把时间留给真正不熟的词。</p>
            </div>
            <div class="hero-actions">
              <button class="btn primary-btn" id="startReviewBtn">开始智能复习</button>
              <button class="btn" id="gotoDictSetupBtn">沉浸默写</button>
              <button class="btn" id="openBookBtn">词汇书全览</button>
            </div>
          </div>

          <aside class="side-stack">
            <div class="glass-panel stat-grid">
              <div class="stat-card"><span>待复习</span><strong id="dueCount">0</strong></div>
              <div class="stat-card"><span>今日新词</span><strong id="newCount">0</strong></div>
              <div class="stat-card"><span>总词汇</span><strong id="totalCount">0</strong></div>
            </div>

            <div class="glass-panel streak-panel" id="streakPanel">
              <div class="streak-header">
                <div class="streak-icon-wrap">
                  <svg class="streak-flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c.5 2.5-.5 5-2 7 1.5-1 3-3 3.5-5.5.5 3-.5 6-3 8.5 2-1 4-4 4-7.5 0-3-1.5-5-2.5-5.5z"></path><path d="M10 12c0-2 1-4 3-5.5C12.5 9 12 11 10 12z"></path></svg>
                </div>
                <div class="streak-info">
                  <span class="streak-label">连续学习</span>
                  <strong class="streak-count" id="streakCount">0</strong>
                  <span class="streak-unit">天</span>
                </div>
                <div class="streak-best">
                  <span class="streak-best-label">最高纪录</span>
                  <strong id="bestStreak">0</strong>
                </div>
              </div>
              <div class="streak-week" id="streakWeek"></div>
            </div>

            <div class="glass-panel panel">
              <div class="panel-title"><h2>学习计划</h2></div>
              <div class="daily-limit-setting">
                <span>每日学习新词量：</span>
                <select id="dailyLimitSelect" class="daily-limit-input" style="width: auto; padding: 0 8px;">
                  <option value="5">5</option>
                  <option value="10" selected>10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="custom">自定义</option>
                </select>
                <input type="number" id="dailyLimitInput" class="daily-limit-input" min="1" max="999" value="10" style="display: none; margin-left: 8px;">
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- 设置页面 -->
      <section class="view" id="settingsView">
        <div class="card-toolbar">
          <button class="btn icon-only" id="settingsBackBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
          <span style="font-weight: 700;">设置</span>
          <div style="width: 42px;"></div>
        </div>
        <div class="settings-container">

          <!-- 外观主题 -->
          <div class="apple-group">
            <div class="apple-group-header">外观主题</div>
            <div class="apple-group-body">
              <div class="apple-theme-row">
                <div class="apple-theme-option active" data-theme="dark" onclick="window.switchTheme('dark')">
                  <div class="apple-theme-swatch dark-swatch"></div>
                  <div class="apple-theme-info">
                    <span class="apple-theme-name">深色</span>
                    <span class="apple-theme-desc">经典暗色模式</span>
                  </div>
                  <div class="apple-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="apple-theme-option" data-theme="light" onclick="window.switchTheme('light')">
                  <div class="apple-theme-swatch light-swatch"></div>
                  <div class="apple-theme-info">
                    <span class="apple-theme-name">浅色</span>
                    <span class="apple-theme-desc">明亮清晰模式</span>
                  </div>
                  <div class="apple-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="apple-theme-option" data-theme="glass" onclick="window.switchTheme('glass')">
                  <div class="apple-theme-swatch glass-swatch"></div>
                  <div class="apple-theme-info">
                    <span class="apple-theme-name">玻璃态</span>
                    <span class="apple-theme-desc">iOS 26 沉浸风格</span>
                  </div>
                  <div class="apple-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="apple-theme-option" data-theme="sakura" onclick="window.switchTheme('sakura')">
                  <div class="apple-theme-swatch sakura-swatch"></div>
                  <div class="apple-theme-info">
                    <span class="apple-theme-name">樱花</span>
                    <span class="apple-theme-desc">柔和粉色调</span>
                  </div>
                  <div class="apple-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="apple-theme-option" data-theme="aurora" onclick="window.switchTheme('aurora')">
                  <div class="apple-theme-swatch aurora-swatch"></div>
                  <div class="apple-theme-info">
                    <span class="apple-theme-name">极光</span>
                    <span class="apple-theme-desc">北极光青绿色调</span>
                  </div>
                  <div class="apple-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="apple-theme-option" data-theme="sunset" onclick="window.switchTheme('sunset')">
                  <div class="apple-theme-swatch sunset-swatch"></div>
                  <div class="apple-theme-info">
                    <span class="apple-theme-name">日落</span>
                    <span class="apple-theme-desc">暖橘珊瑚色调</span>
                  </div>
                  <div class="apple-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
                <div class="apple-theme-option" data-theme="ink" onclick="window.switchTheme('ink')">
                  <div class="apple-theme-swatch ink-swatch"></div>
                  <div class="apple-theme-info">
                    <span class="apple-theme-name">墨韵</span>
                    <span class="apple-theme-desc">水墨画意风格</span>
                  </div>
                  <div class="apple-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 数据管理 -->
          <div class="apple-group">
            <div class="apple-group-header">数据管理</div>
            <div class="apple-group-body">
              <button class="apple-action-btn" id="exportBtnSettings" onclick="exportData()">
                <div class="apple-action-icon" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
                <div class="apple-action-info">
                  <span class="apple-action-name">导出备份</span>
                  <span class="apple-action-desc">保存词汇与复习进度到文件</span>
                </div>
                <svg class="apple-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              <button class="apple-action-btn" onclick="document.getElementById('importFile').click()">
                <div class="apple-action-icon" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <div class="apple-action-info">
                  <span class="apple-action-name">导入词库</span>
                  <span class="apple-action-desc">从文件添加新词汇或恢复进度</span>
                </div>
                <svg class="apple-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              <button class="apple-action-btn danger" id="resetProgressBtn">
                <div class="apple-action-icon" style="background: rgba(239, 68, 68, 0.15); color: #ef4444;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
                <div class="apple-action-info">
                  <span class="apple-action-name">重置进度</span>
                  <span class="apple-action-desc">清除全部复习记录，重新开始</span>
                </div>
                <svg class="apple-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

          <!-- 学习偏好 -->
          <div class="apple-group">
            <div class="apple-group-header">学习偏好</div>
            <div class="apple-group-body">
              <div class="apple-toggle-row">
                <div class="apple-action-icon" style="background: rgba(168, 85, 247, 0.15); color: #a855f7;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <div class="apple-action-info">
                  <span class="apple-action-name">复习提醒</span>
                  <span class="apple-action-desc">有单词到期时发送通知</span>
                </div>
                <label class="apple-toggle">
                  <input type="checkbox" id="notifToggle">
                  <span class="apple-toggle-slider"></span>
                </label>
              </div>
              <div class="apple-toggle-row">
                <div class="apple-action-icon" style="background: rgba(251, 146, 60, 0.15); color: #fb923c;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c.5 2.5-.5 5-2 7 1.5-1 3-3 3.5-5.5.5 3-.5 6-3 8.5 2-1 4-4 4-7.5 0-3-1.5-5-2.5-5.5z"></path><path d="M10 12c0-2 1-4 3-5.5C12.5 9 12 11 10 12z"></path></svg>
                </div>
                <div class="apple-action-info">
                  <span class="apple-action-name">学习连续性提醒</span>
                  <span class="apple-action-desc">断签风险时发送提醒通知</span>
                </div>
                <label class="apple-toggle">
                  <input type="checkbox" id="streakNotifToggle">
                  <span class="apple-toggle-slider"></span>
                </label>
              </div>
              <div class="apple-toggle-row">
                <div class="apple-action-icon" style="background: rgba(251, 146, 60, 0.15); color: #fb923c;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div class="apple-action-info">
                  <span class="apple-action-name">自动发音</span>
                  <span class="apple-action-desc">翻到新单词时自动播放读音</span>
                </div>
                <label class="apple-toggle">
                  <input type="checkbox" id="autoPlayToggle" checked>
                  <span class="apple-toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- 主页特效 -->
          <div class="apple-group">
            <div class="apple-group-header">主页特效</div>
            <div class="apple-group-body">
              <div class="apple-fx-grid">
                <div class="apple-fx-option active" data-fx="default" onclick="window.switchEffect('default')">
                  <div class="apple-fx-preview fx-prev-default"></div>
                  <span class="apple-fx-name">极光</span>
                </div>
                <div class="apple-fx-option" data-fx="aurora" onclick="window.switchEffect('aurora')">
                  <div class="apple-fx-preview fx-prev-aurora"></div>
                  <span class="apple-fx-name">流光</span>
                </div>
                <div class="apple-fx-option" data-fx="particles" onclick="window.switchEffect('particles')">
                  <div class="apple-fx-preview fx-prev-particles"></div>
                  <span class="apple-fx-name">星尘</span>
                </div>
                <div class="apple-fx-option" data-fx="mesh" onclick="window.switchEffect('mesh')">
                  <div class="apple-fx-preview fx-prev-mesh"></div>
                  <span class="apple-fx-name">网格</span>
                </div>
                <div class="apple-fx-option" data-fx="ripple" onclick="window.switchEffect('ripple')">
                  <div class="apple-fx-preview fx-prev-ripple"></div>
                  <span class="apple-fx-name">涟漪</span>
                </div>
              </div>
              <div class="apple-toggle-row" style="border-top: 1px solid var(--line); margin-top: 4px;">
                <div class="apple-action-icon" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"></path><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                </div>
                <div class="apple-action-info">
                  <span class="apple-action-name">自动轮换</span>
                  <span class="apple-action-desc">每30秒自动切换特效</span>
                </div>
                <label class="apple-toggle">
                  <input type="checkbox" id="fxAutoRotate">
                  <span class="apple-toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- 关于 -->
          <div class="apple-group">
            <div class="apple-group-header">关于</div>
            <div class="apple-group-body">
              <div class="apple-info-row">
                <span>应用</span>
                <span style="color: var(--muted);">FocusWord</span>
              </div>
              <div class="apple-info-row">
                <span>算法</span>
                <span style="color: var(--muted);">SM-2 间隔重复</span>
              </div>
              <div class="apple-info-row">
                <span>内置词库</span>
                <span style="color: var(--muted);">3500词 + 搭配 + 句型</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 独立默写设置界面 -->
      <section class="view" id="dictSetupView">
        <div class="card-toolbar">
          <button class="btn icon-only" id="dictSetupBackBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
          <span style="font-weight: 700;">沉浸式默写</span>
          <div style="width: 42px;"></div>
        </div>
        <div class="glass-panel card-stage" style="min-height: 480px;">
          <div style="width: 100%; max-width: 480px; display: grid; gap: 20px;">
            <div class="daily-limit-setting" style="margin-bottom: 0;">
              <span>默写内容：</span>
              <select id="dictModeSelectCfg" class="daily-limit-input" style="width: auto;">
                <option value="zh2en">单词：看中文拼写</option>
                <option value="en2zh">单词：看英文选义</option>
                <option value="phrase">短语：高中核心固定搭配</option>
                <option value="sentence">实战：高分句子翻译</option>
              </select>
            </div>
            <div class="daily-limit-setting" style="margin-bottom: 0;">
              <span>单次任务量：</span>
              <select id="dictLimitSelectCfg" class="daily-limit-input" style="width: auto;">
                <option value="10">10 题</option>
                <option value="20" selected>20 题</option>
                <option value="50">50 题</option>
                <option value="100">100 题</option>
              </select>
            </div>
            <button class="btn primary-btn" id="startDictBtn" style="height: 54px; font-size: 1.1rem; font-weight: 700;">开始默写训练</button>
          </div>
        </div>
      </section>

      <!-- 词汇书全览 -->
      <section class="view" id="bookView">
        <div class="book-header">
          <button class="btn icon-only" id="bookBackToHomeBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
          <h2>词汇书全览</h2>
          <div class="filter-group">
            <select class="category-select" id="categoryFilter"><option value="all">全部分类</option></select>
            <button class="layout-toggle-btn" id="layoutToggleBtn" title="切换视图">
              <svg class="icon list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              <svg class="icon grid-icon" style="display:none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
            <div class="search-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" class="search-input" id="searchInput" placeholder="搜索英文或中文释义...">
            </div>
          </div>
        </div>
        <div class="book-grid" id="bookGrid"></div>
      </section>

      <!-- 单词详情浏览/复习卡片 -->
      <section class="view" id="cardView">
        <div class="card-toolbar">
          <button class="btn icon-only" id="cardBackBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
          <span class="session-title" id="sessionTitle">进度 1/10</span>
          <div id="bookNavGroup" style="display:none; gap:8px; align-items:center;">
            <span style="font-size:0.8rem; color:var(--muted); margin-right:8px; display:none;" id="mobileSwipeHint">可左右滑动</span>
            <button class="btn icon-only" id="prevWordBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button class="btn icon-only" id="nextWordBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>
        </div>
        <div class="glass-panel card-stage">
          <div class="card-flex-wrap">
            <div class="flashcard-wrap">
              <div class="flashcard" id="flashcard">
                <div class="flash-face front">
                  <h2 class="word-main" id="fcWord"></h2>
                  <div class="phonetic" id="fcPhonetic"></div>
                  <div class="front-trans" id="fcFrontTrans"></div>
                  <button class="audio-btn" id="audioBtn">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  </button>
                </div>
                <div class="flash-face back">
                  <h2 class="translation" id="fcTrans"></h2>
                  <p class="example" id="fcExample"></p>
                </div>
              </div>
            </div>
            <button class="side-reveal-btn" id="revealBtn">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span id="revealText">释义 (Ctrl)</span>
            </button>
          </div>
          <div class="feedback-bar" id="feedbackBar">
            <button class="feedback-btn forget" data-rating="forget">不会 [1]</button>
            <button class="feedback-btn fuzzy" data-rating="fuzzy">模糊 [2]</button>
            <button class="feedback-btn familiar" data-rating="familiar">熟练 [3]</button>
          </div>
        </div>
      </section>

      <!-- 独立沉浸式默写视图 -->
      <section class="view" id="dictationView">
        <div class="card-toolbar">
          <button class="btn icon-only" id="dictBackBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
          <span class="session-title" id="dictProgress" style="font-weight: 700; color: var(--accent);">默写任务: 1 / 20</span>
          <div style="width: 42px;"></div>
        </div>

        <div class="glass-panel card-stage" style="justify-content: center; min-height: 560px;">
          <div class="dict-panel">
            <div id="dictPrompt" class="dict-prompt">点击下方输入框开始</div>
            
            <div class="dict-slots" id="dictSlots" onclick="document.getElementById('dictInput').focus()"></div>
            <input type="text" id="dictInput" autocapitalize="none" autocorrect="off" autocomplete="off" spellcheck="false" style="position:absolute; left:0; top:0; width:100%; height:100%; opacity:0; z-index:-1; pointer-events:none;" />
            
            <div class="dict-actions">
               <button class="btn" id="dictAudioBtn" title="听发音 (Alt)"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg> 发音 (Alt)</button>
               <button class="btn" id="dictHintBtn" title="看答案 (Ctrl)"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> 提示 (Ctrl)</button>
               <button class="btn" id="dictFavBtn"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 记入生词 (Shift+X)</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
  <div class="toast" id="toast"></div>

  <script>
    (() => {
      "use strict";
      const STORAGE_KEY = "focusword.data.v5";
      const MS_PER_DAY = 24 * 60 * 60 * 1000;

      // 备用基础词库 (供未上传词库时体验使用)
      const FALLBACK_VOCAB = [
        { id: "w1", category: "高中核心词", word: "hesitate", phonetic: "/ˈhezɪteɪt/", translation: "犹豫，踌躇", example: "Don't hesitate to contact me if you need help." },
        { id: "w2", category: "高中核心词", word: "transparent", phonetic: "/trænsˈpærənt/", translation: "透明的；显然的", example: "The window glass is clean and transparent." },
        { id: "w3", category: "高中核心词", word: "fascinating", phonetic: "/ˈfæsɪneɪtɪŋ/", translation: "迷人的，极有吸引力的", example: "His story is absolutely fascinating." }
      ];

      // 120句高中英语必背句型
      const RAW_SENTENCES = `Rome was not built in a day.|冰冻三尺非一日之寒。
Actions speak louder than words.|事实胜于雄辩。
It goes without saying that health is wealth.|不言而喻，健康就是财富。
There is no denying that education is important.|毫无疑问，教育非常重要。
I am writing to tell you about my hometown.|我写信是想告诉你关于我的家乡。
I would appreciate it if you could help me.|如果你能帮我，我将不胜感激。
Looking forward to your early reply.|期待你的早日回复。
It is universally acknowledged that trees are vital.|众所周知，树木至关重要。
As far as I am concerned, reading is fun.|在我看来，阅读很有趣。
Only in this way can we solve the problem.|只有通过这种方式我们才能解决问题。
It is high time that we took action.|是我们采取行动的时候了。
The harder you work, the luckier you get.|你越努力，就越幸运。
Every coin has two sides.|凡事都有两面性。
Where there is a will, there is a way.|有志者事竟成。
Failure is the mother of success.|失败乃成功之母。
A friend in need is a friend indeed.|患难见真情。
Practice makes perfect.|熟能生巧。
Time and tide wait for no man.|岁月不等人。
Knowledge is power.|知识就是力量。
Nothing is impossible to a willing heart.|世上无难事，只怕有心人。
It is important for us to protect our environment.|对我们来说保护环境很重要。
I have no choice but to accept his advice.|我除了接受他的建议外别无选择。
To be honest, I don't really agree with you.|老实说，我并不十分同意你的看法。
On one hand, we need money; on the other hand, we need time.|一方面我们需要钱，另一方面我们需要时间。
With the development of technology, our life has changed.|随着科技的发展，我们的生活发生了变化。
Generally speaking, girls are more patient than boys.|一般来说，女生比男生更有耐心。
Under no circumstances should we give up our hope.|在任何情况下我们都不应该放弃希望。
What is more, reading books can expand our horizons.|而且，读书能开阔我们的视野。
Last but not least, we must take care of ourselves.|最后但同样重要地，我们必须照顾好自己。
I look forward to meeting you face to face soon.|我期待不久能与你面对面相见。
It is said that he has gone abroad.|据说他已经出国了。
Not only does he study hard, but he also helps others.|他不仅努力学习，还帮助别人。
So precious is time that we cannot afford to waste it.|时间如此宝贵，我们浪费不起。
Seldom does he go to the cinema.|他很少去看电影。
Little did I know that she was his sister.|我几乎不知道她是他的妹妹。
Hardly had I arrived home when it began to rain.|我刚到家就开始下雨了。
No sooner had she finished the test than the bell rang.|她刚做完试卷铃就响了。
It was not until midnight that he came back.|直到午夜他才回来。
The reason why he was late was that he missed the bus.|他迟到的原因是错过了公交车。
This is the place where we first met.|这是我们第一次见面的地方。
I still remember the day when I came to this school.|我仍然记得我来这所学校的那天。
Do you know the boy whose father is a doctor?|你认识那个父亲是医生的男孩吗？
That is what I want to say.|那就是我想说的。
Whether we will go camping depends on the weather.|我们是否去露营取决于天气。
It seems as if it is going to snow.|看起来好像要下雪了。
He speaks English as fluently as a native speaker.|他英语说得和母语者一样流利。
The more you read, the more you know.|你读得越多，知道得越多。
She is such a lovely girl that everyone likes her.|她是如此可爱的女孩，每个人都喜欢她。
He ran so fast that nobody could catch up with him.|他跑得如此快，没人能追上他。
I would rather stay at home than go out.|我宁愿待在家里也不愿出去。
It is no use crying over spilt milk.|覆水难收，后悔无用。
There is no need to worry about it.|没有必要为此担心。
I cannot help laughing when I hear the joke.|听到这个笑话我忍不住笑了。
He is too young to go to school.|他太小了还不能上学。
She is old enough to look after herself.|她已经够大了，可以照顾自己了。
I find it difficult to learn English well.|我发现学好英语很困难。
We consider it our duty to help the poor.|我们认为帮助穷人是我们的责任。
He made it clear that he would not give in.|他明确表示不会屈服。
I took it for granted that you would come.|我想当然地认为你会来。
It occurred to me that I had left the key at home.|我突然想起我把钥匙忘在家里了。
It matters a lot whether you agree or not.|你是否同意关系重大。
It makes no difference to me.|对我来说没有区别。
It is kind of you to help me with my English.|你帮我学英语真是太好了。
It is necessary that we should learn a second language.|我们有必要学习第二语言。
It is a pity that you missed the party.|你错过了聚会真可惜。
It is reported that the earthquake caused great damage.|据报道，地震造成了巨大损失。
It is likely that he will win the competition.|他很可能赢得比赛。
It happens that I have the book you want.|碰巧我有你想要的那本书。
There is no doubt that he is qualified for the job.|毫无疑问，他胜任这份工作。
There is no point in arguing with him.|和他争论没有意义。
There was a time when I hated going to school.|曾经有一段时间我讨厌上学。
There stands a tall tree in front of the house.|房子前面有一棵大树。
There goes the bell.|铃响了。
Here comes the bus.|公交车来了。
Out rushed the children.|孩子们冲了出来。
Away flew the bird.|鸟飞走了。
Only then did I realize my mistake.|直到那时我才意识到我的错误。
Not a single word did he say.|他一个字也没说。
In front of the house sat a small boy.|房子前面坐着一个小孩。
At the foot of the hill lies a beautiful lake.|山脚下有一个美丽的湖。
On the wall hangs a picture painted by my father.|墙上挂着一幅我父亲画的画。
Between the two buildings stands a monument.|两栋建筑之间矗立着一座纪念碑。
Compared with last year, our income has increased.|与去年相比，我们的收入增加了。
Speaking of travel, have you ever been to Beijing?|说到旅行，你去过北京吗？
Judging from his expression, he is very happy.|从他的表情判断，他很高兴。
Considering his age, he has done a good job.|考虑到他的年龄，他做得很好。
Supposing it rains tomorrow, what shall we do?|假设明天下雨，我们怎么办？
Provided that you work hard, you will succeed.|只要你努力，你就会成功。
Given more time, I could do it better.|如果给我更多时间，我能做得更好。
Absorbed in his work, he forgot his lunch.|全神贯注于工作，他忘了吃午饭。
Tired as he was, he went on working.|虽然很累，他还是继续工作。
Child as he is, he knows a lot.|虽然他是个孩子，但他知道很多。
Much as I like it, I cannot afford it.|虽然我很喜欢，但我买不起。
Try as he might, he could not open the door.|不管他怎么努力，都打不开门。
However hard the task is, we must finish it on time.|不管任务多艰巨，我们必须按时完成。
Whatever you say, I will not change my mind.|不管你说什么，我都不会改变主意。
Whoever breaks the law will be punished.|无论谁违法都将受到惩罚。
Whenever you come, you are welcome.|无论你什么时候来，都受欢迎。
Wherever you go, I will follow you.|无论你去哪里，我都跟着你。
It was in the park that I met him yesterday.|我昨天是在公园遇到他的。
It was yesterday that I met him in the park.|我是昨天在公园遇到他的。
What surprised me most was that he passed the exam.|最令我惊讶的是他通过了考试。
All that glitters is not gold.|发光的不都是金子。
Those who want to go may sign up here.|想去的人可以在这里报名。
Anyone who breaks the rules will be punished.|任何违反规则的人都将受到惩罚。
He is one of the students who have passed the exam.|他是通过考试的学生之一。
He is the only one of the students who has passed the exam.|他是唯一通过考试的学生。
Is this the reason that he explained at the meeting?|这就是他在会上解释的原因吗？
The day will come when everyone lives in peace.|人人和平生活的日子终将到来。
I will never forget the days which we spent together.|我永远不会忘记我们一起度过的日子。
This is the best film that I have ever seen.|这是我看过的最好的电影。
She is no longer the girl that she used to be.|她不再是过去的那个女孩了。
He did not finish his homework, nor did I.|他没有完成作业，我也没有。
I don't think he is right.|我认为他不对。
You must be tired after the long journey.|走了这么远的路你一定累了。
He can't have finished the work so soon.|他不可能这么快就完成了工作。
You should have told me earlier.|你应该早点告诉我。
Need I repeat it?|需要我重复吗？
I dare say he will come on time.|我敢说他会准时来的。
Used he to go swimming in winter?|他过去常在冬天游泳吗？
I wish I were as tall as you.|我希望和你一样高。
If only I had followed your advice.|要是我听了你的建议就好了。
But for your help, I would have failed.|要不是你的帮助，我就失败了。
Without water, there would be no life.|没有水就没有生命。
If I were you, I would accept the offer.|如果我是你，我会接受这个提议。`;

      // 高频固定搭配
      const RAW_PHRASES = `a lot of|许多
abide by|遵守
according to|根据
account for|解释；占…比例
adapt to|适应
add up to|总计达
adjust to|适应；调节
agree on|就…达成一致
agree to|同意（计划/建议）
agree with|同意（某人）；适合
apologize for|为…道歉
appeal to|呼吁；吸引
apply for|申请
apply to|适用于；涂敷
argue with|与…争论
arrive at|到达（小地点）；得出（结论）
arrive in|到达（大地点）
as a result|结果
as a result of|由于
as a matter of fact|事实上
as a rule|通常
as far as|就…而言
as follows|如下
as for|至于
as long as|只要
as soon as|一…就…
as though|好像
as well|也；同样
as well as|以及；和…一样好
associate with|与…联系
attach to|附属于；重视
at a loss|不知所措
at all costs|不惜一切代价
at any rate|无论如何
at first sight|乍一看
at hand|在手边；即将发生
at no time|决不
at once|立刻
at one time|曾经；同时
at present|目前
at the cost of|以…为代价
at the expense of|以…为代价
at the mercy of|受…支配
at the risk of|冒…的危险
back up|支持；后退
be about to|正要
be absorbed in|全神贯注于
be accustomed to|习惯于
be aware of|意识到
be bound for|前往
be bound to|一定会
be concerned about|关心
be determined to|决心
be eager for|渴望
be familiar with|熟悉
be famous for|因…而闻名
be fed up with|厌倦
be fit for|适合
be fond of|喜欢
be grateful to|感激
be guilty of|有罪
be independent of|独立于
be interested in|对…感兴趣
be known as|被称为
be known for|因…而闻名
be likely to|可能
be proud of|为…自豪
be ready for|准备好
be responsible for|对…负责
be satisfied with|对…满意
be short of|缺乏
be sick of|厌倦
be strict with|对…严格
be subject to|受…支配
be supposed to|应该
be sure of|确信
be tired of|厌倦
be used to|习惯于
bear in mind|记住
because of|因为
believe in|信仰；信任
belong to|属于
beyond doubt|毫无疑问
beyond repair|无法修复
blow away|吹走
blow up|爆炸；发脾气
break away from|脱离
break down|崩溃；出故障
break in|闯入；插嘴
break into|闯入
break off|中断；折断
break out|爆发
break through|突破
break up|打碎；分手
bring about|引起；导致
bring down|降低；击落
bring forward|提出；提前
bring in|引进；赚得
bring on|引起；导致
bring out|出版；使显出
bring up|抚养；提出
build up|建立；增强
burn down|烧毁
burst into|突然…起来
but for|要不是
by accident|偶然
by chance|偶然
by means of|借助于
by mistake|错误地
by no means|决不
by the way|顺便说
call at|拜访（某地）
call for|需要；要求
call in|召集；来访
call on|拜访（某人）；号召
call up|打电话；使回忆起
calm down|平静下来
care about|关心
care for|照顾；喜欢
carry away|使入迷
carry on|继续
carry out|执行；实施
catch fire|着火
catch hold of|抓住
catch sight of|看见
catch up with|赶上
change into|变成
check in|登记入住
check out|结账离开
cheer up|振作起来
clear away|清除
clear up|放晴；清理
come about|发生
come across|偶遇
come along|一起来；进展
come down|下降；流传
come into being|形成；产生
come into effect|生效
come into power|上台执政
come off|脱落；举行
come on|快点；加油
come out|出版；出现
come to|共计；苏醒
come to an end|结束
come true|实现
come up|走近；被提出
come up with|想出；提出
compare to|比作
compare with|与…比较
compensate for|补偿
concentrate on|集中注意力于
concerned about|关心
consist of|由…组成
contribute to|有助于；导致
cope with|应付；处理
correspond to|相当于
count on|依靠
cover up|掩盖
cross out|划掉
cut down|削减；砍倒
cut in|插嘴
cut off|切断；中断
cut out|删去；裁剪
cut up|切碎
deal with|处理；对付
decide on|决定
depend on|依赖；取决于
devote to|致力于；献身于
die away|逐渐消失
die down|逐渐减弱
die of|死于（内因）
die out|灭绝
differ from|不同于
dig out|掘出
do away with|废除
do harm to|对…有害
do somebody a favor|帮某人忙
do up|系；修缮
do with|处理；对付
do without|没有…也行
draw a conclusion|得出结论
draw in|（车）进站
draw up|起草；停住
dream of|梦想
dress up|盛装打扮
drop in|顺便拜访
drop off|落下；减少
drop out|退出
due to|由于
each other|互相
earn one's living|谋生
either...or...|要么…要么…
end up|最终成为
engage in|从事
even if|即使
even though|即使
ever since|自从
every other|每隔一个的
except for|除了
face to face|面对面
face up to|勇敢面对
fall asleep|入睡
fall behind|落后
fall ill|生病
fall in love with|爱上
fall off|跌落
fall over|摔倒
far from|远非
feed on|以…为食
feel like|想要
figure out|想出；弄明白
fill in|填写
fill up|装满
find out|查明
first of all|首先
focus on|集中于
for ever|永远
for example|例如
for fear of|生怕
for free|免费
for the sake of|为了…的利益
for the time being|暂时
forget about|忘记
free of charge|免费
from beginning to end|从头到尾
from now on|从现在起
from time to time|偶尔
from then on|从那时起
generally speaking|一般说来
get along with|与…相处
get away|逃脱
get close to|接近
get down to|开始认真做
get hold of|抓住
get in touch with|与…联系
get into the habit of|养成…习惯
get off|下车
get on|上车；进展
get on with|与…相处；继续
get over|克服
get rid of|摆脱；除掉
get through|通过；打通电话
get together|聚集
get used to|习惯于
give away|赠送；泄露
give in|让步；屈服
give off|发出（光/气味）
give out|分发；耗尽
give up|放弃
glance at|瞥一眼
go about|着手做
go against|违背
go ahead|前进；可以
go by|（时间）流逝
go down|下降
go in for|参加；爱好
go off|离开；变质
go on|继续；发生
go out|外出；熄灭
go over|复习；仔细检查
go through|经历；仔细检查
go up|上升
go wrong|出毛病
grow up|成长
had better|最好
hand down|传下来
hand in|上交
hand out|分发
hand over|移交
hang about|闲逛
hang on|坚持；等一下
hang up|挂断电话
happen to|发生在…身上
have access to|有…的机会
have an effect on|对…有影响
have difficulty in|在…有困难
have fun|玩得开心
have nothing to do with|与…无关
have on|穿着
have something to do with|与…有关
head for|前往
hear about|听说
hear from|收到…的来信
hear of|听说
help out|帮助解决困难
here and there|到处
hold back|阻止；隐瞒
hold on|坚持；等一下
hold out|伸出；坚持
hold up|举起；耽搁
hurry up|赶快
in a hurry|匆忙
in a sense|在某种意义上
in a way|在某种程度上
in a word|总之
in addition|此外
in addition to|除…之外还
in advance|提前
in all|总共
in any case|无论如何
in charge of|负责
in common|共有
in danger|在危险中
in debt|负债
in detail|详细地
in fact|事实上
in favor of|支持
in front of|在…前面
in general|一般来说
in honor of|为纪念
in need of|需要
in no case|决不
in no time|立刻
in no way|决不
in order|按顺序
in order that|为了
in order to|为了
in other words|换句话说
in particular|特别地
in place|在适当位置
in place of|代替
in practice|在实践中
in return|作为回报
in search of|寻找
in sight|看得见
in spite of|尽管
in terms of|就…而言
in that case|既然那样
in the course of|在…过程中
in the end|最后
in the event of|如果…发生
in the future|将来
in the long run|从长远看
in the meantime|同时
in the middle of|在…中间
in the name of|以…的名义
in no way|决不
in vain|徒劳
insist on|坚持
instead of|代替
join in|参加
join up|联合起来
judge by|根据…判断
jump the queue|插队
just now|刚才
keep a record of|记录
keep an eye on|照看
keep away|远离
keep back|隐瞒；阻止
keep fit|保持健康
keep in mind|牢记
keep in touch with|与…保持联系
keep off|远离
keep on|继续
keep one's balance|保持平衡
keep one's word|守信用
keep out|不让…进入
keep up|保持；继续
keep up with|跟上
knock at|敲（门）
knock into|撞上
laugh at|嘲笑
lay aside|搁置
lay down|放下；制定
lay off|解雇
lay out|布置；设计
lead a...life|过…生活
lead to|导致
learn about|了解
learn by heart|背诵
learn from|向…学习
leave alone|不打扰
leave for|出发去
leave out|省去；遗漏
let alone|更不用说
let down|使失望
let in|让…进来
let out|放出；泄露
lie down|躺下
lie in|在于
line up|排队
live on|以…为食；靠…生活
live through|度过
look after|照顾
look at|看
look back|回顾
look down upon|看不起
look for|寻找
look forward to|期待
look into|调查
look on|旁观
look out|当心
look through|浏览
look up|查阅；仰望
lose heart|失去信心
lose one's life|丧生
lose one's way|迷路
lose weight|减肥
lots of|许多
make a choice|做出选择
make a decision|做决定
make a difference|有影响
make a face|做鬼脸
make a fool of|愚弄
make a living|谋生
make a mistake|犯错误
make a plan|制定计划
make a promise|许诺
make a speech|演讲
make an effort|努力
make friends with|与…交朋友
make fun of|取笑
make into|制成
make it|成功；及时赶到
make one's way|前进
make out|理解；辨认出
make room for|为…腾出空间
make sense|有意义
make sense of|弄懂…的意思
make sure|确保
make up|编造；化妆；组成
make up for|弥补
make up one's mind|下决心
make use of|利用
manage to|设法做到
meet with|遇到；遭受
more or less|或多或少
neither...nor...|既不…也不…
next door|隔壁
next to|紧挨着
no doubt|毫无疑问
no longer|不再
no more|不再
no more than|仅仅
no sooner...than...|一…就…
none of|没有一个
not at all|根本不
not only...but also...|不但…而且…
now and then|偶尔
now that|既然
object to|反对
of course|当然
of one's own|属于自己的
on account of|因为
on average|平均
on behalf of|代表
on board|在船上/飞机上
on business|出差
on condition that|如果；条件是
on duty|值班
on earth|究竟
on fire|着火
on foot|步行
on guard|警惕
on holiday|在度假
on one's own|独自
on purpose|故意地
on sale|出售
on the basis of|在…基础上
on the contrary|相反
on the other hand|另一方面
on the point of|正要…的时候
on the radio|通过广播
on the whole|总体上
on time|准时
on top of|在…上面
once again|再次
once in a while|偶尔
once more|再一次
once upon a time|从前
one after another|一个接一个
one another|互相
or else|否则
or so|大约
other than|除了
ought to|应该
out of|从…中；缺乏
out of breath|上气不接下气
out of control|失控
out of date|过时
out of order|出故障
out of place|不合适
out of question|毫无疑问
out of the question|不可能
out of reach|够不着
out of sight|看不见
out of work|失业
over and over|一遍又一遍
owe to|归功于
pass away|去世
pass by|经过
pass on|传递
pass through|穿过
pay a visit to|拜访
pay attention to|注意
pay back|偿还
pay for|为…付款
pay off|还清；取得成功
persist in|坚持
pick out|挑选出
pick up|捡起；学会；接人
play a part in|在…中起作用
play a role in|在…中扮演角色
play with|玩弄
point out|指出
point to|指向
pour down|倾盆而下
prefer to|宁愿
prepare for|为…准备
prevent from|阻止
protect from|保护…免受
prove to be|证明是
provide for|供养
provide with|提供
pull down|拆毁
pull in|（车）进站
pull out|拔出；（车）出站
pull through|渡过难关
pull up|停下
push over|推倒
put aside|储存；放在一边
put away|收好
put down|记下；镇压
put forward|提出
put in|插入；投入
put into|把…放入
put off|推迟
put on|穿上；上演
put out|扑灭
put through|接通电话
put together|组装
put up|举起；张贴；留宿
put up with|忍受
qualify for|有资格
quite a few|相当多
rather than|而不是
reach out|伸出
react to|对…反应
refer to|参考；指的是
regard as|把…看作
rely on|依赖；依靠
remind of|提醒
result from|由…导致
result in|导致
return to|回到
ring back|回电话
ring off|挂断电话
ring up|打电话
rob of|抢劫
roll over|翻滚
round the corner|即将来临
run across|偶遇
run away|逃跑
run into|撞上；偶遇
run out of|用完
run over|碾过
rush hour|高峰时间
satisfy with|对…满意
save one's life|救某人的命
save up|储蓄
say hello to|向…问好
see about|处理
see off|送行
see through|看穿
see to|照料；处理
seek for|寻找
send for|派人去请
send off|寄出；送行
send out|发出
send up|发射
separate from|与…分离
set about|开始做
set an example|树立榜样
set aside|留出；搁置
set down|记下
set fire to|放火烧
set free|释放
set off|出发；引爆
set out|出发；着手
set up|建立；设立
settle down|定居；安静下来
show around|带领参观
show off|炫耀
show up|出现
shut down|关闭
shut off|切断
shut up|闭嘴
side by side|肩并肩
sit up|熬夜
slow down|减速
so as to|以便
so far|到目前为止
so far as|就…而言
so long as|只要
so that|以便；结果
sooner or later|迟早
sort out|整理出
speed up|加速
stand by|支持；袖手旁观
stand for|代表
stand out|突出
stand up|起立
stand up for|支持；维护
stare at|凝视
start off|出发
start out|出发
stay up|熬夜
step by step|逐步
stick to|坚持
stick together|团结在一起
stop from|阻止
straight away|立刻
struggle against|与…斗争
struggle for|为…而斗争
such as|例如
suffer from|遭受
sum up|总结
switch off|关掉
switch on|打开
take a chance|碰运气
take a look|看一看
take a walk|散步
take advantage of|利用
take after|像（父母）
take apart|拆开
take away|拿走
take care|当心
take care of|照顾
take charge|负责
take delight in|以…为乐
take down|记下；拆卸
take effect|生效
take for granted|认为…理所当然
take hold of|抓住
take in|吸收；欺骗
take into account|考虑到
take it easy|别紧张
take measures|采取措施
take notice of|注意到
take off|脱下；起飞
take on|承担；雇佣
take one's place|代替
take one's time|慢慢来
take over|接管
take part in|参加
take place|发生
take pride in|以…为傲
take the place of|代替
take trouble|费心
take up|开始从事；占据
take up arms|拿起武器
talk about|谈论
talk of|谈到
talk over|商量
tear down|拆毁
tear up|撕碎
tell apart|区分
tell the truth|说实话
tend to|倾向于
thanks to|多亏
the moment|一…就…
the number of|…的数量
the other day|前几天
think about|考虑
think aloud|自言自语
think highly of|高度评价
think of|想起；认为
think of...as|把…看作
think over|仔细考虑
think up|想出
throw away|扔掉
throw light on|阐明
throw off|匆忙脱下
tie up|绑好
to be honest|老实说
to one's astonishment|令某人惊讶的是
to one's joy|令某人高兴的是
to one's surprise|令某人吃惊的是
to the point|切题
touch on|涉及
touch up|润色
translate into|翻译成
treat as|把…当作
try on|试穿
try one's best|尽力
try out|试验
turn away|转过脸
turn down|拒绝；调低
turn in|上交
turn into|变成
turn off|关掉
turn on|打开
turn out|结果是；证明是
turn over|翻转
turn to|求助于
turn up|出现；调高
under construction|在建设中
under discussion|在讨论中
under repair|在修理中
up and down|上上下下
up to|多达；胜任
up to date|最新的
use up|用完
used to|过去常常
wait for|等待
wait on|伺候
wake up|醒来
walk away|走开
walk off|走开
wash away|冲走
wash up|洗餐具
watch out|当心
watch over|看守
wear away|磨损
wear out|穿破；使疲惫
welcome to|欢迎来到
what about|…怎么样
what is more|而且
whether...or...|是…还是…
wipe out|彻底摧毁；消灭
wish for|渴望
with the help of|在…的帮助下
with regard to|关于
within reach|够得着
wonder about|对…好奇
work at|从事于
work on|继续工作
work out|算出；锻炼
work out at|总计达
worry about|担心
would rather|宁愿
would rather...than...|宁愿…而不…
wrap up|包好
write down|写下
write out|写出
write to|写信给
year after year|年复一年
year by year|逐年`;

      const state = {
        vocab: [], phrases: [], sentences: [], progress: {},
        view: "dashboard", mode: "review", queue: [], qIndex: 0,
        isFlipped: false, filterText: "", filterCat: "all",
        dailyLimit: 10, toastTid: null, bookLayout: "grid", lastViewedWordId: null,
        lastBookPosition: { wordId: null, category: 'all', filterText: '', timestamp: 0 },
        dictQueue: [], dictIndex: 0, dictMode: 'zh2en', isShowingHint: false,
        streak: { count: 0, lastStudyDate: null, bestStreak: 0 }
      };

      const els = {
        htmlRoot: document.getElementById('htmlRoot'),
        views: {
          dashboard: document.getElementById('dashboardView'),
          settings: document.getElementById('settingsView'),
          dictSetup: document.getElementById('dictSetupView'),
          book: document.getElementById('bookView'),
          card: document.getElementById('cardView'),
          dictation: document.getElementById('dictationView')
        },
        themeBtn: document.getElementById('themeToggle'), sunIcon: document.querySelector('.sun-icon'), moonIcon: document.querySelector('.moon-icon'),
        dailyLimitSelect: document.getElementById('dailyLimitSelect'), dailyLimitInput: document.getElementById('dailyLimitInput'),
        dueCount: document.getElementById('dueCount'), newCount: document.getElementById('newCount'), totalCount: document.getElementById('totalCount'),
        bookGrid: document.getElementById('bookGrid'), searchInput: document.getElementById('searchInput'), categoryFilter: document.getElementById('categoryFilter'),
        layoutToggleBtn: document.getElementById('layoutToggleBtn'), listIcon: document.querySelector('.list-icon'), gridIcon: document.querySelector('.grid-icon'),
        flashcard: document.getElementById('flashcard'), fcWord: document.getElementById('fcWord'), fcPhonetic: document.getElementById('fcPhonetic'),
        fcFrontTrans: document.getElementById('fcFrontTrans'), fcTrans: document.getElementById('fcTrans'), fcExample: document.getElementById('fcExample'),
        revealBtn: document.getElementById('revealBtn'), revealText: document.getElementById('revealText'), sessionTitle: document.getElementById('sessionTitle'),
        bookNavGroup: document.getElementById('bookNavGroup'), feedbackBar: document.getElementById('feedbackBar'),
        dictModeSelectCfg: document.getElementById('dictModeSelectCfg'), dictLimitSelectCfg: document.getElementById('dictLimitSelectCfg'),
        dictPrompt: document.getElementById('dictPrompt'), dictSlots: document.getElementById('dictSlots'), dictInput: document.getElementById('dictInput'),
        dictHintBtn: document.getElementById('dictHintBtn'), dictFavBtn: document.getElementById('dictFavBtn'), dictProgress: document.getElementById('dictProgress'),
        toast: document.getElementById('toast')
      };

      let audioCtx;
      function initAudio() {
        if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if(audioCtx.state === 'suspended') audioCtx.resume();
      }
      document.addEventListener('click', initAudio, {once: true});
      document.addEventListener('touchstart', initAudio, {once: true});

      // 物理合成：清脆、具有塑料碰撞感的青轴物理键盘声
      function playTypeSound() {
        if(!audioCtx || audioCtx.state !== 'running') return;
        const duration = 0.03;
        
        // 噪声组件 (高频键帽敲击声)
        const bufferSize = Math.floor(audioCtx.sampleRate * duration);
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass'; filter.frequency.value = 4200; filter.Q.value = 3.0;
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.22, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + duration);

        // 触底振动音 (微小的中低频碰撞声)
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();
        osc.type = 'sine'; osc.frequency.setValueAtTime(180, audioCtx.currentTime);
        oscGain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);

        noise.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
        osc.connect(oscGain); oscGain.connect(audioCtx.destination);

        noise.start();
        osc.start(); osc.stop(audioCtx.currentTime + 0.03);
      }

      function playErrorSound() {
        if(!audioCtx || audioCtx.state !== 'running') return;
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(120, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.25, audioCtx.currentTime); gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + 0.15);
      }

      function playSuccessSound() {
        if(!audioCtx || audioCtx.state !== 'running') return;
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.type = 'sine'; osc.frequency.setValueAtTime(520, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1040, audioCtx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime); gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.22);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + 0.22);
      }

      function playWordAudio(wordStr) {
        if (!('speechSynthesis' in window)) return;
        const u = new SpeechSynthesisUtterance(wordStr); u.lang = 'en-US'; speechSynthesis.speak(u);
      }

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
      }

      function parseRawData(rawStr, catName, prefix) {
         let arr = [];
         let lines = rawStr.split('\n');
         lines.forEach((line, i) => {
            let parts = line.split('|');
            if(parts.length === 2 && parts[0].trim() !== '') {
               arr.push({ word: parts[0].trim(), translation: parts[1].trim(), category: catName, id: prefix + '_' + i });
            }
         });
         return arr;
      }

      function startDictSession() {
         const mode = els.dictModeSelectCfg.value;
         const limit = parseInt(els.dictLimitSelectCfg.value);
         
         let pool = [];
         if (mode === 'phrase') pool = [...state.phrases];
         else if (mode === 'sentence') pool = [...state.sentences];
         else pool = [...state.vocab];

         if(pool.length === 0) { showToast("暂无数据可供训练"); return; }

         shuffleArray(pool);
         state.dictQueue = pool.slice(0, Math.min(limit, pool.length)).map(item => ({...item, failedThisRound: false}));
         state.dictIndex = 0;
         state.dictMode = mode;

         navTo('dictation');
         renderDictationItem();
         setTimeout(() => els.dictInput.focus(), 300);
      }

      function renderDictationItem() {
         const current = state.dictQueue[state.dictIndex];
         els.dictInput.value = '';
         state.isShowingHint = false;
         els.dictProgress.textContent = `默写任务: ${state.dictIndex + 1} / ${state.dictQueue.length}`;
         
         updateDictHintBtnUI();
         updateFavBtnUI();
         setDictPromptMode();
         
         els.dictSlots.innerHTML = '';
         const target = (state.dictMode === 'en2zh') ? current.translation : current.word;
         
         for(let char of target) {
            const el = document.createElement('div');
            let isSpace = char === ' ';
            let isPunct = /[-'`,;.?!()（），；]/.test(char);
            el.className = isSpace ? 'dict-slot space' : (isPunct ? 'dict-slot dash' : 'dict-slot');
            el.textContent = isPunct ? char : '';
            els.dictSlots.appendChild(el);
         }
         updateCursor();
      }

      function setDictPromptMode() {
         const current = state.dictQueue[state.dictIndex];
         if (!current) return;
         if (state.dictMode === 'zh2en' || state.dictMode === 'phrase' || state.dictMode === 'sentence') {
             els.dictPrompt.innerHTML = current.translation;
         } else {
             els.dictPrompt.innerHTML = current.word;
         }
      }

      function updateCursor() {
          const slots = els.dictSlots.children;
          for (let i = 0; i < slots.length; i++) slots[i].classList.remove('cursor-active');
          if (document.activeElement === els.dictInput) {
              const valLen = els.dictInput.value.length;
              if (slots[valLen]) slots[valLen].classList.add('cursor-active');
          }
      }

      function updateDictHintBtnUI() {
          if (state.isShowingHint) els.dictHintBtn.innerHTML = `隐藏 (Ctrl)`;
          else els.dictHintBtn.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> 提示 (Ctrl)`;
      }

      function updateFavBtnUI() {
          const w = state.dictQueue[state.dictIndex];
          if(!w) return;
          const p = state.progress[w.id] || {};
          if(p.isFav) {
              els.dictFavBtn.innerHTML = `⭐ 已收藏`; els.dictFavBtn.style.color = '#f59e0b'; els.dictFavBtn.style.borderColor = '#f59e0b';
          } else {
              els.dictFavBtn.innerHTML = `记入生词 (Shift+X)`; els.dictFavBtn.style.color = 'var(--text)'; els.dictFavBtn.style.borderColor = 'var(--line)';
          }
      }

      function bindEvents() {
        document.getElementById('brandHome').onclick = () => navTo('dashboard');
        document.getElementById('startReviewBtn').onclick = startReview;
        document.getElementById('gotoDictSetupBtn').onclick = () => navTo('dictSetup');
        document.getElementById('settingsBtn').onclick = () => navTo('settings');
        document.getElementById('settingsBackBtn').onclick = () => navTo('dashboard');
        document.getElementById('dictSetupBackBtn').onclick = () => navTo('dashboard');
        document.getElementById('openBookBtn').onclick = () => navTo('book');
        
        document.getElementById('cardBackBtn').onclick = () => navTo(state.mode === 'book' ? 'book' : 'dashboard');
        document.getElementById('bookBackToHomeBtn').onclick = () => navTo('dashboard');
        document.getElementById('dictBackBtn').onclick = () => navTo('dictSetup');
        
        els.themeBtn.onclick = toggleTheme;
        els.layoutToggleBtn.onclick = toggleBookLayout; 

        const updateDailyLimit = (val) => {
          let limit = parseInt(val);
          if (!isNaN(limit) && limit > 0) {
            state.dailyLimit = limit;
            saveData();
            renderDashboard();
          }
        };

        els.dailyLimitSelect.onchange = (e) => {
          if (e.target.value === 'custom') {
            els.dailyLimitInput.style.display = 'inline-block';
            els.dailyLimitInput.focus();
          } else {
            els.dailyLimitInput.style.display = 'none';
            updateDailyLimit(e.target.value);
          }
        };
        els.dailyLimitInput.onchange = (e) => updateDailyLimit(e.target.value);
        els.dailyLimitInput.onblur = (e) => updateDailyLimit(e.target.value);

        els.searchInput.oninput = (e) => { state.filterText = e.target.value.trim().toLowerCase(); renderBook(); };
        els.categoryFilter.onchange = (e) => { state.filterCat = e.target.value; renderBook(); };

        document.getElementById('startDictBtn').onclick = startDictSession;

        els.dictInput.addEventListener('focus', updateCursor);
        els.dictInput.addEventListener('blur', updateCursor);

        els.dictInput.addEventListener('input', (e) => {
            const current = state.dictQueue[state.dictIndex];
            if(!current) return;
            const target = (state.dictMode === 'en2zh') ? current.translation : current.word;
            
            let val = e.target.value;
            if (val.length > target.length) { val = val.slice(0, target.length); e.target.value = val; }
            playTypeSound(); 
            els.dictSlots.classList.remove('shake-wrapper'); 
            
            const slots = els.dictSlots.children;
            for (let i = 0; i < target.length; i++) {
                if (!slots[i]) continue;
                let isSpace = target[i] === ' ';
                let isPunct = /[-'`,;.?!()（），；]/.test(target[i]);
                slots[i].classList.remove('correct', 'wrong');
                if (i < val.length) {
                    if (isSpace) slots[i].textContent = val[i] === ' ' ? '' : val[i];
                    else if (isPunct) slots[i].textContent = val[i] === target[i] ? target[i] : val[i];
                    else slots[i].textContent = val[i];
                } else {
                    slots[i].textContent = isPunct ? target[i] : '';
                }
            }
            updateCursor();
        });

        els.dictInput.addEventListener('keydown', (e) => {
            const current = state.dictQueue[state.dictIndex];
            if(!current) return;
            const target = (state.dictMode === 'en2zh') ? current.translation : current.word;
            const val = els.dictInput.value;
            
            if (e.key === 'Backspace') { playTypeSound(); }
            
            if (e.key === 'Enter') {
                e.preventDefault();
                if (val.toLowerCase() === target.toLowerCase()) {
                    els.dictInput.blur(); playSuccessSound(); 
                    const slots = els.dictSlots.children;
                    for(let i=0; i<target.length; i++) { if(slots[i]) slots[i].classList.add('correct'); }
                    setTimeout(() => {
                        state.dictIndex++;
                        if(state.dictIndex >= state.dictQueue.length) { updateStreak(); showToast("太棒了！本轮任务全部过关 🎉"); navTo('dashboard'); }
                        else renderDictationItem();
                    }, 1000);
                } else {
                    playErrorSound();
                    els.dictSlots.classList.remove('shake-wrapper');
                    void els.dictSlots.offsetWidth; 
                    els.dictSlots.classList.add('shake-wrapper');
                    
                    const slots = els.dictSlots.children;
                    for(let i=0; i<target.length; i++) {
                        if (slots[i] && val[i] && val[i].toLowerCase() !== target[i].toLowerCase()) slots[i].classList.add('wrong');
                    }
                    if (!current.failedThisRound) {
                        current.failedThisRound = true;
                        state.dictQueue.push({...current, failedThisRound: false});
                        els.dictProgress.textContent = `默写任务: ${state.dictIndex + 1} / ${state.dictQueue.length}`;
                    }
                }
            }
            if (e.altKey) { e.preventDefault(); document.getElementById('dictAudioBtn').click(); }
            if (e.ctrlKey) { e.preventDefault(); els.dictHintBtn.click(); }
        });

        document.getElementById('dictAudioBtn').onclick = () => playWordAudio(state.dictQueue[state.dictIndex].word);
        
        els.dictHintBtn.onclick = () => {
           const current = state.dictQueue[state.dictIndex];
           if(!current) return;
           state.isShowingHint = !state.isShowingHint;
           if(state.isShowingHint) {
               const answer = (state.dictMode === 'en2zh') ? current.translation : current.word;
               els.dictPrompt.innerHTML = `<span style="color:var(--accent);">${answer}</span> <br> <span style="font-size:1.1rem; color:var(--muted);">${state.dictMode === 'en2zh' ? current.word : current.translation}</span>`;
           } else setDictPromptMode();
           updateDictHintBtnUI();
        };

        els.dictFavBtn.onclick = () => {
           const w = state.dictQueue[state.dictIndex];
           if(!w) return;
           if(!state.progress[w.id]) state.progress[w.id] = { ef: 2.5, interval: 0, reps: 0 };
           const p = state.progress[w.id];
           p.isFav = !p.isFav;
           saveData(); updateFavBtnUI(); updateCategoryFilter();
           showToast(p.isFav ? "已加入生词本" : "已移出生词本");
        };

        els.revealBtn.onclick = () => { if (state.mode === 'review') toggleFlip(); };
        els.flashcard.onclick = () => { if (state.mode === 'review') toggleFlip(); };
        document.getElementById('audioBtn').onclick = (e) => { e.stopPropagation(); playAudio(); };
        
        document.getElementById('prevWordBtn').onclick = () => { if(state.qIndex > 0) { state.qIndex--; triggerSlideAnimation(()=>renderCard()); }};
        document.getElementById('nextWordBtn').onclick = () => { if(state.qIndex < state.queue.length-1) { state.qIndex++; triggerSlideAnimation(()=>renderCard()); }};

        document.querySelectorAll('.feedback-btn').forEach(btn => {
          btn.onclick = () => processReview(btn.dataset.rating);
        });

        document.addEventListener('keydown', (e) => {
          if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
          if (state.view === 'dictation') {
              if (e.altKey) { e.preventDefault(); document.getElementById('dictAudioBtn').click(); }
              if (e.ctrlKey) { e.preventDefault(); els.dictHintBtn.click(); }
              if (e.shiftKey && e.key.toLowerCase() === 'x') { e.preventDefault(); els.dictFavBtn.click(); }
          }
          if (state.view === 'card') {
             if (state.mode === 'review') {
                if (e.code === 'Digit1' || e.code === 'Numpad1') processReview('forget');
                if (e.code === 'Digit2' || e.code === 'Numpad2') processReview('fuzzy');
                if (e.code === 'Digit3' || e.code === 'Numpad3') processReview('familiar');
                if (e.ctrlKey) { e.preventDefault(); toggleFlip(); }
             } else if (state.mode === 'book') {
                if (e.code === 'ArrowLeft') document.getElementById('prevWordBtn').click();
                if (e.code === 'ArrowRight') document.getElementById('nextWordBtn').click();
             }
          }
        });

        // 手机滑动翻页
        let touchStartX = 0;
        els.flashcard.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
        els.flashcard.addEventListener('touchend', e => {
          let touchEndX = e.changedTouches[0].screenX;
          if (state.mode === 'book') { 
            if (touchEndX < touchStartX - 50) document.getElementById('nextWordBtn').click(); 
            if (touchEndX > touchStartX + 50) document.getElementById('prevWordBtn').click(); 
          }
        }, {passive: true});

        document.getElementById('importBtn').onclick = () => document.getElementById('importFile').click();
        document.getElementById('exportBtn').onclick = exportData;
        document.getElementById('importFile').onchange = handleImport;
        document.getElementById('resetProgressBtn').onclick = () => {
          if (confirm('确定要重置所有复习进度吗？此操作不可撤销！')) {
            state.progress = {};
            saveData(); renderDashboard(); updateCategoryFilter();
            showToast('已重置全部复习进度');
          }
        };
        // 自动发音开关
        const autoPlayToggle = document.getElementById('autoPlayToggle');
        const savedAutoPlay = localStorage.getItem('focusword-autoplay');
        if (savedAutoPlay !== null) autoPlayToggle.checked = savedAutoPlay === 'true';
        autoPlayToggle.onchange = () => {
          localStorage.setItem('focusword-autoplay', autoPlayToggle.checked);
          showToast(autoPlayToggle.checked ? '已开启自动发音' : '已关闭自动发音');
        };
        // 复习提醒开关
        const notifToggle = document.getElementById('notifToggle');
        const savedNotif = localStorage.getItem('focusword-notif');
        if (savedNotif !== null) notifToggle.checked = savedNotif === 'true';
        notifToggle.onchange = () => {
          localStorage.setItem('focusword-notif', notifToggle.checked);
          if (notifToggle.checked && 'Notification' in window) {
            Notification.requestPermission();
          }
          showToast(notifToggle.checked ? '已开启复习提醒' : '已关闭复习提醒');
        };
        // 学习连续性提醒开关
        const streakNotifToggle = document.getElementById('streakNotifToggle');
        const savedStreakNotif = localStorage.getItem('focusword-streak-notif');
        if (savedStreakNotif !== null) streakNotifToggle.checked = savedStreakNotif === 'true';
        streakNotifToggle.onchange = () => {
          localStorage.setItem('focusword-streak-notif', streakNotifToggle.checked);
          if (streakNotifToggle.checked && 'Notification' in window) {
            Notification.requestPermission();
          }
          showToast(streakNotifToggle.checked ? '已开启连续性提醒' : '已关闭连续性提醒');
        };
        // 特效自动轮换开关
        const fxAutoRotate = document.getElementById('fxAutoRotate');
        fxAutoRotate.onchange = () => {
          localStorage.setItem('focusword-fx-auto', fxAutoRotate.checked);
          if (fxAutoRotate.checked) { FX.startAutoRotate(); showToast('已开启特效自动轮换'); }
          else { FX.stopAutoRotate(); showToast('已关闭特效自动轮换'); }
        };
      }

      function triggerSlideAnimation(callback) {
        els.flashcard.classList.remove('slide-page-transition');
        void els.flashcard.offsetWidth; 
        callback();
        els.flashcard.classList.add('slide-page-transition');
      }

      function toggleTheme() {
        const themes = ['dark', 'light', 'glass', 'sakura', 'aurora', 'sunset', 'ink'];
        const current = getCurrentTheme();
        const idx = themes.indexOf(current);
        const next = themes[(idx + 1) % themes.length];
        applyTheme(next);
      }

      function getCurrentTheme() {
        const modes = ['sakura-mode', 'aurora-mode', 'sunset-mode', 'ink-mode', 'glass-mode', 'light-mode'];
        for (const m of modes) {
          if (els.htmlRoot.classList.contains(m)) return m.replace('-mode', '');
        }
        return 'dark';
      }

      function applyTheme(theme) {
        els.htmlRoot.classList.remove('light-mode', 'glass-mode', 'sakura-mode', 'aurora-mode', 'sunset-mode', 'ink-mode');
        if (theme !== 'dark') els.htmlRoot.classList.add(theme + '-mode');
        localStorage.setItem('focusword-theme', theme);
        updateThemeUI();
        updateSettingsThemeCards();
      }

      function updateThemeUI() {
        const theme = getCurrentTheme();
        // 主题切换按钮：dark显示月亮，light/glass显示太阳
        els.sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
        els.moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
      }

      function updateSettingsThemeCards() {
        const theme = getCurrentTheme();
        document.querySelectorAll('.apple-theme-option').forEach(card => {
          card.classList.toggle('active', card.dataset.theme === theme);
        });
      }

      window.switchTheme = function(theme) {
        applyTheme(theme);
      };

      function navTo(viewName) {
        state.view = viewName;
        Object.values(els.views).forEach(el => el.classList.remove('active'));
        els.views[viewName].classList.add('active');
        if (viewName === 'dashboard') { renderDashboard(); }
        if (viewName === 'settings') { updateSettingsThemeCards(); }
        if (viewName === 'book') {
          state.mode = 'book';
          // 恢复上次浏览位置
          const bp = state.lastBookPosition;
          if (bp && bp.wordId) {
            state.filterCat = bp.category || 'all';
            state.filterText = bp.filterText || '';
            els.categoryFilter.value = state.filterCat;
            els.searchInput.value = state.filterText;
          }
          renderBook();
          // 渲染后滚动到上次位置
          if (bp && bp.wordId) {
            requestAnimationFrame(() => {
              const target = document.getElementById('word-' + bp.wordId);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            });
          }
        }
      }

      function toggleBookLayout() {
        state.bookLayout = state.bookLayout === 'grid' ? 'list' : 'grid';
        saveData();
        renderBook();
        updateLayoutUI();
      }

      function updateLayoutUI() {
        const isList = state.bookLayout === 'list';
        els.listIcon.style.display = isList ? 'none' : 'block';
        els.gridIcon.style.display = isList ? 'block' : 'none';
        if (isList) els.bookGrid.classList.add('layout-list');
        else els.bookGrid.classList.remove('layout-list');
      }

      /* ===== 连续学习天数 ===== */
      function getDateStr(ts) {
        const d = new Date(ts);
        return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      }

      function updateStreak() {
        const today = getDateStr(Date.now());
        const yesterday = getDateStr(Date.now() - 86400000);
        if (state.streak.lastStudyDate === today) return; // 今天已记录
        if (state.streak.lastStudyDate === yesterday) {
          state.streak.count++;
        } else if (state.streak.lastStudyDate !== today) {
          state.streak.count = 1; // 断签，重新开始
        }
        state.streak.lastStudyDate = today;
        if (state.streak.count > state.streak.bestStreak) state.streak.bestStreak = state.streak.count;
        renderStreak();
      }

      function checkStreakOnLoad() {
        const today = getDateStr(Date.now());
        const yesterday = getDateStr(Date.now() - 86400000);
        if (state.streak.lastStudyDate && state.streak.lastStudyDate !== today && state.streak.lastStudyDate !== yesterday) {
          // 断签了
          state.streak.count = 0;
          state.streak.lastStudyDate = null;
        }
        renderStreak();
      }

      function renderStreak() {
        const countEl = document.getElementById('streakCount');
        const bestEl = document.getElementById('bestStreak');
        const weekEl = document.getElementById('streakWeek');
        if (!countEl) return;

        countEl.textContent = state.streak.count;
        bestEl.textContent = state.streak.bestStreak;

        // 渲染最近7天圆点
        const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
        const today = getDateStr(Date.now());
        let html = '';
        for (let i = 6; i >= 0; i--) {
          const d = new Date(Date.now() - i * 86400000);
          const dateStr = getDateStr(d.getTime());
          const isToday = dateStr === today;
          const isActive = state.streak.lastStudyDate && (
            dateStr === state.streak.lastStudyDate ||
            (isToday && state.streak.lastStudyDate === today)
          );
          // 检查该天是否有学习记录（通过连续天数推算）
          const daysAgo = Math.floor((Date.now() - d.getTime()) / 86400000);
          const studied = state.streak.count > 0 && daysAgo < state.streak.count && (state.streak.lastStudyDate === today || daysAgo <= state.streak.count - 1);
          const dotClass = isToday ? 'today' : (studied ? 'active' : '');
          html += `<div class="streak-day"><div class="streak-day-dot ${dotClass}"></div><span class="streak-day-label">${dayNames[d.getDay()]}</span></div>`;
        }
        weekEl.innerHTML = html;
      }

      function renderDashboard() {
        const endOfToday = new Date().setHours(23, 59, 59, 999);
        const now = Date.now();
        let dueCount = 0;
        let freshCount = 0;
        let masteredCount = 0;
        let todayReviewed = 0;

        state.vocab.forEach(w => {
          const prog = state.progress[w.id];
          if (!prog) freshCount++;
          else if (prog.dueAt <= endOfToday) dueCount++;
          else if (prog.reps >= 3 && prog.ef >= 2.0) masteredCount++;
          if (prog && prog.lastReview && prog.lastReview >= new Date().setHours(0,0,0,0)) todayReviewed++;
        });

        const actualNewCount = Math.min(freshCount, state.dailyLimit);

        els.dueCount.textContent = dueCount;
        els.newCount.textContent = actualNewCount;
        els.totalCount.textContent = state.vocab.length;

        // 更新统计卡片显示更多信息
        const statCards = document.querySelectorAll('.stat-card');
        if (statCards.length >= 3) {
          statCards[0].querySelector('span').textContent = '待复习';
          statCards[1].querySelector('span').textContent = '今日新词';
          statCards[2].querySelector('span').textContent = '总词汇';
        }
      }

      function updateCategoryFilter() {
        const cats = new Set(state.vocab.map(w => w.category).filter(Boolean));
        const currentVal = els.categoryFilter.value;
        let optionsHtml = `<option value="all">全部分类</option><option value="FAV" style="color:var(--accent); font-weight:bold;">⭐ 我的生词本</option>`;
        Array.from(cats).sort().forEach(cat => { optionsHtml += `<option value="${cat}">${cat}</option>`; });
        els.categoryFilter.innerHTML = optionsHtml;
        if (currentVal === 'all' || currentVal === 'FAV' || cats.has(currentVal)) els.categoryFilter.value = currentVal;
        else { els.categoryFilter.value = 'all'; state.filterCat = 'all'; }
      }

      function renderBook() {
        let filtered = state.vocab;
        if (state.filterCat === 'FAV') filtered = filtered.filter(w => state.progress[w.id] && state.progress[w.id].isFav);
        else if (state.filterCat !== 'all') filtered = filtered.filter(w => w.category === state.filterCat);
        
        if (state.filterText) filtered = filtered.filter(w => w.word.toLowerCase().includes(state.filterText) || w.translation.includes(state.filterText));

        els.bookGrid.innerHTML = filtered.length === 0 
          ? `<div style="grid-column:1/-1; padding:40px; text-align:center; color:var(--muted)">没有匹配的单词</div>`
          : filtered.map((w, idx) => {
              const p = state.progress[w.id];
              let statStr = 'New';
              let statClass = '';
              if (p) {
                if (p.reps >= 5 && p.ef >= 2.5) { statStr = '已掌握'; statClass = ''; }
                else if (p.dueAt <= Date.now()) { statStr = `需复习 · ${p.interval}d`; statClass = 'due'; }
                else { statStr = `EF ${p.ef.toFixed(1)} · ${p.interval}d`; }
              }
              const isLastViewed = w.id === state.lastViewedWordId ? 'last-viewed' : '';
              return `
                <div id="word-${w.id}" class="word-card ${isLastViewed}" onclick="window.openBookCard('${w.id}')">
                  <div class="word-card-content"><strong>${w.word}</strong><span>${w.translation}</span></div>
                  <div class="word-card-meta">${w.category ? `<span class="cat">${w.category}</span>` : ''} <span class="status-tag ${statClass}">${statStr}</span></div>
                </div>`;
            }).join('');
      }

      window.openBookCard = function(id) {
        let filtered = state.vocab;
        if (state.filterCat === 'FAV') filtered = filtered.filter(w => state.progress[w.id] && state.progress[w.id].isFav);
        else if (state.filterCat !== 'all') filtered = filtered.filter(w => w.category === state.filterCat);
        if (state.filterText) filtered = filtered.filter(w => w.word.toLowerCase().includes(state.filterText) || w.translation.includes(state.filterText));
        
        // 保存浏览位置
        state.lastBookPosition = { wordId: id, category: state.filterCat, filterText: state.filterText, timestamp: Date.now() };
        saveData();

        state.queue = filtered.map(w=>w.id);
        state.qIndex = state.queue.indexOf(id);
        if(state.qIndex === -1) state.qIndex = 0; 
        state.mode = 'book'; navTo('card'); triggerSlideAnimation(()=>renderCard());
      };

      function renderCard() {
        const id = state.queue[state.qIndex];
        const word = state.vocab.find(w => w.id === id);
        if (!word) return;
        state.isFlipped = false;
        els.flashcard.classList.remove('is-flipped');
        
        els.fcWord.textContent = word.word;
        els.fcPhonetic.textContent = word.phonetic || '';
        els.fcTrans.textContent = word.translation;
        els.fcExample.textContent = word.example || '';
        els.fcFrontTrans.textContent = word.translation;
        updateFlipUI();

        if (state.mode === 'review') {
          els.bookNavGroup.style.display = 'none';
          els.feedbackBar.style.display = 'grid'; 
          els.fcFrontTrans.style.display = 'none'; 
          els.revealBtn.style.display = 'flex';
          els.sessionTitle.textContent = `智能复习 · 剩余 ${state.queue.length - state.qIndex} 个`;
        } else {
          els.bookNavGroup.style.display = 'flex';
          els.feedbackBar.style.display = 'none'; 
          els.fcFrontTrans.style.display = 'block'; 
          els.revealBtn.style.display = 'none'; 
          els.sessionTitle.textContent = `词汇浏览 · ${state.qIndex + 1} / ${state.queue.length}`;
          state.lastViewedWordId = id;
          state.lastBookPosition = { wordId: id, category: state.filterCat, filterText: state.filterText, timestamp: Date.now() };
          saveData();
        }
        // 自动发音
        const autoPlay = document.getElementById('autoPlayToggle');
        if (autoPlay && autoPlay.checked) {
          setTimeout(() => playWordAudio(word.word), 300);
        }
      }

      function toggleFlip() {
        state.isFlipped = !state.isFlipped;
        els.flashcard.classList.toggle('is-flipped', state.isFlipped);
        updateFlipUI();
      }
      
      function updateFlipUI() {
        if(state.isFlipped) {
          els.revealText.textContent = "翻回 (Ctrl)";
          els.revealBtn.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg><span id="revealText">翻回 (Ctrl)</span>`;
        } else {
          els.revealBtn.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg><span id="revealText">释义 (Ctrl)</span>`;
        }
      }

      function playAudio() {
        const id = state.queue[state.qIndex];
        const w = state.vocab.find(item => item.id === id);
        if(w) playWordAudio(w.word);
      }

      function startReview() {
        const q = buildQueue();
        if (q.length === 0) { showToast("今日没有需要复习或学习的单词啦！"); return; }
        state.queue = q.map(w => w.id);
        state.qIndex = 0;
        state.mode = 'review';
        navTo('card');
        renderCard();
      }

      function buildQueue() {
        const endOfToday = new Date().setHours(23, 59, 59, 999);
        const now = Date.now();
        let due = [];
        let fresh = [];

        state.vocab.forEach(w => {
          const p = state.progress[w.id];
          if (!p) fresh.push(w);
          else if (p.dueAt <= endOfToday) due.push(w);
        });

        // 优先复习最紧急的词：按到期时间升序（越早到期越先复习）
        // 同一天到期的，按EF升序排（EF越低说明越难记，越应先复习）
        due.sort((a, b) => {
          const pa = state.progress[a.id], pb = state.progress[b.id];
          const urgencyA = Math.max(0, now - pa.dueAt); // 超期越久越紧急
          const urgencyB = Math.max(0, now - pb.dueAt);
          if (urgencyA !== urgencyB) return urgencyB - urgencyA; // 超期久的优先
          if (pa.ef !== pb.ef) return pa.ef - pb.ef; // EF低的优先
          return (pa.lapses || 0) - (pb.lapses || 0); // 遗忘次数多的优先
        });

        // 新词按类别交替分配，避免同类词集中
        fresh = fresh.slice(0, state.dailyLimit);

        return [...due, ...fresh];
      }

      function processReview(rating) {
        if (state.mode !== 'review') return;
        const id = state.queue[state.qIndex];
        let p = state.progress[id] || { ef: 2.5, interval: 0, reps: 0, reviewCount: 0, lastReview: 0 };
        const now = Date.now();

        if (rating === 'forget') {
          // 遗忘：降低EF，重置重复次数，短间隔后重试
          p.ef = Math.max(1.3, p.ef - 0.25);
          p.reps = 0;
          p.interval = 0;
          p.dueAt = now + (30 * 60 * 1000); // 30分钟后重试（从10分钟延长）
          p.lapses = (p.lapses || 0) + 1; // 记录遗忘次数
          state.queue.push(id);
        } else if (rating === 'fuzzy') {
          // 模糊：轻微降低EF，间隔增长较慢
          const q = 3;
          p.ef = Math.max(1.3, p.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
          p.reps += 1;
          if (p.reps === 1) p.interval = 1;
          else if (p.reps === 2) p.interval = 4; // 模糊时第二间隔缩短（从6改为4）
          else p.interval = Math.max(1, Math.round(p.interval * p.ef * 0.8)); // 模糊时间隔乘以0.8
          p.dueAt = now + (p.interval * MS_PER_DAY);
        } else {
          // 熟悉：正常SM-2算法
          const q = 5;
          p.ef = Math.max(1.3, p.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
          p.reps += 1;
          if (p.reps === 1) p.interval = 1;
          else if (p.reps === 2) p.interval = 6;
          else p.interval = Math.round(p.interval * p.ef);
          p.dueAt = now + (p.interval * MS_PER_DAY);
        }

        p.reviewCount = (p.reviewCount || 0) + 1;
        p.lastReview = now;
        state.progress[id] = p;
        updateStreak();
        saveData();

        state.qIndex++;
        if (state.qIndex >= state.queue.length) {
          showToast("今日任务完成！");
          navTo('dashboard');
        } else {
          renderCard();
        }
      }

      /* ===== 特效引擎 ===== */
      const FX = {
        canvas: null, ctx: null, raf: null, current: 'default',
        particles: [], ripples: [], meshPoints: [], time: 0,
        autoInterval: null, isMobile: false,

        init() {
          this.canvas = document.getElementById('effectCanvas');
          this.ctx = this.canvas.getContext('2d');
          this.isMobile = window.innerWidth < 768;
          this.resize();
          let resizeTimer;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
              this.isMobile = window.innerWidth < 768;
              this.resize();
              if (this.current !== 'default') { this.stop(); this.start(); }
            }, 200);
          });
        },

        resize() {
          const dpr = this.isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
          this.canvas.width = window.innerWidth * dpr;
          this.canvas.height = window.innerHeight * dpr;
          this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          this.canvas.style.width = window.innerWidth + 'px';
          this.canvas.style.height = window.innerHeight + 'px';
          this.W = window.innerWidth;
          this.H = window.innerHeight;
        },

        getAccentRGB() {
          const s = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
          const m = s.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
          if (m) return [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16)];
          return [56, 189, 248];
        },

        switchEffect(fx) {
          this.stop();
          // 只移除 fx- 开头的 class，不影响主题 class
          document.body.classList.forEach(c => { if (c.startsWith('fx-')) document.body.classList.remove(c); });
          document.body.classList.add('fx-' + fx);
          this.current = fx;
          localStorage.setItem('focusword-fx', fx);
          this.updateFxCards();
          if (fx !== 'default') this.start();
        },

        updateFxCards() {
          document.querySelectorAll('.apple-fx-option').forEach(el => {
            el.classList.toggle('active', el.dataset.fx === this.current);
          });
        },

        start() {
          this.time = 0;
          if (this.current === 'particles') this.initParticles();
          if (this.current === 'mesh') this.initMesh();
          if (this.current === 'ripple') this.initRipples();
          this.loop();
        },

        stop() {
          if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
          this.ctx.clearRect(0, 0, this.W, this.H);
        },

        loop() {
          this.time += 0.016;
          this.ctx.clearRect(0, 0, this.W, this.H);
          if (this.current === 'aurora') this.drawAurora();
          else if (this.current === 'particles') this.drawParticles();
          else if (this.current === 'mesh') this.drawMesh();
          else if (this.current === 'ripple') this.drawRipple();
          this.raf = requestAnimationFrame(() => this.loop());
        },

        // 极光 - 流动渐变
        drawAurora() {
          const [r,g,b] = this.getAccentRGB();
          const ctx = this.ctx, t = this.time, W = this.W, H = this.H;
          for (let i = 0; i < 4; i++) {
            const x = W * 0.5 + Math.sin(t * 0.3 + i * 1.5) * W * 0.3;
            const y = H * 0.4 + Math.cos(t * 0.2 + i * 2) * H * 0.2;
            const radius = Math.max(1, W * 0.35 + Math.sin(t * 0.5 + i) * W * 0.1);
            const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
            const alpha = 0.12 + Math.sin(t * 0.4 + i * 0.8) * 0.04;
            grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
            grad.addColorStop(0.5, `rgba(${r},${g},${b},${alpha * 0.4})`);
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, W, H);
          }
        },

        // 星尘粒子
        initParticles() {
          this.particles = [];
          const count = this.isMobile ? 40 : 80;
          for (let i = 0; i < count; i++) {
            this.particles.push({
              x: Math.random() * this.W, y: Math.random() * this.H,
              vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
              size: Math.random() * 2 + 0.5, alpha: Math.random() * 0.5 + 0.2
            });
          }
        },

        drawParticles() {
          const [r,g,b] = this.getAccentRGB();
          const ctx = this.ctx, W = this.W, H = this.H;
          const connectDist = this.isMobile ? 80 : 120;
          this.particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
            const flicker = 0.5 + Math.sin(this.time * 2 + p.x * 0.01) * 0.3;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * flicker})`;
            ctx.fill();
          });
          // 连线（移动端跳过以优化性能）
          if (!this.isMobile) {
            for (let i = 0; i < this.particles.length; i++) {
              for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < connectDist) {
                  ctx.beginPath();
                  ctx.moveTo(this.particles[i].x, this.particles[i].y);
                  ctx.lineTo(this.particles[j].x, this.particles[j].y);
                  ctx.strokeStyle = `rgba(${r},${g},${b},${0.08 * (1 - dist/connectDist)})`;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
                }
              }
            }
          }
        },

        // 网格渐变
        initMesh() {
          this.meshPoints = [];
          const cols = this.isMobile ? 4 : 6;
          const rows = this.isMobile ? 3 : 5;
          this.meshCols = cols;
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              this.meshPoints.push({
                bx: (i / (cols-1)) * this.W, by: (j / (rows-1)) * this.H,
                x: 0, y: 0, phase: Math.random() * Math.PI * 2
              });
            }
          }
        },

        drawMesh() {
          const [r,g,b] = this.getAccentRGB();
          const ctx = this.ctx, t = this.time;
          const cols = this.meshCols;
          this.meshPoints.forEach(p => {
            p.x = p.bx + Math.sin(t * 0.5 + p.phase) * 30;
            p.y = p.by + Math.cos(t * 0.4 + p.phase * 1.3) * 25;
          });
          for (let i = 0; i < this.meshPoints.length - 1; i++) {
            const p = this.meshPoints[i];
            if ((i + 1) % cols !== 0) {
              const right = this.meshPoints[i + 1];
              const alpha = 0.06 + Math.sin(t + i * 0.3) * 0.03;
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(right.x, right.y);
              ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`; ctx.lineWidth = 1; ctx.stroke();
            }
            if (i + cols < this.meshPoints.length) {
              const below = this.meshPoints[i + cols];
              const alpha = 0.06 + Math.cos(t + i * 0.2) * 0.03;
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(below.x, below.y);
              ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`; ctx.lineWidth = 1; ctx.stroke();
            }
            const glow = 0.3 + Math.sin(t * 1.5 + p.phase) * 0.2;
            ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${glow})`; ctx.fill();
          }
        },

        // 涟漪
        initRipples() {
          this.ripples = [];
          this.addRipple();
        },

        addRipple() {
          this.ripples.push({
            x: Math.random() * this.W, y: Math.random() * this.H,
            radius: 0, maxRadius: 150 + Math.random() * 200,
            alpha: 0.3, speed: 0.8 + Math.random() * 0.5
          });
        },

        drawRipple() {
          const [r,g,b] = this.getAccentRGB();
          const ctx = this.ctx;
          if (Math.random() < 0.015) this.addRipple();
          this.ripples = this.ripples.filter(rp => rp.alpha > 0.01);
          this.ripples.forEach(rp => {
            rp.radius += rp.speed;
            rp.alpha = Math.max(0, 0.3 * (1 - rp.radius / rp.maxRadius));
            ctx.beginPath();
            ctx.arc(rp.x, rp.y, Math.max(1, rp.radius), 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${r},${g},${b},${rp.alpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            if (rp.radius > 20) {
              ctx.beginPath();
              ctx.arc(rp.x, rp.y, Math.max(1, rp.radius * 0.6), 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(${r},${g},${b},${rp.alpha * 0.4})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          });
        },

        // 自动轮换
        startAutoRotate() {
          const effects = ['default', 'aurora', 'particles', 'mesh', 'ripple'];
          let idx = effects.indexOf(this.current);
          this.autoInterval = setInterval(() => {
            idx = (idx + 1) % effects.length;
            this.switchEffect(effects[idx]);
          }, 30000);
        },

        stopAutoRotate() {
          if (this.autoInterval) { clearInterval(this.autoInterval); this.autoInterval = null; }
        }
      };

      window.switchEffect = function(fx) { FX.switchEffect(fx); };

      function loadData() {
        const savedTheme = localStorage.getItem('focusword-theme');
        if (savedTheme && savedTheme !== 'dark') els.htmlRoot.classList.add(savedTheme + '-mode');
        updateThemeUI();
        updateSettingsThemeCards();
        
        state.phrases = parseRawData(RAW_PHRASES, "高中英语固定搭配", "phr");
        state.sentences = parseRawData(RAW_SENTENCES, "高中英语必背句型", "sen");

        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const data = JSON.parse(raw);
            let mergedVocab = data.vocab || [];
            if (window.GLOBAL_VOCAB && Array.isArray(window.GLOBAL_VOCAB)) {
              const existingIds = new Set(mergedVocab.map(w => w.id));
              window.GLOBAL_VOCAB.forEach(w => { if (!existingIds.has(w.id)) mergedVocab.push(w); });
            }
            state.vocab = mergedVocab.length > 0 ? mergedVocab : (window.GLOBAL_VOCAB || FALLBACK_VOCAB);
            state.progress = data.progress || {};
            state.dailyLimit = data.dailyLimit || 10;
            state.bookLayout = data.bookLayout || 'grid'; 
            state.lastViewedWordId = data.lastViewedWordId || null;
            state.lastBookPosition = data.lastBookPosition || { wordId: null, category: 'all', filterText: '', timestamp: 0 };
            if (data.streak) state.streak = data.streak;
          } else {
            state.vocab = window.GLOBAL_VOCAB ? [...window.GLOBAL_VOCAB] : [...FALLBACK_VOCAB];
          }
        } catch(e) { 
          state.vocab = window.GLOBAL_VOCAB ? [...window.GLOBAL_VOCAB] : [...FALLBACK_VOCAB]; 
        }

        // 将固定搭配和句型合并到 vocab 中，以便在词汇全览中显示
        const existingVocabIds = new Set(state.vocab.map(w => w.id));
        state.phrases.forEach(p => { if (!existingVocabIds.has(p.id)) { state.vocab.push(p); existingVocabIds.add(p.id); } });
        state.sentences.forEach(s => { if (!existingVocabIds.has(s.id)) { state.vocab.push(s); existingVocabIds.add(s.id); } });

        // 随机打乱词汇顺序
        shuffleArray(state.vocab);

        // 同步每日新词量选择器
        const limitVal = String(state.dailyLimit);
        const limitOptions = Array.from(els.dailyLimitSelect.options).map(o => o.value);
        if (limitOptions.includes(limitVal)) {
          els.dailyLimitSelect.value = limitVal;
          els.dailyLimitInput.style.display = 'none';
        } else {
          els.dailyLimitSelect.value = 'custom';
          els.dailyLimitInput.style.display = 'inline-block';
          els.dailyLimitInput.value = state.dailyLimit;
        }

        updateCategoryFilter(); 
        updateLayoutUI();

        // 复习提醒通知
        const notifPref = localStorage.getItem('focusword-notif');
        if (notifPref === 'true' && 'Notification' in window && Notification.permission === 'granted') {
          checkAndNotify();
        }

        // 连续学习天数
        checkStreakOnLoad();

        // 初始化特效
        FX.init();
        const savedFx = localStorage.getItem('focusword-fx');
        if (savedFx) FX.switchEffect(savedFx);
        const savedAutoFx = localStorage.getItem('focusword-fx-auto');
        if (savedAutoFx === 'true') {
          document.getElementById('fxAutoRotate').checked = true;
          FX.startAutoRotate();
        }
      }

      function checkAndNotify() {
        const endOfToday = new Date().setHours(23, 59, 59, 999);
        let dueCount = 0;
        state.vocab.forEach(w => {
          const p = state.progress[w.id];
          if (p && p.dueAt <= endOfToday) dueCount++;
        });
        const today = getDateStr(Date.now());
        const notStudiedToday = state.streak.lastStudyDate !== today;
        const notifPref = localStorage.getItem('focusword-notif');
        const streakNotifPref = localStorage.getItem('focusword-streak-notif');
        if (document.hidden) {
          if (notifPref === 'true' && dueCount > 0 && notStudiedToday) {
            new Notification('FocusWord 学习提醒', { body: `你有 ${dueCount} 个单词待复习，快来保持连续学习记录吧！`, icon: '📚' });
          } else if (notifPref === 'true' && dueCount > 0) {
            new Notification('FocusWord 复习提醒', { body: `你有 ${dueCount} 个单词待复习`, icon: '📚' });
          } else if (streakNotifPref === 'true' && notStudiedToday && state.streak.count > 0) {
            new Notification('FocusWord 学习提醒', { body: `今天还没学习哦，连续 ${state.streak.count} 天的记录不要断！`, icon: '🔥' });
          }
        }
      }

      function saveData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
           vocab: state.vocab,
           progress: state.progress,
           dailyLimit: state.dailyLimit,
           bookLayout: state.bookLayout,
           lastViewedWordId: state.lastViewedWordId,
           lastBookPosition: state.lastBookPosition,
           streak: state.streak
        }));
      }

      function exportData() {
        const str = JSON.stringify({ vocab: state.vocab, progress: state.progress }, null, 2);
        const blob = new Blob([str], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `FocusWord_${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
        showToast("已导出备份文件");
      }

      function handleImport(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            let text = ev.target.result.trim();
            text = text.replace(/^```(json)?\s*/i, '').replace(/\s*```$/i, '');
            let json = null;
            try { json = JSON.parse(text); } catch (e) { try { json = (new Function('return ' + text))(); } catch (e2) {} }

            if (json) {
              // 检测是否为完整备份文件（包含 vocab + progress）
              if (json.vocab && Array.isArray(json.vocab) && json.progress && typeof json.progress === 'object') {
                // 完整备份恢复模式
                const confirmRestore = confirm('检测到完整备份文件（含复习进度）。\n\n点击"确定"：恢复词汇和全部复习进度（覆盖当前数据）\n点击"取消"：仅将词汇作为新词库导入');
                if (confirmRestore) {
                  // 恢复模式：合并词汇和进度
                  let mergedVocab = json.vocab || [];
                  if (window.GLOBAL_VOCAB && Array.isArray(window.GLOBAL_VOCAB)) {
                    const existingIds = new Set(mergedVocab.map(w => w.id));
                    window.GLOBAL_VOCAB.forEach(w => { if (!existingIds.has(w.id)) mergedVocab.push(w); });
                  }
                  state.vocab = mergedVocab;
                  // 合并进度：以导入的进度为基础，保留本地独有的进度
                  const importedProgress = json.progress || {};
                  Object.assign(importedProgress, state.progress);
                  state.progress = importedProgress;
                  saveData(); updateCategoryFilter(); renderDashboard();
                  showToast(`恢复完成！${Object.keys(state.progress).length} 条复习记录已恢复。`);
                  e.target.value = '';
                  return;
                }
                // 降级为普通导入模式
              }

              let importList = null;
              if (json.vocab && Array.isArray(json.vocab)) importList = json.vocab;
              else if (Array.isArray(json)) importList = json;

              if (importList) {
                let userCat = prompt(`将导入的词库归入哪个分类？\n(例如：高中核心词)`, "高中核心词");
                if (userCat === null) { e.target.value = ''; return; }
                userCat = userCat.trim() || "未分类导入";

                let addedCount = 0; let skippedCount = 0;
                const existingWords = new Set(state.vocab.map(w => w.word.toLowerCase()));

                importList.forEach(newWord => {
                  if (newWord && newWord.word) {
                    const cleanWord = newWord.word.trim();
                    if (existingWords.has(cleanWord.toLowerCase())) skippedCount++;
                    else {
                      if(!newWord.id) newWord.id = 'imp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
                      newWord.word = cleanWord;
                      if (!newWord.category) newWord.category = userCat;
                      state.vocab.push(newWord); existingWords.add(cleanWord.toLowerCase()); addedCount++;
                    }
                  }
                });
                saveData(); updateCategoryFilter(); renderDashboard();
                showToast(`导入完成！新增 ${addedCount} 个，跳过 ${skippedCount} 个。`);
              } else showToast("格式不正确，未检测到有效数据。");
            } else {
              // 纯文本模式
              const lines = text.replace(/\r/g, '').split('\n');
              const temp = [];
              lines.forEach(line => {
                const match = line.match(/(?:^\d+\.\s*)?(?:\*\*)?([a-zA-Z-\s]+)(?:\*\*)?\s+(.*)/);
                if (match && match[1] && match[2] && !line.includes('{') && !line.includes('}')) {
                  temp.push({ word: match[1].trim(), translation: match[2].trim(), category: "未分类导入", id: 'imp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5) });
                }
              });
              if (temp.length > 0) {
                let userCat = prompt(`将导入的词库归入哪个分类？\n(例如：高中核心词)`, "高中核心词");
                if (userCat === null) { e.target.value = ''; return; }
                userCat = userCat.trim() || "未分类导入";
                let addedCount = 0; let skippedCount = 0;
                const existingWords = new Set(state.vocab.map(w => w.word.toLowerCase()));
                temp.forEach(newWord => {
                  newWord.category = userCat;
                  if (existingWords.has(newWord.word.toLowerCase())) skippedCount++;
                  else { state.vocab.push(newWord); existingWords.add(newWord.word.toLowerCase()); addedCount++; }
                });
                saveData(); updateCategoryFilter(); renderDashboard();
                showToast(`导入完成！新增 ${addedCount} 个，跳过 ${skippedCount} 个。`);
              } else showToast("格式不正确，未检测到有效数据或纯文本单词。");
            }
          } catch(err) { showToast("读取文件内容失败。"); } finally { e.target.value = ''; }
        };
        reader.readAsText(file);
      }

      function showToast(msg) {
        els.toast.textContent = msg; els.toast.classList.add('show');
        clearTimeout(state.toastTid); state.toastTid = setTimeout(() => els.toast.classList.remove('show'), 2500);
      }

      function init() {
        loadData();
        bindEvents();
        updateThemeUI();
        navTo('dashboard');
      }

      init();
    })();
  </script>
</body>
</html>