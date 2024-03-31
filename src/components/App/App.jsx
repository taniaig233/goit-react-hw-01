import userData from "../Profile/userData.json";
import friends from "../FriendList/friends.json";
import transactions from "../Transactions/transactions.json";

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList.jsx";
import Transactions from "../Transactions/Transactions.jsx";



import css from "./App.module.css";

function App() {
 
  return (
    <div className={css.container}>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
      />
      <FriendList friends={friends} />
       <Transactions items={transactions} />
    </div>
   );
}

export default App
