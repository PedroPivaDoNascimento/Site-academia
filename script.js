const planos = [
    {
        id: 1,
        nome: "Acesso Essencial",
        descricao: "Musculação e cárdio ilimitados. Perfeito para quem está começando.",
        preco: "R$ 99/mês",
        destaque: "Popular",
        imagemUrl: 'assets/imagem_plano_academia_1.jpg', 
        badgeClass: "popular"
    },
    {
        id: 2,
        nome: "Alpha Total",
        descricao: "Todas as aulas coletivas (Yoga, HIIT, Lutas) e acesso a todas as áreas.",
        preco: "R$ 149/mês",
        destaque: "Mais Vendido",
        imagemUrl: 'assets/imagem_plano_academia_2.jpg',
        badgeClass: "best-seller"
    },
    {
        id: 3,
        nome: "Elite Pro",
        descricao: "Alpha Total + Avaliação física trimestral e acesso à área de recuperação (sauna).",
        preco: "R$ 199/mês",
        destaque: "Novo",
        imagemUrl: 'assets/imagem_plano_academia_3.jpg',
        badgeClass: "new"
    },
    {
        id: 4,
        nome: "Personal +",
        descricao: "Pacote de 8 sessões de Personal Trainer mensais e acesso Total à academia.",
        preco: "R$ 399/mês",
        destaque: "Destaque",
        imagemUrl: 'assets/imagem_plano_academia_4.jpg',
        badgeClass: "highlight"
    },
];

function renderizarPlanos() {
    const container = document.getElementById('planos-dinamicos');
    
    if (!container) return; 

    let htmlConteudo = '';

    planos.forEach(plano => {
        htmlConteudo += `
            <div class="plano-card">
                <img src="${plano.imagemUrl}" alt="Imagem do Plano ${plano.nome}">
                <div class="plano-content">
                    <span class="badge ${plano.badgeClass}">${plano.destaque}</span>
                    <h4>${plano.nome}</h4>
                    <p class="descricao">${plano.descricao}</p>
                    <p class="preco">${plano.preco}</p>
                    <a href="#" class="btn-secondary">Assinar Plano</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlConteudo;
}

document.addEventListener('DOMContentLoaded', renderizarPlanos);