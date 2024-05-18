import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../../App.css";

export const sideForm = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

export const input = style({
  padding: globalStyles.spacing.small,
  fontSize: globalStyles.fontSizing.T4,
  minHeight: 30,
});

export const icon = style({
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T2,
  marginLeft: globalStyles.spacing.medium,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});
