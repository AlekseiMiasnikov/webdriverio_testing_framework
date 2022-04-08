import {get_config, get_env} from './core/helpers.js'

export const base_url = () => {
    return get_config(get_env())['APPLICATION_URL'];
}

export const api_url = () => {
    return get_config(get_env())['API_URL'];
}

export const db_data = () => {
    return get_config(get_env())['DB'];
}
