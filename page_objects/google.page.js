import Base from "./base.js";
import GoogleElements from '../elements/google.page.js';
import allureReporter from '@wdio/allure-reporter';

class GooglePage extends Base {
    get get_search_input_value() {
        return GoogleElements.search_input.getValue();
    }

    get get_result_stats() {
        return GoogleElements.result_stats
    }

    open () {
        return super.open('/');
    }

    async field_search_input(text) {
        allureReporter.addStep(`Field search value: ${text}`);
        await GoogleElements.search_input.setValue(text);
    }

    async assert_search_text(text) {
        allureReporter.addStep(`Assert search text: ${text}`)
        expect(await this.get_search_input_value).toEqual(text);
    }

    async click_enter() {
        allureReporter.addStep(`Click Enter`)
        await browser.keys(['Enter']);
    }

    async asset_result(text) {
        allureReporter.addStep(`Assert search result: ${text}`)
        expect(this.get_result_stats).toContainEqual(text);
    }
}

export default new GooglePage();