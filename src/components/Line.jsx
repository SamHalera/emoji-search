import emojis from "../assets/emojiList.json";

const Line = ({ onClick, title, symbol }) => {
  return (
    <div
      key={title}
      onClick={() => {
        onClick(symbol);
      }}
      className="line"
    >
      <span key={title}>
        {symbol} {title}
      </span>
      <span className="copy">Click to copy!</span>
    </div>
  );
};
export default Line;

// const arrayEmojis = emojis
//   .map((elem) => {
//     if (elem.keywords.includes(value.toLowerCase())) {
//       return (
//         <div
//           key={elem.title}
//           onClick={() => {
//             handleCopyClick(elem.symbol);
//           }}
//           className="line"
//         >
//           <span key={elem.title}>
//             {elem.symbol} {elem.title}
//           </span>
//           <span className="copy">Click to copy!</span>
//         </div>
//       );
//     }
//   })
//   .filter((elem) => elem !== undefined);

//console.log(arrayEmojis);
