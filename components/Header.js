import { StyleSheet, Text, View, Button } from 'react-native';

const headerStyles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    padding: 5,
    marginTop: 20,
    color: '#d7dadc',
    borderBottomColor: '#3a3a3c',
    borderBottomWidth: 1
  },
  menu: {
    flexDirection: 'row',
    width: 75
  },
  title: {
    fontWeight: '700',
    fontSize: 36,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff'
  }
});

const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.menu}>
        <Button 
          id="help-button" 
          title="❔"
          color="#565758"
          // onPress={}
        />
      </View>
      <Text style={headerStyles.title}>wordlex</Text>
      <View style={headerStyles.menu}>
        <Button 
          title="📊"
          color="#565758"
          // onPress={}
        />
        <Button 
          title="⚙️"
          color="#565758"
          // onPress={}
        />
      </View>
    </View>
  );
}


export default Header;