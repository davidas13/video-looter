import React from 'react';
import { Button, DatePicker, version } from 'antd';
import TitleBar from 'frameless-titlebar';
import icon from '../../../assets/icon.svg';

type TitlebarProps = {
  projectName?: string;
};

const Titlebar = ({ projectName }: TitlebarProps) => {
  return (
    <TitleBar
    title={`Video Looter${projectName ? ' - ' + projectName : ''}`}
    iconSrc={icon}
    platform={process.platform && undefined}
    />
  );
};

export default Titlebar;
