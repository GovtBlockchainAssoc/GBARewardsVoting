import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Domain = ({ tokens, normalize, state, handleSubmit }) => {

    const normCalc = (el, st, tok) => {
        return (((el.value)/st)*tok).toFixed(2)
    }
    const catInput = document.getElementById('dom-in');
    let res = null;
    {catInput ? res = normCalc(catInput, state, tokens) : res = 0}
    // {catInput ? res = (((catInput.value)/state)*tokens).toFixed(2) : res = 0}
    console.log(`norm: ${res}`)

    const subVals = document.getElementsByClassName('dom-opt');
    const [subState, setSub] = useState(0);
    const handleSubSub = (e) => {
        e.preventDefault()
        setSub(normalize(subVals));
    }
    
    const em = document.getElementById('em');
    const hd = document.getElementById('hd');
    const td = document.getElementById('td');

    let opt1 = 0;
    let opt2 = 0;
    let opt3 = 0;
    {res ? opt1 = normCalc(em, subState, res) : opt1 = 0}
    {res ? opt2 = normCalc(hd, subState, res) : opt2 = 0}
    {res ? opt3 = normCalc(td, subState, res) : opt3 = 0}


    return (
        <Card className='card'>
                <Card.Header>
                        <input type='number' className='inputs norm' id='dom-in' name='num1'></input>
                    <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="0">
                        <h1 className='card-title'>Domain Blockchains</h1>
                        <h3 className='percentage'>Allotment: {res} </h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className='options' id='emer-manage'>
                            <p className='cat'>Emergency Management</p>
                            <input type='number' className='inputs dom-opt' id='em' name='num1'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt1}</h3>

                        <div className='options' id='health-deliver'>
                            <p className='cat'>Healthcare Delivery</p>
                            <input type='number' className='inputs dom-opt' id='hd' name='num2'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt2}</h3>

                        <div className='options' id='token-dash'>
                            <p className='cat'>Tokenomics Dashboard</p>
                            <input type='number' className='inputs dom-opt' id='td' name='num3'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt3}</h3>

                        <Button onClick={handleSubSub}>Normalize</Button>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default Domain;