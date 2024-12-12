import React, { useState } from "react";

interface data {
  name?: string;
  age?: number;
  address?: string;
}

const ObjectState: React.FC = () => {
  const [user, setUser] = useState<data>({
    name: "Ram",
    age: 52,
    address: "Nayabazar",
  });

  const updateName = () => {
    setUser({ ...user, name: "Manisha" });
  };

  const updateAge = () => {
    setUser({ ...user, age: 29 });
  };

  const updateAddress = () => {
    setUser({ ...user, address: "Khusibu" });
  };

  return (
    <div>
      <h1>Object State Example</h1>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Address: {user.address}</h3>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
      <button onClick={updateAddress}>Update Address</button>
    </div>
  );
};
export default ObjectState;
