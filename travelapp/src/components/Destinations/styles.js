const {StyleSheet, Dimensions} = require('react-native');
import colors from '../../styles/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 15,
  },
  destination: {},
  destinationBackground: {
    width: width - 50,
    height: width * 0.7,
    resizeMode: 'cover',
    borderRadius: 12,
    marginHorizontal: 25,
    paddingHorizontal: 25,
  },
  backgroundImage: {
    borderRadius: 12,
  },
  destinationTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  destiantionLeft: {
    flexDirection: 'row',
  },
  destiantionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  userName: {
    color: `${colors.white}`,
    fontWeight: '600',
  },
  userLocation: {
    color: `${colors.white}`,
    marginLeft: 6,
    fontSize: 12,
  },
  userInfoBotton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: `${colors.white}`,
    fontSize: 24,
    fontWeight: 'bold',
  },
  destinationFooter: {
    height: 115,
    backgroundColor: `${colors.white}`,
    width: width - 50 * 2,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: -80,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow: 'hidden',
  },
  destinationFooterTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  destinationFooterDesc: {
    flex: 1,
    marginTop: 10,
    fontSize: 14,
    color: `${colors.gray}`,
  },
  dots: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    height: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: `${colors.grayLight}`,
    borderColor: 'transparent',
    alignSelf: 'center',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: `${colors.blue}`,
  },
});

export default styles;
