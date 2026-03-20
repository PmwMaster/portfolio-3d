<div align="center">
  <h1>🧊 3D Developer Portfolio</h1>
  <p>A high-performance, single-page developer portfolio built with React, Three.js, and modern aesthetics.</p>
  
  [![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
  [![Three.js](https://img.shields.io/badge/Three.js-3D-black.svg)](https://threejs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-06B6D4.svg)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-E90265.svg)](https://www.framer.com/motion/)
</div>

<br />

## ✨ Características Principais (Features)

- **Cubo Mágico 3D Interativo**: Um modelo de física complexa construído com `@react-three/fiber`. O cubo é capaz de se *baralhar e resolver a si próprio* autonomamente através de uma máquina de estados, e pode ser manipulado 360º de forma livre pelo rato (`OrbitControls`).
- **Premium Dark Mode UI**: Interface sombria minimalista (`#0a0a0a`) com gradientes vivos de destaque e painéis traslúcidos em *Glassmorphism*.
- **Luz Dinâmica de Rastreio**: O ambiente 3D possui uma fonte de luz que reage em tempo-real à posição do cursor do cliente, criando brilho responsivo no cubo.
- **Micro-interações Imersivas**: 
  - Cursor fluorescente desenhado de forma customizada com física elástica (Spring physics).
  - Um fundo tridimensional com sistema de partículas independentes.
  - Cartões de Projetos e Skills físicamente reativos (Efeito Tilt) que se inclinam face ao rato.
- **Scroll Animations**: Elementos que surgem organicamente através do ecrã baseados no Framer Motion.
- **Contact Form**: Formulário sem necessidade de backend tradicional (Configurado via Web3Forms).

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript + Vite
- **3D Render**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Estilos**: Tailwind CSS v4 
- **Animações**: Framer Motion
- **Ícones**: Lucide React

## 🚀 Guia de Instalação e Uso

### Pré-requisitos
Ter o Node.js v18 (ou superior) instalado.

### Instalação

1. Clone o repositório para a sua máquina
   ```bash
   git clone https://github.com/PmwMaster/portfolio-3d.git
   ```
2. Navegue até à pasta
   ```bash
   cd portfolio-3d
   ```
3. Instale as dependências
   ```bash
   npm install
   ```
4. Inicie o servidor de testes web
   ```bash
   npm run dev
   ```
5. Abra o seu navegador e aceda a `http://localhost:5173/`

## 🌐 Publicação (Deploy)

A arquitetura do projeto (Vite/React) encontra-se perfeitamente alinhada para ser enviada perante a infraestrutura serveless da **Vercel** ou **Netlify**. Basta apenas interligar o repositório na respectiva plataforma e importar.

---
<div align="center">
  <b>Construído e Arquitetado por Cristiano</b>
</div>
