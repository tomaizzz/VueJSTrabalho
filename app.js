// Componente Home
Vue.component('home-page', {
    template: `
        <div class="pagina home text-center container py-5">
    <h1 class="display-4 text-success fw-bold">Bem-vindo à Enanitos Verdes Helado</h1>
    <p class="lead text-secondary">
        Experimente o místico sabor dos Andes e da Amazônia. Um sorvete que conecta a história, a natureza e os sentidos.
    </p>
    <img src="./imagens/pote-sorvete.jpg" alt="Pote de Sorvete" class="img-fluid mx-auto d-block rounded shadow-lg">
</div>

    `
});

Vue.component('sobre-page', {
    template: `
        <div class="pagina sobre">
            <h2>A História de Enanitos Verdes Helado</h2>
            <p>
                A Enanitos Verdes Helado nasceu em 2024, mas sua origem remonta a tempos ancestrais, quando os ventos dos Andes e as águas da Amazônia se entrelaçaram em um segredo que estava guardado para o futuro. Gabriel, Denis, André e Lucas, quatro amigos apaixonados por história e culinária, estavam em uma viagem pelo Peru quando descobriram que, além de paisagens deslumbrantes, a terra dos Incas escondia um legado de sabores que poucos conheciam. 

Durante uma visita a uma antiga feira de Lima, eles encontraram uma receita secreta de sorvete, que tinha sido criada há séculos por um grupo de mestres cozinheiros incas, conhecidos como "Los Enanitos Verdes". Esses mestres acreditavam que os sabores poderiam conectar o mundo espiritual ao terreno e que cada ingrediente tinha um poder místico. Diziam que o segredo do sabor perfeito era o equilíbrio entre os produtos mais simples da terra e o conhecimento ancestral que se passava de geração a geração.

Em uma noite de lua cheia, em 2024, Gabriel teve uma visão durante uma peregrinação ao Machu Picchu. Ele viu a sombra de um pequeno Inca, vestido de verde, que lhe entregou uma tigela de sorvete que evocava o poder dos Andes e da selva amazônica. O sabor era indescritível, uma mistura de frutas exóticas e ervas nativas, combinados com o frescor de um gelo que parecia ter sido feito pelas nuvens da montanha.

Despertos pela visão, Gabriel e seus amigos começaram a explorar as lendas locais sobre os "sabores sagrados". Foi então que descobriram ingredientes secretos: o *maca* (uma raiz energética), o *camu-camu* (uma fruta com poderes revitalizantes), o *sachatomé* (uma planta de aroma adocicado) e o *coca* (da folha sagrada do Peru, que proporciona um toque único de frescor). Com esses ingredientes, começaram a criar suas primeiras receitas de sorvetes, que rapidamente se tornaram uma obsessão.

Lucas, com sua paixão por história, conectou as raízes brasileiras à mística peruana, trazendo o *cabeludinha* (uma fruta amazônica com um sabor exótico) e o *bacuri* (do norte do Brasil), que se harmonizavam perfeitamente com a combinação única dos sabores peruanos. Denis e André, ambos com experiências em gastronomia e biotecnologia, aperfeiçoaram as técnicas de fabricação, criando sorvetes incrivelmente cremosos e ao mesmo tempo refrescantes, utilizando processos que respeitavam os ensinamentos dos antigos mestres incas.

A Enanitos Verdes Helado não é apenas uma sorveteria, mas uma jornada mística que une o melhor do Peru e do Brasil. Seus sorvetes são feitos para não apenas satisfazer o paladar, mas também para despertar os sentidos e transportar quem os saboreia para um mundo onde as montanhas andinas e as florestas amazônicas dançam em harmonia. A lenda diz que, ao degustar um sorvete, a pessoa sente uma conexão com a natureza e com os ancestrais que habitaram essas terras.



A Enanitos Verdes Helado se tornou um fenômeno mundial, não apenas pela qualidade de seus sabores, mas pela mística que envolve cada casquinha. Se você provar, não estará apenas degustando um sorvete, mas participando de uma história que atravessa séculos, resgata tradições e conecta você com o espírito vibrante dos Andes e da Amazônia. Uma verdadeira experiência transcendental.

Por trás de cada sorvete, está o segredo dos Enanitos Verdes: o sabor que une a terra, a história e o espírito. O sabor do futuro que veio do passado.

Venha viver essa experiência.
                
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
                { nome: 'Gabriel', imagem: './imagens/fundador1.jpg' },
                { nome: 'Denis', imagem: './imagens/fundador2.jpg' },
                { nome: 'André', imagem: './imagens/fundador3.jpg' },
                { nome: 'Lucas', imagem: './imagens/fundador4.jpg' }
            ]
        };
    }
});



// Componente Contato
Vue.component('contato-page', {
    template: `
        <div class="pagina contato container py-5">
    <h2 class="text-center text-success fw-bold">Fale Conosco</h2>
    <form class="row g-3">
        <div class="col-md-6">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="Digite seu nome">
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail">
        </div>
        <div class="col-12">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea class="form-control" id="mensagem" rows="4" placeholder="Escreva sua mensagem"></textarea>
        </div>
        <div class="col-12 text-center">
            <button type="submit" class="btn btn-success">Enviar</button>
        </div>
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
                { nome: 'Dina Paúcar', imagem: './imagens/sabores/sabor2.jpg' },
                { nome: 'Jugo de Rana', imagem: './imagens/sabores/sabor3.jpg' },
                { nome: 'Carne de Cavalo', imagem: './imagens/sabores/sabor4.jpg' },
                { nome: 'Fluminense', imagem: './imagens/sabores/sabor5.jpg' },
                { nome: 'Fallen Verdadeiro', imagem: './imagens/sabores/sabor6.jpg' },
                { nome: 'Balalaika Beans', imagem: './imagens/sabores/sabor7.jpg' },
                { nome: 'Don Omar', imagem: './imagens/sabores/sabor8.jpg' },
                { nome: 'Paolo Guerrero', imagem: './imagens/sabores/sabor9.jpg' },
                { nome: 'Eduardo Web', imagem: './imagens/sabores/sabor10.jpg' },
                { nome: 'Ceviche', imagem: './imagens/sabores/sabor11.jpg' },
                { nome: 'Lomo Saltado', imagem: './imagens/sabores/sabor12.jpg' }
            ]
        };
    }
    ,
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

