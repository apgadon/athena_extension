# athena_extension
AthenaHacks Submission
This extension creates a semipermanent window in the Active tab where 
the "positivity" of the page is displayed. 
Positivity percentages are obtained by extracting the active tab's HTML 
text elements, calling the Microsoft Azure Cognitive Service Sentiment 
API with these HTML text elements as the parameter, and extracting the 
positivity percentage from the resulting json. This percentage is used 
to 1) display the percentage in text, and 2) change the gradient of 
orange in the window.
This extension can be used to analyze a page with reviews and see how 
generally positive or negative they are in their word choice, as well as 
analyze news sources and blog posts for their negativity for mental 
health reasons.
One feature of this extension is that it's almost 
completely "in-house", or self-contained javascript and HTML without extra APIs or 
features, other than Microsoft Azure.
