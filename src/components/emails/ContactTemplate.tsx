import {
    Html,
    Head,
    Body,
    Container,
    Preview,
    Font,
    Heading,
    Text,
    Section,
} from '@react-email/components';

type ContactTemplateProps = {
    firstName: string;
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactTemplate({
    firstName,
    name,
    email,
    phone,
    message,
}: ContactTemplateProps) {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily='Roboto'
                    fallbackFontFamily='Arial'
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
                        format: 'woff2',
                    }}
                />
            </Head>
            <Preview>
                Nouveau message de {firstName} {name}
            </Preview>
            <Body
                style={{
                    fontFamily: 'Roboto, Arial, sans-serif',
                    padding: '20px',
                    margin: '0 auto',
                    maxWidth: '600px',
                }}
            >
                <Container
                    style={{
                        fontFamily: 'Roboto, Arial, sans-serif',
                        padding: '20px',
                        margin: '0 auto',
                        maxWidth: '600px',
                    }}
                >
                    <Section>
                        <Heading
                            as='h1'
                            style={{
                                marginBottom: '10px',
                                fontSize: '24px',
                                fontWeight: '700',
                            }}
                        >
                            Bonjour tu as un nouveau message de {firstName}{' '}
                            {name}.
                        </Heading>
                        <Text
                            style={{
                                marginBottom: '10px',
                                fontSize: '16px',
                                fontStyle: 'italic',
                            }}
                        >
                            Email: {email}
                        </Text>
                        <Text
                            style={{
                                marginBottom: '10px',
                                fontSize: '16px',
                            }}
                        >
                            Téléphone: {phone}
                        </Text>
                        <Text
                            style={{
                                marginBottom: '10px',
                                fontSize: '16px',
                            }}
                        >
                            Message: {message}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
