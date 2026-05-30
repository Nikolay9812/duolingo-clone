import { images } from "@/constants/images";
import { Link } from "expo-router";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 bg-white px-6 pt-6">
        <View className="items-center justify-center">
          <View className="flex-row items-center gap-x-3">
            <Image
              source={images.mascotLogo}
              accessibilityLabel="Mascot logo"
              accessibilityRole="image"
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
            <Text className="text-h3 font-poppins-bold text-[#101828]">
              muolingo
            </Text>
          </View>
        </View>

        <View className="mt-14">
          <Text className="text-[36px] font-poppins-bold leading-[44px] text-[#101828]">
            Your AI language
          </Text>
          <Text className="text-[36px] font-poppins-bold leading-[44px] text-[#5b3bf6]">
            teacher.
          </Text>
        </View>

        <Text className="mt-4 max-w-[300px] text-body-medium text-secondary">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        <View className="mt-10 flex-1 items-center justify-center">
          <View className="relative h-[320px] w-full max-w-[320px] items-center justify-center">
            <View className="absolute left-0 top-8 rounded-2xl bg-[#eff4ff] px-4 py-3 shadow-soft">
              <Text className="text-body-medium font-poppins-semibold text-[#101828]">
                Hello!
              </Text>
            </View>
            <View className="absolute right-0 top-6 rounded-2xl bg-[#eff4ff] px-4 py-3 shadow-soft">
              <Text className="text-body-medium font-poppins-semibold text-[#4f46e5]">
                ¡Hola!
              </Text>
            </View>
            <View className="absolute right-6 bottom-16 rounded-2xl bg-[#fff1f3] px-4 py-3 shadow-soft">
              <Text className="text-body-medium font-poppins-semibold text-[#dc2626]">
                你好!
              </Text>
            </View>
            <Image
              source={images.mascotWelcome}
              accessibilityLabel="Welcome mascot"
              accessibilityRole="image"
              style={{ width: 320, height: 320, resizeMode: "contain" }}
            />
          </View>
        </View>

        <Link href="/" asChild>
          <TouchableOpacity
            accessibilityRole="button"
            className="mb-6 rounded-[28px] bg-[#5b3bf6] px-6 py-5"
          >
            <Text className="text-center text-body-medium font-poppins-semibold text-white">
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
