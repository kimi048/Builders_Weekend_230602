import { F } from "@morphdb/morph-client";
export type TodoItem = {
  id: F.Number.Required;
  title: F.ShortText.Nullable;
  body: F.ShortText.Nullable;
  isdone: F.Boolean.Required;
  duedate: F.Date.Nullable;
};
