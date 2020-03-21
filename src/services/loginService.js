import { doRequest, doPublicRequest } from './basicRequest'

const RESOURCE = "/escolas/autenticacao"

export const doLogin = user => {
    return doPublicRequest(RESOURCE, 'POST', user);
}