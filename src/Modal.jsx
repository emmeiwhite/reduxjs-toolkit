import { useSelector } from 'react-redux'

export default function Modal() {
  const { isOpen } = useSelector(store => store.modal)
  return <div>{isOpen ? 'Modal is open' : 'Modal is not open'}</div>
}
