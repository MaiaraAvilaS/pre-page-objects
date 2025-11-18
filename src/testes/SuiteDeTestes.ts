import LoginPage from "../pages/LoginPage";
import PrincipalPage from "../pages/PrincipalPage";
import ProdutosPage from "../pages/ProdutosPage";
import UsuariosPage from "../pages/UsuariosPage";

export default class SuiteDeTestes{

    testarLoginComSucesso() {
        let loginPage = new LoginPage();
        loginPage.preencherUsuario("Maia");
        loginPage.preencherSenha("123");
        loginPage.clicarBotaoLogin();
       
    }

       testarCadastroDeProdutoComSucesso(){
        let loginPage = new LoginPage(); // criar um objeto para encapsular a lógica e reaproveitar
        loginPage.preencherUsuario("Maia"); //objeto. para chamar as propriedades da classe original
        loginPage.preencherSenha("123");
        loginPage.clicarBotaoLogin();

        let principalPage = new PrincipalPage();
        principalPage.clicarProdutosLink();
        
        let produtosPage = new ProdutosPage();
        produtosPage.clicarNoBotao("Novo");
        produtosPage.preencherNomeTxt("Maçã");
        produtosPage.preencerPrecoTxt("R$ 1,00");
        produtosPage.clicarNoBotao("Salvar");
       } 

       testarCadastroUsuarioComSucesso(){
        let usuariosPage = new UsuariosPage();
        usuariosPage.preencherNomeTxt("Maiara");
        usuariosPage.preencherSenhaTxt("321");
        usuariosPage.clicarBtnSalvar();
    
        }


    

}

///////////////////////

let p1 = new SuiteDeTestes(); //objeto da classe SuiteDeTestes

//p1.testarLoginComSucesso();
//p1.testarCadastroDeProdutoComSucesso();
p1.testarCadastroUsuarioComSucesso();