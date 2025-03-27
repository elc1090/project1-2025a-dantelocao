import React from 'react'

const Oferta = () => {
    return (
    <>
        <div className="bg-red-600 text-white text-center p-6 mx-auto max-w-full">
            <h2 className="text-2xl mt-4 font-bold"> Oferta 1a compra!</h2>
            <p className="mt-4 text-lg">Aproveite descontos exclusivos por tempo limitado!</p>
            <button className="mt-6 bg-white text-red-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                Ver Oferta
            </button>
        </div>

        <div className="bg-gray-300 text-white p-2 mx-auto max-w-full text-center">
            <div className="flex justify-between items-center max-w-5xl mx-auto">
                <p className="text-black">🚛 Frete grátis acima de R$99 em todos os itens Choice</p>
                <p className="text-black">⏳ Entrega rápida com reembolso garantido</p>
            </div>
        </div>
    </>
    );
  };
export default Oferta