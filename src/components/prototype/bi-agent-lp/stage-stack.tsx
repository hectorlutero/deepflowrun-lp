import type { CSSProperties } from "react";
import {
  ChartBarIcon,
  CircleStackIcon,
  CubeIcon,
  TableCellsIcon,
} from "@/components/bi-agent/icons";
import { StageCtas } from "./stage-ctas";

type StackGroup = "bi" | "warehouse" | "sheet";

type StackTool = {
  name: string;
  mono: string;
  group: StackGroup;
  /** Filename under /prototype/stage/logos/ — omit for generic marks */
  logo?: string;
};

const GROUP_META: Record<
  StackGroup,
  { label: string; Icon: typeof ChartBarIcon }
> = {
  bi: { label: "Plataformas BI", Icon: ChartBarIcon },
  warehouse: { label: "Warehouses & fontes", Icon: CircleStackIcon },
  sheet: { label: "Planilhas", Icon: TableCellsIcon },
};

const LOGO = "/prototype/stage/logos";

/** Brand marks in tiles (local SVGs). Banco/DW stays generic. */
export const STACK_TOOLS: StackTool[] = [
  { name: "Power BI", mono: "PBI", group: "bi", logo: "power-bi.svg" },
  { name: "Fabric", mono: "FAB", group: "bi", logo: "fabric.svg" },
  { name: "Qlik Sense", mono: "QS", group: "bi", logo: "qlik.svg" },
  { name: "Looker", mono: "LKR", group: "bi", logo: "looker.svg" },
  { name: "Tableau", mono: "TBL", group: "bi", logo: "tableau.svg" },
  { name: "BigQuery", mono: "BQ", group: "warehouse", logo: "bigquery.svg" },
  { name: "Snowflake", mono: "SNF", group: "warehouse", logo: "snowflake.svg" },
  { name: "Redshift", mono: "RS", group: "warehouse", logo: "redshift.svg" },
  { name: "Databricks", mono: "DBX", group: "warehouse", logo: "databricks.svg" },
  { name: "Banco / DW", mono: "DW", group: "warehouse" },
  { name: "SAP", mono: "SAP", group: "warehouse", logo: "sap.svg" },
  { name: "Oracle", mono: "ORA", group: "warehouse", logo: "oracle.svg" },
  { name: "Excel", mono: "XLS", group: "sheet", logo: "excel.svg" },
  { name: "Google Sheets", mono: "GS", group: "sheet", logo: "google-sheets.svg" },
];

function DwGlyph() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="stg-stack-mark-svg">
      <ellipse cx="16" cy="8" rx="10" ry="4" fill="none" strokeWidth="1.75" />
      <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="none" strokeWidth="1.75" />
      <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" fill="none" strokeWidth="1.75" />
    </svg>
  );
}

function TileMark({ tool }: { tool: StackTool }) {
  if (tool.logo) {
    return (
      <span className="stg-stack-tile-mark stg-stack-tile-mark--brand" data-group={tool.group}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="stg-stack-tile-logo"
          src={`${LOGO}/${tool.logo}`}
          alt=""
          width={22}
          height={22}
          decoding="async"
        />
      </span>
    );
  }

  return (
    <span className="stg-stack-tile-mark" data-group={tool.group}>
      <DwGlyph />
    </span>
  );
}

export function StageStack() {
  const groups: StackGroup[] = ["bi", "warehouse", "sheet"];

  return (
    <section id="integracoes" className="stg-stack" aria-labelledby="stg-stack-title">
      <div className="stg-stack-atmosphere" aria-hidden>
        <span className="stg-stack-orbit stg-stack-orbit--a" />
        <span className="stg-stack-orbit stg-stack-orbit--b" />
        <span className="stg-stack-orbit stg-stack-orbit--c" />
        <span className="stg-stack-watermark">STACK</span>
      </div>

      <div className="stg-wrap">
        <div className="stg-stack-head">
          <p className="stg-label">Integrações</p>
          <h2 id="stg-stack-title">
            Na stack que a empresa <em>já paga</em>.
          </h2>
          <p className="stg-stack-lede">
            Não somos bot do Power BI. Conectamos no BI, warehouse ou planilha que vocês já usam.
          </p>
          <StageCtas ghost />
          <p className="stg-stack-foot">
            <CubeIcon className="stg-icon" />
            Não trocamos sua ferramenta. Consultamos o que já está no centro da operação.
          </p>
        </div>

        <div className="stg-stack-board">
          {groups.map((g) => {
            const meta = GROUP_META[g];
            const Icon = meta.Icon;
            const tools = STACK_TOOLS.filter((t) => t.group === g);
            return (
              <div key={g} className={`stg-stack-group stg-stack-group--${g}`}>
                <p className="stg-stack-group-label">
                  <Icon className="stg-icon" />
                  {meta.label}
                </p>
                <ul className="stg-stack-mosaic">
                  {tools.map((tool, i) => (
                    <li
                      key={tool.name}
                      className="stg-stack-tile"
                      style={{ "--stg-stack-i": i } as CSSProperties}
                    >
                      <TileMark tool={tool} />
                      <span className="stg-stack-tile-body">
                        <span className="stg-stack-mono">{tool.mono}</span>
                        <span className="stg-stack-name">{tool.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
