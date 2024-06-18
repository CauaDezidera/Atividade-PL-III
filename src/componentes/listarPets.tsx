import React, { useState } from "react";

type Props = {
  tema: string;
  abrirAtualizarPet: (evento: React.MouseEvent<HTMLButtonElement>) => void;
};

type Pet = {
  nome: string;
  responsavel: string;
  raca: string;
  genero: string;
  tipo: string;
};

const ListaPet: React.FC<Props> = ({ tema, abrirAtualizarPet }) => {
  const [petSelecionado, setPetSelecionado] = useState<Pet | null>(null);

  const handlePetClick = (pet: Pet) => {
    setPetSelecionado(pet);
  };

  const pets: Pet[] = [
    { nome: "Pantro", responsavel: "Cauã", raca: "Pastor Alemão", genero: "Masculino", tipo: "Cachorro" },
    { nome: "Milo", responsavel: "Lucas", raca: "Labrador", genero: "Masculino", tipo: "Cachorro" },
    { nome: "Luna", responsavel: "Ana", raca: "Siamese", genero: "Feminino", tipo: "Gato" },
    { nome: "Bella", responsavel: "Maria", raca: "Bulldog", genero: "Feminino", tipo: "Cachorro" },
    { nome: "Charlie", responsavel: "João", raca: "Beagle", genero: "Masculino", tipo: "Cachorro" },
    { nome: "Daisy", responsavel: "Carla", raca: "Poodle", genero: "Feminino", tipo: "Cachorro" },
    { nome: "Max", responsavel: "Roberto", raca: "German Shepherd", genero: "Masculino", tipo: "Cachorro" },
    { nome: "Simba", responsavel: "Fernanda", raca: "Maine Coon", genero: "Masculino", tipo: "Gato" },
    { nome: "Lucy", responsavel: "Paulo", raca: "Cocker Spaniel", genero: "Feminino", tipo: "Cachorro" },
    { nome: "Rocky", responsavel: "Juliana", raca: "Rottweiler", genero: "Masculino", tipo: "Cachorro" },
    { nome: "Sadie", responsavel: "Bruno", raca: "Dachshund", genero: "Feminino", tipo: "Cachorro" },
    { nome: "Loki", responsavel: "Gabriela", raca: "Sphynx", genero: "Masculino", tipo: "Gato" },
    { nome: "Buddy", responsavel: "Felipe", raca: "Boxer", genero: "Masculino", tipo: "Cachorro" },
    { nome: "Zoe", responsavel: "Amanda", raca: "Shih Tzu", genero: "Feminino", tipo: "Cachorro" },
    { nome: "Ollie", responsavel: "Rafael", raca: "Persian", genero: "Masculino", tipo: "Gato" },
    { nome: "Nala", responsavel: "Patrícia", raca: "Bengal", genero: "Feminino", tipo: "Gato" },
    { nome: "Coco", responsavel: "Diego", raca: "French Bulldog", genero: "Feminino", tipo: "Cachorro" },
    { nome: "Ginger", responsavel: "Beatriz", raca: "Pomeranian", genero: "Feminino", tipo: "Cachorro" },
    { nome: "Oscar", responsavel: "Marcos", raca: "Ragdoll", genero: "Masculino", tipo: "Gato" },
    { nome: "Maggie", responsavel: "Cláudia", raca: "Yorkshire Terrier", genero: "Feminino", tipo: "Cachorro" }
  ];

  return (
    <div className="container">
      {petSelecionado && (
        <div className="pet-table">
          <h3>Informações do Pet</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Nome:</th>
                <td>{petSelecionado.nome}</td>
              </tr>
              <tr>
                  <th>Responsável:</th>
                  <td>{petSelecionado.responsavel}</td>
                </tr>

                <tr>
                  <th>Raça:</th>
                  <td>{petSelecionado.raca}</td>
                </tr>

                <tr>
                  <th>Gênero:</th>
                  <td>{petSelecionado.genero}</td>
                </tr>

                <tr>
                  <th>Tipo:</th>
                  <td>{petSelecionado.tipo}</td>
                </tr>

            </tbody>
          </table>
          <button className="btn btn-outline-primary btn-sm ml-2" onClick={() => setPetSelecionado(null)}>
            Fechar
          </button>
        </div>
      )}
      
      <div className="table">
        <table className="table table-bordered tabela-curvada">
          <thead>
            <tr>
              <th> Nome do Pet </th>
              <th> Responsável </th>
              <th> Ações </th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, index) => (
              <tr key={index}>
                <td onClick={() => handlePetClick(pet)}>{pet.nome}</td>
                <td>{pet.responsavel}</td>
                <td>
                  <button className="btn btn-primary btn-sm mr-2" onClick={abrirAtualizarPet}>
                    Atualizar
                  </button>
                  <button className="btn btn-danger btn-sm">Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaPet;
