/* =========================================================
   Projetos
   Cada objeto gera um card na Home e uma página de detalhes.
   Para ocultar um projeto sem perder o conteúdo, comente o
   objeto inteiro; para reativar, remova o comentário.
   ========================================================= */
const PROJECTS = [
    {
        slug: 'eduk-aluno',
        name: 'Eduk Aluno',
        category: 'Mobile · Educação',
        headline: 'Portal acadêmico no celular, com notificações push e acesso vinculado por PIN.',
        summary: 'Financeiro, notas, aulas e comunicação com a instituição em um único app integrado ao sistema acadêmico.',
        description: [
            'Aplicativo integrado ao sistema acadêmico das instituições de ensino, que concentra no celular do aluno as informações financeiras, o desempenho acadêmico e a comunicação com a secretaria.',
            'Responsável pelo aplicativo em Flutter, pela API REST em Laravel e pela infraestrutura de notificações via Firebase Cloud Messaging, com processamento em filas e agendamento por cron jobs para garantir desempenho e escalabilidade nos envios.'
        ],
        features: [
            'Vinculação da conta por PIN, reforçando a segurança do acesso',
            'Financeiro: mensalidades, pendências, vencidas, boletos e 2ª via',
            'Notas por disciplina e gráficos de desempenho da turma',
            'Agenda de aulas com situação da frequência por período',
            'Notificações push (FCM) de vencimento de mensalidades',
            'Avisos enviados pelo gestor diretamente a alunos específicos',
            'Disparos automáticos por tarefas agendadas (cron jobs)',
            'Atualização de dados pessoais e compartilhamento de arquivos',
            'Armazenamento local de documentos e persistência de dados',
            'Integração em tempo real com o sistema via API REST'
        ],
        tech: ['Flutter', 'Laravel · API REST', 'Firebase Cloud Messaging', 'Filas', 'Cron jobs', 'Persistência local'],
        // Lojas: 'play' (Google Play) e/ou 'apple' (App Store). Preencha url para o selo virar link.
        stores: [{ id: 'play', url: '' }, { id: 'apple', url: '' }],
        images: ['00', '01', '02', '03', '04', '05'].map(n => `assets/app_eduk_aluno_v2/${n}.jpg`)
    },
    {
        slug: 'eduk-professor',
        name: 'Eduk Professor',
        category: 'Mobile · Gestão acadêmica',
        headline: 'Aulas, frequência e notas gerenciadas pelo professor em qualquer lugar.',
        summary: 'Acompanhamento das atividades docentes com indicadores de aulas, lançamento de notas e registro de frequência.',
        description: [
            'Solução mobile para gestão acadêmica e acompanhamento das atividades docentes. O professor acompanha o resumo das aulas do mês, organiza a agenda e registra frequência e notas diretamente pelo celular.',
            'Integrado ao sistema acadêmico via API, todas as informações lançadas ficam associadas ao histórico do aluno, com identificação do responsável pelo lançamento.'
        ],
        features: [
            'Painel com resumo das aulas: total, abertas, realizadas e canceladas',
            'Próximas aulas da semana em destaque na tela inicial',
            'Acompanhamento de aulas realizadas e não realizadas',
            'Registro de frequência por aula, turma e período',
            'Lançamento de notas (AV1, AV2, AV3, prova e nota final)',
            'Edição e gerenciamento de aulas e cronogramas',
            'Comentários e observações relacionados às aulas',
            'Acesso por turma e disciplina com dados de vigência',
            'Integração com o sistema acadêmico via API'
        ],
        tech: ['Flutter', 'API REST', 'Integração com sistema acadêmico'],
        stores: [{ id: 'play', url: '' }, { id: 'apple', url: '' }],
        images: ['00', '01', '02', '03'].map(n => `assets/app_eduk_professor/${n}.jpg`)
    },
    {
        slug: 'minha-conta',
        name: 'Minha Conta',
        category: 'Mobile · Finanças',
        headline: 'Consulta de saldo e transferências bancárias integradas ao sistema financeiro.',
        summary: 'Conta digital no celular: saldo, extratos, histórico de transações e transferências para contas cadastradas.',
        description: [
            'Aplicativo de conta digital integrado ao sistema financeiro responsável pelas operações. O usuário consulta saldo e movimentações em tempo real e realiza transferências para contas bancárias de forma simples e segura.'
        ],
        features: [
            'Consulta de saldo integrada ao sistema financeiro',
            'Transferências para contas bancárias',
            'Cadastro e gerenciamento de contas bancárias de destino',
            'Histórico de transações enviadas e recebidas',
            'Extratos e acesso rápido às principais operações',
            'Área de dados do usuário e acesso autenticado'
        ],
        tech: ['Mobile', 'Integração com serviços financeiros', 'API REST'],
        stores: [{ id: 'play', url: '' }, { id: 'apple', url: '' }],
        images: ['00', '01', '02'].map(n => `assets/app_minha_conta/${n}.jpg`)
    },
    {
        slug: 'mobilize',
        name: 'Mobilize',
        category: 'Mobile · Gestão pública',
        headline: 'Acompanhamento de apoiadores e demandas integrado a um sistema de política pública.',
        summary: 'App vinculado a um sistema web para cadastro de apoiadores, registro de demandas e indicadores.',
        description: [
            'Aplicativo vinculado a um sistema web de política pública para o acompanhamento de votos municipais, desenvolvido em Flutter.'
        ],
        features: [
            'Cadastro de apoiadores',
            'Consulta de informações de outras lideranças',
            'Registro e acompanhamento de demandas',
            'Envio de fotos da galeria ou da câmera via API REST',
            'Geração e exibição de gráficos',
            'Persistência local de dados',
            'Integração e manipulação de dados via API REST'
        ],
        tech: ['Flutter', 'API REST', 'Persistência local'],
        // Lojas: 'play' (Google Play) e/ou 'apple' (App Store). Preencha url para o selo virar link.
        stores: [{ id: 'play', url: '' }, { id: 'apple', url: '' }],
        images: ['00', '01', '02', '03', '04'].map(n => `assets/app_mobilize/${n}.jpeg`)
    },
    /* ePublic Castelo do Piauí (oculto — remova este comentário para reativar)
    {
        slug: 'epublic-castelo',
        name: 'ePublic Castelo do Piauí',
        category: 'Mobile · Gestão escolar',
        headline: 'Acompanhamento pedagógico para professores da rede municipal, online e offline.',
        summary: 'Turmas, aulas, frequência e indicadores pedagógicos integrados ao sistema de gestão escolar.',
        description: [
            'Aplicativo integrado ao sistema de gestão escolar, oferecendo aos professores recursos práticos para o acompanhamento pedagógico. Desenvolvido em Flutter, com backend em Laravel (API REST).'
        ],
        features: [
            'Acesso às disciplinas e turmas',
            'Criação e organização de aulas',
            'Registro de frequência dos alunos',
            'Funcionamento online e offline',
            'Gráficos e indicadores pedagógicos',
            'Persistência local de dados',
            'Integração e manipulação de dados via API REST'
        ],
        tech: ['Flutter', 'Laravel · API REST', 'Modo offline'],
        stores: [{ id: 'play', url: '' }, { id: 'apple', url: '' }],
        images: ['00', '01', '02', '03', '04', '05'].map(n => `assets/app_epublic_castelo/${n}.jpeg`)
    },
    */
];

/* ---------- Utilitários ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
};

/* ---------- Selos das lojas ---------- */
const STORES = {
    play: {
        label: 'Google Play', pre: 'Disponível no',
        icon: '<svg viewBox="0 0 24 24" class="fill" aria-hidden="true"><path d="M22.02 13.3l-3.92 2.22-3.52-3.5 3.55-3.52 3.89 2.2a1.49 1.49 0 0 1 0 2.6zM1.34.92a1.49 1.49 0 0 0-.11.57v21.02c0 .22.04.42.12.6l11.15-11.09L1.34.92zm12.2 10.07l3.26-3.24L3.45.2A1.47 1.47 0 0 0 2.5.02l11.04 10.97zm0 2.07l-11 10.93c.3.04.61-.02.9-.18l13.33-7.54-3.23-3.21z"/></svg>'
    },
    apple: {
        label: 'App Store', pre: 'Disponível na',
        icon: '<svg viewBox="0 0 24 24" class="fill" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>'
    }
};
function storeBadges(stores, cls) {
    const wrap = el('div', `store-badges ${cls || ''}`);
    stores.forEach(s => {
        const info = STORES[s.id];
        if (!info) return;
        const b = el(s.url ? 'a' : 'span', 'store-badge');
        if (s.url) { b.href = s.url; b.target = '_blank'; b.rel = 'noopener'; }
        b.innerHTML = `${info.icon}<span class="store-text"><span class="store-pre">${info.pre}</span><span class="store-name">${info.label}</span></span>`;
        wrap.append(b);
    });
    return wrap;
}

document.getElementById('ano').textContent = new Date().getFullYear();

/* ---------- Tema claro/escuro ---------- */
(function initTheme() {
    const root = document.documentElement;
    const meta = document.querySelector('meta[name="theme-color"]');
    const apply = () => {
        const dark = root.getAttribute('data-theme') === 'dark';
        meta.setAttribute('content', dark ? '#0b0d0c' : '#ffffff');
    };
    apply();
    $('.theme-toggle').addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        apply();
    });
})();

/* ---------- Lista de projetos (Home) ---------- */
(function renderList() {
    const list = $('#projectList');
    PROJECTS.forEach((p, i) => {
        const li = el('li', 'project-item');
        const a = el('a', 'project-card');
        a.href = `#/projeto/${p.slug}`;

        const index = el('span', 'project-index', String(i + 1).padStart(2, '0'));

        const body = el('div', 'project-body');
        body.append(
            el('p', 'project-category', p.category),
            el('h3', 'project-name', p.name),
            el('p', 'project-headline', p.headline),
            el('p', 'project-summary', p.summary)
        );
        const tags = el('ul', 'project-tags');
        p.tech.slice(0, 4).forEach(t => tags.append(el('li', null, t)));
        body.append(tags);
        // Dentro do card (que já é um link), os selos são apenas visuais.
        if (p.stores.length) body.append(storeBadges(p.stores.map(x => ({ id: x.id })), 'is-compact'));

        const cta = el('span', 'project-cta');
        cta.innerHTML = '<span>Ver projeto</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

        a.append(index, body, cta);
        li.append(a);
        list.append(li);
    });
})();

/* ---------- Página do projeto (fundo preto) ---------- */
const view = $('#projectView');
const gallery = $('#pvGallery');
const scroller = $('#pvScroll');
let current = null;
let lastFocus = null;

function renderProject(p) {
    const idx = PROJECTS.indexOf(p);
    $('#pvCount').textContent = `${String(idx + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}`;
    $('#pvCategory').textContent = p.category;
    $('#pvTitle').textContent = p.name;
    $('#pvHeadline').textContent = p.headline;

    const desc = $('#pvDescription');
    desc.replaceChildren(...p.description.map(t => el('p', null, t)));

    const feats = $('#pvFeatures');
    feats.replaceChildren(...p.features.map(t => el('li', null, t)));

    const tech = $('#pvTech');
    tech.replaceChildren(...p.tech.map(t => el('li', null, t)));

    const storesEl = $('#pvStores');
    storesEl.replaceChildren(...(p.stores.length ? [storeBadges(p.stores)] : []));
    storesEl.hidden = !p.stores.length;

    gallery.replaceChildren(...p.images.map((src, i) => {
        const b = el('button', 'pv-shot');
        b.type = 'button';
        b.setAttribute('aria-label', `Ampliar tela ${i + 1} de ${p.images.length}`);
        const img = el('img');
        img.src = src;
        img.alt = `${p.name} — tela ${i + 1}`;
        img.loading = i < 3 ? 'eager' : 'lazy';
        img.decoding = 'async';
        b.append(img);
        b.addEventListener('click', () => openLightbox(i));
        return b;
    }));
    gallery.scrollLeft = 0;
    scroller.scrollTop = 0;

    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const pPrev = $('#pvPagerPrev');
    const pNext = $('#pvPagerNext');
    pPrev.innerHTML = `<span class="pv-pager-label">Anterior</span><span class="pv-pager-name"></span>`;
    pNext.innerHTML = `<span class="pv-pager-label">Próximo</span><span class="pv-pager-name"></span>`;
    pPrev.lastChild.textContent = prev.name;
    pNext.lastChild.textContent = next.name;
    pPrev.onclick = () => goTo(prev);
    pNext.onclick = () => goTo(next);

    document.title = `${p.name} — Mateus Araujo`;
    updateArrows();
}

function openView(p) {
    const wasOpen = !view.hidden;
    current = p;
    renderProject(p);
    if (!wasOpen) {
        lastFocus = document.activeElement;
        view.hidden = false;
        document.body.classList.add('no-scroll');
        view.focus({ preventScroll: true });
    }
}

function closeView() {
    if (view.hidden) return;
    closeLightbox();
    document.body.classList.remove('no-scroll');
    view.hidden = true;
    current = null;
    document.title = 'Mateus Araujo — Desenvolvedor de Software';
    const card = lastFocus && lastFocus.closest ? lastFocus : null;
    if (card) card.focus({ preventScroll: true });
}

function requestClose() {
    // Volta no histórico quando a página foi aberta pelo site; senão limpa o hash.
    if (history.state && history.state.fromSite) history.back();
    else history.replaceState(null, '', location.pathname + location.search + '#projetos');
    route();
}

function route() {
    const m = location.hash.match(/^#\/projeto\/([\w-]+)/);
    const p = m && PROJECTS.find(x => x.slug === m[1]);
    if (p) openView(p);
    else closeView();
}

// Marca a navegação interna para que "Fechar" use o voltar do navegador.
document.addEventListener('click', e => {
    const a = e.target.closest('a.project-card');
    if (!a) return;
    e.preventDefault();
    lastFocus = a;
    history.pushState({ fromSite: true }, '', a.getAttribute('href'));
    route();
});
window.addEventListener('hashchange', route);
window.addEventListener('popstate', route);
view.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', requestClose));

/* Pager: troca de projeto sem empilhar histórico */
function goTo(p) {
    history.replaceState(history.state, '', `#/projeto/${p.slug}`);
    route();
}

/* Setas da galeria */
function step() {
    const shot = gallery.querySelector('.pv-shot');
    return shot ? shot.getBoundingClientRect().width + 16 : 300;
}
function updateArrows() {
    const max = gallery.scrollWidth - gallery.clientWidth - 2;
    $('#pvPrev').disabled = gallery.scrollLeft <= 2;
    $('#pvNext').disabled = gallery.scrollLeft >= max;
    $('.pv-gallery-nav').hidden = max <= 0;
}
$('#pvPrev').addEventListener('click', () => gallery.scrollBy({ left: -step(), behavior: 'smooth' }));
$('#pvNext').addEventListener('click', () => gallery.scrollBy({ left: step(), behavior: 'smooth' }));
gallery.addEventListener('scroll', () => requestAnimationFrame(updateArrows), { passive: true });
window.addEventListener('resize', () => { if (current) updateArrows(); });
gallery.addEventListener('load', updateArrows, true);

/* ---------- Lightbox ---------- */
const lb = $('#lightbox');
const lbImg = $('#lbImg');
let lbIndex = 0;

function showLightbox(i) {
    const imgs = current.images;
    lbIndex = (i + imgs.length) % imgs.length;
    lbImg.src = imgs[lbIndex];
    lbImg.alt = `${current.name} — tela ${lbIndex + 1}`;
    $('#lbCount').textContent = `${lbIndex + 1} / ${imgs.length}`;
}
function openLightbox(i) {
    showLightbox(i);
    lb.hidden = false;
    $('#lbClose').focus({ preventScroll: true });
}
function closeLightbox() {
    if (lb.hidden) return;
    lb.hidden = true;
    const shot = gallery.children[lbIndex];
    if (shot) shot.focus({ preventScroll: true });
}
$('#lbClose').addEventListener('click', closeLightbox);
$('#lbPrev').addEventListener('click', () => showLightbox(lbIndex - 1));
$('#lbNext').addEventListener('click', () => showLightbox(lbIndex + 1));
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

/* Gesto de arrastar no lightbox (celular) */
let touchX = null;
lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) showLightbox(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
});

/* ---------- Teclado ---------- */
document.addEventListener('keydown', e => {
    if (view.hidden) return;
    if (!lb.hidden) {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
        else if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
        return;
    }
    if (e.key === 'Escape') requestClose();
});

route();
