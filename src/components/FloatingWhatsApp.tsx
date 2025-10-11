const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your technical services. Can you provide more information?");
    window.open(`https://wa.me/971558700738?text=${message}`, '_blank');
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className="cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={handleWhatsAppClick}
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '12px',
          flexDirection: 'row'
        }}
      >
        <div 
          style={{ 
            backgroundColor: 'white',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            borderRadius: '9999px',
            padding: '12px 20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            whiteSpace: 'nowrap'
          }}
        >
          Chat with us
        </div>
        <div
          style={{
            width: '60px',
            height: '60px',
            minWidth: '60px',
            minHeight: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.5), 0 0 80px rgba(37, 211, 102, 0.4)',
            overflow: 'hidden'
          }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
            alt="WhatsApp"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;