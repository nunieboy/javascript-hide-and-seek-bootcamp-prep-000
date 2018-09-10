
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div.target')
}



function deepestChild(){
  let divList = document.getElementById('grand-node');
  let nextNode = divList.children[0]

  while (nextNode){
  divList = nextNode
  nextNode = divList.children[0]
  }

  return divList
}


//function deepestChild(){
//  let divList = document.getElementById('grand-node')
  //while (divList.chilren[0]){
  //  div
  //let nextNode = divList[i]
  //}
  //
  //return nextNode
//}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + parseInt(n)).toString()
  }
}
