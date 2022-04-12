import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "./contexts/ResultContextProvider";
import Links from "./Links";

import "./style/search.css";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [value] = useDebounce(text, 500);

  useEffect(() => {
    if (value) setSearchTerm(value);
  }, [value]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={text}
        className="search-input"
        placeholder="What's on your mind...."
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button type="button" className="btn" onClick={() => setText("")}>
          X
        </button>
      )}

      <Links />
    </div>
  );
};

export default Search;
