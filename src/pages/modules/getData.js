const getData = () => {
  return fetch('https://zone-c8511-default-rtdb.firebaseio.com/goods.json')

    .then(response => response.json())

}

export default getData;