import React from 'react';
import {Text , TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style = {styles.textStyle}>Click me!!!! </Text>
    </TouchableOpacity>

  );
};

const styles = {
  textStyle:{
    alignSelf: 'center',
    fontSize: 16,
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
