// part #3


// Which of these variables would you change to let or const ?


// const name = "James";
// const employeeId = 25;
// const eyes = "Blue";
// let age = 25
// const position = "Developer";
// let salary = 2500;
// const knowdlege = ['Javascript', 'PHP', 'REACT', 'Angular 4'];
// let married = false


// Part #4
const cupcake = document.querySelector('.cupcake');
const container = document.querySelector('.orders');

const cupcakes = [
    { id: 1, flavor: 'Mint', image: 'capcake(1).jpeg' },
    { id: 2, flavor: 'Chicky', image: 'cupcake(2).jpeg' },
    { id: 3, flavor: 'Sprinkle Vanilla', image: 'cupcake(3).jpeg' },
    { id: 4, flavor: 'Unicorn Vanilla', image: 'cupcake(4).jpeg' },
    { id: 5, flavor: 'Strawberry', image: 'cupcake(5).jpeg' }
];

let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
const discountID = 2;
const discountAmount = 3;
let message;

cupcake.addEventListener("click", function () {
    // Select a random cupcake
    randomCupcake = Math.floor(Math.random() * cupcakes.length);

    // Increment the order number, we get a different order with each cupcake.
    orderNumber += 1;

    // Depending on the "discountID" variable, this cupcake is on sale or not.
    finalAmount = discountID == cupcakes[randomCupcake].id ? (baseAmount - discountAmount) : baseAmount;

    // Create the message
    message = '<div class="order-message border  border-success border-3 bg-transparent mt-3 p-1 lead  col-lg-7  col-md-12 col-sm-12 fs-6">';
    message += '<img class="cupcake-image  w-25" src="' + cupcakes[randomCupcake].image + '" alt="' + cupcakes[randomCupcake].flavor + ' Cupcake">';
    message += '- You won a ' + cupcakes[randomCupcake].flavor + ' cupcake for ' + finalAmount + '$. Your order # is ' + orderNumber;
    message += '</div>';

    container.insertAdjacentHTML('beforeend', message);
});

;
