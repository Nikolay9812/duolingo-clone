import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

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

      <Link href="/onboarding" asChild>
        <TouchableOpacity className="mt-8 rounded-3xl bg-primary px-6 py-4">
          <Text className="text-body-medium font-poppins-semibold text-white">
            Open Onboarding
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
