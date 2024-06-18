import React from "react";

type Props = {
  tema: string;
  abrirAtualizarServico: (evento: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListaServico: React.FC<Props> = ({ abrirAtualizarServico }) => {
  return (
    <div className="container">
      <table className="table table-bordered tabela-curvada">
        <thead>
          <tr>
            <th>Serviços</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Banho e Tosa</td>
            <td>50.99</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                onClick={abrirAtualizarServico}
              >
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">Deletar</button>
            </td>
          </tr>
          <tr>
              <td>Consulta Veterinária</td>
              <td> 100.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Vacinação</td>
              <td> 80.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Adestramento</td>
              <td> 120.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Hospedagem</td>
              <td> 150.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
           
            <tr>
              <td>Creche para Pets</td>
              <td> 70.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Tosa Higiênica</td>
              <td> 40.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Escovação de Dentes</td>
              <td> 30.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Limpeza de Ouvidos</td>
              <td> 25.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Hidratação de Pele e Pelos</td>
              <td> 35.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn  btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Transporte de Pets</td>
              <td> 60.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Atendimento Emergencial</td>
              <td>200.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Exames Laboratoriais</td>
              <td>150.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Cirurgias</td>
              <td>300.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Fisioterapia para Pets</td>
              <td>180.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Acupuntura para Pets</td>
              <td> 100.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Consulta Comportamental</td>
              <td>80.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Consulta Nutricional</td>
              <td>90.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Massagem para Pets</td>
              <td>60.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Hotel para Pets</td>
              <td>120.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarServico}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListaServico;
