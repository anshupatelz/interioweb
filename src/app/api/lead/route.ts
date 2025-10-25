import { NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, businessName, projectDetails, source } = body

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            )
        }

        // Store in MongoDB
        const client = await MongoClient.connect(process.env.MONGODB_URI || "")
        const db = client.db("interioweb")
        const leads = db.collection("leads")

        const leadData = {
            name,
            email,
            phone: phone || "",
            businessName: businessName || "",
            projectDetails: projectDetails || "",
            source,
            createdAt: new Date(),
            status: "new"
        }

        await leads.insertOne(leadData)
        await client.close()

        // Send email notification via Resend
        try {
            await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || "leads@interioweb.com",
                to: ["your-email@example.com"], // Replace with your email
                subject: `New Lead from ${name} (${source})`,
                html: `
                    <h2>New Lead Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    <p><strong>Business Name:</strong> ${businessName || "Not provided"}</p>
                    <p><strong>Project Details:</strong></p>
                    <p>${projectDetails || "Not provided"}</p>
                    <p><strong>Source:</strong> ${source}</p>
                    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                `
            })
        } catch (emailError) {
            console.error("Email sending error:", emailError)
            // Continue even if email fails
        }

        return NextResponse.json(
            { message: "Lead submitted successfully" },
            { status: 200 }
        )

    } catch (error) {
        console.error("Lead submission error:", error)
        return NextResponse.json(
            { error: "Failed to submit lead" },
            { status: 500 }
        )
    }
}
