import { RegisterForm } from "@/components/ui/RegisterForm"

const RegisterPages = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-900' >
            <div className='flex items-center justify-center min-h-screen'>
                <div className="w-full max-w-md p-6 space-y-6 sm:p-8 ">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default RegisterPages