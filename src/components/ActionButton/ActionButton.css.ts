import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../App.css";

export const taskButton = style({
  display: "flex",
  alignItems: "center",
  height: "max-content",
  borderRadius: 4,
  marginTop: globalStyles.spacing.small,
  fontSize: globalStyles.fontSizing.T3,
  padding: globalStyles.spacing.medium,
  cursor: "pointer",
  ":hover": {
    backgroundColor: globalStyles.color.secondaryDarkText,
  },
});

export const listButton = style({
  display: "flex",
  alignItems: "center",
  height: "max-content",
  borderRadius: 4,
  minWidth: globalStyles.minWidth.list,
  marginTop: globalStyles.spacing.small,
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T3,
  backgroundColor: globalStyles.color.mainFaded,
  paddingTop: globalStyles.spacing.small,
  paddingBottom: globalStyles.spacing.small,
  paddingRight: globalStyles.spacing.big2,
  paddingLeft: globalStyles.spacing.big2,
  cursor: "pointer",
  ":hover": {
    backgroundColor: globalStyles.color.mainFadedBright,
  },
});
