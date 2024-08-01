/**
 * monkmantra - replace the contents of this file with below code
 */

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});

import MyCustomLogoFull from './Logo/ltim-full-logo-white.svg';

const LogoFull = () => {
  const classes = useStyles();
  return <img className={classes.svg} src={MyCustomLogoFull} />;
};

export default LogoFull;
