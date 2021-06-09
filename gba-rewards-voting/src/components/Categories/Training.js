import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Training = ({ tokens, normalize, state, handleSubmit, normCalc }) => {

    const catInput = document.getElementById('train-in');
    let res = null;
    {catInput ? res = (((catInput.value)/state)*tokens).toFixed(2) : res = 0}

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
                            <input type='number' className='inputs' id='num1' name='num1'></input>
                        </div>
                        <div className='options' id='hundred-training'>
                            <p>100K Training</p>
                            <input type='number' className='inputs' id='num2' name='num2'></input>
                        </div>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default Training;