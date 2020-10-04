import "./App.css";
import React, { useState, useCallback } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import PageContext from "./context/PageContext";
import useDocumentTitle from "./hooks/useDocumentTitle";

export default function App() {
  const defaultCounters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];
  const [counters, setCounters] = useState(defaultCounters);
  const [page, setPage] = useState("login");
  const [user, setUser] = useState("");
  useDocumentTitle(user ? `${user}'s Counters` : "");

  const onDeleteHandler = useCallback(
    (id) => setCounters(_counters => _counters.filter((counter) => counter.id !== id)),
    [setCounters]
  );

  const onResetHandler = useCallback(() => setCounters(defaultCounters), [
    defaultCounters,
  ]);

  const onIncrementHandler = useCallback(
    (id) =>
      setCounters((_counters) =>
        _counters.reduce(
          (acc, cur) =>
            cur.id === id
              ? (++cur.value || true) && [...acc, cur]
              : [...acc, cur],
          []
        )
      ),
    [setCounters]
  );
  const onDecrementHandler = useCallback(
    (id) =>
      setCounters((_counters) =>
        _counters.reduce(
          (acc, cur) =>
            cur.id === id
              ? (--cur.value || true) && [...acc, cur]
              : [...acc, cur],
          []
        )
      ),
    [setCounters]
  );
  return (
    <PageContext.Provider value={{ page, setPage: setPage }}>
      <NavBar count={counters.reduce((acc, cur) => cur.value + acc, 0)} />
      {page === "login" ? <Login onLogin={setUser} /> : null}
      {page === "counters" ? (
        <Counters
          counters={counters}
          onDelete={onDeleteHandler}
          onReset={onResetHandler}
          onIncrement={onIncrementHandler}
          onDecrement={onDecrementHandler}
        />
      ) : null}
    </PageContext.Provider>
  );
}