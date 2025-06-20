# Annie 일기 앱 웹사이트 🎉

전화 한 통으로 언제든지, 어디서든지 음성 일기를 작성할 수 있는 Annie 앱의 브랜딩 웹사이트입니다.

## 📁 프로젝트 구조

```
annie-website/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # 인터랙티브 스크립트
├── images/             # 이미지 폴더 (필요시)
└── README.md           # 이 파일
```

## ✨ 주요 기능

### 🎨 **디자인 특징**
- **Toca Boca 스타일**: 플레이풀하고 친근한 디자인
- **Glassmorphism**: 반투명 효과와 블러 처리
- **Interactive Elements**: 클릭 가능한 모든 요소들

### 🎭 **인터랙티브 요소들**
- **떠다니는 폰 아이콘**: 클릭 시 회전 효과
- **음성 파형**: 실시간 애니메이션
- **버블 효과**: 떠오르는 버블들
- **Annie 아바타**: 클릭 시 인사 메시지
- **카드 호버**: 3D 회전 효과

### 🎯 **특별 기능**
- **전화 시뮬레이션**: 통화 버튼 클릭 효과
- **스크롤 애니메이션**: 섹션별 페이드인 효과
- **이스터 에그**: 코나미 코드 입력 시 레인보우 효과
- **반응형 디자인**: 모바일 최적화

## 🚀 배포 방법

### 1. **즉시 배포 (5분 완성)**

#### Netlify Drop (가장 간단)
1. [netlify.com/drop](https://netlify.com/drop) 접속
2. 모든 파일을 zip으로 압축하거나 폴더째 드래그
3. 즉시 URL 생성! 🎊

#### GitHub Pages
1. GitHub에 새 레포지토리 생성
2. 파일들 업로드
3. Settings → Pages 활성화
4. `https://username.github.io/annie-website` 접속

### 2. **전문적 배포**

#### Vercel (추천)
```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 프로젝트 폴더에서 실행
vercel

# 3. 자동 배포 완료!
```

#### Firebase Hosting
```bash
# 1. Firebase CLI 설치
npm install -g firebase-tools

# 2. 로그인 및 초기화
firebase login
firebase init hosting

# 3. 배포
firebase deploy
```

### 3. **커스텀 도메인 연결**

도메인 구매 후 DNS 설정:
- **A Record**: `@` → Vercel/Netlify IP
- **CNAME**: `www` → 배포 URL

## 📱 모바일 최적화 체크리스트

- ✅ 반응형 디자인
- ✅ 터치 친화적 버튼 크기
- ✅ 빠른 로딩 속도
- ✅ 세로/가로 모드 지원

## 🎯 SEO 최적화 (선택사항)

### Meta 태그 추가
```html
<!-- index.html <head>에 추가 -->
<meta property="og:title" content="Annie - Anytime, Anywhere Diary">
<meta property="og:description" content="전화 한 통으로 언제든지 음성 일기를 작성하세요">
<meta property="og:image" content="https://your-domain.com/annie-preview.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### sitemap.xml 생성
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔧 고급 기능 추가

### 실제 전화 기능 구현
```javascript
// Twilio API 연동 예시
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

// 전화 걸기
client.calls.create({
  from: '+1234567890',
  to: '+1098765432',
  url: 'https://your-domain.com/voice-response'
});
```

### 음성 인식 추가
```javascript
// Web Speech API 사용
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'ko-KR';

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  console.log('음성 입력:', transcript);
};
```

## 📊 분석 도구 연동

### Google Analytics
```html
<!-- Global site tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛡️ 보안 고려사항

- HTTPS 사용 (Vercel/Netlify 자동 제공)
- CSP (Content Security Policy) 헤더 설정
- 민감한 API 키는 환경변수로 관리

## 🎨 커스터마이징

### 색상 변경
```css
/* style.css에서 수정 */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  --accent-color: #ff6b9d;
  --text-color: #333;
}
```

### 폰트 변경
```css
/* 구글 폰트 링크 변경 후 */
body {
  font-family: 'Your-Font', 'Noto Sans KR', sans-serif;
}
```

## 📞 문의 및 지원

- **이메일**: annie@yourcompany.com
- **전화**: 1588-0000
- **GitHub Issues**: 버그 리포트 및 기능 요청

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

**🚀 Annie와 함께 멋진 웹사이트를 만들어보세요!**