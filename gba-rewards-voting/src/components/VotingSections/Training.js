import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function Training({ toggle, clicked, handleSubmit, state, Wrap }) {

    return (
        <div className='choice' id='training'>
            <form className='wrapper' onSubmit={handleSubmit}>

                <div className={clicked === 'train' ? 'active' : 'inactive'}>
                    <input name='main-vote' className='main-vote'></input>
                    <Wrap className='wrap' onClick={toggle}>
                        <div>
                            <h1 className='sect-title' id='train'>Training</h1> 
                            <h6 className='result'>Result: <span className='span'>{state}</span></h6>
                        </div>
                        <span className='carrot' id='train'>{clicked === 'train' ? <BsCaretUp /> : <BsCaretDown />}</span>
                    </Wrap> 
                    {clicked === 'train' ? (
                        <div className='node-wrap'>


                                <div className='node'>

                                    <div className='options' id='courses'>
                                        <p>GBA Courses</p>
                                        <input type='number' className='inputs' id='num1' name='num1'></input>
                                    </div>
                                    <div className='options' id='hundred-training'>
                                        <p>100K Training</p>
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

export default Training;