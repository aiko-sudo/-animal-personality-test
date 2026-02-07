/**
 * 三江源动物性格测试 - JavaScript 逻辑
 * 基于大五人格理论 (Big Five / OCEAN)
 */

// ========================================
// 题目数据 - 36题完整题库
// ========================================

const questions = [
    // 大五人格基础题 - 开放性 (6题)
    {
        dimension: 'openness',
        text: '我喜欢尝试新的餐厅、旅行目的地或体验新事物',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'openness',
        text: '我对艺术、文化和哲学话题很感兴趣',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'openness',
        text: '我善于接受不同的观点和思维方式',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'openness',
        text: '我喜欢探索未知的领域和解决复杂问题',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'openness',
        text: '我经常思考人生的意义和宇宙的奥秘',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'openness',
        text: '我愿意尝试有风险但可能有收获的新事物',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    
    // 责任感 (6题)
    {
        dimension: 'conscientiousness',
        text: '我会提前规划并按时完成任务',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'conscientiousness',
        text: '我对工作/学习认真负责，追求完美',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'conscientiousness',
        text: '我能够坚持长期目标，不轻易放弃',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'conscientiousness',
        text: '我注重细节，工作有条理',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'conscientiousness',
        text: '我相信规则和纪律的重要性',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'conscientiousness',
        text: '我会为自己的承诺负责到底',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    
    // 外向性 (6题)
    {
        dimension: 'extraversion',
        text: '在聚会中，我通常主动与陌生人交谈',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'extraversion',
        text: '我精力充沛，喜欢社交活动',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'extraversion',
        text: '我喜欢成为关注的焦点',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'extraversion',
        text: '我容易结交新朋友',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'extraversion',
        text: '我说话时比大多数人更活跃',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'extraversion',
        text: '我享受团队合作多于独自工作',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    
    // 宜人性 (6题)
    {
        dimension: 'agreeableness',
        text: '我相信人性本善，愿意相信他人',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'agreeableness',
        text: '我善于理解他人的感受和需求',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'agreeableness',
        text: '我尽量避免冲突，愿意妥协',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'agreeableness',
        text: '我乐于帮助他人',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'agreeableness',
        text: '我关心团队和谐多于个人利益',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    {
        dimension: 'agreeableness',
        text: '我善于倾听并给予建设性反馈',
        options: [
            { text: '完全不符合', score: 1 },
            { text: '不太符合', score: 2 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 4 },
            { text: '完全符合', score: 5 }
        ]
    },
    
    // 神经质/情绪稳定性 (6题)
    {
        dimension: 'neuroticism',
        text: '面对压力时，我容易感到焦虑',
        options: [
            { text: '完全不符合', score: 5 },
            { text: '不太符合', score: 4 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 2 },
            { text: '完全符合', score: 1 }
        ]
    },
    {
        dimension: 'neuroticism',
        text: '我经常担心未来的事情',
        options: [
            { text: '完全不符合', score: 5 },
            { text: '不太符合', score: 4 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 2 },
            { text: '完全符合', score: 1 }
        ]
    },
    {
        dimension: 'neuroticism',
        text: '我情绪波动较大，容易受影响',
        options: [
            { text: '完全不符合', score: 5 },
            { text: '不太符合', score: 4 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 2 },
            { text: '完全符合', score: 1 }
        ]
    },
    {
        dimension: 'neuroticism',
        text: '面对批评时，我会过度反思',
        options: [
            { text: '完全不符合', score: 5 },
            { text: '不太符合', score: 4 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 2 },
            { text: '完全符合', score: 1 }
        ]
    },
    {
        dimension: 'neuroticism',
        text: '我有时会感到孤独或失落',
        options: [
            { text: '完全不符合', score: 5 },
            { text: '不太符蚈', score: 4 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 2 },
            { text: '完全符合', score: 1 }
        ]
    },
    {
        dimension: 'neuroticism',
        text: '我很难从挫折中快速恢复',
        options: [
            { text: '完全不符合', score: 5 },
            { text: '不太符合', score: 4 },
            { text: '一般', score: 3 },
            { text: '比较符合', score: 2 },
            { text: '完全符合', score: 1 }
        ]
    },
    
    // 高原情境投射题 (6题)
    {
        dimension: 'openness',
        text: '如果你在高原上迷路，你会选择？',
        options: [
            { text: '独自寻找高处观察地形', score: 5 },
            { text: '跟随群体足迹前进', score: 3 },
            { text: '原地等待救援', score: 2 },
            { text: '尝试多种路径探索', score: 4 }
        ]
    },
    {
        dimension: 'conscientiousness',
        text: '面对高原上的困难任务，你更倾向于？',
        options: [
            { text: '制定详细计划再行动', score: 5 },
            { text: '边做边调整', score: 3 },
            { text: '寻求他人帮助', score: 2 },
            { text: '凭直觉快速行动', score: 4 }
        ]
    },
    {
        dimension: 'extraversion',
        text: '在高原营地，你更喜欢？',
        options: [
            { text: '组织集体活动', score: 5 },
            { text: '与几个朋友聊天', score: 4 },
            { text: '独自欣赏风景', score: 2 },
            { text: '跟随他人活动', score: 3 }
        ]
    },
    {
        dimension: 'agreeableness',
        text: '遇到高原上的陌生人求助，你会？',
        options: [
            { text: '热情帮助', score: 5 },
            { text: '在确保安全的前提下帮助', score: 4 },
            { text: '建议他寻求专业帮助', score: 3 },
            { text: '谨慎对待，婉拒', score: 2 }
        ]
    },
    {
        dimension: 'neuroticism',
        text: '高原旅行中遇到突发状况，你的第一反应是？',
        options: [
            { text: '保持冷静，迅速应对', score: 5 },
            { text: '有些紧张但能处理', score: 4 },
            { text: '感到焦虑，需要时间调整', score: 2 },
            { text: '慌乱，不知所措', score: 1 }
        ]
    },
    {
        dimension: 'openness',
        text: '你期待在高原之旅中发现什么？',
        options: [
            { text: '未知的自然奇观', score: 5 },
            { text: '独特的文化体验', score: 4 },
            { text: '心灵的平静', score: 3 },
            { text: '挑战自我的机会', score: 4 }
        ]
    }
];

// ========================================
// 动物结果数据
// ========================================

const animals = {
    wolf: {
        name: '雪豹',
        emoji: '🐺',
        tagline: '孤独的策略家 · 高原隐士',
        traits: ['独立思考', '战略眼光', '高度专注', '冷静理性'],
        colorClass: 'animal-wolf',
        description: '你如同雪豹一般，拥有深邃的智慧和独立的灵魂。在群体中，你或许不是最活跃的那个，但你的每一次发言都充满力量。你善于观察全局，在关键时刻做出精准的判断。',
        match: '藏羚羊（团队协作）',
        tips: '适当敞开心扉会让你的高原之旅更加精彩。尝试信任团队成员，你的领导力会在协作中迸发更大能量。',
        radarLabels: ['开放性', '责任感', '外向性', '宜人性', '情绪稳定性']
    },
    gull: {
        name: '棕头鸥',
        emoji: '🐦',
        tagline: '热情的社交家 · 群体之星',
        traits: ['活力四射', '善于表达', '社交达人', '感染力强'],
        colorClass: 'animal-gull',
        description: '你如同高原上的棕头鸥，天生就是社交的中心。你的热情如同阳光，能够照亮周围的每一个人。在团队中，你是最好的润滑剂，让所有人感到舒适和快乐。',
        match: '牦牛（稳定支持）',
        tips: '试着在热情中增加一些深度思考，你的社交能力与战略思维结合，将无往不胜。',
        radarLabels: ['开放性', '责任感', '外向性', '宜人性', '情绪稳定性']
    },
    yak: {
        name: '牦牛',
        emoji: '🦬',
        tagline: '坚韧的守护者 · 高原脊梁',
        traits: ['稳定可靠', '耐心坚韧', '责任担当', '默默付出'],
        colorClass: 'animal-yak',
        description: '你如同高原上的牦牛，是团队最可靠的支柱。你的稳定和坚韧让人安心，无论面对多大的困难，你都能稳步前行。默默付出是你的特质，也是你最魅力的所在。',
        match: '棕头鸥（互补成长）',
        tips: '适当的表达自己的需求和情绪，会让你获得更多支持。你的价值值得被看见、被认可。',
        radarLabels: ['开放性', '责任感', '外向性', '宜人性', '情绪稳定性']
    },
    vulture: {
        name: '高山兀鹫',
        emoji: '🦅',
        tagline: '精准的分析者 · 智慧观察者',
        traits: ['审慎分析', '客观理性', '敏锐洞察', '风险意识'],
        colorClass: 'animal-vulture',
        description: '你如同高原上的高山兀鹫，拥有鹰一般锐利的眼睛和冷静的头脑。你不急于行动，而是仔细观察、分析局势。你的判断准确而深刻，常常能发现别人忽视的细节。',
        match: '赤狐（智识碰撞）',
        tips: '过度的谨慎可能会让你错失良机。试着在分析之后果断行动，你会发现执行力同样重要。',
        radarLabels: ['开放性', '责任感', '外向性', '宜人性', '情绪稳定性']
    },
    fox: {
        name: '赤狐',
        emoji: '🦊',
        tagline: '灵活的适应者 · 环境艺术家',
        traits: ['灵活应变', '智慧生存', '适应力强', '实用主义'],
        colorClass: 'animal-fox',
        description: '你如同赤狐，是高原上最聪明的生存者。面对变化，你从不慌张，而是快速找到最佳的应对策略。你的灵活性是你的超能力，让你在任何环境中都能游刃有余。',
        match: '雪豹（智者对话）',
        tips: '保持稳定的核心价值观会让你更加可靠。灵活性与原则性并不矛盾，找到平衡点你将更加出色。',
        radarLabels: ['开放性', '责任感', '外向性', '宜人性', '情绪稳定性']
    }
};

// ========================================
// 应用状态
// ========================================

let currentQuestion = 0;
let answers = [];
let results = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
};

// ========================================
// DOM 元素
// ========================================

const homePage = document.getElementById('home');
const testPage = document.getElementById('test');
const resultPage = document.getElementById('result');
const progressFill = document.getElementById('progress');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// ========================================
// 页面切换函数
// ========================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function startTest() {
    currentQuestion = 0;
    answers = [];
    results = {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0
    };
    showPage('test');
    renderQuestion();
}

function restartTest() {
    startTest();
}

// ========================================
// 题目渲染函数
// ========================================

function renderQuestion() {
    const question = questions[currentQuestion];
    
    // 更新进度
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `第 ${currentQuestion + 1} 题 / 共 ${questions.length} 题`;
    
    // 更新题目
    questionText.textContent = question.text;
    
    // 渲染选项
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = option.text;
        optionEl.dataset.index = index;
        optionEl.dataset.score = option.score;
        
        // 如果已有答案，显示选中状态
        if (answers[currentQuestion] !== undefined) {
            if (answers[currentQuestion] === index) {
                optionEl.classList.add('selected');
            }
        }
        
        optionEl.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionEl);
    });
    
    // 更新按钮状态
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? '查看结果 →' : '下一题 →';
    nextBtn.disabled = answers[currentQuestion] === undefined;
}

function selectOption(index) {
    answers[currentQuestion] = index;
    
    // 更新选项样式
    document.querySelectorAll('.option').forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    nextBtn.disabled = false;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        calculateResults();
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// ========================================
// 结果计算函数
// ========================================

function calculateResults() {
    // 初始化结果
    const dimensions = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'];
    dimensions.forEach(dim => results[dim] = 0);
    
    const dimensionCounts = {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0
    };
    
    // 计算各维度总分
    answers.forEach((answerIndex, questionIndex) => {
        const question = questions[questionIndex];
        const score = question.options[answerIndex].score;
        
        results[question.dimension] += score;
        dimensionCounts[question.dimension]++;
    });
    
    // 计算平均值并归一化到 1-10 分制
    dimensions.forEach(dim => {
        results[dim] = Math.round((results[dim] / dimensionCounts[dim]) * 2) / 2;
    });
    
    // 计算神经质反转分数（用于雷达图显示）
    results.neuroticismReversed = 10 - results.neuroticism;
}

// ========================================
// 结果展示函数
// ========================================

function showResult() {
    showPage('result');
    
    // 确定动物类型
    const animal = determineAnimal();
    
    // 渲染结果
    document.getElementById('animalAvatar').textContent = animal.emoji;
    document.getElementById('animalAvatar').className = `animal-avatar ${animal.colorClass}`;
    document.getElementById('animalName').textContent = animal.name;
    document.getElementById('animalTagline').textContent = animal.tagline;
    document.getElementById('resultDescription').textContent = animal.description;
    document.getElementById('matchText').textContent = `最佳伙伴：${animal.match}`;
    document.getElementById('tipsText').textContent = animal.tips;
    
    // 渲染特质标签
    const traitsContainer = document.getElementById('traits');
    traitsContainer.innerHTML = '';
    animal.traits.forEach(trait => {
        const traitEl = document.createElement('span');
        traitEl.className = 'trait-tag';
        traitEl.textContent = trait;
        traitsContainer.appendChild(traitEl);
    });
    
    // 绘制雷达图
    drawRadarChart();
}

function determineAnimal() {
    const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = results;
    
    // 评分规则（简化版）
    // 雪豹：高开放性 + 低外向性 + 高神经质反转 = 策略型
    // 棕头鸥：高外向性 + 高宜人性 = 社交型
    // 牦牛：高责任感 + 高宜人性 = 稳定型
    // 高山兀鹫：低外向性 + 高责任感 = 分析型
    // 赤狐：高开放性 + 低神经质 = 适应型
    
    let scores = {
        wolf: 0,
        gull: 0,
        yak: 0,
        vulture: 0,
        fox: 0
    };
    
    // 雪豹计算
    scores.wolf += (openness / 10) * 3;      // 高开放性
    scores.wolf += ((10 - extraversion) / 10) * 2;  // 低外向性
    scores.wolf += ((10 - neuroticism) / 10) * 2;  // 高情绪稳定性
    scores.wolf += (conscientiousness / 10) * 3;  // 高责任感
    
    // 棕头鸥计算
    scores.gull += (extraversion / 10) * 4;   // 高外向性
    scores.gull += (agreeableness / 10) * 3;  // 高宜人性
    scores.gull += (openness / 10) * 2;       // 一定开放性
    scores.gull += (conscientiousness / 10) * 1; // 一定责任感
    
    // 牦牛计算
    scores.yak += (conscientiousness / 10) * 4;  // 高责任感
    scores.yak += (agreeableness / 10) * 3;     // 高宜人性
    scores.yak += ((10 - neuroticism) / 10) * 2; // 高情绪稳定性
    scores.yak += (extraversion / 10) * 1;      // 一定外向性
    
    // 高山兀鹫计算
    scores.vulture += (conscientiousness / 10) * 4; // 高责任感
    scores.vulture += ((10 - extraversion) / 10) * 3; // 低外向性
    scores.vulture += (openness / 10) * 2;          // 一定开放性
    scores.vulture += (agreeableness / 10) * 1;     // 一定宜人性
    
    // 赤狐计算
    scores.fox += (openness / 10) * 3;         // 高开放性
    scores.fox += ((10 - neuroticism) / 10) * 3; // 高情绪稳定性
    scores.fox += (conscientiousness / 10) * 2; // 一定责任感
    scores.fox += (extraversion / 10) * 2;      // 一定外向性
    
    // 找出最高分
    let maxScore = 0;
    let result = animals.fox;
    
    Object.keys(scores).forEach(key => {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            result = animals[key];
        }
    });
    
    return result;
}

// ========================================
// 雷达图绘制函数
// ========================================

function drawRadarChart() {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制背景网格
    drawRadarGrid(ctx, centerX, centerY, radius);
    
    // 绘制数据区域
    const data = [
        results.openness,
        results.conscientiousness,
        results.extraversion,
        results.agreeableness,
        results.neuroticismReversed
    ];
    
    drawRadarData(ctx, centerX, centerY, radius, data);
}

function drawRadarGrid(ctx, centerX, centerY, radius) {
    const sides = 5;
    const angleStep = (Math.PI * 2) / sides;
    
    // 绘制同心圆
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = '#e8dcc4';
        ctx.lineWidth = 1;
        
        for (let j = 0; j <= sides; j++) {
            const angle = j * angleStep - Math.PI / 2;
            const r = (radius * i) / 5;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            
            if (j === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }
    
    // 绘制轴线
    for (let i = 0; i < sides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.strokeStyle = '#c4a574';
        ctx.lineWidth = 1;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function drawRadarData(ctx, centerX, centerY, radius, data) {
    const sides = 5;
    const angleStep = (Math.PI * 2) / sides;
    
    // 绘制数据多边形
    ctx.beginPath();
    ctx.fillStyle = 'rgba(45, 90, 135, 0.3)';
    ctx.strokeStyle = 'rgba(45, 90, 135, 0.8)';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < sides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = data[i] / 10; // 归一化到 0-1
        const r = radius * value;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // 绘制数据点
    for (let i = 0; i < sides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = data[i] / 10;
        const r = radius * value;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        
        ctx.beginPath();
        ctx.fillStyle = '#2d5a87';
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// ========================================
// 分享功能
// ========================================

function shareResult() {
    const animal = determineAnimal();
    const shareText = `我是${animal.name}！我的高原图腾是「${animal.tagline}」。来测试你的动物性格吧！`;
    
    // 检查是否支持原生分享
    if (navigator.share) {
        navigator.share({
            title: '三江源动物性格测试',
            text: shareText,
            url: window.location.href
        }).catch(console.error);
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(shareText + ' ' + window.location.href)
            .then(() => {
                alert('结果已复制到剪贴板！');
            })
            .catch(() => {
                alert('无法复制，请手动复制结果。');
            });
    }
}

// ========================================
// 初始化
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // 确保首页显示
    showPage('home');
});
