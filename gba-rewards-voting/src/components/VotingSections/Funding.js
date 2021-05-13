import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function Funding({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='funding'>
            <form className='wrapper' onSubmit={handleSubmit}>

                <div className={clicked === 'fund' ? 'active' : 'inactive'}>
                    <input name='main-vote' className='main-vote'></input>
                    <Wrap className='wrap' onClick={toggle}>
                        <div className='title'>
                            <h1 id='fund'>Funding</h1> 
                            <h6 className='result'>Result: <span className='span'>{state}</span></h6>
                        </div>
                        <span className='carrot' id='fund'>{clicked === 'fund' ? <BsCaretUp /> : <BsCaretDown />}</span>
                    </Wrap>
                    {clicked === 'fund' ? (
                        <div className='node-wrap'>

                                <div className='node'>

                                    <div className='options' id='contracts'>
                                        <p>Contracts</p>
                                        <input type='number' className='inputs' id='num1' name='num1'></input>
                                    </div>
                                    <div className='options' id='grants'>
                                        <p>Grants</p>
                                        <input type='number' className='inputs' id='num2' name='num2'></input>
                                    </div>
                                    <div className='options' id='other'>
                                        <p>Other</p>
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

export default Funding;