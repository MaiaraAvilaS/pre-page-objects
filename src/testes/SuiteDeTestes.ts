import LoginPage from "../pages/LoginPage";

export default class SuiteDeTestes{

    testarLoginComSucesso() {
        let loginPage = new LoginPage();
        loginPage.preencherUsuario("Maia");
        loginPage.preencherSenha("123");
        loginPage.clicarBotaoLogin();
    }

        
    

}

///////////////////////

let p1 = new SuiteDeTestes();

p1.testarLoginComSucesso();