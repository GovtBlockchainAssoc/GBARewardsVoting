import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Members = ({ tokens, normalize, state, handleSubmit, normCalc }) => {
    
    const catInput = document.getElementById('mem-in');
    let res = null;
    {catInput ? res = (((catInput.value)/state)*tokens).toFixed(2) : res = 0}

    return (
        <Card className='card'>
            <Card.Header>
                <input type='number' className='inputs norm' id='mem-in' name='mem-in'></input>
                <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="3">
                    <h1 className='card-title'>*Members</h1>
                    <h3 className='percentage'>Allotment: {res}</h3>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <Card.Body>
                    <div className='options' id='token'>
                        <p className='cat'>Outreach</p>
                        <input type='number' className='inputs' id='num1' name='num1'></input>
                    </div>
                    <div className='options' id='besu-hub'>
                        <p className='cat'>Regional Groups</p>
                        <input type='number' className='inputs' id='num2' name='num2'></input>
                    </div>

                    {/* Working Groups Drop Down */}
                    <div className='options' id='node-owners'>
                        <Card.Header>
                            <input type='number' className='inputs' id='num1' name='num1'></input>
                            <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="7 ">
                                <h1 className='card-title'>*Working Groups</h1>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>

                                <div className='options' id='token'>
                                    <p className='cat'>Emergency Management</p>
                                    <input type='number' className='inputs' id='num1' name='num1'></input>
                                </div>
                                <div className='options' id='besu-hub'>
                                    <p className='cat'>Health</p>
                                    <input type='number' className='inputs' id='num2' name='num2'></input>
                                </div>
                                <div className='options' id='token'>
                                    <p className='cat'>Voting</p>
                                    <input type='number' className='inputs' id='num1' name='num1'></input>
                                </div>

                                {/* Crypto & Mining Drop Down */}
                                <div className='options' id='node-owners'>
                                    <Card.Header>
                                        <input type='number' className='inputs' id='num1' name='num1'></input>
                                        <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="9">
                                            <h1 className='card-title'>*Crypto & Mining</h1>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="9">
                                        <Card.Body>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Aleks</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Denise</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Fredric</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Gerard</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Joe</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Jovan</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Mark</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Max</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                            <div className='options' id='besu-hub'>
                                                <p className='cat'>Mort</p>
                                                <input type='number' className='inputs' id='num2' name='num2'></input>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>

                    </div>

                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default Members;