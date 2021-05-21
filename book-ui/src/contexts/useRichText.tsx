import { convertFromHTML, convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
interface RichTextContext {
  setEditorState: Dispatch<SetStateAction<EditorState>>;
  editorState: EditorState;
  getEditorHtml: () => string;
  getLength: () => number;
  setValue: (value: string) => void;
  handleTextLimitBeforeInput: (
    chars: string,
    editorState: EditorState,
    eventTimeStamp: number
  ) => "not-handled" | "handled";
}

const RichTextCTX = createContext<RichTextContext | undefined>(undefined);
const { Provider } = RichTextCTX;

export const RichTextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const setValue = (value: string) => {
    setEditorState(
      EditorState.push(
        editorState,
        convertFromHTML({})(value),
        "insert-characters"
      )
    );
  };

  const getEditorHtml = (): string =>
    convertToHTML({})(editorState.getCurrentContent());

  const getLength = (): number => {
    return editorState.getCurrentContent().getPlainText().length;
  };

  const handleTextLimitBeforeInput = (
    chars: string,
    editorState: EditorState,
    eventTimeStamp: number
  ) => {
    const length =
      editorState.getCurrentContent().getPlainText().length + chars.length;
    const reachLimit = length >= 600;
    const isHandled = reachLimit ? "handled" : "not-handled";
    if (isHandled === "handled") {
      toast.error("you reach the limit of 600 caracteres in description", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
    return isHandled;
  };

  return (
    <Provider
      value={{
        handleTextLimitBeforeInput,
        getLength,
        setEditorState,
        setValue,
        editorState,
        getEditorHtml,
      }}
    >
      {children}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
        limit={1}
        style={{
          width: 375,
        }}
      />
    </Provider>
  );
};

export const useRichText = () => {
  const context = useContext(RichTextCTX);
  if (context === undefined)
    throw new Error("useRichText must be within a RichTextProvider");
  return context;
};
