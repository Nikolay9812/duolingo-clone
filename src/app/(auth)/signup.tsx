import { images } from "@/constants/images";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import VerificationModal from "./verification-modal";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleSignUp = () => {
    if (email && password) {
      setShowVerification(true);
    }
  };

  const handleSocialAuth = () => {
    setShowVerification(true);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView
          className="flex-1 bg-white px-6"
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="mb-6"
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Feather name="chevron-left" size={28} color="#0d132b" />
          </TouchableOpacity>

          {/* Header */}
          <View className="mb-8">
            <Text className="text-[32px] font-poppins-bold leading-[40px] text-[#0d132b]">
              Create your account
            </Text>
            <View className="mt-2 flex-row items-center">
              <Text className="text-base font-poppins-regular text-[#6b7280]">
                Start your language journey today{" "}
              </Text>
              <Text className="text-xl">✨</Text>
            </View>
          </View>

          {/* Mascot with Sparkles */}
          <View className="mb-12 items-center justify-center">
            <View className="relative h-[240px] w-full max-w-[280px] items-center justify-center">
              {/* Decorative sparkles */}
              <Text className="absolute left-0 top-4 text-2xl">✨</Text>
              <Text className="absolute right-4 top-12 text-xl">✨</Text>
              <Text className="absolute right-0 bottom-20 text-lg">✨</Text>

              <Image
                source={images.mascotAuth}
                accessibilityLabel="Mascot"
                accessibilityRole="image"
                style={{
                  width: 220,
                  height: 220,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>

          {/* Email Input */}
          <View className="mb-4">
            <Text className="mb-2 text-sm font-poppins-medium text-[#9ca3af]">
              Email
            </Text>
            <TextInput
              placeholder="alex@gmail.com"
              placeholderTextColor="#d1d5db"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              className="rounded-2xl bg-[#f3f4f6] px-4 py-4 text-base font-poppins-regular text-[#0d132b]"
              accessibilityLabel="Email input"
            />
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <Text className="mb-2 text-sm font-poppins-medium text-[#9ca3af]">
              Password
            </Text>
            <View className="relative">
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#d1d5db"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                className="rounded-2xl bg-[#f3f4f6] px-4 py-4 pr-12 text-base font-poppins-regular text-[#0d132b]"
                accessibilityLabel="Password input"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-0 h-full justify-center"
                accessibilityRole="button"
                accessibilityLabel={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                <Feather
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#9ca3af"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            onPress={handleSignUp}
            className="mb-8 rounded-[28px] bg-[#5b3bf6] px-6 py-4"
            accessibilityRole="button"
            accessibilityLabel="Sign up button"
          >
            <Text className="text-center text-base font-poppins-semibold text-white">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="mb-8 flex-row items-center">
            <View className="flex-1 h-px bg-[#e5e7eb]" />
            <Text className="mx-3 text-sm font-poppins-regular text-[#9ca3af]">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-[#e5e7eb]" />
          </View>

          {/* Social Auth Buttons */}
          <View className="gap-y-3 mb-8">
            {/* Google */}
            <TouchableOpacity
              onPress={handleSocialAuth}
              className="flex-row items-center rounded-2xl border border-[#e5e7eb] bg-white px-4 py-4"
              accessibilityRole="button"
              accessibilityLabel="Continue with Google"
            >
              <FontAwesome name="google" size={20} color="#ea4335" />
              <Text className="ml-3 flex-1 text-base font-poppins-medium text-[#0d132b]">
                Continue with Google
              </Text>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity
              onPress={handleSocialAuth}
              className="flex-row items-center rounded-2xl border border-[#e5e7eb] bg-white px-4 py-4"
              accessibilityRole="button"
              accessibilityLabel="Continue with Facebook"
            >
              <FontAwesome name="facebook" size={20} color="#1877f2" />
              <Text className="ml-3 flex-1 text-base font-poppins-medium text-[#0d132b]">
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity
              onPress={handleSocialAuth}
              className="flex-row items-center rounded-2xl border border-[#e5e7eb] bg-white px-4 py-4"
              accessibilityRole="button"
              accessibilityLabel="Continue with Apple"
            >
              <FontAwesome5 name="apple" size={20} color="#000000" />
              <Text className="ml-3 flex-1 text-base font-poppins-medium text-[#0d132b]">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Link */}
          <View className="items-center">
            <View className="flex-row items-center gap-x-1">
              <Text className="text-sm font-poppins-regular text-[#9ca3af]">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/(auth)/signin")}
                accessibilityRole="button"
                accessibilityLabel="Go to sign in"
              >
                <Text className="text-sm font-poppins-semibold text-[#5b3bf6]">
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Verification Modal */}
      <VerificationModal
        visible={showVerification}
        onClose={() => setShowVerification(false)}
      />
    </>
  );
}
