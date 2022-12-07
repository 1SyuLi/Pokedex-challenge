import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  LoadIcon,
  LoadMoreText,
} from "./styles";

type Props = TouchableOpacityProps;

export function LoadMore({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <LoadIcon name="rotate-cw" />
      <LoadMoreText>Load More</LoadMoreText>
    </Container>
  );
}
