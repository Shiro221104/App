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

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }
    // Thêm logic xác thực đăng nhập tại đây (ví dụ: gọi API, Firebase Auth)
    console.log("Email:", email);
    console.log("Password:", password);
    Alert.alert("Đăng nhập", "Logic đăng nhập sẽ được xử lý ở đây.");
    // Sau khi đăng nhập thành công, chuyển đến onboarding
    router.push('/onboarding');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };
  
  const handleForgotPassword = () => {
    router.push('/forgot-password');
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
          <Text style={styles.title}>Welcome Back!</Text>
          
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
             <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[styles.loginButton, (!email || !password) && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={!email || !password}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpContainer} onPress={handleSignUp}>
            <Text style={styles.signUpText}>
              Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
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
    paddingTop: height * 0.1,
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 8,
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
  forgotPasswordText: {
    textAlign: 'right',
    color: '#5E9CFF',
    fontWeight: '600',
    marginTop: 10,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: height * 0.05,
  },
  loginButton: {
    backgroundColor: '#A2D2FF',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#666666',
  },
  signUpLink: {
    color: '#5E9CFF',
    fontWeight: 'bold',
  },
});
