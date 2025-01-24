import { Loader2 } from 'lucide-react';
import React from 'react';

export default function Loading() {
    return (<div className='flex flex-col items-center justify-center'>
        <Loader2 className="size-10 animate-spin" />
    </div>)
}