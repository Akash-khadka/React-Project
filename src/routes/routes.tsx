import { AuthLayout } from "../Layout/Auth.layout"
import { LandingLayout } from "../Layout/Landing.layout"
import { DashboardPage } from "../Pages/UserProfile/Home.Profile"
import { IRoute } from "./Route.interface"
import { DashboardHomePage } from "../Pages/Dashboard/Home.Page"

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
        path:"/dashboard/*",
        element: <DashboardPage/>
    }
]