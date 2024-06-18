import React from "react";

type ConsumosClientesProps = {
  tema: string;
};

const ConsumosClientes: React.FC<ConsumosClientesProps> = ({ tema }) => {
  const dados = [
    { nome: "Cauã", quantidadeConsumida: 10, servico: "Banho e Tosa", produto: "Shampoo para Cães" },
    { nome: "Lucas", quantidadeConsumida: 5, servico: "Consulta Veterinária", produto: "Ração para Cães" },
    { nome: "Ana", quantidadeConsumida: 8, servico: "Vacinação", produto: "Ração para Gatos" },
    { nome: "Maria", quantidadeConsumida: 7, servico: "Adestramento", produto: "Brinquedo de Borracha" },
    { nome: "João", quantidadeConsumida: 4, servico: "Hospedagem", produto: "Osso de Nylon" },
    { nome: "Carla", quantidadeConsumida: 3, servico: "Creche para Pets", produto: "Arranhador para Gatos" },
    { nome: "Roberto", quantidadeConsumida: 4, servico: "Tosa Higiênica", produto: "Caminha para Cães" },
    { nome: "Fernanda", quantidadeConsumida: 5, servico: "Escovação de Dentes", produto: "Caminha para Gatos" },
    { nome: "Paulo", quantidadeConsumida: 9, servico: "Limpeza de Ouvidos", produto: "Comedouro Automático" },
    { nome: "Juliana", quantidadeConsumida: 4, servico: "Hidratação de Pele e Pelos", produto: "Bebedouro Automático" },
    { nome: "Bruno", quantidadeConsumida: 8, servico: "Transporte de Pets", produto: "Areia para Gatos" },
    { nome: "Gabriela", quantidadeConsumida: 7, servico: "Atendimento Emergencial", produto: "Tapete Higiênico" },
    { nome: "Felipe", quantidadeConsumida: 8, servico: "Exames Laboratoriais", produto: "Antipulgas" },
    { nome: "Amanda", quantidadeConsumida: 12, servico: "Cirurgias", produto: "Anticarrapatos" },
    { nome: "Rafael", quantidadeConsumida: 7, servico: "Fisioterapia para Pets", produto: "Colar Elizabetano" },
    { nome: "Patrícia", quantidadeConsumida: 2, servico: "Acupuntura para Pets", produto: "Guia para Cães" },
    { nome: "Diego", quantidadeConsumida: 9, servico: "Consulta Comportamental", produto: "Peitoral para Cães" },
    { nome: "Beatriz", quantidadeConsumida: 7, servico: "Consulta Nutricional", produto: "Ração para Filhotes" },
    { nome: "Marcos", quantidadeConsumida: 5, servico: "Massagem para Pets", produto: "Ração para Idosos" },
    { nome: "Cláudia", quantidadeConsumida: 7, servico: "Hotel para Pets", produto: "Biscuits para Cães" },
  ];

  return (
    <div className="container-fluid">
      <table className="tabela-listar">
        <thead className="cabecalho-lista">
          <tr>
            <th>Clientes</th>
            <th>Quantidade Consumida</th>
            <th>Serviço</th>
            <th>Produto</th>
          </tr>
        </thead>
        <tbody className="corpo-lista">
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidadeConsumida}</td>
              <td>{item.servico}</td>
              <td>{item.produto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumosClientes;
