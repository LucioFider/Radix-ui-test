import { Container, Flex, Heading, Text, Card, Badge } from "@radix-ui/themes";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading>Coding Issue Tracker</Heading>
          <Text color="gray">
            Here you find the issues relevent to your certain project
          </Text>
        </Flex>

        <Flex gap="4" direction="column">
          <Card>
            <Flex gap="2" direction="column">
              <Text>Issue #24 -Button is Wrong Color</Text>
              <Flex gap="2">
                <Badge color="orange">Devops</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                highlights #
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex gap="2" direction="column">
              <Text>Issue #24 -Button is Wrong Color</Text>
              <Flex gap="2">
                <Badge color="red">Design</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                highlights #
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Flex gap="2" direction="column">
              <Text>Issue #24 -Button is Wrong Color</Text>
              <Flex gap="2">
                <Badge color="green">Hacking</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                highlights #
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
