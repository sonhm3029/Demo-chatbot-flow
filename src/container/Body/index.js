import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BodyStyleWrapper from "./styled";
import stories from "@src/stories";
import useCustomState from "@hook/useCustomState";
import { Button, Col, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { FlowNode } from "@src/core";

const Body = () => {
  const [state, setState] = useCustomState({
    isEnd: false,
    history: [],
    currentNode: FlowNode({
      prev: null,
      id: "1",
    }),
  });
  const {
    story1: { storyFlow, storyAnswer },
  } = stories;

  const handleOptionClick =
    ({ type, next }) =>
    (_) => {
      console.log(`Type: ${type}, Next: ${next}`);
      let newHistory = [...state.history];

      let updateObj = {
        currentNode: FlowNode({
          id: `${next}`,
          prev: state.currentNode.id,
        }),
      };
      if (type === "answer") {
        updateObj["isEnd"] = true;
      }
      console.log(updateObj);
      newHistory.push({ ...state.currentNode });
      setState({
        ...updateObj,
        history: newHistory,
      });
    };

  const handleNavigateBack = () => {
    let newHistory = [...state.history];
    let backNode = newHistory.pop();
    setState({
      history: newHistory,
      currentNode: backNode,
      isEnd: false,
    });
  };

  console.log("FLOW", storyFlow);
  console.log("ANSWER", storyAnswer);
  console.log("HISTORY", state.history);
  useEffect(() => {}, []);

  return (
    <BodyStyleWrapper>
      <div className="func-option-wrapper">
        {state.currentNode.prev && (
          <Button className="no-border mb-4" onClick={handleNavigateBack}>
            <ArrowLeftOutlined />
          </Button>
        )}
      </div>
      <div className="story-text">
        {state.isEnd ? (
          <p className="text-center">{storyAnswer[state.currentNode.id]}</p>
        ) : (
          storyFlow[state.currentNode.id]?.text?.map((item, index) => (
            <p key={`text_${index + 1}`}>{item}</p>
          ))
        )}
      </div>
      {!state?.isEnd && (
        <Row gutter={[16, 16]} className="option-wrapper">
          {storyFlow[state.currentNode.id].options?.map(
            (item, index, array) => (
              <Col
                key={`option_${index + 1}`}
                span={array?.length > 1 ? 12 : 24}
              >
                <Button
                  className="option-btn"
                  onClick={handleOptionClick({
                    type: item[1] ? "next" : "answer",
                    next: item[1] ? item[1] : item[2],
                  })}
                  block
                  style={{
                    height: "auto",
                  }}
                >
                  {item[0]}
                </Button>
              </Col>
            )
          )}
        </Row>
      )}
    </BodyStyleWrapper>
  );
};

export default Body;
