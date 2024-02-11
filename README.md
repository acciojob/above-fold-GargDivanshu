# Fold feature

#### Create above the fold feature:

Craete a component that displays a list of items. When the user scrolls to the bottom of the list, you want to fetch more items and append them to the list. 

Use useEffect to detect when the user has scrolled to the bottom, and then fetch more items and update the component's state accordingly.

In below gif you see ”Load More item…” at the end of Scroll that’s when new items are being appended to list till then only a set of 10 items is loaded

**API:** https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10 

**NOTE:**

- Use class name `loadmore` to display text 'Loading more items...'

![output](https://storage.googleapis.com/acciojob-open-file-collections/fold-feature_AdobeExpress.gif)
