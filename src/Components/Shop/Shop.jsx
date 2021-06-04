import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import { Preolader } from '../Preolader';
import { GoodList } from './GoodList/GoodList'
import { Cart } from './GoodList/Cart';
import { BasketList } from './GoodList/BasketList'
import { Alert } from '../Alert'

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOreder] = useState([]);
    const [isBasketShow, setisBasketShow] = useState(false);
    const [alertName, setalertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOreder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOreder(newOrder);
        }
        setalertName(item.name);
    };

    const handleBasketShow = () => {
        setisBasketShow(!isBasketShow);
    };
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOreder(newOrder);
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        });
        setOreder(newOrder);
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return el;
            }
        });
        setOreder(newOrder);
    }

    const closeAlert = () => {
        setalertName('');
    }


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            },
        })
            .then((response) => response.json())
            .then(data => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {
                loading ? <Preolader /> : <GoodList goods={goods} addToBasket={addToBasket} />
            }
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    )
}

export { Shop };