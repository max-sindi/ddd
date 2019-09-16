import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/partials/button/Button';

export default {
  title: 'Button',
};

export const OutlinedLargeAqua = () => <Button variant={'aqua'} size={'lg'} outlined>Outlined Large aqua</Button>
export const FilledLargeAqua = () => <Button variant={'aqua'} size={'lg'}>Filled Large aqua</Button>
export const OutlinedSmallAqua = () => <Button variant={'aqua'} size={'sm'} outlined>Outlined Small aqua</Button>
export const FilledSmallAqua = () => <Button variant={'aqua'} size={'sm'}>Filled Small aqua</Button>

export const allButtons = () => (
    <div>
      <OutlinedLargeAqua></OutlinedLargeAqua>
      <FilledLargeAqua></FilledLargeAqua>
      <OutlinedSmallAqua></OutlinedSmallAqua>
      <FilledSmallAqua></FilledSmallAqua>
    </div>
)
