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
} from "./styles";


interface StatsProps {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export function Stats() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const [isLoading, setIsLoading] = useState(true);
  const [statLoading, setStatLoading] = useState(true);
  const [stat, setStat] = useState<StatsProps[]>([]);
  const [halfDamage, setHalfDamage] = useState<string[]>([]);

  const route: any = useRoute();
  const pokemon = route.params.pokemon;

  const primaryType = pokemon.types[0];

  function handleGoBack() {
    navigation.goBack();
  }

  function OpenAbout() {
    navigation.navigate("Pokemon", { pokemon });
  }

  function handleEvolution() {
    navigation.navigate("Evolution", { pokemon });
  }

  useEffect(() => {
    async function loadPokemonData() {
      try {
        const id = FilterApiIdByType(pokemon.types[0]);
        const PokemonBaseStats = await api.get(`pokemon/${pokemon.uuid}`);
        const Stats = PokemonBaseStats.data.stats;

        const DamagesResponse = await api.get(`type/${id}`);
        const half = DamagesResponse.data.damage_relations.half_damage_to;

        half.map(item => {
          setHalfDamage(halfDamage => [...halfDamage, item.name]);
        });


        if (statLoading) {
          Stats.map(item => {
            const FormattedStat = {
              base_stat: item.base_stat,
              effort: item.effort,
              stat: {
                name: item.stat.name,
                url: item.stat.url,
              }
            };
            setStat(stat => [...stat, FormattedStat]);
          });
        }




        setStatLoading(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemonData();
  }, []);

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
            <PokeballImage source={pokeball} />
            <TouchableOpacity disabled={true}>
              <ActiveItemText>Stats</ActiveItemText>
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
          <>
            <PokedexData>
              <PokedexTitle type={primaryType}>Base Stats</PokedexTitle>

              {
                stat.map(item => (
                  <Specs key={item.stat.name}>
                    <SpecType>
                      <SpecTitle>{item.stat.name}</SpecTitle>
                      <StatsNumber>{item.base_stat}</StatsNumber>
                    </SpecType>
                  </Specs>
                ))
              }

              <PokedexTitle type={primaryType}>Type Defenses</PokedexTitle>
              <Description>The effectiveness of each type on {pokemon.name}.</Description>

              <Effectiveness>
                {
                  TypesArray.map(type => {

                    const damages = setDamages(halfDamage, pokemon, type);

                    return (
                      <Effective key={type.id}>
                        <Type type={type.name} />
                        <EffectiveNumber>{damages}</EffectiveNumber>
                      </Effective>
                    );
                  })
                }
              </Effectiveness>
            </PokedexData>
          </>
        }

      </Content>
    </Container>
  );
}
