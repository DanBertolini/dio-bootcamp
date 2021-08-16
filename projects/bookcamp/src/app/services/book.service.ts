import { Injectable } from '@angular/core';

import { Book } from '../models/book.interface';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    constructor() {}

    private getAvailableBooks(): Array<Book> {
        return [
            {
                id: 1,
                relevanceId: 1,
                title: 'Harry Potter e a Pedra Filosofal',
                description:
                    'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
                value: 34.0,
                author: 'J. K. Rowling',
                genre: ['Ficção', 'Fantasia'],
                availableForRenting: true,
            },
            {
                id: 2,
                relevanceId: 2,
                title: 'Anjos e Demônios',
                description: `Antes de decifrar O Código Da Vinci, Robert Langdon, o famoso professor de simbologia de Harvard, vive sua primeira aventura em Anjos e demônios, quando tenta impedir que uma antiga sociedade secreta destrua a Cidade do Vaticano.

      Às vésperas do conclave que vai eleger o novo Papa, Langdon é chamado às pressas para analisar um misterioso símbolo marcado a fogo no peito de um físico assassinado em um grande centro de pesquisas na Suíça.

      Ele descobre indícios de algo inimaginável: a assinatura macabra no corpo da vítima é dos Illuminati, uma poderosa fraternidade que ressurgiu disposta a levar a cabo a lendária vingança contra a Igreja Católica. De posse de uma nova arma devastadora, roubada do centro de pesquisas, ela ameaça explodir a Cidade do Vaticano e matar os quatro cardeais mais cotados para a sucessão papal.

      A antiga sociedade ressurgiu disposta a levar a cabo a lendária vingança contra a Igreja Católica, seu inimigo mais odiado. De posse de uma nova arma devastadora, roubada do centro de pesquisas, ela ameaça explodir a Cidade do Vaticano e matar os quatro cardeais mais cotados para a sucessão papal.

      Correndo contra o tempo, Langdon voa para Roma junto com Vittoria Vetra, uma bela cientista italiana. Numa caçada frenética por criptas, igrejas e catedrais, os dois desvendam enigmas e seguem uma trilha que pode levar ao covil dos Illuminati - um refúgio secreto onde está a única esperança de salvação da Igreja nesta guerra entre ciência e religião.

      Em Anjos e Demônios, Dan Brown demonstra novamente sua habilidade de entremear suspense com fascinantes informações sobre ciência, religião e história da arte.`,
                cover: 'https://images-na.ssl-images-amazon.com/images/I/41SBG7lO84L._SX346_BO1,204,203,200_.jpg',
                value: 27.5,
                author: 'Dan Brown',
                genre: ['Suspense', 'Romance', 'Ficção'],
                availableForRenting: false,
            },
        ];
    }

    public getAvailableBooksForShopping(): Array<Book> {
        return this.getAvailableBooks();
    }

    public getAvailableBooksForRent(): Array<Book> {
        return this.getAvailableBooks().filter((book) => book.availableForRenting);
    }
}
