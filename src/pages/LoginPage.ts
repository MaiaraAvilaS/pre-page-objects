export default class LoginPage {
    private usuarioTxt: string = "";
    private senhaTxt: string = "";
    private logarBtn: string = "";

    preencherUsuario(nome: string) {
        this.usuarioTxt = nome;
    }

    preencherSenha(senha: string) {
        this.senhaTxt = senha;
    }

    clicarBotaoLogin() {
        console.log(`Usuário atual : ${this.usuarioTxt}`)
        console.log(`Senha atual : ${this.senhaTxt}`)
        console.log("Logado com sucesso!")
    }
}

