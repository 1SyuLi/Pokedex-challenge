import React from "react";
import { handleIconType } from "../../utils/fiterIcon";

import {
  Container,
  TypeIcon,
} from "./styles";

interface TypeProps {
    type: string;
}

export function Type({ type }: TypeProps) {

  const typeIcon = handleIconType(type);

  return (
    <Container type={type}>
      <TypeIcon source={typeIcon} />
    </Container>
  );
}
