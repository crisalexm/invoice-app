import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { invoice } from "./data/invoice";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial={
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0
    },
    items: []
}

export const InvoiceApp = () => {
    const [activeForm, setActiveForm] = useState(false);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [counter, setCounter] = useState(4);



    const { id, name, client, company } = invoice;



    useEffect( () => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data)
        setItems(data.items)
    }, []);

    useEffect(() => {
        setTotal(calculateTotal(items));
    },[items] );


    

    const handlerAddItemsSubmit = ({product, price, quantity}) => {


        setItems([...items,
        {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(), 10)
        }
        ]);
        setCounter(counter + 1)
    }

    const onActiveForm = () =>  {
      setActiveForm(!activeForm)  
    }

    const handlerDeleteItem = (id) => {
        setItems(items.filter( item => item.id != id))
    }


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

                        <ListItemView title="Productos de la factura" items={items} handlerDeleteItem = { id => handlerDeleteItem (id)}/>
                        <TotalView total={total} />
                        <button className="btn btn-outline-secondary" onClick={onActiveForm}>
                            {!activeForm ? 'Agregar Item' :'Ocultar Form'}
                        </button>
                        
                        {!activeForm ? '' : <FormItemsView handler = {(newItem) => handlerAddItemsSubmit(newItem)}/>}
                        
                    </div>
                </div>
            </div>

        </>
    )
}