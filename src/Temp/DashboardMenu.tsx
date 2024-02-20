import { IDashboardMenu } from "./IDashboard.menu"
import DashIcon from "../Images/dashmenuicon.png"
import { getImageUrl } from "../utils/helper/imageUrlHandler"
import { DeviceComputerCamera, File, GridDots, MoodAngry, Users } from "tabler-icons-react"

export const DashboardMenu:  IDashboardMenu[]=[

    {
        icon: <GridDots/>,
        name:"Dashboard",
        link: '/'
    },
    {
        icon: <Users/>,
        name:"Users",
        link: '/users'
    },
    {
        icon: <DeviceComputerCamera/>,
        name:"Web Details",
        link: 'web'
    },
    {
        icon:<MoodAngry/>,
        name:"Complaints",
        link: '/complaints'
    },
    {
        icon:  <File/>,
        name:"Accounts",
        link: '/accounts'
    }
]


