import { Accordion } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"

interface Props {
    selectedData: object
}

export const Content: React.FC<Props> = (selectedData) => {
    return (
        <div className="grid">
            <Accordion>
                {Object.keys(selectedData["selectedData"][0]).map((key, i) => (
                    <Accordion.Item eventKey={i.toString()} key={i}>
                        <Accordion.Header key={i + "header"}> {key}</Accordion.Header>
                        <Accordion.Body key={i + "body"}>
                            {Object.keys(selectedData["selectedData"][0][key]).map((key2, j) => (
                                <li key={j + "body"}>
                                    {key2}:{" "}
                                    {typeof selectedData["selectedData"][0][key][key2] != "object"
                                        ? selectedData["selectedData"][0][key][key2]
                                        : Object.keys(selectedData["selectedData"][0][key][key2]).map((key3, k) => (
                                              <ul>
                                                  <li>
                                                      {console.log(key3)}
                                                      {key3} :
                                                      {typeof selectedData["selectedData"][0][key][key2][key3] !=
                                                      "object"
                                                          ? selectedData["selectedData"][0][key][key2][key3]
                                                          : Object.keys(
                                                                selectedData["selectedData"][0][key][key2][key3]
                                                            ).map((key4, l) => (
                                                                <ul>
                                                                    <li>
                                                                        {key4} :{" "}
                                                                        {typeof selectedData["selectedData"][0][key][
                                                                            key2
                                                                        ][key3][key4] != "object"
                                                                            ? selectedData["selectedData"][0][key][
                                                                                  key2
                                                                              ][key3][key4]
                                                                            : Object.keys(
                                                                                  selectedData["selectedData"][0][key][
                                                                                      key2
                                                                                  ][key3][key4]
                                                                              ).map((key5, m) => (
                                                                                  <ul>
                                                                                      <li>
                                                                                          {key5} :{" "}
                                                                                          {typeof selectedData[
                                                                                              "selectedData"
                                                                                          ][0][key][key2][key3][key4][
                                                                                              key5
                                                                                          ] != "object"
                                                                                              ? selectedData[
                                                                                                    "selectedData"
                                                                                                ][0][key][key2][key3][
                                                                                                    key4
                                                                                                ][key5]
                                                                                              : Object.keys(
                                                                                                    selectedData[
                                                                                                        "selectedData"
                                                                                                    ][0][key][key2][
                                                                                                        key3
                                                                                                    ][key4][key5]
                                                                                                ).map((key6, n) => (
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            {key6} :{" "}
                                                                                                            {typeof selectedData[
                                                                                                                "selectedData"
                                                                                                            ][0][key][
                                                                                                                key2
                                                                                                            ][key3][
                                                                                                                key4
                                                                                                            ][key5][
                                                                                                                key6
                                                                                                            ] !=
                                                                                                            "object"
                                                                                                                ? selectedData[
                                                                                                                      "selectedData"
                                                                                                                  ][0][
                                                                                                                      key
                                                                                                                  ][
                                                                                                                      key2
                                                                                                                  ][
                                                                                                                      key3
                                                                                                                  ][
                                                                                                                      key4
                                                                                                                  ][
                                                                                                                      key5
                                                                                                                  ][
                                                                                                                      key6
                                                                                                                  ]
                                                                                                                : Object.keys(
                                                                                                                      selectedData[
                                                                                                                          "selectedData"
                                                                                                                      ][0][
                                                                                                                          key
                                                                                                                      ][
                                                                                                                          key2
                                                                                                                      ][
                                                                                                                          key3
                                                                                                                      ][
                                                                                                                          key4
                                                                                                                      ][
                                                                                                                          key5
                                                                                                                      ][
                                                                                                                          key6
                                                                                                                      ]
                                                                                                                  ).map(
                                                                                                                      (
                                                                                                                          key7,
                                                                                                                          o
                                                                                                                      ) => (
                                                                                                                          <ul>
                                                                                                                              <li>
                                                                                                                                  {
                                                                                                                                      key7
                                                                                                                                  }{" "}
                                                                                                                                  :{" "}
                                                                                                                                  {typeof selectedData[
                                                                                                                                      "selectedData"
                                                                                                                                  ][0][
                                                                                                                                      key
                                                                                                                                  ][
                                                                                                                                      key2
                                                                                                                                  ][
                                                                                                                                      key3
                                                                                                                                  ][
                                                                                                                                      key4
                                                                                                                                  ][
                                                                                                                                      key5
                                                                                                                                  ][
                                                                                                                                      key6
                                                                                                                                  ][
                                                                                                                                      key7
                                                                                                                                  ] !=
                                                                                                                                  "object"
                                                                                                                                      ? selectedData[
                                                                                                                                            "selectedData"
                                                                                                                                        ][0][
                                                                                                                                            key
                                                                                                                                        ][
                                                                                                                                            key2
                                                                                                                                        ][
                                                                                                                                            key3
                                                                                                                                        ][
                                                                                                                                            key4
                                                                                                                                        ][
                                                                                                                                            key5
                                                                                                                                        ][
                                                                                                                                            key6
                                                                                                                                        ][
                                                                                                                                            key7
                                                                                                                                        ]
                                                                                                                                      : "Object too deep to display"}
                                                                                                                              </li>
                                                                                                                          </ul>
                                                                                                                      )
                                                                                                                  )}
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                ))}
                                                                                      </li>
                                                                                  </ul>
                                                                              ))}
                                                                    </li>
                                                                </ul>
                                                            ))}
                                                  </li>
                                              </ul>
                                          ))}
                                </li>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}
