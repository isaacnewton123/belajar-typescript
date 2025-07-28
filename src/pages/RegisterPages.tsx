import { RegisterForm } from "@/components/ui/RegisterForm"

const RegisterPages = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-900' >
            <div className='flex items-center justify-center min-h-screen'>
                <div className="w-1/4 h-full p-8 space-y-6">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default RegisterPages