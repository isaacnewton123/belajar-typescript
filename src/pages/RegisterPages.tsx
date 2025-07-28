import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Sign up</CardTitle>
          <CardDescription>
            Enter your username below to Sigup to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-3">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="example : Naruto Uzumaki"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username">username</Label>
              <Input
                id="username"
                type="text"
                placeholder="example : narutouzumaki"
                required
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">email</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="example : narutouzumaki@fidodating.xyz"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Resubmit Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3 bg-blue-600 text-white rounded-xl dark:bg-blue-500 dark:text-gray-100">
                <Button size={'lg'} type="submit" className="w-full cursor-pointer">
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Do you have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
