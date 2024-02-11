export const ProfileNav=()=>{

    return <>
    <nav className="flex w-full h-[80px] items-center fixed justify-between top-none left-none px-xl">
        <div className="font-semibold	">
            <p>Good Morning User</p>
        </div>
        <div className="flex font-semibold">
            <div className="mx-xs">{Date()}</div>
            <div className="mx-xs">Notification </div>
            <div className="mx-xs">Notification </div>
        </div>
    </nav>
    </>
    
}