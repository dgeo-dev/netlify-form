import "./App.css"

function App() {
  return (
    <div className="App">
      <form name="contact" data-netlify="true" method="post" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Votre Prénom: <input type="text" name="first-name" />
          </label>
        </p>
        <p>
          <label>
            Votre Nom: <input type="text" name="last-name" />
          </label>
        </p>
        <p>
          <label>
            Votre Email: <input type="email" name="email" />
          </label>
        </p>

        <p>
          <label>
            Votre message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Envoyer</button>
        </p>
      </form>
    </div>
  )
}

export default App
