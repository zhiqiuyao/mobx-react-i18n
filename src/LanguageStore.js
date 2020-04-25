/**
 * 国际化 Model
 */
import { observable, computed, action } from "mobx";

export default class LanguageModel {
    constructor(options = {currentLanguage: 'zh-CN'}) {
        this.setState(options);
    }

    @observable currentLanguage;
    @observable languageMap = {};
    @computed get resource() {
        return this.languageMap[this.currentLanguage || 'zh-CN'] || {};
    };
    @action changeLanguageTo(language) {
        this.currentLanguage = language;
    }
    @action setState(state) {
        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                this[key] = state[key]
            }
        }
    }
}