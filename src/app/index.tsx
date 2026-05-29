import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Text className="text-h1 text-pink-600 text-primary font-poppins-semibold text-center">
        Duolingo Clone
      </Text>
      <Text className="mt-4 text-body-medium text-secondary text-center max-w-xs">
        Built with the Lingua design system, brand tokens, and Poppins
        typography.
      </Text>
    </View>
  );
}
