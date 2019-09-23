import React from 'react';
import Button from '@fragments/button/Button'

export default {
  title: 'Button',
};

export const OutlinedLargeAqua = () => <Button variant={'aqua'} size={'lg'} outlined>Outlined Large aqua</Button>
export const FilledLargeAqua = () => <Button variant={'aqua'} size={'lg'}>Filled Large aqua</Button>
export const OutlinedSmallAqua = () => <Button variant={'aqua'} size={'sm'} outlined>Outlined Small aqua</Button>
export const FilledSmallAqua = () => <Button variant={'aqua'} size={'sm'}>Filled Small aqua</Button>

const allButtonsList = [ OutlinedLargeAqua, FilledLargeAqua, OutlinedSmallAqua, FilledSmallAqua ]

export const allButtons = () => (
    <div>
      {allButtonsList.map(EachButton => (
          <div class={'mt-10 mb-10'}>
            <EachButton/>
          </div>
      ))}
    </div>
)
