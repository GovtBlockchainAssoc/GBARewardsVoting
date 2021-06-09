import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Funding = ({ tokens, normalize, state, handleSubmit }) => {

    const catInput = document.getElementById('fund-in');
    let res = null;
    {catInput ? res = (((catInput.value)/state)*tokens).toFixed(2) : res = 0}

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
                            <input type='number' className='inputs' id='num1' name='num1'></input>
                        </div>
                        <div className='options' id='grants'>
                            <p className='cat'>Grants</p>
                            <input type='number' className='inputs' id='num2' name='num2'></input>
                        </div>
                        <div className='options' id='other'>
                            <p className='cat'>Other</p>
                            <input type='number' className='inputs' id='num3' name='num3'></input>
                        </div>
                        
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default Funding;