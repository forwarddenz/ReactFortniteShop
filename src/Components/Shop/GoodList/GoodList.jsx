import { GoodsItem } from './GoodsItem'

function GoodList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not Found</h3>
    }
    return (
        <div className="goods">
            {goods.map((item) => {
                return <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
            })}
        </div>
    )
}

export { GoodList };