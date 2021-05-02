import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import styled from 'styled-components';

function ThoughtLeadership() {

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
        <div className='choice' id='thought-leaders'>
            <Wrap id='wrap' onClick={() => toggle()}>
                <h1>Thought Leadership</h1> 
                <span>{clicked ? <BsCaretUp /> : <BsCaretDown />}</span>
            </Wrap>

            {clicked ? (
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
    )
};

export default ThoughtLeadership;