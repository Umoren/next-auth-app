import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
export default function ForgotPasswordEmail({
    params,
}: {
    params: { name: string; url: string };
}) {
    return (
        <Html>
            <Heading as="h2"> Hello {params.name} </Heading>
            <Text>
                We received the reset password request. if it's not you then pls ignore
                it.
            </Text>
            <Button
                href={params.url}
                style={{ background: "#000", color: "#FFFFFF", paddingTop: "20px", paddingBottom: "20px" }}
            >
                Reset Password
            </Button>
            <Hr />
        </Html>
    );
}