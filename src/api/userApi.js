import jwt from '../utils/jwt';
import axios from './axiousClient';

const userApi = {
    login: async ({ username, password }) => {
        return await axios.post('http://localhost:4000/auth/login', { username, password }, { withCredentials: true });
    },
    logout: async () => {
        return await axios.post('http://localhost:4000/auth/logout', {}, { withCredentials: true });
    },
    getList: async () => {
        return await axios.get('http://localhost:4000/friends', {}, { withCredentials: true });
    },
};

export default userApi;
