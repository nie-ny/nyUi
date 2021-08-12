import React from 'react';
import t from 'prop-types';
import './index.css';

import { AlertProps, KindMap } from './interface';

const prefixCls = 'happy-button';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Button: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <button
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Button;
