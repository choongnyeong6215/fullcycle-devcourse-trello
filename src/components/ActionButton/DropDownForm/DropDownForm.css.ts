import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../../App.css";

export const taskForm = style({
  display: "flex",
  flexDirection: "column",
  height: "max-content",
  borderRadius: 4,
  marginTop: globalStyles.spacing.small,
  fontSize: globalStyles.fontSizing.T3,
  padding: globalStyles.spacing.medium,
});

export const listForm = style({
  display: "flex",
  flexDirection: "column",
  marginRight: globalStyles.spacing.listSpacing,
  padding: globalStyles.spacing.big2,
  width: "max-content",
  height: "max-content",
  borderRadius: 20,
  backgroundColor: globalStyles.color.list,
});

export const input = style({
  padding: globalStyles.spacing.medium,
  fontSize: globalStyles.fontSizing.P1,
  minHeight: 60,
  marginBottom: globalStyles.spacing.medium,
  border: "none",
  boxShadow: globalStyles.shadow.basic,
  borderRadius: 4,
  resize: "none",
  overflow: "hidden",
  wordWrap: "break-word",
});

export const button = style({
  width: 150,
  color: globalStyles.color.brightText,
  padding: globalStyles.spacing.medium,
  fontSize: globalStyles.fontSizing.T3,
  backgroundColor: globalStyles.color.mainDarker,
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: globalStyles.color.mainFaded,
  },
});

export const buttons = style({
  display: "flex",
  alignItems: "center",
});

export const close = style({
  marginLeft: globalStyles.spacing.big2,
  fontSize: globalStyles.fontSizing.T1,
  opacity: 0.5,
  ":hover": {
    opacity: 0.7,
  },
});
