import React from "react";

import pattern from "../../assets/all/Pattern.png";
import PokeballShape from "../../assets/all/PokeballShape.png";

import { TypeCard } from "../TypeCard";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Section,
  Id,
  Patern,
  Name,
  Types,
  ImageWrapper,
  Shape,
  Pokemon,
} from "./styles";

interface CardProps extends TouchableOpacityProps {
    pokemon: {
        id: string;
        name: string;
        types: string[];
        pokemonImage?: string;
    }
}

export function Card({ pokemon, ...rest }: CardProps) {

  const primaryType = pokemon.types[0];

  return (
    <Container primaryType={primaryType} {...rest}>
      <Section>
        <Id>{pokemon.id}</Id>
        <Patern source={pattern} />
        <Name>{pokemon.name}</Name>
        <Types>
          {pokemon.types.map(type => <TypeCard key={type} type={type} />)}
        </Types>
      </Section>
      <ImageWrapper>
        <Shape source={PokeballShape} />
        <Pokemon source={{ uri: pokemon.pokemonImage }} />
      </ImageWrapper>
    </Container>
  );
}
