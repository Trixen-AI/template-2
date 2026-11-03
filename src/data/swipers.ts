import type { SwiperOptions } from 'swiper'

// Copied from the source page's inline `new Swiper(...)` calls.

/* Industries / overflow cards */
export const OVERFLOW_CARDS: SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: false,
  pagination: { clickable: true },
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 8 },
    768: { slidesPerView: 2, spaceBetween: 16 },
    992: { slidesPerView: 4, spaceBetween: 24 },
  },
}

/* Customer case studies */
export const CASE_STUDIES: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: { clickable: true },
  navigation: true,
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 8 },
    768: { slidesPerView: 1, spaceBetween: 16 },
    992: { slidesPerView: 1, spaceBetween: 24 },
  },
}
