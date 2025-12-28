import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  Landing: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
};

export default function LandingPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(30));
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const features = [
    {
      icon: '🔷',
      title: 'Precision Control',
      description: 'Fine-tune stimulation parameters with medical-grade accuracy',
    },
    {
      icon: '📊',
      title: 'Real-Time Monitoring',
      description: 'Track your session data with live telemetry and analytics',
    },
    {
      icon: '🔐',
      title: 'Safety First',
      description: 'Built-in safety protocols and automatic monitoring systems',
    },
    {
      icon: '📱',
      title: 'Seamless Connection',
      description: 'Quick Bluetooth pairing with your stimulation devices',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle={currentPage === 0 ? "light-content" : "dark-content"} backgroundColor={currentPage === 0 ? "#1e40af" : "transparent"} />

      <PagerView style={styles.pager} initialPage={0} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
        <View style={styles.page} key="1">
          <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} bounces={true}>
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <Animated.View
                style={[
                  styles.heroContent,
                  {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }],
                  },
                ]}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                  <View style={styles.logoCircle}>
                    <Text style={styles.logoIcon}>⚡</Text>
                  </View>
                  <Text style={styles.logoText}>AudioStim Pro</Text>
                </View>

                {/* Hero Title */}
                <Text style={styles.heroTitle}>Professional Audio{'\n'}Stimulation Therapy</Text>

                <Text style={styles.heroSubtitle}>
                  Advanced neurostimulation technology for medical professionals and researchers
                </Text>

                {/* Device Mockup */}
                <View style={styles.heroImageContainer}>
                  <View style={styles.deviceFrame}>
                    <View style={styles.deviceScreen}>
                      <View style={styles.screenBar} />
                      <View style={styles.screenContent}>
                        <View style={styles.waveform}>
                          {[30, 50, 70, 55, 80, 45, 65, 40, 60].map((h, i) => (
                            <View key={i} style={[styles.waveBar, { height: h }]} />
                          ))}
                        </View>
                        <Text style={styles.deviceLabel}>Live Session</Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* CTA Buttons */}
                <View style={styles.ctaContainer}>
                  <TouchableOpacity
                    style={styles.primaryButton}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.primaryButtonText}>Get Started</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={styles.secondaryButton}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.secondaryButtonText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.page} key="2">
          <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} bounces={true}>
            {/* Header */}
            <View style={styles.pageHeader}>
              <Text style={styles.pageHeaderTitle}>Why Choose Us</Text>
              <Text style={styles.pageHeaderSubtitle}>Trusted by medical professionals worldwide</Text>
            </View>

            {/* Stats Section */}
            <View style={styles.statsSection}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>10K+</Text>
                <Text style={styles.statLabel}>Active Users</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>500K+</Text>
                <Text style={styles.statLabel}>Sessions</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>99.9%</Text>
                <Text style={styles.statLabel}>Uptime</Text>
              </View>
            </View>

            {/* Features Section */}
            <View style={styles.featuresSection}>
              <Text style={styles.sectionTitle}>Powerful Features</Text>
              <Text style={styles.sectionSubtitle}>
                Everything you need for professional audio therapy
              </Text>

              <View style={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <View key={index} style={styles.featureCard}>
                    <View style={styles.featureIconContainer}>
                      <Text style={styles.featureIcon}>{feature.icon}</Text>
                    </View>
                    <View style={styles.featureTextContent}>
                      <Text style={styles.featureTitle}>{feature.title}</Text>
                      <Text style={styles.featureDescription}>{feature.description}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Page Indicator */}
            <View style={styles.pageIndicator}>
              <View style={styles.pageIndicatorDot} />
              <View style={[styles.pageIndicatorDot, styles.pageIndicatorDotActive]} />
              <View style={styles.pageIndicatorDot} />
            </View>
          </ScrollView>
        </View>

        <View style={styles.page} key="3">
          <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} bounces={true}>
            {/* Header */}
            <View style={styles.pageHeader}>
              <Text style={styles.pageHeaderTitle}>Get Started</Text>
              <Text style={styles.pageHeaderSubtitle}>Simple setup in three easy steps</Text>
            </View>

            {/* How It Works Section */}
            <View style={styles.howItWorksSection}>
              <View style={styles.stepsContainer}>
                <View style={styles.stepItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>1</Text>
                  </View>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Connect Device</Text>
                    <Text style={styles.stepDescription}>
                      Pair via Bluetooth in seconds
                    </Text>
                  </View>
                </View>

                <View style={styles.stepConnector} />

                <View style={styles.stepItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>2</Text>
                  </View>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Configure Session</Text>
                    <Text style={styles.stepDescription}>
                      Set frequency, amplitude & duration
                    </Text>
                  </View>
                </View>

                <View style={styles.stepConnector} />

                <View style={styles.stepItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>3</Text>
                  </View>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Monitor & Analyze</Text>
                    <Text style={styles.stepDescription}>
                      Track real-time data and history
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* CTA Section */}
            <View style={styles.finalCtaSection}>
              <View style={styles.ctaCard}>
                <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
                <Text style={styles.ctaDescription}>
                  Join thousands of professionals using AudioStim Pro
                </Text>
                <TouchableOpacity
                  style={styles.ctaButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.ctaButtonText}>Create Free Account</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                © 2025 AudioStim Pro
              </Text>
              <Text style={styles.footerSubtext}>
                Medical-grade audio stimulation
              </Text>
              <View style={styles.footerLinks}>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Privacy</Text>
                </TouchableOpacity>
                <Text style={styles.footerDivider}>•</Text>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Terms</Text>
                </TouchableOpacity>
                <Text style={styles.footerDivider}>•</Text>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Support</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Page Indicator */}
            <View style={styles.pageIndicator}>
              <View style={styles.pageIndicatorDot} />
              <View style={styles.pageIndicatorDot} />
              <View style={[styles.pageIndicatorDot, styles.pageIndicatorDotActive]} />
            </View>
          </ScrollView>
        </View>
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e40af',
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
  },

  // Hero Section
  heroSection: {
    backgroundColor: '#1e40af',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  heroContent: {
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoIcon: {
    fontSize: 24,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 0.3,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 15,
    color: '#bfdbfe',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  heroImageContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  deviceFrame: {
    width: width * 0.5,
    height: width * 0.9,
    backgroundColor: '#0f172a',
    borderRadius: 28,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  deviceScreen: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 16,
    overflow: 'hidden',
  },
  screenBar: {
    height: 5,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    width: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  screenContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveform: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
    height: 80,
    marginBottom: 12,
  },
  waveBar: {
    width: 8,
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  deviceLabel: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ctaContainer: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#1e40af',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // Page Headers
  pageHeader: {
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: '#1e40af',
    alignItems: 'center',
  },
  pageHeaderTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  pageHeaderSubtitle: {
    fontSize: 15,
    color: '#bfdbfe',
    textAlign: 'center',
  },

  // Stats Section
  statsSection: {
    flexDirection: 'row',
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e40af',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '600',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#e5e7eb',
  },

  // Features Section
  featuresSection: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    backgroundColor: '#f8fafc',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  featureIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureIcon: {
    fontSize: 28,
  },
  featureTextContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },

  // How It Works Section
  howItWorksSection: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  stepsContainer: {
    marginTop: 24,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1e40af',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  stepNumberText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
  },
  stepContent: {
    flex: 1,
    paddingTop: 8,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 6,
  },
  stepDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  stepConnector: {
    width: 3,
    height: 32,
    backgroundColor: '#e5e7eb',
    marginLeft: 25,
    marginVertical: 8,
    borderRadius: 2,
  },

  // Final CTA Section
  finalCtaSection: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#f8fafc',
  },
  ctaCard: {
    backgroundColor: '#1e40af',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  ctaDescription: {
    fontSize: 15,
    color: '#bfdbfe',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  ctaButtonText: {
    color: '#1e40af',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // Footer
  footer: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#0f172a',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '600',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 20,
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  footerLink: {
    fontSize: 14,
    color: '#cbd5e1',
    fontWeight: '600',
  },
  footerDivider: {
    fontSize: 14,
    color: '#475569',
  },

  // Page Indicators
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    gap: 8,
    backgroundColor: '#f8fafc',
  },
  pageIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#cbd5e1',
  },
  pageIndicatorDotActive: {
    width: 24,
    backgroundColor: '#1e40af',
  },
});