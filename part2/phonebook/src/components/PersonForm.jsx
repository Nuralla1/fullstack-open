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
  setNotificationIsError,
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
          .then((updatedPerson) => {
            setNotificationIsError(false);
            setNotificationMessage(`Updated ${newName}'s phone number`);
            setTimeout(() => {
              setNotificationMessage(null);
            }, 3000);
            setPersons(
              persons.map((p) =>
                p.id === updatedPerson.id ? updatedPerson : p
              )
            );
          })
          .catch((err) => {
            if (err.response.data.error.includes("Validation")) {
              setNotificationIsError(true);
              setNotificationMessage(`${err.response.data.error}`);
              setTimeout(() => {
                setNotificationMessage(null);
                setNotificationIsError(false);
              }, 3000);
              return;
            }
            setNotificationIsError(true);
            setNotificationMessage(
              `Error: ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setNotificationMessage(null);
              setNotificationIsError(false);
            }, 3000);
            setPersons(persons.filter((p) => p.id !== matchedPerson.id));
          });
      }
      setNewName("");
      setNewPhone("");
      return;
    }

    service
      .create(newName, newPhone)
      .then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNotificationIsError(false);
        setNotificationMessage(`Added ${newName} to the contact list`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 3000);
      })
      .catch((err) => {
        setNotificationIsError(true);
        setNotificationMessage(`${err.response.data.error}`);
        setTimeout(() => {
          setNotificationMessage(null);
          setNotificationIsError(false);
        }, 3000);
      });

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
