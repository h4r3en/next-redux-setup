import React from "react";

const MainContainer = (props) => {
  return (
    <div>
      <main>{props.children}</main>

      <style jsx>
        {`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default MainContainer;
