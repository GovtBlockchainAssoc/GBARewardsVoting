import React, { useState } from 'react';
import { Domain, Funding, GBBP, Members, Outreach, ThoughtLeadership, Training } from '../VotingSections';
import styled from 'styled-components';
import './Content.css';

function Content() {

    const Wrap = styled.div`
        cursor: pointer
        `;
        
    const [clicked, setClicked] = useState('');
    const toggle = e => {
        setClicked(e.target.id)
        console.log(clicked)
        if (clicked === e.target.id) {
            setClicked('')
        }
    };
    
    const normalize = () => {
        let total = 0;
        const nums = document.getElementsByClassName('inputs');
        let values = [];
        for (let i = 0; i < nums.length; i++) {
            values.push(parseInt(nums[i].value))
        }
        total = values.reduce((prevValue, currVal) => {
            return prevValue + currVal
        })
        return total
    }

    const [state, setState] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        setState(normalize());
    }


    // const [vote, setVote] = useState(0);


    return(
        <div className='Content'>
            <div className='voting-container'>
                <Domain Wrap={Wrap} toggle={toggle} clicked={clicked} normalize={normalize} state={state} handleSubmit={handleSubmit}/>
                <Funding Wrap={Wrap} toggle={toggle} clicked={clicked} normalize={normalize} state={state} handleSubmit={handleSubmit}/>
                <GBBP Wrap={Wrap} toggle={toggle} clicked={clicked} normalize={normalize} state={state} handleSubmit={handleSubmit}/>
                <Members Wrap={Wrap} toggle={toggle} clicked={clicked} normalize={normalize} state={state} handleSubmit={handleSubmit}/>
                <Outreach Wrap={Wrap} toggle={toggle} clicked={clicked} normalize={normalize} state={state} handleSubmit={handleSubmit}/>
                <ThoughtLeadership Wrap={Wrap} toggle={toggle} clicked={clicked} normalize={normalize} state={state} handleSubmit={handleSubmit}/>
                <Training Wrap={Wrap} toggle={toggle} clicked={clicked} normalize={normalize} state={state} handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
};

export default Content;