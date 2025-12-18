import { Search } from 'lucide-react';

export default function SearchPanel() {
  return (
    <div style={{ marginBottom: '16px' }}>
      <form
        action="/search"
        method="get"
        style={{ position: 'relative' }}
      >
        <input
          type="hidden"
          name="route"
          value="search"
        />
        <div style={{ position: 'relative' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '10px',
              top: '9px',
              color: 'rgb(108, 117, 125)'
            }}
          />
          <input
            type="search"
            name="search"
            placeholder="Start typing to search"
            style={{
              width: '100%',
              padding: '9.6px 9.6px 9.6px 32px',
              borderRadius: '15px',
              border: '0.909091px solid rgb(222, 226, 230)',
              backgroundColor: 'rgb(255, 255, 255)',
              fontSize: '13.6px',
              lineHeight: '20.4px',
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 2px 0px inset',
              outline: 'none',
              transition: 'border-color 0.15s ease-in-out'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgb(77, 77, 209)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgb(222, 226, 230)';
            }}
          />
        </div>
      </form>
    </div>
  );
}
