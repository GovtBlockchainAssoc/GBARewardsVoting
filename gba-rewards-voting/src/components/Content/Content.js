import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Domain, Funding, GBBP, Members, Outreach, ThoughtLead, Training } from '../Categories'
import './Content.css';

function Content() {

    const nums = document.getElementsByClassName('norm');
    const normalize = (n) => {
        let total = 0;
        let values = [0];
        for (let i = 0; i < n.length; i++) {
            values.push(parseInt(n[i].value))
        }
        total = values.reduce((prevValue, currVal) => {
            return prevValue + currVal
        })
        return total
    }

    const [state, setState] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        setState(normalize(nums));
    }

    const normCalc = (el, st, tok) => {
        return (((el.value)/st)*tok).toFixed(2)
    }

    const tokens = 100;

    return(
        <div className='Content'>
            <div className='voting-container'>
                <h1 id='tokens'>Total Tokens: {tokens}</h1>
                <Accordion>
                    <Domain tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize} normCalc={normCalc}/>
                    <Funding tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize} normCalc={normCalc}/>
                    <GBBP tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize} normCalc={normCalc}/>
                    <Members tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize} normCalc={normCalc}/>
                    <Outreach tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize} normCalc={normCalc}/>
                    <ThoughtLead tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize} normCalc={normCalc}/>
                    <Training tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize} normCalc={normCalc}/>
                </Accordion>
                <Button className='norm-btn' onClick={handleSubmit}>Normalize</Button>
            </div>
        </div>
    )
};

export default Content;