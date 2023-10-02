var idade = 16
if (idade < 16) {
    console.log('Não vota') 
} else {
    if (idade < 16 || idade > 65) {
        console.log('Voto opcional')
        console.log(`Você tem ${idade} anos, vá dormir!`)
    } else {
        console.log('Voto obrigátorio')
    }
}
