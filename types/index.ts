// Brand Types
export interface Brand {
  id: string;
  name: string;
  domain: string;
  logo?: string;
  createdAt: string;
}

// Audit Module Types
export type ModuleType =
  | "ai-visibility"
  | "brand-voice"
  | "eeat-trust"
  | "keyword-coverage"
  | "content-depth"
  | "citations"
  | "competitive-position";

export interface AuditModule {
  id: ModuleType;
  name: string;
  description: string;
  score: number;
  maxScore: number;
  status: "excellent" | "good" | "needs-improvement" | "critical";
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
  lastUpdated: string;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: "positive" | "neutral" | "negative";
  impact: "high" | "medium" | "low";
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low";
  category: string;
  affectedUrls?: string[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  estimatedImpact: string;
  actionItems: string[];
}

// Dashboard Snapshot Types
export interface DashboardSnapshot {
  brandId: string;
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAuditDate: string;
  overallHealth: "excellent" | "good" | "needs-improvement" | "critical";
  trendsData: TrendData[];
}

export interface TrendData {
  date: string;
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
}

// Architecture Types
export interface SystemComponent {
  id: string;
  name: string;
  type: "input" | "processor" | "module" | "output";
  description: string;
  connections: string[];
  status: "active" | "processing" | "idle";
}

export interface AuditPipeline {
  stages: PipelineStage[];
}

export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  components: string[];
  order: number;
}

// Store Types
export interface AppState {
  selectedBrand: Brand | null;
  selectedModule: ModuleType | null;
  brands: Brand[];
  setSelectedBrand: (brand: Brand | null) => void;
  setSelectedModule: (module: ModuleType | null) => void;
}
