import { Box, Heading, Stack } from '@chakra-ui/react';
import { ProjectCard } from './project-card';

const ProjectLists = [
  {
    title: 'Community ink',
    description: 'Community Ink is an Open Source Project which aims to build a social media platform for students in various higher institutions to get full access to learning resources of their campus, be updated on recent events and much more on campus-related activities.',
    src: '/assets/01.png',
    tags: ['HTML', 'CSS', 'React', 'Infima'],
    href: 'https://communityink.netlify.app/',
    codeHref: 'https://github.com/AdamsGeeky/communityink',
  },
  {
    title: 'SkillBoost Mentorship Platform',
    description: 'SkillBoost is a platform where students can get full access to their mentorship and much more.',
    src: '/assets/02.png',
    tags: ['React', 'Infima', 'Firebase', 'NodeJS', 'Google maps'],
    href: 'https://gdscgsu.web.app/',
    codeHref: 'https://github.com/AdamsGeeky/skillbost',
  },
  {
    title: 'Testflow',
    description: 'Testflow is a secure and efficient quiz management platform that allows educators to create, manage, and analyze quizzes with advanced security features.',
    src: '/assets/testflow.png',
    tags: ['React', 'NodeJS', 'PostgreSQL'],
    href: 'https://testflow-mu.vercel.app/',
    codeHref: 'https://github.com/AdamsGeeky/testflow',
  },
  {
    title: 'Navis',
    description: 'Navis is a web application that helps students navigate their campus and access learning resources using Google technologies.',
    src: '/assets/navis.png',
    tags: ['React', 'Google Maps API', 'NodeJS', 'Firebase'],
    href: 'https://navis.netlify.app/',
    codeHref: 'https://github.com/AdamsGeeky/navis',
  },
];

export function Projects() {
  return (
    <Box as='section' py='12'>
      <Heading as='h2' size='lg' pb={{ base: '6', md: '12' }}>
        Projects
      </Heading>
      <Stack spacing='16'>
        {ProjectLists.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Stack>
    </Box>
  );
}
