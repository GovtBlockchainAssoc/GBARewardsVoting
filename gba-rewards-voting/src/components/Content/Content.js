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
                    <Domain normCalc={normCalc} tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize}/>
                    <Funding tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize}/>
                    <GBBP tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize}/>
                    <Members tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize}/>
                    <Outreach tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize}/>
                    <ThoughtLead tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize}/>
                    <Training tokens={tokens} state={state} handleSubmit={handleSubmit} normalize={normalize}/>
                </Accordion>
                <Button className='norm-btn' onClick={handleSubmit}>Normalize</Button>
            </div>
        </div>
    )
};

export default Content;