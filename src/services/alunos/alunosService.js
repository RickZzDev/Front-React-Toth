import request from '../basicRequest'

const CADASTRAR = 'alunos/cadastro'

export const salvarAluno = async aluno => {
    try {
        return await request.post(CADASTRAR, aluno)
    } catch(erro) {
        return erro.response
    }
}

export default salvarAluno