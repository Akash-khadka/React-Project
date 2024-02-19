import GIBL from "../Images/GIBL.png"
import NIBL from "../Images/NIBL.png"
import Esewa from "../Images/esewa.png"
import Khalti from "../Images/khalti.png"
import { getImageLink } from "../utils/helper/imageUrlHandler"
import { IBank } from "./IBank"


export const BANK_LIST : IBank[]= [
    {
        name:"NIBL",
        logo: NIBL,
        totalamount:"1000",
        amount:"500"
    },
    {
        name:"Esewa",
        logo: Esewa,
        totalamount:"1000",
        amount:"500"
    },
    {
        name:"GIBL",
        logo: GIBL,
        totalamount:"1000",
        amount:"500"
    },
    {
        name:"Khalti",
        logo: Khalti,
        totalamount:"1000",
        amount:"500"
    }

];

