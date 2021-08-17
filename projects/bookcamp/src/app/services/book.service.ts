import { Injectable } from '@angular/core';

import { Book } from '../models/book.interface';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    constructor() { }

    private getAvailableBooks(): Array<Book> {
        return [
            {
                id: 1,
                relevanceId: 1,
                title: 'Harry Potter e a Pedra Filosofal',
                description:
                    'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. ' +
                    'Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. ' +
                    'Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, ' +
                    'herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. ' +
                    'No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, ' +
                    'como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira ' +
                    'história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do ' +
                    'mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à ' +
                    'rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa ' +
                    'a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. ' +
                    'Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, ' +
                    'resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, ' +
                    'caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.',
                cover: '/assets/book-covers/harry-potter-pedra-filosofal.jpg',
                value: 34.0,
                author: 'J. K. Rowling',
                genre: ['Ficção', 'Fantasia'],
                availableForRenting: false,
            },
            {
                id: 2,
                relevanceId: 7,
                title: 'Anjos e Demônios',
                description:
                    'Antes de decifrar O Código Da Vinci, Robert Langdon, o famoso professor de simbologia de Harvard, vive sua primeira ' +
                    'aventura em Anjos e demônios, quando tenta impedir que uma antiga sociedade secreta destrua a Cidade do Vaticano.\n\n' +
                    'Às vésperas do conclave que vai eleger o novo Papa, Langdon é chamado às pressas para analisar um misterioso símbolo marcado ' +
                    'a fogo no peito de um físico assassinado em um grande centro de pesquisas na Suíça.\n\n' +
                    'Ele descobre indícios de algo inimaginável: a assinatura macabra no corpo da vítima é dos Illuminati, uma poderosa fraternidade ' +
                    'que ressurgiu disposta a levar a cabo a lendária vingança contra a Igreja Católica. De posse de uma nova arma devastadora, roubada ' +
                    'do centro de pesquisas, ela ameaça explodir a Cidade do Vaticano e matar os quatro cardeais mais cotados para a sucessão papal.\n\n' +
                    'A antiga sociedade ressurgiu disposta a levar a cabo a lendária vingança contra a Igreja Católica, seu inimigo mais odiado. ' +
                    'De posse de uma nova arma devastadora, roubada do centro de pesquisas, ela ameaça explodir a Cidade do Vaticano e matar os quatro ' +
                    'cardeais mais cotados para a sucessão papal.\n\n' +
                    'Correndo contra o tempo, Langdon voa para Roma junto com Vittoria Vetra, uma bela cientista italiana. Numa caçada frenética por criptas, ' +
                    'igrejas e catedrais, os dois desvendam enigmas e seguem uma trilha que pode levar ao covil dos Illuminati - um refúgio secreto onde está a ' +
                    'única esperança de salvação da Igreja nesta guerra entre ciência e religião.\n\n' +
                    'Em Anjos e Demônios, Dan Brown demonstra novamente sua habilidade de entremear suspense com fascinantes informações sobre ciência, religião e ' +
                    'história da arte.',
                cover: '/assets/book-covers/anjos-demonios.jpg',
                value: 27.5,
                author: 'Dan Brown',
                genre: ['Suspense', 'Romance', 'Ficção'],
                availableForRenting: false,
            }, {
                id: 3,
                relevanceId: 4,
                title: 'Dom Casmurro',
                description:
                    'Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história ' +
                    'do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura ' +
                    'brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos ' +
                    'sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da ' +
                    'mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.',
                cover: '/assets/book-covers/dom-casmurro.jpeg',
                value: 10.50,
                author: 'Machado de Assis ',
                genre: ['Romance'],
                availableForRenting: true
            }, {
                id: 4,
                relevanceId: 11,
                title: 'Me Poupe! – 10 passos para nunca mais faltar dinheiro no seu bolso',
                description:
                    'Como economizar no dia a dia? Como enfrentar crises econômicas com tranquilidade? Como poupar mesmo ganhando pouco? Quais são os melhores (e os piores) investimentos? ' +
                    'Será que está na hora de investir em ações? Como poupar para o futuro sem abrir mão dos desejos e necessidades do presente?\n\n\n' +
                    'Sei que você tem muitas dúvidas sobre o que fazer com o seu dinheiro. Sei também que muita gente simplesmente não faz nada com ele – a não ser pagar contas e juntar moedinhas ' +
                    'para chegar até o fim do mês.\n\n\n' +
                    'É por isso que estou aqui.\n\n' +
                    'Sempre fui uma poupadora compulsiva. Desde cedo compreendi que precisaria juntar dinheiro para realizar meus sonhos. Aos 7 anos comecei a poupar para comprar um carro quando ' +
                    'fizesse 18. Com 23 comprei meu primeiro apartamento à vista. Aos 30 pedi demissão do meu emprego de repórter de TV e montei o canal Me Poupe!, no YouTube.',
                cover: '/assets/book-covers/me-poupe.jpeg',
                value: 19.10,
                author: 'Nathalia Arcuri',
                genre: ['Finanças'],
                availableForRenting: false
            },
            {
                id: 5,
                relevanceId: 8,
                title: 'A revolução dos bichos',
                description:
                    'Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de ' +
                    'uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.\n' +
                    'Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ' +
                    'ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria ' +
                    'Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso ' +
                    'na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo ' +
                    'Ocidente nas décadas seguintes como arma ideológica contra o comunismo. O próprio Orwell, adepto do socialismo e inimigo de qualquer forma de manipulação política, sentiu-se incomodado com ' +
                    'a utilização de sua fábula como panfleto. Depois das profundas transformações políticas que mudaram a fisionomia do planeta nas últimas décadas, a pequena obra-prima de Orwell pode ser vista ' +
                    'sem o viés ideológico reducionista. Mais de sessenta anos depois de escrita, ela mantém o viço e o brilho de uma alegoria perene sobre as fraquezas humanas que levam à corrosão dos grandes ' +
                    'projetos de revolução política. É irônico que o escritor, para fazer esse retrato cruel da humanidade, tenha recorrido aos animais como personagens. De certo modo, a inteligência política que ' +
                    'humaniza seus bichos é a mesma que animaliza os homens. Escrito com perfeito domínio da narrativa, atenção às minúcias e extraordinária capacidade de criação de personagens e situações, A ' +
                    'revolução dos bichos combina de maneira feliz duas ricas tradições literárias: a das fábulas morais, que remontam a Esopo, e a da sátira política, que teve talvez em Jonathan Swift seu ' +
                    'representante máximo. "A melhor sátira já escrita sobre a face negra da história moderna." Malcolm Bradbury "Um livro para todos os tipos de leitor, seu brilho ainda intacto depois de ' +
                    'sessenta anos." Ruth Rendell',
                cover: '/assets/book-covers/revolucao-bichos.jpg',
                value: 10.90,
                author: 'George Orwell',
                genre: ['Sátira', 'Ficção'],
                availableForRenting: true,
            },
            {
                id: 6,
                relevanceId: 2,
                title: 'O pequeno príncipe',
                description: 'Nesta clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica ' +
                    'e poética através de planetas que encerram a solidão humana. A edição conta com a clássica tradução do poeta imortal dom Marcos Barbosa, e é a versão mais consagrada da obra, publicada no Brasil desde 1952.',
                cover: '/assets/book-covers/pequeno-principe.jpeg',
                value: 10.9,
                author: 'Antoine de Saint-Exupéry',
                genre: ['Ficção', 'Literatura Infantil'],
                availableForRenting: true
            },
            {
                id: 7,
                relevanceId: 8,
                title: 'As Crônicas de Nárnia',
                description: 'Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é \'O leão, a feiticeira e o guarda-roupa\'' +
                    ', escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como \'As crônicas de Nárnia\'. Nos últimos cinqüenta anos, \'As crônicas de Nárnia\' ' +
                    'transcenderam o gênero da fantasia para se tornar parte do cânone da literatura clássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ' +
                    'ficcional que tem fascinado gerações. Esta edição apresenta todas as sete crônicas integralmente, num único volume. Os livros são apresentados de acordo com a ordem de preferência de Lewis, cada capítulo com uma ilustração do ' +
                    'artista original, Pauline Baynes. Enganosamente simples e direta, \'As crônicas de Nárnia\' continuam cativando os leitores com aventuras, personagens e fatos que falam a pessoas de todas as idades.',
                cover: '/assets/book-covers/narnia.jpg',
                value: 37.9,
                author: 'C. S. Lewis',
                genre: ['Ficção'],
                availableForRenting: false
            },
            {
                id: 8,
                relevanceId: 38,
                title: 'O homem mais rico da Babilônia',
                description: 'Com mais de dois milhões de exemplares vendidos no mundo todo, O homem mais rico da Babilônia é um clássico sobre como multiplicar riqueza e solucionar problemas financeiros. Baseando-se nos segredos de sucesso dos antigos ' +
                    'babilônicos ― os habitantes da cidade mais rica e próspera de seu tempo ―, George S. Clason mostra soluções ao mesmo tempo sábias e muito atuais para evitar a falta de dinheiro, como não desperdiçar recursos durante tempos de opulência, ' +
                    'buscar conhecimento e informação em vez de apenas lucro, assegurar uma renda para o futuro, manter a pontualidade no pagamento de dívidas e, sobretudo, cultivar as próprias aptidões, tornando-se cada vez mais habilidoso e consciente.',
                cover: '/assets/book-covers/homem-rico-babilonia.jpg',
                value: 13.89,
                author: 'George S Clason',
                genre: ['Autoajuda'],
                availableForRenting: true
            },
            {
                id: 9,
                relevanceId: 5,
                title: 'O diário de Anne Frank',
                description: 'O Diário de Anne Frank teve a autenticidade confirmada por peritos. Estudos forenses da caligrafia de Anne e exame do papel do diário, da tinta e da cola comprovaram ser de material existente na época. A conclusão foi oficialmente ' +
                    'apresentada pelo Instituto Estatal Holandês para Documentação da Guerra.',
                cover: '/assets/book-covers/anne-frank.jpg',
                value: 10.90,
                author: 'Anne Frank',
                genre: ['Biografia'],
                availableForRenting: true,
            },
            {
                id: 10,
                relevanceId: 6,
                title: 'O Hobbit',
                description: 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. ' +
                    'Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.\n' +
                    'Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, sejam eles, os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem ' +
                    '(se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler e descobrir.\n' +
                    'Lançado em 1937, O Hobbit é um divisor de águas na literatura fantástica mundial. Mais de 80 anos após a sua publicação, o livro que antecede os ocorridos em O Senhor dos Anéis continua arrebatando fãs de todas as idades, talvez pelo ' +
                    'seu tom brincalhão com uma pitada de magia élfica, ou talvez porque J.R.R. Tolkien tenha escrito o melhor livro infanto-juvenil de todos os tempos.',
                cover: '/assets/book-covers/hobbit.jpg',
                value: 31.89,
                author: 'J.R.R. Tolkien',
                genre: ['Ficção', 'Fantasia'],
                availableForRenting: false,
            }
        ];
    }

    public getAvailableBooksForShopping(): Array<Book> {
        return this.getAvailableBooks();
    }

    public getAvailableBooksForRent(): Array<Book> {
        return this.getAvailableBooks().filter((book) => book.availableForRenting);
    }
}
