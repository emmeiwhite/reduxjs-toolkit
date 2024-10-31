import { useSelector } from 'react-redux'
import { CartIcon } from './src/icons'

export default function Navbar() {
  const cart = useSelector(store => store.cart)
  console.log(cart)
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">0</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
