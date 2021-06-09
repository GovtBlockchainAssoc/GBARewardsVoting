import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Training = ({ tokens, normalize, state, handleSubmit, normCalc }) => {

    const catInput = document.getElementById('train-in');
    let res = null;
    catInput ? res = normCalc(catInput, state, tokens) : res = 0

    const subVals = document.getElementsByClassName('train-opt');
    const [subState, setSub] = useState(0);
    const handleSubSub = (e) => {
        e.preventDefault()
        setSub(normalize(subVals));
    }
    
    const gc = document.getElementById('gc');
    const tra = document.getElementById('tra');

    let opt1 = 0;
    let opt2 = 0;

    res ? opt1 = normCalc(gc, subState, res) : opt1 = 0;
    res ? opt2 = normCalc(tra, subState, res) : opt2 = 0;

    return (
        <Card className='card'>
                <Card.Header>
                    <input type='number' className='inputs norm' id='train-in' name='num1'></input>
                    <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="6">
                        <h1 className='card-title'>Training</h1>
                        <h3 className='percentage'>Allotment: {res}</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>
                        <div className='options' id='courses'>
                            <p>GBA Courses</p>
                            <input type='number' className='inputs train-opt' id='gc' name='num1'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt1}</h3>

                        <div className='options' id='hundred-training'>
                            <p>100K Training</p>
                            <input type='number' className='inputs train-opt' id='tra' name='num2'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt2}</h3>

                        <Button onClick={handleSubSub}>Normalize</Button>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default Training;