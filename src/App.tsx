import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage, ContactPage, HomePage, NotFoundPage, RecommendationsPage, WorkPage } from './pages/Pages'
import { portfolioContent } from './data/portfolio.data'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {portfolioContent.recommendations.enabled && <Route path="/recommendations" element={<RecommendationsPage />} />}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
