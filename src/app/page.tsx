import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import React from "react";

function HomePage() {
  return (
    <div>
      HomePage
      <SignedOut>
        <SignInButton></SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>
    </div>
  );
}

export default HomePage;
