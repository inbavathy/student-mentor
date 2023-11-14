import React, { useState, useEffect } from "react";
import Select from "react-select";
import { rest as users, user, tags } from "./data";
import { createOptions, getValues } from "./shared";
import Card from "./Card";

export default function App() {
  const [nav, setNav] = useState(0);
  const [filters, setFilters] = useState(createOptions(user.tags));
  const [collection, setCollection] = useState([]);
  const [all, setAll] = useState(true);

  useEffect(() => {
    setCollection(() => {
      if (nav === 0)
        return all
          ? users
          : users.filter((u) =>
              getValues(filters).some((v) => u.tags.includes(v))
            );
      else if (nav === 1) return user.mentors;
      else return user.mentees;
    });
  }, [nav, filters, all]);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-flex">
          <div className="uk-width-1-4 uk-margin-right">
            <Card user={user} />
          </div>

          <div className="uk-width-expand">
            <ul className="uk-margin uk-subnav">
              <li className={nav === 0 ? "uk-active" : undefined}>
                <a onClick={() => setNav(0)}>all</a>
              </li>
              <li className={nav === 1 ? "uk-active" : undefined}>
                <a onClick={() => setNav(1)}>mentors</a>
              </li>
              <li className={nav === 2 ? "uk-active" : undefined}>
                <a onClick={() => setNav(2)}>mentees</a>
              </li>
            </ul>

            {nav === 0 && (
              <div className="uk-margin uk-flex uk-flex-middle">
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={all}
                  onChange={(e) => setAll(e.target.checked)}
                />
                <div className="uk-margin-small-left uk-width-expand">
                  <Select
                    placeholder="Filter tags"
                    value={filters}
                    options={createOptions(tags)}
                    onChange={(options) => setFilters(options || [])}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isDisabled={all}
                  />
                </div>
              </div>
            )}
            <ul className="uk-margin uk-list uk-list-divider">
              {collection.map((user) => (
                <li key={user.id}>
                  <Card user={user} connected={nav === 1 || nav === 2} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
