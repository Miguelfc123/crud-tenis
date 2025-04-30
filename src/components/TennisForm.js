import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TennisForm({ onSave }) {
  const [form, setForm] = useState({
    modelo: "",
    marca: "",
    tamanho: "",
    preco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.modelo || !form.marca || !form.tamanho || !form.preco) return;
    const newItem = { ...form, id: uuidv4() };
    onSave(newItem);
    setForm({ modelo: "", marca: "", tamanho: "", preco: "" });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-md-3">
          <input
            className="form-control"
            name="modelo"
            placeholder="Modelo"
            value={form.modelo}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            name="marca"
            placeholder="Marca"
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            className="form-control"
            name="tamanho"
            placeholder="Tamanho"
            value={form.tamanho}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input
            className="form-control"
            name="preco"
            placeholder="Preço"
            value={form.preco}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
}

export default TennisForm;
