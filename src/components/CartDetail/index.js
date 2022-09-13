import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartDetail = () => {
  const { cart, removeFromCart, removeAll, calcTotal } = useContext(CartContext);

  return (
    <div className='container mx-auto mt-10'>
      <div className='flex shadow-md my-10'>
        <div className='w-3/4 bg-white px-10 py-10'>
          <div className='flex justify-between border-b pb-8'>
            <h1 className='font-semibold text-2xl'>Carrito de Compras</h1>
            <h2 className='font-semibold text-2xl'>{cart.length} Libros</h2>
          </div>
          <div className='flex mt-10 mb-5'>
            <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
              Detalle de productos
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Cantidad
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Precio
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Total
            </h3>
          </div>
          {cart.length == 0 && "No hay libros en el carrito"}
          {cart.length > 0 &&
            cart.map((item) => (
              <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                <div className='flex w-2/5'>
                  <div className='w-20'>
                    <img className='h-24' src={item.pictureUrl} alt='algo' />
                  </div>
                  <div className='flex flex-col justify-between ml-4 flex-grow'>
                    <span className='font-bold text-sm'>{item.title}</span>
                    <span className='text-red-500 text-xs'></span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='font-semibold hover:text-red-500 text-gray-500 text-xs'
                    >
                      Remover
                    </button>
                  </div>
                </div>
                <div className='flex justify-center w-1/5'>
                  <input
                    className='mx-2 border text-center w-8'
                    type='text'
                    value={item.count}
                    readOnly
                  />
                </div>
                <span className='text-center w-1/5 font-semibold text-sm'>
                  ${item.price}
                </span>
                <span className='text-center w-1/5 font-semibold text-sm'>
                  ${parseInt(item.price) * parseInt(item.count)}
                </span>
              </div>
            ))}
          <Link
            to='/'
            className='flex font-semibold text-indigo-600 text-sm mt-10'
          >
            <svg
              className='fill-current mr-2 text-indigo-600 w-4'
              viewBox='0 0 448 512'
            >
              <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
            </svg>
            Continuar comprando
          </Link>
          <button onClick={removeAll}  className='flex font-semibold text-indigo-600 text-sm mt-10'>
            Remover todos
          </button>
        </div>
        <div id='summary' className='w-1/4 px-8 py-10'>
          <h1 className='font-semibold text-2xl border-b pb-8'>
            Resumen de Compra
          </h1>
          <div className='mt-8'>
            <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
              <span>Costo total</span>
              <span>$
              {cart.length > 0 && cart.reduce((total,item) => (
                total + parseInt(item.price) * parseInt(item.count)
              ), 0)
              }
              </span>
            </div>
            <Link to={`/Checkout`}>
            <button
              className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'
            >
              Finalizar Compra
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;