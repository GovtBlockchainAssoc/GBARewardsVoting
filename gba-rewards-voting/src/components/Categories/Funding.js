import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Funding = ({ tokens, normalize, state, handleSubmit, normCalc }) => {

    const catInput = document.getElementById('fund-in');
    let res = null;
    catInput ? res = normCalc(catInput, state, tokens) : res = 0;

    const subVals = document.getElementsByClassName('fund-opt');
    const [subState, setSub] = useState(0);
    const handleSubSub = (e) => {
        e.preventDefault()
        setSub(normalize(subVals));
    }
    
    const con = document.getElementById('con');
    const gr = document.getElementById('gr');
    const oth = document.getElementById('oth');

    let opt1 = 0;
    let opt2 = 0;
    let opt3 = 0;
    res ? opt1 = normCalc(con, subState, res) : opt1 = 0;
    res ? opt2 = normCalc(gr, subState, res) : opt2 = 0;
    res ? opt3 = normCalc(oth, subState, res) : opt3 = 0;

    return (
        <Card className='card'>
                <Card.Header>
                    <input type='number' className='inputs norm' id='fund-in' name='num1'></input>
                    <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="1">
                        <h1 className='card-title'>Funding</h1>
                        <h3 className='percentage'>Allotment: {res}</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div className='options' id='contracts'>
                            <p className='cat'>Contracts</p>
                            <input type='number' className='inputs fund-opt' id='con' name='num1'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt1}</h3>

                        <div className='options' id='grants'>
                            <p className='cat'>Grants</p>
                            <input type='number' className='inputs fund-opt' id='gr' name='num2'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt2}</h3>

                        <div className='options' id='other'>
                            <p className='cat'>Other</p>
                            <input type='number' className='inputs fund-opt' id='oth' name='num3'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt3}</h3>

                        <Button onClick={handleSubSub}>Normalize</Button>
                        
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default Funding;