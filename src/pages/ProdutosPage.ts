export default class ProdutosPage {
    private novoBtn: string = "Novo1";
    private salvarBtn: string = "Salvar2";
    private nomeTxt: string = "";
    private precoTxt: string = "";
    private listaProdTxt: string = "";
    private voltarBtn: string = "Voltar3";

    clicarNoBotao(nomeDoBotao: string) {
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
        if (botaoEscolhido == this.salvarBtn) {
            this.validarNovoProduto();
        }

        

    }

    validarNovoProduto(): boolean {
        let cadastradoComSucesso = false;

        if (this.nomeTxt == "Maçã" && this.precoTxt.length > 0) {
            console.log("Produto cadastrado com sucesso!");
            cadastradoComSucesso = true;
        } else {
            console.log("Produto inválido");
            cadastradoComSucesso = false;
        }
        return cadastradoComSucesso;
    }

    preencherNomeTxt(nome: string) {
        this.nomeTxt = nome;

    }

    preencerPrecoTxt(preco: string) {
        this.precoTxt = preco;
    }

}