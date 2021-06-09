import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const GBBP = ({ tokens, normalize, state, handleSubmit }) => {

    const catInput = document.getElementById('gbbp-in');
    let res = null;
    {catInput ? res = (((catInput.value)/state)*tokens).toFixed(2) : res = 0}

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
                    <input type='number' className='inputs' id='num1' name='num1'></input>
                </div>
                <div className='options' id='besu-hub'>
                    <p className='cat'>Besu Hub</p>
                    <input type='number' className='inputs' id='num2' name='num2'></input>
                </div>
                <div className='options' id='node-owners'>
                    <p className='cat'>Node Owners</p>
                    <input type='number' className='inputs' id='num3' name='num3'></input>
                </div>
                <div className='options' id='gateways'>
                    <p className='cat'>Gateways</p>
                    <input type='number' className='inputs' id='num4' name='num4'></input>
                </div>
                <div className='options' id='dao'>
                    <p className='cat'>DAO</p>
                    <input type='number' className='inputs' id='num4' name='num4'></input>
                </div>
  
                </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default GBBP;