import About from "./components/About"
import Home from "./components/Home"
import Nav from "./components/Nav"
const App = () => {
  let data = "data from tha server";
  let subject = ["Math","english","Science"];
  let profile = {
    name:"john Doe",
    age:23,
    email:"john@doe.com",
  };
  
  return(
    <div>
      <h1>{profile.name}</h1>
      <h1>{profile.age}</h1>
      <h1>{profile.email}</h1>
    </div>
  )
}
export default App
