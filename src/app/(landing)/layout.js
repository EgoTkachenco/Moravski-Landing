import Navigation from '@/components/layout/navigation/Navigation'
import Footer from '@/components/layout/footer/Footer'
import '@/styles/index.scss'

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      <div className="content">{children}</div>
      <Footer />
    </>
  )
}
