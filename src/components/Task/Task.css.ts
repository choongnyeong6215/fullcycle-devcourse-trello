import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../App.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: globalStyles.spacing.medium,
  backgroundColor: globalStyles.color.task,
  borderRadius: 10,
  margin: globalStyles.spacing.big2,
  boxShadow: globalStyles.shadow.basic,
  cursor: "pointer",
  ":hover": {
    backgroundColor: globalStyles.color.taskHover,
    transform: "scale(1.03)",
  },
});

export const title = style({
  fontSize: globalStyles.fontSizing.T4,
  fontWeight: "bold",
  marginBottom: globalStyles.spacing.small,
});

export const description = style({
  fontSize: globalStyles.fontSizing.P1,
});
