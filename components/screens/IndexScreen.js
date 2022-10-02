
import * as React from 'react';
import { View, useWindowDimensions,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import TVShows from '../screens/TVShows';

const renderScene = SceneMap({
  movies: Movies,
  search: Search,
  tvshows: TVShows,
});

export default function TabbedView({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'movies', title: 'Movies' },
    { key: 'search', title: 'Search' },
    { key: 'tvshows', title: 'TV Shows' },
  ]);

  const renderTabBar = props => (
    <TabBar
          {...props}
          renderLabel={({ route, color }) => (
            <Text style={{ color: 'black', margin: 8 }}>
              {route.title}
            </Text>
          )}
          indicatorStyle={{backgroundColor: '#2c3e50'}}
          style={{backgroundColor: 'white'}}
        />
  );


  return (
    <TabView
      navigationState={{ index, routes }}
      navigation={navigation}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}


