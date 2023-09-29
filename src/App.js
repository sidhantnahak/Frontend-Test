import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const backend_url = "https://note-making-app.onrender.com"
function App() {
  const [name, setname] = useState("None")

  // export const login = (email, password) => async (dispatch) => {
  //   try {

  //     dispatch({ type: login_request });
  //     const config = { headers: { "Content-Type": "application/json" } };

  //     const { data } =

  //       console.log(data.token)


  //     dispatch({ type: login_sucess, payload: data.token });



  //   } catch (error) {
  //     dispatch({ type: login_fail, payload: error.response.data.message })

  //   }

  // }


  const getData = async () => {
    let email = "sidhantnahak2@gmail.com"
    let password = "sidh1234"
    const config = { headers: { "Content-Type": "application/json" } };

    await axios.post(`${backend_url}/api/v1/login`,
      { email, password }, config
    )
      .then(async (data) => {
        setname(data.data.user.name)
        await axios.get(`${backend_url}/api/v1/fetchallnotes`)
          .then(data => console.log(data.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Welcome to the react app</h1>

      <p>Username :  {name} </p>

    </div>
  );
}

export default App;
