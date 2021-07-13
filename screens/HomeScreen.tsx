import {
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { NumberInput } from "../components/NumberInput";
import {
  handleCalculateIMC,
  handleChangeIMCClassification,
} from "../utils/functions";

export const HomeScreen = () => {
  /* FORMAT */
  const formatWeight = (value: string) => value + "KG";
  const formatHeight = (value: string) => value + "m";

  /* PARSE */
  const parseWeight = (value: string) => value.replace(/^\KG/, "");
  const parseHeight = (value: string) => value.replace(/^\m/, "");

  /* STATE */
  const [weight, setWeight] = useState<string>("3.4");
  const [height, setHeight] = useState<string>("0.50");
  const [imc, setImc] = useState<number>(0);
  const [categorie, setCategorie] = useState<string>("");

  /* CHANGE VALUES */
  const onChangeWeight = (value: string) => {
    setWeight(parseWeight(value));
  };
  const onChangeHeight = (value: string) => {
    setHeight(parseHeight(value));
  };

  const handleCalculateImc = () => {
    const imc = handleCalculateIMC(Number(weight), Number(height));
    setCategorie(handleChangeIMCClassification(imc));
    setImc(imc);
  };

  return (
    <Flex w="100%" h="85vh" alignItems="center" justifyContent="center" p="4">
      <Stack
        spacing={["8", "8", "10", "6"]}
        direction={["column", "column", "column", "row"]}
        wrap={["wrap", "wrap", "wrap", "nowrap"]}
        alignItems="center"
        justifyContent="center"
      >
        <VStack w="100%">
          <Text color="orange">Peso</Text>
          <NumberInput
            defaultValue={0}
            precision={1}
            step={0.1}
            min={3.4}
            max={300}
            onChange={(value) => onChangeWeight(value)}
            value={formatWeight(weight)}
          />
        </VStack>
        <>
          <Divider orientation="vertical" />
        </>
        <VStack w="100%">
          <Text color="orange">Altura</Text>
          <NumberInput
            defaultValue={0}
            precision={1}
            step={0.02}
            min={0.5}
            max={300}
            onChange={(value) => onChangeHeight(value)}
            value={formatHeight(height)}
          />
        </VStack>
        {":"}

        <Button w="lg" colorScheme="blue" onClick={handleCalculateImc}>
          Calcular
        </Button>
        <Stat>
          <StatLabel color="orange">IMC</StatLabel>
          <StatNumber>{imc.toFixed(2)}</StatNumber>
        </Stat>
        <VStack w="100%">
          <Text color="orange">Categoria</Text>
          <Heading>{categorie}</Heading>
        </VStack>
      </Stack>
    </Flex>
  );
};
