import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(
            process.env.CLERK_WEBHOOK_SECRET)

        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        }

        await whook.verify(JSON.stringify(req.body), headers)

        const { type, data } = req.body;

        switch (type) {
            case "user.created":
                {
                    const userDate = {
                        _id: data.id,
                        email: data.email_addresses[0].email_address,
                        username: data.first_name + " " + data.last_name,
                        image: data.image_url
                    };
                    await User.create(userDate);
                    console.log("New user created and saved to DB");
                    break;
                }

            case "user.updated":
                {
                    const userDate = {
                        _id: data.id,
                        email: data.email_addresses[0].email_address,
                        username: data.first_name + " " + data.last_name,
                        image: data.image_url
                    };
                    await User.findByIdAndUpdate(date.id, userDate);
                    break;
                }
            case "user.delted":
                {
                    await User.findByIdAndDelete(date.id);
                    break;
                }
        }

        res.json({ success: true, massage: "Webhook received successfully" });
    } catch (error) {
        console.log(error.massage)
        res.json({ success: false, massage: error.massage });

    }
};

export default clerkWebhooks;