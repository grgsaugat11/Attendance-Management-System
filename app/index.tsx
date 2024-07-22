import { Text, View, Button } from "react-native";
import Application from "./Pages/Application";
import Dashboard from './Pages/Dashboards/tchDashboard'
import Roles from './Pages/Home'
import LoginScreenAdmin from './Pages/Login/admLogin'

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      < LoginScreenAdmin/>
    </View>
  );
}
