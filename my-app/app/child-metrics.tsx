import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function ChildMetricsScreen() {
  const router = useRouter();
  const [childName, setChildName] = useState('');
  const [ageYears, setAgeYears] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');

  const bmi = useMemo(() => {
    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);
    if (!h || !w || h <= 0) return null;
    const hMeters = h / 100;
    const value = w / (hMeters * hMeters);
    if (!isFinite(value)) return null;
    return value.toFixed(1);
  }, [heightCm, weightKg]);

  const handleContinue = () => {
    if (!childName || !ageYears || !heightCm || !weightKg) return;
    router.push('/dietary');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.header}>
          <Text style={styles.logoText}>
            <Text style={styles.logoBite}>BITE</Text>
            <Text style={styles.logoBuddy}>BUDDY</Text>
          </Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.title}>Tell us about your child</Text>

          <View style={styles.singleField}>
            <Text style={styles.label}>Child's Name</Text>
            <View style={styles.inputRowInline}>
              <TextInput
                style={styles.inputInlineWide}
                value={childName}
                onChangeText={setChildName}
                placeholder="Enter child's name"
                placeholderTextColor="#B0B0B0"
                maxLength={30}
              />
            </View>
          </View>

          <View style={styles.fieldsRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Age</Text>
              <View style={styles.inputRowInline}>
                <TextInput
                  style={styles.inputInline}
                  value={ageYears}
                  onChangeText={setAgeYears}
                  keyboardType="numeric"
                  maxLength={2}
                  placeholder="5"
                  placeholderTextColor="#B0B0B0"
                />
                <Text style={styles.suffix}>years</Text>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Height</Text>
              <View style={styles.inputRowInline}>
                <TextInput
                  style={styles.inputInline}
                  value={heightCm}
                  onChangeText={setHeightCm}
                  keyboardType="numeric"
                  maxLength={5}
                  placeholder="110"
                  placeholderTextColor="#B0B0B0"
                />
                <Text style={styles.suffix}>cm</Text>
              </View>
            </View>
          </View>

          <View style={styles.singleField}>
            <Text style={styles.label}>Weight</Text>
            <View style={styles.inputRowInline}>
              <TextInput
                style={styles.inputInlineWide}
                value={weightKg}
                onChangeText={setWeightKg}
                keyboardType="numeric"
                maxLength={5}
                placeholder="20.5"
                placeholderTextColor="#B0B0B0"
              />
              <Text style={styles.suffix}>kg</Text>
            </View>
          </View>

          <View style={styles.bmiContainer}>
            <Text style={styles.bmiLabel}>Your child's Body Mass Index (BMI) is</Text>
            {!!bmi && <Text style={styles.bmiValue}>{bmi}</Text>}
          </View>
        </View>

        <View style={styles.footer}>
          {/* Thanh tiến trình có thể thêm vào đây nếu cần */}
          <TouchableOpacity 
            style={[styles.continueButton, (!childName || !ageYears || !heightCm || !weightKg) && styles.continueButtonDisabled]}
            onPress={handleContinue}
            disabled={!childName || !ageYears || !heightCm || !weightKg}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoidingContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    paddingTop: height * 0.05,
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
  mainContent: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
    marginBottom: 30,
  },
  // SỬA LỖI: Đơn giản hóa style cho hàng, thêm marginTop
  fieldsRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 24,
  },
  field: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 8,
  },
  inputRowInline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1.5,
    borderBottomColor: '#A9A9A9',
    paddingBottom: 8,
  },
  inputInline: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#2F2F2F',
    textAlign: 'left',
    padding: 0, // Xóa padding mặc định
  },
  inputInlineWide: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#2F2F2F',
    textAlign: 'left',
    padding: 0,
  },
  suffix: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888888',
    marginLeft: 8,
  },
  singleField: {
    marginTop: 24,
  },
  bmiContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  bmiLabel: {
    fontSize: 16,
    color: '#2F2F2F',
    textAlign: 'center',
  },
  bmiValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5E9CFF',
    marginTop: 8,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: height * 0.05,
  },
  continueButton: {
    backgroundColor: '#A2D2FF',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
  },
  backButton: {
    // SỬA LỖI: Điều chỉnh khoảng cách
    marginTop: 15, 
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
});
