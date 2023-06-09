import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types'


export const ListItemView = ({title, items}) => {
    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>

                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) => {
                        return (
                            <RowItemView key={id} product={product} price={price} quantity={quantity}/>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

ListItemView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}