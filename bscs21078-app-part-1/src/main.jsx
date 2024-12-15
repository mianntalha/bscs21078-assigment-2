import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/bootstrap/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/components.css'
import './assets/css/media.css'
import './assets/css/chat.css'
import 'boxicons/css/boxicons.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
import './assets/css/animate.min.css';
import './assets/css/owl.carousel.css';
import './assets/css/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import"./css/res.css"


import Admin from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Admin/>
  </StrictMode>,
)
