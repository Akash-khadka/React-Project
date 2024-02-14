import { NavLanding } from "../Components/partials/Nav.landing"
import { Grid } from "@mantine/core"
import { Route, Routes } from "react-router"
import { LoginPage } from "../Pages/Auth/Login"
import { SignupPage } from "../Pages/Auth/Signup"
import { ForgotPassword } from "../Pages/Auth/ForgotPassword"
import SignupImg from '../Images/Frame.png';
import Logo from '../Images/exp.png'
import { CreateProfile } from "../Pages/UserProfile/CreateProfile"

export const AuthLayout = () => {
    return <>
        <nav className="fixed top-none left-0 w-full">
            <img className="h-[60px] px-xl" src={Logo}/>
        </nav>
        <Grid className="auth-grid w-full" style={{height: 'calc(100vh - 80px'}}>
            <Grid.Col span={6} className="bg-white flex justify-center items-center">
                <img className="h-[400px]" src={SignupImg}/>
            </Grid.Col>
            <Grid.Col span={6}>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/forgot' element={<ForgotPassword/>}/>
                </Routes>
            </Grid.Col>
        </Grid>
    </>
}