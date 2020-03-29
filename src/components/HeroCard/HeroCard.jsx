import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import "./HeroCard.css";

const HeroCard = ({ marvelData, loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  if (loading) {
    return (
      <>
        <ClipLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={loading}
        />
      </>
    );
  }
  if (!loading) {
    return (
      <>
        {marvelData.length === 0 ? (
          <div className="container_error">
            <ErrorNotFound />
          </div>
        ) : (
          <ul className="list_characters">
            {marvelData.map(hero => (
              <li key={hero.id} className="card_character">
                <Link to={`/character/${hero.id}`}>
                  <img
                    className="img_background"
                    src={hero.thumbnail.path.concat(
                      "." + hero.thumbnail.extension
                    )}
                    alt=""
                  />
                </Link>
                <div className="text_character">
                  <p>{hero.name}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
};

export default HeroCard;
