export default function WhoToFollowPanel() {
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
        Who to follow
      </h5>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          marginBottom: '16px',
          overflowWrap: 'break-word',
          wordWrap: 'break-word'
        }}
      >
        <div
          style={{
            marginRight: '8px',
            borderRadius: '50%',
            overflow: 'hidden',
            objectFit: 'cover',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}
        >
          <img
            width="40"
            height="40"
            alt="Profile"
            loading="lazy"
            src="https://67.vvveb.com/media/vvveb.svg"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'inline',
              marginRight: '8px'
            }}
          />
        </div>
        <div
          style={{
            flexGrow: 1,
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}
        >
          <div
            style={{
              fontWeight: '700',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}
          >
            Admin
          </div>
          <small
            style={{
              color: 'rgba(0, 0, 0, 0.75)',
              display: 'inline',
              fontSize: '13.6px',
              lineHeight: '20.4px',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}
          >
            @<span style={{ display: 'inline' }}>admin</span>
          </small>
        </div>
        <button
          style={{
            appearance: 'button',
            backgroundColor: 'rgb(0, 0, 0)',
            borderRadius: '32px',
            color: 'rgb(255, 255, 255)',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '21px',
            padding: '4px 8px',
            textAlign: 'center',
            border: 'none',
            transition: 'background-color 0.15s ease-in-out',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgb(30, 30, 30)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgb(0, 0, 0)';
          }}
        >
          Follow
        </button>
      </div>
    </div>
  );
}
