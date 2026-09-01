"use client"

import { useForm } from "react-hook-form"
import { TopDiv } from "../custom-component/TopDiv";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        console.log("success")
    }
    return (
        <TopDiv>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Thor@gmail.com" required {...register("email")}/>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="hammer" required {...register("password")}/>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex gap-2 justify-center items-center">
                    <Button type="submit" >Login</Button>
                    <span onClick={() => router.push("/signup-page")} 
                    className="text-sm text-gray-500 cursor-pointer">
                        Dont hanv an Account Sign up
                        </span>
                </CardFooter>
            </Card>
        </TopDiv>
    );
};

export default LoginPage;