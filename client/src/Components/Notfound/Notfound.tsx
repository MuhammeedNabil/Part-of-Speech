/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Diamond from './2704133.png'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Notfound() {
  return (
    <>
        <div className='text-center mt-5 mb-3'>
            <img src={Diamond} className='w-50' />
            <Link to='/home' className='d-flex text-white justify-content-center align-items-center text-decoration-none'><Icon icon="eva:arrow-ios-back-outline" className='d-flex text-white align-items-center'/> Go back to home</Link>
        </div>
        
    </>
  )
}
