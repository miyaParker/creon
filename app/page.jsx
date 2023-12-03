import Hero from "../app/components/Hero";
import Mission from "../app/components/Mission";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
export default function Home() {
    const BusinessModel = dynamic(()=>import("../app/components/BusinessModel"))
    const Definition = dynamic(()=>import("../app/components/Definition"))
    const CreonPass = dynamic(()=>import("../app/components/CreonPass"))
    const Products = dynamic(()=>import("../app/components/Products"))
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
