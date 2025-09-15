export interface CellValue {
  value: string | number | null;
  formula?: string;
  format?: CellFormat;
  style?: CellStyle;
}

export interface CellFormat {
  type: 'text' | 'number' | 'currency' | 'percentage' | 'date';
  precision?: number;
  currency?: string;
  prefix?: string;
  suffix?: string;
}

export interface CellStyle {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right';
  border?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    color?: string;
    width?: number;
  };
}

export interface CellPosition {
  row: number;
  col: number;
}

export interface CellRange {
  start: CellPosition;
  end: CellPosition;
}

export interface Sheet {
  id: string;
  name: string;
  data: CellValue[][];
  mergedCells?: CellRange[];
  selectedCell?: CellPosition;
  activeRange?: CellRange;
}

export interface SpreadsheetState {
  sheets: Sheet[];
  activeSheetId: string;
  isLoading: boolean;
  error?: string;
}

export interface FormulaError {
  type: 'DIV/0!' | 'REF!' | 'NAME?' | 'VALUE!' | 'NUM!' | 'N/A!';
  message: string;
}

export interface FinancialStatementData {
  balanceSheet: {
    assets: {
      currentAssets: Record<string, number>;
      fixedAssets: Record<string, number>;
      totalAssets: number;
    };
    liabilities: {
      currentLiabilities: Record<string, number>;
      longTermDebt: Record<string, number>;
      totalLiabilities: number;
    };
    equity: Record<string, number>;
    totalEquity: number;
  };
  incomeStatement: {
    revenue: Record<string, number>;
    expenses: Record<string, number>;
    grossProfit: number;
    operatingIncome: number;
    netIncome: number;
  };
  cashFlow: {
    operating: Record<string, number>;
    investing: Record<string, number>;
    financing: Record<string, number>;
    netCashFlow: number;
  };
  ratios: {
    liquidity: Record<string, number>;
    profitability: Record<string, number>;
    efficiency: Record<string, number>;
    leverage: Record<string, number>;
  };
}

export interface ToolbarAction {
  id: string;
  label: string;
  icon: string;
  action: () => void;
  disabled?: boolean;
}

export interface SidePanelProps {
  selectedCell?: CellPosition;
  cellValue?: CellValue;
  onValueChange: (value: CellValue) => void;
  onFormatChange: (format: CellFormat) => void;
  onStyleChange: (style: CellStyle) => void;
}
