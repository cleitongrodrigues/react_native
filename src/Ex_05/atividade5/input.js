import { TextInput } from 'react-native';

import styles from './styles';
import { useState } from 'react';

export default function Input({valor, atValor, readonly = false}) {

    const [isFocus, setIsFocus] = useState(false);

    return (
        <TextInput
            style={
                [
                    styles.txtEntrada,
                    isFocus ?
                        {
                            borderColor: '#C51162',
                            outline: 'none',
                        }
                        :
                        {}
                ]
            }
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChangeText={(num2) => atValor(num2)}
            value={valor}
            readOnly={readonly}
        />
    );
}
