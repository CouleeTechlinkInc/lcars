import React from 'react';
import { useSemanticColor, useSemanticColors } from '../../providers/theme/useSemanticColor';
import { useTheme } from '../../providers/theme/theme';

export const TestSemanticColors: React.FC = () => {
  const theme = useTheme();
  
  // Test single semantic color
  const framePrimaryColor = useSemanticColor('frame.primary');
  const actionPrimaryColor = useSemanticColor('action.primary');
  const statusSuccessColor = useSemanticColor('status.success');
  
  // Test multiple semantic colors
  const colors = useSemanticColors({
    navItem: 'navigation.item',
    navActive: 'navigation.itemActive',
    contentPrimary: 'content.primary',
    bgBase: 'background.base'
  });
  
  // Test backward compatibility with deprecated colors
  const mainColor = useSemanticColor('main', 'TestSemanticColors');
  const eveningColor = useSemanticColor('evening', 'TestSemanticColors');
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: colors.bgBase,
      color: colors.contentPrimary,
      fontFamily: theme.typography.fontFamily,
      minHeight: '400px'
    }}>
      <h2 style={{ color: framePrimaryColor, marginBottom: '20px' }}>
        Testing Semantic Color Hooks
      </h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: actionPrimaryColor }}>Single Color Hook</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ColorBlock color={framePrimaryColor} label="frame.primary" />
          <ColorBlock color={actionPrimaryColor} label="action.primary" />
          <ColorBlock color={statusSuccessColor} label="status.success" />
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: actionPrimaryColor }}>Multiple Colors Hook</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ColorBlock color={colors.navItem} label="navigation.item" />
          <ColorBlock color={colors.navActive} label="navigation.itemActive" />
          <ColorBlock color={colors.contentPrimary} label="content.primary" />
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: actionPrimaryColor }}>Deprecated Colors (Check Console)</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ColorBlock color={mainColor} label="main (deprecated)" />
          <ColorBlock color={eveningColor} label="evening (deprecated)" />
        </div>
      </div>
      
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: theme.colors.semantic.background.elevated,
        borderRadius: '8px',
        border: `2px solid ${theme.colors.semantic.frame.divider}`
      }}>
        <h4 style={{ color: theme.colors.semantic.content.heading, marginBottom: '10px' }}>
          Current Theme: {theme.variant}
        </h4>
        <p style={{ color: theme.colors.semantic.content.secondary }}>
          This component demonstrates the use of semantic color hooks.
          Check the browser console for deprecation warnings when using old color names.
        </p>
      </div>
    </div>
  );
};

// Helper component to display color blocks
const ColorBlock: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{
      width: '100px',
      height: '60px',
      backgroundColor: color,
      border: '2px solid #444',
      borderRadius: '4px',
      marginBottom: '8px'
    }} />
    <div style={{ fontSize: '12px', marginBottom: '4px' }}>{label}</div>
    <div style={{ fontSize: '10px', fontFamily: 'monospace', opacity: 0.7 }}>{color}</div>
  </div>
);