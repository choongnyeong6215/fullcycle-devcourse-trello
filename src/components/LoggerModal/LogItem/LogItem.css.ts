import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../../App.css";

export const logItemWrap = style({
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  padding: globalStyles.spacing.medium,
  marginBottom: globalStyles.spacing.big2,
  width: "100%",
  borderBottom: "solid 1px rgb(191, 197, 217, 0.3)",
  ":hover": {
    backgroundColor: globalStyles.color.mainFadedBright,
    borderRadius: 10,
  },
});

export const message = style({
  display: "flex",
  alignItems: "center",
  color: globalStyles.color.brightText,
  fontWeight: "bold",
  fontSize: globalStyles.fontSizing.T4,
  marginBottom: globalStyles.spacing.small,
});

export const author = style({
  display: "flex",
  alignItems: "center",
  columnGap: 10,
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T3,
  fontWeight: "bold",
  marginBottom: globalStyles.spacing.medium,
});

export const date = style({
  fontSize: globalStyles.fontSizing.T4,
  fontWeight: "bold",
  marginBottom: globalStyles.spacing.medium,
});
