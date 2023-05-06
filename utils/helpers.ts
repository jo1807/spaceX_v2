import { launchAPIData, launchesGroupedByYearData, mappedLaunchData } from "./types"

export const mapLaunchesAPIData = (launches: launchAPIData[]):mappedLaunchData[] => 
    launches.map((launch => (
        {
            flightNumber: launch.flight_number,
            missionName: launch.mission_name,
            rocketName: launch.rocket.rocket_name,
            launchYear: launch.launch_year
        }
    )))


export const groupLaunchesByLaunchYear = (launches:mappedLaunchData[]):launchesGroupedByYearData => 
    launches.reduce((acc:any, launch) => {
    if (!acc) {
        return { [launch.launchYear]: [launch] }
    }

    if (Object.keys(acc).includes(launch.launchYear)) {
        return {...acc, [launch.launchYear]: [...acc[launch.launchYear], launch] }
    } 
    return {...acc, [launch.launchYear]: [launch] }
}, {})



    
 