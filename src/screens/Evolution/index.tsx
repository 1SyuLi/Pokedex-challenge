import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { ActivityIndicator, StatusBar, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import shape from "../../assets/all/shape.png";
import pokeball from "../../assets/all/Pokeball.png";

import { Type } from "../../components/Type";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FilterApiIdByType } from "../../utils/filterTypeStats";

import { TypesArray } from "../../utils/fiterIcon";
import { setDamages } from "../../utils/damages";

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
  Description,
  PokedexData,
  PokedexTitle,
  Specs,
  SpecTitle,
  StatsNumber,
  SpecType,
  Effectiveness,
  Effective,
  EffectiveNumber,
  EvolutionContainer,
  EvolutionContainerWrapper,
  EvolutionImage,
  EvolutionId,
  EvolutionName,
  EvolutionLevel,
} from "./styles";
import { handlePokemonIndex } from "../../utils/pokemonIndex";

interface EvolutionProps {
    specie: string;
    name: string;
    minLevel: number;
    image: string;
    pokemonIndex: string;
    specieImage: string;
    specieIndex: string;
}


export function Evolution() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const [isLoading, setIsLoading] = useState(true);
  const [evolutionFirstChain, setEvolutionFirstChain] = useState<EvolutionProps>();
  const [evolutionSecondChain, setEvolutionSecondChain] = useState<EvolutionProps>();

  const route: any = useRoute();
  const pokemon = route.params.pokemon;

  const primaryType = pokemon.types[0];

  function handleGoBack() {
    navigation.goBack();
  }

  function OpenAbout() {
    navigation.navigate("Pokemon", { pokemon });
  }

  function handleStats() {
    navigation.navigate("Stats", { pokemon });
  }

  useEffect(() => {
    async function loadPokemonData() {
      try {
        const id = FilterApiIdByType(pokemon.types[0]);
        const evolutionResponse = await api.get(pokemon.evolutionUrl);
        const evolution = evolutionResponse.data.chain.evolves_to;

        const FirstChainEvolution = {
          name: evolution[0].species.name,
          minLevel: evolution[0].evolution_details[0].min_level,
          specie: evolutionResponse.data.chain.species.name,
        };

        const specieEvolutionResponse = await api.get(`/pokemon/${FirstChainEvolution.specie}`);
        const specieImage = specieEvolutionResponse.data.sprites.other["official-artwork"].front_default;
        const specieIndex = handlePokemonIndex(specieEvolutionResponse.data.id);

        if (evolution[0].evolves_to.length > 0) {
          const SecondChainEvolution = {
            name: evolution[0].evolves_to[0].species.name,
            minLevel: evolution[0].evolves_to[0].evolution_details[0].min_level,
            specie: evolutionResponse.data.chain.species.name,
          };

          const SecondEvolutionResponse = await api.get(`/pokemon/${SecondChainEvolution.name}`);
          const SecondpokemonIndex = handlePokemonIndex(SecondEvolutionResponse.data.id);
          const Secondimage = SecondEvolutionResponse.data.sprites.other["official-artwork"].front_default;

          setEvolutionSecondChain(
            {
              pokemonIndex: SecondpokemonIndex,
              image: Secondimage,
              specieImage,
              specieIndex,
              ...SecondChainEvolution
            }
          );
        }

        const FirstEvolutionResponse = await api.get(`/pokemon/${FirstChainEvolution.name}`);
        const FirstpokemonIndex = handlePokemonIndex(FirstEvolutionResponse.data.id);
        const Firstimage = FirstEvolutionResponse.data.sprites.other["official-artwork"].front_default;






        setEvolutionFirstChain(
          {
            pokemonIndex: FirstpokemonIndex,
            image: Firstimage,
            specieImage,
            specieIndex,
            ...FirstChainEvolution
          }
        );


        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemonData();
  }, []);

  // console.log(evolutionFirstChain);
  // console.log(evolutionSecondChain);

  return (
    <Container type={primaryType}>
      <StatusBar barStyle='light-content' backgroundColor={theme.colors.backgroundType[primaryType]} />
      <Header>
        <HeaderContent>
          <TouchableOpacity onPress={handleGoBack}>
            <BackIcon name="arrow-left" />
          </TouchableOpacity>

          <PokemonName>{pokemon.name}</PokemonName>
          <ShapeImage source={shape} />
        </HeaderContent>

        <NavBar>
          <Item>
            <TouchableOpacity onPress={OpenAbout}>
              <ItemText>About</ItemText>
            </TouchableOpacity>
          </Item>

          <Item>
            <TouchableOpacity onPress={handleStats}>
              <ItemText>Stats</ItemText>
            </TouchableOpacity>
          </Item>

          <Item>
            <PokeballImage source={pokeball} />
            <TouchableOpacity disabled={true}>
              <ActiveItemText>Evolution</ActiveItemText>
            </TouchableOpacity>
          </Item>
        </NavBar>
      </Header>
      <Content showsVerticalScrollIndicator={false}>
        {isLoading ? <ActivityIndicator size={"large"} color={theme.colors.type[primaryType]} />
          :
          <>
            <PokedexData>
              <PokedexTitle type={primaryType}>Evolution Chart</PokedexTitle>

              <EvolutionContainer>
                <EvolutionContainerWrapper>
                  <EvolutionImage source={{ uri: evolutionFirstChain.specieImage }} />
                  <EvolutionId>{evolutionFirstChain.specieIndex}</EvolutionId>
                  <EvolutionName>{evolutionFirstChain.specie}</EvolutionName>
                </EvolutionContainerWrapper>

                <EvolutionLevel>{`(Level ${evolutionFirstChain.minLevel})`}</EvolutionLevel>

                <EvolutionContainerWrapper>
                  <EvolutionImage source={{ uri: evolutionFirstChain.image }} />
                  <EvolutionId>{evolutionFirstChain.pokemonIndex}</EvolutionId>
                  <EvolutionName>{evolutionFirstChain.name}</EvolutionName>
                </EvolutionContainerWrapper>
              </EvolutionContainer>
              {evolutionSecondChain &&
                                <EvolutionContainer>
                                  <EvolutionContainerWrapper>
                                    <EvolutionImage source={{ uri: evolutionFirstChain.image }} />
                                    <EvolutionId>{evolutionFirstChain.pokemonIndex}</EvolutionId>
                                    <EvolutionName>{evolutionFirstChain.name}</EvolutionName>
                                  </EvolutionContainerWrapper>

                                  <EvolutionLevel>{`(Level ${evolutionSecondChain.minLevel})`}</EvolutionLevel>

                                  <EvolutionContainerWrapper>
                                    <EvolutionImage source={{ uri: evolutionSecondChain.image }} />
                                    <EvolutionId>{evolutionSecondChain.pokemonIndex}</EvolutionId>
                                    <EvolutionName>{evolutionSecondChain.name}</EvolutionName>
                                  </EvolutionContainerWrapper>
                                </EvolutionContainer>
              }

            </PokedexData>
          </>
        }

      </Content>
    </Container>
  );
}
