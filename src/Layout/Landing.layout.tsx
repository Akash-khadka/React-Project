import { NavLanding } from "../Components/partials/Nav.landing"
import { Route, Routes } from "react-router"
import { HomePage } from "../Pages/Home.page"
import { ContactPage } from "../Pages/Contact.page"
import { FeaturePage } from "../Pages/Feature.page"

export const LandingLayout=()=>{
    return <div className="">
        <NavLanding/>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/features" element={<FeaturePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
    </Routes>
        
    </div>
}