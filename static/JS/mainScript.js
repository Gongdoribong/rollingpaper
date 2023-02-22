(async function(food_table){


    let res = await fetch('/api/table_maker');
    if(res.ok){
        let foods = await res.json();
        for(let food of foods){
            food_table.appendChild(createImage(food.name, food.food_name));
        }
    }

    function createImage(nickname, food_name){
        let div = document.createElement('div');
        div.classList.add('food-box')
        div.innerHTML = `<div class="nickname"><span>${nickname}</span></div><img class="food-item" src="/image/food/${food_name}.png"/>`

        return div;
    }
})(document.querySelector('div.food-table'));