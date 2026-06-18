/**
 * Siseon 다중 상품 쇼핑몰 인터랙티브 스크립트 (main.js)
 * 모든 주석과 설명은 한글로 작성되었습니다.
 */

// TIKTOK 브랜드 신규 4종 상품 마스터 데이터셋 (상단 갤러리 영역에 상세페이지 이미지 혼합 없이 오직 제품대표이미지만 4개 활용)
const productsData = {
  tiktok01: {
    id: 'tiktok01',
    name: 'TIKTOK Object 01 — 감성 아날로그 테이블 락',
    engName: 'TIKTOK Analog Table Rock',
    brand: 'TIKTOK',
    price: 189000,
    originalPrice: 220000,
    discount: '15%',
    rating: 4.9,
    reviewsCount: 42,
    description: '공간의 흐름을 부드럽게 가다듬는 TIKTOK의 첫 번째 시그니처 세라믹 디자인 오브제입니다.',
    options: [
      { name: 'Chalk White (매트 화이트 마감)', val: 'Chalk White' },
      { name: 'Stone Gray (거친 돌 텍스처 마감)', val: 'Stone Gray' }
    ],
    thumbnails: [
      '제품대표이미지/1.png',
      '제품대표이미지/2.png',
      '제품대표이미지/3.png',
      '제품대표이미지/4.png'
    ],
    detailImages: [
      '상세페이지/1.png',
      '상세페이지/2.png',
      '상세페이지/3.png',
      '상세페이지/4.png',
      '상세페이지/5.png',
      '상세페이지/6.png',
      '상세페이지/7.png',
      '상세페이지/8.png'
    ],
    reviews: [
      { id: 'tiktok_l***', date: '2026.06.15', option: 'Chalk White', rating: '★★★★★', text: '인테리어 효과가 정말 최고입니다. 화이트 배경의 방에 두니 갤러리 느낌이 물씬 나네요. 세로 나열된 상세 설명 이미지를 보고 반해서 샀는데 실물이 훨씬 예쁩니다.' },
      { id: 'object_***', date: '2026.06.02', option: 'Stone Gray', rating: '★★★★★', text: '스톤 그레이 마감이 아주 독특하고 묵직한 조형미가 느껴집니다. 화분이나 도자기 옆에 두면 예술적 감성이 배가됩니다.' }
    ],
    qna: [
      { status: '답변완료', title: '제품 표면 오염 시 물세척이 가능한가요?', author: 'clean_***', date: '2026.06.14', answer: '안녕하세요, 고객님! TIKTOK Object는 친환경 세라믹 코팅 마감이 되어 있어 가벼운 물티슈나 흐르는 물에 헹구어 관리하실 수 있습니다. 거친 솔 사용은 삼가 주시기 바랍니다.' }
    ]
  },
  tiktok02: {
    id: 'tiktok02',
    name: 'TIKTOK Object 02 — 미니멀 코스탈 드립 트레이',
    engName: 'TIKTOK Coastal Drip Tray',
    brand: 'TIKTOK',
    price: 145000,
    originalPrice: 161000,
    discount: '10%',
    rating: 4.8,
    reviewsCount: 35,
    description: '자연스러운 해안선의 실루엣을 모티브로 빚어낸 프리미엄 테이블 탑 트레이 스탠드입니다.',
    options: [
      { name: 'Sand Beige (모래 사장 베이지)', val: 'Sand Beige' },
      { name: 'Coral Pink (산호 적색)', val: 'Coral Pink' }
    ],
    thumbnails: [
      '제품대표이미지/2.png',
      '제품대표이미지/1.png',
      '제품대표이미지/3.png',
      '제품대표이미지/4.png'
    ],
    detailImages: [
      '상세페이지/3.png',
      '상세페이지/4.png',
      '상세페이지/5.png',
      '상세페이지/6.png',
      '상세페이지/7.png',
      '상세페이지/8.png'
    ],
    reviews: [
      { id: 'water_***', date: '2026.06.11', option: 'Sand Beige', rating: '★★★★★', text: '테이블 위의 소품들을 정돈하기 위해 샀는데 수분 흡수도 잘 되고 질감도 따뜻하여 매우 만족하며 사용하고 있습니다.' }
    ],
    qna: [
      { status: '답변완료', title: '배송 시 파손 우려는 없나요?', author: 'safety_***', date: '2026.06.05', answer: '안녕하세요! TIKTOK의 모든 조형 세라믹 제품은 파손 방지를 위해 특수 커스텀 패키징 및 삼중 완충재 포장으로 전 배송 구역 안전 배송을 보장하고 있습니다.' }
    ]
  },
  tiktok03: {
    id: 'tiktok03',
    name: 'TIKTOK Object 03 — 오로라 스마트 무드 오브제',
    engName: 'TIKTOK Aurora Mood Object',
    brand: 'TIKTOK',
    price: 168000,
    originalPrice: 191000,
    discount: '12%',
    rating: 5.0,
    reviewsCount: 29,
    description: '구름과 안개의 유기적 흐름을 빛의 스펙트럼으로 투사하는 스마트 라이팅 디바이스입니다.',
    options: [
      { name: 'Pure Cirrus (화이트 실크 마감)', val: 'Pure Cirrus' },
      { name: 'Deep Nimbus (블랙 스모크 마감)', val: 'Deep Nimbus' }
    ],
    thumbnails: [
      '제품대표이미지/3.png',
      '제품대표이미지/1.png',
      '제품대표이미지/2.png',
      '제품대표이미지/4.png'
    ],
    detailImages: [
      '상세페이지/1.png',
      '상세페이지/2.png',
      '상세페이지/5.png',
      '상세페이지/6.png',
      '상세페이지/7.png',
      '상세페이지/8.png'
    ],
    reviews: [
      { id: 'aurora***', date: '2026.06.16', option: 'Pure Cirrus', rating: '★★★★★', text: '밤마다 방 안에 오로라가 치는 느낌이라 눈이 즐겁고 힐링이 됩니다. 웰빙 무드 라이트용으로 최고네요.' }
    ],
    qna: [
      { status: '답변완료', title: '스마트폰 전용 어플 연동 방식인가요?', author: 'app_m***', date: '2026.06.10', answer: '안녕하세요, 고객님! 본 조명 오브제는 전용 TIKTOK 스마트 가이드 앱(iOS 및 Android 지원)을 다운받아 간편하게 블루투스/Wi-Fi로 멀티 페어링 제어가 가능합니다.' }
    ]
  },
  tiktok04: {
    id: 'tiktok04',
    name: 'TIKTOK Object 04 — 사운드스케이프 스마트 스피커',
    engName: 'TIKTOK Soundscape Smart Speaker',
    brand: 'TIKTOK',
    price: 219000,
    originalPrice: 250000,
    discount: '12%',
    rating: 4.8,
    reviewsCount: 31,
    description: '도자 울림통 설계를 통해 입체적인 자연 음향과 백색소음을 방 안 전체에 확산시키는 감성 스피커입니다.',
    options: [
      { name: 'Clay White (백자 화이트 마감)', val: 'Clay White' },
      { name: 'Volcanic Ash (화산재 매트 블랙)', val: 'Volcanic Ash' }
    ],
    thumbnails: [
      '제품대표이미지/4.png',
      '제품대표이미지/1.png',
      '제품대표이미지/2.png',
      '제품대표이미지/3.png'
    ],
    detailImages: [
      '상세페이지/2.png',
      '상세페이지/4.png',
      '상세페이지/6.png',
      '상세페이지/8.png'
    ],
    reviews: [
      { id: 'speaker***', date: '2026.06.14', option: 'Clay White', rating: '★★★★★', text: '소리가 도자기 통 안에서 한 번 울려 퍼져서 그런지 중저음 소리가 엄청 부드럽고 편안하게 들립니다. 디자인도 너무 튀지 않고 은은해서 공간과 잘 융합됩니다.' }
    ],
    qna: [
      { status: '답변완료', title: '무선 블루투스 연결 규격이 어떻게 되나요?', author: 'blue_***', date: '2026.06.03', answer: '안녕하세요! 본 오디오 디바이스는 최신 Bluetooth 5.3 버전을 탑재하여 혼선이나 끊김 없이 고음질 음원을 안정적으로 무선 재생하실 수 있습니다.' }
    ]
  }
};

// 현재 상세페이지에 로드된 상품 ID 및 정보
let currentProductId = 'tiktok01';
let selectedOptionsList = [];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollEffects();
  initStudioCarousel();
  initDeviceSimulator();
  renderProductGrid(); // 메인 홈 상품 4종 리스트 렌더링
  
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
  const initialTheme = savedTheme || 'light';

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
 * 4. 가상 디바이스 시뮬레이터 동작 로직 (TIKTOK에서는 비활성화 유지)
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
    goHome();
  }
}

window.goHome = function() {
  if (window.location.hash !== '') {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }

  document.getElementById('shop-home').classList.remove('hidden');
  document.getElementById('product-detail-view').classList.add('hidden');

  document.getElementById('navDetailLink').classList.add('hidden');
  document.getElementById('navReviewLink').classList.add('hidden');
  document.getElementById('navQnaLink').classList.add('hidden');

  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  document.querySelector('.nav-menu a[onclick*="goHome"]').classList.add('active');

  selectedOptionsList = [];
  const container = document.getElementById('selectedOptionsContainer');
  if (container) container.innerHTML = '';
  calculateTotalPrice();

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.navigateToProduct = function(productId) {
  window.location.hash = `#product/${productId}`;
};

function renderProductDetail(productId) {
  currentProductId = productId;
  const prod = productsData[productId];

  document.getElementById('shop-home').classList.add('hidden');
  document.getElementById('product-detail-view').classList.remove('hidden');

  document.getElementById('navDetailLink').classList.remove('hidden');
  document.getElementById('navReviewLink').classList.remove('hidden');
  document.getElementById('navQnaLink').classList.remove('hidden');

  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  document.getElementById('navDetailLink').classList.add('active');

  document.getElementById('shopMainImg').src = prod.thumbnails[0];
  document.getElementById('detailBrand').textContent = prod.brand;
  document.getElementById('detailTitle').textContent = prod.name;
  document.getElementById('detailDescription').textContent = prod.description;
  document.getElementById('detailRatingNum').textContent = prod.rating;
  document.getElementById('detailRatingCount').textContent = `(구매평 ${prod.reviewsCount})`;
  
  document.getElementById('detailDiscount').textContent = prod.discount;
  document.getElementById('detailOriginalPrice').textContent = `${prod.originalPrice.toLocaleString()}원`;
  document.getElementById('detailPrice').textContent = prod.price.toLocaleString();
  document.getElementById('detailBenefit').innerHTML = `네이버페이 포인트 최대 <strong>${Math.round(prod.price * 0.05).toLocaleString()}원</strong> 적립 (기본 적립 + 충전 결제 시)`;

  // 4개의 썸네일 리스트 빌드 (상세 이미지 혼합 없이 오직 제품대표이미지만 사용)
  const thumbContainer = document.getElementById('detailThumbnailList');
  thumbContainer.innerHTML = '';
  prod.thumbnails.forEach((thumb, idx) => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
    thumbDiv.setAttribute('onclick', `changeShopImage('${thumb}', this)`);
    thumbDiv.innerHTML = `<img src="${thumb}" alt="썸네일 ${idx + 1}" />`;
    thumbContainer.appendChild(thumbDiv);
  });

  const optionDropdown = document.getElementById('colorSelect');
  optionDropdown.innerHTML = `<option value="" disabled selected>[필수] 옵션을 선택하세요</option>`;
  prod.options.forEach(opt => {
    const optTag = document.createElement('option');
    optTag.value = opt.val;
    optTag.textContent = opt.name;
    optionDropdown.appendChild(optTag);
  });

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

  const simWrapper = document.getElementById('simulatorWrapper');
  const carouselWrapper = document.getElementById('carouselWrapper');
  simWrapper.classList.add('hidden');
  carouselWrapper.classList.add('hidden');

  document.getElementById('detailRatingScore').textContent = prod.rating;
  const reviewScoreBars = document.getElementById('reviewScoreBars');
  const fiveStarsPercent = productId === 'tiktok03' ? '100%' : '88%';
  const fourStarsPercent = productId === 'tiktok03' ? '0%' : '10%';
  const threeStarsPercent = productId === 'tiktok03' ? '0%' : '2%';
  
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

  selectedOptionsList = [];
  document.getElementById('selectedOptionsContainer').innerHTML = '';
  calculateTotalPrice();
  
  const defaultTabBtn = document.getElementById('tabBtnDetail');
  switchTab('detail', defaultTabBtn);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 7. 옵션 선택 로직 및 합계 연산
 */
window.selectOption = function(selectElement) {
  const optionValue = selectElement.value;
  if (!optionValue) return;

  const prod = productsData[currentProductId];

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
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  element.classList.add('active');
  
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  if (tabName === 'detail') document.getElementById('navDetailLink').classList.add('active');
  if (tabName === 'review') document.getElementById('navReviewLink').classList.add('active');
  if (tabName === 'qna') document.getElementById('navQnaLink').classList.add('active');

  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const targetId = 'tabContent' + tabName.charAt(0).toUpperCase() + tabName.slice(1);
  const targetContent = document.getElementById(targetId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  const tabsSection = document.getElementById('tabs-section');
  if (tabsSection) {
    const yOffset = -70;
    const y = tabsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

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
  
  goHome();
};
