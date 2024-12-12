import React, { useState } from "react";
import axios from "axios";

//defining the structure of data to be sent
interface User {
  name: string;
  username: string;
  contact: number;
}

const SendingDataUsingPostMethod: React.FC = () => {
  //state to handle form inputs
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    contact: 0,
  });

  const [responseMessage, setResponseMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  //handle input field changes

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  //handle form submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponseMessage("");

    try {
      //making post request using axios
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users"
      );
      setResponseMessage(`User successfully created`);
    } catch (error) {
      setError("Failed to create ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Handling through POST Method</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInput}
        />
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInput}
        />
        <label>Contact no:</label>
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={handleInput}
        />

        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default SendingDataUsingPostMethod;
