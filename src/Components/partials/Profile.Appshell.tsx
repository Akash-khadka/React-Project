import { AppShell, Burger, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Group, Skeleton, Text } from '@mantine/core';
import { ProfileNav } from './ProfileNav';
import Logo from '../../Images/logo.png'
import {AppshellMainprofile } from './AppShell.Main';
import { Route, Routes } from 'react-router';
import { DashboardHomePage } from '../../Pages/Dashboard/Home.Page';
import { AccountPage } from '../../Pages/Accounts/Account.Page';
import { DashboardMenu } from '../../Temp/DashboardMenu';
import { NavLink } from 'react-router-dom';

export const DashboardAppShell=()=> {
  const [opened, { toggle }] = useDisclosure();

  return <>
  
    <AppShell
      layout="alt"
      header={{ height: 80 }}
      navbar={{ width: 120, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      className='dashboard'
    >
      <AppShell.Header>
        <ProfileNav/>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <img src={Logo}/>
        </Group>
        
       <div className='py-xl w-full flex flex-col items-center'>
        {DashboardMenu.map((item, index) => (
                <NavLink to={item.link} className="nav-item font-bold h-[50px] w-[50px] rounded-sm hover:bg-gray-100 flex items-center justify-center" key={index}>
                  <div>
                  <Tooltip label={item.name}>{item.icon}</Tooltip>
                  </div>
                </NavLink>
        ))}
        </div> 
        
         {/* {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false}>

              </Skeleton>
          ))}  */}
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
            <Route path='/' element={<DashboardHomePage/>} />
            <Route path='/profile' element={<AppshellMainprofile />}/>
            <Route path='/accounts' element={<AccountPage />}/>
        </Routes>
      </AppShell.Main>
    </AppShell>
  </>
}