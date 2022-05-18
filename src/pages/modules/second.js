import getData from "./getData";

const second = () => {
  const cartBtn = document.querySelector('#cart');

  getData().then((data) => console.log(data))

}

export default second;