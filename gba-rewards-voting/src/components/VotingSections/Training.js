import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import styled from 'styled-components';

function Training() {

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
        <div className='choice' id='training'>
            <Wrap id='wrap' onClick={() => toggle()}>
                <h1>Training</h1> 
                <span>{clicked ? <BsCaretUp /> : <BsCaretDown />}</span>
            </Wrap> 

            {clicked ? (
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
    )
};

export default Training;