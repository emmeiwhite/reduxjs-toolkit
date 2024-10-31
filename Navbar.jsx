import { useSelector } from 'react-redux'
import { CartIcon } from './src/icons'

export default function Navbar() {
  const { totalItemsInCart, modal } = useSelector(store => store.cart)

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <p>{modal}</p>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">{totalItemsInCart}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
