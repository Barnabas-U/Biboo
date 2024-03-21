import React, { useState } from "react";
import Biboo from "./Components/Biboo";
import {
  Context,
  FontColor,
  FontStyle,
  HexColor,
  ItalicFont,
} from "./Components/Context";

const App = () => {
  const [verseClassName, setVerseClassName] = useState("verse-img1");
  const [backgroundHex, setBackgroundHex] = useState("");
  const [verseFont, setVerseFont] = useState("");
  const [isItalic, setItalic] = useState("false");
  const [fontColor, setFontColor] = useState("");
  return (
    <Context.Provider value={[verseClassName, setVerseClassName]}>
      <HexColor.Provider value={[backgroundHex, setBackgroundHex]}>
        <FontStyle.Provider value={[verseFont, setVerseFont]}>
          <ItalicFont.Provider value={[isItalic, setItalic]}>
            <FontColor.Provider value={[fontColor, setFontColor]}>
              <Biboo />
            </FontColor.Provider>
          </ItalicFont.Provider>
        </FontStyle.Provider>
      </HexColor.Provider>
    </Context.Provider>
  );
};

export default App;
