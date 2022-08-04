import Asus from "./Laptops/Asus";
import MacBook from "./Laptops/MacBook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);

let macbook = new MacBook(2017, false, false);
macbook.a();
macbook.b();
console.log(macbook);