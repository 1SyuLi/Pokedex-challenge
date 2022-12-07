import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { ActivityIndicator, StatusBar, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import { Type } from "../../components/Type";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FilterApiIdByType } from "../../utils/filterTypeStats";

import { PokemonDataProps } from "../Home";
import { TypeCard } from "../../components/TypeCard";

import shape from "../../assets/all/shape.png";
import pokeball from "../../assets/all/Pokeball.png";

import {
  Container,
  Header,
  HeaderContent,
  BackIcon,
  PokemonName,
  ShapeImage,
  NavBar,
  Item,
  ItemText,
  ActiveItemText,
  PokeballImage,
  Content,
  PokedexData,
  PokedexTitle,
  Specs,
  SpecTitle,
  SpecValue,
  SpecSkills,
  WeaknessesWrapper,
  PokeInfo,
  PokeInfoImage,
  PokeInfoWrapper,
  Id,
  Types,
} from "./styles";


interface PokemonSpecs extends PokemonDataProps {
    species: string;
    height: string;
    weight: string;
    abilities?: string[];
    weaknesses?: string[];
    baseExp: string;
    catchRate: string;
    friendShipRate: string;
    growthRate: string;
    evolutionUrl?: string;
}

export function Pokemon() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const [pokemonStats, setPokemonStats] = useState<PokemonSpecs>();
  const [pokemonWeaknesses, setPokemonWeaknesses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const route: any = useRoute();
  const pokemon = route.params.pokemon;
  const primaryType = pokemon.types[0];

  function handleGoBack() {
    navigation.goBack();
  }

  function handleStats() {
    navigation.navigate("Stats", { pokemon: pokemonStats });
  }

  function handleEvolution() {
    navigation.navigate("Evolution", { pokemon: pokemonStats });
  }

  useEffect(() => {
    async function loadPokemonData() {
      try {
        const id = FilterApiIdByType(pokemon.types[0]);

        const statsResponse = await api.get(pokemon.url);
        const waknessesResponse = await api.get(`https://pokeapi.co/api/v2/type/${id}`);
        const specRates = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.uuid}/`);



        const halfDamages = waknessesResponse.data.damage_relations.double_damage_from;
        const weaknesses = halfDamages.map(type => type.name);
        setPokemonWeaknesses(weaknesses);

        const catchRate = specRates.data.capture_rate;
        const friendShipRate = specRates.data.base_happiness;
        const growthRate = specRates.data.growth_rate.name;
        const evolutionUrl = specRates.data.evolution_chain.url;


        const data = {
          species: statsResponse.data.species.name,
          height: statsResponse.data.height,
          weight: statsResponse.data.weight,
          abilities: statsResponse.data.abilities.map(ability => ability.ability.name),
          weaknesses: pokemonWeaknesses,
          baseExp: statsResponse.data.base_experience,
          catchRate,
          friendShipRate,
          growthRate,
          evolutionUrl,
          ...pokemon,
        };

        setPokemonStats(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemonData();
  }, [isLoading]);

  return (
    <Container type={primaryType}>
      <StatusBar barStyle='light-content' backgroundColor={theme.colors.backgroundType[primaryType]} />
      <Header>
        <HeaderContent>
          <TouchableOpacity onPress={handleGoBack}>
            <BackIcon name="arrow-left" />
          </TouchableOpacity>

          <PokeInfo>
            <PokeInfoImage source={{ uri: pokemon.pokemonImage }} />
            <PokeInfoWrapper>
              <Id>{pokemon.id}</Id>
              <PokemonName>{pokemon.name}</PokemonName>
              <Types>
                {pokemon.types.map(type => <TypeCard key={type} type={type} />)}
              </Types>
            </PokeInfoWrapper>
            <ShapeImage source={shape} />
          </PokeInfo>

        </HeaderContent>

        <NavBar>
          <Item>
            <PokeballImage source={pokeball} />
            <TouchableOpacity disabled={true}>
              <ActiveItemText>About</ActiveItemText>
            </TouchableOpacity>
          </Item>

          <Item>
            <TouchableOpacity onPress={handleStats}>
              <ItemText>Stats</ItemText>
            </TouchableOpacity>
          </Item>

          <Item>
            <TouchableOpacity onPress={handleEvolution}>
              <ItemText>Evolution</ItemText>
            </TouchableOpacity>
          </Item>
        </NavBar>
      </Header>
      <Content showsVerticalScrollIndicator={false}>
        {isLoading ? <ActivityIndicator size={"large"} color={theme.colors.type[primaryType]} />
          :

          <PokedexData>
            <PokedexTitle type={primaryType}>Pokedex Data</PokedexTitle>
            <Specs>
              <SpecTitle>Species</SpecTitle>
              <SpecValue>{pokemonStats.species}</SpecValue>
            </Specs>

            <Specs>
              <SpecTitle>Height</SpecTitle>
              <SpecValue>{pokemonStats.height}m</SpecValue>
            </Specs>

            <Specs>
              <SpecTitle>Weight</SpecTitle>
              <SpecValue>{pokemonStats.weight}</SpecValue>
            </Specs>

            <Specs>
              <SpecTitle>Abilities</SpecTitle>
              <SpecSkills>
                {pokemonStats.abilities.map(ability =>
                  <SpecValue key={ability}>{ability}</SpecValue>
                )}
              </SpecSkills>
            </Specs>

            <Specs>
              <SpecTitle>Weaknesses</SpecTitle>
              <WeaknessesWrapper>
                {pokemonStats?.weaknesses?.map(item => (
                  <Type key={item} type={item} />
                ))}
              </WeaknessesWrapper>
            </Specs>

            <PokedexTitle type={primaryType}>Training</PokedexTitle>
            <Specs>
              <SpecTitle>Catch Rate</SpecTitle>
              <SpecValue>{pokemonStats.catchRate}</SpecValue>
            </Specs>

            <Specs>
              <SpecTitle>Base Friendship</SpecTitle>
              <SpecValue>{pokemonStats.friendShipRate}</SpecValue>
            </Specs>

            <Specs>
              <SpecTitle>Base Exp</SpecTitle>
              <SpecValue>{pokemonStats.baseExp}</SpecValue>
            </Specs>

            <Specs>
              <SpecTitle>Growth Rate</SpecTitle>
              <SpecValue>{pokemonStats.growthRate}</SpecValue>
            </Specs>
          </PokedexData>

        }

      </Content>
    </Container>
  );
}
