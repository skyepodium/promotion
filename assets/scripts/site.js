const SUPPORTED_LANGUAGES = ['ko', 'en', 'ja', 'zh-TW', 'vi'];
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
    'common.language.zhTW': '繁體中文',
    'common.language.vi': 'Tiếng Việt',
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
    'kitsnyang.sound.featured': '오늘이 켜져',
    'kitsnyang.sound.caption': '띵띵, 눈을 떠',
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
    'kitsnyang.sound.today': '오늘이 켜져',
    'kitsnyang.sound.dawn': '새벽의 서곡',
    'kitsnyang.screen.dismiss.title': '알람 해제',
    'kitsnyang.screen.dismiss.action': '끄기',
    'kitsnyang.screen.dismiss.body': '눈 뜨면 바로 알 수 있게.',
    'kitsnyang.sounds.eyebrow': '알림음',
    'kitsnyang.sounds.title': '기분마다 다른 아침.',
    'kitsnyang.sounds.aria': '대표 알림음',
    'kitsnyang.sound.paradise': '파라파라다이스',
    'kitsnyang.sound.geoje': '거제도의 바람',
    'kitsnyang.sound.infinite': '무한의 회랑',
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
    'common.language.zhTW': 'Traditional Chinese',
    'common.language.vi': 'Vietnamese',
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
    'kitsnyang.sound.featured': 'Today Lights Up',
    'kitsnyang.sound.caption': 'Ding ding, wake up',
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
    'kitsnyang.sound.today': 'Today Lights Up',
    'kitsnyang.sound.dawn': 'Dawn Overture',
    'kitsnyang.screen.dismiss.title': 'Dismiss alarm',
    'kitsnyang.screen.dismiss.action': 'Dismiss',
    'kitsnyang.screen.dismiss.body': 'Clear at a glance when you wake.',
    'kitsnyang.sounds.eyebrow': 'Alarm sounds',
    'kitsnyang.sounds.title': 'A different morning for each mood.',
    'kitsnyang.sounds.aria': 'Featured alarm sounds',
    'kitsnyang.sound.paradise': 'Paraparadise',
    'kitsnyang.sound.geoje': 'Geoje Sea Breeze',
    'kitsnyang.sound.infinite': 'Endless Corridor',
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
    'common.language.zhTW': '繁体字中国語',
    'common.language.vi': 'ベトナム語',
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
    'kitsnyang.sound.featured': '今日が灯る',
    'kitsnyang.sound.caption': 'ディンディン、目を覚まして',
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
    'kitsnyang.sound.today': '今日が灯る',
    'kitsnyang.sound.dawn': '夜明けの序曲',
    'kitsnyang.screen.dismiss.title': 'アラーム解除',
    'kitsnyang.screen.dismiss.action': '解除',
    'kitsnyang.screen.dismiss.body': '目覚めたらすぐ分かるように。',
    'kitsnyang.sounds.eyebrow': '通知音',
    'kitsnyang.sounds.title': '気分に合わせて朝を変える。',
    'kitsnyang.sounds.aria': '代表的な通知音',
    'kitsnyang.sound.paradise': 'パラパラダイス',
    'kitsnyang.sound.geoje': '巨済の潮風',
    'kitsnyang.sound.infinite': '無限回廊',
    'kitsnyang.closing.eyebrow': 'やさしく起きる',
    'kitsnyang.closing.title': '起きることも<br />少しだけかわいく。',
    'kitsnyang.closing.body': '키츠냥は無料で、広告がなく、朝のための音を選べます。',
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
    'common.language.zhTW': '繁體中文',
    'common.language.vi': '越南文',
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
    'kitsnyang.sound.featured': '今天亮了',
    'kitsnyang.sound.caption': '叮叮，醒來吧',
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
    'kitsnyang.sound.today': '今天亮了',
    'kitsnyang.sound.dawn': '黎明序曲',
    'kitsnyang.screen.dismiss.title': '解除鬧鐘',
    'kitsnyang.screen.dismiss.action': '關閉',
    'kitsnyang.screen.dismiss.body': '起床時一眼就能看懂。',
    'kitsnyang.sounds.eyebrow': '鬧鐘音',
    'kitsnyang.sounds.title': '每種心情都有不同早晨。',
    'kitsnyang.sounds.aria': '代表鬧鐘音',
    'kitsnyang.sound.paradise': 'ParaPara 樂園',
    'kitsnyang.sound.geoje': '巨濟海風',
    'kitsnyang.sound.infinite': '無盡迴廊',
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
    'common.language.zhTW': 'Tiếng Trung phồn thể',
    'common.language.vi': 'Tiếng Việt',
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
    'kitsnyang.sound.featured': 'Ngày bật sáng',
    'kitsnyang.sound.caption': 'Ting ting, thức dậy nào',
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
    'kitsnyang.sound.today': 'Ngày bật sáng',
    'kitsnyang.sound.dawn': 'Khúc dạo bình minh',
    'kitsnyang.screen.dismiss.title': 'Tắt báo thức',
    'kitsnyang.screen.dismiss.action': 'Tắt',
    'kitsnyang.screen.dismiss.body': 'Vừa mở mắt là hiểu ngay.',
    'kitsnyang.sounds.eyebrow': 'Âm báo',
    'kitsnyang.sounds.title': 'Mỗi tâm trạng là một buổi sáng khác.',
    'kitsnyang.sounds.aria': 'Âm báo tiêu biểu',
    'kitsnyang.sound.paradise': 'ParaPara Paradise',
    'kitsnyang.sound.geoje': 'Gió biển Geoje',
    'kitsnyang.sound.infinite': 'Hành lang vô tận',
    'kitsnyang.closing.eyebrow': 'Thức dậy nhẹ nhàng',
    'kitsnyang.closing.title': 'Ngay cả việc thức dậy<br />cũng có thể đáng yêu hơn một chút.',
    'kitsnyang.closing.body': '키츠냥 miễn phí, không có quảng cáo và cho bạn chọn âm thanh dành cho buổi sáng.',
  },
};

const root = document.documentElement;
const cat = document.querySelector('[data-cat]');
const heroStage = document.querySelector('[data-hero-stage]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let ticking = false;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeLanguage(value) {
  if (!value) {
    return null;
  }

  const language = value.toLowerCase();

  if (language.startsWith('ko')) {
    return 'ko';
  }

  if (language.startsWith('en')) {
    return 'en';
  }

  if (language.startsWith('ja')) {
    return 'ja';
  }

  if (language === 'tw' || language.startsWith('zh')) {
    return 'zh-TW';
  }

  if (language.startsWith('vi')) {
    return 'vi';
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
setLanguage(getPreferredLanguage(), {persist: false, updateUrl: false});
observeRevealElements();

window.addEventListener('scroll', requestMotionUpdate, {passive: true});
window.addEventListener('resize', requestMotionUpdate);
heroStage?.addEventListener('pointermove', updatePointerMotion);
heroStage?.addEventListener('pointerleave', resetPointerMotion);
updateMotion();
