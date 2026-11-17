import {
  Award,
  BrainCircuit,
  Compass,
  Database,
  Gem,
  Globe,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  Network,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/** Explicit map keeps the bundle small (only these icons are shipped). */
export const icons = {
  Award,
  BrainCircuit,
  Compass,
  Database,
  Gem,
  Globe,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  Network,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function getIcon(name: IconName): LucideIcon {
  return icons[name];
}
