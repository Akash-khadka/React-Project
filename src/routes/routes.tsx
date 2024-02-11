import { AuthLayout } from "../Layout/Auth.layout"
import { LandingLayout } from "../Layout/Landing.layout"
import { ProfileHome } from "../Pages/UserProfile/Home.Profile"
import { IRoute } from "./Route.interface"

export const APP_ROUTES: IRoute[]=[

    {
        path: "/*",
        element: <LandingLayout/>
    },
    {
        path: "/auth/*",
        element: <AuthLayout/>
    },
    {
        path:"/profile",
        element: <ProfileHome/>
    }
]