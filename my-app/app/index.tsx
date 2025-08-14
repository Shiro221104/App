import React, { useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

// Màn hình chờ (Splash Screen)
export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Mô phỏng thời gian tải cho splash screen
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 2500); // Hiển thị trong 2.5 giây

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#A2D2FF" />
      <View style={styles.splashContent}>
        <View style={styles.bearLogo}>
          <View style={styles.bearHead}>
            <View style={styles.bearEars}>
              <View style={styles.bearEar} />
              <View style={styles.bearEar} />
            </View>
            <View style={styles.bearFace}>
              <View style={styles.bearEyes}>
                <View style={styles.bearEye} />
                <View style={styles.bearEye} />
              </View>
              <View style={styles.bearMouth} />
            </View>
          </View>
        </View>
        <View style={styles.appNameContainer}>
          <Text style={styles.appNameBite}>BITE</Text>
          <Text style={styles.appNameBuddy}>BUDDY</Text>
        </View>
        <Text style={styles.splashTagline}>POWERED BY AI, DESIGNED FOR GROWTH</Text>
      </View>
      <Text style={styles.splashFooter}>A product of Buddy Corporation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // --- Kiểu dáng cho Splash Screen ---
  splashContainer: {
    flex: 1,
    backgroundColor: '#A2D2FF', // Màu xanh da trời nhạt chính xác
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  splashContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Logo gấu bear
  bearLogo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bearHead: {
    width: 100,
    height: 100,
    backgroundColor: '#D3D3D3', // Màu xám nhạt cho đầu gấu
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bearEars: {
    flexDirection: 'row',
    position: 'absolute',
    top: -15,
    justifyContent: 'space-between',
    width: 80,
  },
  bearEar: {
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF', // Màu trắng cho tai
    borderRadius: 12.5,
  },
  bearFace: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  bearEyes: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 20,
  },
  bearEye: {
    width: 12,
    height: 12,
    backgroundColor: '#000000', // Màu đen cho mắt
    borderRadius: 6,
  },
  bearMouth: {
    width: 20,
    height: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#000000', // Màu đen cho miệng
    borderRadius: 10,
  },
  appNameContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  appNameBite: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF', // Màu trắng cho "BITE"
    letterSpacing: 1,
  },
  appNameBuddy: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00C49A', // Màu xanh lá sáng cho "BUDDY"
    letterSpacing: 1,
  },
  splashTagline: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  splashFooter: {
    fontSize: 12,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
});
