import system from "system-components";
import { theme as t } from "styled-system";

const disabledHover = { color: "disabled", borderColor: "disabled" };

const LinkWrapper = system(
  {
    is: "a",
    alignSelf: "flex-start",
    lineHeight: 1,
    borderBottom: 2,
    pb: 0,
    fontSize: 1,
    m: 0,
    focus: {
      outline: "none"
    }
  },
  props => ({
    color: props.disabled
      ? t("colors.disabled")(props)
      : t("colors.black")(props),
    borderColor: props.disabled
      ? t("colors.disabled")(props)
      : t("colors.black")(props),
    cursor: props.disabled ? "default" : "pointer",
    "&:hover": {
      color: props.disabled
        ? t("colors.disabled")(props)
        : t("colors.black")(props),
      borderColor: props.disabled
        ? t("colors.disabled")(props)
        : t("colors.primary")(props)
    }
  })
).extend`
  font-family: ${({ theme }) => theme.fonts.bold};
  box-sizing: border-box;
  text-decoration: inherit;
`;

export default LinkWrapper;
