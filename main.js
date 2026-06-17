/**
 * Siseon 웹사이트 프리미엄 인터랙티브 스크립트 (main.js)
 * 모든 주석과 설명은 한글로 작성되었습니다.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollEffects();
  initStudioCarousel();
  initDeviceSimulator();
});

/**
 * 1. 테마 관리 (다크 / 라이트 모드)
 */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // 로컬 스토리지 또는 시스템 설정에서 테마 불러오기
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  // 초기 테마 설정 적용
  document.documentElement.setAttribute('data-theme', initialTheme);

  // 테마 토글 버튼 클릭 이벤트
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
  // 네비게이션 바 스크롤 시 스타일 변경
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Intersection Observer를 이용한 스크롤 페이드인 (.reveal)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // 한 번 표시된 후 관찰 종료
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px' // 화면 하단에서 약간 미리 올라오도록 설정
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

  // 활성 슬라이드 클래스 업데이트 및 UI 갱신
  function updateCarouselState() {
    // 트랙의 스크롤 위치를 기준으로 현재 중심에 위치한 슬라이드 계산
    const slideWidth = slides[0].getBoundingClientRect().width + 40; // slide width + margin
    const currentScroll = track.scrollLeft;
    const centerIndex = Math.min(
      slides.length - 1,
      Math.max(0, Math.round(currentScroll / slideWidth))
    );

    if (centerIndex !== activeIndex) {
      slides[activeIndex].classList.remove('active');
      slides[centerIndex].classList.add('active');
      activeIndex = centerIndex;
      
      // 카운터 텍스트 업데이트
      counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      
      // 프로그레스 바 상태 업데이트
      const progressPercent = ((activeIndex + 1) / slides.length) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }
  }

  // 초기 활성화 상태 지정
  slides[0].classList.add('active');
  updateCarouselState();

  // 마우스 드래그 이벤트 등록
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
    const walk = (x - startX) * 1.5; // 스크롤 감도 조절
    track.scrollLeft = scrollLeft - walk;
    updateCarouselState();
  });

  // 터치 이벤트 지원 (모바일)
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

  // 휠 스크롤 연동
  track.addEventListener('scroll', () => {
    if (!isDragging) {
      updateCarouselState();
    }
  }, { passive: true });

  // 스크롤이 끝났을 때 중심 슬라이드로 부드럽게 고정(Snapping)
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

  // 셔터 토글 이벤트
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

  // 슬라이더 값 변경 감지 및 UI 업데이트
  waterSlider.addEventListener('input', (e) => {
    waterVal.textContent = `${e.target.value}%`;
    updatePlantSimulator();
  });

  pressureSlider.addEventListener('input', (e) => {
    pressureVal.textContent = `${e.target.value}%`;
    updatePlantSimulator();
  });

  // 시뮬레이터 상태 분석 및 실시간 피드백 로직
  function updatePlantSimulator() {
    const water = parseInt(waterSlider.value);
    const pressure = parseInt(pressureSlider.value);

    let status = {
      icon: '🌱',
      title: '대기 중',
      desc: '디바이스 셔터를 열어 실시간 식물 관찰 및 공유를 시작해 보세요.'
    };

    if (!isShutterOpen) {
      // 셔터가 닫혀있어 공유가 안 되는 상태
      status.icon = '🔒';
      status.title = '관찰 부재 (방치 위험)';
      status.desc = '타인의 시선이 차단되었습니다. 식물 관리가 무관심 속에 방치되기 시작할 수 있습니다.';
      statusIcon.style.color = 'hsl(350, 70%, 50%)';
      statusIcon.style.background = 'rgba(235, 87, 87, 0.1)';
    } else {
      // 셔터가 열려 실시간 공유 중인 상태
      if (water < 30) {
        // 수분 부족
        status.icon = '🍂';
        status.title = '수분 부족 (시듦 현상)';
        status.desc = '수분이 너무 적습니다! 실시간 상태가 타인의 시선에 그대로 공유되어 방치가 탄로납니다. 어서 물을 주십시오!';
        statusIcon.style.color = 'hsl(35, 80%, 50%)';
        statusIcon.style.background = 'rgba(242, 201, 76, 0.1)';
      } else if (water > 80) {
        // 과습
        status.icon = '💧';
        status.title = '과습 주의 (뿌리 부패)';
        status.desc = '물이 과도하게 공급되었습니다. 과습 상태도 이웃들이 지켜보고 있으니 조절이 필요합니다.';
        statusIcon.style.color = 'hsl(200, 80%, 50%)';
        statusIcon.style.background = 'rgba(47, 128, 237, 0.1)';
      } else {
        // 수분이 적절한 상태
        if (pressure < 40) {
          // 공유 압박감이 너무 약함
          status.icon = '🌱';
          status.title = '안정적이지만 느슨함';
          status.desc = '수분은 적당하나, 시선의 압박이 적어 금방 관리 소홀로 이어질 수 있습니다. 공유율을 높여보세요.';
          statusIcon.style.color = 'hsl(148, 60%, 45%)';
          statusIcon.style.background = 'rgba(34, 197, 94, 0.1)';
        } else {
          // 최상의 건강 상태 (시선의 압박 효과 톡톡)
          status.icon = '🌿';
          status.title = '완벽한 생장 상태 (시선 효과)';
          status.desc = '타인의 시선이 주는 긍정적인 자극으로 인해, 규칙적이고 꾸준한 케어가 이어집니다. 식물이 무성히 자랍니다!';
          statusIcon.style.color = 'var(--accent)';
          statusIcon.style.background = 'var(--accent-glow)';
        }
      }
    }

    // 화면 반영
    statusIcon.textContent = status.icon;
    statusTitle.textContent = status.title;
    statusDesc.textContent = status.desc;
  }

  // 초기 1회 실행
  updatePlantSimulator();
}
