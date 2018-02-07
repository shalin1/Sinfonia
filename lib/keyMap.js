const converter = keyCode => {
  // takes in keycode, outputs keyboard row/column
  switch (keyCode) {
    case 49:
      return [1,0];
    case 81:
      return [1,1];
    case 65:
      return [1,2];
    case 90:
      return [1,3];
    case 50:
      return [2,0];
    case 87:
      return [2,1];
    case 83:
      return [2,2];
    case 88:
      return [2,3];
    case 51:
      return [3,0];
    case 69:
      return [3,1];
    case 68:
      return [3,2];
    case 67:
      return [3,3];
    case 52:
      return [4,0];
    case 82:
      return [4,1];
    case 70:
      return [4,2];
    case 86:
      return [4,3];
    case 53:
      return [5,0];
    case 84:
      return [5,1];
    case 71:
      return [5,2];
    case 66:
      return [5,3];
    case 54:
      return [6,0];
    case 89:
      return [6,1];
    case 72:
      return [6,2];
    case 78:
      return [6,3];
    case 55:
      return [7,0];
    case 85:
      return [7,1];
    case 74:
      return [7,2];
    case 77:
      return [7,3];
    case 56:
      return [8,0];
    case 73:
      return [8,1];
    case 75:
      return [8,2];
    case 188:
      return [8,3];
    case 57:
      return [9,0];
    case 79:
      return [9,1];
    case 76:
      return [9,2];
    case 190:
      return [9,3];
    case 48:
      return [0,0];
    case 80:
      return [0,1];
    case 186:
      return [0,2];
    case 191:
      return [0,3];

    case 32:
    // spacebar. note row 99 for special keypress.
      return [99,0];
    default:
      return [99,0];
  }
};

export default converter;
