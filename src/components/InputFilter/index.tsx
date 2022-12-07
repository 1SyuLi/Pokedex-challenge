import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { TextInputProps } from "react-native";

import {
  Container,
  Input,
  InputIcon,
} from "./styles";

type Props = TextInputProps;

export function InputFilter({ ...rest }: Props) {
  return (
    <Container>
      <InputIcon name="search" />
      <Input {...rest} placeholder='What Pokémon are you looking for?' />
    </Container>
  );
}
