import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

// Lấy kích thước màn hình để thiết kế đáp ứng
const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/gender' as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header với logo */}
      <View style={styles.header}>
        <Text style={styles.logoText}>
          <Text style={styles.logoBite}>BITE</Text>
          <Text style={styles.logoBuddy}>BUDDY</Text>
        </Text>
      </View>

      {/* Nội dung chính */}
      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}>Hi there! I'm Bite Buddy – your cheeky little AI helper on the smart food tray.</Text>
        <Text style={styles.descriptionText}>
          I'll tell stories, give fun quizzes, and guide you to every delicious bite. With me, mealtime is not just tasty – it's full of laughter
        </Text>
      </View>
      
      <View style={styles.footer}>
        {/* Dots pagination */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Nút Get Started */}
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Link đăng nhập */}
        <TouchableOpacity style={styles.loginContainer} onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>
            Already Have An Account? <Text style={styles.loginLink}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    marginTop: height * 0.08,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  logoBite: {
    color: '#4A4A4A',
  },
  logoBuddy: {
    color: '#00C49A',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: -height * 0.1,
  },
  titleText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 32,
  },
  descriptionText: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 26,
  },
  // --- Footer Styles ---
  footer: {
    position: 'absolute',
    bottom: height * 0.05,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#D6EAF8', // Màu chấm không hoạt động
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#85C1E9', // Màu chấm hoạt động
    width: 20,
  },
  getStartedButton: {
    backgroundColor: '#A2D2FF',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#666666',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#5E9CFF',
  },
});
