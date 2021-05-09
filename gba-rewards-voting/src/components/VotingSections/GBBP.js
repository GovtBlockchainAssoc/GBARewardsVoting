import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function GBBP({ toggle, clicked, handleSubmit, state, Wrap }) {

    
    
    return (
        <div className='choice' id='gbbp'>
            <div className={clicked === 'gb' ? 'active' : 'inactive'}>
                <Wrap className='wrap' onClick={toggle}>
                    <h1 id='gb'>GBBP</h1> 
                    <span>{clicked === 'gb' ? <BsCaretUp /> : <BsCaretDown />}</span>
                </Wrap>
                {clicked === 'gb' ? (
                    <div className='node'>

                        <div className='options' id='token'>
                            <p>Token</p>
                        </div>
                        <div className='options' id='besu-hub'>
                            <p>Besu Hub</p>
                        </div>
                        <div className='options' id='node-owners'>
                            <p>Node Owners</p>
                        </div>
                        <div className='options' id='gateways'>
                            <p>Gateways</p>
                        </div>
                        <div className='options' id='dao'>
                            <p>DAO</p>
                        </div>

                    </div>
                ) : null }
            </div>
        </div>
    )
};

export default GBBP;