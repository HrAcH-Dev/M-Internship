import Accordion from '../components/pages/home/Accordion/Accordion'
import HomeHero from '../components/pages/home/Hero'
import HomeSlider from '../components/pages/home/Slider'
import OurTeam from '../components/pages/home/OurTeam/OurTeam'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSlider />
      <Accordion />
      <OurTeam />
    </>
  )
}
