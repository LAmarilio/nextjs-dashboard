import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <div className="p-6">
      <CustomersTable customers={customers} />
    </div>
  );
}