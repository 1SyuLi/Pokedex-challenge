import styled, { css } from "styled-components/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface Props {
    type: string;
}

export const Container = styled.View<Props>`
   flex: 1;
   background-color: ${({ theme, type }) => theme.colors.backgroundType[type]};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px 24px;
    margin-top: 50px;
`;

export const BackIcon = styled(Feather)`
    font-size: 35px;
    color: ${({ theme }) => theme.colors.white};
`;

export const PokemonName = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 70px;
`;

export const ShapeImage = styled.Image`
    width: 140px;
    height: 65px;
    right: -40px;
    position: absolute;
`;

export const NavBar = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px 30px;
    margin-top: 40px;
    justify-content: space-between;
`;

export const Item = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ActiveItemText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const ItemText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
`;

export const PokeballImage = styled.ImageBackground`
    width: 100px;
    height: 100px;
    position: absolute;
    top: -8px;
    left: -10px;
`;

export const Content = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 0px 30px;
    margin-top: -30px;
    padding-top: 25px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: justify;
`;

export const PokedexData = styled.View``;

export const PokedexTitle = styled.Text<Props>`
    font-size: ${RFValue(16)}px;
    color: ${({ theme, type }) => theme.colors.backgroundType[type]};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const Specs = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const SpecType = styled.View`
    width: 150px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const SpecTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const StatsNumber = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const SpecSkills = styled.View``;

export const Effectiveness = styled.View`
    margin-top: 10px;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Effective = styled.View`
    margin-right: 5px;
    align-items: center;
    margin-bottom: 10px;
`;

export const EffectiveNumber = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const EvolutionContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const EvolutionContainerWrapper = styled.View`
    align-items: center;
`;

export const EvolutionImage = styled.Image`
    width: 100px;
    height: 100px;
`;

export const EvolutionId = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const EvolutionName = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const EvolutionLevel = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.bold};
`;
