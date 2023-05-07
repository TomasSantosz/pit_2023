import React from "react";
import { TextInputProps } from "react-native";
import { Container, Option, Icon } from './styles';
import { GestureResponderEvent } from "react-native";

type Props = {
    title: string;
    onPress: (event: GestureResponderEvent) => void
};

export function Select({
    title, onPress
} : Props){
    return(
        <Container onPress={onPress}>
            <Option>{title}</Option>
            <Icon name="chevron-down"></Icon>
        </Container>
    );
}