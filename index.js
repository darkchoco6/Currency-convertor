currencytype = document.getElementById('ctype');
currencyamount = document.getElementById('amount')
output = document.getElementById('output')

let value = 0.00;

output.textContent = value;

function convert()
{
    switch(currencytype.value)
    {
        case 'usd':
            value += eval(currencyamount.value * 83.24);
            break;
        case 'dihram':
            value += eval(currencyamount.value * 22.67);
            break;
        case 'pound':
            value += eval(currencyamount.value * 101.17);
            break;
        case 'dinar':
            value += eval(currencyamount.value * 269.81);
            break;
        case 'riyal':
            value += eval(currencyamount.value * 22.19);
            break;
        case 'euro':
            value += eval(currencyamount.value * 90.92);
            break;
        case 'swiss':
            value += eval(currencyamount.value * 94.03);
            break;
        case 'yen':
            value += eval(currencyamount.value * 0.56);
            break;
        default:
            value ='Invalid Currency Type';

    }
    console.log(currencytype.value)
    output.textContent = value;
}

function refresh(){
    value = 0;
    output.textContent = value;
    
}