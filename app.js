// Componente Home
Vue.component('home-page', {
    template: `
        <div class="pagina home">
            <h2>Sorvetes peruanos que derretem o coração!</h2>
            <p>Descubra o sabor autêntico do Peru em cada colherada. Experimente agora!</p>
            <button class="cta-btn">Compre Agora</button>
        </div>
    `
});

Vue.component('sobre-page', {
    template: `
        <div class="pagina sobre">
            <h2>Sobre Nós</h2>
            <p>
                No coração do Peru, quatro visionários se uniram em uma jornada mágica. 
                Inspirados por Pachacuti, o líder Inca, e suas lendas de sabores místicos, os fundadores decidiram criar sorvetes únicos.
                Unindo forças com a figura histórica brasileira Tiradentes, conhecido por seu espírito rebelde e inventivo, a dupla se tornou um quarteto mágico: 
                Juan Pérez, Maria Lopez, Pablo Aymara, e Lúcia Andrade.
            </p>
            <div class="fundadores">
                <div v-for="fundador in fundadores" class="fundador">
                    <img :src="fundador.imagem" :alt="fundador.nome">
                    <p>{{ fundador.nome }}</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            fundadores: [
                { nome: 'Juan Pérez', imagem: './imagens/fundador1.jpg' },
                { nome: 'Maria Lopez', imagem: './imagens/fundador2.jpg' },
                { nome: 'Pablo Aymara', imagem: './imagens/fundador3.jpg' },
                { nome: 'Lúcia Andrade', imagem: './imagens/fundador4.jpg' }
            ]
        };
    }
});


// Componente Contato
Vue.component('contato-page', {
    template: `
        <div class="pagina contato">
            <h2>Contato</h2>
            <p>Entre em contato conosco!</p>
            <form>
                <input type="text" placeholder="Seu Nome" required>
                <input type="email" placeholder="Seu E-mail" required>
                <textarea placeholder="Sua Mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    `
});


// Componente Sabores
Vue.component('sabores-page', {
    template: `
        <div class="pagina sabores">
            <h2>Nossos Sabores Exclusivos</h2>
            <div class="grid-sabores">
                <div v-for="sabor in sabores" class="card-sabor">
                    <img :src="sabor.imagem" :alt="sabor.nome" class="img-sabor">
                    <h3>{{ sabor.nome }}</h3>
                    <button class="btn-comprar" @click="comprarSabor(sabor.nome)">Comprar</button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            sabores: [
                { nome: 'Cachada', imagem: './imagens/sabores/sabor1.jpg' },
                { nome: 'Dina Paúca', imagem: './imagens/sabores/sabor2.jpg' },
                { nome: 'Vitamina de Rã', imagem: './imagens/sabores/sabor3.jpg' },
                { nome: 'Carne de Cavalo', imagem: './imagens/sabores/sabor4.jpg' },
                { nome: 'Fluminense', imagem: './imagens/sabores/sabor5.jpg' },
                { nome: 'Fallen Verdadeiro', imagem: './imagens/sabores/sabor6.jpg' }
            ]
        };
    },
    methods: {
        comprarSabor(nome) {
            alert(`Você adicionou o sabor "${nome}" ao carrinho!`);
        }
    }
});

// Atualização da aplicação Vue
new Vue({
    el: '#app',
    data: {
        paginaAtual: 'home-page' // Página inicial
    },
    methods: {
        exibirPagina(pagina) {
            this.paginaAtual = `${pagina}-page`;
        }
    }
});

