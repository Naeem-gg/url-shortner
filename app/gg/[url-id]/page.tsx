import { getUrl } from "@/db/getUrl";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { ["url-id"]: string } }) => {
  const ogUrl = await getUrl(params["url-id"]);

  return redirect(ogUrl);
};

export default page;
