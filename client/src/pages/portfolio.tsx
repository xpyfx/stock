import PortfolioSection from "@/components/PortfolioSection";

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

interface FundData {
  date: string;
  shares: number;
  costPrice: number;
  cost: number;
  note?: string;
}

interface DividendSchedule {
  exDividendDate: string;
  dividendDate: string;
  shares: number;
  etf: string;
  amount: number;
  dividendPerShare: number;
  totalDividend?: number;
}

export default function Portfolio() {
  const yuyi: StockData[] = [
    {
      code: "919",
      name: "群益台灣精選高息(季)",
      shares: 65000,
      costPrice: 24.13,
      cost: 1568250,
      closePrice: 21.69,
      marketValue: 1409850,
      unrealizedPnL: -158400,
      realizedPnL: 2720,
      returnRate: "-10.10%"
    },
    {
      code: "895",
      name: "富邦未來車",
      shares: 9000,
      costPrice: 29.6,
      cost: 266385,
      closePrice: 31.07,
      marketValue: 279630,
      unrealizedPnL: 13245,
      returnRate: "5.00%"
    },
    {
      code: "1513",
      name: "中興電",
      shares: 1280,
      costPrice: 177.07,
      cost: 226645,
      closePrice: 164,
      marketValue: 209920,
      unrealizedPnL: -16725,
      realizedPnL: -571,
      returnRate: "-7.40%"
    },
    {
      code: "3663",
      name: "鑫科",
      shares: 380,
      costPrice: 75.43,
      cost: 28665,
      closePrice: 58.9,
      marketValue: 22382,
      unrealizedPnL: -6283,
      returnRate: "-21.90%",
      dividend: 0.4,
      dividendTotal: 152,
      exDividendDate: "2020/8/18"
    },
    {
      code: "3645",
      name: "達邁",
      shares: 50,
      costPrice: 78.76,
      cost: 3938,
      closePrice: 50.4,
      marketValue: 2520,
      unrealizedPnL: -1418,
      returnRate: "-36.00%",
      dividend: 1.1949
    },
    {
      code: "2881",
      name: "富邦金",
      shares: 3114,
      costPrice: 50.9,
      cost: 158500,
      closePrice: 84.4,
      marketValue: 262822,
      unrealizedPnL: 104322,
      returnRate: "65.80%",
      dividend: 4.25
    },
    {
      code: "2881",
      name: "富邦金 持股信託",
      shares: 27530,
      costPrice: 33.19,
      cost: 913841,
      closePrice: 84.4,
      marketValue: 2323532,
      unrealizedPnL: 1409691,
      returnRate: "股子",
      dividend: 0.25
    }
  ];

  const andyStocks: StockData[] = [
    {
      code: "2890",
      name: "永豐金",
      shares: 10639,
      costPrice: 0,
      cost: 0,
      closePrice: 25.65,
      marketValue: 272890,
      unrealizedPnL: 272890,
      realizedPnL: 61846,
      returnRate: "",
      dividend: 0.91,
      dividendTotal: 9681
    }
  ];

  const andyETFs: ETFData[] = [
    {
      code: "919",
      name: "群益台灣精選高息(季)",
      shares: 16000,
      costPrice: 22.42,
      cost: 358799,
      closePrice: 21.69,
      marketValue: 347040,
      unrealizedPnL: -11759,
      returnRate: "-3.30%"
    },
    {
      code: "50",
      name: "元大台灣50",
      shares: 55000,
      costPrice: 50.41,
      cost: 2772550,
      closePrice: 50.4,
      marketValue: 2772000,
      unrealizedPnL: -550,
      returnRate: "0.00%"
    }
  ];

  const angelaFundData: FundData[] = [
    { date: "2025/1/16", shares: 187.15, costPrice: 16.03, cost: 3000, note: "更新時間缺" },
    { date: "2025/2/17", shares: 182.26, costPrice: 16.46, cost: 3000, note: "-0.15" },
    { date: "2025/3/17", shares: 187.62, costPrice: 15.99, cost: 3000 },
    { date: "2025/4/15", shares: 198.68, costPrice: 15.1, cost: 3000 },
    { date: "2025/5/16", shares: 207.9, costPrice: 14.43, cost: 3000 },
    { date: "2025/6/16", shares: 212.77, costPrice: 14.1, cost: 3000 },
    { date: "2025/7/", shares: 0, costPrice: 0, cost: 0 },
    { date: "2025/8/", shares: 0, costPrice: 0, cost: 0 },
    { date: "2025/9/", shares: 0, costPrice: 0, cost: 0 },
    { date: "2025/10/", shares: 0, costPrice: 0, cost: 0 },
    { date: "2025/11/", shares: 0, costPrice: 0, cost: 0 },
    { date: "2025/12/", shares: 0, costPrice: 0, cost: 0 }
  ];

  const bondETF: ETFData[] = [
    {
      code: "00725B",
      name: "季-國泰投資級公司債",
      shares: 97000,
      costPrice: 38.05,
      cost: 3690453,
      closePrice: 32.33,
      marketValue: 3136010,
      unrealizedPnL: -554443,
      returnRate: "-15.00%"
    }
  ];

  const monthlyBondETF: ETFData[] = [
    {
      code: "00937B",
      name: "月-群益ESG20+投等債",
      shares: 106000,
      costPrice: 15.77,
      cost: 0,
      closePrice: 31.07,
      marketValue: 3293420,
      unrealizedPnL: 1621800,
      realizedPnL: 45305,
      returnRate: "97.00%"
    }
  ];

  const dividendSchedule: DividendSchedule[] = [
    {
      exDividendDate: "2025/1/17",
      dividendDate: "2025/2/18",
      shares: 46000,
      etf: "00725B",
      amount: 30442,
      dividendPerShare: 0.662,
      totalDividend: 95709
    },
    {
      exDividendDate: "2025/4/21",
      dividendDate: "2025/5/15",
      shares: 93000,
      etf: "00725B",
      amount: 59138,
      dividendPerShare: 0.636
    },
    {
      exDividendDate: "2025/7/16",
      dividendDate: "2025/8/11",
      shares: 97000,
      etf: "00725B",
      amount: 54892,
      dividendPerShare: 0.566
    },
    {
      exDividendDate: "2025/10/",
      dividendDate: "2025/11/",
      shares: 0,
      etf: "00725B",
      amount: -10,
      dividendPerShare: 0
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Yuyi's Portfolio */}
      <PortfolioSection
        title="Yuyi"
        headerClass="yuyi-header"
        stocks={yuyi}
        showStrategy={true}
      />

      {/* Andy's Portfolio */}
      <PortfolioSection
        title="Andy"
        headerClass="andy-header"
        stocks={andyStocks}
        etfs={andyETFs}
        showAccountSummary={true}
      />

      {/* Angela's Portfolio */}
      <div className="portfolio-section">
        <div className="portfolio-header angela-header">
          <h2>Angela</h2>
          <div className="fund-header">
            <span className="fund-name">凱基醫院及長照基金</span>
            <div className="fund-details">
              <span className="label">最高淨值(年):</span>
              <span className="value highlight">16.81</span>
              <span className="date">2025/7/15</span>
            </div>
          </div>
        </div>

        <div className="fund-summary">
          <div className="summary-header">
            <span className="label">定時定額日期</span>
            <span className="shares">股數</span>
            <span className="cost-price">成本價</span>
            <span className="cost">成本</span>
            <span className="close-price">收盤價</span>
            <span className="market-value">市值</span>
            <span className="unrealized">未實現盈虧</span>
            <span className="realized">已實現盈虧</span>
            <span className="return-rate">盈虧率</span>
          </div>
          
          <div className="summary-main">
            <span className="date-value">14,805.72</span>
            <span className="price-value">14.59</span>
            <span className="cost-value">216,000</span>
            <span className="close-value loss">13.93</span>
            <span className="market-value">206,244</span>
            <span className="unrealized loss">-9,756</span>
            <span className="return-rate loss">-4.50%</span>
          </div>
        </div>

        <table className="fund-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>股數</th>
              <th>成本價</th>
              <th>成本</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody>
            {angelaFundData.map((fund, index) => (
              <tr key={index} className={fund.shares === 0 ? "future-row" : ""}>
                <td>{fund.date}</td>
                <td>{fund.shares > 0 ? fund.shares.toFixed(2) : ""}</td>
                <td>{fund.costPrice > 0 ? fund.costPrice.toFixed(2) : ""}</td>
                <td>{fund.cost > 0 ? fund.cost.toLocaleString() : ""}</td>
                <td className={fund.note === "-0.15" ? "loss" : ""}>{fund.note || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bond ETF Sections */}
      <div className="portfolio-section">
        <div className="etf-detailed-section">
          <h3>國泰投資級公司債 (季)</h3>
          <div className="etf-performance">
            <div className="performance-row">
              <span className="label">入息月: 2, 5, 8, 11</span>
              <span className="label">成本年化殖利率</span>
              <span className="value highlight">5.95%</span>
              <span className="label">現階年化殖利率</span>
              <span className="value highlight">7.00%</span>
              <span className="label">資金總額</span>
              <span className="value">192,040</span>
            </div>
          </div>

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
                <th>入息</th>
                <th>支出</th>
              </tr>
            </thead>
            <tbody>
              {bondETF.map((etf, index) => (
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
                  <td>1,000,000</td>
                  <td>996,318</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="dividend-schedule">
            <h4>配息時程表</h4>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>除息日</th>
                  <th>入息日</th>
                  <th>計劃股數</th>
                  <th>ETF</th>
                  <th>收息金額</th>
                  <th>股息@元</th>
                  <th>總收息</th>
                </tr>
              </thead>
              <tbody>
                {dividendSchedule.map((dividend, index) => (
                  <tr key={index}>
                    <td>{dividend.exDividendDate}</td>
                    <td>{dividend.dividendDate}</td>
                    <td>{dividend.shares > 0 ? dividend.shares.toLocaleString() : ""}</td>
                    <td>{dividend.etf}</td>
                    <td>{dividend.amount > 0 ? dividend.amount.toLocaleString() : dividend.amount}</td>
                    <td>{dividend.dividendPerShare > 0 ? dividend.dividendPerShare.toFixed(3) : ""}</td>
                    <td>{dividend.totalDividend ? dividend.totalDividend.toLocaleString() : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="etf-detailed-section">
          <h3>群益ESG20年期以上BBB投等債(月)</h3>
          <div className="etf-performance">
            <div className="performance-row">
              <span className="label">入息月: 每月</span>
              <span className="label">成本年化殖利率</span>
              <span className="value highlight">6.24%</span>
              <span className="label">現階年化殖利率</span>
              <span className="value highlight">3.17%</span>
            </div>
          </div>

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
                <th>已實現盈虧</th>
                <th>盈虧率</th>
              </tr>
            </thead>
            <tbody>
              {monthlyBondETF.map((etf, index) => (
                <tr key={index}>
                  <td>{etf.code}</td>
                  <td>{etf.name}</td>
                  <td>{etf.shares.toLocaleString()}</td>
                  <td>{etf.costPrice.toFixed(2)}</td>
                  <td></td>
                  <td className="profit">{etf.closePrice.toFixed(2)}</td>
                  <td>{etf.marketValue.toLocaleString()}</td>
                  <td className="profit">{etf.unrealizedPnL.toLocaleString()}</td>
                  <td>{etf.realizedPnL?.toLocaleString()}</td>
                  <td className="profit">{etf.returnRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
