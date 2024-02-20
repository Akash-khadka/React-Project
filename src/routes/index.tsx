import { Route, Routes, Navigate } from 'react-router';
import { APP_ROUTES } from './routes';
import { IRoute } from './Route.interface';
import { useSelector } from 'react-redux';
import { getToken } from '../utils/helper/tokenstorage.helper';
import { useEffect } from 'react';
import { AuthLayout } from '../Layout/Auth.layout';
import { LandingLayout } from '../Layout/Landing.layout';
import { DashboardAppShell } from '../Components/partials/Profile.Appshell';

export const AppRoutes = () => {
    const isAuthenticated = useSelector(
        (state: any) => state.authReducer.accessToken,
    ) || getToken();

    return <Routes>
        <Route path={'/*'} element={!isAuthenticated ? <Navigate to='/auth' /> : <DashboardAppShell />} />
        <Route path={'/auth/*'} element={!isAuthenticated ? <AuthLayout /> : <Navigate to='/' /> }/>
        <Route path={'*'} element={<div>Not found</div>} />
    </Routes>
}