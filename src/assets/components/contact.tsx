import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="max-w-xl w-full p-6">
        <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
        <form
          action="/server/send_mail.php"
          method="POST"
          className="flex flex-col space-y-5"
        >
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            className="p-2 rounded border text-black"
            required
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            className="p-2 rounded border text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 rounded border text-black"
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder="Téléphone"
            className="p-2 rounded border text-black"
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded font-semibold"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
