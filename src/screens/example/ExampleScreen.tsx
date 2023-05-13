import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import MyButton from '../../components/button/MyButton';

const styles = StyleSheet.create({
  message: {
    fontSize: 24,
    color: 'blue',
    fontStyle: 'italic',
  },
});

const Message = styled.Text`
  font-size: 22px;
  color: fuchsia;
  text-decoration: underline;
`;

const ExampleScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>
        Hello, inline style!
      </Text>

      <Text style={styles.message}>Hello, stylesheet!</Text>

      <Message>Hello, styled components!</Message>

      <MyButton
        title="Exemplo My Button - Default"
        onPress={() => null}
        variant="default"
      />

      <MyButton
        title="Exemplo My Button - Action"
        onPress={() => null}
        variant="action"
      />

      <MyButton
        title="Exemplo My Button - Error"
        onPress={() => null}
        variant="error"
      />
    </View>
  );
};

export default ExampleScreen;
