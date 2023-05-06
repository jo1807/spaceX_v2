import { groupLaunchesByLaunchYear, mapLaunchesAPIData } from "@/utils/helpers";
import { LaunchesSection } from "../components/launches-section";

async function getAllLaunches() {
  const response = await fetch(`https://api.spacexdata.com/v3/launches`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function Page() {
  const launchesData = await getAllLaunches();
  const launchesGroupedByYear = groupLaunchesByLaunchYear(mapLaunchesAPIData(launchesData));

  return (
    <div className="bg-slate-300">
    <header>
      <h1 className="text-4xl pt-8 pl-4 pb-4 text-slate-700">Space X Launches</h1>
    </header>
    <main>
      <>
      {
        Object.entries(launchesGroupedByYear).map(([key, value], index) => 
          <LaunchesSection key={index} launches={value} year={key} />)
      }
      </>

    </main>
    </div>
  )
}

