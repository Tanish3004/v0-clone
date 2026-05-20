"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

import {
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

const Navbar = () => {
  const { isSignedIn } = useUser()

  return (
    <nav className="p-4 bg-black fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/v0-logo-dark.png"
            alt="Vibe"
            width={32}
            height={32}
          />
        </Link>

        {!isSignedIn ? (
          <div className="flex gap-2">
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </SignInButton>

            <Link href="/sign-up">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  )
}

export default Navbar