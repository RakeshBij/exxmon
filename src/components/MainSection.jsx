import React from "react";

export const MainSection = () => {
  return (
    <div className="side">
      <div className="main-section">
        {/* Main section head */}
        <div className="main-section-head pointer">
          <div>TV Series</div>
          <div className="main-section-head-selected">Movies</div>
          <div>Animes</div>
        </div>
        {/* Hero image */}
        <section className="hero-section">
          <div className="hero-section-div">
            <div className="hero-section-div-1">
              <div className="hero-section-div-1-1">
                <div className="hero-img-cont">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzBW1e3RgGamw2itw-shD8AKIPi6gF52OzA&usqp=CAU"
                    alt=""
                    className="hero-img "
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIHrBsQY6G_u8YAOdjTucvEzz9eerOOu71w&usqp=CAU"
                    alt=""
                    className="hero-img hero-img-mar"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGgArqpf0zZVgsV7rCdJD6XVPzPjav1MU1w&usqp=CAU"
                    alt=""
                    className="hero-img hero-img-mar-1"
                  />
                </div>
                <div className="hero-txt">+6 friends are watching</div>
              </div>
              <div className="hero-section-div-1-2">
                <div className="hero-name">JUMANJI</div>
                <div className="hero-2">
                  <div className="hero-category">ACTION, ADVENTURE, COMEDY</div>
                  <div className="hero-rating">%94 Match</div>
                </div>
                <div className="hero-buttons">
                  <button className="watch pointer">Watch</button>
                  <button className="plus pointer">+</button>
                </div>
              </div>
            </div>
            <div className="hero-section-div-2  pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Best artists */}

        <div className="artist-head">
          <h5>Best Artists</h5>
          <div className="nav-btns">
            <div className="nav-btn  pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7d6f6f99"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>

            <div className="nav-btn  pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                fill="#7d6f6f99"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
          </div>
        </div>

        {/* artist list */}
        <div className="artist-cont">
          <div className="artist artist4">
            <div className=" artist-btn">
              <button className="plus pointer">+</button>
            </div>
            <div className="artist-info">
              <div className="artist-name">Charlize Theron</div>
              <div className="artist-movie">+12 Movies</div>
              <div className="artist-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                {/* 4.5 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e2d97e"
                  height="0.7em"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8V0zM429.9 512c1.1 .1 2.1 .1 3.2 0h-3.2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="artist artist3">
            <div className=" artist-btn">
              <button className="plus plus-red  pointer">+</button>
            </div>
            <div className="artist-info">
              <div className="artist-name">Laurence Fishburne</div>
              <div className="artist-movie">+22 Movies</div>
              <div className="artist-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="artist artist2">
            <div className=" artist-btn">
              <button className="plus pointer">+</button>
            </div>
            <div className="artist-info">
              <div className="artist-name">Martin Freeman</div>
              <div className="artist-movie">+10 Movies</div>
              <div className="artist-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                {/* 4.5 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e2d97e"
                  height="0.7em"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8V0zM429.9 512c1.1 .1 2.1 .1 3.2 0h-3.2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="artist artist1">
            <div className=" artist-btn">
              <button className="plus  pointer">+</button>
            </div>
            <div className="artist-info">
              <div className="artist-name">Keanu Reeves</div>
              <div className="artist-movie">+27 Movies</div>
              <div className="artist-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.7em"
                  viewBox="0 0 576 512"
                  fill="#e2d97e"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* continue watching */}

        <div className="artist-head">
          <h5>Continue Watching</h5>
          <div className="nav-btns">
            <div className="nav-btn  pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7d6f6f99"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>

            <div className="nav-btn  pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                fill="#7d6f6f99"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
          </div>
        </div>

        {/* continue watching list */}
        <div className="watch-c">
          <div className="watch-cont watch-img-1  pointer">
            <div className="watch-name watch-name-1">Matrix Revolution</div>
          </div>
          <div className="watch-cont watch-img-2  pointer">
            <div className="watch-name watch-name-2">Deadpool</div>
          </div>
          <div className="watch-cont watch-img-3  pointer">
            <div className="watch-name watch-name-3">Lord of the Rings</div>
          </div>
        </div>
      </div>
    </div>
  );
};
