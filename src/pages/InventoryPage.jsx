import { useState, useEffect } from "react";

function InventoryPage() {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const stockGuardado = localStorage.getItem('stock_actual');
        if (stockGuardado) {
            setQuantity(parseInt(stockGuardado));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('stock_actual', quantity);
    }, [quantity]);

    const agregar = () => {
        if(quantity > 0)
            setQuantity(quantity + 1);
    };

    const vender = () => {
        if(quantity > 0)
        {
            setQuantity(quantity - 1);
        }
    };

    return(
        <div>
            <h1>
                Stock de zapatos
            </h1>
            <div className="counter-display">
                {quantity}
            </div>
            <button onClick={agregar}>Agregar(+)</button>
            <button onClick={vender}>Venta(-)</button>
        </div>
    );
}

export default InventoryPage;