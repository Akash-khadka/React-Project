import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Group, Skeleton, Text } from '@mantine/core';
import { ProfileNav } from './ProfileNav';
import Logo from '../../Images/logo.png'
import {AppshellMainprofile } from './AppShell.Main';
import { Route, Routes } from 'react-router';
import { DashboardHomePage } from '../../Pages/Dashboard/Home.Page';
import { AccountPage } from '../../Pages/Accounts/Account.Page';

export const DashboardAppShell=()=> {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 120, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <ProfileNav/>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <img src={Logo}/>
        </Group>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
            <Route path='/' element={<DashboardHomePage/>} />
            <Route path='/profile' element={<AppshellMainprofile />}/>
            <Route path='/accounts' element={<AccountPage />}/>
        </Routes>
      </AppShell.Main>
    </AppShell>
  )}