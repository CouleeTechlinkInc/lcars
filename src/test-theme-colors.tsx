import React from 'react';
import { useTheme } from './providers/theme/theme';
import { getThemeColor } from './providers/theme/theme.utils';

export const TestThemeColors: React.FC = () => {
  const theme = useTheme();
  
  console.log('=== THEME COLOR TEST RESULTS ===');
  
  // Test 1: Legacy color access
  console.log('\n1. LEGACY COLOR ACCESS (Backward Compatibility):');
  console.log('theme.colors.main:', theme.colors.main);
  console.log('theme.colors.alt1:', theme.colors.alt1);
  console.log('theme.colors.alt2:', theme.colors.alt2);
  console.log('theme.color.main:', theme.color.main);
  console.log('theme.color.alt1:', theme.color.alt1);
  console.log('theme.color.alt2:', theme.color.alt2);
  
  // Test 2: New LCARS color access
  console.log('\n2. NEW LCARS COLOR ACCESS:');
  console.log('theme.colors.lcars.evening:', theme.colors.lcars.evening);
  console.log('theme.colors.lcars.honey:', theme.colors.lcars.honey);
  console.log('theme.colors.lcars.cool:', theme.colors.lcars.cool);
  console.log('theme.color.evening:', theme.color.evening);
  console.log('theme.color.honey:', theme.color.honey);
  console.log('theme.color.cool:', theme.color.cool);
  
  // Test 3: Semantic color access
  console.log('\n3. SEMANTIC COLOR ACCESS:');
  console.log('theme.colors.semantic.frame.primary:', theme.colors.semantic.frame.primary);
  console.log('theme.colors.semantic.status.success:', theme.colors.semantic.status.success);
  console.log('theme.colors.semantic.action.primary:', theme.colors.semantic.action.primary);
  
  // Test 4: getThemeColor helper
  console.log('\n4. getThemeColor HELPER FUNCTION:');
  console.log("getThemeColor(theme, 'main'):", getThemeColor(theme, 'main'));
  console.log("getThemeColor(theme, 'evening'):", getThemeColor(theme, 'evening'));
  console.log("getThemeColor(theme, 'gold-pressed-latinum'):", getThemeColor(theme, 'gold-pressed-latinum'));
  
  // Test 5: Check if all LCARS colors are available
  console.log('\n5. LCARS COLOR COUNT:');
  console.log('Total LCARS colors:', Object.keys(theme.colors.lcars).length);
  console.log('Total colors in theme.color:', Object.keys(theme.color).length);
  
  console.log('\n=== END OF TEST RESULTS ===');
  
  return (
    <div style={{ padding: '20px', color: theme.colors.text.primary }}>
      <h1>Theme Color Test Component</h1>
      <p>Check the browser console for detailed test results.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Visual Test</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ 
            padding: '10px 20px', 
            backgroundColor: theme.colors.main,
            color: '#000'
          }}>
            Legacy Main: {theme.colors.main}
          </div>
          <div style={{ 
            padding: '10px 20px', 
            backgroundColor: theme.colors.lcars.evening,
            color: '#fff'
          }}>
            LCARS Evening: {theme.colors.lcars.evening}
          </div>
          <div style={{ 
            padding: '10px 20px', 
            backgroundColor: theme.colors.semantic.status.success,
            color: '#000'
          }}>
            Semantic Success: {theme.colors.semantic.status.success}
          </div>
        </div>
      </div>
    </div>
  );
};