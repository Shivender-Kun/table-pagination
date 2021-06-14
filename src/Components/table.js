const table = (data) => {
  try {
    const id = flatten("id", data);
    const email = flatten("email", data);
    const first = flatten("first_name", data);
    const last = flatten("last_name", data);
    const avatar = flatten("avatar", data);
    let arr = [];

    if (id.length > 0) {
      for (let i = 0; i < id.length; i++) {
        arr.push(
          <tr key={i}>
            <td className="name">{first[i] + " " + last[i]}</td>
            <td className="email">{email[i]}</td>
            <td>
              <img src={avatar[i]} alt="avatar" className="avatar" />
            </td>
          </tr>
        );
      }
    }
    return arr;
  } catch (error) {
    console.error(error);
  }
};

export default table;

const flatten = (field, obj) => {
  const arr = obj.map((i) => i[field]);
  return arr;
};
