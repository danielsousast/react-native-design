import {StyleSheet, Platform} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'ios'? 70 : 15,

  },
  header: {
    paddingHorizontal: 25,
  },
  headerLabel: {
    color: `${colors.gray}`,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginTop: 8,
  },
});

export default styles;
