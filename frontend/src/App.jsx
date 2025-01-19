import Header from './component/Header'
import Footer from './component/Footer'
import HeroSection from './pages/HeroSection'
import Featured from './pages/Featured'
import PricingPlans from './pages/PricingPlans'
import Category from './pages/Category'
import CommunityReviews from './pages/CommunityReviews'
import ExclusiveDeals from './pages/ExclusiveDeals'
import PartnerDiscounts from './pages/PartnerDiscounts'
import HowItWorks from './pages/HowItWorks'
import ContactUs from './pages/Contact_us'
import FAQ from './pages/Faq'



import Cursor from './pages/Cursor'

function App() {
 return (
<>
<Cursor/>
 <Header/>
 <HeroSection/>
<Featured/>
<PricingPlans/>
<Category/>
<CommunityReviews/>
<ExclusiveDeals/>
<PartnerDiscounts/>
<HowItWorks/>
<FAQ/>
<ContactUs/>
<Footer/>
</>
 )
}

export default App
