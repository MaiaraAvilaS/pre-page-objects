export default class UsuariosPage{
        private novoBtn: string = "Novo";
        private salvarBtn: string = "Salvar";
        private nomeUsuarioTxt: string = "";
        private senhaUsuarioTxt: string = "";
        private listaUsuarioTxt: Array<string>;
        private voltarUsuarioBnt: string = "Voltar";

        /**
         *
         */
        constructor() {
            this.listaUsuarioTxt = new Array<string>();
        }

        clicarBtnNovo(){
            console.log(`O botão clicado foi: ${this.novoBtn}`);
        }

        preencherNomeTxt(nome: string){ // passa o parametro para setar a variável local
            this.nomeUsuarioTxt = nome;
        }

        preencherSenhaTxt(senha:string){
            this.senhaUsuarioTxt = senha;
        }

        clicarBtnSalvar(){

            console.log(`O botão clicado foi: ${this.salvarBtn}`);
            this.validarUsuario();
        }

        clicarBtnVoltar(){
            console.log("Voltou para tela principal");
        }

        validarUsuario(){
            if(this.nomeUsuarioTxt == "Maiara" && this.senhaUsuarioTxt.length > 0){
                console.log(`Usuário ${this.nomeUsuarioTxt} cadastrado com sucesso!`);
            }else{
                console.log("Usuário ou senha inválido");
            }
        }

}