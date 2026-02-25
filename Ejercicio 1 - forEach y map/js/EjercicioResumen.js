const pedidos = [
    { producto: "Laptop", precio: 1000},
    { producto: "Mouse", precio: 20},
    { producto: "Teclado", precio: 50}
];
const nombresProductos = pedidos.map(p=>p.producto);
console.log(nombresProductos);

const productosConIva = pedidos.map(i=>i.precio*1.21);
console.log(productosConIva);

const productos = pedidos.forEach(j => {
    console.log(`Producto: ${j.producto} - Precio: ${j.precio}€ (SIN IVA).`)
});
