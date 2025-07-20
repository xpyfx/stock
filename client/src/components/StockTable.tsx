interface StockData {
  code: string;
  name: string;
  shares: number;
  costPrice: number;
  cost: number;
  closePrice: number;
  marketValue: number;
  unrealizedPnL: number;
  realizedPnL?: number;
  returnRate: string;
  dividend?: number;
  dividendTotal?: number;
  exDividendDate?: string;
  dividendDate?: string;
}

interface StockTableProps {
  stocks: StockData[];
}

export default function StockTable({ stocks }: StockTableProps) {
  return (
    <table className="portfolio-table">
      <thead>
        <tr>
          <th>代號</th>
          <th>股票</th>
          <th>股數</th>
          <th>成本價</th>
          <th>成本</th>
          <th>收盤價</th>
          <th>市值</th>
          <th>未實現盈虧</th>
          <th>已實現盈虧</th>
          <th>盈虧率</th>
          <th>股息@</th>
          <th>近期股息總額</th>
          <th>除權/息日</th>
          <th>入權/息日</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => {
          // Add spacer row after index 4 for Yuyi's layout
          const showSpacer = index === 4;
          
          return (
            <>
              <tr key={index}>
                <td>{stock.code}</td>
                <td>{stock.name}</td>
                <td>{stock.shares.toLocaleString()}</td>
                <td>{stock.costPrice > 0 ? stock.costPrice.toFixed(2) : "0"}</td>
                <td>{stock.cost.toLocaleString()}</td>
                <td className={stock.closePrice < stock.costPrice ? "loss" : "profit"}>
                  {stock.closePrice.toFixed(2)}
                </td>
                <td>{stock.marketValue.toLocaleString()}</td>
                <td className={stock.unrealizedPnL < 0 ? "loss" : "profit"}>
                  {stock.unrealizedPnL.toLocaleString()}
                </td>
                <td>{stock.realizedPnL ? stock.realizedPnL.toLocaleString() : ""}</td>
                <td className={stock.returnRate.includes("-") ? "loss" : stock.returnRate === "股子" ? "" : "profit"}>
                  {stock.returnRate}
                </td>
                <td>{stock.dividend ? stock.dividend.toString() : "-"}</td>
                <td>{stock.dividendTotal ? stock.dividendTotal.toLocaleString() : ""}</td>
                <td>{stock.exDividendDate || ""}</td>
                <td>{stock.dividendDate || ""}</td>
              </tr>
              {showSpacer && (
                <tr className="spacer-row">
                  <td colSpan={14}></td>
                </tr>
              )}
            </>
          );
        })}
      </tbody>
    </table>
  );
}
