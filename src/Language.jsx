/**
 * @file 国际化组件
 */
import React from 'react';
import { observer, inject } from 'mobx-react';

const Language = ({ language, resource }) => resource.indexOf('.') !== -1
    ? language.resource[resource.split('.')[0]][resource.split('.')[1]]
    : language.resource[resource];

export default inject('language')(observer(Language));
