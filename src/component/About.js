import { useState, useEffect, useRef } from "react";

export const About = () => {
  const [name, setName] = useState();
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h4>This is about us page.</h4>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      {`My name is ${name}. It was ${prevName.current}`}
      <a href="/">Go back</a>
    </div>
  );
};
