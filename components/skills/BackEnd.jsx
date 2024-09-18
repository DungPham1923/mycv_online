/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function BackEnd() {
    return (
        <div className='row mt-5'>
            <div className='col-6'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/java.png'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> Java  </span>
                        <div className='text-light'>Java SpringBoot, Java J2EE</div>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/csharp.png'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> C#</span>
                        <div className='text-light'>
                            .NET Core, ASP.NET Framework, Entity Framework
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6 mt-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/js.png'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> JavaScript</span>
                        <div className='text-light'>
                            NodeJs framework
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
