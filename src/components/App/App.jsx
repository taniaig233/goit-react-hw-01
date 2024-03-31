import userData from "../Profile/userData.json";
import Profile from "../Profile/Profile";


import css from "./App.module.css";

function App() {
 
  return (
    <div className={css.container}>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
    </div>
   );
}

export default App
