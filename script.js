const url = 'https://economia.awesomeapi.com.br/json/last/'
const coins = 'USD-BRL,EUR-BRL'

fetch(url + coins)
    //apos a consulta ele retorna um objeto json
    .then(function(response){
        return response.json()
    })
    //retornar os valores obtidos
    .then(function(data){
        const dolarReal = data.USDBRL
        const euroReal = data.EURBRL

        //formatação da data
        //let estaData = new Date(dolarReal.create_date)

        document.getElementById('title').innerHTML = dolarReal.name
        document.getElementById('thisdate').innerHTML = dolarReal.create_date

        //valores maximos
        document.getElementById('maxvalue').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br',{
            style: 'currency',
            currency: 'BRL'
        })
        //valores minimos
        document.getElementById('minvalue').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br',{
            style: 'currency',
            currency: 'BRL'
        })        
    })