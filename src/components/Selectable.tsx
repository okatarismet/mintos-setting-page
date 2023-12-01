import React, { Dispatch, SetStateAction } from 'react';
import { Selected } from './CurrencySelection';
import theme from '../theme';

interface SelectableProps {
  currency: string;
  variant: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<Selected>>;
}

const Selectable: React.FC<SelectableProps> = ({ currency, variant, selected, setSelected }) => {
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelected((prev) => ({ ...prev, [currency]: !prev[currency] }));
  };

  return (
    <button style={styles.container} onClick={handleSelect}>
      {currency}
      {variant === 'bottom' && (
        <div style={styles.bottomButton}>
          <input type="checkbox" checked={selected} readOnly />
        </div>
      )}
      {selected && variant === 'top' && (
        <button
          style={styles.topSelectedButton}
          onClick={handleSelect}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.light.colors.primary;
            e.currentTarget.style.color = theme.light.colors.dark;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.light.colors.dark;
            e.currentTarget.style.color = theme.light.colors.primary;
          }}
        >
          X
        </button>
      )}
    </button>
  );
};
const styles = {
  container: {
    backgroundColor: theme.light.colors.secondary,
    position: 'relative' as const,
    color: theme.light.colors.dark,
    marginBottom: 8,
    borderRadius: 5,
    flexBasis: '30%',
    padding: 8,
    cursor: 'pointer',
    width: '6vw',
  },
  topSelectedButton: {
    backgroundColor: theme.light.colors.dark,
    borderColor: theme.light.colors.primary,
    color: theme.light.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute' as const,
    cursor: 'pointer',
    display: 'flex',
    borderRadius: '50%',
    borderWidth: 2,
    fontSize: 10,
    height: 16,
    width: 16,
    right: -10,
    top: -10,
  },
  bottomButton: {
    position: 'absolute' as const,
    transform: 'translateY(-50%)',
    top: '50%',
    left: '5px',
  },
};
export default Selectable;
