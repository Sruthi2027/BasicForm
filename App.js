import React ,{useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native' ;


const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [showSuccessMessage, setshowSuccessMessage] = useState(false);
    const [ShowInvalidAgeWarning, setShowInvalidAgeWarning] = useState(false);

const handleNameChange = (text)  => {
   setName (text);
};

const handleAgeChange = (text) => {
   setAge(text);
};

const handleSubmit = () => {
 if (name.trim() === '' || age.trim().length<8) {
  setShowInvalidAgeWarning(true);
  return;
 }

 setShowInvalidAgeWarning(false);
 setshowSuccessMessage(true);
};

return (
  <View style = {StyleSheet.container}>
    <Text style = {styles.label}> Name:</Text>
    <TextInput
    style={styles.input}
    placeholder=" Enter your name"
    value = {name}
    onChangeText= {handleNameChange}
    />


    <Text style = {styles.label}> Age:</Text>
    <TextInput
    style={styles.input}
    placeholder=" Enter your Age"
    value = {age}
    onChangeText= {handleAgeChange}
    />

    <TouchableOpacity style = {styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}> Submit</Text>
    </TouchableOpacity>
 
    {ShowInvalidAgeWarning && (
      <Text style = {styles.warningMessage}> Age must be atleast 8 characters long!!! </Text>
    )}
    {showSuccessMessage &&(
      <Text style={styles.successMessage}> Record Added Successfully</Text>
    )}
    </View>
    );
    };

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  label:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
});

export default Form;
  