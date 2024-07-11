import {
  Create,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const CreateChallengeOption = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" label={"Text"} validate={[required()]} />
        <BooleanInput
          source="correct"
          label={"Correct Option"}
          validate={[required()]}
        />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label={"Image"} />
        <TextInput source="audioSrc" label={"Audio"} />
      </SimpleForm>
    </Create>
  );
};

// id: serial("id").primaryKey(),
//   challengeId: integer("challenge_id")
//     .references(() => challenges.id, {
//       onDelete: "cascade",
//     })
//     .notNull(),
//   text: text("text").notNull(),
//   correct: boolean("correct").notNull(),
//   imageSrc: text("image_src"),
//   audioSrc: text("audio_src"),
