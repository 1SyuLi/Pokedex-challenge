import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.white};
`;

export const Filters = styled.View`
   padding: 20px 10px;
   align-items: center;
   justify-content: flex-end;
   flex-direction: row;
`;

export const FilterWrapper = styled(TouchableOpacity)`
   margin-right: 20px;
`;

export const Header = styled.View`
   padding: 0px 28px;
`;

export const Title = styled.Text`
   font-size: ${RFValue(32)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.black};
   margin-bottom: 10px;
   margin-top: 10px;
`;

export const SubTitle = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.gray};
   line-height: ${RFValue(19.10)}px;
   margin-bottom: 25px;
`;

export const ContentLoad = styled.View`
   width: 100%;
   padding: 10px 0px;
`;

export const ContentScroll = styled(ScrollView)`
   padding-top: 10px;
   margin-top: 45px;
   padding: 0px 30px;
`;
