import { cn } from '@/utils/class-merge';
import { ArrowLeftIcon } from '@sanity/icons';
import { ArrowRightLong } from './arrow-icons';
import type { IIconProps } from './interface';
import Spinner from './spinner';
import { MoonIcon, SunIcon } from './weather-icons';

function IconStore({ name }: Pick<IIconProps, 'name'>) {
  switch (name) {
    // arrow icons
    case 'arrow-right-long':
      return <ArrowRightLong />;

    case 'arrow-left-long':
      return <ArrowLeftIcon />;

    // weather icons
    case 'sun':
      return <SunIcon />;
    case 'moon':
      return <MoonIcon />;

    // loading icons
    case 'spinner':
      return <Spinner />;
  }
}

export default function Icon({ name, className, ...rest }: IIconProps) {
  return (
    <span className={cn('inline-block', className)} {...rest}>
      <IconStore name={name} />
    </span>
  );
}
