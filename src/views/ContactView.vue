<script setup>
import { ref } from 'vue'

const nom = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)
const loading = ref(false)
const error = ref('')

const handleSubmit = async () => {
  loading.value = true
  sent.value = false
  error.value = ''

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nom.value,
        email: email.value,
        message: message.value
      })
    })

    if (!res.ok) {
      const body = await res.json().catch(() => null)
      throw new Error(body?.error || 'Erreur lors de l’envoi du message')
    }

    sent.value = true
    nom.value = ''
    email.value = ''
    message.value = ''
  } catch (e) {
    console.error(e)
    error.value = e.message || 'Une erreur est survenue'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="contact">
    <div class="intro">
      <h2>Me contacter</h2>
      <p class="subtitle">
        Une idée de projet, une collaboration ou une question ? Envoie-moi un
        message, je te répondrai dès que possible.
      </p>
    </div>

    <form class="form" @submit.prevent="handleSubmit">
      <div class="row">
        <div class="field">
          <label for="nom">Nom</label>
          <input id="nom" v-model="nom" type="text" placeholder="Ton nom" required />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="ton.email@example.com"
            required
          />
        </div>
      </div>

      <div class="field">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          placeholder="Parle-moi de ton projet ou de ta demande..."
          required
        ></textarea>
      </div>

      <div class="actions">
        <button type="submit" class="btn primary" :disabled="loading">
          {{ loading ? 'Envoi en cours...' : 'Envoyer' }}
        </button>
        <span v-if="sent" class="sent">Merci, ton message a bien été envoyé 👍</span>
        <span v-if="error" class="sent" style="color: #f97373;">{{ error }}</span>
      </div>
    </form>

    <div class="extra">
      <p>Tu peux aussi me retrouver sur :</p>
      <ul>
      <div class="social-links">
  <a href="https://github.com/Morin90" target="_blank" rel="noopener noreferrer">
    <img src="/icons/github.svg" alt="GitHub" />
    GitHub : Morin90
  </a>

  <a href="https://www.linkedin.com/in/julien-morin-b96b4b2ba/" target="_blank" rel="noopener noreferrer">
    <img src="/icons/linkedin.svg" alt="LinkedIn" />
    LinkedIn : Julien Morin
  </a>
</div>
      </ul>
    </div>
  </section>
</template>



