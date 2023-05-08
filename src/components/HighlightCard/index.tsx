import React from "react";

import { 
    Container,
    Icon,
    Title,
} from "./styles";
type Props = {
    name: string;
}
export function HighlightCars({name, ...rest}: Props){
    return (
        <Container {...rest}>
                <Icon name='user' />
                <Title>{name}</Title>
        </Container>
    )
}