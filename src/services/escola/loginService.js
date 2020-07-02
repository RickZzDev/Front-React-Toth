import request from '../basicRequest'
const TOKEN_KEY = "@Toth:escola"

const RESOURCE = "escolas/autenticacao"
const RESOURCE_CNPJ = 'escolas/cnpj'

const doLogin = async user => {
    try{
        const tryLogin = await request.post(RESOURCE, user)

        if(tryLogin.status == 200)
            localStorage.setItem(TOKEN_KEY, JSON.stringify(tryLogin.data))

        return tryLogin
    } catch(erro) {
        return erro.response
    }
    
}

export const verificaCnpj = cnpj => {
    try {
        return request.post(RESOURCE_CNPJ, cnpj)
    } catch(erro) {
        return erro.response
    }
}

export const getToken = () => {
    const escola = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if(escola === null)
        return null
    else
        return escola.jwt
}

export const isLogged = () => {
    const escola = localStorage.getItem(TOKEN_KEY)
     return escola != null ? JSON.parse(escola) : null
}

export const signOut = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export default doLogin