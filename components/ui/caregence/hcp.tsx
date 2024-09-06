"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function HCP() {
  const providers = useQuery(api.user.getProviders);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {providers?.map(({_id, name}) => <div key={_id}>{name}</div>)}
    </div>
  );
}