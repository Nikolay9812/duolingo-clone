import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function VerificationModal({
  visible,
  onClose,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (code.length === 6) {
      // Auto-navigate to home after a short delay
      const timerId = setTimeout(() => {
        router.replace("/");
      }, 500);
      return () => clearTimeout(timerId);
    }
  }, [code, router]);

  const handleDigitPress = (digit: string) => {
    if (code.length < 6) {
      setCode(code + digit);
    }
  };

  const handleBackspace = () => {
    setCode(code.slice(0, -1));
  };

  const handleClose = () => {
    setCode("");
    onClose();
  };

  const handleResend = () => {
    // TODO: Integrate with Clerk to resend verification code
    // Call prepareEmailAddressVerification or equivalent
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
          scrollEnabled={false}
        >
          {/* Modal Content */}
          <View className="rounded-t-3xl bg-white px-6 py-8">
            {/* Close Button */}
            <View className="mb-6 flex-row justify-between items-center">
              <Text className="text-[24px] font-poppins-bold text-[#0d132b]">
                Verify Email
              </Text>
              <TouchableOpacity
                onPress={handleClose}
                accessibilityRole="button"
                accessibilityLabel="Close verification modal"
              >
                <Feather name="x" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>

            {/* Description */}
            <Text className="mb-8 text-sm font-poppins-regular text-[#6b7280]">
              We've sent a 6-digit verification code to your email. Enter it
              below to continue.
            </Text>

            {/* Code Input Display */}
            <View className="mb-8 flex-row justify-center gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <View
                  key={index}
                  className="h-12 w-12 items-center justify-center rounded-lg bg-[#f3f4f6] border border-[#e5e7eb]"
                >
                  <Text className="text-xl font-poppins-semibold text-[#0d132b]">
                    {code[index] || ""}
                  </Text>
                </View>
              ))}
            </View>

            {/* Number Pad */}
            <View className="gap-y-3">
              {/* Row 1 */}
              <View className="flex-row justify-between gap-2">
                {[1, 2, 3].map((digit) => (
                  <TouchableOpacity
                    key={digit}
                    onPress={() => handleDigitPress(digit.toString())}
                    className="flex-1 rounded-xl bg-[#f3f4f6] py-4"
                    accessibilityRole="button"
                    accessibilityLabel={`Digit ${digit}`}
                  >
                    <Text className="text-center text-xl font-poppins-semibold text-[#0d132b]">
                      {digit}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Row 2 */}
              <View className="flex-row justify-between gap-2">
                {[4, 5, 6].map((digit) => (
                  <TouchableOpacity
                    key={digit}
                    onPress={() => handleDigitPress(digit.toString())}
                    className="flex-1 rounded-xl bg-[#f3f4f6] py-4"
                    accessibilityRole="button"
                    accessibilityLabel={`Digit ${digit}`}
                  >
                    <Text className="text-center text-xl font-poppins-semibold text-[#0d132b]">
                      {digit}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Row 3 */}
              <View className="flex-row justify-between gap-2">
                {[7, 8, 9].map((digit) => (
                  <TouchableOpacity
                    key={digit}
                    onPress={() => handleDigitPress(digit.toString())}
                    className="flex-1 rounded-xl bg-[#f3f4f6] py-4"
                    accessibilityRole="button"
                    accessibilityLabel={`Digit ${digit}`}
                  >
                    <Text className="text-center text-xl font-poppins-semibold text-[#0d132b]">
                      {digit}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Row 4 */}
              <View className="flex-row justify-between gap-2">
                <View className="flex-1" />
                <TouchableOpacity
                  onPress={() => handleDigitPress("0")}
                  className="flex-1 rounded-xl bg-[#f3f4f6] py-4"
                  accessibilityRole="button"
                  accessibilityLabel="Digit 0"
                >
                  <Text className="text-center text-xl font-poppins-semibold text-[#0d132b]">
                    0
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleBackspace}
                  className="flex-1 rounded-xl bg-[#f3f4f6] py-4"
                  accessibilityRole="button"
                  accessibilityLabel="Backspace"
                >
                  <View className="items-center justify-center">
                    <Feather name="delete" size={20} color="#0d132b" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Resend Code */}
            <View className="mt-8 items-center">
              <Text className="text-sm font-poppins-regular text-[#6b7280]">
                Didn't receive the code?{" "}
              </Text>
              <TouchableOpacity
                onPress={handleResend}
                accessibilityRole="button"
                accessibilityLabel="Resend code"
              >
                <Text className="text-sm font-poppins-semibold text-[#5b3bf6]">
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}
