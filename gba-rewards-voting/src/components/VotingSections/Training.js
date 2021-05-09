import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function Training({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='training'>
            <div className={clicked === 'train' ? 'active' : 'inactive'}>
                <Wrap className='wrap' onClick={toggle}>
                    <h1 id='train'>Training</h1> 
                    <span>{clicked === 'train' ? <BsCaretUp /> : <BsCaretDown />}</span>
                </Wrap> 

                {clicked === 'train' ? (
                    <div className='node'>

                        <div className='options' id='courses'>
                            <p>GBA Courses</p>
                        </div>
                        <div className='options' id='hundred-training'>
                            <p>100K Training</p>
                        </div>

                    </div>
                ) : null }
            </div>
        </div>
    )
};

export default Training;