import { createMachine } from "xstate";

export const trafficMachine = createMachine({
  id: "trafficLights",
  initial: "stop",
  states: {
    stop: {
      on: {
        NEXT: {
          target: "ready",
        },
      },
    },
    ready: {
      on: {
        NEXT: {
          target: "go",
        },
      },
    },
    go: {
      on: {
        NEXT: {
          target: "stop",
        },
      },
    },
  },
});
