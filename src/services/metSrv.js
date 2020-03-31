import axios from 'axios';

export async function getDepartmentsSrv() {
  const {
    data: { departments },
  } = await axios.get(
    'https://collectionapi.metmuseum.org/public/collection/v1/departments'
  );
  return departments;
}

export async function getObjectsByDepartmentIdSrv(id) {
  const {
    data: { objectIDs },
  } = await axios.get(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`
  );
  console.log(objectIDs.slice(0, 100));
  return objectIDs.slice(0, 100);
}

function formatObjectResult({
  title,
  culture,
  objectURL,
  primaryImage,
  department,
}) {
  return { title, culture, url: objectURL, img: primaryImage, department };
}

export async function getObjectByIdSrv(objectId) {
  const { data } = await axios.get(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
  );
  console.log(formatObjectResult(data));
  return formatObjectResult(data);
}
