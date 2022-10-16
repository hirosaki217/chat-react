import axios from 'axios';
import jwt from '../utils/jwt';

export const configAxios = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt.getToken()}`;
};

export default axios;
