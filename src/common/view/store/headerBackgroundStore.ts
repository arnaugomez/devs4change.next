import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { Image } from "../../domain/Image";

const headerBackgroundState = atom<Image | "USE_PLACEHOLDER">({
  key: "headerBackground",
  default: null,
});

export function useHeaderBackgroundStore() {
  const [headerBackground, setHeaderBackground] = useRecoilState(
    headerBackgroundState
  );

  const clearHeaderBackground = useCallback(() => {
    setHeaderBackground(null);
  }, [setHeaderBackground]);
  const setPlaceholderBackground = useCallback(() => {
    setHeaderBackground("USE_PLACEHOLDER");
  }, [setHeaderBackground]);

  return { headerBackground, setHeaderBackground, clearHeaderBackground };
}
