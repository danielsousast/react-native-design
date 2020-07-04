const {StyleSheet, Platform, Dimensions} = require('react-native');
import colors from '../../styles/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  header: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    top: Platform.OS =='ios'? 60:15,
  },
  backButton: {
    height: 30,
    width: 30,

    zIndex: 999,
  },
  back: {},
  top: {
    flex: 1,
    maxHeight:height/2,
    minHeight:height/2,
  },
  bottom: {
    flex: 1,
    padding: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: `${colors.white}`,
    marginTop: -45,
    maxHeight:height/2-10,
    minHeight:height/2-10,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  description: {
    color: `${colors.gray}`,
    fontSize: 17,
    lineHeight: 35,
    marginTop: 30,
  },
  ratings: {
    flexDirection: 'row',
    marginRight: 16,
  },
  ratingIcon: {
    marginRight: 8,
  },
  info: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviews: {
    color: `${colors.gray}`,
  },
  rating: {
    color: `${colors.blue}`,
    fontSize: 16,
  },
  readmore: {
    color: colors.blue,
  },
  dots: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    height: 30,
    position:'absolute',

    bottom:Platform.OS == 'ios'? 450:340,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: `${colors.grayLight}`,
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: `${colors.blue}`,
  },
});

export default styles;
