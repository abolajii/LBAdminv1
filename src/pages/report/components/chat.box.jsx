import { format, isToday, isYesterday, startOfDay } from "date-fns";

import { BiSolidMessageAltDetail } from "react-icons/bi";
import { Comment } from "react-loader-spinner";
import ImageContainer from "./image";
import React from "react";
import Seen from "./seen";
import { Skeleton } from "../../../components";
import { colors } from "../../../constants";
import styled from "styled-components";
import useReportOptions from "../hook/useReport";

const ChatBoxContainer = styled.div`
  height: 700px;
  .padding {
    padding: 0 10px;
  }

  .animation {
    height: 70px;
    place-items: center;
    display: grid;
  }

  .loading-text {
    font-size: 12px;
    margin-top: 10px;
  }
`;

const Header = styled.div`
  padding: 25px 30px;
`;

const Name = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const Body = styled.div`
  border-top: 2px solid ${colors.border};
  flex: 1;
  padding: 0 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
`;

const SenderMessage = styled.div`
  background-color: ${colors.white};
  border-radius: 15px 15px 0px 15px;
  padding: 10px;
  margin: 5px 0;
  width: fit-content; /* Added property to fit the message content */
  align-self: flex-end; /* Align the sender message to the end of the container */

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #000;
  }
`;

const SeenAndTime = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Align SeenAndTime to the right */
  .time {
    margin-right: 5px;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const Right = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  max-width: 55%;
`;

const Left = styled.div`
  max-width: 55%;
  margin-right: auto;
`;

const ReceiverMessage = styled.div`
  background-color: #fcebec;
  padding: 10px;
  margin: 5px 0;
  display: inline-block;
  border-radius: 15px 15px 15px 0px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #000;
  }
`;

const MessageGroupLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${colors.bgSecondary};
  height: 45px;
`;

const Line = styled.div`
  height: 1px;
  background: ${colors.darkBorder};
  width: 100%;
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
`;

const ChatBox = () => {
  const {
    singleLoading,
    messages,
    messageLoading,
    getAllMessages,
    singleReport,
    setMessages,
  } = useReportOptions();

  React.useEffect(() => {
    setMessages([]);
  }, [setMessages]);

  React.useEffect(() => {
    getAllMessages();
  }, [getAllMessages]);

  // Function to group messages by date
  const groupMessagesByDate = (messages) => {
    const groupedMessages = {};

    messages?.forEach((msg) => {
      const date = startOfDay(new Date(msg.createdAt)).getTime();
      if (groupedMessages[date]) {
        groupedMessages[date].push(msg);
      } else {
        groupedMessages[date] = [msg];
      }
    });

    return groupedMessages;
  };

  const groupedMessages = groupMessagesByDate(messages);

  // Convert the groupedMessages object into an array of objects
  const groupedMessagesArray = Object.entries(groupedMessages).map(
    ([timestamp, messages]) => ({
      timestamp: parseInt(timestamp),
      messages,
    })
  );

  // Sort the groupedMessagesArray in descending order by timestamp
  groupedMessagesArray.sort((a, b) => b.timestamp - a.timestamp);

  // Function to determine if a message has been seen by the receiver
  const hasSeenMessage = (message) => {
    // If the message is from the receiver, check if other users have seen it
    return message.seenBy.length > 1;
  };

  if (singleLoading) {
    return (
      <ChatBoxContainer className="flex flex-col">
        <Header className="flex ai-center justify-between">
          <div className="flex ai-center cursor">
            <Skeleton height="40px" width="40px" border={40} mr="10px" />
            <Name>
              <Skeleton height="19px" width="90px" border={4} />
            </Name>
          </div>
        </Header>
        <div className="padding">
          <MessageGroupLabel>
            <Skeleton height="3px" width="40%" />
            <Label>
              <Skeleton height="15px" width="70px" border="3" />
            </Label>
            <Skeleton height="3px" width="40%" />
          </MessageGroupLabel>
          <div className="animation">
            <Comment
              visible={true}
              height="20"
              width="20"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor="#ce1f1f"
            />
            <p className="loading-text">Loading messages...</p>
          </div>
        </div>
      </ChatBoxContainer>
    );
  }

  if (!messageLoading && messages.length === 0) {
    return (
      <ChatBoxContainer className="flex flex-col">
        <Header className="flex ai-center justify-between">
          <div className="flex ai-center cursor">
            <ImageContainer src={singleReport.reportedUser.picture} />
            <Name>{singleReport.reportedUser.name}</Name>
          </div>
        </Header>
        <div className="padding">
          <MessageGroupLabel>
            <Line />
            <Label>Today</Label>
            <Line />
          </MessageGroupLabel>
          <div className="center flex-col">
            <BiSolidMessageAltDetail />
            <p className="loading-text">No messages...</p>
          </div>
        </div>
      </ChatBoxContainer>
    );
  }

  return (
    <ChatBoxContainer className="flex flex-col">
      <Header className="flex ai-center justify-between">
        <div className="flex ai-center cursor">
          <ImageContainer src={singleReport.reportedUser.picture} />
          <Name>{singleReport.reportedUser.name}</Name>
        </div>
      </Header>
      <Body>
        <div>
          <div>
            {groupedMessagesArray.map(({ timestamp, messages }) => {
              const dateObj = new Date(timestamp);

              let messageGroupLabel = "";
              if (isToday(dateObj)) {
                messageGroupLabel = "Today";
              } else if (isYesterday(dateObj)) {
                messageGroupLabel = "Yesterday";
              } else {
                messageGroupLabel = format(dateObj, "EEEE"); // Format as day of the week (e.g., "Monday")
              }

              return (
                <div key={timestamp}>
                  <MessageGroupLabel>
                    <Line />
                    <Label>{messageGroupLabel}</Label>
                    <Line />
                  </MessageGroupLabel>
                  {messages.map((msg) => {
                    console.log();
                    const isSender =
                      msg.sender === singleReport.reportedUser._id;

                    return isSender ? (
                      <Right key={msg._id}>
                        <SenderMessage>
                          <p>{msg.content}</p>
                        </SenderMessage>
                        <SeenAndTime>
                          {msg.createdAt && (
                            <p className="time">
                              {format(new Date(msg.createdAt), "p")}
                            </p>
                          )}
                          <Seen
                            fill={hasSeenMessage(msg) ? "#CE1F1F" : "#ccc"}
                          />
                        </SeenAndTime>
                      </Right>
                    ) : (
                      <Left key={msg._id}>
                        <ReceiverMessage>
                          <p>{msg.content}</p>
                        </ReceiverMessage>
                        <SeenAndTime receiver={true}>
                          {msg.createdAt && (
                            <p className="time">
                              {format(new Date(msg.createdAt), "p")}
                            </p>
                          )}
                        </SeenAndTime>
                      </Left>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Body>
    </ChatBoxContainer>
  );
};

export default ChatBox;
