import React from 'react'

const ListaOfertas = () => {
  const produtos = [
    { id: 1, nome: 'Produto 1', imagem: 'imagem1.jpg', preco: 'R$ 99,99' },
    { id: 2, nome: 'Produto 2', imagem: 'imagem2.jpg', preco: 'R$ 199,99' },
    { id: 3, nome: 'Produto 3', imagem: 'imagem3.jpg', preco: 'R$ 149,99' },
    { id: 4, nome: 'Produto 4', imagem: 'imagem4.jpg', preco: 'R$ 89,99' },
    { id: 5, nome: 'Produto 5', imagem: 'imagem5.jpg', preco: 'R$ 129,99' },
    { id: 6, nome: 'Produto 6', imagem: 'imagem6.jpg', preco: 'R$ 59,99' },
    { id: 7, nome: 'Produto 7', imagem: 'imagem7.jpg', preco: 'R$ 249,99' },
    { id: 8, nome: 'Produto 8', imagem: 'imagem8.jpg', preco: 'R$ 109,99' },
    { id: 9, nome: 'Produto 9', imagem: 'imagem9.jpg', preco: 'R$ 179,99' },
    { id: 10, nome: 'Produto 10', imagem: 'imagem10.jpg', preco: 'R$ 99,99' },
    { id: 11, nome: 'Produto 11', imagem: 'imagem1.jpg', preco: 'R$ 99,99' },
    { id: 12, nome: 'Produto 12', imagem: 'imagem2.jpg', preco: 'R$ 199,99' },
    { id: 13, nome: 'Produto 13', imagem: 'imagem3.jpg', preco: 'R$ 149,99' },
    { id: 14, nome: 'Produto 14', imagem: 'imagem4.jpg', preco: 'R$ 89,99' },
    { id: 15, nome: 'Produto 15', imagem: 'imagem5.jpg', preco: 'R$ 129,99' },
    { id: 16, nome: 'Produto 16', imagem: 'imagem6.jpg', preco: 'R$ 59,99' },
    { id: 17, nome: 'Produto 17', imagem: 'imagem7.jpg', preco: 'R$ 249,99' },
    { id: 18, nome: 'Produto 18', imagem: 'imagem8.jpg', preco: 'R$ 109,99' },
    { id: 19, nome: 'Produto 19', imagem: 'imagem9.jpg', preco: 'R$ 179,99' },
    { id: 20, nome: 'Produto 20', imagem: 'imagem10.jpg', preco: 'R$ 99,99' },
  ]

  return (
    <>
      {/* Seção "Você Vai Adorar" */}
      <div className="bg-white p-8 mx-auto max-w-full text-center my-8">
        <h1 className="text-black text-4xl font-bold mb-8">Você Vai Adorar</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="group relative border border-gray-200 p-4 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-all group-hover:scale-110"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">{produto.nome}</h3>
                <p className="text-lg text-gray-700">{produto.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListaOfertas
