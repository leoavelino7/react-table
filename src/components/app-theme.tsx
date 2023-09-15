import { useThemes } from "../hooks/use-themes";

export const AppTheme = () => {
  const [theme, changeTheme] = useThemes();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <div>
        <button onClick={() => changeTheme("av-theme-dark")}>
          Ativar tema Dark
        </button>
        <button onClick={() => changeTheme("av-theme-light")}>
          Ativar tema Light
        </button>
      </div>
    </div>
  );
};