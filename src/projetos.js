// ============================================================
// WALKMAR PRODUÇÕES — Dados dos Projetos
// Para adicionar fotos: inclua o caminho no array "fotos"
// Para adicionar projeto: copie um bloco e edite os dados
// ============================================================

export const PROJETOS = [

  // ── 01 ─────────────────────────────────────────────────────
  {
    id: 'bebeteca',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 252331',
    tema: 'Primeira Infância · Literatura',
    publico: 'Crianças de 0 a 6 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.199.140,80',
    impacto: '30.000 crianças',
    title: 'Bebeteca 2 — Passinhos para o Futuro',
    bg: '#1A5C4A',
    desc: 'Cria brinquedotecas com livros, brinquedos educativos e tapetes EVA. Inclui contação de histórias em escolas, creches, hospitais e centros culturais de forma gratuita. Cada espaço recebe pintura artística em uma de suas paredes.',
    fotos: [
      'fotos/bebeteca/foto_01.jpg', 'fotos/bebeteca/foto_02.jpg',
      'fotos/bebeteca/foto_03.jpg', 'fotos/bebeteca/foto_04.jpg',
      'fotos/bebeteca/foto_05.jpg', 'fotos/bebeteca/foto_06.jpg',
      'fotos/bebeteca/foto_07.jpg', 'fotos/bebeteca/foto_08.jpg',
      'fotos/bebeteca/foto_09.jpg', 'fotos/bebeteca/foto_10.jpg',
      'fotos/bebeteca/foto_11.jpg', 'fotos/bebeteca/foto_12.jpg',
      'fotos/bebeteca/foto_13.jpg', 'fotos/bebeteca/foto_14.jpg',
      'fotos/bebeteca/foto_15.jpg', 'fotos/bebeteca/foto_16.jpg',
    ],
    cotas: [
      { label: 'Cota 1', desc: '4 Bebetecas completas + 4 contações de histórias + 4 pinturas artísticas · 240 crianças impactadas diretamente' },
      { label: 'Cota 2', desc: '9 Bebetecas completas + 9 contações de histórias + 9 pinturas artísticas · 2.160 crianças impactadas' },
      { label: 'Cota 3', desc: '12 Bebetecas completas + 12 contações de histórias + 12 pinturas artísticas · 7.200 crianças impactadas' },
    ],
  },

  // ── 02 ─────────────────────────────────────────────────────
  {
    id: 'brinquedoteca-transito',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'Em captação',
    tema: 'Literatura · Teatro · Trânsito',
    publico: 'Crianças de 6 a 12 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.282.831,55',
    impacto: '8.250 crianças',
    title: 'Brinquedoteca — Trânsito em Cena',
    bg: '#134e4a',
    desc: 'Brinquedotecas em formato de carro com livros, jogos pedagógicos de trânsito e mini semáforo decorativo. Intervenções cênicas de 40 minutos com os personagens Zé Carbono, Sinaldo e Cleta sobre mobilidade sustentável.',
    fotos: [
      'fotos/brinquedoteca-transito/foto_01.jpg',
      'fotos/brinquedoteca-transito/foto_02.jpg',
      'fotos/brinquedoteca-transito/foto_03.jpg',
      'fotos/brinquedoteca-transito/foto_04.jpg',
      'fotos/brinquedoteca-transito/foto_05.jpg',
      'fotos/brinquedoteca-transito/foto_06.png',
      'fotos/brinquedoteca-transito/foto_07.webp',
      'fotos/brinquedoteca-transito/foto_08.webp',
    ],
    cotas: [
      { label: 'Cota 1', desc: '10 brinquedotecas completas + 10 intervenções cênicas · 1.500 crianças impactadas diretamente' },
      { label: 'Cota 2', desc: '20 brinquedotecas completas + 20 intervenções cênicas · 3.000 crianças impactadas diretamente' },
      { label: 'Cota 3', desc: '50 brinquedotecas completas + 20 intervenções cênicas · 8.250 crianças impactadas diretamente' },
    ],
  },

  // ── 03 ─────────────────────────────────────────────────────
  {
    id: 'cena-libras',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 253839',
    tema: 'Teatro · Libras · Inclusão',
    publico: 'Jovens e Adultos a partir de 15 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.090.390,95',
    impacto: '3.500 beneficiados',
    title: 'Cena em Libras — Onde a Voz Não Chega',
    bg: '#1e1b4b',
    desc: '10 turmas de 30 participantes formados em interpretação cênica em Libras. 24 encontros de 2h, artistas surdos convidados, glossário online gratuito e apresentações públicas acessíveis.',
    fotos: [
      'fotos/cena-libras/foto_01.jpg',  'fotos/cena-libras/foto_02.png',
      'fotos/cena-libras/foto_03.jpg',  'fotos/cena-libras/foto_04.png',
      'fotos/cena-libras/foto_05.jpg',  'fotos/cena-libras/foto_06.jpg',
      'fotos/cena-libras/foto_07.jpg',  'fotos/cena-libras/foto_08.jpg',
      'fotos/cena-libras/foto_09.jpg',  'fotos/cena-libras/foto_10.png',
    ],
    video: 'En6EWx742FE',
    cotas: [
      { label: 'Cota 1', desc: '2 turmas · 60 alunos · 2 apresentações públicas acessíveis · glossário online em Libras · encontros com artistas surdos convidados' },
      { label: 'Cota 2', desc: '4 turmas · 120 alunos · 4 apresentações públicas · público estimado de 800 pessoas · glossário online em Libras' },
      { label: 'Cota 3', desc: '7 turmas · 210 alunos · 7 apresentações públicas · público estimado de 1.400 pessoas · glossário online em Libras' },
    ],
  },

  // ── 04 ─────────────────────────────────────────────────────
  {
    id: 'cinelivro',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 244881',
    tema: 'Cinemateca · Literatura',
    publico: 'Crianças de 6 a 12 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.206.439,08',
    impacto: '30.000 crianças',
    title: 'CineLivro: Cultura em Movimento',
    bg: '#9c0f2e',
    desc: 'Cria cinematecas com bibliotecas — estruturas em MDF com TV 50\'\' embutida, DVDs infantis e acervo literário. Realiza contação de histórias interativa com personagens Alice e Max. Inclui intérprete de Libras em todas as ações.',
    fotos: [
      'fotos/cinelivro/foto_01.jpg',  'fotos/cinelivro/foto_02.png',
      'fotos/cinelivro/foto_03.jpg',  'fotos/cinelivro/foto_04.png',
      'fotos/cinelivro/foto_05.jpg',  'fotos/cinelivro/foto_06.jpg',
      'fotos/cinelivro/foto_07.jpg',  'fotos/cinelivro/foto_08.jpg',
      'fotos/cinelivro/foto_09.jpg',  'fotos/cinelivro/foto_10.png',
    ],
    video: 'K5-XypqlK9c',
    cotas: [
      { label: 'Cota 1', desc: '4 estruturas CineLivro completas + 4 contações de histórias · público mínimo de 1.200 alunos' },
      { label: 'Cota 2', desc: '8 estruturas CineLivro completas + 8 contações de histórias · público mínimo de 2.400 alunos' },
      { label: 'Cota 3', desc: '16 estruturas CineLivro completas + 16 contações de histórias · público mínimo de 4.800 alunos' },
    ],
  },

  // ── 05 ─────────────────────────────────────────────────────
  {
    id: 'fanfarra',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 469087',
    tema: 'Música · Fanfarra · Educação Musical',
    publico: 'Adolescentes de 10 a 16 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.151.617,50',
    impacto: '10.000 pessoas',
    title: 'Som e Movimento — Fanfarra em Ação',
    bg: '#7c2d12',
    desc: '10 turmas de 30 alunos aprendendo percussão, bombo e caixa de guerra. 24 encontros de 90 minutos, com apresentações públicas e desfiles de rua. Instrumentos doados às escolas ao final — garantindo continuidade do projeto.',
    fotos: [
      'fotos/fanfarra/foto_01.jpg',  'fotos/fanfarra/foto_02.webp',
      'fotos/fanfarra/foto_03.png',  'fotos/fanfarra/foto_04.png',
      'fotos/fanfarra/foto_05.png',  'fotos/fanfarra/foto_06.jpg',
      'fotos/fanfarra/foto_07.png',
    ],
    video: 'JBn6bhndkFo',
    cotas: [
      { label: 'Cota 1', desc: '2 turmas de oficina · 60 alunos beneficiados · doação de 2 kits com 30 instrumentos · 2 eventos finais com público estimado de 250 pessoas' },
      { label: 'Cota 2', desc: '3 turmas de oficina · 90 alunos beneficiados · doação de 3 kits com 30 instrumentos · 3 eventos finais' },
      { label: 'Cota 3', desc: '5 turmas de oficina · 150 alunos beneficiados · doação de 5 kits com 30 instrumentos · 5 eventos finais' },
    ],
  },

  // ── 06 ─────────────────────────────────────────────────────
  {
    id: 'jovens-artistas',
    lei: 'proac', leiLabel: 'ProAc',
    pronac: 'ProAc — Em captação',
    tema: 'Artes Visuais · Muralismo · Formação Juvenil',
    publico: 'Adolescentes de 10 a 16 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 405.820,00',
    impacto: '400 adolescentes',
    title: 'Pintaê! — Jovens Artistas · Sonhos nas Paredes',
    bg: '#3d1a00',
    desc: '80 oficinas gratuitas — 40 de pintura em ecobag e 40 de muralismo colaborativo — com a arte-educadora Lais Laclio. Cada mural representa a identidade cultural do município. Catálogo digital ao final.',
    fotos: [
      'fotos/jovens-artistas/foto_01.jpg', 'fotos/jovens-artistas/foto_02.jpg',
      'fotos/jovens-artistas/foto_03.jpg', 'fotos/jovens-artistas/foto_04.jpg',
      'fotos/jovens-artistas/foto_05.jpg', 'fotos/jovens-artistas/foto_06.jpg',
      'fotos/jovens-artistas/foto_07.jpg', 'fotos/jovens-artistas/foto_08.jpg',
      'fotos/jovens-artistas/foto_09.jpg', 'fotos/jovens-artistas/foto_10.jpg',
      'fotos/jovens-artistas/foto_11.jpg',
    ],
    cotas: [
      { label: 'Ação 1', desc: '14 oficinas culturais · 7 de pintura em ecobag + 7 de muralismo · 140 adolescentes beneficiados · placa permanente nos murais' },
      { label: 'Ação 2', desc: '28 oficinas culturais · 14 de pintura em ecobag + 14 de muralismo · 280 adolescentes beneficiados' },
      { label: 'Ação 3', desc: '40 oficinas culturais · 20 de pintura em ecobag + 20 de muralismo · 400 adolescentes beneficiados' },
    ],
  },

  // ── 07 ─────────────────────────────────────────────────────
  {
    id: 'jovens-futuro',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 253195',
    tema: 'Artes Cênicas · Educação Financeira',
    publico: 'Jovens de 14 a 18 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.363.662,30',
    impacto: '3.500 beneficiados',
    title: 'Jovens do Futuro — Arte, Cena e Gestão',
    bg: '#0f172a',
    desc: 'Combina artes cênicas e educação financeira. 10 turmas de 35 jovens, 33 encontros por turma. Culmina em espetáculos teatrais criados e gerenciados 100% pelos próprios alunos.',
    fotos: [
      'fotos/jovens-futuro/foto_01.png', 'fotos/jovens-futuro/foto_02.png',
      'fotos/jovens-futuro/foto_03.png', 'fotos/jovens-futuro/foto_04.png',
      'fotos/jovens-futuro/foto_05.png', 'fotos/jovens-futuro/foto_06.png',
      'fotos/jovens-futuro/foto_07.png', 'fotos/jovens-futuro/foto_08.jpg',
      'fotos/jovens-futuro/foto_09.png',
    ],
    video: 'JS1cMGIp8Qg',
    cotas: [
      { label: 'Cota 1', desc: '2 turmas completas · 70 alunos impactados · 2 espetáculos teatrais inéditos · público estimado de 520 espectadores com acesso gratuito' },
      { label: 'Cota 2', desc: '4 turmas completas · 140 alunos impactados · 4 espetáculos teatrais inéditos · público estimado de 1.040 espectadores' },
    ],
  },

  // ── 08 ─────────────────────────────────────────────────────
  {
    id: 'meu-primeiro-livro',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 252488',
    tema: 'Literatura · Escrita Criativa',
    publico: 'Crianças de 9 a 14 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.010.542,50',
    impacto: '5.000 beneficiados',
    title: 'Meu Primeiro Livro',
    bg: '#c07e00',
    desc: 'Oficinas de escrita criativa de 6 meses. Turmas de até 35 alunos criam personagens, enredos e cenários. Ao final, é publicado um livro coletivo com os textos e realizado um evento de lançamento com sessão de autógrafos.',
    fotos: [
      'fotos/meu-primeiro-livro/foto_01.jpg',  'fotos/meu-primeiro-livro/foto_02.png',
      'fotos/meu-primeiro-livro/foto_03.webp', 'fotos/meu-primeiro-livro/foto_04.jpg',
      'fotos/meu-primeiro-livro/foto_05.webp', 'fotos/meu-primeiro-livro/foto_06.jpg',
      'fotos/meu-primeiro-livro/foto_07.webp', 'fotos/meu-primeiro-livro/foto_08.webp',
      'fotos/meu-primeiro-livro/foto_09.jpg',  'fotos/meu-primeiro-livro/foto_10.jpg',
      'fotos/meu-primeiro-livro/foto_11.png',  'fotos/meu-primeiro-livro/foto_12.jpg',
      'fotos/meu-primeiro-livro/foto_13.png',  'fotos/meu-primeiro-livro/foto_14.png',
      'fotos/meu-primeiro-livro/foto_15.jpg',  'fotos/meu-primeiro-livro/foto_16.png',
    ],
    video: 'dBjb4SUhRkU',
    cotas: [
      { label: 'Cota 1', desc: '2 turmas de oficina · 70 alunos beneficiados · 150 livros coletivos publicados · 2 apresentações finais com sessão de autógrafos' },
      { label: 'Cota 2', desc: '4 turmas de oficina · 140 alunos beneficiados · 300 livros coletivos publicados · 4 apresentações finais com sessão de autógrafos' },
    ],
  },

  // ── 09 ─────────────────────────────────────────────────────
  {
    id: 'missao-terra',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 252961',
    tema: 'Teatro · Planetário Fulldome · Meio Ambiente',
    publico: 'Crianças de 6 a 12 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.346.236,59',
    impacto: '10.000 beneficiados',
    title: 'Missão Terra: A Última Esperança',
    bg: '#1e1b4b',
    desc: 'Experiência imersiva única: teatro ao vivo + cinema fulldome 360° dentro de um domo inflável (a "nave URÂNIA"). Os personagens Zelar, Lumia e o Capitão Gaia guiam as crianças por uma jornada sobre crise climática e desmatamento.',
    fotos: [
      'fotos/missao-terra/foto_01.png', 'fotos/missao-terra/foto_02.png',
      'fotos/missao-terra/foto_03.png', 'fotos/missao-terra/foto_04.png',
      'fotos/missao-terra/foto_05.png', 'fotos/missao-terra/foto_06.png',
      'fotos/missao-terra/foto_07.png', 'fotos/missao-terra/foto_08.png',
      'fotos/missao-terra/foto_09.jpg', 'fotos/missao-terra/foto_10.png',
    ],
    video: 'rjR0fw06h6U',
    cotas: [
      { label: 'Cota 1', desc: '80 intervenções cênicas com exibição fulldome · 8 sessões por localidade · 60 alunos por sessão · 480 alunos beneficiados diretamente' },
      { label: 'Cota 2', desc: '120 intervenções cênicas com exibição fulldome · 8 sessões por localidade · 7.200 crianças beneficiadas' },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    id: 'protetores-floresta',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 245653',
    tema: 'Teatro · Meio Ambiente · Folclore',
    publico: 'Crianças de 6 a 12 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 999.837,85',
    impacto: '10.000 crianças',
    title: 'Os Protetores da Floresta em Ação',
    bg: '#064e3b',
    desc: 'Peça teatral com Saci, Curupira e Iara sobre preservação ambiental e queimadas. Inclui doação de 30 mudas de árvores nativas por apresentação. Cada sessão tem 45 minutos e atende até 150 crianças.',
    fotos: [
      'fotos/protetores-floresta/foto_01.jpg', 'fotos/protetores-floresta/foto_02.jpg',
      'fotos/protetores-floresta/foto_03.jpg', 'fotos/protetores-floresta/foto_04.jpg',
      'fotos/protetores-floresta/foto_05.jpg', 'fotos/protetores-floresta/foto_06.jpg',
      'fotos/protetores-floresta/foto_07.jpg', 'fotos/protetores-floresta/foto_08.jpg',
      'fotos/protetores-floresta/foto_09.jpg', 'fotos/protetores-floresta/foto_10.jpg',
      'fotos/protetores-floresta/foto_11.jpg', 'fotos/protetores-floresta/foto_12.jpg',
    ],
    cotas: [
      { label: 'Cota 1', desc: '6 apresentações da peça teatral · 900 crianças impactadas · doação de 180 mudas de árvores nativas ou hortaliças' },
      { label: 'Cota 2', desc: '12 apresentações da peça teatral · 1.800 crianças impactadas · doação de 360 mudas' },
      { label: 'Cota 3', desc: '35 apresentações da peça teatral · 5.250 crianças impactadas · doação de 1.050 mudas' },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    id: 'play-transito',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 247770',
    tema: 'Teatro Interativo · Educação no Trânsito',
    publico: 'Jovens de 10 a 17 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 1.327.095,00',
    impacto: '7.200 pessoas',
    title: 'Play no Trânsito',
    bg: '#713f12',
    desc: 'Tabuleiro humano gigante com 5 atores representando figuras do trânsito. Jovens divididos em equipes respondem desafios sobre regras, segurança e cidadania. 90 minutos de duração, 60 participantes por intervenção.',
    fotos: [
      'fotos/play-transito/foto_01.png', 'fotos/play-transito/foto_02.png',
      'fotos/play-transito/foto_03.png', 'fotos/play-transito/foto_04.png',
      'fotos/play-transito/foto_05.png', 'fotos/play-transito/foto_06.png',
    ],
    video: '9kUi47zkLYc',
    cotas: [
      { label: 'Cota 1', desc: '24 intervenções cênicas · 1.440 alunos impactados · distribuição de 1.440 mini jogos temáticos' },
      { label: 'Cota 2', desc: '36 intervenções cênicas · 2.160 alunos impactados · 1 ação exclusiva para o patrocinador' },
      { label: 'Cota 3', desc: '63 intervenções cênicas · 3.780 alunos impactados · 3 ações exclusivas para o patrocinador' },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    id: 'vovoteca',
    lei: 'rouanet', leiLabel: 'Lei Rouanet',
    pronac: 'PRONAC 253195',
    tema: 'Terceira Idade · Memória · Artes Cênicas',
    publico: 'Pessoas idosas a partir de 60 anos',
    local: 'Todo o território nacional',
    valor: 'R$ 751.410,00',
    impacto: '3.000 idosos',
    title: 'Vovôteca — Brincar Não Tem Idade',
    bg: '#831843',
    desc: 'Espaços lúdicos permanentes para a terceira idade com estantes, poltronas, jogos e livros. 30 encontros de artes cênicas + 30 oficinas criativas de contação de histórias. Pintura artística por artista convidado em cada espaço.',
    fotos: [
      'fotos/vovoteca/foto_01.jpg',  'fotos/vovoteca/foto_02.png',
      'fotos/vovoteca/foto_03.webp', 'fotos/vovoteca/foto_04.jpg',
      'fotos/vovoteca/foto_05.webp', 'fotos/vovoteca/foto_06.jpg',
      'fotos/vovoteca/foto_07.webp', 'fotos/vovoteca/foto_08.jpg',
      'fotos/vovoteca/foto_09.jpg',  'fotos/vovoteca/foto_10.jpg',
      'fotos/vovoteca/foto_11.jpg',  'fotos/vovoteca/foto_12.png',
    ],
    video: 'y6PgcJa3JcY',
    cotas: [
      { label: 'Cota 1', desc: '1 espaço Vovóteca completo · 30 encontros de artes cênicas · 30 oficinas criativas · pintura artística · benefício estimado de 1.200 idosos' },
      { label: 'Cota 2', desc: '2 espaços Vovóteca completos · 60 encontros + 60 oficinas · 2 pinturas artísticas · benefício estimado de 2.400 idosos' },
      { label: 'Cota 3', desc: '5 espaços Vovóteca completos · 150 encontros + 150 oficinas · 5 pinturas artísticas · benefício estimado de 3.000 idosos' },
    ],
  },

  
  // ── 14 — sem fotos ainda ───────────────────────────────────
  {
    id: 'espaco-ler-brincar',
    lei: 'proac', leiLabel: 'ProAc',
    pronac: 'PRONAC 260714',
    tema: 'Bibliotecas Comunitárias · Incentivo à Leitura',
    publico: 'Crianças e adolescentes da rede pública',
    local: 'Todo o território nacional',
    valor: 'R$ 500.000,00',
    impacto: '1.200 crianças',
    title: 'Espaço Ler e Brincar',
    bg: '#001f3f',
    desc: 'Implanta bibliotecas comunitárias com 400 livros, mobiliário, notebooks, TV 50\'\' e jogos educativos. Sessão inaugural de contação de histórias e clube do livro com encontros a cada 10 dias.',
    fotos: [], // ← adicione as fotos aqui quando disponíveis
    cotas: [
      { label: 'Ação 1', desc: '3 bibliotecas completas implantadas · 1.200 livros · 6 turmas do clube de leitura · 600 crianças beneficiadas' },
      { label: 'Ação 2', desc: '4 bibliotecas completas implantadas · 1.600 livros · 8 turmas do clube de leitura · 800 crianças beneficiadas' },
      { label: 'Ação 3', desc: '6 bibliotecas completas implantadas · 2.400 livros · 12 turmas do clube de leitura · 1.200 crianças beneficiadas' },
    ],
  },

];

// ── Helpers ────────────────────────────────────────────────
export const getRouanet = () => PROJETOS.filter(p => p.lei === 'rouanet');
export const getProAc   = () => PROJETOS.filter(p => p.lei === 'proac');
export const getVideos  = () => PROJETOS.filter(p => p.video);
