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
            <div className={clicked === 'mem' ? 'active' : 'inactive'}>

                <Wrap className='wrap' onClick={toggle}>
                    <h1 id='mem'>Members</h1> 
                    <span>{clicked === 'mem' ? <BsCaretUp /> : <BsCaretDown />}</span>
                </Wrap>

                {clicked === 'mem' ? (
                    <div className='node'>

                        <div id='outreach'>
                            <h2>Outreach</h2>
                        </div>

                        {/* 2 levels of sub nodes  */}
                        <div id='work-groups'>
                        <Wrap id='wrap' onClick={() => toggle2()}>
                            <h2>Working Groups</h2> 
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
                            <h2>Regional Groups</h2>
                        </div>

                    </div>
                ) : null }
            </div>
        </div>
    )
};

export default Members;