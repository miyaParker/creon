import Hero from "../app/components/Hero";
import Mission from "../app/components/Mission";
import Products from "./components/Products";
import Definition from "./components/Definition";
import BusinessModel from "./components/BusinessModel";
import CreonPass from "./components/CreonPass";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <Hero/>
            <section className='hidden xl:block'>
                <CreonPass/>
                <BusinessModel/>
            </section>
            <Mission/>
            <section className='hidden xl:block'>
                <Products/>
                <Definition/>
            </section>
            <section className='xl:hidden'>
                <BusinessModel/>
                <Definition/>
                <CreonPass/>
                <Products/>
            </section>
            <Footer/>
        </>


    )
}
