/**
 * Siseon 쇼핑몰 인터랙티브 스크립트 (main.js)
 * 모든 주석과 설명은 한글로 작성되었습니다.
 */

// 선택된 상품 옵션을 담을 전역 상태 객체
let selectedOptions = [];
const PRODUCT_UNIT_PRICE = 189000; // 개당 가격 (189,000원)

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollEffects();
  initStudioCarousel();
  initDeviceSimulator();
  initTabSystem();
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
    threshold: 0.1,
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
    const slideWidth = slides[0].getBoundingClientRect().width + 40;
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
    const slideWidth = slides[0].getBoundingClientRect().width + 40;
    const targetScroll = activeIndex * slideWidth;
    track.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }
}

/**
 * 4. 가상 디바이스 시뮬레이터 동작 로직
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
 * 5. 쇼핑몰 이미지 선택 썸네일 제어
 */
window.changeShopImage = function(imgSrc, element) {
  const mainImg = document.getElementById('shopMainImg');
  if (mainImg) {
    mainImg.src = imgSrc;
  }
  
  // 모든 썸네일 비활성화 후 선택된 썸네일 활성화
  document.querySelectorAll('.thumb-item').forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
};

/**
 * 6. 쇼핑 옵션 선택 로직 및 합계 연산
 */
window.selectOption = function(selectElement) {
  const optionValue = selectElement.value;
  if (!optionValue) return;

  // 이미 선택된 옵션인지 체크
  const isExist = selectedOptions.some(item => item.option === optionValue);
  
  if (isExist) {
    alert('이미 추가된 옵션입니다. 하단의 수량을 조절해 주세요.');
  } else {
    // 옵션 리스트 상태 객체에 추가
    selectedOptions.push({
      option: optionValue,
      quantity: 1,
      price: PRODUCT_UNIT_PRICE
    });
    
    // UI에 옵션 카드 렌더링
    renderSelectedOptions();
  }
  
  // 셀렉트 박스 다시 기본값으로 리셋
  selectElement.selectedIndex = 0;
};

// 선택된 옵션 렌더링
function renderSelectedOptions() {
  const container = document.getElementById('selectedOptionsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  selectedOptions.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'selected-option-card';
    card.innerHTML = `
      <div class="card-top-row">
        <span class="selected-opt-name">Siseon — ${item.option}</span>
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

// 수량 조절
window.adjustQuantity = function(index, direction) {
  if (direction === -1 && selectedOptions[index].quantity <= 1) {
    alert('최소 수량은 1개입니다.');
    return;
  }
  
  selectedOptions[index].quantity += direction;
  renderSelectedOptions();
};

// 옵션 제거
window.removeOption = function(index) {
  selectedOptions.splice(index, 1);
  renderSelectedOptions();
};

// 총 합계 연산
function calculateTotalPrice() {
  const totalValElement = document.getElementById('totalPriceVal');
  if (!totalValElement) return;

  const total = selectedOptions.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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
 * 7. 하단 탭 시스템 및 스위칭
 */
function initTabSystem() {
  // Q&A 아코디언은 탭 안쪽에 존재하므로 초기화 시 관여하지 않음
}

window.switchTab = function(tabName, element) {
  // 탭 네비 버튼 상태 제어
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  element.classList.add('active');
  
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
    const yOffset = -70; // 헤더 높이에 따른 보정값
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
 * 8. 네이버페이 결제 모달 팝업 제어
 */
window.openCheckoutModal = function() {
  if (selectedOptions.length === 0) {
    alert('구매하실 색상 옵션을 최소 1개 이상 선택해 주세요.');
    return;
  }
  
  const modal = document.getElementById('checkoutModal');
  const loadingBox = document.getElementById('modalLoading');
  const successBox = document.getElementById('modalSuccess');
  
  if (!modal || !loadingBox || !successBox) return;

  // 모달 열기
  modal.classList.add('open');
  loadingBox.classList.remove('hidden');
  successBox.classList.add('hidden');
  
  // 영수증 정보 빌드
  const receiptProduct = document.getElementById('receiptProduct');
  const receiptPrice = document.getElementById('receiptPrice');
  
  const productSummary = selectedOptions.map(item => `${item.option} (${item.quantity}개)`).join(', ');
  const totalPrice = selectedOptions.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  receiptProduct.textContent = `Siseon — ${productSummary}`;
  receiptPrice.textContent = `${totalPrice.toLocaleString()}원`;

  // 1.5초 가상 결제 프로세스 지연 처리 (스피너 완료 효과)
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
  
  // 결제 완료 후 장바구니/옵션 초기화
  selectedOptions = [];
  renderSelectedOptions();
  
  // 스크롤 상단 이동
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
