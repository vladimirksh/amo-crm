import React from "react";
import "./SearchForm.css";
import find from "../../images/findIcon.svg";

function SearchForm() {
  function handleSearc(e) {
    e.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSearc}>
      <button className="search-form__button">
        <img className="search-form__find-img" alt="поиск" src={find} />
      </button>
      <input
        className="search-form__input"
        type="text"
        placeholder="Найти..."
      />
    </form>
  );
}

export default SearchForm;
