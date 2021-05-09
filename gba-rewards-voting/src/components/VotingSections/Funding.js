import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";


function Funding({ toggle, clicked, handleSubmit, state, Wrap }) {

    

    return (
        <div className='choice' id='funding'>
            <div className={clicked === 'fund' ? 'active' : 'inactive'}>
                <Wrap className='wrap' onClick={toggle}>
                    <h1 id='fund'>Funding</h1> 
                    <span>{clicked === 'fund' ? <BsCaretUp /> : <BsCaretDown />}</span>
                </Wrap>
                {clicked === 'fund' ? (
                    <div className='node'>

                        <div className='options' id='contracts'>
                            <p>Contracts</p>
                        </div>
                        <div className='options' id='grants'>
                            <p>Grants</p>
                        </div>
                        <div className='options' id='other'>
                            <p>Other</p>
                        </div>

                    </div>
                ) : null }
            </div>
        </div>
    )
};

export default Funding;