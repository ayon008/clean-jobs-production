import React from 'react';
import { MdOutlineNotifications } from 'react-icons/md';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Notification = () => {
    const [newBlog, setNewBlog] = useState(null);
    useEffect(() => {
        const socket = io('https://clean-jobs-latest-backend.vercel.app/');
        socket.on('new-blog', (data) => {
            setNewBlog(data.title);
            alert(`New blog post uploaded: ${data.title}`);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    console.log(newBlog);
    

    return (
        <div>
            <MdOutlineNotifications className="md:text-2xl text-lg" />
            {/* <div>New blog post: {newBlog}</div> */}
        </div>
    );
};

export default Notification;