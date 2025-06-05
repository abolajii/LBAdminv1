import styled from "styled-components";
import usersStore from "../../../store/index";

const Container = styled.div``;

const Inner = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  gap: 100px;
  display: flex; /* Use flex container to create two columns */
`;

const Column = styled.div`
  flex: 1; /* Equal width for both columns */
`;

const PreferenceItem = styled.div`
  border-bottom: 2px solid #ffe5e5;
  padding: 10px 0;
  margin-bottom: 20px;

  .key {
    color: #555;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; /* 160% */
  }

  .value {
    color: #ce1f1f;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; /* 160% */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  border-top: 1px solid #ebedf3;
  margin-top: 30px;
`;

const SaveChanges = styled.button`
  padding: 12px 20px;
  background-color: #ce1f1f;
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;

const Discard = styled(SaveChanges)`
  color: #555;
  background-color: #fff;
`;

const Preference = () => {
  const { singleUser } = usersStore();
  const preferences = singleUser.preferences;

  // Define the keys to display
  const keys = [
    "gender",
    "age",
    "height",
    "distance",
    "ethnicity",
    "religion",
    "education",
    "relationship_goals",
    "kids",
    "smoking",
    "drinking",
  ];

  // Split keys into two equal parts
  const middleIndex = Math.ceil(keys.length / 2);
  const firstHalfKeys = keys.slice(0, middleIndex);
  const secondHalfKeys = keys.slice(middleIndex);

  return (
    <Container className="lato">
      <Inner>
        <Column>
          {firstHalfKeys.map((key) => (
            <PreferenceItem
              className="flex ai-center justify-between"
              key={key}
            >
              <div className="key">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
              <div className="value">
                <div className="value">
                  {key === "age" &&
                  Array.isArray(preferences[key]) &&
                  preferences[key].length > 0
                    ? `${preferences[key][0]} - ${preferences[key][1]}`
                    : key === "distance" && !isNaN(preferences[key])
                    ? preferences[key] > 0
                      ? `${preferences[key]} mi`
                      : ""
                    : preferences[key]}
                </div>
              </div>
            </PreferenceItem>
          ))}
        </Column>
        <Column>
          {secondHalfKeys.map((key) => (
            <PreferenceItem
              className="flex ai-center justify-between"
              key={key}
            >
              <div className="key">
                {key
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </div>

              <div className="value">{preferences[key]}</div>
            </PreferenceItem>
          ))}
        </Column>
      </Inner>

      <ButtonContainer>
        <Discard>Discard</Discard>
        <SaveChanges>Save changes</SaveChanges>
      </ButtonContainer>
    </Container>
  );
};

export default Preference;
