import { createDrawerNavigator } from '@react-navigation/drawer';
import Shop from '../exercise03/Shop';
import Coin from '../exercise02/Coin';
import Calculadore from '../exercise01/Calculadore';
const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (

        <Drawer.Navigator  
        screenOptions={{
            headerStyle: {
                backgroundColor: '#FECD70',
            },
            headerTintColor: '#00000',
            drawerStyle: {
                backgroundColor: '#FECD70',
                width: 240,
            },
            }}

            >
            <Drawer.Screen name="Calculadore" component={Calculadore}  options={{
                title: 'Calculadora', headerTitleAlign: 'center',
            }} />
            <Drawer.Screen name="Coin" component={Coin} options={{
                title: 'Conversor de Monedas', headerTitleAlign: 'center',
            }}/>
            <Drawer.Screen name="Shop" component={Shop} options={{
                title: 'Mimi S.A de C.V', headerTitleAlign: 'center',
            }} />
        </Drawer.Navigator>

    );
}