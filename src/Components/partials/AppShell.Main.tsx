import Logo from '../../Images/logo.png'

export const AppshellMainprofile=()=>{
    return<section className='px-sm'>
        <div className="font-bold">
            Profile
        </div>
        <div className="flex py-xl">
            <div className='profile-section flex w-1/2'>
                <div className="block h-16 w-16">
                    <img src={Logo}/>
                </div>
                <div className="mx-xs">
                    <div className='font-bold'>
                        Jane Doe
                    </div>
                    <span className='text-sm'>Software Developer</span>
                    
                </div>
            </div>
            <div className='balance-section flex w-1/2 py-xl font-medium	'>
                <div className="total-balance w-1/2">
                    <div className='header text-sm	'>
                        Total Balance
                    </div>
                    <span className='text-xl font-bold'>
                        Rs.100,000
                    </span>
                </div>
                
                <div className="total-expense w-1/2">
                    <div className='header text-sm	'>
                        Total Expenses
                    </div>
                    <span className='text-xl font-bold'>
                        Rs.50,000
                    </span>
                </div>
            </div>
            

        </div>
    </section>
}