import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { useResultContext } from "./contexts/ResultContextProvider";

import "./style/results.css";

const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}/q=${searchTerm}`);
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="search-results search-box">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <a className="p-img">{title}</a>
              </a>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="search-box">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a href={href} target="_blank" key={index} rel="noreferrer">
                <img src={image?.src} alt={title} loading="lazy" />
                <nav className="p-img">{title}</nav>
              </a>
            )
          )}
        </div>
      );
    case "/news":
      return (
        <div className="search-box">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id}>
              <a href={links?.[0].href} target="_blank" rel="noreferrer ">
                <p>{title}</p>
              </a>
              <div>
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {" "}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/video":
      return (
        <div className="search-video search-box ">
          {results?.results?.map((video, index) => (
            <div key={index} className="video">
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );
    default:
      return "Error...";
  }
};

export default Results;
