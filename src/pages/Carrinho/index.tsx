import { CarrinhoContext, CarrinhoProvider } from '../../context/carrinhocontext'
import { Cart } from '../../components/Carrinho';
import { useContext } from 'react';


export function Carrinho() {
  return (
    <CarrinhoProvider>
      <main>
        <section className="carrinho">
          <Cart />
        </section>
      </main>
    </CarrinhoProvider>
  );
}