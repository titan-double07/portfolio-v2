"use server";
import Comment from "@/app/(models)/comment-model";
import { revalidatePath, revalidateTag } from "next/cache";
import { formatDistance } from "date-fns";
import { unstable_cache } from "next/cache";

export async function createComment(formData: FormData) {
  try {
    const { name, email, comment } = Object.fromEntries(formData.entries());

    const commentData = {
      name,
      email,
      comment,
    };

    const newComment = await Comment.create(commentData);
    // revalidatePath("/contact");
    revalidateTag("comments");
    

    return {
      success: true,
      message: "Comment created",
    };
  } catch (error) {
    return {
      success: false,
      message: `something went wrong, ${error}`,
    };
  
  }
}

export const getComments = 
  async () => {
  try {
    // Simulate a delay of seconds
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    let ticketData = await Comment.find({});
    ticketData = ticketData?.map((ticket) => {
      const { _id: id, name, email, comment, createdAt } = ticket;

      return {
        id: id.toString(),
        name,
        email,
        comment,
        created_at: formatDistance(new Date(), new Date(createdAt)).replace(
          "about ",
          ""
        ), //check the distance between two dates, current date and created date
      };
    });
    return {
      success: true,
      data: ticketData.reverse(),
    };
  } catch (error) {
    console.error("Error fetching comments:", error);
    return {
      success: false,
      message: `something went wrong, ${error}`,
    };
  }
  }

export async function deleteComment(id: string,
  formData: FormData
) {
  const password = formData.get("password") as string;
  try {
    if (password === process.env.DELETE_PASSWORD) {
      await Comment.findByIdAndDelete(id);
      // revalidatePath("/contact");
      revalidateTag("comments");
      console.log("password is correct and message has been deleted");

      return {
        success: true,
        message: "Comment deleted successfully",
      };
    } else {
      console.log("password is incorrect");
      return {
        success: false,
        message: "Incorrect password",
      };
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    return {
      success: false,
      message: `Something went wrong: ${error}`,
    };
  }
}