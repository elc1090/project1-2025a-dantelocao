import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Lista = () => {
    const [showCategories, setShowCategories] = useState(false);

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
  
    return (
      <div className="bg-white-100 shadow-md">
        {/* Barra fixa abaixo do Header */}
        <div className="container mx-auto flex items-center justify-center p-3">
          <div className="flex items-center justify-between space-x-6 w-full max-w-5xl">
            {/* Botão "Todas as Categorias" */}
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="text-gray-700 font-semibold flex items-center space-x-2 hover:text-red-500"
            >
              <span>📂 Todas as Categorias</span>
              <ChevronDown size={18} className={`${showCategories ? "rotate-180" : ""} transition-transform`} />
            </button>
  
            {/* Outros botões fixos na barra */}
            <button className="text-gray-700 font-medium hover:text-red-500">🔥 Ofertas do Dia</button>
            <button className="text-gray-700 font-medium hover:text-red-500">⭐ Mais Vendidos</button>
            <button className="text-gray-700 font-medium hover:text-red-500">🆕 Novidades</button>
            <button className="text-gray-700 font-medium hover:text-red-500">🎟️ Cupons & Descontos</button>
            <button className="text-gray-700 font-medium hover:text-red-500">📞 Atendimento</button>
          </div>
        </div>
  
        {/* Lista de Categorias (Aparece quando o botão é clicado) */}
        {showCategories && (
          <div className="bg-white shadow-md border-t">
            <div className="container mx-auto flex space-x-6 p-3 overflow-x-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="text-gray-700 font-medium hover:text-red-500 whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
  
  );
};

export default Lista;
