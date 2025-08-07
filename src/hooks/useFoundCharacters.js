import { useCallback, useReducer } from "react";

const THRESHOLD = 30;

const DEFAULT_STATE = {
  clickPosition: { x: 0, y: 0 },
  showPopup: false,
  found: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "CLICK":
      return { ...state, clickPosition: action.payload, showPopup: true };
    case "HIDE":
      return { ...state, showPopup: false };
    case "FOUND":
      return {
        ...state,
        found: [...state.found, action.payload],
        showPopup: false,
      };
    case "RESET":
      return DEFAULT_STATE;
    default:
      return state;
  }
}

export default function useFoundCharacters(
  coords,
  imageRef,
  lvlCount,
  onGameEnd
) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const handleClick = useCallback(
    (event) => {
      const { pageX, pageY, target } = event;
      if (target === imageRef.current) {
        dispatch({ type: "CLICK", payload: { x: pageX, y: pageY } });
      } else {
        dispatch({ type: "HIDE" });
      }
    },
    [imageRef]
  );

  const showFoundTxt = useCallback((name) => {
    document
      .querySelectorAll(".foundDialouge")
      .forEach((item) => item.classList.remove("txtActive"));
    const charDialouge = document.querySelector(`.found${name}`);
    charDialouge.classList.add("txtActive");
    setTimeout(() => {
      charDialouge.classList.remove("txtActive");
    }, 2000);
  }, []);

  const checkClickPosition = useCallback(
    (charName) => {
      const { x, y } = state.clickPosition;
      const imageWidth = imageRef.current.clientWidth;
      const imageHeight = imageRef.current.clientHeight;

      const { relX, relY } = coords[charName];
      const dx = x - relX * imageWidth;
      const dy = y - relY * imageHeight;
      const dist = Math.hypot(dx, dy);

      if (dist <= THRESHOLD) {
        showFoundTxt(charName);
        dispatch({
          type: "FOUND",
          payload: { name: coords.name, character: charName },
        });
        if (state.found.length + 1 >= lvlCount) {
          // End game if all characters found
          onGameEnd();
        }
      }
    },
    [
      coords,
      imageRef,
      lvlCount,
      state.found.length,
      onGameEnd,
      state.clickPosition,
      showFoundTxt,
    ]
  );

  const resetCharacters = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  return {
    clickPosition: state.clickPosition,
    showPopup: state.showPopup,
    foundCharacters: state.found,
    handleClick,
    checkClickPosition,
    resetCharacters,
  };
}
