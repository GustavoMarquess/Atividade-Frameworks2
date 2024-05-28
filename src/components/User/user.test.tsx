import { render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../context/usercontext';
import User from './index';
//import './styles.css';

describe('No formularionpnpm ', () => {
  test('verificam se os campos de nome e email do formulário estão funcionando corretamente', () => {
    const { getByPlaceholderText } = render(
        <UserContext.Provider value={{ email: '', nome: '', senha: '' }}>
          <User />
        </UserContext.Provider>
      );
  
      const input = getByPlaceholderText('Nome') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'Teste' } });
      expect(input.value).toBe('Teste');
    });
  
    test('deve alterar o valor ao digitar no campo de email', () => {
      const { getByPlaceholderText } = render(
        <UserContext.Provider value={{ email: '', nome: '', senha: '' }}>
          <User />
        </UserContext.Provider>
      );
  
      const input = getByPlaceholderText('Email') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'teste@teste.com' } });
      expect(input.value).toBe('teste@teste.com');
    });
  });