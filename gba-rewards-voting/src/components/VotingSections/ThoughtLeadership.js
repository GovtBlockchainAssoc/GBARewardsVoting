import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function ThoughtLeadership({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='thought-leaders'>
            <form className='wrapper' onSubmit={handleSubmit}>

                <div className={clicked === 'tl' ? 'active' : 'inactive'}>
                    <input name='main-vote' className='main-vote'></input>
                    <Wrap className='sect-title' className='wrap' onClick={toggle}>
                        <div className='title'>
                            <h1 id='tl'>Thought Leadership</h1> 
                            <h6 className='result'>Result: <span className='span'>{state}</span></h6>
                        </div>
                        <span className='carrot' id='tl'>{clicked === 'tl' ? <BsCaretUp /> : <BsCaretDown />}</span>
                    </Wrap>

                    {clicked === 'tl' ? (
                        <div className='node-wrap'>

                                <div className='node'>

                                    <div className='options' id='white-papers'>
                                        <p>White Papers</p>
                                        <input type='number' className='inputs' id='num1' name='num1'></input>
                                    </div>
                                    <div className='options' id='ext-groups'>
                                        <p>External Groups</p>
                                        <input type='number' className='inputs' id='num2' name='num2'></input>
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

export default ThoughtLeadership;