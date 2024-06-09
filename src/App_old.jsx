import items from "./data.js";

// #4CABF7

function Header() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-12 mt-24 mb-12">
      <img
        className="rounded-full mb-6 w-9/12"
        src="src/images/headshot-square.jpg"
        alt=""
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

function ItemCard({ productName, imgSrc, affiliateLink }) {
  return (
    <li className="h-full grow p-12 bg-white rounded-xl flex flex-col justify-center items-center transition-transform duration-100 transform hover:scale-[1.015]">
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

function App() {
  return (
    <>
      <Header></Header>
      <List items={items} />
    </>
  );
}

export default App;
