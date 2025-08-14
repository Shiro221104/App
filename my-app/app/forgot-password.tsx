import React, { useState } from 'react';
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
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert("Lỗi", "Vui lòng nhập email của bạn.");
      return;
    }

    // Thêm logic gửi email reset password tại đây
    console.log("Reset password for email:", email);
    Alert.alert(
      "Email đã được gửi", 
      "Vui lòng kiểm tra email của bạn để đặt lại mật khẩu.",
      [
        {
          text: "OK",
          onPress: () => router.push('/login')
        }
      ]
    );
  };

  const handleBackToLogin = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          
          <Text style={styles.logoText}>
            <Text style={styles.logoBite}>BITE</Text>
            <Text style={styles.logoBuddy}>BUDDY</Text>
          </Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            Don't worry! It happens. Please enter the email address associated with your account.
          </Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="youremail@example.com"
              placeholderTextColor="#B0B0B0"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[styles.resetButton, !email && styles.resetButtonDisabled]}
            onPress={handleResetPassword}
            disabled={!email}
          >
            <Text style={styles.resetButtonText}>Send Reset Link</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginContainer} onPress={handleBackToLogin}>
            <Text style={styles.loginText}>
              Remember your password? <Text style={styles.loginLink}>Log In</Text>
            </Text>
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
    width: '100%',
    paddingTop: height * 0.05,
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#5E9CFF',
    fontWeight: '600',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    maxWidth: 300,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#DCDCDC',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2F2F2F',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: height * 0.05,
  },
  resetButton: {
    backgroundColor: '#00C49A',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  resetButtonText: {
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
    color: '#5E9CFF',
    fontWeight: 'bold',
  },
});
