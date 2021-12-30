const product = {
    plainBurger: {
        name: `Гамубгер простой`,
        price: 10000,
        kcall: 200,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: `Гамубгер FRESH`,
        price: 20500,
        kcall: 300,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: `FRESH COMBO`,
        price: 31900,
        kcall: 400,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}

const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 500,
        kcall: 5
    },
    cheese: {
        name: `Сыр`,
        price: 1000,
        kcall: 20
    },
};

const btnPlusOrMinus = document.querySelectorAll(`.main__product-btn`);

btnPlusOrMinus.forEach(btn => {
    btn.addEventListener(`click`, function(event) {
        event.preventDefault();
        plusOrMinus(this);
    })
})


function plusOrMinus(element) {
    /* 
    closest() - метод объекта. Который подключается и получает своего родителя
    getAttribute() - Получает значение указанного атрибута с HTML
    */

    const parent = element.closest(`.main__product`),
        parentId = parent.getAttribute(`id`),
        productAmount = parent.querySelector(`.main__product-num`),
        price = parent.querySelector(`.main__product-price span`),
        kcall = parent.querySelector(`.main__product-kcall span`),
        symbol = element.getAttribute(`data-symbol`);

    if(symbol == `+`){
        product[parentId].amount++;
    }else if(symbol == `-` && product[parentId].amount > 0){
        product[parentId].amount--;
    }
    productAmount.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Sum;
    kcall.innerHTML = product[parentId].Kcall;
}


const lvlTimer = document.querySelector(`.header__timer-extra`)

let timeId,
    item = 1000;

function lvl() {

    if(lvlTimer.innerHTML < 100){
        lvlTimer.innerHTML++
        if(lvlTimer.innerHTML > 50){
            item += 100;
        }
    }else if(lvlTimer.innerHTML == 100){
        clearTimeout(timeOut);
    }

    timeId = setTimeout(() => lvl(), item);
}

lvl();

