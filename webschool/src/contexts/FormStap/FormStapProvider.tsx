import { FormStapAction, FormStapContext, FormStapState,  } from "./FormStapContext";
import { ReactNode, useReducer } from "react";

const formReducer = (state: FormStapState, action: FormStapAction): FormStapState => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'PREVIOUS_STEP':
      return { ...state, step: state.step - 1 };
    case 'SET_FIELD':
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};


export default function FormStapProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, { step: 1 });


  return (
    <FormStapContext.Provider value={{ state, dispatch }}>
      {children}
    </FormStapContext.Provider>
  )
}