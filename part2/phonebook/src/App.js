import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import service from "./service/service";
import "./index.css";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "040-123456", id: 1 },
    // { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    // { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    // { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSerach] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    service.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />

      <Filter search={search} setSerach={setSerach} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        setPersons={setPersons}
        persons={persons}
        setNotificationMessage={setNotificationMessage}
      />

      <h3>Numbers</h3>

      <Persons persons={search ? filtered : persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
