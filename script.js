


class ClasseBase {
    constructor(ligado=false) {
        this.ligado = ligado;
    }

    desligar(){
        this.ligado = false;
    }

    ligar(){
        this.ligado = true;
    }

    atualizar(){
        return true;
    }

    executar(event){
        return true;
    }
    movimentacao_de_mouse(event){
        console.log(event.clientX);
    }

    mouse_esquerdo_clicado(event){
        if (event.button == 0) {
            console.log('Esquuerdo Clicado');
        }
    }

    mouse_direito_clicado(event){
        if (event.button == 1) {
            console.log('Direito Clicado');
        }
    }


    mudar_conteudo(event, add_classe){
        let span = event.target;
        span.className = add_classe;
    }

    duplo_clique(event){
        console.log('Duplo click');
    }
}
class Instrumentos extends ClasseBase {
    constructor(desativar_botoes) {
        super();
        this.desativar_botoes = desativar_botoes
        this.canvas = [];
        this.conteudo = document.getElementById('conteudo');
    }
    adicionar_instrumento(){
        var instrumento = document.getElementById('instrumento').value;
        var img = new Image();
        img.src = `icons/${instrumento}.png`;
        img.onload = () => {
            this.ctx.clearRect(0,0, 180, 30);
            this.ctx.drawImage(img, 0, 0, 20, 20); // Coordenadas (x, y) e tamanho (largura, altura)
        };
    }

    adicionar_novo_canva(){
        this.canva = document.createElement('canvas');
        this.canva.width = 50;
        this.canva.height = 50;
        this.canva.style.position = 'absolute';
        this.canva.style.top = '0px';
        this.canva.style.left = '0px';
        this.conteudo.appendChild(this.canva);
        this.ctx = this.canva.getContext('2d');
        this.adicionar_instrumento();
    }

    concluir_canva_atual(){
        this.canvas.push(this.canva);
        this.adicionar_novo_canva();
    }



    ligar(){
        this.ligado = true;
        this.adicionar_novo_canva();
    }

    desligar(){
        this.ligado = false;
    }

    mouse_direito_clicado(event){
       
        if (event.button == 2) {
            try {
                this.desligar();
                this.conteudo.removeChild(this.canva);
                this.canva = null;
                
            } catch (error) {
                console.log('Função desligada');
            }
        }

        this.desativar_botoes();
    }

    mouse_esquerdo_clicado(event){
        if (event.button == 0) {
            try {
                var index_do_canvas = 0;
                this.canvas.forEach((canva, index) => {
                    console.log(canva);
                    console.log(event.target);
                    if(event.target == canva){
                        index_do_canvas = index;
                    }
                });

                this.conteudo.removeChild(this.canvas[index_do_canvas]);
                this.canvas.splice(index_do_canvas, 1);
                this.conteudo.removeChild(this.canva);
                    
            } catch (error) {
                console.log('todos os botões removidos');
            }
        }
    }

    duplo_clique(event){
        this.concluir_canva_atual();
    }

    


    movimentacao_de_mouse(event){
        if (this.ligado) {
            var mouse_x = event.clientX;
            var mouse_y = event.clientY;
            var rect = this.conteudo.getBoundingClientRect();
            var x = mouse_x - rect.left - 5;
            var y = mouse_y - rect.top - 15;
            this.canva.style.left = `${x}px`;
            this.canva.style.top = `${y}px`;
        }
    }
}


class TempoDeAcorde extends ClasseBase {
    constructor(desativar_botoes) {
        super();
        this.desativar_botoes = desativar_botoes
        this.canvas = [];
        this.conteudo = document.getElementById('conteudo');
    }
    adicionar_tempo(){
        var tempo = document.getElementById('tempo-de-acorde').value;
        this.ctx.clearRect(0,0, 180, 30);
        this.ctx.font = '8 pt Segoe UI';
        this.ctx.fillText(`${tempo}`, 0, 20);
    }

    adicionar_novo_canva(){
        this.canva = document.createElement('canvas');
        this.canva.width = 50;
        this.canva.height = 30;
        this.canva.style.position = 'absolute';
        this.canva.style.top = '0px';
        this.canva.style.left = '0px';
        this.conteudo.appendChild(this.canva);
        this.ctx = this.canva.getContext('2d');
        this.adicionar_tempo();
    }

    concluir_canva_atual(){
        this.canvas.push(this.canva);
        this.adicionar_novo_canva();
    }



    ligar(){
        this.ligado = true;
        this.adicionar_novo_canva();
    }

    desligar(){
        this.ligado = false;
    }

    mouse_direito_clicado(event){
       
        if (event.button == 2) {
            try {
                this.desligar();
                this.conteudo.removeChild(this.canva);
                this.canva = null;
                
            } catch (error) {
                console.log('Função desligada');
            }
        }

        this.desativar_botoes();
    }

    mouse_esquerdo_clicado(event){
        if (event.button == 0) {
            try {
                var index_do_canvas = 0;
                this.canvas.forEach((canva, index) => {
                    console.log(canva);
                    console.log(event.target);
                    if(event.target == canva){
                        index_do_canvas = index;
                    }
                });

                this.conteudo.removeChild(this.canvas[index_do_canvas]);
                this.canvas.splice(index_do_canvas, 1);
                this.conteudo.removeChild(this.canva);
                    
            } catch (error) {
                console.log('todos os botões removidos');
            }
        }
    }

    duplo_clique(event){
        this.concluir_canva_atual();
    }

    


    movimentacao_de_mouse(event){
        if (this.ligado) {
            var mouse_x = event.clientX;
            var mouse_y = event.clientY;
            var rect = this.conteudo.getBoundingClientRect();
            var x = mouse_x - rect.left;
            var y = mouse_y - rect.top - 20;
            this.canva.style.left = `${x}px`;
            this.canva.style.top = `${y}px`;
        }
    }
}


class TomTempo extends ClasseBase {
    constructor(desativar_botoes) {
        super();
        this.desativar_botoes = desativar_botoes;
        this.canva = document.createElement('canvas');
        this.conteudo = document.getElementById('conteudo');

        this.canva.style.display = 'none';
        this.canva.width = 180;
        this.canva.height = 30;
        this.canva.style.position = 'absolute';
        this.canva.style.top = '0px';
        this.canva.style.left = '0px';
        this.conteudo.appendChild(this.canva);
        this.ctx = this.canva.getContext('2d');
        this.atualizar_texto();
    }

    remover(){
        this.ligado = false;
        this.canva.style.display = 'none';
    }

    atualizar_texto(){
        var tom = document.getElementById('tom').value;
        var tempo = document.getElementById('tempo').value;
        this.ctx.clearRect(0,0, 180, 30);
        this.ctx.font = '10pt Segoe UI';
        this.ctx.fillText(`Tom: ${tom} | Tempo: ${tempo}`, 0, 20);
    }

    ligar(){
        this.ligado = true;
        this.canva.style.display = 'block';
        this.atualizar_texto();
    }

    desligar(){
        this.ligado = false;
    }

    mouse_esquerdo_clicado(event){
        if (event.button == 0) {
            this.desligar();
            this.desativar_botoes();
        }
    }


    movimentacao_de_mouse(event){
        if (this.ligado) {
            var mouse_x = event.clientX;
            var mouse_y = event.clientY;
            var rect = this.conteudo.getBoundingClientRect();
            var x = mouse_x - rect.left - 50;
            var y = mouse_y - rect.top - 30 / 2 - 20;
            this.canva.style.left = `${x}px`;
            this.canva.style.top = `${y}px`;
        }
    }
}




class Deletar extends ClasseBase {
    constructor(){
        super();
    }
    executar(event){
        let span = event.target;
        span.className = '';
    }


}


class Titulo extends ClasseBase {
    constructor(){
        super();
    }
    executar(event){
       this.mudar_conteudo(event, 'titulo');
    }


}


class Divisao extends ClasseBase {
    constructor(){
        super();
    }
    executar(event){
       this.mudar_conteudo(event, 'divisoes');
    }
}


class Observacao extends ClasseBase {
    constructor(){
        super();
    }
    executar(event){
       this.mudar_conteudo(event, 'observacao');
    }
}


class Escrever extends ClasseBase {
    constructor() {
        super(true);
    }
    ligar(){
        this.ligado = true;
        this.atualizar();
    }

    desligar(){
        this.ligado = false;
        this.atualizar();
    }

    atualizar(){
        let conteudo = document.getElementById('conteudo');
        conteudo.contentEditable = this.ligado;
    }

}



class Editor {
    constructor() {
        this.escrever = new Escrever();
        this.titulo = new Titulo();
        this.divisoes = new Divisao();
        this.deletar = new Deletar();
        this.observacao = new Observacao();
        this.tom_e_tempo = new TomTempo(this.desativar_botoes);
        this.tempo_de_acorde = new TempoDeAcorde(this.desativar_botoes);
        this.instrumentos = new Instrumentos(this.desativar_botoes);
        this.conjunto_de_funcoes = {
            'escrever': this.escrever,
            'titulo': this.titulo,
            'divisoes': this.divisoes,
            'deletar': this.deletar,
            'observacao': this.observacao,
            'tom-e-tempo': this.tom_e_tempo,
            'tempo-de-acorde': this.tempo_de_acorde,
            'instrumentos': this.instrumentos,
        }

        this.funcao_Ativa = null;
    }
    ativar_funcao_chamada(funcao){
        this.conjunto_de_funcoes[funcao].ligar();
        this.funcao_Ativa = this.conjunto_de_funcoes[funcao];
    }

    
    desativar_funcoes(){
        Object.values(this.conjunto_de_funcoes).forEach(funcao => {
            funcao.desligar();
        });
    }

    desativar_botoes(){
        var botoes = document.querySelectorAll('button');
        botoes.forEach(botao => {
            if (botao.classList.contains('ligado')) {
                botao.classList.remove('ligado');
            }
        });
    }

    ativar_botao(botao){
        this.desativar_botoes();
        botao.classList.add('ligado');
    }

    ativar(botao, funcao){
        this.ativar_botao(botao);
        this.desativar_funcoes();
        this.ativar_funcao_chamada(funcao);
    }
    mouse_esquerdo_clicado(event){
        if (this.funcao_Ativa) {
            this.funcao_Ativa.mouse_esquerdo_clicado(event);
        }
    }

    mouse_direito_clicado(event){
        if (this.funcao_Ativa) {
            this.funcao_Ativa.mouse_direito_clicado(event);
        }
    }

    movimentacao_de_mouse(event){
        if (this.funcao_Ativa) {
            this.funcao_Ativa.movimentacao_de_mouse(event);
        }
      
    }

    duplo_clique(event){
        if (this.funcao_Ativa) {
            this.funcao_Ativa.duplo_clique(event);
        }
    }

    click(event) { /* Verifica se um elemento DIV dentro do cunteudo foi clicada */
        this.funcao_Ativa.executar(event);
    }

    adicionar_marcadores() { /* Adiciona marcador click para se caso o DIV for clicado e ativar alguma função */
        const conteudo = document.querySelector('div#conteudo')
        const divs = conteudo.querySelectorAll('div');
        const spans = conteudo.querySelectorAll('span');
        divs.forEach(div => {
            div.onclick = this.click.bind(this);
        });

        spans.forEach(span => {
            span.removeAttribute('style');
        });
    }
}


const editor = new Editor();