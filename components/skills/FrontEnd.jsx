/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function FrontEnd() {
    return (
        <div className='row mt-5'>
            <div className='col-6'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/reactjs.svg'
                            alt=''
                            width='50px'
                            height='auto'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> React JS</span>
                        <div className='text-light'>
                            Basic skill with ReactJs
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/nextjs.png'
                            alt=''
                            width='70px'
                            height='50px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> NextJS</span>
                        <div className='text-light'>
                            Basic skill with NextJs
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6 mt-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/sass.png'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> CSS, SCSS</span>
                        <div className='text-light'>Basic skill Bootstrap, Tailwind</div>
                    </div>
                </div>
            </div>
            <div className='col-6 mt-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img src='/js.png' alt='' width='70px' height='70px' />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> JavaScript</span>
                        <div className='text-light'>JavaScript ES5, ES6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
