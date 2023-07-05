const React = require("react");
const { IconContext } = require("react-icons");
const { Provider } = require("./src/slices");

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <IconContext.Provider value={{ size: "2em" }}>
        {element}
      </IconContext.Provider>
    </Provider>
  );
};
