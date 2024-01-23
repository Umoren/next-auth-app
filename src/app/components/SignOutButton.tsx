"use client";
import { signOut } from "next-auth/react";

export default function SignoutButton({ type }: { type?: string }) {
    return (
        <div>
            <button
                className="p-3 bg-purple-300 text-black rounded-md"
                onClick={() =>
                    signOut({
                        callbackUrl: "/login",
                        redirect: true,
                    })
                }
            >
                Sign Out
            </button>
        </div>
    );
}