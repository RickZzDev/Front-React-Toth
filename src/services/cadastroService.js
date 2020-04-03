import { doPublicRequest } from './basicRequest';

const RESOURCE = '/escolas/cadastro'

const doCadastro = user => {
    return doPublicRequest(RESOURCE, 'POST', user)
}

export default doCadastro