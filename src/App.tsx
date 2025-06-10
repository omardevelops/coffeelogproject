import './App.css'
import beanData from './data/Beanconqueror.json'

const beans = beanData['BEANS'];
const brews = beanData['BREWS'];
const mills = beanData['MILL'];
const preparations = beanData['PREPARATION'];
const allData = [...beans, ...brews, ...mills, ...preparations];


function getObjectById(uuid : string) : any {
  // Function to find an object by its 'config.uuid' field in the JSON data
  return allData.find(item => item.config.uuid === uuid);
}


function App() {
  console.log('Beanconqueror JSON Data:', beanData)

  console.log('Beans:', beans);
  console.log('Brews:', brews);
  console.log('Mills:', mills);
  console.log('Preparations:', preparations);

  console.log('Object with ID 1:', getObjectById('9743408e-c1bd-4abf-9314-b431f1ba6ef0'));

  // Sort brews by creation date descending (bean.config.unix_timestamp)
  brews.sort((a, b) => b.config.unix_timestamp - a.config.unix_timestamp);

  // Render the Beans JSON in a nice looking way as a display flex of items
  // I just want to render the brews list in a display flex format with the ID and name of each brew
  // It should be styled with TailwindCSS to look nice and modern and minimalistic with a dark theme and consolas font

  return (
    <div className="App bg-gray-900 text-white font-mono p-4">
      <h1 className="text-2xl mb-4">Omar's Beanconqueror Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {brews.map((brew) => {
          function renderBrew() {
            const beanName = getObjectById(brew.bean)?.name;
            // Convert from unixTimestamp to a readable date format (bean.config.unix_timestamp)
            const creationDate = new Date(brew.config.unix_timestamp * 1000).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            return (
          <div key={brew.config.uuid} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-left justify-center">
          <h2 className="text-xl font-bold mb-2">{beanName}</h2>
          <h3 className="font-bold">{creationDate}</h3>
          <p className="text-sm text-gray-400 bg-gray-700 p-3 my-4 h-20 overflow-y-scroll" >{brew.note}</p>
          <p className="mt-2 text-sm">ID: {brew.config.uuid}</p>
              </div>
            );
          }
          return renderBrew();
        })}
      </div>
    </div>
  );
  // Note: The JSON structure is assumed to have 'id', 'name', and 'description' fields.
  // You may need to adjust the fields based on the actual structure of your JSON data.
  
 
}

export default App