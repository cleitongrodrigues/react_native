import * as React from 'react';
import {Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';


export default function Button(props){
    const stylesButton = [styles.button];
    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.Triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) stylesButton.push(styles.operationButton);
    return(
    <TouchableHighlight onPress={props.onClick(props.label)}>
        <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:{
        fontSize:RFPercentage(5),
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width/4) - 4,
        padding:20,
        backgroundColor:'#F0F0F0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888',
    },
    operationButton:{
        color:'#FFF',
        backgroundColor:'#FA8231',
    },
    buttonDouble:{
        width:((Dimensions.get('window').width / 4) -4) * 2,
    },
    buttonTriple:{
        width:((Dimensions.get('window').width / 4) -4) * 3,
    },
}
);