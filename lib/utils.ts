import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwindcss-merge';

export function Cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FormatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function Lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

export function RandomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}