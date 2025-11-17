<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const isDark = ref(false)
const isMobileNavOpen = ref(false)
const route = useRoute()

const toggleDark = () => {
  isDark.value = !isDark.value
  applyTheme()
}

const applyTheme = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="brand">
        <span class="logo">JM</span>
        <div class="brand-text">
          <h1 class="title">Mon Portfolio</h1>
          <p class="subtitle">Développeur Web & Mainframe</p>
        </div>
      </div>

      <button class="theme-toggle" @click="toggleDark" :aria-pressed="isDark">
        <span v-if="isDark">☾</span>
        <span v-else>☀</span>
      </button>

      <button class="burger" @click="toggleMobileNav" aria-label="Menu">
        <span />
        <span />
        <span />
      </button>

      <nav class="nav desktop-nav">
        <router-link
          to="/"
          class="link"
          :class="{ active: route.path === '/' }"
        >
          Accueil
        </router-link>
        <router-link
          to="/projects"
          class="link"
          :class="{ active: route.path.startsWith('/projects') }"
        >
          Projets
        </router-link>
        <router-link
          to="/about"
          class="link"
          :class="{ active: route.path.startsWith('/about') }"
        >
          À propos / CV
        </router-link>
        <router-link
          to="/contact"
          class="link"
          :class="{ active: route.path.startsWith('/contact') }"
        >
          Contact
        </router-link>
      </nav>
    </header>

    <transition name="fade">
      <nav v-if="isMobileNavOpen" class="nav mobile-nav">
        <router-link
          to="/"
          class="link"
          :class="{ active: route.path === '/' }"
          @click="closeMobileNav"
        >
          Accueil
        </router-link>
        <router-link
          to="/projects"
          class="link"
          :class="{ active: route.path.startsWith('/projects') }"
          @click="closeMobileNav"
        >
          Projets
        </router-link>
        <router-link
          to="/about"
          class="link"
          :class="{ active: route.path.startsWith('/about') }"
          @click="closeMobileNav"
        >
          À propos / CV 
        </router-link>
        <router-link
          to="/contact"
          class="link"
          :class="{ active: route.path.startsWith('/contact') }"
          @click="closeMobileNav"
        >
          Contact
        </router-link>
      </nav>
    </transition>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Mon Portfolio. Tous droits réservés.</p>
      <p class="footer-secondary">
        Construit avec Vue.js · Servi par Docker &amp; Nginx
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* Thème global via variables CSS */
:global(:root) {
  --bg: #f5f5f7;
  --bg-elevated: #ffffff;
  --text: #111827;
  --text-muted: #6b7280;
  --accent: #2563eb;
  --border: #e5e7eb;
  --shadow-soft: 0 10px 25px rgba(15, 23, 42, 0.08);
}

:global(html.dark) {
  --bg: #020617;
  --bg-elevated: #020617;
  --text: #e5e7eb;
  --text-muted: #9ca3af;
  --accent: #60a5fa;
  --border: #1f2937;
  --shadow-soft: 0 10px 40px rgba(15, 23, 42, 0.6);
}

:global(body) {
  margin: 0;
  background: var(--bg);
  color: var(--text);
}

/* Layout */

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 1.5rem;
  box-sizing: border-box;
}

.header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  border-radius: 1.25rem;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-soft);
  position: sticky;
  top: 1rem;
  z-index: 20;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent), #a855f7);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.brand-text {
  text-align: left;
}

.title {
  font-size: 1.25rem;
  margin: 0;
}

.subtitle {
  margin: 0.1rem 0 0;
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Nav */

.nav {
  display: flex;
  gap: 1rem;
}

.desktop-nav {
  display: flex;
}

.mobile-nav {
  display: none;
}

/* Boutons */

.theme-toggle {
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 999px;
  width: 2.3rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.theme-toggle:hover {
  border-color: var(--accent);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
}

.burger span {
  height: 2px;
  width: 14px;
  border-radius: 999px;
  background: var(--text);
  margin: 0 auto;
}

/* Liens */

.link {
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  color: var(--text-muted);
  border: 1px solid transparent;
  transition: all 0.18s ease-out;
}

.link:hover {
  color: var(--accent);
  background: rgba(37, 99, 235, 0.06);
}

.link.active {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(37, 99, 235, 0.08);
}

/* Contenu + footer */

.content {
  flex: 1;
  margin-top: 1rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-soft);
  box-sizing: border-box;
}

.footer {
  margin-top: 1.5rem;
  padding: 1.25rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  text-align: center;
}

.footer-secondary {
  margin-top: 0.25rem;
}

/* Transition mobile nav */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.16s ease-out, transform 0.16s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Responsive */

@media (max-width: 768px) {
  .header {
    padding: 0.75rem 0.9rem;
  }

  .subtitle {
    display: none;
  }

  .desktop-nav {
    display: none;
  }

  .burger {
    display: flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1rem 0.85rem;
    margin: -0.5rem 0 0.75rem;
    border-radius: 0.9rem;
    background: var(--bg-elevated);
    box-shadow: var(--shadow-soft);
  }

  .content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.05rem;
  }

  .logo {
    width: 34px;
    height: 34px;
    font-size: 0.95rem;
  }
}
</style>
