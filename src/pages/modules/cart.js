import renderCart from "./renderCart";
import postData from "./postData";


export const cart = () => {
  const cartBtn = document.querySelector('#cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const goodsWrapper = document.querySelector('.goods');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartSendBtn = document.querySelector('.cart-confirm');
  const cartCounter = document.querySelector('.counter')


  // открытие корзины
  const openCart = () => {
    cartModal.style.display = 'flex';
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    renderCart(cart)
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price
    }, 0)


  }
  // закрытие корзины
  const closeCart = () => {
    cartModal.style.display = 'none';
  }

  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);

  // добавление товара в корзину
  goodsWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      const card = e.target.closest('.card');
      const key = card.dataset.key;

      const goods = JSON.parse(localStorage.getItem('goods'));
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];

      const goodItem = goods.find((item) => {
        return item.id === +key
      })

      cart.push(goodItem)
      localStorage.setItem('cart', JSON.stringify(cart))

      cartCounter.textContent = cart.length;

    }
  })
  // удаление товара из корзины
  cartWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];

      cartCounter.textContent = cart.length - 1;

      const card = e.target.closest('.card');
      const key = card.dataset.key;

      const index = cart.findIndex((item) => {
        return item.id === +key;
      })

      cart.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(cart))

      renderCart(cart)
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price
      }, 0)
    }
  })
  // отправка данных о товаре из корзины
  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    postData(cart).then(() => {
      // удаление товара и очистка корзины после отправки данных
      localStorage.removeItem('cart');

      renderCart([]);
      cartTotal.textContent = 0;
    })
    cartCounter.textContent = 0;
  })
}