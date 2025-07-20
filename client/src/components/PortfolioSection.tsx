import StockTable from "./StockTable";

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

interface ETFData {
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
}

interface PortfolioSectionProps {
  title: string;
  headerClass: string;
  stocks: StockData[];
  etfs?: ETFData[];
  showStrategy?: boolean;
  showAccountSummary?: boolean;
}

export default function PortfolioSection({ 
  title, 
  headerClass, 
  stocks, 
  etfs, 
  showStrategy, 
  showAccountSummary 
}: PortfolioSectionProps) {
  return (
    <div className="portfolio-section">
      <div className={`portfolio-header ${headerClass}`}>
        <h2>{title}</h2>
        {showStrategy && (
          <div className="trading-strategy">
            <div className="strategy-item">
              <span className="label">慎選標的，伺機出手！設定目標，紀律操作！</span>
            </div>
            <div className="strategy-grid">
              <div className="strategy-column">
                <div className="strategy-title">短線出場時機</div>
                <div className="strategy-content">
                  <p>波段報酬率達10%~20%</p>
                  <p>單日大漲7%~8%</p>
                </div>
              </div>
              <div className="strategy-column">
                <div className="strategy-title">跌破均線</div>
                <div className="strategy-content">
                  <p>法人減碼</p>
                  <p>BK</p>
                </div>
              </div>
              <div className="strategy-column">
                <div className="strategy-title">預定報酬達5%以上</div>
                <div className="strategy-content">
                  <p>Snow Ball</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <StockTable stocks={stocks} />

      {showAccountSummary && (
        <div className="account-summary">
          <div className="summary-box">
            <div className="summary-row">
              <span className="label">001120***0961銀行餘額</span>
              <span className="value">158</span>
              <span className="label">Andy富翁市值</span>
              <span className="value">535,712</span>
            </div>
            <div className="summary-row">
              <span className="label">CD129700</span>
              <span className="value"></span>
              <span className="label">Yuyi富翁市值</span>
              <span className="value">1,924,302</span>
            </div>
          </div>

          <div className="financial-summary">
            <div className="summary-row">
              <span className="label">核帳日</span>
              <span className="value">2025/4/14</span>
              <span className="label">可用現金</span>
              <span className="value"></span>
            </div>
            <div className="summary-row">
              <span className="label">現金餘額</span>
              <span className="value">64,538</span>
              <span className="value">64,538</span>
              <span className="label">損益</span>
              <span className="label">績效</span>
              <span className="label">資金流出</span>
              <span className="value">138,032</span>
            </div>
            <div className="summary-row">
              <span className="label">證券+現金</span>
              <span className="value">1,988,840</span>
              <span className="value">40,436</span>
              <span className="value profit">2.10%</span>
              <span className="label">資金回收</span>
              <span className="value">153,961</span>
            </div>
          </div>
        </div>
      )}

      {etfs && etfs.length > 0 && (
        <div className="etf-section">
          <h3>ETF持股明細</h3>
          <table className="portfolio-table">
            <thead>
              <tr>
                <th>代號</th>
                <th>ETF</th>
                <th>股數</th>
                <th>成本價</th>
                <th>成本</th>
                <th>收盤價</th>
                <th>市值</th>
                <th>未實現盈虧</th>
                <th>盈虧率</th>
              </tr>
            </thead>
            <tbody>
              {etfs.map((etf, index) => (
                <tr key={index}>
                  <td>{etf.code}</td>
                  <td>{etf.name}</td>
                  <td>{etf.shares.toLocaleString()}</td>
                  <td>{etf.costPrice.toFixed(2)}</td>
                  <td>{etf.cost.toLocaleString()}</td>
                  <td className={etf.closePrice < etf.costPrice ? "loss" : "profit"}>
                    {etf.closePrice.toFixed(2)}
                  </td>
                  <td>{etf.marketValue.toLocaleString()}</td>
                  <td className={etf.unrealizedPnL < 0 ? "loss" : "profit"}>
                    {etf.unrealizedPnL.toLocaleString()}
                  </td>
                  <td className={etf.returnRate.includes("-") ? "loss" : "profit"}>
                    {etf.returnRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
