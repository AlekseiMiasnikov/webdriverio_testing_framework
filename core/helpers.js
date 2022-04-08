import dotenv from 'dotenv'
import fetch from 'node-fetch';

import config from '../config/config.json';

export const get_config = (env = 'test') => {
    if (!config[env]) {
        return config['test'];
    }
    return config[env];
}

export const get_env = () => {
    dotenv.config()
    return process.env.ENV ?? 'test';
}

export const send_request = async (url, method = 'GET', data = {}) => {
    if (method === 'GET') {
        const response = await fetch(url);
        return response.json();
    }
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    return response.json();
}