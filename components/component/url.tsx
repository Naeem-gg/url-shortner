"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleSubmit as submitAction } from "@/app/actions";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  og_url: string
}

export function URL() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => submitAction(data.og_url)
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-background">
      <div className="max-w-md w-full px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-center mb-6">URL Shortener</h1>
        <div className="bg-card rounded-lg shadow-sm overflow-hidden">
          <form className="flex items-center px-4 py-3 space-x-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="url"
              placeholder="Enter a long URL"
              className="flex-1 text-sm"
              {...register("og_url")}
            />
            {errors.og_url && <span>This field is required</span>}
            <Button type="submit" className="flex-shrink-0">
              Shorten
            </Button>
          </form>
          <div className="bg-muted px-4 py-3 text-sm text-muted-foreground flex items-center justify-between">
            <span className="truncate">
              https://example.com/very-long-url-that-needs-to-be-shortened
            </span>
            <Button variant="ghost" size="icon" className="w-6 h-6">
              <CopyIcon className="w-4 h-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}
