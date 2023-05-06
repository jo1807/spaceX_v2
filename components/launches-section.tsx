import { mappedLaunchData } from "@/utils/types"

export const LaunchesSection = ({launches, year}:{launches:mappedLaunchData[], year:string}) => (
    <section>
    <h2 className="text-2xl p-4 text-slate-700">Launch Year: {year}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {launches.map((launch) => 
          <li className='flex flex-col flex-wrap bg-white p-4 m-4 rounded-xl hover:shadow-lg outline outline-2 outline-slate-600' key={launch.missionName}>
          <>
            <LaunchDetail fieldName='Flight Number' detail={launch.flightNumber}/>
            <LaunchDetail fieldName='Mission Name' detail={launch.missionName}/>
            <LaunchDetail fieldName='Rocket Name' detail={launch.rocketName}/>
          </>
          </li>
          )}
      </ul>
    </section>
)

export const LaunchDetail = ({fieldName, detail}: {fieldName:string, detail:string | number}) => 
        <p><span className="font-medium text-slate-700">{fieldName}:</span> {detail}</p>

