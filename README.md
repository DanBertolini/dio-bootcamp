# Exercícios de Fixação

## Parte 1

Para rodar o projeto use o comando a seguir:

```bash
npm run exercises
```

### Criação dos componentes

```bash
ng g c payment --project exercises
ng g c payment-ways --project exercises
ng g c credit-card --project exercises
```

> Passamos o parâmetro `--project` pois estamos em um repositório com mais de um projeto, caso não passado ele pega a informação `defaultProject` do `angular.json`

### Utilização de Snippets

De forma a acelerar o exercício prático, iremos injetar alguns trechos de código prontos contendo a estrutura básica de HTML CSS (SCSS) dos nossos componentes

Os snippets que usaremos nos respectivos arquivos são:

- **payment-style** => `payment.component.scss`
- **payment-html** => `payment.component.html`
- **payment-ways-style** => `payment-ways.component.scss`
- **payment-ways-html** => `payment-ways.component.html`
- **credit-card-style** => `credit-card.component.scss`
- **credit-card-html** => `credit-card.component.html`

### Criação de Interfaces e Models Uteis

```bash
ng g interface models/parcel-option --project exercises
ng g interface models/payment-option --project exercises
ng g enum models/payment-ways --project exercises
```

> Por questões de padronização vamos alterar o nome dos arquivos gerados e colocar um sufixo `.interface` ou `.enum` (dependendo do arquivo) antes da extensão (Ex.: `coupon.ts` => `coupon.interface.ts`)

### Snippets para definir nossas interfaces e models

- **parcel-option-interface** => `parcel-option.interface.ts`
- **payment-option-interface** => `payment-option.interface.ts`
- **payment-options-enum** => `payment-ways.enum.ts`

### Consumindo nossos componentes criados

Primeiro, vamos apagar todo o conteúdo do `app.component.html` e no lugar faremos a referência do nosso primeiro componente, ele será nosso componente 'pai'

```html
<app-payment></app-payment>
```

> Cuidado para não alterar o arquivo errado, lembrando que estamos mexendo no projeto `exercises`

Em seguida vamos adicionar a referência dos demais componentes no nosso componente 'pai', alterando o arquivo `payment.component.html` até ele ficar mais ou menos assim:

```html
<div class="payment">
    <div class="container-fluid">
        <div class="row">
            <span class="total">
                Valor Total
                <strong class="total-value">

                </strong>
            </span>
        </div>
        <div>
            <app-payment-ways></app-payment-ways>
        </div>
        <div>
            <app-credit-card></app-credit-card>
        </div>
        <div>
            <app-promotional-coupon></app-promotional-coupon>
        </div>
    </div>
</div>
```

### Adicionando outros snippets de conteúdo

Os snippets a serem adicionados contém montagem de variáveis contendo dados a serem usados na construção do nosso exemplo, e também alguns recursos mais avançados do Angular que não serão aprofundados nessa aula

- **payment-options-array** => `payment-ways.component.ts`
- **credit-card-parcel-options** => `credit-card.component.ts`
- **credit-card-form** => `credit-card.component.ts`

## Parte 2

Para rodar o projeto use o comando a seguir:

```bash
npm run exercises
```

## Parte 3

Para rodar o projeto use o comando a seguir:

```bash
npm run start
```

### Criação de componentes comuns

```bash
ng g c filter --project bookcamp
```
