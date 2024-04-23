import {
    CardContainer,
    CardImage,
    CardPhoto,
    CardBody,
    CardHeader,
    CardTitle,
    CardPrice,
    CardDescription,
    CardFooter,
    CardButton,
    CardButtonFavorito,
  } from "../styled-components/Card/styles";
  
  import { Heart, ShoppingCartSimple } from "@phosphor-icons/react";
  
  import { Trash } from '@phosphor-icons/react';
  import { CarrinhoContext } from '../../context/carrinhocontext.tsx';
  import { useContext } from 'react';
  import './styles.css';
  
  interface CarrinhoItem {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
  }
  
  export function Cart() {
    const { CarrinhoItem, removeItemCart, totalItems } = useContext(CartContext);
  
    function handleRemoveItem(item: CartItem) {
      removeItemCart(item);
    }
  
    return (
      <>
        <div className="itemsCarrinho">
          {cartItems.map((item, index) => (
            <CartContainer key={index}>
              <CartImage src={item.img} />
              <CartBody>
                <CartTitle>{item.title}</CartTitle>
                <CartPrice>$ {item.price}</CartPrice>
              </CartBody>
              <CartButtonRemove onClick={() => handleRemoveItem(item)}>
                <Trash size={16} weight="fill" />
              </CartButtonRemove>
            </CartContainer>
          ))}
        </div>
        <h6 className='totalItems'>Total de Itens: {totalItems}</h6>
      </>
    );
  }
  
  export default Cart;