export const ProfileNav=()=>{

    return <>
    <nav className="flex w-full h-[80px] py-sm  justify-between top-none px-xs">
        <div className="font-semibold flex  w-1/2 px-sm">
            <div>Good Morning User</div>
        </div>
        <div className="flex font-semibold flex  w-1/2">
            <div className="mx-xs">{Date()}</div>
            <div className="mx-xs">N </div>
            <div className="mx-xs">Notification </div>
        </div>
    </nav>
    </>
    
}