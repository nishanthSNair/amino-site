import {
  Atom,
  Brain,
  Flame,
  Leaf,
  Moon,
  Repeat,
  Shield,
  Sparkles,
  Activity,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  regenerate: Repeat,
  shield: Shield,
  spark: Sparkles,
  pulse: Activity,
  moon: Moon,
  flame: Flame,
  brain: Brain,
  leaf: Leaf,
  waveform: Waves,
  molecule: Atom,
};

export function PathwayIcon({
  name,
  size = 18,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = map[name] ?? Sparkles;
  return <Icon size={size} className={className} />;
}
