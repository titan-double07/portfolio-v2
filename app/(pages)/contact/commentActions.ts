"use server";
import Comment from "@/app/(models)/comment-model";
import { revalidatePath } from "next/cache";
import { formatDistanceToNow } from "date-fns";
//  await Ticket.create(ticketData);
export async function createComment(formData: FormData) {
  try {
    const { name, email, comment } = Object.fromEntries(formData.entries());

    const commentData = {
      name,
      email,
      comment,
    };

    const newComment = await Comment.create(commentData);

    console.log("Comment created:", newComment);
    revalidatePath("/contact");
    console.log("Comment created");
  } catch (error) {
    console.log("something went wrong", error);
    throw new Error(`something went wrong, ${error}`);
  }
}
export async function getComments() {
  try {
    let ticketData = await Comment.find();
    ticketData = ticketData.map((ticket) => {
      const { _id: id, name, email, comment,createdAt } = ticket;
      // console.log(ticket);
      return {
        id,
        name,
        email,
        comment,
        created_at: formatDistanceToNow(new Date(createdAt)),

      };
    });
    return ticketData;
  } catch (error) {
    throw new Error(`something went wrong, ${error}`);
  }
}
