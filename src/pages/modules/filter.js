import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";
import { hotSaleFilter } from "./filters";

const filter = () => {
  const minInput = document.querySelector('#min');
  const maxInput = document.querySelector('#max');
  const ckeckboxInput = document.querySelector('#discount-checkbox');
  const checkboxSpan = document.querySelector('.filter-check_checkmark');

  minInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, ckeckboxInput.checked), minInput.value, maxInput.value))
    })
  })

  maxInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, ckeckboxInput.checked), minInput.value, maxInput.value))
    })
  })

  ckeckboxInput.addEventListener('change', () => {
    if (ckeckboxInput.checked) {
      checkboxSpan.classList.add('checked')
    } else {
      checkboxSpan.classList.remove('checked')
    }
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, ckeckboxInput.checked), minInput.value, maxInput.value))
    })
  })

};

export default filter;