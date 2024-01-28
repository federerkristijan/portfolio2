import { Navbar } from "@/components/global/navbar/Navbar";
import { PageProps } from "@/types";

export default function Page(props: PageProps) {
  const { page } = props;

  return (
  <div className=' bg-black text-white'>
    <Navbar />
  </div>)
}
