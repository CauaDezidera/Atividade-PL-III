import React, { useState, ChangeEvent } from "react";
import { formatarRG, formatarCPF, formatarTelefone } from "./mascaras";

type Props = {
  tema: string;
};

type Pet = {
  nome: string;
  raça: string;
  gênero: string;
  tipo: string;
};

const CadastroCliente: React.FC<Props> = ({ tema }) => {
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataEmissaoCPF, setDataEmissaoCPF] = useState("");
  const [rg, setRg] = useState([""]);
  const [dataEmissaoRG, setDataEmissaoRG] = useState([""]);
  const [telefones, setTelefones] = useState([{ ddd: "", numero: "" }]);
  const [produtosConsumidos, setProdutosConsumidos] = useState([""]);
  const [servicosConsumidos, setServicosConsumidos] = useState([""]);
  const [pets, setPets] = useState([{ nome: "", raça: "", gênero: "", tipo: "" }]);
  const [dataCadastro, setDataCadastro] = useState("");

  const adicionarRG = () => {
    setRg([...rg, ""]);
    setDataEmissaoRG([...dataEmissaoRG, ""]);
  };

  const adicionarTelefone = () => {
    setTelefones([...telefones, { ddd: "", numero: "" }]);
  };

  const adicionarProduto = () => {
    setProdutosConsumidos([...produtosConsumidos, ""]);
  };

  const adicionarServico = () => {
    setServicosConsumidos([...servicosConsumidos, ""]);
  };

  const adicionarPet = () => {
    setPets([...pets, { nome: "", raça: "", gênero: "", tipo: "" }]);
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<any>>, value: any) => {
    setter(value);
  };

  const handleChangeTelefone = (index: number, field: keyof { ddd: string; numero: string }, value: string) => {
    setTelefones(prevState => {
      const novosTelefones = [...prevState];
      novosTelefones[index] = { ...novosTelefones[index], [field]: value };
      return novosTelefones;
    });
  };

  const handleChangeRg = (index: number, value: string) => {
    const novoRg = [...rg];
    novoRg[index] = formatarRG(value);
    setRg(novoRg);
  };

  const handleChangeDataEmissaoRG = (index: number, value: string) => {
    setDataEmissaoRG(prevState => {
      const novaDataEmissaoRG = [...prevState];
      novaDataEmissaoRG[index] = value;
      return novaDataEmissaoRG;
    });
  };

  const handleChangeCPF = (value: string) => {
    setCpf(formatarCPF(value));
  };

  const handleChangePet = (index: number, field: keyof Pet, value: string) => {
    setPets(prevState => {
      const novosPets = [...prevState];
      novosPets[index] = { ...novosPets[index], [field]: value };
      return novosPets;
    });
  };

  const handleChangeArray = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number, value: string) => {
    setter(prevState => {
      const updatedArray = [...prevState];
      updatedArray[index] = value;
      return updatedArray;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Adicione a lógica de submissão aqui
  };

  return (
    <div className="container-conteudo">
      <div className="forma">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Cliente"
              aria-label="Nome"
              value={nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(setNome, e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome Social"
              aria-label="Nome Social"
              value={nomeSocial}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(setNomeSocial, e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="CPF"
              aria-label="CPF"
              value={cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeCPF(e.target.value)}
            />
            <input
              type="date"
              className="form-control"
              placeholder="Data de Emissão do CPF"
              aria-label="Data de Emissão do CPF"
              value={dataEmissaoCPF}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(setDataEmissaoCPF, e.target.value)}
            />
          </div>

          {rg.map((rgItem, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="RG"
                aria-label="RG"
                value={rgItem}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeRg(index, e.target.value)}
              />
              <input
                type="date"
                className="form-control"
                placeholder="Data de Emissão do RG"
                aria-label="Data de Emissão do RG"
                value={dataEmissaoRG[index]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeDataEmissaoRG(index, e.target.value)}
              />
              <button type="button" className="btn btn-outline-secondary" onClick={adicionarRG}>
                Adicionar RG
              </button>
            </div>
          ))}

          {telefones.map((telefone, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="DDD"
                aria-label="DDD"
                value={telefone.ddd}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeTelefone(index, "ddd", e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Telefone"
                aria-label="Telefone"
                value={telefone.numero}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeTelefone(index, "numero", e.target.value)}
              />
              <button type="button" className="btn btn-outline-secondary" onClick={adicionarTelefone}>
                Adicionar Telefone
              </button>
            </div>
          ))}

          {produtosConsumidos.map((produto, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Produto Consumido"
                aria-label="Produto Consumido"
                value={produto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeArray(setProdutosConsumidos, index, e.target.value)}
              />
              <button type="button" className="btn btn-outline-secondary" onClick={adicionarProduto}>
                Adicionar Produto
              </button>
            </div>
          ))}

          {servicosConsumidos.map((servico, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Serviço Consumido"
                aria-label="Serviço Consumido"
                value={servico}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeArray(setServicosConsumidos, index, e.target.value)}
              />
              <button type="button" className="btn btn-outline-secondary" onClick={adicionarServico}>
                Adicionar Serviço
              </button>
            </div>
          ))}

          {pets.map((pet, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Pet"
                aria-label="Nome do Pet"
                value={pet.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangePet(index, "nome", e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Raça"
                aria-label="Raça"
                value={pet.raça}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangePet(index, "raça", e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Gênero"
                aria-label="Gênero"
                value={pet.gênero}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangePet(index, "gênero", e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                aria-label="Tipo"
                value={pet.tipo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangePet(index, "tipo", e.target.value)}
              />
              <button type="button" className="btn btn-outline-secondary" onClick={adicionarPet}>
                Adicionar Pet
              </button>
            </div>
          ))}

          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text">Data de Cadastro:</span>
            </div>
            <input
              type="date"
              className="form-control"
              placeholder="Data de Cadastro"
              aria-label="Data de Cadastro"
              value={dataCadastro}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(setDataCadastro, e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
              Cadastrar Cliente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;

