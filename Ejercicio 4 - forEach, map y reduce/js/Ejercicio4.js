//const productos = [
//  { nombre: "Laptop", precio: 1200, stock: 5, categoria: "tecnologia" },
//  { nombre: "Mouse", precio: 25, stock: 0, categoria: "tecnologia" },
 // { nombre: "Cuaderno", precio: 5, stock: 50, categoria: "papeleria" },
 // { nombre: "Auriculares", precio: 80, stock: 10, categoria: "tecnologia" },
 // { nombre: "Lapicera", precio: 2, stock: 0, categoria: "papeleria" }
//];

//const stoMayor = productos.filter(s=> (s.stock>0));
//console.log(stoMayor);

//const transform = stoMayor.map(t=>
 //   console.log(`${t.nombre} - $${t.precio}`));

//const valorTotal = productos.reduce((total, producto) => {
//  return total + (producto.precio * producto.stock);
//}, 0);

//console.log(valorTotal);

// También podría ser así:
// const valorTotal = productos.reduce(
// (total, p) => total + p.precio * p.stock,
// 0
// );

// 🔹 Definición de la función de alto nivel
const procesarProductos = (productos, fnFiltrado, fnTransformacion) =>
  productos.filter(fnFiltrado).map(fnTransformacion);

// 🔹 Array de productos de ejemplo
const productos = [
  { nombre: "Laptop", precio: 1200, stock: 5, categoria: "tecnologia" },
  { nombre: "Mouse", precio: 25, stock: 0, categoria: "tecnologia" },
  { nombre: "Cuaderno", precio: 5, stock: 50, categoria: "papeleria" },
  { nombre: "Auriculares", precio: 80, stock: 10, categoria: "tecnologia" },
  { nombre: "Lapicera", precio: 2, stock: 0, categoria: "papeleria" }
];

// 🔹 Uso de la función con callbacks
const resultado = procesarProductos(
  productos,
  p => p.stock > 0,                       // Función de filtrado
  p => `${p.nombre} - $${p.precio}`       // Función de transformación
);

// 🔹 Mostrar resultado
console.log(resultado);