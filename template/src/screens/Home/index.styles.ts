import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  cont: { margin: 30, alignSelf: 'center', width: '100%' },
  row: { flexDirection: 'row', alignItems: 'center' },
  notUsed: { color: 'blue' },
  env: {
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '1%',
  },
  // header
  header: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: '20%',
    height: '45%',
    minHeight: 70,
    resizeMode: 'cover',
  },
  appName: {
    color: 'black',
    fontSize: 20,
    marginLeft: '5%',
  },
  //

  // Section 1
  inputContainer: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    width: '75%',
  },
  AddBtn: {
    width: '22%',
    height: '70%',
    minHeight: 55,
    backgroundColor:'#67A63D',
  },
  error: {
    width: '84%',
    fontSize: 12,
    color: 'red',
  },
  //

  // Section2
  userInfoContainer: {
    flex: 0.79,
    width: '90%',
    marginTop: '5%',
    alignItems:'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '4%',
    paddingHorizontal: 2.5,
    backgroundColor:'white',
    minHeight: 70,
    height: 70,
    marginHorizontal:2,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  cardSection1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    height: '100%',
  },
  cardSection2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
  avatar: {
    width: '20%',
    height: '100%',
    resizeMode: 'contain',
    marginHorizontal: '5%',
  },
});

export default styles;
