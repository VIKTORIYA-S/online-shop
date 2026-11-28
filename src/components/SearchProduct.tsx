function SearchProduct({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}) {
  return (
    <input
      className="search-input"
      type="search"
      aria-label="Поиск по названию"
      placeholder="Поиск по названию"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchProduct;
