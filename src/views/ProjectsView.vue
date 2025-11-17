<script setup>
const projets = [
  {
    titre: 'Magasin de vélos Kraken',
    type: 'Projet de formation',
    description:
      "Application web pour un magasin de vélos : présentation du catalogue, mise en avant des modèles et parcours utilisateur complet. Projet réalisé dans le cadre de ma formation pour travailler la structuration d'une appli, la gestion des données et le déploiement.",
    tags: ['Projet de formation', 'Catalogue', 'Déploiement'],
    lien: 'https://magasin-velo-kraken-7fcdb570f12c.herokuapp.com/'
  },
  {
    titre: 'Portfolio développeur (Vue.js & Docker)',
    type: 'Projet personnel',
    description:
      'Ce portfolio : une SPA réalisée avec Vue 3 et Vue Router, entièrement dockerisée et servie via Nginx. Objectif : présenter mon profil, mes projets et mon parcours de reconversion de façon professionnelle.',
    tags: ['Vue.js', 'Vue Router', 'Docker', 'Nginx'],
    lien: '#'
  },
  {
    titre: 'Projet de stage – Développeur web junior',
    type: 'Stage',
    description:
      "Participation à un projet interne en tant que développeur web junior : intégration de fonctionnalités, correction de bugs et travail en équipe. Ce stage m’a permis de mettre en pratique mes compétences front et back dans un contexte professionnel.",
    tags: ['Stage', 'Travail en équipe', 'Qualité du code'],
    lien: null
  },
  {
    titre: 'API & Dashboard – Monitoring et tests',
    type: 'Projet de formation',
    description:
      'Conception d’une API et de son écosystème : documentation avec Swagger, stockage de données, tests de performance et tests automatisés. Projet orienté bonnes pratiques et qualité.',
    tags: ['API REST', 'Swagger', 'Tests', 'Performance'],
    lien: null
  }
]
</script>

<template>
  <section class="projects">
    <header class="header">
      <div>
        <h2>Mes projets</h2>
        <p class="subtitle">
          Une sélection de projets personnels, de formation et de stage qui
          illustrent ma reconversion vers le développement web et mainframe.
        </p>
      </div>
    </header>

    <div class="grid">
      <article v-for="p in projets" :key="p.titre" class="card">
        <div class="card-header">
          <h3>{{ p.titre }}</h3>
          <span class="badge">{{ p.type }}</span>
        </div>

        <p class="desc">
          {{ p.description }}
        </p>

        <div class="tags" v-if="p.tags && p.tags.length">
          <span v-for="tag in p.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>

        <a
          v-if="p.lien"
          :href="p.lien"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          Voir le projet
        </a>
      </article>
    </div>
  </section>
</template>

