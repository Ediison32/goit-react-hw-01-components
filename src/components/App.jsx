
import Profile from "../components/profile";
import user from "../json/user.json";

import Statistics from "../components/statistics";
import data from "../json/data.json";

import FriendList from "../components/friendList";
import friends from "../json/friends.json";

import TransactionHistory from "../components/transactionHistory";
import history from "../json/transactions.json";

export const App = () => {
 
  console.log(friends);
  return (
    <>
    <Profile user={user} />
    <Statistics title="Upload stats" data={data} />
    <FriendList friends={friends}/>
    <TransactionHistory history={history}/>
    </>
  );
  
};
