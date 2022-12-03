
import { LoginForm } from '../components/auth/LoginForm'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'


export const Auth = () => {
  return (
    <div>
        <Header />
        <main className='flex flex-col items-center py-12'>
          <LoginForm />
        </main>
        <Footer />
    </div>
  )
}
