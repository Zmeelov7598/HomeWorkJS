const temperatureCels = +prompt("Введите температуру в градусах Цельсия: ");
const temperatureFaringate = (9 / 5) * temperatureCels + 32;
console.log(
  `Температура в Цельсиях: ${temperatureCels}, Температура в Фаренгейтах ${temperatureFaringate}`
);

const name = "Sergei";
const admin = name;
console.log(admin);
