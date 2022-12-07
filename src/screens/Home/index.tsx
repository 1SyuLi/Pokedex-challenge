import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, StatusBar } from "react-native";
import { useTheme } from "styled-components";

import Filter from "../../assets/all/filter.svg";
import Filter2 from "../../assets/all/filter2.svg";
import Filter3 from "../../assets/all/filter3.svg";
import { Card } from "../../components/Card";
import { InputFilter } from "../../components/InputFilter";
import { handlePokemonIndex } from "../../utils/pokemonIndex";

import {
  Container,
  Filters,
  FilterWrapper,
  Header,
  SubTitle,
  Title,
  ContentScroll,
} from "./styles";

export interface PokemonDataProps {
    uuid: string;
    id: string;
    name: string;
    url: string;
    types: string[];
    pokemonImage?: string;
}

export function Home() {

  const theme = useTheme();
  const navigation = useNavigation<any>();

  const [pokemonData, setPokemonData] = useState<PokemonDataProps[]>([]); 
  const [loadPokemons, setLoadPokemons] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleOpenCard(pokemon: PokemonDataProps) {
    navigation.navigate("Pokemon", { pokemon });
  }

  async function getPokemons() {
    setLoading(true);
    const response = await api.get(`pokemon?limit=50&offset=${0}`);
    const pokemonArray = response.data.results;

    pokemonArray.map(async pokemon => {
      const pokemonName = pokemon.name;
      const pokemonUrl = pokemon.url;
      const PokemonSpecs = await api.get(pokemonUrl);

      const pokemonTypes = PokemonSpecs.data.types.map(type => type.type.name);
      const pokemonIndex = handlePokemonIndex(PokemonSpecs.data.id);
      const image = PokemonSpecs.data.sprites.other["official-artwork"].front_default;

      const formattedData = {
        uuid: PokemonSpecs.data.id,
        id: pokemonIndex,
        name: pokemonName,
        url: pokemonUrl,
        types: pokemonTypes,
        pokemonImage: image,
      };
      setPokemonData(pokemonData => [...pokemonData, formattedData]);
    });
    setLoading(false);
  }

  useEffect(() => {
    if (loadPokemons) {
      getPokemons();
    }

    setLoadPokemons(false);
  }, []);



  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor={theme.colors.white} />
      <Filters>
        <FilterWrapper>
          <Filter height={30} />
        </FilterWrapper>

        <FilterWrapper>
          <Filter2 height={30} />
        </FilterWrapper>

        <FilterWrapper>
          <Filter3 height={30} />
        </FilterWrapper>
      </Filters>

      <Header>
        <Title>Pokédex</Title>
        <SubTitle>Explore the world of Pokemon</SubTitle>
        <InputFilter onChangeText={() => console.log("filter")} />
      </Header>


      <ContentScroll showsVerticalScrollIndicator={false}>
        {loading && <ActivityIndicator size='large' color={theme.colors.type.dark} />}

        {(!loading) && pokemonData.map(pokemon =>
          <Card
            key={pokemon.id}
            onPress={() => handleOpenCard(pokemon)}
            pokemon={pokemon}
          />
        )}
      </ContentScroll>
    </Container>
  );
}
