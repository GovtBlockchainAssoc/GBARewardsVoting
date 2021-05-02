import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import styled from 'styled-components';

function Outreach() {

    const Wrap = styled.div`
    cursor: pointer
    `;

    const [clicked, setClicked] = useState(false);
    const toggle = () => {
        if(clicked) {
            return setClicked(false)
        }
        setClicked(true)
    }

    return (
        <div className='choice' id='outreach'>
            <Wrap id='wrap' onClick={() => toggle()}>
                <h1>Outreach</h1> 
                <span>{clicked ? <BsCaretUp /> : <BsCaretDown />}</span>
            </Wrap>

            {clicked ? (
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
    )
};

export default Outreach;