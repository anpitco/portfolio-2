'use client';

import { useState } from 'react';
import { Alert } from './alert';
import { Card } from './card';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         setStatus('pending');
    //         setError(null);
    //         const myForm = event.target;
    //         const formData = new FormData(myForm);
    //         const res = await fetch('/__forms.html', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //             body: new URLSearchParams(formData).toString()
    //         });
    //         if (res.status === 200) {
    //             setStatus('ok');
    //         } else {
    //             setStatus('error');
    //             setError(`${res.status} ${res.statusText}`);
    //         }
    //     } catch (e) {
    //         setStatus('error');
    //         setError(`${e}`);
    //     }
    // };
    return (
        <div className="w-full md:max-w-md">
            <Card title="Leave Feedback For Me">
                <form name="feedback" action="https://formsubmit.co/anna.pitcock@gmail.com" method="POST" className="flex flex-col gap-3 align-center">
                    <input type="hidden" name="form-name" value="feedback" />
                    <input name="name" type="text" placeholder="Name" required className="input" />
                    <input name="email" type="email" placeholder="Email (optional)" className="input" />
                    <input name="message" type="text" placeholder="Message" required className="input" />
                    <button className="btn" type="submit" disabled={status === 'pending'}>
                        Submit
                    </button>
                </form>
            </Card>
        </div>
    );
}
