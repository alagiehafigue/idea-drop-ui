import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ideas/$ideaid/")({
  component: IdeaDetailsPage,
});

function IdeaDetailsPage() {
  return <div>Hello "/ideas/$ideaid/"!</div>;
}
