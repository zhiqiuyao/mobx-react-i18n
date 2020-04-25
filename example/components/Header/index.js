import React from "react";
import { inject, observer } from "mobx-react";

import {Language} from "../../../src";
import "./header.css";

const Header = ({ language }) => (
  <div id="Header">
    <div
      className={
        language.currentLanguage === "zh-CN" ? "element current" : "element"
      }
      onClick={() => language.changeLanguageTo("zh-CN")}
    >
      <Language resource="CHINESE" />
    </div>
    <div
      className={
        language.currentLanguage === "en-US" ? "element current" : "element"
      }
      onClick={() => language.changeLanguageTo("en-US")}
    >
      <Language resource="ENGLISH" />
    </div>
  </div>
);

export default inject("language")(observer(Header));
