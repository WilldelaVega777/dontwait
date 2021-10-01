//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { yelpKey }          from '../secrets/keys'


//---------------------------------------------------------------------
// Service Section
//---------------------------------------------------------------------
export class YelpService
{
    static async getRestaurantsFromYelp(city)
    {
        if (!city)
        {
            city = 'SanFrancisco'
        }

        let data = null

        const url = `https://api.yelp.com/v3/businesses/search?location=${city}`

        const apiOptions = {
                headers: {
                    Authorization: `Bearer ${yelpKey}`
                }
         }

        try {
            const res = await fetch(url, apiOptions)
            data = await res.json()
        }
        catch (e) {
            throw e
        }

        return data
    }
}

