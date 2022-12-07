import React, { useState } from "react";
import { useTheme } from "styled-components";
import { handleIconType } from "../../utils/fiterIcon";

import grass from "../../assets/all/types/grass.png";

import {
  Container,
  TypeImage,
  TypeName,
} from "./styles";

interface TypeCardProps {
    type: string;
}

export function TypeCard({ type }: TypeCardProps) {
  const FormattedType = type[0].toUpperCase() + type.slice(1);
  const icon = handleIconType(type);

  return (
    <Container types={type}>
      <TypeImage source={icon} />
      <TypeName>{FormattedType}</TypeName>
    </Container>
  );
}
