import {useState} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className='navigation'>
      <a href='/' className='brand-name'>
        MacroShop
      </a>
    <button className='hamburger'
    onClick={() => {
      setIsNavExpanded(!isNavExpanded);
    }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className='h-5 w-5'
        fill='white' 
        viewBox="0 0 20 20"
      >
        <path
          fillRule='evenodd' 
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1   1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0   011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
          clipRule='evenodd' 
        />
      </svg>
    </button>
    <div
    className={
      isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
      }
    >
      <ul>
        <li>
          <a href="/home">Inicio</a>
        </li>
        <li>
          <a href="/products">Productos</a>
        </li>
        <li>
          <a href="/sales">Descuentos</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/footer">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
