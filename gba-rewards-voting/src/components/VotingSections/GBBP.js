import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import styled from 'styled-components';

function GBBP() {

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
        <div className='choice' id='gbbp'>
            <Wrap id='wrap' onClick={() => toggle()}>
                <h1>GBBP</h1> 
                <span>{clicked ? <BsCaretUp /> : <BsCaretDown />}</span>
            </Wrap>
            {clicked ? (
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
    )
};

export default GBBP;