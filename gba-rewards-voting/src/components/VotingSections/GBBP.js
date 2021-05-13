import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function GBBP({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='gbbp'>
            <form className='wrapper' onSubmit={handleSubmit}>

                <div className={clicked === 'gb' ? 'active' : 'inactive'}>
                    <input name='main-vote' className='main-vote'></input>
                    <Wrap className='wrap' onClick={toggle}>
                        <div className='title'>
                            <h1 id='gb'>GBBP</h1> 
                            <h6 className='result'>Result: <span className='span'>{state}</span></h6>
                        </div>
                        <span className='carrot' id='gb'>{clicked === 'gb' ? <BsCaretUp /> : <BsCaretDown />}</span>
                    </Wrap>
                    {clicked === 'gb' ? (
                        <div className='node-wrap'>


                                <div className='node'>

                                    <div className='options' id='token'>
                                        <p>Token</p>
                                        <input type='number' className='inputs' id='num1' name='num1'></input>
                                    </div>
                                    <div className='options' id='besu-hub'>
                                        <p>Besu Hub</p>
                                        <input type='number' className='inputs' id='num2' name='num2'></input>
                                    </div>
                                    <div className='options' id='node-owners'>
                                        <p>Node Owners</p>
                                        <input type='number' className='inputs' id='num3' name='num3'></input>
                                    </div>
                                    <div className='options' id='gateways'>
                                        <p>Gateways</p>
                                        <input type='number' className='inputs' id='num4' name='num4'></input>
                                    </div>
                                    <div className='options' id='dao'>
                                        <p>DAO</p>
                                        <input type='number' className='inputs' id='num4' name='num4'></input>
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

export default GBBP;