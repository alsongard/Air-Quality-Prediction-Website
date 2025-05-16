import FormLoginSignup from "../components/form_login_signup";

export default function SignLoginPage()
{
    return (
        <section className='w-full pt-[100px] h-[100vh] bg-linear-to-r from-[rgba(85,153,167,0.66)] dark:from-black to-[rgba(10,105,105,0.33)] dark:to-black'>
            <FormLoginSignup/>
        </section>
    )
}