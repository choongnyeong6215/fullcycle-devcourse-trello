import { style } from "@vanilla-extract/css";
import { globalStyles } from "../../App.css";

export const listsContainer = style({
  height: "max-content",
  display: "flex",
  flexWrap: "wrap",
  rowGap: globalStyles.spacing.listSpacing,
  margin: globalStyles.spacing.listSpacing,
});
