"use client"

import React, { useState } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from 'sonner'
import { Currency, currencies } from "@/data/currency"
import { ArrowLeftRight } from 'lucide-react'
import { convertCurrency } from '@/lib/api'

const FormSchema = z.object({
    old: z
        .string({
            required_error: "Please select a currency to convert.",
        }),
    new: z
        .string({
            required_error: "Please select a new currency.",
        }),
    value: z
        .coerce.number({
            required_error: "Please insert value.",
            invalid_type_error: "Please insert number only."
        }),
})

const ConvertForm = () => {

    const [convertedResult, setConvertedResult] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    
    type FormData = z.infer<typeof FormSchema>

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    const onSubmit = async (data: FormData) => {
          setIsLoading(true)
          try {
          const result = await convertCurrency({
            from: data.old,
            to: data.new,
            value: data.value,
          })
          
          setIsLoading(false)
          setConvertedResult(result.new_amount);

        } catch (error) {
          console.error(error)
          alert('Conversion failed.')
        }
      }

    function swap() {
        const old = form.getValues("old");
        const newCurrency = form.getValues("new");

        form.setValue("old", newCurrency, { shouldValidate: true });
        form.setValue("new", old, { shouldValidate: true });
    }

    return (

        <Card>
            <CardHeader>
                <CardTitle>Convert</CardTitle>
                <CardDescription>Convert currency in real-time with live exchange rates</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            {/* First row: From | Swap | To */}
                            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full">
                                {/* FROM */}
                                <FormField
                                    control={form.control}
                                    name="old"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>From</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value} >
                                                <FormControl className='w-full'>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a currency" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {currencies.map((currency) => (
                                                        <SelectItem key={currency.id} value={currency.code}>
                                                            {currency.code} - {currency.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* SWAP Button */}
                                <div className="flex items-end justify-center">
                                    <Button onClick={swap} variant="ghost" className="h-full">
                                        <ArrowLeftRight />
                                    </Button>
                                </div>

                                {/* TO */}
                                <FormField
                                    control={form.control}
                                    name="new"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>To</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                                <FormControl className='w-full'>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a currency" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {currencies.map((currency) => (
                                                        <SelectItem key={currency.id} value={currency.code}>
                                                            {currency.code} - {currency.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Second row: Amount | = | Output */}
                            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full items-start">
                                {/* AMOUNT */}
                                <FormField
                                    control={form.control}
                                    name="value"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Amount</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter amount" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* = SIGN */}
                                <div className="h-full flex items-center justify-center text-xl font-bold">=</div>

                                {/* OUTPUT */}
                                <FormItem>
                                    <FormLabel>Result</FormLabel>
                                    <FormControl>
                                        <Input readOnly placeholder={isLoading ? "Loading..." : "Enter value"} value={convertedResult === null ? '' : convertedResult?.toString()} />
                                    </FormControl>
                                </FormItem>
                            </div>
                        </div>
                        <Button className='' variant={'outline'} type="submit">Convert</Button>
                    </form>
                </Form>
            </CardContent>
        </Card >

    )
}

export default ConvertForm