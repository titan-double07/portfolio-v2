"use server";
import Comment from "@/app/(models)/comment-model";
import { revalidatePath } from "next/cache";
import { formatDistance, subDays } from "date-fns";
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
    revalidatePath("/contact");
    return {
      success: true,
      message: "Comment created",
    };
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
        id: id.toString(),
        name,
        email,
        comment,
        created_at: formatDistance(new Date(), new Date(createdAt)).replace(
          "about ",
          "" 
        ),//check the distance between two dates, current date and created date
      };
    });
    return ticketData.reverse();
  } catch (error) {
    throw new Error(`something went wrong, ${error}`);
  }
}

export async function deleteComment(id: string, formData: FormData) {
  const password=formData.get('password') as string
  try {
    console.log(id, password)
    if(password === process.env.DELETE_PASSWORD){
      console.log("password is correct",)
      await Comment.findByIdAndDelete(id)
      revalidatePath("/contact");
    } else {
      console.log("password is incorrect")
    }
    

  } catch(error) {
    throw new Error(`something went wrong, ${error}`);
  }
}