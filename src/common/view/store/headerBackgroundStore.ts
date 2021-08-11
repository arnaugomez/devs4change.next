import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { Image } from "../../domain/Image";

const headerBackgroundState = atom<Image | "USE_PLACEHOLDER">({
  key: "headerBackground",
  default: null,
});

export function useHeaderBackgroundStore() {
  const [headerBackground, _setHeaderBackground] = useRecoilState(
    headerBackgroundState
  );

  const setHeaderBackground = useCallback(
    (image: Image) => {
      if (!image) {
        _setHeaderBackground("USE_PLACEHOLDER");
      } else {
        _setHeaderBackground(image);
      }
    },
    [_setHeaderBackground]
  );

  const clearHeaderBackground = useCallback(() => {
    _setHeaderBackground(null);
  }, [_setHeaderBackground]);

  return { headerBackground, setHeaderBackground, clearHeaderBackground };
}
