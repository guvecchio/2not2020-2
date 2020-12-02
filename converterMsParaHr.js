function converteTempo(ms) {
    const milisegundos = ms % 1000 << 0
    const seg = ms / 1000 % 60 << 0
    const min = ms / 1000 / 60 % 60 << 0
    const hr = ms / 1000 / 60 / 60 % 60 << 0

    console.log(`${hr}hrs:${min}min:${seg}seg:${milisegundos}ms`)
}

converteTempo(1586.564)
