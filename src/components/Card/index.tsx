import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
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
import { CarrinhoContext } from "../../context/carrinhocontext";
import { useContext } from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  buttonUrl: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  buttonUrl,
}) => {

  const { addItemCarrinho } = useContext(CarrinhoContext);

  function handleAddToCart() {
    const newItem = {
      img: imageUrl,
      title: title,
      price: price,
    };
    addItemCarrinho(newItem);
  }

  function handleBookmark() {
    addDoc(collection(db, "bookmarks"), {
      Produto: title,
      Descricao: description,
      Preco: price,
      bookmarkedAt: new Date(),
    })
      .then(() => {
        alert("Adicionado aos Favoritos!");
      })
      .catch((error) => {
        alert(`Erro ao favoritar: ${error}`);
      });
  }


  return (
    <CardContainer>
      <CardImage>
        <CardPhoto src={imageUrl} />
      </CardImage>
      <CardBody>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardPrice>${price} BRL</CardPrice>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <CardButton as="a" href={buttonUrl}>
            <ShoppingCartSimple /> Ver Produto
          </CardButton>
          <CardButtonFavorito onClick={handleBookmark}>
            <Heart weight="fill" />
          </CardButtonFavorito>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
