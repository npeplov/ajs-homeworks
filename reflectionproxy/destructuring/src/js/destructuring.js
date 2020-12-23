export default function specAttack({ special }) {
  const specArr = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    specArr.push({
      id, name, icon, description,
    });
  });
  return specArr;
}
