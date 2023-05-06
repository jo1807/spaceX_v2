export interface launchesGroupedByYearData {
    [keys: string]: mappedLaunchData[]
}


export interface mappedLaunchData {
    flightNumber: number,
    missionName: string,
    rocketName: string,
    launchYear: string
}

export interface launchAPIData {
        flight_number: number,
        mission_name: string,
        mission_id: string[],
        launch_year: string,
        launch_date_unix: number,
        launch_date_utc: string,
        launch_date_local: string,
        is_tentative: boolean,
        tentative_max_precision: string,
        tbd: boolean,
        launch_window: number | null,
        rocket: rocketAPIData,
        ships: string[],
        telemetry: { flight_club: null },
        launch_site: launchSiteAPIData,
        launch_success: boolean,
        links: launchLinksAPIData
}

interface rocketAPIData {
    rocket_id: string,
    rocket_name: string,
    rocket_type: string,
    first_stage: Object[],
    second_stage: Object[],
    fairings: Object[]
}

interface launchSiteAPIData {
    site_id: string,
    site_name: string,
    site_name_long: string
}

interface launchLinksAPIData {
        mission_patch: string,
        mission_patch_small: string,
        reddit_campaign: string,
        reddit_launch: string,
        reddit_recovery: string,
        reddit_media: string,
        presskit: unknown,
        article_link: string,
        wikipedia: string,
        video_link: string,
        youtube_id: string,
        flickr_images: unknown
}
