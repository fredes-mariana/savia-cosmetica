import { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carritoSavia');

    try {
      return carritoGuardado
        ? JSON.parse(carritoGuardado)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('carritoSavia', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito(carritoActual => {
      const productoExistente = carritoActual.find(
        item => item.id === producto.id
      );

      if (productoExistente) {
        return carritoActual.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };

const aumentarCantidad = (id) => {
  setCarrito(carritoActual =>
    carritoActual.map(producto =>
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    )
  );
};

const disminuirCantidad = (id) => {
  setCarrito(carritoActual =>
    carritoActual.map(producto =>
      producto.id === id && producto.cantidad > 1
        ? { ...producto, cantidad: producto.cantidad - 1 }
        : producto
    )
  );
};

const eliminarProducto = (id) => {
  setCarrito(carritoActual =>
    carritoActual.filter(producto => producto.id !== id)
  );
};
const vaciarCarrito = () => {
  setCarrito([]);
};
  return (
    <CarritoContext.Provider
  value={{
    carrito,
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito
  }}
>
      {children}
    </CarritoContext.Provider>
  );
}