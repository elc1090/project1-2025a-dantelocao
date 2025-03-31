import React from 'react'

const ListaOfertas = () => {
  const produtos = [
    { id: 1, nome: 'PC Gamer', imagem: 'img/1.jpg', preco: 'R$ 99,99' },
    { id: 2, nome: 'Kit Acessórios', imagem: 'img/2.jpg', preco: 'R$ 199,99' },
    { id: 3, nome: 'Geladeira', imagem: 'img/3.jpg', preco: 'R$ 149,99' },
    { id: 4, nome: 'Controle XBOX', imagem: 'img/4.jpg', preco: 'R$ 89,99' },
    { id: 5, nome: 'Apple Watch', imagem: 'img/5.jpg', preco: 'R$ 129,99' },
    { id: 6, nome: 'Controles PS4', imagem: 'img/6.jpg', preco: 'R$ 59,99' },
    { id: 7, nome: 'Drone', imagem: 'img/7.jpg', preco: 'R$ 249,99' },
    { id: 8, nome: 'Headset', imagem: 'img/8.jpg', preco: 'R$ 109,99' },
    { id: 9, nome: 'Placa-mãe', imagem: 'img/9.jpg', preco: 'R$ 179,99' },
    { id: 10, nome: 'Lava-Louças', imagem: 'img/10.jpg', preco: 'R$ 99,99' },
    { id: 11, nome: 'Geladeira', imagem: 'img/11.jpg', preco: 'R$ 99,99' },
    { id: 12, nome: 'Cozinha Completa', imagem: 'img/12.jpg', preco: 'R$ 199,99' },
    { id: 13, nome: 'Kit Panelas', imagem: 'img/13.jpg', preco: 'R$ 149,99' },
    { id: 14, nome: 'Cozinha Completa', imagem: 'img/14.jpg', preco: 'R$ 89,99' },
    { id: 15, nome: 'Panela', imagem: 'img/15.jpg', preco: 'R$ 129,99' },
    { id: 16, nome: 'MacBook', imagem: 'img/16.jpg', preco: 'R$ 59,99' },
    { id: 17, nome: 'Iphone 8', imagem: 'img/17.jpg', preco: 'R$ 249,99' },
    { id: 18, nome: 'Headset', imagem: 'img/8.jpg', preco: 'R$ 109,99' },
    { id: 19, nome: 'Placa-mãe', imagem: 'img/9.jpg', preco: 'R$ 179,99' },
    { id: 20, nome: 'Lava-Louças', imagem: 'img/10.jpg', preco: 'R$ 99,99' },
  ]

  return (
    <>
      {/* Seção "Você Vai Adorar" */}
      <div className="bg-white p-8 mx-auto max-w-full text-center my-8">
        <h1 className="text-black text-4xl font-bold mb-8">Você vai adorar!</h1>

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
