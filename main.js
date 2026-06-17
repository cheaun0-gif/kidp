/**
 * Siseon 다중 상품 쇼핑몰 인터랙티브 스크립트 (main.js)
 * 모든 주석과 설명은 한글로 작성되었습니다.
 */

// 5종 프리미엄 디자인 오브제 상품 마스터 데이터셋
const productsData = {
  siseon: {
    id: 'siseon',
    name: 'Siseon (시선) — 소셜 책임형 식물 케어 디바이스',
    engName: 'Social Accountability Plant Care Device',
    brand: 'Studio Hyeong',
    price: 189000,
    originalPrice: 222000,
    discount: '15%',
    rating: 4.9,
    reviewsCount: 47,
    description: '타인의 시선과 공동 관찰을 통해 반려식물의 건강을 지속하도록 돕는 프리미엄 스마트 화분 센서입니다.',
    options: [
      { name: 'Chalk (초크 화이트 / 무광 매트 마감)', val: 'Chalk' },
      { name: 'Stone (스톤 그레이 / 거친 돌 텍스처 마감)', val: 'Stone' }
    ],
    thumbnails: ['baisic/1.png', 'baisic/2.png', 'baisic/3.png', 'baisic/4.png'],
    detailImages: [
      'baisic/1.png',
      'baisic/2.png',
      'baisic/3.png',
      'baisic/4.png',
      'use/111.png',
      'use/222.png',
      'use/333.png',
      'color/11.png',
      'color/22.png',
      '연출/1111.png',
      '연출/2222.png'
    ],
    reviews: [
      { id: 'plant_love***', date: '2026.06.12', option: 'Chalk', rating: '★★★★★', text: '식물 킬러였던 제가 시선 덕분에 몬스테라를 한 달 넘게 건강하게 기르고 있습니다! 셔터를 열 때 켜지는 불빛이 매일 식물을 보살피게 만드는 시각적 압박감을 주어 아주 유용합니다.' },
      { id: 'design_***', date: '2026.06.05', option: 'Stone', rating: '★★★★★', text: '스톤 그레이 질감이 토분과 기가 막히게 잘 매칭됩니다. 기기 자체가 주는 인테리어 아우라가 엄청납니다. 실시간으로 다이얼을 만지며 조절하는 재미도 쏠쏠합니다.' },
      { id: 'k-green***', date: '2026.05.28', option: 'Chalk', rating: '★★★★☆', text: '기기 마감이 매우 고급스럽고 앱 연결도 부드럽게 잘 됩니다. 배송이 하루 지연되었지만 제품 만족도가 높아서 만족합니다.' }
    ],
    qna: [
      { status: '답변완료', title: '어두운 방 안에서도 수분 센서 작동이 유효한가요?', author: 'light_***', date: '2026.06.16', answer: '안녕하세요, 고객님! Siseon의 수분 센서 및 내부 측정 모듈은 조도와 무관하게 토양 내 수분을 직접 감지하므로 정상 작동합니다. 다만, 식물의 광합성을 위해 간접 채광이 드는 곳에 배치를 추천드립니다.' },
      { status: '답변완료', title: '다견 가정인데 반려동물이 물어도 안전한가요?', author: 'doggy_***', date: '2026.06.08', answer: '안녕하세요! 본 기기의 외장 쉘은 100% 생분해성 무독성 친환경 PLA 소재로 사출되어, 반려동물이 접촉하거나 입에 대더라도 무해하도록 설계되었습니다.' }
    ]
  },
  gyeol: {
    id: 'gyeol',
    name: 'Gyeol (결) — 물결 무늬 도자기 초음파 가습기',
    engName: 'Ceramic Wave Ultrasonic Humidifier',
    brand: 'Studio Hyeong',
    price: 145000,
    originalPrice: 161000,
    discount: '10%',
    rating: 4.8,
    reviewsCount: 32,
    description: '물결 모양의 도자기 하우징과 은은한 미세 분무가 만드는 침실 안의 고요한 오브제 가습기입니다.',
    options: [
      { name: 'Pure Clay (백자 백색 무광 마감)', val: 'Pure Clay' },
      { name: 'Dark Ash (옹기 흑색 반무광 마감)', val: 'Dark Ash' }
    ],
    thumbnails: ['use/111.png', 'use/222.png', 'use/333.png', 'baisic/3.png'],
    detailImages: [
      'use/111.png',
      'use/222.png',
      'use/333.png',
      'color/11.png',
      '연출/1111.png'
    ],
    reviews: [
      { id: 'water_***', date: '2026.06.14', option: 'Pure Clay', rating: '★★★★★', text: '도자기로 구워진 외관이라 물이 닿았을 때 나는 은은한 흙내음과 물결 형태의 그림자가 방 안 분위기를 정말 편안하게 만들어 줍니다. 세척이 너무 간편해서 더 마음에 듭니다.' },
      { id: 'room_de***', date: '2026.06.02', option: 'Dark Ash', rating: '★★★★★', text: '가습기라기보다 하나의 멋진 조형 미술품을 둔 것 같습니다. 분무량도 침실에서 쓰기에 매우 적당하고 고요합니다.' }
    ],
    qna: [
      { status: '답변완료', title: '도자기 하우징만 별도로 구매하여 세척/교체가 가능한가요?', author: 'clay_***', date: '2026.06.11', answer: '안녕하세요, 고객님! 네, 도자기 상단 쉘은 내부 플라스틱 물탱크와 쉽게 분리되며, 하우징 단품도 교체용 부품 탭에서 추가로 선택 구매하실 수 있습니다.' }
    ]
  },
  moong: {
    id: 'moong',
    name: 'Moong (뭉) — 구름 형상 스마트 무드 조명',
    engName: 'Cloud-Shaped Smart Mood Light',
    brand: 'Studio Hyeong',
    price: 168000,
    originalPrice: 191000,
    discount: '12%',
    rating: 5.0,
    reviewsCount: 28,
    description: '스마트 IoT 제어를 통해 실시간 날씨 및 기분 상태를 은은한 오로라 스펙트럼 색상으로 시각화하는 구름 조명입니다.',
    options: [
      { name: 'Cirrus (새털구름 화이트 소프트 마감)', val: 'Cirrus' },
      { name: 'Nimbus (먹구름 딥 그레이 마감)', val: 'Nimbus' }
    ],
    thumbnails: ['연출/1111.png', '연출/2222.png', 'baisic/2.png', 'use/222.png'],
    detailImages: [
      '연출/1111.png',
      '연출/2222.png',
      'color/22.png',
      'baisic/2.png'
    ],
    reviews: [
      { id: 'cloud_***', date: '2026.06.15', option: 'Cirrus', rating: '★★★★★', text: '별 다섯 개가 모자랄 정도로 최고로 이쁩니다. 스마트폰 날씨 위젯과 연동해 두면 밖의 기온에 맞춰 색이 스스로 변하는 게 정말 신기하고 위트가 가득합니다.' },
      { id: 'night_l***', date: '2026.06.09', option: 'Nimbus', rating: '★★★★★', text: '어두운 방 안을 포근하게 비춰 줍니다. 솜사탕처럼 폭신해 보이지만 단단한 무독성 실리콘 재질이라 만질 때 촉감도 참 좋습니다.' }
    ],
    qna: [
      { status: '답변완료', title: '구글 홈이나 애플 홈킷 등 홈 IoT 생태계 연동이 되나요?', author: 'iot_ma***', date: '2026.06.12', answer: '안녕하세요, 고객님! 본 제품은 Matter 표준 프로토콜을 탑재하여 Google Home, Apple HomeKit 및 SmartThings와 전면 호환 및 실시간 연동을 지원합니다.' }
    ]
  },
  sum: {
    id: 'sum',
    name: 'Sum (섬) — 아일랜드 세라믹 화분 드립 트레이',
    engName: 'Ceramic Island Plant Drip Tray',
    brand: 'Studio Hyeong',
    price: 89000,
    originalPrice: 94000,
    discount: '5%',
    rating: 4.7,
    reviewsCount: 19,
    description: '넘친 물이 하나의 조그만 섬 호수를 형성하는 조형미 넘치는 친환경 세라믹 물받이 스탠드 트레이입니다.',
    options: [
      { name: 'Sand Beige (모래 사장 베이지 마감)', val: 'Sand Beige' },
      { name: 'Coral Pink (산호 적색 마감)', val: 'Coral Pink' }
    ],
    thumbnails: ['color/22.png', 'color/11.png', 'use/333.png', 'baisic/4.png'],
    detailImages: [
      'color/22.png',
      'color/11.png',
      'baisic/4.png',
      '연출/2222.png'
    ],
    reviews: [
      { id: 'island_***', date: '2026.06.10', option: 'Sand Beige', rating: '★★★★★', text: '기존의 플라스틱 물받이는 인테리어를 해쳐서 고민이었는데, 이 제품은 화분 밑에 두기만 해도 하나의 작은 섬 풍경을 완성해 주어 볼 때마다 행복합니다. 물이 잘 스며들고 금방 마릅니다.' }
    ],
    qna: [
      { status: '답변완료', title: '물때가 잘 끼거나 곰팡이가 피진 않나요?', author: 'clean_***', date: '2026.06.04', answer: '안녕하세요, 고객님! Sum 트레이는 표면에 다공성 천연 항균 규조 성분이 특수 코팅되어 있어, 물을 빠르게 흡수한 후 자연 건조시키며 물때 및 곰팡이 번식을 원천 차단해 줍니다. 2~3주에 한 번 흐르는 물에 가볍게 헹궈만 주시면 됩니다.' }
    ]
  },
  orae: {
    id: 'orae',
    name: 'Orae (오래) — 모래시계 스마트 친환경 타이머',
    engName: 'Hourglass Smart Eco Timer',
    brand: 'Studio Hyeong',
    price: 112000,
    originalPrice: 140000,
    discount: '20%',
    rating: 4.8,
    reviewsCount: 25,
    description: '디바이스를 뒤집으면 자동으로 아날로그 감성의 시간 측정을 시작하며, 종이 잉크(E-Ink) 화면으로 탄소 배출량을 절감하는 저전력 타이머입니다.',
    options: [
      { name: 'Matte White (매트 화이트 마감)', val: 'Matte White' },
      { name: 'Charcoal Black (차콜 블랙 마감)', val: 'Charcoal Black' }
    ],
    thumbnails: ['baisic/4.png', 'baisic/3.png', 'use/222.png', 'color/11.png'],
    detailImages: [
      'baisic/4.png',
      'baisic/3.png',
      'use/222.png',
      'color/11.png',
      '연출/1111.png'
    ],
    reviews: [
      { id: 'timer_***', date: '2026.06.13', option: 'Charcoal Black', rating: '★★★★★', text: '뽀모도로 공부법 하려고 샀는데, 획기적이고 뒤집을 때 촉감이 중독적이라 공부 집중도가 훨씬 올라갔습니다. E-Ink 화면이라 눈도 전혀 피로하지 않고 배터리도 한 번 충전하면 3달 이상 갑니다.' }
    ],
    qna: [
      { status: '답변완료', title: '알람 음량을 조절하거나 무음 모드(진동/LED 전용) 지원이 되나요?', author: 'focus_***', date: '2026.06.07', answer: '안녕하세요! 네, Orae 디바이스는 후면 다이얼을 통해 무음(LED 반짝임 알림), 진동, 3단계 음량 조절 모드로 전환하여 조용한 독서실 등에서도 자유롭게 쓰실 수 있습니다.' }
    ]
  }
};

// 현재 상세페이지에 로드된 상품 ID 및 정보
let currentProductId = 'siseon';
let selectedOptionsList = [];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollEffects();
  initStudioCarousel();
  initDeviceSimulator();
  renderProductGrid(); // 메인 홈 상품 5종 리스트 렌더링
  
  // URL 해시 기반 SPA 라우팅 지원
  window.addEventListener('hashchange', handleRouting);
  handleRouting();
});

/**
 * 1. 테마 관리 (다크 / 라이트 모드)
 */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', initialTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/**
 * 2. 스크롤 페이드인 및 네비게이션 효과
 */
function initScrollEffects() {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * 3. 스튜디오 3D 캐러셀 및 드래그 제어
 */
function initStudioCarousel() {
  const track = document.getElementById('studioTrack');
  const progressBar = document.getElementById('studioProgressBar');
  const counter = document.getElementById('studioCounter');
  const slides = document.querySelectorAll('.studio-slide');
  
  if (!track || slides.length === 0) return;

  let isDragging = false;
  let startX;
  let scrollLeft;
  let activeIndex = 0;

  function updateCarouselState() {
    const slideWidth = slides[0].getBoundingClientRect().width + 30;
    const currentScroll = track.scrollLeft;
    const centerIndex = Math.min(
      slides.length - 1,
      Math.max(0, Math.round(currentScroll / slideWidth))
    );

    if (centerIndex !== activeIndex) {
      slides[activeIndex].classList.remove('active');
      slides[centerIndex].classList.add('active');
      activeIndex = centerIndex;
      
      counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      
      const progressPercent = ((activeIndex + 1) / slides.length) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }
  }

  slides[0].classList.add('active');
  updateCarouselState();

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    track.classList.add('grabbing');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDragging = false;
    track.classList.remove('grabbing');
  });

  track.addEventListener('mouseup', () => {
    isDragging = false;
    track.classList.remove('grabbing');
    snapToCenter();
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
    updateCarouselState();
  });

  track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    isDragging = false;
    snapToCenter();
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
    updateCarouselState();
  }, { passive: true });

  track.addEventListener('scroll', () => {
    if (!isDragging) {
      updateCarouselState();
    }
  }, { passive: true });

  function snapToCenter() {
    const slideWidth = slides[0].getBoundingClientRect().width + 30;
    const targetScroll = activeIndex * slideWidth;
    track.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }
}

/**
 * 4. 가상 디바이스 시뮬레이터 동작 로직 (Siseon 전용)
 */
function initDeviceSimulator() {
  const shutterBtn = document.getElementById('simShutterBtn');
  const shutterGraphic = document.getElementById('simShutterGraphic');
  const waterSlider = document.getElementById('simWaterSlider');
  const waterVal = document.getElementById('simWaterVal');
  const pressureSlider = document.getElementById('simPressureSlider');
  const pressureVal = document.getElementById('simPressureVal');
  
  const statusIcon = document.getElementById('plantStatusIcon');
  const statusTitle = document.getElementById('plantStatusTitle');
  const statusDesc = document.getElementById('plantStatusDesc');

  if (!shutterBtn || !shutterGraphic || !waterSlider || !pressureSlider) return;

  let isShutterOpen = false;

  shutterBtn.addEventListener('click', () => {
    isShutterOpen = !isShutterOpen;
    if (isShutterOpen) {
      shutterGraphic.classList.add('open');
      shutterBtn.textContent = '셔터 닫기 (비공개)';
    } else {
      shutterGraphic.classList.remove('open');
      shutterBtn.textContent = '셔터 열기 (시작하기)';
    }
    updatePlantSimulator();
  });

  waterSlider.addEventListener('input', (e) => {
    waterVal.textContent = `${e.target.value}%`;
    updatePlantSimulator();
  });

  pressureSlider.addEventListener('input', (e) => {
    pressureVal.textContent = `${e.target.value}%`;
    updatePlantSimulator();
  });

  function updatePlantSimulator() {
    const water = parseInt(waterSlider.value);
    const pressure = parseInt(pressureSlider.value);

    let status = {
      icon: '🌱',
      title: '대기 중',
      desc: '디바이스 셔터를 열어 실시간 식물 관찰 및 공유를 시작해 보세요.'
    };

    if (!isShutterOpen) {
      status.icon = '🔒';
      status.title = '관찰 부재 (방치 위험)';
      status.desc = '타인의 시선이 차단되었습니다. 식물 관리가 무관심 속에 방치되기 시작할 수 있습니다.';
      statusIcon.style.color = 'hsl(350, 70%, 50%)';
      statusIcon.style.background = 'rgba(235, 87, 87, 0.1)';
    } else {
      if (water < 30) {
        status.icon = '🍂';
        status.title = '수분 부족 (시듦 현상)';
        status.desc = '수분이 너무 적습니다! 실시간 상태가 타인의 시선에 그대로 공유되어 방치가 탄로납니다. 어서 물을 주십시오!';
        statusIcon.style.color = 'hsl(35, 80%, 50%)';
        statusIcon.style.background = 'rgba(242, 201, 76, 0.1)';
      } else if (water > 80) {
        status.icon = '💧';
        status.title = '과습 주의 (뿌리 부패)';
        status.desc = '물이 과도하게 공급되었습니다. 과습 상태도 이웃들이 지켜보고 있으니 조절이 필요합니다.';
        statusIcon.style.color = 'hsl(200, 80%, 50%)';
        statusIcon.style.background = 'rgba(47, 128, 237, 0.1)';
      } else {
        if (pressure < 40) {
          status.icon = '🌱';
          status.title = '안정적이지만 느슨함';
          status.desc = '수분은 적당하나, 시선의 압박이 적어 금방 관리 소홀로 이어질 수 있습니다. 공유율을 높여보세요.';
          statusIcon.style.color = 'hsl(148, 60%, 45%)';
          statusIcon.style.background = 'rgba(34, 197, 94, 0.1)';
        } else {
          status.icon = '🌿';
          status.title = '완벽한 생장 상태 (시선 효과)';
          status.desc = '타인의 시선이 주는 긍정적인 자극으로 인해, 규칙적이고 꾸준한 케어가 이어집니다. 식물이 무성히 자랍니다!';
          statusIcon.style.color = 'var(--accent)';
          statusIcon.style.background = 'var(--accent-glow)';
        }
      }
    }

    statusIcon.textContent = status.icon;
    statusTitle.textContent = status.title;
    statusDesc.textContent = status.desc;
  }

  updatePlantSimulator();
}

/**
 * 5. 스토어 홈 상품 카드 그리드 렌더러
 */
function renderProductGrid() {
  const gridContainer = document.getElementById('productGridContainer');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  Object.values(productsData).forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card glass-panel reveal';
    card.setAttribute('onclick', `navigateToProduct('${prod.id}')`);
    card.innerHTML = `
      <div class="prod-img-box img-block">
        <img src="${prod.thumbnails[0]}" alt="${prod.name}" />
      </div>
      <div class="prod-info-box">
        <span class="prod-brand">${prod.brand}</span>
        <h3 class="prod-title">${prod.name}</h3>
        <div class="prod-price-row">
          <span class="discount">${prod.discount}</span>
          <span class="price">${prod.price.toLocaleString()}원</span>
        </div>
        <div class="prod-meta">
          <span class="stars">★★★★★</span>
          <span class="rating">${prod.rating}</span>
          <span class="reviews">(${prod.reviewsCount})</span>
        </div>
      </div>
    `;
    gridContainer.appendChild(card);
  });

  // 새로 동적 추가된 카드들을 위해 Reveal Observer 재설정
  const revealElements = gridContainer.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * 6. SPA 라우팅 및 뷰 전환 연동
 */
function handleRouting() {
  const hash = window.location.hash;
  if (hash.startsWith('#product/')) {
    const productId = hash.split('/')[1];
    if (productsData[productId]) {
      renderProductDetail(productId);
    } else {
      goHome();
    }
  } else {
    // 상품 상세 해시가 아니면 홈으로 세팅
    goHome();
  }
}

// 스토어 홈으로 복귀
window.goHome = function() {
  // 해시 클리어
  if (window.location.hash !== '') {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }

  document.getElementById('shop-home').classList.remove('hidden');
  document.getElementById('product-detail-view').classList.add('hidden');

  // 네비 상세 탭바 링크 숨김
  document.getElementById('navDetailLink').classList.add('hidden');
  document.getElementById('navReviewLink').classList.add('hidden');
  document.getElementById('navQnaLink').classList.add('hidden');

  // 활성화 메뉴 처리
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  document.querySelector('.nav-menu a[onclick*="goHome"]').classList.add('active');

  // 옵션 리스트 및 가격 연산 초기화
  selectedOptionsList = [];
  const container = document.getElementById('selectedOptionsContainer');
  if (container) container.innerHTML = '';
  calculateTotalPrice();

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 특정 상품 상세페이지로 가기
window.navigateToProduct = function(productId) {
  window.location.hash = `#product/${productId}`;
};

// 동적 상세페이지 데이터 빌드 및 렌더링
function renderProductDetail(productId) {
  currentProductId = productId;
  const prod = productsData[productId];

  // 뷰 가시성 전환
  document.getElementById('shop-home').classList.add('hidden');
  document.getElementById('product-detail-view').classList.remove('hidden');

  // 네비 상세 탭바 링크 표출
  document.getElementById('navDetailLink').classList.remove('hidden');
  document.getElementById('navReviewLink').classList.remove('hidden');
  document.getElementById('navQnaLink').classList.remove('hidden');

  // 네비게이션 메뉴 상태 변경
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  document.getElementById('navDetailLink').classList.add('active');

  // 1. 상세 영역 정보 세팅
  document.getElementById('shopMainImg').src = prod.thumbnails[0];
  document.getElementById('detailBrand').textContent = prod.brand;
  document.getElementById('detailTitle').textContent = prod.name;
  document.getElementById('detailRatingNum').textContent = prod.rating;
  document.getElementById('detailRatingCount').textContent = `(구매평 ${prod.reviewsCount})`;
  
  document.getElementById('detailDiscount').textContent = prod.discount;
  document.getElementById('detailOriginalPrice').textContent = `${prod.originalPrice.toLocaleString()}원`;
  document.getElementById('detailPrice').textContent = prod.price.toLocaleString();
  document.getElementById('detailBenefit').innerHTML = `네이버페이 포인트 최대 <strong>${Math.round(prod.price * 0.05).toLocaleString()}원</strong> 적립 (기본 적립 + 충전 결제 시)`;

  // 2. 썸네일 리스트 빌드
  const thumbContainer = document.getElementById('detailThumbnailList');
  thumbContainer.innerHTML = '';
  prod.thumbnails.forEach((thumb, idx) => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
    thumbDiv.setAttribute('onclick', `changeShopImage('${thumb}', this)`);
    thumbDiv.innerHTML = `<img src="${thumb}" alt="썸네일 ${idx + 1}" />`;
    thumbContainer.appendChild(thumbDiv);
  });

  // 3. 옵션 드롭다운 빌드
  const optionDropdown = document.getElementById('colorSelect');
  optionDropdown.innerHTML = `<option value="" disabled selected>[필수] 옵션을 선택하세요</option>`;
  prod.options.forEach(opt => {
    const optTag = document.createElement('option');
    optTag.value = opt.val;
    optTag.textContent = opt.name;
    optionDropdown.appendChild(optTag);
  });

  // 4. 상품 상세 본문 - 세로 나열형 이미지 동적 생성
  document.getElementById('detailSectionTitle').textContent = prod.name.split('—')[0].trim();
  document.getElementById('detailSectionDesc').textContent = prod.description;
  
  const detailImgContainer = document.getElementById('detailImagesContainer');
  detailImgContainer.innerHTML = '';
  prod.detailImages.forEach(imgSrc => {
    const imgTag = document.createElement('img');
    imgTag.src = imgSrc;
    imgTag.alt = `${prod.name} 상세 이미지`;
    imgTag.loading = 'lazy';
    detailImgContainer.appendChild(imgTag);
  });

  // 5. 조건부 시뮬레이터 및 캐러셀 노출 제어 (Siseon 제품 한정)
  const simWrapper = document.getElementById('simulatorWrapper');
  const carouselWrapper = document.getElementById('carouselWrapper');
  if (productId === 'siseon') {
    simWrapper.classList.remove('hidden');
    carouselWrapper.classList.remove('hidden');
  } else {
    simWrapper.classList.add('hidden');
    carouselWrapper.classList.add('hidden');
  }

  // 6. 탭 만족도 별점 스코어보드 연동
  document.getElementById('detailRatingScore').textContent = prod.rating;
  const reviewScoreBars = document.getElementById('reviewScoreBars');
  const fiveStarsPercent = productId === 'moong' ? '100%' : (productId === 'siseon' ? '92%' : '88%');
  const fourStarsPercent = productId === 'moong' ? '0%' : (productId === 'siseon' ? '6%' : '10%');
  const threeStarsPercent = productId === 'moong' ? '0%' : (productId === 'siseon' ? '2%' : '2%');
  
  reviewScoreBars.innerHTML = `
    <div class="score-bar-row">
      <span>5점 (아주 만족)</span>
      <div class="bar-bg"><div class="bar-fill" style="width: ${fiveStarsPercent}"></div></div>
      <span class="bar-count">${fiveStarsPercent}</span>
    </div>
    <div class="score-bar-row">
      <span>4점 (만족)</span>
      <div class="bar-bg"><div class="bar-fill" style="width: ${fourStarsPercent}"></div></div>
      <span class="bar-count">${fourStarsPercent}</span>
    </div>
    <div class="score-bar-row">
      <span>3점 (보통)</span>
      <div class="bar-bg"><div class="bar-fill" style="width: ${threeStarsPercent}"></div></div>
      <span class="bar-count">${threeStarsPercent}</span>
    </div>
  `;

  // 7. 상품별 동적 리뷰 목록 렌더링
  document.getElementById('reviewTotalCount').textContent = `${prod.reviewsCount}건`;
  document.getElementById('tabBtnReview').textContent = `리뷰 (${prod.reviewsCount})`;
  const reviewFeed = document.getElementById('reviewFeedContainer');
  reviewFeed.innerHTML = '';
  prod.reviews.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'review-card glass-panel';
    card.innerHTML = `
      <div class="review-header">
        <div class="user-info">
          <span class="user-id">${rev.id}</span>
          <span class="purchase-date">${rev.date}</span>
          <span class="purchase-option">선택 옵션: ${rev.option}</span>
        </div>
        <div class="review-rating">${rev.rating}</div>
      </div>
      <div class="review-body">
        <p class="review-text">${rev.text}</p>
      </div>
    `;
    reviewFeed.appendChild(card);
  });

  // 8. 상품별 동적 Q&A 목록 렌더링
  document.getElementById('qnaTotalCount').textContent = `${prod.qna.length}건`;
  document.getElementById('tabBtnQna').textContent = `Q&A (${prod.qna.length})`;
  const qnaList = document.getElementById('qnaListContainer');
  qnaList.innerHTML = '';
  prod.qna.forEach(q => {
    const qnaGroup = document.createElement('div');
    qnaGroup.className = 'qna-item-wrapper';
    qnaGroup.innerHTML = `
      <div class="qna-row" onclick="toggleQnaAnswer(this)">
        <span class="qna-col-status ${q.status === '답변완료' ? 'answered' : 'pending'}">${q.status}</span>
        <span class="qna-col-title">${q.title} 🔒</span>
        <span class="qna-col-author">${q.author}</span>
        <span class="qna-col-date">${q.date}</span>
      </div>
      <div class="qna-answer-box">
        <p>${q.answer}</p>
      </div>
    `;
    qnaList.appendChild(qnaGroup);
  });

  // 탭 상태 및 옵션 리셋
  selectedOptionsList = [];
  document.getElementById('selectedOptionsContainer').innerHTML = '';
  calculateTotalPrice();
  
  // 첫 번째 상세정보 탭 강제 활성화
  const defaultTabBtn = document.getElementById('tabBtnDetail');
  switchTab('detail', defaultTabBtn);

  // 스크롤 상단 이동
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 7. 옵션 선택 로직 및 합계 연산
 */
window.selectOption = function(selectElement) {
  const optionValue = selectElement.value;
  if (!optionValue) return;

  const prod = productsData[currentProductId];

  // 이미 선택된 옵션인지 체크
  const isExist = selectedOptionsList.some(item => item.option === optionValue);
  
  if (isExist) {
    alert('이미 추가된 옵션입니다. 하단의 수량을 조절해 주세요.');
  } else {
    selectedOptionsList.push({
      option: optionValue,
      quantity: 1,
      price: prod.price
    });
    renderSelectedOptions();
  }
  
  selectElement.selectedIndex = 0;
};

function renderSelectedOptions() {
  const container = document.getElementById('selectedOptionsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  selectedOptionsList.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'selected-option-card';
    card.innerHTML = `
      <div class="card-top-row">
        <span class="selected-opt-name">${currentProductId.toUpperCase()} — ${item.option}</span>
        <button class="btn-remove-opt" onclick="removeOption(${index})" title="옵션 삭제">×</button>
      </div>
      <div class="card-bottom-row">
        <div class="quantity-control">
          <button type="button" onclick="adjustQuantity(${index}, -1)">-</button>
          <input type="text" value="${item.quantity}" readonly />
          <button type="button" onclick="adjustQuantity(${index}, 1)">+</button>
        </div>
        <div class="opt-price-box">
          <span>${(item.price * item.quantity).toLocaleString()}</span>원
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  
  calculateTotalPrice();
}

window.adjustQuantity = function(index, direction) {
  if (direction === -1 && selectedOptionsList[index].quantity <= 1) {
    alert('최소 수량은 1개입니다.');
    return;
  }
  selectedOptionsList[index].quantity += direction;
  renderSelectedOptions();
};

window.removeOption = function(index) {
  selectedOptionsList.splice(index, 1);
  renderSelectedOptions();
};

function calculateTotalPrice() {
  const totalValElement = document.getElementById('totalPriceVal');
  if (!totalValElement) return;

  const total = selectedOptionsList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalValElement.textContent = total.toLocaleString();
}

// 찜하기 버튼 토글
window.toggleWish = function(button) {
  button.classList.toggle('active');
  if (button.classList.contains('active')) {
    button.textContent = '❤️';
    alert('상품을 찜 리스트에 담았습니다!');
  } else {
    button.textContent = '🤍';
  }
};

/**
 * 8. 쇼핑 썸네일 이미지 체인저
 */
window.changeShopImage = function(imgSrc, element) {
  const mainImg = document.getElementById('shopMainImg');
  if (mainImg) {
    mainImg.src = imgSrc;
  }
  
  document.querySelectorAll('.thumb-item').forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
};

/**
 * 9. 상세 탭 스위칭 시스템
 */
window.switchTab = function(tabName, element) {
  // 탭 네비 버튼 상태 제어
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  element.classList.add('active');
  
  // 네비바 메뉴 링크 싱크
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  if (tabName === 'detail') document.getElementById('navDetailLink').classList.add('active');
  if (tabName === 'review') document.getElementById('navReviewLink').classList.add('active');
  if (tabName === 'qna') document.getElementById('navQnaLink').classList.add('active');

  // 탭 콘텐츠 보이기 제어
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const targetId = 'tabContent' + tabName.charAt(0).toUpperCase() + tabName.slice(1);
  const targetContent = document.getElementById(targetId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // 탭 클릭 시 스크롤을 탭의 시작 지점으로 이동
  const tabsSection = document.getElementById('tabs-section');
  if (tabsSection) {
    const yOffset = -70; // 헤더 높이 보정값
    const y = tabsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

// Q&A 아코디언 펼치기
window.toggleQnaAnswer = function(rowElement) {
  const answerBox = rowElement.nextElementSibling;
  if (answerBox && answerBox.classList.contains('qna-answer-box')) {
    answerBox.classList.toggle('open');
  }
};

/**
 * 10. 네이버페이 결제 모달 팝업 제어
 */
window.openCheckoutModal = function() {
  if (selectedOptionsList.length === 0) {
    alert('구매하실 색상 옵션을 최소 1개 이상 선택해 주세요.');
    return;
  }
  
  const modal = document.getElementById('checkoutModal');
  const loadingBox = document.getElementById('modalLoading');
  const successBox = document.getElementById('modalSuccess');
  
  if (!modal || !loadingBox || !successBox) return;

  modal.classList.add('open');
  loadingBox.classList.remove('hidden');
  successBox.classList.add('hidden');
  
  const receiptProduct = document.getElementById('receiptProduct');
  const receiptPrice = document.getElementById('receiptPrice');
  
  const productSummary = selectedOptionsList.map(item => `${item.option} (${item.quantity}개)`).join(', ');
  const totalPrice = selectedOptionsList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const prod = productsData[currentProductId];
  receiptProduct.textContent = `${prod.name.split('—')[0].trim()} — ${productSummary}`;
  receiptPrice.textContent = `${totalPrice.toLocaleString()}원`;

  setTimeout(() => {
    loadingBox.classList.add('hidden');
    successBox.classList.remove('hidden');
  }, 1500);
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.remove('open');
  }
  
  selectedOptionsList = [];
  renderSelectedOptions();
  
  goHome(); // 결제 후 홈으로 이동
};
