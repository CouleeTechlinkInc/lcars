import React from 'react';
import { useTheme, useThemeContext } from '../../providers/theme/theme';
import { getThemeColor } from '../../providers/theme/theme.utils';
import type { LCARSColorName, ThemeVariant } from '../../providers/theme/theme.types';

export const ColorShowcase: React.FC = () => {
  const theme = useTheme();
  const { variant, setVariant } = useThemeContext();
  
  const variants: ThemeVariant[] = ['voyager', 'tng', 'ds9', 'discovery'];
  
  // Group colors by category for better organization
  const colorGroups = {
    'Core Voyager': ['orange', 'mango', 'lilac', 'purple', 'brick', 'naples', 'paleBlue', 'skyBlue', 'bigBlue', 'gray'],
    'Extended Palette': ['evening', 'midnight', 'cool', 'honey', 'cardinal', 'tangerine', 'green', 'galaxy', 'ghost', 'moonshine', 'wheat', 'roseblush'],
    'Additional LCARS': ['mars', 'martian', 'ice', 'gold', 'peach', 'butterscotch', 'tomato', 'violet', 'african-violet', 'almond'],
    'More Colors': ['almond-creme', 'bluey', 'sky', 'sunflower', 'magenta', 'violet-creme', 'space-white', 'goldfinch', 'camel', 'candlelight'],
    'Final Set': ['evening-shade', 'dandelion', 'gold-pressed-latinum', 'rust', 'tamarillo', 'twilight', 'ocean', 'pacific', 'pumpkin', 'sage', 'sandy-desert', 'text-block', 'viol', 'wisteria']
  };
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      fontFamily: theme.typography.fontFamily,
    }}>
      <h1 style={{ color: theme.colors.text.primary, marginBottom: '30px' }}>
        LCARS Color Showcase - {variant.toUpperCase()} Theme
      </h1>
      
      {/* Theme Variant Switcher */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: theme.colors.text.secondary, marginBottom: '20px' }}>
          Theme Variants
        </h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              style={{
                padding: '10px 20px',
                backgroundColor: variant === v ? theme.colors.semantic.action.primary : theme.colors.semantic.action.secondary,
                color: variant === v ? theme.colors.semantic.content.inverse : theme.colors.semantic.content.primary,
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '16px',
                fontFamily: theme.typography.fontFamily,
                textTransform: 'uppercase',
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      
      {/* Test backward compatibility */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: theme.colors.text.secondary, marginBottom: '20px' }}>
          Legacy Color Access (Backward Compatibility)
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ColorSwatch color={theme.colors.main} name="main" />
          <ColorSwatch color={theme.colors.alt1} name="alt1" />
          <ColorSwatch color={theme.colors.alt2} name="alt2" />
        </div>
      </div>
      
      {/* Test semantic colors */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: theme.colors.text.secondary, marginBottom: '20px' }}>
          Semantic Color Access
        </h2>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Frame Colors</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.frame.primary} name="frame.primary" />
            <ColorSwatch color={theme.colors.semantic.frame.secondary} name="frame.secondary" />
            <ColorSwatch color={theme.colors.semantic.frame.accent} name="frame.accent" />
            <ColorSwatch color={theme.colors.semantic.frame.divider} name="frame.divider" />
            <ColorSwatch color={theme.colors.semantic.frame.corner} name="frame.corner" />
            <ColorSwatch color={theme.colors.semantic.frame.sidebar} name="frame.sidebar" />
            <ColorSwatch color={theme.colors.semantic.frame.topbar} name="frame.topbar" />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Interactive Elements</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.action.primary} name="action.primary" />
            <ColorSwatch color={theme.colors.semantic.action.primaryHover} name="action.primaryHover" />
            <ColorSwatch color={theme.colors.semantic.action.primaryActive} name="action.primaryActive" />
            <ColorSwatch color={theme.colors.semantic.action.secondary} name="action.secondary" />
            <ColorSwatch color={theme.colors.semantic.action.disabled} name="action.disabled" />
            <ColorSwatch color={theme.colors.semantic.action.focus} name="action.focus" />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Navigation</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.navigation.item} name="navigation.item" />
            <ColorSwatch color={theme.colors.semantic.navigation.itemHover} name="navigation.itemHover" />
            <ColorSwatch color={theme.colors.semantic.navigation.itemActive} name="navigation.itemActive" />
            <ColorSwatch color={theme.colors.semantic.navigation.itemDisabled} name="navigation.itemDisabled" />
            <ColorSwatch color={theme.colors.semantic.navigation.indicator} name="navigation.indicator" />
            <ColorSwatch color={theme.colors.semantic.navigation.breadcrumb} name="navigation.breadcrumb" />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Status & Alerts</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.status.info} name="status.info" />
            <ColorSwatch color={theme.colors.semantic.status.success} name="status.success" />
            <ColorSwatch color={theme.colors.semantic.status.warning} name="status.warning" />
            <ColorSwatch color={theme.colors.semantic.status.warningCritical} name="status.warningCritical" />
            <ColorSwatch color={theme.colors.semantic.status.error} name="status.error" />
            <ColorSwatch color={theme.colors.semantic.status.errorCritical} name="status.errorCritical" />
            <ColorSwatch color={theme.colors.semantic.status.neutral} name="status.neutral" />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Content & Typography</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.content.primary} name="content.primary" />
            <ColorSwatch color={theme.colors.semantic.content.secondary} name="content.secondary" />
            <ColorSwatch color={theme.colors.semantic.content.tertiary} name="content.tertiary" />
            <ColorSwatch color={theme.colors.semantic.content.inverse} name="content.inverse" />
            <ColorSwatch color={theme.colors.semantic.content.link} name="content.link" />
            <ColorSwatch color={theme.colors.semantic.content.heading} name="content.heading" />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Backgrounds & Surfaces</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.background.base} name="background.base" />
            <ColorSwatch color={theme.colors.semantic.background.elevated} name="background.elevated" />
            <ColorSwatch color={theme.colors.semantic.background.elevatedHigher} name="background.elevatedHigher" />
            <ColorSwatch color={theme.colors.semantic.background.depressed} name="background.depressed" />
            <ColorSwatch color={theme.colors.semantic.background.stripe} name="background.stripe" />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Data Visualization</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.data.series1} name="data.series1" />
            <ColorSwatch color={theme.colors.semantic.data.series2} name="data.series2" />
            <ColorSwatch color={theme.colors.semantic.data.series3} name="data.series3" />
            <ColorSwatch color={theme.colors.semantic.data.series4} name="data.series4" />
            <ColorSwatch color={theme.colors.semantic.data.series5} name="data.series5" />
            <ColorSwatch color={theme.colors.semantic.data.positive} name="data.positive" />
            <ColorSwatch color={theme.colors.semantic.data.negative} name="data.negative" />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: theme.colors.text.accent }}>Special LCARS Elements</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ColorSwatch color={theme.colors.semantic.lcars.sweep} name="lcars.sweep" />
            <ColorSwatch color={theme.colors.semantic.lcars.elbow} name="lcars.elbow" />
            <ColorSwatch color={theme.colors.semantic.lcars.pill} name="lcars.pill" />
            <ColorSwatch color={theme.colors.semantic.lcars.bracket} name="lcars.bracket" />
            <ColorSwatch color={theme.colors.semantic.lcars.terminal} name="lcars.terminal" />
            <ColorSwatch color={theme.colors.semantic.lcars.hologram} name="lcars.hologram" />
            <ColorSwatch color={theme.colors.semantic.lcars.alert} name="lcars.alert" />
            <ColorSwatch color={theme.colors.semantic.lcars.caution} name="lcars.caution" />
          </div>
        </div>
      </div>
      
      {/* Test getThemeColor helper */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: theme.colors.text.secondary, marginBottom: '20px' }}>
          getThemeColor Helper Function
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ColorSwatch color={getThemeColor(theme, 'evening')} name="getThemeColor(theme, 'evening')" />
          <ColorSwatch color={getThemeColor(theme, 'honey')} name="getThemeColor(theme, 'honey')" />
          <ColorSwatch color={getThemeColor(theme, 'cool')} name="getThemeColor(theme, 'cool')" />
        </div>
      </div>
      
      {/* Display all LCARS colors */}
      {Object.entries(colorGroups).map(([groupName, colors]) => (
        <div key={groupName} style={{ marginBottom: '40px' }}>
          <h2 style={{ color: theme.colors.text.secondary, marginBottom: '20px' }}>
            {groupName}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
            {colors.map((colorName) => (
              <ColorSwatch 
                key={colorName}
                color={theme.colors.lcars[colorName as LCARSColorName]} 
                name={colorName} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper component to display color swatches
const ColorSwatch: React.FC<{ color: string; name: string }> = ({ color, name }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  }}>
    <div style={{
      width: '120px',
      height: '60px',
      backgroundColor: color,
      border: '2px solid #444',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    }} />
    <div style={{ 
      color: '#88BBFF', 
      fontSize: '12px',
      textAlign: 'center',
      wordBreak: 'break-word',
    }}>
      {name}
    </div>
    <div style={{ 
      color: '#5588FF', 
      fontSize: '10px',
      fontFamily: 'monospace',
    }}>
      {color}
    </div>
  </div>
);