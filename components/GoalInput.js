import { useState } from 'react';
import {StyleSheet,View,TextInput,Button,Modal,Image} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText,setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');  
      }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/icon.png')}></Image>
        <TextInput 
          style={styles.textInput} 
          placeholder='giriniz' 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          >
        </TextInput>
        <View>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
        <Button title='Cancel' onPress={props.onCancel}></Button>
        </View>
      </View>
      </Modal>
    );
}

export default GoalInput;

const styles=StyleSheet.create({
    inputContainer: {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : 24,
        
        backgroundColor : '#311b6b'
      },
      image:{
        width : 100,
        height : 100
      },
      textInput:{
        borderWidth : 1,
        borderColor : '#cccccc',
        width: '70%',
        marginRight : 8,
        padding : 8
      }
});