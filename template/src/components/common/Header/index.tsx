import { View , Image , Text } from 'react-native';
import styles from './index.styles';

const Header = () => {

  return (
    <View style={styles.header}>
     <Image
       source={{
         uri: 'https://e7.pngegg.com/pngimages/463/288/png-clipart-minecraft-video-game-mod-emoji-minecraft-grass-video-game-thumbnail.png',
       }}
       style={styles.logo}
     />
     <Text style={styles.appName}>Minecraft User Name</Text>
  </View>
  );
};

export default Header;
