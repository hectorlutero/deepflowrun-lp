import type { ComponentType, SVGProps } from "react";
import {
  PaperAirplaneIcon,
  BoltIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  LockOpenIcon,
  TagIcon,
} from "./icons";

type IconProps = SVGProps<SVGSVGElement>;

const MAP = {
  plane: PaperAirplaneIcon,
  meeting: BuildingOffice2Icon,
  bolt: BoltIcon,
  chat: ChatBubbleLeftRightIcon,
  tag: TagIcon,
  check: CheckBadgeIcon,
  lock: LockClosedIcon,
  unlock: LockOpenIcon,
  phone: DevicePhoneMobileIcon,
} as const;

export type BiIconName = keyof typeof MAP;

export function BiIcon({
  name,
  className,
  ...props
}: { name: BiIconName; className?: string } & IconProps) {
  const Cmp = MAP[name] as ComponentType<IconProps>;
  return <Cmp className={className ?? "ba-icon"} aria-hidden {...props} />;
}
