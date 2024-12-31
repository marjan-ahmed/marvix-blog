'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { UserButton } from "@clerk/nextjs";


interface Comment {
  message: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [message, setMessage] = useState<string>("");

  // Handle the submission of new comments
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message) {
      const newComment: Comment = { message };
      setComments([...comments, newComment]);
      setMessage(""); // Clear the message input

      // Show toast notification
      toast("Comment has been posted. ✅")
    }
  };

  return (
    <div className="mt-16">
    <hr />
    <h2 className="text-3xl mt-8 font-bold mb-4">Comments</h2>

    {/* Display existing comments */}
    <div className="space-y-6">
      {comments.map((comment, idx) => (
        <div key={idx} className="p-4 border rounded-lg shadow-md bg-gray-100 flex justify-between items-end">
          <h4 className="mt-[] text-slate-500 text-md">{comment.message}</h4>
          <UserButton />
        </div>
      ))}
    </div>

      {/* Comment Form */}
      <form className="mt-8" onSubmit={handleSubmit}>
        <Textarea
          placeholder="Your Comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-4 w-full"
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