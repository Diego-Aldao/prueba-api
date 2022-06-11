import { useState, useEffect } from "react";

const baseUrl = "https://reqres.in/api/users";

function App() {
  const [misUsuarios, setMisUsuarios] = useState();
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setMisUsuarios(data.data));
  }, []);

  const usuarios = misUsuarios?.map((usuario) => (
    <div key={usuario.id}>
      <h1>
        {usuario.first_name} {usuario.last_name}
      </h1>
      <p>{usuario.email}</p>
      <img src={usuario.avatar} />
    </div>
  ));
  return (
    <div className="App">
      <h1>Usuarios de la api:</h1>
      {usuarios}
    </div>
  );
}

export default App;
