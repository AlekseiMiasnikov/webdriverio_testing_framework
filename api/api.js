import { api_url } from '../conftest.js'
import { send_request } from '../core/helpers';
import allureReporter from "@wdio/allure-reporter";

class API {
    async login(login, password) {
        allureReporter.addStep(`Login with data: ${login} and ${password}`)
        try {
            let data = await send_request(`${api_url()}/api/auth/login`, 'POST', { login, password });
            return data?.data?.token;
        } catch (e) {
            console.log(e);
        }
    }

    async get_users(login, password) {
        allureReporter.addStep(`Get users`)
        try {
            const token = await this.login(login, password)
            return await send_request(`${api_url()}/api/users/get-all?token=${token}`);
        } catch (e) {
            console.log(e)
        }
    }
}

export default new API();