import { useRef, useState } from 'react';
import SignupForm from '@/components/SignupForm';
import PaymentDetails from '@/components/PaymentDetails';

export default function Register() {
  // In-memory mock "database" — mirrors the original demo behaviour.
  // Resets on page reload; not persisted anywhere.
  const usersRef = useRef([]);
  const [currentUser, setCurrentUser] = useState(null);

  function handleSuccess(user) {
    usersRef.current.push(user);
    setCurrentUser(user);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 min-h-screen">
      <main className="max-w-md mx-auto px-5 sm:px-0 py-10 sm:py-14">
        {!currentUser ? (
          <section className="fade-in">
            <SignupForm existingUsers={usersRef.current} onSuccess={handleSuccess} />
            {/* <p className="text-center text-xs text-ink/35 mt-6">
              Demo environment — accounts are stored in memory only and reset on reload.
            </p> */}
          </section>
        ) : (
          <section className="fade-in">
            <PaymentDetails user={currentUser} />
          </section>
        )}
      </main>
    </div>
  );
}
