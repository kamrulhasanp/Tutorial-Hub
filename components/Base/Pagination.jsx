import { Box, Flex } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Pagination = ({
  currentPage,
  totalData,
  itemsPerPage,
  prevPage,
  nextPage,
  setCurrentPage,
}) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalData / itemsPerPage) },
    (_, index) => index + 1
  );

  const neighborPageCount = 1;
  const visiblePageNumbers = [];

  for (let i = 1; i <= pageNumbers.length; i++) {
    if (
      i === 1 ||
      i === pageNumbers.length ||
      (i >= currentPage - neighborPageCount && i <= currentPage) ||
      (i <= currentPage + neighborPageCount && i >= currentPage)
    ) {
      visiblePageNumbers.push(i);
    }
  }
  const pagingResult = visiblePageNumbers.reduce((acc, number, i) => {
    if (i > 0 && number - visiblePageNumbers[i - 1] !== 1) {
      acc.push("...");
    }
    acc.push(number);
    return acc;
  }, []);

  //   const prevPage = () => {
  //     setCurrentPage((prev) => Math.max(prev - 1, 1))
  //   }
  //   const nextPage = () => {
  //     setCurrentPage((prev) =>
  //       Math.min(
  //         prev + 1,
  //         Math.ceil(totalData / itemsPerPage),
  //       ),
  //     )
  //   }

  return (
    <Flex>
      <Box
        className="fontInter"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="30px"
        height="30px"
        border="solid 1px #E5E7EB"
        onClick={() => prevPage()}
        cursor={currentPage > 1 ? "pointer" : "default"}
        _hover={currentPage > 1 ? { bg: "blue", color: "white" } : {}}
      >
        <MdChevronLeft />
      </Box>
      {pagingResult.map((item, i) => (
        <Box
          key={i}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="30px"
          height="30px"
          cursor={typeof item === "number" ? "pointer" : "default"}
          color={currentPage === item ? "white" : "black"}
          bg={currentPage === item ? "blue" : "transparent"}
          _hover={
            typeof item === "number" ? { bg: "blue", color: "white" } : {}
          }
          border="solid 1px #E5E7EB"
          onClick={() => typeof item === "number" && setCurrentPage(item)}
        >
          {item}
        </Box>
      ))}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="30px"
        height="30px"
        onClick={() => nextPage()}
        cursor={
          currentPage < Math.ceil(totalData / itemsPerPage)
            ? "pointer"
            : "default"
        }
        _hover={
          currentPage < Math.ceil(totalData / itemsPerPage)
            ? { bg: "blue", color: "white" }
            : {}
        }
        border="solid 1px #E5E7EB"
      >
        <MdChevronRight />
      </Box>
    </Flex>
  );
};

export default Pagination;
