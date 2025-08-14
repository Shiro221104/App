import React from 'react';
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

export default function SummaryScreen() {
  const router = useRouter();

  // Mock data - in real app, this would come from context or navigation params
  const childInfo = {
    name: 'Alex',
    age: '5',
    height: '110',
    weight: '20.5',
    bmi: '16.9',
    dietary: ['Vegetarian', 'Gluten free'],
    health: ['No health problems']
  };

  const handleStartApp = () => {
    // Navigate to main app or dashboard
    router.push('/');
  };

  const handleEditInfo = () => {
    router.back();
  };

  const handleBack = () => {
    router.back();
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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Review Your Information</Text>
        <Text style={styles.subtitle}>Please review all the information before starting</Text>

        {/* Child Basic Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👶 Child Information</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name:</Text>
              <Text style={styles.infoValue}>{childInfo.name}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Age:</Text>
              <Text style={styles.infoValue}>{childInfo.age} years</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Height:</Text>
              <Text style={styles.infoValue}>{childInfo.height} cm</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Weight:</Text>
              <Text style={styles.infoValue}>{childInfo.weight} kg</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>BMI:</Text>
              <Text style={styles.infoValue}>{childInfo.bmi}</Text>
            </View>
          </View>
        </View>

        {/* Dietary Restrictions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🍽️ Dietary Preferences</Text>
          <View style={styles.infoCard}>
            {childInfo.dietary.length > 0 ? (
              childInfo.dietary.map((item, index) => (
                <View key={index} style={styles.infoRow}>
                  <Text style={styles.infoLabel}>•</Text>
                  <Text style={styles.infoValue}>{item}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noInfoText}>No dietary restrictions</Text>
            )}
          </View>
        </View>

        {/* Health Conditions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏥 Health Conditions</Text>
          <View style={styles.infoCard}>
            {childInfo.health.length > 0 ? (
              childInfo.health.map((item, index) => (
                <View key={index} style={styles.infoRow}>
                  <Text style={styles.infoLabel}>•</Text>
                  <Text style={styles.infoValue}>{item}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noInfoText}>No health conditions</Text>
            )}
          </View>
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerText}>
            📝 All information provided will be used to personalize your child's nutrition recommendations. 
            You can update this information anytime in the app settings.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton} onPress={handleStartApp}>
          <Text style={styles.startButtonText}>Start Using BiteBuddy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton} onPress={handleEditInfo}>
          <Text style={styles.editButtonText}>Edit Information</Text>
        </TouchableOpacity>

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
  },
  header: {
    marginTop: height * 0.05,
    alignItems: 'center',
    marginBottom: 20,
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F2F2F',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2F2F',
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#00C49A',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    width: 80,
  },
  infoValue: {
    fontSize: 16,
    color: '#2F2F2F',
    fontWeight: '600',
    flex: 1,
  },
  noInfoText: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
  },
  disclaimerContainer: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  disclaimerText: {
    fontSize: 14,
    color: '#1976D2',
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: height * 0.05,
    paddingTop: 20,
  },
  startButton: {
    backgroundColor: '#00C49A',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#00C49A',
  },
  editButtonText: {
    color: '#00C49A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A2D2FF',
  },
  backButtonText: {
    color: '#5E9CFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
