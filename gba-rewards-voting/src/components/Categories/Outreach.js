import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Outreach = ({ tokens, normalize, state, handleSubmit, normCalc }) => {

    const catInput = document.getElementById('out-in');
    let res = null;
    catInput ? res = normCalc(catInput, state, tokens) : res = 0

    const subVals = document.getElementsByClassName('out-opt');
    const [subState, setSub] = useState(0);
    const handleSubSub = (e) => {
        e.preventDefault()
        setSub(normalize(subVals));
    }
    
    const gbw = document.getElementById('gbw');
    const par = document.getElementById('par');
    const otc = document.getElementById('otc');

    let opt1 = 0;
    let opt2 = 0;
    let opt3 = 0;

    res ? opt1 = normCalc(gbw, subState, res) : opt1 = 0;
    res ? opt2 = normCalc(par, subState, res) : opt2 = 0;
    res ? opt3 = normCalc(otc, subState, res) : opt3 = 0;

    return (
        <Card className='card'>
                <Card.Header>
                    <input type='number' className='inputs norm' id='out-in' name='num1'></input>
                    <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="4">
                        <h1 className='card-title'>Outreach</h1>
                        <h3 className='percentage'>Allotment: {res}</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                    <div className='options' id='govt-bc-week'>
                        <p className='cat'>Government Blockchain Week</p>
                        <input type='number' className='inputs out-opt' id='gbw' name='num1'></input>
                    </div>
                    <h3 className='sub-allot'>Allotment: {opt1}</h3>

                    <div className='options' id='partnerships'>
                        <p className='cat'>Partnerships</p>
                        <input type='number' className='inputs out-opt' id='par' name='num2'></input>
                    </div>
                    <h3 className='sub-allot'>Allotment: {opt2}</h3>

                    <div className='options' id='other-conferences'>
                        <p className='cat'>Other Conferences</p>
                        <input type='number' className='inputs out-opt' id='otc' name='num3'></input>
                    </div>
                    <h3 className='sub-allot'>Allotment: {opt3}</h3>

                    <Button onClick={handleSubSub}>Normalize</Button>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default Outreach;