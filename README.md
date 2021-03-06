English | [简体中文](./README.zh-CN.md)

# mobx-react-i18n
Internationalize React App by mobx

<img src="example/example.png" width="600" alt="Usage example" />

* * *

-   [Installation](#installation)
-   [Getting Started](#getting-started)
-   [API](#api)

## Installation

```sh
npm install --save mobx-react-i18n
```

## Getting Started

1. Create international files `zh-CN.json`, `en-US.json`:
```json
{
    "CHINESE": "中文",
    "ENGLISH": "英文",
    "greeting": "你好",
    "btn": {
        "confirm": "确认",
        "cancel": "取消"
    }
}
```

2. Inject your app as a global state by Provider
```js
import { Provider } from "mobx-react";
import {LanguageStore} from 'mobx-react-i18n';

const languageStore = new LanguageStore({
    currentLanguage: 'zh-CN',
    languageMap: {
        'zh-CN': require('./i18n/zh-CN.json'),
        'en-US': require('./i18n/en-US.json')
    }
});

ReactDOM.render((
    <Provider language={languageStore}>
        <App />
    </Provider>
), document.getElementById("app"));
```

3. Use `<Language />` to translate string literals:
```js
import { Language } from 'mobx-react-i18n';

const Greeting = () => (
    <p><Language resource="greeting"/></p>
)
```

## API
-   [Language](#Language)
-   [LanguageStore](#LanguageStore)

### Language
`<Language />` renders internationalized text.

#### Parameters
-   `props`
    -   `props.resource` The key of international files.

### LanguageStore
The class that generate global language store.
#### Parameters
-   `options`
    -   `options.currentLanguage` set default current language
    -   `options.languageMap` All international files
-   `property`
    -   `language.currentLanguage` current language in app
-   `method`
    -   `language.changeLanguageTo` switch language