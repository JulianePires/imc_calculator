import {
  NumberInput as ChakraNumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface NumberInputProps {
  min: number;
  max: number;
  precision: number;
  step: number;
  value: string;
  onChange: (temperature: string) => void;
  defaultValue: number;
}

export const NumberInput = ({
  min,
  max,
  precision,
  step,
  value,
  defaultValue,
  onChange,
}: NumberInputProps) => {
  return (
    <ChakraNumberInput
      defaultValue={defaultValue}
      min={min}
      max={max}
      precision={precision}
      step={step}
      value={value}
      onChange={onChange}
      color="orange.500"
      variant="flushed"
      allowMouseWheel
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};
