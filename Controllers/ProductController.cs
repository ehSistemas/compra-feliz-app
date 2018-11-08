using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CompraFelizApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CompraFelizApp.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        // Mocks
        public Produto[] Produtos { get; set; } = new Produto[] {
            new Produto() { Id = 0, Nome = "Câmera Nikon D7100", Fabricante = "Nikon", Foto = "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV4CqHbZFAg-JIaCV8ftE6WlEPlhVXG8U/Views/1513-D7100-front.png", Valor = 2000 },
            new Produto() { Id = 1, Nome = "Câmera Nikon D7200", Fabricante = "Nikon", Foto = "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/224_1554_D7200_front.png", Valor = 2950 },
            new Produto() { Id = 2, Nome = "EOS Rebel T6i", Fabricante = "Canon", Foto = "http://www.canon.com.br/upload/produto/425/galeria/001_510.jpg", Valor = 3899 },
            new Produto() { Id = 3, Nome = "EOS Rebel T5i", Fabricante = "Canon", Foto = "http://www.canon.com.br/upload/produto/11/galeria/1_510x440.jpg", Valor = 2999 }
        };

        // Mocks
        public DescricaoProduto[] DescricaoProduto { get; set; } = new DescricaoProduto[]
        {
            new DescricaoProduto()
            {
                IdProduto = 0,
                Descricao = "Conheça o novo estandarte da linha HD-SLR Nikon no formato DX = a D7100. Incorporando avanços recentes da tecnologia HD-SLR, a D7100 traz um novo nível de qualidade de imagem incrível, velocidade, conectividade e capacidades criativas, um sensor de imagem de 24.1 megapixels especialmente desenvolvido no formato DX, para desempenho superior em baixa luminosidade, foco automático e fotometria ultraprecisos, além de recursos de gravação de vídeo avançados, HDR embutido, conectividade móvel e muito, muito mais. Combine com qualquer uma das excelentes lentes NIKKOR formato FX e DX da Nikon, com Speedlights e acessórios versáteis, e a D7100 será a peça central de sua produção criativa por anos.",
                Fotos = new string[]
                {
                    "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV4CqHbZFAg-JIaCV8ftE6WlEPlhVXG8U/Views/1513-D7100-front.png",
                    "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV4CqHbZFAg-JIaCV8ftE6WlEPlhVXG8U/Views/1513-D7100-left.png",
                    "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV4CqHbZFAg-JIaCV8ftE6WlEPlhVXG8U/Views/1513-D7100-right.png",
                    "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV4CqHbZFAg-JIaCV8ftE6WlEPlhVXG8U/Views/1513-D7100-side.png",
                    "http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8lV4CqHbZFAg-JIaCV8ftE6WlEPlhVXG8U/Views/1513-D7100-top.png"
                }
            },
            new DescricaoProduto()
            {
                IdProduto = 1,
                Descricao = "Pela primeira vez, a impressionante qualidade de imagem, capacidades de baixa luminosidade e a velocidade de uma DSLR Nikon estão disponíveis com a conveniência do Wi-Fi® e NFC** embutidos.​ Apresentamos a D7200, a nova estrela da linha DSLR de formato DX da Nikon. Dê vida à sua visão criativa com fotografias e vídeos que brilham com nitidez e claridade. Fotografe com quase qualquer luz, desde o amanhecer até depois do anoitecer, e capture tudo, desde esportes e ação, até a vida selvagem e momentos do dia a dia. E então compartilhe as suas lindas imagens mais fácil do que nunca com um dispositivo inteligente compatível. Não importa se você é um fotógrafo apaixonado ou cinegrafista procurando uma ferramenta para ajudar com sua criatividade, um profissional precisando de uma segunda câmera ágil ou alguém buscando uma mistura ideal de versatilidade e conveniência, a D7200 está pronta para o seus desafios.",
                Fotos = new string[]
                {
                    "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/1554_D7200_front.png",
                    "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/1554_D7200_left.png",
                    "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/1554_D7200_right.png",
                    "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/1554_D7200_top.png",
                    "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/1554_D7200.png"
                }
            },
            new DescricaoProduto()
            {
                IdProduto = 2,
                Descricao = "A nova câmera da linha EOS, a Rebel T6i, traz mais facilidade ao capturar momentos especiais e gravar vídeos de maneira muito fácil. Seu sensor CMOS (APS-C) de 24.2 Megapixels de resolução proporciona fotos bem detalhadas, limpas e com aspecto natural. Uma atualização do sistema de medição de luz produz fotos sempre com boa exposição. Você pode fazer vídeos Full HD sem se preocupar, pois seu avançado sistema de AF traz um autofoco rápido e preciso nos assuntos em movimento. Além disso, o incrível sistema de análise de cena Canon EOS (modo A+) ajusta automaticamente as configurações da câmera para produzir sempre os melhores resultados ao fotografar paisagens, momentos com os amigos, cenas de esportes e situações com pouca iluminação. Pela primeira vez na linha EOS Rebel, a Canon lança uma câmera com Wi-Fi® e NFC integrados! A conectividade sem fio oferece uma forma perfeita de transferir imagens e vídeos para dispositivos compatíveis. Ficou mais fácil e conveniente do que nunca compartilhar seus arquivos onde quer que você esteja. A tecnologia NFC (Near Field Communication) * permite parear facilmente sua câmera com dispositivos Android™ compatíveis**. Quando desejar praticidade, deixe que a EOS Rebel T6i faça todo o trabalho com desempenho rápido, independente do ambiente e do tipo de situação em que estiver. Concentre - se apenas em transformar aqueles momentos especiais em fotos deslumbrantes e em vídeos Full HD incríveis.",
                Fotos = new string[]
                {
                    "http://www.canon.com.br/upload/produto/425/galeria/001_510.jpg",
                    "http://www.canon.com.br/upload/produto/425/galeria/002_510.jpg",
                    "http://www.canon.com.br/upload/produto/425/galeria/003_510.jpg",
                    "http://www.canon.com.br/upload/produto/425/galeria/004_510.jpg",
                    "http://www.canon.com.br/upload/produto/425/galeria/005_510.jpg"
                }
            },
            new DescricaoProduto()
            {
                IdProduto = 3,
                Descricao = "Entusiastas da fotografia, comemorem! Um incrível modelo da linha Rebel, a EOS Rebel T5i, chega para renovar seu lado artístico com maravilhosos recursos de imagem e completa funcionalidade.Usuários ficarão impressionados ao notarem como é simples e intuitivo criar fotos de tirar o fôlego com facilidade. A incrível qualidade de imagem e desempenho começa com um sensor CMOS (APS-C) de 18.0 megapixels e o magnífico processador de imagem Canon DIGIC 5. Combinados com uma extensa faixa de ISO de 100-12800(expansível a 25600 em modo H), a EOS Rebel T5i ostenta imagens precisas e detalhadas, mesmo em situações de pouca luz.A velocidade de disparo contínuo de até 5.0 fps permite capturas em rápido movimento. Os 9 pontos de auto foco ajudam a garantir foco nítido em todo o quadro e o sistema de AF Hybrid CMOS permite auto foco veloz e preciso ao tirar fotos em modo Live View.Além disso, a câmera é compatível com lentes Canon STM para um desempenho suave e silencioso do Auto Foco. E a performance não para apenas nas fotos = o modo EOS Movie Full HD combinado com o vídeo AF Servo torna a gravação de vídeos extremamente fácil e o monitor LCD de 3.0 polegadas Touch Screen Clear View II é articulável, oferecendo a possibilidade de fotografar e filmar em ângulos variados, tornando mais divertida a composição de imagens. Sete Filtros Criativos, agora exibidos em tempo real, deixam diretamente em suas mãos um amplo controle criativo. Esses são apenas alguns dos muitos aspectos da EOS Rebel T5i que certamente irão renovar sua alma criativa.",
                Fotos = new string[]
                {
                    "http://www.canon.com.br/upload/produto/11/galeria/1_510x440.jpg",
                    "http://www.canon.com.br/upload/produto/11/galeria/2_510x440.jpg",
                    "http://www.canon.com.br/upload/produto/11/galeria/4_510x440.jpg",
                    "http://www.canon.com.br/upload/produto/11/galeria/3_510x440.jpg",
                    "http://www.canon.com.br/upload/produto/11/galeria/9_510x440.jpg",
                }
            }
        };

        [HttpGet, Route("buscar-produtos")]
        public Produto[] BuscarProdutos()
        {
            return Produtos;
        }

        [HttpGet, Route("buscar-produtos-nome")]
        public Produto[] BuscarProdutosPorNome(string nome)
        {
            return Produtos.Where(o => o.Nome.ToLower().Contains(nome.ToLower())).ToArray();
        }

        [HttpGet, Route("buscar-produtos-id")]
        public Produto BuscarProdutosPorNome(int id)
        {
            return Produtos.Where(o => o.Id == id).FirstOrDefault();
        }

        [HttpGet, Route("buscar-descricao-produtos")]
        public DescricaoProduto BuscarDescricaoProdutos(int idProduto)
        {
            return DescricaoProduto.Where(o => o.IdProduto == idProduto).FirstOrDefault();
        }
    }
}
