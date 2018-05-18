import system from "system-components";

const TagWrapper = system({
  display: "block",
  color: "black",
  bg: "grayScale.1",
  py: 0,
  px: 4,
  hover: {
    backgroundColor: "primary",
    color: "white"
  }
}).extend`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-decoration: inherit;
`;

export default TagWrapper;
