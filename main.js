
const onLoad = () => {
  showFirstCard();
}

const showFirstCard = () => {
  document.getElementById('card-1').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", onLoad);
