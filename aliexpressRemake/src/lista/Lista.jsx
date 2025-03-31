import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Lista = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    "Eletrônicos",
    "Roupas",
    "Casa & Jardim",
    "Beleza",
    "Brinquedos",
    "Esportes",
    "Automóveis",
    "Acessórios",
    "Ferramentas",
  ];

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-md relative">
      {/* Barra fixa abaixo do Header */}
      <div className="container mx-auto flex items-center justify-center p-3">
        <div className="flex items-center justify-between space-x-6 w-full max-w-5xl">
          {/* Botão "Todas as Categorias" */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="text-gray-700 font-semibold flex items-center space-x-2 hover:text-red-500"
            >
              <span>📂 Todas as Categorias</span>
              <ChevronDown size={18} className={`${showCategories ? "rotate-180" : ""} transition-transform`} />
            </button>

            {/* Dropdown de Categorias */}
            {showCategories && (
              <div className="absolute left-0 top-full mt-1 w-56 bg-white border rounded-lg shadow-lg z-10">
                <div className="flex flex-col py-1">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="text-gray-700 font-medium px-4 py-2 text-left hover:bg-gray-200 transition"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Outros botões fixos na barra */}
          <button className="text-gray-700 font-medium hover:text-red-500">🔥 Ofertas do Dia</button>
          <button className="text-gray-700 font-medium hover:text-red-500">⭐ Mais Vendidos</button>
          <button className="text-gray-700 font-medium hover:text-red-500">🆕 Novidades</button>
          <button className="text-gray-700 font-medium hover:text-red-500">🎟️ Cupons & Descontos</button>
          <button className="text-gray-700 font-medium hover:text-red-500">📞 Atendimento</button>
        </div>
      </div>
    </div>
  );
};

export default Lista;

