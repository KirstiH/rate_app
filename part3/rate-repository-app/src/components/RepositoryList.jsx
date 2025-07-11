/* eslint-disable react/react-in-jsx-scope */
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#E1E4E8',
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
        <RepositoryItem
            fullName={item.fullName}
            description={item.description}
            language={item.language}
            stargazersCount={item.stargazersCount ? item.stargazersCount > 1000 ? (item.stargazersCount / 1000).toFixed(1) + 'k' : item.stargazersCount : item.stargazersCount}
            forksCount={item.forksCount ? item.forksCount > 1000 ? (item.forksCount / 1000).toFixed(1) + 'k' : item.forksCount : item.forksCount}
            reviewCount={item.reviewCount}
            ratingAverage={item.ratingAverage}
            ownerAvatarUrl={item.ownerAvatarUrl}
        />
      }
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;