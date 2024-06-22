import { useContext } from 'react';
import { userStore } from '../contexts/userStore';

const CartHeader = () => {
    const {state,dispatch}=useContext(userStore);
  return (
    <span className="text-gray-600 font-bold">username:{state.username}</span>
  )
}

export default CartHeader