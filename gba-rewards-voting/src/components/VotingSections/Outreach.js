import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function Outreach({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='outreach'>
            <div className={clicked === 'out' ? 'active' : 'inactive'}>
                <Wrap className='wrap' onClick={toggle}>
                    <h1 id='out'>Outreach</h1> 
                    <span>{clicked === 'out' ? <BsCaretUp /> : <BsCaretDown />}</span>
                </Wrap>

                {clicked === 'out' ? (
                    <div className='node'>

                        <div className='options' id='govt-bc-week'>
                            <p>Government Blockchain Week</p>
                        </div>
                        <div className='options' id='partnerships'>
                            <p>Partnerships</p>
                        </div>
                        <div className='options' id='other-conferences'>
                            <p>Other Conferences</p>
                        </div>

                    </div>
                ) : null }
            </div>
        </div>
    )
};

export default Outreach;