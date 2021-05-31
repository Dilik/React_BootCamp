import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-reactjs-default-rtdb.firebaseio.com/'
});

export default instance;