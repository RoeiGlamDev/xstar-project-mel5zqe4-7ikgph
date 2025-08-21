export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  yoyo?: boolean;
}

export interface ScrollTriggerConfig {
  trigger: string | Element;
  start: string;
  end: string;
  scrub?: boolean;
  pin?: boolean;
  toggleActions?: string;
}

export interface StaggerConfig {
  amount: number;
  from?: 'start' | 'center' | 'end' | number;
  grid?: [number, number];
  axis?: 'x' | 'y';
}

export interface ParallaxOptions {
  speed: number;
  direction?: 'vertical' | 'horizontal';
  smooth?: boolean;
}

export interface MagneticOptions {
  strength: number;
  radius: number;
  ease: string;
}

export type EasingFunction = 
  | 'linear'
  | 'power1.out'
  | 'power2.out'
  | 'power3.out'
  | 'power4.out'
  | 'back.out'
  | 'elastic.out'
  | 'bounce.out'
  | 'circ.out'
  | 'expo.out'
  | 'sine.out';

export interface TimelineConfig {
  repeat?: number;
  yoyo?: boolean;
  delay?: number;
  paused?: boolean;
}