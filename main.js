// Câu1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu2
const products = [
  new Product(1, "iPhone 15", 999, 10, "Electronics", true),
  new Product(2, "Samsung Galaxy S24", 899, 5, "Electronics", true),
  new Product(3, "Leather Backpack", 49.99, 15, "Accessories", true),
  new Product(4, "Wireless Headphones", 150, 0, "Electronics", false),
  new Product(5, "Laptop Stand", 35, 20, "Accessories", true),
  new Product(6, "USB-C Cable", 15, 50, "Accessories", false),
];

console.log("====================================");
console.log("         DANH SÁCH SẢN PHẨM         ");
console.log("====================================\n");

// Câu3
console.log("--- Danh sách Name và Price ---");
const nameAndPrice = products.map(product => ({
  name: product.name,
  price: product.price
}));
console.log(nameAndPrice);
console.log("");

// Câu4
console.log("--- Sản phẩm còn hàng (quantity > 0) ---");
const productsInStock = products.filter(product => product.quantity > 0);
console.log("Sản phẩm còn hàng:");
productsInStock.forEach(p => console.log(`  - ${p.name}: ${p.quantity} cái`));
console.log("");

// Câu5
console.log("--- Có sản phẩm giá trên $30 không? ---");
const hasExpensiveProduct = products.some(product => product.price > 30);
console.log(`Kết quả: ${hasExpensiveProduct ? "Có" : "Không"}`);
if (hasExpensiveProduct) {
  const expensive = products.filter(p => p.price > 30);
  console.log("Các sản phẩm giá trên $30:");
  expensive.forEach(p => console.log(`  - ${p.name}: $${p.price}`));
}
console.log("");

// Câu6
console.log("--- Tất cả Accessories có đang bán (isAvailable = true)? ---");
const accessoriesProducts = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable === true);
console.log(`Kết quả: ${allAccessoriesAvailable ? "Có" : "Không"}`);
console.log("Chi tiết sản phẩm Accessories:");
accessoriesProducts.forEach(p => console.log(`  - ${p.name}: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`));
console.log("");

// Câu7
console.log("--- Tổng giá trị kho hàng ---");
const totalInventoryValue = products.reduce((sum, product) => {
  return sum + (product.price * product.quantity);
}, 0);
console.log(`Tổng giá trị kho: $${totalInventoryValue.toFixed(2)}`);
console.log("Chi tiết:");
products.forEach(p => {
  const value = p.price * p.quantity;
  console.log(`  - ${p.name}: $${p.price} × ${p.quantity} = $${value}`);
});
console.log("");

// Câu8
console.log("--- Duyệt mảng dùng for...of ---");
console.log("Tên sản phẩm | Danh mục | Trạng thái");
console.log("-------------------------------------");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} | ${product.category} | ${status}`);
}
console.log("");

// Câu9
console.log("--- Duyệt thuộc tính dùng for...in ---");
console.log("Thuộc tính của sản phẩm đầu tiên (iPhone 15):");
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`  ${key}: ${firstProduct[key]}`);
}
console.log("");

// Câu10
console.log("--- Sản phẩm đang bán và còn hàng ---");
const availableProducts = products
  .filter(product => product.isAvailable === true && product.quantity > 0)
  .map(product => product.name);
console.log("Danh sách:");
availableProducts.forEach(name => console.log(`  - ${name}`));
console.log(`Tổng cộng: ${availableProducts.length} sản phẩm`);
