import { Package, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { UserContext } from "../../context/usercontext";

export function Header() {
  const { email, nome } = useContext(UserContext);
  return (
    <header>
      <Link to="/" className="logo">
        <Package weight="fill" className="icon" />
        <span>Produtos</span>
      </Link>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/produtos" className="link">Produtos</Link>
        <Link to="/favoritos" className="link">Favoritos</Link>
      </nav>
      <div className="user-cart-info">
        <div className="user-info">
          <p><strong>Logado como: {nome}</strong></p>
          <p>{email}</p>
          <Link to="/login" className="login-button">Login</Link>
        </div>
        <Link to="/carrinho" className="cart-button">
          <ShoppingCart weight="bold" />
        </Link>
      </div>
    </header>
  );
}
