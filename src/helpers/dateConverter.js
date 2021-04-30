import { formatDistanceToNowStrict } from "date-fns";

function dateConverter(created_at) {
  let unixTime = Date.parse(created_at);
  let formattedTime = formatDistanceToNowStrict(new Date(unixTime)).split(" ");

  switch (formattedTime[1]) {
    case "seconds":
      formattedTime[1] = "s";
      break;
    case "minutes":
      formattedTime[1] = "m";
      break;
    case "hours":
      formattedTime[1] = "h";
      break;
    case "days":
      if (formattedTime[0] % 7 === 0) {
        formattedTime[0] /= 7;
        formattedTime[1] = "w";
        break;
      }
      formattedTime[1] = "d";
      break;
    case "months":
      formattedTime[1] = "mo";
      break;
    case "years":
      formattedTime[1] = "y";
      break;
    default:
      formattedTime[1] = "d";
  }

  return formattedTime.join("") + " ago";
}

export default dateConverter;
