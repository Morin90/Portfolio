import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Transport Nodemailer (SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

// Vérifier la config SMTP au démarrage (optionnel)
transporter.verify((err, success) => {
  if (err) {
    console.error('Erreur SMTP:', err)
  } else {
    console.log('SMTP OK, prêt à envoyer des mails')
  }
})

// Endpoint contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' })
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Julien Morin" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO, // ton adresse de réception
      subject: `Nouveau message depuis le portfolio de ${name}`,
      replyTo: email,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
      `,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return res.json({ ok: true })
  } catch (err) {
    console.error('Erreur envoi email:', err)
    return res.status(500).json({ error: "Impossible d'envoyer le message pour le moment." })
  }
})

app.listen(PORT, () => {
  console.log(`Backend contact listening on port ${PORT}`)
})
