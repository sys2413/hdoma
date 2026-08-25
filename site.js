// 훈연도마 — 공통 스크립트

// ───────── 다크 모드 ─────────
// 저장된 선택이 없으면 기기 설정을 따르고,
// 버튼을 누르면 그때부터 손님의 선택을 기억합니다.
(function () {
  const KEY = 'hoonyeon-theme';
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const systemDark = matchMedia('(prefers-color-scheme: dark)');

  const isDark = () => {
    const saved = root.getAttribute('data-theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return systemDark.matches;
  };

  const paint = () => {
    if (!btn) return;
    const dark = isDark();
    btn.querySelector('.icon').textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', dark ? '밝은 모드로 바꾸기' : '어두운 모드로 바꾸기');
    btn.setAttribute('title', dark ? '밝은 모드' : '어두운 모드');
    btn.setAttribute('aria-pressed', String(dark));
  };

  if (btn) {
    btn.addEventListener('click', () => {
      const next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* 저장이 막혀 있어도 그냥 넘어갑니다 */ }
      paint();
    });
  }

  // 아직 직접 고르지 않았다면 기기 설정 변화를 그대로 따라갑니다.
  systemDark.addEventListener('change', () => {
    if (!root.hasAttribute('data-theme')) paint();
  });

  paint();
})();

// ───────── 상단 바 경계선 ─────────
const bar = document.getElementById('topbar');
if (bar) {
  const onScroll = () => bar.classList.toggle('stuck', window.scrollY > 8);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
}

// ───────── 스크롤에 맞춰 부드럽게 등장 ─────────
const items = document.querySelectorAll('.rise');
if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
  items.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  items.forEach(el => io.observe(el));
}
