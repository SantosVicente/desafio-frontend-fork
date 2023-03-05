import './styles.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/UntitledLogo.svg';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/" className='btn_logo'><img src = { Logo } className='logo'/></Link>
                <ul>
                    <li className='item1'>
                        <Link to="/" className='btn_one'>Home</Link>
                    </li>
                    <li>
                        <Link to="/data" className='btn'>Data</Link>
                    </li>
                    <li>
                        <Link to="/cadastro" className='btn'>Cadastro</Link>
                    </li>
                    <li>
                        <Link to="/search" className='btn'>Pesquisa</Link>
                    </li>
                    <li>
                        <Link to="/tabela" className='btn'>Tabela</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;