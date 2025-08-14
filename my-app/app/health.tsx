import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const HEALTH_OPTIONS = [
  { id: 'no', label: 'No', icon: '✓' },
  { id: 'acute_diarrhea', label: 'Acute diarrhea', icon: '🏃' },
  { id: 'constipation', label: 'Constipation', icon: '🧱' },
  { id: 'lactose_intolerance', label: 'Lactose intolerance', icon: '🥛' },
  { id: 'high_blood_pressure', label: 'High blood pressure', icon: '❤️' },
  { id: 'others', label: 'Others', icon: '💬' },
];


export default function HealthProblemsScreen() {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectOption = (optionId: string) => {
    if (optionId === 'no') {
      setSelectedOptions(selectedOptions.includes('no') ? [] : ['no']);
    } else {
      let newSelection = [...selectedOptions];
      newSelection = newSelection.filter(id => id !== 'no');

      if (newSelection.includes(optionId)) {
        newSelection = newSelection.filter(id => id !== optionId);
      } else {
        newSelection.push(optionId);
      }
      setSelectedOptions(newSelection);
    }
  };

  const handleContinue = () => {
    if (selectedOptions.length === 0) return;
    router.push('/summary');
  };

  const handleBack = () => {
    router.back();
  };

  const handleViewSummary = () => {
    router.push('/summary');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.header}>
        <Text style={styles.logoText}>
          <Text style={styles.logoBite}>BITE</Text>
          <Text style={styles.logoBuddy}>BUDDY</Text>
        </Text>
      </View>

      <Text style={styles.questionText}>
        Does your child have any health problems?
      </Text>

      <ScrollView style={styles.optionsList} contentContainerStyle={{ paddingBottom: 20 }}>
        {HEALTH_OPTIONS.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          return (
            <TouchableOpacity
              key={option.id}
              style={[styles.optionButton, isSelected && styles.optionButtonSelected]}
              onPress={() => handleSelectOption(option.id)}
            >
              <View style={styles.optionContent}>
                <Text style={styles.optionIcon}>{option.icon}</Text>
                <Text style={styles.optionLabel}>{option.label}</Text>
              </View>
              {isSelected && option.id !== 'no' && <Text style={styles.checkIcon}>✓</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      
      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
  
        </View>

        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.continueButton, selectedOptions.length === 0 && styles.continueButtonDisabled]} 
          onPress={handleContinue}
          disabled={selectedOptions.length === 0}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
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
    marginBottom: 30,
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
  questionText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  optionsList: {
    width: '100%',
    paddingHorizontal: 30,
  },
  optionButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  optionButtonSelected: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  checkIcon: {
    fontSize: 20,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: height * 0.05,
    paddingTop: 10,
    backgroundColor: '#FFFFFF'
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
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
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


