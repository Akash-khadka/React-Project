import { Avatar } from '@mantine/core';
import moment from 'moment';
export const ProfileNav=()=>{

    return <>
    <nav className="flex w-full h-[80px] items-center justify-between px-xs">
        <div className="font-semibold flex  w-1/2 px-sm">
            <div>Good Morning User</div>
        </div>
        <div className="flex font-semibold items-center justify-end w-1/2">
            <div className="mx-xs">{moment(new Date()).format('MMM DD, YYYY')}</div>
            <Avatar className="mx-xs">N </Avatar>
            <div className="mx-xs">Notification </div>
        </div>
    </nav>
    </>
    
}