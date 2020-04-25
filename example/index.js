import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import "./styles.css";

import {LanguageStore} from '../src';

// console.log('LanguageStore', LanguageStore);

const languageStore = new LanguageStore({
    currentLanguage: 'zh-CN',
    languageMap: {
        'zh-CN': require('./i18n/zh-CN.json'),
        'en-US': require('./i18n/en-US.json')
    }
})
ReactDOM.render((
    <Provider language={languageStore}>
        <App />
    </Provider>
), document.getElementById("app"));