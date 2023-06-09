import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    const { total, id, name, client, company, items:itemsInitial } = getInvoice();
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [quantityValue, setQuantityValue] = useState(0);
    const[items, setItems] = useState(itemsInitial)

    return (
        <>

            <div className="container my-4">
                <div className="card">
                    <div className="card-header">Ejemplo Factura</div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row mt-4">
                            <div className="col-6">
                                <ClientView title="Datos del cliente" client={client} />

                            </div>
                            <div className="col-6">
                                <CompanyView title="Datos de la empresa" company={company} />

                            </div>
                        </div>

                        <ListItemView title="Productos de la factura" items={items} />
                        <TotalView total={total} />
                        <form action="" className="w-50" onSubmit={ event => {
                            event.preventDefault();

                            setItems([...items,{key: 4, product: productValue,price: priceValue,quantity: quantityValue}])
                        }}>
                            <input type="text" name="product" id="" placeholder="Producto" className="form-control m-3" onChange={event => {
                                console.log(event.target.value)
                                setProductValue(event.target.value);
                            }}/>
                            <input type="text" name="price" id="" placeholder="Precio" className="form-control m-3" onChange={event => {
                                console.log(event.target.value)
                                setPriceValue(event.target.value);
                            }}/>
                            <input type="text" name="quantity" id="" placeholder="Cantidad" className="form-control m-3" onChange={event => {
                                console.log(event.target.value)
                                setQuantityValue(event.target.value);
                            }}/>
                            <button type="submit" className="btn btn-primary ms-3">Crear Item</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}