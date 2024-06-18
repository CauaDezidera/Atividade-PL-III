import React from "react";

type Props = {
  tema: string;
  abrirAtualizarProduto: (evento: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListaProduto: React.FC<Props> = ({ abrirAtualizarProduto }) => {
  return (
    <div className="container">
      <table className="table table-bordered tabela-curvada">
        <thead>
          <tr>
            <th>Produtos</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ração para Cães</td>
            <td>89.99</td>
            <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                onClick={abrirAtualizarProduto}
              >
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </td>
          </tr>
          
<tr>
              <td>Ração para Gatos</td>
              <td>79.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Shampoo para Cães</td>
              <td>29.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Shampoo para Gatos</td>
              <td>27.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Brinquedo de Borracha</td>
              <td>15.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Osso de Nylon</td>
              <td>18.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Arranhador para Gatos</td>
              <td>49.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Caminha para Cães</td>
              <td>89.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Caminha para Gatos</td>
              <td>79.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Comedouro Automático</td>
              <td>119.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Bebedouro Automático</td>
              <td>109.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Areia para Gatos</td>
              <td>19.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Tapete Higiênico</td>
              <td>39.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Antipulgas</td>
              <td>49.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Anticarrapatos</td>
              <td>59.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Colar Elizabetano</td>
              <td>15.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Guia para Cães</td>
              <td>22.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Peitoral para Cães</td>
              <td>34.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Ração para Filhotes</td>
              <td>99.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Ração para Idosos</td>
              <td>104.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Biscuits para Cães</td>
              <td>12.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
                >
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Snacks para Gatos</td>
              <td>14.99</td>
              <td>
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={abrirAtualizarProduto}
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

export default ListaProduto;
