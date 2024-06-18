import React, { useState, ChangeEvent } from "react";

type Props = {
  tema: string;
};

type PetField = "nome" | "tipo" | "raca" | "genero";

const CadastroPet: React.FC<Props> = ({ tema }) => {
  const [pets, setPets] = useState<{ nome: string; tipo: string; raca: string; genero: string }[]>([
    { nome: "", tipo: "", raca: "", genero: "" },
  ]);

  const adicionarPet = () => {
    setPets([...pets, { nome: "", tipo: "", raca: "", genero: "" }]);
  };

  const handleChangePet = (index: number, campo: PetField, value: string) => {
    setPets(prevPets => {
      const novosPets = [...prevPets];
      novosPets[index][campo] = value;
      return novosPets;
    });
  };

  return (
    <div className="container-conteudo">
      <div className="forma">
        <form>
          {pets.map((pet, index) => (
            <div key={index}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome do Pet"
                  aria-label="Nome do Pet"
                  value={pet.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangePet(index, "nome", e.target.value)
                  }
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Raça"
                  aria-label="Raça"
                  value={pet.raca}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangePet(index, "raca", e.target.value)
                  }
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gênero"
                  aria-label="Gênero"
                  value={pet.genero}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangePet(index, "genero", e.target.value)
                  }
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tipo"
                  aria-label="Tipo"
                  value={pet.tipo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangePet(index, "tipo", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ background: tema }}
              onClick={adicionarPet}
            >
              Adicionar Pet
            </button>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
              Cadastrar Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroPet;
