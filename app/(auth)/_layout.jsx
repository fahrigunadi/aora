import { Redirect, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from '../../context/GlobalProvider';

const AuthLayout = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />
  }

  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{ 
          headerShown: false,
         }}
      />

      <Stack.Screen
        name="sign-up"
        options={{ 
          headerShown: false,
         }}
      />

      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </Stack>
  )
}

export default AuthLayout