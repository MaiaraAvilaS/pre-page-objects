export default class ProdutosPage{
        novoBtn: string = "Novo1";
        salvarBtn: string = "Salvar2";
        nomeTxt: string = "";
        precoTxt: string = "";
        listaProdTxt: string = "";
        voltarBtn: string = "Voltar3";

        clicarNoBotao(nomeDoBotao:string){
            let botaoEscolhido = "";

            switch (nomeDoBotao) {
                case "Novo":
                    botaoEscolhido = this.novoBtn;
                    break;
                case "Salvar":
                    botaoEscolhido = this.salvarBtn;    
                    break;
                case "Voltar":
                    botaoEscolhido = this.voltarBtn;
                    break;
                default: 
                    botaoEscolhido = "Botão inválido!"
                    break;
            }
            console.log(`Clicou no botão ${botaoEscolhido}`);
            this.validarNovoProduto();

        }

        validarNovoProduto(): boolean{
            let cadastradoComSucesso = false;

            if (this.nomeTxt == "Maçã" && this.precoTxt.length > 0){
                console.log("Produto cadastrado com sucesso!");
                cadastradoComSucesso = true;
            }else{
                console.log("Produto inválido");
                cadastradoComSucesso = false;
            }
            return cadastradoComSucesso;
        }

        preencherNomeTxt(nome:string){
            this.nomeTxt = nome;

        }

        preencerPrecoTxt(preco: string){
            this.precoTxt = preco;
        }

}