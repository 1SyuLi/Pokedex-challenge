import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface CardProps {
    primaryType?: string;
}

export const Container = styled(TouchableOpacity) <CardProps>`
   width: 100%;
   height: 115px;
   background-color: ${({ theme, primaryType }) => theme.colors.backgroundType[primaryType]};
   border-radius: 10px;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 16px;
`;

export const Section = styled.View`
    padding-top: 10px;
    padding-left: 20px;
    width: 60%;
`;

export const Id = styled.Text`
    color: ${({ theme }) => theme.colors.IdColor};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    opacity: 0.6;
`;

export const Patern = styled.ImageBackground`
    width: 94px;
    height: 42px;
    position: absolute;
    top: 10px;
    left: 90px;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: 5px;
`;


export const ImageWrapper = styled.View`
    width: 40%;
    align-items: center;
    justify-content: center;
`;

export const Shape = styled.ImageBackground`
    width: 145px;
    height: 145px;
    position: absolute;
    top: -10px;
`;

export const Pokemon = styled.Image`
    width: 130px;
    height: 130px;
    position: absolute;
    top: -20px;
`;

export const Types = styled.View`
    flex-direction: row;
    align-items: center;
`;
