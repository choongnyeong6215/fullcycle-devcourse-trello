import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../App.css";

export const listWrapper = style({
  display: "flex",
  flexDirection: "column",
  marginRight: globalStyles.spacing.listSpacing,
  padding: globalStyles.spacing.big2,
  minWidth: globalStyles.minWidth.list,
  width: "max-content",
  height: "max-content",
  borderRadius: 10,
  backgroundColor: globalStyles.color.list,
});

export const name = style({
  fontSize: globalStyles.fontSizing.T3,
  marginBottom: globalStyles.spacing.big2,
});

export const header = style({
  display: "flex",
  alignItems: "center",
});

export const deleteButton = style({
  padding: globalStyles.spacing.small,
  borderRadius: 20,
  fontSize: globalStyles.fontSizing.T2,
  marginLeft: "auto",
  marginTop: "-15px",
  marginRight: "5px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: globalStyles.color.task,
    boxShadow: globalStyles.shadow.basic,
    opacity: 0.8,
  },
});
