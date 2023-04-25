import { useEffect, useState } from "react";
export default function Meme() {
  // set state for figgure(figure structure)
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/m78d.jpg",
  });

  // set state for getting new image
  const [allMemems, setAllMemems] = useState([]);
  // for taking the memes array of data object form from API abd set the state
  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemems(data.data.memes);
    };
    getMemes();
  }, []);
  // choose an image randomly and pass it to setMeme(figure structur state)
  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemems.length);
    const url = allMemems[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };
  //
  const inputHandler = (event) => {
    const { name, value, maxLength } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };
  // set for chracter more than 22
  const [errorMsg, setErrorMsg] = useState({
    state: false,
    msg: "22 character is writable",
  });

  return (
    <div className="form--parent">
      <div className="form">
        <input
          type="text"
          name="topText"
          className="form--input"
          id="top-text"
          placeholder="Top Text"
          value={meme.topText}
          onChange={inputHandler}
          maxLength={22}
          title="Has the capacity of 22 character"
        />
        <input
          type="text"
          name="bottomText"
          className="form--input"
          id="bottom-text"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={inputHandler}
          maxLength={22}
          title="Has the capacity of 22 character"
        />
        <button type="button" className="form--btn" onClick={getMemeImage}>
          Get a new meme Image <span>🖼</span>
        </button>
      </div>
      <figure className="meme">
        <img src={meme.randomImage} alt="meme image" className="meme--image" />
        <figcaption className="meme--text top">{meme.topText}</figcaption>
        <figcaption className="meme--text bottom">{meme.bottomText}</figcaption>
      </figure>
    </div>
  );
}
