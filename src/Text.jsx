/**
 * @file 国际化组件
 */
import React from 'react';
import { observer, inject } from 'mobx-react';

const Intl = ({ intlStore, resource }) => resource.indexOf('.') !== -1
    ? intlStore.resource[resource.split('.')[0]][resource.split('.')[1]]
    : intlStore.resource[resource];

export default inject('intlStore')(observer(Intl));
