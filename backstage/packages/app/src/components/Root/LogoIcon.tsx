/**
 * monkmantra - replace the contents of this file with below code
 */

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#7df3e1',
  },
});

import MyCustomLogoIcon from './Logo/ltim-small-logo-white.png';

const LogoIcon = () => {
  const classes = useStyles();
  return <img className={classes.svg} src={MyCustomLogoIcon} />;
};

export default LogoIcon;
