import { Box } from "./style";
import { IoIosStar,IoIosStarOutline } from "react-icons/io";
export function Stars({note}) {
  let starts = [];
  const ShowNote = (notes) => {
    for (let i = 0; i < 5; i++) {
      i < notes
        ? (starts = [...starts, { id: i, icon: "fill" }])
        : (starts = [...starts, { id: i, icon: "outline" }]);
    }
    return starts;
  };
  const NoteStars = ShowNote(note);
  return (
      <Box>
        {NoteStars.map((item) => {
          return item.icon == "fill" ? (
            <IoIosStar key={item.id} />
          ) : (
            <IoIosStarOutline key={item.id} />
          );
        })}
      </Box>
  );
}
