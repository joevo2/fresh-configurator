import styled from "../theme";

export default styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  > header {
    flex: 0;
  }
  > main {
    background-color: white;
    display: flex;
    flex-direction: row;
    flex: 1;
    > * {
      flex: 1;
    }

    > nav {
      flex: unset;
    }
  }
  > footer {
    flex: 0;
    display: flex;
    justify-content: space-between;
    height: 20px;
    padding: 0 10px 0 10px;
    border-top: 1px solid #7d7d79;
    background-color: #bfbeb5;
  }
`;