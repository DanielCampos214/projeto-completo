const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.29
const euro = 5.27

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realVauleText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    realVauleText.innerHTML = inputReais
    currencyValueText.innerHTML = inputReais / dolar

    realVauleText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais)

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar)


    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro)
    }


}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')


    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/estados-unidos (1) 1.png"
    }


    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)