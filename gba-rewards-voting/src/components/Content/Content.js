import { Domain, Funding, GBBP, Members, Outreach, ThoughtLeadership, Training } from '../VotingSections';
import './Content.css';

function Content() {
    return(
        <div className='Content'>
            <div className='voting-container'>
                {/* <Domain /> */}
                {/* <Funding /> */}
                {/* <GBBP /> */}
                <Members />
                {/* <Outreach /> */}
                {/* <ThoughtLeadership /> */}
                {/* <Training /> */}
            </div>
        </div>
    )
};

export default Content;