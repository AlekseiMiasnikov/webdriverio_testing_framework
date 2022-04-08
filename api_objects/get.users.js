import allureReporter from "@wdio/allure-reporter";

class GetUsers {
    assert_fields(data, expected_data) {
        allureReporter.addStep(`Assert get users method`)
        expect(data.status).toEqual('OK');
        expect(data.code).toEqual(200);
        expect(data.data[0].id).toEqual(expected_data['id']);
        expect(data.data[0].login).toEqual(expected_data['login']);
        expect(data.data[0].email).toEqual(expected_data['email']);
        expect(JSON.stringify(data.data[0])).toContain(expected_data['created_at']);
        expect(JSON.stringify(data.data[0])).toContain(expected_data['last_login_at']);
    }
}

export default new GetUsers()