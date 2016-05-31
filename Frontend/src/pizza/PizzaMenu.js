var Templates = require('../Templates');
var PizzaCart = require('./PizzaCart');
var Pizza_List = require('../Pizza_List');

//HTML едемент куди будуть додаватися піци
var $pizza_list = $("#pizza_list");



    //Онволення однієї піци
    function showPizzaList(list) {
        //Очищаємо старі піци в кошику
        $pizza_list.html("");

        //Онволення однієї піци
        function showOnePizza(pizza) {
            var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

            var $node = $(html_code);
            //var need_to_pay=0;

            $node.find(".buy-big").click(function(){
                console.log("buy big pressed");
                PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
            });
            $node.find(".buy-small").click(function(){
                console.log("buy small pressed");
                PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
            });

            $pizza_list.append($node);
        }

        list.forEach(showOnePizza);
    }

function filterPizza(filter) {
    //Масив куди потраплять піци які треба показати
    var pizza_shown = [];
    var total_in_type=0;
            if (filter === "all")pizza_shown = Pizza_List;
            else if (filter === "vega") {
                Pizza_List.forEach(function (pizza) {
                    if (pizza.type === 'Вега') {
                        pizza_shown.push(pizza);
                        total_in_type++;
                    }
                });
            }
            else if (filter === "meat") {
                Pizza_List.forEach(function (pizza) {
                    if (pizza.type === 'М’ясна піца'){
                        pizza_shown.push(pizza);
                        total_in_type++;
                    }
                });
            }
            else if (filter === "pineapple") {
                Pizza_List.forEach(function (pizza) {
                    if (pizza.content.pineapple){
                        pizza_shown.push(pizza);
                        total_in_type++;
                    }
                });
            }

            else if (filter === "mushroom") {
                Pizza_List.forEach(function (pizza) {
                    if (pizza.content.mushroom){
                        pizza_shown.push(pizza);
                        total_in_type++;
                    }
                });
            }

            else if (filter === "ocean") {
                Pizza_List.forEach(function (pizza) {
                    if (pizza.content.ocean){
                        pizza_shown.push(pizza);
                        total_in_type++;
                    }
                });
            }
    showPizzaList(pizza_shown);

}
$("li").click(function() {
    $("li").removeClass("active");
    $(this).addClass("active");
});

$("#all").click(function(){
    console.log("all");
    $(".allPizzas").html("Усі піцци " + '<div class="orangeBox badge btn-circle">'  +8 +'</div>');
    
    filterPizza('all');
});

$("#meat").click(function(){
    console.log("meat");
   $(".allPizzas").html("М'ясні піци "  + '<div class="orangeBox badge btn-circle">' +5 +'</div>');
    filterPizza("meat");
});


$("#pineapple").click(function(){
    console.log("pineapple");
    $(".allPizzas").html('Піци з ананасами '  + '<div class="orangeBox badge btn-circle">' +3 +'</div>');
    filterPizza('pineapple');
});


$("#mushroom").click(function(){
    $(".allPizzas").html('Піци з грибами ' + '<div class="orangeBox badge btn-circle">' + 3 +'</div>');
    filterPizza('mushroom');
});


$("#ocean").click(function(){
    $(".allPizzas").html('Піци з морепродуктами ' + '<div class="orangeBox badge btn-circle">' + 2 +'</div>');
    filterPizza('ocean');
});


$("#vega").click(function(){
    $(".allPizzas").html('Вегетаріанські піци ' + '<div class="orangeBox badge btn-circle">'+ 1  +'</div>');
    filterPizza('vega');
});




function initialiseMenu() {
    //Показуємо усі піци
    showPizzaList(Pizza_List)
}

exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;