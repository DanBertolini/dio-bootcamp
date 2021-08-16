# Exercícios de Fixação

## Parte 1

### Criação dos componentes

```bash
ng g c payment --project exercises
ng g c payment-ways --project exercises
ng g c credit-card --project exercises
ng g c promotional-coupon --project exercises
```

> Passamos o parâmetro `--project` pois estamos em um repositório com mais de um projeto, caso não passado ele pega a informação `defaultProject` do `angular.json`

### Utilização de Snippets

De forma a acelerar o exercício prático, iremos injetar alguns trechos de código prontos contendo a estrutura básica de HTML CSS (SCSS) dos nossos componentes

Os snippets que usaremos nos respectivos arquivos são:

- **payment-style** => `payment.component.scss`
- **payment-html** => `payment.component.html`
- **payment-ways-style** => `payment-ways.component.scss`
- **payment-ways-html** => `payment-ways.component.html`
- **promotional-coupon-style** => `promotional-coupon.component.scss`
- **promotional-coupon-html** => `promotional-coupon.component.html`
- **credit-card-style** => `credit-card.component.scss`
- **credit-card-html** => `credit-card.component.html`

### Criação de Interfaces e Models Uteis

```bash
ng g interface models/coupon --project exercises
ng g interface models/parcel-option --project exercises
ng g interface models/payment-option --project exercises
ng g enum models/payment-ways --project exercises
```

> Por questões de padronização vamos alterar o nome dos arquivos gerados e colocar um sufixo `.interface` ou `.enum` (dependendo do arquivo) antes da extensão (Ex.: `coupon.ts` => `coupon.interface.ts`)

### Adicionando outros snippets de conteúdo

Os snippets a serem adicionados contém montagem de variáveis contendo dados a serem usados na construção do nosso exemplo, e também alguns recursos mais avançados do Angular que não serão aprofundados nessa aula

- **payment-options-array** => `payment-ways.component.html`
- **credit-card-parcel-options** => `credit-card.component.html`
- **credit-card-form** => `credit-card.component.html`

## Parte 2

### Criação da Service

```bash
ng g s services/promotional-coupon --project exercises
```
