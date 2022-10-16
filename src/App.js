import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Layout from './page/Layout';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="login" index element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
