import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/radk/ui/table"

const invoices = [
  { invoice: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV-003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV-005", status: "Paid", method: "PayPal", amount: "$550.00" },
]

export function TableDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border overflow-hidden">
      <div className="p-4">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-bold">{invoice.invoice}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$1,750.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
