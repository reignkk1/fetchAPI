import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:9000/api/user");
    setUser(response.data);
  };

  useEffect(() => {
    fetchData();
    // fetch("http://localhost:9000/api/user")
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const age = e.target.age.value;

    axios.post("http://localhost:9000/api/user", { name, email, age });

    // fetch("http://localhost:9000/api/user", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name,
    //     age,
    //     email,
    //   }),
    // });
  };

  return (
    <>
      <ul>{/* <li>{user[0].name}</li> */}</ul>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="이름" />
        <input name="email" placeholder="이메일" />
        <input name="age" placeholder="나이" />
        <button>데이터 추가</button>
      </form>
    </>
  );
}

export default App;
