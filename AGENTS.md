# Promotion Site Rules

## Repository Role

- 이 저장소는 정적 프로모션 사이트 전용 저장소다.
- 기본 구조는 루트 HTML 파일 중심으로 유지한다.
  - `index.html`: skyepodium 개인 소개 메인
  - `kitsnyang.html`: 키츠냥 서비스 소개
  - 추후 서비스/프로젝트 소개는 루트에 `*.html`로 추가
- 공통 정적 자산은 `assets/` 아래에 둔다.
  - `assets/styles/`: CSS
  - `assets/images/`: 이미지, 스크린샷, 그래픽
  - `assets/scripts/`: 필요한 경우에만 작은 JS

## Deployment Path

- 저장소명이 `promotion`이면 GitHub Pages 기본 경로는 보통
  `/promotion/`이다.
- 루트 개인 사이트 경로(`/`)가 필요하면 저장소명을
  `skyepodium.github.io`로 운영하는 방식을 별도로 검토한다.
- project page 호환을 위해 내부 링크와 asset 경로는 기본적으로 상대 경로를 쓴다.
  - 예: `./kitsnyang.html`, `./assets/styles/site.css`
  - 절대 경로(`/assets/...`)는 base path가 확정된 뒤에만 사용한다.

## Reference

- 레퍼런스 사이트: https://ganso.osaka/
- 이 레퍼런스에서 가져올 것은 색상이 아니라 구성 방식이다.
  - 큰 컬러 면으로 첫 인상을 만드는 hero
  - 오브젝트와 일러스트를 비스듬히 얹는 장면 구성
  - 짧고 기억나는 카피 중심의 스토리텔링
  - 스크롤하면서 섹션별 분위기가 전환되는 긴 랜딩 흐름
  - 작은 캐릭터/제품 오브젝트가 만드는 친근한 브랜드감
- 그대로 복제하지 않는다.
  - 노란색 팔레트, 식품/패키지 인상, 원본 일러스트/문구/레이아웃 복사는 금지
  - 키츠냥은 그린/민트/화이트 중심의 브랜드 톤을 우선한다.

## Kitsnyang Page Direction

- 앱 이름은 항상 **키츠냥**으로 표기한다.
- `kitsnyang.html` 첫 화면은 서비스가 앱이라는 점이 즉시 보여야 한다.
  - H1은 `키츠냥` 또는 키츠냥을 직접 드러내는 문구로 둔다.
  - 앱 화면, 알람, 알림음, 아침, 고양이 모티프가 첫 viewport 안에 보여야 한다.
  - 단순한 장식보다 실제 앱 화면/기능을 설명하는 visual을 우선한다.
- 노란색 기반 디자인으로 가지 않는다. 밝은 그린, 민트, 화이트, 짙은 텍스트 컬러를
  기본으로 잡고 필요할 때만 보조 색을 쓴다.
- 오른쪽 레퍼런스 같은 장면성은 살리되, 식품 브랜드처럼 보이지 않게 앱 UI와
  알람 경험을 중심에 둔다.

## Implementation Rules

- 초기 버전은 빌드 도구 없이 HTML/CSS/소량 JS로 만든다. 필요성이 생기기 전까지
  Vite/Next/Astro 같은 도구를 추가하지 않는다.
- 공통 CSS는 `assets/styles/`에 분리한다. HTML 안에 큰 style/script 블록을 쌓지 않는다.
- 모바일 우선으로 작성하고, desktop에서는 여백과 visual 배치를 확장한다.
- semantic HTML을 사용한다. `header`, `main`, `section`, `footer`, heading 순서를 지킨다.
- 이미지에는 의미 있는 `alt`를 둔다. 장식 이미지는 빈 `alt=""`를 명시한다.
- 버튼/링크 텍스트는 목적이 드러나게 쓴다.
- hero text를 카드 안에 넣지 않는다. 주요 메시지는 배경/장면 위에 직접 배치한다.
- 중첩 카드, gradient orb, 의미 없는 장식 blob은 사용하지 않는다.

## Verification

- 정적 파일은 브라우저에서 직접 열 수 있어야 한다.
- 링크, 이미지 경로, 모바일 폭, desktop 폭을 확인한 뒤 완료를 보고한다.
- Pages 배포 전에는 project page 경로(`/promotion/`)에서도 상대 링크가 깨지지 않는지
  확인한다.
