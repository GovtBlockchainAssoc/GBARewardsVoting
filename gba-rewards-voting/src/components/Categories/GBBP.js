import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const GBBP = ({ tokens, normalize, state, handleSubmit, normCalc }) => {

    const catInput = document.getElementById('gbbp-in');
    let res = null;
    catInput ? res = normCalc(catInput, state, tokens) : res = 0

    const subVals = document.getElementsByClassName('gbbp-opt');
    const [subState, setSub] = useState(0);
    const handleSubSub = (e) => {
        e.preventDefault()
        setSub(normalize(subVals));
    }
    
    const tok = document.getElementById('tok');
    const bes = document.getElementById('bes');
    const nod = document.getElementById('nod');
    const gat = document.getElementById('gat');
    const da = document.getElementById('da');

    let opt1 = 0;
    let opt2 = 0;
    let opt3 = 0;
    let opt4 = 0;
    let opt5 = 0;

    res ? opt1 = normCalc(tok, subState, res) : opt1 = 0;
    res ? opt2 = normCalc(bes, subState, res) : opt2 = 0;
    res ? opt3 = normCalc(nod, subState, res) : opt3 = 0;
    res ? opt4 = normCalc(gat, subState, res) : opt4 = 0;
    res ? opt5 = normCalc(da, subState, res) : opt5 = 0;

    return (
        <Card className='card'>
                <Card.Header>
                    <input type='number' className='inputs norm' id='gbbp-in' name='num1'></input>
                    <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="2">
                        <h1 className='card-title'>GBBP</h1>
                        <h3 className='percentage'>Allotment: {res}</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <div className='options' id='token'>
                            <p className='cat'>Token</p>
                            <input type='number' className='inputs gbbp-opt' id='tok' name='num1'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt1}</h3>

                        <div className='options' id='besu-hub'>
                            <p className='cat'>Besu Hub</p>
                            <input type='number' className='inputs gbbp-opt' id='bes' name='num2'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt2}</h3>

                        <div className='options' id='node-owners'>
                            <p className='cat'>Node Owners</p>
                            <input type='number' className='inputs gbbp-opt' id='nod' name='num3'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt3}</h3>

                        <div className='options' id='gateways'>
                            <p className='cat'>Gateways</p>
                            <input type='number' className='inputs gbbp-opt' id='gat' name='num4'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt4}</h3>

                        <div className='options' id='dao'>
                            <p className='cat'>DAO</p>
                            <input type='number' className='inputs gbbp-opt' id='da' name='num5'></input>
                        </div>
                        <h3 className='sub-allot'>Allotment: {opt5}</h3>


                        <Button onClick={handleSubSub}>Normalize</Button>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default GBBP;