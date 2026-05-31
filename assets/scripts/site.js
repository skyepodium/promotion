const SUPPORTED_LANGUAGES = ['ko', 'en', 'ja', 'zh', 'zh-TW', 'vi', 'es', 'fr'];
const DEFAULT_LANGUAGE = 'ko';
const LANGUAGE_STORAGE_KEY = 'kitsnyang-promotion-language';

const TRANSLATIONS = {
  ko: {
    'common.appName': '키츠냥',
    'common.header.aria': '주요 탐색',
    'common.home.aria': 'skyepodium 홈',
    'common.nav.aria': '페이지',
    'common.language.aria': '언어 선택',
    'common.language.ko': '한국어',
    'common.language.en': 'English',
    'common.language.ja': '日本語',
    'common.language.zh': '简体中文',
    'common.language.zhTW': '繁體中文',
    'common.language.vi': 'Tiếng Việt',
    'common.language.es': 'Español',
    'common.language.fr': 'Français',
    'home.meta.description': 'skyepodium의 작업과 서비스를 소개하는 정적 프로모션 사이트',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': '작은 서비스, 선명한 상호작용.',
    'home.hero.title': '작게 만들고,<br />오래 쓰게 다듬습니다.',
    'home.hero.lead':
      '앱, 도구, 장난감 같은 서비스를 만들고 고칩니다. 지금은 아침 알람 앱 <a href="./kitsnyang.html">키츠냥</a>을 정리 중입니다.',
    'home.hero.cta': '키츠냥 보기',
    'home.actions.aria': '대표 작업',
    'home.project.body': '무료, 광고 없음, 여러 알림음. 아침을 조금 덜 미워하게 만드는 알람.',
    'home.project.linkAria': '키츠냥 소개 페이지로 이동',
    'kitsnyang.meta.description':
      '키츠냥은 무료이고 광고 없는 아침 알람 앱입니다. 여러 알림음과 감각적인 알람 설정 화면을 제공합니다.',
    'kitsnyang.meta.title': '키츠냥 - 아침을 조금 덜 미워하게 만드는 알람',
    'kitsnyang.hero.eyebrow': '무료 알람 앱 / 광고 없음',
    'kitsnyang.hero.line': '아침을 조금 덜 미워하게 만드는 알람.',
    'kitsnyang.proof.aria': '키츠냥 핵심 특징',
    'kitsnyang.proof.free': '무료',
    'kitsnyang.proof.noAds': '광고 없음',
    'kitsnyang.proof.sounds': '여러 알림음',
    'kitsnyang.heroStage.aria': '키츠냥 앱 화면 미리보기',
    'kitsnyang.icon.alt': '키츠냥 앱 아이콘',
    'kitsnyang.phone.list.aria': '알람 목록 화면 예시',
    'kitsnyang.phone.sound.aria': '알림음 선택 화면 예시',
    'kitsnyang.alarm.daily': '매일',
    'kitsnyang.alarm.weekdays': '평일',
    'kitsnyang.alarm.weekend': '주말',
    'kitsnyang.sound.label': '알림음',
    'kitsnyang.sound.featured': '거제도의 바람',
    'kitsnyang.sound.caption': '푸른바다의 냄새',
    'kitsnyang.statement.eyebrow': '소음 없이',
    'kitsnyang.statement.title': '필요한 것만 남겼습니다.',
    'kitsnyang.statement.free': '무료',
    'kitsnyang.statement.noAds': '광고 없음',
    'kitsnyang.statement.music': '음악 여러 개',
    'kitsnyang.statement.morning': '아침 전용',
    'kitsnyang.showcase.eyebrow': '네 개의 화면',
    'kitsnyang.showcase.title': '네 화면이면 충분해요.',
    'kitsnyang.showcase.body': '시간을 고르고, 색을 고르고, 소리를 고르고, 아침에 끄면 끝.',
    'kitsnyang.showcase.aria': '키츠냥 주요 화면 4개',
    'kitsnyang.screen.list.title': '알람 목록',
    'kitsnyang.screen.list.body': '켜진 알람만 선명하게.',
    'kitsnyang.screen.time.title': '시간 설정',
    'kitsnyang.screen.time.body': '휠은 가볍고 정확하게.',
    'kitsnyang.screen.sound.title': '알림음',
    'kitsnyang.sound.wizard': '마법사의 새벽',
    'kitsnyang.sound.orum': '오름바람 올라라',
    'kitsnyang.sound.orum.poem': '제주 오름길을 따라,\n걱정도 바람처럼 가벼워진다.',
    'kitsnyang.sound.orum.highlight': '오름길',
    'kitsnyang.sound.today': '오늘이 켜져',
    'kitsnyang.sound.today.poem': '띵띵, 눈을 떠\n오늘이 널 기다려',
    'kitsnyang.sound.today.highlight': '눈을 떠',
    'kitsnyang.sound.jeju': '제주 귤톡톡',
    'kitsnyang.sound.jeju.poem': '노란 햇살이 톡 터지고,\n기분까지 새콤달콤해진다.',
    'kitsnyang.sound.jeju.highlight': '톡',
    'kitsnyang.sound.stayBlue': '네온의 바다로',
    'kitsnyang.sound.stayBlue.poem': '네온의 물결 속에,\n푸른 여운이 아직 머문다.',
    'kitsnyang.sound.stayBlue.highlight': '푸른 여운',
    'kitsnyang.sound.dawn': '새벽의 서곡',
    'kitsnyang.screen.dismiss.title': '알람 해제',
    'kitsnyang.screen.dismiss.action': '끄기',
    'kitsnyang.screen.dismiss.body': '눈 뜨면 바로 알 수 있게.',
    'kitsnyang.sounds.eyebrow': '알림음',
    'kitsnyang.sounds.title': '기분마다 다른 아침.',
    'kitsnyang.sounds.body': '앱의 첫 순서대로, 지금 바로 짧게 들어보세요.',
    'kitsnyang.sounds.aria': '대표 알림음 재생 플레이어',
    'kitsnyang.sound.paradise': '파라파라다이스',
    'kitsnyang.sound.paradise.poem': '생각은 잠시 내려놓고,\n파라파라나 춰야겠다.',
    'kitsnyang.sound.paradise.highlight': '파라파라',
    'kitsnyang.sound.geoje': '거제도의 바람',
    'kitsnyang.sound.geoje.poem': '창문틈으로 번진,\n푸른바다의 냄새',
    'kitsnyang.sound.geoje.highlight': '푸른바다',
    'kitsnyang.sound.ventanas': '빛나는 바다의 창',
    'kitsnyang.sound.ventanas.poem': '바다 위 별처럼 빛나는 창,\n도시는 천천히 춤을 시작한다.',
    'kitsnyang.sound.ventanas.highlight': '빛나는 창',
    'kitsnyang.sound.infinite': '무한의 회랑',
    'kitsnyang.player.eyebrow': '지금 미리듣기',
    'kitsnyang.player.ready': '트랙을 눌러 재생하세요.',
    'kitsnyang.player.playing': '재생 중',
    'kitsnyang.player.paused': '일시정지됨',
    'kitsnyang.player.ended': '다시 들으려면 재생을 누르세요.',
    'kitsnyang.player.play': '재생',
    'kitsnyang.player.pause': '일시정지',
    'kitsnyang.player.error': '이 트랙을 재생할 수 없습니다.',
    'kitsnyang.closing.eyebrow': '부드럽게 일어나기',
    'kitsnyang.closing.title': '일어나는 일도<br />조금은 귀여울 수 있게.',
    'kitsnyang.closing.body': '키츠냥은 무료이고, 광고가 없고, 아침을 위한 소리를 고릅니다.',
  },
  en: {
    'common.appName': 'Kitsnyang',
    'common.header.aria': 'Primary navigation',
    'common.home.aria': 'skyepodium home',
    'common.nav.aria': 'Pages',
    'common.language.aria': 'Choose language',
    'common.language.ko': 'Korean',
    'common.language.en': 'English',
    'common.language.ja': 'Japanese',
    'common.language.zh': 'Simplified Chinese',
    'common.language.zhTW': 'Traditional Chinese',
    'common.language.vi': 'Vietnamese',
    'common.language.es': 'Spanish',
    'common.language.fr': 'French',
    'home.meta.description': 'A static promotion site for skyepodium projects and services.',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': 'Tiny services, crisp interactions.',
    'home.hero.title': 'Small services,<br />refined to last.',
    'home.hero.lead':
      'I build and polish apps, tools, and small digital toys. Right now I am shaping <a href="./kitsnyang.html">키츠냥</a>, a morning alarm app.',
    'home.hero.cta': 'View 키츠냥',
    'home.actions.aria': 'Featured work',
    'home.project.body': 'Free, no ads, multiple alarm sounds. An alarm that makes mornings a little easier.',
    'home.project.linkAria': 'Go to the 키츠냥 service page',
    'kitsnyang.meta.description':
      '키츠냥 is a free, no-ad morning alarm app with multiple alarm sounds and a playful alarm setup screen.',
    'kitsnyang.meta.title': '키츠냥 - A gentler morning alarm',
    'kitsnyang.hero.eyebrow': 'Free alarm app / no ads',
    'kitsnyang.hero.line': 'A morning alarm that makes waking up a little easier.',
    'kitsnyang.proof.aria': 'Key 키츠냥 features',
    'kitsnyang.proof.free': 'Free',
    'kitsnyang.proof.noAds': 'No ads',
    'kitsnyang.proof.sounds': 'Many sounds',
    'kitsnyang.heroStage.aria': 'Preview of the 키츠냥 app screens',
    'kitsnyang.icon.alt': '키츠냥 app icon',
    'kitsnyang.phone.list.aria': 'Example alarm list screen',
    'kitsnyang.phone.sound.aria': 'Example alarm sound selection screen',
    'kitsnyang.alarm.daily': 'Daily',
    'kitsnyang.alarm.weekdays': 'Weekdays',
    'kitsnyang.alarm.weekend': 'Weekend',
    'kitsnyang.sound.label': 'Alarm sound',
    'kitsnyang.sound.featured': 'Geoje Sea Breeze',
    'kitsnyang.sound.caption': 'Blue salt breeze',
    'kitsnyang.statement.eyebrow': 'No noise',
    'kitsnyang.statement.title': 'Only what you need.',
    'kitsnyang.statement.free': 'Free',
    'kitsnyang.statement.noAds': 'No ads',
    'kitsnyang.statement.music': 'Multiple tracks',
    'kitsnyang.statement.morning': 'Made for mornings',
    'kitsnyang.showcase.eyebrow': 'Four screens',
    'kitsnyang.showcase.title': 'Four screens are enough.',
    'kitsnyang.showcase.body': 'Pick the time, pick the color, pick the sound, and turn it off in the morning.',
    'kitsnyang.showcase.aria': 'Four main 키츠냥 screens',
    'kitsnyang.screen.list.title': 'Alarm list',
    'kitsnyang.screen.list.body': 'Only active alarms stand out.',
    'kitsnyang.screen.time.title': 'Set time',
    'kitsnyang.screen.time.body': 'The wheel stays light and precise.',
    'kitsnyang.screen.sound.title': 'Alarm sounds',
    'kitsnyang.sound.wizard': 'Spellbreak Dawn',
    'kitsnyang.sound.orum': 'Orum Breeze, Rise Up',
    'kitsnyang.sound.orum.poem': 'Along a Jeju orum trail,\nworries lift light on the wind.',
    'kitsnyang.sound.orum.highlight': 'orum',
    'kitsnyang.sound.today': 'Today Lights Up',
    'kitsnyang.sound.today.poem': 'Ding ding. Eyes open.\nThe day is already waiting.',
    'kitsnyang.sound.today.highlight': 'Eyes open',
    'kitsnyang.sound.jeju': 'Jeju Tangerine Tok Tok',
    'kitsnyang.sound.jeju.poem': 'Golden sunlight pops open,\nand the whole mood turns sweet-tart.',
    'kitsnyang.sound.jeju.highlight': 'pops',
    'kitsnyang.sound.stayBlue': 'Into the Neon Sea',
    'kitsnyang.sound.stayBlue.poem': 'Even as you melt into neon,\nthe blue afterglow stays.',
    'kitsnyang.sound.stayBlue.highlight': 'blue afterglow',
    'kitsnyang.sound.dawn': 'Dawn Overture',
    'kitsnyang.screen.dismiss.title': 'Dismiss alarm',
    'kitsnyang.screen.dismiss.action': 'Dismiss',
    'kitsnyang.screen.dismiss.body': 'Clear at a glance when you wake.',
    'kitsnyang.sounds.eyebrow': 'Alarm sounds',
    'kitsnyang.sounds.title': 'A different morning for each mood.',
    'kitsnyang.sounds.body': 'Preview the first tracks in the same order as the app.',
    'kitsnyang.sounds.aria': 'Featured alarm sound player',
    'kitsnyang.sound.paradise': 'Paraparadise',
    'kitsnyang.sound.paradise.poem': 'Set the thoughts down for a minute.\nTime to para para.',
    'kitsnyang.sound.paradise.highlight': 'para para',
    'kitsnyang.sound.geoje': 'Geoje Sea Breeze',
    'kitsnyang.sound.geoje.poem': 'A blue salt breeze\nslips through the window.',
    'kitsnyang.sound.geoje.highlight': 'blue salt',
    'kitsnyang.sound.ventanas': 'Bright Sea Windows',
    'kitsnyang.sound.ventanas.poem': 'Windows shine like stars over the sea,\nand the city lights begin to dance.',
    'kitsnyang.sound.ventanas.highlight': 'stars over the sea',
    'kitsnyang.sound.infinite': 'Endless Corridor',
    'kitsnyang.player.eyebrow': 'Now previewing',
    'kitsnyang.player.ready': 'Tap a track to play.',
    'kitsnyang.player.playing': 'Playing',
    'kitsnyang.player.paused': 'Paused',
    'kitsnyang.player.ended': 'Press play to hear it again.',
    'kitsnyang.player.play': 'Play',
    'kitsnyang.player.pause': 'Pause',
    'kitsnyang.player.error': 'This track cannot be played.',
    'kitsnyang.closing.eyebrow': 'Wake softly',
    'kitsnyang.closing.title': 'Even waking up<br />can be a little cute.',
    'kitsnyang.closing.body': '키츠냥 is free, has no ads, and lets you choose sounds made for morning.',
  },
  ja: {
    'common.appName': 'キツニャン',
    'common.header.aria': '主要ナビゲーション',
    'common.home.aria': 'skyepodium ホーム',
    'common.nav.aria': 'ページ',
    'common.language.aria': '言語を選択',
    'common.language.ko': '韓国語',
    'common.language.en': '英語',
    'common.language.ja': '日本語',
    'common.language.zh': '簡体字中国語',
    'common.language.zhTW': '繁体字中国語',
    'common.language.vi': 'ベトナム語',
    'common.language.es': 'スペイン語',
    'common.language.fr': 'フランス語',
    'home.meta.description': 'skyepodiumの制作物とサービスを紹介する静的プロモーションサイト。',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': '小さなサービス、くっきりした操作感。',
    'home.hero.title': '小さく作り、<br />長く使えるように磨く。',
    'home.hero.lead':
      'アプリ、ツール、小さなサービスを作って磨いています。今は朝のアラームアプリ <a href="./kitsnyang.html">키츠냥</a> を整えています。',
    'home.hero.cta': '키츠냥を見る',
    'home.actions.aria': '代表的な制作物',
    'home.project.body': '無料、広告なし、複数の通知音。朝が少しだけ楽になるアラーム。',
    'home.project.linkAria': '키츠냥の紹介ページへ移動',
    'kitsnyang.meta.description':
      '키츠냥は無料で広告のない朝のアラームアプリです。複数の通知音と気持ちよいアラーム設定画面を備えています。',
    'kitsnyang.meta.title': '키츠냥 - 朝が少しだけ楽になるアラーム',
    'kitsnyang.hero.eyebrow': '無料アラームアプリ / 広告なし',
    'kitsnyang.hero.line': '朝が少しだけ楽になるアラーム。',
    'kitsnyang.proof.aria': '키츠냥の主な特徴',
    'kitsnyang.proof.free': '無料',
    'kitsnyang.proof.noAds': '広告なし',
    'kitsnyang.proof.sounds': '複数の通知音',
    'kitsnyang.heroStage.aria': '키츠냥アプリ画面のプレビュー',
    'kitsnyang.icon.alt': '키츠냥アプリアイコン',
    'kitsnyang.phone.list.aria': 'アラーム一覧画面の例',
    'kitsnyang.phone.sound.aria': '通知音選択画面の例',
    'kitsnyang.alarm.daily': '毎日',
    'kitsnyang.alarm.weekdays': '平日',
    'kitsnyang.alarm.weekend': '週末',
    'kitsnyang.sound.label': '通知音',
    'kitsnyang.sound.featured': '巨済の潮風',
    'kitsnyang.sound.caption': '青い海の匂い',
    'kitsnyang.statement.eyebrow': 'ノイズなし',
    'kitsnyang.statement.title': '必要なものだけ残しました。',
    'kitsnyang.statement.free': '無料',
    'kitsnyang.statement.noAds': '広告なし',
    'kitsnyang.statement.music': '複数の音楽',
    'kitsnyang.statement.morning': '朝専用',
    'kitsnyang.showcase.eyebrow': '4つの画面',
    'kitsnyang.showcase.title': '4画面で十分です。',
    'kitsnyang.showcase.body': '時間を選び、色を選び、音を選び、朝に止めるだけ。',
    'kitsnyang.showcase.aria': '키츠냥の主な4画面',
    'kitsnyang.screen.list.title': 'アラーム一覧',
    'kitsnyang.screen.list.body': 'オンのアラームだけをはっきりと。',
    'kitsnyang.screen.time.title': '時刻設定',
    'kitsnyang.screen.time.body': 'ホイールは軽く、正確に。',
    'kitsnyang.screen.sound.title': '通知音',
    'kitsnyang.sound.wizard': '魔法使いの夜明け',
    'kitsnyang.sound.orum': 'オルム風よ上がれ',
    'kitsnyang.sound.orum.poem': '済州のオルム道を歩けば、\n悩みも風みたいに軽くなる。',
    'kitsnyang.sound.orum.highlight': 'オルム道',
    'kitsnyang.sound.today': '今日が灯る',
    'kitsnyang.sound.today.poem': 'リンリン、目を開けて。\n今日がもう君を待っている。',
    'kitsnyang.sound.today.highlight': '目を開けて',
    'kitsnyang.sound.jeju': '済州みかんトクトク',
    'kitsnyang.sound.jeju.poem': '黄色い陽ざしがトクッとはじけて、\n気分まで甘酸っぱくなる。',
    'kitsnyang.sound.jeju.highlight': 'トクッ',
    'kitsnyang.sound.stayBlue': 'ネオンの海へ',
    'kitsnyang.sound.stayBlue.poem': 'ネオンの海に溶けても、\n青い余韻だけはまだ消えない。',
    'kitsnyang.sound.stayBlue.highlight': '青い余韻',
    'kitsnyang.sound.dawn': '夜明けの序曲',
    'kitsnyang.screen.dismiss.title': 'アラーム解除',
    'kitsnyang.screen.dismiss.action': '解除',
    'kitsnyang.screen.dismiss.body': '目覚めたらすぐ分かるように。',
    'kitsnyang.sounds.eyebrow': '通知音',
    'kitsnyang.sounds.title': '気分に合わせて朝を変える。',
    'kitsnyang.sounds.body': 'アプリと同じ先頭順で、短く試聴できます。',
    'kitsnyang.sounds.aria': '代表的な通知音プレイヤー',
    'kitsnyang.sound.paradise': 'パラパラダイス',
    'kitsnyang.sound.paradise.poem': '考えごとはいったん置いて、\n今はパラパラを踊ろう。',
    'kitsnyang.sound.paradise.highlight': 'パラパラ',
    'kitsnyang.sound.geoje': '巨済の潮風',
    'kitsnyang.sound.geoje.poem': '窓の隙間から、\n青い海の匂いがすべり込む。',
    'kitsnyang.sound.geoje.highlight': '青い海',
    'kitsnyang.sound.ventanas': 'きらめく海の窓',
    'kitsnyang.sound.ventanas.poem': '海の上の星みたいに窓が光り、\n街の灯りがゆっくり踊りはじめる。',
    'kitsnyang.sound.ventanas.highlight': '窓が光り',
    'kitsnyang.sound.infinite': '無限回廊',
    'kitsnyang.player.eyebrow': '今の試聴',
    'kitsnyang.player.ready': 'トラックを押すと再生します。',
    'kitsnyang.player.playing': '再生中',
    'kitsnyang.player.paused': '一時停止中',
    'kitsnyang.player.ended': 'もう一度聴くには再生を押してください。',
    'kitsnyang.player.play': '再生',
    'kitsnyang.player.pause': '一時停止',
    'kitsnyang.player.error': 'このトラックを再生できません。',
    'kitsnyang.closing.eyebrow': 'やさしく起きる',
    'kitsnyang.closing.title': '起きることも<br />少しだけかわいく。',
    'kitsnyang.closing.body': '키츠냥は無料で、広告がなく、朝のための音を選べます。',
  },
  zh: {
    'common.appName': '奇茨喵',
    'common.header.aria': '主导航',
    'common.home.aria': 'skyepodium 首页',
    'common.nav.aria': '页面',
    'common.language.aria': '选择语言',
    'common.language.ko': '韩语',
    'common.language.en': '英语',
    'common.language.ja': '日语',
    'common.language.zh': '简体中文',
    'common.language.zhTW': '繁体中文',
    'common.language.vi': '越南语',
    'common.language.es': '西班牙语',
    'common.language.fr': '法语',
    'home.meta.description': '介绍 skyepodium 项目与服务的静态宣传网站。',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': '小型服务，清晰互动。',
    'home.hero.title': '做得小，<br />打磨到能长久使用。',
    'home.hero.lead':
      '我制作并打磨应用、工具和小型数字服务。现在正在整理晨间闹钟应用 <a href="./kitsnyang.html">키츠냥</a>。',
    'home.hero.cta': '查看 키츠냥',
    'home.actions.aria': '代表项目',
    'home.project.body': '免费、无广告、多种闹钟音。让早晨稍微轻松一点的闹钟。',
    'home.project.linkAria': '前往 키츠냥 介绍页',
    'kitsnyang.meta.description':
      '키츠냥 是一款免费且无广告的晨间闹钟应用，提供多种闹钟音和清爽的闹钟设置界面。',
    'kitsnyang.meta.title': '키츠냥 - 让早晨稍微轻松一点的闹钟',
    'kitsnyang.hero.eyebrow': '免费闹钟应用 / 无广告',
    'kitsnyang.hero.line': '让起床稍微轻松一点的晨间闹钟。',
    'kitsnyang.proof.aria': '키츠냥 的主要特色',
    'kitsnyang.proof.free': '免费',
    'kitsnyang.proof.noAds': '无广告',
    'kitsnyang.proof.sounds': '多种闹钟音',
    'kitsnyang.heroStage.aria': '키츠냥 应用界面预览',
    'kitsnyang.icon.alt': '키츠냥 应用图标',
    'kitsnyang.phone.list.aria': '闹钟列表界面示例',
    'kitsnyang.phone.sound.aria': '闹钟音选择界面示例',
    'kitsnyang.alarm.daily': '每天',
    'kitsnyang.alarm.weekdays': '工作日',
    'kitsnyang.alarm.weekend': '周末',
    'kitsnyang.sound.label': '闹钟音',
    'kitsnyang.sound.featured': '巨济海风',
    'kitsnyang.sound.caption': '蓝色海风',
    'kitsnyang.statement.eyebrow': '没有噪音',
    'kitsnyang.statement.title': '只留下需要的东西。',
    'kitsnyang.statement.free': '免费',
    'kitsnyang.statement.noAds': '无广告',
    'kitsnyang.statement.music': '多首音乐',
    'kitsnyang.statement.morning': '专为早晨',
    'kitsnyang.showcase.eyebrow': '四个界面',
    'kitsnyang.showcase.title': '四个界面就够了。',
    'kitsnyang.showcase.body': '选时间、选颜色、选声音，早上关掉就结束。',
    'kitsnyang.showcase.aria': '키츠냥 主要四个界面',
    'kitsnyang.screen.list.title': '闹钟列表',
    'kitsnyang.screen.list.body': '只让开启的闹钟清楚显示。',
    'kitsnyang.screen.time.title': '设置时间',
    'kitsnyang.screen.time.body': '滚轮轻巧又准确。',
    'kitsnyang.screen.sound.title': '闹钟音',
    'kitsnyang.sound.wizard': '破咒黎明',
    'kitsnyang.sound.orum': '小丘风，起来吧',
    'kitsnyang.sound.orum.poem': '沿着济州小丘路走，\n烦恼也像风一样变轻。',
    'kitsnyang.sound.orum.highlight': '小丘路',
    'kitsnyang.sound.today': '今天亮了',
    'kitsnyang.sound.today.poem': '叮叮，睁开眼。\n今天已经在等你。',
    'kitsnyang.sound.today.highlight': '睁开眼',
    'kitsnyang.sound.jeju': '济州橘子啵啵',
    'kitsnyang.sound.jeju.poem': '黄色阳光啵地绽开，\n心情也变得酸甜。',
    'kitsnyang.sound.jeju.highlight': '啵',
    'kitsnyang.sound.stayBlue': '驶向霓虹之海',
    'kitsnyang.sound.stayBlue.poem': '即使融进霓虹之海，\n蓝色余韵仍没有散去。',
    'kitsnyang.sound.stayBlue.highlight': '蓝色余韵',
    'kitsnyang.sound.dawn': '黎明序曲',
    'kitsnyang.screen.dismiss.title': '关闭闹钟',
    'kitsnyang.screen.dismiss.action': '关闭',
    'kitsnyang.screen.dismiss.body': '睁开眼就能一眼看懂。',
    'kitsnyang.sounds.eyebrow': '闹钟音',
    'kitsnyang.sounds.title': '每种心情都有不同早晨。',
    'kitsnyang.sounds.body': '按照应用中的前几首顺序，直接短暂试听。',
    'kitsnyang.sounds.aria': '代表闹钟音播放器',
    'kitsnyang.sound.paradise': 'Paraparadise',
    'kitsnyang.sound.paradise.poem': '先把脑袋放空，\n现在只管跳 ParaPara。',
    'kitsnyang.sound.paradise.highlight': 'ParaPara',
    'kitsnyang.sound.geoje': '巨济海风',
    'kitsnyang.sound.geoje.poem': '蓝色海风，\n从窗缝悄悄溜进来。',
    'kitsnyang.sound.geoje.highlight': '蓝色海风',
    'kitsnyang.sound.ventanas': '闪亮的海窗',
    'kitsnyang.sound.ventanas.poem': '窗像海上的星星一样发亮，\n城市灯火也开始跳舞。',
    'kitsnyang.sound.ventanas.highlight': '海上的星星',
    'kitsnyang.sound.infinite': '无尽回廊',
    'kitsnyang.player.eyebrow': '正在试听',
    'kitsnyang.player.ready': '点击曲目即可播放。',
    'kitsnyang.player.playing': '播放中',
    'kitsnyang.player.paused': '已暂停',
    'kitsnyang.player.ended': '想再听一次，请按播放。',
    'kitsnyang.player.play': '播放',
    'kitsnyang.player.pause': '暂停',
    'kitsnyang.player.error': '无法播放此曲目。',
    'kitsnyang.closing.eyebrow': '温柔醒来',
    'kitsnyang.closing.title': '起床这件事<br />也可以有点可爱。',
    'kitsnyang.closing.body': '키츠냥 免费、无广告，并让你选择为早晨准备的声音。',
  },
  'zh-TW': {
    'common.appName': '奇茲喵',
    'common.header.aria': '主要導覽',
    'common.home.aria': 'skyepodium 首頁',
    'common.nav.aria': '頁面',
    'common.language.aria': '選擇語言',
    'common.language.ko': '韓文',
    'common.language.en': '英文',
    'common.language.ja': '日文',
    'common.language.zh': '簡體中文',
    'common.language.zhTW': '繁體中文',
    'common.language.vi': '越南文',
    'common.language.es': '西班牙文',
    'common.language.fr': '法文',
    'home.meta.description': '介紹 skyepodium 作品與服務的靜態宣傳網站。',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': '小型服務，清楚俐落的互動。',
    'home.hero.title': '做得小，<br />打磨到能長久使用。',
    'home.hero.lead':
      '我製作並打磨應用程式、工具和小型數位服務。現在正在整理晨間鬧鐘應用 <a href="./kitsnyang.html">키츠냥</a>。',
    'home.hero.cta': '查看 키츠냥',
    'home.actions.aria': '代表作品',
    'home.project.body': '免費、無廣告、多種鬧鐘音。讓早晨稍微輕鬆一點的鬧鐘。',
    'home.project.linkAria': '前往 키츠냥 介紹頁',
    'kitsnyang.meta.description':
      '키츠냥 是免費且無廣告的晨間鬧鐘應用，提供多種鬧鐘音與俐落的鬧鐘設定畫面。',
    'kitsnyang.meta.title': '키츠냥 - 讓早晨稍微輕鬆一點的鬧鐘',
    'kitsnyang.hero.eyebrow': '免費鬧鐘應用 / 無廣告',
    'kitsnyang.hero.line': '讓起床稍微輕鬆一點的晨間鬧鐘。',
    'kitsnyang.proof.aria': '키츠냥 的主要特色',
    'kitsnyang.proof.free': '免費',
    'kitsnyang.proof.noAds': '無廣告',
    'kitsnyang.proof.sounds': '多種鬧鐘音',
    'kitsnyang.heroStage.aria': '키츠냥 應用畫面預覽',
    'kitsnyang.icon.alt': '키츠냥 應用圖示',
    'kitsnyang.phone.list.aria': '鬧鐘列表畫面範例',
    'kitsnyang.phone.sound.aria': '鬧鐘音選擇畫面範例',
    'kitsnyang.alarm.daily': '每天',
    'kitsnyang.alarm.weekdays': '平日',
    'kitsnyang.alarm.weekend': '週末',
    'kitsnyang.sound.label': '鬧鐘音',
    'kitsnyang.sound.featured': '巨濟海風',
    'kitsnyang.sound.caption': '藍色海風',
    'kitsnyang.statement.eyebrow': '沒有雜訊',
    'kitsnyang.statement.title': '只留下需要的東西。',
    'kitsnyang.statement.free': '免費',
    'kitsnyang.statement.noAds': '無廣告',
    'kitsnyang.statement.music': '多首音樂',
    'kitsnyang.statement.morning': '為早晨而做',
    'kitsnyang.showcase.eyebrow': '四個畫面',
    'kitsnyang.showcase.title': '四個畫面就夠了。',
    'kitsnyang.showcase.body': '選時間、選顏色、選聲音，早上關掉就結束。',
    'kitsnyang.showcase.aria': '키츠냥 主要四個畫面',
    'kitsnyang.screen.list.title': '鬧鐘列表',
    'kitsnyang.screen.list.body': '只讓開啟的鬧鐘清楚顯示。',
    'kitsnyang.screen.time.title': '設定時間',
    'kitsnyang.screen.time.body': '轉輪輕巧又精準。',
    'kitsnyang.screen.sound.title': '鬧鐘音',
    'kitsnyang.sound.wizard': '破咒黎明',
    'kitsnyang.sound.orum': '小丘風，起來吧',
    'kitsnyang.sound.orum.poem': '沿著濟州小丘路走，\n煩惱也像風一樣變輕。',
    'kitsnyang.sound.orum.highlight': '小丘路',
    'kitsnyang.sound.today': '今天亮了',
    'kitsnyang.sound.today.poem': '叮叮，睜開眼。\n今天已經在等你。',
    'kitsnyang.sound.today.highlight': '睜開眼',
    'kitsnyang.sound.jeju': '濟州橘子啵啵',
    'kitsnyang.sound.jeju.poem': '黃色陽光啵地綻開，\n心情也變得酸甜。',
    'kitsnyang.sound.jeju.highlight': '啵',
    'kitsnyang.sound.stayBlue': '駛向霓虹之海',
    'kitsnyang.sound.stayBlue.poem': '即使融進霓虹之海，\n藍色餘韻仍沒有散去。',
    'kitsnyang.sound.stayBlue.highlight': '藍色餘韻',
    'kitsnyang.sound.dawn': '黎明序曲',
    'kitsnyang.screen.dismiss.title': '解除鬧鐘',
    'kitsnyang.screen.dismiss.action': '關閉',
    'kitsnyang.screen.dismiss.body': '起床時一眼就能看懂。',
    'kitsnyang.sounds.eyebrow': '鬧鐘音',
    'kitsnyang.sounds.title': '每種心情都有不同早晨。',
    'kitsnyang.sounds.body': '按照應用程式中的前幾首順序，直接短暫試聽。',
    'kitsnyang.sounds.aria': '代表鬧鐘音播放器',
    'kitsnyang.sound.paradise': 'Paraparadise',
    'kitsnyang.sound.paradise.poem': '先把腦袋放空，\n現在只管跳 ParaPara。',
    'kitsnyang.sound.paradise.highlight': 'ParaPara',
    'kitsnyang.sound.geoje': '巨濟海風',
    'kitsnyang.sound.geoje.poem': '藍色海風，\n從窗縫悄悄溜進來。',
    'kitsnyang.sound.geoje.highlight': '藍色海風',
    'kitsnyang.sound.ventanas': '閃亮的海窗',
    'kitsnyang.sound.ventanas.poem': '窗像海上的星星一樣發亮，\n城市燈火也開始跳舞。',
    'kitsnyang.sound.ventanas.highlight': '海上的星星',
    'kitsnyang.sound.infinite': '無盡迴廊',
    'kitsnyang.player.eyebrow': '正在試聽',
    'kitsnyang.player.ready': '點選曲目即可播放。',
    'kitsnyang.player.playing': '播放中',
    'kitsnyang.player.paused': '已暫停',
    'kitsnyang.player.ended': '想再聽一次，請按播放。',
    'kitsnyang.player.play': '播放',
    'kitsnyang.player.pause': '暫停',
    'kitsnyang.player.error': '無法播放此曲目。',
    'kitsnyang.closing.eyebrow': '溫柔醒來',
    'kitsnyang.closing.title': '起床這件事<br />也可以有點可愛。',
    'kitsnyang.closing.body': '키츠냥 免費、無廣告，並讓你選擇為早晨準備的聲音。',
  },
  vi: {
    'common.appName': 'Kitsnyang',
    'common.header.aria': 'Điều hướng chính',
    'common.home.aria': 'Trang chủ skyepodium',
    'common.nav.aria': 'Trang',
    'common.language.aria': 'Chọn ngôn ngữ',
    'common.language.ko': 'Tiếng Hàn',
    'common.language.en': 'Tiếng Anh',
    'common.language.ja': 'Tiếng Nhật',
    'common.language.zh': 'Tiếng Trung giản thể',
    'common.language.zhTW': 'Tiếng Trung phồn thể',
    'common.language.vi': 'Tiếng Việt',
    'common.language.es': 'Tiếng Tây Ban Nha',
    'common.language.fr': 'Tiếng Pháp',
    'home.meta.description': 'Trang quảng bá tĩnh giới thiệu dự án và dịch vụ của skyepodium.',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': 'Dịch vụ nhỏ, tương tác rõ ràng.',
    'home.hero.title': 'Làm nhỏ gọn,<br />trau chuốt để dùng lâu.',
    'home.hero.lead':
      'Tôi xây dựng và hoàn thiện ứng dụng, công cụ và những dịch vụ số nhỏ. Hiện tại tôi đang chỉnh trang <a href="./kitsnyang.html">키츠냥</a>, một ứng dụng báo thức buổi sáng.',
    'home.hero.cta': 'Xem 키츠냥',
    'home.actions.aria': 'Dự án nổi bật',
    'home.project.body': 'Miễn phí, không quảng cáo, nhiều âm báo. Một chiếc báo thức giúp buổi sáng dễ chịu hơn một chút.',
    'home.project.linkAria': 'Đi tới trang giới thiệu 키츠냥',
    'kitsnyang.meta.description':
      '키츠냥 là ứng dụng báo thức buổi sáng miễn phí, không quảng cáo, có nhiều âm báo và màn hình cài đặt vui mắt.',
    'kitsnyang.meta.title': '키츠냥 - Báo thức giúp buổi sáng dễ chịu hơn',
    'kitsnyang.hero.eyebrow': 'Ứng dụng báo thức miễn phí / không quảng cáo',
    'kitsnyang.hero.line': 'Báo thức buổi sáng giúp việc thức dậy dễ chịu hơn một chút.',
    'kitsnyang.proof.aria': 'Tính năng chính của 키츠냥',
    'kitsnyang.proof.free': 'Miễn phí',
    'kitsnyang.proof.noAds': 'Không quảng cáo',
    'kitsnyang.proof.sounds': 'Nhiều âm báo',
    'kitsnyang.heroStage.aria': 'Bản xem trước màn hình ứng dụng 키츠냥',
    'kitsnyang.icon.alt': 'Biểu tượng ứng dụng 키츠냥',
    'kitsnyang.phone.list.aria': 'Ví dụ màn hình danh sách báo thức',
    'kitsnyang.phone.sound.aria': 'Ví dụ màn hình chọn âm báo',
    'kitsnyang.alarm.daily': 'Hằng ngày',
    'kitsnyang.alarm.weekdays': 'Ngày thường',
    'kitsnyang.alarm.weekend': 'Cuối tuần',
    'kitsnyang.sound.label': 'Âm báo',
    'kitsnyang.sound.featured': 'Gió biển Geoje',
    'kitsnyang.sound.caption': 'Mùi biển xanh',
    'kitsnyang.statement.eyebrow': 'Không nhiễu',
    'kitsnyang.statement.title': 'Chỉ giữ lại những gì cần thiết.',
    'kitsnyang.statement.free': 'Miễn phí',
    'kitsnyang.statement.noAds': 'Không quảng cáo',
    'kitsnyang.statement.music': 'Nhiều bản nhạc',
    'kitsnyang.statement.morning': 'Dành cho buổi sáng',
    'kitsnyang.showcase.eyebrow': 'Bốn màn hình',
    'kitsnyang.showcase.title': 'Bốn màn hình là đủ.',
    'kitsnyang.showcase.body': 'Chọn giờ, chọn màu, chọn âm thanh, rồi tắt vào buổi sáng.',
    'kitsnyang.showcase.aria': 'Bốn màn hình chính của 키츠냥',
    'kitsnyang.screen.list.title': 'Danh sách báo thức',
    'kitsnyang.screen.list.body': 'Chỉ báo thức đang bật được làm nổi bật.',
    'kitsnyang.screen.time.title': 'Đặt giờ',
    'kitsnyang.screen.time.body': 'Vòng chọn nhẹ và chính xác.',
    'kitsnyang.screen.sound.title': 'Âm báo',
    'kitsnyang.sound.wizard': 'Bình minh giải chú',
    'kitsnyang.sound.orum': 'Gió oreum bay lên',
    'kitsnyang.sound.orum.poem': 'Trên lối oreum ở Jeju,\nmuộn phiền nhẹ đi theo gió.',
    'kitsnyang.sound.orum.highlight': 'oreum',
    'kitsnyang.sound.today': 'Ngày bật sáng',
    'kitsnyang.sound.today.poem': 'Ding ding, mở mắt ra.\nNgày hôm nay đã đợi sẵn.',
    'kitsnyang.sound.today.highlight': 'mở mắt',
    'kitsnyang.sound.jeju': 'Quýt Jeju tok tok',
    'kitsnyang.sound.jeju.poem': 'Nắng vàng bật tok,\ntâm trạng cũng chua ngọt vui lên.',
    'kitsnyang.sound.jeju.highlight': 'tok',
    'kitsnyang.sound.stayBlue': 'Ra biển neon',
    'kitsnyang.sound.stayBlue.poem': 'Dẫu tan vào biển neon,\ndư âm xanh vẫn còn ở lại.',
    'kitsnyang.sound.stayBlue.highlight': 'dư âm xanh',
    'kitsnyang.sound.dawn': 'Khúc dạo bình minh',
    'kitsnyang.screen.dismiss.title': 'Tắt báo thức',
    'kitsnyang.screen.dismiss.action': 'Tắt',
    'kitsnyang.screen.dismiss.body': 'Vừa mở mắt là hiểu ngay.',
    'kitsnyang.sounds.eyebrow': 'Âm báo',
    'kitsnyang.sounds.title': 'Mỗi tâm trạng là một buổi sáng khác.',
    'kitsnyang.sounds.body': 'Nghe thử nhanh các bài đầu tiên theo đúng thứ tự trong ứng dụng.',
    'kitsnyang.sounds.aria': 'Trình phát âm báo tiêu biểu',
    'kitsnyang.sound.paradise': 'Paraparadise',
    'kitsnyang.sound.paradise.poem': 'Tạm gác mọi suy nghĩ.\nGiờ thì nhảy para para thôi.',
    'kitsnyang.sound.paradise.highlight': 'para para',
    'kitsnyang.sound.geoje': 'Gió biển Geoje',
    'kitsnyang.sound.geoje.poem': 'Mùi biển xanh\nlen qua khe cửa sổ.',
    'kitsnyang.sound.geoje.highlight': 'biển xanh',
    'kitsnyang.sound.ventanas': 'Những ô cửa biển lấp lánh',
    'kitsnyang.sound.ventanas.poem': 'Những ô cửa sáng như sao trên biển,\nrồi ánh phố bắt đầu nhảy múa.',
    'kitsnyang.sound.ventanas.highlight': 'sao trên biển',
    'kitsnyang.sound.infinite': 'Hành lang vô tận',
    'kitsnyang.player.eyebrow': 'Đang nghe thử',
    'kitsnyang.player.ready': 'Chạm vào một bài để phát.',
    'kitsnyang.player.playing': 'Đang phát',
    'kitsnyang.player.paused': 'Đã tạm dừng',
    'kitsnyang.player.ended': 'Nhấn phát để nghe lại.',
    'kitsnyang.player.play': 'Phát',
    'kitsnyang.player.pause': 'Tạm dừng',
    'kitsnyang.player.error': 'Không thể phát bài này.',
    'kitsnyang.closing.eyebrow': 'Thức dậy nhẹ nhàng',
    'kitsnyang.closing.title': 'Ngay cả việc thức dậy<br />cũng có thể đáng yêu hơn một chút.',
    'kitsnyang.closing.body': '키츠냥 miễn phí, không có quảng cáo và cho bạn chọn âm thanh dành cho buổi sáng.',
  },
  es: {
    'common.appName': 'Kitsnyang',
    'common.header.aria': 'Navegación principal',
    'common.home.aria': 'Inicio de skyepodium',
    'common.nav.aria': 'Páginas',
    'common.language.aria': 'Elegir idioma',
    'common.language.ko': 'Coreano',
    'common.language.en': 'Inglés',
    'common.language.ja': 'Japonés',
    'common.language.zh': 'Chino simplificado',
    'common.language.zhTW': 'Chino tradicional',
    'common.language.vi': 'Vietnamita',
    'common.language.es': 'Español',
    'common.language.fr': 'Francés',
    'home.meta.description': 'Sitio promocional estático para los proyectos y servicios de skyepodium.',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': 'Servicios pequeños, interacciones nítidas.',
    'home.hero.title': 'Servicios pequeños,<br />pulidos para durar.',
    'home.hero.lead':
      'Construyo y pulo apps, herramientas y pequeños servicios digitales. Ahora estoy dando forma a <a href="./kitsnyang.html">키츠냥</a>, una app de alarma matinal.',
    'home.hero.cta': 'Ver 키츠냥',
    'home.actions.aria': 'Trabajo destacado',
    'home.project.body': 'Gratis, sin anuncios, con varios sonidos. Una alarma que hace las mañanas un poco más amables.',
    'home.project.linkAria': 'Ir a la página de 키츠냥',
    'kitsnyang.meta.description':
      '키츠냥 es una app de alarma matinal gratuita y sin anuncios, con varios sonidos y una pantalla de configuración agradable.',
    'kitsnyang.meta.title': '키츠냥 - Una alarma matinal más amable',
    'kitsnyang.hero.eyebrow': 'App de alarma gratis / sin anuncios',
    'kitsnyang.hero.line': 'Una alarma matinal que hace despertar un poco más fácil.',
    'kitsnyang.proof.aria': 'Funciones principales de 키츠냥',
    'kitsnyang.proof.free': 'Gratis',
    'kitsnyang.proof.noAds': 'Sin anuncios',
    'kitsnyang.proof.sounds': 'Muchos sonidos',
    'kitsnyang.heroStage.aria': 'Vista previa de las pantallas de 키츠냥',
    'kitsnyang.icon.alt': 'Icono de la app 키츠냥',
    'kitsnyang.phone.list.aria': 'Ejemplo de pantalla de lista de alarmas',
    'kitsnyang.phone.sound.aria': 'Ejemplo de pantalla de selección de sonido',
    'kitsnyang.alarm.daily': 'Diario',
    'kitsnyang.alarm.weekdays': 'Laborables',
    'kitsnyang.alarm.weekend': 'Fin de semana',
    'kitsnyang.sound.label': 'Sonido',
    'kitsnyang.sound.featured': 'Brisa de Geoje',
    'kitsnyang.sound.caption': 'Azul de sal',
    'kitsnyang.statement.eyebrow': 'Sin ruido',
    'kitsnyang.statement.title': 'Solo lo necesario.',
    'kitsnyang.statement.free': 'Gratis',
    'kitsnyang.statement.noAds': 'Sin anuncios',
    'kitsnyang.statement.music': 'Varios temas',
    'kitsnyang.statement.morning': 'Para la mañana',
    'kitsnyang.showcase.eyebrow': 'Cuatro pantallas',
    'kitsnyang.showcase.title': 'Cuatro pantallas bastan.',
    'kitsnyang.showcase.body': 'Elige la hora, el color y el sonido, y apágala por la mañana.',
    'kitsnyang.showcase.aria': 'Cuatro pantallas principales de 키츠냥',
    'kitsnyang.screen.list.title': 'Lista de alarmas',
    'kitsnyang.screen.list.body': 'Solo destacan las alarmas activas.',
    'kitsnyang.screen.time.title': 'Ajustar hora',
    'kitsnyang.screen.time.body': 'La rueda es ligera y precisa.',
    'kitsnyang.screen.sound.title': 'Sonidos',
    'kitsnyang.sound.wizard': 'Amanecer del conjuro',
    'kitsnyang.sound.orum': 'Brisa de orum, arriba',
    'kitsnyang.sound.orum.poem': 'Por un sendero orum de Jeju,\nlas preocupaciones se aligeran con el viento.',
    'kitsnyang.sound.orum.highlight': 'orum',
    'kitsnyang.sound.today': 'Se enciende el día',
    'kitsnyang.sound.today.poem': 'Ding ding. Abre los ojos.\nEl día ya te está esperando.',
    'kitsnyang.sound.today.highlight': 'Abre los ojos',
    'kitsnyang.sound.jeju': 'Mandarina Jeju tok tok',
    'kitsnyang.sound.jeju.poem': 'El sol dorado estalla en tok,\ny el ánimo se vuelve agridulce.',
    'kitsnyang.sound.jeju.highlight': 'tok',
    'kitsnyang.sound.stayBlue': 'Al mar de neón',
    'kitsnyang.sound.stayBlue.poem': 'Aunque se disuelvan en neón,\nel resplandor azul se queda.',
    'kitsnyang.sound.stayBlue.highlight': 'resplandor azul',
    'kitsnyang.sound.dawn': 'Obertura del alba',
    'kitsnyang.screen.dismiss.title': 'Apagar alarma',
    'kitsnyang.screen.dismiss.action': 'Apagar',
    'kitsnyang.screen.dismiss.body': 'Claro de un vistazo al despertar.',
    'kitsnyang.sounds.eyebrow': 'Sonidos',
    'kitsnyang.sounds.title': 'Una mañana distinta para cada ánimo.',
    'kitsnyang.sounds.body': 'Escucha las primeras pistas en el mismo orden de la app.',
    'kitsnyang.sounds.aria': 'Reproductor de sonidos destacados',
    'kitsnyang.sound.paradise': 'Paraparaíso',
    'kitsnyang.sound.paradise.poem': 'Deja la mente en pausa.\nAhora toca bailar para para.',
    'kitsnyang.sound.paradise.highlight': 'para para',
    'kitsnyang.sound.geoje': 'Brisa de Geoje',
    'kitsnyang.sound.geoje.poem': 'Una brisa azul de sal\nse cuela por la ventana.',
    'kitsnyang.sound.geoje.highlight': 'azul de sal',
    'kitsnyang.sound.ventanas': 'Ventanas marinas brillantes',
    'kitsnyang.sound.ventanas.poem': 'Las ventanas brillan como estrellas sobre el mar,\ny la ciudad empieza a bailar.',
    'kitsnyang.sound.ventanas.highlight': 'estrellas sobre el mar',
    'kitsnyang.sound.infinite': 'Pasillo infinito',
    'kitsnyang.player.eyebrow': 'Vista previa',
    'kitsnyang.player.ready': 'Toca una pista para reproducirla.',
    'kitsnyang.player.playing': 'Reproduciendo',
    'kitsnyang.player.paused': 'En pausa',
    'kitsnyang.player.ended': 'Pulsa reproducir para escucharla otra vez.',
    'kitsnyang.player.play': 'Reproducir',
    'kitsnyang.player.pause': 'Pausar',
    'kitsnyang.player.error': 'No se puede reproducir esta pista.',
    'kitsnyang.closing.eyebrow': 'Despertar suave',
    'kitsnyang.closing.title': 'Incluso despertar<br />puede ser un poco adorable.',
    'kitsnyang.closing.body': '키츠냥 es gratis, no tiene anuncios y te deja elegir sonidos pensados para la mañana.',
  },
  fr: {
    'common.appName': 'Kitsnyang',
    'common.header.aria': 'Navigation principale',
    'common.home.aria': 'Accueil skyepodium',
    'common.nav.aria': 'Pages',
    'common.language.aria': 'Choisir la langue',
    'common.language.ko': 'Coréen',
    'common.language.en': 'Anglais',
    'common.language.ja': 'Japonais',
    'common.language.zh': 'Chinois simplifié',
    'common.language.zhTW': 'Chinois traditionnel',
    'common.language.vi': 'Vietnamien',
    'common.language.es': 'Espagnol',
    'common.language.fr': 'Français',
    'home.meta.description': 'Site promotionnel statique pour les projets et services de skyepodium.',
    'home.meta.title': 'skyepodium',
    'home.hero.eyebrow': 'Petits services, interactions nettes.',
    'home.hero.title': 'Des services simples,<br />polis pour durer.',
    'home.hero.lead':
      'Je crée et peaufine des apps, des outils et de petits services numériques. En ce moment, je façonne <a href="./kitsnyang.html">키츠냥</a>, une app de réveil matinal.',
    'home.hero.cta': 'Voir 키츠냥',
    'home.actions.aria': 'Projet mis en avant',
    'home.project.body': 'Gratuit, sans publicité, avec plusieurs sons. Une alarme qui rend les matins un peu plus doux.',
    'home.project.linkAria': 'Aller à la page de 키츠냥',
    'kitsnyang.meta.description':
      '키츠냥 est une app de réveil matinal gratuite et sans publicité, avec plusieurs sons et un écran de réglage agréable.',
    'kitsnyang.meta.title': '키츠냥 - Une alarme matinale plus douce',
    'kitsnyang.hero.eyebrow': 'App de réveil gratuite / sans publicité',
    'kitsnyang.hero.line': 'Une alarme matinale qui rend le réveil un peu plus facile.',
    'kitsnyang.proof.aria': 'Fonctions clés de 키츠냥',
    'kitsnyang.proof.free': 'Gratuit',
    'kitsnyang.proof.noAds': 'Sans pub',
    'kitsnyang.proof.sounds': 'Plusieurs sons',
    'kitsnyang.heroStage.aria': 'Aperçu des écrans de 키츠냥',
    'kitsnyang.icon.alt': 'Icône de l’app 키츠냥',
    'kitsnyang.phone.list.aria': 'Exemple d’écran de liste d’alarmes',
    'kitsnyang.phone.sound.aria': 'Exemple d’écran de choix du son',
    'kitsnyang.alarm.daily': 'Tous les jours',
    'kitsnyang.alarm.weekdays': 'Semaine',
    'kitsnyang.alarm.weekend': 'Week-end',
    'kitsnyang.sound.label': 'Son',
    'kitsnyang.sound.featured': 'Brise de Geoje',
    'kitsnyang.sound.caption': 'Brise bleue',
    'kitsnyang.statement.eyebrow': 'Sans bruit',
    'kitsnyang.statement.title': 'Seulement l’essentiel.',
    'kitsnyang.statement.free': 'Gratuit',
    'kitsnyang.statement.noAds': 'Sans pub',
    'kitsnyang.statement.music': 'Plusieurs pistes',
    'kitsnyang.statement.morning': 'Pour le matin',
    'kitsnyang.showcase.eyebrow': 'Quatre écrans',
    'kitsnyang.showcase.title': 'Quatre écrans suffisent.',
    'kitsnyang.showcase.body': 'Choisis l’heure, la couleur, le son, puis arrête l’alarme le matin.',
    'kitsnyang.showcase.aria': 'Quatre écrans principaux de 키츠냥',
    'kitsnyang.screen.list.title': 'Liste d’alarmes',
    'kitsnyang.screen.list.body': 'Seules les alarmes actives ressortent.',
    'kitsnyang.screen.time.title': 'Régler l’heure',
    'kitsnyang.screen.time.body': 'La roue reste légère et précise.',
    'kitsnyang.screen.sound.title': 'Sons',
    'kitsnyang.sound.wizard': 'Aube du sort brisé',
    'kitsnyang.sound.orum': 'Brise d’oreum, monte',
    'kitsnyang.sound.orum.poem': 'Sur un sentier d’oreum à Jeju,\nles soucis deviennent légers comme le vent.',
    'kitsnyang.sound.orum.highlight': 'oreum',
    'kitsnyang.sound.today': 'Le jour s’allume',
    'kitsnyang.sound.today.poem': 'Ding ding. Ouvre les yeux.\nLe jour t’attend déjà.',
    'kitsnyang.sound.today.highlight': 'Ouvre les yeux',
    'kitsnyang.sound.jeju': 'Mandarine de Jeju tok tok',
    'kitsnyang.sound.jeju.poem': 'Le soleil doré éclate en tok,\net l’humeur devient douce-acidulée.',
    'kitsnyang.sound.jeju.highlight': 'tok',
    'kitsnyang.sound.stayBlue': 'Vers la mer de néon',
    'kitsnyang.sound.stayBlue.poem': 'Même fondu dans le néon,\nle sillage bleu demeure.',
    'kitsnyang.sound.stayBlue.highlight': 'sillage bleu',
    'kitsnyang.sound.dawn': 'Ouverture de l’aube',
    'kitsnyang.screen.dismiss.title': 'Arrêter l’alarme',
    'kitsnyang.screen.dismiss.action': 'Arrêter',
    'kitsnyang.screen.dismiss.body': 'Clair d’un coup d’œil au réveil.',
    'kitsnyang.sounds.eyebrow': 'Sons',
    'kitsnyang.sounds.title': 'Un matin différent selon l’humeur.',
    'kitsnyang.sounds.body': 'Écoute les premières pistes dans le même ordre que l’app.',
    'kitsnyang.sounds.aria': 'Lecteur des sons mis en avant',
    'kitsnyang.sound.paradise': 'Paraparadis',
    'kitsnyang.sound.paradise.poem': 'Pose les pensées une minute.\nC’est l’heure du para para.',
    'kitsnyang.sound.paradise.highlight': 'para para',
    'kitsnyang.sound.geoje': 'Brise de Geoje',
    'kitsnyang.sound.geoje.poem': 'Une brise bleue et salée\nse glisse par la fenêtre.',
    'kitsnyang.sound.geoje.highlight': 'bleue',
    'kitsnyang.sound.ventanas': 'Fenêtres marines brillantes',
    'kitsnyang.sound.ventanas.poem': 'Les fenêtres brillent comme des étoiles sur la mer,\net les lumières de la ville commencent à danser.',
    'kitsnyang.sound.ventanas.highlight': 'étoiles sur la mer',
    'kitsnyang.sound.infinite': 'Couloir sans fin',
    'kitsnyang.player.eyebrow': 'Extrait en cours',
    'kitsnyang.player.ready': 'Touchez une piste pour la lire.',
    'kitsnyang.player.playing': 'Lecture en cours',
    'kitsnyang.player.paused': 'En pause',
    'kitsnyang.player.ended': 'Appuyez sur lecture pour l’écouter encore.',
    'kitsnyang.player.play': 'Lire',
    'kitsnyang.player.pause': 'Pause',
    'kitsnyang.player.error': 'Impossible de lire cette piste.',
    'kitsnyang.closing.eyebrow': 'Se réveiller en douceur',
    'kitsnyang.closing.title': 'Même se réveiller<br />peut devenir un peu mignon.',
    'kitsnyang.closing.body': '키츠냥 est gratuit, sans publicité, et te laisse choisir des sons pensés pour le matin.',
  },
};

const PRIVACY_TRANSLATIONS = {
  ko: {
    'common.privacy': '개인정보',
    'common.privacyLong': '개인정보 처리방침',
    'privacy.meta.description':
      '키츠냥은 개인정보를 수집하거나 외부로 전송하지 않습니다. 알람 설정 데이터는 기기 내에만 저장됩니다.',
    'privacy.meta.title': '키츠냥 개인정보 처리방침',
    'privacy.hero.eyebrow': '개인정보 처리방침',
    'privacy.hero.title': '키츠냥은 개인정보를 수집하지 않습니다.',
    'privacy.hero.lead': '알람 시간, 요일, 알림음 같은 설정은 사용자의 기기 안에만 저장됩니다.',
    'privacy.summary.aria': '개인정보 요약',
    'privacy.summary.collect.title': '수집 없음',
    'privacy.summary.collect.body': '이름, 이메일, 위치, 연락처, 기기 식별자를 수집하지 않습니다.',
    'privacy.summary.local.title': '기기 내 저장',
    'privacy.summary.local.body': '알람 설정 데이터는 외부 서버로 전송되지 않습니다.',
    'privacy.summary.thirdParty.title': '추적 도구 없음',
    'privacy.summary.thirdParty.body': '광고 SDK, 분석 SDK, 제3자 추적 도구를 사용하지 않습니다.',
    'privacy.policy.title': '키츠냥 개인정보 처리방침',
    'privacy.collection.title': '수집하는 개인정보',
    'privacy.collection.body':
      '키츠냥은 이름, 이메일, 위치, 연락처, 기기 식별자 등 개인을 식별할 수 있는 정보를 수집하지 않습니다.',
    'privacy.local.title': '기기 내 저장 데이터',
    'privacy.local.body': '알람 시간, 요일, 알림음, 색상 같은 앱 설정은 사용자의 기기 안에만 저장됩니다.',
    'privacy.sharing.title': '외부 전송 및 제3자 제공',
    'privacy.sharing.body': '키츠냥은 저장된 데이터를 외부 서버로 전송하거나 제3자에게 제공하지 않습니다.',
    'privacy.ads.title': '광고 및 분석 도구',
    'privacy.ads.body': '키츠냥은 광고 SDK, 분석 SDK, 제3자 추적 도구를 사용하지 않습니다.',
    'privacy.delete.title': '데이터 삭제',
    'privacy.delete.body': '기기 내 저장 데이터는 앱 삭제 시 함께 삭제됩니다.',
    'privacy.contact.title': '문의',
    'privacy.contact.body': '개인정보 처리방침에 관한 문의는 이메일로 보내 주세요.',
    'privacy.updated': '시행일: 2026년 5월 31일',
    'privacy.backCta': '키츠냥 소개로 돌아가기',
  },
  en: {
    'common.privacy': 'Privacy',
    'common.privacyLong': 'Privacy Policy',
    'privacy.meta.description':
      'Kitsnyang does not collect or transmit personal information. Alarm settings stay on your device.',
    'privacy.meta.title': 'Kitsnyang Privacy Policy',
    'privacy.hero.eyebrow': 'Privacy Policy',
    'privacy.hero.title': 'Kitsnyang does not collect personal information.',
    'privacy.hero.lead': 'Settings like alarm time, repeat days, and alarm sounds stay on your device.',
    'privacy.summary.aria': 'Privacy summary',
    'privacy.summary.collect.title': 'No collection',
    'privacy.summary.collect.body': 'We do not collect names, email addresses, location, contacts, or device IDs.',
    'privacy.summary.local.title': 'Stored on device',
    'privacy.summary.local.body': 'Alarm settings are not sent to external servers.',
    'privacy.summary.thirdParty.title': 'No tracking tools',
    'privacy.summary.thirdParty.body': 'We do not use ad SDKs, analytics SDKs, or third-party tracking tools.',
    'privacy.policy.title': 'Kitsnyang Privacy Policy',
    'privacy.collection.title': 'Personal information collected',
    'privacy.collection.body':
      'Kitsnyang does not collect information that can identify you, such as name, email, location, contacts, or device identifiers.',
    'privacy.local.title': 'Data stored on your device',
    'privacy.local.body': 'App settings such as alarm time, repeat days, alarm sound, and color are stored only on your device.',
    'privacy.sharing.title': 'External transfer and third-party sharing',
    'privacy.sharing.body': 'Kitsnyang does not send stored data to external servers or share it with third parties.',
    'privacy.ads.title': 'Ads and analytics',
    'privacy.ads.body': 'Kitsnyang does not use ad SDKs, analytics SDKs, or third-party tracking tools.',
    'privacy.delete.title': 'Deleting data',
    'privacy.delete.body': 'Data stored on your device is deleted when you delete the app.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body': 'For questions about this Privacy Policy, please email us.',
    'privacy.updated': 'Effective date: May 31, 2026',
    'privacy.backCta': 'Back to Kitsnyang',
  },
  ja: {
    'common.privacy': 'プライバシー',
    'common.privacyLong': 'プライバシーポリシー',
    'privacy.meta.description':
      'キツニャンは個人情報を収集したり外部へ送信したりしません。アラーム設定は端末内にのみ保存されます。',
    'privacy.meta.title': 'キツニャン プライバシーポリシー',
    'privacy.hero.eyebrow': 'プライバシーポリシー',
    'privacy.hero.title': 'キツニャンは個人情報を収集しません。',
    'privacy.hero.lead': 'アラーム時刻、曜日、通知音などの設定はユーザーの端末内にのみ保存されます。',
    'privacy.summary.aria': 'プライバシー概要',
    'privacy.summary.collect.title': '収集なし',
    'privacy.summary.collect.body': '名前、メールアドレス、位置情報、連絡先、端末IDを収集しません。',
    'privacy.summary.local.title': '端末内に保存',
    'privacy.summary.local.body': 'アラーム設定データは外部サーバーへ送信されません。',
    'privacy.summary.thirdParty.title': '追跡ツールなし',
    'privacy.summary.thirdParty.body': '広告SDK、分析SDK、第三者の追跡ツールは使用しません。',
    'privacy.policy.title': 'キツニャン プライバシーポリシー',
    'privacy.collection.title': '収集する個人情報',
    'privacy.collection.body':
      'キツニャンは、名前、メールアドレス、位置情報、連絡先、端末識別子など、個人を識別できる情報を収集しません。',
    'privacy.local.title': '端末内に保存されるデータ',
    'privacy.local.body': 'アラーム時刻、曜日、通知音、色などのアプリ設定は、ユーザーの端末内にのみ保存されます。',
    'privacy.sharing.title': '外部送信および第三者提供',
    'privacy.sharing.body': 'キツニャンは保存されたデータを外部サーバーへ送信したり、第三者へ提供したりしません。',
    'privacy.ads.title': '広告および分析ツール',
    'privacy.ads.body': 'キツニャンは広告SDK、分析SDK、第三者の追跡ツールを使用しません。',
    'privacy.delete.title': 'データの削除',
    'privacy.delete.body': '端末内に保存されたデータは、アプリを削除すると一緒に削除されます。',
    'privacy.contact.title': 'お問い合わせ',
    'privacy.contact.body': 'このプライバシーポリシーに関するお問い合わせはメールでご連絡ください。',
    'privacy.updated': '施行日: 2026年5月31日',
    'privacy.backCta': 'キツニャン紹介へ戻る',
  },
  zh: {
    'common.privacy': '隐私',
    'common.privacyLong': '隐私政策',
    'privacy.meta.description': '奇茨喵不会收集或向外部传输个人信息。闹钟设置数据只保存在设备内。',
    'privacy.meta.title': '奇茨喵隐私政策',
    'privacy.hero.eyebrow': '隐私政策',
    'privacy.hero.title': '奇茨喵不会收集个人信息。',
    'privacy.hero.lead': '闹钟时间、重复日期和铃声等设置只保存在用户设备内。',
    'privacy.summary.aria': '隐私摘要',
    'privacy.summary.collect.title': '不收集',
    'privacy.summary.collect.body': '我们不会收集姓名、邮箱、位置、联系人或设备 ID。',
    'privacy.summary.local.title': '设备内保存',
    'privacy.summary.local.body': '闹钟设置数据不会发送到外部服务器。',
    'privacy.summary.thirdParty.title': '无追踪工具',
    'privacy.summary.thirdParty.body': '我们不使用广告 SDK、分析 SDK 或第三方追踪工具。',
    'privacy.policy.title': '奇茨喵隐私政策',
    'privacy.collection.title': '收集的个人信息',
    'privacy.collection.body': '奇茨喵不会收集姓名、邮箱、位置、联系人、设备标识符等可识别个人的信息。',
    'privacy.local.title': '设备内保存的数据',
    'privacy.local.body': '闹钟时间、重复日期、铃声、颜色等应用设置只保存在用户设备内。',
    'privacy.sharing.title': '外部传输和第三方共享',
    'privacy.sharing.body': '奇茨喵不会把已保存的数据发送到外部服务器，也不会提供给第三方。',
    'privacy.ads.title': '广告和分析工具',
    'privacy.ads.body': '奇茨喵不使用广告 SDK、分析 SDK 或第三方追踪工具。',
    'privacy.delete.title': '数据删除',
    'privacy.delete.body': '设备内保存的数据会在删除应用时一并删除。',
    'privacy.contact.title': '联系',
    'privacy.contact.body': '如对本隐私政策有疑问，请通过电子邮件联系我们。',
    'privacy.updated': '生效日期：2026年5月31日',
    'privacy.backCta': '返回奇茨喵介绍',
  },
  'zh-TW': {
    'common.privacy': '隱私',
    'common.privacyLong': '隱私權政策',
    'privacy.meta.description': '奇茲喵不會收集或向外部傳輸個人資訊。鬧鐘設定資料只會儲存在裝置內。',
    'privacy.meta.title': '奇茲喵隱私權政策',
    'privacy.hero.eyebrow': '隱私權政策',
    'privacy.hero.title': '奇茲喵不會收集個人資訊。',
    'privacy.hero.lead': '鬧鐘時間、重複日期和鈴聲等設定只會儲存在使用者的裝置內。',
    'privacy.summary.aria': '隱私摘要',
    'privacy.summary.collect.title': '不收集',
    'privacy.summary.collect.body': '我們不會收集姓名、電子郵件、位置、聯絡人或裝置 ID。',
    'privacy.summary.local.title': '儲存在裝置內',
    'privacy.summary.local.body': '鬧鐘設定資料不會傳送到外部伺服器。',
    'privacy.summary.thirdParty.title': '沒有追蹤工具',
    'privacy.summary.thirdParty.body': '我們不使用廣告 SDK、分析 SDK 或第三方追蹤工具。',
    'privacy.policy.title': '奇茲喵隱私權政策',
    'privacy.collection.title': '收集的個人資訊',
    'privacy.collection.body': '奇茲喵不會收集姓名、電子郵件、位置、聯絡人、裝置識別碼等可識別個人的資訊。',
    'privacy.local.title': '儲存在裝置內的資料',
    'privacy.local.body': '鬧鐘時間、重複日期、鈴聲、顏色等應用程式設定只會儲存在使用者的裝置內。',
    'privacy.sharing.title': '外部傳輸與第三方提供',
    'privacy.sharing.body': '奇茲喵不會把已儲存的資料傳送到外部伺服器，也不會提供給第三方。',
    'privacy.ads.title': '廣告與分析工具',
    'privacy.ads.body': '奇茲喵不使用廣告 SDK、分析 SDK 或第三方追蹤工具。',
    'privacy.delete.title': '資料刪除',
    'privacy.delete.body': '裝置內儲存的資料會在刪除應用程式時一併刪除。',
    'privacy.contact.title': '聯絡',
    'privacy.contact.body': '如對本隱私權政策有疑問，請透過電子郵件聯絡我們。',
    'privacy.updated': '生效日期：2026年5月31日',
    'privacy.backCta': '返回奇茲喵介紹',
  },
  vi: {
    'common.privacy': 'Quyền riêng tư',
    'common.privacyLong': 'Chính sách quyền riêng tư',
    'privacy.meta.description':
      'Kitsnyang không thu thập hoặc gửi thông tin cá nhân ra bên ngoài. Dữ liệu cài đặt báo thức chỉ được lưu trên thiết bị.',
    'privacy.meta.title': 'Chính sách quyền riêng tư của Kitsnyang',
    'privacy.hero.eyebrow': 'Chính sách quyền riêng tư',
    'privacy.hero.title': 'Kitsnyang không thu thập thông tin cá nhân.',
    'privacy.hero.lead': 'Các cài đặt như giờ báo thức, ngày lặp lại và âm báo chỉ được lưu trên thiết bị của bạn.',
    'privacy.summary.aria': 'Tóm tắt quyền riêng tư',
    'privacy.summary.collect.title': 'Không thu thập',
    'privacy.summary.collect.body': 'Chúng tôi không thu thập tên, email, vị trí, danh bạ hoặc ID thiết bị.',
    'privacy.summary.local.title': 'Lưu trên thiết bị',
    'privacy.summary.local.body': 'Dữ liệu cài đặt báo thức không được gửi đến máy chủ bên ngoài.',
    'privacy.summary.thirdParty.title': 'Không có công cụ theo dõi',
    'privacy.summary.thirdParty.body': 'Chúng tôi không dùng SDK quảng cáo, SDK phân tích hoặc công cụ theo dõi của bên thứ ba.',
    'privacy.policy.title': 'Chính sách quyền riêng tư của Kitsnyang',
    'privacy.collection.title': 'Thông tin cá nhân được thu thập',
    'privacy.collection.body':
      'Kitsnyang không thu thập thông tin có thể nhận dạng bạn như tên, email, vị trí, danh bạ hoặc mã định danh thiết bị.',
    'privacy.local.title': 'Dữ liệu lưu trên thiết bị',
    'privacy.local.body': 'Các cài đặt như giờ báo thức, ngày lặp lại, âm báo và màu sắc chỉ được lưu trên thiết bị của bạn.',
    'privacy.sharing.title': 'Gửi ra bên ngoài và chia sẻ với bên thứ ba',
    'privacy.sharing.body': 'Kitsnyang không gửi dữ liệu đã lưu đến máy chủ bên ngoài hoặc chia sẻ với bên thứ ba.',
    'privacy.ads.title': 'Quảng cáo và phân tích',
    'privacy.ads.body': 'Kitsnyang không dùng SDK quảng cáo, SDK phân tích hoặc công cụ theo dõi của bên thứ ba.',
    'privacy.delete.title': 'Xóa dữ liệu',
    'privacy.delete.body': 'Dữ liệu lưu trên thiết bị sẽ bị xóa cùng khi bạn xóa ứng dụng.',
    'privacy.contact.title': 'Liên hệ',
    'privacy.contact.body': 'Nếu có câu hỏi về Chính sách quyền riêng tư này, vui lòng gửi email cho chúng tôi.',
    'privacy.updated': 'Ngày có hiệu lực: 31 tháng 5, 2026',
    'privacy.backCta': 'Quay lại Kitsnyang',
  },
  es: {
    'common.privacy': 'Privacidad',
    'common.privacyLong': 'Política de privacidad',
    'privacy.meta.description':
      'Kitsnyang no recopila ni transmite información personal. Los ajustes de alarma permanecen en tu dispositivo.',
    'privacy.meta.title': 'Política de privacidad de Kitsnyang',
    'privacy.hero.eyebrow': 'Política de privacidad',
    'privacy.hero.title': 'Kitsnyang no recopila información personal.',
    'privacy.hero.lead': 'Ajustes como la hora, los días de repetición y el sonido de la alarma se guardan solo en tu dispositivo.',
    'privacy.summary.aria': 'Resumen de privacidad',
    'privacy.summary.collect.title': 'Sin recopilación',
    'privacy.summary.collect.body': 'No recopilamos nombres, correos, ubicación, contactos ni ID de dispositivo.',
    'privacy.summary.local.title': 'Guardado en el dispositivo',
    'privacy.summary.local.body': 'Los ajustes de alarma no se envían a servidores externos.',
    'privacy.summary.thirdParty.title': 'Sin herramientas de seguimiento',
    'privacy.summary.thirdParty.body': 'No usamos SDK de anuncios, SDK de analítica ni herramientas de seguimiento de terceros.',
    'privacy.policy.title': 'Política de privacidad de Kitsnyang',
    'privacy.collection.title': 'Información personal recopilada',
    'privacy.collection.body':
      'Kitsnyang no recopila información que pueda identificarte, como nombre, correo, ubicación, contactos o identificadores del dispositivo.',
    'privacy.local.title': 'Datos guardados en tu dispositivo',
    'privacy.local.body': 'Los ajustes de la app, como hora, días de repetición, sonido y color, se guardan solo en tu dispositivo.',
    'privacy.sharing.title': 'Transferencia externa y terceros',
    'privacy.sharing.body': 'Kitsnyang no envía datos guardados a servidores externos ni los comparte con terceros.',
    'privacy.ads.title': 'Anuncios y analítica',
    'privacy.ads.body': 'Kitsnyang no usa SDK de anuncios, SDK de analítica ni herramientas de seguimiento de terceros.',
    'privacy.delete.title': 'Eliminación de datos',
    'privacy.delete.body': 'Los datos guardados en tu dispositivo se eliminan al eliminar la app.',
    'privacy.contact.title': 'Contacto',
    'privacy.contact.body': 'Para preguntas sobre esta Política de privacidad, escríbenos por email.',
    'privacy.updated': 'Fecha de entrada en vigor: 31 de mayo de 2026',
    'privacy.backCta': 'Volver a Kitsnyang',
  },
  fr: {
    'common.privacy': 'Confidentialité',
    'common.privacyLong': 'Politique de confidentialité',
    'privacy.meta.description':
      'Kitsnyang ne collecte ni ne transmet d’informations personnelles. Les réglages d’alarme restent sur votre appareil.',
    'privacy.meta.title': 'Politique de confidentialité de Kitsnyang',
    'privacy.hero.eyebrow': 'Politique de confidentialité',
    'privacy.hero.title': 'Kitsnyang ne collecte pas d’informations personnelles.',
    'privacy.hero.lead': 'Les réglages comme l’heure, les jours de répétition et le son restent uniquement sur votre appareil.',
    'privacy.summary.aria': 'Résumé de confidentialité',
    'privacy.summary.collect.title': 'Aucune collecte',
    'privacy.summary.collect.body': 'Nous ne collectons pas les noms, emails, lieux, contacts ou identifiants d’appareil.',
    'privacy.summary.local.title': 'Stocké sur l’appareil',
    'privacy.summary.local.body': 'Les réglages d’alarme ne sont pas envoyés vers des serveurs externes.',
    'privacy.summary.thirdParty.title': 'Aucun suivi',
    'privacy.summary.thirdParty.body': 'Nous n’utilisons aucun SDK publicitaire, SDK d’analyse ou outil de suivi tiers.',
    'privacy.policy.title': 'Politique de confidentialité de Kitsnyang',
    'privacy.collection.title': 'Informations personnelles collectées',
    'privacy.collection.body':
      'Kitsnyang ne collecte aucune information permettant de vous identifier, comme le nom, l’email, la position, les contacts ou les identifiants d’appareil.',
    'privacy.local.title': 'Données stockées sur votre appareil',
    'privacy.local.body': 'Les réglages de l’app, comme l’heure, les jours de répétition, le son et la couleur, sont stockés uniquement sur votre appareil.',
    'privacy.sharing.title': 'Transfert externe et partage avec des tiers',
    'privacy.sharing.body': 'Kitsnyang n’envoie pas les données stockées vers des serveurs externes et ne les partage pas avec des tiers.',
    'privacy.ads.title': 'Publicité et analyse',
    'privacy.ads.body': 'Kitsnyang n’utilise aucun SDK publicitaire, SDK d’analyse ou outil de suivi tiers.',
    'privacy.delete.title': 'Suppression des données',
    'privacy.delete.body': 'Les données stockées sur votre appareil sont supprimées lorsque vous supprimez l’app.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body': 'Pour toute question sur cette Politique de confidentialité, contactez-nous par email.',
    'privacy.updated': 'Date d’entrée en vigueur : 31 mai 2026',
    'privacy.backCta': 'Retour à Kitsnyang',
  },
};

for (const [language, translations] of Object.entries(PRIVACY_TRANSLATIONS)) {
  Object.assign(TRANSLATIONS[language], translations);
}

const root = document.documentElement;
const cat = document.querySelector('[data-cat]');
const heroStage = document.querySelector('[data-hero-stage]');
const soundPlayer = document.querySelector('[data-sound-player]');
const audioPlayer = document.querySelector('[data-audio-player]');
const playerToggle = document.querySelector('[data-player-toggle]');
const playerToggleIcon = document.querySelector('[data-player-toggle-icon]');
const playerTitle = document.querySelector('[data-player-title]');
const playerStatus = document.querySelector('[data-player-status]');
const playerPoem = document.querySelector('[data-player-poem]');
const playerProgress = document.querySelector('[data-player-progress]');
const trackButtons = Array.from(document.querySelectorAll('[data-track-id]'));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let ticking = false;
let activeTrackButton = null;
let playerStatusKey = 'kitsnyang.player.ready';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeLanguage(value) {
  if (!value) {
    return null;
  }

  const language = value.replace(/_/g, '-').toLowerCase();

  if (language.startsWith('ko')) {
    return 'ko';
  }

  if (language.startsWith('en')) {
    return 'en';
  }

  if (language.startsWith('ja')) {
    return 'ja';
  }

  if (
    language === 'tw' ||
    language === 'zh-tw' ||
    language.startsWith('zh-tw-') ||
    language === 'zh-hant-tw' ||
    language.startsWith('zh-hant-tw-')
  ) {
    return 'zh-TW';
  }

  if (language === 'zh' || language.startsWith('zh-')) {
    return 'zh';
  }

  if (language.startsWith('vi')) {
    return 'vi';
  }

  if (language.startsWith('es')) {
    return 'es';
  }

  if (language.startsWith('fr')) {
    return 'fr';
  }

  return null;
}

function readStoredLanguage() {
  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch (error) {
    console.warn('Unable to read language preference.', error);
    return null;
  }
}

function writeStoredLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn('Unable to save language preference.', error);
  }
}

function getPreferredLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = normalizeLanguage(params.get('lang'));

  if (queryLanguage) {
    return queryLanguage;
  }

  const storedLanguage = readStoredLanguage();

  if (storedLanguage) {
    return storedLanguage;
  }

  for (const language of window.navigator.languages || [window.navigator.language]) {
    const normalizedLanguage = normalizeLanguage(language);

    if (normalizedLanguage) {
      return normalizedLanguage;
    }
  }

  return DEFAULT_LANGUAGE;
}

function getRawTranslation(language, key) {
  const activeTranslations = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];

  if (Object.prototype.hasOwnProperty.call(activeTranslations, key)) {
    return activeTranslations[key];
  }

  return TRANSLATIONS[DEFAULT_LANGUAGE][key] || '';
}

function formatTranslation(language, value) {
  const appName = getRawTranslation(language, 'common.appName');
  return value.split('키츠냥').join(appName);
}

function getTranslation(language, key) {
  return formatTranslation(language, getRawTranslation(language, key));
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderHighlightedTranslation(language, textKey, highlightKey) {
  const text = getTranslation(language, textKey);
  const highlight = getTranslation(language, highlightKey);
  const escapedText = escapeHtml(text).replace(/\n/g, '<br />');

  if (!highlight) {
    return escapedText;
  }

  const escapedHighlight = escapeHtml(highlight);
  const highlightIndex = escapedText.indexOf(escapedHighlight);

  if (highlightIndex < 0) {
    return escapedText;
  }

  return `${escapedText.slice(0, highlightIndex)}<mark>${escapedHighlight}</mark>${escapedText.slice(
    highlightIndex + escapedHighlight.length,
  )}`;
}

function updateLanguageUrl(language) {
  const url = new URL(window.location.href);

  if (language === DEFAULT_LANGUAGE) {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', language);
  }

  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function localizeHref(href, language) {
  const hashIndex = href.indexOf('#');
  const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
  const queryIndex = beforeHash.indexOf('?');
  const path = queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash;
  const query = queryIndex >= 0 ? beforeHash.slice(queryIndex + 1) : '';
  const params = new URLSearchParams(query);

  if (language === DEFAULT_LANGUAGE) {
    params.delete('lang');
  } else {
    params.set('lang', language);
  }

  const nextQuery = params.toString();
  return `${path}${nextQuery ? `?${nextQuery}` : ''}${hash}`;
}

function shouldPreserveLanguage(anchor) {
  const href = anchor.getAttribute('href');

  if (!href || href.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(href)) {
    return false;
  }

  return href.includes('.html');
}

function updateLocalLinks(language) {
  for (const anchor of document.querySelectorAll('a[href]')) {
    if (!shouldPreserveLanguage(anchor)) {
      continue;
    }

    const baseHref = anchor.dataset.baseHref || anchor.getAttribute('href');
    anchor.dataset.baseHref = baseHref;
    anchor.setAttribute('href', localizeHref(baseHref, language));
  }
}

function updateLanguageButtons(language) {
  for (const button of document.querySelectorAll('[data-language-option]')) {
    const option = button.getAttribute('data-language-option');
    const isActive = option === language;

    button.setAttribute('aria-checked', String(isActive));
    button.classList.toggle('is-active', isActive);
  }
}

function updateLocalizedContent(language) {
  root.lang = language;
  root.dataset.language = language;

  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.textContent = getTranslation(language, element.getAttribute('data-i18n'));
  }

  for (const element of document.querySelectorAll('[data-i18n-html]')) {
    element.innerHTML = getTranslation(language, element.getAttribute('data-i18n-html'));
  }

  for (const element of document.querySelectorAll('[data-i18n-content]')) {
    element.setAttribute('content', getTranslation(language, element.getAttribute('data-i18n-content')));
  }

  for (const element of document.querySelectorAll('[data-i18n-aria-label]')) {
    element.setAttribute('aria-label', getTranslation(language, element.getAttribute('data-i18n-aria-label')));
  }

  for (const element of document.querySelectorAll('[data-i18n-alt]')) {
    element.setAttribute('alt', getTranslation(language, element.getAttribute('data-i18n-alt')));
  }

  updateLanguageButtons(language);
  updateLocalLinks(language);
  syncSoundPlayerText(language);
}

function setLanguage(language, options = {}) {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    return;
  }

  updateLocalizedContent(language);

  if (options.persist) {
    writeStoredLanguage(language);
  }

  if (options.updateUrl) {
    updateLanguageUrl(language);
  }
}

function bindLanguageControls() {
  for (const button of document.querySelectorAll('[data-language-option]')) {
    button.addEventListener('click', () => {
      setLanguage(button.getAttribute('data-language-option'), {
        persist: true,
        updateUrl: true,
      });
    });
  }
}

function getCurrentLanguage() {
  return root.dataset.language || DEFAULT_LANGUAGE;
}

function getTrackTitle(button, language) {
  return getTranslation(language, button.getAttribute('data-track-key'));
}

function getTrackPoemHtml(button, language) {
  return renderHighlightedTranslation(
    language,
    button.getAttribute('data-track-poem-key'),
    button.getAttribute('data-track-highlight-key'),
  );
}

function setPlayerStatus(key) {
  playerStatusKey = key;

  if (playerStatus) {
    playerStatus.textContent = getTranslation(getCurrentLanguage(), playerStatusKey);
  }
}

function syncSoundPlayerText(language) {
  if (!soundPlayer || !activeTrackButton) {
    return;
  }

  if (playerTitle) {
    playerTitle.textContent = getTrackTitle(activeTrackButton, language);
  }

  if (playerStatus) {
    playerStatus.textContent = getTranslation(language, playerStatusKey);
  }

  if (playerPoem) {
    playerPoem.innerHTML = getTrackPoemHtml(activeTrackButton, language);
  }

  syncPlayerToggleLabel();
}

function syncPlayerToggleLabel() {
  if (!playerToggle || !audioPlayer) {
    return;
  }

  const labelKey = audioPlayer.paused
    ? playerToggle.getAttribute('data-player-play-label')
    : playerToggle.getAttribute('data-player-pause-label');

  playerToggle.setAttribute('aria-label', getTranslation(getCurrentLanguage(), labelKey));

  if (playerToggleIcon) {
    playerToggleIcon.textContent = audioPlayer.paused ? '▶' : 'Ⅱ';
  }
}

function updatePlayerProgress() {
  if (!audioPlayer || !playerProgress) {
    return;
  }

  const duration = Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0 ? audioPlayer.duration : 1;
  const progress = clamp(audioPlayer.currentTime / duration, 0, 1);
  playerProgress.style.transform = `scaleX(${progress})`;
}

function selectTrack(button) {
  if (!button || !audioPlayer) {
    return;
  }

  activeTrackButton = button;

  for (const trackButton of trackButtons) {
    const isActive = trackButton === button;
    trackButton.classList.toggle('is-active', isActive);
    trackButton.setAttribute('aria-pressed', String(isActive));
  }

  const src = button.getAttribute('data-audio-src');
  if (src && audioPlayer.dataset.activeSrc !== src) {
    audioPlayer.src = src;
    audioPlayer.dataset.activeSrc = src;
    audioPlayer.load();
    updatePlayerProgress();
  }

  syncSoundPlayerText(getCurrentLanguage());
}

function setPlayerPlaying(isPlaying) {
  soundPlayer?.classList.toggle('is-playing', isPlaying);
  syncPlayerToggleLabel();
}

function playActiveTrack() {
  if (!audioPlayer || !activeTrackButton) {
    return;
  }

  audioPlayer.play().then(() => {
    setPlayerStatus('kitsnyang.player.playing');
  }).catch(error => {
    console.warn('Unable to play preview track.', error);
    setPlayerStatus('kitsnyang.player.error');
    setPlayerPlaying(false);
  });
}

function bindSoundPlayer() {
  if (!soundPlayer || !audioPlayer || trackButtons.length === 0) {
    return;
  }

  selectTrack(trackButtons[0]);
  setPlayerStatus('kitsnyang.player.ready');

  for (const button of trackButtons) {
    button.addEventListener('click', () => {
      selectTrack(button);
      audioPlayer.currentTime = 0;
      playActiveTrack();
    });
  }

  playerToggle?.addEventListener('click', () => {
    if (audioPlayer.paused) {
      playActiveTrack();
      return;
    }

    audioPlayer.pause();
  });

  audioPlayer.addEventListener('play', () => {
    setPlayerPlaying(true);
    setPlayerStatus('kitsnyang.player.playing');
  });

  audioPlayer.addEventListener('pause', () => {
    setPlayerPlaying(false);

    if (!audioPlayer.ended) {
      setPlayerStatus('kitsnyang.player.paused');
    }
  });

  audioPlayer.addEventListener('ended', () => {
    setPlayerPlaying(false);
    setPlayerStatus('kitsnyang.player.ended');
    updatePlayerProgress();
  });

  audioPlayer.addEventListener('timeupdate', updatePlayerProgress);
  audioPlayer.addEventListener('loadedmetadata', updatePlayerProgress);
}

function updateMotion() {
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const progress = window.scrollY / maxScroll;
  const heroRect = heroStage?.getBoundingClientRect();
  const heroRange = heroRect ? window.innerHeight + heroRect.height : 1;
  const heroProgress = heroRect ? clamp((window.innerHeight - heroRect.top) / heroRange, 0, 1) : 0;
  const y = Math.round(progress * 160);
  const x = Math.round(Math.sin(progress * Math.PI * 2) * 34);
  const heroFastY = Math.round((heroProgress - 0.5) * 86);
  const heroSlowY = Math.round((0.5 - heroProgress) * 42);
  const heroDriftX = Math.round(Math.sin(heroProgress * Math.PI) * 18);

  root.style.setProperty('--motion-y', `${y}px`);
  root.style.setProperty('--motion-x', `${x}px`);
  root.style.setProperty('--hero-fast-y', `${heroFastY}px`);
  root.style.setProperty('--hero-slow-y', `${heroSlowY}px`);
  root.style.setProperty('--hero-drift-x', `${heroDriftX}px`);
  root.style.setProperty('--hero-drift-x-neg', `${heroDriftX * -1}px`);

  if (cat) {
    cat.style.rotate = `${Math.round(Math.sin(progress * Math.PI * 3) * 5)}deg`;
  }

  ticking = false;
}

function requestMotionUpdate() {
  if (reduceMotion || ticking) {
    return;
  }

  ticking = true;
  window.requestAnimationFrame(updateMotion);
}

function updatePointerMotion(event) {
  if (reduceMotion || !heroStage) {
    return;
  }

  const rect = heroStage.getBoundingClientRect();
  const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
  const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
  const x = clamp(offsetX, -0.5, 0.5);
  const y = clamp(offsetY, -0.5, 0.5);

  root.style.setProperty('--pointer-main-x', `${Math.round(x * 24)}px`);
  root.style.setProperty('--pointer-main-y', `${Math.round(y * 18)}px`);
  root.style.setProperty('--pointer-side-x', `${Math.round(x * -16)}px`);
  root.style.setProperty('--pointer-side-y', `${Math.round(y * -12)}px`);
  root.style.setProperty('--pointer-soft-x', `${Math.round(x * 10)}px`);
  root.style.setProperty('--pointer-soft-x-neg', `${Math.round(x * -10)}px`);
  root.style.setProperty('--pointer-soft-y', `${Math.round(y * 8)}px`);
}

function resetPointerMotion() {
  root.style.setProperty('--pointer-main-x', '0px');
  root.style.setProperty('--pointer-main-y', '0px');
  root.style.setProperty('--pointer-side-x', '0px');
  root.style.setProperty('--pointer-side-y', '0px');
  root.style.setProperty('--pointer-soft-x', '0px');
  root.style.setProperty('--pointer-soft-x-neg', '0px');
  root.style.setProperty('--pointer-soft-y', '0px');
}

function observeRevealElements() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    for (const element of revealElements) {
      element.classList.add('is-visible');
    }

    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      }
    },
    {threshold: 0.25},
  );

  for (const element of revealElements) {
    observer.observe(element);
  }
}

bindLanguageControls();
bindSoundPlayer();
setLanguage(getPreferredLanguage(), {persist: false, updateUrl: false});
observeRevealElements();

window.addEventListener('scroll', requestMotionUpdate, {passive: true});
window.addEventListener('resize', requestMotionUpdate);
heroStage?.addEventListener('pointermove', updatePointerMotion);
heroStage?.addEventListener('pointerleave', resetPointerMotion);
updateMotion();
