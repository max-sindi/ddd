import React from 'react'
import Button from "@fragments/button/Button"
import './_header.scss'

const Header = () => {
    return (
        <header className="header pt-10 pb-10">
            <div className='container d-flex'>
              <div><img src="/static/logo.svg" alt=""/></div>
              <div className={`grow-1 flex justify-space-between align-center`}>
                <nav>{/* there will be nav links*/}</nav>
                <Button variant={'aqua'} size={'sm'} outlined>Register Now</Button>
              </div>
            </div>
        </header>
    );
};

export default Header
