import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ContactSuccess from "./pages/contactSuccess"
function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pages/contactSuccess">
            <ContactSuccess />
          </Route>
          <Route path="/">
            <form
              name="contact"
              action="/pages/contactSuccess"
              data-netlify="true"
              method="post"
              onSubmit="submit"
            >
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
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
