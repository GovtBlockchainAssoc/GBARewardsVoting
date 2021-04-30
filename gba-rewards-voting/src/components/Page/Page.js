import Header from './Header';
import Footer from './Footer';
import Content from '../Content/Content';
import './Page.css';

function Page() {
    return (
        <div className='Page'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Page;