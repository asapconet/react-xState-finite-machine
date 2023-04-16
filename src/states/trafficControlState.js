import { createMachine } from "xstate";

const timedActionsState = {
  initial: "go",
  states: {
    stop: {
      yes: {
        ACTION_TIMER: "stop",
      },
    },
    ready: {
      yes: {
        ACTION_TIMER: "ready",
      },
    },
    go: {
      yes: {
        ACTION_TIMER: "go",
      },
    },
  },
};

export const trafficLightMachine = createMachine({
  id: "trafficLights",
  initial: "red",
  states: {
    red: {
      on: {
        NEXT: {
          target: "yellow",
        },
      },
    },
    yellow: {
      on: {
        NEXT: {
          target: "green",
        },
      },
    },
    green: {
      on: {
        NEXT: {
          target: "red",
        },
      },
    },
  },
});
let currentAction = "red";
const nextAction = trafficLightMachine.transition(currentAction);
