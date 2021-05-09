import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function ThoughtLeadership({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='thought-leaders'>
            <div className={clicked === 'tl' ? 'active' : 'inactive'}>
                <Wrap className='wrap' onClick={toggle}>
                    <h1 id='tl'>Thought Leadership</h1> 
                    <span>{clicked === 'tl' ? <BsCaretUp /> : <BsCaretDown />}</span>
                </Wrap>

                {clicked === 'tl' ? (
                    <div className='node'>

                        <div className='options' id='white-papers'>
                            <p>White Papers</p>
                        </div>
                        <div className='options' id='ext-groups'>
                            <p>External Groups</p>
                        </div>
                    
                    </div>
                ) : null }
            </div>
        </div>
    )
};

export default ThoughtLeadership;