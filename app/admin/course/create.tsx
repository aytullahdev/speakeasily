import { Create, SimpleForm, required, TextInput } from "react-admin";

export const CreateCourse = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label={"Title"} validate={[required()]} />
        <TextInput source="imageSrc" label={"Image"} validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
