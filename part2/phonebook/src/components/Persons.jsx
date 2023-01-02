import React from "react";
import service from "../service/service";

const Persons = ({ persons, setPersons }) => {
  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      service.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
  };

  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          <span>
            {person.name} {person.number}
          </span>
          <button onClick={() => handleDelete(person)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
