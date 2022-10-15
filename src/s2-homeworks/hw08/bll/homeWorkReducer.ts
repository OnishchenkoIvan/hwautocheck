import { UserType } from "../HW8";

export type SortUpDownActionType = { type: "sort"; payload: "up" | "down" };

export type CheckEighteenActionType = { type: "check"; payload: number };

type ActionType = SortUpDownActionType | CheckEighteenActionType;
// | { type: "sort"; payload: "up" | "down" }
// | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      const sortState = [...state].sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        else return 0;
      });
      return action.payload === "up" ? sortState : sortState.reverse();
    }

    case "check": {
      return state.filter((a) => a.age >= action.payload);
    }
    default:
      return state;
  }
};
