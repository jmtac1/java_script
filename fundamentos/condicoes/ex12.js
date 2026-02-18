var idd = 64
console.log(`você tem ${idd} anos`)
if (idd < 16) {
    console.log('não vota')
} else if (idd < 18 || idd >= 65) {
        console.log('voto opcional')
    } else {
        console.log('voto obrigatório')
    }