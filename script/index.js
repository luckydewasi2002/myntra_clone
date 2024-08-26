let bagitems=[];
onload();

function onload(){
 let bagitemsstr=localStorage.getItem('bagitems');
 bagitems=bagitemsstr ? JSON.parse(bagitemsstr) : [];
   displayitemsonhomepage();
  displaybagicon();
}

function addtobag(itemId){
    bagitems.push(itemId);
    localStorage.setItem('bagitems',JSON.stringify(bagitems))
    displaybagicon();

}
function displaybagicon(){
  let bagitemcountelement = document.querySelector('.bag-items-count');
 if(bagitems.length>0){
  bagitemcountelement.style.visibility="visible"
  bagitemcountelement.innerText= bagitems.length
}else{
  bagitemcountelement.style.visibility="hidden"
}
}

function displayitemsonhomepage(){
  const itemsContainerElement = document.querySelector('.items-container');
  console.log(items)
  if(!itemsContainerElement){
    return;
  }
  let innerHTML='';
  items.forEach(item=>{
      innerHTML+=
       `<div class="item-container">
       <img class="item-image" src="${item.image}" alt="item-image">
       <div class="rating">
           ${item.rating.stars}⭐| ${item.rating.count}
       </div>
       <div class="company-name">${item.company}</div>
       <div class="item-name">${item.item_name}</div>
         <div class="price">
           <span class="current-price">₹ ${item.original_price}</span>
          <span class="original-price">₹ ${item.current_price}</span>
          <span class="discount"> ${item.discount_percentage}% OFF</span>
       
       </div>
       <button class="btn-add-bag" onclick="addtobag(${item.id})">Add to Bag</button>
   </div>`
  
  })
  
  itemsContainerElement.innerHTML=innerHTML;
}







           