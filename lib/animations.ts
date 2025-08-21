import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: string | Element, delay = 0) => {
  gsap.fromTo(element, 
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      delay,
      ease: "power2.out"
    }
  );
};

export const staggerFadeIn = (elements: string | NodeList, stagger = 0.1) => {
  gsap.fromTo(elements,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger,
      ease: "power2.out"
    }
  );
};

export const parallaxScroll = (element: string | Element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

export const magneticEffect = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  el.addEventListener('mouseenter', () => {
    gsap.to(el, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
  });

  el.addEventListener('mousemove', (e: any) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(el, {
      x: x * 0.1,
      y: y * 0.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
};