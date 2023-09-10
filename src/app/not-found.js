import NotFound from '@/components/blocks/404/404'
import Navigation from '@/components/layout/navigation/Navigation'
import Footer from '@/components/layout/footer/Footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const PageNotFound = () => {
  return (
    <>
      <Navigation animation={false} />
      <div className="content">
        <NotFound />
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound