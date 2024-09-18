/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Other() {
    return (
        <div className='row mt-5'>
            <div className='col-6 mb-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/github.png'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'>Github</span>
                        <div className='text-light'>Git SCM</div>
                    </div>
                </div>
            </div>
            <div className='col-6 mb-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/postman.png'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'>Postman</span>
                        <div className='text-light'>Test API with Postman</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
