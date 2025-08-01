import { LoginForm } from "@/components/ui/LoginForm"

const LoginPages = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-900' >
            <div className='flex items-center justify-center min-h-screen'>
                <div className="w-full max-w-md p-6 space-y-6 sm:p-8 ">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPages