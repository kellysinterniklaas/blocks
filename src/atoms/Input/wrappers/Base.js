import system from "system-components";

const BaseWrapper = system(
  {
    is: "input",
    bg: "grayScale.1",
    color: "text",
    p: 0,
    m: 0,
    border: 0,
    fontSize: 1,
    lineHeight: 1,
    justifyContent: "center",
    alignContent: "center",
    width: "100%"
  },
  props => ({
    fontFamily: props.theme.fonts.bold,
    boxSizing: "border-box"
  })
).extend`
  ::placeholder {
    color: ${({ theme }) => theme.colors.mediumGray};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default BaseWrapper;
