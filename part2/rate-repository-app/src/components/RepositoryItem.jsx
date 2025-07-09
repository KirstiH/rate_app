/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text } from 'react-native';
import {Image, StyleSheet} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    backgroundColor: theme.colors.textSecondary,
    marginBottom: 10,
  },
  upperContainer: {
    flexDirection: 'row',
  },
  containerForImage: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    spaceBetween: 10,
    paddingRight: 10,
  },
  containerForText: {
    flexDirection: 'column',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  author: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    paddingBottom: 10,
    fontFamily: theme.fonts.main,
  },
  infoText: {
    color: theme.colors.lighterText,
    paddingBottom: 10,
    fontFamily: theme.fonts.main,
  },
  textBox: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
    color: theme.colors.textSecondary,
    alignSelf: 'flex-start',
    fontFamily: theme.fonts.main,
  },
  lowerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  containerForInfo: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  TextForData: {
    paddingRight: 30,
    fontWeight: theme.fontWeights.bold
  },
  TextForData2: {
    color: theme.colors.lighterText,
    paddingRight: 30
  }
})

const RepositoryItem = (props) => (


    <View style={styles.container}>
        <View style={styles.upperContainer}>
            <View style={styles.containerForImage}>
            <Image
                style={styles.tinyLogo}
                source={{uri: props.ownerAvatarUrl}}
            />
            </View>
            <View style={styles.containerForText}>
            <Text style={styles.author}>{props.fullName}</Text>
            <Text style={styles.infoText}>{props.description}</Text>
            <Text style={styles.textBox}>{props.language}</Text>
            </View>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.containerForInfo}>
            <Text style={styles.TextForData}>{props.stargazersCount}</Text>
            <Text style={styles.TextForData2}>Stars</Text>
          </View>
          <View style={styles.containerForInfo}>
            <Text style={styles.TextForData}>{props.forksCount}</Text>
            <Text style={styles.TextForData2}>Forks</Text>
          </View>
          <View style={styles.containerForInfo}>
            <Text style={styles.TextForData}>{props.reviewCount}</Text>
            <Text style={styles.TextForData2}>Reviews</Text>
          </View>
          <View style={styles.containerForInfo}>
            <Text style={styles.TextForData}>{props.ratingAverage}</Text>
            <Text style={styles.TextForData2}>Rating</Text>
          </View>
        </View>
    </View>
);

export default RepositoryItem;