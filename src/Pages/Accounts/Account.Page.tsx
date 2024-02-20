import { Children, useEffect, useState } from "react"
import { BANK_LIST } from "../../Temp/Bank.list"
import { getImageLink, onErrorImage } from "../../utils/helper/imageUrlHandler"
import { APILoadMyAccounts } from "../../api/account";
import { Grid, Modal } from "@mantine/core";
import { AddAccountForm } from "../../Components/modules/accounts/AddAccount.form";

export const AccountPage = () => {

    const [accounts, setAccounts] = useState([] as any);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal ] =useState(false);
    const loadAccounts = async () => {
        setLoading(true);
        try {
            const res = await APILoadMyAccounts();
            setAccounts(res.data);
        } catch (e) {
            console.log(e);
        }

        setLoading(false);
    }


    useEffect(() => {
        loadAccounts();
    }, [])

    return <section className="px-sm py-sm relative">
        <div className="font-bold mx-sm">Accounts</div>
        <div className="banks flex flex-wrap justify-between py-sm w-full">
            <Grid className="w-full">
                {accounts.map((item: any, index: number) => (
                    <Grid.Col span={4} key={index}>
                        <div className="block border-solid border-slate-500 flex justify-between w-full" >
                            <div className="font-bold py-sm px-sm">{item.title}</div>
                            <div>
                                <img src={item.img ?? ''} className="h-[36px] w-[36px]" onError={onErrorImage} />
                            </div>
                        </div>
                    </Grid.Col>
                    
                ))}
                <Grid.Col span={4} >
                        <div className="block border-dashed border-slate-500 flex justify-center items-center w-full h-full" onClick={()=>setOpenModal(true)}>
                          Add account
                        </div>
                    </Grid.Col>
            </Grid>
        </div>
        <Modal opened={openModal} onClose={()=>setOpenModal(false)} centered>
            <AddAccountForm close={()=>setOpenModal(false)} loadData={loadAccounts} />
        </Modal>
    </section>
}