import {
    CardContainer,
    CardPhoto,
    CardBody,
    CardTitle,
    CardPrice,
    CardDescription,
    CardImage,

    CardButtonRemove,
  } from "../styled-components/Card/styles";
  
  import { Heart, ShoppingCartSimple } from "@phosphor-icons/react";
  import { Trash } from '@phosphor-icons/react';
  import { CarrinhoContext } from '../../context/carrinhocontext.tsx';
  import { useContext } from 'react';
  //import './styles.css';
  
  interface CarrinhoItem {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
  }
  
  export function Cart() {
    const { carrinhoItem, removeItemDoCarrinho, totalItems } = useContext(CarrinhoContext);
  
    function handleRemoveItem(item: CarrinhoItem) {
      removeItemDoCarrinho(item);
    }
  
    return (
      <>
        <div className="itemsCarrinho">
          {carrinhoItem.map((item, index) => (
            <CardContainer key={index}>
              <CardPhoto src={item.img} />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardPrice>$ {item.price}</CardPrice>
              </CardBody>
              <CardButtonRemove onClick={() => handleRemoveItem(item)}>
                <Trash size={16} weight="fill" />
              </CardButtonRemove>
            </CardContainer>
          ))}
        </div>
        <h6 className='totalItems'>Total de Itens: {totalItems}</h6>
      </>
    );
  }
  
  export default Cart;