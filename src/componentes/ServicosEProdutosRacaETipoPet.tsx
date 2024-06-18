import React from "react";

type ServicosEProdutosRacaETipoPetProps = {
  tema: string;
};

const ServicosEProdutosRacaETipoPet: React.FC<ServicosEProdutosRacaETipoPetProps> = ({ tema }) => {
  const dados = [
    { nome: "Cirurgias", quantidadeConsumida: 12 },
    { nome: "Banho e Tosa", quantidadeConsumida: 10 },
    { nome: "Limpeza de Ouvidos", quantidadeConsumida: 9 },
    { nome: "Consulta Comportamental", quantidadeConsumida: 9 },
    { nome: "Vacinação", quantidadeConsumida: 8 },
    { nome: "Anticarrapatos", quantidadeConsumida: 12 },
    { nome: "Shampoo para Cães", quantidadeConsumida: 10 },
    { nome: "Comedouro Automático", quantidadeConsumida: 9 },
    { nome: "Peitoral para Cães", quantidadeConsumida: 9 },
  ];

  return (
    <div className="container-fluid">
      <table className="tabela-listar-2">
        <thead className="cabecalho-lista-2">
          <tr>
            <th>Serviços e Produtos</th>
            <th className="centralizado">Quantidade consumida por Tipo e Raça de pet</th>
          </tr>
        </thead>
        <tbody className="corpo-lista">
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td className="centralizado">{item.quantidadeConsumida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicosEProdutosRacaETipoPet;
