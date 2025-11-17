<script setup>
import { ref } from 'vue'

const nom = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)

const handleSubmit = () => {
  // Ici tu pourras brancher un backend, un service d’email, etc.
  console.log('Formulaire envoyé :', {
    nom: nom.value,
    email: email.value,
    message: message.value
  })
  sent.value = true
  setTimeout(() => {
    sent.value = false
  }, 2500)
  nom.value = ''
  email.value = ''
  message.value = ''
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
        />
      </div>

      <div class="actions">
        <button type="submit" class="btn primary">Envoyer</button>
        <span v-if="sent" class="sent">Merci, ton message a bien été simulé 👍</span>
      </div>
    </form>

    <div class="extra">
      <p>Tu peux aussi me retrouver sur :</p>
      <ul>
        <li><span class="label">GitHub :</span> ton-github</li>
        <li><span class="label">LinkedIn :</span> ton-linkedin</li>
      </ul>
    </div>
  </section>
</template>


