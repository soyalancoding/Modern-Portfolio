const colorClasses = {
  white: "text-white",
  black: "text-black dark:text-white",
  gray: "text-gray-400 dark:text-gray-200",
  grayDark: "text-gray-600 dark:text-white",
  blue: "text-sky-600 dark:text-yellow-400",
  default:
    "bg-gradient-to-r from-sky-500 to-yellow-400 bg-clip-text text-transparent",
};

const weightClasses = {
  bold: "font-bold",
  default: "font-normal",
};

const sizeClasses = {
  xsmall: "text-xs",
  small: "text-sm",
  medium: "md:text-sm lg:text-base",
  large: "md:text-base lg:text-lg",
  xlarge: "text-base md:text-lg lg:text-xl",
  xxlarge: "text-lg md:text-xl lg:text-2xl",
  xxxlarge: "text-xl md:text-2xl lg:text-3xl",
  xxxxlarge: "text-2xl md:text-3xl lg:text-4xl",
  default: "md:text-sm lg:text-base",
};

const hoverClasses = {
  white: "hover:text-white",
  black: "hover:text-black",
  gray: "hover:text-gray-400",
  default:
    "hover:bg-gradient-to-r hover:from-sky-500 hover:to-yellow-400 hover:bg-clip-text hover:font-bold hover:text-transparent",
};

type ColorKeys = keyof typeof colorClasses;
type WeightKeys = keyof typeof weightClasses;
type SizeKeys = keyof typeof sizeClasses;
type HoverKeys = keyof typeof hoverClasses;

export function setColors(color: ColorKeys) {
  return colorClasses[color] || colorClasses.default;
}

export function setWeights(weight: WeightKeys) {
  return weightClasses[weight] || weightClasses.default;
}

export function setSizes(size: SizeKeys) {
  return sizeClasses[size] || sizeClasses.default;
}

export function setHovers(hover: HoverKeys) {
  return hoverClasses[hover] || hoverClasses.default;
}
