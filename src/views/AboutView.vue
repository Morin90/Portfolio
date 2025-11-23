<script setup>
const cvUrl = '/cv-julien-morin.pdf'
</script>

<template>
  <section class="about">
    <header class="hero">
      <div class="hero-text">
        <h2>À propos de moi</h2>
        <p class="subtitle">
          Je suis <strong>Julien Morin</strong>, développeur web et mainframe en reconversion,
          après plus de 15 ans d’expérience dans les travaux publics.
        </p>

        <a :href="cvUrl" download class="btn primary">
          📄 Télécharger mon CV
        </a>
      </div>

      <div class="photo-card">
        <div class="photo-inner">
          <!-- 🔁 ICI : chemin direct vers le fichier du dossier public -->
          <img
            src="/Julien_Morin_AJC_Formation.JPG"
            alt="Photo de Julien Morin"
          />
        </div>
        <p class="photo-caption">
          Julien Morin – Développeur web &amp; mainframe
        </p>
      </div>
    </header>

    <div class="grid">
      <div class="card">
        <h3>Mon parcours</h3>
        <p>
          Ancien conducteur d’engins et chef d’équipe dans les travaux publics, j’ai décidé
          de me reconvertir dans le développement web et les grands systèmes. Cette première
          carrière m’a donné le goût du travail bien fait, de la rigueur et de la
          responsabilité.
        </p>
        <p>
          Je me suis formé au développement web (front &amp; back) puis à l’univers des
          <strong>mainframes</strong> (COBOL, MVS, DB2). Aujourd’hui, je cherche à mettre
          ces compétences au service de projets concrets, dans un environnement stimulant.
        </p>
      </div>

      <div class="card">
        <h3>En résumé</h3>
        <ul class="list">
          <li>🎓 Titre professionnel Développeur Web / Web Mobile (Niv. 5).</li>
          <li>👨‍💻 Stack : Vue.js, PHP / Symfony, MySQL, Docker, Git, Figma.</li>
          <li>🖥 Mainframe : COBOL, MVS, JCL, DB2, outils Eclipse RDZ, TSO, ISPF.</li>
          <li>🧩 Soft skills : autonomie, loyauté, détermination, assiduité.</li>
        </ul>
      </div>
    </div>

    <div class="card timeline">
      <h3>Formations &amp; expériences</h3>

      <div class="timeline-item">
        <div class="timeline-header">
          <h4>Formation Grands systèmes (Mainframe)</h4>
          <span class="periode">AJC Formation · 2025</span>
        </div>
        <p class="desc">
          COBOL en environnement MVS, JCL &amp; VSAM, DB2/SQL, programmation transactionnelle,
          outils Eclipse RDZ, TSO, ISPF, Pacbase.
        </p>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <h4>Stage développeur web junior</h4>
          <span class="periode">Cegid · 2024</span>
        </div>
        <p class="desc">
          Mise en pratique des compétences front-end et back-end au sein d’une équipe de
          développement, participation à un projet interne.
        </p>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <h4>Développeur Web / Web Mobile (Niv. 5)</h4>
          <span class="periode">CCI du Beaujolais · 2023 - 2024</span>
        </div>
        <p class="desc">
          HTML, CSS, JavaScript, Vue.js, PHP, Symfony, MySQL, GitHub, Docker, Figma,
          sécurité web, éco-conception, gestion de projet.
        </p>
      </div>

      <div class="timeline-item">
        <div class="timeline-header">
          <h4>Conducteur d’engins &amp; chef d’équipe TP</h4>
          <span class="periode">Colas Rhône-Alpes · 2006 - 2023</span>
        </div>
        <p class="desc">
          Gestion d’équipe, organisation de chantiers, respect des délais, sécurité et
          qualité sur le terrain pendant plus de 15 ans.
        </p>
      </div>
    </div>
  </section>
</template>



