import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Stylesheets in the source's cascade order:
// Webflow shared CSS -> inline <head> styles -> Swiper 8 bundle CSS -> remaining inline styles / page embeds.
import '@/styles/webflow.css'
import '@/styles/embeds-head.css'
import 'swiper/css/bundle'
import '@/styles/embeds.css'

import App from '@/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
