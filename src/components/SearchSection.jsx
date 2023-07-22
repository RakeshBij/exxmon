import React from "react";

export const SearchSection = () => {
  return (
    <div className="side search-parent">
      <div className="serach-sec">
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="#bbb9c3"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <span>Search</span>
        </div>
        <h5 className="popu">Popular Movies</h5>
        {/* john wick */}
        <div className="pop-cont  pointer">
          <div className="pop-cont-img-cont"></div>
          <div className="pop-data">
            <div>
              <div className="pop-heading">John Wick</div>
              <div className="pop-cat">Action, Horror</div>
            </div>
            <div className="im-cont">
              <span className="imdb">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </span>
              <span className="imdb-rate">7.4</span>
            </div>
          </div>
        </div>
        {/* mad max */}
        <div className="pop-cont  pointer">
          <div className="pop-cont-img-cont-1"></div>
          <div className="pop-data">
            <div>
              <div className="pop-heading">Mad Max</div>
              <div className="pop-cat">Action, Adventure</div>
            </div>
            <div className="im-cont">
              <span className="imdb">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </span>
              <span className="imdb-rate">8.1</span>
            </div>
          </div>
        </div>
        {/* IP Man */}
        <div className="pop-cont  pointer">
          <div className="pop-cont-img-cont-2"></div>
          <div className="pop-data">
            <div>
              <div className="pop-heading">IP Man 2</div>
              <div className="pop-cat">Action, Biography</div>
            </div>
            <div className="im-cont">
              <span className="imdb">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </span>
              <span className="imdb-rate">7.2</span>
            </div>
          </div>
        </div>

        <button className="see-more pointer">See More</button>

        {/* favorite*/}
        <h5 className="popu fav">Favourites</h5>
        {/* hobbit */}
        <div className="pop-cont pointer">
          <div className="pop-cont-img-cont-3"></div>
          <div className="pop-data">
            <div>
              <div className="pop-heading">Hobbit 1</div>
              <div className="pop-cat">Adventure, Fantasy</div>
            </div>
            <div className="im-cont">
              <span className="imdb">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </span>
              <span className="imdb-rate">7.8</span>
            </div>
          </div>
        </div>
        {/* i am legend */}
        <div className="pop-cont pointer">
          <div className="pop-cont-img-cont-4"></div>
          <div className="pop-data">
            <div>
              <div className="pop-heading">I Am Legend</div>
              <div className="pop-cat">Action, Adventure</div>
            </div>
            <div className="im-cont">
              <span className="imdb">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </span>
              <span className="imdb-rate">7.2</span>
            </div>
          </div>
        </div>
        {/* Avatar */}
        <div className="pop-cont pointer">
          <div className="pop-cont-img-cont-5"></div>
          <div className="pop-data">
            <div>
              <div className="pop-heading">Avatar</div>
              <div className="pop-cat">Action, Fantasy</div>
            </div>
            <div className="im-cont">
              <span className="imdb">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </span>
              <span className="imdb-rate">7.8</span>
            </div>
          </div>
        </div>

        <button className="see-more pointer">See More</button>
      </div>
    </div>
  );
};
