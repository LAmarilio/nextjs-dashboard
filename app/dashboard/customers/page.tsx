import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { use } from 'react';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = '' } = use(searchParams);
  const customers = use(fetchFilteredCustomers(query));

  return (
    <div className="p-6">
      <CustomersTable customers={customers} />
    </div>
  );
}