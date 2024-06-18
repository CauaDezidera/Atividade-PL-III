import React, { MouseEvent, useState } from "react";
import BarraNavegacao from "./barraNav";
import ListaCliente from "./listarClientes";
import CadastroCliente from "./cadastrarCliente";
import ListaProduto from "./listarProdutos";
import CadastroProduto from "./cadastrarProduto";
import ListaServico from "./listarServicos";
import CadastroServico from "./cadastrarServico";
import ListaPet from "./listarPets";
import CadastroPet from "./cadastrarPet";
import PaginaInicial from "./paginaInicial";
import AtualizarCliente from "./atualizarCliente";
import AtualizarProduto from "./atualizarProduto";
import AtualizarServico from "./atualizarServico";
import AtualizarPet from "./atualizarPet";
import ConsumosClientes from "./consumosClientes";
import ServicosEProdutosMaisConsumidos from "./servicosEprodutosMaisConsumidos";
import ServicosEProdutosRacaETipoPet from "./ServicosEProdutosRacaETipoPet";
import MaisConsumiramValor from "./maisConsumiramValor";
import MaisConsumiramQuantidade from "./maisConsumiramQuantidade";

type Props = {};

const Roteador: React.FC<Props> = () => {
  const [tela, setTela] = useState<string>("Home");

  const selecionarView = (novaTela: string, evento: MouseEvent) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  const abrirAtualizarCliente = (evento: MouseEvent<HTMLButtonElement>) => {
    selecionarView("Atualizar Cliente", evento);
  };

  const abrirAtualizarProduto = (evento: MouseEvent<HTMLButtonElement>) => {
    selecionarView("Atualizar Produto", evento);
  };

  const abrirAtualizarServico = (evento: MouseEvent<HTMLButtonElement>) => {
    selecionarView("Atualizar Serviço", evento);
  };

  const abrirAtualizarPet = (evento: MouseEvent<HTMLButtonElement>) => {
    selecionarView("Atualizar Pet", evento);
  };

  let barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="#E8F5E9"
      botoes={["Clientes", "Pets", "Produtos", "Serviços", "Cadastros", "Listagens"]}
    />
  );

  switch (tela) {
    case "Clientes":
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="#E8F5E9" abrirAtualizarCliente={abrirAtualizarCliente} />
        </>
      );
    case "Pets":
      return (
        <>
          {barraNavegacao}
          <ListaPet tema="#E8F5E9" abrirAtualizarPet={abrirAtualizarPet} />
        </>
      );
    case "Produtos":
      return (
        <>
          {barraNavegacao}
          <ListaProduto tema="#E8F5E9" abrirAtualizarProduto={abrirAtualizarProduto} />
        </>
      );
    case "Cadastro Cliente":
      return (
        <>
          {barraNavegacao}
          <CadastroCliente tema="#E8F5E9" />
        </>
      );
    case "Cadastro Produto":
      return (
        <>
          {barraNavegacao}
          <CadastroProduto tema="#E8F5E9" />
        </>
      );
    case "Serviços":
      return (
        <>
          {barraNavegacao}
          <ListaServico tema="#E8F5E9" abrirAtualizarServico={abrirAtualizarServico} />
        </>
      );
    case "Cadastro Serviço":
      return (
        <>
          {barraNavegacao}
          <CadastroServico tema="#E8F5E9" />
        </>
      );
    case "Cadastro Pet":
      return (
        <>
          {barraNavegacao}
          <CadastroPet tema="#E8F5E9" />
        </>
      );
    case "Home":
      return (
        <>
          {barraNavegacao}
          <PaginaInicial tema="#E8F5E9" />
        </>
      );
    case "Atualizar Cliente":
      return (
        <>
          {barraNavegacao}
          <AtualizarCliente tema="#E8F5E9" />
        </>
      );
    case "Atualizar Produto":
      return (
        <>
          {barraNavegacao}
          <AtualizarProduto tema="#E8F5E9" />
        </>
      );
    case "Atualizar Serviço":
      return (
        <>
          {barraNavegacao}
          <AtualizarServico tema="#E8F5E9" />
        </>
      );
    case "Atualizar Pet":
      return (
        <>
          {barraNavegacao}
          <AtualizarPet tema="#E8F5E9" />
        </>
      );
    case "Registro de consumos dos clientes":
      return (
        <>
          {barraNavegacao}
          <ConsumosClientes tema="#E8F5E9" />
        </>
      );
    case "Serviços e Produtos mais consumidos":
      return (
        <>
          {barraNavegacao}
          <ServicosEProdutosMaisConsumidos tema="#E8F5E9" />
        </>
      );
    case "Serviços e Produtos mais consumidos por tipo e raça de pets":
      return (
        <>
          {barraNavegacao}
          <ServicosEProdutosRacaETipoPet tema="#E8F5E9" />
        </>
      );
    case "Top 10 clientes que mais consumiram em quantidade":
      return (
        <>
          {barraNavegacao}
          <MaisConsumiramQuantidade tema="#E8F5E9" />
        </>
      );
    case "Top 5 clientes que mais consumiram em valor":
      return (
        <>
          {barraNavegacao}
          <MaisConsumiramValor tema="#E8F5E9" />
        </>
      );
    default:
      return null;
  }
};

export default Roteador;
