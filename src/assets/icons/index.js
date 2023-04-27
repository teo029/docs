import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

import { CPlusPlus as CPP , Android, Apple, Python } from '@styled-icons/boxicons-logos';
import { Curl as HttpIcon } from '@styled-icons/simple-icons';
import { Dotnet , Xamarin } from '@styled-icons/simple-icons';
import { Rust, Linux } from '@styled-icons/fa-brands';

const AndroidIcon = ({ className, ...props }) => {
  return <Android className={clsx('text-[#3ddb85]', className)} {...props} />;
};

const AppleIcon = ({ className, ...props }) => {
  return <Apple className={clsx('text-text', className)} {...props} />;
};

AppleIcon.propTypes = AndroidIcon.propTypes = {
  className: PropTypes.string,
};

const RustIcon = ({ className, ...props }) => {
  return <Rust className={clsx('text-[black]', className)} {...props} />;
};

const LinuxIcon = ({ className, ...props }) => {
  return <Linux className={clsx('text-[#f5c11c]', className)} {...props} />;
};

const XamarinIcon = ({ className, ...props }) => {
  return <Xamarin className={clsx('text-[#3097d8]', className)} {...props} />;
};

const CPlusPlus = ({ className, ...props }) => {
  return <CPP className={clsx('text-[#283492]', className)} {...props} />;
};

const DotNetIcon = ({ className, ...props }) => {
  return <Dotnet className={clsx('text-[#08940e]', className)} {...props} />;
};


export { JSIcon } from './JSIcon';
export { RustIcon, XamarinIcon, AndroidIcon, CPlusPlus, AppleIcon, HttpIcon, DotNetIcon, LinuxIcon, Python};

export { KotlinIcon } from './KotlinIcon';
export { SwiftIcon } from './SwiftIcon';