"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

export default function UserProfile() {

    const session = useSession();

    return(
        <div>
            <Image 
            src={session?.data?.user?.image || ''} alt="user profile" 
            width={24} 
            height={24}
            className="rounded-full" />
        </div>
    );

}