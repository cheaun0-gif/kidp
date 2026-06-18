/**
 * TIKTOK 다중 상품 쇼핑몰 인터랙티브 스크립트 (main.js)
 * 모든 주석과 설명은 한글로 작성되었습니다.
 */

// TIKTOK 브랜드 신규 4종 상품 마스터 데이터셋 (상단 갤러리 영역에 상세페이지 이미지 혼합 없이 오직 제품대표이미지만 4개 활용)
const productsData = {
  tiktok01: {
    id: 'tiktok01',
    name: 'TIKTOK Object — 어린이 시간 관리 세라믹 오브제',
    engName: 'TIKTOK Kids Time Ceramic Manager',
    brand: 'TIKTOK',
    price: 189000,
    originalPrice: 220000,
    discount: '15%',
    rating: 4.9,
    reviewsCount: 42,
    description: '아이들의 규칙적인 생활 습관 형성과 주도적 몰입을 돕는 TIKTOK의 프리미엄 어린이 전용 시간 관리 세라믹 오브제입니다. 모래시계처럼 직관적으로 흐르는 시간의 시각화를 통해 스스로 집중의 재미를 터득할 수 있도록 빚어낸 조형 디자인 제품입니다.',
    options: [
      { name: 'Chalk White (매트 화이트 마감)', val: 'Chalk White' },
      { name: 'Stone Gray (거친 돌 텍스처 마감)', val: 'Stone Gray' }
    ],
    thumbnails: [
      '메인제품/1.png',
      '메인제품/2.png',
      '메인제품/3.png',
      '메인제품/4.png'
    ],
    detailImages: [
      '상세페이지/1.png',
      '상세페이지/2.png',
      '상세페이지/3.png',
      '상세페이지/4.png',
      '상세페이지/5.png',
      '상세페이지/6.png',
      '상세페이지/7.png',
      '상세페이지/8.png',
      '상세페이지/9.png',
      '상세페이지/10.png'
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
    name: 'OLIGIO — 고주파 피부미용 의료기기',
    engName: 'OLIGIO High-Frequency Skincare System',
    brand: 'TIKTOK',
    price: 50000000,
    originalPrice: 55000000,
    discount: '9%',
    rating: 4.8,
    reviewsCount: 35,
    description: '전문가 수준의 고주파 에너지를 통해 집에서도 완성도 높은 피부 탄력과 활력을 선사하는 프리미엄 뷰티 홈 디바이스.',
    options: [
      { name: 'Standard Edition (정품 보증서 동봉)', val: 'Standard' }
    ],
    thumbnails: [
      '제품1/4.png',
      '제품1/4.png',
      '제품1/4.png',
      '제품1/4.png'
    ],
    detailImages: [
      '제품1/4.png'
    ],
    reviews: [
      { id: 'skin_***', date: '2026.06.11', option: 'Standard', rating: '★★★★★', text: '클리닉에서 관리받던 느낌을 집에서 매일 경험하고 있습니다. 탄력 관리에 아주 훌륭한 디바이스네요.' }
    ],
    qna: [
      { status: '답변완료', title: '무상 A/S 보증 기간이 어떻게 되나요?', author: 'safety_***', date: '2026.06.05', answer: '안녕하세요! 본 고주파 디바이스는 구매일로부터 2년간 무상 수리 및 전국 정밀 진단 케어 서비스가 제공됩니다.' }
    ]
  },
  tiktok03: {
    id: 'tiktok03',
    name: 'NAME — 프리미엄 세라믹 명함꽂이',
    engName: 'NAME Ceramic Card Holder',
    brand: 'TIKTOK',
    price: 38000,
    originalPrice: 45000,
    discount: '15%',
    rating: 5.0,
    reviewsCount: 29,
    description: '데스크 위의 비즈니스 품격을 한 차원 높여주고 감각적인 첫인상을 선사하는 미니멀 세라믹 명함 거치대.',
    options: [
      { name: 'Pure White (무광 화이트)', val: 'Pure White' },
      { name: 'Charcoal Black (스톤 블랙)', val: 'Charcoal Black' }
    ],
    thumbnails: [
      '제품2/엽서2.png',
      '제품2/엽서2.png',
      '제품2/엽서2.png',
      '제품2/엽서2.png'
    ],
    detailImages: [
      '제품2/엽서2.png'
    ],
    reviews: [
      { id: 'desk_***', date: '2026.06.16', option: 'Pure White', rating: '★★★★★', text: '사무실 책상에 올려두기 좋은 훌륭한 데스크테리어 제품입니다. 견고하고 마감이 고급스러워요.' }
    ],
    qna: [
      { status: '답변완료', title: '수납 가능한 명함 개수가 몇 개 정도인가요?', author: 'biz_***', date: '2026.06.10', answer: '안녕하세요! 본 오피스 세라믹 거치대는 명함 규격 기준 약 25~30장 내외를 안정적이고 깔끔하게 보관하실 수 있도록 홈이 가공되어 있습니다.' }
    ]
  },
  tiktok04: {
    id: 'tiktok04',
    name: '시선 — 스마트 식물관리기기',
    engName: 'Siseon Smart Plant Care IoT Hub',
    brand: 'TIKTOK',
    price: 200000,
    originalPrice: 230000,
    discount: '13%',
    rating: 4.8,
    reviewsCount: 31,
    description: '조도 센싱과 토양의 온습도를 정밀하게 측정하여 스마트폰 앱으로 생장 상태를 리포트해 주는 IoT 스마트 식물 케어 도우미.',
    options: [
      { name: 'IoT Premium Edition (전용 앱 가이드 포함)', val: 'Premium' }
    ],
    thumbnails: [
      '제품3/Instagram post - 63.png',
      '제품3/Instagram post - 63.png',
      '제품3/Instagram post - 63.png',
      '제품3/Instagram post - 63.png'
    ],
    detailImages: [
      '제품3/Instagram post - 63.png'
    ],
    reviews: [
      { id: 'plant_***', date: '2026.06.14', option: 'Premium', rating: '★★★★★', text: '식물이 자꾸 시들어서 고민이었는데 실시간 알림 기능 덕분에 적절한 때에 물을 줄 수 있어 키우는 보람이 있습니다.' }
    ],
    qna: [
      { status: '답변완료', title: '생활 방수를 지원하는지 궁금합니다.', author: 'blue_***', date: '2026.06.03', answer: '안녕하세요! 본 IoT 화분 케어 기기는 IP65 등급의 생활 방수를 보장하여 실외 테라스나 일반 분무 사용 시 무리 없이 안정적인 수치를 리포팅합니다.' }
    ]
  }
};

// 현재 상세페이지에 로드된 상품 ID 및 정보
let currentProductId = 'tiktok01';
let selectedOptionsList = [];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollEffects();
  
  if (document.getElementById('product-detail-view')) {
    renderProductDetail('tiktok01');
  } else {
    renderProductGrid();
  }
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
 * 5. 스토어 홈 상품 카드 그리드 렌더러
 */
function renderProductGrid() {
  const gridContainer = document.getElementById('productGridContainer');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  Object.values(productsData).forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card glass-panel reveal';
    if (prod.id === 'tiktok01') {
      card.setAttribute('onclick', `location.href='detail.html'`);
    } else {
      card.style.cursor = 'default';
      card.setAttribute('onclick', `void(0)`);
    }
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
          <span class="original-price">${prod.originalPrice.toLocaleString()}원</span>
        </div>
        <div class="prod-meta">
          <span class="stars">★★★★★</span>
          <span class="rating">${prod.rating}</span>
          <span class="reviews">(${prod.reviewsCount})</span>
        </div>
        <div class="prod-badges">
          <span class="badge badge-free">무료배송</span>
          <span class="badge badge-today">오늘출발</span>
          <span class="badge badge-npay">N페이 적립</span>
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
  location.href = 'index.html';
};

window.navigateToProduct = function(productId) {
  if (productId === 'tiktok01') {
    location.href = 'detail.html';
  }
};

function renderProductDetail(productId) {
  currentProductId = productId;
  const prod = productsData[productId];

  const shopHome = document.getElementById('shop-home');
  if (shopHome) shopHome.classList.add('hidden');
  
  const detailView = document.getElementById('product-detail-view');
  if (detailView) detailView.classList.remove('hidden');

  const navDetailLink = document.getElementById('navDetailLink');
  if (navDetailLink) navDetailLink.classList.remove('hidden');
  const navReviewLink = document.getElementById('navReviewLink');
  if (navReviewLink) navReviewLink.classList.remove('hidden');
  const navQnaLink = document.getElementById('navQnaLink');
  if (navQnaLink) navQnaLink.classList.remove('hidden');

  const navDetailA = document.querySelector('.nav-menu a');
  if (navDetailA) {
    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
    if (navDetailLink) navDetailLink.classList.add('active');
  }

  const shopMainImg = document.getElementById('shopMainImg');
  if (shopMainImg) shopMainImg.src = prod.thumbnails[0];
  const detailBrand = document.getElementById('detailBrand');
  if (detailBrand) detailBrand.textContent = prod.brand;
  const detailTitle = document.getElementById('detailTitle');
  if (detailTitle) detailTitle.textContent = prod.name;
  const detailDescription = document.getElementById('detailDescription');
  if (detailDescription) detailDescription.textContent = prod.description;
  const detailRatingNum = document.getElementById('detailRatingNum');
  if (detailRatingNum) detailRatingNum.textContent = prod.rating;
  const detailRatingCount = document.getElementById('detailRatingCount');
  if (detailRatingCount) detailRatingCount.textContent = `(구매평 ${prod.reviewsCount})`;
  
  const detailDiscount = document.getElementById('detailDiscount');
  if (detailDiscount) detailDiscount.textContent = prod.discount;
  const detailOriginalPrice = document.getElementById('detailOriginalPrice');
  if (detailOriginalPrice) detailOriginalPrice.textContent = `${prod.originalPrice.toLocaleString()}원`;
  const detailPrice = document.getElementById('detailPrice');
  if (detailPrice) detailPrice.textContent = prod.price.toLocaleString();
  const detailBenefit = document.getElementById('detailBenefit');
  if (detailBenefit) detailBenefit.innerHTML = `네이버페이 포인트 최대 <strong>${Math.round(prod.price * 0.05).toLocaleString()}원</strong> 적립 (기본 적립 + 충전 결제 시)`;

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
