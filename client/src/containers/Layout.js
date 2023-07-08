import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

const Layout = ({ title, content, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={content} />
    </Helmet>
    <div className='d-flex flex-column vh-100 bg-dark text-light'>
      <Navbar />
      <div>{children}</div>
    </div>
  </>
);

export default Layout;
