const Search = ({ onChange }) => {
  return (
    <div className="header">
      <h1>😎 Emoji Search 😎</h1>
      <input
        onChange={onChange}
        type="text"
        placeholder="What emoji are you looking for?"
      />
    </div>
  );
};
export default Search;
