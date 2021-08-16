export interface Juros {
    juros: number,
    montante: number
}

export class Utils {
    validaEmail(email: string): boolean {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    calculaDesconto(valor: number, desconto: number): number {
        return valor - (valor * desconto) / 100;
    }

    calculaJurosSimples(valor: number, taxa: number, meses: number): Juros {
        const juros = valor * taxa * meses;
        const montante = valor + juros;
        return { juros, montante };
    }
}
