import React, { useState } from 'react';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";

function Members({ toggle, clicked, handleSubmit, state, Wrap }) {

    // Working Groups Drop Down
    const [clicked2, setClicked2] = useState(false);
    const toggle2 = () => {
        if(clicked2) {
            return setClicked2(false)
        }
        setClicked2(true)
    }

    // Working Groups Drop Down
    const [clicked3, setClicked3] = useState(false);
    const toggle3 = () => {
        if(clicked3) {
            return setClicked3(false)
        }
        setClicked3(true)
    }

    return (
        <div className='choice' id='members'>
            <form className='wrapper' onSubmit={handleSubmit}>


                <div className={clicked === 'mem' ? 'active' : 'inactive'}>
                    <input name='main-vote' className='main-vote'></input>
                    <Wrap className='wrap' onClick={toggle}>
                        <div className='title'>
                            <h1 className='sect-title' id='mem'>Members</h1> 
                            <h6 className='result'>Result: <span className='span'>{state}</span></h6>
                        </div>
                        <span className='carrot' id='mem'>{clicked === 'mem' ? <BsCaretUp /> : <BsCaretDown />}</span>
                    </Wrap>
                    {clicked === 'mem' ? (
                        <div className='node-wrap'>


                                <div className='node'>

                                    <div id='outreach'>
                                        <p>Outreach</p>
                                        <input type='number' className='inputs' id='num1' name='num1'></input>
                                    </div>

                                    {/* 2 levels of sub nodes  */}
                                    <div id='work-groups'>
                                    <Wrap id='wrap' onClick={() => toggle2()}>
                                        <h2>Working Groups</h2> 
                                        <input type='number' className='inputs' id='num2' name='num2'></input>
                                        <span>{clicked2 ? <BsCaretUp /> : <BsCaretDown />}</span>
                                    </Wrap>
                                    {clicked2 ? (
                                        <div className='sub-nodes'>
                                            <h3>List of Active Working Groups (Abridged)</h3>

                                            <div className='sub' id='crypt-mining'>
                                            <Wrap id='wrap' onClick={() => toggle3()}>
                                                <h3>Crypto & Mining</h3> 
                                                <span>{clicked3 ? <BsCaretUp /> : <BsCaretDown />}</span>
                                            </Wrap>
                                            {clicked3 ? (
                                                    <div className='sub-sub-nodes'>
                                                        <h5>List of Active Crypto & Mining Members</h5>
                                                        <div id='Aleks'>
                                                            Aleks
                                                        </div>

                                                        <div id='Denise'>
                                                            Denise
                                                        </div>

                                                        <div id='Fredric'>
                                                            Fredric
                                                        </div>

                                                        <div id='Gerard'>
                                                            Gerard
                                                        </div>

                                                        <div id='Joe'>
                                                            Joe
                                                        </div>

                                                        <div id='Jovan'>
                                                            Jovan
                                                        </div>

                                                        <div id='Mark'>
                                                            Mark
                                                        </div>

                                                        <div id='Max'>
                                                            Max
                                                        </div>

                                                        <div id='Mort'>
                                                            Mort
                                                        </div>

                                                    </div>
                                                    ) : null }
                                            </div>

                                            <div id='emer-manage'>
                                                <h4>Emergency Management</h4>
                                            </div>
                                            <div id='health'>
                                                <h4>Health</h4>
                                            </div>
                                            <div id='voting'>
                                                <h4>Voting</h4>
                                            </div>
                                        </div>

                                        ) : null }

                                    </div>

                                    {/* ------------------------------ */}
                                    <div id='reg-groups'>
                                        <p>Regional Groups</p>
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

export default Members;