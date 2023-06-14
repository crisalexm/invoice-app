import PropTypes from 'prop-types'

export const RowItemView = ({id, product, quantity, price, handlerDeleteItem}) => {
    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td><button className='btn btn-danger' onClick={ () => handlerDeleteItem(id)}>Delete</button></td>
            </tr>
        </>
    );
};

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price : PropTypes.number.isRequired
}