import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

type TimelineTab = 'Day' | 'Week' | 'Month' | 'Year';

export default function PhysiologicalInsight() {
  const [selectedTab, setSelectedTab] = useState<TimelineTab>('Day');

  const timelineTabs: TimelineTab[] = ['Day', 'Week', 'Month', 'Year'];

  // Mock data for heart rate graph (24 hours)
  const heartRateData = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    value: 74 + Math.random() * 66, // 74-140 range
  }));

  // Mock data for HRV graph
  const hrvData = Array.from({ length: 12 }, (_, i) => ({
    time: i * 2,
    value: 20 + Math.random() * 13, // 20-33 range
  }));

  // Mock data for activity timeline
  const activityData = [
    { type: 'Sedentary', hours: '0-6h', percentage: 25, color: '#64748b' },
    { type: 'Light Active', hours: '6-12h', percentage: 40, color: '#f59e0b' },
    { type: 'Fair Active', hours: '12-18h', percentage: 20, color: '#3b82f6' },
    { type: 'Very Active', hours: '18-24h', percentage: 15, color: '#10b981' },
  ];

  // Mock data for sleep stages
  const sleepStages = [
    { stage: 'Awake', duration: 43, color: '#ef4444', percentage: 9 },
    { stage: 'REM', duration: 90, color: '#f59e0b', percentage: 19 },
    { stage: 'Light', duration: 204, color: '#3b82f6', percentage: 43 },
    { stage: 'Deep', duration: 137, color: '#10b981', percentage: 29 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="stats-chart" size={24} color="#5DADE2" />
        </View>
        <Text style={styles.headerTitle}>Menu - Insight</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Timeline Controls */}
        <View style={styles.timelineContainer}>
          {timelineTabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, selectedTab === tab && styles.tabButtonActive]}
              onPress={() => setSelectedTab(tab)}>
              <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Note about timeline */}
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>
            For Now, we complete daily scoring and then in the next step I will update you for the
            weekly, Monthly and yearly, each of those box are dedicated scoring. User should scroll
            over.
          </Text>
        </View>

        {/* Heart Beat Section */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <View style={styles.metricTitleRow}>
              <Ionicons name="heart" size={24} color="#ef4444" />
              <Text style={styles.metricTitle}>Heart Beat</Text>
            </View>
          </View>
          <Text style={styles.metricRange}>74—140 bpm</Text>
          <Text style={styles.metricSubtext}>Max. 140 bpm in der Zone „intensiv"</Text>
          
          {/* Heart Rate Graph */}
          <View style={styles.graphContainer}>
            <View style={styles.graphYAxis}>
              <Text style={styles.axisLabel}>140</Text>
              <Text style={styles.axisLabel}>129</Text>
              <Text style={styles.axisLabel}>118</Text>
            </View>
            <View style={styles.graphArea}>
              {/* Simple line graph representation */}
              <View style={styles.graphLine}>
                {heartRateData.map((point, index) => (
                  <View
                    key={index}
                    style={[
                      styles.graphPoint,
                      { bottom: `${((point.value - 74) / 66) * 100}%` },
                    ]}
                  />
                ))}
              </View>
              <View style={styles.graphXAxis}>
                {[0, 6, 12, 18, 24].map((hour) => (
                  <Text key={hour} style={styles.axisLabel}>
                    {hour}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#cbd5e1' }]} />
              <Text style={styles.legendText}>Leicht</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#3b82f6' }]} />
              <Text style={styles.legendText}>Mäßig</Text>
            </View>
          </View>
        </View>

        {/* Heart Variability Section */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <View style={styles.metricTitleRow}>
              <Ionicons name="pulse" size={24} color="#ef4444" />
              <Text style={styles.metricTitle}>Heart Variability</Text>
            </View>
          </View>
          <Text style={styles.metricScore}>24 ms (m Schnitt)</Text>
          <Text style={styles.metricSubtext}>Alle Werte im persönlichen Bereich</Text>
          
          {/* HRV Graph */}
          <View style={styles.hrvGraphContainer}>
            <View style={styles.hrvGraphArea}>
              {hrvData.map((point, index) => {
                const heightPercentage = Math.min(Math.max(((point.value - 20) / 13) * 100, 20), 100);
                return (
                  <View
                    key={index}
                    style={[
                      styles.hrvBar,
                      { height: `${heightPercentage}%` },
                    ]}
                  />
                );
              })}
            </View>
            <View style={styles.graphXAxis}>
              {[0, 6, 12, 18].map((hour) => (
                <Text key={hour} style={styles.axisLabel}>
                  {hour}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#10b981' }]} />
              <Text style={styles.legendText}>Persönlicher Bereich</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#3b82f6' }]} />
              <Text style={styles.legendText}>Im Bereich</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#cbd5e1' }]} />
              <Text style={styles.legendText}>Außerhalb des Bereichs</Text>
            </View>
          </View>
        </View>

        {/* Skin Temperature - Coming Soon */}
        <View style={styles.comingSoonCard}>
          <View style={styles.metricTitleRow}>
            <Ionicons name="thermometer" size={24} color="#ef4444" />
            <Text style={styles.metricTitle}>Skin Temperature</Text>
          </View>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>

        {/* Blood Pressure & SpO2 - Coming Soon */}
        <View style={styles.comingSoonCard}>
          <View style={styles.metricTitleRow}>
            <Ionicons name="fitness" size={24} color="#5DADE2" />
            <Text style={styles.metricTitle}>Blood Pressure & SpO2</Text>
          </View>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>

        {/* Sleep Insight Section */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <View style={styles.metricTitleRow}>
              <Ionicons name="bed" size={24} color="#5DADE2" />
              <Text style={styles.metricTitle}>Sleep Insight</Text>
            </View>
          </View>
          <Text style={styles.sleepDuration}>7h 34m</Text>
          <Text style={styles.sleepTime}>11:53 PM — 7:04 AM</Text>
          <Text style={styles.metricSubtext}>No sleep schedule set</Text>
          
          {/* Sleep Stages */}
          <View style={styles.sleepStagesContainer}>
            {sleepStages.map((stage, index) => (
              <View key={index} style={styles.sleepStageRow}>
                <Text style={styles.sleepStageName}>{stage.stage} • {stage.duration} min</Text>
                <View style={styles.sleepStageBar}>
                  <View
                    style={[
                      styles.sleepStageBarFill,
                      { width: `${stage.percentage}%`, backgroundColor: stage.color },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>

          {/* Sleep Timeline */}
          <View style={styles.sleepTimelineContainer}>
            <View style={styles.sleepTimeline}>
              <View style={[styles.sleepBlock, { width: '9%', backgroundColor: '#ef4444' }]} />
              <View style={[styles.sleepBlock, { width: '19%', backgroundColor: '#f59e0b' }]} />
              <View style={[styles.sleepBlock, { width: '43%', backgroundColor: '#3b82f6' }]} />
              <View style={[styles.sleepBlock, { width: '29%', backgroundColor: '#10b981' }]} />
            </View>
            <View style={styles.sleepTimeLabels}>
              <Text style={styles.timeLabel}>11:53 PM</Text>
              <Text style={styles.timeLabel}>3:28 AM</Text>
              <Text style={styles.timeLabel}>7:04 AM</Text>
            </View>
          </View>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>

        {/* Activity Insight Section */}
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <View style={styles.metricTitleRow}>
              <Ionicons name="walk" size={24} color="#1e293b" />
              <Text style={styles.metricTitle}>Activity Insight</Text>
            </View>
          </View>
          <Text style={styles.activityScore}>Score</Text>
          <Text style={styles.activityScoreValue}>X/100</Text>
          
          {/* Activity Timeline Graph - Placeholder */}
          <View style={styles.activityGraphContainer}>
            <View style={styles.activityGraphPlaceholder}>
              <Text style={styles.placeholderText}>Daily Timeline</Text>
            </View>
          </View>
          
          {/* Activity Legend */}
          <View style={styles.activityLegend}>
            {activityData.map((item, index) => (
              <View key={index} style={styles.activityLegendItem}>
                <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                <Text style={styles.legendText}>{item.type}</Text>
                <Text style={styles.legendText}>Xh Ymin</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Electrodermal Activity - Coming Soon */}
        <View style={styles.comingSoonCard}>
          <View style={styles.metricTitleRow}>
            <Ionicons name="flash" size={24} color="#5DADE2" />
            <Text style={styles.metricTitle}>Electrodermal activity</Text>
          </View>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A3D9F0',
    padding: 16,
    gap: 12,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  container: {
    flex: 1,
  },
  // Timeline Controls
  timelineContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
    backgroundColor: '#A3D9F0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#64748b',
    borderStyle: 'dashed',
  },
  tabButtonActive: {
    backgroundColor: '#ffffff',
    borderColor: '#5DADE2',
    borderStyle: 'solid',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
  },
  tabTextActive: {
    color: '#5DADE2',
  },
  // Note Container
  noteContainer: {
    backgroundColor: '#A3D9F0',
    padding: 16,
    paddingTop: 0,
  },
  noteText: {
    fontSize: 13,
    color: '#1e293b',
    lineHeight: 20,
    textAlign: 'center',
  },
  // Metric Cards
  metricCard: {
    margin: 16,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#5DADE2',
    borderStyle: 'dashed',
  },
  metricHeader: {
    marginBottom: 12,
  },
  metricTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metricTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5DADE2',
  },
  metricRange: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  metricScore: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  metricSubtext: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 16,
  },
  // Graph Containers
  graphContainer: {
    flexDirection: 'row',
    height: 200,
    marginBottom: 12,
  },
  graphYAxis: {
    width: 40,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  graphArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 8,
    position: 'relative',
  },
  graphLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  graphPoint: {
    width: 3,
    height: 3,
    backgroundColor: '#3b82f6',
    borderRadius: 1.5,
    position: 'absolute',
  },
  graphXAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  axisLabel: {
    fontSize: 11,
    color: '#64748b',
  },
  // HRV Graph
  hrvGraphContainer: {
    marginBottom: 12,
  },
  hrvGraphArea: {
    height: 150,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    gap: 6,
  },
  hrvBar: {
    flex: 1,
    backgroundColor: '#3b82f6',
    borderRadius: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    minHeight: 30,
    maxWidth: 24,
  },
  // Legend
  legendRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#64748b',
  },
  // Coming Soon Cards
  comingSoonCard: {
    margin: 16,
    marginTop: 0,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#5DADE2',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ef4444',
    marginTop: 12,
  },
  // Sleep Insight
  sleepDuration: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  sleepTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5DADE2',
    marginBottom: 4,
  },
  sleepStagesContainer: {
    marginVertical: 16,
    gap: 12,
  },
  sleepStageRow: {
    gap: 8,
  },
  sleepStageName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  sleepStageBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  sleepStageBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  sleepTimelineContainer: {
    marginTop: 16,
    marginBottom: 12,
  },
  sleepTimeline: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  sleepBlock: {
    height: '100%',
  },
  sleepTimeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeLabel: {
    fontSize: 11,
    color: '#64748b',
  },
  // Activity Insight
  activityScore: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5DADE2',
    marginBottom: 4,
  },
  activityScoreValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  activityGraphContainer: {
    marginBottom: 16,
  },
  activityGraphPlaceholder: {
    height: 200,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  activityLegend: {
    gap: 8,
  },
  activityLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
