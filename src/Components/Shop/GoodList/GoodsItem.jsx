function GoodsItem(props) {
    const {
        id,
        name,
        price,
        icon,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img alt={name} src={
                    icon
                } />
            </div>
            <div className="card-content">
                <p>{name}</p>
            </div>
            <div className="card-action">
                <button className='btn' onClick={() => addToBasket({
                    id,
                    name,
                    price,
                })}>Купить</button>
                <span className='right'>{price} руб.</span>
            </div>
        </div>
    )
}

export { GoodsItem };