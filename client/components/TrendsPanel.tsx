export default function TrendsPanel() {
  const trends = [
    { tag: 'Tag 1', posts: 1 },
    { tag: 'Tag 2', posts: 1 }
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        border: '0.909091px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '16px',
        overflow: 'hidden',
        paddingBottom: '16px',
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingTop: '16px',
        position: 'relative'
      }}
    >
      <h5
        style={{
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '16px',
          wordBreak: 'break-word',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        Trends for you
      </h5>
      <div style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
        {trends.map((trend, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '16px',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}
          >
            <a
              href={`/cat/${trend.tag.toLowerCase()}`}
              style={{
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '21px',
                textDecoration: 'none',
                color: 'rgb(15, 20, 25)',
                overflowWrap: 'break-word',
                wordWrap: 'break-word'
              }}
            >
              <span style={{ display: 'inline' }}>#{trend.tag}</span>
            </a>
            <div
              style={{
                color: 'rgba(0, 0, 0, 0.75)',
                display: 'inline',
                fontSize: '13.6px',
                lineHeight: '20.4px',
                marginLeft: '4px',
                overflowWrap: 'break-word',
                wordWrap: 'break-word'
              }}
            >
              {trend.posts} posts
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
