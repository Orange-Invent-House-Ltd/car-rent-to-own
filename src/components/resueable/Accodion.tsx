import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "./HomeDatas";

export default function FrequentlyAskedQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      {faqData.map((item) => (
        <Accordion
          key={item.id}
          slotProps={{ transition: { unmountOnExit: true } }}
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="text-primary-light"
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-secondary-dark">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
