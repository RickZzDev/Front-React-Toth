import request from './basicRequest'

const RESOURCE = 'escolas/cadastro'

const doCadastro = user => {
    return request.post(RESOURCE, user)
}

export default doCadastro