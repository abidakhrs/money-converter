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
import { Currency, currencies } from "@/data/currency"

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
                        {currencies.map((currency) => (
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
