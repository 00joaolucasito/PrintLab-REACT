import './index.scss';


export default function Rodape(){

    return(
        
        <div class='comp-rodape'>
            <div class='dmor'>
                <div class='d'>
                    <h3>Mídias Sociais</h3>
                    <p>Facebook (Brasil)</p>
                    <p>Instagram (Brasil)</p>
                </div>
                <div class='d'>
                    <h3> Suporte </h3>
                    <p>Políticas de pós-venda</p>
                    <p>Políticas de segurança</p>
                    <p>Termos de uso</p>
                    <p>Garantia</p>
                    <p>FAQ</p>
                </div>
                <div class='d'>
                    <h3> Sobre </h3>
                    <p>Sobre Nós</p>
                    <p>Contate-nos</p>
                    <p>Estamos Contratando</p>
                </div>
                <div class="OS"></div>
                <div class='dana'>
                    <h3> Junte-se a Nós </h3>
                    <p>Assinar para receber as ultimas noticias</p> <input placeholder="Envie seu e-mail"/> 
                    <button className=''> Enviar </button>
                </div>
            </div>
            <div id="dps"></div>
            <div class='d2'>
                <div class="oa">
                    <img class='logo' src='/assets/images/logo2.png' alt='' />
                </div>
                <p class=""> <img class='local' src='/assets/images/local.png' alt='' /> Rua das Flores, 123, Bairro
                    Novo, Cidade Fictícia, Estado Imaginário, CEP 12345-678.</p>
            </div>

        </div>
    )
}