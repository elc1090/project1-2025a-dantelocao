import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">
          AliExpress
        </div>

        {/* Barra de pesquisa */}
        <div className="flex flex-grow max-w-lg mx-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600">
            <Search size={20} />
          </button>
        </div>

        {/* Ícones à direita */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-gray-700 hover:text-red-500">
            <User size={20} className="mr-2" />
            Conta
          </button>

          <button className="flex items-center text-gray-700 hover:text-red-500">
            <ShoppingCart size={20} className="mr-2" />
            Carrinho
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
