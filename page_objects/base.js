import {base_url} from '../conftest.js'
import allureReporter from '@wdio/allure-reporter';

export default class Base {
    open (path = '/') {
        allureReporter.addStep(`Open page ${path}`)
        return browser.url(`${base_url()}/${path}`)
    }
}
