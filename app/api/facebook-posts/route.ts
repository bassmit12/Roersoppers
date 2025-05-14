import { NextRequest, NextResponse } from "next/server";

// This is a server-side API route that will serve local Facebook-like posts
// instead of fetching from the Facebook API to avoid the 500 error
export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get("limit") || "3");

    // Create mock Facebook posts with our local images
    const localPosts = [
      {
        id: "1",
        message:
          "Clubkampioenschappen - Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick – de Roersoppers plaats in Melick. Het was een super gezellige en sportieve middag. Naast het zwemmen werd ook het traditionele munten duiken georganiseerd.",
        created_time: "2024-03-31T10:00:00+0000",
        full_picture:
          "/assets/images/Clubkampioenschappen - Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick – de Roersoppers plaats in Melick . Het was een super gezellige en sportieve middag . Naast het zwemmen werd ook het traditionele mun.jpg",
        permalink_url: "https://www.facebook.com/roersoppers",
      },
      {
        id: "2",
        message:
          "200m KST - Waar de meeste zwemmers en zwemsters van SG Patrick – de Roersoppers aanwezig waren op de eigen Clubkampioenschappen, kozen Jana en Gido voor een wedstrijd in het buitenland. Deze twee reisden af naar het Opt.",
        created_time: "2024-04-01T14:30:00+0000",
        full_picture:
          "/assets/images/200m KST - Waar de meeste zwemmers en zwemsters van SG Patrick – de Roersoppers aanwezig waren op de eigen Clubkampioenschappen , kozen Jana en Gido voor een wedstrijd in het buitenland . Deze twee reisden af naar het Opt.jpg",
        permalink_url: "https://www.facebook.com/roersoppers",
      },
      {
        id: "3",
        message:
          "Competitie Deel 5 - De eerste vier wedstrijden in de Nationale Zwemcompetitie gingen voor onze startgemeenschap meer dan goed. Op 6 april was het dan alweer tijd voor de laatste ronde, ronde 5. Net zoals tijdens de eers.",
        created_time: "2024-04-06T18:15:00+0000",
        full_picture:
          "/assets/images/Competitie Deel 5 - De eerste vier wedstrijden in de Nationale Zwemcompetitie gingen voor onze startgemeenschap meer dan goed . Op 6 april was het dan alweer tijd voor de laatste ronde, ronde 5 . Net zoals tijdens de eers.jpg",
        permalink_url: "https://www.facebook.com/roersoppers",
      },
    ];

    // Return only the requested number of posts
    return NextResponse.json(localPosts.slice(0, limit));
  } catch (error) {
    console.error("Error serving local posts:", error);
    return NextResponse.json(
      { error: "Failed to serve local posts" },
      { status: 500 }
    );
  }
}
