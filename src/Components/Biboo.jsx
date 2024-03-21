import React, { useState, useEffect, useContext } from "react";
import "./Biboo.scss";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import Colors from "./Colors";
import { Context, FontColor, FontStyle, HexColor, ItalicFont } from "./Context";

const Biboo = () => {
  const [bookName, setBookName] = useState("");
  let [chapterNumber, setChapterNumber] = useState("");
  let [verseNumber, setVerseNumber] = useState("");
  let [versePlaceHolder, setVersePlaceHolder] = useState(
    "Verse Quote will appear here"
  );
  let [verseNumberQuote, setVerseNumberQuote] = useState([]);
  let [quotePlacedHolder, setQuotePlacedHolder] = useState("Verse");

  const [verseOutput, setVerseOutput] = useState("");
  useEffect(() => {
    generateVerse();
  }, []);

  useEffect(() => {
    setVerseNumberQuote(bookName + chapterNumber + ":" + verseNumber);
  }, [verseOutput]);

  function generateVerse() {
    fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${bookName}/chapters/${chapterNumber}/verses/${verseNumber}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setVerseOutput(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const [verseClassName, setVerseClassName] = useContext(Context);
  const [backgroundHex, setBackgroundHex] = useContext(HexColor);
  const [verseFont, setVerseFont] = useContext(FontStyle);
  const [isItalic, setItalic] = useContext(ItalicFont);
  const [fontColor, setFontColor] = useContext(FontColor);

  const textColor = { color: fontColor };

  useEffect(() => {
    let outputBackground = document.querySelector("#verse-img");
    outputBackground.style.background = backgroundHex;
  }, [backgroundHex]);

  const handleCaptureClick = async () => {
    console.log("clicked");
    const verseImg = document.getElementById("verse-img");
    if (!verseImg) return;

    const canvas = await html2canvas(verseImg);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };

  function deleteVersePlaceholder() {
    setVersePlaceHolder("");
  }
  function deleteQoutePlaceholder() {
    setQuotePlacedHolder("");
  }

  return (
    <div className="container">
      <nav>
        <h2>Biboo</h2>
      </nav>
      <div className="biboo-input">
        <input
          type="text"
          name=""
          id="book"
          className="input-bar"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          placeholder="book name e.g genesis, john, ..."
        />
        <input
          type="number"
          name=""
          id="chapter"
          className="input-bar"
          value={chapterNumber}
          onChange={(c) => setChapterNumber(c.target.value)}
          placeholder="chapter number e.g 1, 2, ..."
        />
        <input
          type="number"
          name=""
          id="verse"
          className="input-bar"
          value={verseNumber}
          onChange={(v) => setVerseNumber(v.target.value)}
          placeholder="verse number e.g 1, 2, ..."
        />
        <button
          className="btn"
          onClick={() => {
            deleteVersePlaceholder();
            deleteQoutePlaceholder();
            generateVerse();
          }}
        >
          Generate Verse
        </button>
      </div>
      <div className="d-line"></div>
      <div className="biboo-output">
        <div id="verse-img" className={verseClassName}>
          <p
            id={verseFont}
            className={isItalic ? "font-normal" : "font-italic"}
            style={textColor}
          >
            {versePlaceHolder} {verseOutput.text}
          </p>
          <h3
            id={verseFont}
            className={isItalic ? "font-normal" : "font-italic"}
            style={textColor}
          >
            {quotePlacedHolder}
            {verseNumberQuote}
          </h3>
        </div>
        <button className="d-btn" onClick={handleCaptureClick}>
          Download Image
        </button>
      </div>
      <Colors />
    </div>
  );
};

export default Biboo;
