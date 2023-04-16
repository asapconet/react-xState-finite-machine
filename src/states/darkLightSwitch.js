import { Machine } from "xstate";

export const switchThemes = Machine({
  id: "themes",
  initial: "light",
  states: {
    light: {
      on: { SWITCH: "dark" },
    },
    dark: {
      on: { SWITCH: "light" },
    },
  },
});
