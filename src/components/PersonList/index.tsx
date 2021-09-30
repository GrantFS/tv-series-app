import { Link } from 'react-router-dom';
import React from 'react';
import './index.css';
import { Person } from '../Person/interface';

interface People {
  person: Person;
}

interface PeopleProps {
  list: People[];
}

const PersonList = ({ list }: PeopleProps) => {

  const openItem = (e: any, person_id: number) => {
    e.preventDefault();
    window.location.href = `/person/${person_id}`;
  }

  return (
    <div className="person-list center">
      <ul>
          { list.map(item => (
              <li key={item.person.id}>
                <Link to={`/person/${item.person.id}`} onClick={(e) => {openItem(e, item.person.id)}}>
                  {item.person.name}
                </Link>
              </li>
          ))}
      </ul>
  </div>
  )
}

export default PersonList;
