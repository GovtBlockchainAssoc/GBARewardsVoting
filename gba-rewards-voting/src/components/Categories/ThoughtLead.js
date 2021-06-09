import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThoughtLead = ({ tokens, normalize, state, handleSubmit }) => {

    const catInput = document.getElementById('tl-in');
    let res = null;
    {catInput ? res = (((catInput.value)/state)*tokens).toFixed(2) : res = 0}

    return (
        <Card className='card'>
                <Card.Header>
                    <input type='number' className='inputs norm' id='tl-in' name='num1'></input>
                    <Accordion.Toggle className='accordion-title' as={Button} variant="link" eventKey="5">
                        <h1 className='card-title'>Thought Leadership</h1>
                        <h3 className='percentage'>Allotment: {res}</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>
                    <div className='options' id='white-papers'>
                        <p className='cat'>White Papers</p>
                        <input type='number' className='inputs' id='num1' name='num1'></input>
                    </div>
                    <div className='options' id='ext-groups'>
                        <p className='cat'>External Groups</p>
                        <input type='number' className='inputs' id='num2' name='num2'></input>
                    </div>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default ThoughtLead;