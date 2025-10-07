import Form from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main className="w-full p-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: 'Create', href: '/dashboard/create' },
        ]}
      />
      <Form customers={customers} invoice={{
        id: '',
        customer_id: '',
        amount: 0,
        date: undefined,
        status: 'pending'
      }} />
    </main>
  )
}
