import React, { useEffect } from 'react';
import theme from '../../theme';
import Selectable from '../Selectable';
import CurrencyServices from '../../api/currency-services';

interface CurrencyMap {
  [key: string]: boolean;
}
export interface Selected {
  [key: string]: boolean;
}
export default function Index() {
  const [selected, setSelected] = React.useState<Selected>({});

  useEffect(() => {
    CurrencyServices.fetchAllCurrencies().then((data: string[]) => {
      const map: CurrencyMap = {};
      data.map((currency: string) => {
        map[currency] = false;
      });
      setSelected(map);
    });
  }, []);
  return (
    <div style={styles.container}>
      <div style={styles.selectedContainer}>
        {Object.keys(selected)
          .filter((e: string) => selected[e] == true)
          .map((currency: string, i: number) => (
            <Selectable
              key={i}
              variant="top"
              currency={currency}
              selected={selected[currency]}
              setSelected={setSelected}
            />
          ))}
      </div>
      <div style={styles.selectableContainer}>
        {Object.keys(selected).map((currency: string, i: number) => (
          <Selectable
            key={i}
            variant="bottom"
            currency={currency}
            selected={selected[currency]}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    width: '50%',
    height: '50%',
    borderColor: theme.light.colors.dark,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'solid',
    padding: '2px 10px 2px 20px',
  },
  selectedContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    padding: 10,
    gap: 10,
  },
  selectableContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    padding: 10,
    gap: 10,
  },
};
