import colors from '../../styles/colors';

const {StyleSheet, Dimensions} = require('react-native');
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  destination: {
    marginTop: 30,
    alignItems: 'center',
    marginRight: 25,
  },
  image: {
    height: 160,
    width: width / 2 - 40,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  footer: {
    width: '100%',
    backgroundColor: `${colors.white}`,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  footerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerDesc: {
    color: `${colors.gray}`,
    fontSize: 14,
  },
  options: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
    position: 'absolute',
    top: 0,
  },
  ratings: {
    marginTop: 20,
    flexDirection: 'row',
  },
  ratingIcon: {
    marginRight: 5,
  },
  temperature: {
    color: `${colors.white}`,
    fontSize: 16,
  },
});

export default styles;
