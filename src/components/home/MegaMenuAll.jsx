import React, { useState, Fragment } from "react";



function MegaMenuAll() {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active accordion item

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  return (
    <Fragment>
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <button
                className={`accordion ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <img
                  className="accordionMenuIconAll"
                  src="https://image.flaticon.com/icons/png/128/739/739249.png"
                  alt="icon"
                />
                &nbsp; Men's Clothing
              </button>
              <div
                className="panelAll "
                style={{
                  maxHeight: activeIndex === index ? "1000px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.2s ease-out",
                }}
              >
                <ul>
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's T-shirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's T-shirt 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default MegaMenuAll;
