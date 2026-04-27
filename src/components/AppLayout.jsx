import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function AppLayout() {
  return (
    <div className="site-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-right" aria-hidden="true"></div>
      <Header />
      <main className="main-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
