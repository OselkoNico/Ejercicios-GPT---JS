const pedidos = [
  { id: 1, cliente: "Ana", total: 120, pagado: true },
  { id: 2, cliente: "Luis", total: 45, pagado: false },
  { id: 3, cliente: "Marta", total: 300, pagado: true },
  { id: 4, cliente: "Pedro", total: 60, pagado: true },
  { id: 5, cliente: "Lucía", total: 80, pagado: false }
];

function procesarPedido(pedido){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(pedido.pagado === true){
                resolve(`Pedido #${pedido.id} de cliente procesado. Total: $${pedido.total}.`);
            }else {
                reject(`Pedido #${pedido.id} de cliente rechazado: pago pendiente.`)
            }
            
        }, 1000);
    });
};

const filtrarPedido = pedidos.filter(a=>a.total>=60);

const pedidosTransformados = filtrarPedido.map(pedido=>procesarPedido(pedido));

pedidosTransformados.forEach(p=>
    p
    .then (mensaje => console.log(mensaje))
    .catch (error => console.error(error)));