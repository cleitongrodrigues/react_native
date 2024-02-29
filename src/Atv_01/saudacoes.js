import { Text } from "react-native";

const Saudacoes = (props) => {
    return(
        <Text style={{textAlign:"center"}}>
            Olá {props.name}!
        </Text>
    );
}

export default Saudacoes