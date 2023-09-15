import React from "react";

const enableThemes = ["av-theme-dark", "av-theme-light"] as const;

type Theme = (typeof enableThemes)[number];

export const useThemes = (): [Theme, (theme: Theme) => void] => {
  const [theme, setTheme] = React.useState<Theme>("av-theme-light");
  const lastTheme = React.useRef(theme);

  React.useEffect(() => {
    document.documentElement.classList.remove(lastTheme.current);
    document.documentElement.classList.add(theme);
    lastTheme.current = theme;
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return [theme, changeTheme];
};
