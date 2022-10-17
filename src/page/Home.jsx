import React, { useEffect, useState } from 'react';
import userApi from '../api/userApi';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        userApi.getList().then((rs) => setData(rs.data));
    }, []);
    return (
        <div>
            <h1>Home</h1>
            {data.map((e) => (
                <h1 key={e._id}>{e.name}</h1>
            ))}
        </div>
    );
};

export default Home;
