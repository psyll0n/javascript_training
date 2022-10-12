
var products = ["Cho Choo Chocolate", "Icy Mint", "Cake Better", "Bubble Gum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;

while (i > hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i]) + " contains bubble gum!";
    }
    i = i + 1;
}
