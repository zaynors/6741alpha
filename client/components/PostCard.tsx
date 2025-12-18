import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PostCardProps {
  author: string;
  handle: string;
  timestamp: string;
  title: string;
  content: string;
  quote?: string;
  image?: string;
  likes?: number;
}

export default function PostCard({
  author,
  handle,
  timestamp,
  title,
  content,
  quote,
  image,
  likes = 0
}: PostCardProps) {
  const isMobile = useIsMobile();

  const padding = isMobile ? '16px' : '32px';

  return (
    <div
      style={{
        borderBottom: '0.909091px solid rgba(0, 0, 0, 0.1)',
        paddingBottom: padding,
        paddingLeft: padding,
        paddingRight: padding,
        paddingTop: padding,
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex' }}>
        <div
          style={{
            marginRight: '8px',
            borderRadius: '50%',
            overflow: 'hidden'
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
              display: 'inline'
            }}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4px'
            }}
          >
            <a
              href={`/@${handle}`}
              style={{
                cursor: 'pointer',
                fontWeight: '600',
                marginRight: '8px',
                textDecoration: 'none',
                color: 'rgb(15, 20, 25)'
              }}
            >
              {author}
            </a>
            <span
              style={{
                fontSize: '13.6px',
                lineHeight: '20.4px',
                color: 'rgba(0, 0, 0, 0.75)'
              }}
            >
              @{handle} · {timestamp}
            </span>
          </div>

          <a
            href="#"
            style={{
              cursor: 'pointer',
              display: 'inline',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div
              style={{
                fontSize: '15px',
                lineHeight: '22.5px'
              }}
            >
              {title && (
                <h2
                  style={{
                    fontSize: '32px',
                    fontWeight: '500',
                    lineHeight: '38.4px',
                    marginBottom: '32px',
                    wordBreak: 'break-word'
                  }}
                >
                  {title}
                </h2>
              )}

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '22.5px',
                  marginBottom: '16px'
                }}
              >
                {content}
              </p>

              {quote && (
                <blockquote
                  style={{
                    borderLeft: '3.63636px solid rgb(241, 243, 247)',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    fontStyle: 'italic',
                    fontSize: '15px',
                    lineHeight: '22.5px',
                    marginBottom: '16px',
                    letterSpacing: '0.16px'
                  }}
                >
                  <p>{quote}</p>
                </blockquote>
              )}

              {image && (
                <img
                  src={image}
                  alt="Post content"
                  loading="lazy"
                  style={{
                    borderRadius: '4px',
                    maxWidth: '100%',
                    marginBottom: '16px'
                  }}
                />
              )}
            </div>
          </a>

          <div
            style={{
              display: 'flex',
              fontSize: '14px',
              justifyContent: 'space-between',
              lineHeight: '21px',
              width: '75%',
              marginTop: '16px'
            }}
          >
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: 'rgb(83, 100, 113)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <MessageCircle size={16} />
              <span style={{ fontSize: '12.25px' }}>0</span>
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: 'rgb(83, 100, 113)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <Repeat2 size={16} />
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: 'rgb(83, 100, 113)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <Heart size={16} />
              <span style={{ fontSize: '12.25px' }}>{likes}</span>
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: 'rgb(83, 100, 113)',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <Share size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
