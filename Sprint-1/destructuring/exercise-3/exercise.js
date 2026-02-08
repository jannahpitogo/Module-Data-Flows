let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

let bill = `QTY  ITEM                TOTAL\n`;
let sum = 0;

function logBill(orderList) {
  orderList.forEach(({ itemName, quantity, unitPricePence }) => {
    bill +=
      `${String(quantity).padEnd(5)}` +
      `${itemName.padEnd(20)}` +
      `${unitPricePence}\n`;
  });

  orderList.forEach(({ unitPricePence }) => {
    sum += unitPricePence;
  });

  bill += `\nTotal: ${sum}`;
  console.log(bill);
}
logBill(order);
