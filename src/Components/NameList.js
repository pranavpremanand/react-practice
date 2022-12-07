import React from "react";
import Person from "./Person";

function NameList() {
    const names = ['Clark','Bruce','Diana','Bruce']
  const persons = [
    {
      id: 1,
      name: "Pranav",
      age: 23,
    },
    {
      id: 2,
      name: "Fahad",
      age: 23,
    },
    {
      id: 3,
      name: "Dhipin",
      age: 23,
    },
    {
      id: 4,
      name: "Aravind",
      age: 25,
    },
  ];
  return (
    <div>
      {/* {persons.map((data) => (
        <Person key = {data.id} person = {data}/>
      ))} */}
      {names.map((names, index)=><h4 key={index}>{index} {names}</h4>)}
    </div>
  );
}

export default NameList;
