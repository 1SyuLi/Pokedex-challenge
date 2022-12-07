import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
    types: string;
}

export const Container = styled.View<Props>`
    min-width: 61px;
    height: 25px;
    background-color: ${({ theme, types }) => theme.colors.type[types]};
    border-radius: 3px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 5px;
    padding: 0 3px;
`;

export const TypeImage = styled.Image``;

export const TypeName = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-left: 2px;
`;
