import React from "react";
import { GestureResponderEvent } from "react-native";
import { 
    Container,
    Icon,
    Title,
} from "./styles";
type Props = {
    name: string;
    onPress: (event: GestureResponderEvent) => void;
}
export function HighlightCars({name, ...rest}: Props){
    return (
        <Container {...rest}>
                <Icon name='user' />
                <Title>{name}</Title>
        </Container>
    )
}