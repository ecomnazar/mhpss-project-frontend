import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import './index.css'
import './i18n.ts'
import AboutPage from './pages/AboutPage.tsx'
import MainLayout from './components/Layouts/MainLayout.tsx'
import CoursePage from './pages/Course.tsx'
import CertificatePage from './pages/CertificatePage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
        <Route path='/course' element={<CoursePage />} />
        <Route path='/certificate' element={<CertificatePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
