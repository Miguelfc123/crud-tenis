import React, { useState } from "react";

function TennisTable({ list, onDelete, onSave }) {
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({
    modelo: "",
    marca: "",
    tamanho: "",
    preco: "",
  });

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setForm(item);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    onSave(form);
    setEditingItem(null);
  };

  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Tamanho</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            {editingItem === item.id ? (
              <>
                <td>
                  <input
                    className="form-control"
                    name="modelo"
                    value={form.modelo}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    name="marca"
                    value={form.marca}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    name="tamanho"
                    value={form.tamanho}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    name="preco"
                    value={form.preco}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-1"
                    onClick={handleSave}
                  >
                    Salvar
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditingItem(null)}
                  >
                    Cancelar
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{item.modelo}</td>
                <td>{item.marca}</td>
                <td>{item.tamanho}</td>
                <td>{item.preco}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-1"
                    onClick={() => handleEdit(item)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      window.confirm("Excluir este item?") && onDelete(item.id)
                    }
                  >
                    Excluir
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TennisTable;
