import { doRequest, doPublicRequest } from './basicRequest'

const RESOURCE = "/escolas/autenticacao"

const doLogin = user => {
    return doPublicRequest(RESOURCE, 'POST', user);
}

export default doLogin