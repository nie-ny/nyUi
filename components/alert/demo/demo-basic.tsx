import React from 'react';
import Alert from '../alert';
import '../style';

export default (props:any) => <Alert kind="warning">{props.children}</Alert>;