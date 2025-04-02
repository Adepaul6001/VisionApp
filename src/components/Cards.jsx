import React, { useRef } from "react";
import portugal from "../assets/images/flag-of-portugal.png";
import france from "../assets/images/france-flag.png";
import greece from "../assets/images/greece-flag.png";
import germany from "../assets/images/germany-flag.png";
import Button from "./Button";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title:
        "“The best money travel buddy! Vision makes finances easier to deal with instantly.”",
      content: "James on Trustpilot",
      images: portugal,
      className: "bg-blue",
    },
    {
      id: 2,
      title:
        "“The best money travel buddy! Vision makes finances easier to deal with instantly.”",
      content: "James on Trustpilot",
      images: france,
      className: "bg-cream",
    },
    {
      id: 3,
      title:
        "“The best money travel buddy! Vision makes finances easier to deal with instantly.”",
      content: "James on Trustpilot",
      images: greece,
      className: "bg-blue",
    },
    {
      id: 4,
      title:
        "“The best money travel buddy! Vision makes finances easier to deal with instantly.”",
      content: "James on Trustpilot",
      images: germany,
      className: "bg-cream",
    },
    {
      id: 5,
      title:
        "“The best money travel buddy! Vision makes finances easier to deal with instantly.”",
      content: "James on Trustpilot",
      images: portugal,
      className: "bg-blue",
    },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };
  return (
    <div className="Carousel-sec">
      <div>
        <h5>
          FOR PEOPLE <br />
          GOING <br />
          PLACES
        </h5>
        <div className="arrow-btn">
          <span onClick={scrollLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </span>
          <span onClick={scrollRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="home-card" ref={carouselRef}>
        {cards.map((cards) => (
          <div key={cards.id} className={`card ${cards.className}`}>
            <img src={cards.images} alt="" />
            <p>{cards.title}</p>
            <Button variant="dark">{cards.content}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
