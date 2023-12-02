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
            <Mission/>
            <BusinessModel/>
            <Definition/>
            <CreonPass/>
            <Products/>
            <Footer/>
        </>


    )
}
