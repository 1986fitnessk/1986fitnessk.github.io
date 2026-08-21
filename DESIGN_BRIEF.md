# 1986 FITNESS 원흥점 랜딩페이지 디자인 브리프

## Product job

네이버 플레이스, 인스타그램, 카카오톡, QR로 유입된 원흥점 예비 회원이 실제 공간·운동 지원 방식·회원 경험을 짧게 확인하고 상담 또는 방문 예약을 선택하게 한다.

## Direction

글래드짐의 실제 공간 중심 도입부와 문제→해결→증거→상담 흐름은 가져오되, 전체화면 반복·다중 슬라이더·팝업을 줄인 밝고 단정한 모바일 우선 원페이지.

## Brand reading

- Immutable identity: `1986 FITNESS` 명칭, 실제 로고와 기존 브랜드 색상, “운동을 시작하는 곳에서, 운동이 계속되는 곳으로.”라는 브랜드 방향
- Repeatable shapes/materials: 실제 센터 사진, 넉넉한 여백, 짧은 문장, 운동이 이어지는 흐름을 보여주는 선형 리듬
- Existing inconsistencies to remove: 현재 프로젝트 파일이 비어 있어 확인 불가. 임의의 로고·브랜드 색상은 만들지 않는다.
- Media provenance: 사용자가 제공한 실제 자세평가 기록 5장을 전문 트레이닝의 증거로 사용한다. 레퍼런스의 사진과 생성형 이미지는 사용하지 않는다.

## Reference synthesis

- Structure comes from: GLAD GYM 구산역촌점 메인 페이지의 `실제 공간 → 이용자 불편 → 시설/트레이너 → 회원 경험 → 프로그램 → 상담` 전환 순서
- Interaction comes from: 하단 고정 상담 CTA와 FAQ 아코디언의 낮은 진입 장벽
- Visual tone comes from: 실제 공간을 크게 보여주는 첫 화면, 짙은 중성색과 밝은 표면의 교차, 절제된 타이포그래피
- Hook/copy energy comes from: 운동을 포기한 사람의 구체적인 불편을 먼저 말하고 해결 구조를 보여주는 방식
- Motion/media behavior comes from: 첫 화면 이미지의 느린 시선 유도와 섹션 진입 시 최소한의 순차 등장
- The final screen will not copy: GLAD GYM의 로고, 카피, 골드/브라운 색조, 사진, 회원 사례, 무료 PT 혜택, 전체화면 프로그램 섹션, 모달 구조

## Reference evidence

- Source: https://gladgym.co.kr/
- Checked on: 2026-08-19
- Exact page/section/state inspected: 메인 히어로, Why GLAD GYM 문제 카드 4개, 시설 갤러리, 트레이너 캐러셀, Member Voice 탭, 무료 프로그램 3개, Member Story, FAQ, 모바일 고정 상담 CTA
- Desktop behavior observed: 1440×900에서 대형 시설 이미지가 첫 화면 대부분을 차지하고 중앙 하단 상담 CTA가 고정됨
- Mobile behavior observed: 390×844에서 헤더와 상담 CTA가 고정되고 콘텐츠가 단일 열로 전환됨. 전체 페이지는 약 10,500px로 길며 전체화면 프로그램과 다수 인터랙션이 반복됨

## Reference implementation map

| Reference evidence | Extracted principle | Local component | Motion/state | Mobile translation | Acceptance evidence |
|---|---|---|---|---|---|
| 실제 시설 사진 중심 히어로 | 첫 3초 안에 공간과 페이지 목적 전달 | `Hero` | 사진 위 카피·CTA가 짧게 순차 등장 | 세로 크롭과 텍스트 안전영역 확보 | 390px 첫 화면에서 제목·가치·CTA 동시 노출 |
| Why GLAD GYM 문제 카드 | 방문자의 불편을 먼저 언어화 | `MemberFriction` | 3개 항목만 순차 등장 | 긴 카드 대신 아이콘+2줄 문장 | 가로 스크롤 없이 3개 항목 판독 가능 |
| 시설/트레이너 구간 | 공간과 사람을 해결 근거로 제시 | `ProofSplit` | 이미지 전환 또는 탭 1개 | 시설/트레이너를 세로로 재배치 | 실제 사진과 사실 기반 설명만 표시 |
| Member Voice | 추상적 홍보 대신 실제 경험을 증거로 제시 | `MemberProof` | 탭 없이 대표 후기 1~2개, 더보기 링크 | 한 화면에 후기 1개 우선 | 출처 없는 후기·수치 없음 |
| 프로그램 전체화면 3개 | 핵심 서비스의 선택지를 이미지와 함께 설명 | `ProgramRail` | 카드 선택/hover만 사용 | 가로 스냅 2~3개 또는 세로 리스트 | 카드 수 최대 3개, 각 CTA 하나 |
| 고정 상담 CTA | 긴 페이지 어디서든 다음 행동 제공 | `StickyConsultCTA` | 누름/키보드 포커스 피드백 | 모바일 하단 고정, PC는 헤더 CTA | 콘텐츠 가림 없이 44px 이상 터치 영역 |
| FAQ | 마지막 불안을 해소 | `FAQ` | 아코디언 열림/닫힘 | 동일 | 키보드 조작 및 aria 상태 확인 |

## Signature composition and component

- Signature composition: 사진 대신 `1986 / WONHEUNG` 워드마크와 비대칭 관계 그리드를 사용한다. `CARE + WITH`가 친절한 회원 안내와 부담 없이 함께하는 커뮤니티를 연결한다.
- Signature component: `ContinuityProof` — `처음 방문 → 운동 방법 이해 → 함께 참여 → 계속 운동`의 4단계를 실제 원흥점 증거와 연결하는 짧은 진행선. 단순 숫자 장식이 아니라 회원 여정의 순서를 설명한다.

## Motion storyboard

| Beat | Trigger | Elements | From → to | Duration/ease | Purpose | Reduced motion |
|---|---|---|---|---|---|---|
| 공간에서 약속으로 | 첫 진입 | 실제 공간 사진, 한 줄 카피, CTA | 사진 미세 확대 + 카피/CTA 순차 노출 | 총 700ms, ease-out | 공간과 브랜드 약속을 한 장면으로 이해 | 최종 상태 즉시 표시 |
| 문제에서 해결로 | 첫 스크롤 | 불편 3개, 해결 문장 | 항목 순차 노출 후 해결 문장 강조 | 360ms + 70ms stagger | 방문자의 경험이 이해받는다는 신뢰 | 움직임 없이 모두 표시 |
| 프로그램 선택 | 카드 포커스/탭 | 이미지, 제목, CTA | 테두리/이미지 크롭/CTA 상태 변화 | 180ms | 선택 가능한 서비스임을 명확히 함 | 색·밑줄 상태만 변경 |
| 상담 행동 | hover/focus/press | 상담 CTA | 배경과 아이콘 위치 미세 변화 | 140ms | 눌러도 되는 요소임을 전달 | 색과 포커스 링만 사용 |

## References

| Role | Source | Adapt | Do not copy |
|---|---|---|---|
| Structure / interaction / visual | https://gladgym.co.kr/ | 실제 공간 우선, 문제→해결→증거→CTA 순서, 모바일 고정 CTA | 로고, 고유 카피·사진·색상, 전체 레이아웃, 과도한 팝업·슬라이더 |

## Tokens

- Font: 실제 1986 브랜드 폰트 확인 전에는 `Pretendard` 또는 시스템 한국어 산세리프를 임시 사용. 영문 장식용 세리프 혼용은 피한다.
- Text colors: 브랜드 자산 확인 후 확정. 기본은 높은 대비의 거의 검정/흰색.
- Surface colors: 실제 로고와 공간 사진에서 추출하되 밝은 표면을 주로 사용한다.
- Accent and semantic colors: 실제 브랜드 컬러 확인 전 임시 저채도 올리브 `#66734E`를 CTA·라벨·연결점에만 약 5% 사용한다. 추후 `--accent` 변수로 교체한다.
- Spacing steps: 8 / 12 / 16 / 24 / 40 / 64 / 96
- Radius: 기본 4~8px. 후기와 프로그램을 둥근 카드 모음으로 만들지 않는다.
- Border and shadow: 1px 중성선 중심, 그림자는 사진과 고정 CTA에만 약하게 사용한다.
- Motion: 140~700ms, 한 가지 ease-out 계열, reduced-motion 지원

## Screen priorities

1. 원흥점이 어떤 곳이며 왜 운동을 계속하기 좋은지 첫 화면에서 이해
2. 실제 공간·트레이너·회원 경험으로 신뢰 형성
3. 상담/방문 예약으로 전환

## Recommended page sequence

1. Hero — 실제 원흥점 공간 + 브랜드 약속 + 상담 CTA
2. Member friction — 처음이거나 운동을 오래 이어가지 못했던 사람의 불편 3개
3. 1986 answer — 평가, 운동 안내, 관계/커뮤니티 등 실제 운영 방식
4. Space & people — 시설과 트레이너를 한 구간에서 압축 제시
5. ContinuityProof — 등록 이후 운동이 이어지는 회원 여정
6. Programs — 현재 핵심 프로그램 최대 3개
7. Real proof — 실제 후기/리뷰/참여 기록
8. Visit — 위치, 운영시간, 주차, 전화
9. FAQ — 상담 전 주요 질문 5개 내외
10. Final CTA — 방문 상담 또는 네이버 예약

## Explicit restraint rules

- 전체 길이는 모바일 기준 약 6,000~7,000px 이내를 목표로 한다.
- 전체화면 높이 섹션은 히어로 한 곳만 사용한다.
- 캐러셀은 최대 1개만 사용하며 가능하면 정적 그리드로 대체한다.
- 팝업/모달은 영상이나 상세 정보를 위해 꼭 필요한 경우 한 종류만 사용한다.
- 상시 고정 요소는 헤더와 모바일 상담 CTA뿐이다.
- 섹션마다 페이드인을 반복하지 않는다. 하나의 진입 시퀀스와 최소한의 상태 피드백만 사용한다.
- 무료·최고·프리미엄 같은 표현은 실제 근거가 없으면 사용하지 않는다.
- 레퍼런스처럼 모든 서비스를 각각 전체화면 이미지로 만들지 않는다.

## Behavior that must remain unchanged

- 기존 앱/사이트가 없어 해당 없음.
- 향후 연결할 전화, 네이버 예약, 카카오 상담 URL은 운영자가 제공한 실제 주소만 사용한다.

## Anti-template decisions

- Generic pattern being rejected: 동일한 크기의 둥근 카드, 추상 그라데이션, 과도한 숫자 배지, 모든 섹션의 반복 fade-in
- Project-specific replacement: 실제 원흥점 공간과 회원 여정을 연결한 `ContinuityProof`, 시설과 사람을 한 번에 비교하는 압축된 증거 구간

## Responsive and motion contract

- Desktop media behavior: 16:9 또는 넓은 실제 공간 사진, 카피가 시설의 핵심 피사체를 가리지 않는 좌우 분할
- Mobile media behavior: 4:5 세로 크롭 또는 별도 모바일 사진, 사람의 얼굴·기구 핵심부 보존
- Scroll reveal grammar: 12~20px 이동과 opacity 조합을 한 번만 사용, stagger 70ms 이하
- Reduced-motion fallback: 모든 요소를 최종 위치에서 즉시 표시하고 이미지 확대 제거
- Text-clipping viewports: 320 / 360 / 390 / 430px에서 한국어 제목 줄바꿈과 하단 CTA 겹침 확인

## Missing inputs before implementation

- 실제 1986 FITNESS 로고와 사용 가능한 브랜드 컬러 (현재는 중립 흑백 시스템으로 대체)
- 사진은 이번 디자인 범위에서 사용하지 않음
- 대표 상담 CTA 한 가지와 실제 연결 URL
- 확인된 운영시간, 주소, 주차 정보, 전화번호
- 실제로 노출할 핵심 프로그램 2~3개와 근거 가능한 리뷰/수치

## Verification captures

- Reference desktop first viewport: 1440×900에서 실제 시설 이미지, 상단 헤더, 중앙 하단 상담 CTA 확인
- Reference mobile first viewport: 390×844에서 세로 이미지 크롭, 고정 헤더, 하단 상담 CTA 확인
- Reference mobile mid-page: Why GLAD GYM 문제 카드, Member Voice 후기, 커뮤니티 전체화면 섹션을 각각 확인
- Local desktop first viewport: 1440×900에서 워드마크, 비대칭 그리드, 핵심 문장, 헤더 CTA 노출 확인
- Local mobile first viewport: 390×844에서 핵심 문장, 원흥역 가치, 고정 CTA 동시 노출 확인
- Responsive checks: 320 / 360 / 390 / 430px 모두 `scrollWidth === clientWidth`, 가로 넘침 없음
- State checks: 모바일 고정 CTA로 방문 구간 이동, FAQ 아코디언 열림 및 답변 노출, 미연결 상담 버튼 안내 상태 확인
- Browser console: 오류 및 경고 없음
