import { Children } from "react"
import { BANK_LIST } from "../../Temp/Bank.list"
import { getImageLink } from "../../utils/helper/imageUrlHandler"

export const AccountPage=()=>{
    return <section className="px-sm py-sm">
        <div className="font-bold mx-sm">Accounts</div>
        <div className="banks flex flex-wrap justify-between py-sm">
        {BANK_LIST.map((item, index) => (
            <div className="block border-solid border-slate-500	w-1/5 h-[140px] flex justify-between mx-sm my-sm" key={index}>
                <div className="font-bold py-sm px-sm">{item.name}</div>
                <div><img src={item.logo}></img></div>
            </div>
        ))}
            
        </div>
    </section>
}