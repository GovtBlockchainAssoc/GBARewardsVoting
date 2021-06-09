import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Outreach = ({ tokens, normalize, state, handleSubmit, normCalc }) => {

    const catInput = document.getElementById('out-in');
    let res = null;
    {catInput ? res = (((catInput.value)/state)*tokens).toFixed(2) : res = 0}

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
                        <input type='number' className='inputs' id='num1' name='num1'></input>
                    </div>
                    <div className='options' id='partnerships'>
                        <p className='cat'>Partnerships</p>
                        <input type='number' className='inputs' id='num2' name='num2'></input>
                    </div>
                    <div className='options' id='other-conferences'>
                        <p className='cat'>Other Conferences</p>
                        <input type='number' className='inputs' id='num3' name='num3'></input>
                    </div>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default Outreach;