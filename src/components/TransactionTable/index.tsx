import { useEffect } from 'react';
import { Container } from './styles';
import api from '../../services/api';


export default function TransactionTable(){
  
  useEffect(()=>{
   api.get('transactions').then(data => console.log(data))

  },[]);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Desenvolvimento de website
            </td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          
          <tr>
            <td >
              Aluguel da casa
            </td>
            <td className="withdraw">R$ -120,00</td>
            <td>Custos mensais</td>
            <td>02/09/2021</td>
          </tr>

          <tr>
            <td>
              Compra da Camisa do Grêmio
            </td>
            <td> R$ -250,00</td>
            <td>Custos pessoais</td>
            <td>10/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}