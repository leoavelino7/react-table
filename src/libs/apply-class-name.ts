import classNames from "classnames";

export const applyClassName = (
  withStyles: boolean,
  externalClassName: string,
  ...args: classNames.ArgumentArray
) => {
  const className = withStyles
    ? classNames(...args, externalClassName)
    : externalClassName;

  return className.trim() === "" ? undefined : className;
};
