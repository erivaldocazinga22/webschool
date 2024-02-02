import { useFormStap } from "@/contexts/FormStap/FormStapContext";
import Button from "@/components/basics/Form/Button";
import Stap1 from "./Stap1";
import Stap2 from "./Stap2";
import { FormProvider, useForm } from "react-hook-form";
import { MultiStapTeacherData, MultiStapTeacherSchema } from "@/schemas/MultiStapTeacherSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function MultiStapFormTeacher() {
  const { state, dispatch } = useFormStap(); 
  const methods = useForm<MultiStapTeacherData>({
    mode:"all",
    criteriaMode: "all",
    resolver: zodResolver(MultiStapTeacherSchema)
  });

  const renderStep = () => {
    switch (state.step) {
      case 1: return <Stap1 />;
      case 2: return <Stap2 />;
      default: return null;
    }
  };

  const handleNextStep = () => dispatch({ type: 'NEXT_STEP' });

  const handlePreviousStep = () => dispatch({ type: 'PREVIOUS_STEP' });
 
  const handleCreateTeacher = (data: MultiStapTeacherData) => {
    console.log(data);
  }
 

  return (
    <div>
       <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleCreateTeacher)}>
              {renderStep()}
              <div className="flex items-center justify-between mt-6">
                  <Button onClick={handlePreviousStep} disabled={state.step === 1}>
                    Anterior
                  </Button>
                  {state.step === 2 ? (
                    <Button type="submit">
                      Cadastrar
                    </Button>
                  ) : (
                    <Button onClick={handleNextStep}>
                      Próximo
                    </Button>
                  )}
              </div>
          </form>
       </FormProvider>
    </div>
  );
}
