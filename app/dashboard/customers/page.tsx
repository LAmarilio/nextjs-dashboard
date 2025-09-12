import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import { use } from 'react';

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const { query = '' } = use(searchParams);
    const customers = await fetchFilteredCustomers(query);

    return (
        <div className="p-6">
            <Suspense >
                <CustomersTable customers={customers} />
            </Suspense>
        </div>
    );
}