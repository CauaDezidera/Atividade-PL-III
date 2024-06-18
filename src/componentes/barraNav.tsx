import React, { MouseEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type Props = {
  tema: string;
  botoes: string[];
  seletorView: (novaTela: string, evento: MouseEvent) => void;
};

const BarraNav: React.FC<Props> = ({ tema, botoes, seletorView }) => {

  const SubItens = (item: string) => {
    if (item === "Cadastros") {
      return (
        <>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Cadastro Cliente", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Cadastrar Cliente
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Cadastro Pet", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Cadastrar Pet
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Cadastro Serviço", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Cadastrar Serviço
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Cadastro Produto", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Cadastrar Produto
            </button>
          </li>
        </>
      );
    } else if (item === "Listagens") {
      return (
        <>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Registro de consumos dos clientes", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Registro de consumos dos clientes
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Serviços e Produtos mais consumidos", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Serviços e Produtos mais consumidos
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Serviços e Produtos mais consumidos por tipo e raça de pets", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Serviços e Produtos mais consumidos por tipo e raça de pets
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Top 5 clientes que mais consumiram em valor", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Top 5 clientes que mais consumiram em valor
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={(e) => seletorView("Top 10 clientes que mais consumiram em quantidade", e)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              Top 10 clientes que mais consumiram em quantidade
            </button>
          </li>
        </>
      );
    } else {
      return null;
    }
  };

  const ListaBotoes = () => {
    if (botoes.length <= 0) {
      return null;
    } else {
      return botoes.map((valor) => {
        if (valor === "Cadastros" || valor === "Listagens") {
          return (
            <li key={valor} className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id={`navbarDropdown-${valor}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "1.2rem", fontWeight: "500", color: "#333333", background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                {valor}
              </button>
              <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${valor}`}>
                {SubItens(valor)}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={valor} className="nav-item">
              <button
                className="nav-link"
                onClick={(e) => seletorView(valor, e)}
                style={{ fontSize: "1.2rem", fontWeight: "500", color: "#333333", background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                {valor}
              </button>
            </li>
          );
        }
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={(e) => seletorView("Home", e)}
                style={{ fontSize: "2.25rem", color: "#388E3C", fontWeight: "bold", background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                PetLovers
              </button>
            </li>
            {ListaBotoes()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNav;
