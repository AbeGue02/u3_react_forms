import { useState } from 'react'
import './App.css'

interface Form {
  username: string,
  password: string
}

function App() {

  const initialForm: Form = { username: '', password: ''}
  const [formState, setFormState] = useState(initialForm)

  const handleChange = (event: any) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    // clear the form
    setFormState(initialForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={formState.username}
        />
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      />
      </div>
      <button type="submit">Login</button>
    </form>
    </>
  )
}

export default App
