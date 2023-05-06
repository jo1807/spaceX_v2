import { groupLaunchesByLaunchYear, mapLaunchesAPIData } from "../helpers";
import { mockedMappedLaunchData, mockLaunchesAPIData } from "../mock-data";


describe('mapLaunchesAPIData', () => {
    it('correctly maps launches API data', () => {
        expect(mapLaunchesAPIData(mockLaunchesAPIData)).toEqual(
            [
                {
                    flightNumber: 99,
                    launchYear: "2020",
                    missionName: "Starlink-9 (v1.0) & BlackSky Global 5-6",
                    rocketName: "Falcon 9",
                },
                {
                    flightNumber: 100,
                    launchYear: "2020",
                    missionName: "Starlink-10 (v1.0) & SkySat 19-21",
                    rocketName: "Falcon 9",
                },
             ]
        );
    })
})

describe('groupLaunchesByLaunchYear', () => {
    it('correctly groups launches by launch year', () => {
        expect(groupLaunchesByLaunchYear(mockedMappedLaunchData)).toEqual(
            {
                "2007": [
                    {
                        flightNumber: 67,
                        launchYear: "2007",
                        missionName: "Mission-test-1",
                        rocketName: "Falcon 2",
                    },
                ],
                "2019": [
                    {
                        flightNumber: 9,
                        launchYear: "2019",
                        missionName: "Global 5-6",
                        rocketName: "Falcon 9",
                    }
                ],
                "2020": [

                    {
                          flightNumber: 12,
                          launchYear: "2020",
                          missionName: "Starlink-10 ",
                          rocketName: "Falcon 8",
                      },
                      {
                          flightNumber: 99,
                          launchYear: "2020",
                          missionName: "BlackSky Global 5-6",
                          rocketName: "Falcon 1",
                      },
                ]
            }
        );
    })
})