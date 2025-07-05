'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type Currency = {
    id: string
    code: string
    name: string
}

const Currency = [
    {
        id: 1,
        code: "CNY",
        name: "Chinese Yuan",
    },
    {
        id: "2",
        code: "CHF",
        name: "Swiss Franc",
    },
    {
        id: "3",
        code: "AUD",
        name: "Australian Dollar",
    },
    {
        id: "4",
        code: "pln",
        name: "Polish Zloty",
    },
    {
        id: "5",
        code: "TRY",
        name: "Turkish Lira",
    },
    {
        id: "6",
        code: "GBP",
        name: "British Pound",
    },
    {
        id: "7",
        code: "NZD",
        name: "New Zealand Dollar",
    },
    {
        id: "8",
        code: "KRW",
        name: "South Korean Won",
    },
    {
        id: "9",
        code: "DKK",
        name: "Danish Krone",
    },
    {
        id: "10",
        code: "HKD",
        name: "Hong Kong Dollar",
    },
]

export function CurrencyTable() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Currency Table</CardTitle>
                <CardDescription>Here are the list of supported currencies</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Currency Code</TableHead>
                            <TableHead>Name</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Currency.map((currency) => (
                            <TableRow key={currency.id}>
                                <TableCell className="font-medium">{currency.id}</TableCell>
                                <TableCell>{currency.code}</TableCell>
                                <TableCell>{currency.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
