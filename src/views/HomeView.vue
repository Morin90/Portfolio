<script setup>
const photoUrl = '/Julien_Morin_AJC_Formation.JPG'

const skills = [
  'Vue.js',
  'JavaScript',
  'PHP / Symfony',
  'HTML & CSS',
  'MySQL',
  'Git & GitHub',
  'Docker',
  'Figma',
  'COBOL',
  'JCL',
  'DB2',
  'Pacbase'
]

const stack = [
  {
    nom: 'Vue.js',
    role: 'Framework front principal',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    nom: 'JavaScript',
    role: 'Langage front',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    nom: 'PHP',
    role: 'Back-end',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    nom: 'Symfony',
    role: 'Framework back-end',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg'
  },
  {
    nom: 'MySQL',
    role: 'Base de données',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    nom: 'Docker',
    role: 'Conteneurisation & déploiement',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    nom: 'Nginx',
    role: 'Serveur / reverse proxy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
  },
  {
    nom: 'Figma',
    role: 'UI / UX Design',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    nom: 'Mainframe / COBOL',
    role: 'Grands systèmes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cobol/cobol-original.svg'
  }
]

const experiences = [
  {
    titre: 'Stage développeur web junior',
    societe: 'Cegid',
    periode: 'Juin 2024 - Juil 2024',
    desc: 'Mise en pratique des compétences front-end et back-end au sein d’une équipe de développement.'
  },
  {
    titre: 'Certification Développeur Web / Web Mobile (Niv. 5)',
    societe: 'CCI du Beaujolais',
    periode: 'Sept 2023 - Nov 2024',
    desc: 'Formation complète : HTML, CSS, JavaScript (Vue.js), PHP (Symfony), MySQL, GitHub, Docker, Figma, sécurité web, éco-conception, gestion de projet.'
  },
  {
    titre: 'Formation Grands systèmes (Mainframe)',
    societe: 'AJC Formation',
    periode: 'Juil 2025 - Oct 2025',
    desc: 'Développement COBOL en environnement MVS, JCL & VSAM, DB2/SQL, programmation transactionnelle, outils Eclipse RDZ, TSO, ISPF, Pacbase.'
  },
  {
    titre: 'Conducteur d’engins & chef d’équipe TP',
    societe: 'Colas Rhône-Alpes',
    periode: 'Sept 2006 - Mai 2023',
    desc: '15 ans d’expérience dans les travaux publics : responsabilité d’équipe, rigueur, sécurité, respect des délais et coordination terrain.'
  }
]

const softSkills = [
  'Autonomie',
  'Loyauté',
  'Détermination',
  'Assidu et ponctuel',
  'Rigueur'
]

const hobbies = ['Football', 'Jeux vidéo', 'Cuisine']

const languages = [
  { nom: 'Français', niveau: 'Langue maternelle' },
  { nom: 'Anglais', niveau: 'A2' },
  { nom: 'Espagnol', niveau: 'A1' }
]
</script>

<template>
  <section class="home">
    <!-- HERO -->
    <div class="hero">
      <!-- Présentation sur toute la largeur -->
      <div class="hero-text">
        <h2>
          Salut, moi c’est <span class="accent">Julien Morin</span> 👋
        </h2>
        <p class="hero-subtitle">
          Développeur web et mainframe motivé et passionné, avec une base solide
          en front-end, back-end et grands systèmes. En reconversion après 15 ans
          dans les travaux publics, je mets aujourd’hui ma rigueur et mon
          autonomie au service de projets web ambitieux.
        </p>
        <div class="hero-actions">
          <router-link to="/projects" class="btn primary">
            Voir mes projets
          </router-link>
          <router-link to="/contact" class="btn ghost">
            Me contacter
          </router-link>
        </div>
      </div>

      <!-- Ligne sous la présentation : photo à gauche, profil en bref à droite -->
      <div class="hero-bottom">
        <div class="photo-card">
          <div class="photo-inner">
            <img :src="photoUrl" alt="Photo de Julien Morin" />
          </div>
          <p class="photo-caption">
            Julien Morin – Développeur web & mainframe
          </p>
        </div>

        <div class="hero-card">
          <p class="hero-title">Profil en bref</p>
          <ul>
            <li>✔ Développeur Web / Web Mobile (niveau 5)</li>
            <li>✔ Stack : Vue.js, PHP / Symfony, MySQL, Docker</li>
            <li>✔ Compétences grands systèmes : COBOL, MVS, DB2</li>
            <li>✔ Curieux, autonome et assidu</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- GRID À PROPOS + COMPÉTENCES -->
    <div class="grid">
      <div class="card">
        <h3>À propos de moi</h3>
        <p>
          Après une première carrière de conducteur d’engins puis chef d’équipe
          dans les travaux publics, j’ai choisi de me reconvertir dans le
          développement web et les grands systèmes. Cette expérience terrain
          m’a appris la gestion d’équipe, la rigueur, la communication et le
          respect des délais.
        </p>
        <p>
          Aujourd’hui, je conçois et développe des applications web modernes
          avec <strong>Vue.js</strong> et <strong>PHP / Symfony</strong>, tout en
          me formant aux environnements <strong>mainframe (COBOL, MVS)</strong>.
        </p>
        <p class="hobbies">
          En dehors du code, j’aime le <strong>football</strong>, les
          <strong>jeux vidéo</strong> et la <strong>cuisine</strong>.
        </p>
      </div>

      <div class="card side">
        <div class="block">
          <h3>Compétences principales</h3>
          <div class="skills">
            <span v-for="s in skills" :key="s" class="skill">
              {{ s }}
            </span>
          </div>
        </div>

        <div class="block">
          <h4>Soft skills</h4>
          <ul class="soft-list">
            <li v-for="s in softSkills" :key="s">{{ s }}</li>
          </ul>
        </div>

        <div class="block">
          <h4>Langues</h4>
          <ul class="lang-list">
            <li v-for="lang in languages" :key="lang.nom">
              <span class="lang-name">{{ lang.nom }}</span>
              <span class="lang-level">{{ lang.niveau }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- STACK -->
    <div class="card stack">
      <h3>Stack & outils</h3>
      <p class="stack-subtitle">
        Un aperçu des technologies et environnements que j’utilise.
      </p>

      <div class="stack-grid">
        <div v-for="tech in stack" :key="tech.nom" class="stack-item">
          <div class="stack-icon-wrap">
            <img :src="tech.icon" :alt="tech.nom" class="stack-icon" loading="lazy" />
          </div>
          <div class="stack-text">
            <p class="stack-name">{{ tech.nom }}</p>
            <p class="stack-role">{{ tech.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- PARCOURS -->
    <div class="card timeline">
      <h3>Parcours</h3>
      <div v-for="exp in experiences" :key="exp.titre" class="timeline-item">
        <div class="timeline-header">
          <h4>{{ exp.titre }}</h4>
          <span class="periode">{{ exp.periode }}</span>
        </div>
        <p class="societe">{{ exp.societe }}</p>
        <p class="desc">{{ exp.desc }}</p>
      </div>
    </div>
  </section>
</template>

