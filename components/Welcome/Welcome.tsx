import { Title, Text, Anchor, Container, Button } from '@mantine/core';
import useStyles from './Welcome.styles';
import Link from 'next/link';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Container>

        <Title className={classes.title} align="center" mt={100}>
          <Text inherit variant="gradient" component="span">
            Ruumii
          </Text>
        </Title>
        <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          Find your perfect roommates
        </Text>

        {/* this centered button links to the questions page */}
        <Link href="/questions">
          <Button
            variant="gradient"
            size="lg"
            fullWidth
            mt="xl"
          >
            Get started
          </Button>
        </Link>
      </Container>

    </>
  );
}
