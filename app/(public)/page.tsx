import Navbar from "@/components/ui/desktop/Navbar";
import "./page.css"

const HomePage = () => {
  return (<>
   

    <section className="home-hero-section">
      <h1>The simplest way to manage people, donations and events</h1>
      <p>One Platform. One unified solution.</p>

      <div className="cta-btns-container">
        <a className="cta-contact btn bg-primary" href="/contact">Contact</a>
        <a className="cta-pricing btn bg-secondary" href="/pricing">Pricing</a>
      </div>
    </section>
  </>
  )
}

export default HomePage;
