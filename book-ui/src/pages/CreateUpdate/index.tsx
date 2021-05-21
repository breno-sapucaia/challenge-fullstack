import { BottomNavigation } from "../../components/Common/BottomNavigation";
import { FormCreateUpdate } from "../../components/Form/CreateUpdate";
import { RichTextProvider } from "../../contexts/useRichText";
import { MainContainer } from "./styled";

export function CreateUpdate() {
  return (
    <MainContainer>
      <RichTextProvider>
        <FormCreateUpdate />
      </RichTextProvider>
      <BottomNavigation center />
    </MainContainer>
  );
}
