import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Share, explore and build on the best startup ideas and side hustles",
      },
      {
        title: "IdeaDrop - Your Idea Hub",
      },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
});
