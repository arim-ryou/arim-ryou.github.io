document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const body = document.body;
  const navbar = document.querySelector('.navbar');

  // 🍔 햄버거 버튼 토글
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // 메뉴 클릭 시 메뉴 닫기
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // 스크롤 시 active 링크 및 배경 처리
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    navbar.classList.toggle('transparent', window.scrollY < 10);
  });

  // 페이드인 + BeerSlider 초기화
  window.addEventListener('load', () => {
    body.classList.add('loaded');

    // 🔄 BeerSlider safely initialized
    if (typeof BeerSlider === 'function') {
      document.querySelectorAll('.beer-slider').forEach(el => new BeerSlider(el));
    } else {
      console.error('BeerSlider is not defined. Make sure beerslider.js is included before this file.');
    }
  });
});
