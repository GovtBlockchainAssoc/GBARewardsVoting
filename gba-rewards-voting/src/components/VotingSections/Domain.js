import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import styled from 'styled-components';


function Domain() {

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
        <div className='choice' id='domain'>
            <Wrap id='wrap' onClick={() => toggle()}>
                <h1>Domain Blockchains</h1> 
                <span>{clicked ? <BsCaretUp /> : <BsCaretDown />}</span>
            </Wrap>
            {clicked ? (
                <div className='node'>

                    <div className='options' id='emer-manage'>
                        <p>Emergency Management</p>
                    </div>
                    <div className='options' id='health-deliver'>
                        <p>Healthcare Delivery</p>
                    </div>
                    <div className='options' id='token-dash'>
                        <p>Tokenomics Dashboard</p>
                    </div>

                </div>
            ) : null }
            
            
        </div>
    )
};

export default Domain;