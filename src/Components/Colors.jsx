import React, { useContext, useEffect, useState } from "react";
import { Context, FontColor, FontStyle, HexColor, ItalicFont } from "./Context";

const Colors = () => {
  const [verseClassName, setVerseClassName] = useContext(Context);
  const [backgroundHex, setBackgroundHex] = useContext(HexColor);
  const [verseFont, setVerseFont] = useContext(FontStyle);
  const [isItalic, setItalic] = useContext(ItalicFont);
  const [fontColor, setFontColor] = useContext(FontColor);

  const handleToggle = () => {
    setItalic(!isItalic);
  };

  const handleSelectChange = (event) => {
    setVerseFont(event.target.value);
  };

  return (
    <div className="container2">
      <div className="edit-intro">
        <h3>Editing options here (scroll down)</h3>
      </div>
      <div className="color-change">
        <p>Select Background</p>
        <div className="c-box">
          <div
            className="c-box1"
            onClick={() => setVerseClassName("verse-img1")}
          ></div>
          <div
            className="c-box2"
            onClick={() => setVerseClassName("verse-img2")}
          ></div>
          <div
            className="c-box3"
            onClick={() => setVerseClassName("verse-img3")}
          ></div>
          <div
            className="c-box4"
            onClick={() => setVerseClassName("verse-img4")}
          ></div>
          <div
            className="c-box5"
            onClick={() => setVerseClassName("verse-img5")}
          ></div>
          <div
            className="c-box6"
            onClick={() => setVerseClassName("verse-img6")}
          ></div>
          <div
            className="c-box7"
            onClick={() => setVerseClassName("verse-img7")}
          ></div>
          <div
            className="c-box8"
            onClick={() => setVerseClassName("verse-img8")}
          ></div>
          <div
            className="c-box9"
            onClick={() => setVerseClassName("verse-img9")}
          ></div>
        </div>

        <div className="color-input">
          <label htmlFor="hex">Wanna use a solid color background?</label>
          <input
            type="text"
            id="hex"
            value={backgroundHex}
            onChange={(c) => setBackgroundHex(c.target.value)}
            placeholder="Input color name here"
          />
        </div>
      </div>
      <div className="text-change">
        <div className="font-change">
          <label htmlFor="fonts">Choose your font</label>
          <select name="fonts" id="fonts" onChange={handleSelectChange}>
            <option value="#verse-font1">Monospace(Default)</option>
            <option value="verse-font2">Ariel</option>
            <option value="verse-font3">Trebuchet MS</option>
            <option value="verse-font4">Verdana</option>
            <option value="verse-font5">Geneva</option>
            <option value="verse-font6">Times</option>
            <option value="verse-font7">Lucida Sans</option>
            <option value="verse-font8">Helvetica</option>
            <option value="verse-font9">Georgia</option>
            <option value="verse-font10">Tahoma</option>
          </select>
          <button onClick={handleToggle}>
            {isItalic ? "Use Italics" : "Use Normal"}
          </button>
        </div>
        <div className="channg-text-color">
          <label htmlFor="text-color">Change text color</label>
          <input
            type="text"
            id="text-color"
            value={fontColor}
            onChange={(b) => setFontColor(b.target.value)}
            placeholder="Input color name"
          />
        </div>
      </div>
    </div>
  );
};

export default Colors;
