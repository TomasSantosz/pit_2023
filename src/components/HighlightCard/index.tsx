import React from "react";
import { GestureResponderEvent } from "react-native";
import { 
    Container,
    Icon,
    Title,
} from "./styles";
type Props = {
    name: string;
    icon: string
    onPress: (event: GestureResponderEvent) => void;
}
export function HighlightCars({name, icon, ...rest}: Props){
    return (
        <Container {...rest}>
                <Icon name={icon} />
                <Title>{name}</Title>
        </Container>
    )
}