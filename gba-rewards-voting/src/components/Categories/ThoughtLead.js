import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThoughtLead = ({ tokens, normalize, state, handleSubmit, normCalc }) => {

    const catInput = document.getElementById('tl-in');
    let res = null;
    catInput ? res = normCalc(catInput, state, tokens) : res = 0

    const subVals = document.getElementsByClassName('tl-opt');
    const [subState, setSub] = useState(0);
    const handleSubSub = (e) => {
        e.preventDefault()
        setSub(normalize(subVals));
    }
    
    const wp = document.getElementById('wp');
    const eg = document.getElementById('eg');

    let opt1 = 0;
    let opt2 = 0;

    res ? opt1 = normCalc(wp, subState, res) : opt1 = 0;
    res ? opt2 = normCalc(eg, subState, res) : opt2 = 0;

    return (
        <Card className='card'>
                <Card.Header>
                    <input type='number' className='inputs norm' id='tl-in' name='num1'></input>
                    <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="5">
                        <h1 className='card-title'>Thought Leadership</h1>
                        <h3 className='percentage'>Allotment: {res}</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>
                    <div className='options' id='white-papers'>
                        <p className='cat'>White Papers</p>
                        <input type='number' className='inputs tl-opt' id='wp' name='num1'></input>
                    </div>
                    <h3 className='sub-allot'>Allotment: {opt1}</h3>

                    <div className='options' id='ext-groups'>
                        <p className='cat'>External Groups</p>
                        <input type='number' className='inputs tl-opt' id='eg' name='num2'></input>
                    </div>
                    <h3 className='sub-allot'>Allotment: {opt2}</h3>

                    <Button onClick={handleSubSub}>Normalize</Button>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default ThoughtLead;