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
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function SignUpScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp.");
      return;
    }

    if (!agreeToTerms) {
      Alert.alert("Lỗi", "Vui lòng đồng ý với điều khoản sử dụng.");
      return;
    }

    // Thêm logic đăng ký tại đây (ví dụ: gọi API, Firebase Auth)
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    Alert.alert("Đăng ký", "Tài khoản đã được tạo thành công!");
    
    // Sau khi đăng ký thành công, chuyển đến onboarding
    router.push('/onboarding');
  };

  const handleBackToLogin = () => {
    router.push('/login');
  };

  const toggleAgreeToTerms = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.logoText}>
              <Text style={styles.logoBite}>BITE</Text>
              <Text style={styles.logoBuddy}>BUDDY</Text>
            </Text>
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join BiteBuddy to start your journey</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter your full name"
                placeholderTextColor="#B0B0B0"
                autoCapitalize="words"
              />
            </View>

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

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#B0B0B0"
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="••••••••"
                placeholderTextColor="#B0B0B0"
                secureTextEntry
              />
            </View>

            <View style={styles.termsContainer}>
              <TouchableOpacity style={styles.checkboxContainer} onPress={toggleAgreeToTerms}>
                <View style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}>
                  {agreeToTerms && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.termsText}>
                  I agree to the <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
                  <Text style={styles.termsLink}>Privacy Policy</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[
              styles.signUpButton, 
              (!fullName || !email || !password || !confirmPassword || !agreeToTerms) && styles.signUpButtonDisabled
            ]}
            onPress={handleSignUp}
            disabled={!fullName || !email || !password || !confirmPassword || !agreeToTerms}
          >
            <Text style={styles.signUpButtonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginContainer} onPress={handleBackToLogin}>
            <Text style={styles.loginText}>
              Already have an account? <Text style={styles.loginLink}>Log In</Text>
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
  },
  scrollContent: {
    flexGrow: 1,
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
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
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
  termsContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#DCDCDC',
    borderRadius: 4,
    marginRight: 12,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#00C49A',
    borderColor: '#00C49A',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
    lineHeight: 20,
  },
  termsLink: {
    color: '#5E9CFF',
    fontWeight: '600',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: height * 0.05,
    paddingTop: 20,
  },
  signUpButton: {
    backgroundColor: '#00C49A',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  signUpButtonText: {
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
