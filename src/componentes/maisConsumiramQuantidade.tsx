import React from "react";

type MaisConsumiramQuantidadeProps = {
  tema: string;
};

const MaisConsumiramQuantidade: React.FC<MaisConsumiramQuantidadeProps> = ({ tema }) => {
  const dados = [
    { nome: "Amanda", quantidadeConsumida: 12 },
    { nome: "Cauã", quantidadeConsumida: 10 },
    { nome: "Ana", quantidadeConsumida: 8 },
    { nome: "Bruno", quantidadeConsumida: 8 },
    { nome: "Felipe", quantidadeConsumida: 8 },
    { nome: "Paulo", quantidadeConsumida: 9 },
    { nome: "Diego", quantidadeConsumida: 9 },
    { nome: "Maria", quantidadeConsumida: 7 },
    { nome: "Gabriela", quantidadeConsumida: 7 },
    { nome: "Cláudia", quantidadeConsumida: 7 }
  ];

  return (
    <div className="container-fluid">
      <table className="tabela-listar-2">
        <thead className="cabecalho-lista-2">
          <tr>
            <th>Top 10 clientes</th>
            <th className="centralizado">Quantidade Consumida</th>
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

export default MaisConsumiramQuantidade;
