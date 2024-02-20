import Widget from "./components/Widget";
import PromotedProducts from "./components/PromotedProducts";
// import ReviewsCarousel from "./components/ReviewsCarousel";
// import SEO from "./components/SEO";
// import StarRating from "./components/StarRating";
// import UgcGallery from "./components/UgcGallery";
// import ReviewsTab from "./components/ReviewsTab";
// import QA from "./components/QA";

function App() {
  //Instance ID
  let InstanceId_Widget = "513953";
  let InstanceId_QA = "513951";
  let InstanceId_SEO = "600662";
  let InstanceId_Carousel = "600665";
  let InstanceId_StarRating = "491372";
  let InstanceId_PromotedProd = "608401";
  let InstanceId_UgcGallery = "";
  let InstanceId_ReviewsTab = "";

  //Product ID
  let ProductId = "";

  //Clipboard text here.
  let ClipBoardHeading = "Follow these steps to add this";
  let ScriptClipboard = "1. Add the following to your <head> tag.";
  let ScriptClipboardNote =
    "If you already have this script, please disregard since using one script will work for all of the Yotpo code snippets";
  let SnippetClipboard =
    "2. Add the following code snippet to your product page.";
  let SnippetClipboardNote =
    "Make sure you replace each data element with the appropriate values of your website and product attributes.";

  return (
    <>
      <div className="wrapper">
        <div class="accordion" id="accordionExample">
          <Widget
            instanceid={InstanceId_Widget}
            productid={ProductId}
            active="true"
            heading="Reviews Widget"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <PromotedProducts
            instanceid={InstanceId_PromotedProd}
            productid={ProductId}
            active="false"
            heading="Promoted Products"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />
        </div>
      </div>
    </>
  );
}

export default App;