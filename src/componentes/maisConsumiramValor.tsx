import React from "react";

type MaisConsumiramValorProps = {
  tema: string;
};

const MaisConsumiramValor: React.FC<MaisConsumiramValorProps> = ({ tema }) => {
  const dados = [
    { nome: "Paulo", valorGasto: 1079.91 },
    { nome: "Amanda", valorGasto: 719.88 },
    { nome: "Felipe", valorGasto: 399.92 },
    { nome: "Gabriela", valorGasto: 279.93 },
    { nome: "Bruno", valorGasto: 159.92 }
  ];

  return (
    <div className="container-fluid">
      <table className="tabela-listar-2">
        <thead className="cabecalho-lista-2">
          <tr>
            <th>Top 5 clientes</th>
            <th className="centralizado">Valor Gasto</th>
          </tr>
        </thead>
        <tbody className="corpo-lista">
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td className="centralizado">{item.valorGasto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaisConsumiramValor;
