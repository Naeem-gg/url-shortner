"use client";
import { handleSubmit as submitAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  og_url: string;
};
const initialState = {
  shorted: "",
}
export function URL() {
  const [copiedUrl, setCopiedUrl] = useState("")
  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
  }
  const [url, setUrl] = useState(
    "https://example.com/very-long-url-that-needs-to-be-shortened",
  );
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {shorted} = await submitAction(data.og_url);
    if(process.env.NODE_ENV==="development")setUrl("http://localhost:3000/gg/".concat(shorted));
    setUrl(`https://tlinks.vercel.app/gg/${shorted}`)
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-background">
      <div className="max-w-md w-full px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-center mb-6">URL Shortener 
<div className="bg-blue-100 text-blue-800 font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 text-xs mt-2">By Naeem Navjivan</div>
</h1>
        <div className="bg-card rounded-lg shadow-sm overflow-hidden">
          <form
            className="flex items-center px-4 py-3 space-x-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="url"
              placeholder="Enter a long URL"
              className="flex-1 text-sm"
              {...register("og_url")}
            />
            {errors.og_url && <span>This field is required</span>}
            <Button type="submit" className="flex-shrink-0" disabled={isSubmitting}>
              {isSubmitting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>}
              {isSubmitting?"please wait...":"Shorten"}
            </Button>
          </form>
          <div className="bg-muted px-4 py-3 text-sm text-muted-foreground flex items-center justify-between">
            <span className="truncate">{url}</span>
            <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleCopy}>
              <CopyIcon className="w-4 h-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          {copiedUrl && (
            <div className="bg-primary text-primary-foreground px-4 py-3 text-sm flex items-center justify-between">
              <span>Copied: {copiedUrl}</span>
            </div>
          )}
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
  )
}