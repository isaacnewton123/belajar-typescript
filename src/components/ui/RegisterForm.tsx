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
import { useState, type FormEvent } from "react"
import { useAuth } from "@/hooks/useAuth"
import { toast } from "react-toastify"
import type { UserData } from "@/services/types"
import { Link } from "react-router-dom"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [fullName, setFullName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [resubmit, setResubmit] = useState<string>('')

  const { register } = useAuth()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !username.trim() || !email.trim() || !password.trim() || !resubmit.trim()) {
      toast.error('please enter correct credential')
      return
    }


    if (password !== resubmit) {
      toast.error('Password and password confirmation do not match.')
      return
    }
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters.');
      return;
    }

    const formRegister: UserData = {
      fullName: fullName,
      username: username,
      email: email,
      password: password
    }

    register(formRegister)

    setFullName('')
    setUsername('')
    setEmail('')
    setPassword('')
    setResubmit('')

  }

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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">

              <div className="grid gap-3">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="example : Naruto Uzumaki"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="example : narutouzumaki"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example : narutouzumaki@fidodating.xyz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  className={`${password.length > 0 && (password !== resubmit || password.length < 8)
                      ? 'bg-rose-50'
                      : ''
                    }`}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  id="resubmit-password"
                  type="password"
                  className={`${resubmit.length > 0 && (password !== resubmit || resubmit.length < 8)
                      ? 'bg-rose-50'
                      : ''
                    }`}
                  value={resubmit}
                  onChange={(e) => setResubmit(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3 bg-blue-600 text-white rounded-xl dark:bg-blue-500 dark:text-gray-100">
                <Button size={'lg'} type="submit" className="w-full cursor-pointer">
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Do you have an account?{" "}
              <Link to={'/login'} className="underline underline-offset-4 cursor-pointer">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
