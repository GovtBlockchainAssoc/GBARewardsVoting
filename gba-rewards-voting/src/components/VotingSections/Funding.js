import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import styled from 'styled-components';


function Funding() {

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
        <div className='choice' id='funding'>
            <Wrap id='wrap' onClick={() => toggle()}>
                <h1>Funding</h1> 
                <span>{clicked ? <BsCaretUp /> : <BsCaretDown />}</span>
            </Wrap>
            {clicked ? (
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
    )
};

export default Funding;