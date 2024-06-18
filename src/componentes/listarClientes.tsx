import React, { useState } from "react";

type Props = {
  tema: string;
  abrirAtualizarCliente: (evento: React.MouseEvent<HTMLButtonElement>) => void;
};

type Cliente = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  dataEmissaoCPF: string;
  dataCadastro: string;
  rg: string;
  dataEmissaoRG: string;
  telefone: {
    ddd: string;
    numero: string;
  };
  pet: string;
};

const ListaCliente: React.FC<Props> = ({ tema, abrirAtualizarCliente }) => {
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
  const [clienteHover, setClienteHover] = useState<string | null>(null);

  const handleClienteClick = (cliente: Cliente) => {
    setClienteSelecionado(cliente);
  };

  const handleMouseEnter = (nome: string) => {
    setClienteHover(nome);
  };

  const handleMouseLeave = () => {
    setClienteHover(null);
  };

  const clientes: Cliente[] = [
    {
      nome: "Cauã",
      nomeSocial: "Caua D",
      cpf: "123.456.789-00",
      dataEmissaoCPF: "01/01/2020",
      dataCadastro: "01/01/2022",
      rg: "1234567",
      dataEmissaoRG: "01/01/2018",
      telefone: { ddd: "99", numero: "99999-9999" },
      pet: "Pantro"
    },
    {
      nome: "Lucas",
      nomeSocial: "Lucas K",
      cpf: "987.654.321-00",
      dataEmissaoCPF: "02/02/2021",
      dataCadastro: "02/02/2023",
      rg: "7654321",
      dataEmissaoRG: "02/02/2019",
      telefone: { ddd: "88", numero: "88888-8888" },
      pet: "Milo"
    },
    {
      nome: "Ana",
      nomeSocial: "Ana P",
      cpf: "111.222.333-44",
      dataEmissaoCPF: "03/03/2019",
      dataCadastro: "03/03/2020",
      rg: "3334445",
      dataEmissaoRG: "03/03/2017",
      telefone: { ddd: "77", numero: "77777-7777" },
      pet: "Luna"
    },
    {
      nome: "Maria",
      nomeSocial: "Maria Q",
      cpf: "222.333.444-55",
      dataEmissaoCPF: "04/04/2018",
      dataCadastro: "04/04/2019",
      rg: "4445556",
      dataEmissaoRG: "04/04/2016",
      telefone: { ddd: "66", numero: "66666-6666" },
      pet: "Bella"
    },
    {
      nome: "João",
      nomeSocial: "João R",
      cpf: "333.444.555-66",
      dataEmissaoCPF: "05/05/2017",
      dataCadastro: "05/05/2018",
      rg: "5556667",
      dataEmissaoRG: "05/05/2015",
      telefone: { ddd: "55", numero: "55555-5555" },
      pet: "Charlie"
    },
    {
      nome: "Carla",
      nomeSocial: "Carla S",
      cpf: "444.555.666-77",
      dataEmissaoCPF: "06/06/2016",
      dataCadastro: "06/06/2017",
      rg: "6667778",
      dataEmissaoRG: "06/06/2014",
      telefone: { ddd: "44", numero: "44444-4444" },
      pet: "Daisy"
    },
    {
      nome: "Roberto",
      nomeSocial: "Roberto T",
      cpf: "555.666.777-88",
      dataEmissaoCPF: "07/07/2015",
      dataCadastro: "07/07/2016",
      rg: "7778889",
      dataEmissaoRG: "07/07/2013",
      telefone: { ddd: "33", numero: "33333-3333" },
      pet: "Max"
    },
    {
      nome: "Fernanda",
      nomeSocial: "Fernanda U",
      cpf: "666.777.888-99",
      dataEmissaoCPF: "08/08/2014",
      dataCadastro: "08/08/2015",
      rg: "8889990",
      dataEmissaoRG: "08/08/2012",
      telefone: { ddd: "22", numero: "22222-2222" },
      pet: "Simba"
    },
    {
      nome: "Paulo",
      nomeSocial: "Paulo V",
      cpf: "777.888.999-00",
      dataEmissaoCPF: "09/09/2013",
      dataCadastro: "09/09/2014",
      rg: "9990001",
      dataEmissaoRG: "09/09/2011",
      telefone: { ddd: "11", numero: "11111-1111" },
      pet: "Lucy"
    },
    {
      nome: "Juliana",
      nomeSocial: "Juliana W",
      cpf: "888.999.000-11",
      dataEmissaoCPF: "10/10/2012",
      dataCadastro: "10/10/2013",
      rg: "0001112",
      dataEmissaoRG: "10/10/2010",
      telefone: { ddd: "00", numero: "00000-0000" },
      pet: "Rocky"
    },
    {
      nome: "Bruno",
      nomeSocial: "Bruno X",
      cpf: "999.000.111-22",
      dataEmissaoCPF: "11/11/2011",
      dataCadastro: "11/11/2012",
      rg: "1112223",
      dataEmissaoRG: "11/11/2009",
      telefone: { ddd: "12", numero: "12345-6789" },
      pet: "Sadie"
    },
    {
      nome: "Gabriela",
      nomeSocial: "Gabriela Y",
      cpf: "000.111.222-33",
      dataEmissaoCPF: "12/12/2010",
      dataCadastro: "12/12/2011",
      rg: "2223334",
      dataEmissaoRG: "12/12/2008",
      telefone: { ddd: "21", numero: "98765-4321" },
      pet: "Loki"
    },
    {
      nome: "Felipe",
      nomeSocial: "Felipe Z",
      cpf: "111.222.333-44",
      dataEmissaoCPF: "01/01/2009",
      dataCadastro: "01/01/2010",
      rg: "3334445",
      dataEmissaoRG: "01/01/2007",
      telefone: { ddd: "34", numero: "34567-8901" },
      pet: "Buddy"
    },
    {
      nome: "Amanda",
      nomeSocial: "Amanda A",
      cpf: "222.333.444-55",
      dataEmissaoCPF: "02/02/2008",
      dataCadastro: "02/02/2009",
      rg: "4445556",
      dataEmissaoRG: "02/02/2006",
      telefone: { ddd: "43", numero: "45678-9012" },
      pet: "Zoe"
    },
    {
      nome: "Rafael",
      nomeSocial: "Rafael B",
      cpf: "333.444.555-66",
      dataEmissaoCPF: "03/03/2007",
      dataCadastro: "03/03/2008",
      rg: "5556667",
      dataEmissaoRG: "03/03/2005",
      telefone: { ddd: "56", numero: "56789-0123" },
      pet: "Ollie"
    },
    {
      nome: "Patrícia",
      nomeSocial: "Patrícia C",
      cpf: "444.555.666-77",
      dataEmissaoCPF: "04/04/2006",
      dataCadastro: "04/04/2007",
      rg: "6667778",
      dataEmissaoRG: "04/04/2004",
      telefone: { ddd: "65", numero: "67890-1234" },
      pet: "Nala"
    },
    {
      nome: "Diego",
      nomeSocial: "Diego D",
      cpf: "555.666.777-88",
      dataEmissaoCPF: "05/05/2005",
      dataCadastro: "05/05/2006",
      rg: "7778889",
      dataEmissaoRG: "05/05/2003",
      telefone: { ddd: "78", numero: "78901-2345" },
      pet: "Chloe"
    },
    {
      nome: "Beatriz",
      nomeSocial: "Beatriz E",
      cpf: "666.777.888-99",
      dataEmissaoCPF: "06/06/2004",
      dataCadastro: "06/06/2005",
      rg: "8889990",
      dataEmissaoRG: "06/06/2002",
      telefone: { ddd: "87", numero: "89012-3456" },
      pet: "Sophie"
    },
    {
      nome: "Marcos",
      nomeSocial: "Marcos F",
      cpf: "777.888.999-00",
      dataEmissaoCPF: "07/07/2003",
      dataCadastro: "07/07/2004",
      rg: "9990001",
      dataEmissaoRG: "07/07/2001",
      telefone: { ddd: "89", numero: "90123-4567" },
      pet: "Maggie"
    },
    {
      nome: "Cláudia",
      nomeSocial: "Cláudia G",
      cpf: "888.999.000-11",
      dataEmissaoCPF: "08/08/2002",
      dataCadastro: "08/08/2003",
      rg: "0001112",
      dataEmissaoRG: "08/08/2000",
      telefone: { ddd: "90", numero: "01234-5678" },
      pet: "Leo"
    }
  ];

  return (
    <div className="container">
      {clienteSelecionado && (
        <div className="cliente-table">
          <h3> Informações do Cliente </h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th> Nome: </th>
                <td>{clienteSelecionado.nome}</td>
              </tr>
              <tr>
                  <th> Nome Social:</th>
                  <td>{clienteSelecionado.nomeSocial}</td>
                </tr>

                <tr>
                  <th> CPF: </th>
                  <td>{clienteSelecionado.cpf}</td>
                </tr>

                <tr>
                  <th> Data de Emissão do CPF: </th>
                  <td>{clienteSelecionado.dataEmissaoCPF}</td>
                </tr>

                <tr>
                  <th> Data de Cadastro: </th>
                  <td>{clienteSelecionado.dataCadastro}</td>
                </tr>

                <tr>
                  <th>RG:</th>
                  <td>{clienteSelecionado.rg}</td>
                </tr>

                <tr>
                  <th> Data de Emissão do RG:</th>
                  <td>{clienteSelecionado.dataEmissaoRG}</td>
                </tr>

                <tr>
                  <th> Telefone: </th>
                  <td>({clienteSelecionado.telefone.ddd}) {clienteSelecionado.telefone.numero}</td>
                </tr>

                <tr>
                  <th> Nome do Pet: </th>
                  <td>{clienteSelecionado.pet}</td>
                </tr>

            </tbody>
          </table>
          <button className="btn btn-outline-primary" onClick={() => setClienteSelecionado(null)}>
            Fechar
          </button>
        </div>
      )}

      <div className="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th> Nome </th>
              <th> Ações </th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <tr key={index}>
                <td
                  onMouseEnter={() => handleMouseEnter(cliente.nome)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClienteClick(cliente)}
                  className={clienteHover === cliente.nome ? "hovered" : ""}
                >
                  {cliente.nome}
                </td>
                <td>
                  <button className="btn btn-primary btn-sm mr-2" onClick={abrirAtualizarCliente}>
                    Atualizar
                  </button>
                  <button className="btn btn-danger btn-sm"> Deletar </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaCliente;
