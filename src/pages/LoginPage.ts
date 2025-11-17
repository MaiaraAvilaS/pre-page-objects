export default class LoginPage{
    usuarioTxt: string = "";
    senhaTxt: string = "";
    logarBtn: string = "";

     preencherUsuario(nome:string) {
        this.usuarioTxt = nome;
    }

     preencherSenha(senha:string){
        this.senhaTxt = senha;
     }

     clicarBotaoLogin(){
        console.log(`Senha atual : ${this.senhaTxt}`)
        console.log(`Usuário atual : ${this.usuarioTxt}`)
        console.log("Logado com sucesso!")
     }
}

