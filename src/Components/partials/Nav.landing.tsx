import { Button } from "@mantine/core"
import { NavLink } from "react-router-dom"

export const NavLanding=()=>{

    return <nav className="flex w-full h-[80px] items-center fixed justify-between top-none left-none px-xl">
        <div className="">
                <img className="h-[60px]" src="src\Images\exp.png"/>
        </div>
        <div className="nav-items flex">
            <div className="nav-item px-sm py-xs font-semibold">Home</div>
            <div className="nav-item px-sm py-xs font-semibold">Feature</div>
            <div className="nav-item px-sm py-xs font-semibold">Contact</div>
            
                <NavLink to="/auth">
                <Button variant="filled" className="mx-sm" color="rgba(3, 3, 3, 1)">
                    Sign in
                    </Button>

                </NavLink>
                <NavLink to="/auth/signup">
                <Button variant="outline" color="rgba(0, 0, 0, 1)">
                    Sign up
                </Button>

                </NavLink>
        </div>
    </nav>

}