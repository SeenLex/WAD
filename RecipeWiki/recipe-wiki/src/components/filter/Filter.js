import React, { useState } from "react";
import "./Filter.css";

export const Filter = () => {
  const [dropdownState, setDropdownState] = useState({
    breakfast: false,
    brunch: false,
    lunch: false,
    dinner: false,
  });

  const toggleDropdown = (meal) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [meal]: !prevState[meal],
    }));
  };

  const toggleSidebarDropdown = () => {
    setDropdownState((prevState) => ({
      ...prevState,
      sidebar: !prevState.sidebar,
    }));
  };

  return (
    <div>
      <div className="sidebar-title">
        <button
          className="sidebar-title-Button"
          onClick={toggleSidebarDropdown}
        >
          <b>Filter</b>
        </button>
      </div>
      {dropdownState.sidebar && (
        <div className="meals">
          <div>
            <button
              onClick={() => toggleDropdown("breakfast")}
              className="breakfast"
            >
              Breakfast
            </button>
            {dropdownState.breakfast && (
              <div className="type-of-meals">
                <div className="breakfasts">Quick & Easy</div>
                <div className="breakfasts">Oatmeals</div>
                <div className="breakfasts">Sandwiches</div>
                <div className="breakfasts">Omelette</div>
                <div className="breakfasts">Vegan</div>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("brunch")} className="brunch">
              Brunch
            </button>
            {dropdownState.brunch && (
              <div className="type-of-meals">
                <div className="brunches">Eggs & Benedicts</div>
                <div className="brunches">Mexican</div>
                <div className="brunches">Savory</div>
                <div className="brunches">Vegan</div>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("lunch")} className="lunch">
              Lunch
            </button>
            {dropdownState.lunch && (
              <div className="type-of-meals">
                <div className="lunches">Soups & Stews</div>
                <div className="lunches">Grills</div>
                <div className="lunches">Pasta</div>
                <div className="lunches">Pizza</div>
                <div className="lunches">Burgers</div>
                <div className="lunches">Side Dishes</div>
                <div className="lunches">Sauce</div>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("dinner")} className="dinner">
              Dinner
            </button>
            {dropdownState.dinner && (
              <div className="type-of-meals">
                <div className="dinners">Seafood</div>
                <div className="dinners">Italian</div>
                <div className="dinners">Vegetarian</div>
                <div className="dinners">Vegan</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
