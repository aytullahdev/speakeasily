import { CHALLENGE_SELECT_CHOICES } from "@/constants";
import {
  Create,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const CreateChallenge = () => {
  return (
    <Create>
      <SimpleForm>
        <SelectInput
          choices={CHALLENGE_SELECT_CHOICES}
          source="type"
          label={"Type"}
          validate={[required()]}
        />
        <TextInput
          source="question"
          label={"Question"}
          validate={[required()]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" label={"Order"} validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
