import "./App.css";
import { useState } from "react";
import emojis from "./assets/emojiList.json";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Line from "./components/Line";

function App() {
  const [value, setValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  //console.log(value);

  //map iterates the entire array. We should optimize using a loop that is able to stop when it gets the first 20 matches
  // ==> using for istance for(){ // use break to stop the loop}
  const arrayEmojis = emojis
    .map((elem) => {
      const { title, symbol } = elem;
      if (elem.keywords.includes(value.toLowerCase())) {
        return [title, symbol];
      }
    })
    .filter((elem) => elem !== undefined);

  console.log(arrayEmojis);
  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };

  //Handle ClipboardCopy API
  async function copyTextToClipboard(text) {
    console.log(text);
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  //Handle onClick to copy
  const handleCopyClick = (symbol) => {
    copyTextToClipboard(symbol)
      .then(() => {
        //To display a message to confim the element has been copied (TO DO - out of exercice scope...)
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //RENDERING
  return (
    <>
      <div className="container">
        <Search value={value} onChange={handleChangeInput} />

        {arrayEmojis.slice(0, 20).map((emojy) => {
          return (
            <Line
              onClick={handleCopyClick}
              title={emojy[0]}
              symbol={emojy[1]}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
