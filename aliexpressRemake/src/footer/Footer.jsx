import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-8">
      <div className="container mx-auto px-4">
        
        {/* Texto acima do grid */}
        <div className="mb-8">
          <h2 className="font-bold text-xl text-black mb-4">
            AliExpress: Sua Melhor Escolha para Compras Online
          </h2>
          <p className="text-sm text-gray-600">
            AliExpress é uma plataforma internacional de comércio eletrônico B2C transfronteiriço, parte do grupo Alibaba, dedicada a proporcionar aos consumidores globais uma experiência de compra conveniente e eficiente. Não importa onde você esteja, permite que você aproveite ao máximo os prazeres das compras online. A AliExpress reúne vendedores de primeira linha do mundo todo, oferecendo uma ampla gama de produtos chines para você escolher.
          </p>
        </div>

        {/* Grid de Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Coluna 1 */}
          <div>
            <h3 className="font-bold text-lg text-black  mb-4">Guia de Compras</h3>
            <ul>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Crie uma Conta</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Opções de Envio</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Proteção ao Consumidor</a></li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Colaborações</h3>
            <ul>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Parcerias</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">DS Center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Login do vendedor</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">中国卖家入驻</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Registro de vendedor não chinês</a></li>
            </ul>
          </div>

        {/* Coluna 3 */}
        <div>
            <h3 className="font-bold text-lg text-black mb-4">Pagar com</h3>
                <ul className="flex space-x-3">
                    <li>
                    <img src="/img/pag2.png" alt="Forma de Pagamento 2" className="w-16 h-auto" />
                    </li>
                    <li>
                    <img src="/img/pag3.png" alt="Forma de Pagamento 3" className="w-16 h-auto" />
                    </li>
                    <li>
                    <img src="/img/pag4.png" alt="Forma de Pagamento 4" className="w-16 h-auto" />
                    </li>
                    <li>
                    <img src="/img/pag5.png" alt="Forma de Pagamento 5" className="w-16 h-auto" />
                    </li>
                    <li>
                    <img src="/img/pag6.png" alt="Forma de Pagamento 6" className="w-16 h-auto" />
                    </li>
                    <li>
                    <img src="/img/pag7.png" alt="Forma de Pagamento 7" className="w-16 h-auto" />
                    </li>
                    <li>
                    <img src="/img/pag8.png" alt="Forma de Pagamento 8" className="w-16 h-auto" />
                    </li>
            </ul>
        </div>
          
          {/* Coluna 4 */}
        <div>
            <h3 className="font-bold text-lg text-black mb-4">Siga a gente:</h3>
            <ul>
              <li><a href="#facebook" className="text-sm text-gray-600 hover:underline">Facebook</a></li>
              <li><a href="#instagram" className="text-sm text-gray-600 hover:underline">Instagram</a></li>
              <li><a href="#tiktok" className="text-sm text-gray-600 hover:underline">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Grid de Links 2*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {/* Coluna 1 */}
          <div>
            <h3 className="font-bold text-lg text-black  mb-4">Atendimento Ao Cliente</h3>
            <ul>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Central de Ajuda</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Transaction Services</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Agreement for non-EU/UK</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Consumers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Pesquisa de satisfação</a></li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Ajuda</h3>
            <ul>
              <li><a href="#customer-service" className="text-sm text-gray-600 hover:underline">Atendimento ao cliente</a></li>
              <li><a href="#shipping" className="text-sm text-gray-600 hover:underline">Entrega</a></li>
              <li><a href="#returns" className="text-sm text-gray-600 hover:underline">Devoluções</a></li>
              <li><a href="#terms" className="text-sm text-gray-600 hover:underline">Termos de serviço</a></li>
            </ul>
          </div>

        {/* Coluna 3 */}
        <div>
            <h3 className="font-bold text-lg text-black mb-4">Sobre</h3>
            <ul>
              <li><a href="#about" className="text-sm text-gray-600 hover:underline">Sobre nós</a></li>
              <li><a href="#careers" className="text-sm text-gray-600 hover:underline">Carreiras</a></li>
              <li><a href="#press" className="text-sm text-gray-600 hover:underline">Imprensa</a></li>
              <li><a href="#blog" className="text-sm text-gray-600 hover:underline">Blog</a></li>
            </ul>
        </div>
          
          {/* Coluna 4 */}
        <div>
            <h3 className="font-bold text-lg text-black mb-4">Informações legais</h3>
            <ul>
              <li><a href="#privacy" className="text-sm text-gray-600 hover:underline">Política de privacidade</a></li>
              <li><a href="#cookies" className="text-sm text-gray-600 hover:underline">Política de cookies</a></li>
              <li><a href="#terms" className="text-sm text-gray-600 hover:underline">Termos de uso</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-black">
          <p className="text-sm">© 2024 AliExpress. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
