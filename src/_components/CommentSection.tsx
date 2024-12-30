'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Comment {
  name: string;
  message: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Handle the submission of new comments
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      const newComment: Comment = { name, message };
      setComments([...comments, newComment]);
      setName(""); // Clear the name input
      setMessage(""); // Clear the message input
    }
  };

  return (
    <div className="mt-16">
      <hr />
      <h2 className="text-3xl mt-8 font-bold mb-4">Comments</h2>

      {/* Display existing comments */}
      <div className="space-y-4">
        {comments.map((comment, idx) => (
          <div key={idx} className="border-black border-2 pb-4 bg-slate-200 w-full">
            <h3 className="font-semibold">Name: {comment.name}</h3>
            <p>Comment: {comment.message}</p>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <form className="mt-8" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // className="pb-4"
        />
        <Textarea
          placeholder="Your Comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-4"
          rows={4}
        />
        <Button
          type="submit"
          className="mt-8 mb-12"
        >
          Post Comment
        </Button>
      </form>
    </div>
  );
}
