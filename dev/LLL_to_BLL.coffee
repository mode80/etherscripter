tokenize = (input) ->
  # takes lispy text and returns a flat list of its pieces
  input.split('"').map (x,i)-> # separate on quotes
    if i % 2 == 1 # this piece is a user string
      return x.replace /[ ]/g, '!~space~!' # temp replace user spaces
    else # this piece is code, not inside a string
      return x.replace(/[(]/g, ' ( ') # space out the parens, our main purpose here
              .replace(/[)]/g, ' ) ')
  .join('"') # reassmble and put back the quotes
  .trim() # shave any xs whitespace from tips
  .split(/\s+/) # split on any whitespace put there by the user or by us padding the parens
  .map (x)-> x.replace(/!~space~!/) # put back user's spaces that were inside strings

parenthesize = (input, list=[]) ->
  # takes a flat list of tokens including parens and builds a nested list from it
  token = input.shift() # grab and remove the front item from our flat input 
  if not token? then return list.pop() # we're completely done, strip the wrapper and return finished contents

  if token == ')' then return list # we're done at this level; return the result to the processing above

  if token == '(' # consume parens and proceed to process the upcoming content in a sub list
    list.push parenthesize(input, []) # add subtree to to this level
  else # we're not nesting, just processing
    list.push categorize(token) # add the categorized token to the end of the list at this level 

  return parenthesize(input, list) # our front token is now processed and move to the end, so continue


