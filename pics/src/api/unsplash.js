import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OdoM_sYiPrLwqSBSWfVD5MqLPSgMLHlsFQ-0-rkvnL0'
    }
});

