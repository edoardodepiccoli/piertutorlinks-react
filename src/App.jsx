import React, { useEffect, useRef, useState } from "react";
import items from "./data.js";
import image from "./images/headshot-square.jpg";

// CSS Styles (adjust as needed)
const styles = `
  .hidden-item {
    opacity: 0;
    transform: translateY(20px);
  }
  .visible-item {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
  .soft-subtle-shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
   
`;

function Header() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-12 mt-24 mb-12">
      <img
        className="rounded-full mb-6"
        style={{ width: "75%", maxWidth: "300px" }} // Adjust these values as needed
        src={image} // Ensure this path is correct
        alt=""
        width="300px"
        height="300px"
      />
      <h1 className="font-bold text-4xl text-center mb-2">
        Consigliati da Piertutor!
      </h1>
      <p className="text-center text-xl">
        Ciao, questi sono i prodotti che uso e che consiglio👇🏻
      </p>
    </div>
  );
}

function ItemCard({ productName, imgSrc, affiliateLink }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optionally disconnect after the element becomes visible
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <li
      ref={itemRef}
      className={`h-full grow p-12 bg-white rounded-xl flex flex-col justify-center items-center transform hover:scale-[1.015]  ${
        isVisible ? "visible-item" : "hidden-item"
      } subtle-shadow`}
    >
      <a
        href={affiliateLink}
        className="flex flex-col justify-center items-center"
      >
        <h3 className="text-center pb-6 text-[#4CABF7] font-bold text-xl">
          {productName}
        </h3>
        <img src={imgSrc} alt="" className="h-[100px]" />
      </a>
    </li>
  );
}

function List({ items }) {
  const itemCardsArray = items.map((item, index) => {
    return (
      <ItemCard
        key={index}
        productName={item.productName}
        imgSrc={item.imgSrc}
        affiliateLink={item.affiliateLink}
      />
    );
  });

  return (
    <ul className="flex flex-wrap gap-6 w-full justify-center items-center ml-auto bg-slate-200 p-6">
      {itemCardsArray}
    </ul>
  );
}

function App() {
  return (
    <>
      <style>{styles}</style>
      <Header />
      <List items={items} />
    </>
  );
}

export default App;
