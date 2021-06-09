import Header from './Header';
import Footer from './Footer';
import Content from '../Content/Content';
import './Page.css';

function Page() {
    return (
        <div className='Page'>
            <Header />
            <h1 className='rewards-vote'>GBA Rewards Voting</h1>
            <Content />
            <Footer />
        </div>
    )
}

export default Page;