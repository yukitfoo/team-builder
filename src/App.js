import logo from './logo.svg';
import './css/App.css';
import {Button, Container, Header, SpaceBetween, Modal, Box, Cards, Link, FileUpload, FormField, ColumnLayout, RadioGroup, Input} from "@cloudscape-design/components"
import { useState } from 'react';



function App() {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState([]);
  const [survey, setSurvey] = useState("");
  return (
    <div className="App">
      <Container>
        <Header 
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button>Login</Button>
              <Button variant="primary">
                Sign Up
              </Button>
            </SpaceBetween>}
          variant="h1"
        >
          Team Builder App
        </Header>
      </Container>
      <Container>
        <Box>
        <Cards
      ariaLabels={{
        itemSelectionLabel: (e, n) => `select ${n.name}`,
        selectionGroupLabel: "Item selection"
      }}
      cardDefinition={{
        header: item => (
          <Link href="#" fontSize="heading-m">
            {item.name}
          </Link>
        ),
        sections: [
          {
            id: "description",
            header: "Description",
            content: item => item.description
          }
        ]
      }}
      cardsPerRow={[
        { cards: 1 },
        { minWidth: 500, cards: 2 }
      ]}
      items={[
        {
          name: "Team member",
          alt: "First",
          description: "Complete questionnaire to assist in making even teams "
        },
        {
          name: "Organiser",
          alt: "Second",
          description: "Input names and assign link to sign up, link your own questionnaire"
        }
      ]}
      loadingText="Loading resources"
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>  
          </SpaceBetween>
        </Box>
      }
      header={<Header variant='h3'>Guide</Header>}
    />
        </Box>
      </Container>
      <Container>
        <Header variant='h3'>Team Member</Header>
        <Button onClick={()=>{setModal(true);}}>
          Take Questionnaire  
        </Button>
        
        <Modal
          onDismiss={() => setModal(false)}
          visible={modal}
          footer={
            <Box float="right">
              <SpaceBetween direction="horizontal" size="xs">
                <Button variant="link">Submit</Button>
              </SpaceBetween>
            </Box>
          }
          header="Questionnaire"
        >
          <Container>
            <SpaceBetween direction='vertical' size = "xs">
              <Header>
                Sample Question #1
              </Header>
              <RadioGroup
                onChange={({ detail }) => setValue(detail.value)}
                value={value}
                items={[
                  { value: "first", label: "First choice" },
                  { value: "second", label: "Second choice" },
                  { value: "third", label: "Third choice" }
                ]}
              />
              
            </SpaceBetween>
          </Container>
        </Modal>
      </Container>
      <Container>
        <Header variant='h3'>Organiser</Header>
        <ColumnLayout columns={2}>
          <Container>
            
            <FormField
              label="Upload a csv file"
              description="Include email, id (if applicable)"
            >
              <FileUpload
                onChange={({ detail }) => setValue(detail.value)}
                value={value}
                i18nStrings={{
                  uploadButtonText: e =>
                    e ? "Choose files" : "Choose file",
                  dropzoneText: e =>
                    e
                      ? "Drop files to upload"
                      : "Drop file to upload",
                  removeFileAriaLabel: e =>
                    `Remove file ${e + 1}`,
                  limitShowFewer: "Show fewer files",
                  limitShowMore: "Show more files",
                  errorIconAriaLabel: "Error"
                }}
                showFileLastModified
                showFileSize
                showFileThumbnail
                tokenLimit={3}
                constraintText="Hint text for file requirements"
              />
            </FormField>
          </Container>
          <Container>
                <FormField
                  label="Survey Link"
                >
                  <SpaceBetween  direction="vertical" size="xxs">

                    <Input
                        value={survey}
                        onChange={event =>
                          setSurvey(event.detail.value)
                    }/>
                    <Button>
                      Submit
                    </Button>
                  </SpaceBetween>
                </FormField>
          </Container>
        </ColumnLayout>
      </Container>
    </div>
  );
}

export default App;
