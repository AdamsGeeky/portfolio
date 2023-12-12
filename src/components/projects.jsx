import { Box, Heading, Stack } from '@chakra-ui/react';
import { ProjectCard } from './project-card';


const ProjectLists = [
  {
    title: 'Community ink',
    description: 'Community Ink is an Open Source Project which aims to build a social media platform for studens in various higher institutions to get full access to learning resources of their campus, be updated on recent events and much more on campus related activities.',
    src: '/assets/01.png',
    tags: ['HTML', 'CSS', 'React', 'Infima'],
    href: 'https://communityink.netlify.app/',
    codeHref: 'https://github.com/AdamsGeeky/communityink',
  },
  {
    title: 'Navist',
    description: 'Navigation System for GSU Students.',
    src: '/assets/02.png',
    tags: ['React','Infima', 'Firebase', 'NodeJS', 'Google maps' ],
    href: 'https://gsunavis.web.app/',
    codeHref: 'https://github.com/AdamsGeeky/plish-spaces',
  },
  {
    title: 'Creative Clubs',
    description: 'Creative Clubs is a platform where students can get full access to Clubs activeties and much more.',
    src: '/assets/prot03.png',
    tags: ['React', 'Infima', 'NodeJS'],
    href: 'https://creativeclubgsu.github.io/web/',
    codeHref: 'https://github.com/creativeclubgsu/web',
  }
  
]

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
