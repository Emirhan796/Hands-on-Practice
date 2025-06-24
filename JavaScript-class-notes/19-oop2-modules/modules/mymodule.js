console.log("My Module Loaded")

export const CALISMA_SAATI = 40

export function topla(s1,s2) {
    return s1 + s2
}

let counter = 0
const inc = (miktar) => {
 counter += miktar
 return counter
}


const dec = (miktar) => {
 counter -= miktar
 return counter
}

const moduleName = "MY_MODULE"
export {inc,dec, moduleName}

