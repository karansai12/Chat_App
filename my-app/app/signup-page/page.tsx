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

interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<SignupFormData>();

    const onSubmit = async (data: SignupFormData) => {
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            console.error("Signup failed:", response.statusText)
        }else {
            router.push("/login-page")
        }
    }

    return (
        <TopDiv>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Sign up to start</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <Label htmlFor="name">User Name</Label>
                            <Input id="name" type="text" placeholder="Thor" required {...register("name")} />
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Thor@gmail.com" required {...register("email")} />
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="hammer" required {...register("password")} />
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" placeholder="hammer" required {...register("confirmPassword")} />
                            <Button type="submit">Sign up</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex gap-2 justify-center items-center">
                    <span onClick={() => router.push("/login-page")}
                        className="text-sm text-gray-500 cursor-pointer">
                        Already have an Account Login
                    </span>
                </CardFooter>
            </Card>
        </TopDiv>
    );
};

export default SignupPage;