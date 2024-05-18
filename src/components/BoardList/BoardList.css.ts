import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../App.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  rowGap: 15,
  minHeight: "max-content",
  padding: globalStyles.spacing.big2,
  backgroundColor: globalStyles.color.mainDarker,
});

export const title = style({
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T2,
  marginRight: globalStyles.spacing.big2,
});

export const addButton = style({
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T2,
  cursor: "pointer",
  marginLeft: globalStyles.spacing.big1,
  ":hover": {
    opacity: 0.8,
  },
});

export const boardItem = style({
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T3,
  backgroundColor: globalStyles.color.mainFaded,
  padding: globalStyles.spacing.medium,
  borderRadius: 10,
  cursor: "pointer",
  marginRight: globalStyles.spacing.big1,
  ":hover": {
    opacity: 0.8,
    transform: "scale(1.03)",
  },
});

export const booardItemActive = style({
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T3,
  backgroundColor: globalStyles.color.selectedTab,
  padding: globalStyles.spacing.medium,
  borderRadius: 10,
  cursor: "pointer",
  marginRight: globalStyles.spacing.big1,
});

export const addSection = style({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

export const smallTitle = style({
  color: globalStyles.color.brightText,
  fontSize: globalStyles.fontSizing.T3,
});
