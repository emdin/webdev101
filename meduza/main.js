
const onLoad = () => {
  showFirstCard();
  attachClicksToList();
}

const showFirstCard = () => {
  document.getElementById('card-1').style.display = 'block';
}

const attachClicksToList = () => {
  const nodeList = document.getElementById('topicsList').children; // children лучше, чем nodeList, потому что не приносят TextNodes, а только тэги
  const nodeListArray = Array.from(nodeList); //  Превращаем HTMLCollection в массив, чтобы использовать forEach

  nodeListArray.forEach((item, i) => {
    item.addEventListener('click', clickOnTopic)
  });
}

const clickOnTopic = (event) => {
  hideAllCards();
  const number = event.target.getAttribute('number');
  const cardId = `card-${number}`;
  document.getElementById(cardId).style.display = 'block';
}

const hideAllCards = () => {

  const nodeList = document.getElementById('cardsList').children;
  const nodeListArray = Array.from(nodeList);

  nodeListArray.forEach((item) => {
    item.style.display = 'none';
  });

}

document.addEventListener("DOMContentLoaded", onLoad);
