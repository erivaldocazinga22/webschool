import { useFormStap } from "@/contexts/FormStap/FormStapContext";
import Stap1 from "./Stap1";
import Stap2 from "./Stap2";
import Button from "@/components/basics/Form/Button";

export default function MultiStapFormStudant() {
  const { state, dispatch } = useFormStap(); 

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <Stap1 />;
      case 2:
        return <Stap2 />;
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePreviousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  return (
    <div>
      <form>
        {renderStep()}
      </form>
      <div className="flex items-center justify-between mt-6">
        <Button onClick={handlePreviousStep} disabled={state.step === 1}>
          Previous
        </Button>
        <Button onClick={handleNextStep} disabled={state.step === 2}>
          Next
        </Button>
      </div>
    </div>
  );
}
