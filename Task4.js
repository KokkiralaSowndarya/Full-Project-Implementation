let input = document.querySelector('.entered-list');
let addBtn= document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');
input.addEventListener('keyup',()=>{
    if(input.value.trim()!==0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})
addBtn.addEventListener('click',()=>{
     if(input.value.trim()!==0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML=`
        <p>task4 completed</p>
        <div class="item-btn">
         <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value='';
     }else{
     alert('Please enter a task')
    }
})
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-pen-to-square')
    ){
e.target.parentElement.parentElement.classList.toggle('completed');
}
}
)
const products = [
      {
        name: "Mars High Coverage Liquid",
        price: "$24.99",
        desc: "Hydrating cream with natural rose extracts.",
        image: "makeup11.jpg"
      },
      {
        name: "Organic Lip Balm",
        price: "$9.99",
        desc: "Softens lips with shea butter and vitamin E.",
        image: "makeup10.jpg"
      },
      {
        name: "Glow Serum",
        price: "$29.99",
        desc: "Brightens and evens out skin tone.",
        image: "makeup9.jpg"
      },
      {
        name: "Aloe Vera Gel",
        price: "$12.99",
        desc: "Soothes and hydrates irritated skin.",
        image: "makeup14.jpg"
      },
      {
        name: "Elle 18 Lasting Glow Compact",
        price: "$19.99",
        desc: "Cleanses pores and removes blackheads.",
        image: "makeup6.jpg"
      },
      {
        name: "Insight Cosmetics Lip & cheek Tint",
        price: "$19.99",
        desc: "Cleanses pores and removes blackheads.",
        image: "makeup3.jpg"
      }
    ];

    const productList = document.getElementById('productList');

    function displayProducts(filtered) {
      productList.innerHTML = '';
      filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-name">${product.name}</div>
          <div class="product-price">${product.price}</div>
          <div class="product-desc">${product.desc}</div>
        `;
        productList.appendChild(card);
      });
    }

    // Initial load
    displayProducts(products);

    // Filter on search
    document.getElementById('search').addEventListener('input', (e) => {
      const keyword = e.target.value.toLowerCase();
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
      );
      displayProducts(filtered);
    });
  function showAlert(){
alert("Thank you for exploring this!");
    }