var data = {
    "breakFast": [
        {
            "name": "Bread",
            "img": "img/menu/breakFast/bread_jam.jpg",
            "price": "50"
        },
        {
            "name": "Dosa",
            "img": "img/menu/breakFast/dosa.jpg",
            "price": "150"
        },
        {
            "name": "Sandwich",
            "img": "img/menu/breakFast/sandwich.jpg",
            "price": "20"
        },
        {
            "name": "Upma",
            "img": "img/menu/breakFast/upma.jpg",
            "price": "60"
        }
    ],
    "lunch": [
        {
            "name": "Biryani",
            "img": "img/menu/lunch/biriyani.jpg",
            "price": "150"
        },
        {
            "name": "Fried Rice",
            "img": "img/menu/lunch/fried_rice.jpg",
            "price": "80"
        },
        {
            "name": "Pulav",
            "img": "img/menu/lunch/pulav.jpg",
            "price": "50"
        },
        {
            "name": "Chilli Chicken",
            "img": "img/menu/lunch/chilli_chicken.jpg",
            "price": "150"
        }
    ],
    "beverages": [
        {
            "name": "Coffee",
            "img": "img/menu/beverages/coffee.jpg",
            "price": "20"
        },
        {
            "name": "Juice",
            "img": "img/menu/beverages/juice.jpg",
            "price": "50"
        },
        {
            "name": "Oreo Shake",
            "img": "img/menu/beverages/oreo_shake.jpg",
            "price": "100"
        },
        {
            "name": "Tea",
            "img": "img/menu/beverages/tea.jpg",
            "price": "20"
        }
    ],
    "desserts": [
        {
            "name": "brownie",
            "img": "img/menu/desserts/brownie.jpg",
            "price": "150"
        },
        {
            "name": "Chocolate",
            "img": "img/menu/desserts/chocolate.jpg",
            "price": "100"
        },
        {
            "name": "Ice Cream",
            "img": "img/menu/desserts/ice_cream.jpg",
            "price": "50"
        },
        {
            "name": "Pudding",
            "img": "img/menu/desserts/pudding.jpg",
            "price": "50"
        }
    ]
}

window.onload = () => {
    console.log("loaded");

    var breakFastDiv = document.getElementById("breakfast");
    var lunchDiv = document.getElementById("lunch");
    var beveragesDiv = document.getElementById("Bevereges");
    var dessertsDiv = document.getElementById("desserts");

    var breakFast = data.breakFast;
    var lunch = data.lunch;
    var beverages = data.beverages;
    var desserts = data.desserts;

    breakFast.forEach(function (item, index) {
        var div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = "<img src = '" + item.img + "' class = 'menuItemImg' alt = 'beverages'>\
        <div style=\"display: flex;\" class=\"menuItemRight\">\
            <h4 style=\"padding-left: 2vw; margin: 0; margin-bottom: 1vw;\">" + item.name + "</h4>\
            <h4 style=\"margin: 0; padding-left: 2vw\">₹" + item.price + "</h4>\
            <button class='menu-item-btn' onClick=addProduct(" + JSON.stringify(item) + ")>Add To Cart</button>\
        </div>";
        breakFastDiv.appendChild(div);
    });

    lunch.forEach(function (item) {
        var div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = "<img src = '" + item.img + "' class = 'menuItemImg' alt = 'beverages'>\
        <div style=\"display: flex;\" class=\"menuItemRight\">\
            <h4 style=\"padding-left: 2vw; margin: 0; margin-bottom: 1vw;\">" + item.name + "</h4>\
            <h4 style=\"margin: 0; padding-left: 2vw\">₹" + item.price + "</h4>\
            <button class='menu-item-btn' onClick=addProduct(" + JSON.stringify(item) + ")>Add To Cart</button>\
        </div>";
        lunchDiv.appendChild(div);
    });

    beverages.forEach(function (item) {
        var div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = "<img src = '" + item.img + "' class = 'menuItemImg' alt = 'beverages'>\
        <div style=\"display: flex;\" class=\"menuItemRight\">\
            <h4 style=\"padding-left: 2vw; margin: 0; margin-bottom: 1vw;\">" + item.name + "</h4>\
            <h4 style=\"margin: 0; padding-left: 2vw\">₹" + item.price + "</h4>\
            <button class='menu-item-btn' onClick=addProduct(" + JSON.stringify(item) + ")>Add To Cart</button>\
        </div>";
        beveragesDiv.appendChild(div);
    });

    desserts.forEach(function (item) {
        var div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = "<img src = '" + item.img + "' class = 'menuItemImg' alt = 'beverages'>\
        <div style=\"display: flex;\" class=\"menuItemRight\">\
            <h4 style=\"padding-left: 2vw; margin: 0; margin-bottom: 1vw;\">" + item.name + "</h4>\
            <h4 style=\"margin: 0; padding-left: 2vw\">₹" + item.price + "</h4>\
            <button class='menu-item-btn' onClick=addProduct(" + JSON.stringify(item) + ")>Add To Cart</button>\
        </div>";
        dessertsDiv.appendChild(div);
    });

    function addProduct(index) {
        console.log(index);
    }
}