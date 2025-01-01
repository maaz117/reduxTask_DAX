import React from "react";
import useCounterStore from "./store/counter";
import useUserStore from "./store/user";

function App() {
  //counter
  const { count, increment, decrement, reset } = useCounterStore();

  //User
  const {user, setUserName} = useUserStore();

  return(
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <h1 className="text-4xl font-bold mb-4">Zustand Counter with Persistance</h1>
      <br></br>
      <h2 className="text-2xl font-semibold mb-6">Count: {count}</h2>
      <br></br>
      <div className="flex items-center justify-center space-x-4">
        <button onClick={increment} className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded-md">+</button>
        <button onClick={decrement} className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded-md">-</button>
        <button onClick={reset} className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded-md">Reset</button>
      </div>
    

      {/* User */}
      <br></br>
      <h1 className="text-4xl font-bold mt-8">User Store</h1>
      <br></br>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your Name"
        className="rounded-md px-8 py-1"
      />
      <p className="text-2xl font-medium">Username: {user.name}</p>
    </div>
  );
}

export default App;