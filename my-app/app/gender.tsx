import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

// Lấy kích thước màn hình để thiết kế đáp ứng
const { width, height } = Dimensions.get('window');

const BOY_ICON_URI = 'https://cdn-icons-png.flaticon.com/512/4322/4322991.png';
const GIRL_ICON_URI = 'https://cdn-icons-png.flaticon.com/512/4322/4322997.png';

export default function GenderSelectionScreen() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(null);

  const handleContinue = () => {
    if (!selectedGender) return;
    router.push('/child-metrics');
  };

  const handleBack = () => {
    router.back();
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

      {/* Câu hỏi chính */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>What is the child's gender?</Text>
      </View>

      {/* Lựa chọn giới tính */}
      <View style={styles.optionsContainer}>
        {/* Boy Icon */}
        <TouchableOpacity 
          style={[styles.option, selectedGender === 'boy' && styles.optionSelected]}
          onPress={() => setSelectedGender('boy')}
        >
          <Image source={{ uri: BOY_ICON_URI }} style={styles.genderIcon} resizeMode="contain" />
          <Text style={styles.optionLabel}>Boy</Text>
        </TouchableOpacity>

        {/* Girl Icon */}
        <TouchableOpacity 
          style={[styles.option, selectedGender === 'girl' && styles.optionSelected]}
          onPress={() => setSelectedGender('girl')}
        >
          <Image source={{ uri: GIRL_ICON_URI }} style={styles.genderIcon} resizeMode="contain" />
          <Text style={styles.optionLabel}>Girl</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        {/* Dots pagination */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
         
        </View>

        {/* Nút Continue */}
        <TouchableOpacity 
          style={[styles.continueButton, !selectedGender && styles.continueButtonDisabled]} 
          onPress={handleContinue}
          disabled={!selectedGender}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Back */}
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>Back</Text>
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
    marginTop: 40,
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
  questionContainer: {
    marginTop: 60,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    width: '100%',
    gap: 120,
  },
  option: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'transparent',
    backgroundColor: '#F5F5F5',
  },
  optionSelected: {
    borderColor: '#A2D2FF',
    backgroundColor: '#E8F5F3',
  },
  genderIcon: {
    width: 72,
    height: 72,
    marginBottom: 8,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2F2F',
  },
  // --- Footer Styles ---
  footer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 60,
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
    backgroundColor: '#D6EAF8',
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#85C1E9',
    width: 20,
  },
  continueButton: {
    backgroundColor: '#A2D2FF',
    width: '100%',
    maxWidth: 300,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 300,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#A2D2FF',
  },
  continueButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButtonText: {
    color: '#5E9CFF',
    fontSize: 16,
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
