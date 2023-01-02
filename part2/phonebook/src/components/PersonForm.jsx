import React from "react";
import service from "../service/service";

const PersonForm = ({
  newName,
  newPhone,
  setNewName,
  setNewPhone,
  setPersons,
  persons,
  setNotificationMessage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedPerson = persons.find((person) => person.name === newName);
    if (matchedPerson) {
      if (
        // eslint-disable-next-line
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        service
          .update({ ...matchedPerson, number: newPhone })
          .then((updatedPerson) =>
            setPersons(
              persons.map((p) =>
                p.id === updatedPerson.id ? updatedPerson : p
              )
            )
          )
          .catch((err) => {
            console.log("update err", err);
            setNotificationMessage(
              `Error: ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 3000);
            setPersons(persons.filter((p) => p.id !== matchedPerson.id));
          });
        setNotificationMessage(`Updated ${newName}'s phone number`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 3000);
      }
      setNewName("");
      setNewPhone("");
      return;
    }

    service
      .create(newName, newPhone)
      .then((newPerson) => setPersons(persons.concat(newPerson)));
    setNotificationMessage(`Added ${newName} to the contact list`);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 3000);

    setNewName("");
    setNewPhone("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{" "}
        <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
