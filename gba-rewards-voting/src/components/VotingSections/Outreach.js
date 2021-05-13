import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function Outreach({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='outreach'>
            <form className='wrapper' onSubmit={handleSubmit}>

                <div className={clicked === 'out' ? 'active' : 'inactive'}>
                    <input name='main-vote' className='main-vote'></input>
                    <Wrap className='wrap' onClick={toggle}>
                        <div className='title'>
                            <h1 className='sect-title' id='out'>Outreach</h1> 
                            <h6 className='result'>Result: <span className='span'>{state}</span></h6>
                        </div>
                        <span className='carrot' id='out'>{clicked === 'out' ? <BsCaretUp /> : <BsCaretDown />}</span>
                    </Wrap>
                    {clicked === 'out' ? (
                        <div className='node-wrap'>
                                <div className='node'>

                                    <div className='options' id='govt-bc-week'>
                                        <p>Government Blockchain Week</p>
                                        <input type='number' className='inputs' id='num1' name='num1'></input>
                                    </div>
                                    <div className='options' id='partnerships'>
                                        <p>Partnerships</p>
                                        <input type='number' className='inputs' id='num2' name='num2'></input>
                                    </div>
                                    <div className='options' id='other-conferences'>
                                        <p>Other Conferences</p>
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

export default Outreach;