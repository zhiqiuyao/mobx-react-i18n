/**
 * 国际化 Model
 */
import { observable, computed, action } from "mobx";

export default class IntlModel {
    constructor(options = {
        zhCN: {},
        enUS: {}
    }) {
        this.options = options;
    }
    @observable language = 'zh-CN';
    @computed get resource() {
        switch (this.language) {
            case 'zh-CN':
                return this.options.zhCN;
            case 'en-US':
                return this.options.enUS;
            default:
                return this.options.zhCN;
        }
    }
    @action changeLanguageTo(language) {
        this.language = language;
    }
}