import "./App.css"

function App() {
  return (
    <div className="App">
      <form name="contact" data-netlify="true" method="post" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Nom <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Votre Mail: <input type="email" name="email" />
          </label>
        </p>

        <p>
          <label>
            Message: <textarea name="message"></textarea>
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
