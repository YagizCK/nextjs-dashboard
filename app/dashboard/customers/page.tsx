import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Table from "@/app/ui/customers/table";
import { Suspense } from "react";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import Search from "@/app/ui/search";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Customers
        </h1>
        <Search placeholder="Search customers..." />
        <Suspense key={query} fallback={<CustomersTableSkeleton />}>
          <Table query={query} />
        </Suspense>
      </div>
    </div>
  );
}
