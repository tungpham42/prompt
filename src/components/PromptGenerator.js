import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import categories from "../data/categories";
import promptTemplates from "../data/promptTemplates";

const PromptGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("Writing");
  const [prompt, setPrompt] = useState("");
  const [savedPrompts, setSavedPrompts] = useState([]);

  const generatePrompt = () => {
    const templates = promptTemplates(keyword)[category];
    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];
    setPrompt(randomTemplate);
  };

  const savePrompt = () => {
    if (prompt && !savedPrompts.includes(prompt)) {
      setSavedPrompts([...savedPrompts, prompt]);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Prompt copied to clipboard!");
  };

  const exportPrompts = () => {
    const element = document.createElement("a");
    const file = new Blob([savedPrompts.join("\n\n")], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "saved-prompts.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-lg">
        <h3 className="mb-4">🎯 Prompt Generator</h3>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Enter a keyword</Form.Label>
              <Form.Control
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g., time travel"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select a category</Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="primary"
          onClick={generatePrompt}
          disabled={!keyword.trim()}
        >
          Generate Prompt
        </Button>

        {prompt && (
          <Card className="mt-4 p-3 bg-light">
            <h5>Generated Prompt:</h5>
            <p>{prompt}</p>
            <Button variant="success" className="me-2" onClick={savePrompt}>
              Save Prompt
            </Button>
            <Button variant="secondary" onClick={() => copyToClipboard(prompt)}>
              Copy to Clipboard
            </Button>
          </Card>
        )}
      </Card>

      {savedPrompts.length > 0 && (
        <Card className="mt-5 p-4">
          <h5 className="mb-3">💾 Saved Prompts</h5>
          <ListGroup>
            {savedPrompts.map((p, i) => (
              <ListGroup.Item key={i}>
                {p}
                <Button
                  size="sm"
                  variant="outline-secondary"
                  className="float-end"
                  onClick={() => copyToClipboard(p)}
                >
                  Copy
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button className="mt-3" variant="dark" onClick={exportPrompts}>
            Export as .txt
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default PromptGenerator;
