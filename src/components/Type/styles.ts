import styled from "styled-components/native";

interface Props {
    type: string;
}

export const Container = styled.View<Props>`
   width: 30px;
   height: 30px;
   background-color: ${({ theme, type }) => theme.colors.type[type]};
   margin-right: 5px;
   border-radius: 3px;
   align-items: center;
   justify-content: center;
`;

export const TypeIcon = styled.Image``;
