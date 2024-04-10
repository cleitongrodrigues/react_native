import {TextInput} from 'react-native';

import styles from './styles';

export default function Caixa(){
    return(
        <TextInput
        style={
            [
                styles.txtEntrada,
                isFocusN1 ?
                    {
                        borderColor: '#C51162',
                        outline: 'none',
                    }
                    :
                    {}
            ]
        }
        onFocus={() => setIsFocusN1(true)}
        onBlur={() => setIsFocusN1(false)}
        onChangeText={(num1) => setN1(num1)}
        value={n1}
        // keyboardType='numeric'
    />
    );
}