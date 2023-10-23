import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
    <div className='container'>
      <div className='single'>
      <Link to='/'>Single</Link>
      </div>
      <Link to='/multi'>Multiple</Link>
      </div>
    </>
  );
}
