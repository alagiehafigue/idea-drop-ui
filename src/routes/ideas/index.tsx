import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ideas/")({
  component: IdeasPage,
});

function IdeasPage() {
  return <div>Hello "/ideas/"!</div>;
}
