import type { CategoryFilter } from "../types";

function FilterCategory({
  currentCategory,
  onChange,
}: {
  currentCategory: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}) {
  const filterOptions: Record<CategoryFilter, string> = {
    all: "Все",
    household: "Для дома",
    hygiene: "Гигиена",
  };

  const categories = Object.keys(filterOptions) as CategoryFilter[];

  return (
    <div className="category-btns">
      {categories.map((value) => (
        <button
          key={value}
          aria-pressed={value === currentCategory}
          type="button"
          className={`category-btn ${value === currentCategory ? "active" : ""}`}
          onClick={() => onChange(value)}
        >
          {filterOptions[value]}
        </button>
      ))}
    </div>
  );
}

export default FilterCategory;
