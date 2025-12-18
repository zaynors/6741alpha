import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PostCard from '@/components/PostCard';
import SearchPanel from '@/components/SearchPanel';
import TrendsPanel from '@/components/TrendsPanel';
import WhoToFollowPanel from '@/components/WhoToFollowPanel';

const samplePosts = [
  {
    author: 'Admin',
    handle: 'admin',
    timestamp: '3 years ago',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    content: 'Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis ac eu nisi. In accumsan tellus ut dapibus blandit.',
    quote: 'Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui. Cras et sagittis erat. Maecenas pulvinar, turpis in dictum tincidunt, dolor nibh lacinia lacus.',
    likes: 0
  },
  {
    author: 'Admin',
    handle: 'admin',
    timestamp: '3 years ago',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    content: 'Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.',
    quote: 'Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui.',
    likes: 0
  },
  {
    author: 'Admin',
    handle: 'admin',
    timestamp: '3 years ago',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    content: 'Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.',
    likes: 0
  },
  {
    author: 'Admin',
    handle: 'admin',
    timestamp: '3 years ago',
    content: 'All in the world know the beauty of the beautiful, and in doing this they have (the idea of) what ugliness is; they all know the skill of the skilful, and in doing this they have (the idea of) what the want of skill is. So it is that existence and nonexistence give birth the one to (the idea of) the other; that difficulty and ease produce the one (the idea of) the other.',
    quote: 'The work is done, but how no one can see; This that makes the power not cease to be.',
    likes: 0
  },
  {
    author: 'Admin',
    handle: 'admin',
    timestamp: '3 years ago',
    content: 'Not finding an explanation in science I began to seek for it in life, hoping to find it among the people around me. And I began to observe how the people around me lived, and what their attitude was to this question which had brought me to despair.',
    likes: 0
  },
  {
    author: 'Admin',
    handle: 'admin',
    timestamp: '3 years ago',
    content: 'Begin each day by telling yourself: Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness all of them due to the offenders\' ignorance of what is good or evil.',
    likes: 1
  }
];

export default function Index() {
  return (
    <section
      aria-label="main"
      style={{
        position: 'relative',
        backgroundColor: 'rgb(255, 255, 255)',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1320px',
          paddingLeft: '12px',
          paddingRight: '12px',
          width: '100%'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            flexWrap: 'wrap'
          }}
        >
          {/* Left Sidebar - Fixed Width */}
          <div
            style={{
              width: '275px',
              maxWidth: '100%',
              paddingBottom: '8px',
              paddingTop: '8px',
              position: 'sticky',
              top: '0',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <Header />
            <Sidebar />
          </div>

          {/* Main Feed */}
          <div
            style={{
              borderLeft: '0.909091px solid rgba(0, 0, 0, 0.1)',
              borderRight: '0.909091px solid rgba(0, 0, 0, 0.1)',
              flexBasis: '0',
              flexGrow: 1,
              height: '100%',
              maxWidth: '100%',
              width: '100%',
              borderStyle: 'none solid'
            }}
          >
            {samplePosts.map((post, idx) => (
              <PostCard
                key={idx}
                author={post.author}
                handle={post.handle}
                timestamp={post.timestamp}
                title={post.title}
                content={post.content}
                quote={post.quote}
                likes={post.likes}
              />
            ))}
          </div>

          {/* Right Sidebar */}
          <div
            style={{
              height: '100%',
              maxWidth: '100%',
              paddingLeft: '16px',
              position: 'sticky',
              top: '0',
              width: '400px'
            }}
          >
            <div
              style={{
                paddingBottom: '16px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '16px'
              }}
            >
              <SearchPanel />
              <TrendsPanel />
              <WhoToFollowPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
