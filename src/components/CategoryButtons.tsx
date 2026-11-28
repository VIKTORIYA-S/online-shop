import type { Category } from "../types";

type CategoryButtonsProps = {
  selectedCategory: Category | "all";
  onSelect: (category: Category | "all") => void;
};

const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "household", label: "Товары для дома" },
  { value: "hygiene", label: "Гигиенические товары" },
];

function CategoryButtons({
  selectedCategory,
  onSelect,
}: CategoryButtonsProps) {
  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          className={category.value === selectedCategory ? "active" : ""}
          onClick={() => onSelect(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;