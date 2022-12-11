import React, { useState, forwardRef, useImperativeHandle } from "react";
import NoSSRWrapper from "../NoSSRWrapper";

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

const ModalQuestion = forwardRef((props, ref) => {
  // 彈窗控制
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => ({
    // 開啟彈窗
    openModal() {
      onOpen();
    },
    // 關閉彈窗
    closeModal() {
      onClose();
    },
  }));

  return (
    <>
      <NoSSRWrapper>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent marginRight={"12px"} marginLeft={"12px"}>
            <ModalHeader color={"rgb(0,139,139)"} fontSize={"16px"}>
              Please answer the question to continue ...
            </ModalHeader>
            <ModalBody>
              <Box color={"black"} fontSize={"20px"} marginBottom={"20px"}>
                Which is the advantage of ZK-Rollup ?
              </Box>

              <RadioGroup onChange={setValue} value={value} marginTop={"12px"}>
                <Stack direction={"column"} color={"black"} gap={"12px"}>
                  <Radio
                    value="1"
                    spacing={"10px"}
                    size={"lg"}
                    colorScheme={"green"}
                  >
                    1. Let users to get higher APY in DeFi
                  </Radio>
                  <Radio
                    value="2"
                    spacing={"10px"}
                    size={"lg"}
                    colorScheme={"green"}
                  >
                    2. Allow users to store crypto more secure than cold wallet
                  </Radio>
                  <Radio
                    value="3"
                    spacing={"10px"}
                    size={"lg"}
                    colorScheme={"green"}
                  >
                    3. Increased scalability, improved privacy, and reduced
                    storage and bandwidth requirements
                  </Radio>
                </Stack>
              </RadioGroup>
            </ModalBody>

            <ModalFooter marginTop={"16px"}>
              <Button bgColor={"#ccc"} mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                bgColor={"rgb(0,139,139)"}
                isDisabled={value ? false : true}
                onClick={() => {
                  props.confirmQuestion(value);
                }}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </NoSSRWrapper>
    </>
  );
});

export default ModalQuestion;
