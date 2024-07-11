import {
  SimpleForm,
  required,
  TextInput,
  Edit,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const EditChallengeOption = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" label={"Text"} validate={[required()]} />
        <BooleanInput
          source="correct"
          label={"Correct Options"}
          validate={[required()]}
        />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label={"Image"} />
        <TextInput source="audioSrc" label={"Audio"} />
      </SimpleForm>
    </Edit>
  );
};
