import { BsCaretDown, BsCaretUp } from "react-icons/bs";

const Domain = ({ toggle, clicked, handleSubmit, state, Wrap }) => {

    return (
        <div className='choice' id='domain'>
            <form className='wrapper' onSubmit={handleSubmit}>

                <div className={clicked === 'db' ? 'active' : 'inactive'}>
                    <input name='main-vote' className='main-vote'></input>
                    <Wrap className='wrap' onClick={toggle}>
                        <div className='title'>
                            <h1 id='db'>Domain Blockchains</h1> 
                            <h6 className='result'>Result: <span className='span'>{state}</span></h6>
                        </div>
                        <span className='carrot' id='db'>{clicked === 'db' ? <BsCaretUp /> : <BsCaretDown />}</span>
                    </Wrap>
                    {clicked === 'db' ? (
                        <div className='node-wrap'>

                            <div className='node'>

                                <div className='options' id='emer-manage'>
                                    <p>Emergency Management</p>
                                    <input type='number' className='inputs' id='num1' name='num1'></input>
                                </div>
                                <div className='options' id='health-deliver'>
                                    <p>Healthcare Delivery</p>
                                    <input type='number' className='inputs' id='num2' name='num2'></input>
                                </div>
                                <div className='options' id='token-dash'>
                                    <p>Tokenomics Dashboard</p>
                                    <input type='number' className='inputs' id='num3' name='num3'></input>
                                </div>

                            </div>
                            <button className='normalize' name='submit' value='submit'>Normalize</button>
                        
                        </div>
                    ) : null }
                </div>
            </form>
        </div>
    )
};

export default Domain;