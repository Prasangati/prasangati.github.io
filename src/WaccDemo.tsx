import { Calculator } from "lucide-react";
import { useId, useState } from "react";

// Small working version of the WACC calculator built for Investalytix.
// WACC = E/V·Re + D/V·Rd·(1−T), with Re from CAPM: Rf + β·(Rm − Rf).

type Field = { key: keyof Inputs; label: string; step: number; suffix: string };
type Inputs = {
  equity: number;
  debt: number;
  riskFree: number;
  beta: number;
  marketPremium: number;
  costOfDebt: number;
  taxRate: number;
};

const fields: Field[] = [
  { key: "equity", label: "Market value of equity", step: 10, suffix: "$B" },
  { key: "debt", label: "Total debt", step: 5, suffix: "$B" },
  { key: "riskFree", label: "Risk-free rate (10-yr Treasury)", step: 0.1, suffix: "%" },
  { key: "beta", label: "Beta", step: 0.05, suffix: "" },
  { key: "marketPremium", label: "Equity risk premium", step: 0.1, suffix: "%" },
  { key: "costOfDebt", label: "Pre-tax cost of debt", step: 0.1, suffix: "%" },
  { key: "taxRate", label: "Tax rate", step: 1, suffix: "%" },
];

const pct = (n: number) => `${n.toFixed(2)}%`;

export function WaccDemo() {
  const id = useId();
  const [v, setV] = useState<Inputs>({
    equity: 300,
    debt: 60,
    riskFree: 4.2,
    beta: 1.1,
    marketPremium: 5.5,
    costOfDebt: 5.0,
    taxRate: 21,
  });

  const total = v.equity + v.debt;
  const costOfEquity = v.riskFree + v.beta * v.marketPremium;
  const afterTaxDebt = v.costOfDebt * (1 - v.taxRate / 100);
  const wacc = total > 0 ? (v.equity / total) * costOfEquity + (v.debt / total) * afterTaxDebt : 0;
  const equityShare = total > 0 ? (v.equity / total) * 100 : 0;

  return (
    <div className="demo">
      <div className="demo-head">
        <h4>
          <Calculator size={20} aria-hidden="true" />
          Try the WACC calculator
        </h4>
        <p>A simple version of the one I built. Change any number to recalculate.</p>
      </div>
      <div className="demo-body">
        <div className="demo-fields">
          {fields.map((f) => (
            <label key={f.key} htmlFor={`${id}-${f.key}`} className="demo-field">
              <span>{f.label}</span>
              <span className="demo-input">
                <input
                  id={`${id}-${f.key}`}
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step={f.step}
                  value={v[f.key]}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    setV((prev) => ({ ...prev, [f.key]: Number.isFinite(n) && n >= 0 ? n : 0 }));
                  }}
                />
                {f.suffix && <em>{f.suffix}</em>}
              </span>
            </label>
          ))}
        </div>
        <div className="demo-result" aria-live="polite">
          <p className="demo-wacc">{pct(wacc)}</p>
          <p className="demo-caption">Weighted average cost of capital</p>
          <div className="demo-bar" role="img" aria-label={`Capital mix: ${equityShare.toFixed(0)}% equity, ${(100 - equityShare).toFixed(0)}% debt`}>
            <span style={{ width: `${equityShare}%` }} />
          </div>
          <dl>
            <div>
              <dt>Cost of equity</dt>
              <dd>{pct(costOfEquity)}</dd>
            </div>
            <div>
              <dt>After-tax cost of debt</dt>
              <dd>{pct(afterTaxDebt)}</dd>
            </div>
            <div>
              <dt>Equity / debt mix</dt>
              <dd>
                {equityShare.toFixed(0)} / {(100 - equityShare).toFixed(0)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
