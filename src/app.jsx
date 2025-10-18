import './app.css'
import { Routes, Route } from "react-router-dom"
import RecentFiles from './components/recent-files'
import Home from './components/home'
import Layout from './components/layout'
import NotFound from './components/not-found'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recent-files" element={<RecentFiles />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
<<<<<<< HEAD





=======
>>>>>>> aa38c88f345376c8cc4aab23922035197aad0dd6
