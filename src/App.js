import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "1. πΉ=π": "Gulabi aankhen, jo teri dekhi",
  "2. βπΆββοΈ+π¦": "Kithe chali aen, morni banke, morni banke",
  "3. πβοΈπ+π«": "Main tera boyfriend, tu meri girlfriend",
  "4. ππͺ+β₯π": "Tune maari entriyaan, dil mein baji ghantiyaan",
  "5. ππ+π­π": "Sun raha hai na tu, ro raha hu main",
  "6. π΅π΄+ππ": "Aunti ji Aunti ji Get up and Dance ",
  "7. βπ+ππ₯": "Suraj hua maddham, chaand jalne laga",
  "8. πππΆ":"Engine ki seeti mai maro maan dole",
  "9. ππ":"Mera Jhoota hai japani",
  "10. π½π»":"Jadu hai naasha hai"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState();

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database ";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>SONG INTERPRETER</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer", }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
