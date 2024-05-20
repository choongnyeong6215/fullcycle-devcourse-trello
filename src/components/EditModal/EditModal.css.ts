import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../App.css";

export const wrapper = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 100,
});

export const modalWindow = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "800px",
  height: "max-content",
  maxHeight: "500px",
  overflowY: "auto",
  backgroundColor: globalStyles.color.mainDarker,
  opacity: 0.95,
  borderRadius: 14,
  padding: 20,
  boxShadow: globalStyles.shadow.basic,
  color: globalStyles.color.brightText,
});

export const header = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "40px",
});

export const closeButton = style({
  fontSize: globalStyles.fontSizing.T2,
  cursor: "pointer",
  marginTop: "-20px",
  ":hover": {
    opacity: 0.8,
  },
});

export const title = style({
  fontSize: globalStyles.fontSizing.T2,
  color: globalStyles.color.brightText,
  marginRight: "auto",
  marginBottom: globalStyles.spacing.medium,
});

export const buttons = style({
  display: "flex",
  justifyContent: "space-around",
  marginTop: 50,
});

export const updateButton = style({
  border: "none",
  borderRadius: 5,
  fontSize: globalStyles.fontSizing.T4,
  padding: globalStyles.spacing.big2,
  marginRight: globalStyles.spacing.big1,
  backgroundColor: globalStyles.color.updateButton,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

export const deleteButton = style({
  border: "none",
  borderRadius: 5,
  fontSize: globalStyles.fontSizing.T4,
  padding: globalStyles.spacing.big2,
  marginRight: globalStyles.spacing.big1,
  backgroundColor: globalStyles.color.deleteButton,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

export const input = style({
  width: "100%",
  minHeight: "30px",
  border: "none",
  borderRadius: 5,
  marginBottom: globalStyles.spacing.big2,
  padding: globalStyles.spacing.medium,
  fontSize: globalStyles.fontSizing.T4,
  boxShadow: globalStyles.shadow.basic,
});
