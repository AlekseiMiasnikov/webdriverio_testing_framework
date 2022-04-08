import GooglePage from '../../page_objects/google.page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Test Google', () => {
    it('search string test', async () => {
        allureReporter.addLabel('Label', 'value');
        await GooglePage.open();
        await GooglePage.field_search_input('test');
        await GooglePage.assert_search_text('test');
        await GooglePage.click_enter();
        await GooglePage.asset_result('Результатов');
    });
});
