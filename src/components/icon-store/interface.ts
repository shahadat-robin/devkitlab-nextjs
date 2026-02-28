import type { ClassValue } from 'clsx';

export type ArrowIcons = 'arrow-right-long' | 'arrow-left-long';
export type WeatherIcons = 'moon' | 'sun';
export type LoadingIcons = 'spinner';

export interface IIconProps {
  name: ArrowIcons | WeatherIcons | LoadingIcons;
  className?: ClassValue;
  onClick?: () => void;
}
