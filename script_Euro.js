const url = 'https://economia.awesomeapi.com.br/json/last/'
const coins = 'EUR-BRL'

fetch(url + coins)
    //apos a consulta ele retorna um objeto json
    .then(function(response){
        return response.json()
    })
    //retornar os valores obtidos
    .then(function(data){
        const euroReal = data.EURBRL
        //formatação da data
        //let estaData = new Date(EuroReal.create_date)

        document.getElementById('title').innerHTML = euroReal.name
        document.getElementById('thisdate').innerHTML = euroReal.create_date

        //valores maximos
        document.getElementById('maxvalue').innerHTML = parseFloat(euroReal.high).toLocaleString('pt-br',{
            style: 'currency',
            currency: 'BRL'
        })
        //valores minimos
        document.getElementById('minvalue').innerHTML = parseFloat(euroReal.high).toLocaleString('pt-br',{
            style: 'currency',
            currency: 'BRL'
        }) 
    })