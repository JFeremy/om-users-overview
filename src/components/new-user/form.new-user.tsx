"use client"

import { faker } from '@faker-js/faker';
import { zodResolver } from "@hookform/resolvers/zod"
import { Eraser, Loader2, Plus } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/src/hooks/use-toast"
import { FormUserSchema } from "@/src/models/user.model"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

export function NewUserForm() {
    const defaultAvatar = React.useMemo(() => faker.image.avatar(), []);
    const form = useForm<z.infer<typeof FormUserSchema>>({
        resolver: zodResolver(FormUserSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof FormUserSchema>) {
        setTimeout(() => {
            toast({
                title: "New user added successfully",
                description: `Welcome to ${values.username}`,
            })
            form.reset();
        }, 5000);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card className="w-[350px] min-w-[300px]">
                    <CardHeader>
                        <CardTitle>Add a new user</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name" {...field} />
                                        </FormControl>
                                        <FormMessage className="ml-1" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="avatar"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Avatar</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center justify-center gap-4">
                                                <Avatar className="size-8">
                                                    <AvatarImage src={(field.value && field.value.length > 0) ? field.value : defaultAvatar} alt="avatar" />
                                                    <AvatarFallback>Av</AvatarFallback>
                                                </Avatar>
                                                <Input placeholder="avatar link" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="ml-1" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button onClick={() => form.reset()} variant="outline"><Eraser /> Reset</Button>
                        <Button>{form.formState.isSubmitting ? (<><Loader2 className='animate-spin' /> In progress</>) : (<><Plus className='animate-pulse' /> Add</>)}</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}
