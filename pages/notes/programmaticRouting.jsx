import React from 'react';
import { useRouter } from 'next/router';

//Just like the Link component, use the router for client-side routing. To navigate to a page, you can use the push method, which works like href on the Link component.

// by default nextjs is going to pre-render every single page
export default () => {
    const router = useRouter();
    const id = 2;

    return (
        <div>
            <button onClick={e => router.push('/')}>
                go Homer
            </button>
            <button onClick={e => router.push('/notes[id]', `notes/${id}`)}>
                Send param
            </button>
        </div>
    )
}