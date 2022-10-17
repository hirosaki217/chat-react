import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login/Login';
import Layout from './page/Layout';
import { useEffect } from 'react';
import { useAuthContext } from './contexts/authContext';
import { configAxios } from './api/axiousClient';

function App() {
    const { checkAuth } = useAuthContext();
    useEffect(() => {
        const authenticate = async () => {
            await checkAuth();
        };
        authenticate();
    }, []);
    configAxios();
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Login />} />
                        <Route path="home" index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
