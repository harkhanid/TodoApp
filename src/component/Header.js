import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onClick, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="green"
        text={!showAdd ? "Add" : "Hide"}
        onClick={onClick}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Demo",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
