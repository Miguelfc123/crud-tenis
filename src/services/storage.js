// Nome da chave usada no LocalStorage
const KEY = "tennis_app";

// Retorna os dados salvos como array (ou vazio se não houver dados)
export const getTennis = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

// Salva os dados no LocalStorage como string JSON
export const saveTennis = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};
