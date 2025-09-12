import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);

    return (
        <div className="p-6">
            <Suspense >
                <CustomersTable customers={customers} />
            </Suspense>
        </div>
    );
}