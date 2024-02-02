
import React, { createContext, useContext } from 'react';

export type FormStapState = { step: number }

export type FormStapAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'SET_FIELD'; payload: { field: string; value: any } };

type FormStapValueContext = {
  state: FormStapState,
  dispatch: React.Dispatch<FormStapAction>;
} | undefined


export const FormStapContext = createContext<FormStapValueContext>(undefined);


export const useFormStap = () => {
  const context = useContext(FormStapContext);
  if (!context) {
    throw new Error('useForm deve ser usado dentro de um FormProvider');
  }
  return context;
};
