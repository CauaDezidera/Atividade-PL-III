import React, { useState, ChangeEvent } from "react";

type Props = {
  tema: string;
};

export default function AtualizarProduto({ tema }: Props) {
  const [nomeProduto, setNomeProduto] = useState("");
  const [preco, setPreco] = useState("");

  const handleChangeNomeProduto = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeProduto(e.target.value);
  };

  const handleChangePreco = (e: ChangeEvent<HTMLInputElement>) => {
    setPreco(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container-conteudo">
      <div className="forma">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do produto"
              aria-label="Nome do produto"
              value={nomeProduto}
              onChange={handleChangeNomeProduto}
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Preço do produto"
              aria-label="Preço"
              value={preco}
              onChange={handleChangePreco}
            />
          </div>

          <div className="input-group mb-3">
            <button
              type="submit"
              className="btn btn-outline-secondary"
              style={{ background: tema }}
            >
              Atualizar produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
