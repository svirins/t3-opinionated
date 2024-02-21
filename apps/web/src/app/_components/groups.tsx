"use client";

import { use } from "react";

import type { RouterOutputs } from "@acme/api";
import { cn } from "@acme/ui";

// import { Button } from "@acme/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
//   useForm,
// } from "@acme/ui/form";
// import { Input } from "@acme/ui/input";
// import { toast } from "@acme/ui/toast";

import { api } from "~/trpc/react";

export function GroupList(props: {
  groups: Promise<RouterOutputs["group"]["all"]>;
}) {
  // TODO: Make `useSuspenseQuery` work without having to pass a promise from RSC
  const initialData = use(props.groups);
  const { data: groups } = api.group.all.useQuery(undefined, {
    initialData,
  });

  if (groups.length === 0) {
    return (
      <div className="relative flex w-full flex-col gap-4">
        <GroupCardSkeleton pulse={false} />
        <GroupCardSkeleton pulse={false} />
        <GroupCardSkeleton pulse={false} />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
          <p className="text-2xl font-bold text-white">No groups yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {groups.map((group) => {
        return <GroupCard key={group.id} group={group} />;
      })}
    </div>
  );
}

export function GroupCard(props: {
  group: RouterOutputs["group"]["all"][number];
}) {
  // const utils = api.useUtils();

  return (
    <div className="flex flex-row rounded-lg bg-muted p-4">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-primary">{props.group.name}</h2>
      </div>
      <div></div>
    </div>
  );
}

export function GroupCardSkeleton(props: { pulse?: boolean }) {
  const { pulse = true } = props;
  return (
    <div className="flex flex-row rounded-lg bg-muted p-4">
      <div className="flex-grow">
        <h2
          className={cn(
            "w-1/4 rounded bg-primary text-2xl font-bold",
            pulse && "animate-pulse",
          )}
        >
          &nbsp;
        </h2>
        <p
          className={cn(
            "mt-2 w-1/3 rounded bg-current text-sm",
            pulse && "animate-pulse",
          )}
        >
          &nbsp;
        </p>
      </div>
    </div>
  );
}
