import React from "react";

import "../assets/styles/categoryList.css";

import {Link} from "react-router-dom"

const CategoriesList = ({
  categories = [],
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="categoriesContainer">
      <div className="categoriesWrapper">
        <p
          onClick={() => setSelectedCategory({ id: "0", name: "Hepsi" })}
          className={`categoryItem ${
            selectedCategory.id === "0" ? "categoryItemActive" : ""
          }`}>
          Hepsi
        </p>
        {categories.map((category) => (
          <p
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className={`categoryItem ${
              selectedCategory.id === category.id ? "categoryItemActive" : ""
            }`}>
            {category.name}
          </p>
        ))}
        <div className="categoryOperationLinkWrapper">
            <Link to={"/category-operations"}>Kategori İşlemleri &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
