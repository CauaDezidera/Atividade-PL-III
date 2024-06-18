import React from "react";

type ServicosEProdutosMaisConsumidosProps = {
  tema: string;
};

const ServicosEProdutosMaisConsumidos: React.FC<ServicosEProdutosMaisConsumidosProps> = ({ tema }) => {
  const dados = [
    { nome: "Cirurgias", quantidadeConsumida: 12 },
    { nome: "Banho e Tosa", quantidadeConsumida: 10 },
    { nome: "Limpeza de Ouvidos", quantidadeConsumida: 9 },
    { nome: "Consulta Comportamental", quantidadeConsumida: 9 },
    { nome: "Vacinação", quantidadeConsumida: 8 },
    { nome: "Transporte de Pets", quantidadeConsumida: 8 },
    { nome: "Exames Laboratoriais", quantidadeConsumida: 8 },
    { nome: "Consulta Veterinária", quantidadeConsumida: 5 },
    { nome: "Escovação de Dentes", quantidadeConsumida: 5 },
    { nome: "Massagem para Pets", quantidadeConsumida: 5 }
  ];

  return (
    <div className="container-fluid">
      <table className="tabela-listar-2">
        <thead className="cabecalho-lista-2">
          <tr>
            <th>Serviços e Produtos</th>
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

export default ServicosEProdutosMaisConsumidos;
