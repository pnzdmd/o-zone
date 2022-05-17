export const cart = () => {
  const cartBtn = document.querySelector('#cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');

  // открытие корзины
  const openCart = () => {
    cartModal.style.display = 'flex';
  }
  // закрытие корзины
  const closeCart = () => {
    cartModal.style.display = 'none';
  }

  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
}