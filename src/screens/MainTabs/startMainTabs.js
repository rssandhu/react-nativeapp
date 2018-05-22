import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
       
        Icon.getImageSource("ios-share-alt", 30),
        Icon.getImageSource("ios-menu", 30),
        Icon.getImageSource("md-camera", 30),
        Icon.getImageSource("md-map", 30),
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[1],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                 {
                    screen: "awesome-places.CameraScreen",
                    label: "CameraScreen",
                    title: "CameraScreen",
                    icon: sources[2],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.MapScreen",
                    label: "MapScreen",
                    title: "MapScreen",
                    icon: sources[3],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            }
        });
    });
};

export default startTabs;