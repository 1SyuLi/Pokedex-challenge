import styled from "styled-components/native";

export const Container = styled.View`
    width: 160px;
    height: 8px;
    background-color: transparent;
    border-radius: 4px;
    margin: 0px 8px;
    margin-top: 2px;
`;

export const ProgressBar = styled.View`
    width: 50px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.backgroundType.fire};
    border-radius: 4px;
`;
