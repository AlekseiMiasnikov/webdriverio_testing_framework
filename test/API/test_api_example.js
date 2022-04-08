import API from '../../api/api';
import GetUsers from '../../api_objects/get.users';
import { api_get_users } from '../../data/data';

describe('API', () => {
    it('test example name', async () => {
        const getAllUsers = await API.get_users('admin', 'admin');
        GetUsers.assert_fields(getAllUsers, api_get_users)
    });
});
