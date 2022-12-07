import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
   width: 100%;
   height: 60px;
   background-color: ${({ theme }) => theme.colors.shape};
   border-radius: 10px;
   align-items: center;
   flex-direction: row;
   padding: 0px 8px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 0px 6px;
`;

export const InputIcon = styled(Feather)`
    font-size: 26px;
    color: ${({ theme }) => theme.colors.gray};
    margin-left: 8px;
`; 
