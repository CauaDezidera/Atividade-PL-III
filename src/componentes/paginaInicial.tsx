import React from "react";

type Props = {
  tema: string;
};

const PaginaInicial: React.FC<Props> = ({ tema }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "95vh",
        backgroundColor: tema,
        margin: "0",
        padding: "0",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333333", fontSize: "4rem" }}>
        Seja bem-vindo!
      </h1>
      <h2 style={{ marginTop: "20px", color: "#388E3C", fontSize: "4em" }}>
        PetLovers
      </h2>
    </div>
  );
};

export default PaginaInicial;
