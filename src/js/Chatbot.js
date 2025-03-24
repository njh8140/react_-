import React, { useState, useRef } from 'react';
import '../css/Chatbot.css'; // CSS 파일을 임포트합니다.

const Chatbot = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [receiveMessage, setReceiveMessage] = useState([]);
    const inputRef = useRef(null);
    const messagesEndRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 표시할 메시지의 인덱스
    //const receiveMessage = [];

    const toggleChatbot = () => {
        setIsVisible(prev => !prev);
    };

    const sendMessage = (event) => {
        if (event && event.key !== 'Enter' && event.type !== 'click') return;

        fetch('http://localhost:9191/api/menu/chatbot', {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then((res) => res.json())
        .then((res) => {           

            if (!res.messages || !Array.isArray(res.messages)) {
                console.error("messages 배열이 올바르지 않습니다.");
                return;
            }
               
            res.messages.forEach((msg, index) => {
                
                    setReceiveMessage(prevReceiveMessage => [...prevReceiveMessage, msg.content]);
                
            });
                
        });
        
        const message = inputRef.current.value.trim();
        if (message === '') return;

        // 사용자 메시지 추가
        setMessages(prevMessages => [
            ...prevMessages,
            { text:  ' [나]: ' + message , sender: 'user' }
        ]);
        
        // 챗봇 응답 추가 (여기서는 단순히 사용자 메시지를 반복)
        
            
        if (currentIndex < receiveMessage.length) {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: '[챗봇]: ' + receiveMessage[currentIndex], sender: 'bot' }
            ]);
            setCurrentIndex(prevIndex => prevIndex + 1); // 다음 메시지로 이동
        }
        

        // 입력 필드 초기화
        inputRef.current.value = '';

        // 스크롤 맨 아래로 이동
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="chatbot-icon" onClick={toggleChatbot}>
                💬
            </div>
            
            {isVisible && (
                <div id="chatbot" className="chatbot">
                    <div className="chatbot-header">
                        <span>챗봇</span>
                        <button onClick={toggleChatbot}>&times;</button>
                    </div>
                    <div id="chatbotMessages" className="chatbot-messages" style={{ overflowY: 'auto', maxHeight: '300px' }}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}-message`}>
                                {msg.text}
                                <br/>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot-input">
                        <input
                            id="chatbotInput"
                            type="text"
                            ref={inputRef}
                            onKeyDown={sendMessage}
                            placeholder="메시지를 입력하세요..."
                        />
                        <button onClick={sendMessage}>전송</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;