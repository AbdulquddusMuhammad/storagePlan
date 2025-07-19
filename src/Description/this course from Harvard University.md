this course from Harvard University
explores the concepts and algorithms at
the foundation of modern artificial
intelligence diving into the ideas that
give rise to Technologies like
gameplaying engines handwriting
recognition and machine translation you
will gain exposure to the theory behind
Graph Search algorithms classification
optimization reinforcement learning and
other topics in artificial intelligence
and machine learning Brian U teaches
this
[Music]
course hello world this is cs50 and this
is an introduction to artificial
intelligence with python with cs50's own
Brian U this course picks up where cs50
itself leaves off and explores the
concepts and algorithms at the
foundation of modern AI we'll start with
a look at how AI can search for
solutions to problems whether those
problems are learning how to play a game
or trying to find driving directions to
a destination we'll then look at how AI
can represent information both knowledge
that our AI is certain about but also
information and events about which our
AI might be uncertain learning how to
represent that information but more
importantly how to use that information
to draw inferences and new conclusions
as well we'll explore how AI can solve
various types of optimization problems
trying to maximize profits or minimize
cost or satisfy some other constraints
before turning our attention to the fast
growing field of machine learning where
we won't tell our AI exactly how to
solve a problem but instead give our AI
access to data and experiences so that
our AI can learn on its own how to
perform these tasks in particular we'll
look at neural networks one of the most
popular tools in modern machine learning
inspired by the way that human brains
learn and reason as well before finally
taking a look at the world of natural
language processing so that it's not
just us humans learning to learn how
artificial intelligence is able to speak
but also AI learning how to understand
and interpret human language as well
we'll explore these ideas and algorithms
and along the way give you the
opportunity to build your own AI
programs to implement all of this and
more this is cs50
[Music]
all right welcome everyone to an
introduction to artificial intelligence
with python my name is Brian U and in
this class we'll explore some of the
ideas and techniques and algorithms that
are at the foundation of artificial
intelligence now artificial intelligence
covers a wide variety of types of
techniques anytime you see a computer do
something that appears to be intelligent
or rational in some way like recognizing
someone's face in a photo or being able
to play a game better than people can or
being able to understand human language
when we talk to our phones and they
understand what we mean and are able to
respond back to us these are all
examples of AI or artificial
intelligence and in this class we'll
explore some of the ideas that make that
AI possible so we'll begin our
conversations with search the problem of
we have an AI and we would like the AI
to be able to search for solutions to
some kind of problem no matter what that
problem might be whether it's trying to
get driving directions from point A to
point B or trying to figure out how to
play a game given a tic tac toe game for
example figuring out what move it ought
to make after that we'll take a look at
knowledge ideally we want our AI to be
able to know information to be able to
represent that information and more
importantly to be able to draw
inferences from that information to be
able to use the information it knows and
draw additional conclusions so we'll
talk about how AI can be programmed in
order to do just that then we'll explore
the topic of uncertainty talking about
ideas of what happens if a computer
isn't sure about a fact but maybe is
only sure with a certain probability so
we'll talk about some of the ideas
behind probability and how computers can
begin to deal with uncertain events in
order to be a little bit more
intelligent in that sense as well after
that we'll turn our attention to
optimization problems of when the
computer is trying to optimize for some
sort of goal especially in a situation
where there might be multiple ways that
a computer might solve a problem but
we're looking for a better way or
potentially the best way if that's at
all possible then we'll take a look at
machine learning or learning more
generally and looking at how when we
have access to data our computers can be
programmed to be quite intelligent by
learning from data and learning from
experience being able to perform a task
better and better based on greater
access to data so your email for example
where your email inbox somehow knows
which of your emails are good emails and
which of your emails are spam these are
all examples of computers being able to
learn from past experiences and past
data we'll take a look too at how
computers are able to draw inspiration
from Human intelligence looking at the
structure of the human brain and how
neural networks can be a computer analog
to that sort of idea and how by taking
advantage of a certain type of structure
of a computer program we can write
neural networks that are able to perform
tasks very very effectively and then
finally we'll turn our attention to
language not programming languages but
human languages that we speak every day
and taking a look at the challenges that
come about as a computer tries to
understand natural language and how it
is some of the natural language
processing that occurs in modern
artificial intelligence can actually
work but today we'll begin our
conversation with search this problem of
trying to figure out what to do when we
have some sort of situation that the
computer is in some sort of environment
that an agent is in so to speak and we
would like for that agent to be able to
somehow look for a solution to that
problem now these problems can come in
any number of different types of form
one example for instance might be
something like this classic 15 puzzle
with the sliding tiles that you might
have seen where you're trying to slide
the tiles in order to make sure that all
the numbers line up in order this is an
example of what you might call a search
Problem the 15 puzzle begins in an
initially mixed up mixed up State and we
need some way of finding moves to make
in order to return the puzzle to its
solved state but there are similar
problems that you can frame in other
ways trying to find your way through a
maze for example is another example of a
search problem you begin in one place
you you have some goal of where you're
trying to get to and you need to figure
out the correct sequence of actions that
will take you from that initial state to
the goal and while this is a little bit
abstract anytime we talk about maze
solving in this class you can translate
it to something a little more real world
something like driving directions if you
ever wonder how Google Maps is able to
figure out what is the best way for you
to get from point A to point B and what
turns to make at what time depending on
traffic for example it's often some sort
of search algorithm you have an AI that
is trying to get from an initial
position to some sort of goal by taking
some sequence of actions so we'll start
our conversations today by thinking
about these types of search problems and
what goes in to solving a search problem
like this in order for an AI to be able
to find a good solution in order to do
so though we're going to need to
introduce a little bit of terminology
some of which I've already used uh but
the first term we'll need to think about
is an agent an agent is just some entity
that perceives its environment it
somehow is able to perceive the things
around it and act on that environment in
some way so in the case of the driving
directions your agent might be some
representation of a car that is trying
to figure out what actions to take in
order to arrive at a destination in the
case of the 15 puzzle with the sliding
tiles the agent might be the AI or the
person that is trying to solve that
puzzle to try and figure out what tiles
to move in order to get to that solution
next we introduced the idea of a state a
state is just some configuration of the
agent in its environment so in the 15
puzzle for example any state might be
any one of these three for example a
state is just some configuration of the
tiles and each of these states is
different and is going to require a
slightly different solution a different
sequence of actions will be needed in
each one of these in order to get from
this initial state to the goal which is
where we're trying to get so the initial
State then what is that the initial
state is just the state where the agent
begins it is one such state where we're
going to start from and this is going to
be the starting point for our search
algorithm so to speak we're going to
begin with this initial State and then
start to reason about it to think about
what actions might we apply to that
initial state in order to figure out how
to get from the beginning to the end
from the initial position to whatever
our goal happens to be and how do we
make our way from that initial position
to the goal well ultimately it's via
taking actions actions are just choices
that we can make in any given State and
in AI we're always going to try to
formalize these ideas a little bit more
precisely such that we could program
them a little bit more mathematically so
to speak so this will be a recurring
theme and we can more precisely Define
actions as a function we're going to
effectively Define a function called
actions that takes an input s where s is
going to be some state that exists
inside of our environment and actions of
s is going to take the state as input
and return as output the set of all
actions that can be executed in that
state and so it's possible that some
actions are only valid in certain States
and not in other states and we'll see
examples of that soon
so in the case of the 15 puzzle for
example there are generally going to be
four possible actions that we can do
most of the time we can slide a tile to
the right slide a tile to the left slide
a tile up or slide a tile down for
example and those are going to be the
actions that are available to us so
somehow our AI our program needs some
encoding of the state which is often
going to be in some numerical format and
some encoding of these actions but it
also needs some encoding of the
relationship between these things how do
the states and actions relate to one
another and in order to do that we'll
introduce to our AI a transition model
which will be a description of what
state we get after we perform some
available action in some other state and
again we can be a little bit more
precise about this Define this
transition model a little bit more
formally again as a function the
function is going to be a function
called result that this time takes two
inputs input number one is s some State
and input number two is a some action
and the output of this function function
result is it is going to give us the
state that we get after we perform
action a in state s so let's take a look
at an example to see more precisely what
this actually means here's an example of
a state of the 15 puzzle for example and
here's an example of an action sliding a
tile to the right what happens if we
pass these as inputs to the result
function again the result function takes
this board this state as its first input
and it takes an action as a second input
and of course here I'm describing things
visually so that you can see visually
what the state is and what the action is
in a computer you might represent one of
these actions as just some number that
represents the action or if you're
familiar with enums that allow you to
enumerate multiple possibilities it
might be something like that and this
state might just be represented as an
array or two-dimensional array of all of
these numbers that exist but here we're
going to show it visually just so you
can see it but when we take this state
and this action pass it into the result
function the output is a new state the
state we get after we take a tile slide
it to the right and this is the state we
get as a result if we had a different
action and a different state for example
and pass that into the result function
we'd get a different answer altogether
so the result function needs to take
care of figuring out how to take a state
and take an action and get what results
and this is going to be our transition
model that describes how it is that
states and actions are related to each
other if we take this transition model
and think about it more generally and
across the entire problem we can form
what we might call a state space the set
of all of the states we can get from the
initial State via any sequence of
actions by taking zero or one or two or
more actions in addition to that so we
could draw a diagram that looks
something like this where every state is
represented here by a game board and
there are arrows that connect every
state to every other state we can get to
from that state and the state space is
much larger than what you see just here
this is just a sample of what the state
space might actually look like and in
general across many search problems
whether they're this particular 15
puzzle or driving directions or
something else the state space is going
to look something like this we have
individual states and arrows that are
connecting them and often times just for
Simplicity we'll simplify our
representation of this entire thing as a
graph some sequence of nodes and edges
that connect nodes but you can think of
this more abstract representation as the
exact same idea each of these little
circles or nodes is going to represent
one of the states inside of our problem
and the arrows here represent the
actions that we can take in any
particular State taking us from one
particular state to another state for
example all right so now we have this
idea of nodes that are representing
these states actions that can take us
from one state to another and a
transition model that defines what
happens after we take a particular
action so the next step we need to
figure out is how we know when the AI is
done solving the problem the AI needs
some way to know when it gets to the
goal that it's found the goal so the
next thing we'll need to encode into our
artificial intelligence is a goal test
some way to determine whether a given
state is a goal state in the case of
something like driving directions it
might be pretty easy if you're in a
state that corresponds to whatever the
user typed in as their intended
destination well then you know you're in
a goal state in the 15 puzzle it might
be checking the numbers to make sure
they're all in ascending order but the
AI needs some way to encode whether or
not any state they happen to be in is a
goal and some problems might have one
goal like a maze where you have one
initial position and one ending position
and that's the goal in other more
complex problems you might imagine that
there are multiple possible goals there
are multiple ways to solve a problem and
we might not care which one the computer
finds as long as it does find a
particular
goal however sometimes a computer
doesn't just care about finding a goal
but finding a goal well or one with a
low cost and it's for that reason that
the last piece of terminology that we
use to define these search problems is
something called a path cost you might
imagine that in the case of driving
directions it would be pretty annoying
if I said I wanted directions from point
A to point B and the route that Google
Maps gave me was a long route with lots
of detours that were unnecessary that
took longer than it should have for me
to get to that destination and it's for
that reason that when we're formulating
search problems we'll often give every
path some sort of numerical cost some
number telling us how expensive it is to
take this particular option and then
tell our AI that instead of just finding
a solution some way of getting from the
initial state to the goal we'd really
like to find one that minimizes this
path cost that is less expensive or
takes less time or minimizes some other
numerical value we can represent this
graphically if we take a look at this
graph again and imagine that each of
these arrows each of these actions that
we can take from one state to another
state has some sort of number associated
with it that number being the path cost
of this particular action where some of
the costs for any particular action
might be more expensive than the cost
for some other action for example
although this will only happen in some
sorts of problems in other problems we
can simplify the diagram and just assume
that the cost of any particular action
is the same and this is probably the
case in something like the 15 puzzle for
example where it doesn't really make a
difference whether I'm moving right or
moving left the only thing that matters
is the total number of steps that I have
to take to get from point A to point B
and each of those steps is of equal cost
can just assume it's of some constant
cost like one and so this now forms the
basis for what we might consider to be a
search problem a search problem has some
sort of initial State some place where
we begin some sort of action that we can
take or multiple actions that we can
take in any given State and it has a
transition model some way of defining
what happens when we go from one state
and take one action what state do we end
up with as a result in addition to that
we need some goal test to know whether
or not we've reached a a goal and then
we need a path cost function that tells
us for any particular path by following
some sequence of actions how expensive
is that path what is its cost in terms
of money or time or some other resource
that we are trying to minimize our usage
of and the goal ultimately is to find a
solution where a solution in this case
is just some sequence of actions that
will take us from the initial state to
the goal State and ideally we'd like to
find not just any solution but the
optimal solution which is a solution
that has the lowest path cost among all
of the possible solutions and in some
cases there might be multiple Optimal
Solutions but an optimal solution just
means there is no way that we could have
done better in terms of finding that
solution so now we've defined the
problem and now we begin need to begin
to figure out how it is that we're going
to solve this kind of search problem and
in order to do so you'll probably
imagine that our computer is going to
need to represent a whole bunch of data
about this particular problem we need to
represent data about where we are in the
problem and we might need to be
considering multiple different options
at once and often times when we're
trying to package a whole bunch of data
related to a state together we'll do so
using a data structure that we're going
to call a node a node is a data
structure that is just going to keep
track of a variety of different values
and specifically in the case of a search
problem it's going to keep track of
these four values in particular every
node is going to keep track of estate
the state we're currently on and every
Noe is also going to keep track of a
parent a parent being the state before
us or the node that we used in order to
get to this current state and this is
going to be relevant because eventually
once we reach the goal node once we get
to the end we want to know what sequence
of actions we used in order to get to
that goal and the way we'll know that is
by looking at these parents to keep
track of what led us to the goal and
what led us to that state and what led
us to the state before that so on and so
forth backtracking our way to the
beginning so that we know the entire
sequence of actions we needed in order
to get from the beginning to the end the
node is also going to keep track of what
action we took in order to get from the
parent to the current state and the node
is also going to keep track of a path
cost in other words it's going to keep
track of the number that represents how
long it took to get from the initial
state to the state that we currently
happen to be at and we'll see why this
is relevant as we start to talk about
some of the optimizations that we can
make in terms of these search problems
more generally so this is the data
structure that we're going to use in
order to solve the problem and now let's
talk about the approach how might we
actually begin to solve the problem well
as you might imagine what we're going to
do is we're going to start at one
particular State and we're just going to
explore from there the intuition is that
from a given State we have multiple
options that we could take and we're
going to explore those options and once
we explore those options we'll find that
more options than that are going to make
themselves available and we're going to
consider all of the available options to
be stored inside of a single data
structure that we'll call the frontier
the frontier is going to represent all
of the things that we could explore next
that we haven't yet explored or visited
so in our approach we're going to begin
the search algorithm by starting with a
frontier that just contains one state
the frontier is going to contain the
initial State because at the beginning
that's the only state we know about that
is the only state that exists and then
our search algorithm is effectively
going to follow a loop we're going to
repeat some process again and again and
again the first thing we're going to do
is if the frontier is empty then there's
no solution and we can report that there
is no way to get to the goal and that's
certainly possible there's certain types
of problems that an AI might try to
explore and realize that there is no way
to solve that problem and that's useful
information for humans to know as well
so if ever the frontier is empty that
means there's nothing left to explore
and we haven't yet found a solution so
there is no solution if there's nothing
left to explore otherwise what we'll do
is we'll remove a node from the frontier
so right now at the beginning the
frontier just contains one node
representing the initial state but over
time the frontier might grow it might
contain multiple States and so here
we're just going to remove a single node
from that
Frontier if that node happens to be a
goal then we found a solution so we
remove a node from the frontier and ask
ourselves is this the goal and we do
that by applying the goal test that we
talked about earlier asking if we're at
the destination or asking if all the
numbers of the 15 puzzle happen to be in
order so if the node contains the goal
we found a solution great we're done and
otherwise what we'll need to do is we'll
need to expand the node and this is a
term of Art in artificial intelligence
to expand the node just means to look at
all of the neighbors of that node in
other words consider all of the possible
actions that I could take from the state
that this node is representing and what
nodes could I get to from there we're
going to take all of those nodes the
next nodes that I can get to from this
current one I'm looking at and add those
to the frontier and then repeat this
process so at a very high level the idea
is we start with a frontier that
contains the initial State and we're
constantly removing a node from the
frontier looking at where we can get to
next and adding those nodes to the
frontier repeating this process over and
over until either we remove a node from
the frontier and it contains a goal
meaning we've solved the problem or we
run into a situation where the frontier
is empty at which point we're left with
no
solution so let's actually try and take
the pseudo code put it into practice by
taking a look at an example of a sample
search problem so right here I have a
sample graph a is connected to B via
this action B is connected to node c and
d c is connected to e d is connected to
F and what I'd like to do is have my AI
find a path from a to e we want to get
from this initial state to this goal
state so how are we going to do that
well we're going to start with a
frontier that contains the initial State
this is going to represent our Frontier
so our Frontier initially will just
contain a that initial state where we're
going to begin and now we'll repeat this
process if the frontier is empty no
solution that's not a problem because
the frontier is not empty so we'll
remove a node from the frontier as the
one to consider next there's only one
node in the frontier so we'll go ahead
and remove it from the frontier but now
a this initial node this is the node
we're currently considering we follow
the next step we ask ourselves is this
node the goal no it's not a is not the
goal e is the goal so we don't return
the solution so instead we go to this
last step expand the node and add the
resulting nodes to the frontier what
does that mean well it means take this
state a and consider where we could get
to next and after a what we could get to
next is only B so that's what we get
when we expand a we find B and we add B
to the frontier and now B is in the
frontier and we repeat the process again
we say all right the frontier is not
empty so let's remove B from the
frontier B is now the node that we're
considering we ask ourselves is B the
goal no it's not so we go ahead and
expand B and add its resulting nodes to
the frontier what happens when we expand
B in other words what nodes can we get
to from B well we can get to C and D so
we'll go ahead and add C and D from the
frontier and now we have two nodes in
the frontier c and d and we repeat the
process again we remove a node from the
frontier for now I'll do so arbitrarily
just by picking C we'll see why later
how choosing which node you remove from
the frontier is actually quite an
important part of the algorithm but for
now I'll arbitrarily remove C say it's
not the goal so we'll add e the next one
to the frontier then let's say I remove
E from the frontier and now I check I'm
currently looking at State e is it a
goal state it is because I'm trying to
find a path from a to e so I would
return the goal and that now would be
the solution that I'm now able to return
the solution and I have found a path
from a to e so this is the general idea
the general approach of this search
algorithm to follow these steps constant
removing nodes from the frontier until
we're able to find a solution so the
next question you might reasonably ask
is what could go wrong here what are the
potential problems with an approach like
this and here's one example of a problem
that could arise from this sort of
approach imagine this same graph same as
before with one change the change being
now instead of just an arrow from A to B
we also have an arrow from B to a
meaning we can go in both directions and
this is true in something like the 15
puzzle where when I slide a to the right
I could then slide a tile to the left to
get back to the original position I
could go back and forth between a and b
and that's what these double arrows
symbolize the idea that from one state I
can get to another and then I can get
back and that's true in many search
problems what's going to happen if I try
to apply the same approach now well I'll
begin with a same as before and I'll
remove a from the frontier and then I'll
consider where I can get to from a and
after a the only place I can get to is B
so B goes into the frontier then I'll
say all right let's take a look at B
that's the only thing left in the
frontier where can I get two from B
before it was just C and D but now
because of that reverse Arrow I can get
to a or C or D so all three a c and d
all of those now go into the frontier
they are places I can get to from B and
now I remove one from the frontier and
you know maybe I'm unlucky and maybe I
pick a and now I'm looking at a again
and I consider where can I get you from
a and from a well I can get to B and now
we start to the problem but if I'm not
careful I go from A to B and then back
to a and then to B again and I could be
going in this infinite Loop where I
never make any progress because I'm
constantly just going back and forth
between two states that I've already
seen so what is the solution to this we
need some way to deal with this problem
and the way that we can deal with this
problem is by somehow keeping track of
what we've already explored and the
logic is going to be well if we've
already explored the state there's no
reason to go back to it once we've
explored a state don't go back to it
don't bother adding it to the frontier
there's no need to so here's going to be
our revised approach a better way to
approach this sort of search problem and
it's going to look very similar just
with a couple of
modifications we'll start with a
frontier that contains the initial State
same as before but now we'll start with
another data structure which will just
be a set of nodes that we've already
explored so what are the states we've
explored initially it's empty we have an
empty explored set and now we repeat if
the frontier is empty no solution same
as before we remove a node from the
frontier we check to see if it's a goal
State return the solution none of this
is any different so far but now what
we're going to do is we're going to add
the node to the explored state so if it
happens to be the case that we remove a
node from the frontier and it's not the
goal We'll add it to the explored set so
that we know we've already explored it
we don't need to go back to it again if
it happens to come up later and then the
final step we expand the node and we add
the resulting nodes to the front
but before we just always added the
resulting nodes to the frontier we're
going to be a little clever about it
this time we're only going to add the
nodes to the frontier if they aren't
already in the frontier and if they
aren't already in the explored set so
we'll check both the frontier in the
explored set make sure that the node
isn't already in one of those two and so
long as it isn't then we'll go ahead and
add it to the frontier but not otherwise
and so that revised approach is
ultimately what's going to help make
sure that we don't go back and forth
between two nodes now the one point that
I've kind of glossed over here so far is
this step here removing a node from the
frontier before I just chose arbitrarily
like let's just remove a node and that's
it but it turns out it's actually quite
important how we decide to structure our
Frontier how we add and how we remove
our nodes the frontier is a data
structure and we need to make a choice
about in what order are we going to be
removing elements and one of the
simplest data structures for adding and
removing elements is something called
called a stack and a stack is a data
structure that is a last in first out
data type which means the last thing
that I add to the frontier is going to
be the first thing that I remove from
the frontier so the most recent thing to
go into the stack or the frontier in
this case is going to be the node that I
explore so let's see what happens if I
apply this stack based approach to
something like this problem finding a
path from a to e what's going to happen
well again we'll start with a and we'll
say all right let's go ahead and look at
a first and then notice this time we've
added a to the explored set a is
something we've now explored we have
this data structure that's keeping track
we then say from a we can get to B and
all right from B what can we do well
from B we can explore B and get to both
C and D so we added C and then D so now
when we explore a node we're going to
treat the frontier as a stack last in
first out D was the last one to come in
so we'll go ahead and explore that next
and say all right where can we get to
from D well we can get to F and so all
right we'll explore put F into the
frontier and now because the frontier is
a stack f is the most recent thing
that's gone in this stack so f is what
we'll explore next we'll explore F and
say all right where can we get to from F
Well we can't get anywhere so nothing
gets added to the frontier so now what
was the new most recent thing added to
the frontier well it's now C the only
thing left in the frontier we'll explore
that from which which we can see all
right from C we can get to e so e goes
into the frontier and then we say all
right let's look at e and e is now the
solution and now we've solved the
problem so when we treat the frontier
like a stack a last in first out data
structure that's the result we get we go
from A to B to D to F and then we sort
of backed up and went down to C and then
e and it's important to get a visual
sense for how this algorithm is working
we went very deep in this search tree so
to speak all the way until the bottom
where we hit a dead end
and then we effectively backed up and
explored this other route that we didn't
try before and it's this going very deep
in the search tree idea this way the
algorithm ends up working when we use a
stack that we call this version of the
algorithm depth first search depth first
search is the search algorithm where we
always explore the deepest node in the
frontier we keep going deeper and deeper
through our search tree and then if we
hit a dead end we back up and we try
something else
instead but for search is just one of
the possible search options that we
could use it turns out that there's
another algorithm called bre for search
which behaves very similarly to depth
for search with one difference instead
of always exploring the deepest node in
the search tree the way the depth for
search does breath for search is always
going to explore the shallowest node in
the frontier so what does that mean well
it means that instead of using a stack
which depth for search or DFS used where
the most recent item added to the
frontier is the the one we'll explore
next in breadth first search or BFS
we'll instead use a q where a q is a
first in first out data type where the
very first thing we add to the frontier
is the first one we'll explore and they
effectively form a line or a q where the
earlier you arrive in the frontier the
earlier you get
explored so what would that mean for the
same exact problem finding a path from a
to e well we start with a same as before
then we'll go ahead and have explored a
and say where can we get to from a well
from a we can get to B same as before
from B same as before we can get to C
and D so C and D get added to the
frontier this time though we added C to
the frontier before D so we'll explore C
first so C gets explored and from C
where can we get to well we can get to e
so e gets added to the frontier but
because D was explored before E we'll
look at D next so we'll explore D and
say where can we get to from D we can
get to F and and only then we say all
right now we can get to e and so what
bre for search or BFS did is we started
here we looked at both c and d and then
we looked at e effectively we're looking
at things one away from the initial
State then two away from the initial
State and only then things that are
three away from the initial State unlike
depth for search which just went as deep
as possible into the search tree until
it hit a dead end and then ultimately
had to back up so these now are two
different search algorithms that we
could apply in order to try and solve a
problem and let's take a look at how
these would actually work in practice
with something like maze solving for
example so here's an example of a maze
these empty cells represent places where
our agent can move these darkened gray
cells represent walls that the agent
can't pass through and ultimately our
agent our AI is going to try to find a
way to get from position a to position B
via some sequence of actions where those
actions are left right up and down what
will depth for search do in this case
well depth for search will just follow
One path if it reaches a fork in the
road where it has multiple different
options depth for search is just in this
case going to choose one it has no real
preference but it's going to keep
following one until it hits a dead end
and when it hits a dead end depth for
search effectively goes back to the last
decision point and tries the other path
fully exhausting this entire path and
when it realizes that okay the goal is
not here then it turns it attention to
this path it goes as deep as possible
when it hits a dead end it backs up and
then tries this other path keeps going
as deep as possible down one particular
path and when it realizes that that's a
dead end then it'll back up and then
ultimately find its way to the goal and
maybe you got lucky and maybe you made a
different Choice earlier on but
ultimately this is how depth first
search is going to work it's going to
keep following until it hits a dead end
and when it hits a dead end it backs up
and looks for a different solution and
so one thing you might reasonably ask is
is this algorithm always going to work
will it always actually find a way to
get from the initial state to the goal
and it turns out that as long as our
maze is finite as long as there only
finitely many spaces where we can travel
then yes depth first search is going to
find a solution because eventually it'll
just explore everything if the maze
happens to be infinite and there's an
infinite State space which does exist in
certain types of problems then it's a
slightly different story but as long as
our maze has finitely many squares we're
going to find a Sol
solution the next question though that
we want to ask is is it going to be a
good solution is it the optimal solution
that we can find and the answer there is
not necessarily and let's take a look at
an example of that in this maze for
example we're again trying to find our
way from A to B and you notice here
there are multiple possible solutions we
could go this way or we could go up in
order to make our way from A to B now if
we're lucky depth for search will choose
this way and get to B but there's no
reason necessarily why depth first
search would choose between going up or
going to the right it's sort of an
arbitrary decision point because both
are going to be added to the frontier
and ultimately if we get unlucky depth
first search might choose to explore
this path first because it's just a
random choice at this point it'll
explore explore explore and it'll
eventually find the goal this particular
path when in actuality there was a
better path there was a more optimal
solution that used fewer steps assuming
we're measuring the cost of a solution
based on the number of steps that we
need to take so depth for search if
we're unlucky might end up not finding
the best solution when a better solution
is
available so if that's DFS depth first
search how does BFS or breadth first
search compare how would it work in this
particular situation well the algorithm
is going to look very different visually
in terms of how BFS explores because BFS
looks at shallower nodes first the idea
is going to be BFS will first look at
all of the nodes that are one away from
the initial State look here and look
here for example just at the two nodes
that are immediately next to this
initial State then it'll explore nodes
that are two away looking at this state
and that state for example then it'll
explore nodes that are three away this
state and that state whereas depth first
search just picked one path and kept
following it breadth first search on the
other hand is taking the option of
exploring all of the possible paths kind
of at the same time bouncing back
between them looking deeper and deeper
at each one but making sure to explore
the shallower ones or the ones that are
closer to the initial State earlier so
we'll keep following this pattern
looking at things that are four away
looking at things that are five away
looking at things that are six away
until eventually we make our way to the
goal and in this case it's true we had
to explore some states that ultimately
didn't lead us anywhere but the path
that we found to the goal was the
optimal path this is the shortest way
that we could get to the goal and so
what might happen then in a larger maze
well let's take a look at something like
this and how breath for search is going
to behave well breath for search again
will just keep following the states
until it receives a decision point it
could go either left or right and while
DFS just picked one and kept following
that until it hit a dead end BFS on the
other hand will explore both it'll say
look at this node then this node and
it'll look at this node then that node
so on and so forth and when it hits a
decision Point here rather than pick one
left or two right and explore that path
it'll again explore both alternating
between them going deeper and deeper
we'll explore here and then maybe here
and here and then keep going explore
here and slowly make our way you can
visually see further and further out
once we get to this decision point we'll
explore both up and down until
ultimately we make our way to the goal
and what you'll notice is yes breath for
search did find our way from A to B by
following this particular path but it
needed to explore a lot of states in
order to do so and so we see some
trade-offs here between DFS and BFS that
in DFS there may be some cases where
there is some memory savings as compared
to a breath first approach where breath
first search in this case had to explore
a lot of States but maybe that won't
always be the case so now let's actually
turn our attention to some code and look
at the code that we could actually write
in order to implement something like
depth for search or breadth for search
in the the context of solving a maze for
example so I'll go ahead and go into my
terminal and what I have here inside of
maze. Pi is an implementation of this
same idea of maze solving I've defined a
class called node that in this case is
keeping track of the State uh the parent
in other words the state before the
state and the action in this case we're
not keeping track of the path cost
because we can calculate the cost of the
path at the end after we found our way
from the initial state to the
goal in addition to this I've defined a
class called a stack Frontier and if
unfamiliar with a Class A Class is a way
for me to define a way to generate
objects in Python it refers to an idea
of objectoriented programming where the
idea here is that I would like to create
an object that is able to store all of
my Frontier data and I would like to
have functions otherwise known as
methods on that object that I can use to
manipulate the object and so what's
going on here if unfamiliar with the
syntax is I have a function that
initially creates a frontier that I'm
going to represent using a list and
initially my Frontier is represented by
the empty list there's nothing in my
Frontier to begin with I have an add
function that adds something to the
frontier as by appending it to the end
of the list uh I have a function that
checks if the frontier contains a
particular State uh I have an empty
function that checks if the frontier is
empty if the frontier is empty that just
means the length of the frontier is zero
and then I have a function for removing
something from the frontier I can't
remove something from the frontier if
the frontier is empty so I check for
that first but otherwise if the frontier
isn't empty recall that I'm implementing
this Frontier as a stack a last in first
out data structure which means the last
thing I add to the frontier in other
words the last thing in the list is the
item that I should remove from this
Frontier so what you'll see here is I
have removed the last item of a list and
if you index into a python list with
negative one that gets you the last item
in the list since zero is the first item
negative one kind of wraps around and
gets you to the last item in the list so
we give that the node we call that node
we update the frontier here on line 28
to say go ahead and remove that node
that you just removed from the frontier
and then we return the node as a result
so this class here effectively
implements the idea of a frontier it
gives me a way to add something to a
frontier and a way to remove something
from the frontier as a stack I've also
just for good measure implemented an
alternative version of the same thing
called a q Frontier which in parenthesis
you'll see here it inherits from a stack
frontier meaning it's going to do all
the same things that the stack Frontier
did except the way we remove a node from
the frontier is going to be slightly
different instead of removing from the
end of the list the way we would in a
stack we're instead going to remove from
the beginning of the list self. Frontier
Zer will get me the first node in the
frontier the first one that was added
and that is going to be the one that we
return in the case of a Q then under
here I have a definition of a class
called maze this is going to handle the
process of taking a sequence a maze like
text file and figuring out how to solve
it so it will take as input a text file
that looks something like this for
example where we see hash marks that are
here representing walls and I have the
character a representing the starting
position and the character B
representing the ending position
and you can take a look at the code for
parsing this text file right now that's
the less interesting part the more
interesting part is this solve function
here where the solve function is going
to figure out how to actually get from
point A to point B and here we see an
implementation of the exact same idea we
saw from a moment ago we're going to
keep track of how many states we've
explored just so we can report that data
later but I start with a node that
represents just the start State and I
start with a frontier that in this case
is a stack Frontier and given that I'm
treating my Frontier as a stack you
might imagine that the algorithm I'm
using here is now depth for search
because depth for search or DFS uses a
stack as its data structure and
initially this Frontier is just going to
contain the start
State we initialize an explored set that
initially is empty there's nothing we've
explored so far and now here's our Loop
that notion of repeating something again
and again first we check at the froner
is empty by calling that empty function
that we saw the implementation of a
moment ago and if the frontier is indeed
empty we'll go ahead and raise an
exception or a python error to say sorry
there is no solution to this
problem otherwise we'll go ahead and
remove a node from the frontier as by
calling frontier. remove and update the
number of states we've explored because
now we've explored one additional state
so we say self. num explored plus equals
1 adding one to the number of states
we've explored
once we remove a node from the frontier
recall that the next step is to see
whether or not it's the goal the goal
test and in the case of the maze the
goal is pretty easy I check to see
whether the state of the node is equal
to the goal initially when I set up the
maze I set up this value called goal
which is a property of the maze so I can
just check to see if the node is
actually the goal and if it is the goal
then what I want to do is backtrack my
way towards figuring out what actions I
took in order to get to this goal and
how do I do that we recall that every
node stores its parent the node that
came before it that we used to get to
this node and also the action used in
order to get there so I can create this
Loop where I'm constantly just looking
at the parent of every node and keeping
track for all of the parents what action
I took to get from the parent to this
current node so this Loop is going to
keep repeating this process of looking
through all of the parent nodes until we
get back to the initial state which has
no parent where node. parent is going to
to be equal to none as I do so I'm going
to be building up the list of all of the
actions that I'm following and the list
of all the cells that are part of this
solution um but I'll reverse them uh
because when I build it up going from
the goal back to the initial State and
building the sequence of actions from
the goal to the initial state but I want
to reverse them in order to get the
sequence of actions from the initial
state to the goal and that is ultimately
going to be the solution so all of that
happens if the current state is equal to
the goal and otherwise if it's not the
goal well then I I'll go ahead and add
this state to the explored set to say
I've explored this state now no need to
go back to it if I come across it in the
future and then this logic here
implements the idea of adding neighbors
to the frontier I'm saying look at all
of my neighbors and I implemented a
function called Neighbors that you can
take a look at and for each of those
neighbors I'm going to check is the
state already in the frontier is the
state already in the explored set and if
it's not in either of those then I'll go
ahead and add this new child node this
new node to the frontier so there's a
fair amount of syntax here but the key
here is not to understand all the
nuances of the syntax though feel free
to take a closer look at this file on
your own to get a sense for how it is
working but the key is to see how this
is an implementation of the same pseudo
code the same idea that we were
describing a moment ago on the screen
when we were looking at the steps that
we might follow in order to solve this
kind of search problem so now let's
actually see this in action I'll go
ahead and run maze. piy on maze 1. text
for example and what we'll see is here
we have a print out of what the maze
initially looked like and then here down
below is after we've solved it we had to
explore 11 states in order to do it and
we found a path from A to B and in this
program I just happened to generate a
graphical representation of this as well
so I can open up maze. PNG which is
generated by this program that shows you
where in dark uh the darker color here
are the walls red is the initial State
green is the goal and and yellow is the
path that was followed we found a path
from the initial state to the
goal but now let's take a look at a more
sophisticated maze to see what might
happen instead let's look now at maze 2.
text where now here we have a much
larger maze again we're trying to find
our way from point A to point B but now
you'll imagine that depth for search
might not be so lucky it might not get
the goal on the first try it might have
to follow One path then backtrack and
explore something else a little bit
later
so let's try this we're run python maze.
piy of maze 2. text this time trying on
this other Maze and now depth for search
is able to find a solution here as
indicated by the stars is a way to get
from A to B and we can represent this
visually by opening up this maze here's
what that maze looks like and
highlighted in yellow is the path that
was found from the initial state to the
goal but how many states did we have to
explore before we found that path well
recall that in my program I was keeping
track of the number of states that we've
explored so far and so I can go back to
the terminal and see that all right in
order to solve this problem we had to
explore
399 different states and in fact if I
make one small modification to the
program and tell the program at the end
when we output this image I added an
argument called show explored and if I
set show explored equal to true and
rerun this program python maze. running
it on maze 2 and then I open the maze
what you'll see here is highlighted in
red are all of the states that had to be
explored to get from the initial state
to the goal depth for search or DFS
didn't find its way to the goal right
away it made a choice to First explore
this direction and when it explored this
direction it had to follow every
conceivable path all the way to the very
end even this long and winding one in
order to realize that you know what
that's a dead end and instead the
program needed to backtrack after going
this direction it must have gone this
direction it got lucky here by just not
choosing this path but it got unlucky
here exploring this direction exploring
a bunch of states it didn't need to and
then likewise exploring all of this top
part of the graph uh when it probably
didn't need to do that either so all in
all depth first search here really not
performing optimally or probably
exploring more States than it needs to
it finds an optimal solution the best
path to the goal but the number of
states needed to explore in order to do
so the number of steps I had to take
that was much higher so let's compare
how would bre for search or BFS do on
this exact same maze instead and in
order to do so it's a very easy change
the algorithm for DFS and BFS is
identical with the exception of what
data structure we use to represent the
frontier that in DFS I used a stack
Frontier last in first out whereas in
BFS I'm going to use a q Frontier first
in first out where the first thing I add
to the frontier is the first thing that
I remove so I'll go back to the terminal
rerun this program on the same Maze and
now you'll see that the number of states
we had to explore was only 77 as
compared to almost 400 when we used
depth for search and we can see exactly
why we can see what happened if we open
up maze. PNG now and take a look again
yellow highlight is the solution that uh
breath for search found which
incidentally is is the same solution
that depth resarch found they're both
finding the best solution but notice all
the white unexplored cells there was
much fewer states that needed to be
explored in order to make our way to the
goal because breath first search
operates a little more shallowly it's
exploring things that are close to the
initial State without exploring things
that are further away so if the goal is
not too far away then bre for search can
actually behave quite effectively on a
maze that looks a little something like
this now in this case both BFS and DFS
ended up finding the same solution but
that won't always be the case and in
fact let's take a look at one more
example for instance maze 3. text in
maze 3. text notice that here there are
multiple ways that you could get from A
to B it's a relatively small maze but
let's look at what happens if I use and
I'll go ahead and turn off show explored
so we just see the
solution if I use BFS bre first ser
to solve maze 3. text well then we find
a solution and if I open up the maze
here's the solution that we found it is
the optimal one with just four steps we
can get from the initial state to what
the goal happens to be but what happens
if we tried to use depth for search or
DFS instead well again I'll go back up
to my Q Frontier where Q Frontier means
that we're using breadth for search and
I'll change it to a stack Frontier
which means that now we'll be using
depth for search I'll rerun Python
m.p and now you'll see that we find a
solution but it is not the optimal
solution this instead is what our
algorithm finds and maybe depth first
search would have found the solution
it's possible but it's not guaranteed
that if we just happen to be unlucky if
that we choose this state instead of
that state then depth for search might
find a longer route to get from the
initial state to the go
so we do see some tradeoffs here where
depth for search might not find the
optimal solution so at that point it
seems like bre for search is pretty good
is that the best we can do where it's
going to find us the optimal solution
and we don't have to worry about
situations where we might end up finding
a longer path to the solution than what
actually exists where the goal is far
away from the initial State and we might
have to take lots of steps in order to
get from the initial state to the goal
what ended up happening is that this
algorithm BFS ended up exploring
basically the entire graph having to go
through the entire maze in order to find
its way from the initial state to the
goal State what we'd ultimately like is
for our algorithm to be a little bit
more intelligent and now what would it
mean for our algorithm to be a little
bit more intelligent in this case well
let's look back to where breath for
search might have been able to make a
different decision and consider human
intuition in this process as well like
what might a human do when solving this
maze that is different than what BFS
ultimately chose to do well the very
first decision point that BFS made was
right here when it made five steps and
ended up in a position where it had a
fork in the road it could either go left
or it could go right in these initial
couple steps there was no choice there
was only one action that could be taken
from each of those States and so the
search algorithm did the only thing that
any search algorithm could do which is
keep following that state after the next
state but this decision point is where
things get get a little bit interesting
depth first search that very first
search algorithm we looked at chose to
say let's pick one path and exhaust that
path see if anything that way has the
goal and if not then let's try the other
way bre for search took the alternative
approach of saying you know what let's
explore things that are shallow close to
us first look left and right then back
left and back right so on and so forth
alternating between our options in the
hopes of finding something nearby But
ultimately what might a human do if
confronted with a situation like this of
go left or go right well a human might
visually see that all right I'm trying
to get to State B which is way up there
and going right just feels like it's
closer to the goal like it feels like
going right should be better than going
left because I'm making progress towards
getting to that goal now of course there
are a couple of assumptions that I'm
making here I'm making the assumption
that we can represent this grid as like
a two-dimensional grid where I know the
coordinates of everything I know that a
is in coordinate 0 0 and B is in some
other coordinate pair and I know what
coordinate I'm at now so I can calculate
that yeah going this way that is closer
to the goal and that might be a
reasonable assumption for some types of
search problems but maybe not in others
but for now we'll go ahead and assume
that that I know what my current
coordinate pair is and I know the
coordinate XY of the goal that I'm
trying to get to and in this situation
I'd like an algorithm that is a little
bit more intelligent that somehow knows
that I should be making progress towards
the goal and this is probably the way to
do that because in a maze moving in the
coordinate direction of the goal is
usually though not always a good thing
and so here we draw a distinction
between two different types of search
algorithms uninformed search and
informed search uninformed search
algorithms are algorithms like DFS and
BFS the two algorithms that we just
looked at which are search strategies
that don't use any problem specific
knowledge to be able to solve the
problem DFS and BFS didn't really care
about the structure of the maze or
anything about the way that a maze is in
order to solve the problem they just
look at the actions available and choose
from those actions and it doesn't matter
whether it's a maze or some other
problem the solution or the way that it
tries to solve the problem is really
fundamentally going to be the same what
we're going to take a look at now is an
improvement upon uninformed search we're
going to take a look at informed search
informed search are going to be search
strategies that use knowledge specific
to the problem to be able to better find
a solution and in the case of a maze
this like problem specific knowledge is
something like if I'm in a square that
is geographically closer to the goal
that is better than being in a square
that is geographically further away and
this is something we can only know by
thinking about this problem and
reasoning about what knowledge might be
helpful for our AI agent to know a
little something about there are a
number of different types of informed
search specifically first we're going to
look at a particular type of search
algorithm called greedy best first
search greedy best for search often
abbreviated gbfs is a search algorithm
that instead of expanding the deepest
node like DFS or the shallowest node
like BFS this algorithm is always going
to expand the node that it thinks is
closest to the goal now the search
algorithm isn't going to know for sure
whether it is the closest thing to the
goal because if we knew what was closest
to the goal all the time then we would
already have a solution like the
knowledge of what is close to the goal
we could just follow those steps in
order to get from the initial position
to the solution but if we don't know the
solution meaning we don't know exactly
what's closest to the goal instead we
can use an estimate of what's closest to
the goal otherwise known as a heuristic
just some way of estimating whether or
not we're close to the goal and we'll do
so using a heris function conventionally
called h of n that takes a state as
input and returns our estimate of how
close we are to the goal so what might
this heris function actually look like
in the case of a maze solving algorithm
where we're trying to solve a maze what
does theistic look like well theistic
needs to answer a question like between
these two cells C and D which one is
better which one would I rather be in if
I'm trying to find my way to the goal
well any human could probably look at
this and tell you you know what d looks
like it's better even if the mazes are
convoluted and you haven't thought about
all the walls D is probably better and
why is D better well because if you
ignore the walls let's just pretend the
walls don't exist for a moment and relax
the problem so to speak D just in terms
of like coordinate pairs is closer to
this goal it's fewer steps that I would
need to take to get to the goal as
compared to C even if you ignore the
walls if you just know the XY coordinate
of c and the XY coordinate of the goal
and likewise you know the XY coordinate
of D you can calculate that D just
geographically ignoring the walls looks
like it's better and so this is theistic
function that we're going to use and
it's something called The Manhattan
distance one specific type of heuristic
where theistic is how many squares
vertically and horizontally and then
left to right so not allowing myself to
go diagonally just either up or right or
left or down how many steps do I need to
take to get from each of these cells to
the goal well as it turns out d is much
closer there are fewer steps it only
needs to take six steps in order to get
to that goal again here ignoring the
walls we've relax the problem a little
bit we're just concerned with if you do
the math to subtract the X values from
each other and the Y values from each
other what is our estimate of how far we
are away we can estimate that D is
closer to the goal than C is and so now
we have an approach we have a way of
picking which node to remove from the
frontier and at each stage in our
algorithm we're we're going to remove a
node from the frontier we're going to
explore the node if it has the smallest
value for this heuristic function if it
has the smallest Manhattan distance to
the goal and so what would this actually
look like well let me first label this
graph label this maze with a number
representing the value of this heris
function the value of the Manhattan
distance from any of these cells so from
this cell for example we're one away
from the goal from this cell we're two
away from the goal three away four away
here we're five away CU we have to go
one to the right and then four up from
somewhere like here the Manhattan
distance is two we're only two squares
away from the gold geographically even
though in practices we're going to have
to take a longer path but we don't know
that yet theistic is just some easy way
to estimate how far we are away from the
goal and maybe our heuristic is overly
optimistic it thinks that yeah we're
only two steps away when in practice
when you consider the walls it might be
more steps so the important thing here
is that theistic isn't a guarantee of
how many steps it's going to take it is
estimating it's an attempt at trying to
approximate and it does seem generally
the case that the squares that look
closer to the goal have smaller values
for theistic function than squares that
are further away so now using greedy
best for search what might this
algorithm actually do well again for
these first five steps there's not much
of a choice we start at this initial
State a and we say all right we have to
explore these five states but now we
have a decision point now we have a
choice between going left and going
right and before when DFS and BFS would
just pick arbitrarily because it just
depends on the order you throw these two
nodes into the frontier and we didn't
specify what order you put them into the
frontier only the order you take them
out here we can look at 13 and 11 and
say that all right this square is a
distance of 11 away from the goal
according to our herisa according to our
estimate and this one we estimate to be
13 away from the goal so between those
two options between these two choices
I'd rather have the 11 I'd rather be 11
steps away from the goal so I'll go to
the right we're able to make an informed
decision because we know a little
something more about this problem so
then we keep following 10 9 8 between
the two sevens we don't really have much
of a way to know between those so then
we do just have to make an arbitrary
choice and you know what maybe we choose
wrong but that's okay because now we can
still say all right let's try this seven
we say s six we have to make this Choice
even though it increases the value of
theistic function but now we have
another decision point between 6 and 8
and between those two and really we're
also considering this 13 but that's much
higher between 6 8 and 13 well the six
is the smallest value so we'd rather
take the six we're able to make an
informed decision that going this way to
the right is probably better than going
down so we turn this way we go to five
and now we find a decision point where
we'll actually make a decision that we
might not want to make but there's
unfortunately not too much way around
this we see four and six four looks
closer to the goal right it's going up
and the goal is further up so we end up
taking that route which ultimately leads
us to a dead end but that's okay because
we can still say all right now let's try
the six and now follow this route that
will ultimately lead us to the goal and
so this now is how greedy best for
search might try to approach this
problem by saying whenever we have a
decision between multiple nodes that we
could explore let's explore the node
that has the smallest value of H of n
this heris function that is estimating
how far I have to go and it just so
happens that in this case we end up
doing better in terms of the number of
states we needed to explore than BFS
needed to BFS explored all of this
section and all of that section but we
were able to eliminate that by taking
advantage of this heris this knowledge
about how close we are to the goal or
some estimate of that idea
so this seems much better so wouldn't we
always prefer an algorithm like this
over an algorithm like breath for search
well maybe one thing to take into
consideration is that we need to come up
with a good heuristic how good theistic
is is going to affect how good this
algorithm is and coming up with a good
heris can often times be
challenging but the other thing to
consider is to ask the question just as
we did with the prior two algorithms is
this algorithm optimal will it always
find the shortest path from the initial
state to the goal and to answer that
question let's take a look at this
example for a moment take a look at this
example again we're trying to get from A
to B and again I've labeled each of the
cells with their Manhattan distance from
the goal the number of squares up and to
the right you would need to travel in
order to get from that square to the
goal and let's think about would greedy
best for search that always picks the
smallest number end up finding the
optimal solution what is the shortest
solution and would this algorithm find
it and the important thing to realize is
that right here is the decision point
we're estimated to be 12 away from the
goal and we have two choices we can go
to the left which we estimate to be 13
away from the goal or we can go up where
we estimate it to be 11 away from the
goal and between those two greedy best
for search is going to say the 11 looks
better than the 13 and in doing so
greedy best for search we'll end up
finding this path to the goal but it
turns out this path is not optimal there
is a way to get to the goal using fewer
steps and it's actually this way this
way that ultimately involved fewer steps
even though it meant at this moment
choosing the worst option between the
two or what we estimated to be the worst
option based on theistic and so this is
what we mean by this is a greedy
algorithm it's making the best decision
locally at this decision point it looks
like it's better to go here than it is
to go to the 13 but in the big picture
it's not necessarily optimal that it
might find a solution when in actuality
there was a better solution available so
we want like we would like some way to
solve this problem we like the idea of
this heris of being able to estimate the
path the distance between us and the
goal and that helps us to be able to
make better decisions and to eliminate
having to search through entire parts of
this state space But we would like to
modify the algorithm so that we can
achieve optimality so that it can be
optimal and what is the way to do this
what is the intuition here well let's
take a look at this problem in this
initial problem greedy best for search
found us this solution here this long
path and the reason why it wasn't great
is because yes theistic numbers went
down pretty low but later on they
started to build back up they built back
8 9 10 11 all the way up to 12 in this
case and so how might we go about trying
to improve this algorithm well one thing
that we might realize is that you know
if we go all the way through this
algorithm through this path and we end
up going to the 12 and we've had to take
this many steps like who knows how many
steps that is just to get to this 12 we
could have also as an alternative taken
much fewer steps just six steps and
ended up at this 13 here and yes 13 is
more than 12 so it looks like it's not
as good but it required far fewer steps
right it only took six steps to get to
this 13 versus many more steps to get to
this 12 and while greedy best for search
says oh well 12 is better than 13 so
pick the 12 we might more intelligently
say I'd rather be somewhere that
heuristically looks like it takes
slightly longer if I can get there much
more quickly and we're going to encode
that idea this general idea into a more
formal algorithm known as AAR search AAR
search is going to solve this problem by
instead of just considering theistic
also considering how long it took us to
get to any particular state so the
distinction is greedy best for search if
I am in a state right now the only thing
I care about is what is the estimated
distance theistic value between me and
the goal whereas a star search will take
into consideration two pieces of
information it'll take into
consideration how far do I estimate I am
from the goal but also how far did I
have to travel in order to get here
because that is relevant too so we'll
search algorithms by expanding the
with the lowest value of G of n plus h
of n h of n is that same heris that we
were talking about a moment ago that's
going to vary based on the problem but G
of n is going to be the cost to reach
the node how many steps I had to take in
this case to get to my current position
so what does that search algorithm look
like in practice well let's take a look
again we've got the same Maze and again
I've labeled them with their Manhattan
distance this value is the h of n Value
theistic Estimate of how far each of
these sares is away from the
goal but now as we begin to explore
States We Care not just about this heris
value but also about G of the number of
steps I had to take in order to get
there and I care about summing those two
numbers together so what does that look
like on this very first step I have
taken one step and now I am estimated to
be 16 steps away from the goal so the
total value here is 17 then I take one
more step I've now taken two steps and I
estimate myself to be 15 away from the
goal again a total value of 17 now I've
taken three steps and I'm estimated to
be 14 away from the goal so on and so
forth four steps estimate of 13 five
steps estimate of 12 and now here's a
decision point I could either be six
steps away from the goal with a heris
STI of 13 for a total of 19 or I could
be six steps away from the goal with a
heris stick of 11 with an estimate of
177 for the total so between 19 and 17
I'd rather take the 17 the 6+ 11 so so
far no different than what we saw before
we're still taking this option because
it appears to be better and I keep
taking this option because it appears to
be better but it's right about here that
things get a little bit different now I
could be 15 steps away from the goal
with an estimated distance of six so 15

- 6 total value of 21 alternatively
  I could be six steps away from the goal
  because this is five steps away so this
  is six steps away with a total value of
  13 as my estimate so 6 + 13 that's 19 so
  here we would evaluate G of n plus h of
  n to be 19 6 + 13 whereas here we would
  be 15 + 6 or 21 and so the intuition is
  19 less than 21 pick here but the idea
  is ultimately I'd rather be having taken
  fewer steps get to a 13 than having
  taken 15 Steps and be at a six because
  it means I've had to take more steps in
  order to get there maybe there's a
  better path this way so instead we'll
  explore this route now if we go one more
  this is seven steps plus 14 is 21 so
  between those two it's sort of a tossup
  we might end up exploring that one
  anyways but after that as these numbers
  start to get bigger in theistic values
  and these heris values start to get
  smaller you'll find that we'll actually
  keep exploring down this path you can do
  the math to see that at every decision
  point a star search is going to make a
  choice based on the sum of how many
  steps it took me to get to my current
  position and then how far I estimate I
  am from the goal so while we did have to
  explore some of these states the
  ultimate solution we found was in fact
  an optimal solution it did find us the
  quickest possible way to get from the
  initial state to the goal and it turns
  out that AAR is an optimal search
  algorithm under certain conditions so
  the conditions are h of n my heuristic
  needs to be admissible what does it mean
  for a heuristic to be admissible well a
  heris is admissible if it never
  overestimates the true cost h of n
  always needs to either get it exactly
  right in terms of how far away I am or
  it needs to underestimate so we saw an
  example from before where theistic value
  was much smaller than the actual cost it
  would take that's totally fine but
  theistic value should never overestimate
  it should never think that I'm further
  away from the goal than I actually am
  and meanwhile to make a stronger
  statement h of n also needs to be
  consistent and what does it mean for it
  to be consistent mathematically it means
  that for every node which we'll call n
  and successor the node after me that
  I'll call n Prime where it takes a cost
  of C to make that step theistic value of
  n needs to be less than or equal to
  theistic value of n prime plus the cost
  so that's a lot of math but in words
  what that ultimately means is that if I
  am here at this state right now theistic
  value from me to the goal shouldn't be
  more than theistic value of my successor
  the next place I could go to plus
  however much it would cost me to just
  make that step from one step to the next
  step and so this is just making sure
  that my heris is consistent between all
  of these steps that I might take so as
  long as this is true then AAR search is
  going to find me an optimal solution and
  this is where much of the challenge of
  solving these search problems can
  sometimes come in that AAR search is an
  algorithm that is known and you could
  write the code fairly easily but it's
  choosing theistic that can be the
  interesting challenge the better
  theistic is the better I'll be able to
  solve the problem in the fewer states
  that I'll have to explore and I need to
  make sure that theistic satisfies these
  particular constraints so all in all
  these are some of the examples of search
  algorithms that might work and certainly
  there are many more than just this a
  star for example does have a tendency to
  use quite a bit of memory so there are
  alternative approaches to AAR that
  ultimately use less memory than this
  version of AAR happens to use and there
  are other search algorithms that are
  optimized for other cases as
  well but now so far we've only been
  looking at search algorithms where
  there's one agent like I am trying to
  find a solution to a problem I am trying
  to navigate my way through a maze I am
  trying to solve a 15 puzzle I am trying
  to find driving directions from point A
  to point B sometimes in search
  situations though we'll enter an
  adversarial situation where I am an
  agent trying to make Intelligent
  Decisions and there's someone else who
  is fighting against me so to speak that
  has opposite objectives someone where I
  am trying to succeed someone else that
  wants me to fail and this is most
  popular in something like a game a game
  like Tic tactoe where we've got this 3x3
  grid and x and O take turns either
  writing an X or an o in any one of these
  squares and the goal is to get three x's
  in a row if you're the X player or three
  O's in a row if you're the O player and
  computers have gotten quite good at
  playing games Tic Tac Toe very easily
  but even more complex games and so you
  might imagine what does an intelligent
  decision in a game look like so maybe X
  makes an initial move in the middle and
  O plays up here like what does an
  intelligent move for X now become like
  where should you move if you were X and
  it turns out there are a couple of
  possibilities but if AI is playing this
  game optimally then the AI might play
  somewhere like the upper right where in
  this situation o has the opposite
  objective of x x is trying to win the
  game to get three in a row diagonally
  here and O is trying to stop that
  objective opposite of the objective and
  so o is going to place here to try to
  block but now X has a pretty clever move
  X can make a move like this where now X
  has two possible ways that X can win the
  game X could win the game by getting
  three in a row across here or X could
  win the game by getting three in a row
  vertically this way so it doesn't matter
  where o makes their next move o could
  play Here For example blocking the three
  in a row horizontally but then X is
  going to win the game by getting a three
  in a row vertically and so there's a
  fair amount of reasoning that's going on
  here in order for the computer to be
  able to solve a problem and it's similar
  in spirit to the problems we've looked
  at so far right there actions there's
  some sort of state of the board and some
  transition from one action to the next
  but it's different in the sense of this
  is now not just a classical search
  problem but an adversarial search
  problem that I am the X player trying to
  find the best moves to make but I know
  that there is some adversary that is
  trying to stop me so we need some sort
  of algorithm to deal with these
  adversarial type of search situations
  and the algorithm we're going to take a
  look at is an algorithm called Minimax
  which works very well for these
  deterministic games where there are two
  players it can work for other types of
  games as well but we'll look right now
  at games where I make a move then my
  opponent makes a move and I am trying to
  win and my opponent is trying to win
  also or in other words my opponent is
  trying to get me to lose and so what do
  we need in order to make this algorithm
  work well anytime we try and translate
  this human concept of like playing a
  game winning and losing to a computer we
  want to translate it in terms that the
  computer can understand and ultimately
  the computer really just understands
  numbers and so we want some way of
  translating a game of X's and O's on a
  grid to something numeric something the
  computer can understand the computer
  doesn't normally understand Notions of
  like win or lose but it does understand
  the concept of like bigger and smaller
  and so we we we might do is we might
  take each of the possible ways that a
  tic tac toe game can unfold and assign a
  value or a utility to each one of those
  possible ways and in a tic tac toe game
  and in many types of games there are
  three possible outcomes the outcomes are
  o wins X wins or nobody wins so player
  one wins player two wins or nobody wins
  and for now let's go ahead and assign
  each of these possible outcomes a
  different value we'll say o winning
  that'll have a value of negative 1
  nobody winning that'll have a value of
  zero and X winning that will have a
  value of one so we've just assigned
  numbers to each of these three possible
  outcomes and now we have two players we
  have the X player and the O player and
  we're going to go ahead and call the X
  player the max player and we'll call the
  O player the Min player and the reason
  why is because in the Minimax algorithm
  the max player which in this case is X
  is aiming to maximize the score right
  these are the possible options for the
  score negative 1 0 and One X wants to
  maximize the score meaning if at all
  possible X would like this situation
  where X wins the game and we give it a
  score of one but if this isn't possible
  if x needs to choose between these two
  options negative 1 meaning o winning or
  zero meaning nobody winning X would
  rather that nobody wins score of zero
  than a score of negative 1 o winning so
  this notion of winning and losing and
  tying has been reduced mathematically to
  just this idea of try and maximize the
  score the X player always wants the
  score to be bigger and on the flip side
  the Min player in this case o is aiming
  to minimize the score the O player wants
  the score to be as small as possible
  so now we've taken this game of x's and
  o's and winning and losing and turned it
  into something mathematical something
  where X is trying to maximize the score
  o is trying to minimize the score let's
  now look at all of the parts of the game
  that we need in order to encode it in an
  AI so that an AI can play a game like
  Tic Tac
  Toe so the game is going to need a
  couple of things we'll need some sort of
  initial state that will in this case
  call s0 that which is how the game
  begins like an empty tiktock toe board
  for example uh we'll also need uh a
  function called player where the player
  function is going to take as input a
  state here represented by S and the
  output of the player function is going
  to be which player's turn is it right we
  need to be able to give a tiac toe board
  to the computer run it through a
  function and that function tells us
  whose turn it is we'll need some notion
  of actions that we can take we'll see
  examples of that in just a moment we
  need some notion of a transition model
  same as before if I have a St and I take
  an action I need to know what results as
  a consequence of it I need some way of
  knowing when the game is over so this is
  equivalent to kind of like a goal test
  but I need some terminal test some way
  to check to see if a state is a terminal
  state where a terminal State means the
  game is over in a classic game of tic
  tac toe a terminal State means either
  someone has gotten three in a row or all
  of the squares of the Tic Tac Toe board
  are filled either of those conditions
  make it a terminal state in a game of
  chess it might be something like when
  there is Checkmate or if Checkmate is no
  longer possible that that becomes a
  terminal State and then finally we'll
  need a utility function a function that
  takes a state and gives us a numerical
  value for that terminal State some way
  of saying if x wins the game that has a
  value of one if o is won the game that
  has a value of negative one if nobody is
  won the game that has a value of zero so
  let's take a look at each of these in
  turn the initial State we can just
  represent in tict Tac Toe as the empty
  game board this is where we begin it's
  the place from which we begin this
  search and again I'll be representing
  these things visually but you can
  imagine this really just being like an
  array or a two-dimensional array of all
  of these possible
  squares then we need the player function
  that again takes a state and tells us
  whose turn it is assuming X makes the
  first move if I have an empty game board
  then my player function is going to
  return X and if I have a game board
  where X is made a move then my player
  function is going to return o the player
  function takes a tic-tac-toe game board
  and tells us whose turn it
  is next up we'll consider the actions
  function the actions function much like
  it did in classical search takes a state
  and gives us the set of all of the
  possible actions we can take in that
  state so let's imagine it's O is turned
  to move in a game board that looks like
  this what happens when we pass it into
  the actions function so the actions
  function takes this state of the game as
  input and the output is a set of
  possible actions it's a set of I could
  move in the upper left or I could move
  in the bottom middle those are the two
  possible action choices that I have when
  I begin in this particular
  State now just as before when we had
  States and actions we need some sort of
  transition model to tell us when we take
  this action in the state what is the new
  state that we get and here we Define
  that using the result function that
  takes a state as input as well as an
  action and when we apply the result
  function to this state saying that let's
  let o move in this upper left corner the
  new state we get is this resulting state
  where o is in the upper left corner and
  now this seems obvious to someone who
  knows how to play tic tactoe like of
  course you play in the upper left corner
  that's the board you get but all of this
  information needs to be encoded into the
  AI the AI doesn't know how to play tic
  tac toe until you tell the AI how the
  rules of tic tac toe work and this
  function defining this function here
  allows us to tell the AI how this game
  actually works and how actions actually
  affect the outcome of the game so the AI
  needs to know how the game works the AI
  also needs to know when the game is over
  as by defining a function called
  terminal that takes as input a state s
  such that if we take a game that is not
  yet over pass it into the terminal
  function the output is false the game is
  not over but if we take a game that is
  over because X has gotten three in a row
  along that diagonal pass that into the
  terminal function then the output is
  going to be true because the game now is
  in fact over and finally we've told the
  AI how the game works in terms of what
  moves can be made and what happens when
  you make those moves we've told the AI
  when the game is over now we need to
  tell the AI what the value of each of
  those States is and we do that by
  defining this utility function that
  takes a state s and tells us the score
  or the utility of that state so again we
  said that if x wins the game that
  utility is a value of one whereas if o
  wins the game then the utility of that
  is negative one and the AI needs to know
  for each of these terminal states where
  the game is over what is theity of that
  state so I give you a game board like
  this where the game is in fact over and
  I ask the AI to tell me what the value
  of that state is it could do so the
  value of the state is
  one where things get interesting though
  is if the game is not yet over let's
  imagine a game board like this we're in
  the middle of the game it's O's turn to
  make a move so how do we know it's O's
  turn to make a move we can calculate
  that using the player function we can
  say player of s pass in state o is the
  answer so we know it's O's turn to move
  and now what is the value of this board
  and what action should o take well
  that's going to depend we have to do
  some calculation here and this is where
  the Minimax algorithm really comes in
  recall that X is trying to maximize the
  score which means that o is trying to
  minimize the score o would like for the
  to minimize the total value that we get
  at the end of the game
  and because this game isn't over yet we
  don't really know just yet what the
  value of this game board is we have to
  do some calculation in order to figure
  that out and so how do we do that kind
  of calculation well in order to do so
  we're going to consider just as we might
  in a classical search situation what
  actions could happen next and what
  states will that take us to and it turns
  out that in this position there are only
  two open squares which means there are
  only two open places where o can make a
  move o could either make a move in the
  upper left or o can make a move in the
  bottom middle and Minimax doesn't know
  right out of the box which of those
  moves is going to be better so it's
  going to consider both but now we sort
  of run into the same situation now I
  have two more game boards neither of
  which is over what happens next and now
  it's in this sense that Minimax is what
  we'll call a recursive algorithm it's
  going to now repeat the exact same
  process although now considering it from
  the opposite perspective it's as if I am
  now going to put myself if I am the O
  player I am going to put myself in my
  opponent's shoes my opponent as the X
  player and consider what would my
  opponent do if they were in this
  position what would my opponent do the X
  player if they were in that position and
  what would then happen well the other
  player my opponent the X player is
  trying to maximize the score whereas I
  am trying to minimize the score as the O
  player so X is trying to find the
  maximum possible value that they can get
  and so what's going to happen well from
  this board position X only has one
  choice X is going to play here and
  they're going to get three in a row and
  we know that that board X winning that
  has a value of one if x wins the game
  the value of that game board is one and
  so from this position if this state can
  only ever lead to this state it's the
  only possible option and this state has
  a value of one then the maximum possible
  value that the X player can get from
  this game board is also one from here
  the only place we can get is to a game
  with a value of one so this game board
  also has a value of one now we consider
  this one over here what's going to
  happen now well X needs to make a move
  the only move X can make is in the upper
  left so X will go there and in this game
  no one wins the game nobody has three in
  a row so the value of that game board is
  zero nobody's one and so again by the
  same logic if from this board position
  the only place we can get to is a board
  where the value is zero then this state
  must also have a value of zero and now
  here comes the choice part the idea of
  Trying to minimize I as the O player now
  know that if I make this Choice moving
  in the upper left that is going to
  result in a game with a value of one
  assuming everyone plays optimally and if
  I instead play in the lower middle
  choose this fork in the road that is
  going to result in a game board with a
  value of zero I have two options I have
  a one and a zero to choose from and I
  need to pick and as the Min player I
  would rather choose the option with the
  minimum value so whenever a player has
  multiple choices the Min player will
  choose the option with the smallest
  value the max player will choose the
  option with the largest value between
  the one and the zero the zero is smaller
  meaning I'd rather tie the game than
  lose the game and so this game board
  will say also has a value of zero
  because if I am playing optimally I will
  pick this fork in the road I'll place my
  o here to block X's three in a row X
  will move in the upper left and the game
  will be over and no one will have won
  the game so this is now the logic of
  Minimax to consider all of the possible
  options that I can take all of the
  actions that I can take and then to put
  myself in my opponent's shoes I decide
  what move I'm going to make Now by
  considering what move my opponent will
  make on the next turn and to do that I
  consider what move I would make on the
  turn after that so on and so forth until
  I get all the way down to the end of the
  game to one of these so-called terminal
  States in fact this very decision point
  where I am trying to decide as the O
  player what to make a decision about
  might have just been a part of the logic
  that the X player my opponent was using
  the move before me this might be part of
  some larger tree where X is trying to
  make a move in this situation and needs
  to pick between three different options
  in order to make a decision about what
  to happen and the further and further
  away we are from the end of the game the
  deeper this tree has to go because every
  level in this tree is going to
  correspond to one move one move or
  action that I take one move or action
  that my opponent takes in order to
  decide what happens and in fact it turns
  out that if I am the X player in this
  position and I recursively do the logic
  and see I have a choice three choices in
  fact one of which leads to a value of
  zero if I play here then if everyone
  plays optimally the game will be a tie
  if I play here then o is going to win
  and I'll lose playing optimally or here
  where I the X player can win well
  between a score of 0er and negative 1
  and one I'd rather pick the board with a
  value of one because that's the maximum
  value I can get and so this board would
  also have a maximum value of one and so
  this tree can get very very deep
  especially as the game starts to have
  more and more moves and this logic works
  not just for Tic Tac Toe but any of
  these sorts of games where I make a move
  my opponent makes a move and ultimately
  we have these adversarial objectives and
  we can simplify the diagram into a
  diagram that looks like this this is a
  more abstract version of the Minimax
  tree where these are States but I'm no
  longer representing them as exactly like
  Tic Tac Toe boards this is just
  representing some generic game that
  might be Tic Tac Toe might be some other
  game altogether any of these green
  arrows that are pointing up that
  represents a maximizing State I would
  like the score to be as big as possible
  and any of these red arrows pointing
  down those are minimizing states where
  the player is the Min player and they
  are trying to make the score as small as
  possible so if you imagine in this
  situation I am the maximizing player
  this this player here and I have three
  choices one choice gives me a score of
  five one choice gives me a score of
  three and one choice gives me a score of
  n well then between those three choices
  my best option is to choose this nine
  over here the score that maximizes my
  options out of all the three options and
  so I can give this state a value of nine
  because among my three options that is
  the best choice that I have available to
  me so that's my decision now you imagine
  it's like one move away from the end of
  the game but then you could also ask a
  reasonable question what might my
  opponent do two moves away from the end
  of the game my opponent is the
  minimizing player they are trying to
  make the score as small as possible
  imagine what would have happened if they
  had to pick which choice to make one
  choice leads us to this state where I
  the maximizing player am going to opt
  for nine the biggest score that I can
  get and one leads to this state where I
  the maximizing player would choose eight
  which is then the largest score than I
  can get now the minimizing player forced
  to choose between a n or an eight is
  going to choose the smallest possible
  score which in this case is an eight and
  that is then how this process would
  unfold that the minimizing player in
  this case considers both of their
  options and then all of the options that
  would happen as a result of that so this
  now is a general picture of what the
  Minimax algorithm looks like let's now
  try to formalize it using a little bit
  of pseudo code so what exactly is
  happening in the Minimax algorithm well
  given a state s we need to decide what
  to happen uh the max player if it's
  Max's player's turn then Max is going to
  pick an action a in actions of s recall
  that actions is a function that takes a
  state and gives me back all of the
  possible actions that I can take it
  tells me all of the moves that are
  possible the max player is going to
  specifically pick an action a in the set
  of actions that gives me the highest
  value of Min value of result of sna so
  what does that mean well it means that I
  want to make the option that gives me
  the highest score of all of the actions
  a but what score is that going to have
  to calculate that I need to know what my
  opponent the Min player is going to do
  if they try to minimize the value of the
  state that results so we say what state
  results after I take this action and
  what happens when the Min player tries
  to minimize the value of that state I
  consider that for all of my possible
  options and after I've considered that
  for all of my possible options I pick
  the action a that has the highest
  value likewise the Min player is going
  to do the same thing but backwards
  they're also going to consider what are
  all of the possible actions they can
  take if it's their turn and they're
  going to pick the action a that has the
  smallest possible value of all the
  options and the way they know what the
  smallest possible value of all the
  options is is by considering what the
  max player is going to do by saying
  what's the result of applying this
  action to the current state and then
  what would the max player try to do what
  value would the max player calculate for
  that particular state so everyone makes
  their decision based on trying to
  estimate what the other person would do
  and now we need to turn our attention to
  these two functions max value and Min
  value how do you actually calculate the
  value of a state if you're trying to
  maximize its value and how do you
  calculate the value of a state if you're
  trying to minimize the value if you can
  do that then we have an entire
  implementation of this Minimax algorithm
  so let's try it let's try and implement
  this max value function that takes a
  state and returns as output the value of
  that state if I'm trying to maximize the
  value of the state well the first thing
  I can check for is to see if the game is
  over because if the game is over in
  other words if the state is a terminal
  State then this is easy I already have
  this utility function that tells me what
  the value of the board is if the game is
  over I just check like did X win did O
  win is it a tie and this utility
  function just knows what the value of
  the state is what's trickier is if the
  game isn't over because then I need to
  do this recursive reasoning about
  thinking what is my opponent going to do
  on the next move and I want to calculate
  the value of this state and I want the
  value of the state to be as high as
  possible and I'll keep track of that
  value in a variable called V and if I
  want the value to be as high as possible
  I need to give V an initial value and
  initially I'll just go ahead and set it
  to be as low as possible because I don't
  know what options are available to me
  yet so initially I'll set V equal to
  negative Infinity which seems a little
  bit strange but the idea here is I want
  the value initially to be low as low as
  possible because as I consider my
  actions I'm always going to try and do
  better than V and if I set V to negative
  Infinity I know I can always do better
  than that so now I consider my actions
  and this is going to be some kind of
  loop where for every action in actions
  of State recall actions as a function
  that takes my state and gives me all the
  possible actions that I can use in that
  state so for each one of those actions I
  want to compare it to V and say all
  right V is going to be equal to the
  maximum of v and this expression so what
  is this expression well first it is get
  the result of taking the action in the
  state and then get the Min value of that
  in other words let's say I want to find
  out from that state what is the best
  that the Min player can do because
  they're going to try and minimize the
  score so whatever the resulting score is
  of the Min value of that state compare
  it to my current best value and just
  pick the maximum of those two because I
  am trying to maximize the value in short
  what these three lines of code are doing
  are going through all of my possible
  actions and asking the question how do I
  maximize the score given what my
  opponent is going to try to do after
  this entire loop I can just return V and
  that is now the value of that particular
  State and for the Min player it's the
  exact opposite of this the same logic
  just backwards to calculate the minimum
  value of a state first we check if it's
  a terminal state if it is we return its
  utility otherwise we're going to now try
  to minimize the value of the state given
  all of my possible actions so I need an
  initial value for V the value of the
  state and initially I'll set it to
  Infinity cuz I know I can always get
  something less than infinity so by
  starting with v equals infinity I make
  sure that the very first action I find
  that will be less than this value of v
  and then I do the same thing Loop over
  all of my possible actions and for each
  of the results that we could get when
  the max player makes their decision
  let's take the minimum of that and the
  current value of V so after all is said
  and done I get the smallest possible
  value of V that I then return back to
  the user so that in effect is the pseudo
  code for Minimax that is how we take a
  game and figure out what the best move
  to make is by recursively using these
  max value and Min value functions where
  max value calls Min value Min value
  calls max value back and forth all the
  way until we reach a terminal State at
  which point our algorithm can simply
  return the utility of that particular
  state but what you might imagine is that
  this is going to start to be a long
  process especially as games start to get
  more complex as we start to add more
  moves and more Poss possible options and
  games that might last quite a bit longer
  so the next question to ask is what sort
  of optimizations can we make here how
  can we do better in order to use less
  space or take less time to be able to
  solve this kind of problem and we'll
  take a look at a couple of possible
  optimizations but for one we'll take a
  look at this example again returning to
  these up arrows and down arrows let's
  imagine that I now am the max player
  this green arrow I am trying to make
  this score as high as possible and this
  is an easy game where there are just two
  moves I make a move one of these three
  options and then my opponent makes a
  move one of these three options based on
  what move I make and as a result we get
  some value let's look at the order in
  which I do these calculations and figure
  out if there are any optimizations I
  might be able to make to this
  calculation process I'm going to have to
  look at these states one at a time so
  let's say I start here on the left and
  say all right now I'm going to consider
  what will the Min player my opponent try
  to do here well the Min player is going
  to look at all three of their possible
  actions and look at their value cuz
  these are terminal States they're the
  end of the game and so they'll see all
  right this node is a value of four value
  of eight value of five and the Min
  player is going to say well all right
  between these three options four eight
  and five I'll take the smallest one I'll
  take the four so this state now has a
  value of four then I as the max players
  say all right if I take this action it
  will have a value of four that's the
  best that I can do cuz Min players is
  going to try and minimize my score so
  now what if I take this option we'll
  explore this next and now explore what
  the Min player would do if I choose this
  action and the Min player is going to
  say all right what are the three options
  the Min player has options between 9 3
  and seven and so three is the smallest
  among 9 three and seven so we'll go
  ahead and say this state has a value of
  three so now I is the max player I have
  now explored two of my three options I
  know that one of my options will
  guarantee me a score of four at least
  and one of my options will guarantee me
  a score of
  three and now I consider my third option
  and say all right what happens here same
  exact Logic the Min player is going to
  look at these three states two four and
  six say the minimum possible option is
  two so the Min player wants the two now
  I as the max player have calculated all
  of the information by looking two layers
  deep by looking at all of these nodes
  and I can now say between the four or
  the three and the two you know what I'd
  rather take the four because if I choose
  this option if my opponent plays
  optimally they will try and get me to
  the four but that's the best I can do I
  can't guarantee a higher score cuz if I
  pick either of these two options I might
  get a three or I might get a two and
  it's true that you know down here is a
  nine and that's the highest score out of
  any of the scores so I might be tempted
  to say you know what maybe I should take
  this option because I might get the nine
  but if the Min player is playing
  intelligently if they're making the best
  moves at each possible option they have
  when they get to make a choice I'll be
  left with the three whereas I could
  better playing optimally have guaranteed
  that I would get the
  four so that is in effect the logic that
  I would use as a Minimax player trying
  to maximize my score from that node
  there but it turns out it took quite a
  bit of computation for me to figure that
  out I had to reason through all of these
  nodes in order to draw this conclusion
  and this is for a pretty simple game
  where I have three choices my opponent
  has three choices and then the game's
  over so what I'd like to do is come up
  with some way to optimize this maybe I
  don't need to do all this calculation to
  still reach the conclusion that you know
  what this action to the left that's the
  best that I could do let's go ahead and
  try again and try and be a little more
  intelligent about how I go about doing
  this so first I start the exact same way
  I don't know what to do initially so I
  just have to consider one of the options
  and consider what the Min player might
  do Min has three options four8 and five
  and between those three options Min says
  four is the best they can do because
  they want to try to minimize the
  now I the max player will consider my
  second option making this move here and
  considering what my opponent would do in
  response what will the Min player do
  well the Min player is going to from
  that state look at their options and I
  would say all right nine is an option
  three is an option and if I am doing the
  math from this initial State doing all
  this calculation when I see a three that
  should immediately be a red flag for me
  because when I see a three down here at
  this state I know that the value of this
  state is going to be at most three it's
  going to be three or something less than
  three even though I haven't yet looked
  at this last action or even few further
  actions if there were more actions that
  could be taken here how do I know that
  well I know that the Min player is going
  to try to minimize my score and if they
  see a three the only way this could be
  something other than a three is if this
  remaining thing that I haven't yet
  looked at is less than three which means
  there's no way for this value to be
  anything more than three because the Min
  player can already guarantee a three and
  they are trying to minimize my
  score so what does that tell me Well it
  tells me that if I choose this action my
  score is going to be three or maybe even
  less than three if I'm unlucky but I
  already know that this action will
  guarantee me a four and so given that I
  know that this action guarantees me a
  score of four and this action means I
  can't do better than three if I'm trying
  to maximize my options there is no need
  for me to consider this triangle here
  there is no value no number that could
  go here that would change my mind
  between these two options I'm always
  going to opt for this path that gets me
  a four as opposed to this path where the
  best I can do is a three if my opponent
  plays
  optimally and this is going to be true
  for all the future states that I look at
  too that if I look over here at what Min
  player might do over here if I see that
  this state is a two I know that this
  state is at most a two because the only
  way this value could be something Le
  other than two is if one of these
  remaining States is less than the two
  and so the Min player would opt for that
  instead so even without looking at these
  remaining States I as the maximizing
  player can know that choosing this path
  to the left is going to be better than
  choosing either of those two paths to
  the right because this one can't be
  better than three this one can't be
  better than two and so four in this case
  is the best that I can do so in order to
  do this and I can say now that this
  state has a value of four so in order to
  do this type of calculation I was doing
  a little bit more bookkeeping keeping
  track of things keeping track all the
  time of what is the best that I can do
  what is the worst that I can do and for
  each of these states saying all right
  well if I already know that I can get a
  four then if the best I can do at this
  state is a three no reason for me to
  consider it I can effectively prune this
  leaf and anything below it from the tree
  and it's for that reason this approach
  this optimization to Minimax is called
  Alpha Beta pruning Alpha and beta stand
  for these two values you'll have to keep
  track of of the best you can do so far
  and the worst you can do so far and
  pruning is the idea of if I have a big
  long deep search tree I might be able to
  search it more efficiently if I don't
  need to search through everything if I
  can remove some of the nodes to try and
  optimize the way that I look through
  this entire search space so Alpha Beta
  pruning can definitely save us a lot of
  time as we go about the search process
  by making our searches more efficient
  but even then it's still not great as
  games get more complex Tic Tac Toe
  fortunately is a relatively simple game
  and we might reasonably ask a question
  like how many total possible Tic Tac Toe
  games are there you can think about it
  you can try and estimate you know how
  many moves are there at any given point
  how many moves long can the game last it
  turns out there are about
  255,000 possible Tic Tac Toe games that
  can be played
  but compare that to a more complex game
  something like a game of chess for
  example far more pieces far more moves
  games that last much longer how many
  total possible chess games could there
  be it turns out that after just four
  moves each four moves by the white
  player four moves by the black player
  that there are 288 billion possible
  chess games that can result from that
  situation after just four moves each and
  going even further if you look at entire
  chess games and how many possible chess
  games there could be as a result there
  there are more than 10 to the
  29,000 possible chess games far more
  chess games than could ever be
  considered and this is a pretty big
  problem for the Minimax algorithm
  because the Minimax algorithm starts
  with an initial State considers all the
  possible actions and all the possible
  actions after that all the way until we
  get to the end of the game and that's
  going to be a problem if the computer is
  going to need to look through this many
  states which is far more than any
  computer could ever do in any reason
  reable amount of time so what do we do
  in order to solve this problem instead
  of looking through all these states
  which is totally intractable for a
  computer we need some better approach
  and it turns out that better approach
  generally takes the form of something
  called depth limited Minimax where
  normally Minimax is depth unlimited we
  just keep going layer after layer move
  after move until we get to the end of
  the game depth limited Minimax is
  instead going to say you know what after
  a certain number of moves maybe I'll
  look 10 moves ahead maybe I'll look 12
  moves ahead but after that point I'm
  going to stop and not consider
  additional moves that might come after
  that just because it would be
  computationally intractable to consider
  all of those possible
  options but what do we do after we get
  10 or 12 moves deep and we arrive at a
  situation where the game's not over
  Minimax still needs a way to assign a
  score to that game board or game state
  to figure out what its current value is
  which is easy to do if the game is over
  but not so easy to do if the game is not
  yet over so in order to do that we need
  add one additional feature to depth
  limited Minimax called an evaluation
  function which is just some function
  that is going to estimate the expected
  utility of a game from a given state so
  in a game like chess if you imagine that
  a game value of one means white wins
  negative one means black wins zero means
  it's a draw then you might imagine that
  a score of like 0.8 means white is very
  likely to win they certainly not
  guaranteed and you would have an
  evaluation function that estimates how
  good the game State happens to be and
  depending on how good that evaluation
  function is that is ultimately what's
  going to constrain how good the AI is
  the better the AI is at estimating how
  good or how bad any particular game
  state is the better the AI is going to
  be able to play that game if the
  evaluation function is worse and not as
  good as it estimating what the expected
  utility is then it's going to be a whole
  lot harder and you can imagine trying to
  come up with these evaluation functions
  in chess for example you might write an
  evaluation function based on how many
  pieces you have as compared to how many
  pieces your opponent has because each
  one has a value and your evaluation fun
  function probably needs to be a little
  bit more complicated than that to
  consider other possible situations that
  might arise as well and there are many
  other variants on Minimax that add
  additional features in order to help it
  perform better under these larger more
  computationally untractable situations
  where we couldn't possibly explore all
  of the possible moves so we need to
  figure out how to use evaluation
  functions and other techniques to be
  able to play these games ultimately
  better but this now was a look at this
  kind of adversarial search these search
  problems where we have situations where
  I am trying to play against some sort of
  opponent and these search problems show
  up all over the place throughout
  artificial intelligence we've been
  talking a lot today about more classical
  search problems like trying to find
  directions from one location to another
  but anytime an AI is faced with trying
  to make a decision like what do I do now
  in order to do something that is
  rational or do something that is
  intelligent or trying to play a game
  like figuring out what move to make
  these sort of algorithms can really come
  in handy it turns out that for Tic Tac
  Toe the solution is pretty simple
  because it's a small game XKCD has
  famously put together a web comic where
  he will tell you exactly what move to
  make is the optimal move to make no
  matter what your opponent happens to do
  this type of thing is not quite as
  possible for a much larger game like
  Checkers or chess for example where
  chess is totally computationally
  untractable for most computers to be
  able to explore all the possible States
  so we really need our AI to be far more
  intelligent about how they go about
  trying to deal with these problems and
  how they go about taking this
  environment that they find themselves in
  and ultimately searching for one of
  these Solutions so this then was a look
  at search in artificial intelligence
  next time we'll take a look at knowledge
  thinking about how it is that our AIS
  are able to know information reason
  about that information and draw
  conclusions all in our look at Ai and
  the principles behind it we'll see you
  next
  [Music]
  time all right welcome back everyone to
  an introduction to artificial
  intelligence with python last time we
  took to look at search problems in
  particular where we have ai agents that
  are trying to solve some sort of Problem
  by taking actions in some sort of
  environment whether that environment is
  trying to take actions by playing moves
  in a game or whether those actions are
  something like trying to figure out
  where to make turns in order to get
  driving directions from point A to point
  B this time we're going to turn our
  attention more generally to just this
  idea of knowledge the idea that a lot of
  intelligence is based on knowledge
  especially if we think about human
  intelligence people know information we
  know facts about the world and using
  that information that we know we're able
  to draw conclusions reason about the
  information that we know in order to
  figure out how to do something or figure
  out some other piece of information that
  we conclude based on the information we
  already have available to us what we'd
  like to focus on now is the ability to
  take this idea of knowledge and being
  able to reason based on knowledge and
  apply those ideas to artificial
  intelligence in particular we're going
  to be building what are known as
  knowledge-based agents agents that are
  able to reason and act by representing
  knowledge internally
  somehow inside of our AI they have some
  understanding of what it means to know
  something and ideally they have some
  algorithms or some techniques they can
  use based on that knowledge that they
  know in order to figure out the solution
  to a problem or figure out some
  additional piece of information that can
  be helpful in some sense so what do we
  mean by reasoning based on knowledge to
  be able to draw conclusions well let's
  look at a simple example drawn from the
  World of Harry Potter uh we take one
  sentence that we know to be true imagine
  if it didn't if it didn't rain
  than Harry visited Hagrid today so one
  fact that we might know about the world
  and then we take another fact Harry
  visited Hagrid or Dumbledore today but
  not both so it tells us something about
  the world that Harry either visited
  Hagrid but not Dumbledore or Harry
  visited Dumbledore but not Hagrid and
  now we have a third piece of information
  about the world that Harry visited
  Dumbledore today so we now have three
  pieces of information now three facts
  inside of a knowledge base so to speak
  information that we know and now we as
  human can try and reason about this and
  figure out based on this information
  what additional information can we begin
  to conclude and well looking at these
  last two statements Harry either visited
  Hagrid or Dumbledore but not both and we
  know that Harry visited Dumbledore today
  well then it's pretty reasonable that we
  could draw the conclusion that you know
  what Harry must not have visited Hagrid
  today because based on a combination of
  these two statements we can draw this
  inference so to speak a conclusion that
  Harry did not visit Hagrid today but it
  turns out we can even do a little bit
  better than that get some more
  information by taking a look at this
  first statement and reasoning about that
  this first statement says if it didn't
  rain then Harry visited Hagrid today so
  what does that mean in all cases where
  it didn't rain then we know that Harry
  visited Hagrid but if we also know now
  that Harry did not visit Hagrid then
  that tells us something about our
  initial premise that we were thinking
  about in particular it tells us that it
  did rain today because we can reason if
  it didn't rain then Harry would have
  visited Hagrid but we know for a fact
  that Harry did not visit Hagrid today so
  it's this kind of reasoning this sort of
  logical reasoning where we use logic
  based on the information that we know in
  order to take information and reach
  conclusions that is going to be the
  focus of what we're going to be talking
  about today how can we make our
  artificial intelligence logical so that
  they can perform the same kinds of
  deduction the same kinds of reasoning
  that we've been doing so far of course
  humans reason about logic generally in
  terms of human language that I just now
  was speaking in English talking in
  English about these sentences and trying
  to reason through how it is that they
  relate to one another we're going to
  need to be a little bit more formal when
  we turn our attention to computers and
  being able to encode this notion of
  logic and truth and falsehood inside of
  a machine so we're going to need to
  introduce a few more terms and a few
  symbols that will help us reason through
  this idea of logic inside of an
  artificial intelligence and we'll begin
  with the idea of a sentence
  now a sentence in a natural language
  like English is just something that I'm
  saying like what I'm saying right now in
  the context of AI though a sentence is
  just an assertion about the world in
  what we're going to call a knowledge
  representation language some way of
  representing knowledge inside of our
  computers and the way that we're going
  to spend most of today reasoning about
  knowledge is through a type of logic
  known as propositional logic there are a
  number of different types of logic some
  of which we'll touch on but
  propositional logic is based on a logic
  of propositions or just statements about
  the world and so we begin in
  propositional logic with a notion of
  propositional symbols we will have
  certain symbols that are often times
  just letters something like P or Q or R
  where each of those symbols is going to
  represent some fact or sentence about
  the world so P for example might
  represent the fact that it is raining
  and so p is going to repres be a symbol
  that represents that idea and Q for
  example might represent Harry visited
  hag today each of these propositional
  symbols represents some sentence or some
  fact about the world but in addition to
  just having individual facts about the
  world we want some way to connect these
  propositional symbols together in order
  to reason more complexly about other
  facts that might exist inside of the
  world in which we're reasoning so in
  order to do that we'll need to introduce
  some additional symbols that are known
  as logical connectives now there are a
  number of these logical connectives but
  five of the most important and the ones
  we're going to focus on today are these
  five up here each represented by a
  logical symbol not is represented by
  this symbol here and is represented as
  sort of an upside down V or is
  represented by a vshape implication and
  we'll talk about what that means in just
  a moment is represented by an arrow and
  by conditional again we'll talk about
  what that means in a moment is
  represented by these double arrows but
  these five logical connectives are the
  main ones we're going to be focusing on
  in terms of thinking about how it is
  that a computer can reason about facts
  and draw conclusions based on the facts
  that it knows but in order to get there
  we need to take a look at each of these
  logical connectives and build up an
  understanding for what it is that they
  actually mean so let's go ahead and
  begin with the not symbol so this not
  symbol here and what we're going to show
  for each of these logical connectives is
  what we're going to call a truth table a
  table that demonstrates what this word
  not means when we attach it to a
  propositional symbol or any sentence
  inside of our logical language
  and so the the truth table for not is
  shown right here if P some propositional
  symbol or some other sentence even is
  false then not p is true and if p is
  true then not p is false so you can
  imagine that placing this not symbol in
  front of some sentence of propositional
  logic just says the opposite of that so
  if for example P represented it is reing
  then not P would represent the that it
  is not raining and as you might expect
  if p is false meaning if the sentence it
  is raining is false well then the
  sentence not P must be true the sentence
  that it is not raining is therefore true
  so not you can imagine just takes
  whatever is in p and it inverts it turns
  false into true and true into false much
  analogously to what the English word not
  means just taking whatever comes after
  it and inverting it to mean the opposite
  next up and also very english-like is
  this idea of and represented by this
  upside down vshape or this point shape
  and as opposed to just taking a single
  argument the way not does we have p and
  we have not p and is going to combine
  two different sentences in propositional
  logic together so I might have one
  sentence p and another sentence q and I
  want to combine them together to say p
  and Q and the general Logic for what p
  and Q means is it means that both of its
  oper an are true p is true and also Q is
  true and so here's what that truth table
  looks like this time we have two
  variables p and Q and when we have two
  variables Each of which can be in two
  possible states true or false that leads
  to two squared or four possible
  combinations of Truth and falsehood so
  we have p is false and Q is false we
  have p is false and Q is true p is true
  and Q is false and then p and Q both are
  true and those are the only four
  possibilities for what p and Q could
  mean and in each of those situations
  this third column here p and Q is
  telling us a little bit about what it
  actually means for p and Q to be true
  and we see that the only case where p
  and Q is true is in this fourth row here
  where P happens to be true Q also
  happens to be true and in all other
  situations p and Q is going to evaluate
  to false so this again is much in line
  with what our intuition of and might
  mean if I said say p and Q I probably
  mean that I expect both p and Q to be
  true next up also potentially consistent
  with what we mean is this word or
  represented by this vshape sort of an
  upside down and symbol and or as the
  name might suggest is true if either of
  its arguments are true as long as p is
  true or Q is true then P or Q is going
  to be true which means the only time
  that P or Q is false is if both of it
  operands are false if p is false and Q
  is false then P or Q is going to be
  false but in all other cases at least
  one of the operands is true maybe
  they're both true in which case P or Q
  is going to evaluate to true now this is
  mostly consistent with the way that most
  people might use the word or in the
  sense of speaking the word or in normal
  English though there is sometimes when
  we might say or where we mean p or q but
  not both we mean sort of it can only one
  or the other it's important to note that
  this symbol here this or means P or Q or
  both that those are totally okay as long
  as either or both of them are true then
  the or is going to evaluate to be true
  as well it's only in the case where all
  of the operands are false that P or Q
  ultimately evaluates to false as well in
  logic there's another symbol known as
  The Exclusive or which encodes this idea
  of exclusivity of like one or the other
  but not both but we're not going to be
  FOC focusing on that today whenever we
  talk about or we're always talking about
  either or both in this case as
  represented by this truth table
  here so that now is not an and an or and
  next up is what we might call
  implication as denoted by this arrow
  symbol so we have p and Q and this
  sentence here will generally read as P
  implies q and what P implies Q means is
  that if p is true then Q is also true so
  I might say something like if it is
  raining then I will be indoors meaning
  it is raining implies I will be indoors
  as The Logical sentence that I'm saying
  there and the truth table for this can
  sometimes be a little bit tricky so
  obviously if p is true and Q is true
  then P implies Q that's true that
  definitely makes sense uh and it should
  also stand to reason that when p is true
  and Q is false then P implies Q is false
  because if I said to you if it is
  raining then I will be out indoors and
  it is raining but I'm not indoors well
  then it would seem to be that my
  original statement was not true P
  implies Q means that if p is true then Q
  also needs to be true and if it's not
  well then the statement is
  false what's also worth noting though is
  what happens when p is false when p is
  false the implication makes no claim at
  all
  if I say something like if it is raining
  then I will be indoors and it turns out
  it's not raining then in that case I am
  not making any statement as to whether
  or not I will be indoors or not P
  implies Q just means that if p is True Q
  must be true but if p is not true then
  we make no Claim about whether or not Q
  is true at all so in either case if p is
  false it doesn't matter what Q is
  whether it's false or true we're not
  making any Claim about Q whatsoever we
  can still evaluate the implication to
  true the only way that the implication
  is ever false is if our premise p is
  true but the conclusion that we're
  drawing Q happens to be false so in that
  case we would say p does not imply Q in
  that
  case finally the last connective that
  we'll discuss is this byond conditional
  you can think of a byond conditional as
  a condition that goes in both directions
  so originally when I said something like
  if it is raining then I will be indorsed
  I didn't say what would happen if it
  wasn't raining maybe I'll be indoors
  maybe I'll be outdoors this byond
  conditional you can read as an if and
  only if so I can say uh if it is I I
  will be indoors if and only if it is
  raining meaning if it is raining then I
  will be indoors and if I am indoors it's
  reasonable to conclude that it is also
  raining so this byond conditional is
  only true when p and Q are the same so
  if p is true and Q is true then this
  byond conditional is also true P implies
  q but also the reverse is True Q also
  implies p uh so if p and Q both happen
  to be false we would still say it's true
  but in any of these other two situations
  this P if and only if Q is going to
  ultimately evaluate to false so a lot of
  Tru and falses going on there but these
  five basic logical connectives are going
  to form the core of the language of
  propositional logic the language that
  we're going to use in order to describe
  ideas and the language that we're going
  to use in order to reason about those
  ideas in order to draw
  conclusions so let's now take a look at
  some of the additional terms that we'll
  need to know about in order to go about
  trying to form this language of
  propositional logic and writing AI
  that's actually able to understand this
  sort of logic the next thing we're going
  to need is the notion of what is
  actually true about the world we have a
  whole bunch of propositional symbols p
  and Q and R and maybe others but we need
  some way of knowing like what actually
  is true in the world is p true or false
  is q true or false so on and so forth
  and to do that we'll introduce the
  notion of a Model A model just assigns a
  truth value where a truth value is
  either true or false to every
  propositional symbol in other words it's
  creating what we might call a possible
  world so let me give an example if for
  example I have two propositional symbols
  p is it is raining and Q is it is a
  Tuesday a model just takes each of these
  two symbols and assigns it a truth value
  to them either true or false so here's a
  sample model in this model in other
  words in this possible world it is
  possible that P is true meaning it is
  raining and Q is false meaning it is not
  a Tuesday but there are other possible
  worlds or other models as well there is
  some model where both of these variables
  are true some model where both of these
  variables are false in fact if there are
  n variables that are propositional
  symbols like this that are either true
  or false then the number of possible
  models is two to the N because each of
  these possible models uh possible
  variables within my model could be set
  to either true or false if I don't know
  any information about it so now that I
  have the the symbols and the the symbols
  and the connectives that I'm going to
  need in order to construct these parts
  of knowledge we need some way to
  represent that knowledge and to do so
  we're going to allow our AI access to
  what we'll call a knowledge base and a
  knowledge base is really just a set of
  sentences that our AI knows to be true
  some set of sentences in propositional
  logic that are things that our AI knows
  about the world and so we might tell our
  AI some information information about a
  situation that it finds itself in or
  situation about a problem that it
  happens to be trying to solve and we
  would give that information to the AI
  that the AI would store inside of its
  knowledge base and what happens next is
  the AI would like to use that
  information in the knowledge base to be
  able to draw conclusions about the rest
  of the world and what do those
  conclusions look like well to understand
  those conclusions we'll need to
  introduce one more idea one more symbol
  and that is the notion of
  entailment so this sentence here with
  this double Turn Style in these Greek
  letters this is the Greek letter Alpha
  in the Greek letter beta and we read
  this as Alpha entails beta and Alpha and
  beta here are just sentences in
  propositional logic and what this means
  is that Alpha entails beta means that in
  every model in other words in every
  possible World in which sentence a is
  true or sentence Alpha is true then
  sentence beta is also true so if
  something entails something else if
  Alpha entails beta it means that if I
  know Alpha to be true then beta must
  therefore also be true so if my Alpha is
  something like I know that it is a
  Tuesday in January then a reasonable
  beta might be something like I know that
  it is January because in all worlds
  where it is a Tuesday in January I know
  for sure that it must be January just by
  definition this first statement or
  sentence about the world entails the
  second statement and we can reasonably
  use deduction based on that first
  sentence to figure out that the second
  sentence is in fact true as well and
  ultimately it's this idea of entailment
  that we're going to try and encode into
  our computer we want our AI agent to be
  able to figure out what the possible
  entailment ments are we want our AI to
  be able to take these three sentences
  sentences like if it didn't rain Harry
  visited Hagrid that Harry visited Hagrid
  or Dumbledore but not both and that
  Harry visited Dumbledore and just using
  that information we'd like our AI to be
  able to infer or figure out that using
  these three sentences inside of a
  knowledge base we can draw some
  conclusions in particular we can draw
  the conclusions here that one Harry did
  not visit Hagrid today and we can draw
  the entailment two that it did in fact
  rain today and this process is known as
  inference and that's what we're going to
  be focusing on today this process of
  deriving new sentences from old ones
  that I give you these three sentences
  you put them in the knowledge base in
  say the AI and the AI is able to use
  some sort of inference algorithm to
  figure out that these two sentences must
  also be true and that is how we Define
  inference so let's take a look at an
  inference example to see how we might
  actually go about inferring things in a
  human sense before we take a more
  algorithmic approach to see how we could
  encode this idea of inference in Ai and
  we'll see there are a number of ways
  that we can actually achieve this so
  again we'll deal with a couple of
  propositional symbols uh we'll deal with
  p q and r p is it is a Tuesday Q is it
  is raining and R is Harry will go for a
  run three propositional symbols that we
  are just defining to mean this we're not
  saying anything yet about whether
  they're true or false we're just
  defining what they are now we'll give
  our elves or in AI access to a knowledge
  base abbreviated to KB the knowledge
  that we know about the world we know
  this statement all right so let's try to
  parse it the parentheses here are just
  used for precedent so we can see what
  associates with what but you would read
  this as p and not Q implies R all right
  so what does that mean let's put it be
  piece by piece p is it is a Tuesday Q is
  it is raining so not Q is it is not
  raining and implies R is Harry will go
  for a run so the way to read this entire
  sentence in human natural language at
  least is if it is a Tuesday and it is
  not raining then Harry will go for a run
  so if it is a Tuesday and it is not
  raining then Harry will go for a run and
  that is now inside of our knowledge base
  and let's now imagine that our knowledge
  base has two other pieces of information
  as well it has information that P is
  true that it is a Tuesday and we also
  have the information not q that it is
  not reing that this sentence Q it is
  reing happens to be false and those are
  the three sentences that we have access
  to p and not Q implies r p and not Q
  using that information we should be able
  to draw some inferences p and not Q is
  only true if both p and not Q are true
  well all right we know that P is true
  and we know that not Q is true so we
  know that this whole expression is true
  and the definition of implication is if
  this whole thing on the left is true
  then this thing on the right must also
  be true so if we know that P and not Q
  is true then R must be true as well so
  the inference we should be able to draw
  from all of this is that R is true and
  we know that Harry will go for a run by
  taking this knowledge inside of our
  knowledge base and being able to reason
  based on that idea and so this
  ultimately is the beginning of what we
  might consider to be some sort of
  inference algorithm some process that we
  can use to try and figure out whether or
  not we can draw some conclusion and
  ultimately what these inference
  algorithms are going to answer is the
  central question about entailment given
  some query about the world something
  we're wondering about the world and
  we'll call that query Alpha the question
  we want to ask using these inference
  algorithms is does KB the our knowledge
  base entail Alpha in other words using
  only the information we know inside of
  our knowledge base the knowledge that we
  have access to can we conclude
  that this sentence Alpha is true and
  that's ultimately what we would like to
  do so how can we do that how can we go
  about writing an algorithm that can look
  at this knowledge base and figure out
  whether or not this query Alpha is
  actually true well it turns out there
  are a couple of different algorithms for
  doing so and one of the simplest perhaps
  is known as model checking now remember
  that a model is just some assignment of
  all of the propositional symbols inside
  of our language to a truth value true or
  false and you can think of a model as a
  possible world that there are many
  possible worlds where different things
  might be true or false and we can
  enumerate all of them and the model
  checking algorithm does exactly that so
  what does our model checking algorithm
  do well if we want to determine if our
  knowledge base entails some query Alpha
  then we are going to enumerate all
  possible models in other words consider
  all possible values of true and false
  for our variables all possible States in
  which our world can be in and if in
  every model where our knowledge base is
  true Alpha is also true then we know
  that the knowledge base entails Alpha so
  let's take a closer look at that
  sentence and try and figure out what it
  actually means if we know that in every
  model in other words in every possible
  world no matter what assignment of true
  and false to variables you give if we
  know that whenever our knowledge is true
  what we know to be true is true that
  this query Alpha is also true well then
  it stands to reason that as as long as
  our knowledge base is true then Alpha
  must also be true and so this is going
  to form the foundation of our model
  checking algorithm we're going to
  enumerate all of the possible worlds and
  ask ourselves whenever the knowledge
  base is true is Alpha true and if it's
  that's the case then we know Alpha to be
  true and otherwise there is no
  entailment our knowledge base does not
  entail Alpha all right so this is a
  little bit abstract but let's take a
  look at an example to try and put real
  propositional symbols to this idea so
  again we'll work with the same example p
  is it is a Tuesday Q is it is raining R
  is Harry will go for a run our knowledge
  base contains these pieces of
  information p and not Q implies R we
  also know P it is a Tuesday and not Q it
  is not raining and our query our Alpha
  in this case the thing we want to ask is
  R we want to know is it guaranteed is it
  entailed that Harry will go for a run so
  the first step is to enumerate all of
  the possible models we have three
  propositional symbols here p q and R
  which means we have 2 to the 3 power or
  eight possible models all false false
  false true false true false false true
  true Etc eight possible ways you could
  assign true and false to all of these
  models and we might ask in each one of
  them is the knowledge base true here are
  the set of things that we know in which
  of these worlds could this knowledge
  base possibly apply to in which worlds
  is this knowledge base true well in the
  knowledge base for example we know P
  like we know it is a Tuesday which means
  we know that these four first four rows
  where p is false none of those are going
  to be true or going to work for this
  particular knowledge base our knowledge
  base is not true in those worlds
  likewise we also know not Q we know that
  it is not reigning so any of these
  models where Q is true like these two
  and these two here those aren't going to
  work either because we know that Q is
  not true and finally we also know that P
  and not Q implies R which means that
  when p is true where p is true here and
  Q is false Q is false in these two then
  R must be true and if ever p is True Q
  is false but R is also false well that
  doesn't satisfy this implication here
  that implication does not hold true
  under those situations so we could say
  that for our knowledge base we can
  conclude under which of these possible
  worlds is our knowledge base true and
  under which of the possible worlds is
  our knowledge base false and it turns
  out there is only one possible world
  where our knowledge base is actually
  true in some cases there might be
  multiple possible worlds where the
  knowledge base is true but in this case
  it just so happens that there's only one
  one possible world where we can
  definitively say something about our
  knowledge base and in this case we would
  look at the query the query of R is R
  true R is true and so as a result we can
  draw that conclusion and so this is this
  idea of model checking enumerate all the
  possible models and look in those
  possible models to see whether or not if
  our knowledge Bas is true is the query
  in question true as well so let's now
  take a look at how we might actually go
  about writing this in a programming
  language like python take a look at some
  actual code that would encode this
  notion of propositional symbols and
  logic and these connectives like and and
  or and not and implication and so forth
  and see what that code might actually
  look like so I've written an advance a
  logic Library that's more detailed than
  we need to worry about entirely today
  but the important thing is that we have
  one class for every type of logical
  symbol or connective that we might have
  so we just have one class for logical
  symbols for example where every symbol
  is going to represent and store some
  name for that particular symbol and we
  also have a ask for not that takes an
  operand so we might say not one symbol
  to say something is not true or some
  other sentence is not true we have one
  for and one for or so on and so forth
  and I'll just demonstrate how this works
  and you can take a look at the actual
  logic. uh later on but I'll go ahead and
  call this file uh Harry dopy we're going
  to store information about this World of
  Harry Potter for example so I'll go
  ahead and import from my logic module
  I'll import everything and and in this
  library in order to create a symbol you
  use capital S symbol and I'll create a
  symbol for rain to mean it is raining
  for example and I'll create a symbol for
  Hagrid to mean uh Harry visited Hagrid
  is what the symbol is going to mean so
  this symbol means it is raining this
  symbol means Harry visited Hagrid and
  I'll add another symbol called
  Dumbledore for Harry visited
  Dumbledore now I'd like to save these
  symbols so that I can use them later as
  I do some logical analysis so I'll go
  ahead and save each one of them inside
  of a variable so like rain Hagrid and
  Dumbledore so you could call the
  variables
  anything and now that I have these
  logical symbols I can use logical
  connectives to combine them together so
  for example if I have a sentence like
  and rain and Hagrid for example which is
  not necessarily true but just for
  demonstration I can now try and print
  out sentence
  formula which is a function I wrote that
  takes a sentence and propositional logic
  and just prints it out so that we the
  programmers can see this in order to get
  an understanding for how it actually
  works so if I run python harry. py what
  we'll see is this sentence in
  propositional logic rain and Hagrid this
  is The Logical representation of what we
  have here in our Python program of
  saying and whose arguments are rain and
  Hagrid so we're saying rain and Hagrid
  by encoding
  that idea and this is quite common in
  Python objectoriented Programming where
  you have a number of different classes
  and you pass arguments into them in
  order to create a new and object for
  example in order to represent this idea
  but now what I'd like to do is somehow
  encode the knowledge that I have about
  the world in order to solve that problem
  from the beginning of class where we
  talked about trying to figure out who
  Harry visited and trying to figure out
  if it's raining or if it's not raining
  and so what knowledge do I have I'll go
  ahead and create a new variable variable
  called knowledge and what do I know well
  I know the very first sentence that we
  talked about was the idea that if it is
  not raining then Harry will visit Hagrid
  so all right how do I encode the idea
  that it is not raining well I can use
  not and then the rain symbol so here's
  me saying that it is not raining and now
  the implication is that if it is not
  raining then Harry visited Hagrid so
  I'll wrap this inside of an implication
  to say if it is not ring this first
  argument to the implication well then
  Harry visited Hagrid so I'm saying
  implication the premise is that it's not
  raining and if it is not raining then
  Harry visited Hagrid and I can print out
  knowledge. formula to see The Logical
  formula equivalent of that same idea so
  I run python of harryp and this is The
  Logical formula that we see as a result
  which is a text based version of what we
  were looking at before that if it is not
  raining then that implies that Harry
  visited
  Hagrid but there was additional
  information that we had access to as
  well in this case we had access to the
  fact that uh Harry visited either Hagrid
  or Dumbledore so how do I encode that
  well this means that in my knowledge
  I've really got multiple pieces of
  knowledge going on I know one thing and
  another thing and another thing so I'll
  go ahead and wrap all of my knowledge
  inside of an and and I'll move things on
  a new lines just for good measure but I
  know multiple things so I'm saying
  knowledge is an and of multiple
  different sentences I know multiple
  different sentences to be true one such
  sentence that I know to be true is this
  implication that if it is not raining
  then Harry visited Hagrid another such
  sentence that I know to be true is or
  Hagrid Dumbledore in other words either
  so Hagrid or Dumbledore is true because
  I know that Harry visited Hagrid or
  Dumbledore but I know more than that
  actually that initial sentence from
  before said that Harry visited Hagrid or
  Dumbledore but not both so now I want a
  sentence that'll encode the idea that
  Harry didn't visit both Hagrid and
  Dumbledore well the notion of Harry
  visiting Hagrid and Dumbledore would be
  represented like this and of Hagrid and
  Dumbledore and if that is not true if I
  want to say not that then I'll just wrap
  this whole thing inside of a
  not so now these three lines line eight
  says that if it is not raining then
  Harry visited Hagrid line n says Harry
  visited Hagrid or Dumbledore and line 10
  says Hagrid didn't V or Harry didn't
  visit both Hagrid and Dumbledore that it
  is not true that both the Hagrid symbol
  and the Dumbledore symbol are true only
  one of them can be true and finally the
  last piece of information that I knew
  was the fact that Harry visited
  Dumbledore so these now are the pieces
  of knowledge that I know one sentence
  and another sentence and another and
  another and I can print out what I know
  just to see it a little bit more
  visually and here now is a logical
  representation of the information that
  my computer is now internally
  representing using these various
  different python objects and again take
  a look at logic. if you want to take a
  look at how exactly it's implementing
  this but no need to worry too much about
  all of the details there we're here
  saying that if it is not raining then
  Harry visited Hagrid we're saying that
  Hagrid or Dumbledore is true and we're
  saying it is not the case that that
  Hagrid and Dumbledore is true that
  they're not both true and we also know
  that Dumbledore is true so this long
  logical sentence represents our
  knowledge base it is the thing that we
  know and now what we'd like to do is
  we'd like to use model checking to ask a
  query to ask a question like based on
  this information do I know whether or
  not it's raining and we as humans were
  able to logic our way through it and
  figure out that all right based on these
  sentences we can conclude this and that
  to figure out that yes it must have been
  raining but now we'd like for the
  computer to do that as well so let's
  take a look at the model checking
  algorithm that is going to follow that
  same pattern that we drew out in Pudo
  code a moment ago so I've defined a
  function here in logic. that you can
  take a look at called Model check model
  check takes two arguments the knowledge
  that I already know and the query and
  the idea is in order to do model
  checking I need to enumerate all of the
  possible models and for each of the
  possible models I need to ask myself is
  the knowledge based truth true and is
  the query true so the first thing I need
  to do is somehow enumerate all of the
  possible models meaning for all possible
  symbols that exist I need to assign true
  and false to each one of them and see
  whether or not it's still true and so
  here is the way we're going to do that
  uh we're going to start so I've defined
  another helper function internally that
  we'll get to in just a moment but this
  function starts by getting all of the
  symbols in both the knowledge and the
  query by figuring out what symbols am I
  dealing with in this this case the
  symbols I'm dealing with are rain and
  Hagrid and Dumbledore but there might be
  other symbols depending on the problem
  and we'll take a look soon at some
  examples of situations where ultimately
  we're going to need some additional
  symbols in order to represent the
  problem and then we're going to run this
  check all function which is a helper
  function that's basically going to
  recursively call itself checking every
  possible configuration of propositional
  symbols so we start out by looking at
  this check off function and what do we
  do so if not symbols means if we
  finished assigning all of the symbols
  we've assigned every symbol a value so
  far we haven't done that but if we ever
  do then we
  check in this model is the knowledge
  true that's what this line is saying if
  we evaluate the knowledge propositional
  logic formula using the model's
  assignment of truth values is the
  knowledge true if the knowledge is true
  then we should return true only if the
  query is true because if the knowledge
  is true we want the query to be true as
  well in order for there to be entailment
  otherwise we don't know that there
  otherwise there won't be an entailment
  if there's ever a situation where what
  we know in our knowledge is true but the
  query the thing we're asking happens to
  be false so this line here is checking
  that same idea that in all worlds where
  the knowledge is true the query must
  also be true otherwise we can just
  return true because if the knowledge
  isn't true then we don't care this is
  equivalent to when we were erating this
  table from a moment ago in all
  situations where the knowledge base
  wasn't true all of these seven rows here
  we didn't care whether or not our query
  was true or not we only care to check
  whether the query is true when the
  knowledge base is actually true which
  was just this green highlighted row
  right there so that logic is encoded
  using that statement there and otherwise
  if we haven't assign symbols yet which
  we haven't seen anything yet then the
  first thing we do is pop one of the
  symbols I make a copy of the symbols
  first just to save an existing copy but
  I pop one symbol off of the remaining
  symbols so that I just pick one symbol
  at random and I create one copy of the
  model where that symbol is true and I
  create a second copy of the model where
  that symbol is false so I now have two
  copies of the model one where the symbol
  is true and one where the symbol is
  false and I need to make sure that this
  entailment holds in both of those models
  so I recursively check all on on the
  model where the statement is true and
  check all on the model where the
  statement is false so again you can take
  a look at that function to try to get a
  sense for how exactly this logic is
  working but in effect what it's doing is
  recursively calling this check all
  function again and again and again and
  on every level of the recursion we're
  saying let's pick a new uh symbol that
  we haven't yet assigned assign it to
  true and assign it to false and then
  check to make sure that the entailment
  holds in both cases because ultimately I
  need to check every possible world I
  need to take every combination of
  symbols and try every combination of
  true and false in order to figure out
  whether the entailment relation actually
  holds so that function we've written for
  you but in order to use that function
  inside of harryp what I'll write is
  something like this I would like to
  model check based on the knowledge and
  then I provide as a second argument what
  the query is what the thing I want to
  ask is and what I want to ask in this
  case is is it raining so model check
  again takes two arguments the first
  argument is the information that I know
  this knowledge which in this case is
  this information that was given to me at
  the beginning and the second argument
  rain is encoding the idea of the query
  what am I asking I would like to ask
  based on this knowledge do I know for
  sure that it is raining and I can try
  and print out the result of
  that and when I run this program I see
  that the answer is true true that based
  on this information I can conclusively
  say that it is ring because using this
  model checking algorithm we were able to
  check that in every world where this
  knowledge is true it is raining in other
  words there is no world where this
  knowledge is true and it is not raining
  so you can conclude that it is in fact
  raining and this sort of logic can be
  applied to a number of different types
  of problems that if confronted with a
  problem where some sort of logical
  deduction can be used in order to try to
  solve it you might try thinking about
  what propositional symbols you might
  need in order to represent that
  information and what statements and
  propositional logic you might use in
  order to encode that information which
  you know and this process of trying to
  take a problem and figure out what
  propositional symbols to use in order to
  encode that idea or how to represent it
  logically is known as knowledge
  engineering that software engineers and
  AI Engineers will take a problem and try
  and figure out how to distill it down
  into knowledge that is representable by
  a computer and if we can take any
  general purpose problem some problem
  that we find in the human world and turn
  it into a problem that computers know
  how to solve as by using any number of
  different variables well then we can
  take a computer that is able to do
  something like model checking or some
  other inference algorithm and actually
  figure out how to solve that problem so
  now we'll take a look at two or three
  examples of knowledge Engineering in
  practice of taking some problem and
  figuring out how we can apply logical
  symbols and use logical formulas to be
  able to encode that idea and we'll start
  with a very popular board game in the US
  and the UK known as clue now in the game
  of Clue there's a number of different
  factors that are going on but the basic
  premise of the game if you've never
  played it before is that there are a
  number of different people for now we'll
  just use three Colonel Mustard Professor
  Plum and Miss Scarlet there are a number
  of different rooms like a ballroom a
  kitchen and a library and there are a
  number of different weapons a knife a
  revolver and a wrench and three of these
  one person one room and one weapon is
  the solution to the the mystery the the
  murderer and what room they were in and
  what weapon they happened to use and
  what happens at the beginning of the
  game is that all these cards are
  randomly shuffled together and three of
  them one person one room and one weapon
  are placed into a sealed envelope that
  we don't know and we would like to
  figure out using some sort of logical
  process what's inside the envelope which
  person which room and which weapon and
  we do so by looking at some but not all
  of these cards here by looking at these
  cards to try and figure out what might
  be going on and so this is a very
  popular game but let's now try and
  formalize it and see if we could train a
  computer to be able to play this game by
  reasoning through it logically so in
  order to do this we'll Begin by thinking
  about what propositional symbols we're
  ultimately going to need remember again
  that propositional symbols are just some
  symbol some variable that can be either
  true or false in the world and so in
  this case the propositional symbols are
  really just going to correspond to each
  of the possible things that could be
  inside the envelope mustard is a
  propositional symbol that in this case
  will just be true if Colonel Mustard is
  inside the envelope if he is the
  murderer and false otherwise and
  likewise for Plum for Professor Plum and
  Scarlet for Miss scarlet and likewise
  for each of the rooms and for each of
  the weapons we have one propositional
  symbol for each of these
  ideas then using those propositional
  symbols we can begin to create logical
  sentences create knowledge that we know
  about the world so for example we know
  that someone is the murderer that one of
  the three people is in fact the murderer
  and how would we encode that well we
  don't know for sure who the murderer is
  but we know it is one person or the
  second person or the third person so I
  could say something like this mustard or
  Plum or scarlet and this piece of
  knowledge encodes that one of these
  three people is the murder we don't know
  which but one of these three things must
  be true what other information do we
  know well we know that for example one
  of the rooms must have been the room in
  the envelope that the the crime was
  committed either in the ballroom or the
  kitchen or the library again right now
  we don't know which but this is
  knowledge we know at the outset
  knowledge that one of these three must
  be inside the envelope and likewise we
  can say the same thing about the weapon
  that it was either the knife or the
  revolver or the wrench that one of those
  weapons must have been the weapon of
  choice and therefore the weapon in the
  envelope and then as the game progresses
  the gameplay works by people get various
  different cards and using those cards
  you can deduce information that if
  someone gives you a card for example I
  have the professor Plum card in my hand
  then I know the professor Plum card
  can't be inside the envelope I know that
  Professor Plum is not the criminal so I
  know a piece of information like not
  Plum for example I know that Professor
  Plum has to be false this propositional
  symbol is not true and sometimes I might
  not know for sure that a particular card
  is not in the middle but sometimes
  someone will make a guess and I'll know
  that one of three possibilities is not
  true like someone will guess Colonel
  Mustard in the library with the revolver
  or something to that effect and in that
  case a card might be revealed that I
  don't see but if it is a card and it is
  either Colonel Mustard or the revolver
  or the library then I know that at least
  one of them can't be in the middle so I
  know something like it is either not
  mustard or it is not the library or it
  is not the revolver now maybe multiple
  of these are not true but I know that at
  least one of mustard library and
  revolver must in fact be false and so
  this now is a propositional logic
  representation of this game of Clue a
  way of encoding the knowledge that we
  know inside this game using
  propositional logic that a computer
  algorithm something like model checking
  that we saw a moment ago can actually
  look at and understand so let's now take
  a look at some codee to see how this
  algorithm might actually work in
  practice all right so I'm now going to
  open up a file called clue. piy which
  I've started already and what we'll see
  here is I've defined a couple of things
  I've defined some symbols initially
  notice I have a symbol for Colonel
  Mustard a symbol for Professor Plum a
  symbol for Miss Scarlet all of which
  I've put inside of this list of
  characters I have a symbol for ballroom
  and kitchen and library inside of a list
  of rooms and then I have symbols for
  knife and revolver and wrench the these
  are my weapons and so all of these
  characters and rooms and weapons alt
  together those are my
  symbols and now I also have this check
  knowledge function and what the check
  knowledge function does is it takes my
  knowledge and it's going to try and draw
  conclusions about what I
  know so for example we'll Loop over all
  of the possible symbols and we'll check
  do I know that that symbol is true and a
  symbol is going to be something like
  Professor Plum or the knife or the
  library and if I know that it is true in
  other words know that it must be the
  card in the in envelope then I'm going
  to print out using a function called C
  print which prints things in color I'm
  going to print out the word yes and I'm
  going to print that in green just to
  make it very clear to
  us and if we're not sure that the symbol
  is true maybe I can check to see if I'm
  sure that the symbol is not true like if
  I know for sure that it is not Professor
  Plum for example and I do that by
  running model check again this time
  checking if my knowledge is not the
  symbol if I know for sure that the
  symbol is not true and if I don't know
  for sure that the symbol is not true
  because I say l if not model check
  meaning I'm not sure that the symbol is
  false well then I'll go ahead and print
  out maybe next to the symbol because
  maybe the symbol is true maybe it's not
  I don't actually know so what knowledge
  do I actually have well let's try and
  represent my knowledge now so my
  knowledge is I know a couple of things
  so I'll put them in an and and I know
  that one of the three people must be the
  criminal so I know or mustard Plum
  Scarlet this is my way of encoding that
  it is either Colonel Mustard or
  Professor Plum or Miss Scarlet I know
  that it must have happened in one of the
  rooms so I know or Ballroom kitchen
  library for example and I know that one
  of the weapons must have been used as
  well so I know or knife revolver wrench
  so that might be my initial knowledge
  that I know that it must have been one
  of the people I know it must have been
  in one of the rooms and I know that it
  must have been one of the weapons and I
  can see what that knowledge looks like
  as a formula by printing out knowledge.
  formula so I'll run Python clue. py and
  here now is the information that I know
  in logical format I know that it is
  Colonel Mustard or Professor Plum or
  Miss scarlet and I know that it is the
  ballroom the kitchen or the library and
  I know that it is the knife the revolver
  or the wrench but I don't know much more
  than that I can't really draw any firm
  conclusions and in fact we can see that
  if I try and do let me go ahead and run
  my knowledge check function on my
  knowledge knowledge check is this
  function that I or check knowledge
  rather is this function that I just
  wrote that looks over all of the symbols
  and tries to see what conclusions I can
  actually draw about any of the symbols
  so I'll go ahead and run uh clue. piy
  and see what it is that I know and it
  seems that I don't really know anything
  for sure I have all three people are may
  all three of the rooms are may all three
  of the weapons are may I don't really
  anything for certain just yet but now
  let me try and add some additional
  information and see if additional
  information additional knowledge can
  help us to logically reason our way
  through this process and we are just
  going to provide the information our AI
  is going to take care of doing the
  inference and figuring out what
  conclusions it's able to draw so I start
  with some cards and those cards tell me
  something so if I have the colel mustard
  card for example I know that the mustard
  symbol must be false in other words
  mustard is not the one in the envelope
  it's not the criminal so I can say
  knowledge supports something called
  every and in this uh Library supports
  add which is a way of adding knowledge
  or adding an additional logical sentence
  to an and Clause so I can say knowledge.
  add not mustard right I happen to know
  because I have the mustard card that
  Colonel Mustard is not the suspect and
  maybe I have a couple of other cards too
  maybe I also have a card uh for the
  kitchen so so I know it's not the
  kitchen and maybe I have another card
  that says that it is not the revolver so
  I have three cards Colonel Mustard the
  kitchen and the revolver and I encode
  that into my AI this way by saying it's
  not Colonel Mustard it's not the kitchen
  and it's not the revolver and I know
  those to be true so now when I rerun
  clue. py we'll see that I've been able
  to eliminate some possibilities before I
  wasn't sure if it was the knife or the
  revolver or the wrench knife was maybe
  revolver was maybe wrench was maybe now
  I'm down to just the knife and the
  wrench between those two I don't know
  which one it is they're both may but
  I've been able to eliminate the revolver
  uh which is one that I know to be false
  because I have the revolver card and so
  additional information might be acquired
  over the course of this game and we
  would represent that just by adding
  knowledge to our knowledge set or
  knowledge base that we've been building
  here so if for example We additionally
  got the information that someone made a
  guess someone guessed like uh Miss
  Scarlet in the library with the wrench
  and we know that that a card was
  revealed which means that one of those
  three cards either Miss Scarlet or the
  library or the wrench one of those at
  minimum must not be inside of the
  envelope so I could add some knowledge
  say knowledge. add and I'm going to add
  an or Clause because I I don't know for
  sure which one it's not but I know one
  of them is not in the envelope so it's
  either not Scarlet or it's not the
  library and or supports multiple
  arguments I can say it's also or not the
  wrench so at least one of those need
  Scarlet library and wrench at least one
  of those needs to be false I don't know
  which though maybe it's multiple maybe
  it's just one but at least one I know
  needs to hold and so now if I rerun
  clue. I don't actually have any
  additional information just yet nothing
  I can say conclusively I still know that
  maybe it's Professor Plum maybe it's
  Miss Scarlet I haven't eliminated any
  options but let's imagine that I get
  some more information that someone shows
  me the professor Plum card for example
  so I say all right let's go back here
  knowledge. add not Plum so I have the
  professor Plum card I know the professor
  Plum is not in the middle I rerun clue.
  piy and all right now I'm able to draw
  some conclusions now I've been able to
  eliminate Professor Plum and the only
  person that could left remaining be is
  Miss Scarlet so I know yes Miss Scarlet
  this variable must be true and I've been
  able to infer that based on the
  information I already had now between
  the ballroom and the and the knife and
  the wrench for those two I'm still not
  sure so let's add one more piece of
  information let's say that I know that
  it's not the ballroom someone has shown
  me the ballroom card so I know it's not
  the ballroom which means at this point I
  should be able to conclude that it's the
  library let's see I'll say knowledge.
  add not the
  ballroom and we'll go ahead and run
  that and it turns out that after all of
  this not only can I conclude that I know
  that it's the library but I also know
  that the weapon was the knife and that
  might have been an inference that was a
  little bit trickier something I wouldn't
  have realized immediately but the AI via
  this model checking algorithm is able to
  draw that conclusion that we know for
  sure that it must be Miss Scarlet in the
  library with the knife and how did we
  know that well we know it from this or
  Clause up here that we know that it's
  either not Scarlet or it's not the
  library or it's not the wrench and given
  that we know that it is Miss scarlet and
  we know that it is the library then the
  only remaining option for the weapon is
  that it is not the wrench which means
  that it must be the knife so we as
  humans now can go back and reason
  through that even though it might not
  have been immediately clear and that's
  one of the advantages of using an AI or
  some sort of algorithm in order to do
  this is that the computer can exhaust
  all of these possibilities and try and
  figure out what the solution actually
  should be and so for that reason this
  often helpful to be able to represent
  knowledge in this way knowledge
  engineering some situation where we can
  use a computer to be able to represent
  knowledge and draw conclusions based on
  that knowledge and anytime we can
  translate something into propositional
  logic symbols like this this type of
  approach can be useful so you might be
  familiar with logic puzzles where you
  have to puzzle your way through trying
  to figure something out this is what a
  classic logic puzzle might look like
  something like gilderoy manura Pomona
  and Horus each belong to a different one
  of the four houses Gryffindor Hufflepuff
  Ravenclaw and Slytherin and then we have
  some information that gilderoy belongs
  to Gryffindor or Raven claw Pomona does
  not belong in Slytherin and minurva does
  belong to Gryffindor so we have a couple
  pieces of information and using that
  information we need to be able to draw
  some conclusions about which person
  should be assigned to which house and
  again we can use the exact same idea to
  try and implement this notion so we need
  some propositional symbols and in this
  case the propositional symbols are going
  to get a little more complex although
  we'll see ways to make this a little bit
  cleaner later on but we'll need 16
  propositional symbol
  one for each person and house so we need
  to say remember every propositional
  symbol is either true or false so
  gilderoy Gryffindor is either true or
  false either he's in Gryffindor or he is
  not likewise gilderoy Hufflepuff also
  true or false either it is true or it's
  false and that's true for every
  combination of person and house that we
  could come up with we have some sort of
  propositional symbol for each one of
  those using this type of knowledge we
  can then begin to think about what types
  of logical sentences we can say about
  the puzzle that if we know what before
  we even think about the information we
  were given we can think about the
  premise of the problem that every person
  is assigned to a different house so what
  does that tell us well it tells us
  sentences like this it tells us like
  Pomona Slytherin implies not Pomona
  Hufflepuff something like if Pomona is
  in Slytherin then we know that Pomona is
  not in Hufflepuff and we know this for
  all four people and for all combinations
  of houses that no matter M what person
  you pick if they're in one house then
  they're not in some other house so I'll
  probably have a whole bunch of knowledge
  statements that are of this for that if
  we know Pomona is in Slytherin then we
  know Pomona is not in Hufflepuff we were
  also given the information that each
  person is in a different house so I also
  have pieces of knowledge that look
  something like this minurva Ravenclaw
  implies not gilderoy Ravenclaw if
  they're all in different houses then if
  manura is in Ravenclaw then we know the
  guild Roy is not in Raven claw as well
  and I have a whole bunch of similar
  sentences like this that are expressing
  that idea for other people and other
  houses as well and so in addition to
  sentences of these form I also have the
  knowledge that was given to me
  information like gilderoy was in
  Gryffindor or in Ravenclaw that would be
  represented like this gildy Gryffindor
  or gildy Ravenclaw and then using these
  sorts of sentences I can begin to draw
  some conclusions about the world so
  let's see an example of this we'll go
  ahead and actually try and implement
  this logic puzzle to see if we can
  figure out what the answer is I'll go
  ahead and open up puzzle. where I've
  already started to implement this sort
  of idea I've defined a list of people
  and a list of houses and I've so far
  created one symbol for every person and
  for every house that's what this double
  for Loop is doing looping over all
  people looping over all houses creating
  a new symbol for each of them and then
  I've added some information I know that
  every person belongs to a house
  so I've added the information for every
  person that person Gryffindor or person
  Hufflepuff or person Ravenclaw or person
  Slytherin that one of those four things
  must be true every person belongs to a
  house what other information do I know I
  also know that only one house per person
  so no person belongs to multiple houses
  so how does this work well this is going
  to be true for all people so I'll Loop
  over every person and then I need to
  Loop over all different pairs of houses
  the idea is I want to encode the idea
  that if manura is in Gryffindor then
  manura can't be in Raven claw so I'll
  Loop over all houses H1 and I'll Loop
  over all houses again H2 and as long as
  they're different H1 not equal to H2
  then I'll add to my knowledge base this
  piece of information that implication in
  other words an if then if the person is
  in H1 then I know that they are not in
  house
  H2 so these lines here are encoding the
  notion that for every person if they
  belong to house one then they are not in
  house two and the other piece of logic
  we need to encode is the idea that every
  house can only have one person in other
  words if pona is in Hufflepuff then
  nobody else is allowed to be in
  Hufflepuff either and that's the same
  logic but sort of backwards I Loop over
  all of the houses and loop over all
  different pairs of people so I Loop over
  people once Loop over people again and
  only do this when the people are
  different P1 not equal to P2 to and I
  add the knowledge that if as given by
  the implication if person one belongs to
  the house then it is not the case that
  person two belongs to the same house so
  here I'm just encoding the knowledge
  that represents the problems constraints
  I know that everyone's in a different
  house I know that any person can only
  belong to one house and I can now take
  my uh knowledge and try and print out
  the information that I happen to know so
  I'll go ahead and print out knowledge.
  formula just to see this in action and
  I'll go ahead and skip this for now but
  we'll come back to this in a second
  let's print out the knowledge that I
  know by running python puzzle. piy it's
  a lot of information a lot that I have
  to scroll through because there's 16
  different variables all going on but the
  basic idea if we scroll up to the very
  top is I see my initial information
  gilderoy is either in Gryffindor or
  gilderoy is in Hufflepuff or gilderoy is
  in Ravenclaw or gilderoy is in Slytherin
  and and then way more information as
  well so this is quite messy more than we
  really want to be looking at and soon
  too we'll see ways of representing this
  a little bit more nicely using logic but
  for now we can just say these are the
  variables that we're dealing with and
  now we'd like to add some
  information so the information we're
  going to add is gilderoy is in
  Gryffindor or he is in Ravenclaw so that
  knowledge was given to us so I'll go
  ahead and say knowledge. add and I know
  that either
  or gu gilderoy
  Gryffindor
  or gilderoy Ravenclaw one of those two
  things must be true I also know that
  Pomona was not in Slytherin so I can say
  knowledge. add not this symbol not the
  Pomona Slytherin symbol and then I can
  add the knowledge that minurva is in
  Gryffindor by adding the symbol minurva
  Gryffindor so those are the pieces of
  knowledge that I know
  and this Loop here at the bottom just
  Loops over all of my symbols checks to
  see if the knowledge entails that symbol
  by calling this model check function
  again and if it does if we know the
  symbol is true we print out the symbol
  so now I can run Python puzzle. py and
  python is going to solve this puzzle for
  me we're able to conclude that gilderoy
  belongs to Ravenclaw Pomona belongs to
  Hufflepuff manura to Gryffindor and
  Horus to Slytherin just by encoding this
  knowledge inside the computer although
  it was quite tedious to do in this case
  and as a result we were able to get the
  conclusion from that as well and you can
  imagine this being applied to many sorts
  of different deductive situations so not
  only these situations where we're trying
  to deal with Harry Potter characters in
  this puzzle but if you've ever played
  games like Mastermind where you're
  trying to figure out which uh order
  different colors go in and trying to
  make predictions about it I could tell
  you for example let's play a simplified
  version of Mastermind where there are
  four colors red blue green and yellow
  and they're in some order but I'm not
  telling you what order you just have to
  make a guess and I'll tell you of red
  blue green and yellow how many of the
  four you got in the right position so a
  simplified version of this game you
  might make a guess like red blue green
  yellow and I would tell you something
  like two of those four are in the
  correct position but the other two are
  not then you could reasonably make a
  guess and say all right let's try this
  blue red green yellow try switching two
  of them around and this time maybe I
  tell you you know what none of those are
  in the correct position and the question
  then is all right what is the correct
  order of these four colors and we as
  humans could begin to reason this
  through all right well if none of these
  were correct but two of these were
  correct well it must have been because I
  switched the red and the blue which
  means red and blue here must be correct
  which means green and yellow are
  probably not correct you can begin to do
  this sort of deductive reasoning we can
  also equivalently try and take this and
  encode it inside of our computer as well
  and it's going to be very similar to the
  logic puzzle that we just did a moment
  ago so I won't spend too much time on
  this code because it is fairly similar
  but again we have a whole bunch of
  colors and four different positions in
  which those colors can be and then we
  have some additional knowledge and I
  encode all of that knowledge and you can
  take a look at this code uh on your own
  time um but I just want to demonstrate
  that when we run this code R run python
  Mastermind dopy and run and see what we
  get we ultimately are able to compute
  red zero in the zero position blue in
  the one position yellow in the two
  position and green in the three position
  as The Ordering of those symbols now
  ultimately what you might have noticed
  is this process was taking quite a long
  time and in fact model checking is not a
  particularly efficient algorithm right
  what I need to do in order to model
  check is take all of my possible
  different variables and enumerate all of
  the possibilities that they could be in
  if I have n variables I have two to the
  N possible worlds that I need to be
  looking through in order to perform this
  model cheing algorithm and this is
  probably not tractable especially as we
  start to get to much larger and larger
  sets of data where we have many many
  more variables that are at play right
  here we only have a relatively small
  number of variables so this sort of
  approach can actually work but as the
  number of variables increases model
  checking becomes less and less good of a
  way of trying to solve these sorts of
  problems so while it might have been
  okay for something like Mastermind to
  conclude that this is indeed the correct
  sequence where all four are in the
  correct position what we'd like to do is
  come up with some better ways to be able
  to make inferences rather than just
  enumerate all of the possibilities and
  to do so what we transition to next is
  the idea of inference rules some sort of
  rules that we can apply to take
  knowledge that already exists and
  translate it into new forms of knowledge
  and the general way we'll structure an
  inference rule is by having a horizontal
  line here anything above the line is
  going to represent a premise something
  that we know to be true and then
  anything below the line will be the
  conclusion that we can arrive at after
  we apply the logic from the inference
  rule that we're going to demonstrate so
  we'll do some of these inference rules
  as by demonstrating them in English
  first but then translating them into the
  world of propositional logic so you can
  see what those inference rules actually
  look like so for example let's imagine
  that I have access to two pieces of
  information I know for example that if
  it is raining then Harry is inside for
  example and let's say I also know it is
  raining then most of us could reason
  then look at this information and
  conclude that all right Harry must be
  inside this inference rule is known as
  modus ponents and it's phrased more
  formally in logic as this if we know
  that Alpha implies beta in other words
  if Alpha then beta and we also know that
  Alpha is true then we should be able to
  conclude that beta is also true we can
  apply this inference rule to take these
  two pieces of information and generate
  this new piece of information notice
  this is a totally different approach
  from the model checking approach where
  the approach was look at all of the
  possible worlds and see what's true in
  each of these worlds here we're not
  dealing with any specific World we're
  just dealing with the knowledge that we
  know and what conclusions we can arrive
  at based on that knowledge that I know
  that a implies B and I know a and the
  conclusion is B and this should seem
  like a relatively obvious rule that of
  course if Alpha then beta and we know
  Alpha then we should be able to conclude
  that beta is also true and that's going
  to be true for many but may maybe even
  all of the inference rules that we'll
  take a look at you should be able to
  look at them and say yeah of course
  that's going to be true but it's putting
  these all together figuring out the
  right combination of inference rules
  that can be applied that ultimately is
  going to allow us to generate
  interesting knowledge inside of our AI
  so that's modus ponents this application
  of implication that if we know Alpha and
  we know that Alpha implies beta then we
  can conclude beta let's take a look at
  another example fairly straightforward
  something like Harry is friends with Ron
  and Hermione based on that information
  we can reasonably conclude Harry is
  friends with hermy that must also be
  true and this inference rule is known as
  and elimination and what and elimination
  says is that if we have a situation
  where Alpha and beta are both true I
  have information Alpha and beta well
  then just Alpha is true or likewise just
  beta is true that if I know that both
  parts are true then one of those parts
  must also be true again something
  obvious from the point of view of human
  intuition but a computer needs to be
  told this kind of information to be able
  to apply the inference rule we need to
  tell the computer that this is an
  inference rule that you can apply so the
  computer has access to it and is able to
  use it in order to translate information
  from one form to
  another in addition to that let's take a
  look at another example of an inference
  rule something like it is not true that
  Harry did not pass the test
  bit of a tricky sentence to par read it
  again it is not true or it is false that
  Harry did not pass the test well if it
  is false that Harry did not pass the
  test then the only reasonable conclusion
  is that Harry did pass the test and so
  this instead of being and elimination is
  what we call Double negation elimination
  that if we have two negatives inside of
  our premise then we can just remove them
  Al together they cancel each other out
  one turns true to false and the other
  one turns false back into true phrased a
  little bit more formally we say that if
  the premise is not not Alpha then the
  conclusion we can draw is just Alpha we
  can say that Alpha is true we'll take a
  look at a couple more of these if I have
  it is raining then Harry is inside how
  do I reframe this well this one is a
  little bit trickier but if I know if it
  is raining then Harry is inside then I
  conclude one of two things must be true
  either it is not raining or Harry is
  inside now this one's trickier so let's
  think about it a little bit this first
  premise here if it is raining then Harry
  is inside is saying that if I know that
  it is raining then Harry must be inside
  so what is the other possible case well
  if Harry is not inside then I know that
  it must not be raining so one of those
  two situations must be true either it's
  not raining or it is raining in which
  case Harry is inside so the conclusion I
  can draw is either it is not raining or
  it is raining so therefore Harry is
  inside and so this is a way to translate
  if then statements into or statements
  and this is known as implication
  elimination and this is similar to what
  we actually did in the beginning when we
  were first looking at those very first
  sentences about Harry and Hagrid and
  Dumbledore and phrased a little bit more
  formally this says that if I have the
  implication Alpha implies beta that I
  can draw the conclusion that either not
  alpha or
  beta because there are only two
  possibilities either Alpha is true or
  Alpha is not true so one of those
  possibilities is Alpha is not true but
  if Alpha is true well then we can draw
  the conclusion that beta must be true so
  either Alpha is not true or Alpha is
  true in which case beta is also true so
  this is one way to turn an implication
  into just a statement about or in
  addition to eliminating implications we
  can also eliminate byond conditionals as
  well so let's an English example
  something like it is raining if and only
  if Harry is inside and this if and only
  if really sounds like that byond
  conditional that double arrow sign that
  we saw in propositional logic not too
  long ago and what does this actually
  mean if we were to translate this well
  this means that if it is raining then
  Harry is inside and if Harry is inside
  then it is raining that this implication
  goes both ways and this is what we would
  call biconditional elimination that I
  can take a biconditional a if and only
  if B and translate that into something
  like this a implies B and B implies a so
  many of these inference rules are taking
  logic that uses certain symbols and
  turning them into different symbols
  taking an implication and turning it
  into an or or taking a byond conditional
  and turning it into implication and
  another example of it would be something
  like this it is not true that both Harry
  and Ron passed the test well all right
  how do we translate that what does that
  mean well if it is not true that both of
  them passed the test well then the
  reasonable conclusion we might draw is
  that at least one of them didn't pass
  the test so the conclusion is either
  Harry did not pass the test or Ron did
  not pass the test or both this is not an
  exclusive or but if it is true that it
  is not true that both Harry and Ron
  passed the test well then either Harry
  didn't pass the test or Ron didn't pass
  the test and this type of law is one of
  De Morgan's laws quite famous in logic
  where the ideas that we can turn an and
  into an or we can say we can take this
  and that both Harry and Ron pass the
  test and turn it into an ore by moving
  the not around so if it is not true that
  Harry and Ron passed the test well then
  either Harry did not pass the test or
  Ron did not pass the test either and the
  way we frame that more formally using
  logic is to say this if it is not true
  that Alpha and beta well then either not
  Alpha
  or not beta the way I like to think
  about this is that if you have a
  negation in front of an and expression
  you move the negation inwards so to
  speak moving the negation into each of
  these individual sentences and then flip
  the and into an or so the negation moves
  inwards and the and flips into an or so
  I go from Not A and B to not a or not be
  and there's actually a reverse of
  demorgan's law that goes in the other
  direction for something like this
  if I say it is not true that Harry or
  Ron passed the test meaning neither of
  them passed the test well then the
  conclusion I can draw is that Harry did
  not pass the test and Ron did not pass
  the test so in this case instead of
  turning an and into an or we're turning
  an or into an and but the idea is the
  same and this again is another example
  of De Morgan's laws and the way that
  works is that if I have not a or b this
  time the same logic is going to apply
  I'm going to move the negation inwards
  and I'm going to flip this time flip the
  or into an and so if not a or b meaning
  it is not true that a or b or alpha or
  beta then I can say not Alpha and not
  beta moving the negation inwards in
  order to make that conclusion so those
  are demorgan's laws and a couple other
  inference rules that are worth just
  taking a look at uh one is the
  distributive law that works this way so
  if I have Alpha and beta or gamma well
  then much in the same way that you can
  use in math use distributive laws to
  distribute operands like addition and
  multiplication I can do a similar thing
  here where I can say if Alpha and beta
  or gamma then I can say something like
  Alpha and beta or Alpha and Gamma that
  I've been able to distribute this and
  sign throughout this expression so this
  is an example of the distributive
  property or the distributive law as
  applied to logic in much the same way
  that you would distribute like a
  multiplication over the addition of
  something for example uh this works the
  other way too so if for example I have
  alpha or beta and gamma I can distribute
  the or throughout the expression I can
  say alpha or beta and Alpha or gamma so
  the distributive law Works in that way
  too and it's helpful if I want to take
  an or and move it into the expression
  and we'll see an example soon of why it
  is that we might actually care to do
  something like that all right so now
  we've seen a lot lot of different
  inference rules and the question now is
  how can we use those inference rules to
  actually try and draw some conclusions
  to actually try and prove something
  about entailment proving that given some
  initial knowledge base we would like to
  find some way to prove that a query is
  true well one way to think about it is
  actually to think back to what we talked
  about last time when we talked about
  search problems recall again that search
  problems have some sort of initial State
  they have actions that you can take from
  one state to another as defined by a
  transition model model that tells you
  how to get from one state to another we
  talked about testing to see if you're at
  a goal and then some path cost function
  to see you know how many steps did you
  have to take or how costly was the
  solution that you found now that we have
  these inference rules that take some set
  of sentences in propositional logic and
  get us some new set of sentences in
  propositional logic we can actually
  treat those sentences or those sets of
  sentences as States inside of a search
  problem so if we want to prove that some
  query is true prove that some logical
  theorem is true we can treat theorem
  proving as a form of a search problem I
  can say that we begin in some initial
  state where that initial state is the
  knowledge base that I begin with the set
  of all of the sentences that I know to
  be true what actions are available to me
  well the actions are any of the
  inference rules that I can apply at any
  given time the transition model just
  tells me after I apply the inference
  rule here is the new set of all of the
  knowledge that I have which will be the
  old set of knowledge plus some
  additional inference that I've been able
  to draw much as in the same way we saw
  what we got when we applied those
  inference rules and got some sort of
  conclusion that conclusion gets added to
  our knowledge base and our transition
  model will encode that what is the goal
  test well our goal test is you know
  checking to see if we have proved the
  statement we're trying to prove if the
  thing we're trying to prove is inside of
  our knowledge base and the path cost
  function the thing we're trying to
  minimize is maybe the number of
  inference rules that we needed to use
  the number of steps so to speak inside
  of our proof and so here we've been able
  to apply the same types of ideas that we
  saw last time with search problems to
  something like trying to prove something
  about knowledge by taking our knowledge
  and framing it in terms that we can
  understand as a search problem with an
  initial state with actions with a
  transition model so this shows up a
  couple of things one being how versatile
  search problems are that they can be the
  same types of algorithms that we use to
  solve a maze or figure out how to get
  from point A to point B inside of
  driving directions for example can also
  be used as a theorem proving method of
  taking some sort of starting knowledge
  base and trying to prove something about
  that knowledge so this yet again is a
  second way in addition to model checking
  to try and prove that certain statements
  are true but it turns out there's yet
  another way that we can try and apply
  inference and we'll talk about this now
  which is not the only way but certainly
  one of the most common which is known as
  resolution and resolution is based on
  another inference rule that we'll take a
  look at now quite a powerful inference
  rule that will let us prove anything
  that can be proven about a knowledge
  base and it's based on this basic idea
  let's say I know that either Ron is in
  the great hall or Hermione is in the
  library and let's say I also know that
  Ron is not in the Great Hall based on
  those two pieces of information what can
  I conclude well I could pretty
  reasonably include that Hermione must be
  in the library how do I know that well
  it's because these two statements these
  two what we'll call complimentary
  literals literals that complement each
  other they're opposites of each other
  seem to conflict with each other this
  sentence tells us that either Ron is in
  the great hall or Hermione is in the
  library so if we know that Ron is not in
  the Great Hall that conflicts with this
  one which means Hermione must be in the
  library and this we can frame as a
  general rule known as the unit
  resolution rule a rule that says that if
  we have P or q and we also know not P
  well then from that we can reasonably
  conclude q that if P or Q are true and
  we know that P is not true the only
  possibility is for Q to then be true and
  this it turns out is quite a powerful
  inference rule in terms of what it can
  do in part because we can quickly start
  to generalize this rule this Q right
  here doesn't need to just be a single
  propositional symbol it could be
  multiple all chained together in a
  single Clause as we'll call it so if I
  had something like P or q1 or Q2 or Q3
  so on and so forth up until q n so I had
  n different other variables and I have
  not P well then what happens when these
  two complement each other is that these
  two Clauses resolve so to speak to
  produce a new Clause that is just q1 or
  Q2 all the way up to qn and in an or the
  order of the arguments in the or doesn't
  actually matter the P doesn't need to be
  the first thing it could have been in
  the middle but the idea here is that if
  I have p in one clause and not pee in
  the other Clause well then I know that
  one of these remaining things must be
  true I've resolved them in order to
  produce a new
  Clause but it turns out we can
  generalize this idea even further in
  fact and display even more power that we
  can have with this resolution rule so
  let's take another example let's say for
  instance that I know the same piece of
  information that either Ron is in the
  great hall or Hermione is in the library
  and the second piece of information I
  know is that Ron is not in the great
  hall or Harry is sleeping so it's not
  just a single piece of information I
  have two different Clauses and we'll
  Define Clauses more precisely in just a
  moment what do I know here well again
  for any propositional symbol like Ron is
  in the Great Hall there are only two
  possibilities either Ron is in the Great
  Hall in which case based on resolution
  we know that Harry must be sleeping or
  Ron is not in the Great Hall in which
  case we know based on the same rule that
  Hermione must be in the library based on
  those two things in combination I can
  say based on these two premises that I
  can conclude that either Hermione is in
  the library or Harry is
  sleeping so again because these two
  conflict with each other I know that one
  of these two must be true and you can
  take a closer look and try and reason
  through that logic make sure you
  convince yourself that you believe this
  conclusion stated more generally we can
  name this resolution rule by saying that
  if we know P or Q is true and we also
  know that not P or R is true we resolve
  these two Clauses together to get a new
  Clause Q or r that either Q or R must be
  true and again much as in the last case
  Q and R don't need to just be single
  propositional symbols it could be
  multiple symbols so if I had a rule that
  had P or q1 or Q2 or Q3 so on and so
  forth up until q n where n is just some
  number and likewise I had not P or R1 or
  R2 so on and so forth up until RM where
  M again is just some other number I can
  resolve these two Clauses together to
  get one of these must be true q1 or Q2
  up until qn or R1 or R2 up until RM and
  this is just a generalization of that
  same rule we saw before each of these
  things here are what we're going to call
  a clause where a clause is formally
  defined as a disjunction of literals
  where a disjunction means it's a bunch
  of things that are connected with or
  disjunction means things connected with
  or conjunction meanwhile is things
  connected with and and a literal is
  either a propositional symbol or the
  opposite of a propositional symbol so
  it's something like P or Q or not P or
  not Q those are all proposition symbols
  or not of the propositional symbols and
  we call those literals so a clause is
  just something like this P or Q or R for
  example meanwhile what this gives us an
  ability to do is it gives us an ability
  to turn logic any logical sentence into
  something called conjunctive normal form
  a conjunctive normal form sentence is a
  logical sentence that is a conjunction
  of Clauses recall again conjunction
  means things are connected to another
  using and and so a conjunction of
  Clauses means that there's an and of
  individual Clauses Each of which has
  ores in it so something like this A or B
  or C and D or not e and f or G
  everything in parentheses is one Clause
  all of the Clauses are connected to each
  other using an and and everything in the
  Clause is separated using an or and this
  is just a standard form that we can
  translate a logical sentence into that
  just makes it easy to work with and easy
  to manipulate and it turns out that we
  can take any sentence in logic and turn
  it into conjunctive normal form just by
  applying some inference rules and
  transformations to it so we'll take a
  look at how we can actually do that so
  what is the process for taking a logical
  formula and converting it into
  conjunctive normal form otherwise known
  as CNF well the process looks a little
  something like this we need to take all
  of the symbols that are not part of
  conjunctive normal form the byond
  conditional and the implications and so
  forth and turn them into something that
  is more closely like conjunctive normal
  form so the first step will be to
  eliminate by conditionals those if and
  only if double arrows and we know how to
  eliminate by conditionals because we saw
  there was an inference rule to do just
  that anytime I have an expression like
  Alpha if and only if beta I can turn
  that into Alpha implies beta and beta
  implies Alpha based on that inference
  rule we saw before likewise in addition
  to eliminating by conditionals I can
  eliminate implications as well the if
  then arrows and I can do that using the
  same inference rule we saw before too
  taking Alpha implies beta and turning
  that into not alpha or beta because that
  is logically equivalent to this first
  thing
  here then we can move knots inwards
  because we don't want knots on the
  outsides of our Expressions conjunctive
  normal form requires that it's just
  clause and clause and clause and Clause
  any knots need to be immediately next to
  propositional symbols but we can move
  those knots around using de Morgan's
  laws by taking something like not a and
  b and turn it into not a or not B for
  example using de Morgan's laws to
  manipulate that and after that all will
  be left with are ANS and ores and those
  are easy to deal with we can use the
  distributive law to distribute the ores
  so that the ores end up on the inside of
  the expression so to speak and the ANS
  end up on the outside so this is the
  general pattern for how will take a
  formula and convert it into conjunctive
  normal form and let's now take a look at
  an example of how we would do this and
  explore then why it is that we would
  want to do something like this here's
  how we can do it let's take this formula
  for example P or Q implies R and I'd
  like to convert this into conjunctive
  normal form where it's all ANS of
  Clauses and every Clause is a
  disjunctive clause it's ores together so
  what's the first thing I need to do well
  this is an implication so let me go
  ahead and remove that implication using
  the implication inference rule I can
  turn P or Q into P or Q implies R into
  not P or Q or R so that's the first step
  I've gotten rid of the implication and
  next I can get rid of the knot on the
  outside of this expression too I can
  move the knots inwards so they're closer
  to the
  literals themselves by using de Morgan's
  laws and de Morgan's law says that not P
  or Q is equivalent to not p and not Q
  again here just applying the inference
  rules that we've already seen in order
  to translate these statements and now I
  have two things that are separated by an
  or where this thing on the inside is an
  and what I'd really like is to move the
  ores so the ores are on the inside
  because conjunctive normal form means I
  need clause and clause and clause and
  clause and so to do that I can use the
  distributive law if I have not p and not
  Q or r i can distribute the or R to both
  of these to get not P or R and not Q or
  R using the distributive law and this
  now here at the bottom is in conjunctive
  normal form it is a conjunction an and
  of disjunctions of Clauses that just are
  separated by ores so this process can be
  used by any formula to take a logical
  sentence and turn it into this
  conjunctive normal form where I have
  clause and clause and clause and clause
  and clause and so on so why is this
  helpful why do we even care about taking
  all these sentences and converting them
  into this form it's because once they're
  in this form where we have these Clauses
  these Clauses are the inputs to the
  resolution inference rule that we saw a
  moment ago that if I have two Clauses
  where there's something that conflicts
  or something complimentary between those
  two clauses I can resolve them to get a
  new Clause to draw a new conclusion and
  we call this process inference by
  resolution using the resolution rule to
  draw some sort of inference and it's
  based on the same idea that if I have P
  or Q This clause and I have not P or r
  that I can resolve these two Clauses
  together to get Q or r as the resulting
  Clause a new piece of information that I
  didn't have before now a couple of key
  points that are worth noting about this
  before we talk about the actual
  algorithm one thing is that let's
  imagine we have P or Q or S and I also
  have not P or r or s
  the resolution rule says that because
  this P conflicts with this not P we
  would resolve to put everything else
  together to get Q or s or r or S but it
  turns out that this double s is
  redundant or S here and or S there it
  doesn't change the meaning of the
  sentence so in resolution when we do
  this resolution process we'll usually
  also do a process known as factoring
  where we take any duplicate variables
  that show up and just eliminate them so
  Q or s or r or S just becomes Q or r or
  s the S only needs to appear once no
  need to include it multiple times now
  one final question worth considering is
  what happens if I try to resolve p and
  not P together if I know that P is true
  and I know that not p is true well
  resolution says I can merge these
  Clauses together and look at everything
  else well in this case there is nothing
  else so I'm left with what we might call
  the empty Clause I'm left with nothing
  and the empty Clause is always false the
  empty Clause is equivalent to just being
  false and that's pretty reasonable
  because it's impossible for both p and
  not P to both hold at the same time p is
  either true or it's not true which means
  that if p is true then this must be
  false and if this is true then this must
  be false there's no way for both of
  these to hold at the same time so if
  ever I try and resolve these two it's a
  contradiction and I'll end up getting
  this empty Clause where the empty Clause
  I can call equivalent to false
  and this idea that if I resolve these
  two contradictory terms I get the empty
  Clause this is the basis for our
  inference by resolution algorithm here's
  how we're going to perform inference by
  resolution at a very high level we want
  to prove that our knowledge base entails
  some query Alpha that based on the
  knowledge we have we can prove
  conclusively that Alpha is going to be
  true how are we going to do that well in
  order to do that we're going to try to
  prove that if we know the knowledge and
  not Alpha that that would be a
  contradiction and this is a common
  technique in computer science more
  generally this idea of proving something
  by contradiction if I want to prove that
  something is true I can do so by first
  assuming that it is false and showing
  that it would be contradictory showing
  that it leads to some contradiction and
  if the thing I'm trying to prove if when
  I assume it's false leads to a
  contradiction then it must be true and
  that's the logical approach or the idea
  behind of proof by contradiction and
  that's what we're going to do here we
  want to prove that this query Alpha is
  true so we're going to assume that it's
  not true we're going to assume not Alpha
  and we're going to try and prove that
  it's a contradiction if we do get a
  contradiction well then we know that our
  knowledge entails the query Alpha if we
  don't get a contradiction there is no
  entailment this is this idea of a proof
  by contradiction of assuming the
  opposite of what you're trying to prove
  and if you can demonstrate that that's a
  contradiction than what you're proving
  must be true but more formally how do we
  actually do this how do we check that
  knowledge base and not Alpha is going to
  lead to a contradiction well here is
  where resolution comes into play to
  determine if our knowledge base entails
  some query Alpha we're going to convert
  knowledge base and not Alpha to
  conjunctive normal form that form where
  we have a whole bunch of Clauses that
  are all anded together and when we have
  these individual clauses now we can keep
  checking to see if we can use resolution
  to produce a new Clause right we can
  take any pair of Clauses and check is
  there some literal that is the opposite
  of each other or complimentary to each
  other in both of them for example I have
  a p in one clause and a not p in another
  clause or an r in one clause and a not R
  in another Clause If Ever I have that
  situation where once I convert to
  conjunctive normal form and I have a
  whole bunch of clauses I see two Clauses
  that I can resolve to produce a new
  Clause then I'll do so this process
  occurs in a loop I'm going to keep
  checking to see if I can use resolution
  to produce a new clause and keep using
  those new Clauses to try to generate
  more new Clauses after that now it just
  so may happen that eventually we may
  produce the empty Clause the Clause we
  were talking about before if I resolve p
  and not P together that produces the
  empty clause and the empty Clause we
  know to be false because we know that
  there's no way for both p and not P to
  both simultaneously be true so if ever
  we produce the empty Clause then we have
  a contradiction and if we have a
  contradiction that's exactly what we
  were trying to do in a fruit by
  contradiction if we have a contradiction
  then we know that our knowledge base
  must entail this query Alpha we know
  that Alpha must be true and it turns out
  and we won't go into the proof here but
  you can show that otherwise if you don't
  produce the empty Clause then there is
  no entailment if we run into a situ
  sitation where there are no more new
  Clauses to add we've done all the
  resolution that we can do and yet we
  still haven't produced The Empty Clause
  then there is no entailment in this case
  and this now is the resolution algorithm
  and it's very abstract looking
  especially this idea of like what does
  it even mean to have the empty Clause so
  let's take a look at an example actually
  try and prove some entailment by using
  this inference by resolution process so
  here's our question we have this
  knowledge base here's the knowledge that
  we know A or B B and not b or c and not
  C and we want to know if all of this
  entails
  a so this is our knowledge base here
  this whole long thing and our query
  Alpha is just this propositional symbol
  a so what do we do well first we want to
  prove by contradiction so we want to
  First assume that a is false and see if
  that leads to some sort of contradiction
  so here is what we're going to start
  with A or B and not b or c and not C
  this is our knowledge base and we're
  going to assume not a we're going to
  assume that the thing we're trying to
  prove is in fact false and so this is
  now in conjunctive normal form and I
  have four different clauses I have a or
  b I have not b or c I have not C and I
  have not a and now I can begin to just
  pick two Clauses that I can resolve and
  apply the resolution rule to them and so
  at these four clauses I see all right
  these two Clauses are ones I can resolve
  I can resolve them because there are
  complimentary literals that show up in
  them there's a c here and a not C here
  so just looking at these two Clauses if
  I know that not b or c is true and I
  know that c is not true well then I can
  resolve these two Clauses to say all
  right not B that must be true I can
  generate this new Clause as a new piece
  of information that I now know to be
  true and all right now I can repeat this
  process do the process again can I use
  resolution again to get some new
  conclusion well it turns out I can I can
  use that new Clause I just generated
  along with this one here there are
  complimentary literals this B is
  complimentary to or conflicts with this
  not B over here and so if I know that A
  or B is true and I know that b is not
  true well then the only remaining
  possibility is that a must be true so
  now we have a that is a new Clause that
  I've been able to
  generate and now I can do this one more
  time I'm looking for two Clauses that
  can be resolved and you might
  programmatically do this by just looping
  over all possible pairs of Clauses and
  checking for complimentary literals in
  each and here I can say all right I
  found two Clauses not a and a that
  conflict with each other and when I
  resolve these two together well this is
  the same as when we were resolving p and
  not P from before when I resolve these
  two Clauses together I get rid of the
  A's and I'm
  with the empty clause and the empty
  Clause we know to be false which means
  we have a contradiction which means we
  can safely say that this whole knowledge
  base does entail a that if this sentence
  is true that we know that a for sure is
  also true so this now using inference by
  resolution is an entirely different way
  to take some statement and try and prove
  that it is in fact true instead of
  enumerating all of the possible worlds
  that we might be in in order to try to
  figure out in which cases is the
  knowledge based true and in which cases
  our query true instead we use this
  resolution algorithm to say let's keep
  trying to figure out what conclusions we
  can draw and see if we reach a
  contradiction and if we reach a
  contradiction then that tells us
  something about whether our knowledge
  actually entails the query or not and it
  turns out there are many different
  algorithms that can be used for INF
  inference what we've just looked at here
  are just a couple of them and in fact
  all of this is just based on one
  particular type of logic it's based on
  propositional logic where we have these
  individual symbols and we connect them
  using and and or and not and implies and
  by conditionals but propositional logic
  is not the only kind of logic that
  exists and in fact we see that there are
  limitations that exist in propositional
  logic especially as we saw in examples
  like with the Mastermind example or with
  the example with the logic puzzle where
  we had different uh hogw House people
  that belong to different houses and we
  were trying to figure out who belonged
  to which houses there were a lot of
  different propositional symbols that we
  needed in order to represent some fairly
  basic ideas so now as a final topic that
  we'll take a look at just before we end
  class today is one final type of logic
  different from propositional logic known
  as first order logic which is a little
  bit more powerful than propositional
  logic and is going to make it easier for
  us to express certain types of ideas in
  propositional logic if we think back to
  that puzzle with the people in the
  Hogwarts houses we had a whole bunch of
  symbols and every symbol could only be
  true or false right we had a symbol for
  manura Gryffindor which was either true
  if manura was in Gryffindor and false
  otherwise and likewise for manura
  Hufflepuff and manura Ravenclaw and
  manura Slytherin and so forth but this
  was starting to get quite redundant that
  we wanted some way to be able to express
  that there's a relationship between
  these propositional symbols that manura
  shows up in all of them and also I would
  have liked to have not have had so many
  different symbols to represent what
  really was a fairly straightforward
  problem so first order logic will give
  us a different way of trying to deal
  deal with this idea by giving us two
  different types of symbols we're going
  to have constant symbols that are going
  to represent objects like people or
  houses and then predicate symbols which
  you can think of as relations or
  functions that take an input and
  evaluate them to like true or false for
  example that tell us whether or not some
  property of some constant or some pair
  of constants or multiple constants
  actually holds so we'll see an example
  of that in just a moment but for now in
  this same problem our constant symbols
  might be objects things like people or
  houses so minurva Pomona Horus gilderoy
  those are all constant symbols as are my
  four houses Gryffindor Hufflepuff
  Ravenclaw and Slytherin predicates
  meanwhile these predicate symbols are
  going to be properties that might hold
  true or false of these individual
  constants so person might hold true of
  manura but it would be false for
  Gryffindor because Gryffindor is not a
  person and house is going to hold true
  for Ravenclaw but it's not going to hold
  true for Horus for example cuz Horus is
  a person and belongs to Meanwhile is
  going to be some relation that is going
  to relate people to their houses it's
  going to only tell me when someone
  belongs to a house or does not so let's
  take a look at some examples of what a
  sentence in first order logic might
  actually look like a sentence might look
  like something like this person minurva
  with manura in parenthesis and person
  being a predicate symbol manura being a
  constant symbol this sentence in first
  order logic effectively means manura is
  a person or the person property applies
  to the manura object so if I want to say
  something like manura as a person here
  is how I express that idea using first
  order logic meanwhile I can say
  something like house Gryffindor to
  likewise express the idea that
  Gryffindor is a house I can do that this
  way and all of the same logical
  connectives we saw in propositional
  logic those are going to work here too
  so and or implication by not in fact I
  can use not to say something like not
  house manura and this sentence in first
  order logic means something like manura
  is not a house it is not true that the
  house property applies to
  manura Meanwhile in addition to some of
  these predicate symbols that just take a
  single argument some of our predicate
  symbols are going to express uh binary
  relations relations between two of its
  arguments so I could say something like
  belongs to and then two inputs manura
  and Gryffindor to express the idea that
  manura belongs to Gryffindor and so now
  here's the key difference one of the key
  differences between this and
  propositional logic in propositional
  logic I needed one symbol for manura
  Gryffindor and one symbol for manura
  Hufflepuff and one symbol for all the
  other people's Gryffindor and Hufflepuff
  variables in this case I just need one
  symbol for each of my people and one
  symbol for each of my houses and then I
  can express as a predicate something
  like belongs to and say belongs to
  manura Gryffindor to express the idea
  that manura belongs to Gryffindor House
  so already we can see that first order
  logic is quite expressive in being able
  to express these sorts of sentences
  using the existing constant symbols and
  predicates that already exist while
  minimizing the number of new symbols
  that I need to create I can just use
  eight symbols for people for houses
  instead of 16 symbols for every possible
  combination of each but first order
  logic gives us a couple of additional
  features that we can use to express even
  more complex ideas and these more
  additional features are generally known
  as quantifiers and there are two main
  quantifiers in first order Logic the
  first of which is universal
  quantification Universal quantification
  lets me Express an idea like something
  is going to be true for all values of a
  variable like for all values of X some
  statement is going to hold true so what
  might a sentence in Universal
  quantification look like well we're
  going to use this upside down a to mean
  for all so upside down ax means for all
  values of X where X is any object this
  is going to hold true belongs to X
  Gryffindor implies not belongs to X
  Hufflepuff so let's try and parse this
  out this means that for all values of x
  if this holds true if x belongs to
  Gryffindor then this does not hold true
  X does not belong to huffpuff so
  translated into English this sentence is
  saying something like for all objects x
  if x belongs to Gryffindor then X does
  not belong to Hufflepuff for example or
  phrased even more simply anyone in
  Gryffindor is not in Hufflepuff
  simplified way of saying the same thing
  so this Universal quantification lets us
  express an idea like something is going
  to hold true for all values of a
  particular variable
  in addition to Universal quantification
  though we also have existential
  quantification whereas Universal
  quantification said that something is
  going to be true for all values of a
  variable existential quantification says
  that some expression is going to be true
  for some value of a variable at least
  one value of the variable so let's take
  a look at a sample sentence using
  existential quantification one such
  sentence looks like this there exists an
  X this backwards e stands for exist
  and here we're saying there exists an X
  such that house X and belongs to manura
  X in other words there exists some
  object X where X is a house and manura
  belongs to X or phrased a little more
  succinctly in English I'm here just
  saying manura belongs to a house there's
  some object that is a house and manura
  belongs to a house and combining this
  Universal and existential quantification
  we can create far more sophisticated
  logical statements then we were able to
  just using propositional logic I could
  combine these to say something like this
  for all X person X implies there exists
  a y such that house Y and belongs to XY
  all right so a lot of stuff going on
  there a lot of symbols let's try and
  parse it out and just understand what
  it's saying here we're saying that for
  all values of x if x is a person then
  this is true so in other words I'm
  saying for all people and we call that
  person X this statement is going to be
  true what statement is true of all
  people well there exists a y that is a
  house so there exists some house and X
  belongs to Y in other words I'm saying
  that for all people out there there
  exists some house such that X the person
  belongs to Y the house this phrased more
  succinctly I'm saying that every person
  belongs to a house that for all x if x
  is a person then there exists a house
  that X belongs to and so we can now
  Express a lot more powerful ideas using
  this idea now A first order logic and it
  turns out there are many other kinds of
  logic out there there's second order
  logic another higher order logic Each of
  which allows us to express more and more
  complex ideas but all of it in this case
  is really in pursuit of the same goal
  which is the representation of knowledge
  we want our AI agents to be able to know
  information to represent that
  information whether that's using
  propositional logic or first order logic
  or some other logic and and then be able
  to reason based on that to be able to
  draw conclusions make inferences figure
  out whether there's some sort of
  entailment relationship as by using some
  sort of inference algorithm something
  like inference by resolution or model
  checking or any number of these other
  algorithms that we can use in order to
  take information that we know and
  translate it to additional conclusions
  so all of this has helped us to create
  AI that is able to represent information
  about what it knows and what it doesn't
  know next time though we'll take a look
  at how we can make our AI even more
  powerful by not just encoding
  information that we know for sure to be
  true and not to be true but also to take
  a look at uncertainty to look at what
  happens if AI thinks that something
  might be probable or maybe not very
  probable or somewhere in between those
  two extremes all in the pursuit of
  trying to build our intelligent systems
  to be even more intelligent we'll see
  you next time
  [Music]
  all right welcome back everyone to an
  introduction to artificial intelligence
  with python and last time we took a look
  at how it is that AI inside of our
  computers can represent knowledge we
  represented that knowledge in the form
  of logical sentences in a variety of
  different logical languages and the idea
  was we wanted our AI to be able to
  represent knowledge or information and
  somehow use those pieces of information
  to be able to derive New pieces of
  information via inference to be able to
  take some information and deduce some
  additional conclusions based on the
  information that it already knew for
  sure but in reality when we think about
  computers and we think about AI very
  rarely are our machines going to be able
  to know things for sure often times
  there's going to be some amount of
  uncertainty in the information that our
  AIS or our computers are dealing with
  where it might believe something with
  some probability as we'll soon discuss
  what prob abili is all about and what it
  means but not entirely for certain and
  we want to use the information that it
  has some knowledge about even if it
  doesn't have perfect knowledge to still
  be able to make inferences still be able
  to draw conclusions so you might imagine
  for example in the context of a robot
  that has some sensors and is exploring
  some environment it might not know
  exactly where it is or exactly what's
  around it but it does have access to
  some data that can allow it to draw
  inferences with some probability there's
  some likelihood that one thing is true
  or another or you can imagine in context
  where there is a little bit more
  Randomness and uncertainty something
  like predicting the weather where you
  might not be able to know for sure what
  tomorrow's weather is with 100%
  certainty but you can probably infer
  with some probability what tomorrow's
  weather is going to be based on maybe
  today's weather and yesterday's weather
  and other data that you might have
  access to as well and so often times we
  can distill this in terms of just
  possible events that might happen and
  what the likelihood of those events are
  this comes a lot in games for example
  where there's an element of chance
  inside of those games so you imagine
  rolling a you're not sure exactly what
  the DI R is going to be but you know
  it's going to be one of these
  possibilities from 1 to six for example
  and so here now we introduce the idea of
  probability Theory and what we'll take a
  look at today is beginning by looking at
  the mathematical foundations of
  probability Theory getting understanding
  for some of the key Concepts within
  probability and then diving into how we
  can use probability and the ideas that
  we look at mathematically to represent
  some ideas in terms of models that we
  can put into our computers in order to
  program an ey that is able to use
  information about probability to draw
  inferences to make some judgments about
  the world with some probability or
  likelihood of being true so probability
  ultimately boils down to this idea that
  there are possible worlds that we're
  here representing using this little
  Greek letter Omega and the idea of a
  possible world is that you know when I
  roll a die there are six possible worlds
  that could result from it I could roll a
  one or a two or a three or a four or a
  five or a six and each of those are a
  possible world and each of those
  possible worlds has some probability of
  being true the probability that I do
  roll a one or a two or a three or
  something else and we represent that
  probability like this using the capital
  letter P and then in parenthesis what it
  is that we want the probability of so
  this right here would be the probability
  of some possible world as represented by
  the little letter Omega now there are a
  couple of basic axioms of probability
  that become relevant as we consider how
  we deal with probability and how we
  think about it first and foremost every
  probability value must range between
  zero and one inclusive so the smallest
  value any probability can have is the
  number zero which is an impossible event
  something like I roll a die and the die
  is a seven is the roll that I get if the
  die only has numbers 1 through six the
  event that I roll a seven is impossible
  so it would have probability zero and on
  the other end of the spectrum
  probability can range all the way up to
  the positive number one meaning an event
  is certain to happen that I roll a die
  and the number is less than 10 for
  example that is an event that is
  guaranteed to happen if the only sides
  on my die are 1 through six for instance
  and then they can range through any real
  number in between these two values where
  generally speaking a higher value for
  the probability means an event is more
  likely to take place and a lower value
  for the probability means the event is
  less likely to take place and the other
  key rule for probability looks a little
  bit like this this Sigma notation if you
  haven't seen it before refers to
  summation the idea that we're going to
  be adding up a whole sequence of values
  and this Sigma donation is going to come
  up a couple of times today because as we
  deal with probability often times we're
  adding up a whole bunch of individual
  values or individual probabilities to
  get some other value so we'll see this
  come up a couple of times but what this
  notation means is that if I sum up all
  of the possible worlds Omega that are in
  big Omega which represents the set of
  all the possible worlds meaning I take
  for all of the worlds in the set of
  possible worlds and add up all of their
  probabilities what I timately get is the
  number one so if I take all the possible
  worlds add up what each of their
  probabilities is I should get the number
  one at the end meaning all probabilities
  just need to sum to one so for example
  if I take dice for example if you
  imagine I have a fair die with numbers 1
  through six and I roll the die each one
  of these roles has an equal probability
  of taking place and the probability is 1
  over six for example so each of these
  probabilities is between zero and one
  zero meaning impossible and one meaning
  for certain and if you add up all of
  these probabilities for all of the
  possible worlds you get the number one
  and we can represent any one of those
  probabilities like this the probability
  that we roll the number two for example
  is just one over six every six times we
  roll the die we'd expect that one time
  for instance that I might come up as a
  two its probability is not certain but
  it's a little more than nothing for
  instance and so this is all fairly
  straightforward for just a single di but
  things get more interesting as our
  models of the world get a little bit
  more complex let's say imagine now that
  we're not just dealing with a single D
  but we have two dice for example I have
  a red D here and a blue D there and I
  care not just about what the individual
  role is but I care about the sum of the
  two roles in this case the sum of the
  two roles is the number three how do I
  begin to now reason about like what does
  the probability look like if instead of
  having one die I now have two di well
  what we might imagine is that we could
  first consider what are all of the
  possible worlds and in this case all of
  the possible worlds are just every
  combination of the red and blue Dy that
  I could come up with for the red Dy it
  could be a one or a two or a three or a
  four or a five or a six and for each of
  those possibilities the blue dye
  likewise could also be either one or two
  or three or four or five or six and it
  just so happens that in this particular
  case each of these possible combinations
  is equally likely equally likely are all
  of these various different possible
  worlds that's not always going to be the
  case as you imagine more complex models
  that we could try to build and things
  that we could try to present in the real
  world it's probably not going to be the
  case that every single possible world is
  always equally likely but in the case of
  fair dice where in any given di roll any
  one number has just as good a chance of
  coming up as any other number we can
  consider all of these possible worlds to
  be equally likely but even though all of
  the possible worlds are equally likely
  that doesn't necessarily mean that their
  sums are equally likely so if we
  consider what the sum is of all of these
  two so 1+ 1 that's a two 2 plus 1 is a
  three and consider for each of these
  possible pairs of numbers what their sum
  ultimately is we can notice that there
  are some patterns here where it's not
  entirely the case that every number
  comes up equally likely if you consider
  seven for example what's the probability
  that when I roll two dice their sum is
  seven there several ways this can happen
  there you know six possible worlds where
  the sum is seven it could be a one and a
  six or a two and a five or a three and a
  four four and a three and so forth but
  if you instead consider you know what's
  the probability that I roll two dice and
  the sum of those two die rolls is 12 for
  for example well looking at this diagram
  there's only one possible World in which
  that can happen and that's the possible
  world where both the red Dy and the blue
  Dy both come up as sixes to give us a
  sum total of 12 So based on just taking
  a look at this diagram we see that some
  of these probabilities are likely
  different the probability that the sum
  is a seven must be greater than the
  probability that the sum is a 12 and we
  can represent that even more formally by
  saying okay the probability that we sum
  to 12 is 1 out of 36 out of the 36
  equally likely prob possible worlds six
  squ because we have six options for the
  red D and options for the blue D out of
  those 36 options only one of them sums
  to 12 whereas on the other hand the
  probability that if we take two di rolls
  and they sum up to the number seven well
  out of those 36 possible worlds there
  were six worlds where the sum was seven
  and so we get 6 over 36 which we can
  simplify as a fraction to just 1 6 so
  here now we're able to represent these
  different ideas of probability
  representing some events that might be
  more likely and then other events that
  are less likely as well and these sorts
  of judgments where we're figuring out
  just in the abstract what is the
  probability that this thing takes place
  are generally known as unconditional
  probabilities some degree of belief we
  have in some proposition some fact about
  the world in the absence of any other
  evidence without knowing any additional
  information if I roll a die what's the
  chance it comes up a as a two or if I
  roll two dice what's the chance that the
  sum of those those two di rolles is a
  seven but usually when we're thinking
  about probability especially when we're
  thinking about training an AI to
  intelligently be able to know something
  about the world and make predictions
  based on that information it's not
  unconditional probability that our AI is
  dealing with but rather conditional
  probability probability where rather
  than having no original knowledge we
  have some initial knowledge about the
  world and how the world actually works
  so conditional probability is the degree
  of belief in a proposition given some
  evidence that has already been revealed
  to us so what does this look like well
  it looks like this in terms of notation
  we're going to represent conditional
  probability as probability of a and then
  this vertical bar and then B and the way
  to read this is the thing on the left
  hand side of the vertical bar is what we
  want the probability of here now I want
  the probability that a is true that it
  is a real world that it is the event
  that actually does take place and then
  on the right side of the vertical bar is
  our evidence the information that we
  already know for certain about the world
  for example that b is true so the way to
  read this entire expression is what is
  the probability of a given B the
  probability that a is true given that we
  already know that b is true and this
  type of judgment conditional probability
  the probability of one thing given some
  other fact comes up quite a lot when we
  think about the types of calculations we
  might want our AI to be able to do for
  example we might care about the
  probability of r today given that we
  know that it rained yesterday we could
  think about the probability of rain
  today just in the abstract what is the
  chance that today it rains but usually
  we have some additional evidence I know
  for certain that it rained yesterday and
  so I would like to calculate the
  probability that it rains today given
  that I know that it rained yesterday or
  you might imagine that I want to know
  the probability that my optimal route to
  my destination changes given the current
  traffic conditions so whether or not
  traffic conditions change that might
  change the probability that this route
  is actually the optimal route or you
  might imagine in a medical context I
  want to know the probability that a
  patient has a particular disease given
  some results of some tests that have
  been performed on that patient and I
  have some evidence the results of that
  test and I would like to know the
  probability that a patient has a
  particular disease so this notion of
  conditional probability comes up
  everywhere as we begin to think about
  what we would like to reason about but
  being able to reason a little more
  intelligently by taking into account
  evidence that we already have we're more
  able to get an accurate result for what
  is the likelihood that someone has this
  disease if we know this evidence the
  results of the test as opposed to if we
  were just calculating the unconditional
  probability of saying what is the
  probability they have the disease
  without any evidence to try and back up
  our result one way or the other so now
  that we've got this idea of what
  conditional probability is the next
  question we have to ask is all right how
  do we calculate conditional probability
  how do we figure out mathematically if I
  have an expression like this how do I
  get number from that what does
  conditional probability actually mean
  well the formula for conditional
  probability looks a little something
  like this the probability of a given B
  the probability that a is true given
  that we know that b is true is equal to
  this fraction the probability that A and
  B are true divided by just the
  probability that b is true and the way
  to intuitively try to think about this
  is if I want to know the probability
  that a is true given that b is true well
  I want to consider all the ways they
  could both be true out of the only
  worlds that I care about are the worlds
  where B is already true I can sort of
  ignore all the cases where B isn't true
  because those aren't relevant to my
  ultimate computation they're not
  relevant to what it is that I want to
  get information about so let's take a
  look at an example let's take go back to
  that example of rolling two dice and the
  idea that those two dice might sum up to
  the number 12 we discussed earlier that
  the unconditional probability that if I
  roll two dice and they sum to 12 is one
  out of 36 because out of the 36 possible
  worlds that I might about in only one of
  them is the sum of those two dice 12
  it's only when red is six and blue is
  also six but let's say now that I have
  some additional information I now want
  to know what is the probability that the
  two dice sum to 12 given that I know
  that the red Dy was a six so I already
  have some evidence I already know the
  red Dy is a six I don't know what the
  blue Dy is that information isn't given
  to me in this expression but given the
  fact that I know that the red die rolled
  a six what is the the probability that
  we sum to 12 and so we can begin to do
  the math using that expression from
  before here again are all of the
  possibilities all of the possible
  combinations of red Dy being 1 through
  six and blue Dy being 1 through six and
  I might consider first all right what is
  the probability of my evidence my B
  variable where I want to know what is
  the probability that the red die is a
  six well the probability that the red
  dies of six is just one out of six so
  these one out of six options are really
  the only worlds that I care about here
  now all the rest of them are irrelevant
  to my calculation because I already have
  this evidence that the red die was a six
  so I don't need to care about all the
  other possibilities that could result so
  now in addition to the fact that the red
  diey R as a six and the probability of
  that the other piece of information I
  need to know in order to calculate this
  conditional probability is the
  probability that both of my variables A
  and B are true the probability that both
  the red die is a six and they all sum to
  12 so what is the probability that both
  of these things happen well it only
  happens in one possible case in one out
  of these 36 cases and it's the case
  where both the red and the blue Dy are
  equal to six this is an information
  piece of information that we already
  knew and so this probability is equal to
  1 over 36 and so to get the conditional
  probability that the sum is 12 given
  that I know that the red dice is equal
  to 6 well I just divide these two values
  together and 1 36 / 1 6 gives us this
  probability
  of 1 6 given that I know that the red D
  rolled a value of the probability that
  the sum of the two dice 12 is also one
  over six and that probably makes
  intuitive sense to you too because if
  the red D is a six the only way for me
  to get to a 12 is if the blue dye also
  rolls a six and we know that the
  probability of the blue dye rolling a
  six is 1 over six so in this case the
  conditional probability seems fairly
  straightforward but this idea of
  calculating a conditional probability by
  looking at the probability that both of
  these events take place is an idea
  that's going to come up again and again
  this is the definition now of
  conditional probability and we're going
  to use that definition as we think about
  probability more generally to be able to
  draw conclusions about the world this
  again is that formula the probability of
  a given B is equal to the probability
  that A and B take place divided by the
  probability of B and you'll see this
  formula sometimes written in a couple of
  different ways you could imagine
  algebraically multiplying both sides of
  this equation by probability of B to get
  rid of the fraction and you'll get an
  expression like this the probability of
  A and B which is this expression over
  here is just the probability of B times
  the probability of a given b or you
  could represent this equivalently since
  A and B in this expression are
  interchangeable A and B is the same
  thing as b and a you could imagine also
  representing the probability of A and B
  as the probability of a times the
  probability of B given a just switching
  all of the A and B's these three are all
  equivalent ways of trying to represent
  what joint probability means and so
  you'll sometimes see all of these
  equations and might be useful to you as
  you begin to reason about probability
  and to think about what values might be
  taking place in the real world now
  sometimes when we deal with probability
  we don't just care about a Boolean event
  like did this happen or did this not
  happen sometimes we might want the
  ability to represent like variable
  values in a probability space where some
  variable might take on mul different
  possible values and in probability we
  call a variable in probability Theory a
  random variable a random variable in
  probability is just some variable in
  probability theory that has some domain
  of values that it can take on so what do
  I mean by this what I mean is I might
  have a random variable that is just
  called R for example that has six
  possible values R is my variable and the
  possible values the domain of values
  that it can take on are 1 two 3 four
  five and six and I might like to know
  the probability of each in this case
  they happen to all be the same but in
  other VAR random variables that might
  not be the case for example I might have
  a random variable to represent the
  weather for example where the domain of
  values it could take on are things like
  sun or cloudy or rainy or windy or snowy
  and each of those might have a different
  probability and I care about knowing
  what is the probability that the weather
  equals sun or that the weather equals
  clouds for instance and I might like to
  do some mathematical calculations based
  on that information other random
  variables might be something something
  like traffic what are the odds that
  there is no traffic or light traffic or
  heavy traffic traffic in this case is my
  random variable and the values that that
  random variable can take on are here
  it's either none or light or heavy and I
  the person doing these calculations I
  the person encoding these random
  variables into my computer need to make
  the decision as to what these possible
  values actually are you might imagine
  for example for a flight if I care about
  whether or not I make it into a flight
  on time my flight has a couple of
  possible values that it could take on my
  flight could be on time my flight could
  be delayed my flight could be cancelled
  so flight in this case is my random
  variable and these are the values that
  it can take on and often I want to know
  something about the probability that my
  random variable takes on each of those
  possible values and this is what we then
  call a probability distribution a
  probability distribution takes a random
  variable and gives me the probability
  for each of the possible values in its
  domain so in the case of this flight for
  example my probability distribution
  might look something like this my
  probability distribution says the
  probability that the random variable
  flight is equal to the value on time is
  0.6 or otherwise put into more English
  humanfriendly terms the likelihood that
  my flight is on time is 60% for example
  and in this case the probability that my
  flight is delayed is 30% the probability
  that my flight is canell is 10% or 0.1
  and if you sum up all of these possible
  values the sum is going to be one right
  if you take take all of the possible
  worlds here are my three possible worlds
  for the value of the random variable
  flight add them all up together the
  result needs to be the number one per
  that axium of probability theory that
  we've discussed before so this now is
  one way of representing this probability
  distribution for the random variable
  flight sometimes you'll see it
  represented a little bit more concisely
  that this is pretty verbose for really
  just trying to express three possible
  values and so often you'll instead see
  the same notation representing using a
  vector and all a vector is is a sequence
  of values as opposed to just a single
  value I might have multiple values and
  so I could extend instead represent this
  idea this way bold P so a larger P
  generally meaning the probability
  distribution of this variable flight is
  equal to this Vector represented in
  angle brackets the probability
  distribution is 6 3 and 0.1 and I would
  just have to know that this probability
  distribution is in order of on time or
  delayed and canel to know how to
  interpret this Vector to mean the first
  value in the vector is the probability
  that my flight is on time the second
  value in the vector is the probability
  that my flight is delayed and the third
  value in the vector is the probability
  that my flight is canell and so this is
  just an alternate way of representing
  this idea a little more verbosely but
  often times you'll see us just talk
  about a probability distribution over a
  random variable and whenever we talk
  about that what we're really doing is
  trying to figure out the probability of
  each of the possible values that that
  random variable can take on but this
  notation is just a little bit more
  succinct even though it can sometimes be
  a little confusing depending on the
  context in which you see it so we'll
  start to look at examples where we use
  this sort of notation to describe
  probability and to describe events that
  might take
  place a couple of other important ideas
  to know with regards to probability
  Theory one is this idea of Independence
  and Independence refers to the idea that
  the knowledge of one event doesn't INF
  infuence the probability of another
  event so for example in the context of
  my two dice rolls where I had the red D
  and the blue Dy the probability that I
  roll the red dye and the blue dye uh
  those two events red dye and blue dye
  are independent knowing the result of
  the red dye doesn't change the
  probabilities for the blue dye it
  doesn't give me any additional
  information about what the value of the
  blue dye is ultimately going to be but
  that's not always going to be the case
  you might imagine that in the case of
  weather uh something like clouds and
  Rain those are probably not independent
  that if it is cloudy uh that might
  increase the probability that later in
  the day it's going to rain so some
  information informs some other event or
  some other random variable so
  Independence refers to the idea that one
  event doesn't influence the other and if
  they're not independent then there might
  be some
  relationship so mathematically formally
  what does independence actually mean
  well recall this formula from before
  that the probability of A and B is the
  probability of a times the probability
  of B given a and the more intuitive way
  to think about this is that to know how
  likely it is that a and b happen well
  let's first figure out the likelihood
  that a happens and then given that we
  know that a happens let's figure out the
  likelihood that b happens and multiply
  those two things together but if a and b
  were independent meaning knowing a
  doesn't change anything about the
  likelihood that b is true well then the
  probability of B given a meaning the
  probability that b is true given that I
  know a is true well that I know a is
  true shouldn't really make a difference
  if these two things are independent that
  a shouldn't influence B at all so the
  probability of B given a is really just
  the probability of B if it is true that
  A and B are independent and so this
  right here is one example of a
  definition for what it means for A and B
  to be independent the probability of A
  and B is just the probability of a times
  the probability of B anytime you find
  two events A and B
  where this relationship holds then you
  can say that A and B are independent so
  an example of that might be the dice
  that we were taking a look at before
  here if I wanted the probability of red
  being a six and blue being a six well
  that's just the probability that red is
  a six multiplied by the probability that
  blue is a six it's both equal to 1 over
  36 so I can say that these two events
  are
  independent what wouldn't be independent
  for example would be an example uh so
  this for example has a probability of 1
  over 36 as we talked about before but
  what wouldn't be independent would be a
  case like this the probability that the
  red Dy rolls a six and the red Dy rolls
  a four if you just naively took okay red
  die six red D four well if I'm only
  rolling the die once you might imagine
  the naive approach is to say well each
  of these has a probability of 1 over six
  so multiply them together and the
  probability is 1 36 but of course if
  you're only rolling the red die once
  there's no way you could get two
  different Val vales for the red die it
  couldn't both be a six and a four so the
  probability should be zero but if you
  were to multiply probability of red
  6times probability of red 4 well that
  would equal 1 36 but of course that's
  not true because we know that there is
  no way probability zero that when we
  roll the red die once we get both a six
  and a four because only one of those
  possibilities can actually be the result
  and so we can say that the event that
  red roll six and the event that red roll
  is four those two events are not
  independent if I know that the Red Roll
  is a six I know that the Red Roll cannot
  possibly be a four so these things are
  not independent and instead if I wanted
  to calculate the probability I would
  need to use uh this conditional
  probability as is the regular definition
  of the probability of two events taking
  place and the probability of this now
  well the probability of the Red Roll
  being a six that's one over six but
  what's the probability that the roll is
  a four given that the RO is a six well
  this is just zero because there's no way
  for the prob for the red Ro to be a four
  given that we already know the Red Roll
  is a six and so the value if we do at
  all that multiplication is we get the
  number
  zero so this idea of conditional
  probability is going to come up again
  and again especially as we begin to
  reason about multiple different random
  variables that might be interacting with
  each other in some way and this gets us
  to one of the most important rules in
  probability Theory which is known as B
  Rule and it turns out that just using
  the information we've already learned
  about probability and just applying a
  little bit of algebra we can actually
  derive base rule for ourselves but it's
  a very important rule when it comes to
  inference and thinking about probability
  in the context of what it is that a
  computer can do or what a mathematician
  could do by having access to
  informations about probability so let's
  go back to these equations to be able to
  derive base rule ourselves we know the
  probability of A and B the likelihood
  that A and B take place is the
  likelihood of B and then the likelihood
  of a given that we know that b is
  already true and likewise the
  probability of a given a and b is the
  probability of a times the probability
  of B given that we know that a is
  already true this is sort of a symmetric
  relationship where it doesn't matter the
  order of A and B and B and a mean the
  same thing and so in these equations we
  can just swap out A and B to be able to
  represent the exact same idea so we know
  that these two equations are already
  true we've seen that already and now
  let's just do a little bit of algebraic
  manipulation of this stuff both of these
  Expressions on the right hand side are
  equal to the probability of A and B so
  what I can do is take these two
  expressions on the right hand side and
  just set them equal to each other right
  if they're both equal to the probability
  of A and B then they both must be equal
  to each other so probability of a times
  probability of B given a is equal to the
  probability of btimes the probability of
  a given B
  and now all we're going to do is do a
  little bit of division I'm going to
  divide both sides by P of a and now I
  get what is B rule the probability of B
  given a is equal to the probability of
  btimes the probability of a given B
  divided by the probability of a and
  sometimes in Bas rule you'll see the
  order of these two arguments switched so
  instead of B time a given B it'll be a
  given B _ B that ultimately doesn't
  matter because in multiplication you can
  switch the order of the two uh things
  you're multiplying and it doesn't change
  the result but this here right now is
  the most common formulation of B rule
  the probability of B given a is equal to
  the probability of a given btimes the
  probability of B divid the probability
  of a and this rule it turns out is
  really important when it comes to trying
  to infer things about the world because
  it means you can express one conditional
  probability the conditional probability
  of B given a using knowledge about the
  probability of a given B using the res
  reverse of that conditional probability
  so let's first do a little bit of an
  example with this just to see how we
  might use it and then explore what this
  means a little bit more generally so
  we're going to construct a situation
  where I have some information uh there
  are two events that I care about the
  idea that it's uh cloudy in the morning
  and the idea that it is uh rainy in the
  afternoon those are two different
  possible events that could take place
  cloudy in the morning or the am rainy in
  the PM and what I care about is given
  clouds in the morning what is the
  probability of rain in the afternoon a
  reasonable question I might ask in the
  morning I look outside or an ai's camera
  looks outside and sees that there are
  clouds in the morning and we want to
  conclude we want to figure out what is
  the probability that in the afternoon
  there is going to be rain of course in
  the abstract we don't have access to
  this kind of information but we can use
  data to begin to try and figure this out
  so let's imagine now that I have access
  to some pieces of information I have
  access to the idea that 80% of rainy
  afternoons start out with a cloudy
  morning and you might imagine that I
  could have gathered this data just by
  looking at data over a sequence of time
  that I know that 80% of the time when
  it's raining in the afternoon it was
  cloudy that
  morning I also know that 40% of days
  have cloudy mornings and I also know
  that 10% of days have rainy afternoons
  and now using this information I would
  like to figure out given clouds in the
  morning what is the probability that it
  rains in the afternoon I want to know
  the probability of afternoon rain given
  morning clouds and I can do that in
  particular using this fact the
  probability of uh so if I know that 80%
  of rainy afternoons start with cloudy
  mornings then I know the probability of
  Cloudy mornings given rainy afternoons
  so using sort of the reverse conditional
  probability I can figure that expressed
  in terms of bay rule this is what that
  would look like probability of rain
  given cloud
  is the probability of clouds given rain
  the probability of rain divid the
  probability of CLS here I'm just
  substituting in for the values of A and
  B from that equation of Bas rule from
  before and then I can just do the math I
  have this information I know that 80% of
  the time if it was raining uh then there
  were clouds in the morning so 08 here
  probability of rain is 0.1 because 10%
  of days were rainy and 40% of days were
  cloudy I do the math and I can figure
  out the answer is2 so the probability
  that it rains in the afternoon given
  that it was cloudy in the morning is 0.2
  in this case and this now is an
  application of Base rule the idea that
  using one conditional probability we can
  get the reverse conditional probability
  and this is often useful when one of the
  conditional probabilities might be
  easier for us to know about or easier
  for us to have data about and using that
  information we can calculate the other
  conditional probability so what does
  this look like well it means that
  knowing the probability of Cloudy
  mornings given rainy afternoons we can
  calculate the probability of rainy
  afternoons given cloudy mornings or for
  example more generally if we know the
  probability of some visible effect some
  effect that we can see and observe given
  some unknown cause that we're not sure
  about well then we can calculate the
  probability of that unknown unknown
  cause given the visible effect so what
  might that look like well in the context
  of medicine for example I might know the
  probability of some medical test result
  given a disease like I know that if
  someone has a disease then x% of the
  time the medical test result will show
  up as this for instance and using that
  information then I can calculate all
  right what is the probability that given
  I know the medical test result what is
  the likelihood that someone has the
  disease this is the piece of information
  that is usually easier to know easier to
  immediately have access to data for and
  this is the information that I actually
  want to calculate or I might want to
  know for for example if I know that what
  Pro some probability of counterfeit
  bills have like Blurry text around the
  edges because counterfeit printers
  aren't nearly as good at printing text
  precisely so I have some information
  about given that something is a
  counterfeit Bill like x% of counterfeit
  bills have blurry text for example and
  using that information then I can
  calculate some piece of information that
  I might want to know like given that I
  know there's blurry text on a bill what
  is the probability that that bill is
  counterfeit so given one condition
  probability I can calculate the other
  conditional probability as well and so
  now we've taken a look at a couple of
  different types of probability we've
  looked at unconditional probability
  where I just look at what is the
  probability of this event occurring
  given no additional evidence that I
  might have access to and we've also
  looked at conditional probability where
  I have some sort of evidence and I would
  like to using that evidence be able to
  calculate some other probability as well
  the other kind of probability that'll be
  important for us to think about
  is joint probability and this is when
  we're considering the likelihood of
  multiple different events simultaneously
  and so what do we mean by this well for
  example I might have probability
  distributions that look a little
  something like this like I want to know
  the probability distribution of clouds
  in the morning and that distribution
  looks like this 40% of the time C which
  is my random variable here is equal to
  it's cloudy and 60% of the time it's not
  cloudy so here is just a simple
  probability distribution that is
  effectively telling me that 40% of the
  time it's cloudy I might also have a
  probability distribution for rain in the
  afternoon where 10% of the time or with
  probability 0.1 it is raining in the
  afternoon and with probability 0.9 it is
  not raining in the afternoon and using
  just these two pieces of information I
  don't actually have a whole lot of
  information about how these two
  variables relate to each other but I
  could if I had access to their joint
  probability meaning for every
  combination of these two things meaning
  morning cloudy and afternoon rain
  morning cloudy and afternoon not rain
  morning not cloudy and afternoon rain
  and morning not cloudy and afternoon not
  raining if I had access to values for
  each of those four I'd have more
  information so information that'd be
  organized in a table like this and this
  rather than just a probability
  distribution is a joint probability
  distribution it tells me the probability
  distribution of each of the possible
  combinations of values that these random
  variables can take on so if I want to
  know what is the probability that on any
  given day it is both cloudy and rainy
  well I would say all right we're looking
  at cases where it is cloudy and cases
  where it is raining and the intersection
  of those two that row and that column is
  0.08 so that is the probability that it
  is both cloudy and rainy using that
  information and using this conditional
  probability table or using this joint
  probability table I can begin to draw
  other pieces of information about things
  like conditional probability so I might
  ask a question like what is the
  probability distribution of clouds given
  that I know that it is raining meaning I
  know for sure that's rain that it's
  raining tell me the probability
  distribution over whether it's cloudy or
  not given that I know already that it is
  in fact raining and here I'm using C to
  stand for that random variable I'm
  looking for a distribution meaning the
  answer to this is not going to be a
  single value it's going to be two values
  a vector of two values where the first
  value is probability of clouds the
  second value is probability that it is
  not cloudy but the sum of those two
  values is going to be one because when
  you add up the probabilities of all of
  the possible Worlds the result that you
  get must be the number one and well what
  do we know about how to calculate a
  conditional probability well we know
  that the probability of a given B is the
  probability of A and B divided by the
  probability of B so what does this mean
  well it means that I can calculate the
  probability of clouds given that it's
  raining as the probability of clouds and
  raining divided by the probability of
  rain and this comma here for for the
  probability distribution of clouds and
  rain this comma sort of stands in for
  the word and you'll sort of seen The
  Logical operator and and the comma used
  interchangeably this means the
  probability distribution over the clouds
  and knowing the fact that it is raining
  divided by the probability of rain and
  the interesting thing to note here and
  what we'll often do in order to simplify
  our math
  is that dividing by the probability of
  rain the probability of rain here is
  just some numerical constant it is some
  number dividing by probability of rain
  is just dividing by some constant or in
  other words multiplying by the inverse
  of that constant and it turns out that
  often times we can just not worry about
  what the exact value of this is and just
  know that it is in fact a constant value
  and we'll see why in a moment so instead
  of expressing this as this joint
  probability divided by the probability
  of rain sometimes will just represent it
  as Alpha times the numerator here the
  probability distribution of C this
  variable and that we know that it is
  raining for instance so all we've done
  here is said this value of one over the
  probability of rain that's really just a
  constant that we're going to divide by
  or equivalently multiply by the inverse
  of at the end we'll just call it Alpha
  for now and deal with it a little bit
  later but the key idea here now and this
  is an idea that's going to come up again
  is that the conditional distribution of
  C given rain is proportional to meaning
  just some Factor multiplied by The Joint
  probability of c and Rain being true and
  so how do we figure this out well this
  is going to be the probability that it
  is cloudy given that it's rainy which is
  8 and the probability that it's not
  cloudy given that it's rainy which is
  0.02 and so we get Alpha times here now
  is that probability distribution 008 is
  clouds and Rain 02 is not cloudy and
  rain
  but of course 8 and 02 don't sum up to
  the number one and we know that in a
  probability distribution if you consider
  all of the possible values they must sum
  up to a probability of one and so we
  know that we just need to figure out
  some constant to normalize so to speak
  these values something we can multiply
  or divide by to get it so that all these
  probabilities sum up to one and it turns
  out that if we multiply both numbers by
  10 uh then we can get that result of 8
  and 2 the proportions are still
  equivalent but now8 plus2 those sum up
  to the number one so take a look at this
  and see if you can understand step by
  step how it is we're getting from one
  point to another but the key idea here
  is that by using the joint probab
  probabilities these probabilities that
  it is both cloudy and rainy and that it
  is not cloudy and rainy I can take that
  information and figure out the
  conditional probability given that it's
  raining what is the chance that it's
  cloudy versus not cloudy just by
  multiply
  by some normalization constant so to
  speak and this is what a computer can
  begin to use to be able to interact with
  these various different types of
  probabilities and it turns out there are
  a number of other probability rules that
  are going to be useful to us as we begin
  to explore how we can actually use this
  information to encode into our computers
  some more complex analysis that we might
  want to do about probability and
  distributions and random variables that
  we might be interacting with so here are
  a couple of those important probability
  rules one of the simplest rules is just
  this negation rule what is the
  probability of not event a so a is an
  event that has some probability and I
  would like to know what is the
  probability that a does not occur and it
  turns out it's just 1 minus P of a which
  makes sense because if those are the two
  possible cases either a happens or a
  doesn't happen then when you add up
  those two cases you must get one which
  means P of not a must just be 1 minus P
  of a because P of A and P of not a must
  sum up to the number one they must
  include all of the possible cases we've
  seen an expression for calculating the
  probability of A and B uh we might also
  reasonably want to calculate the
  probability of A or B what is the
  probability that one thing happens or
  another thing happens so for example I
  might want to calculate what is the
  probability that if I roll two dice a
  red Dy and a blue Dy what is the
  likelihood that a is a six or B is a six
  like one or the other and what you might
  imagine you could do and the wrong way
  to approach it would be just to say all
  right well a comes up as a six uh with
  the red D comes up as a six with
  probability one over six the same for
  the blue di it's also one over six add
  them together and you get two over six
  otherwise known as 1/3 but this does
  suffers from a problem of over counting
  that we've double counted the case where
  both A and B both the red D and the blue
  Dy both come up as a six Rule and I've
  counted that instance twice so to
  resolve this the actual expression for
  calculating the probability of A or B
  uses what we call the inclusion
  exclusion formula so I take the
  probability of a add it to the
  probability of B that's all same as
  before but then I need to exclude the
  cases that I've double counted so I
  subtract from that the probability of A
  and B and that gets me the result for A
  or B I consider all the cases where a is
  true and all the cases where B is true
  and if you imagine this is like a ven
  diagram of cases where a is true cases
  where B is true I just need to subtract
  out the middle to get rid of the cases
  that I have overcounted by double
  counting them inside of both of these
  individual
  Expressions uh one other rule that's
  going to be quite helpful is a rule
  called marginalization so
  marginalization is answering the
  question of how do I figure out the
  probability of a using some other
  variable that I might have access to
  like B even if I don't know additional
  information about it I know that b some
  event can have two possible States
  either B happens or B doesn't happen
  assuming it's a Boolean true or false
  and well what that means is that for me
  to be able to calculate the probability
  of a there are only two cases either a
  happens and B happens or a happens and B
  doesn't happen and those are two
  disjoint meaning they can't both happen
  together either B happens or B doesn't
  happen they're disjoint or separate
  cases and so I can figure out the
  probability of a just by adding up those
  two cases the probability that a is true
  is the probability that A and B is true
  plus the probability that a is true and
  B isn't true so by marginalizing I've
  looked at the two possible cases that
  might take place either B happens or B
  doesn't happen and in either of those
  cases I look at what's the probability
  that a happens and if I add those
  together well then I get the probability
  that a happens as a whole so take a that
  look at that rule it doesn't matter what
  B is or how it's related to a so long as
  I know these joint distributions I can
  figure out the overall probability of a
  and this can be a useful way if I have a
  joint distribution like the joint
  distribution of A and B to just figure
  out some unconditional probability like
  the probability of a and we'll see
  examples of this soon as well now
  sometimes these might not just be random
  might not just be variables that are
  events that are like they happened or
  they didn't happen like B is here there
  might be some broader probability
  distribution where there are multiple
  possible values and so here in order to
  use this marginalization rule I need to
  sum up not just over B and not B but for
  all of the possible values that the
  other random variable could take on and
  so here we'll see a version of this rule
  for random variables and it's going to
  include that summation notation to
  indicate that I'm summing up adding up a
  whole bunch of individual values so
  here's the rule looks a lot more
  complicated but it's actually equivalent
  exactly the same rule what I'm saying
  here is that if I have two random
  variables one called X and one called y
  well the probability that X is equal to
  some value X subi this is just some
  value that this variable takes on how do
  I figure it out well I'm going to sum up
  over J where J is going to range over
  all of the possible values that y can
  take on well let's look at the
  probability that xal x i and yal YJ so
  the exact same rule the only difference
  here is now I'm summing up over all of
  the possible values that y can take on
  saying let's add up all of those
  possible cases and look at this joint
  distribution this joint probability that
  X takes on the value I care about about
  given all of the possible values for y
  and if I add all those up then I can get
  this unconditional probability of what x
  is equal to uh whether or not X is equal
  to some value x sub I so let's take a
  look at this rule because it does look a
  little bit complicated let's try and put
  a concrete example to it here again is
  that same joint distribution from before
  I have Cloud not cloudy rainy not rainy
  and maybe I want to access some variable
  I want to know what is the probability
  that it is cloudy well marginalization
  says that if I have this joint
  distribution and I want to know like
  what is the probability that it is
  cloudy will I need to consider the other
  variable the variable that's not here
  the idea that it's rainy and I consider
  the two cases either it's raining or
  it's not raining and I just sum up the
  values for each of those possibilities
  in other words the probability that it
  is cloudy is equal to the sum of the
  probability that it's cloudy and it's
  rainy and the probability that it's
  cloudy and it is not
  raining and so these now are values that
  I have access to these are values that
  are just inside of this joint
  probability table what is the
  probability that it is both cloudy and
  rainy well it's just the intersection of
  these two here which is 08 and the
  probability that it's cloudy and not
  raining is all right here's cloudy
  here's not raining it's 0.32 so it's 8
  plus 32 which just gives us equal to 0.4
  that is the unconditional probability
  that it is in fact cloudy and so
  marginalization gives us a way to go
  from these joint distributions to just
  some individual probability that I might
  care about and you'll see a little bit
  later why it is that we care about that
  and why that's actually useful to us as
  we begin doing some of these
  calculations last rule we'll take a look
  at before transitioning to something a
  little bit different is this rule of
  conditioning very similar to the
  marginalization rule but it says that
  again if I have two events A and B but
  instead of having access to their joint
  probabilities I have access to their
  conditional probabilities how they
  relate to each other well again if I
  want to know the probability that a
  happens and I know that there's some
  other variable B either B happens or B
  doesn't happen and so I can say that the
  probability of a is the probability of a
  given B times the probability of B
  meaning B happened and given that I know
  B happened what's the likelihood that a
  happened and then I consider the other
  case that b didn't happen so so here's
  the probability that b didn't happen and
  here's the probability that a happens
  given that I know that b didn't happen
  and this is really the equivalent rule
  just using conditional probability
  instead of joint probability where I'm
  saying let's look at both of these two
  cases and condition on B look at the
  case where B happens and look at the
  case where B doesn't happen and look at
  what probabilities I get as a result and
  just as in the case of marginalization
  where there was an equivalent rule for
  random variables that could take on
  multiple possible Val vales in a domain
  of possible values here too conditioning
  has the same equivalent rule again
  there's a summation to mean I'm summing
  over all of the possible values that
  some random variable y could take on but
  if I want to know what is the
  probability that X takes on this value
  then I'm going to sum up over all the
  values J that y could take on and say
  all right what's the chance that y takes
  on that value YJ and multiply it by the
  conditional probability that X takes on
  this value given that y took on that
  value J so equivalent rule just using
  conditional probabilities instead of
  joint probabilities and using the
  equation we know about joint
  probabilities we can translate between
  these two so all right we've seen a
  whole lot of mathematics and we've just
  sort of laid the foundation for
  mathematics and no need to worry if you
  haven't seen probability in too much
  detail up until this point these are
  sort of the foundations of the ideas
  that are going to come up as we begin to
  explore how we can now take these ideas
  from probability and begin to apply them
  to represent something inside of our
  computer something inside of the AI
  agent we're trying to design that is
  able to represent information and
  probabilities and the likelihoods
  between various different events so
  there are a number of different
  probabilistic models that we can
  generate uh but the first of the models
  we're going to talk about are what are
  known as basian networks and a basian
  network is just going to be some network
  of random variables connected random
  variables that are going to represent
  the dependence between these random
  variables that odds are most random VAR
  Ables in this world are not independent
  from each other that there's some
  relationship between things that are
  happening that we care about if it is
  rainy today you know that might increase
  the likelihood that my flight or my
  train gets delayed for example there's
  some dependence between these random
  variables and a basian network is going
  to be able to capture those dependencies
  so what is a basian network what is its
  actual structure and how does it work
  well aasian network is going to be a
  directed graph and again we've seen
  directed graphs before they are
  individual no
  with arrows or edges that connect one
  node to another node pointing in a
  particular direction and so this
  directed graph is going to have nodes as
  well where each node in this directed
  graph is going to represent a random
  variable something like the weather or
  something like whether my train was on
  time or delayed and we're going to have
  an arrow from a node X to a node y to
  mean that X is a parent of Y so that'll
  be our notation if there's an arrow from
  X to Y X is going to be considered a
  parent of Y
  and the reason that's important is
  because each of these nodes is going to
  have a probability distribution that
  we're going to store along with it which
  is the distribution of x given some
  evidence given the parents of X so the
  way to more intuitively think about this
  is the parents can be thought of as sort
  of causes for some effect that we're
  going to observe and so let's take a
  look at an actual example of a basian
  network and think about the types of
  logic that might be involved in
  reasoning about that Network let's
  imagine for a moment that I have an
  appointment out of town and I need to
  take a train in order to get to that
  appointment so what are the things I
  might care about well I care about you
  know getting to my appointment on time
  either I make it to my appointment and
  I'm able to attend it or I miss the
  appointment uh and you might imagine
  that that's influenced by the train that
  the train uh is either on time or it's
  delayed for example but that train
  itself is also influenced whether the
  train is on time or not depends maybe on
  the rain you know is there no rain is it
  light rain is there heavy rain uh and it
  might also be influenced by other
  variables too it might be influenced as
  well by whether or not there's you know
  maintenance on the train track for
  example if there is maintenance on the
  train track that probably increases the
  likelihood that my train is delayed um
  and so we can represent all of these
  ideas using a basian network that looks
  a little something like this here I have
  four nodes representing four random
  variables that I would like to keep
  track of I have one random variable
  called rain that can take on three
  possible values in its domain either
  none or light or heavy for no rain light
  rain or heavy rain I have a variable
  called maintenance for whether or not
  there is maintenance on the train track
  which it has two possible values just
  either yes or no either there is
  maintenance or there's no maintenance
  happening on the track then I have a
  random variable for the train indicating
  whether or not the train was on time or
  not that random variable has two
  possible values in its domain the train
  is either on time or the train is
  delayed and then finally I have a random
  variable for whether I make it to my
  appointment for my appointment down here
  I have a random variable called
  appointment that itself has two possible
  values attend and miss and so here are
  the possible values here are my four
  nodes Each of which represents a random
  variable Each of which uh has a domain
  of possible values that it can take on
  and the arrows the edges pointing from
  one node to another encode some notion
  of dependence inside of this graph that
  whether I make it to my appointment or
  not is dependent upon whether the train
  is on time or delayed and whether the
  train is on time or delayed is dependent
  on two things given by the two arrows
  pointing at this node it is dependent on
  whether or not there was maintenance on
  the train track and it is also dependent
  upon whether or not it was raining or
  whether it is raining and just to make
  things a little complicated let's say as
  well that whether or not there's
  maintenance on the track this too might
  be influenced by the rain that if
  there's heavy a rain well maybe it's
  less likely that there going to be
  maintenance on the train track that day
  because they're more likely to want to
  do maintenance on the track on days when
  it's not raining for example and so
  these nodes might have different
  relationships between them but the idea
  is that we can come up with a
  probability distribution for any of
  these nodes based only upon its parents
  and so let's look node by node at what
  this probability distribution might
  actually look like and we'll go ahead
  and begin with this root node this rain
  node here which is at the top and has no
  arrows pointing into it which means its
  probability distribution is not going to
  be a conditional distribution it's not
  based on anything I just have some
  probability distribution over the
  possible values for the rain random
  variable and that distribution might
  look a little something like this none
  light and heavy each have a possible
  value here I'm saying the likelihood of
  no rain is 7 of light rain is 2 of heavy
  rain is .1 for example so here is a
  probability distribution for this root
  node in this basian network and let's
  now consider the next node in the
  network maintenance track maintenance is
  yes or no and the general idea of what
  this distribution is going to encode at
  least in this story is the idea that the
  heavier the rain is the less likely it
  is that there's going to be maintenance
  on the track because the people that are
  doing maintenance on the track probably
  want to wait until a day when it's not
  as rainy in order to do the track
  maintenance for example and so what
  might that probability distribution look
  like will this now is going to be a
  conditional probability distribution
  that here are the three possible values
  for the rain random VAR
  which I'm here just going to abbreviate
  to R either no rain light rain or heavy
  rain and for each of those possible
  values either there is yes track
  maintenance or no track maintenance and
  those have probabilities associated with
  them that I see here uh that if it is um
  if it is not raining then there is a
  probability of4 that there's track
  maintenance and a probability of 6 that
  there isn't but if there's Heavy Rain
  then here the chance that there is track
  maintenance is 0.1 and the chance there
  is not track maintenance is 0.9 each of
  these rows is going to sum up to one
  because each of these represent
  different values of whether or not it's
  raining the three possible values that
  that random variable can take on and
  each is associated with its own
  probability distribution that is
  ultimately all going to add up to the
  number one so that there is our
  distribution for this random variable
  called maintenance about whether or not
  there is maintenance on the train track
  and now let's consider the next variable
  here we have a node inside of our Basia
  Network called train that has two
  possible values on time and delayed and
  this node is going to be dependent upon
  the two nodes that are pointing towards
  it that this whether or not the train is
  on time or delayed depends on whether or
  not there's track maintenance and it
  depends on whether or not there's rain
  that heavier rain probably means more
  likely that my train is delayed and if
  there is track maintenance that also
  probably means it's more likely that my
  train is delayed as well and so you
  could construct a larger probability
  distribution a conditional probability
  distribution that instead of
  conditioning on just one variable as was
  the case here is now conditioning on two
  variables conditioning both on rain
  represented by R and on maintenance
  represented by Yes again each of these
  rows has two values that sum up to the
  number one one for whether the train is
  on time one for whether the train is
  delayed and here I can say something
  like all right if I know there was light
  rain and track mainten
  well okay that would be R is light and M
  is yes well then there's a probability
  of 0.6 that my train is on time and a
  probability of 0.4 that the train is
  delayed and you can imagine gathering
  this data just by looking at real world
  data looking at data about all right if
  I knew that it was uh light rain and
  there was track maintenance how often
  was a train delayed or not delayed and
  you could begin to construct this thing
  but the interesting thing is
  intelligently being able to try to
  figure out how might you go about
  ordering these things what things might
  influence other nodes inside of the
  basian
  network and the last thing I care about
  is whether or not I make it to my
  appointment so did I attend or miss the
  appointment and ultimately whether I
  attend or miss the appointment you know
  it is influenced by track maintenance
  because it's indirectly this idea that
  right if there is track maintenance well
  then my train might more likely be
  delayed and if my train is more likely
  to be delayed then I'm more likely to
  miss my appointment but what we encode
  in this basan network are just what we
  might consider to be more direct
  relationship so the train has a direct
  influence on the appointment and given
  that I know whether the train is on time
  or delayed knowing whether there's track
  maintenance isn't going to give me any
  additional information that I didn't
  already have that if I know train these
  other nodes that are up above isn't
  really going to influence the result and
  so here we might represent it using
  another conditional probability
  distribution that looks a little
  something like this the train can take
  on two possible values either my train
  is on time or my train is delayed and
  for each of those two possible values I
  have a distribution for what are the
  odds that I'm able to attend the meeting
  and what are the odds that I miss the
  meeting and obviously if my train is on
  time I'm much more likely to be able to
  attend the meeting than if my train is
  delayed in which case I'm more likely to
  miss that meeting so all of these nodes
  put all together here represent this
  basian network this network of random
  variables whose values I ultimately care
  about and that have some sort of
  relationship between them some sort of
  dependence where these arrows from one
  node to another indicate some dependence
  that I can calculate the probability of
  some node given the parents that happen
  to exist there so now that we've been
  able to describe the structure of this
  basian network and the relationships
  between each of these nodes by
  associating each of the nodes in the
  network with a probability distribution
  whether that's an unconditional
  probability distribution in the case of
  this root node here like rain and a
  conditional probability distribution in
  the case of all of the other nodes whose
  probability are dependent upon the
  values of their parents we can begin to
  do some computation and calculation
  using the information inside of that
  table so let's imagine for example that
  I just wanted to compute something
  simple like the probability of light
  rain how would I get the probability of
  light rain well light rain rain here is
  a root node and so if I wanted to
  calculate that probability I could just
  look at the probability distribution for
  rain and extract from it the probability
  of light rain it's just a single value
  that I already have access to but we
  could also Imagine wanting to compute
  more complex joint probabilities like
  the probability um that there is light
  rain and also no track maintenance this
  is a joint probability of two values
  light rain and no track maintenance and
  the way I might do that is first by
  starting by saying all right well let me
  get the probability of light rain but
  now I also want the probability of no
  track maintenance but of course this
  node is dependent upon the value of rain
  so what I really want is the probability
  of no track maintenance given that I
  know that there was light rain and so
  the expression for calculating this this
  idea that the probability of light rain
  and no track maintenance is really just
  the probability of light rain and the
  probability that there's no track
  maintenance given that I know that there
  already is light rain so I take the
  unconditional probability of light rain
  multiply it by the conditional
  probability of no track maintenance
  given that they know there's like rain
  and you can continue to do this again
  and again for every variable that you
  want to add into this joint probability
  that I might want to calculate if I
  wanted to know the probability of light
  rain and no track maintenance and a
  delayed train well that's going to be
  the probability of light rain multiplied
  by the probability of no track
  maintenance given light rain multiplied
  by the probability of a delayed train
  given light rain and no track
  maintenance because whether the train is
  on time or delayed is dependent upon
  both both of these other two variables
  and so I have two pieces of evidence
  that go into the calculation of that
  conditional probability and each of
  these three values is just a value that
  I can look up by looking at one of these
  individual probability distributions
  that is encoded into my Basia Network
  and if I wanted a joint probability over
  all four of the variables something like
  the probability of light rain and no
  track maintenance and a delayed train
  and I miss my appointment well that's
  going to be multiplying four four
  different values one from each of these
  individual nodes it's going to be the
  probability of light rain then of no
  track maintenance given light rain then
  of a delayed train given light rain and
  no track maintenance and then finally
  for this note here for whether I make it
  to my appointment or not it's not
  dependent upon these two variables given
  that I know whether or not the train is
  on time I only need to care about the
  conditional probability that I miss my
  train or that I miss my appointment
  given that the train happens to be
  delayed and so that's represented here
  by four probabilities Each of which is
  located inside of one of these
  probability distributions for each of
  the nodes all multiplied together and so
  I can take a variable like that and
  figure out what the joint probability is
  by multiplying a whole bunch of these
  individual probabilities from the Basia
  network but of course just as with last
  time where what I really wanted to do
  was to be able to get new pieces of
  information here too this is what we're
  going to want to do with our Basia
  Network in the context of knowledge we
  talked about the problem of inference
  given things that I know to be true can
  I draw conclusions make deductions about
  other facts about the world that I also
  know to be true and what we're going to
  do now is apply the same sort of idea to
  probability using information about
  which I have some knowledge whether some
  evidence or some probabilities can I
  figure out not other variables for
  certain but can I figure out the
  probabilities of other variables taking
  on particular values and so here we
  introduced the problem of inference in a
  probabilistic setting in a case where
  variables might not necessarily be true
  for sure but they might be random
  variables that take on different values
  with some probability so how do we
  formally Define what exactly this
  inference problem actually is well the
  inference problem has a couple of parts
  to it we have some query some variable X
  that we want to compute the distribution
  for maybe I want the probability that I
  miss my train or I want the probability
  that uh the there is track maintenance
  something that I want information about
  and then I have some evidence variables
  maybe it's just one piece of evidence
  maybe it's multiple pieces of evidence
  but I've observed certain variables for
  some sort of event so for example I
  might have observed that it is raining
  this is evidence that I have I know that
  there is light rain or I know that there
  is heavy rain and that is evidence I
  have and using that evidence I want to
  know what is the probability that my
  train is delayed for example and that is
  a query that I'm a to ask based on this
  evidence so I have a query some variable
  evidence which are some other variables
  that I have observed inside of my basian
  network and of course that does leave
  some hidden variables why these are EV
  variables that are not evidence
  variables and not query variables so you
  might imagine in the case where I know
  whether or not it's raining and I want
  to know whether my train is going to be
  delayed or not the hidden variable the
  thing I don't have access to is
  something like is there maintenance on
  the track or am I going to make or not
  make my appointment for example these
  are variables that I don't have access
  to they're hidden because they're not
  things I observed and they're also not
  the query the thing that I'm asking and
  so ultimately what we want to calculate
  is I want to know the probability
  distribution of x given e the event that
  I observe so given that I observe some
  event I observe that it is raining I
  would like to know what is the
  distribution over the possible values of
  the train random variable is it on time
  is it delayed what's the likelihood
  that's going to be there and it turns
  out we can do this calculation just
  using a lot of the probability rules
  that we've already seen
  in action and ultimately um we're going
  to take a look at the math at a little
  bit of a high level at an abstract level
  but ultimately we can allow computers
  and programming libraries that already
  exist to begin to do some of this math
  for us but it's good to get a general
  sense for what's actually happening when
  this inference process takes place let's
  imagine for example that I want to
  compute the probability distribution of
  the appointment random variable given
  some evidence given that I know that
  there was light rain and no track
  maintenance so there's my evidence these
  two variables that I observe the values
  of I observe the value of rain I know
  there's light rain and I know that there
  is no track maintenance going on today
  and what I care about knowing my query
  is this random variable appointment I
  want to know the distribution of this
  random variable appointment like what is
  the chance that I'm able to attend my
  appointment what is the chance that I
  miss my appointment given this evidence
  and the hidden variable the information
  that I don't have access to is this
  variable train this is information that
  is not part of the evidence that I see
  not something that I observe but it is
  also not the query that I'm asking for
  and so what might this inference
  procedure look like well if you recall
  back from when we were defining
  conditional probability and doing math
  with conditional probabilities we know
  that a conditional probability is
  proportional to the Joint probability
  and we remember this by recalling that
  the probability of a given B is just
  some constant Factor Alpha multiplied by
  the probability of A and B that constant
  Factor Alpha turns out to be like
  dividing over the probability of B but
  the important thing is that it's just
  some constant multiplied by The Joint
  distribution the probability that all of
  these individual things happen so in
  this case I can take the probability of
  the appointment random variable given
  light rain and no track maintenance and
  say that is just going to be
  proportional some constant Alpha
  multiplied by The Joint probability the
  probability of a particular value for
  the appointment random variable and
  light rain and no track maintenance well
  all right how do I calculate this
  probability of appointment and light
  rain and no track maintenance when what
  I really care about is knowing like I
  need all four of these values to be able
  to calculate a joint distribution across
  everything because in a particular
  appointment depends upon the value of
  train well in order to do that here I
  can begin to use that marginalization
  trick that there are only two ways I can
  get any configuration of an appointment
  light rain and no track maintenance
  either this particular setting of
  variables happens and the train is on
  time or this particular setting of
  variables happens and the train is
  delayed those are two possible cases
  that I would want to consider and if I
  add those two cases up well then I get
  the result just by adding up all of the
  possibilities for the hidden variable or
  variables if they are multiple but since
  there's only one hidden variable here
  train all I need to do is iterate over
  all the possible values for that hidden
  variable train and add up their
  probabilities so this probability
  expression here becomes probability
  distribution over a appointment light no
  rain and train is on time and the
  probability distribution over the
  appointment light rain no track
  maintenance and that the train is
  delayed for example so I take both of
  the possible values for train go ahead
  and add them up these are just joint
  probabilities that we saw earlier how to
  calculate just by going parent parent
  parent parent and calculating those
  probabilities and multiplying them
  together and then you'll need to
  normalize them at the end speaking at a
  high level to make sure that everything
  adds up to the number one so the formula
  for how you do do this in a process
  known as inference by numeration looks a
  little bit complicated but ultimately it
  looks like this and let's now try to
  distill what it is that all of these
  symbols actually mean let's start here
  what I care about knowing is the
  probability of X my query variable given
  some sort of evidence what do I know
  about conditional probabilities well a
  conditional probability is proportional
  to the Joint probability so we is some
  Alpha some normalizing constant
  multiplied by this joint probability of
  X and evidence
  and how do I calculate that well to do
  that I'm going to marginalize over all
  of the Hidden variables all the
  variables that I don't directly observe
  the values for I'm basically going to
  iterate over all of the possibilities
  that it could happen and just sum them
  all up and so I can translate this into
  a sum over all Y which ranges over all
  the possible hidden variables and the
  values that they could take on and adds
  up all of those possible individual
  probabilities and that is going to allow
  me to do this process of inference by
  enumeration now ultimately it's pretty
  annoying if we as humans have to do all
  this math for itself for ourselves but
  turns out this is where computers and AI
  can be particularly helpful that we can
  program a computer to understand a basan
  network to be able to understand these
  inference procedures and to be able to
  do these calculations and using the
  information you've seen here you could
  Implement a basian network from scratch
  yourself but turns out there are a lot
  of libraries especially written in
  Python that allow us to make it easier
  to do this sort of probabilistic
  inference to be able to take a Basia
  Network and do these sorts of
  calculations so that you don't need to
  know and understand all of the
  underlying math though it's helpful to
  have a general sense for how it works
  but you just need to be able to describe
  the structure of the network and make
  queries in order to be able to produce
  the result and so let's take a look at
  an example of that right now it turns
  out that there are a lot of possible
  libraries that exist in Python for doing
  this sort of inference uh it doesn't
  matter too much which specific Library
  you use they all behave in Fairly
  similar ways but the library I'm going
  to use here is one known as pomegranate
  and here inside of model.py I have
  defined a basian network just using the
  structure and the syntax that the
  pomegranate Library expects um and what
  I'm effectively doing is just in Python
  creating nodes to represent each of the
  nodes of the Basia Network that you saw
  me describe a moment ago so here on line
  four after I've imported pomegranate I'm
  defining a variable called rain that is
  going to represent a node inside of my
  Bia Network it's going to be a node that
  be follows this distribution where there
  are three possible values none for no
  rain light for light rain heavy for
  heavy rain and these are the
  probabilities of each of those taking
  place 7 is the likelihood of no rain 2
  for light rain 0.1 for Heavy Rain then
  after that we go to the next variable
  the variable for track maintenance for
  example which is dependent upon that
  rain variable and this instead of being
  an unconditional distribution is a
  conditional distribution as indicated by
  a conditional probability table here and
  the idea is that I'm following this is
  conditional on the distribution of rain
  so if there is no rain then the chance
  that there is yes track maintenance is4
  if there's no rain the chance that
  there's no track maintenance is 6
  likewise for light rain I have a
  distribution for heavy rain I have a
  distribution as well but I'm effectively
  encoding the same information you saw
  represented graphically a moment ago but
  I'm telling this Python program that the
  maintenance node obeys this particular
  conditional probability distribution and
  we do the same thing for the other
  random variables as well train was a
  node inside my distribution uh that was
  a conditional probability table with two
  parents it was dependent not only on
  rain but also on track maintenance and
  so here I'm saying something like given
  that there is no rain and yes track
  maintenance the probability that my uh
  train is on time is8 and the probability
  that it's delayed is2 and likewise I can
  do the same thing for all of the other
  possible values of the parents of the
  train node inside of my basian network
  by saying for all of those possible
  values here is the distribution that the
  train node should follow and I do the
  same thing for an appointment based on
  the distribution of the variable train
  then at the end what I do is actually
  construct this network by describing
  what the states of the network are and
  by adding edges between the dependent
  nodes so I create a new basan network
  add states to it one for rain one for
  maintenance one for the train one for
  the appointment and then I add edges
  connecting the related pieces rain has
  an arrow to maintenance because rain
  influences track maintenance rain also
  influences the train maintenance also
  influences the train and train
  influences whether I make it to my
  appointment and bake just finalizes the
  model and does some additional
  computation so the specific syntax of
  this is not really the important part
  pomegranate just happens to be one of
  several different libraries that can all
  be used for similar purposes and you
  could describe describe and Define a
  library for yourself that implemented
  similar things but the key idea here is
  that someone can design library for a
  general basian Network that has nodes
  that are based upon its parents and then
  all a programmer needs to do using one
  of those libraries is to Define what
  those nodes and what those probability
  distributions are and we can begin to do
  some interesting logic based on it so
  let's try doing that like conditional or
  joint probability calculation that we
  saw us do by hand before by going into
  likelihood dopy where here I'm importing
  the model that I just defined a moment
  ago and here just like to calculate
  modeled up probability which calculates
  the probability for a given observation
  and I'd like to calculate the
  probability of no rain uh no track
  maintenance my train is on time and I'm
  able to attend the meeting so sort of
  the optimal scenario that there's no
  rain and no maintenance on the track my
  train is on time and I'm able to attend
  the meeting what is the probability that
  all of that actually happens and I can
  calculate that using the library and
  just print out its probability and so I
  go ahead and run python of likelihood pi
  and I see that okay the probability is
  about 0.34 so about a third of the time
  everything goes right for me in this
  case no rain no track maintenance train
  is on time and I'm able to attend the
  meeting but I could experiment with this
  try and calculate other probabilities as
  well what's the probability that
  everything goes right up until the train
  but I still miss my meeting so no rain
  no track maintenance train is on time
  but I missed the appointment let's
  calculate that probab
  and all right that has a probability of
  about 0.04 so about 4% of the time uh
  the train will be on time there won't be
  any rain no track maintenance and yet
  I'll still miss the meeting and so this
  is really just an implementation of the
  calculation of the joint probabilities
  that we did before what this library is
  likely doing is first figuring out the
  probability of no rain then figuring out
  the probability of no track maintenance
  given no rain then the probability that
  my train is on time given both of these
  values and then the probability that I
  miss my appointment given that I know
  that the train was on time so this again
  is the calculation of that joint
  probability and turns out we can also
  begin to have our computer solve
  inference problems as well to begin to
  infer based on information evidence that
  we see what is the likelihood of other
  variables also being true so let's go
  into inference Pi for example where here
  I'm again importing that exact same
  model from before importing all the
  nodes and all the edges and the
  probability distribution
  that is encoded there as well and now
  there's a function for doing some sort
  of prediction and here into this model I
  pass in the evidence that I observe so
  here I've encoded into this Python
  program the evidence that I have
  observed I have observed the fact that
  the train is delayed and that is the
  value for one of the four random
  variables inside of this Basia Network
  and using that information I would like
  to be able to draw inspiration and
  figure out inferences about the values
  of the other
  random variables that are inside of my
  basian network I would like to make
  predictions about everything else so all
  of the actual computational logic is
  happening in just these three lines
  where I'm making this call to this
  prediction down below I'm just iterating
  over all of the states and all the
  predictions and just printing them out
  so that we can visually see what the
  results are but let's find out given the
  train is delayed what can I predict
  about the values of the other random
  variables let's go ahead and run python
  inference
  stpy I run that and all right here is
  the result that I get given the fact
  that I know that the train is delayed
  this is evidence that I have observed
  well given that there is a 45% chance or
  a 46% chance that there was no rain a
  31% chance there was light rain a 23%
  chance there was Heavy Rain I can see a
  probability distribution of a track
  maintenance and a probability
  distribution over whether I'm able to
  attend or miss my appointment now we
  know that whether I attend or miss the
  appointment that is only dependent upon
  the train being delayed or not delayed
  it shouldn't depend on anything else so
  so let's imagine for example that I knew
  that there was Heavy Rain that shouldn't
  affect the distribution for making the
  appointment and indeed if I go up here
  and add some evidence say that I know
  that the value of rain is heavy that is
  evidence that I now have access to I now
  have two pieces of evidence I know that
  the rain is heavy and I know that my
  train is delayed I can calculate the
  probability by running this inference
  procedure again and seeing the result I
  know that the rain is heavy I know my
  train is delayed the probability
  distribution for track maintenance
  changed given that I know that there's
  heavy rain now it's more likely that
  there's no track maintenance 88% as
  opposed to 64% from here before and now
  what is the probability that I make the
  appointment well that's the same as
  before it's still going to be attend the
  appointment with probability 0.6 miss
  the appointment with probability 0.4
  because it was only dependent upon
  whether or not my train was on time or
  delayed and so this here is implementing
  that idea of that inference algorithm to
  be able to figure out based on the
  evidence that I have what can we infer
  about the values of the other variables
  that exist as well so inference by
  enumeration is one way of doing this
  inference procedure just looping over
  all of the values the hidden variables
  could take on and figuring out what the
  probability is now it turns out this is
  not particularly efficient and there are
  definitely optimizations you can make by
  uh avoiding repeated work if you're
  calculating the same sort of probability
  multiple times there are ways of
  optimizing the prog program to avoid
  having to recalculate the same
  probabilities again and again but even
  then as the number of variables get
  large as the number of possible values
  those variables could take on get large
  we're going to start to have to do a lot
  of computation a lot of calculation to
  be able to do this inference and at that
  point it might start to get unreasonable
  in terms of the amount of time that it
  would take to be able to do this sort of
  exact inference and it's for that reason
  that often times when it comes towards
  probability and things we're not
  entirely sure about we don't know care
  about doing exact inference and knowing
  exactly what the probability is but if
  we can approximate the inference
  procedure do some sort of approximate
  inference that that can be pretty good
  as well that if I don't know the exact
  probability but I have a general sense
  for the probability that I can get
  increasingly accurate with more time
  that that's probably pretty good
  especially if I can get that to happen
  even faster so how could I do
  approximate inference inside of aasia
  network well one method is through a
  procedure known as sampling in the
  process of sampling I'm going to take a
  sample of all of the variables inside of
  this basian network here and how I'm
  going to sample well I'm going to sample
  one of the values from each of these
  nodes according to their probability
  distribution so how might I take a
  sample of all these nodes well I'll
  start at the root I'll start with rain
  here's the distribution for rain and
  I'll go ahead and using a random number
  generator or something like it randomly
  pick one of these three values I'll pick
  none with probability 7 light with
  probability point2 and heavy with
  probability point1 so I'll randomly just
  pick one of them according to that
  distribution and maybe in this case I
  pick none for example then I do the same
  thing for the other variable maintenance
  also has a probability distribution and
  I going to sample now there are three
  probability distributions here but I'm
  only going to sample from this first row
  here because I've observed already in my
  sample that the value of rain is none so
  given that rain is none I'm going to
  sample from this distribution to say all
  right what should the value of
  Maintenance be and in this case
  maintenance is going to be let's just
  say yes which happens 40% of the time in
  the event that there is no rain for
  example and we'll sample all the rest of
  the nodes in this way as well that I
  want to sample from the train
  distribution and I'll sample from this
  first row here where there is no rain
  but there is track maintenance and I'll
  sample 80% of the time I'll say the
  train is on time 20% of the time I'll
  say the train is delayed and finally
  we'll do the same thing for whether I
  make it to my appointment or not did I
  attend or miss the appointment we'll
  sample based on this distribution and
  maybe say that in this case I attend the
  appointment which happens 90% of the
  time when the train is actually on time
  so by going through these nodes I can
  very quickly just do some sampling and
  get a sample of the possible values that
  could come up from going through this
  entire basan network according to those
  probability distributions and where this
  becomes powerful is if I do this not
  once but I do this thousands or tens of
  thousands of times and generate a whole
  bunch of samples all using this
  distribution I get different samples
  maybe some of them are the same but I
  get a value for each of the possible
  variables that could come up and so then
  if I'm ever faced with a question a
  question like what is the probability
  that the train is on time you could do
  an exact inference procedure this is no
  different than the inference problem we
  had before where I could just
  marginalize look at all the possible
  other values of the variables and do the
  computation of inference by numeration
  to find out this probability exactly but
  I could also if I don't care about the
  exact probability just sample it
  approximate it to get close and this is
  a powerful tool in AI we don't need to
  be right 100% of the time or we don't
  need to be exactly right if we just need
  to be right with some probability we can
  often do so more effectively more
  efficiently and so here now are all of
  those possible samples I'll sort of
  highlight the ones where the train is on
  time I'm ignoring the ones where the
  train is delayed and you know in this
  case there's like six out of eight of
  the samples have the train is arriving
  on time and so maybe in this case I can
  say that in six out of eight cases
  that's the likelihood that the train is
  on time and with eight samples that
  might not be a great prediction but if I
  had thousands upon thousands of samples
  then this could be a much better
  inference procedure to be able to do
  these sorts of calculations so this is a
  direct sampling method to just do a
  bunch of samples and then figure out
  what the probability of some event is
  now this from before was an
  unconditional probability what is the
  probability that the train is on time
  and I did that by looking at all the
  samples and figuring out all right right
  here are the ones where the train is on
  time but sometimes what I want to
  calculate is not an unconditional
  probability but rather a conditional
  probability something like what is the
  probability that there is light rain
  given that the train is on time
  something to that effect and to do that
  kind of calculation well what I might do
  is here are all the samples that I have
  and I want to calculate a probability
  distribution given that I know that the
  train is on time so to be able to do
  that I can kind of look at the two cases
  where the train was delayed and ignore
  or reject them sort of exclude them from
  the possible samples that I'm
  considering and now I want to look at
  these remaining cases where the train is
  on time here are the cases where there's
  light rain and I say okay these are two
  out of the six possible cases that can
  give me an approximation for the
  probability of light rain given the fact
  that I know the train was on time and I
  did that in almost exactly the same way
  just by adding an additional step by
  saying that all right when I take each
  sample let me reject all of the samples
  that don't match my evidence and only
  consider the samples that do match what
  it is that I have in my evidence that I
  want to make some sort of calculation
  about and it turns out using the
  libraries that we've had for Bas and
  networks we can begin to implement the
  same sort of idea like Implement
  rejection sampling which is what this
  method is called to be able to figure
  out some probability not via direct
  inference but instead by sampling so
  what I have here is a program called
  sample. piy Imports the exact same model
  and what I Define first is a program to
  generate a sample and the way I generate
  a sample is just by looping over all of
  the states uh the states need to be in
  some sort of order to make sure I'm
  looping in the correct order but
  effectively uh if it is a conditional
  distribution I'm going to sample based
  on the parents and otherwise I'm just
  going to directly sample the variable
  like rain which has no parents it's just
  an unconditional distribution uh and
  keep track of all those parent samples
  and return the final sample the exact
  syntax of this again not particularly
  important it just happens to be part of
  the implementation details of this
  particular Library the interesting logic
  is down below now that I have the
  ability to generate a sample if I want
  to know the distribution of the
  appointment random variable given that
  the train is delayed well then I can
  begin to do calculations like this let
  me take 10,000 samples and assemble all
  my results in this list called Data I'll
  go ahead and loop n times in this case
  10,000 times I'll generate a sample and
  I want to know the distribution of
  appointment given that the train is
  delayed so according to rejection
  sampling I'm only going to consider
  samples where the train is delayed if
  the Train's not delayed I'm not going to
  consider those values at all so I'm
  going to say all right if I take the
  sample look at the value of the train
  random variable if the train is delayed
  well let me go ahead and add to my data
  that I'm collecting the value of the
  appointment random variable that took
  that it took on in this particular
  sample so I'm only considering the
  samples where the train is delayed and
  for each of those samples considering
  what the value of appointment is and
  then at the end I'm using a python class
  called counter which quickly counts up
  all the values inside of a data set so I
  can take this list of data and figure
  out how many times was uh my appointment
  made and how many times was my
  appointment missed and so this here with
  just a couple lines of code is an
  implementation of of rejection sampling
  and I can run it by going ahead and
  running pythons sample.
  piy and when I do that here's the result
  I get this is the result of the counter
  uh
  1,251 times I was able to attend the
  meeting and 856 times I was able to miss
  the meeting and you could imagine by
  doing more and more samples I'll be able
  to get a better and better more accurate
  result and this is a randomized process
  it's going to be an approximation of the
  probability if I run it a different time
  you'll notice the numbers are similar
  1272 and 905 but they're not identical
  because there's some randomization some
  likelihood that things might be higher
  or lower and so this is why we generally
  want to try and use more samples so that
  we can have a greater amount of
  confidence in our result be more sure
  about the result that we're getting of
  whether or not it accurately reflects or
  represents the actual underlying
  probabilities that are inherent inside
  of this
  distribution and so this then was an
  instance of rejection sampling and it
  turns out there are a number of other
  sampling methods that you could use uh
  to begin to try to sample one problem
  that rejection sampling has is that if
  the evidence you're looking for is a
  fairly unlikely event well you're going
  to be rejecting a lot of samples like if
  I'm looking for the probability of x
  given some evidence e if e is very
  unlikely to occur like occurs maybe one
  every thousand times then I'm only going
  to be considering one out of every
  thousand samples that I do which is a
  pretty inefficient method for trying to
  do this sort of calculation I'm throwing
  away a lot of samples and it takes
  computational effort to be able to
  generate those samples so I'd like to
  not have to do something like that so
  there are other sampling methods that
  can try and address this one such
  sampling method is called likelihood
  waiting in likelihood waiting we follow
  a slightly different procedure and the
  goal is to avoid needing to throw out uh
  samples um that didn't match the
  evidence and so what we'll do is we'll
  start by fixing the values for the
  evidence variables rather than sample
  everything we're going to fix the values
  of the evidence variables and not sample
  those then we're going to sample all the
  other non-evidence variables in the same
  way just using the basan network looking
  at the probabil distributions sampling
  all the non-evidence variables but then
  what we need to do is weight each sample
  by its likelihood right if our evidence
  is really unlikely we want to make sure
  that we've taken into account How likely
  was the evidence to actually show up in
  the sample if I have a sample where the
  evidence was much more likely to show up
  than another sample then I want to wait
  the more likely one higher so we're
  going to wait each sample by its
  likelihood where likelihood is just
  defined as the probability of all of the
  evidence given all the evidence we have
  what is the probability that it would
  happen in that particular sample so
  before all of our samples were weighted
  equally they all had a weight of one
  when we were calculating like the
  overall average in this case we're going
  to weight each sample multiply each
  sample by its likelihood in order to get
  the more accurate distribution so what
  would this look like well if I ask the
  same question what is the probability of
  light rain given that the train is on
  time when I do the sampling procedure
  and start by trying to sample I'm going
  to start by fixing the evidence variable
  I'm already going to have in my sample
  the train is on time that way I don't
  have to throw out anything I'm only
  sampling the things where I know the
  value of the variables that are my
  evidence are what I expect them to be so
  I'll go ahead and sample from rain and
  maybe this time I sample light rain
  instead of no rain uh then I'll sample
  from track maintenance and say maybe yes
  there's track maintenance then for train
  well I've already fixed it in place
  train was an Evidence variable so I'm
  not going to bother sampling again I'll
  just go ahead and move on I'll move on
  to appointment and go ahead and sample
  from appointment as well so now I've
  generated a sample I've generated a
  sample by fixing this evidence variable
  and sampling the other three and the
  last step is now waiting the sample like
  how much weight should it have and the
  weight is based on like how probable is
  it that the train was actually on time
  this evidence actually happened given
  the values of these other variables
  light rain and the fact that yes there
  was track maintenance well to do that I
  can just go back to the train variable
  and say all right if there was light
  rain and track maintenance the
  likelihood of my evidence the likelihood
  that my train was on time is 0.6 and so
  this train uh this particular sample
  would have a weight of 0.6 and I could
  repeat the sampling procedure again and
  again each time every sample would be
  given a weight according to the
  probability of the evidence that I see
  associated with it and there are other
  sampling methods that exist as well but
  all of them are designed to try and get
  it the same idea to approximate the
  inference procedure of figuring out the
  value of a variable so we've now dealt
  with probability as it pertains to
  particular variables that have these
  discret values but what we haven't
  really considered is how values might
  change over time that we've considered
  something like a variable for rain where
  rain can take on values of none or light
  rain or heavy rain but in practice
  usually when we consider values for
  variables like rain we like to consider
  it for over time how do the values of
  these variables change what do we do
  with when we're dealing with uncertainty
  over a period of time which can come up
  in the context of weather for example if
  I have sunny days and I have rainy days
  and I'd like to know not just like what
  is the probability that it's raining now
  but what is the probability that it
  rains tomorrow or the day after that or
  the day after that and so to do this
  we're going to introduce a slightly
  different kind of model but here we're
  going to have a random variable not just
  one for the weather but for every
  possible time step and you can Define
  time step however you like a simple way
  is just to use days as your time step
  and so we can define a variable called X
  subt which is going to be the weather at
  time T So X Sub 0 might be the weather
  on day zero xub one might be the weather
  on day one so on and so forth xub 2 is
  the weather on day two but as you can
  imagine if we start to do this over
  longer and longer periods of time
  there's an incredible amount of data
  that might go into this if you're
  keeping track of data about the weather
  for a year now suddenly you might be
  trying to predict the weather tomorrow
  given 365 days of previous pie of
  evidence and that's a lot of evidence to
  have to deal with and manipulate and
  calculate probably nobody knows what the
  exact conditional probability
  distribution is for all of those
  combinations of variables and so when
  we're trying to do this inference inside
  of a computer when we're trying to
  reasonably do this sort of analysis it's
  helpful to make some simplifying
  assumptions some assumptions about the
  problem that we can just assume are true
  to make our lives a little bit easier
  even if they're not totally accurate
  assumptions if they're close to Accurate
  or approximate they're usually pretty
  good and the Assumption we're going to
  make is called the marov Assumption
  which is the assumption that the current
  state depends only on a finite fixed
  number of previous States so the current
  day's weather depends not on all the
  previous day's weather for the rest of
  for all of history but the current day's
  weather I can predict just based on
  yesterday's weather or just based on the
  last two days weather or the last three
  days weather but often times we're going
  to deal with like just the one previous
  state helps to predict this current
  state
  and by putting a whole bunch of these
  random variables together using this
  Markov assumption we can create what's
  called a Markov chain where a Markov
  chain is just some sequence of random
  variables where each of the variables
  distribution follows that Markov
  assumption and so we'll do an example of
  this where the mark of assumption is I
  can predict the weather is it sunny or
  rainy or and we'll just consider those
  two possibilities for now even though
  there are other types of weather but I
  can predict each day's weather just on
  the prior day weather using today's
  weather I can come up with a probability
  distribution for tomorrow's weather and
  here's what this weather might look like
  it's formed in terms of a matrix as you
  might describe it a sort of rows and
  Columns of values where on the left hand
  side I have today's weather represented
  by the variable X subt and over here in
  the columns I have tomorrow's weather
  represented by the variable x subt + 1
  t+ 1 day weather instead and what this
  Matrix is saying is if today is sunny
  well then you know it's more likely than
  not that tomorrow is also Sunny often
  times the weather stays consistent for
  multiple days in a row and for example
  let's say that if today is sunny our
  model says that tomorrow with
  probability point8 it will also be sunny
  and with probability 2 it will be
  raining and likewise If Today is raining
  then it's more likely than not that
  tomorrow is also raining with
  probability 7 it'll be raining with
  probability 3 uh it will be sunny so
  this Matrix this description of how it
  is we trans transition from one state to
  the next state is what we're going to
  call the transition model and using the
  transition model you can begin to
  construct this Markov Chain by just
  predicting you know given today's
  weather what's the likelihood of
  tomorrow's weather happening and you can
  imagine doing a simpler similar sampling
  procedure where you take this
  information you sample what tomorrow's
  weather is going to be using that you
  sample the next days weather and the
  result of that is you can form this
  Markov chain of like x0 Time and Time
  days zero is Sunny the next day is sunny
  maybe the next day it changes to raining
  then raining then raining and the
  pattern that this Markov train follows
  given the distribution that we had
  access to this transition model here is
  that when it's sunny it tends to stay
  sunny for a little while the next couple
  days tend to be sunny too and when it's
  raining it tends to be raining as well
  and so you get a Markov train that looks
  like this and you can do analysis on
  this you can say you know given that
  today is raining what is the probability
  that tomorrow is raining or you can
  begin to ask probability questions like
  what is the probability of this sequence
  of five values Sun Sun rain rain rain
  and answer those sorts of questions too
  and it turns out there are again many
  python libraries for interacting with uh
  models like this of probabilities that
  have distributions and random variables
  that are based on previous variables
  according to this Markov assumption and
  pomegranate 2 has ways of dealing with
  these sorts of variables so I go ahead
  and go into um the marov or the I'll go
  ahead and go into the chain directory
  where I have some information about
  marov chains and here I've defined a
  file called
  model.py where I've defined in a very
  similar syntax and again the exact
  syntax doesn't matter so much as the
  idea that I'm encoding this information
  into a Python program so that the
  program has access to these
  distributions I've here defined some
  starting distributions so every marov
  model begins at some point in time and I
  need to give it some starting
  distribution and so we'll just say you
  know at the start you can pick 50/50
  between sunny and rainy we'll say it's
  sunny 50% of the time rainy 50% of the
  time and then down below I've here defin
  the transition model how it is that I
  transition from one day to the next and
  here I've encoded that exact same Matrix
  from before that if it was sunny today
  then with probability point8 it will be
  sunny tomorrow and it'll be rainy
  tomorrow with probability 0.2 and I
  likewise have another distribution for
  if it was raining today instead and so
  that alone defines the Markov model you
  can begin to answer questions using that
  model but one thing I'll just do is
  sample from the Markov chain it turns
  out there's a method built into this
  Markov chain library that allows me to
  sample 50 States from the chain
  basically just simulating like 50
  instances of
  weather and so let me go ahead and run
  this python uh
  model.py and when I run it what I get is
  it's going to sample from this Markov
  chain 50 states 50 days worth of weather
  that it's just going to randomly sample
  and you can imagine sampling many times
  to be able to get more data dat to be
  able to do more analysis But Here For
  example it's you know Sunny two days in
  a row rainy a whole bunch of days in a
  row before it changes back to Sun and so
  you get this model that follows the
  distribution that we originally
  described that follows the distribution
  of sunny days tend to lead to more sunny
  days rainy days tend to lead to more
  rainy days and that then is a marov
  model and marov models rely on us
  knowing the values of these individual
  states I know that today is sunny or
  that today is rainy and using that
  information I can draw some sort of
  inference about what tomorrow is going
  to be like but in practice this often
  isn't the case it often isn't the case
  that I know for certain what the exact
  state of the world is often times the
  state of the world is exactly unknown
  but I'm able to somehow sense some
  information about that state that a
  robot or an AI doesn't have exact
  knowledge about the world around it but
  it has some sort of sensor whether that
  sensor is a camera or like sensors that
  detect distance or just a microphone
  that is sensing audio for example it is
  sensing data and using that data that
  data is somehow related to the state of
  the world even if it doesn't actually
  know our AI doesn't know what the
  underlying true state of the world
  actually is and for that we need to get
  into the world of sensor models the way
  of describing how it is that we
  translate what the hidden State the
  underlying true state of the world is
  with what the observation what it is
  that the AI knows or the AI has access
  to actually is and so for example a
  hidden State might be a robot's position
  if a robot is exploring new Uncharted
  Territory the robot likely doesn't know
  exactly where it is but it does have an
  observation it has Robot sensor data
  where it can sense you know how far away
  are possible obstacles around it and
  using that information using the
  observed information that it has it can
  infer something about the hidden State
  because what the true hidden state is
  influences those observations whatever
  the robot's true position is effects or
  has some effect upon what the sensor
  data the robot is able to collect is
  even if the robot doesn't actually know
  for certain what its true position is
  likewise if you think about a voice
  recognition or a speech recognition
  program that listens to you and is able
  to respond to you something like Alexa
  or your um or what Apple and Google are
  doing with their voice recognition as
  well that you might imagine that the
  hidden State the underlying state is
  what words are actually spoken the true
  nature of the world contains you saying
  a particular sequence of words but your
  phone or your Home Smart Home device
  doesn't know for sure exactly what words
  you said the only OB observation that
  the AI has access to is like some audio
  waveforms and those audio waveforms are
  of course dependent upon this hidden
  State and you can infer based on those
  audio waveforms what the words spoken
  likely were but you might not know with
  100% certainty what that hidden State
  actually is and it might be a task to
  try and predict given this observation
  given given these audio waveforms can
  you figure out what the actual words
  spoken are likewise you might imagine on
  a website true user engagement might be
  information you don't directly have
  access to but you can observe data like
  website or app analytics about how often
  was this button clicked or how often are
  people interacting with a page in a
  particular way and you can use that to
  infer things about your users as well so
  this type of problem comes up all the
  time when we're dealing with AI and
  trying to infer things about the world
  that often AI doesn't really know that
  hidden true state of the world all the
  AI has access to is some observation
  that is related to the hidden true state
  but it's not direct there might be some
  noise there the audio waveform might
  have some additional noise that might be
  difficult to parse the sensor data might
  not be exactly correct there's some
  noise that might not allow you to
  conclude with certainty what the hidden
  state is but can allow you to infer what
  it might be and so the simple example
  we'll take a look at here is Imagining
  the hidden State as the weather whether
  it's sunny or rainy or not and imagine
  you are uh programming an AI inside of a
  building that maybe has access to just a
  camera to inside the building and all
  you have access to is an observation as
  to whether or not employees are bringing
  an umbrella into the building or not you
  can detect whether it's an umbrella or
  not and so you might have an observation
  as to whether or not an umbrella is
  brought into the building or not and
  using that information you want to
  predict whether it's sunny or rainy even
  if you don't know what the underlying
  weather is so the underlying weather
  might be sunny or rainy and if it's
  raining obviously people are more likely
  to bring an umbrella and so whether or
  not people bring an umbrella your
  observation tells you something about
  the hidden State and of course this is a
  bit of a contrived example but the idea
  here is to think about this more broadly
  in terms of more generally Anytime You
  observe something it having to do with
  some underlying hidden State and so to
  try and model this type of idea where we
  have these hidden States and
  observations rather than just use a
  marov model which has state state state
  state Each of which is connected by that
  transition Matrix that we descried
  before we're going to use what we call a
  hidden marov model very similar to a
  marov model but this is going to allow
  us to Model A system that has hidden
  states that we don't directly observe
  along with some observed event that we
  do actually see and so in addition to
  that transition model that we still need
  of saying you know given the underlying
  state of the world if it's sunny or
  rainy what's the probability of
  tomorrow's weather we also need another
  model that given some state is going to
  give us an observation of like green yes
  someone brings an umbrella into the
  office or red no nobody brings umbrellas
  into the office and so the observation
  might be that if it's sunny then odds
  are nobody's going to bring an umbrella
  to the office but maybe some people are
  just being cautious and they do bring an
  umbrella to the office anyways and if
  it's raining then with much higher
  probability then people are going to
  bring umbrellas into the office but
  maybe if the rain was unexpected people
  didn't bring an umbrella and so they
  might have some other probability as
  well so using the observations you can
  begin to predict with reasonable
  likelihood what the underlying state is
  even if you don't actually get to
  observe the underlying state if you
  don't get to see what the hidden state
  is actually equal to this here we'll
  often call the sensor model uh it's Al
  also often called the emission
  probabilities because the state the
  underlying State emits some sort of
  emission that you then observe and so
  that can be another way of describing
  that same idea and the sensor Markov
  assumption that we're going to use is
  this an assumption that the evidence
  variable the thing we observe the
  emission that gets produced depends only
  on the corresponding State meaning I can
  predict whether or not people will bring
  umbrellas or not entirely dependent just
  on whether it is sunny or rainy today of
  course again this assumption might not
  hold in practice that in practice it
  might depend whether or not people bring
  umbrellas might depend not just on
  today's weather but also on yesterday's
  weather and the day before but for
  simplification purposes it can be
  helpful to apply this sort of assumption
  just to allow us to be able to reason
  about these probabilities a little more
  easily and if we're able to approximate
  it we can still often get a very good
  answer and so what these hidden marov
  models end up looking like is a little
  something like this where now rather
  than just have one chain of States like
  sun sun rain rain rain we instead have
  this upper level which is the underlying
  state of the world is it sunny or is it
  rainy and those are connected by that
  transition Matrix we described before
  but each of these States produces an
  emission produces an observation
  that I see that on this day it was sunny
  and people didn't bring umbrellas and on
  this day it was sunny but people did
  bring umbrellas and on this day it was
  raining and people did bring umbrellas
  and so on and so forth and so each of
  these underlying States represented by X
  subt for X sub1 012 so on and so forth
  produces some sort of observation or
  emission which is what the E stands for
  e subz e sub 1 E sub 2 so on and so
  forth and so this too is a way of trying
  to represent this idea and what you want
  to think about is that these underlying
  states are the true nature of the world
  the robot's position as it moves over
  time and that produces some sort of
  sensor data that might be observed or
  what people are actually saying and
  using the emission data of what audio
  waveforms you detect in order to process
  that data and try and figure it out and
  there are a number of possible tasks
  that you might want to do given this
  kind of information and one of the
  simplist is trying to infer something
  about the future or the past or about
  these sort of hidden States might exist
  and so the tasks that you'll often see
  and we're not going to go into the
  mathematics of these tasks but they're
  all based on the same idea of
  conditional probabilities and using the
  probability distributions we have to
  draw these sorts of conclusions one task
  is called filtering which is given
  observations from the start until now
  calculate the distribution for the
  current state meaning you know given
  information about from the beginning of
  time until now uh on which days the
  people bring an umbrella or not bring an
  umbrella can I calculate the probability
  of the current state that today is it
  sunny or is it raining another task that
  might be possible is prediction which is
  looking towards the future given
  observations about people bringing
  umbrellas from the beginning of the when
  we started counting time until now can I
  figure out the distribution that
  tomorrow is it sunny or is it raining
  and you can also go backwards as well
  via smoothing where I can say given
  observations from start until now
  calculate the distributions for some
  past State like I know that today people
  brought umbrell and Tomorrow People
  brought umbrellas and so given 2 days
  worth of data of people bringing
  umbrellas what's the probability that
  yesterday it was raining and that I know
  that people brought umbrellas today that
  might inform that decision as well it
  might influence those probabilities and
  there's also a most likely explanation
  task in addition to other tasks that
  might exist as well which is combining
  some of these given observations from
  the start up until now figuring out the
  most likely sequence of states and this
  is what we're going to take a look at
  now this idea that if I have all these
  observations umbrella no umbrella
  umbrella no umbrella can I calculate the
  most likely states of sun rain Sun rain
  and whatnot that actually represented
  the true weather that would produce
  these observations and this is quite
  common when you're trying to do
  something like voice recognition for
  example that you have these emissions of
  these audio waveforms and you would like
  to calculate based on all of the
  observations that you have what is the
  most likely sequence of actual words or
  syllables or sounds that the user
  actually made when they were speaking to
  this particular device or other tasks
  that might come up in that context as
  well and so we can try this out by going
  ahead and going into uh the hmm
  directory hmm for hidden marov
  model and here what I've done is I've
  defined a model where this model first
  defines my possible State Sun and Rain
  along with their emission Pro
  probabilities the observation model or
  the emission model where here given that
  I know that it's sunny uh the
  probability that I see people bring an
  umbrella is 0 2 the probability of no
  umbrella is 08 and likewise if it's
  raining then people are more likely to
  bring an umbrella umbrella has
  probability. n no umbrella has
  probability .1 so the actual underlying
  hidden States those states are sun and
  rain but the things that I observe the
  observations that I can see are either
  umbrella or no umbrella as the things
  that I observe as a
  result so this then uh I also need to
  add to it a transition Matrix same as
  before saying that if today is sunny
  then tomorrow is more likely to be sunny
  and if today is rainy then tomorrow is
  more likely to be raining as with before
  I give it some starting probabilities
  saying at first you know 50/50 chance
  for whether it's sunny or rainy and then
  I can create the model based on that
  information again the exact syntax of
  this is not so important so much as it
  is the data that I am now encoding into
  a program such that now I can begin to
  do some inference so I can give my PR
  program for example a list of
  observations you know umbrella umbrella
  no umbrella umbrella umbrella so on and
  so forth no umbrella no umbrella and I
  would like to calculate I would like to
  figure out the most likely explanation
  for these observations what is likely is
  is was it rain rain is this rain or is
  it more likely that this was actually
  sunny and then it switched back to it
  being rainy and you know that's an
  interesting question we might not be
  sure because it might just be that it
  just so happened on this rainy day
  people decided not to bring an umbrella
  or it could be that it switched from
  rainy to Sunny back to rainy which
  doesn't seem too likely but it certainly
  could happen and using the data we give
  to the hidden Markov model our model can
  begin to predict these answers can begin
  to figure it out so we're going to go
  ahead and just predict these
  observations and then for each of those
  predictions go ahead and print out what
  the prediction is and this Library just
  so happens to have a function called
  predict that does this prediction
  process for me so I run python sequence.
  pi and the result I get is this this is
  the prediction based on the observations
  of what all of those states are likely
  to be and it's likely to be rain then
  rain in this case it thinks that what
  most likely happened is that it was
  sunny for a day and then went back to
  being rainy but in different situations
  if it was rainy for longer maybe or if
  the probabilities were slightly
  different you might imagine that it's
  more likely that it was rainy all the
  way through and it just so happened on
  one rainy day people decided not to
  bring
  umbrellas and so here to python
  libraries can begin to allow for this
  sort of inference procedure and by
  taking what we know and by putting it in
  terms of these tasks that already exist
  these General tasks that work with
  hidden Markov models then anytime we can
  take an idea and formulate it as a
  hidden Markov model formulate it as
  something that has hidden States and
  observed emissions that result from
  those States then we can take advantage
  of these algorithms that are known to
  exist for trying to do this sort of
  inference so now we've seen a couple of
  ways that AI can begin to deal with
  uncertainty we've taken a look at
  probability and how we can use
  probability to describe numerically
  things that are likely or more likely or
  less likely to happen than other events
  or other variables and using that
  information we can begin to construct
  these standard types of models things
  like basian networks and marov chains
  and hidden marov models that all allow
  us to be able to describe how particular
  events relate to other events or how the
  values of particular variables relate to
  other variables not for certain but with
  some sort of probability distribution
  and by formulating things in terms of
  these models that already exist we can
  take advantage of python libraries that
  Implement these sort of models already
  and allow us just to be able to use them
  to produce some sort of resulting effect
  so all of this then allows our AI to
  begin to deal with these sort of
  Uncertain problems so that our AI
  doesn't need to know things for certain
  but can infer based on information it
  doesn't know next time we'll take a look
  at additional types of problems that we
  can solve by taking advantage of AI
  related algorithms even beyond the world
  of the types of problems we've already
  explored we'll see you next time
  [Music]
  okay welcome back everyone to an
  introduction to artificial intelligence
  with python and now so far we've taken a
  look at a couple of different types of
  problems we've seen classical search
  problems where we're trying to get from
  an initial state to a goal by figuring
  out some optimal path we've taken a look
  at adversarial search where we have a
  game playing Agent that is trying to
  make the best move we've seen
  knowledge-based problems where we're
  trying to use logic and inference to be
  able to figure out and draw some
  additional conclusions and we've seen
  some probabilistic models as well where
  we might not have certain information
  about the world but we want to use the
  knowledge about probabilities that we do
  have to be able to draw some conclusions
  today we're going to turn our attention
  to another category of problems
  generally known as optimization problems
  where optimization is really all about
  choosing the best option from a set of
  possible options and we've already seen
  optimization in some contexts like game
  playing where we're trying to create an
  AI that chooses the best move out of a
  set of possible moves but what we'll
  take a look at today is a category of
  types of problems and algorithms to
  solve them that can be used in order to
  deal with a broader range of potential
  optimization problems and the first of
  the algorithms that we'll take a look at
  is known as local search and local
  search differs from search algorithms
  we've seen before in the sense that the
  search algorithms we've looked at so far
  which are things like breath for search
  or AAR search for example generally
  maintain a whole bunch of different
  paths that we're simultaneously
  exploring and we're looking at a bunch
  of different paths at once trying to
  find our way to the solution on the
  other hand in local search this is going
  to be a search algorithm that's really
  just going to maintain a single node
  looking at a single state and we'll
  generally run this algorithm by
  maintaining that single node and then
  moving ourselves to one of the
  neighboring nodes throughout this search
  process and this is generally useful in
  contexts not like these problems which
  we've seen before like a maze solving
  situation where we're trying to find our
  way from the initial state to the goal
  by following some path but local search
  is most applicable when we really don't
  care about the path at all and all we
  care about is what the solution is and
  in the case of a solving a maze the
  solution was always obvious you could
  point to the solution you know exactly
  what the goal is and the real question
  is what is the path to get there but
  local search is going to come up in
  cases we're figuring out exactly what
  the solution is exactly what the goal
  looks like is actually the heart of the
  challenge and to give an example of one
  of these kinds of problems we'll
  consider a scenario where we have two
  types of buildings for example we have
  houses and hospitals and our goal might
  be in a world that's formatted as this
  grid where we have a whole bunch of
  houses a house here a house here two
  houses over there maybe we want to try
  and find a way to place two hospitals on
  this map so maybe hospital here and a
  hospital there and the problem now is we
  want to place two hospitals on the map
  but we want to do so with some sort of
  objective and our objective in this case
  is to try and minimize the distance of
  any of the houses from a hospital so you
  might imagine all right what's the
  distance from each of the houses to
  their nearest hospital there are a
  number of ways we could calculate that
  distance but one way is using a heris
  we've looked at before which is the
  Manhattan distance this idea of how many
  rows and columns would you have to move
  inside of this grid layout in order to
  get to a hospital for example and it
  turns out if you take each of these four
  houses and figure out all right how
  close are they to their nearest hospital
  you get something like this where this
  house is three away from a hospital this
  house is six away these two houses are
  each four away and if you add all those
  numbers up together you get a total cost
  of 17 for example so for this particular
  configuration of hospitals a hospital
  here and a hospital there that state we
  might say has a cost of 17 and the goal
  of this problem now that we would like
  to apply a search algorithm to figure
  out is can you solve this problem to
  find a way to minimize that cost
  minimize the total amount if you sum up
  all of the distances from all the houses
  to the nearest hospital how can we
  minimize that final value and if we
  think about this problem a little bit
  more abstractly abstracting away from
  this specific problem and thinking more
  generally about problems like it you can
  often formulate these problems by
  thinking about them as a state Space
  Landscape as we'll soon call it here in
  this diagram of a state Space Landscape
  each of these vertical bars represents a
  particular state that our world could be
  in so for example example each of these
  vertical bars represents a particular
  configuration of two hospitals and the
  height of this vertical bar is generally
  going to represent some function of that
  state some value of that state so maybe
  in this case the height of the vertical
  bar represents what is the cost of this
  particular configuration of hospitals in
  terms of what is the sum total of all
  the distances from all of the houses to
  their nearest hospital and generally
  speaking when we have a state Space
  Landscape we want to do one of two
  things we might be trying to maximize
  the value of this function trying to
  find a global maximum so to speak of
  this state Space Landscape a single
  state whose value is higher than all of
  the other states that we could possibly
  choose from and generally in this case
  when we're trying to find a global
  maximum we'll call the function that
  we're trying to optimize some objective
  function some function that measures for
  any given State how good is that state
  such that we can take any state pass it
  into the objective function and get
  value for how good that state is and
  ultimately what our goal is is to find
  one of these states that has the highest
  possible value for that objective
  function an equivalent but reversed
  problem is the problem of finding a
  global minimum some state that has a
  value after you pass it into this
  function that is lower than all of the
  other possible values that we might
  choose from and generally speaking when
  we're trying to find a global minimum we
  call the function that we're calculating
  a cost function generally each state has
  some sort of cost whether that cost is a
  monetary cost cost or a Time cost or in
  the case of the houses and hospitals
  we've been looking at just now a
  distance cost in terms of how far away
  each of the houses is from a hospital
  and we're trying to minimize the cost
  find the state that has the lowest
  possible value of that cost so these are
  the general types of ideas we might be
  trying to go for within a state Space
  Landscape trying to find a global
  maximum or trying to find a global
  minimum and how exactly do we do that
  we'll recall that in local search we
  generally operate this algorithm by
  maintaining just a single state just
  some current state represented inside of
  some node maybe inside of a data
  structure where we keeping track of
  where we are currently and then
  ultimately what we're going to do is
  from that state move to one of its
  neighbor States so in this case
  represented in this one dimensional
  Space by just the state immediately to
  the left or to the right of it but for
  any different problem you might Define
  what it means for there to be a neighbor
  of a particular state in the case of a
  hospitals for example that we were just
  looking at a neighbor might be moving
  One hospital one space to the left or to
  the right or up or down some state that
  is close to our current state but
  slightly different and as a result might
  have a slightly different value in terms
  of its objective function or in terms of
  its cost function so this is going to be
  our general strategy in local search to
  be able to take a state maintaining some
  current node and move where we're
  looking at in this state Space Landscape
  in order to try to find a global maximum
  or a global minimum somehow and perhaps
  the simplest of algorithms that we could
  use to implement this idea a of local
  search is an algorithm known as hill
  climbing and the basic idea of hill
  climbing is let's say I'm trying to
  maximize the value of my state I'm
  trying to figure out where the global
  maximum is I'm going to start at a state
  and generally what hill climb is going
  to do is it's going to consider the
  neighbors of that state that from this
  state you know all right I could go left
  or I could go right and this neighbor
  happens to be higher and this neighbor
  happens to be lower and in hill climbing
  if I'm trying to maximize the value I'll
  generally pick the highest one I can but
  between the state to the left and right
  of me this one is higher so I'll go
  ahead and move myself to consider that
  state instead and then I'll repeat this
  process continually looking at all of my
  neighbors and picking the highest
  neighbor doing the same thing looking at
  my neighbors picking the highest of my
  neighbors until I get to a point like
  right here where I consider both of my
  neighbors and both of my neighbors have
  a lower value than I do this current
  state has a value that is higher than
  any of its neighbors and at that point
  the algorithm terminates and I can say
  all right here I have now found the
  solution and the same thing works in
  exactly the opposite way for trying to
  find a global minimum but the algorithm
  is fundamentally the same if I'm trying
  to find a global minimum and say my
  current state starts here I'll
  continually look at my neighbors pick
  the lowest value that I possibly can
  until I eventually hopefully find that
  Global minimum a point at which when I
  look at both of my neighbors they each
  have a higher value and I'm trying to
  minimize the total score or cost or
  value that I get as a result of
  calculating some sort of cost function
  so we can formulate this graphical idea
  in terms of pseudo code and the pseudo
  code for hill climbing might look like
  this we Define some function called Hill
  Climb that takes as input the problem
  that we're trying to solve and generally
  we're going to start in some sort of
  initial state so I'll start with a
  variable called current that is keeping
  track of my initial State like an
  initial configuration of hospitals and
  maybe some problems lend themselves to
  an initial State some place where you
  begin in other cases maybe not in which
  case we might just randomly generate
  some initial State just by choosing two
  locations for hospitals at random for
  example and figuring out from there how
  we might be able to improve but that
  initial State we're going to store
  inside of current and now here comes our
  Loop some repetitive process we're going
  to do again and again until the
  algorithm terminates and what we're
  going to do is first say let's figure
  out all of the neighbors of the current
  state from my state what are all of the
  neighboring states for some definition
  of what it means to be a neighbor and
  I'll go ahead and choose the highest
  valued of all of those neighbors and
  save it in inside of this variable
  called Neighbor so keep track of the
  highest valued neighbor this is in the
  case where I'm trying to maximize the
  value in the case where I'm trying to
  minimize the value you might imagine
  here you'll pick the neighbor with the
  lowest possible value but these ideas
  are really fundamentally interchangeable
  and it's possible in some cases there
  might be multiple neighbors that each
  have an equally high value or an equally
  low value in the minimizing case and in
  that case we can just choose randomly
  from among them just choose one of them
  and save it inside of this variable
  neighbor and then the key question to
  ask is is this neighbor better than my
  current state and if the neighbor the
  best neighbor that I was able to find is
  not better than my current state well
  then the algorithm is over and I'll just
  go ahead and return the current state if
  none of my neighbors are better then I
  may as well stay where I am is the
  general logic of the hill climbing
  algorithm but otherwise if the neighbor
  is better then I may as well move to
  that neighbor so you might imagine
  setting current equal to neighbor where
  the general idea is if I'm at a current
  state and I see a neighbor that is
  better than me then I'll go ahead and
  move there and then I'll repeat the
  process continually moving to a better
  neighbor until I reach a point at which
  none of my neighbors are better than I
  am and at that point we'd say the
  algorithm can just terminate there so
  let's take a look at a real example of
  this with these houses and hospitals so
  we've seen now that if we put the
  hospitals in these two locations that
  has a total cost of 17 and now we need
  to Define if we're going to implement
  this hill climbing algorithm what it
  means to take this particular
  configuration of hospitals this
  particular state and get a neighbor of
  that state and a simple definition of
  neighbor might be just let's pick one of
  the hospitals and move it by one square
  to the left or right or up or down for
  example and that would mean we have six
  possible Neighbors from this particular
  configuration we could take this
  hospital and move it to any of these
  three possible squares or we take this
  hospital and move it to any of those
  three possible squares and each of those
  would generate a neighbor and what I
  might do is say all right here's the
  locations and the distances between each
  of the houses and their nearest hospital
  let me consider all of the neighbors and
  see if any of them can do better than a
  cost of 17 and it turns out there are a
  couple of ways that we could do that and
  it doesn't matter if we randomly choose
  among all the ways that are the best but
  one such possible way is by taking a
  look at this hospital here and
  considering the directions in which it
  might move if we hold this Hospital
  constant if we take this hospital and
  move it one square up for example that
  doesn't really help us it gets closer to
  the house up here but it gets further
  away from the house down here and it
  doesn't really change anything for the
  two houses along the left hand side but
  if we take this Hospital on the right
  and move it one square down it's the
  opposite problem it gets further away
  from the house up above and it gets
  closer to the house down below the real
  idea the goal should be to be able to
  take this hospital and move it one
  square to the left by moving it one
  square to the left we move it closer to
  both of these houses on the right
  without changing anything about the
  houses on the left for them this
  hospital was still the closer one so
  they aren't affected so were able to
  improve the situation by picking a
  neighbor that results in a decrease in
  our total cost and so we might do that
  move ourselves from this current state
  to a neighbor by just taking that
  hospital and moving it and at this point
  there's not a whole lot that can be done
  with this hospital but there's still
  other optimizations we can make other
  neighbors we can move to that are going
  to have a better value if we consider
  this hospital for example we might
  imagine that right now it's a bit far up
  that both of these houses are a little
  bit lower so we might be able to do
  better by taking thisp hospital and
  moving it one square down moving it down
  so that now instead of a cost of 15
  we're down to a cost of 13 for this
  particular configuration and we can do
  even better by taking the hospital and
  moving it one square to the left now
  instead of a cost of 13 we have a cost
  of 11 because this house is one away
  from the hospital this one is four away
  uh this one is three away and this one
  is also three away so we've been able to
  do much better than that initial cost
  that we had using the initial
  configuration just by taking every state
  and asking ourselves to question can we
  do better by just making small
  incremental changes moving to a neighbor
  moving to a neighbor and moving to a
  neighbor after that and now at this
  point we can potentially see that at
  this point the algorithm is going to
  terminate there's actually no neighbor
  we can move to that is going to improve
  the situation get us a cost that is less
  than 11 because if we take this hospital
  and move it Upp or to the right well
  that's going to make it further away if
  we take it and move it down that doesn't
  really change the situation it gets
  further away from this house but closer
  to that house
  and likewise the same story was true for
  this Hospital any neighbor we move it to
  up left down or right is either going to
  make it further away from the houses and
  increase the cost or it's going to have
  no effect on the cost
  whatsoever and so the question we might
  now ask is is this the best we could do
  is this the best placement of the
  hospitals we could possibly have and it
  turns out the answer is no because
  there's a better way that we could place
  these hospitals and in particular there
  are a number of ways you could do this
  but one of the ways is by taking this
  hosal hospital here and moving it to
  this Square for example moving it
  diagonally by one square which was not
  part of our definition of neighbor we
  could only move left right up or down
  but this is in fact better it has a
  total cost of nine it is now closer to
  both of these houses and as a result the
  total cost is less but we weren't able
  to find it because in order to get there
  we had to go through a state that
  actually wasn't any better than the
  current state that we had been on
  previously and so this appears to be a
  limitation or a concern you might as you
  go about trying to implement a hill
  climbing algorithm is that it might not
  always give you the optimal solution if
  we're trying to maximize the value of
  any particular State we're trying to
  find the global maximum a concern might
  be that we could get stuck at one of the
  local Maxima highlighted here in blue
  where a local Maxima is any state whose
  value is higher than any of its
  neighbors if we ever find ourselves at
  one of these two states when we're
  trying to maximize the value of the
  state we're not going to make any
  changes we're not going to move right
  we're not going to move left here
  because those states are worse but yet
  we haven't found the global Optimum we
  haven't done as best as we could do and
  likewise in the case of the hospitals
  what we're ultimately trying to do is
  find a global minimum find a value that
  is lower than all of the others but we
  had the potential to get stuck at one of
  the local Minima any of these states
  whose value is lower than all of its
  neighbors but still not as low as the
  local Minima and so the takeaway here is
  that it's not always always going to be
  the case that when we run this naive
  hill climbing algorithm that we're
  always going to find the optimal
  solution there are things that could go
  wrong if we started here for example and
  tried to maximize our value as much as
  possible we might move to the highest
  possible neighbor move to the highest
  possible neighbor move to the highest
  possible neighbor and stop and never
  realize that there's actually a better
  State way over there that we could have
  gone to instead and other problems you
  might imagine just by taking a look at
  this state Space Landscape are these
  various different types of plateaus
  something like this flat local maximum
  here where all six of these states each
  have the exact same value and so in the
  case of the algorith than we showed
  before none of the neighbors are better
  so we might just get stuck at this flat
  local maximum and even if you allowed
  yourself to move to one of the neighbors
  it wouldn't be clear which neighbor you
  would ultimately move to and you could
  get stuck here as well and there's
  another one over here this one is called
  a shoulder it's not really a local
  maximum because there's still places
  where we can go higher not a local
  minimum because we can go lower so we
  can still make progress but but it's
  still this flat area where if you have a
  local search algorithm there's potential
  to get lost here unable to make some
  upward or downward progress depending on
  whether we're trying to maximize or
  minimize and therefore another potential
  for us to be able to find a solution
  that might not actually be the optimal
  solution and so because of this
  potential the potential that hill
  climbing has to not always find us the
  optimal result it turns out there are a
  number of different varieties and
  variations on the hill climbing
  algorithm that help to solve the problem
  better depending on the context and
  depending on the specific type of
  problem some of these variants might be
  more applicable than others what we've
  taken a look at so far is a version of
  hill climbing generally called steepest
  Ascent hill climbing where the idea of
  steepest Ascent hill climbing is we are
  going to choose the highest valued
  Neighbor In the case where we're trying
  to maximize or the lowest valued
  neighbor in cases where we're trying to
  minimize but generally speaking if I
  have five neighbors and they're all
  better than my current state I will pick
  the best one of those five now sometimes
  that might work pretty well it's sort of
  a greedy approach of trying to take the
  best operation at any particular time
  step but it might not always work there
  might be cases where actually I want to
  choose an option that is slightly better
  than me but maybe not the best one
  because that later on might lead to a
  better outcome ultimately so there are
  other variants we might consider of this
  basic hill climbing algorithm one is
  known as stochastic hill climbing and in
  this case we choose randomly from all of
  our higher value neighbors so if I'm at
  my current state and there are five
  neighbors that are all better than I am
  rather than choosing the best one as
  steep as desent would do stochastic will
  just choose randomly from one of them
  thinking that if it's better then it's
  better and maybe there's a potential to
  make forward progress even if it is not
  locally the best option I could possibly
  choose First Choice hill climbing ends
  up just choosing the very first highest
  valued neighbor that it follows behaving
  on a similar idea rather than consider
  all of the neighbors as soon as we find
  a neighbor that is better than our
  current state we'll go ahead and move
  there so maybe some efficiency
  improvements there and maybe has the
  potential to find a solution that the
  other strategies weren't able to find
  and with all of these variants we still
  suffer from the same potential risk this
  risk that we might end up at a local
  minimum or a local maximum and we can
  reduce that risk by repeating the
  process multiple times so one variant of
  hill climbing is random restart hill
  climbing where the general idea is we'll
  conduct hill climbing multiple times if
  we apply steepest descent hill climbing
  for example we'll start at some random
  State try and figure out how to solve
  the problem and figure out what is the
  local maximum or local minimum we get to
  and then we'll just randomly restart and
  try again choose a new starting
  configuration try and figure out what
  the local maximum or minimum is and do
  this some number of times and then after
  we've done it some number of times we
  can pick the best one out of all of the
  ones that we've taken a look at so
  there's another option we have access to
  as well and then although I said the
  generally local search will usually just
  keep track of a single node and then
  move to one of its neighbors there are
  variants of hill climbing that are known
  as local beam searches
  where rather than keep track of just one
  current best state we're keeping track
  of K highest valued neighbors such that
  rather than starting at one random
  initial configuration I might start with
  three or four or five randomly generate
  all the neighbors and then pick like the
  three or four or five best of all of the
  neighbors that I find and continually
  repeat this process with the idea being
  that now I have more options that I'm
  considering more ways that I could
  potentially navigate myself to the
  optimal solution that might exist for a
  particular problem
  so let's now take a look at some actual
  code that can Implement some of these
  kinds of ideas something like steepest
  Ascent hill climbing for example for
  trying to solve this Hospital problem so
  I'm going to go ahead and go into my
  hospitals directory where I've actually
  set up the basic framework for solving
  this type of problem I'll go ahead and
  go into hospitals. and we'll take a look
  at the code we've created here I've
  defined a class that is going to
  represent the state space so the space
  has a height and a width and also some
  number of hos hospitals so you can
  configure how big is your map how many
  hospitals should go here we have a
  function for adding a new house to the
  state space and then some functions that
  are going to get me all of the available
  spaces for if I want to like randomly
  Place hospitals in particular locations
  and here now is the hill climbing
  algorithm so what are we going to do in
  the hill climbing algorithm well we're
  going to start uh by randomly
  initializing where the hospitals are
  going to go we don't know where the
  hospitals should actually be so let's
  just randomly place them so here I'm
  running Loop for each of the hospitals
  that I have I'm going to go ahead and
  add a new hospital at some random
  location so I basically get all of the
  available spaces and I randomly choose
  one of them as where I would like to add
  this particular hospital I have some
  logging output and generating some
  images which we'll take a look at a
  little bit later but here is the key
  idea so uh I'm going to just keep
  repeating this algorithm I could specify
  a maximum of how many times I want it to
  run or I could just run it up until it
  hits a local maximum or local minimum
  and now we'll basically consider all of
  the hospitals that could potentially
  move so consider each of the two
  hospitals or more hospitals if there are
  more than that and consider all of the
  places where that hospital could move to
  some neighbor of that hospital that we
  could move the neighbor to and then see
  you know is this going to be better than
  where we were currently so if it is
  going to be better then we'll go ahead
  and update our best neighbor and keep
  track of this new best neighbor that we
  found and then after afterwards we can
  ask ourselves the question if best
  neighbor cost is greater than or equal
  to the cost of the current set of
  hospitals meaning if the cost of our
  best neighbor is greater than the
  current cost meaning our best neighbor
  is worse than our current state well
  then we shouldn't make any changes at
  all and we should just go ahead and
  return the current set of hospitals but
  otherwise we can update our hospitals in
  order to change them to one of the best
  neighbors and if there are multiple that
  are all equivalent I'm here using
  random. choice say go ahead and choose
  one randomly so this is really just a
  python implementation of that same idea
  that we were just talking about this
  idea of taking a current state some
  current set of hospitals generating all
  of the neighbors looking at all the ways
  we could take one hospital and move it
  one square to the left or right or up or
  down and then figuring out based on all
  of that information which is the best
  neighbor or the set of all the best
  neighbors and then choosing from one of
  those and each time we go ahead and
  generate an image in order to do that
  and so now now what we're doing is if we
  look down at the bottom I'm going to
  randomly generate a space with height 10
  and width 20 and I'll say go ahead and
  put three Hospital somewhere in the
  space I'll randomly generate 15 houses
  that I just go ahead and add in random
  locations and now I'm going to run this
  hill climbing algorithm in order to try
  and figure out where we should Place
  those hospitals so I'll go ahead and run
  this program by running python
  hospitals and we see that we started our
  initial state had a cost of 72 but we
  were able to continue find neighbors
  that were able to decrease that cost
  decreased to 69 66 63 so on and so forth
  all the way down to 53 as the best
  neighbor we were able to ultimately find
  and we can take a look at what that
  looked like by just opening up these
  files so here for example was the
  initial configuration we randomly
  selected a location for each of these 15
  different houses and then randomly
  selected locations for 1 2 three
  hospitals that were just located
  somewhere inside of the state space and
  if you add up all the distances from
  each of the houses to their nearest
  hospital you get a total cost of about
  72 and so now the question is what
  neighbors can we move to that improve
  the situation and it looks like the
  first one the algorithm found was by
  taking this house that was over there on
  the right and just moving it to the left
  and that probably makes sense because if
  you look at the houses in that general
  area really these five houses look like
  they're probably the ones that are going
  to be closest to this Hospital over here
  moving it to the left decreases the
  total distance at least to most of these
  houses though it does increase that
  distance for one of them and so we're
  able to make these improvements to the
  situation by continually finding ways
  that we can move these hospitals around
  until we eventually settle at this
  particular state that has a cost of 53
  where we figured out a position for each
  of the hospitals and now none of the
  neighbors that we could move to are
  actually going to improve the situation
  we can take this hospital and this
  hospital and that hospital and look at
  each of the neighbors and none of those
  are going to be better than this
  particular configuration and again
  that's not to say that this is the best
  we could do there might be some other
  configuration of hospitals that is a
  global minimum and this might just be a
  local minimum that is the best of all of
  its neighbors but maybe not the best in
  the entire possible State space and you
  could search through the entire State
  Space by considering all of the possible
  configurations for hospitals But
  ultimately that's going to be very time
  intensive especially as our state space
  gets bigger and there might be more and
  more possible States it's going to take
  quite a long time to look through all of
  them and so being able to use these sort
  of local search algorithms can often be
  quite good for trying to find the best
  solution we can do and especially if we
  don't care about doing the best possible
  and we just care about doing pretty good
  and finding a pretty good placement of
  those hospitals then these methods can
  be particularly
  powerful but of course we can try and
  mitigate some of this concern by instead
  of using hill climbing to use random
  restart this idea of rather than just
  Hill Climb one time we can Hill Climb
  multiple times and say try hill climbing
  a whole bunch of times on the the exact
  same map and figure out what is the best
  one that we've been able to find and so
  I've here implemented a function for
  random restart that restarts some
  maximum number of times and what we're
  going to do is repeat that number of
  times this process of just go ahead and
  run the hill climbing algorithm figure
  out what the cost is of getting from all
  the houses to the hospitals and then
  figure out is this better than we've
  done so far so I can try this exact same
  idea where instead of running hill
  climbing I'll go ahead and run random
  restart and I'll randomly restart maybe
  20 times for example and we'll go ahead
  and now I'll remove all the images and
  then rerun the program and now we
  started by finding a original State uh
  when we initially ran hill climbing the
  best cost we were able to find was 56
  each of these iterations is a different
  iteration of the hill climbing algorithm
  we're running hill climbing not one time
  but 20 times here each time going until
  we find a local minimum in this case and
  we look and see each time did we do
  better than we did the best time we've
  done so far so we went from 56 to 46
  this one was greater so we ignored it
  this one was 41 which was less so we
  went ahead and kept that one and for all
  of the remaining 16 times that we tried
  to implement uh hill climbing and we
  tried to run the hill climbing algorithm
  we couldn't do any better than that 41
  again maybe there is a way to do better
  that we just didn't find but it looks
  like that way ended up being a pretty
  good solution to the problem that was uh
  attempt number three starting from
  Counting at zero
  so we can take a look at that open up
  number three and this was the state that
  happened to have a Costa 41 that after
  running uh the hill climbing algorithm
  on some particular random initial
  configuration of hospitals this is what
  we found was the local minimum in terms
  of Trying to minimize the cost and it
  looks like we did pretty well that this
  hospital is pretty close to this region
  this one is pretty close to these houses
  here this Hospital looks about as good
  as we can do for trying to capture those
  houses over on that side and so these
  sorts of algorithms can be quite useful
  for trying to solve these problems but
  the real problem with many of these
  different types of hill climbing
  steepest the sense stochastic first
  choice and so forth is that they never
  make a move that makes our situation
  worse right they're always going to take
  ourselves in our current state look at
  the neighbors and consider can we do
  better than our current state and move
  to one of those Neighbors which of those
  neighbors we choose might vary among
  these various different types of
  algorithms but we never go from a
  current position to a position that is
  worse than our current position and
  ultimately that's what we're going to
  need to do if we want to be able to find
  a global maximum or a global minimum cuz
  sometimes if we get stuck we want to
  find some way of dislodging ourselves
  from our local maximum or local minimum
  in order to find the global maximum or
  the global minimum or increase the
  probability that we do find it and so
  the most popular technique for trying to
  approach the problem from that angle is
  a technique known as simulated annealing
  simulated because it's modeling after a
  real physical process of aeling where
  you can think about this in terms of
  physics a physical situation
  where you have some system of particles
  and you might imagine that when you heat
  up a particular physical system there's
  a lot of energy there things are moving
  around quite randomly but over time as
  the system cools down it eventually
  settles into some final position and
  that's going to be the general idea of
  simulated analing we're going to
  simulate that process of some high
  temperature system where things are
  moving around randomly quite frequently
  but over time decreasing that
  temperature until we eventually settle
  at our ultimate solution and the idea is
  going to be if we have some State Space
  Landscape that looks like this and we
  begin at a initial State here if we're
  looking for a global maximum and we're
  trying to maximize the value of the
  state our traditional hill climbing
  algorithms would just take the state and
  look at the two neighbor ones and always
  pick the one that is going to increase
  the value of the state but if we want
  some chance of being able to find the
  global maximum we can't always make good
  moves we have to sometimes make bad
  moves and allow ourselves to make a move
  in a Direction
  that actually seems for now to make our
  situation worse such that later we can
  find our way up to that Global maximum
  in terms of trying to solve that problem
  of course once we get up to this Global
  maximum once we've done a whole lot of
  the searching then we probably don't
  want to be moving to states that are
  worse than our current state and so this
  is where this metaphor for a kneeling
  starts to come in where we want to start
  making more random moves and over time
  start to make fewer of those random
  moves based on a particular temperature
  schedule so the basic outline looks
  something like this early on in
  simulated and kneeling we have a higher
  temperature State and what we mean by a
  higher temperature state is that we are
  more likely to accept neighbors that are
  worse than our current state that we
  might look at our neighbors and if one
  of our neighbors is worse than the
  current state especially if it's not all
  that much worse if it's pretty close but
  just slightly worse then we might be
  more likely to accept that and go ahead
  and move to that neighbor anyways but
  later on as we run simulated and
  kneeling we're going to decrease that
  temperature and at a lower temperature
  we're going to be less likely to accept
  neighbors that are worse than our
  current state now to formalize this and
  put a little bit of pseudo code to it
  here is what that algorithm might look
  like we have a function called simulated
  analing that takes as input the problem
  we're trying to solve and also
  potentially some maximum number of times
  we might want to run the simulated
  analing process how many different
  neighbors we're going to try and look
  for and that value is going to vary
  based on the problem you're trying to
  solve we'll again start with some
  current state that will be equal to the
  initial state of the problem but now we
  need to repeat this process over and
  over for max number of times repeat some
  process some number of times where we're
  first going to calculate a temperature
  and this temperature function takes the
  current time T starting at one going all
  the way up to Max and then gives us some
  temperature that we can use in our
  computation where the idea is that this
  temperature is going to be higher early
  on and it's going to be lower later on
  so there are a number of ways this
  temperature function could often work
  one of the simplest ways is just to say
  it is like the proportion of time that
  we still have remaining out of like Max
  units of time how much time do we have
  remaining you start off with a lot of
  that time remaining and as time goes on
  the temperature is going to decrease
  because you have less and less of that
  remaining time still available to you so
  we calculate our temperature for the
  current time and then we pick a random
  neighbor of the current state no longer
  we going to be picking the best neighbor
  that we possibly can or just one of the
  better neighbors that we can we're going
  to pick a random neighbor it might be
  better it might be worse but we're going
  to calculate that we're going to
  calculate Delta e e for energy in this
  case which is just how much better is
  the neighbor than the current state so
  if Delta e is positive that means the
  neighbor is better than our current
  state if Delta e is negative that means
  the neighbor is worse than our current
  state and so we can then have a
  condition that looks like this if Delta
  e is greater than zero that means the
  neighbor state is better than our
  current state and if ever that situation
  arises we'll just go ahead and update
  current to be that neighbor same as
  before move where we are currently to be
  the neighbor because the neighbor is
  better than our current state we'll go
  ahead and accept that but now the
  difference is that whereas before we
  never ever wanted to take a move that
  made our situation worse now we
  sometimes want to make make a move that
  is actually going to make our situation
  worse cuz sometimes we're going to need
  to dislodge ourselves from a local
  minimum or local maximum to increase the
  probability that we're able to find the
  global minimum or the global maximum a
  little bit later and so how do we do
  that how do we decide to sometimes
  accept some state that might actually be
  worse well we're going to accept a worse
  state with some probability and that
  probability needs to be based on a
  couple of factors it needs to be based
  in part on the temperature where if the
  temperature is higher we're more likely
  to move to a worse neighbor and if the
  temperature is lower we're less likely
  to move to a worse neighbor but it also
  to some degree should be based on Delta
  e if the neighbor is much worse than the
  current state we probably want to be
  less likely to choose that then if the
  neighbor is just a little bit worse than
  the current state so again there are a
  couple of ways you could calculate this
  but it turns out one of the most popular
  is just to calculate e to the power of
  Delta e over T where e is just a
  constant Delta e over T are based on
  Delta e and t here we calculate that
  value and that'll be some value between
  0 and one and that is the probability
  with which we should just say all right
  let's go ahead and move to that neighbor
  and it turns out that if you do the math
  for this value when Delta e is such that
  the
  is not that much worse than the current
  state that's going to be more likely
  that we're going to go ahead and move to
  that state and likewise when the
  temperature is lower we're going to be
  less likely to move to that neighboring
  state as well so now this is the big
  picture for simulated and healing this
  process of taking the problem and going
  ahead and generating random neighbors
  will always move to a neighbor if it's
  better than our current state but even
  if the neighbor is worse than our
  current state will sometimes move there
  depending on how much worse it is and
  also based on the temperature and as a
  result the hope the goal of this whole
  process is that as we begin to try and
  find our way to the local the global
  maximum or the global minimum we can
  dislodge ourselves if we ever get stuck
  at a local maximum or local minimum in
  order to eventually make our way to
  exploring the part of the state space
  that is going to be the best and then as
  the temperature decreases eventually we
  settle there without moving around too
  much from what we found to be the
  globally best thing that we can do thus
  far so at the very end we just return
  whatever the current state happens to be
  and that is the conclusion of this
  algorithm we've been able to figure out
  what the solution is and these types of
  algorithms have a lot of different
  applications anytime you can take a
  problem and formulate it as something
  where you can explore a particular
  configuration and then ask are any of
  the neighbors better than this current
  configuration and have some way of
  measuring that then there's an
  applicable case for these hill climbing
  simulated and kneeling types of
  algorithms so sometimes it can be for
  facility location type problems like for
  when you're trying to plan a city and
  figure out where the hospitals should be
  but there are definitely other
  applications as well and one of the most
  famous problems in computer science is
  the traveling salesman problem traveling
  salesman problem generally is formulated
  like this I have a whole bunch of cities
  here indicated by these dots and what
  I'd like to do is find some route that
  takes me through all of the cities and
  ends up back where I started so some
  route that like starts here goes through
  all these cities and ends up back where
  I originally started and what I might
  like to do is minimize the total
  distance
  that I have to travel in order or the
  total cost of taking this entire path
  and you can imagine this is a problem
  that's very applicable in situations
  like uh when delivery companies are
  trying to deliver things to a whole
  bunch of different houses they want to
  figure out how do I get from the
  warehouse to all these various different
  houses and get back again all using as
  minimal time and distance and energy as
  possible so you might want to try to
  solve these sorts of problems but it
  turns out that solving this particular
  kind of problem is very computationally
  difficult it is a very computationally
  expensive task to be able to figure it
  out this falls under the category of
  what are known as NP complete problems
  problems that uh there is no known
  efficient way to try and solve these
  sorts of problems and so what we
  ultimately have to do is come up with
  some approximations some ways of trying
  to find a good solution even if we're
  not going to find the globally best
  solution that we possibly can at least
  not in a feasible or tractable amount of
  time and so what we could do is take the
  traveling salesman problem and try to
  formulate it using local search and ask
  a question like all right I can pick
  some State some configuration some route
  between all of these nodes and I can
  measure the cost of that state figure
  out what the distance is and I might now
  want to try to minimize that cost as
  much as possible and then the only
  question now is what does it mean to
  have a neighbor of this state what does
  it mean to take this particular route
  and have some neighboring route that is
  close to it but slightly different such
  that it might have a different total
  distance and there are a number of
  different definitions for what a
  neighbor of a traveling sales
  configuration might look like but one
  way is just to say a neighbor is what
  happens if we pick two of these edges
  between nodes and switch them
  effectively so for example I might pick
  these two edges here these two that just
  happen across this node goes here this
  node goes there and go ahead and switch
  them and what that process will
  generally look like is removing both of
  these edges from the graph taking this
  node and connecting it to the node it
  wasn't connected to so connecting it up
  here in instead we'll need to take these
  arrows that were originally going this
  way and reverse them except move them
  going the other way and then just fill
  in that last remaining blank add an
  arrow that goes in that direction
  instead so by taking two edges and just
  switching them I have been able to
  consider one possible neighbor of this
  particular configuration and it looks
  like this neighbor is actually better it
  looks like this probably travels a
  shorter distance in order to get through
  all the cities through this route than
  the current state did and so you could
  imagine implementing this idea inside of
  hill climbing or simulated a kneeling
  algorithm when we repeat this process to
  try and take a state of this traveling
  salesman problem look at all the
  neighbors and then move to the neighbors
  if they're better or maybe even move to
  the neighbors if they're worse until we
  eventually settle upon some best
  solution that we've been able to find
  and it turns out that these types of
  approximation algorithms even if they
  don't always find the very best solution
  can often do pretty well at trying to
  find solutions that are helpful too so
  that then was a look at local search
  particular category of algorithms that
  can be used for solving a particular
  type of problem where we don't really
  care about the path to the solution I
  didn't care about the steps I took to
  decide where the hospitals should go I
  just cared about the solution itself I
  just care about where the hospitals
  should be or what the route through the
  traveling salesman Journey really ought
  to be another type of algorithm that
  might come up are known as these
  categories of linear programming types
  of problems and linear programming often
  comes up in the context where we're
  trying to optimize for some mathematical
  function but often times linear
  programming will come up when we might
  have real real numbered values so it's
  not just like discrete fixed values that
  we might have but any decimal values
  that we might want to be able to
  calculate and so linear programming is a
  is a family of types of problems where
  we might have a situation that looks
  like this where the goal of linear
  programming is to minimize a cost
  function and you can invert the numbers
  and say try and maximize it but often
  we'll frame it as Trying to minimize a
  cost function that has some number of
  variables X1 X2 X3 all the way up to xn
  just some number of variables that are
  involved things that I want to know the
  values to and this cost function might
  have coefficients in front of those
  variables and this is what we would call
  like a linear equation we just have all
  of these variables that might be
  multiplied by a coefficient and then add
  it together we're not going to square
  anything or cube anything because
  that'll give us different types of
  equations with linear programming we're
  just dealing with linear equations in
  addition to linear constraints where a
  constraint is going to look something
  like if we sum up this particular
  equation that is just some linear
  combination of all of these variables it
  is less than or equal to some bound B
  and we might have a whole number of
  these various different constraints that
  we might Place onto our linear
  programming exercise and likewise just
  as we can have constraints that are
  saying this linear equation is less than
  or equal to some bound B it might also
  be equal to something that if you want
  some sum of some combination of
  variables to be equal to a value you can
  specify that and we can also maybe
  specify that each variable has lower and
  upper bounds that it needs to be a
  positive number for example or it needs
  to be a number that is less than 50 for
  example and there are a number of other
  choices we can make there for defining
  what the bounds of a variable are but it
  turns out that if you can take a problem
  and formulate it in these terms
  formulate the problem as your goal is to
  minimize a cost function and you're
  minimizing that cost function subject to
  particular constraints subjects to
  equations that are of the form like this
  of some sequence of variables is less
  than a bound or is equal to some
  particular value then there are a number
  of algorithms that already exist for
  solving these sorts of problems so let's
  go ahead and take a look at an example
  uh here's an example of a problem that
  might come up in the world of linear
  programming often this is going to come
  up when we're trying to optimize for
  something and we want to be able to do
  some calculations and we have
  constraints on what we're trying to
  optimize and so it might be something
  like this uh in the context of a factory
  we have two machines X1 and X2 X1 cost
  $50 an hour to run X2 cost $80 an hour
  to run and our goal what we're trying to
  do our objective is to minimize the
  total cost so that's what we'd like to
  do but we need to do so subject to
  certain constraints so there might be a
  labor constraint that X1 requires five
  units of labor per hour X2 requires two
  units of labor per hour uh and we have a
  total of 20 units of Labor that we have
  to spend so this is a constraint we have
  no more than 20 units of Labor that we
  can spend and we have to cons spend it
  across X1 and X2 Each of which requires
  a different amount of Labor and we might
  also have a constraint like this that
  tells us X1 is going to produce 10 units
  of output per hour X2 is going to
  produce 12 units of output per hour and
  the company needs 90 units of output so
  we have some goal something we need to
  achieve we need to achieve 90 units of
  output but there are some constraints
  that X1 can only produce 10 units of
  output per hour X2 produces 12 units of
  output per hour these types of problems
  come up quite frequently and you can
  start to notice patterns in these types
  of problems problems where I am trying
  to optimize for some goal minimizing
  cost maximizing output maximizing
  profits or something like that and there
  are constraints that are placed on that
  process and so now we just need to
  formulate this problem in terms of
  linear equations so let's start with
  this first point two machines X1 and X2
  X cost $50 an hour X2 cost $80 an hour
  here we can come up with an objective
  function that might look like this this
  is our cost function rather 50 _ X1 + 80

* X2 where X1 is going to be a variable
  representing how many hours do we run
  machine X1 for X2 is going to be a
  variable representing how many hours are
  we running machine X2 for and what we're
  trying to minimize is this cost function
  which is just how much it cost to run
  each of these machines per hour summed
  up this is an example of a linear
  equation just some combination of these
  variables plus coefficients that are
  placed in front of them and I would like
  to minimize that total value but I need
  to do so subject to these constraints X1
  requires 50 units of labor per hour X2
  requires two and we have a total of 20
  units of Labor to spend and so that
  gives us a constraint of this four 5 _
  X1 plus 2 _ X2 is less than or equal to
  20 20 is the total number of units of
  Labor we have to spend and that's spent
  across X1 and X2 Each of which requires
  a different number of units of labor per
  hour for example and finally we have
  this constraint here X1 produces 10
  units of output per hour X2 produces 12
  and we need 90 units of output and so
  this might look something like this that
  10 X1 plus 12 X2 this is amount of
  output per hour it needs to be at least
  90 if we can do better great but it
  needs to be at least 90 and if you
  recall from my formulation before I said
  that generally speaking in linear
  programming we deal with equals
  constraints or less than or equal to
  constraints so we have a greater than or
  equal equal to sign here that's not a
  problem whenever we have a greater than
  or equal to sign we can just multiply
  the equation by1 and that'll flip it
  around to a less than or equals negative
  90 for example instead of a greater than
  or equal to 90 and that's going to be an
  equivalent expression that we can use to
  represent this problem so now that we
  have this cost function and these
  constraints that it's subject to it
  turns out there are a number of
  algorithms that can be used in order to
  solve these types of problems and these
  problems go a little bit more into
  geometry in linear algebra that we're
  really going to get into but the most
  popular of these types of algorithms are
  Simplex which was one of the first
  algorithms discovered for trying to
  solve linear programs and later on a
  class of interior Point algorithms can
  be used to solve this type of problem as
  well the key is not to understand
  exactly how these algorithms work but to
  realize that these algorithms exist for
  efficiently finding Solutions anytime we
  have a problem of this particular form
  and so we can take a look for example at
  the production directory
  here where here I have a file called
  production. where here I'm using uh
  scipi which is a library for a lot of
  science related uh functions within
  Python and I can go ahead and just run
  this optimization function in order to
  run a linear program Lin prog here is
  going to try and solve this linear
  program for me where I provide to this
  expression to this function call all of
  the data about my linear program so it
  needs to be in a particular format which
  might be a little confusing at first but
  this first argument to ci. optimize
  dolin programming is the cost function
  which is in this case just an array or a
  list that has 50 and 80 because my
  original cost function was 50 _ X1 plus
  80 _ X2 so I just tell python 50 and 80
  those are the coefficients that I am now
  trying to optimize for and then I
  provide all of the constraints so the
  constraints and I wrote them up above in
  comments is the constraint 1 is 5x1 +
  2x2 is less than or equal to 20 and
  constraint 2 is -10 X1 plus -12 X2 is
  less than or equal to 90 and so uh CPI
  expects these constraints to be in a
  particular format it first expects me to
  provide all of the coefficients for the
  upper bound equations u just short for
  upper bound where the coefficients of
  the first equation are 5 and two because
  we have 5 X1 and 2x2 and the coefficient
  for the second equation are -10 and -12
  CU I have -10 X1 plus -12 X2 and then
  here we provided as a separate argument
  just to keep things separate what the
  actual bound is what is the upper Bound
  for each of these constraints well for
  the first constraint the upper bound is
  20 that was constraint number one and
  then for constraint number two the upper
  bound is 90 so a bit of a cryptic way of
  representing it it's not quite as simple
  as just writing the mathematical
  equations what really is being expected
  here are all of the coefficients and all
  of the numbers that are in these
  equations by first providing the
  coefficients for the cost function then
  providing all the coefficients for the
  inequality constraints and then
  providing all of the upper bounds for
  those inequality constraints and once
  all of that information is there then we
  can run any of these interior Point
  algorithms or the Simplex algorithm even
  if you don't understand how it works you
  can just run the function and figure out
  what the result should be and here I
  said if the result is a success we were
  able to solve this problem go ahead and
  print out what the value of X1 and X2
  should be otherwise go ahead and print
  out no solution and so if I run this
  program by running
  python production. Pi it takes a second
  to calculate but then we see here is
  what the optimal solution should be X1
  should run for 1.5 hours X2 should run
  for 6.25 hours and we were able to do
  this by just formulating the problem as
  a linear equation that we were trying to
  optimize some cost that we were trying
  to minimize them and then some
  constraints that were placed on that and
  many many problems fall into this
  category of problems that you can solve
  if you can just figure out how to use
  equations and use these constraints to
  represent that general idea and that's a
  theme that's going to come up a couple
  of times today where we want to be able
  to take some problem and reduce it down
  to some problem we know how to solve in
  order to begin to find a solution and to
  use existing methods that we can use in
  order to find a solution more
  effectively or more efficiently and it
  turns out that these types of problems
  where we have constraints show up in
  other ways too and there's an entire
  class of problems that's more generally
  just known as constraint satisfaction
  problems and we're going to now take a
  look at how you might formulate a
  constraint satisfaction problem and how
  you might go about solving a constraint
  satisfaction problem but the basic idea
  of a constraint satisfaction problem is
  we have some number of variables that
  need to take on some values and we need
  to figure out what values each of those
  Ables should take on but those variables
  are subject to particular constraints
  that are going to limit what values
  those variables can actually take on so
  let's take a look at a real world
  example for example uh let's look at
  exam scheduling that I have four
  students here students 1 2 3 and four uh
  each of them is taking some number of
  different classes classes here are going
  to be represented by letters uh so
  student one is enrolled in courses a b
  and c student 2 is enrolled in courses b
  d and e so on and so forth and now say
  University for example is trying to
  schedule exams for all of these courses
  uh but there are only three exam slots
  on Monday Tuesday and Wednesday and we
  have to schedule an exam for each of
  these courses but the constraint now the
  constraint we have to deal with with the
  scheduling is that we don't want anyone
  to have to take two exams on the same
  day we would like to try and minimize
  that or eliminate it if at all possible
  so how do we begin to represent this
  idea how do we structure this in a way
  that a computer with an AI algorithm can
  begin to try and solve the problem well
  let's in particular just look at these
  classes that we might take and represent
  each of the courses as some node inside
  of a graph and what we'll do is we'll
  create an edge between two nodes in this
  graph if there is a constraint between
  those two nodes so what does this mean
  well we can start with student one who's
  enrolled in courses a b and c what that
  means is that a and b can't have an exam
  at the same time a and C can't have an
  exam at the same time and B and C also
  can't have an exam at the same time and
  I can represent that in this graph by
  just drawing edges one Edge between A
  and B one between B and C and then one
  between C and A and that encodes now the
  idea that between those nodes there is a
  constraint and in particular the
  constraint happens to be that these two
  can't be equal to each other though
  there are other types of constraints
  that are possible depending on the type
  of problem that you're trying to solve
  and then we can do the same thing for
  each of the other students the for
  student two who's enrolled in courses b
  d and e well that means b d and e those
  all need to have edges that connect each
  other as well student three is enrolled
  in courses c e and f so we'll go ahead
  and take c e and f and connect those by
  drawing edges between them two and then
  finally student four is enrolled in
  courses e f and g and we can represent
  that by drawing edges between e f and g
  although E and F already had an edge
  between them we don't need another one
  because this constraint is just encoding
  the idea that course e and course F
  cannot have an exam on the same day so
  this then is what we might call the
  constraint graph it is some graphical
  representation of all of my variables so
  to speak and the constraints between
  those possible variables where in this
  particular case each of the constraints
  represents an inequality constraint that
  an edge between b and d means whatever
  value the variable B takes on cannot be
  the value that the variable D takes on
  as well so what then actually is a
  constraint satisfaction problem well a
  straint satisfaction problem is just
  some set of variables X1 all the way
  through xn some set of domains for each
  of those variables so every variable
  needs to take on some values maybe every
  variable has the same domain but maybe
  each variable has a slightly different
  domain and then there's a set of
  constraints we'll just call a set C that
  is some constraints that are placed upon
  these variables like X1 is not equal to
  X2 but they could be of other forms too
  like maybe X1 = X2 + 1 if you if these
  variables are taking on numerical values
  in their domain for example the types of
  constraints are going to vary based on
  the types of problems and constraint
  satisfaction shows up all over the place
  as well in any situation where we have
  variables that are subject to particular
  constraints so one popular uh game is
  sidoku for example this 9 by9 grid where
  you need to fill in numbers into each of
  these cells but you don't want to make
  sure there's you want to make sure
  there's never a duplicate number in any
  row or in any column or in any grid of
  3x3 cells for example so what might this
  look like as a constraint satisfaction
  problem well my variables are all of the
  empty squares in the puzzle so
  represented here as just like an X comma
  y coordinate for example as all of the
  squares where I need to plug in a value
  where I don't know what value it should
  take on the domain is just going to be
  all the numbers from one through n any
  value that I could fill in to one of
  these cells so that is going to be the
  domain for each of these variables and
  then the constraints are going to be of
  the form like this cell can't equal to
  this cell can't be equal to this cell
  can't be all these need to be different
  for example and same for all of the rows
  and the columns and the 3X3 squares as
  well so those constraints are going to
  enforce what values are actually allowed
  and we can formulate the same idea in
  the case of this exam scheduling problem
  where the variables we have are the
  different courses a up through G the
  domain for each of these variables is
  going to be Monday Tuesday and Wednesday
  those are the possible values each of
  the variables can take on that in this
  cas just represent when is the exam for
  that class and then the constraints are
  of this form a is not equal to B A is
  not equal to C meaning A and B can't
  have an exam on the same day A and C
  can't have an exam on the same day or
  more formally these two variables cannot
  take on the same value within their
  domain so that then is this formulation
  of a constraint satisfaction problem
  that we can begin to use to try and
  solve this problem and constraints can
  come come in a number of different forms
  there are hard constraints which are
  constraints that must be satisfied for a
  correct solution so something like in
  the sodoku puzzle you cannot have this
  cell and this cell that are in the same
  row take on the same value that is a
  hard constraint but problems can also
  have soft constraints where these are
  constraints that express some notion of
  preference that uh maybe A and B can't
  have an exam on the same day but maybe
  someone has a preference that A's exam
  is earlier than B's exam doesn't need to
  be the case but some expression
  that some solution is better than
  another solution and in that case you
  might formulate the problem as trying to
  optimize for maximizing people's
  preferences you want people's
  preferences to be satisfied as much as
  possible in this case though we'll
  mostly just deal with hard constraints
  constraints that must be met in order to
  have a correct solution to the problem
  so we want to figure out some assignment
  of of these variables to their
  particular values that is ultimately
  going to give us a solution to the
  problem by allowing us to assign some
  day to each of the classes such that we
  don't have any conflicts between classes
  so it turns out that we can classify the
  constraints in a constraint satisfaction
  problem into a number of different
  categories uh the first of those
  categories are perhaps the simplest of
  the types of constraints which are known
  as unary constraints where a unary
  constraint is a constraint that just
  involves a single variable for example a
  unary constraint might be something like
  a does not equal Monday meaning course a
  cannot have its exam on Monday if for
  some reason reason the instructor for
  the course isn't available on Monday you
  might have a constraint in your problem
  that looks like this something that just
  has a single variable a in it and maybe
  says a is not equal to Monday or a is
  equal to something or in the case of
  numbers greater than or less than
  something a constraint that just has one
  variable we consider to be a unary
  constraint and this is in contrast to
  something like a binary constraint which
  is a constraint that involves two
  variables for example so this would be a
  constraint like the ones we were looking
  at before something like a does not
  equal B
  is an example of a binary constraint
  because it is a constraint that has two
  variables involved in an A and B and we
  represented that using some uh Arc or
  some Edge that connects variable a to
  variable B and using this knowledge of
  okay what is a unary constraint what is
  a binary constraint there are different
  types of things we can say about a
  particular constraint satisfaction
  problem and one thing we can say is we
  can try and make the problem node
  consistent so what does node consistency
  mean node consistency means we have all
  of the V values in a variable's domain
  satisfying that variable's unary
  constraints so for each of the variables
  inside of our constraint satisfaction
  problem if all of the values satisfy the
  unary constraints for that particular
  variable we can say that the entire
  problem is node consistent or we can
  even say that a particular variable is
  node consistent if we just want to make
  one node uh consistent within itself so
  what does that actually look like let's
  look at now a simplified example example
  where instead of having a whole bunch of
  different classes we just have two
  classes A and B Each of which has an
  exam on either Monday or Tuesday or
  Wednesday so this is the domain for the
  variable a and this is the domain for
  the variable B and now let's imagine we
  have these constraints a not equal to
  Monday B not equal to Tuesday B not
  equal to Monday a not equal to B so
  those are the constraints that we have
  on this particular problem and what we
  can now try to do is enforce node
  consistency and node consistency just
  means we make sure that all of the
  values for any variable's domain satisfy
  its unary constraints and so we could
  start by trying to make node a uh node
  consistent like is it consistent does
  every value inside of A's domain satisfy
  its unary constraints well initially
  we'll see that Monday does not satisfy
  A's unary constraints because we have a
  constraint a unary constraint here that
  a is not equal to Monday but Monday is
  still in A's domain and so this is
  something that is not node consistent
  because we have Monday in the domain but
  this is not a valid value for this
  particular node and so how do we make
  this node consistent well to make the
  node node consistent what we'll do is
  we'll just go ahead and remove Monday
  from A's domain now a can only be on
  Tuesday or Wednesday because we had this
  constraint that said a is not equal to
  Monday and at this point now a is node
  consistent for each of the values that a
  can take on Tuesday and Wednesday there
  is no constraint that is a unary
  constraint that conflicts with that idea
  there is no constraint that says that a
  can't be Tuesday there's no unary
  constraint that says that a cannot be on
  Wednesday and so now we can turn our
  attention to b b also has a domain
  Monday Tuesday and Wednesday and we can
  begin to see whether those variables uh
  satisfy the unary constraints as well
  well here's the unary constraint B is
  not equal to Tuesday and that does not
  appear to be satisfied by this domain of
  Monday Tuesday and Wednesday because
  Tuesday this possible value that the
  very B could take on is not consistent
  with this unary constraint that b is not
  equal to Tuesday so to solve that
  problem we'll go ahead and remove
  Tuesday from B's domain now B's domain
  only contains Monday and Wednesday but
  as it turns out there's yet another
  unary constraint that we placed on the
  variable B which is here B is not equal
  to Monday that means that this value
  Monday inside of B's domain is not
  consistent with B's unary constraints
  because we have a constraint that says
  the B cannot be Monday and so we can
  remove Monday from B's domain and now
  we've made it through all of the unary
  constraints we've not yet considered
  this constraint which is a binary
  constraint but we've considered all of
  the unary constraints all of the
  constraints that involve just a single
  variable and we've made sure that every
  node is consistent with those unary
  constraints we can say that now we have
  enforced node consistency that for each
  of these possible nodes we can pick any
  of these values in the domain and there
  won't be a unary constraint that is
  violated as a result of it so node
  consistency is fairly easy to enforce we
  just take each node make sure the values
  in the domain satisfy the unary
  constraints where things get a little
  bit more interesting is when we consider
  different types of consistency something
  like Arc consistency for example an arc
  consistency refers to when all the
  values in a variable's domain satisfy
  the variable's binary constraints so
  when we're looking at trying to make a
  Arc consistent we're no longer just
  considering the unary constraints that
  involve a we're trying to consider all
  of the binary constraints that involve a
  as well so any Edge that connects a to
  another variable inside of that
  constraint graph that we were taking a
  look at before put a little bit more
  formally Arc consistency and Arc really
  is just another word for like an edge
  that connects two of these nodes inside
  of our constraint graph we can Define
  arc consistency a little more precisely
  like this in order to make some variable
  X Arc consistent with respect to some
  other variable y we need to remove any
  element from X's domain uh to make sure
  that every choice for X every choice in
  X's domain has a possible choice for y
  so put another way if I have a variable
  X and I want to make X Arc consistent
  then I'm going to look at all of the
  possible values that X can take on and
  make sure that for all of those possible
  values there is still some choice that I
  can make for y if there's some Arc
  between X and Y to make sure that y has
  a possible option that I can choose as
  well so let's look at an example of that
  going back to this example but from
  before we enforced node consistency
  already by saying that a can only be on
  Tuesday or Wednesday because we knew
  that a could not be on Monday and we
  also said that B's only domain only
  consists of Wednesday because we know
  that b does not equal Tuesday and also B
  does not equal Monday so now let's begin
  to consider Arc consistency let's try
  and make a Arc consistent with b and
  what that means is to make a Arc
  consistent with respect to b means that
  for any choice we make in A's domain
  there is some choice we can make in B's
  domain that is going to be consistent
  and we can try that for a we can choose
  Tuesday as a possible value for a if I
  choose Tuesday for a is there a value
  for B that satisfies the binary
  constraint well yes B Wednesday would
  satisfy this constraint that a does not
  equal B Because Tuesday does not equal
  Wednesday
  however if we chose Wednesday for a well
  then there is no choice in B's domain
  that satisfies this binary constraint
  there is no way I can choose something
  for B that satisfies a does not equal B
  because I know B must be Wednesday and
  so if ever I run into a situation like
  this where I see that here is a possible
  value for a such that there is no choice
  of value for B that satisfies the binary
  constraint well then this is not Arc
  consistent and to make it Arc consistent
  I would need to take Wednesday and
  remove it from A's domain CU Wednesday
  was not going to be a possible choice I
  could make for a because it wasn't
  consistent with this binary constraint
  for B there was no way I could choose
  Wednesday for a and still have an
  available Solution by choosing something
  for b as well so here now I've been able
  to enforce Arc consistency and in doing
  so I've actually solved this entire
  problem that given these constraints
  where A and B can have exams on either
  Monday or Tuesday or Wednesday the only
  solution as it would appear is that A's
  exam must be on Tuesday and B's exam
  must be on Wednesday that is the only
  option available to me so if we want to
  apply our consistency to a larger graph
  not just looking at one particular pair
  of our consistency uh there are ways we
  can do that too and we can begin to
  formalize what the pseudo code would
  look like for trying to write an
  algorithm that enforces art consistency
  and we'll start by defining a function
  called revise revise is going to take as
  input a CSP otherwise known as a
  constraint satisfaction problem and also
  two variables X and Y and what Revis is
  going to do is it is going to make X Arc
  consistent with respect to Y meaning
  remove anything from X's domain that
  doesn't allow for a possible option for
  y how does this work well we'll go ahead
  and first keep track of whether or not
  we've made a revision revise is
  ultimately going to return true or false
  it'll return true in the event that we
  did make a revision to X's domain it'll
  return false if we didn't make any
  change to X's domain and we'll see in a
  moment why that's going to be helpful
  but we start by saying revised equals
  false we haven't made any changes then
  we'll say all right let's go ahead and
  loop over all of the possible values in
  X's domain so Loop over X's domain for
  each little X in X's domain I want to
  make sure that for each of those choices
  I have some available choice in y that
  satisfies the binary constraints that
  are defined inside of my CSP inside of
  my constraint satisfaction problem so if
  ever it's the case that there is no
  value Y in y's domain that satisfies the
  constraint for X and
  Y well if that's the case that means
  that this value X shouldn't be in X's
  domain so I'll go ahead and delete X
  from X's domain and I'll set revised
  equal to true because I did change X's
  domain I changed X's domain by removing
  Little X and I removed Little X because
  it wasn't art consistent there was no
  way I could choose a value for y that
  would satisfy this XY constraint so in
  this case we'll go ahead and set revised
  equal true and we'll do this again and
  again for every value in X's domain
  sometimes it might be fine in other
  cases it might not allow for a possible
  choice for y in which case we need to
  remove this value from X's domain and at
  the end we just return revised to
  indicate whether or not we actually made
  a change so this function then this
  revised function is effectively an
  implementation of what you saw me do
  graphically a moment ago and it makes
  one variable X Arc consistent with
  another variable in this case y but
  generally speaking when we want to
  enforce Arc consistency we'll often want
  to enforce Arc consistency not just for
  a single Arc but for the entire
  constraint satisfaction problem and it
  turns out there's an algorithm to do
  that as well and that algorithm is known
  as AC3 AC3 takes a constraint
  satisfaction problem and it enforces art
  consistency across the entire problem
  how does it do that well it's going to
  basically maintain a q or basically just
  a line of all of the arcs that it needs
  to make consistent and over time we
  might remove things from that queue as
  we begin dealing with Arc consistency
  and we might need to add things to that
  que as well if there are more things we
  need to make Arc consistent so we'll go
  ahead and start with a q that contains
  all of the arcs in the constraint
  satisfaction problem all of the edges
  that connect two nodes that have some
  sort of binary constraint between them
  and now as as long as the Q is not empty
  there is work to be done the Q is all of
  the things that we need to make Arc
  consistent so as long as the Q is not
  empty there's still things we have to do
  what do we have to do well we'll start
  by deqing from the que remove something
  from the Q and strictly speaking it
  doesn't need to be a q but a q is a
  traditional way of doing this we'll DQ
  from the Q and that'll give us an arc X
  and Y these two variables where I would
  like to make X Arc consistent with Y so
  so how do we make X Art consistent with
  Y well we can go ahead and just use that
  revised function that we talked about a
  moment ago we call the Revis function
  passing as input the constraint
  satisfaction problem and also these
  variables X and Y because I want to make
  X Arc consistent with Y in other words
  remove any values from X's domain that
  don't leave an available option for y
  and recall what does revised return well
  it returns true if we actually made a
  change if we removed something from X's
  domain
  because there wasn't an available option
  for y for example and it returns false
  if we didn't make any change to X's
  domain at all and it turns out if
  revised returns false if we didn't make
  any changes well then there's not a
  whole lot more work to be done here for
  this Arc we can just move ahead to the
  next Arc that's in the Q but if we did
  make a change if we did reduce X's
  domain by removing values from X's
  domain well then what we might realize
  is that this creates potential problems
  later on that it might mean that some
  Arc that was Arc consistent with X that
  node might no longer be Arc consistent
  with X because while there used to be an
  option that we could choose for X now
  there might not be because now we might
  have removed something from X that was
  necessary for some other Arc to be Arc
  consistent and so if ever we did revise
  X's domain we're going to need to add
  some things to the Q some additional
  arcs we might want to check how do we do
  that well first thing we want to check
  is to make sure that X's domain is not
  zero if X's domain is zero that means
  there are no available options for X at
  all and that means that there's no way
  you can solve the constraint
  satisfaction problem if we've removed
  everything from X's domain we'll go
  ahead and just return false here to
  indicate there's no way to solve the
  problem because there's nothing left in
  X's domain but
  otherwise if there are things left in
  X's domain but fewer things than before
  well then what we'll do is we'll Loop
  over each variable Z that is in all of
  x's neighbors except for y why we are
  handled but we'll consider all of x's
  others neighbors and ask ourselves all
  right will that Arc from each of those
  Z's to X that Arc might no longer be Arc
  consistent because while for each Z
  there might have been a possible option
  we could choose for X to correspond with
  each of these possible values now there
  might not be because we removed some
  elements from X's domain and so what
  we'll do here is we'll go ahead and end
  Q adding something to the Q This Arc ZX
  for all of those neighbors Z we need to
  add back some arcs to the Que in order
  to continue to enforce Arc consistency
  at the very end if we make it through
  all this process then we can return
  true but this now is AC3 this algorithm
  for enforcing Arc consistency on a
  constraint satisfaction problem and the
  big idea is really just keep track of
  all of the arcs that we might need to
  make Arc consistent make it Arc
  consistent by calling the revise
  function and if we did revise it then
  there are some new arcs that might need
  to be added to the Que in order to make
  sure that everything is still Arc
  consistent even after we've removed some
  of the elements from a particular
  variable's domain so what then would
  happen if we tried to enforce Arc
  consistency on a graph like this on a
  graph where each of these variables has
  a domain of Monday Tuesday and Wednesday
  well it turns out that by enforcing art
  consistency on this graph while it can
  solve some types of problems nothing
  actually changes here for any particular
  Arc just considering two variables
  there's always a way for me to just for
  any of the choices I make for one of
  them make a choice for the other one
  because there are three options and I
  just need the two to be different from
  each other so this is actually quite
  easy to just take an arc and just
  declare that it is Arc consistent
  because if I pick you know Monday for D
  then I just pick something that isn't
  Monday for B in art consistency we only
  consider consistency between a binary
  constraint between two nodes and we're
  not really considering all of the rest
  of the nodes yet so just using AC3 the
  enforcement of art consistency that can
  sometimes have the effect of reducing
  domains to make it easier to find
  Solutions but it will not always
  actually solve the problem we might
  still need to somehow search to try and
  find a solution and we can use classical
  traditional search algorithms to try to
  do so you'll recall that a search
  problem generally consists of these
  parts we have some initial State some
  actions a transition model that takes me
  from one state to another state a goal
  test to tell me is have I satisfied my
  objective correctly and then some path
  cost function because in the case of
  like maze solving I was trying to get to
  my goal as quickly as possible so you
  could formulate a CSP or a constraint
  satisfaction problem as one of these
  types of search problems the initial
  state will just be an empty assignment
  where an assignment is just a way for me
  to assign any particular variable to any
  particular value so if an empty
  assignment is no variables are assigned
  to any values yet then the acttion I can
  take is adding some new variable equals
  value pair to that assignment saying for
  this assignment let me add a new value
  for this variable and the transition
  model just defines what happens when you
  take that action you get a new
  assignment that has that variable equal
  to that value inside of it the goal test
  is just checking to make sure all the
  variables have been assigned and making
  sure all the constraints have been
  satisfied uh and the path cost function
  sort of irrelevant I don't really care
  about what the path really is I just
  care about finding some assignment that
  actually satisfies all of the
  constraints so really all the paths have
  the same cost I don't really care about
  the path to the goal I just care about
  the solution itself much as we've talked
  about now
  before the problem here though is that
  if we just implement this naive search
  algorithm just by implementing like
  breadth first search or depth first
  search this is going to be very very
  inefficient and there are ways we can
  take advantage of efficiencies in the
  structure of a constraint satisfaction
  problem itself and one of the key ideas
  is that we can really just order these
  variables and it doesn't matter what
  order we assign variables in the
  assignment AAL 2 and then bals 8 is
  identical to the assignment of Bal 8 and
  then AAL 2 switching the order doesn't
  really change anything about the
  fundamental nature of that assignment
  and so there are some ways that we can
  try and revise this idea of a search
  algorithm to apply it specifically for a
  problem like a constraint satisfaction
  problem and it turns that the search
  algorithm will generally use when
  talking about constraint satisfaction
  problems is something known as
  backtracking search and the big idea of
  backtracking search is we'll go ahead
  and make assignments to from variables
  to values and if ever we get stuck we
  arrive at a place where there is no way
  we can make any forward progress while
  still preserving the constraints that we
  need to enforce we'll go ahead and
  backtrack and try something else instead
  so the very basic sketch of what
  backtracking search looks like is it
  looks like this function called
  backtrack that takes us input an
  assignment and a constraint satisfaction
  problem so initially we don't have any
  assigned variables so when we begin
  backtracking search this assignment is
  just going to be the empty assignment
  with no variables inside of it but we'll
  see later this is going to be a
  recursive function so backtrack takes us
  input the assignment and the
  problem if the assignment is complete
  meaning all of the variables have been
  assigned we just return that assignment
  that of course won't be true initially
  because we start with an empty
  assignment but over time we might add
  things to that assignment so if ever the
  assignment actually is complete then
  we're done then just go ahead and return
  that assignment but otherwise there's
  some work to be done so what we'll need
  to do is Select an unassigned variable
  for this particular problem so we need
  to take the problem look at the
  variables that have already been
  assigned and pick a variable that has
  not yet been assigned and I'll go ahead
  and take that variable and then I need
  to consider all of the values in that
  variable's domain so I'll go ahead and
  call this domain values function we'll
  talk a little more about that later that
  takes a variable and just gives me back
  an ordered list of all the values in its
  domain so I've taken a random unselected
  variable I'm going to Loop over all of
  the possible values and the idea is let
  me just try all of these values as
  possible values for the variable so if
  the value is consistent with the
  assignment so far it doesn't violate any
  of the constraints well then let's go
  ahead and add variable equals value to
  the assignment because it's so far
  consistent and now let's recursively
  call backtrack to try and make the rest
  of the assignments also consistent so I
  go ahead and call Backtrack on this new
  assignment that I've added this new the
  variable equals value to and now I
  recursively call backtrack and see what
  the result is and if the result isn't a
  failure well then let me just return
  that
  result and otherwise what else could
  happen well if it turns out the result
  was a failure well well then that means
  this value was probably a bad choice for
  this particular variable because when I
  assigned this variable equal to that
  value eventually down the road I ran
  into a situation where I violated
  constraints there was nothing more I
  could do so now I'll remove variable
  equals value from the assignment
  effectively backtracking to say all
  right that value didn't work let's try
  another value
  instead and then at the very end if we
  were never able to return a complete
  assignment we'll just go ahead and
  return failure because that means that
  none of the value worked for this
  particular
  variable this now is the idea for
  backtracking search to take each of the
  variables try values for them and
  recursively try backtracking search see
  if we can make progress and if ever we
  run into a dead end we run into a
  situation where there is no possible
  value we can choose that satisfies the
  constraints we return failure and that
  propagates up and eventually we make a
  different Choice by going back and
  trying something else
  instead so let's put this algorithm into
  practice let's actually try and use back
  tracking search to solve this problem
  now where I need to figure out how to
  assign each of these courses to an exam
  slot on Monday or Tuesday or Wednesday
  in such a way that it satisfies these
  constraints that each of these edges
  mean those two classes cannot have an
  exam on the same day so I can start by
  just like starting at a node doesn't
  really matter which I start with but in
  this case I'll just start with a and
  I'll ask a question like all right let
  me Loop over the values in the domain
  and maybe in this case I'll just start
  with Monday and say all right let's go
  ahead and assign a to Monday we'll just
  go in order Monday Tuesday Wednesday and
  now let's consider node B all right so
  I've made an assignment to a so I
  recursively call backtrack with this new
  part of the assignment now I'm looking
  to pick another unassigned variable like
  B and I'll say all right maybe I'll
  start with Monday because that's the
  very first value in B's domain and I ask
  all right does Monday violate any
  constraints and it turns out yes it does
  it violates this constraint here between
  A and B Because A and B are now both on
  Monday and that doesn't work because B
  can't be on the same day as a so that
  doesn't work so we might Instead try
  Tuesday try the next value in B's domain
  and is that consistent with the
  assignment so far well yeah B Tuesday a
  Monday that is consistent so far because
  they're not on the same day so that's
  good now we can recursively call
  backtrack try again pick another
  unassigned variable something like d and
  say all right let's go through its
  possible values is Monday consistent
  with this assignment well yes it is B
  and D are on different days Monday
  versus Tuesday and a and b are also on
  different days Monday versus Tuesday so
  that's fine so far too we'll go ahead
  and try again maybe we'll go to this
  variable here e say can we make that
  consistent let's go through the possible
  values we've recursively called
  backtrack we might start with Monday and
  say all right that's not consistent
  because d and e now have exams on the
  same day so we might try Tuesday instead
  going to the next one ask is that
  consistent well no it's not because B
  and E those have exams on the same day
  and so we try all right is Wednesday
  consistent and in turn that all right
  yes it is Wednesday is consistent
  because d and e now have exams on
  different days b and e now have exams on
  different days all seems to be well so
  far I recursively call back track select
  another unassigned variable we'll say
  maybe choose C this time and say all
  right let's try the Val values that c
  could take on let's start with Monday
  and it turns out that's not consistent
  because now A and C both have exams on
  the same day so I Tred Tuesday and say
  that's not consistent either because B
  and C now have exams on the same day and
  then I say all right let's go ahead and
  try uh Wednesday but that's not
  consistent either because c and e each
  have exams on the same day too so now
  we've gone through all the possible
  values for C Monday Tuesday and
  Wednesday and none of them are
  consistent there is no way we can have a
  consistent assignment backtrack in this
  case will return
  failure and so then we'd say all right
  we have to backtrack back to here well
  now for E we've tried all of Monday
  Tuesday and Wednesday and none of those
  work because Wednesday which seemed to
  work turned out to be a failure so that
  means there's no possible way we can
  assign e so that's a failure too we have
  to go back up to D which means that
  Monday assignment to D that must be
  wrong we must try something else so we
  can try all right what if D is two What
  If instead of Monday we try Tuesday
  Tuesday it turns out is not consistent
  because B and D now have an exam on the
  same day but Wednesday as it turns out
  works and now we can begin to make some
  forward progress again we go back to e
  and say all right which of these values
  works Monday turns out to work by not
  violating any constraints then we go up
  to C now Monday doesn't work because it
  violates a constraint uh violates two
  actually uh Tuesday doesn't work because
  it violates a constraint as well but
  Wednesday does work then we can go to
  the next variable F and say all right
  does Monday work well no it violates a
  constraint but Tuesday does work and
  then finally we can look at the last
  variable G recursively calling backtrack
  one more time Monday is inconsistent
  that violates a constraint Tuesday also
  violates a constraint uh but Wednesday
  that doesn't violate a constraint
  and so now at this point we recursively
  call backtrack one last time we now have
  a satisfactory assignment of all of the
  variables and at this point we can say
  that we are now done we have now been
  able to successfully assign a variable
  or a value to each one of these
  variables in such a way that we're not
  violating any constraints we're going to
  go ahead and have classes A and E have
  their exams on Monday classes B and F
  can have their exams on Tuesday and
  classes C D and G can have their exams
  on Wednesday and there's no violated
  constraints that might come up there so
  that then was a graphical look at how
  this might work let's now take a look at
  some code we could use to actually try
  and solve this problem as well so here
  I'll go ahead and go into uh the
  scheduling
  directory we're here now we'll start by
  looking at schedule 0. Pi where here I
  Define a list of variables a b c d e FG
  those are all the different
  classes then underneath that I Define my
  list of constraints so constraint A and
  B that is a constraint because they
  can't be on the same day likewise A and
  C B and C so on and so forth enforcing
  those exact same
  constraints and here then is what the
  backtracking function might look like
  first if the assignment is complete if
  I've made an assignment of every
  variable to a value go ahead and just
  return that
  assignment then we'll select an
  unassigned variable from that assignment
  then for each of the possible values the
  domain Monday Tuesday Wednesday let's go
  ahead and create a new assignment that
  assigns the variable to that value I'll
  call this consistent function which I'll
  show you in a moment that just checks to
  make sure this new assignment is
  consistent but if it is consistent we'll
  go ahead and call backtrack to go ahead
  and continue trying to run backtracking
  search uh and as long as the result is
  not none meaning it wasn't a failure we
  can go ahead and return that result but
  if we make it through all the values and
  nothing works then it is a failure
  there's no solution we go ahead and
  return none here what do these functions
  do select unassigned variable is just
  going to choose a variable not yet
  assigned uh so it's going to Loop over
  all the variables and if it's not
  already assigned we'll go ahead and just
  return that variable and what does the
  consistent function do well the
  consistent function goes through all the
  constraints uh and if we have a
  situation where uh We've assigned both
  of those values to variables but they
  are the same well then that is a
  violation of the constraint in which
  case will return false uh but if nothing
  is inconsistent then the assignment is
  consistent and will return
  true and then all the program does is it
  calls Backtrack on an empty assignment
  an empty dictionary that has no variable
  assigned to no values yet uh save that
  inside a solution and then print out
  that solution so by running this now I
  can run
  python schedule 0. pi and what I get as
  a result of that is an assignment of all
  these variables to values and turns out
  we assigned a to Monday as we would
  expect B to Tuesday C to Wednesday
  exactly the same type of thing we were
  talking about before an assignment of
  each of these variables to values that
  doesn't violate any constraints and I
  had to do a fair amount of work in order
  to implement this idea myself I had to
  write the backtrack function that went
  ahead and went through this process of
  recursively trying to do this
  backtracking search but it turns out the
  constraint satisfaction problems are so
  popular that there exist many libraries
  that already implement this type of idea
  again as with before the specific
  library is not as important as the fact
  that libraries do exist this is just one
  example of a python constraint Library
  where now rather than having to do all
  the work from scratch inside of schedule

1. piy I'm just taking advantage of a
   library that implements a lot of these
   ideas already so here I create a new
   problem add variables to it with
   particular domains I add a whole bunch
   of these individual constraints where I
   call add constraint and pass in a
   function describing what the constraint
   is it and the constraint basically says
   a function that takes two variables X
   and Y and makes sure that X is not equal
   to Y enforcing the idea that these two
   classes cannot have exams on the same
   day and then for any constraint
   satisfaction problem I can call get
   solutions to get all the solutions to
   that problem and then for each of those
   Solutions print out what that solution
   happens to be and if I run python
   schedule 1. pi and I'll see there
   actually a number of different solutions
   that can be used to solve the problem uh
   there in fact six different solutions
   assignments of variables to values that
   will give me a satisfactory answer to
   this constraint satisfaction problem so
   this then was an implementation of a
   very basic backtracking search method
   where really we just went through each
   of the variables picked one that wasn't
   assigned tried the possible values the
   variable could take on and then if it
   was if it worked if it didn't violated
   any constraints then we kept trying
   other variables and if ever we hit a
   dead end we had to backtrack but
   ultimately we might be able to be a
   little bit more intelligent about how we
   do this in order to improve the
   efficiency of how we solve these sorts
   of problems and one thing we might
   imagine trying to do is going back to
   this idea of inference using the
   knowledge we know to be able to draw
   conclusions in order to make the rest of
   the problem solving process a little bit
   easier and let's now go back to where we
   got stuck in this problem the first time
   when we were solving this constraint
   satisfaction problem we dealt with b and
   then we went on to D and we went ahead
   and just assign D to Monday cuz that
   seemed to work with the assignment so
   far it didn't violate any constraints
   but it turned out that later on that
   choice turned out to be a bad one that
   that choice wasn't consistent with the
   rest of the values that we could take on
   here and the question is is there
   anything we could do to avoid getting
   into a situation like this avoid trying
   to go down a path that's ultimately not
   going to lead anywhere by taking
   advantage of knowledge that we have
   initially and it turns out we do have
   that kind of knowledge we can look at
   just the structure of this graph so far
   and we can say that right now C's domain
   for example contains values Monday
   Tuesday and Wednesday and based on those
   values we can say that this graph is not
   Arc consistent recall that Arc
   consistency is all about making sure
   that for every possible value for a
   particular node that there is some other
   value that we are able to choose and as
   we can see here Monday and Tuesday are
   not going to be possible values that we
   can choose for C not going to be
   consistent um with a node like B for
   example because B is equal to Tuesday
   which means that c cannot be Tuesday and
   because a is equal to Monday C also
   cannot be Monday so using that
   information by making C Arc consistent
   with A and B we could remove Monday and
   Tuesday from C's domain and just leave C
   with Wednesday for example and if we
   continued to try and enforce art
   consistency we'd see there are some
   other conclusions we can draw as well we
   see that B's only option is Tuesday and
   C's only option is Wednesday and so if
   we want to make e Arc consistent well e
   can't be Tuesday because that wouldn't
   be ar consistent with b and e can't be
   Wednesday because that wouldn't be ar
   consistent with C so we can go ahead and
   say e and just set that equal to Monday
   for example and then we can begin to do
   this process again and again that in
   order to make D Arc consistent with b
   and e then D would have to be Wednesday
   that's the only possible option and
   likewise we can make the same judgments
   for f and g as well and turns out that
   without having to do any additional
   search just by enforcing Arc consistency
   we were able to actually figure out what
   the assignment of all the variables
   should be without needing to backtrack
   at all and the way we did that is by
   interleaving this search process and the
   inference step by this step of trying to
   enforce AR consistency and the algorithm
   to do this is often called just the
   maintaining Arc consistency algorithm
   which just enforces Arc consistency
   every time we make a new assignment of a
   value to an existing variable so
   sometimes we can enforce art consistency
   using that AC3 algorithm at the very
   beginning of the problem before we even
   begin searching in order to limit the
   domain of the variables in order to make
   it easier to search but we can also take
   advantage of the interleaving of
   enforcing AR consistency with search
   such that every time in the search
   process we make a new assignment we go
   ahead and enforce Arc consistency as
   well to make sure that we're just
   eliminating possible values from domains
   whenever possible possible and how do we
   do this well this is really equivalent
   to just every time we make a new
   assignment to a variable X we'll go
   ahead and call our AC3 algorithm this
   algorithm that enforces art consistency
   on a constraint satisfaction problem and
   we go ahead and call that starting it
   with a Q not of all of the arcs which we
   did originally but just of all of the
   arcs that we want to make Arc consistent
   with X that's thing that we have just
   made an assignment to so all arcs YX
   where y
   is a neighbor of X something that shares
   a constraint with X for example and by
   maintaining art consistency in the
   backtracking search process we can
   ultimately make our search process a
   little bit more efficient and so this is
   the re revised version of this backtrack
   function same as before the changes here
   highlighted in yellow every time we add
   a new variable equals value to our
   assignment we'll go ahead and run this
   inference procedure which might do a
   number of different things but one thing
   it could do is call the maintaining art
   consistency algorithm to make sure we're
   able to enforce AR consistency on the
   problem and we might be able to draw new
   inferences as a result of that process
   get new guarantees of this variable
   needs to be equal to that value for
   example that might happen one time it
   might happen many times and so long as
   those inferences are not a failure as
   long as they don't lead to a situation
   where there's no possible way to make
   forward progress well then we can go
   ahead and add those inferences those new
   knowledge that new pieces of knowledge I
   know about what variables should be
   assigned to what values I can add those
   to the assignment in order to more
   quickly make forward progress by taking
   advantage of information that I can just
   deduce information I know based on the
   rest of the structure of the constraint
   satisfaction problem and the only other
   change I'll need to make now is if it
   turns out this value doesn't work well
   then down here I'll go ahead and need to
   remove not only variable equals value
   but also any of those inferences that I
   made remove that from the assignment as
   well and so here then we're often able
   to solve the problem by backtracking
   less than we might originally have
   needed to just by taking advantage of
   the fact that every time we make a new
   assignment of one variable to one value
   that might reduce the domains of other
   variables as well and we can use that
   information to begin to more quickly
   draw conclusions in order to try and
   solve the problem more efficiently as
   well and it turns out there are other
   heris we can use to try and improve the
   efficiency of our search process as well
   and it really boils down to a couple of
   these functions that I've talked about
   but we haven't really talked about how
   they're working and one of them is this
   function here select unassigned variable
   where we're selecting some variable in
   the constraint satisfaction problem that
   has not yet been assigned so far I've
   sort of just been selecting variables
   randomly just like picking one variable
   and one unassigned variable in order to
   decide all right this is the variable
   that we're going to assign next and then
   going from there but it turns out that
   by being a little bit intelligent by
   following certain heris sixs we might be
   able to make the search process much
   more efficient just by choosing very
   carefully which variable we should
   explore next so some of those theistic
   include the minimum remaining values or
   mrv heris which generally says that if I
   have a choice between which variable I
   should select I should select the
   variable with the smallest domain the
   variable that has the fewest number of
   remaining values left with the idea
   being if there are only two remaining
   values left well I may as well like
   prune one of them very quickly in order
   to get to the other because one of those
   two has got to be the solution if a
   solution does
   exist sometimes minimum remaining values
   might not give a conclusive result if
   all the nodes have the same number of
   remaining values for example and in that
   case another heuristic that can be
   helpful to look at is the degree
   heuristic the degree of a node is the
   number of nodes that are attached to
   that node the number of nodes that are
   constrained by that particular node and
   if you imagine which variable should I
   choose should I choose a variable that
   has a high degree that is connected to a
   lot of different things or a variable
   with a low degree that is not connected
   to a lot of different things well it can
   often make sense to choose the variable
   that has the highest degree that is
   connected to the most other nod as the
   thing you would search first why is that
   the case well it's because by choosing a
   variable with a high degree that is
   immediately going to constrain the rest
   of the variables more and it's more
   likely to be able to eliminate large
   sections of the state space that you
   don't need to search through at all so
   what could this actually look like let's
   go back to this search problem here in
   this particular case I've made an
   assignment here I've made an assignment
   here and the question is what should I
   look at next and according to the
   minimum remaining values theistic what I
   should choose as the variable that has
   the fewest remaining possible values and
   in this case that's this node here node
   C that only has one variable left in
   this domain which in this case is
   Wednesday which is a veryable re very
   reasonable choice of a next assignment
   to make because I know it's the only
   option for example I know that the only
   possible option for C is Wednesday so I
   may as well make that assignment and
   then potentially explore the rest of the
   space after that but meanwhile at the
   very start of the problem when I didn't
   have any knowledge of what nodes should
   have what values yet I still had to pick
   what node should be the first one that I
   try and assign a value to and I
   arbitrarily just chose the one at the
   top node a originally but we can be more
   intelligent about that we can look at
   this particular graph all of them have
   domains of the same size domain of size
   three so minimum reing values doesn't
   really help us there but we might notice
   that node e has the highest degree it is
   connected to the most things and so
   perhaps it makes sense to begin our
   search rather than starting at node a at
   the very top start with the node with
   the highest degree start by searching
   from node e because from there that's
   going to much more easily allow us to
   enforce the constraints that are nearby
   eliminating large portions of the search
   space that I might not need to search
   through and in fact by starting with e
   we can immediately then assign other
   variables and following that we can
   actually assign ass the rest of the
   variables without needing to do any
   backtracking at all even if I'm not
   using this inference procedure just by
   starting with a node that has a high
   degree that is going to very quickly
   restrict the possible values that other
   nodes can take on so that then is how we
   can go about selecting an unassigned
   variable in a particular order rather
   than randomly picking a variable if
   we're a little bit intelligent about how
   we choose it we can make our search
   process much much more efficient by
   making sure we don't have to search
   through portions of the search space
   that ultimately are going to matter the
   other variable we haven't really talked
   about the other function here is this
   domain values function this domain
   values function that takes a variable
   and gives me back a sequence of all of
   the values inside of that variable's
   domain the naive way to approach it is
   what we did before which is just go in
   order go Monday then Tuesday then
   Wednesday but the problem is that going
   in that order might not be the most
   efficient order to search it that
   sometimes it might be more efficient to
   choose values that are likely to be
   soled
   first and then go to other values now
   how do you ass whether a value is Liker
   to lead to a solution or less likely to
   lead to a solution well one thing you
   can take a look at is how many
   constraints get added how many things
   get removed from domains as you make
   this new assignment of a variable to
   this particular value and theistic we
   can use here is the least constraining
   value heuristic which is the idea that
   we should return variables in order
   based on the number of choices that are
   ruled out for neighboring values and I
   want to start with the least
   constraining value the value that rules
   out the Le fewest possible options and
   the idea there is that if all I care
   about doing is finding a solution if I
   start with a value that rules out a lot
   of other choices I'm ruling out a lot of
   possibilities that maybe is going to
   make it less likely that this particular
   choice leads to a solution whereas on
   the other hand if I have a variable and
   I start by choosing a value that doesn't
   rule out very much well then I still
   have a lot of space where there might be
   a solution that I could ultimately find
   and this might seem a little bit
   counterintuitive and a little bit at
   odds with what we were talking about
   before where I said when you're picking
   a variable you should pick the variable
   uh that is going to have the fewest
   possible values remaining but here I
   want to pick the value for the variable
   that is the least constraining but the
   general idea is that when I am picking a
   variable I would like to prune large
   portions of the search Space by just
   choosing a variable that is going to
   allow me to quickly eliminate possible
   options whereas here within a particular
   variable as I'm considering values that
   that variable could take on I would like
   to just find a solution and so what I
   want to do is ultimately choose a value
   that still leaves open the possibility
   of me finding a solution to be as likely
   as possible by not ruling out many
   options I leave open the possibility
   that I can still find a solution without
   needing to go back later and backtrack
   so an example of that might be in this
   particular situation here if I'm trying
   to choose a variable for value for node
   C here that c is equal to either Tuesday
   or Wednesday we know it can't be Monday
   because it conflicts with this domain
   here uh where we already know that a is
   Monday so C must be Tuesday or Wednesday
   and the question is should I try Tuesday
   first or should I try Wednesday first
   and if I try Tuesday what gets ruled out
   well one option gets ruled out here a
   second option gets ruled out here and a
   third option gets ruled out here so
   choosing Tuesday would rule out three
   possible options and what about choosing
   Wednesday well choosing Wednesday would
   rule out one option here and it would
   rule out one option there and so I have
   two choices I can choose Tuesday that
   rules out three options or Wednesday
   that rules out two options and according
   to the least constraining value heris
   what I should probably do is go ahead
   and choose Wednesday the one that rules
   out the fewest number of possible
   options leaving open as many chances as
   possible for me to eventually find a
   solution inside of this state space and
   ultimately if you continue this process
   we will
   find a solution an assignment of
   variables to values that allows us to
   give each of these exams uh each of
   these classes an exam date that doesn't
   conflict with anyone that happens to be
   enrolled in two classes at the same time
   so the big takeaway now with all of this
   is that there are a number of different
   ways we can formulate a problem the ways
   we've looked at today are we can
   formulate a problem as a local search
   problem a problem where we're looking at
   a current node and moving to a neighbor
   based on whether that neighbor is better
   or worse than the current node that we
   are looking at we looked at formulating
   problems as linear programs where just
   by putting things in terms of equations
   and constraints we're able to solve
   problems a little bit more efficiently
   and we saw formulating a problem as a
   constraint satisfaction problem creating
   this graph of all of the constraints
   that connect two variables that have
   some constraint between them and using
   that information to be able to figure
   out what the solution should be and so
   the takeaway of all of this now is that
   if we have some problem in artificial
   intelligence we would like to use AI to
   be able to solve whether that's trying
   to figure out where hospitals should be
   or trying to solve the traveling
   salesman problem trying to optimize
   Productions and costs and whatnot we
   trying to figure out how to satisfy
   certain constraints whether that's in a
   sodoku puzzle or whether that's in
   trying to figure out how to schedule
   exams for a university or any number of
   a wide variety of types of problems if
   we can formulate that problem as one of
   these sorts of problems then we can use
   these known algorithms these algorithms
   for enforcing art consistency and
   backtracking search these hill climbing
   and simulated anding algorithms these
   Simplex algorithms and interior Point
   algorithms that can be used to solve
   linear programs that we can use those
   techniques to begin to solve a whole
   wide variety of problems all in this
   world of optimization inside of
   artificial intelligence this was an
   introduction to artificial intelligence
   with python for today we will see you
   next time
   [Music]
   all right welcome back everyone to an
   introduction to artificial intelligence
   with python now so far in this class
   we've used AI to solve a number of
   different problems giving the AI
   instructions for how to search for a
   solution or how to satisfy certain
   constraints in order to find its way
   from some input point to some output
   point in order to solve some sort of
   problem today we're going to turn to the
   world of learning in particular the idea
   of machine learning which generally
   refers to the idea where we are not
   going to give the computer explicit
   instructions for how to perform a task
   but rather we are going to give the
   computer access to information in the
   form of data or patterns that it can
   learn from and let the computer try and
   figure out what those patterns are try
   and understand that data to be able to
   perform a task on its own now machine
   learning comes in a number of different
   forms and it's a very wide field so
   today we'll explore some of the
   foundational algorithms and ideas that
   are behind a of the different areas
   within machine learning and one of the
   most popular is the idea of supervised
   machine learning or just supervised
   learning and supervised learning is a
   particular type of task it refers to the
   task where we give the computer access
   to a data set where that data set
   consists of input output Pairs and what
   we would like the computer to do is we
   would like our AI to be able to figure
   out some function that Maps inputs to
   outputs so we have a whole bunch of data
   that generally consists of some kind of
   input some evidence of information that
   the computer will have access to and we
   would like the computer based on that
   input information to predict what some
   output is going to be and we'll give it
   some data so that the computer can train
   its model on to begin to understand how
   it is this information works and how it
   is that the inputs and outputs relate to
   each other but ultimately we hope that
   our computer will be able to figure out
   some function that given those inputs is
   able to get those outputs there are a
   couple of different tasks within
   supervised learning the one we'll focus
   on and start with is known as
   classification and classification is the
   problem where if I give you a whole
   bunch of inputs you need to figure out
   some way to map those inputs into
   discrete categories where you can decide
   what those categories are and it's the
   job of the computer to predict what
   those categories are going to be so that
   might be for example I give you
   information about a bank note like a US
   dollar and I'm asking you to predict for
   me does it belong to the category of
   authentic Bank notes or does it belong
   to the category of counterfeit Bank
   notes you need to categorize the
   and we want to train the computer to
   figure out some function to be able to
   do that
   calculation another example might be the
   case of weather something we've talked
   about a little bit so far in this class
   where we would like to predict on a
   given day you know is it going to rain
   on that day is it going to be cloudy on
   that day and before we've seen how we
   could do this if we really give the
   computer all the exact probabilities for
   you know if these are the conditions
   what's the probability of rain often
   times we don't have access to that
   information though but what we do have
   access to is a whole bunch of data so if
   we wanted to be able to predict
   something like is it going to rain or is
   it not going to rain we would give the
   computer historical information about
   days when it was raining and days when
   it was not raining and ask the computer
   to look for patterns in that data so
   what might that data look like well we
   could structure that data in a table
   like this this might be what our table
   looks like where for any particular day
   going back we have information about
   like that day's humidity that day's air
   pressure and then importantly we have a
   label something where the human has said
   that on this particular day
   it was raining or it was not raining so
   you could fill in this table with a
   whole bunch of data and what makes this
   what we would call a supervised learning
   excise is that a human has gone in and
   labeled each of these data points said
   that on this day when these were the
   values for the humidity and pressure
   that day was a rainy day and this day
   was a not rainy day and what we would
   like the computer to be able to do then
   is to be able to figure out given these
   inputs given like the humidity and the
   pressure can the computer predict what
   label should be associated with that day
   does that day look more like it's going
   to be a day that rains or does it look
   more like a day when it's not going to
   rain put a little bit more
   mathematically you can think of this as
   a function that takes two inputs the
   inputs being the data points that our
   computer will have access to things like
   humidity and pressure so we could write
   a function f that takes as input both
   humidity and pressure and then the
   output is going to be what category we
   would ascribe to these particular input
   points what label we would associate
   with that input so we've seen a couple
   of examples data points here we given
   this value for humidity and this value
   for pressure we predict is it going to
   rain or is it not going to rain and
   that's information that we just gathered
   from the world we measured on various
   different days what the humidity and
   pressure were we observed whether or not
   we saw rain or no rain on that
   particular day and this function f is
   what we would like to approximate now
   the computer and we humans don't really
   know exactly how this function f works
   it's probably quite a complex function
   so what we're going to do instead is
   attempt to estimate
   we would like to come up with a
   hypothesis function H which is going to
   try to approximate what F does we want
   to come up with some function H that
   will also take the same inputs and will
   also produce an output rain or no rain
   and ideally we'd like these two
   functions to agree as much as possible
   so the goal then of these supervised
   learning classification tasks is going
   to be to figure out what does that
   function H look like how can we begin to
   estimate given all of this information
   all of this data what category or what
   label should be assigned to a particular
   data point so where could you begin
   doing this well a reasonable thing to do
   especially in this situation I have two
   numerical values is I could try to plot
   this on like a on a graph that has two
   axes an x- axis and a y- axis and in
   this case we're just going to be using
   two numerical values as input but these
   same types of ideas scale as you add
   more and more inputs as well we'll be
   plotting things in two Dimensions but as
   we soon see you could add more inputs
   and just imagine things in multiple
   dimensions and while we humans have
   trouble conceptualizing really Beyond
   three dimensions at least visually a
   computer has no problem with trying to
   imagine things in many many more
   Dimensions that for a computer each
   Dimension is just some separate number
   that it is keeping track of so it
   wouldn't be unreasonable for a computer
   to think in 10 Dimensions or 100
   Dimensions to be able to try to solve a
   problem but for now we've got two inputs
   so we'll graph things along two axes an
   xaxis which will here represent humidity
   and a y- AIS which here represents
   pressure and what we might do is say
   let's take all of the days that were
   raining and just try to plot them on
   this graph and see where they fall on
   this graph and you know here might be
   all of the rainy days where each rainy
   day is one of these blue dots here that
   corresponds to a particular value for
   humidity and a particular value for
   pressure and then I might do the same
   thing with the days that were not rainy
   say take all the not rainy days figure
   out what their values were for each of
   these two inputs and go ahead and plot
   them on this graph as well and I've here
   plotted them in Red so blue here stands
   for a rainy day red here stands for a
   not rainy day and this then is the input
   that my computer has access to all of
   this input and what I would like the
   computer to be able to do is to train a
   model such that if I'm ever presented
   with a new input that doesn't have a
   label associated with it something like
   this white dot here I would like to
   predict given those values for each of
   the two inputs should we classify it as
   a blue dot a rainy day or should we
   classify it as a red dot a not rainy day
   and if you're just looking at this
   picture graphically trying to say all
   right this white dot does it look like
   it belongs to the blue category or does
   it look like it belongs to the red
   category I think most people would agree
   that it probably belongs to the blue
   category and why is that well it looks
   like it's close to other blue dots and
   that's not a very formal notion but it's
   a notion that we'll formalize in just a
   moment that because it seems to be close
   to like this blue dot here like nothing
   else is closer to it then we might say
   that it should be categorized as blue it
   should fall into that category of I
   think that day is going to be a rainy
   day based on that input might not be
   totally accurate but it's a pretty good
   guess and this type of algorithm is
   actually a very popular and common
   machine learning algorithm known as
   nearest neighbor classification it's an
   algorithm for solving these
   classification type problems and in
   nearest neighbor classification it's
   going to perform this algorithm what
   it'll do is given an input it will
   choose the class of the nearest data
   point to that input by class we just
   here mean category like rain or no rain
   counterfeit or not counterfeit and we
   choose choose the category or the class
   based on the nearest data point so given
   all that data we just looked at is the
   nearest data point a blue point or is it
   a red point and depending on the answer
   to that question we were able to make
   some sort of judgment we were able to
   say something like we think it's going
   to be blue or we think it's going to be
   red so likewise we could apply this to
   other data points that we encounter as
   well if suddenly this data point comes
   about well its nearest data is red so we
   would go ahead and classify this as a
   red Point not reing things get a little
   bit trickier though when you look at a
   point like this white point over here
   and you ask the same sort of question
   should it belong to the category of Blue
   Points the rainy days or should it
   belong to the category of red points the
   not rainy days now nearest neighbor
   classification would say the way you
   solve this problem is look at which
   point is nearest to that point you look
   at this nearest point and say it's red
   it's a not rainy day and then therefore
   according to nearest neighbor
   classification I would say that this
   unlabeled Point well that should also be
   red it should also be classified as a
   not rainy day but your intuition you
   know might think that that's a
   reasonable judgment to make that it's
   the closest thing is a not rainy day so
   may as well guess that it's a not rainy
   day but it's probably also reasonable to
   look at the bigger picture of things and
   to say yes it is true that the nearest
   point to it was a red point but it's
   surrounded by a whole bunch of other
   Blue Points so looking at the bigger
   picture there's potentially an argument
   to be made that this point should
   actually be blue and with only this we
   actually don't know for sure we are
   given some input something we're trying
   to predict and we don't necessarily know
   what the output is going to be so in
   this case which one is correct is
   difficult to say but often times
   considering more than just a single
   neighbor considering multiple neighbors
   can sometimes give us a better result
   and so there's a variant on the nearest
   neighbor classification algorithm that
   is known as the K nearest neighbor
   classification algorithm where K is some
   parameter some number that we choose for
   how many neighbors are going to look at
   so one nearest neighbor classification
   is what we saw before just pick the one
   nearest neighbor and use that category
   but with K nearest neighbor
   classification where K might be three or
   five or seven to say look at the three
   or five or seven closest neighbors
   closest data points to that point Works
   a little bit differently this algorithm
   will given an input choose the most
   common class out of the K nearest data
   points to that input so if we look at
   the five nearest points and you know
   three of them say it's rating and two of
   them say it's not raining we'll go with
   the three instead of the two because
   each one effectively gets one vote
   towards what they believe the category
   ought to be and ultimately you choose
   the category that has the most votes as
   a consequence of that so K nearest
   neighbor classification fairly
   straightforward one to understand
   intuitively you just like look at the
   neighbors and figure out what the answer
   might be and it turns out this can work
   very very well for solving a whole
   variety of different types of
   classification problems but not every
   model is going to work under every
   situation and so one of the things we'll
   take a look at today especially in the
   context of supervised machine learning
   is that there are a number of different
   approaches to machine learning a number
   of different algorithms that we can
   apply all solving the same type of
   problem all solving some kind of
   classification problem where we want to
   take inputs and organize it into
   different categories and no one
   algorithm is necessarily always going to
   be better than some other algorithm they
   each have their trade-offs and maybe
   depending on the data one type of
   algorithm is going to be better suited
   to trying to model that information than
   some other algorithm and so this is what
   a lot of machine learning research ends
   up being about that when you're trying
   to apply machine learning techniques
   you're often looking not just at one
   particular algorithm but trying multiple
   different algorithms trying to see what
   is going to give you the best results
   for trying to predict some function that
   Maps inputs to outputs so what then are
   the drawbacks of K nearest neighbor
   classification well there are a couple
   one might be that in a naive Approach at
   least it could be fairly slow to have to
   go through and measure the distance
   between a point in every single one of
   these points that exist here now there
   are ways of trying to get around that
   there are data structures that can help
   to make it more quickly to be able to
   find these neighbors there are also
   techniques you can use to try and prune
   some of this data remove some of the
   data points so that you're only left
   with the relevant data points just to
   make it a little bit easier um but
   ultimately what we might like to do is
   come up with another way of trying to do
   this classification and one way of
   trying to do the classification was
   looking at like what are the neighboring
   points but another way might be to try
   to look at all of the data and see if we
   can come up with some like decision
   boundary some boundary that will
   separate the rainy days from the not
   rainy days and in the case of two
   Dimensions we can do that by drawing a
   line for example so what we might want
   to try to do is just find some line find
   some separator that divides the Rainy
   Days the Blue Points over here from the
   not rainy days the red points over there
   we're now trying a different approach in
   contrast with the nearest neighbor
   approach which just looked at local data
   around the input data point that we
   cared about now what we're doing is
   trying to use a technique known as
   linear regression to find some sort of
   line that will separate the two halves
   from each other now sometimes it'll
   actually be possible to come up with
   some line that perfectly separates all
   the rainy days from the not rainy days
   realistically though this is probably
   cleaner than many data sets will
   actually be often times data is Messier
   there are outliers there's random noise
   that happens inside of a particular
   system and what we'd like to do is still
   be able to figure out what a line might
   look like so in practice the data will
   not always be linearly separable we're
   linearly separable refers to some data
   set where I could like draw a line just
   to separate the two halves of it
   perfectly instead you might have a
   situation like this where there's some
   rainy points that are on this side of
   the line and some not rainy points that
   are on that side of the line and there
   may not be a line that perfectly
   separates what half of the inputs from
   the other half that perfectly separates
   all the rainy days from the not rainy
   days but we can still say that this line
   does a pretty good job and we'll try to
   formalize a little bit later what we
   mean when we say something like this
   line does a pretty good job of trying to
   make that prediction but for now let's
   just say we're looking for a line that
   does as good of a job as we can at
   trying to separate one category of
   things from another category of things
   so let's now try to formalize this a
   little bit more mathematically we want
   to come up with some sort of function
   some way we can Define this line and our
   inputs are things like humidity and
   pressure in this case so our inputs we
   might call X1 is going to be represent
   humidity and X2 is going to represent
   pressure these are our inputs that we
   are going to provide to our machine
   learning algorithm and given those
   inputs we would like for our model to be
   able to predict some sort of output and
   we're going to predict that using our
   hypothesis function which we called H
   our hypothesis function is going to take
   us input X1 and X2 humidity and pressure
   in this case and you can imagine if we
   didn't just have two inputs we had three
   or four or five inputs or more we could
   have this hypothesis function take all
   of those as input and we'll see examples
   of that a little bit later as well and
   now the question is what does this
   hypothesis function do well it really
   just needs to measure like is this data
   point on one side of the boundary or is
   it on the other side of the boundary and
   how do we formalize that boundary well
   the boundary is generally going to be a
   linear combination of these input
   variables least in this particular case
   that what we're trying to do when we say
   linear combination is take each of these
   inputs and multiply them by some number
   that we're going to have to figure out
   we'll generally call that number a
   weight for how important should these
   variables be in trying to determine the
   answer so we'll weight each of these
   variables with some weight and we might
   add like a constant to it just to try
   and make the function a little bit
   different and the result we just need to
   compare like is it greater than zero or
   is it less than zero to say does it
   belong on one side of the line or the
   other side of the line and so what that
   mathematical expression might look like
   is this we would take each of my
   variables X1 and X2 multiply them by
   some weight I don't yet know what that
   weight is but it's going to be some
   number weight one and weight two and
   maybe we just want to add some other
   weight zero to it because the function
   might require us to shift the entire
   value up or down by a certain amount and
   then we just compare if we do all this
   math is it greater than or equal to zero
   if so we might categorize that data
   point as a rainy day and otherwise we
   might say no rain so the key here then
   is that this expression is how we are
   going to calculate whether it's a rainy
   day or not we're going to do a bunch of
   math where we take each of the variables
   multiply them by a weight maybe add an
   extra weight to it see if the result is
   greater than or equal to zero and using
   that result of that expression we're
   able to determine whether it's raining
   or not raining this expression here is
   in this case going to refer to just some
   line if you were to plot that
   graphically it would just be some line
   and what the line actually looks like
   depends upon these weights X1 and X2 are
   the inputs but these weights are really
   what determine the shape of that line
   the slope of that line and what that
   line actually looks like so we then
   would like to figure out what these
   weights should be we can choose whatever
   weights we want but we want to choose
   weights in such a way that if you pass
   in a rainy day's humidity and pressure
   then you end up with a result that is
   greater than or equal to zero and we
   would like it such that if we passed
   into our hypothesis function a not rainy
   day inputs then the output that we get
   should be not raining so before we get
   there let's try and formalize this a
   little bit more mathematically just to
   get a sense for how it is that you'll
   often see this if you ever go further
   into supervised machine learning and
   explore this idea one thing is that
   generally for these categories we'll
   sometimes just use the names of the
   categories like rain and not rain often
   mathematically if we're trying to do
   comparisons between these things it's
   easier just to deal in the world of
   numbers so we could just say one and
   zero one for riging zero for not raining
   so we do all this math and if the result
   is greater than or equal to zero we'll
   go ahead and say our hypothesis function
   outputs one meaning raining and
   otherwise it outputs zero meaning not
   raining and often times this type of
   expression will instead Express using
   Vector mathematics and all a vector is
   if you're not familiar with the term is
   it refers to a sequence of numerical
   values you could represent that in
   Python using like a list of numerical
   values or a tle with numerical values
   and here we have a couple of sequences
   of numerical values one of our vectors
   one of our sequences of numerical values
   are all of these individual weights w0
   W1 and W2 so we could construct what
   we'll call a weight vector and we'll see
   why this is useful in a moment called W
   generally represented using a bold face
   W that is just a sequence of these three
   weights weight zero weight one and
   weight two and to be able to calculate
   based on those weights whether we think
   a day is raining or or not raining we're
   going to multiply each of those weights
   by one of our input variables that W2
   this weight is going to be multiplied by
   input variable X2 W1 is going to be
   multiplied by input variable X1 and w0
   well it's not being multiplied by
   anything but to make sure the vectors
   are the same length and we'll see why
   that's useful in just a second we'll
   just go ahead and say w0 is being
   multiplied by one because you can
   multiply by something by one and you end
   up getting the exact same number so in
   addition to the weight vector W we'll
   also have an input Vector that we'll
   call X that has three values one again
   because we're just multiplying w0 by one
   eventually and then X1 and X2 so here
   then we've represented two distinct
   vectors a vector of Weights that we need
   to somehow learn the goal of our machine
   learning algorithm is to learn what this
   weight Vector is supposed to be we could
   choose any arbitrary set of numbers and
   it would produce a function that tries
   to predict rain or not rain but it
   probably wouldn't be very good what we
   want to do is come up with a good choice
   of these weights so that we're able to
   do the accurate predictions and then
   this input Vector represents a
   particular input to the function a data
   point for which we would like to
   estimate is that day a rainy day or is
   that day a not rainy day and so that's
   going to vary just depending on what
   input is provided to our function what
   it is that we are trying to estimate and
   then to do the calculation we want to
   calculate this expression here and it
   turns out that expression is what we
   would call the dot product of the these
   two vectors the do product of two
   vectors just means taking each of the
   terms and the vectors and multiplying
   them together w0 multiply it by 1 W1
   multip it by X1 W2 multip it by X2 and
   that's why these vectors need to be the
   same length and then we just add all of
   the results together so the dotproduct
   of dotproduct of w and X our weight
   vector and our input Vector that's just
   going to be w0 _ 1 or just w0 plus W1 _
   X1 multiplying the two terms together
   plus W2 \* X2 multiplying those terms
   together so we have our weight Vector
   which we need to figure out we need our
   machine learning algorithm to figure out
   what the weights should be we have the
   input Vector representing the data point
   that we're trying to predict a category
   for predict a label for and we're able
   to do that calculation by taking this
   dot product which you'll often see
   representing in Vector form but if you
   you haven't seen vectors before you can
   think of it as identical to just this
   mathematical expression just doing the
   multiplication adding the results
   together and then seeing whether the
   result is greater than or equal to zero
   or not this expression here is identical
   to the expression that we're calculating
   to see whether or not that answer is
   greater than or equal to zero in this
   case and so for that reason you'll often
   see the hypothesis function written as
   something like this a simpler
   representation where the hypothesis
   takes as input some input Vector X some
   humidity and pressure for some day and
   we want to predict an output like rain
   or no rain bra or one or zero if we
   choose to represent things numerically
   and the way we do that is by taking the
   dot product of the weights and our input
   if it's greater than or equal to zero
   we'll go ahead and say the output is one
   otherwise the output is going to be zero
   and this hypothesis we say is
   parameterized by the weights depending
   on what weights we choose we'll end up
   getting a different hypothesis if we
   choose the weights randomly we're
   probably not going to get a very good
   hypothesis function we'll get a one or a
   zero but it's probably not accurately
   going to reflect whether we think a day
   is going to be rainy or not rainy but if
   we choose the weights right we can often
   do a pretty good job of trying to
   estimate whether we think the output of
   the function should be a one or a zero
   and so the question then is how to
   figure out what these weights should be
   how to be able to tune those parameters
   and there are a number of ways you can
   do that uh one of the most common is
   known as the perceptron learning Rule
   and we'll see more of this later but the
   idea of the perceptron learning rule
   we're not going to get too deep into the
   mathematics we'll mostly just introduce
   it more conceptually is to say that
   given some data point that we would like
   to learn from some data point that has
   an input X and an output Y where Y is
   like one for rain or zero for not rain
   then we're going to update the weights
   and we'll look at the formula in just a
   moment but the big picture idea is that
   we can start with random weights but
   then learn from the data like take the
   data points one at a time and for each
   one of the data points figure out all
   right what parameters do we need to
   change inside of the weights in order to
   better match that input point and so
   that is the value of having access to a
   lot of data in the supervised machine
   learning algorithm is that you take each
   of the data points and maybe look at
   them multiple times and constantly try
   and figure out what whether you need to
   shift your weights in order to better
   create some weight Vector that is able
   to correctly or more accurately try to
   estimate what the output should be
   whether we think it's going to be
   raining or whether we think it's not
   going to be raining so what is that
   weight update look like without going
   into too much of the mathematics we're
   going to update each of the weights to
   be the result of the original weight
   plus some additional expression and to
   understand this expression why well Y is
   what the actual output is and hypothesis
   of X the input that's going to be what
   we thought the input was and so I can
   replace this by saying like what the
   actual value was minus what our estimate
   was and based on the difference between
   the actual value
   and what our estimate was we might want
   to change our hypothesis change the way
   that we do that
   estimation if the actual value and the
   estimate were the same thing meaning we
   were correctly able to predict what
   category this data point belonged to
   well then actual value minus estimate
   that's just going to be zero which means
   this whole term on the right hand side
   goes to be zero and the weight doesn't
   change weight I where I is like weight
   one or weight two or weight zero weight
   I just stays at weight I and none of the
   weights change if we were able to
   correctly predict what category the
   input belonged to but if our hypothesis
   didn't correctly predict what category
   the input belonged to well then maybe
   then we need to make some changes adjust
   the weights so that we're better able to
   predict this kind of data point in the
   future and what is the way we might do
   that well if the actual value was bigger
   than the estimate then and for now we'll
   go ahead and assume that these X's are
   positive values then if the actual value
   was bigger than the estimate well that
   means we need to increase the weight in
   order to make it such that the output is
   bigger and therefore we're more likely
   to get to the right actual value and so
   if the actual value is bigger than the
   estimate then actual value minus
   estimate that'll be a positive number
   and so you imagine we're just adding
   some positive number to the weight just
   to increase it ever so slightly and
   likewise the inverse case is true that
   if the actual value was less than the
   estimate the actual value uh was Zero
   but we estimated one meaning it was
   actually was not raining but we
   predicted it was going to be raining
   well then we want to decrease the value
   of the weight because then in that case
   we want to try and lower the total value
   of computing that dot product in order
   to make it less likely that we would
   predict that it would actually be
   raining so no need to get too deep into
   the mathematics of that but the general
   idea is that every time we encounter
   some data point we can adjust these
   weights accordingly to try and make the
   weights better line up with the actual
   data that we have access to and you can
   repeat this process with data point
   after data point until eventually
   hopefully your algorithm converts to
   some set of Weights that do a pretty
   good job of trying to figure out whether
   a day is going to be rainy or not rainy
   and just as a final point about this
   particular equation this value Alpha
   here is generally what we'll call the
   Learning rate it's just some some
   parameter some number we choose for how
   quickly we're actually going to be
   updating these weight values that if
   Alpha is bigger then we're going to
   update these weight values by a lot and
   if Alpha is smaller then we'll update
   the weight values by less and you can
   choose a value of alpha depending on the
   problem different values might suit the
   situation better or worse than others so
   after all of that after we've done this
   training process of take all this data
   and using this learning rule look at all
   the pieces of data and use each piece of
   data as an indication to us of do the
   weights stay the same do we increase the
   weights do we decrease the weights and
   if so by how much what you end up with
   is effectively a threshold function and
   we can look at what the threshold
   function looks like like this on the
   x-axis here we have the output of that
   function taking the weights taking the
   dotproduct of it with the input and on
   the y- AIS we have what the output is
   going to be zero which in this case
   represented like not raining and one
   which in this case represented reing and
   the way that our hypothesis function
   works is it calculates this value and if
   it's greater than zero or greater than
   some threshold value then we declare
   that it's a rainy day and otherwise we
   declare that it's a not rainy day and
   this then graphically is what that
   function looks like that initially when
   the value of this dot product is small
   it's not raining it's not raining it's
   not raining but as soon as it crosses
   that threshold we suddenly say okay now
   it's raining now it's raining now now
   it's raining and the way to interpret
   this kind of representation is that
   anything on this side of the line that
   would be the category of data points
   where we say yes it's raining anything
   that falls on this side of the line are
   the data points where we would say it's
   not raining and again we want to choose
   some value for the weights that results
   in a function that does a pretty good
   job of trying to do this estimation but
   one tricky thing with this type of hard
   threshold is that it only leaves two
   possible outcomes right we plug in some
   data as input and the output we get is
   raining or not raining and there's no
   room for anywhere in between and maybe
   that's what you want maybe all you want
   is given some data point you would like
   to be able to classify it into one or
   two or more of these various different
   categories but it might also be the case
   that you care about knowing how strong
   that prediction is for example so if we
   go back to this instance here where we
   have rainy days on this side of the line
   not rainy days on that side of the line
   you might imagine that let's look now at
   these two white data points this data
   point here that we would like to predict
   a label or a category for and this data
   point over here that we would also like
   to predict a label or a category for it
   seems likely that you could pretty
   confidently say that this data point
   that should be a rainy day seems close
   to the other rainy days if we're going
   by the nearest neighbor strategy it's on
   this side of the line if we're going by
   the strategy of just saying you know
   which side of the line does it fall on
   by figuring out what those weights
   should be and if we're using the line
   strategy of just which side of the line
   does it fall on which side of this
   decision boundary Well we'd also say
   that this point here is also a rainy day
   because it falls on the side of the line
   that corresponds to rainy days but it's
   likely that even in this case we would
   know that we don't feel nearly as
   confident about this data point on the
   left as compared to this data point on
   the right that for this one on the right
   we can feel very confident that yes it's
   a rainy day this one you know it's
   pretty close to the line if we're
   judging just by distance and so you
   might be less sure but our threshold
   function doesn't allow for a notion of
   less sure or more sure about something
   it's what we would call a hard threshold
   it's once you've cross this line then
   immediately we say yes this is going to
   be a rainy day anywhere before it we're
   going to say it's not a rainy day and
   that may not be helpful in a number of
   cases one this is not a particularly
   easy function to deal with if you as you
   get deeper into the world of machine
   learning and are trying to do things
   like taking derivatives of these curves
   this type of function makes things
   challenging but the other challenge is
   that we don't really have any notion of
   gradation between things we don't have a
   notion of yes this is a very strongly
   strong belief that it's going to be
   raining as opposed to you know it's
   probably more likely than not that it's
   going to be raining but maybe not
   totally sure about that that either so
   what we can do by taking advantage of a
   technique known as logistic regression
   is instead of using this hard threshold
   type of function we can use instead a
   logistic function something we might
   call a soft threshold and that's going
   to transform this into looking something
   a little more like this something that
   more nicely curves and as a result the
   possible output values are no longer
   just zero and one zero for not raining
   one for raining but you can actually get
   any real numbered value between Z and
   one that if you're way over on this side
   then you get a value of zero okay it's
   not going to be raining and we're pretty
   sure about that and if you're over on
   this side you get a value of one like
   yes we're very sure that it's going to
   be raining but in between you could get
   some real numbered value where a value
   like
   0.7 might mean you know we think it's
   going to rain it's more probable that
   it's going to rain than not based on the
   data but we're not as confident as some
   of the other data points might be so one
   of the advantages of the soft threshold
   is that it allows us to an output that
   could be some real number that
   potentially reflects some sort of
   probability the likelihood that we think
   that this particular data point belongs
   to that particular category and there
   are some other nice mathematical
   properties of that as well so that then
   is two different approaches to trying to
   solve this type of classification
   problem one is this nearest neighbor
   type of approach where you just take a
   data point and look at the data points
   that are nearby to try and estimate what
   category we think it belongs to and the
   the other approach is the approach of
   saying all right let's just try and use
   linear regression figure out what these
   weights should be adjust the weights in
   order to figure out uh what line or what
   decision boundary is going to best
   separate these two categories turns out
   that another popular approach and very
   popular approach if you just have a data
   set and you want to start trying to do
   some learning on it is what we call the
   support Vector machine we're not going
   to go too much into the mathematics of
   the support Vector machine but we'll at
   least explore it graphically to see what
   it is that it looks like and the idea or
   the motivation behind the support Vector
   machine is the idea that there are
   actually a lot of different lines that
   we could draw a lot of different
   decision boundaries that we could draw
   to separate two groups so if for example
   I had the red data points over here and
   the blue data points over here one
   possible line I could draw is a line
   like this that this line here would
   separate the red points from the blue
   points and it does so perfectly all the
   red points are on one side of the line
   all the blue points are on the other
   side of the line but this should
   probably make you a little bit nervous
   if you come up with a model and the
   model comes up with a line that looks
   like this and the reason why is that you
   worry about how well it's going to
   generalize to other data points that are
   not necessarily in the data set that we
   have access to for example if there was
   a point that fell like right here for
   example on the right side of the line
   well then based on that we might want to
   guess that it is in fact a red point but
   it falls on the side of the line where
   instead we would estimate that it's a
   blue point instead
   and So based on that this line is
   probably not a great choice just because
   it is so close uh to these various data
   points we might instead prefer like a
   diagonal line that just goes diagonally
   through the data set like we've seen
   before but there too there's a lot of
   diagonal lines that we could draw as
   well for example I could draw this
   diagonal line here which also
   successfully separates all the red
   points from all of the blue points from
   the perspective of something like a just
   trying to figure out some setting of
   Weights that allows us to predict the
   correct output this line will predict
   the correct output for this particular
   set of data every single time because
   the red points are on one side the blue
   points are on the other but yet again
   you should probably be a little nervous
   because this line is so close to these
   red points even though we're able to
   correctly predict on the input data if
   there was a point that fell you know
   somewhere in this general area our
   algorithm this model would say that yeah
   we think it's a blue point when in
   actuality it might belong to the red
   category instead just because it looks
   like it's close to the other red points
   what we really want to be able to say
   given this data how can you generalize
   this as best as possible is to come up
   with a line like this that seems like
   the intuitive line to draw and the
   reason why it's intuitive is because it
   seems to be as far apart as possible
   from the red data and the blue data so
   that if we generalize a little bit and
   assume that maybe we have some points
   that are different from the input but
   still slightly further away we can still
   say that something on this side probably
   red something on that side probably blue
   and we can make those judgments that way
   and that is what support Vector machines
   are designed to do they're designed to
   try and find what we call the maximum
   margin separator where the maximum
   margin separator is just some boundary
   that maximizes the distance between the
   groups of points rather than come up
   with some boundary that's very close to
   one set or the other where in the case
   before we wouldn't have cared as long as
   we're categorizing the input well that
   seems all we need to do the support the
   support Vector machine will try and find
   this maximum margin separator some way
   of trying to maximize that particular
   distance and it does so by finding what
   we call the support vectors which are
   the vectors that are closest to the line
   and trying to maximize the distance uh
   between the line and those particular
   points and it works that way in two
   Dimensions it also works in higher
   Dimensions where we're not looking for
   some line that separates the two data
   points but instead looking for what we
   generally call a hyperplane some
   decision boundary effectively that
   separates one set of data from the other
   set of data and this ability of support
   Vector machines to work in higher
   Dimensions actually has a number of
   other applications as well but one is
   that it helpfully deals with cases where
   data may not be linearly separable so we
   talked about linear separability before
   this idea that you can take data and
   just draw a line or some linear
   combination of the inputs that allows us
   to perfectly separate the two sets from
   each other there are some data sets that
   are not linearly separable and some were
   even too you would not be able to find a
   good line at all that would try to do
   that kind of Separation something like
   this for example or if you imagine here
   are the red points and the Blue Points
   surround it if you try to find a line
   that divides the red points from the
   Blue Points it's actually going to be
   difficult if not impossible to do that
   any line you choose well if you draw a
   line here then you ignored all of these
   Blue Points that should actually be blue
   and not red anywhere else you draw a
   line there's going to be a lot of error
   a lot of mistakes a lot of what will
   soon call loss to that line that you
   draw a lot of points that you're going
   to categorize incorrectly what we really
   want is to be able to find better
   decision boundary that may not be just a
   straight line through this
   two-dimensional space and what support
   Vector machines can do is they can begin
   to operate in higher dimensions and be
   able to find some other decision
   boundary like the circle in this case
   that actually is able to separate uh one
   of these sets of data from the other set
   of data a lot better so often times in
   data sets where the data is not linearly
   separable support Vector machines by
   working in higher Dimensions can
   actually figure out a way to solve that
   kind of problem effectively so that then
   three different approaches to trying to
   solve these sorts of problems we've seen
   support Vector machines we've seen uh
   trying to use linear regression and the
   perceptron learning rule to be able to
   figure out how to categorize inputs and
   outputs we've seen the nearest neighbor
   approach no one necessarily better than
   any other again it's going to depend on
   the data set the information you have
   access to it's going to depend on what
   the function looks like that you're
   ultimately trying to predict and this is
   where a lot of research and
   experimentation can be involved in
   trying to figure out how it is to best
   perform that kind of estimation but
   classification is only one of the tasks
   that you might encounter in supervised
   machine learning because in
   classification what we're trying to
   predict is some discrete category we're
   trying to predict red or blue rain or
   not rain authentic or counterfeit but
   sometimes what we want to predict is a
   real numbered value and for that we have
   a related problem not classification but
   instead known as regression and
   regression is the supervised learning
   problem where we try and learn a
   function mapping inputs to Output same
   as before but instead of the outputs
   being discrete categories things like
   rain or not rain in a regression problem
   the output values are generally
   continuous values some real number that
   we would like to predict happens all the
   time as well you might imagine that a
   company might take this approach of it's
   trying to figure out for instance uh
   what the effect of its advertising is
   like how do advertising dollars spent
   translate into sales for the company's
   product for example and so they might
   like to try to predict some function
   that takes as input the amount of money
   spent on advertising and here we're just
   going to use one input but again you
   could scale this up to many more inputs
   as well if you have a lot of different
   kinds of data you have access to and the
   goal is to learn a function that given
   this amount of spending on Advertising
   we're going to get this amount in sales
   and you might judge based on having
   access to a whole bunch of data like for
   every past month here is how much we
   spent on advertising and here is what
   sales were and we would like to predict
   some sort of hypothesis function that
   again given the amount spent on
   Advertising can predict in this case
   some real number some number estimate of
   how much uh sales we expect that company
   to do in this month or in this quarter
   or whatever unit of time we're choosing
   to measure things in and so again the
   approach to solving this type of problem
   we could try using a linear regression
   type approach where we take the data and
   we just plot it on the xaxis we have
   advertising dollar spent on the y- axis
   we have sales and we might just want to
   try and draw a line that does a pretty
   good job of trying to estimate this
   relationship between advertising and
   sales and in this case unlike before
   we're not trying to separate the data
   points into discrete categories but
   instead in this case we're just trying
   to find a line that approximates this
   relationship between advertising and
   sales so that if we want to figure out
   what the estimated sales are for
   particular advertising budget you just
   look it up in this line figure out for
   this amount of advertising we would have
   this amount of sales and just try and
   make the estimate that way and so you
   can try and come up with a line again
   figuring out how to modify the weights
   using various different techniques to
   try and make it so that this line fits
   as well as
   possible so with all of these approaches
   then to trying to solve machine learning
   style problems the question becomes how
   do we evaluate these approaches how do
   we evaluate the various different
   hypotheses that we could come up with
   because each of these algorithms will
   give us some sort of hypothesis some
   function that Maps inputs to outputs and
   we want to know how well does that
   function work and you can think of
   evaluating these hypotheses and trying
   to get a better hypothesis as kind of
   like an optimization problem in an
   optimization problem if you've recall
   from before we were either trying to
   maximize some objective function by
   trying to find a global maximum or we
   were trying to minimize something cost
   function by trying to find some Global
   minimum and in the case of evaluating
   these hypotheses one thing we might say
   is that this cost function the thing
   we're trying to minimize we might be
   trying to minimize what we would call a
   loss function and what a loss function
   is is is a function that is going to
   estimate for us how poorly our function
   performs more formly it's like a loss of
   utility by whenever we predict something
   that is wrong that is a loss of utility
   that's going to add to the output of our
   loss function and you could come up with
   any loss function that you want just
   some mathematical way of estimating you
   know given each of these data points
   given what the actual output is and
   given what our projected output is our
   estimate you could calculate some sort
   of numerical loss for it but there are a
   couple of popular loss functions that
   are worth discussing just so that you've
   seen them before when it comes to
   discrete categories things like rain or
   not rain counterfeit or not counterfeit
   one approaches the 01 loss function and
   the way that works is for each of of the
   data points our loss function takes as
   input what the actual output is like
   whether it was actually raining or not
   raining and takes our prediction into
   account did we predict given this data
   point that it was raining or not raining
   and if the actual value equals the
   prediction well then the 01 loss
   function will just say the loss is zero
   there was no loss of utility because we
   were able to predict correctly and
   otherwise if the actual value was not
   the same thing as what we predicted well
   then in that case our loss is one we
   lost something lost some utility because
   what we predicted was the output of the
   function was not what it actually was
   and the goal then in a situation like
   this would be to come up with some
   hypothesis that minimizes the total
   empirical loss the total amount that
   we've lost if you add up for all these
   data points what the actual output is
   and what your hypothesis would have
   predicted so in this case for example if
   we go back to classifying days as
   raining or not raining and we came up
   with this decision boundary how would we
   evaluate this decision boundary how much
   better is it than drawing the line here
   or Drawing the Line there well we could
   take each of the input data points and
   each input data point has a label
   whether it was raining or whether it was
   not raining and we could compare it to
   the prediction whether we predicted it
   would be raining or not raining and
   assign it a numerical value as a result
   so for example these points over here
   they were all raining days and we
   predicted they would be rainy because
   they fall on the bottom side of the line
   so they have a loss of zero nothing lost
   from those situation ation and likewise
   same is true for some of these points
   over here where it was not raining and
   we predicted it would not be raining
   either where we do have loss are points
   like this point here and that point
   there where we predicted that it would
   not be raining but in actuality it's a
   blue point it was raining or likewise
   here we predicted that it would be
   raining but in actuality it's a red
   point it was not raining and so as a
   result we miscategorized these data
   points that we were trying to train on
   and as a result
   there's some loss here one loss here
   there here and there for a total loss of
   four for example in this case and that
   might be how we would estimate or how we
   would say that this line is better than
   a line that goes somewhere else or a
   line that's further down because this
   line might minimize the loss there's no
   way to do better than just these four
   points of loss if you're just drawing a
   straight line through our space so the
   01 loss function checks did we get it
   right did we get it wrong if we got it
   right the loss is zero nothing lost if
   we got it wrong then our loss function
   for that data point says one and we add
   up all of those losses across all of our
   data points to get some sort of
   empirical loss how much we have lost
   across all of these original data points
   that are algorithm had access
   to there are other forms of loss as well
   that work especially well when we deal
   with more real valued cases cases like
   the mapping between advertising budget
   and amount that we do in sales for
   example because in that case you care
   not just that you get the number exactly
   right but you care how close you were to
   the actual value if the actual value is
   you did like $2,800 in sales and you
   predicted that you would do $2,900 in
   sales you know maybe that's pretty good
   that's much better than if you had
   predicted you do $1,000 in sales for
   example and so we would like our loss
   function to be able to take that into
   account as well take apart take into
   account not just whether the actual
   value and the expected value are exactly
   the same but also take into account how
   far apart they were and so for that one
   approach is what we call L1 loss L1 loss
   doesn't just look at whether actual and
   predicted are equal to each other but we
   take the absolute value of the actual
   value minus the predicted value in other
   words we just ask how far apart were the
   actual and predicted values and we sum
   that up across all of the data points to
   be able to get what our answer
   ultimately is so what might actually
   look like for our data set well if we go
   back to this representation where we had
   advertising along the xaxis sales along
   the y- AIS our line was our prediction
   our estimate for any given amount of
   advertising what we predicted sales was
   going to be and our L1 loss is just how
   far apart vertically along the sales
   axis our prediction was from each of the
   data points so we could figure out
   exactly how far apart our prediction was
   from each of the data points and figure
   out as a result of that what our la loss
   is overall for this particular
   hypothesis just by adding up all of
   these various different individual
   losses for each of these data points and
   our goal then is to try and minimize
   that loss to try and come up with some
   line that minimizes what the utility
   loss is by judging how far away our
   estimate amount of sales is from the
   actual amount of sales and turns out
   there are other loss functions as well
   one that's quite popular is the L2 loss
   the L2 loss instead of just using the
   absolute value like how far away the
   actual value is from the predicted value
   it uses the square of actual minus
   predicted so how far apart are the
   actual and predicted value and it
   squares that value effectively
   penalizing much more harshly anything
   that is a worse prediction so you
   imagine if you have two data points that
   you predict as being you know one value
   away from their actual value as opposed
   to one data point that you predict as
   being two away from its actual value the
   L2 loss function will more harshly
   penalize that one that is two away
   because it's going to square however
   much the difference is between the
   actual value and the predicted value and
   depending on the situation you might
   want to choose a loss function depending
   on what you care about minimizing if you
   really care about minimizing the error
   on more outlier cases then you might
   want to consider something like this but
   if You' got a lot of outliers and you
   don't necessarily care about modeling
   them then maybe an L1 loss function is
   preferable but there are trade-offs here
   that you need to decide based on a
   particular set of data but what you do
   run the the risk of with any of these
   loss functions with anything that we're
   trying to do is a problem known as
   overfitting and overfitting is a big
   problem that you can encounter in
   machine learning which happens anytime a
   model fits too closely with a data set
   and as a result fails to generalize we
   would like our model to be able to
   accurately predict data and inputs and
   output pairs for the data that we have
   access to but the reason we wanted to do
   so is because we want our model to
   generalize well to data that we haven't
   seen before I would like to take data
   from the past year of whether it was
   raining or not raining and use that data
   to generalize it towards the future to
   say in the future is it going to be
   raining or not raining or if I have a
   whole bunch of data on what counterfeit
   and not counterfeit US dollar bills look
   like in the past when people have
   encountered them I'd like to train a
   computer to be able to in the future
   generalize to other dollar bills that I
   might see as well and the problem with
   overfitting is that if you try tie
   yourself too closely to the data set
   that you're training your model on you
   can end up not generalizing very well so
   what does this look like well we might
   imagine the rainy day and not rainy day
   example again from here where the Blue
   Points indicate rainy days and the red
   points indicate not rainy days and we
   decided that we felt pretty comfortable
   with drawing a line like this as the
   decision boundary between rainy days and
   not rainy days so we can pretty
   comfortably say that points on this side
   more likely to be rainy days points on
   that side more likely to be not rainy
   days but the loss the empirical loss
   isn't zero in this particular case
   because we didn't categorize everything
   perfectly there was this one outlier
   this one day that it wasn't raining but
   yet our model Still Still predicts that
   it is raining but that doesn't
   necessarily mean our model is bad it
   just means the model isn't 100% accurate
   if you really wanted to try and find a
   hypothesis that resulted in minimizing
   the loss you could come up with a
   different decision boundary it wouldn't
   be a line but it would look something
   like this like this decision boundary
   does separate all of the red points from
   all of the Blue Points because the red
   points fall on this side of this
   decision boundary the Blue Points fall
   on the other side of the decision
   boundary but this we would probably
   argue is not as good of a prediction
   even though it seems to be more accurate
   based on all of the available training
   data that we have for training this
   machine learning model we might say that
   it's probably not going to generalize
   well that if there were other data
   points like here and there we might
   still want to consider those to be rainy
   days because we think this was probably
   just an outlier so if the only thing you
   care about is minimizing the loss on the
   data you have available to you you run
   the risk of overfitting and this can
   happen in the classification case it can
   also happen in the regression case that
   here we predicted what we thought was a
   pretty good line relating advertising to
   sales trying to predict what sales were
   going to be for a given amount of
   advertising but I could could come up
   with a line that does a better job of
   predicting the training data and it
   would be something that looks like this
   just you know connecting all of the
   various different data points and now
   there is no loss at all now I've
   perfectly predicted given any
   advertising what sales are and for all
   the data available to me it's going to
   be accurate but it's probably not going
   to generalize very well I have overfit
   my model on the training data that is
   available to me and so in general we
   want to avoid overfitting we'd like
   strategies to make sure that we have
   overfit our model to a particular data
   set and there are a number of ways that
   you could try to do this one way is by
   examining what it is that we're
   optimizing for in an optimization
   problem all we do is we say you know
   there is some cost and I want to
   minimize that cost and so far we've
   defined that cost function the cost of a
   hypothesis just as being equal to the
   empirical loss of that hypothesis like
   how far away are the actual data points
   the outputs away from what I predicted
   them to be based on that particular
   hypothesis and if all you're trying to
   do is minimize cost meaning minimizing
   the loss in this case then the result is
   going to be that you might overfit that
   to minimize cost you're going to try and
   find a way to perfectly match all the
   input data and that might happen as a
   result of overfitting on that particular
   input data so in order to address this
   you could add something to the cost
   function what counts as cost will not
   just loss but also some measure of of
   the complexity of the hypothesis the
   where the complexity of the hypothesis
   is something that you would need to
   Define for you know how complicated does
   our line look this is sort of an aam's
   razor style approach where we want to
   give preference to a simpler decision
   boundary like a straight line for
   example some simpler curve as opposed to
   something far more complex that might
   represent the training data better but
   might not generalize as well we'll
   generally say that a simpler solution is
   probably the better solution and
   probably the one is more likely to
   generalize well to other inputs so we
   measure what the loss is but we also
   measure the complexity and now that all
   gets taken into account when we consider
   the overall cost that yes something
   might have less loss if it better
   predicts the training data but if it's
   much more complex it still might not be
   the best option that we have and we need
   to come up with some balance between
   loss and complexity and for that reason
   you'll often see this represented as
   multiplying the complexity by some
   parameter that we have to choose
   parameter Lambda in this case where
   we're saying you know if Lambda is a
   greater value then we really want to
   penalize more complex hypotheses whereas
   if Lambda is smaller we're going to
   penalize more complex hypotheses a
   little bit and it's up to the machine
   learning programmer to decide where they
   want to set that value of Lambda for how
   much do I want to penalize a more
   complex hypothesis that might fit the
   data a little better and again there's
   no one right answer to a lot of these
   things that depending on the data set
   depending on the data you have available
   to you and the problem you're trying to
   solve your choice of these parameters
   may vary and you may need to experiment
   a little bit to figure out what the
   right choice of that is ultimately going
   to be this process then of considering
   not only loss but also some measure of
   the complexity is known as
   regularization regularization is the
   process of penalizing a hypothesis that
   is more complex in order to favor a
   simpler hypothesis that is more likely
   to generalize well more likely to be
   able to apply to other situations that
   are dealing with other input points
   unlike the ones that we've necessarily
   seen before so often times you'll see us
   add some regularizing term to what we're
   trying to minimize in order to avoid
   this problem of
   overfitting now another way of making
   sure we don't overfit is to run some
   experiments and to see whether or not we
   are able to generalize our model that
   we've created to other data sets as well
   and it's for that reason that often
   times when you're doing a machine
   learning experiment when you've got some
   data and you want to try and come up
   with some function that predicts given
   some input what the output is going to
   be you don't necessarily want to do your
   training on all of the data you have
   available to you that you could employ a
   method known as hold out cross
   validation where in holdout cross
   validation we split up our data we split
   up our data into a training set and a
   testing set the training set is the set
   of data that we're going to use to train
   our machine learning model
   and the testing set is the set of data
   that we going to use in order to test to
   see how well our machine learning model
   actually performed so the learning
   happens on the training set we figure
   out what the parameters should be we
   figure out what the right model is and
   then we see all right now that we've
   trained the model see how well it does
   predicting things inside of the testing
   set some set of data that we haven't
   seen before and the hope then is that
   we're going to be able to predict the
   testing set pretty well if we're able to
   generalize based on the training data
   that's available to us if we've overfit
   the training data though and we're not
   able to generalize well then when we
   look at the testing set it's likely
   going to be the case that we're not
   going to predict things in the testing
   set nearly as effectively so this is one
   method of cross validation validating to
   make sure that the work we have done is
   actually going to generalize to other
   data sets as well and there are other
   statistical techniques we can use as
   well one of the downsides of this just
   hold out cross validation is if you say
   I just like split it 50/50 I train using
   50% of the data and test using the other
   50% or you could choose other
   percentages as well is that there's a
   fair amount of data that I am now not
   using to train that I might be able to
   get a better model as a result for
   example so one approaches known as kfold
   cross validation in kfold Cross
   validation rather than just divide
   things into two sets and run one
   experiment we divide things into K
   different sets so maybe I divide things
   up into 10 different sets and then run
   10 different experiments so if I split
   up my data into 10 different sets of
   data then what I'll do is each time for
   each of my 10 experiments I will hold
   out one of those sets of data where I'll
   say let me train my model on these nine
   sets and then test to see how well it
   predicts on set number 10 and then pick
   another set of nine sets to train on and
   then test it on the other one that I
   held out where each time I train the
   model on everything minus the one set
   that I'm holding out and then test to
   see how well our model performs on the
   test that I did hold out and what you
   end up getting is like 10 different
   results 10 different answers for how
   accurately our model worked and often
   times you could just like take the
   average of those 10 to get an
   approximation for how well we think our
   model performs overall but the key idea
   is separating the training data from the
   testing data because you want to test
   your model on data that is different
   from what you trained the model on
   because the training you want to avoid
   overfitting you want to be able to
   generalize and the way you test whether
   you're able to generalize is by looking
   at some data that you haven't seen
   before and seeing how well we're
   actually able to
   perform and so if we want to actually
   Implement any of these techniques inside
   of a programming language like python
   number of ways we could do that we could
   write this from scratch on our own but
   there are libraries out there that allow
   us to take advantage of existing
   implementations of these algorithms that
   we can use the same types of algorithms
   in a lot of different situations and so
   there's a library very popular one know
   known asit learn which allows us in
   Python to be able to very quickly get
   set up with a lot of these different
   machine learning models this library has
   already written an algorithm for nearest
   neighbor classification for doing
   perceptron learning for doing a bunch of
   other types of inference and supervised
   learning that we haven't yet talked
   about but using it we can begin to try
   actually testing how these methods work
   and how accurately they perform so let's
   go ahead and take a look at one approach
   to trying to solve this type of problem
   all right so I'm first going to pull up
   banknotes.com
   this is formatted as a CSV spreadsheet
   where just comma separated values
   separating each of these various
   different fields we have four different
   input values for each of these data
   points just information uh some
   measurement that was made on the bank
   note and what those measurements exactly
   are aren't as important as the fact that
   we do have access to this data but more
   importantly we have access for each of
   these data points to a label where zero
   indicates something like this was not a
   counterfeit Bill meaning it was an
   authentic Bill and a data point labeled
   one means that it is a counterfeit bill
   at least according to the human
   researcher who labeled this particular
   data so we have a whole bunch of data
   representing a whole bunch of different
   data points Each of which has these
   various different measurements that were
   made on that particular Bill and Each of
   which has an output value zero or one
   zero meaning it was a genuine Bill uh
   one meaning it was a counterfeit Bill
   and what we would like to do is use
   supervised learning to begin to predict
   or model some sort of function that can
   take these four values as input and
   predict what the output would be we want
   our learning algorithm to find some sort
   of pattern that is able to predict based
   on these measurements something that you
   could measure just by taking a photo of
   a bill predict whether that bill is
   authentic or whether that bill is
   counterfeit and so how can we do that
   well I'm first going to open up bank
   note 0. pi and see how it is that we do
   this I'm first importing a lot of things
   from pyit learn but importantly I'm
   going to set my model equal to the
   perceptron model which is one of those
   models that we talked about before we're
   just going to try and figure out some
   setting of Weights that is able to
   divide our data into two different
   groups then I'm going to go ahead and
   read data in for my file from
   banknotes.com
   dividing into a whole bunch of rows
   where each row has some evidence those
   four input values that are going to be
   inputs to my hypothesis function and
   then the label the output whether it is
   authentic or counterfeit that is the
   thing that I am then trying to predict
   so the next step is that I would like to
   split up my data set into a training set
   and a testing set some set of data that
   I would like to train my machine
   learning model on and some set of data
   that I would like to use to test that
   model see how well it performed so what
   I'll do is I'll go ahead and figure out
   length of the data how many data points
   do I have
   I'll go ahead and take half of them save
   that number as a number called hold out
   that is how many items I'm going to hold
   out for my data set to save for the
   testing phase I'll randomly Shuffle the
   data so it's in some random order and
   then I'll say my testing set will be all
   of the data up to the holdout so I'll
   take hold out many data items and that
   will be my testing set my training data
   will be everything else the information
   that I'm going to train my model on and
   then I'll say I need to divide my
   training data into two different sets I
   need to divide it into my X values where
   X here represents the inputs so the X
   values the X values that I'm going to
   train on are basically for every Row in
   my training set I'm going to get the
   evidence for that row those four values
   where is basically a vector of four
   numbers where that is going to be all of
   the input and then I need the Y values
   what are the outputs that I want to
   learn from the labels that belong to
   each of these various different input
   points well that's going to be the same
   thing for each row in the training data
   but this time I take that row and get
   what its label is whether it is
   authentic or counterfeit so I end up
   with one list of all of these vectors of
   my input data and one list which follows
   the same order but is all of the labels
   that correspond with each of those
   vectors and then to train my model which
   in this case is just this perceptron
   model I just call model.fit pass in the
   training data and what the labels for
   those training data are and scikit learn
   will take care of fitting the model we
   do the entire algorithm for for me and
   then when it's done I can then test to
   see how well that model performed so I
   can say let me get all of these input
   vectors for what I want to test on so
   for each row in my testing data set go
   ahead and get the evidence and the Y
   values those are what the actual values
   were for each of the rows in the testing
   data set what the actual label is but
   then I'm going to generate some
   predictions I'm going to use this model
   and try and predict based on the testing
   vectors I want to predict what the
   output is and my goal then is to now
   compare why testing with predictions I
   want to see how well my predictions
   based on the model actually reflect what
   the Y values were what the output is
   that were actually labeled because I now
   have this label data I can assess how
   well the algorithm worked and so now I
   can just compute how well we did I'm
   going to this ZIP function basically
   just lets me look through two different
   lists one one by one at the same time so
   for each actual value and for each
   predicted value value if the actual is
   the same thing as what I predicted I'll
   go ahead and increment the counter by
   one otherwise I'll increment my
   incorrect counter by one and so at the
   end I can print out here are the results
   here's how many I got right here's how
   many I got wrong and here was my overall
   accuracy for example so I can go ahead
   and run this I can run Python banknote
2. piy and it's going to train on half
   the data set and then test on half the
   data set and here are the results for my
   perceptron model in this case it
   correctly was able to classify
   679 bills is correctly either authentic
   or counterfeit and incorrectly
   classified seven of them for an overall
   accuracy of close to 99% accurate so on
   this particular data set using this
   perceptron model we were able to predict
   very well what the output was going to
   be and we can try different models too
   that pyit learn makes it very easy just
   to swap out one model for another model
   so instead of the perceptron model I can
   use the uh support Vector machine using
   the s VC otherwise known as a support
   Vector classifier using a support Vector
   machine to classify things into two
   different groups and now see all right
   how well does this
   perform and all right this time we were
   able to correctly predict 682 and
   incorrectly predicted four for accuracy
   of
   99.4% and we could even try the K
   neighbors
   classifier as the model instead and this
   takes a parameter n neighbors for how
   many neighbors do you want to look at
   let's just look at one neighbor the one
   nearest neighbor and use that to predict
   go ahead and run this as well and it
   looks like based on the K neighbors
   classifier looking at just one neighbor
   we were able to correctly classify 685
   data points incorrectly classified one
   maybe let's try three neighbors instead
   instead of just using one neighbor do
   more of a k nearest neighbors approach
   where I look at the three nearest
   neighbors and see how that performs and
   that one in this case seems to have
   gotten 100% of all of the predictions
   correctly described as either
   authentic banknotes or as counterfeit
   Bank notes and you know we could run
   these experiments multiple times because
   I'm randomly reorganizing the data every
   time we're technically training these on
   slightly different data sets and so you
   might want to run multiple experiments
   to really see how well they're actually
   going to perform but in short they all
   perform very well and while some of them
   perform slightly better than others here
   that might not always be the case for
   every data set but you can begin to test
   now by very quickly putting together
   these machine learning models using pit
   learn to be able to train on some
   training set and then test on some
   testing set as well and this splitting
   up into training groups and testing
   groups and testing happens so often that
   psyit learn has functions built in for
   trying to do it I did it all by hand
   just now but if we take a look at
   banknotes one we take advantage of some
   other features that exist in pyit learn
   uh where we can really simplify a lot of
   our logic that there is a function built
   into pyit learn called train test split
   which will automatically split data into
   a training group and a testing group I
   just have to say What proportion should
   be in the testing group something like
   0.5 half the data inside the testing
   group then I can fit the model on the
   trading data make the predictions on the
   testing data and then just count up and
   pyit learn has some nice methods for
   just counting up how many times our
   testing data match the predictions how
   many times our testing data didn't match
   the predictions so very quickly you can
   write programs with not all that many
   lines of code it's maybe like 40 lines
   of code to get through all of these
   predictions and then as a see how well
   we're able to do so these types of
   libraries can allow us without really
   knowing the implementation details of
   these algorithms to be able to use the
   algorithms in a very practical way to be
   able to solve these types of
   problems so that then was supervised
   learning this task of given a whole set
   of data some input output pairs we would
   like to learn some function that Maps
   those inputs to those outputs but turns
   out there are other forms of learning as
   well and another popular type of machine
   learning especially nowadays is known as
   reinforcement learning and the idea of
   reinforcement learning is rather than
   just being given a whole data set at the
   beginning of input output pairs
   reinforcement learning is all about
   learning from experience in
   reinforcement learning our agent whether
   it's like a physical robot that's trying
   to make actions in the world or just
   some virtual agent that is a program
   running somewhere our agent is going to
   be given a set of Rewards or punishments
   in the form of like numerical values but
   you can think of them as reward or
   punishment and based on that it learns
   what actions to take in the future that
   our agent our AI will be put in some
   sort of environment it will make some
   actions and based on the actions that it
   makes it learns something it either gets
   a reward when it does something well it
   gets a punishment when it does something
   poorly and it learns what to do or what
   not to do in the future based on those
   individual experiences and so what this
   will often look like is it will often
   start with some agent some AI which
   might again be a physical robot if
   you're imagining a physical robot moving
   around but it could also just be a
   program and our agent is situated in
   their environment where the environment
   is where they're going to make their
   actions and it's what's going to give
   them Rewards or punishments for various
   actions that they're in so for example
   the environment is going to start off by
   putting our agent inside of a state our
   agent has some state that in a game
   might be the state of the game that the
   agent is playing in a world that the
   agent is exploring might be some
   position inside of a grid representing
   the world that they're exploring but the
   agent is in some sort of state and in
   that state the agent needs to choose to
   take an action the agent likely has
   multiple actions they can choose from
   but they pick an action so they may they
   take an action in a particular State and
   as a result of that the agent will
   generally get two things in response as
   we model them the agent gets a new state
   that they find themselves in after being
   in this state taking one action they end
   up in some other state and they're also
   given some sort of numerical reward
   positive meaning reward meaning it was a
   good thing negative generally meaning
   they did something bad they receed some
   sort of punishment and that is all the
   information the agent has it's told what
   state it's in it makes some sort of
   action and based on that it ends up in
   another state and it ends up getting
   some particular reward and it needs to
   learn based on that information what
   actions to begin to take in the future
   and so you could imagine generalizing
   this to a lot of different situations
   this is often times how you train if
   you've ever seen those Rob that are now
   able to like walk around sort of the way
   humans do it would be quite difficult to
   program the robot in exactly the right
   way to get it to walk the way humans do
   you could instead train it through
   reinforcement learning give it some sort
   of numerical reward every time it does
   something good like take steps forward
   and punish it every time it does
   something bad like fall over and then
   let the AI just alert based on that
   sequence of rewards based on trying to
   take various different actions you can
   begin to have the agent learn what to do
   in the future and what not to do so in
   order to begin to formalize this the
   first thing we need to do is formalize
   this notion of what we mean about States
   and actions and rewards like what does
   this world look like and often times
   we'll formulate this world as what's
   known as a marov decision process
   similar in spirit to Markov chains which
   you might recall from before but a
   Markov decision process is a model that
   we can use for decision making for an
   agent trying to make decisions in its
   environment and it's a model that allows
   us to represent the various different
   states that an agent can be in the
   various different actions that they can
   take and also what the reward is for
   taking one action as opposed to another
   action so what then does it actually
   look like well if you recall a marov
   chain from before A marov chain looked a
   little something like this where we had
   a whole bunch of these individual states
   and each state immediately transitioned
   to another state based on some
   probability distribution we saw this in
   the context of the weather before where
   if it was sunny we said with some
   probability it'll be sunny the next day
   with some other probability it'll be
   rainy for example but we could also
   Imagine generalizing this it's not just
   sun and rain anymore we just have these
   states where one state leads to another
   state According to some probability
   distribution but in this original model
   there was no agent that had any control
   over this process it was just entirely
   probability based where with some
   probability we move to this next state
   but maybe it's going to be some other
   state with some other probability what
   we'll now have is the ability for the
   agent in the state to choose from a set
   of actions where maybe instead of just
   one path forward they have three
   different choices of actions that each
   lead down different path and even this
   is a bit of an oversimplification
   because in each of these states you
   might imagine more branching points
   where there are more decisions that can
   be taken as well so we've extended the
   marov chain to say that from a state you
   now have available action choices and
   each of those actions might be
   associated with its own probability
   distribution of going to various
   different states then in addition We'll
   add another extension where anytime you
   move from a state taking an action going
   into this other state we can associate a
   reward with that outcome saying either R
   is positive meaning some positive reward
   or R is negative meaning there was some
   sort of punishment and this then is what
   we'll consider to be a Markov decision
   process that a Markov decision process
   has some initial set of states of states
   in the world that we can be in we have
   some set of actions that given a state I
   can say what are the that are available
   to me in that state an action that I can
   choose from then we have some transition
   model the transition model before just
   said that given my current state what is
   the probability that I end up in that
   next state or this other state the
   transition model now has effectively two
   things we're conditioning on we're
   saying given that I'm in this state and
   that I take this action what's the
   probability that I end up in this next
   state now maybe we live in a very
   deterministic World in this marov
   decision process we given a state and
   given an action we know for sure what
   next state will end up in but maybe
   there's some Randomness in the world
   that when you take in a state and you
   take an action you might not always end
   up in the exact same state there might
   be some probabilities involved there as
   well the Markov decision process can
   handle both of those possible cases and
   then finally we have a reward function
   generally called r that in this case
   says what is the reward for being in
   this state taking this action and then
   getting to S Prime this next state so
   I'm in this original state I take this
   action I get to this next state what is
   the reward for doing that process and
   you can add up these rewards every time
   you take an action to get the total
   amount of rewards that an agent might
   get from interacting in a particular
   environment modeled using this marov
   decision process so what might this
   actually look like in practice well
   let's just create a little simulated
   World here where I have this agent that
   is just trying to navigate its way this
   agent is this yellow dot here like a
   robot in the world trying to na get its
   way through this grid and ultimately
   it's trying to find its way to the goal
   and if it gets to the green goal then
   it's going to get some sort of reward
   but then we might also have some you
   know red squares that are places where
   you get some sort of punishment some bad
   place where we don't want the agent to
   go and if it ends up in the Red Square
   then our agent is going to get some sort
   of punishment as a result of that but
   the agent originally doesn't know all of
   these details it doesn't know that these
   states are associated with punishments
   but maybe it does know this state is
   associated with a reward maybe it
   doesn't but it just needs to sort of
   interact with the environment to try and
   figure out what to do and what not to do
   so the first thing the agent might do is
   given no additional information if it
   doesn't know what the punishments are it
   doesn't know where the rewards are it
   just might try and take an action and it
   takes an action and ends up realizing
   that it got some sort of punishment and
   so what does it learn from that
   experience well it might learn that when
   you're in this state in the future don't
   take the action move to the right right
   that that is a bad action to take that
   in the future if you ever find yourself
   back in the state don't take this action
   of going to the right when you're in
   this particular State because that leads
   to punishment that might be the
   intuition at least and so you could try
   doing other actions you move up all
   right that didn't lead to any immediate
   rewards maybe try something else uh then
   maybe try something else and all right
   now you found that you got another
   punishment and so you learn something
   from that experience so the next time
   you do this whole process you know that
   if you ever end up in this Square you
   shouldn't take the down action because
   being in the state and taking that
   action ultimately leads to some sort of
   punishment a negative reward in other
   words and this process repeats that you
   might imagine just letting our agent
   explore the world learning over time
   what states tend to correspond with poor
   actions learning over time what states
   correspond with poor actions until
   eventually if it tries enough things
   randomly it might find that eventually
   when you get to this state if you take
   the up action in this state it might
   find that you actually get a reward from
   that
   and what it can learn from that is that
   if you're in this state you should take
   the up action because that leads to a
   reward and over time you can also learn
   that if you're in this state you should
   take the left action because that leads
   to this state that also lets you
   eventually get to the reward so you
   begin to learn over time not only which
   actions are good in particular States
   but also which actions are bad such that
   once you know some sequence of good
   actions that leads you to some sort of
   reward our agent can just follow those
   instructions follow the experience that
   it has learned we didn't tell the agent
   what the goal was we didn't tell the
   agent where the punishments were but the
   agent can begin to learn from this
   experience and learn to begin to perform
   these sorts of tasks better in the
   future and so let's now try to formalize
   this idea formalize the idea that we
   would like to be able to learn in this
   state taking this action is that a good
   thing or a bad thing there are lots of
   different models for reinforcement
   learning we're just going to look at one
   of them today and the one that we're
   going to look at is a method known as Q
   learning and what Q learning is all
   about is it's about learning a function
   a function q that takes inputs s and a
   where s is a state and a is an action
   that you take in that state and what Q
   is this Q function is going to do is it
   is going to estimate the value how much
   reward will I get from taking this
   action in this
   state originally we don't know what this
   Q function should be but over time based
   on experience based on trying things out
   and seeing what the result is I would
   like to try and learn what Q of essay is
   for any particular State and any
   particular action that I might take in
   that state so what is the approach well
   the approach originally is we'll start
   with qsa equal to zero for all states s
   and for all actions a that initially
   before I've ever started anything before
   I've had any experiences I don't know
   the value of taking any action in any
   given state so I'm going to assume that
   the value is just zero all across the
   board but then as I interact with the
   world as I experience Rewards or
   punishments or maybe I go to a cell
   where I don't get either a reward or a
   punishment I want to somehow update my
   estimate of qsa I want to continually
   update my estimate of qsa based on the
   experiences and rewards and punishments
   that I've received such that in the
   future my knowledge of what actions are
   good in what states will be better so
   when we take an action and receive some
   sort of reward I want to estimate the
   new value of qsa and I estimate that
   based on a couple of different things I
   estimate it based on the reward that I'm
   getting from taking this action and
   getting into the next state but assuming
   like the situation isn't over assuming
   there are still future actions that I
   might take as well I also need to take
   into account the expected future rewards
   that if you imagine an agent interacting
   with the environment and sometimes
   you'll take an action and get a reward
   but then you can keep taking more
   actions and get more rewards that these
   both are relevant both the current
   reward I'm getting from this current
   step and also my future reward and it
   might be the case that I'll want to take
   a step that doesn't immediately lead to
   a reward because later on down the line
   I know it will lead to more rewards as
   well so there's a balancing act between
   current rewards that the agent
   experiences and future rewards that the
   agent experiences as
   well and then we need to update qsa so
   we estimate the value of qsa based on
   the current reward and the expected
   future rewards and then we need to
   update dat this Q function to take into
   account this new estimate now we already
   as we go through this process we'll
   already have an estimate for what we
   think the value is now we have a new
   estimate and then somehow we need to
   combine these two estimates together and
   we'll look at more formal ways that we
   can actually begin to do that so to
   actually show you what this formula
   looks like here is the approach we'll
   take with Q learning we're going to
   again start with Q of sna being equal to
   zero for all states and then every time
   we take an action a in state s and
   observer reward R we're going to update
   our value our estimate for Q of essay
   and the idea is that we're going to
   figure out what the new Value Estimate
   is minus what our existing Value
   Estimate is so we have some preconceived
   notion for what the value is for taking
   this action in this state maybe our
   expectation is we currently think the
   value is 10 but then we're going to
   estimate what we now think it's going to
   be maybe the new value estimate is
   something like 20 so there's a Delta of
   like 10 that our new Value Estimate is
   10 points higher than what our current
   Value Estimate happens to be and so we
   have a couple of options here we need to
   decide how much we want to adjust our
   current expectation of what the value is
   of taking this action in this particular
   State and what that difference is how
   much we add or subtract from our
   existing notion of how much we expect
   the value to be is dependent on this
   parameter Alpha also called a learning
   rate and Alpha represents in effect how
   much we value new information compared
   to how much we Value Old information an
   alpha value of one means we really value
   new information that if we have a new
   estimate then it doesn't matter what our
   old estimate is we're only going to
   consider our new estimate because we
   always just want to take into
   consideration our new information so the
   way that works is that if you imagine
   Alpha being one well then we're taking
   the old value of qsa
   and then adding one times the new value
   minus the old value and that just leaves
   us with the new value so when Alpha is
   one all we take into consideration is
   what our new estimate happens to be but
   over time as we go through a lot of
   experiences we already have some
   existing information we might have tried
   taking this action nine times already
   and now we just tried it a tenth time
   and we don't only want to consider this
   10th experience I also want to consider
   the fact that my prior nine experiences
   those were meaning F too and that's data
   I don't necessarily want to lose and so
   this Alpha controls that decision
   controls how important is the new
   information zero would mean ignore all
   the new information just keep this Q
   value the same one means replace the old
   information entirely with the new
   information and somewhere in between
   keep some sort of balance between these
   two values we can put this equation a
   little bit more formally as well the old
   Value Estimate is our old estimate for
   what the value is of taking this action
   in a particular State that's just Q of
   sna so we have it once here and we're
   going to add something to it we're going
   to add Alpha times the new Value
   Estimate minus the old Value Estimate
   but the old Value Estimate we just look
   up by calling this Q
   function and what then is the new Value
   Estimate based on this experience we
   have just taken what is our new estimate
   for the value of taking this action in
   this particular State well it's going to
   be composed of two parts it's going to
   be composed of what reward did I just
   get from taking this action in this
   state and then it's going to be what can
   I expect my future rewards to be from
   this point forward so it's going to be R
   some reward I'm getting right now plus
   whatever I estimate I'm going to get in
   the future and how do I estimate what
   I'm going to get in the future well it's
   a bit of a another call to this Q
   function it's going to be take the
   maximum across all possible actions I
   could take next
   and say all right of all of these
   possible actions I could take which one
   is going to have the highest reward so
   this then looks a little bit complicated
   this is going to be our notion for how
   we're going to perform this kind of
   update that I have some estimate some
   old estimate for what the value is of
   taking this action in the state and I'm
   going to update it based on new
   information that I experience some
   reward I predict what my future reward
   is going to be and using that I update
   what what I estimate the reward will be
   for taking this action in this
   particular State and there are other
   additions you might make to this
   algorithm as well sometimes it might not
   be the case that future rewards you want
   to wait equally to current rewards maybe
   you want an agent that values like
   reward now over reward later and so
   sometimes you can even add another term
   in here some other parameter where you
   discount future rewards and say future
   rewards are not as valuable as rewards
   immediately that getting reward in the
   current time step is better than waiting
   a year and getting rewards later but
   that's something up to the programmer to
   decide what that parameter ought to be
   but the big picture idea of this entire
   formula is to say that every time we
   experience some new reward we take that
   into account we update our estimate of
   how good is this action and then in the
   future we can make decisions based on
   that algorithm once we've have some good
   estimate for every state and for every
   action what the value is of taking that
   action then we can do something like
   Implement a greedy decision-making
   policy that if I am in a state and I
   want to know what action should I take
   in that state well then I consider for
   all of my possible actions what is the
   value of qsa what is my estimated value
   of taking that action in that state and
   I will just pick the action that has the
   highest value after I evaluate that
   expression so I pick the action that has
   the highest value and based on that that
   tells me what action I should take at
   any given state that I'm in I can just
   greedily say across all my actions this
   action gives me the highest expected
   value and so I'll go ahead and choose
   that action as the action that I take as
   well but there is a downside to this
   kind of approach and the downside comes
   up in a situation like this where we
   know that you know there is some
   solution that gets me to the
   reward and our agent has been able to
   figure that out but it might not
   necessarily be the best way or the
   fastest way if the agent is allowed to
   explore a little bit more it might find
   that it can get the reward faster by
   taking some other route instead by going
   through this particular path that is a
   faster way to get to that ultimate goal
   and maybe we would like for the agent to
   be able to figure that out as well but
   if the agent always takes the actions
   that it knows to be best well when it
   gets to this particular Square it
   doesn't know that this is a good action
   because it's never really tried it but
   it knows that going down eventually
   leads its way to this reward so it might
   learn in the future that it should just
   always take this route and it's never
   going to explore and go along that route
   instead so in reinforcement learning
   there's this tension between exploration
   and exploitation and exploitation
   generally refers to using knowledge that
   the AI already has the AI already knows
   that this is a move that leads to reward
   so we'll go ahead and use that move and
   exploration is all about exploring other
   actions that we may not have explored as
   thoroughly before because maybe one of
   these actions even if I don't know
   anything about it might lead to better
   rewards faster or to more rewards in the
   future and so an agent that only ever
   exploits information and never explores
   might be able to get reward but it might
   not maximize its rewards because it
   doesn't know what other possibilities
   are out there possibilities that we only
   know about by taking advantage of
   exploration and so how can we try and
   address this well one possible solution
   is known as the Epsilon greedy algorithm
   where we set Epsilon equal to how often
   we want to just make a random move where
   occasionally we will just make a random
   move in order to say let's try to
   explore and see what
   happens and then the logic of the
   algorithm will be with probability 1
   minus Epsilon choose the estimated best
   move in a greedy case we'd always choose
   the best move but in epsilon greedy
   we're most of the time going to choose
   the best move or sometimes going to
   choose the best move but sometimes with
   probability Epsilon we're going to
   choose a random move in instead so every
   time we're faced with the ability to
   take an action sometimes we're going to
   choose the best move sometimes we're
   just going to choose a random move so
   this type of algorithm then can be quite
   powerful in a reinforcement learning
   context by not always just choosing the
   best possible move right now but
   sometimes especially early on allowing
   yourself to make random moves that allow
   you to explore various different
   possible States and actions more and
   maybe over time you might decrease your
   value of Epsilon more and more often
   choosing the best move after you're more
   confident that you've explored what all
   of the possibilities actually are so we
   can put this into practice and one very
   common application of reinforcement
   learning is in game playing that if you
   want to teach an agent how to play a
   game you just let the agent play the
   game a whole bunch and then the reward
   signal happens at the end of the game
   when the game is over if our AI won the
   game it gets a reward of like one for
   example and if it lost the game it gets
   a reward of negative one and from that
   it begins to learn what actions are good
   and what actions are bad you don't have
   to tell the AI what's good and what's
   bad but the AI figures it out based on
   that reward winning the game is some
   signal losing the game is some signal
   and based on all of that it begins to
   figure out what decisions it should
   actually make so one very simple game
   which you may have played before is a
   game called Nim and in the game of nim
   you've got a whole bunch of objects in a
   whole bunch of different piles where
   here I've represented each pile as an
   individual row so you've got one object
   in the first pile three in the second
   pile five in the third pile seven in the
   fourth pile and the game of nim is a
   two-player game where players take turns
   removing objects from piles and the rule
   is that on any given turn you were
   allowed to remove as many objects as you
   want from any one of these piles any one
   of these rows you have to remove at
   least one object but you can remove as
   many as you want from exactly one of the
   piles and whoever takes the last object
   loses so player one might like remove
   four from this pile here player two
   might remove four from this pile here so
   now we've got four piles left one three
   one and three player one might remove
   you know the entirety of the second pile
   player two if they're being strategic
   might remove all uh might remove two
   from the third pile now we've got three
   piles left each with one object left
   player one might remove one from one
   pile player two removes one from the
   other pile uh and now player one is left
   with choosing this one object from the
   last pile at which point player one
   loses the game so fairly simple game
   piles of objects any turn you choose how
   many objects to remove from a pile
   whoever removes the last object loses
   and this is the type of game you could
   encode into an AI fairly easily because
   the states are really just four numbers
   every state is just how many objects in
   each of the four piles and the actions
   are things like how many am I going to
   remove from each one of these individual
   piles and the reward happens at the end
   that if you were the player that had to
   remove the last object then you get some
   sort of punishment but if you were not
   and the other player had to remove the
   last object well then you get some sort
   of reward so we could actually try and
   show a demonstration of this that I've
   implemented an AI to play the game of
   nim all right so here what we're going
   to do is create an AI as a result of
   training the AI on some number of games
   that the AI is going to play against
   itself where the idea is the AI will
   play games against itself learn from
   each of those experiences and learn what
   to do in the future and then I the human
   will play against the AI so initially
   we'll say train zero times meaning we're
   not going to let the AI uh play any
   practice games against itself in order
   to learn from its experiences we're just
   going to see how well it plays and it
   looks like there are four piles I can
   choose how many I remove from any one of
   the piles so maybe from pile three I
   will remove five objects for example uh
   so now ai chose to take one item from
   pile zero so I'm left with these piles
   now for example and so here I could
   choose Maybe to say I would like to
   remove from pile two I'll remove all
   five of them for example and so AI chose
   to take two away from pile one now I'm
   left with one pile that has one object
   one pile that has two objects so from
   pile three I will remove two objects and
   now I've left the I with no choice but
   to take that last one and so the game is
   over and I was able to win but I did so
   cuz the AI was really just playing
   randomly it didn't have any prior
   experience that it was using in order to
   make these sorts of judgments
   now let me let the AI train itself on
   like 10,000 games I'm going to let the
   AI Play 10,000 games of nim against
   itself every time it wins or loses it's
   going to learn from that experience and
   learn in the future what to do and what
   not to do so here then I'll go ahead and
   run this again and now you see the AI
   running through a whole bunch of
   training games 10,000 training games
   against itself and now it's going to let
   me make these sorts of decisions so now
   I'm going to play against the AI maybe
   I'll remove one from pile P three uh and
   the AI took everything from pile three
   so I'm left with three piles I'll go
   ahead and from pile two maybe remove
   three items um and the AI removes one
   item from pile zero I'm left with two
   piles Each of which has two items in it
   uh I'll remove one from pile one I guess
   um and the AI took two from pile two
   leaving me with no choice but to take
   one away from pile one so it seems like
   after playing 10,000 games of nim
   against itself the AI has learned
   something about what states and what
   actions tend to be good and has begun to
   learn some sort of pattern for how to
   predict what actions are going to be
   good and what actions are going to be
   bad in any given state so reinforcement
   learning can be a very powerful
   technique for achieving these sorts of
   game playing agents agents that are able
   to play a game well just by learning
   from experience whether that's playing
   against other people or by playing
   against itself and learning from those
   experiences as well now Nim is a bit of
   an easy game to use reinfor learning for
   because there are so few states there
   are only states that are as many as how
   many different objects are in each of
   these various different piles you might
   imagine that it's going to be harder if
   you think of a game like chess or games
   where there are many many more States
   and many many more actions that you can
   imagine taking where it's not going to
   be as easy to learn for every state and
   for every action what the value is going
   to be so often times in that case we
   can't necessarily learn exactly what the
   value is for every state and for every
   action but we can approximate it so much
   as we saw with Minimax that we could use
   a depth limiting approach to stop
   calculating at a certain point in time
   we can do a similar type of
   approximation known as function
   approximation in a reinforcement
   learning context where instead of
   learning a value of Q for every state
   and every action we just have some
   function that estimates what the value
   is for taking this action in this
   particular state that might be based on
   various different features of the state
   that the environment that the agent
   happens to be in where you might have to
   choose what those features actually are
   but you can begin to learn some patterns
   that generalize Beyond one specific
   State and one specific action that you
   can begin to learn if certain features
   tend to be good things or bad things
   reinforcement learning can allow you
   using a very similar mechanism to
   generalize Beyond one particular State
   and say if this other state looks kind
   of like this state then maybe the
   similar types of actions that worked in
   one state will also work in another
   state as well and so this type of
   approach can be quite helpful as you
   begin to deal with reinforcement
   learning that exists in larger and
   larger State spaces where it's just not
   feasible to explore all of the possible
   states that could actually
   exist so there then are two of the main
   categories of reinforcement learning
   supervised learning where you have
   labeled input and output Pairs and
   reinforcement learning where an agent
   learns from Rewards or punishments that
   it receives the third major category of
   machine learning that we'll just touch
   on briefly is known as unsupervised
   learning and unsupervised learning
   happens when we have data without any
   additional feedback without labels that
   in the supervised learning case all of
   our data had labels we labeled a data
   point with whether that was a rainy day
   or a not rainy day and using those
   labels we were able to infer what the
   pattern was or we labeled data as a
   counterfeit bank note or not a
   counterfeit and using those labels we
   were able to draw inferences and
   patterns to figure out what it does a
   bank note look like versus not in
   unsupervised learning we don't have any
   access to any of those labels but we
   still would like to learn some of those
   patterns and one of the tasks that you
   might want to perform in unsupervised
   learning is something like clustering
   where clustering is just a task of given
   some set of objects organize it into
   distinct clusters groups of objects that
   are similar to one another and there's
   lots of applications for clustering it
   comes up in genetic research where you
   might have a whole bunch of different
   genes and you want to Cluster them into
   similar genes if you're trying to
   analyze across a population or across
   species it comes up in an image if you
   want to take all the pixels of an image
   cluster them into different parts of the
   image comes a lot a lot up in market
   research if you want to divide your
   consumers into different groups so you
   know which groups to Target with certain
   types of product advertisements for
   example and a number of other context as
   well in which clustering can be very
   applicable one technique for clustering
   is an algorithm known as K means
   clustering and what K means clustering
   is going to do is it is going to divide
   all of our data points into K different
   clusters
   and it's going to do so by repeating
   this process of assigning points to
   clusters and then moving around those
   clusters centers we're going to define a
   cluster by its Center the middle of the
   cluster and then assign points to that
   cluster based on which Center is closest
   to that point and I'll show you an
   example of that now here for example I
   have a whole bunch of unlabeled data
   just various data points that are in
   some sort of graphical space and I would
   like to group them into different
   clusters but I don't know how to do that
   originally and let's say I want to put
   assign like three clusters to this group
   and you have to choose how many clusters
   you want in K means clustering that you
   could try multiple and see how well
   those values perform but I'll start just
   by randomly picking some places to put
   the centers of those clusters that maybe
   I have a blue cluster a red cluster and
   a green cluster and I'm going to start
   with the centers of those clusters just
   being in these three locations here and
   what K means clustering tells us to do
   is once I have the centers of the
   Clusters assign every point to a cluster
   based on which cluster Center it is
   closest to so we end up with something
   like this where all of these points are
   closer to the blue cluster Center than
   any other cluster Center all of these
   points here are closer to the green
   cluster Center than any other cluster
   Center and then these two points plus
   these points over here those are all
   closest to the red cluster Center
   instead so here then is one possible
   assignment of all these points to three
   different clusters but it's not great
   that it seems like in this red cluster
   these points are kind of far apart in
   this green cluster these points are kind
   of far apart it might not be my ideal
   choice of how I would cluster these
   various different data points but K
   means clustering is an iterative process
   that after I do this there's a Next Step
   which is that after I've assigned all of
   the points to the cluster Center that it
   is nearest to we are going to reenter
   the cluster meaning take the cluster
   centers these diamond shapes here and
   move them to the middle or the average
   effectively of all of the points that
   are in that cluster so we'll take this
   blue point this blue Center and go ahead
   and move it to the middle or to the
   center of all of the points that were
   assigned to the blue cluster moving it
   slightly to the right in this case and
   we'll do the same thing for red we'll
   move the cluster Center to the middle of
   all of these points weighted by how many
   points there are there are more points
   over here so the red Center ends up
   moving a little bit further that way and
   likewise for the green center there are
   many more points on this PL this side of
   the green center so the green center
   ends up being pulled a little bit
   further in this direction so we reenter
   all of the Clusters and then we repeat
   the process we go ahead and now reassign
   all of the points to the cluster Center
   that they are now closest to and now
   that we've moved around the cluster
   centers these cluster assignments might
   change that this point originally was
   closer to the red cluster Center but now
   it's actually closer to the blue cluster
   Center same goes for this point as well
   and these three points that were
   originally closer to the green cluster
   Center are now closer to the red cluster
   Center instead so we can reassign what
   colors or which which clusters each of
   these data points belongs to and then
   repeat the process again moving each of
   these cluster means the middles of the
   Clusters to the mean the average of all
   of the other points that happen to be
   there and repeat the process again
   go ahead and assign each of the points
   to the cluster that they are closest to
   so once we reach a point where we've
   assigned all the points to clusters to
   the cluster that they are nearest to and
   nothing changed we've reached a sort of
   equilibrium in this situation where no
   points are changing their allegiance and
   as a result we can declare this
   algorithm is now over and we now have
   some assignment of each of these points
   into three different clusters and it
   looks like we did a pretty good job of
   trying to identify which points are more
   similar to one another than they are to
   point in other groups so we have the
   green cluster down here this blue
   cluster here and then this red cluster
   over there as well and we did so without
   any access to some labels to tell us
   what these various different clusters
   were we just used an algorithm in an
   unsupervised sense without any of those
   labels to figure out which points
   belonged to which categories and again
   lots of applications for this type of
   clustering technique and there are many
   more algorithms in each of these various
   different fields within machine learning
   supervised and reinforcement and
   unsupervised
   but those are many of the the big
   picture foundational ideas that under a
   lot of these techniques where that these
   are the problems that we're trying to
   solve and we try and solve those
   problems using a number of different
   methods of trying to take data and learn
   patterns in that data whether that's
   trying to find neighboring data points
   that are similar or Trying to minimize
   some sort of loss function or any number
   of other techniques that allow us to
   begin to try to solve these sorts of
   problems that then was a look at some of
   the principles that are at the
   foundation of modern machine learning
   this ability to take data and learn from
   that data so that the computer can
   perform a task even if they haven't
   explicitly been given instructions in
   order to do so next time we'll continue
   this conversation about machine learning
   looking at other techniques we can use
   for solving these sorts of problems
   we'll see you then
   [Music]
   all right welcome back everyone to an
   introduction to artificial intelligence
   with python now last time we took a look
   at machine learning a set of techniques
   that computers can use in order to take
   a set of data and learn some patterns
   inside of that data learn how to perform
   a task even if we the programmers didn't
   give the computer explicit instructions
   for how to perform that task today we
   transition to one of the most popular
   techniques and tools within machine
   learning that of neural networks and
   neural networks were inspired as early
   as the 1940s by researchers who were
   thinking about how it is that humans
   learn studying neuroscience and the
   human brain and trying to see whether or
   not we could apply those same ideas to
   computers as well and model Computer
   Learning off of human learning so how is
   the brain structured well very simply
   put the brain is consists of a whole
   bunch of neurons and those neurons are
   connected to one another and communicate
   with one another in some way in
   particular if you think about the
   structure of a biological neural network
   something like this there are a couple
   of Key properties that scientists
   observed uh one was that these neurons
   are connected to each other and receive
   electrical signals from one another that
   one neuron can propagate electrical
   signals to another neuron and another
   point is that neurons process those
   input signals and then can be activated
   that a neuron becomes activated at a
   certain point and then can propagate
   further signals onto neurons in the
   future and so the question then became
   could we take this biological idea of
   how it is that humans learn with brains
   and with neurons and apply that to a
   machine as well in effect designing an
   artificial neural network or Ann which
   will be a mathematical model for
   learning that is inspired by these
   biological neural networks and what
   artificial neural networks will allow us
   to do is they will first be able to
   model some sort of mathematical function
   every time you look at a neural network
   which we'll see more of later today each
   one of them is really just some
   mathematical function that is mapping
   certain inputs to particular outputs
   based on the structure of the network
   that depending on where we place
   particular units inside of this neural
   network that's going to determine how it
   is that the network is going to function
   and in particular artificial neural
   networks are going to lend themselves to
   a way that we can learn what the
   Network's parameters should be we'll see
   more on that in just a moment but in
   effect we want a model such that it is
   easy for us to be able to write some
   code that allows for the network to be
   able to figure out how to model the
   right mathematical function given a
   particular set of input data so in order
   to create our artificial neural network
   instead of using biological neurons
   we're just going to use what we're going
   to call units units inside of a neural
   network which we can represent kind of
   like a node in a graph which will here
   be represented just by a blue circle
   like this and these artificial units
   these artificial neurons can be
   connected to one another so here for
   instance we have two units that are
   connected by this Edge inside of this
   graph effectively and so what we're
   going to do now is think of this idea as
   some sort of mapping from inputs to
   outputs so we have one unit that is is
   connected to another unit that we might
   think of this side as the input and that
   side of the output and what we're trying
   to do then is to figure out how to solve
   a problem how to model some sort of
   mathematical function and this might
   take the form of something we saw last
   time which was something like we have
   certain inputs like variables X1 and X2
   and given those inputs we want to
   perform some sort of task a task like
   predicting whether or not it's going to
   rain and ideally we'd like some way
   given these inputs X1 and X2 which stand
   for some sort of variables to do with
   the weather we would like like to be
   able to predict in this case a Boolean
   classification is it going to rain or is
   it not going to rain and we did this
   last time by way of a mathematical
   function we defined some function H for
   our hypothesis function that took as
   input X1 and X2 the two inputs that we
   cared about processing in order to
   determine whether we thought it was
   going to rain or whether we thought it
   was not going to rain the question then
   becomes what does this hypothesis
   function do in order to make that
   determination and we decided last time
   to use a linear combination of these
   input variables to determine what the
   output should be so our hypothesis
   function was equal to something like
   this weight 0 plus weight 1 _ X1 plus
   weight 2 _ X2 so what's going on here is
   that X1 and X2 those are input variables
   the inputs to this hypothesis function
   and each of those input variables is
   being multiplied by some weight which is
   just some number so X1 is being
   multiplied by weight one X2 is being
   multiplied by weight two and we have
   this additional weight weight zero that
   doesn't get multiplied by an input
   variable at all that just serves to
   either move the function up or move the
   function's value down you can think of
   this as either a weight that's just
   multiplied by some dummy value like the
   number one and it's multiplied by one
   and so it's not multiplied by anything
   or sometimes you'll see in the
   literature people call this variable
   weight zero a bias so that you can think
   of these variables are slightly
   different we have weights that are
   multiplied by the input and we
   separately add some bias to the the
   result as well you'll hear both of those
   terminologies used when people talk
   about neural networks and machine
   learning so in effect what we've done
   here is that in order to define a
   hypothesis function we just need to
   decide and figure out what these weights
   should be to determine what values to
   multiply by our inputs to get some sort
   of result of course at the end of this
   what we need to do is make some sort of
   classification like rainy or not raining
   and to do that we use some sort of
   function so that defin some sort of
   threshold and so we saw for inst
   the step function which is defined as
   one if the weight if the result of
   multiplying the weights by the inputs is
   at least zero otherwise at zero uh and
   you can think of this line down the
   middle as kind of like a dotted line
   effectively it stays at zero all the way
   up to one point and then the function
   steps or jumps up to one so it's zero
   before it reaches some threshold and
   then it's one after it reaches a
   particular threshold and so this was one
   way we could Define what we'll come to
   call an activation function a function
   that determines when it is this output
   becomes active changes to a one instead
   of being a zero but we also saw that if
   we didn't just want a purely binary
   classification we didn't want purely one
   or zero but we wanted to allow for some
   in between real numbered values we could
   use a different function and there are a
   number of choices but the one that we
   looked at was the logistic sigmoid
   function that has sort of an s-shaped
   curve where we could represent this as a
   probability that maybe somewhere in
   between the probability of rain is
   something like 0.5 maybe a little bit
   later the probability of reain is 0.8
   and so rather than just have a binary
   classification of 0 or one we could
   allow for numbers that are in between as
   well and it turns out there are many
   other different types of activation
   functions where an activation function
   just takes the output of multiplying the
   weights together and adding that bias
   and then figuring out what the actual
   output should be another popular one is
   the rectified linear unit otherwise
   known as reu and the way that works is
   that it just takes its input and takes
   the maximum of that input and zero so if
   it's positive it remains unchanged but
   if it's zero if it's negative it goes
   ahead and levels out at zero and there
   are other activation functions that we
   could choose as well but in short each
   of these activation functions you can
   just think of as a function that gets
   applied to the result of all of this
   computation we take some function G and
   apply it to the result of all of that
   calculation and this then is what we saw
   last time the way of defining some
   hypothesis function that takes in inputs
   calculates some linear combination of
   those inputs and then passes it through
   some sort of activation function to get
   our output and this actually turns out
   to be the model for the simplest of
   neural networks that we're going to
   instead represent this mathematical idea
   graphically by using a structure like
   this here then is a neural network that
   has two inputs we can think of this is
   X1 and this is X2 and then one output
   which you can think of classifying
   whether or not we think it's going to
   rain or not rain for example in this
   particular instance and so how exactly
   does this model work well each of these
   two inputs represents one of our input
   variables X1 and X2 and notice that
   these inputs are connected to this
   output via these edges which are going
   to be defined by their weights so these
   edges each have a weight associated with
   them weight one and weight two and then
   this output unit what it's going to do
   is it is going to calculate an output
   based on those inputs and based on those
   weights this output unit is going to
   multiply all the inputs by their weights
   add in this bias term which you can
   think of as an extra w0 term that gets
   added into it and then we pass it
   through an activation function so this
   then is just a graphical way of
   representing the same idea we saw last
   time just mathematically and we're going
   to call this a very simple neural
   network and we'd like for this neural
   network to be able to learn how to
   calculate some function that we want
   some function for the neural network to
   learn and the neural network is going to
   learn what should the values of w0 W1
   and W2 be what should the activation
   function in to get the result that we
   would expect so we can actually take a
   look at an example of this what then is
   a very simple function that we might
   calculate well if we recall back from
   when we were looking at propositional
   logic one of the simplest functions we
   looked at was something like the or
   function that takes two inputs X and Y
   and outputs one otherwise known as true
   if either one of the inputs or both of
   them are one and outputs a zero if both
   of the inputs are zero or false so this
   then is the or function and this was the
   truth table for the or function that as
   long as either of the inputs are one the
   output of the function is one and the
   only case where the output is zero is
   where both of the inputs are zero so the
   question is how could we take this and
   train a neural network to be able to
   learn this particular function what
   would those weights look like well we
   could do something like this here's our
   neural network and I'll propose that in
   order to calculate the or function we're
   going to use a value of one for each of
   the weights and we'll use a bias of
   negative one and then we'll just use
   this step function as our activation
   function how then does this work well if
   I wanted to calculate something like Z
   or zero which we know to be zero because
   false or false is false then what are we
   going to do well our output unit is
   going to calculate this input multiplied
   by the weight 0 _ 1 that's 0 same thing
   here 0 _ 1 that's 0 and we'll add to
   that the bias minus one so that'll give
   us a result of NE 1 if we plot that on
   our activation function negative 1 is
   here it's before the threshold which
   means either Z or one it's only one
   after the threshold since negative-1 is
   before the threshold the output that
   this unit provides is going to be zero
   and that's what we would expect it to be
   that 0 or0 should be zero What If
   instead we had had one or zero where
   this is a number one well in this case
   in order to calculate what the output is
   going to be we again have to do this
   weighted sum 1 _ 1 that's one 0 _ 1
   that's zero sum of that so far is one
   add negative one to that well then the
   output is zero and if we plot zero on
   this step function zero ends up being
   here it's just at the threshold and so
   the output here is going to be one
   because the output of one or zero that's
   one so that's what we would expect as
   well and just for one more example if I
   had one or one what would the result be
   well 1 _ 1 is 1 1 _ 1 is 1 the sum of
   those is two I add the bias term to that
   I get the number one one plotted on this
   graph is way over there that's well
   beyond the threshold and so this output
   is going to be one as well the output is
   always zero or one depending on whether
   or not we're pass the threshold and this
   neural network then models the or
   function a very simple function
   definitely but it still is able to model
   it correctly if I give it the inputs it
   will tell me what X1 or X2 happens to be
   and you could imagine trying to do this
   for other functions as well a function
   like the and function for instance that
   takes two inputs and calculates uh
   whether both X and Y are true so if x is
   one and Y is one then the output of X
   and Y is one but in all the other cases
   the output is zero how could we model
   that inside of a neural network as well
   well it turns out we could do it in the
   same way except instead of -1 as the
   bias we can use -2 as the bias instead
   what does that end up looking like well
   if I had one and one
   that should be one because one true and
   true is equal to true well I take 1 _ 1
   that's 1 1 _ 1 is 1 I get a total sum of
   two so far now I add the bias of -2 and
   I get the value zero and zero when I
   plotted on the activation function is
   just past that threshold and so the
   output is going to be one but if I had
   any other input for example like one and
   zero well the weighted sum of these is 1

- 0 is going to be 1 - 2 is going to
  give us NE 1 and ne1 is not past that
  threshold and so the output is going to
  be zero so those then are some very
  simple functions that we can model using
  a neural network that has two inputs and
  one output where our goal is to be able
  to figure out what those weights should
  be in order to determine what the output
  should be and you could imagine
  generalizing this to calculate more
  complex functions as well that maybe
  given the humidity and the pressure we
  want to calculate what's the probability
  that it's going to rain for example or
  we might want to do a regression style
  problem we're given some amount of
  advertising and given what month it is
  maybe we want to predict what our
  expected sales are going to be for that
  particular month so you could imagine
  these inputs and outputs being different
  as well and it turns out that in some
  problems we're not just going to have
  two inputs and the nice thing about
  these neural networks is that we can
  compose multiple units together make our
  networks more complex just by adding
  more units into this particular neural
  network so the network we've been
  looking at has two inputs and one output
  but we could just as easily say let's go
  ahead and have three inputs in there or
  have even more inputs where we could
  arbitrarily decide however many inputs
  there are to our problem all going to be
  calculating some sort of output that we
  care about figuring out the value of how
  then does the math work for figuring out
  that output well it's going to work in a
  very similar way in the case of two
  inputs we had two weights indicated by
  these edges and we multiplied the
  weights by the numbers adding this bias
  term and we'll do the same thing in the
  other cases as well if I have three
  inputs you'll imagine multiplying each
  of these three inputs by each of these
  weights uh if I had five inputs instead
  we're going to do the same thing here
  I'm saying sum up from 1 to 5 x i
  multipli by weight I so take each of the
  five input variables multiply them by
  their corresponding weight and then add
  the bias to that so this would be a case
  where there are five inputs into this
  neural network for example but there
  could be more arbitrarily many nodes
  that we want inside of this neural
  network where each time we're just going
  to sum up all of those input variables
  multiply by their weight and then add
  the bias term at the very end and so
  this allows us to be able to represent
  problems that have even more inputs just
  by growing the size of our neural
  network now the next question we might
  ask is a question about how it is that
  we train these neural networks in the
  case of the or function and the and
  function they were simple enough
  functions that I could just tell you
  like here what the weights should be and
  you could probably reason through it
  yourself what the weights should be in
  order to calculate the output that you
  want want but in general with functions
  like predicting Sals or predicting
  whether or not it's going to rain these
  are much trickier functions to be able
  to figure out we would like the computer
  to have some mechanism of calculating
  what it is that the weights should be
  how it is to set the weights so that our
  neural network is able to accurately
  model the function that we care about
  trying to estimate and it turns out that
  the strategy for doing this inspired by
  the domain of calculus is a technique
  called gradient descent and what
  gradient descent is it is an algorithm
  for minimizing loss when you're training
  a neural network and recall that loss
  refers to how bad our hypothesis
  function happens to be that we can
  Define certain loss functions and we saw
  some examples of loss functions last
  time that just give us a number for any
  particular hypothesis saying how poorly
  does it model the data how many examples
  does it get wrong how how are they worse
  or less bad as compared to other
  hypothesis functions that we might
  Define and this loss function is just a
  mathematical function and when you have
  a mathematical function in calculus what
  you could do is calculate something
  known as the gradient which you can
  think of as like a slope it's the
  direction the loss function is moving at
  any particular point and what it's going
  to tell us is in which direction should
  we be moving these weights in order to
  minimize the amount of loss and so
  generally speaking we won't get into the
  calculus of it but the high level idea
  for gradient descent is going to look
  something like this if we want to train
  a neural network we'll go ahead and
  start just by choosing the weights
  randomly just pick random weights for
  all of the weights in the neural network
  and then we'll use the input data that
  we have access to in order to train the
  network in order to figure out what the
  weights should actually be so we'll
  repeat this process again and again the
  first step is we're going to calculate
  the gradient based on all of the data
  points we'll look at all the data and
  figure out what the gradient is at the
  place where we currently are for the
  current setting of the weights which
  means in which direction should we move
  the weights in order to minimize the
  total amount of loss in order to make
  our solution better and once we've
  calculated that gradient which direction
  we should move in the loss function well
  then we can just update those weights
  according to the gradient take a small
  step in the direction of those weights
  in order to try to make our solution a
  little bit better and the size of the
  step that we take that's going to vary
  and you can choose that when you're
  training a particular neural network but
  in short the idea is going to be take
  all the data points figure out based on
  those data points in what direction the
  weights should move and then move the
  weights one small step in that Direction
  and if you repeat that process over and
  over again adjusting the weights a
  little bit at a time based on all the
  data points eventually you should end up
  with a pretty good solution to trying to
  solve this sort of problem at least
  that's what we would hope to happen now
  as you look at this algorithm a good
  question to ask anytime you're analyzing
  an algorithm is what is going to be the
  expensive part of doing the calculation
  what's going to take a lot of work to
  try to figure out what is going to be
  expensive to calculate and in particular
  in the case of gradient descent the
  really expensive part is this all data
  points part right here having to take
  all of the data points and using all of
  those data points figure out what the
  gradient is at this particular setting
  of all of the weights because odds are
  in a big machine learning problem where
  you're trying to solve a big problem
  with a lot of data you have a lot of
  data points in order to calculate and
  figuring out the gradient based on all
  of those data points is going to be
  expensive and you'll have to do it many
  times you'll likely repeat this process
  again and again and again going through
  all the data points taking one small
  step over and over as you try and figure
  out what the optimal setting of those
  weights happens to be it turns out that
  we would ideally like to be able to
  train our neural networks faster to be
  able to more quickly converge to some
  sort of solution that is going to be a
  good solution to the problem so in that
  case there are alternatives to just
  standard gradient descent which looks at
  all the data points at once we can
  employ a method like stochastic gradient
  descent which will randomly just choose
  one data point at a time to calculate
  the gradient based on instead of
  calculating it based on all of the data
  points so the idea there is that we have
  some setting of the weights we pick a
  data point and based on that one data
  point we figure out in which direction
  should we move all the weights and move
  the weights in that small Direction then
  take another data point and do that
  again and repeat this process again and
  again maybe looking at each of the data
  points multiple times but each time only
  using one data point to calculate the
  gradient to calculate which direction we
  should move in now just using using one
  data point instead of all of the data
  points probably gives us a less accurate
  estimate of what the gradient actually
  is but on the plus side it's going to be
  much faster to be able to calculate that
  we can much more quickly calculate what
  the gradient is based on one data point
  instead of calculating based on all of
  the data points and having to do all of
  that computational work again and again
  so there are trade-offs here between
  looking at all of the data points and
  just looking at one data point and it
  turns out that a middle ground that is
  also quite popular is a technique called
  Mini apch gradient descent where the
  idea there is instead of looking at all
  of the data versus just a single point
  we instead divide our data set up into
  small batches groups of data points
  where you can decide how big a
  particular batch is but in short you're
  just going to look at a small number of
  points at any given time hopefully
  getting a more accurate estimate of the
  gradient but also not requiring all of
  the computational effort needed to look
  at every single one of these data points
  so gradient descent then is this
  technique that we can use in order to
  train these inal networks in order to
  figure out what the setting of all of
  these weights should be if we want some
  way to try and get an accurate notion of
  how it is that this function should work
  some way of modeling how to transform
  the inputs into particular outputs now
  so far the networks that we've taken a
  look at have all been structured similar
  to this we have some number of inputs
  maybe two or three or five or more and
  then we have one output that is just
  predicting like rain or no rain or just
  predicting one particular value but
  often in machine learning problems we
  don't just care about one output we
  might care about an output that has
  multiple different values associated
  with it so in the same way that we can
  take a neural network and add units to
  the input layer we can likewise add
  input or add outputs to the output layer
  as well instead of just one output you
  could imagine we have two outputs or we
  could have like four outputs for example
  where in each case as we add more inputs
  or add more outputs if we want to keep
  this network fully connected between
  these two layers we just need to add
  more weights that now each of these
  input nodes has four weights associated
  with each of the four outputs and that's
  true for each of these various different
  input nodes so as we add nodes we add
  more weights in order to make sure that
  each of the inputs can somehow be
  connected to each of the outputs so that
  each output value can be calculated
  based on what the value of the input
  happens to be so what might a case be
  where we want multiple different output
  values well you might consider that in
  the case of weather predicting for
  example we might not just care whether
  it's raining or not raining there might
  be multiple different categories of
  weather that we would like to categorize
  the weather into with just a single
  output variable we can do a binary
  classification like rain or no rain for
  instance one or zero but it doesn't
  allow us to do much more than that with
  multiple output variables I might be
  able to use each one to predict
  something a little different maybe I
  want to categorize the weather into one
  of four different categories something
  like is it going to be raining or sunny
  or cloudy or snowy and I now have four
  output variables that can be used to
  represent maybe the probability that it
  is rainy as opposed to sunny as opposed
  to cloudy or as opposed to snowy how
  then would this neural network work well
  we have some input variables that
  represent some data that we have
  collected about the weather each of
  those inputs gets multiplied by each of
  these various different weights we have
  more multiplications to do but these are
  fairly quick mathematical operations to
  perform and then what we get is after
  passing them through some sort of
  activation function in the outputs we
  end up getting some sort of number where
  that number you might imagine you can
  interpret as like a probability like a
  probability that it is one category as
  opposed to another category so here
  we're saying that based on the inputs we
  think there is a 10% chance that it's
  raining a 60% chance that it's sunny a
  20% chance that it's cloudy a 10% chance
  that it's snowy and given that output if
  these represent like a probability
  distribution
  well then you could just pick whichever
  one has the highest value in this Cas
  sunny and say that well most likely we
  think that this
  categorization of inputs means that the
  output should be snowy and that or
  should be sunny and that is what we
  would expect the weather to be in this
  particular instance and so this allows
  us to do these sort of multiclass
  classifications where instead of just
  having a binary classification one or
  zero we can have as many different
  categories as we want and we can have
  our neural network out output these
  probabilities over which categories are
  most more likely than other categories
  and using that data we're able to draw
  some sort of inference on what it is
  that we should do so this was sort of
  the idea of supervised machine learning
  I can give the Miss neural network a
  whole bunch of data a whole bunch of
  input data corresponding to some label
  some output data like we know that it
  was raining on this day we know that it
  was sunny on that day and using all of
  that data the algorithm can use gradient
  descent to figure out what all the
  weights should be in order to create
  some sort of model that hopefully allows
  us a way to predict what we think the
  weather is going to be but neural
  networks have a lot of other
  applications as well you could imagine
  applying the same sort of idea to a
  reinforcement learning sort of example
  as well where you remember that in
  reinforcement learning what we wanted to
  do is train some sort of agent to learn
  what action to take depending on what
  state they currently happen to be in so
  depending on the current state of the
  world we wanted the agent to pick from
  one of the available actions that is
  available to them and you might model
  that by having each of these input
  variables represent some information
  about the state some data about what
  state our agent is currently in and then
  the output for example could be each of
  the various different actions that our
  agent could take action one 2 three and
  four and you might imagine that this
  network would work in the same way that
  based on these particular inputs we go
  ahead and calculate values for each of
  these outputs and those outputs could
  model which action is better than other
  actions and we could just choose based
  on looking at those outputs which action
  should we should take and so these
  neural networks are very broadly
  applicable that all they're really doing
  is modeling some mathematical function
  so anything that we can frame as a
  mathematical function something like
  classifying inputs into various
  different categories or figuring out
  based on some input State what action we
  should take these are all mathematical
  functions that we could attempt to model
  by taking advantage of this neural
  network structure and in particular
  taking advantage of this technique
  gradient descent that we can use in
  order to figure out what the weights
  should be in order to do this sort of
  calculation now how is it that you would
  go about training a neural network that
  has multiple outputs instead of just one
  well with just a single output we could
  see what the output for that value
  should be and then you update all of the
  weights that corresponded to it and when
  we have multiple outputs at least in
  this particular case we can really think
  of this as four separate neural networks
  that really we just have one network
  here that has these three inputs
  corresponding with these three weights
  corresponding to this one output value
  and the same thing is true for this
  output value this output value
  effectively defines yet another neural
  network that has these same three inputs
  but a different set of Weights that
  correspond to this output and likewise
  this output has its own set of Weights
  as well and same thing for the fourth
  output to and so if you wanted to train
  a neural network that had four outputs
  instead of just one in this case where
  the inputs are directly connected to the
  outputs you could really think of this
  as just training for independent neural
  networks we know what the outputs for
  each of these four should be based on
  our input data and using that data we
  can begin to figure out what all of
  these individual weights should be and
  maybe there's an additional Step at the
  end to make sure that we turn these
  values into a probability distribution
  such that we can interpret which one is
  better than another or more likely than
  another as a category or something like
  that so this then seems like it does a
  pretty good job of taking inputs and
  trying to predict what outputs should be
  and we'll see some real examples of this
  in just a moment as well but it's
  important then to think about what the
  limitations of this sort of approach is
  of just taking some linear combination
  of inputs and passing it into some sort
  of activation function and it turns out
  that when we do this in the case of
  binary classification of trying to
  predict like does it belong to one
  category or another uh we can only
  predict things that are linearly
  separable because we're taking a linear
  combin of inputs and using that to
  Define some decision boundary or
  threshold then what we get is a
  situation where if we have this set of
  data we can predict like a line that
  separates linearly the red points from
  the blue points but a single unit that
  is making a binary classification
  otherwise known as a perceptron can't
  deal with a situation like this where
  we've seen this type of situation before
  where there is no straight line that
  just goes straight through the data that
  will divide the red points away from the
  the Blue Points it's a more complex
  decision boundary the decision boundary
  somehow needs to capture the things
  inside of this circle and there isn't
  really a line that will allow us to deal
  with that so this is the limitation of
  the perceptron these units that just
  make these binary decisions based on
  their inputs that a single perceptron is
  only capable of learning a linearly
  separable decision boundary all it can
  do is Define a line and sure it can give
  us probabilities based on how close to
  that decision boundary we are but it can
  only really decide based on a linear
  decision boundary and so this doesn't
  seem like it's going to generalize well
  to situations where real world data is
  involved because real world data often
  isn't linearly separable it often isn't
  the case that we can just draw a line
  through the data and be able to divide
  it up into multiple groups so what then
  is the solution to this well what was
  proposed was the idea of a multi-layer
  neural network that so far all of the
  neural networks we've seen have had a
  set of inputs and a set of out outputs
  and the inputs are connected to those
  outputs but in a multi-layer neural
  network this is going to be an
  artificial neural network that has an
  input layer still it has an output layer
  but also has one or more hidden layers
  in between other layers of artificial
  neurons or units that are going to
  calculate their own values as well so
  instead of a neural network that looks
  like this with three inputs and one
  output you might imagine in the middle
  here injecting a hidden layer something
  like this this is is a hidden layer that
  has four nodes you could choose how many
  nodes or units end up going into the
  hidden layer you can have multiple
  hidden layers as well and so now each of
  these inputs isn't directly connected to
  the output each of the inputs is
  connected to this hidden layer and then
  all of the nodes in the hidden layer
  those are connected to the one output
  and so this is just another step that we
  can take towards calculating more
  complex functions each of these hidden
  units will calculate its output value
  otherwise known as its activation based
  on a linear combination of all the
  inputs and once we have values for all
  these nodes as opposed to this just
  being the output we do the same thing
  again calculate the output for this node
  based on multiplying each of the values
  for these units by their weights as well
  so in effect the way this works is that
  we start with inputs they get multiplied
  by weights in order to calculate values
  for the hidden nodes those get
  multiplied by weights in order to figure
  out what the ultimate output is going to
  be and the advantage of layering things
  like this is it gives us an ability to
  model more complex functions that
  instead of just having a single decision
  boundary a single line dividing the red
  points from the Blue Points each of
  these hidden nodes can learn a different
  decision boundary and we can combine
  those decision boundaries to figure out
  what the ultimate output is going to be
  and as we begin to imagine more complex
  situations you could imagine each of
  these nodes learning some useful
  property or learning some useful feature
  of all of the inputs and US somehow
  learning how to combine those features
  together in order to get the output that
  we actually want now the natural
  question when we begin to look at this
  now is to ask the question of how do we
  train a neural network that has hidden
  layers inside of it and this turns out
  to initially be a bit of a tricky
  question because the input data that we
  are given is we are given values for all
  of the inputs and we're given what the
  value of the output should be what the
  category is for example but the input
  data doesn't tell us what the values for
  all of these nodes should be so we don't
  know how far off each of these nodes
  actually is because we're only given
  data for the inputs and the outputs the
  reason this is called a hidden layer is
  because the data that is made available
  to us doesn't tell us what the values
  for all of these intermediate nodes
  should actually be and so the strategy
  people came up with was to say that if
  you know what the error or the loss is
  on the output node well then based on
  what these weights are if one of these
  weights is higher than another you can
  calculate an estimate for how much the
  error from this node was due to this
  part of the Hidden node or this part of
  the Hidden layer or this part of the
  Hidden layer based on the values of
  these weights in effect saying that
  based on the error from the output I can
  back propagate the error and figure out
  an estimate for what the error is for
  each of these nodes in the hidden layer
  as well and there's some more calculus
  here that we won't get into the details
  of but the idea of this algorithm is
  known as back propagation it's an alith
  for training a neural network with
  multiple different hidden layers and the
  idea for this the pseudo code for it
  will again be if we want to run gradient
  descent with back propagation we'll
  start with a random choice of Weights as
  we did before and now we'll go ahead and
  repeat the training process again and
  again but what we're going to do each
  time is now we're going to calculate the
  error for the output layer first we know
  the output and what it should be and we
  know what we calculated so we can figure
  out what the error there is but then
  we're going to repeat for every layer
  starting with the output layer moving
  back into the hidden layer then the
  hidden layer before that if there are
  multiple hidden layers going back all
  the way to the very first hidden layer
  assuming they are multiple we're going
  to propagate the error back one layer
  whatever the error was from the output
  figure out what the error should be a
  layer before that based on what the
  values of those weights are and then we
  can update those weights so graphically
  the way you might think about this is
  that we first start with the output we
  know what the output should be we know
  what output we calcul
  and based on that we can figure out all
  right how do we need to update those
  weights back propagating the error to
  these nodes and using that we can figure
  out how we should update these weights
  and you might imagine if there are
  multiple layers we could repeat this
  process again and again to begin to
  figure out how all of these weights
  should be updated and this back
  propagation algorithm is really the key
  algorithm that makes neural networks
  possible it makes it possible to take
  these multi-level structures and be able
  to train those structures depending on
  uh what the values of these weights are
  in order to figure out how it is that we
  should go about updating those weights
  in order to create some function that is
  able to minimize the total amount of
  loss to figure out some good setting of
  the weights that will take the inputs
  and translate it into the output that we
  expect and this works as we said not
  just for a single hidden layer you can
  imagine multiple hidden layers where
  each hidden layer we just Define however
  many nodes we want where each of the
  nodes in one layer we can connect to the
  nodes in the next layer defining more
  and more complex networks that are able
  to model more and more complex types of
  functions and so this type of network is
  what we might call a deep neural network
  part of a larger family of deep learning
  algorithms if you've ever heard that
  term and all deep learning is about is
  it's using multiple layers to be able to
  predict and be able to model higher
  level features inside of the input to be
  able to figure out what the output
  should be and so a deep neural network
  is just a neural network that has
  multiple of these hidden layers where we
  start at the input calculate values for
  this layer then this layer then this
  layer and then ultimately get an output
  and this allows us to be able to model
  more and more sophisticated types of
  functions that each of these layers can
  calculate something a little bit
  different and we can combine that
  information to figure out what the
  output should be of course as with any
  situation of machine learning as we
  begin to make our models more and more
  complex to model more and more complex
  functions the risk we run is something
  like overfitting and we talked about
  overfitting last time in the context of
  overfitting uh based on when we were
  training our models to be able to learn
  some sort of decision boundary where
  overfitting happens when we fit too
  closely to the training data and as a
  result we don't generalize well to other
  situations as well and one of the risks
  we run with a far more complex neural
  network that has many many different
  nodes is that we might overfit based on
  the input data we might grow over
  reliant on certain nodes to calculate
  things just purely based on the input
  data that doesn't allow us to gener I
  very well to the output and there are a
  number of strategies for dealing with
  overfitting but one of the most popular
  in the context of neural networks is a
  technique known as Dropout and what
  Dropout does is it when we're training
  the neural network what we'll do in
  Dropout is temporarily remove units
  temporarily remove these artificial
  neurons from our Network chosen at
  random and the goal here is to prevent
  over Reliance on certain units so what
  generally happens in overfitting is that
  we begin to over rely on certain units
  inside the Network to be able to tell us
  how to interpret the input data what
  Dropout will do is randomly remove some
  of these units in order to reduce the
  chance that we over rely on certain
  units to make our neural network more
  robust to be able to handle the
  situations even when we just drop out
  particular neurons entirely so the way
  that might work is we have a network
  like this and as we're training it when
  we go about trying to update the weights
  the first time we'll just randomly pick
  some percentage of the nodes to drop out
  of the network it's as if those nodes
  aren't there at all it's as if the
  weights associated with those nodes
  aren't there at all and we'll train it
  this way then the next time we update
  the weights we'll pick a different set
  and just go ahead and train that way and
  then again randomly choose and train
  with other nodes that have been dropped
  out as well and the goal of that is that
  after the training process if you train
  by dropping out random nodes inside of
  the neural network you hopefully end up
  with a network that's a little bit more
  robust that doesn't rely too heavily on
  any one particular node but more
  generally learns how to approximate a
  function in general
  so that then is a look at some of these
  techniques that we can use in order to
  implement a neural network to get at the
  idea of taking this input passing it
  through these various different layers
  in order to produce some sort of output
  and what we'd like to do now is take
  those ideas and put them into code and
  to do that there are a number of
  different machine learning libraries
  neural network libraries that we can use
  that allow us to get access to someone's
  implementation of back propagation and
  all of these hidden layers and one of
  the most popular developed by Google is
  known as tensor flow a library that we
  can use for quickly creating neural
  networks and modeling them and running
  them on some sample data to see what the
  output is going to be and before we
  actually start writing code we'll go
  ahead and take a look at tensorflow's
  playground which will be an opportunity
  for us just to play around with this
  idea of neural networks in different
  layers just to get a sense for what it
  is that we can do by taking advantage of
  neural
  networks so let's go ahead and go into
  tensor flows playground which you can go
  to by visiting that URL from before and
  what we're going to do now is we're
  going to try and learn the decision
  boundary for this particular output I
  want to learn to separate the orange
  points from the blue points and I'd like
  to learn some sort of setting of Weights
  inside of a neural network that will be
  able to separate those from each other
  the features we have access to our input
  data are the x value and the yalue so
  the two values along each of the two
  axes and what I'll do now is I can set
  particular parameters like what
  activation function I would like to use
  uh and I'll just go ahead and press play
  and see what happens and what happens
  here is that you'll see that just by
  using these two input features the x
  value and the yv value with no hidden
  layers just take the input X and Y
  values and figure out what the decision
  boundary is our neural network learns
  pretty quickly that in order to divide
  these two points we should just use this
  line this line acts as a decision
  boundary that separates this group of
  points from that group of points and it
  does it very well you can see up here
  what the loss is the training loss is
  zero meaning we were able to perfectly
  model separating these two points from
  each other inside of our training data
  so this was a fairly simple case of
  trying to apply a neural network because
  the data is very clean it's very nicely
  linearly separable we could just draw a
  line that separates all of those points
  from each other let's now consider a
  more complex case so I'll go ahead and
  pause the simulation and we'll go ahead
  and look at this data set here this data
  set is a little bit more complex now in
  this data dat set we still have blue and
  orange points that we'd like to separate
  from each other but there's no single
  line that we can draw that is going to
  be able to figure out how to separate
  the blue from the orange because the
  blue is located in these two quadrants
  and the Orange is located here and here
  it's a more complex function to be able
  to learn so let's see what happens if we
  just try and predict based on those
  inputs the X and Y coordinates what the
  output should be I'll press play and
  what you'll notice is that we're not
  really able to draw much of a conclusion
  that we're not able to very cleanly see
  how we should divide the orange points
  from the blue points and you don't see a
  very clean separation there so it seems
  like we don't have enough uh
  sophistication inside of our Network to
  be able to model something that is that
  complex we need a better model for this
  neural network and I'll do that by
  adding a hidden layer so now I have a
  hidden layer that has two neurons inside
  of it so I have two inputs that then go
  to two neurons inside of a hidden layer
  that then go to our output and now I'll
  press play and what you'll notice here
  is that we're able to do slightly better
  we're able to now say all right these
  points are definitely blue these points
  are definitely orange we're still
  struggling a little bit with these
  points up here though and what we can do
  is we can see for each of these hidden
  neurons what is it exactly that these
  hidden neurons are doing each hidden
  neuron is learning its own decision
  boundary and we can see what that
  boundary is this first neuron is
  learning all right this line that seems
  to to separate some of the blue points
  from the rest of the points this other
  hidden neuron is learning another line
  that seems to be separating the orange
  points in the lower right from the rest
  of the points so that's why we're able
  to sort of figure out these two areas in
  the bottom region but we're still not
  able to perfectly classify all of the
  points so let's go ahead and add another
  neuron now we've got three neurons
  inside of our hidden layer and see what
  we're able to learn now all right well
  now we seem to be doing a better job by
  learning three different decision
  boundaries which each of the three
  neurons inside of our hidden layer we're
  able to much better figure out how to
  separate these blue points from the
  orange points and you can see what each
  of these hidden neurons is learning each
  one is learning a slightly different
  decision boundary and then we're
  combining those decision boundaries
  together to figure out uh what the
  overall output should be and maybe we
  can try it one more time by adding a
  fourth neuron there and try learning
  that and it seems like now we can do
  even better trying to separate the blue
  points from the points but we were only
  able to do this by adding a hidden layer
  by adding some layer that is learning
  some other boundaries and combining
  those boundaries to determine the output
  and the strength the the size and
  thickness of these lines indicate how
  high these weights are how important
  each of these inputs is for making this
  sort of
  calculation and we can do maybe one more
  simulation let's go ahead and try this
  on a data set that looks like this go
  ahead and get rid of the Hidden layer
  here now we're trying to separate the
  blue points from the orange points where
  all the blue points are located again
  inside of a circle effectively so we're
  not going to be able to learn a line
  notice I press play and we're really not
  able to draw any sort of classification
  at all because there is no line that
  cleanly separates the blue points from
  the orange points so let's try to solve
  this by introducing a hidden layer I'll
  go ahead and press play and all right
  with two neurons in a hidden layer we're
  able to do a little better because we
  effectively learn two different decision
  boundaries we learn this line here and
  we learned this line on the right hand
  side and right now we're just saying all
  right well if it's in between we'll call
  it blue and if it's outside we'll call
  it orange so not great but certainly
  better than before that we're learning
  one decision boundary and another and
  based on those we can figure out what
  the output should be but let's now go
  ahead and add a third neuron and see
  what happens now I go ahead and train it
  and now using three different decision
  boundaries that are learned by each of
  these hidden neurons we're able to much
  more accurately model this distinction
  between blue points and orange points
  we're able to figure out maybe with
  these three decision boundaries
  combining them together you can imagine
  figuring out what the output should be
  and how to make that sort of
  classification and so the goal here is
  just to get a sense for having more
  neurons in these hidden layers allows us
  to learn more structure in the data
  allows us to figure out what the
  relevant and important decision
  boundaries are and then using this back
  propagation algorithm we're able to
  figure out what the values of these
  weights should be in order to train this
  network to be able B to classify one
  category of points away from another
  category of points instead and this is
  ultimately what we're going to be trying
  to do whenever we're training a neural
  network so let's go ahead and actually
  see an example of this you'll recall
  from last time that we had this
  banknotes file that included information
  about counterfeit Bank notes as opposed
  to authentic Bank notes where I had like
  four different values for uh each bank
  note and then a categorization of
  whether that bank note is considered to
  be authentic or counter note and what I
  wanted to do was based on that input
  information uh figure out some function
  that could calculate based on the input
  information what category it belong to
  and what I've written here in bank noes.
  is a neural network that will learn just
  that a network that learns based on all
  of the input whether or not we should
  categorize a bank note as authentic or
  as counterfeit the first step is the
  same as what we saw from last time I'm
  really just reading the data in and
  getting it into an appropriate format
  and so this is where more of the like
  writing python code on your own comes in
  in terms of manipulating this data
  massaging the data into a format that
  will be understood by a machine learning
  library like psyit learn or like
  tensorflow and so here I separate it
  into a training and a testing set and
  now what I'm doing down below is I'm
  creating a neural network here I'm using
  TF which stands for tensorflow up above
  I said import tensorflow as TF TF just
  an abbreviation that we'll often use so
  we don't need to write out tensorflow
  every time we want to use anything
  inside of the library I'm using tf.
  Caris Caris is an API a set of functions
  that we can use in order to uh
  manipulate uh neural networks inside of
  tensorflow and it turns out there are
  other machine learning libraries that
  also use the Caris API but here I'm
  saying all right go ahead and give me a
  model that is a sequential Model A
  sequential neural network meaning one
  layer after another and now I'm going to
  add to that model what layers I want
  inside of my neural network so here I'm
  saying model. add go ahead and add a
  dense layer and when we say a dense
  layer we mean a layer that is just uh
  each of the nodes inside of the layer is
  going to be connected to each of the
  nodes from the previous layer so we have
  a densely connected
  layer this layer is going to have eight
  units inside of it so it's going to be a
  hidden layer inside of a neural network
  with eight different units eight
  artificial neurons Each of which might
  learn something different and I just
  sort of chose eight arbitrarily you
  could choose a different number of
  hidden layer hidden nodes inside of the
  layer and if we as we saw before
  depending on the number of units there
  are inside of your hidden layer more
  units means you can learn more complex
  functions so maybe you can more
  accurately model the training data but
  it comes with the cost more units means
  more weights that you need to figure out
  how to update so it might be more
  expensive to do that calculation and you
  also run the risk of overfitting on the
  data if you have too many units and you
  learn to just overfit on the training
  data that's not good either so there is
  a balance and there's often a testing
  process where you'll train on some data
  and maybe validate how well you're doing
  on a separate set of data often called a
  validation set to see all right which
  setting of parameters how many layers
  should I have how many units should be
  in each layer which one of those
  performs the best on the validation set
  so you can do some testing to figure out
  what these hyperparameters so-called
  should be equal
  to next I specify what the input shape
  is meaning all right what does my input
  look like my input has four values and
  so the input shape is just four because
  we have four inputs and then I specify
  what the activation function is and the
  activation function again we can choose
  there are a number of different
  activation functions here I'm using re
  which you might recall from
  earlier and then I'll add an output
  layer so I have my hidden layer now I'm
  adding one more layer that will just
  have one unit because all I want to do
  is predict something like counterfeit
  bill or authentic bill so I just need a
  single unit and the activation function
  I'm going to use here is that sigmoid
  activation function which again was that
  s-shaped curve that just gave us like a
  probability of what is the probability
  that this is a counterfeit bill as
  opposed to an authentic bill so that
  then is the structure of my neural
  network a sequential neural network that
  has one hidden layer with eight units
  inside of it and then one output layer
  that just has a single unit inside of it
  and I can choose how many units there
  are I can choose the activation function
  then I'm going to compile this model uh
  tensorflow gives you a choice of how you
  would like to optimize the weights there
  are various different algorithms for
  doing that what type of loss function
  you want to use again many different
  options for doing that and then how I
  want to evaluate my model well I care
  about accuracy I care about like how
  many of my uh points am I able to
  classify correctly versus not correctly
  as counterfeit or not counterfeit and I
  would like it to report to me how
  accurate my model is
  performing then now that I've defined
  that model I call model.fit to say go
  ahead and train the model train it on
  all the training data plus all of the
  training labels so labels for each of
  those pieces of training data and I'm
  saying run it for 20 epics meaning go
  ahead and go through each of these
  training points 20 times effectively go
  through the data 20 times and keep
  trying to update the weights if I did it
  for more I could train for even longer
  and maybe get a more accurate result but
  then after I fited on all the data I'll
  go ahead and just test it I'll evaluate
  my model using model. evaluate built
  into tensor flow that is just going to
  tell me how well do I perform on the
  testing data so ultimately this is just
  going to give me some numbers that tell
  how well we did in this particular case
  so now what I'm going to do is go into
  banknotes and go ahead and run banknotes
  dop and what's going to happen now is
  it's going to read in all of that
  training data it's going to generate a
  neural network with a all my inputs my
  eight hidden layers or eight hidden
  units inside my layer and then an output
  unit and now what it's doing is it's
  training it's training 20 times and each
  time you can see how my accuracy is
  increasing on my training data it starts
  off the very first time not very
  accurate so better than random something
  like 79% of the time it's able to
  accurately classify one bill from
  another but as I keep training notice
  this accuracy value improves and
  improves and improves until after I've
  trained through all the data points 20
  times it looks like my accuracy is above
  99% on the on the training data and
  here's where I tested it on a whole
  bunch of testing data and it looks like
  in this case I was also like 99.8%
  accurate so just using that I was able
  to generate neural network that can
  detect counterfeit bills from authentic
  bills based on this input data 99.8% of
  the time at least based on this
  particular testing data and I might want
  to test it with more data as well just
  to be confident about that but this is
  really the value of using a machine
  learning library like tensorflow and
  there are others available for Python
  and other languages as well that all I
  have to do is Define the structure of
  the network and Define the data that I'm
  going to pass into the network and then
  tensorflow runs the back propagation
  algorithm for learning learning what all
  of those weights should be for figuring
  out how to train this neural network to
  be able to accurately as accurately as
  possible figure out what the output
  values should be there as well and so
  this then was a look at what it is that
  neural networks can do just using these
  sequences of layer after layer after
  layer and you can begin to imagine
  applying these to much more General
  problems and one big problem in
  Computing and artificial intelligence
  more generally is the problem of
  computer vision computer vision is all
  about computational methods for
  analyzing and understanding images that
  you might have pictures that you want
  the computer to figure out how to deal
  with how to process those images and
  figure out uh how to produce some sort
  of useful result out of this you've seen
  this in the context of social media
  websites that are able to look at a
  photo that contains a whole bunch of
  faces and it's able to figure out what's
  a picture of whom and label those and
  tag them with appropriate people uh this
  is becoming increasingly relevant as we
  begin to discuss self-driving cars that
  car these cars now have cameras and we
  would like for the computer to have some
  sort of algorithm that looks at the
  image and figures out like what color is
  the light uh what cars are around us and
  in what direction for example and so
  computer vision is all about like taking
  an image and figuring out what sort of
  computation what sort of calculation we
  can do with that image it's also
  relevant in the context of something
  like handwriting recognition this what
  you're looking at is an example of the
  mnist data set it's a big data set just
  of handwritten digits that we could use
  to ideally try and figure out how to
  predict given someone's handwriting
  given a photo of a digit that they have
  drawn can you predict whether it's a 0 1
  2 3 4 5 6 7 8 or 9 for example so this
  sort of handwriting recognition is yet
  another task that we might want to use
  computer vision tasks and tools to be
  able to apply it towards this might be a
  task that we might care about so how
  then can we use neural networks to be
  able to solve a problem like this well
  neural networks rely upon some sort of
  input where that input is just numerical
  data we have a whole bunch of units
  where each one of them just represent
  some sort of number and so in the
  context of something like handwriting
  recognition or in the context of just an
  image you might imagine that an image is
  really just a grid of pixels grid of
  dots where each dot has some sort of
  color and in the context of something
  like handwriting recognition you might
  imagine that if you just fill in each of
  these dots in a particular way you can
  generate like a two or an eight for
  example based on which dots happen to be
  shaded in and which dots are not and we
  can represent each of these pixel values
  just using number so for a particular
  pixel for example zero might represent
  entirely black uh depending on how
  you're representing color it's often
  common to represent color values on a 0
  to 255 range so that you can represent a
  color uh using eight bits for a
  particular value like how much white is
  in the image so zero might represent all
  black 255 might represent entirely white
  as a pixel and somewhere in between
  might represent some shade of gray for
  example but you might imagine not just
  having a single slider that determines
  how much white is in the image but if
  you had a color image you might imagine
  three different numerical values a red
  green and blue value where the red value
  controls how much red is in the image we
  have one value for controlling how much
  green is in the pixel and one value for
  how much blue is in the pixel as well
  and depending on how it is that you set
  these values of red green and blue you
  can get a different color and so any
  pixel can really be represented in this
  case by three numerical values a red
  value a green value and a blue value
  and if you take a whole bunch of these
  pixels assemble them together inside of
  a grid of pixels then you really just
  have a whole bunch of numerical values
  that you can use in order to perform
  some sort of prediction task and so what
  you might imagine doing is using the
  same techniques we talked about before
  just design a neural network with a lot
  of inputs that for each of the pixels we
  might have one or three different inputs
  in the case of a color image a different
  input that is just connected to a deep
  neural network for example and this deep
  neural network might take all of the
  pixels inside of the image of like what
  digit a person Drew and the output might
  be like 10 neurons that classify it as a
  zero or a one or a two or a three or
  just tells us in some way what that
  digit happens to be now there are a
  couple of drawbacks to this approach uh
  the first drawback to the approach is
  just the size of this input array that
  we have a whole bunch of inputs if we
  have a big image that has a lot of
  different channels we're looking at a
  lot of inputs and therefore a lot of
  weights that we have to calculate and a
  second problem is the fact that by
  flattening everything into just this
  structure of all the pixels we've lost
  access to a lot of the information about
  the structure of the image that's
  relevant that really when a person looks
  at an image they're looking at you know
  particular features of an image they're
  looking at curves they're looking at
  shapes they're looking at what things
  can you identify in different regions of
  the image and maybe put those things
  together in order to get a better
  picture of what the overall image is
  about and by just turning it into pixel
  values for each of the pixels sure you
  might be able to learn that structure
  but it might be challenging in order to
  do so it might be helpful to take
  advantage of the fact that you can use
  properties of the image itself the fact
  that it's structured in a particular way
  to be able to improve the way that we
  learn based on that image too so in
  order to figure out how we can train our
  neural networks to better be able to
  deal with images we'll introduce a
  couple of ideas a couple of algorithms
  that we can apply that allow us to take
  the image and extract some useful
  information out of that image and the
  first idea we'll introduce is the notion
  of image convolution and what image
  convolution is all about is it's about
  filtering an image sort of extracting
  useful or relevant features out of the
  image and the way we do that is by
  applying a particular filter the
  basically adds the value for every pixel
  with the values for all of the
  neighboring pixels to it according to
  some sort of Kernel Matrix which we'll
  see in a moment is going to allow us to
  weight these pixels in various different
  ways and the goal of image convolution
  then is to exract some sort of
  interesting or useful features out of an
  image to be able to take a pixel and
  based on its neighboring pixels maybe
  predict some sort of valuable
  information something like taking a
  pixel and looking at its neighboring
  pixels you might be able to predict
  whether or not there's some sort of
  curve inside the image or whether it's
  forming the outline of a particular line
  or a shape for example and that might be
  useful if you're trying to use all these
  various different features to combine
  them to say something meaningful about
  an image as a whole so how then does
  image convolution work well we start
  with a kernel Matrix and the kernel
  Matrix looks something like this and the
  idea of this is that given a pixel that
  will be the middle pixel we're going to
  multiply each of the neighboring pixels
  by these values in order to get some
  sort of result by summing up all the
  numbers together so if I take this
  kernel which you can think of as like a
  filter that I'm going to apply to the
  image and let's say that I take this
  image this is a 4x4 image we'll think of
  it as just a black and white image where
  each one is just a single Pixel value so
  somewhere between 0 and 255 for example
  so we have a whole bunch of individual
  pixel values like this and what I'd like
  to do is apply this kernel this filter
  so to speak to this image and the way
  I'll do that is all right the kernel is
  3x3 you can imagine a 5x5 kernel or a
  larger kernel 2 and I'll take it and
  just first apply it to the first 3x3
  section of the image and what I'll do is
  I'll take each of these pixel values
  multiply it by its corresponding value
  in the filter Matrix
  and add all of the results together so
  here for example I'll say 10 \* 0 plus 20

* -1 + 30 _ 0 so on and so forth doing
  all of this calculation and at the end
  if I take all these values multiply them
  by their corresponding value in the
  kernel add the results together for this
  particular set of n pixels I get the
  value of 10 for example and then what
  I'll do is I'll slide this 3x3 grid
  effectively over over Slide the kernel
  by one to look at the next 3x3 section
  here I'm just sliding it over by one
  pixel but you might imagine a different
  stride length where maybe I jump by
  multiple pixels at a time if you really
  wanted to you have different options
  here but here I'm just sliding over
  looking at the next 3x3 section and I'll
  do the same math 20 _ 0 + 30 _ 1 + 40 _
  0 + 20 \* NE 1 so on and so forth plus 30
* 5 and what I end up getting is the
  number 20 then you can imagine shifting
  over to this one doing the same thing
  calculating like the number 40 for
  example and then doing the same thing
  here and calculating a value there as
  well and so what we have now is what
  we'll call like a a feature map we have
  taken this kernel applied it to each of
  these various different regions and what
  we get is some representation of like a
  filtered version of that image and so to
  give a more concrete example of why it
  is that this kind of thing could be
  useful let's take this kernel Matrix for
  example which is quite a famous one that
  has an eight in middle and then all of
  the neighboring pixels get a one and
  let's imagine we wanted to apply that to
  a 3X3 part of an image that looks like
  this where all the values are the same
  they're all 20 for instance well in this
  case if you do 20 _ 8 and then subtract
  20 subtract 20 subtract 20 for each of
  the eight neighbors well the result of
  that is you just get that expression
  which comes out to be zero you
  multiplied 20 by 8 but then you
  subtracted 208 times according to that
  particular
  the result of all that is just zero so
  the takeaway here is that when a lot of
  the pixels are the same value we end up
  getting a value close to zero if though
  we had something like this 20s along
  this first row then 50s in the second
  row and 50s in the third row well then
  when you do this same kind of math 20 _
  ne1 20 \* ne1 so on and so forth then I
  get a higher value a value like 90 in
  this particular case and so the more
  general idea here is that by applying
  this kernel negative 1's 8 in the middle
  and then negative 1es what I get is when
  this middle value is very different from
  the neighboring values like 50 is
  greater than these 20s then you'll end
  up with a value higher than zero like if
  this number is higher than its neighbors
  you end up getting a bigger output but
  if this neighbor is this value is the
  same as all of its neighbors then you
  get a lower output something like zero
  and it turns out that this sort of
  filter can therefore be used in
  something like detecting edges in an
  image if I want to detect like the
  boundaries between various different
  objects inside of an image I might use a
  filter like this which is able to tell
  whether the value of this pixel is
  different from the values of the
  neighboring pixels if it's like greater
  than the values of the pixels that
  happen to surround it and so we can use
  this in terms of image filtering and so
  I'll show you an example of that I have
  here uh in filter. piy a file that uses
  Python's image library or P pil um to do
  some image filtering I go ahead and open
  an image and then all I'm going to do is
  apply a kernel to that image it's going
  to be a 3X3 kernel same kind of Kernel
  we saw before and here is the kernel
  this is just a list representation of
  the same Matrix that I showed you a
  moment ago it's negative 1 negative 1
  negative 1 the second row is negative 1
  8ga 1 and the third row is all negative
  1es and then at the end I'm going to go
  ahead and show the filtered
  image so if for example I go
  into uh convolution directory and I open
  up an image like bridge.png this is what
  an input image might look like just an
  image of a bridge over a
  river now I'm going to go ahead and run
  this filter program on the
  bridge and what I get is this image here
  just by taking the original image and
  applying that filter to each 3x3 grid
  I've extracted all of the boundaries all
  of the edges inside the image that sep
  separate one part of the image from
  another so here I've got a
  representation of boundaries between
  particular parts of the image and you
  might imagine that if a machine learning
  algorithm is trying to learn like what
  an image is of a filter like this could
  be pretty useful that maybe the the the
  machine learning algorithm doesn't care
  about all of the details of the image it
  just cares about certain useful features
  it cares about particular shapes that
  are able to help it determine that based
  on the image this is going to be a
  bridge for example and so this type of
  idea of image com ution can allow us to
  apply filters to images that allow us to
  extract useful results out of those
  images taking an image and extracting
  its edges for example and you might
  imagine many other filters that could be
  applied to an image that are able to
  extract particular values as well and a
  filter might have separate kernels for
  the red values the green values and the
  blue values that are all summed together
  at the end such that you could have
  particular filters looking for is there
  red in this part of the image are there
  green in other parts of the image you
  can begin to assemble these relevant and
  useful filters that are able to do these
  calculations as well so that then was
  the idea of image convolution applying
  some sort of filter to an image to be
  able to extract some useful features out
  of that image but all the while these
  images are still pretty big like there's
  a lot of pixels involved in the image
  and realistically speaking if you've got
  a really big image that poses a couple
  of problems one it means a lot of input
  going into the neural network but two it
  also means that we really have to care
  about what's in each particular pixel
  whereas realistically we often as an
  like if you're looking at an image you
  don't care whether something is in one
  particular pixel versus the pixel
  immediately to the right of it they're
  pretty close together you really just
  care about whether there's a particular
  feature in some region of the image and
  maybe you don't care about exactly which
  pixel it happens to be in and so there's
  a Technique we can use known as pooling
  and what pooling is is it means reducing
  the size of an input by sampling from
  regions inside of the input so we're
  going to take a big Big Image and turn
  it into a smaller image by using pooling
  and in particular one of the most
  popular types of pooling is called Max
  pooling and what Max pooling does is it
  pulls just by choosing the maximum value
  in a particular region so for example
  let's imagine I had this 4x4 image but I
  wanted to reduce its Dimensions I wanted
  to make it a smaller image so that I
  have fewer inputs to work with what I
  could do is I could apply a 2X two Max
  pool where the idea would be that I'm
  going to first look at this 2x2 region
  and say what is the maximum value in
  that region well it's the number 50 so
  we'll go ahead and just use the number
  50 and then we'll look at this 2 x two
  region what is the maximum value here
  it's 110 so that's going to be my value
  likewise here the maximum value looks
  like 20 go ahead and put that there then
  for this last region the maximum value
  was 40 so we'll go ahead and use that
  and what I have now is a smaller
  representation of this same original
  image that I obtained just by piing
  picking the maximum value from each of
  these regions so again the advantages
  here are now I only have to deal with a
  2X two input instead of a 4x4 and you
  could imagine shrinking the size of an
  image even more but in addition to that
  I'm now able to make my analysis um
  independent of whether a particular
  value was in this pixel or this pixel
  like I don't care if the 50 was here or
  here as long as it was generally in this
  region I'll still get access to that
  value so it makes our algorithms a
  little bit more robust as well so that
  then is pooling taking the size of the
  image reducing it a little bit by just
  sampling from particular regions inside
  of the image and now we can put all of
  these ideas together pooling image
  convolution and neural networks all
  together into another type of neural
  network called a convolutional neural
  network or a CNN which is a neural
  network that uses this convolution step
  usually in the context of analyzing an
  image for example and so the way that a
  ution neural network works is that we
  start with some sort of input image some
  grid of pixels but rather than
  immediately put that into the neural
  network layers that we've seen before
  we'll start by applying a convolution
  step where the convolution step involves
  applying some number of different image
  filters to our original image in order
  to get what we call a feature map the
  result of applying some filter to an
  image and we could do this once but in
  general we'll do this multiple times
  getting a whole bunch of different
  feature Maps Each of which might extract
  some different relevant feature out of
  the image some different important
  characteristic of the image that we
  might care about using in order to
  calculate what the result should be and
  in the same way that we when we train
  neural networks we can train neural
  networks to learn the weights between
  particular units inside of the neural
  networks we can also train neural
  networks to learn what those filters
  should be what the values of the filters
  should be in order to get the most
  useful most relevant information out of
  the original image just by figuring out
  what setting of those filter values the
  values inside of that kernel results in
  minimizing the loss function minimizing
  how poorly our hypothesis actually
  performs in figuring out the
  classification of a particular image for
  example so we first applied this
  convolution step get a whole bunch of
  these various different feature Maps but
  these feature maps are quite large right
  there's a lot of pixel values that
  happen to be here and so a logical next
  step to take is a pooling step where we
  reduce the size of these images by using
  Max pooling for example extra ing the
  maximum value from any particular region
  there are other pooling methods that
  exist as well depending on the situation
  you could use something like average
  pooling where instead of taking the
  maximum value from a region you take the
  average value from a region which has
  its uses as well but in effect what
  pooling will do is it'll take these
  feature maps and reduce their Dimension
  so that we end up with smaller grids
  with fewer pixels and this then is going
  to be easier for us to deal with it's
  going to mean fewer inputs that we have
  to worry about and it's also going to
  mean we're more res resiliant more
  robust against potential movements of
  particular values just by one pixel when
  ultimately we really don't care about
  those one pixel differences that might
  arise in the original image and now
  after we've done this pooling step now
  we have a whole bunch of values that we
  can then flatten out and just put it
  into a more traditional neural network
  so we go ahead and flatten it and then
  we end up with a traditional neural
  network that has one input for each of
  these values in each of these resulting
  feature Maps after we do the convolution
  and after we we do the pooling step and
  so this then is the general structure of
  a convolutional network we begin with
  the image apply convolution apply
  pooling flatten the results and then put
  that into a more traditional neural
  network that might itself have hidden
  layers you can have deep convolutional
  networks that have hidden layers in
  between this flattened layer and the
  eventual output to be able to calculate
  various different features of those
  values but this then can help us to be
  able to use convolution and pooling to
  use our knowledge about the structure of
  an image to be able to get better
  results to be able to train our networks
  faster in order to better capture
  particular parts of the image and
  there's no reason necessarily why you
  can only use these steps once in fact in
  practice you'll often use convolution
  and pooling multiple times in multiple
  different steps see what you might
  imagine doing is starting with an image
  first applying convolution to get a
  whole bunch of maps then applying
  pooling then applying convolution again
  because these maps are still pretty big
  you can apply convolution
  to try and extract relevant features out
  of this result then take those results
  apply pooling in order to reduce their
  dimensions and then take that and feed
  it into a neural network that maybe has
  fewer inputs so here I have two
  different convolution and pooling steps
  I do convolution and pooling once and
  then I do convolution and pooling a
  second time each time extracting useful
  features from the layer before it each
  time using pooling to reduce the
  dimensions of what you're ultimately
  looking at and the goal now of this sort
  of model model is that in each of these
  steps you can begin to learn different
  types of features of the original image
  that maybe in the first step you learn
  very low-level features just learn and
  look for features like edges and curves
  and shapes because based on pixels and
  their neighboring values you can figure
  out all right what are the edges what
  are the curves what are the various
  different shapes that might be present
  there but then once you have a mapping
  that just represents where the edges and
  curves and shapes happen to be you could
  imagine applying the same sort of
  process again to begin to look for
  higher level features look for objects
  maybe look for uh people's eyes and
  facial recognition for example maybe
  look for uh more complex shapes like the
  curves on a particular number if you're
  trying to recognize a digit in a
  handwriting recognition sort of scenario
  and then after all of that now that you
  have these results that represent these
  higher level features you can pass them
  into a neural network which is really
  just a deep neural network that looks
  like this where you might imagine making
  a binary classification or classifying
  into multiple categories or performing
  various different tasks on this sort of
  model so convolutional neural networks
  can be quite powerful and quite popular
  when it comes towards trying to analyze
  images we don't strictly need them we
  could have just used a vanilla neural
  network that just operates with layer
  after layer as we' seen before but these
  convolutional neural networks can be
  quite helpful in particular because of
  the way they model the way a human might
  look at an image that instead of a human
  looking at every single Pixel
  simultaneously and trying to convolve
  all of them by multiplying them together
  you might imagine that convolution is
  really doing is looking at various
  different regions of the image and
  extracting relevant information and
  features out of those parts of the image
  the same way that a human might have
  visual receptors that are looking at
  particular parts of what they see and
  using those combining them to figure out
  what meaning they can draw from all of
  those various different inputs and so
  you might imagine applying this to a
  situation like handwriting recognition
  so we'll go ahead and see an example of
  that now or I'll go ahead and open up
  handwriting. piy again what we do here
  is we first import
  tensorflow and then tensorflow it turns
  out has a few data sets that are built
  in built into the library that you can
  just immediately access and one of the
  most famous data sets in machine
  learning is the mnist data set which is
  just a data set of a whole bunch of
  samples of people's handwritten digits I
  showed you a slide of that a little
  while ago and what we can do is just
  immediately access that data set which
  is built into the library so that if I
  want to do something like train on a
  whole bunch of hen digits I can just use
  the data set that is provided to me of
  course if I had my own data set of
  handwritten images I could apply the
  same idea I'd first just need to take
  those images and turn them into like an
  array of pixels because that's the way
  that these are going to be formatted
  they're going to be formatted as
  effectively an array of individual
  pixels now there's a bit of reshaping I
  need to do just turning the data into a
  format that I can put into my
  convolutional neural network so this is
  doing things like uh taking all the
  values and dividing them by 255 5 if you
  remember these color values tend to
  range from 0 to 255 so I can divide them
  by 255 just to put them into 0 to one
  range which might be a little bit easier
  to train on uh and then doing various
  other modifications to the data just to
  get it into a nice usable format but
  here's the interesting and important
  part here is where I create the
  convolutional neural network the CNN
  where here I'm saying go ahead and use a
  sequential model and before I could use
  model. add to say add a layer add a
  layer add a layer another way I could
  find it is just by passing as input to
  this sequential neural network a list of
  all of the layers that I want and so
  here the very first layer in my model is
  a convolution layer where I'm first
  going to apply convolution to my image
  I'm going to use 13 different filters so
  my model is going to learn 32 rather 32
  different filters that I would like to
  learn on the input image where each
  filter is going to be a 3X3 kernel so we
  saw those 3x3 kernels before where we
  could multiply each value in a 3X3 grid
  by value multiply and add all the
  results together so here I'm going to
  learn 32 different of these 3x3 filters
  I can again specify my activation
  function and I specify what my input
  shape is my input shape in the bank
  notes case was just four I had four
  inputs my input shape here is going to
  be 28 comma 28 comma 1 because uh for
  each of these handwritten digits it
  turns out that the M data set organizes
  their data uh each image is a 28x 28
  pixel grid so we're going to have a 28x
  28 pixel grid uh and each one of those
  images only has one channel value these
  handwritten digits are just black and
  white so there just a single color value
  representing how much black or how much
  white you might imagine that in a color
  image if you were doing this sort of
  thing you might have three different
  channels a red a green and a blue
  channel for example but in the case of
  just handwriting recognition recognizing
  a digit we're just going to use a single
  value for like shaded in or not shaded
  in and it might range but it's just a
  single color value
  and that then is the very first layer of
  our neural network a convolutional layer
  that will take the input and learn a
  whole bunch of different filters that we
  can apply to the input to extract
  meaningful
  features next step is going to be a Max
  pooling layer also built right into
  tensor flow where this is going to be a
  layer that is going to use a pool size
  of 2x two meaning we're going to look at
  2x two regions inside of the image and
  just extract the maximum value again
  we've seen why this can be helpful it'll
  help to reduce the size of our input
  once we've done that we'll go ahead and
  flatten all of the units just into a
  single layer that we can then pass into
  the rest of the neural network and now
  here's the rest of the neural network
  here I'm saying let's add a hidden layer
  to my neural network with 128 units so a
  whole bunch of hidden units inside of
  the Hidden layer and just to prevent
  overfitting I can add a Dropout to that
  say you know what when you're training
  randomly drop out half of the nodes from
  this hidden layer just to make sure we
  don't become over reliant on any
  particular node we begin to really
  generalize and stop ourselves from
  overfitting so tensorflow allows us just
  by adding a single line to add Dropout
  into our model as well such that when
  it's training it will perform this
  Dropout step uh in order to help make
  sure that we don't overfit on this
  particular data and then finally I add
  an output layer the output layer is
  going to have 10 units one for each uh
  category that I would like to classify
  digits into so 0 through 9 10 different
  categories uh and the activation
  function I'm going to use here is called
  the softmax activation function and in
  short what the softmax activation
  function is going to do is it's going to
  take the output and turn it into a
  probability distribution so ultimately
  it's going to tell me like what we
  estimate the probability is that this is
  a two versus a three versus a four and
  so it will turn it into that probability
  distribution for me next up I'll go
  ahead and compile my model and fit it on
  all of my training data and then I can
  evaluate how well the neural network
  forms uh and then I've added to my
  Python program if I've provided a
  command line argument like the name of a
  file I'm going to go ahead and save the
  model to a file and so this can be quite
  useful too once you've done the training
  step which could take some time in terms
  of taking all the time going through the
  data running back propagation with
  gradient descent to be able to say all
  right how should we adjust the weight to
  this particular model you end up
  calculating values for these weights
  calculating values for these filters
  you'd like to remember that information
  so you can use it later and so 10 allows
  us to just save a model to a file such
  that later if we want to use the model
  we've learned use the weights that we've
  learned to make some sort of new
  prediction we can just use the model
  that already exists so what we're doing
  here is after we've done all the
  calculation we go ahead and uh save the
  model to a file such that we can use it
  a little bit later so for example if I
  go into uh go into digits I'm going to
  run handwriting. Pi I won't save it this
  time we'll run it and go ahead and see
  what happens what will happen is we need
  to go through the model in order to
  train on all of these samples of
  handwritten digits that the M data set
  gives us thousands and thousands of
  sample handwritten digits in this same
  format that we can use in order to train
  and so now what you're seeing is this
  training process and unlike the bank
  notes case where there was much few much
  fewer data points uh the data was very
  very simple here this data is more
  complex and this training process takes
  time and so this is another one of those
  cases where when training neural net n
  works this is why computational power is
  so important that often times you see
  people wanting to use sophisticated gpus
  in order to more efficiently be able to
  do this sort of neural network training
  it also speaks to the reason why more
  data can be helpful The More Sample data
  points you have the better you can begin
  to do this training so here we're going
  through 60,000 different samples of
  handwritten digits and I said going to
  we're going to go through them 10 times
  so we're going to go through the data
  set 10 times training each time
  hopefully improving Upon Our weights
  with every time we run through this data
  set and we can see over here on the
  right what the accuracy is each time we
  go ahead and run this model that the
  first time it looks like we got an
  accuracy of about 92% of the digits
  correct based on this training Set uh we
  increase that to 96 or
  97% and every time we run this we're
  going to see hopefully the accuracy
  improve as we continue to try and use
  that gradient descent that process of
  trying to run the algorithm to minimize
  the loss that we get in order to more
  accurately predict what the output
  should be and what this process is doing
  is it's learning not only the weights
  but it's learning the features to use
  the kernel Matrix to use when performing
  that convolution step because this is a
  convolutional neural network where I'm
  first performing those convolutions and
  then doing the more traditional neural
  network structure this is going to learn
  all of those individual steps as well
  and so here we see the tensorflow
  provides me with some very nice output
  telling me about like how many seconds
  are left with each of these training
  runs that allows me to see just how well
  we're doing
  so we'll go ahead and see how this
  network performs it looks like we've
  gone through the data set seven times
  we're going through it an eighth time
  now and at this point the accuracy is
  pretty high we saw we went from 92% up
  to 97% now it looks like 98% and at this
  point it seems like things are starting
  to level out there's probably a limit to
  how accurate we can ultimately be
  without running the risk of overfitting
  of course with enough nodes you could
  just memorize the input and overfit upon
  them but we'd like to avoid doing that
  and Dropout will help us with this but
  now we see we're almost done finishing
  our training
  step we're at 55,000 all right we
  finished training and now it's going to
  go ahead and test for us on 10,000
  samples and it looks like on the testing
  set we were 98.8% accurate so we ended
  up doing pretty well it seems on this
  test on this testing set to see you know
  how accurately can we predict these
  handwritten
  digits and so what we could do then is
  actually test it out I've written a
  program called recognition Pi using pame
  uh if you pass it a model that's been
  trained and I pre-trained an example
  model uh using this input data what we
  can do is see whether or not we've been
  able to train this convolutional neural
  network to be able to uh predict
  handwriting for example so I can try
  just like drawing a handwritten digit
  I'll go ahead and draw like the number
  two for
  example so there's my number two again
  this is messy if you tried to imagine
  how would you write a program with just
  like ifs and thens to be able to do this
  sort of calculation it would be tricky
  to do so but here I'll press classify
  and all right it seems it was able to
  correctly classify that what I drew was
  the number two go ahead and reset it try
  it again we'll draw like an eight for
  example so here is an eight press
  classify and all right it predicts that
  the digit that I drew was an eight and
  the key here is this really begins to
  show the power of what the neural
  network is doing somehow looking at
  various different features of these
  different pixels figuring out what the
  relevant features are and figuring out
  how to combine them to get a
  classification and this would be a
  difficult task to provide explicit
  instructions to the computer on how to
  do like to use a whole bunch of if thens
  to process all these pixel values to
  figure out what the handwritten digit is
  like everyone's going to draw their
  eights a little bit differently if I
  drew the eight again it would look a
  little bit different and yet ideally we
  want to train a network to be robust
  enough so that it begins to learn these
  patterns on its own all I said was here
  is the structure of the network and here
  is the data on which to train the
  network and the network learning
  algorithm just tries to figure out what
  is the optimal set of Weights what is
  the optimal set of filters to use in
  order to be able to accurately classify
  a digit into one category or another
  just going to show the power of these
  sorts of convolutional neural
  networks and so that then was a look at
  how we can use convolutional neural
  networks to begin to solve problems uh
  with Rel with regards to computer vision
  the ability to like take an image and
  begin to analyze it so this is the type
  of analysis you might imagine that's
  happening in self-driving cars that are
  able to figure out what filters to apply
  to an image to understand what it is
  that the computer is looking at or the
  same type of idea that might be applied
  to facial recognition in social media to
  be able to determine how to recognize
  faces in an image as well you can
  imagine a neural network that instead of
  classifying into one of 10 different 10
  different digits could instead classify
  like is this person a or is this person
  B trying to tell those people apart just
  based on
  convolution and so now what we'll take a
  look at is yet another type of neural
  network NW that can be quite popular for
  certain types of tasks but to do so
  we'll try to generalize and think about
  our neural network a little bit more
  abstractly that here we have a sample
  deep neural network where we have this
  input layer a whole bunch of different
  hidden layers that are performing
  certain types of calculations and then
  an output layer here that just generates
  some sort of output that we care about
  calculating but we could imagine
  representing this a little more simply
  like this here is just a more abstract
  representation of our neural network we
  have some input that might be like a
  vector of a whole bunch of different
  values as our input that gets passed
  into a network that performs some sort
  of calculation or computation and that
  Network produces some sort of output
  that output might be a single value it
  might be a whole bunch of different
  values but this is the general structure
  of the neural network that we've seen
  there is some sort of input that gets
  fed into the network and using that
  input the network calculates what the
  output should be and this sort of model
  for a noral network is what we might
  call a feed forward neural network feed
  forward neural networks have connections
  only in One Direction they move from one
  layer to the next layer to the layer
  after that such that the inputs pass
  through various different hidden layers
  and then ultimately produce some sort of
  output so feed forward neural networks
  were very helpful for solving these
  types of classification problems that we
  saw before we have a whole bunch of
  input we want to learn what setting of
  Weights will allow us to calculate the
  output effectively but there's some
  limitations on feed forward neural
  networks that we'll see in a moment in
  particular the input needs to be like of
  a fixed shape like a fixed number of
  neurons are in the input layer and
  there's a fixed shape for the output
  like a fixed number of neurons in the
  output layer and that has some
  limitations of its own and a possible
  solution to this and we'll see examples
  of the types of problems we can solve
  with this in just a second is instead of
  just a feed forward neural network where
  there are only Connections In One
  Direction from left to right effectively
  across the network we could also Imagine
  a recurrent neural network where a
  recurrent neural network generates
  output that gets fed back into itself as
  input for future runs of that Network so
  whereas in a traditional neural network
  we have inputs that get fed into the
  network that get fed into the output and
  the only thing that determines the
  output is based on the original input
  and based on the calculation we do
  inside of the network itself this goes
  in contrast with a recurrent neural
  network where in a recurrent neural
  network you can imagine output from the
  network feeding back to itself into the
  network again as input
  for the next time that you do the
  calculations inside of the network what
  this allows is it allows the network to
  maintain some sort of state to store
  some sort of information that can be
  used on future runs of the network the
  previously the network just defined some
  weights and we passed inputs through the
  network and it generated outputs but the
  network wasn't saving any information
  based on those inputs to be able to
  remember for future iterations or for
  future runs what a recurrent neural
  network will let us do is let the
  Network store information that gets
  passed back in as input to the network
  again the next time we try and perform
  some sort of action and this is
  particularly helpful when dealing with
  sequences of data so we'll see a real
  world example of this right now actually
  uh Microsoft has developed an AI uh
  known as the captionbot and what the
  caption bot does is it says I can
  understand the content of any photograph
  and I'll try to describe it as well as
  any human I'll analyze your photo but I
  won't store it or share it and so what
  Microsoft's caption seems to be claiming
  to do is it can take an image and figure
  out what's in the image and just give us
  a caption to describe it so let's try it
  out here for example is an image of
  Harvard Square it's some people walking
  in front of one of the buildings at
  Harvard Square I'll go ahead and take
  the URL for that image and I'll paste it
  into captionbot just press go so
  captionbot is analyzing the image and
  then it says uh I think it's a group of
  people walking in front of a building
  which seems amazing the AI is able to
  look at this image and figure out what's
  in the image and the important thing to
  recognize here is that this is no longer
  just a classification task we saw being
  able to classify images with a
  convolutional neural network where the
  job was you know take the image and then
  figure out is it a zero or a one or a
  two or is it this person's face or that
  person's face what seems to be happening
  here is the input is an image and we
  know how to get networks to take input
  as images but the output is text like
  it's a sentence it's a phrase like a
  group of people walking in front of a
  building and this would seem to POS a
  challenge for our more traditional feed
  forward neural networks for the reason
  being that in traditional neural
  networks uh we just have a fixed size
  input and a fixed size output there are
  a certain number of neurons in the input
  to our neural network and a certain
  number of outputs for our neural network
  and then some calculation that goes on
  in between but the size of the inputs
  the number of values in the input and
  the number of values in the output those
  are always going to be uh fixed based on
  the structure of the neural network and
  that makes it difficult to imagine how a
  neural network could take an image like
  this and say you know it's a group of
  people walking in front of the building
  because the output is text like it's a
  sequence of words now it might be
  possible for a neural network to Output
  like one word one word you could
  represent as like a vector of values and
  you can imagine ways of doing that next
  time we'll talk a little bit more about
  AI as it relates to language and
  language processing but a sequence of
  words is much more challenging because
  depending on the image you might imagine
  the output is a different number of
  words we can have sequences of different
  lengths and somehow we still want to be
  able to generate the appropriate output
  and so the strategy here is to use a
  recurrent neural network a neural
  network that can feed its own output
  back into itself as input for the next
  time and this allows us to do what we
  call a one to many relationship for
  inputs to outputs that in vanilla more
  traditional neural networks these are
  what we might consider to be one toone
  neural networks you pass in in one set
  of values as input you get one vector of
  values as the output but in this case we
  want to pass in one value as input the
  image and we want to get a sequence many
  values as output where each value is
  like one of these words that gets
  produced by this particular algorithm
  and so the way we might do this is we
  might imagine starting by providing
  input the image into our neural network
  and the neural network is going to
  generate output but the output is not
  going to be the whole sequence of words
  because we can't represent the whole
  sequence of words using just a fixed set
  of neurons instead the output is just
  going to be the first word we're going
  to train the network to Output what the
  first word of the caption should be and
  you could imagine that Microsoft has
  trained this by running a whole bunch of
  training samples through the AI giving
  it a whole bunch of pictures and what
  the appropriate caption was and having
  the AI begin to learn from that but now
  because the network generates output
  that can be fed back into itself you
  could imagine the output of the network
  being fed back into the same network
  this here looks like a separate network
  but it's really the same network that's
  just getting different input that this
  network's output gets fed back into
  itself but it's going to generate
  another output and that other output is
  going to be like the second word in the
  caption and this recurrent neural
  network then is this network is going to
  generate other output that can be fed
  back into itself to generate yet another
  word fed back into itself to generate
  another word and so recurrent neural
  networks allow us to represent this sort
  of one to many structure you provide one
  image as input and the neural network
  can pass data into the next run of the
  network and then again and again such
  that you could run the network multiple
  times each time generating a different
  output still based on that original
  input and this is where recurrent neural
  networks become particularly useful when
  dealing with sequences of inputs or
  outputs and my output is a sequence of
  words and since I can't very easily
  represent outputting an entire sequence
  of words I'll instead output that
  sequence one word at a time by allowing
  my network to pass information about
  what still needs to be said about the
  photo into the next stage of running the
  network so you could run the network
  multiple times the same network with the
  same weights just getting different
  input each time first getting input from
  the image and then getting input from
  the network itself as additional
  information about what additionally
  needs to be given in a particular
  caption for example so this then is a
  one to many relationship inside of a
  recurrent neural network but it turns
  out there are other models that we can
  use other ways we can try and use
  recurrent neural networks to be able to
  represent data that might be stored in
  other forms as well we saw how we could
  use neural networks in order to analyze
  images in the context of convolutional
  neural networks that take an image
  figure out various different properties
  of the image and are able to draw some
  sort of conclusion based on that but you
  might imagine that something like
  YouTube they need to be able to do a lot
  of learning based on video they need to
  look through videos to detect if there
  like copyright violation or they need to
  be able to look through videos to maybe
  identify what particular items are
  inside of the video for example and
  video you might imagine is much more
  difficult to put in as input to a neural
  network because whereas an image you
  could just treat each pixel as a
  different value videos are sequences
  there's sequences of images uh and each
  sequence might be of different length
  and so it might be challenging to
  represent that entire video as a single
  Vector of values that you could pass in
  to a neural network and so here too
  recurrent neural networks can be a
  valuable solution for trying to solve
  this type of problem that instead of
  just passing in a single input into our
  neural network we could pass in the
  input like one frame at a time you might
  imagine first taking the first frame of
  the video passing it into the network
  and then maybe not having the network
  output anything at all yet let it take
  in another input and this time pass it
  into the network but the network gets
  information from the last time we
  provided an input into the network then
  we pass in a third input and then a
  fourth input where each time what the
  network gets is it gets the most recent
  input like each frame of the video but
  it also gets information the network
  processed from all of the previous
  iterations so on frame number four you
  end up getting the input for frame
  number four plus information the network
  has calculated from the first three
  frames and using all of that data
  combined this recurrent neural network
  can begin to learn how to extract
  patterns from a sequence of data as well
  and so you might imagine if you want to
  classify a video into a number of
  different genres like an educational
  video or a music video or different
  types of videos that's a classification
  task where you want to take as input
  each of the frames of the video and you
  want to output something like what it is
  uh what category that it happens to
  belong to and you can imagine doing this
  sort of thing this sort of many to one
  learning anytime your input is a
  sequence and so input is a sequence in
  the context of video it could be in the
  context of like if someone has typed a
  message and you want to be able to
  categorize that message like if you're
  trying to take a a movie review and
  trying to classify it as is it a
  positive review or a negative review
  that input is a sequence of words and
  the output is a classification positive
  or negative theto a recurrent neural
  network might be helpful for analyzing
  sequences of words and they're quite
  popular when it comes to dealing with
  language could even be used for spoken
  language as well that spoken language is
  you know an audio waveform that can be
  segmented into distinct chunks and each
  of those could be passed in as an put
  into a recurrent neural network to be
  able to classify someone's voice for
  instance if you want to do voice
  recognition to say is this one person or
  is this another here are also cases
  where you might want this many to one
  architecture for a recurrent neural
  network and then as one final problem
  just to take a look at in terms of what
  we can do with these sorts of networks
  imagine what like Google Translate is
  doing so what Google Translate is doing
  is it's taking some text written in one
  language and converting it into text
  written in some other language for for
  example where now this input is a
  sequence of data it's a sequence of
  words and the output is a sequence of
  words as well it's also a sequence so
  here we want effectively like a many to
  many relationship our input is a
  sequence and our output is a sequence as
  well and it's not quite going to work to
  just say like take each word in the
  input and translate it into a word in
  the output because ultimately different
  languages put their words in different
  orders and maybe one language uses two
  words for something whereas another
  language only uses one so we really want
  some way to take this information this
  input encode it somehow and use that
  encoding to generate what the output
  ultimately should be and this has been
  one of the big advancements in uh
  automated translation technology is the
  ability to use the neural networks to do
  this instead of older more traditional
  methods and this has improved accuracy
  dramatically and the way you might
  imagine doing this is again using a
  recurrent neural network with multiple
  inputs and multiple outputs we start by
  passing in all the input input goes into
  the network another input like another
  word goes into the network and we do
  this multiple times like once for each
  word in the input that I'm trying to
  translate and only after all of that is
  done does the network now start to
  generate output like the first word of
  the translated sentence and the next
  word of the translated sentence so on
  and so forth where each time the network
  passes information to Itself by allowing
  for this model of giving some sort of
  state from one run in the network to the
  next run assembling information about
  all the inputs and then passing in
  information about which part of the
  output in order to generate next and
  there are a number of different types of
  these sorts of recurrent neural networks
  one of the most popular is known as the
  long short-term memory neural network
  otherwise known as lstm but in general
  these types of networks can be very very
  powerful whenever we're dealing with
  sequences whether those are sequences of
  images or especially sequences of words
  when it comes towards dealing with
  natural language and so that then were
  just some of the different types of
  neural networks that can be used to do
  all sorts of different computations and
  these are incredibly versatile tools
  that can be applied to a number of
  different domains we only looked at a
  couple of the most popular types of
  neural networks more traditional
  feedforward neural networks
  convolutional neural networks and
  recurrent neural networks but there are
  other types as well there are
  adversarial networks where networks
  compete with each other to try and uh be
  able to generate new types of data as
  well as other networks that can solve
  other tasks based on what they happen to
  be structured and adapted for and these
  are very powerful tools in machine
  learning for being able to very easily
  learn based on some set of input data
  and to be able to therefore figure out
  how to calculate some function from
  inputs to outputs whether it's input to
  some sort of classification like
  analyzing an image and getting a digit
  or machine translation where the input
  is in one language and the output is in
  another these tools have a lot of
  applications for machine learning more
  generally next time we'll look at
  machine learning in AI in particular in
  the context of natural language we
  talked a little bit about this today but
  looking at how it is that our AI can
  begin to understand natural language and
  can begin to be able to analyze and do
  useful tasks with regards to human
  language which turns out to be a
  challenging and interesting task so
  we'll see you next time
  [Music]
  welcome back everybody to our final
  class in an introduction to artificial
  intelligence with python now so far in
  this class we've been taking problems
  that we want to solve intelligently and
  framing them in ways that computers are
  going to be able to make sense of we've
  been taking problems and framing them as
  search problems or constraint
  satisfaction problems or optimization
  problems for example in essence we have
  been trying to communicate about
  problems in ways that our computer is
  going to be able to understand today the
  goal is going to be to get computers to
  understand the way you and I communicate
  naturally via our own natural languages
  languages like English but natural
  language contains a lot of nuance and
  complexity that's going to make it
  challenging for computers to be able to
  understand so we'll need to explore some
  new tools and some new techniques to
  allow computers to make sense of natural
  language so what is it exactly that
  we're trying to get computers to do well
  they all fall under this General heading
  of natural language processing getting
  computers to work with natural language
  and these tasks include tasks like
  automatic summarization given a long
  text can we train the computer to be
  able to come up with a shorter
  representation of it information
  extraction getting the computer to pull
  out relevant facts or details out of
  some text machine translation like
  Google translate translating some text
  from one language into another language
  question answering if you've ever asked
  a question to your phone or had a
  conversation with an AI chatbot where
  you provide some text to the computer
  the computer is able to understand that
  text and then generate some text in
  response text classification where we
  provide some text to the computer and
  the computer assigns it a label positive
  or negative inbox or spam for example
  and there are several other kinds of
  tasks that all fall under this heading
  of natural language processing but
  before we take a look at how the
  computer might try to solve these kinds
  of tasks it might be useful for us to
  think about language in general what are
  the kinds of challenges that we might
  need to deal with as we start to think
  about language and getting a computer to
  be able to understand it so one part of
  language that we'll need to consider is
  the syntax of language syntax is all
  about the structure of language
  languages composed of individual words
  and those words are composed together in
  some kind of structured hole and if our
  computer is going to be able to
  understand language it's going to need
  to understand something about that
  structure so let's take a couple of
  examples here for instance is a sentence
  just before 9:00 Sherlock Holmes stepped
  briskly into the room that sentence is
  made up of words and and those words
  together form a structured ho this is
  syntactically valid as a sentence but we
  could take some of those same words
  rearrange them and come up with a
  sentence that is not syntactically valid
  here for example just before Sherlock
  Holmes 9:00 stepped briskly the room is
  still composed of valid words but
  they're not in any kind of logical hole
  this is not a syntactically well-formed
  sentence another interesting challenge
  is that some sentences will have
  multiple possible valid structures
  here's a sentence for example I saw the
  man on the mountain with a telescope and
  here this is a valid sentence but it
  actually has two different possible
  structures that lend themselves to two
  different interpretations and two
  different meanings maybe I the one doing
  the seeing and the one with the
  telescope or maybe the man on the
  mountain is the one with the telescope
  and so natural language is ambiguous
  sometimes the same sentence can be
  interpreted in multiple ways and that's
  something that we'll need to think about
  as well and This lends itself to another
  problem within language that we'll need
  to think about which is semantics while
  syntax is all about the structure of
  language semantics is about the meaning
  of language it's not enough for a
  computer just to know that a sentence is
  well structured if it doesn't know what
  that sentence means and so semantics is
  going to concern itself with the meaning
  of words and the meaning of sentences so
  if we go back to that same sentences
  before just before 9:00 Sherlock Holmes
  stepped briskly into the room I could
  come up with another sentence say the
  sentence a few minutes before 9 Sherlock
  Holmes walked quickly into the room and
  those are two different sentences with
  some of the words the same and some of
  the words different but the two
  sentences have essentially the same
  meaning and so ideally whatever model we
  build will be able to understand that
  these two sentences while different mean
  something very similar some
  syntactically well-formed sentences
  don't mean anything at all a famous
  example from linguist n Chomsky is the
  sentence colorless green ideas sleep
  furiously this is a syntactically
  structurally well-formed sentence we've
  got adjectives modifying a noun ideas
  we've got a verb and an adverb in the
  correct positions but when taken as a
  whole the sentence doesn't really mean
  anything and so if our computers are
  going to be able to work with natural
  language and perform tasks in natural
  language processing these are some
  concerns we'll need to think about we'll
  need to be thinking about syntax and
  we'll need to be thinking about
  semantics so how could we go about
  trying to teach computer how to
  understand the structure of natural
  language well one approach we might take
  is by starting by thinking about the
  rules of natural language our natural
  languages have rules in English for
  example nouns tend to come before verbs
  nouns can be modified by adjectives for
  example and so if only we could
  formalize those rules then we could give
  those rules to a computer and the
  computer would be able to make sense of
  them and understand them and so let's
  try to do exactly that we're going to
  try to define a formal grammar where a
  formal grammar is some system of rules
  for generating sentences in a language
  this is going to be a rule-based
  approach to natural language processing
  we're going to give the computer some
  rules that we know about language and
  have the computer use those rules to
  make sense of the structure of language
  and there are a number of different
  types of formal grammars each one of
  them has slightly different use cases
  but today we're going to focus
  specifically on one kind of grammar
  known as a context free grammar so how
  does a context free grammar work well
  here's a sentence that we might want a
  computer to generate she saw the city
  and we're going to call each of these
  words a terminal symbol a terminal
  symbol because once our computer has
  generated the word there's nothing else
  for it to generate once it's generated
  the sentence the computer is done we're
  going to associate each of these
  terminal symbols with a non-terminal
  symbol that generates it so here we've
  got n which stands for noun like she or
  city we've got v as a non-terminal
  symbol which stands for a verb and then
  we have D which stands for determiner a
  determiner is a word like the' or a or
  an in English for example so each of
  these non-terminal symbols can generate
  the terminal symbols that we ultimately
  care about generating but how do we know
  or how does the computer know which
  non-terminal symbols are associated with
  which terminal symbols well to do that
  we need some kind of rule here are some
  what we call rewriting rules that have a
  non-terminal symbol on the left hand
  side of an arrow and on the right side
  is what that non- terminal symbol can be
  replaced with so here we're saying the
  non-terminal symbol n again which stands
  for noun could be replaced by any of
  these options separated by vertical bars
  n could be replaced by she or city or
  car or Harry D for determiner could be
  replaced by the a or an and so forth
  each of these non-terminal symbols could
  be replaced by any of these words we can
  also have non-terminal symbols that are
  replaced by other non-terminal symbols
  here's an interesting rule NP Arrow Nar
  DN so what does that mean well NP stands
  for a noun phrase sometimes when we have
  a noun phrase in a sentence it's not
  just a single word it could be multiple
  words and so here we're saying a noun
  phrase could be just a noun or it could
  be a determiner followed by a noun so we
  might have a noun phrase that's just a
  noun like she that's a noun phrase or we
  could have a noun phrase that's multiple
  words something like the city also acts
  as a noun phrase but in this case it's
  composed of two words a determiner the
  and a noun City we could do the same for
  verb phrases a verb phrase or VP might
  be just a verb or it might be a verb
  followed by a noun phrase so we could
  have a verb phrase that's just a single
  word like the word walked or we could
  have a verb phrase that is an entire
  phrase something like saw the city as an
  entire verb phrase a sentence meanwhile
  we might then Define as a noun phrase
  followed by a verb phrase and so this
  would allow us to generate a sentence
  like she saw the city an entire sentence
  made up of a noun phrase which is just
  the word she and then a verb phrase
  which is saw the city saw which is a
  verb and then the city which itself is
  also a noun phrase and so if we could
  give these rules to a computer
  explaining to it what non-terminal
  symbols could be replaced by what other
  symbols then a computer could take a
  sentence and begin to understand the
  structure of that sentence and so let's
  take a look at an example of how we
  might do that and to do that we're going
  to use a python Library called nltk or
  the natural language toolkit which we'll
  see a couple of times today it contains
  a lot of helpful features and functions
  that we can use for trying to deal with
  and process natural language so here
  we'll take a look at how we can use nltk
  in order to parse a context-free grammar
  so let's go ahead and open up CFG z.y
  CFG standing for context free grammar
  and what you'll see in this file is that
  I first import nltk the natural language
  toolkit and the first thing I do is
  Define a context free grammar saying
  that a sentence is a noun phrase
  followed by a verb phrase I'm defining
  what a noun phrase is defining what a
  verb phrase is and then giving some
  examples of what I can do with these
  non-terminal symbols D for determiner n
  for noun and V for verb we're going to
  use nltk to parse that grammar then
  we'll ask the user for some input in the
  form of a sentence and split it into
  words and then we'll use this context
  free grammar parser to try to parse that
  sentence and print out the resulting
  syntax tree so let's take a look at an
  example I'll go ahead and go into my CFG
  directory and we'll run CFG
  .p and here I'm asked to type in a
  sentence let's say I type in she
  walked and when I do that I see that she
  walked is a valid sentence where she is
  a noun phrase and walked is the
  corresponding verb phrase I could try to
  do this with a more complex sentence too
  I could do something like she saw the
  city and here we see that she is the
  noun phrase and then saw the city is the
  entire verb phrase that makes up this
  sentence so that was a very simple
  grammar let's take a look at a slightly
  more complex grammar here is
  cfg1 where a sentence is still a noun
  phrase followed by a verb phrase but
  I've added some other POS non-terminal
  symbols too I have a for adjective
  phrase and PP for prepositional phrase
  and we specified that we could have an
  adjective phrase before a noun phrase or
  a prepositional phrase after a noun for
  example so lots of additional ways that
  we might try to structure a sentence and
  interpret and parse one of those
  resulting sentences so let's see that
  one in action we'll go ahead and run
  cfg1 with this new grammar and we'll try
  a sentence like she saw the wide Street
  here Python's nltk is able to parse that
  sentence and identify that she saw the
  wide Street has this particular
  structure a sentence with a noun phrase
  and a verb phrase where that verb phrase
  has a noun phrase that within it
  contains an adjective and so it's able
  to get some sense for what the structure
  of this language actually is let's try
  another example let's say she saw the
  dog with the binoculars and we'll try
  that sentence
  and here we get one possible syntax tree
  she saw the dog with the binoculars but
  notice that this sentence is actually a
  little bit ambiguous in our own natural
  language who has the binoculars is it
  she who has the binoculars or the dog
  who has the binoculars and nltk is able
  to identify both possible structures for
  the sentence in this case the dog with
  the binoculars is an entire noun phrase
  it's all underneath this NP here so it's
  the dog that has the binoculars but we
  also
  got an alternative Parry where the dog
  is just the noun phrase and with the
  binoculars is a prepositional phrase
  modifying saw so she saw the dog and she
  used the binoculars in order to see the
  dog as well so this allows us to get a
  sense for the structure of natural
  language but it relies on us writing all
  of these rules and it would take a lot
  of effort to write all of the rules for
  any possible sentence that someone might
  write or say in English language
  language is comp compated and as a
  result there are going to be some very
  complex rules so what else might we try
  we might try to take a statistical lens
  towards approaching this problem of
  natural language processing if we were
  able to give the computer a lot of
  existing data of sentences written in
  the English language what could we try
  to learn from that data well it might be
  difficult to try and interpret long
  pieces of text all at once so instead
  what we might want to do is break up
  that longer text into smaller pieces of
  information instead in particular you
  might try to create NRS out of a longer
  sequence of text an engr is just some
  contiguous sequence of n items from a
  sample of text it might be n characters
  in a row or n words in a row for example
  so let's take a passage from Sherlock
  Holmes and let's look for all of the
  trigrams a trigram is an engram where n
  is equal to three so in this case we're
  looking for sequences of three words in
  a row so the trigrams here would be
  phrases like how often have that's three
  words a row often have I is another
  trigram have I said I said to said to
  you to you that these are all trigrams
  sequences of three words that appear in
  sequence and if we could give the
  computer a large Corpus of text and have
  it pull out all of the trigrams in this
  case it could get a sense for what
  sequences of three words tend to appear
  next to each other in our own natural
  language and as a result get some sense
  for what the structure of the language
  actually is
  so let's take a look at an example of
  that how can we use nltk to try to get
  access to information about
  engrams so here we're going to open up
  nrsp and this is a Python program that's
  going to load a corpus of data just some
  text files into our computer's memory
  and then we're going to use NLT K's NRS
  function which is going to go through
  the Corpus of text pulling out all of
  the NRS for a particular value of N and
  then by using python counter class we're
  going to figure out what are the most
  common engrams inside of this entire
  Corpus of text and we're going to need a
  data set in order to do this and I've
  prepared a data set of some of the
  stories of Sherlock Holmes so it's just
  a bunch of text files a lot of words for
  it to analyze and as a result we'll get
  a sense for what sequences of two words
  or three words tend to be most common in
  natural language so let's give this a
  try we'll go into my engrams directory
  and we'll run nr. Pi we'll try an N
  value of two so we're looking for
  sequences of two words in a row and
  we'll use our Corpus of stories from
  Sherlock Holmes and when we run this
  program we get a list of the most common
  NRS where n is equal to two otherwise
  known as a byr so the most common one is
  of thee that's a sequence of two words
  that appears quite frequently in natural
  language then in thee and it was these
  are all common sequences of two words
  that appear in a row let's instead now
  try running NRS with n equal to 3 Let's
  get all of the trigrs and see what we
  get and now we see the most common
  trigrams are it was a one of the I think
  that these are all sequences of three
  words that appear quite frequently and
  we were able to do this essentially via
  a process known as tokenization
  tokenization is the process of splitting
  a sequence of characters into pieces in
  this case we're splitting a long
  sequence of text into individual words
  and then looking at sequences of those
  words to get a sense for the structure
  of natural language so once we've done
  this once we've done the tokenization
  once we've built up our Corpus of engrs
  what can we do with that information
  well the one thing that we might try is
  we could build a Markov chain which you
  might recall from when we talked about
  probability recall that a Markov chain
  is some sequence of values where we can
  predict one value based on the values
  that came before it and as a result if
  we know all of the common engrams in the
  English language what words to be
  associated with what other words in
  sequence we can use that to predict what
  word might come next in a sequence of
  words and so we could build a marov
  chain for language in order to try to
  generate natural language that follows
  the same statistical patterns as some
  input data so let's take a look at that
  and build a Markov chain for natural
  language and as input I'm going to use
  the works of William Shakespeare so here
  I have a file shakespeare. text which is
  just
  a bunch of the works of William
  Shakespeare it's a long text file so
  plenty of data to analyze and here in
  generator. pi I'm using a third party
  python library in order to do this
  analysis we're going to read in the
  sample of text and then we're going to
  train a marov model based on that text
  and then we're going to have the marov
  chain generate some sentences we're
  going to generate a sentence that
  doesn't appear in the original text but
  that follows the same statistical
  patterns that's generating it based on
  the end trying to predict what word is
  likely to come next that we would expect
  based on those statistical patterns so
  we'll go ahead and go
  into our marar directory run this
  generator with the works of William
  Shakespeare's input and what we're going
  to get are five new sentences where
  these sentences are not necessarily
  sentences from the original input text
  itself but just that follow the same
  statistical patterns it's predicting
  what word is likely to come next based
  on the input data that we've seen and
  the types of words that tend to appear
  in sequence there too and so we're able
  to generate these sentences of course so
  far there's no guarantee that any of the
  sentences that are generated actually
  mean anything or make any sense they
  just happen to follow the statistical
  patterns that our computer is already
  aware of so we'll return to this issue
  of how to generate text in perhaps a
  more accurate or more meaningful way a
  little bit later so let's now turn our
  attention to a slightly different
  problem and that's the problem of text
  classification text class classification
  is the problem where we have some text
  and we want to put that text into some
  kind of category we want to apply some
  sort of label to that text and this kind
  of problem shows up in a wide variety of
  places a common place might be your
  email inbox for example you get an email
  and you want your computer to be able to
  identify whether the email belongs in
  your inbox or whether it should be
  filtered out into spam so we need to
  classify the text is it a good email or
  is it spam another common use case is
  sentiment analysis we might want to know
  whether the sentiment of some text is
  positive or negative and so how might we
  do that this comes up in situations like
  product reviews where we might have a
  bunch of reviews for a product on some
  website uh my grandson loved it so much
  fun product broke after a few days one
  of the best games I've played in a long
  time and kind of cheap and flimsy not
  worth it here's some example sentences
  that you might see on a product review
  website and you and I could pretty
  easily look at this list of product
  reviews and decide which ones are
  positive and which ones are negative we
  might say the first one and the third
  one those seem like positive sentiment
  messages but the second one and the
  fourth one seem like negative sentiment
  messages but how did we know that and
  how could we train a computer to be able
  to figure that out as well well you
  might have clued your eye in on
  particular key words where those
  particular words tend to mean something
  positive or negative so you might have
  identified words like loved and fun and
  best tend to be associated with positive
  messages and words like broke and cheap
  and flimsy tend to be associated with
  negative messages so if only we could
  train a computer to be able to learn
  what words tend to be associated with
  positive versus negative messages then
  maybe we could train a computer to do
  this kind of sentiment analysis as well
  so we're going to try to do just that
  we're going to use a model known as the
  bag of words model which is a model that
  represents text as just an unordered
  collection of words for the purpose of
  this model we're not going to worry
  about the sequence and The Ordering of
  The Words which word came first second
  or third we're just going to treat the
  text as a collection of words in no
  particular order and we're losing
  information there right the order of
  words is important and we'll come back
  to that a little bit later but for now
  to simplify our model it'll help us
  tremendously just to think about text as
  some unordered collection of words and
  in particular we're going to use the bag
  of words model to build something known
  as a naive B classifier so what is a
  naive B classifier well it's a tool
  that's going to allow us to classify
  text based on B rule again which you
  might remember from when we talked about
  probability Bay rule says that the
  probability of B given a is equal to the
  probability of a given B multipli by the
  probability of B divided by the
  probability of a so how are we going to
  use this rule to be able to analyze text
  well what are we interested in we're
  interested in the probability that a
  message has a positive sentiment and the
  probability that a message has a
  negative sentiment which I'm here for
  Simplicity going to represent just with
  these emoji happy face and frown face as
  positive and negative sentiment and so
  if I had a review something like my
  grandson loved it then what I'm
  interested in is not just the
  probability that a message has positive
  sentiment but the conditional
  probability that a message has positive
  sentiment given that this is the message
  my grandson loved it but how do I go
  about calculating this value the
  probability that the message is positive
  given that the review is this sequence
  of words well here's where the bag of
  words model comes in rather than treat
  this review as a string of a sequence of
  words in order we're just going to treat
  it as an unordered collection of words
  we're going to try to calculate the
  probability that the review is positive
  given that all of these words my
  grandson loved it are in the review in
  no particular order just this unordered
  collection of words and this is a
  conditional probability which we can
  then apply B rule to try to make sense
  of so according to Bay's rule this
  conditional probability is equal to
  what it's equal to the probability that
  all of these four words are in the
  review given that the review is positive
  multiplied by the probability that the
  review is positive divided by the
  probability that all of these words
  happen to be in the review so this is
  the value now that we're going to try to
  calculate now one thing you might notice
  is that the denominator here the
  probability that all of these words
  appear in the review doesn't actually
  depend on whether or not we're looking
  at the positive sentiment or negative
  sentiment case so we can actually get
  rid of this denominator we don't need to
  culate it we can just say that this
  probability is proportional to the
  numerator and then at the end we're
  going to need to normalize the
  probability distribution to make sure
  that all of the values sum up to the
  value one so now how do we calculate
  this value well this is the probability
  of all of these words given positive
  times probability of positive and that
  by the definition of joint probability
  is just one big joint probability the
  probability
  that all of these things are the case
  that it's a positive review and that all
  four of these words are in the review
  but still it's not entirely obvious how
  we calculate that value and here is
  where we need to make one more
  assumption and this is where the naive
  part of naive B comes in we're going to
  make the assumption that all of the
  words are independent of each other and
  by that I mean that if the word grandson
  is in the review that doesn't change the
  probability that the word loved is in
  the review or that the word it is in the
  review for example and in practice this
  assumption might not be true it's almost
  certainly the case that the probability
  of words do depend on each other but
  it's going to simplify our analysis and
  still give us reasonably good results
  just to assume that the words are
  independent of each other and they only
  depend on whether it's positive or
  negative you might for example expect
  the word loved to appear more often in a
  positive review than in a negative
  review so what does that mean well if we
  make this assumption then we can say
  that this value the prob probability
  we're interested in is not directly
  proportional to but it's naively
  proportional to this value the
  probability that the review is positive
  times the probability that my is in the
  review given that it's positive times
  the probability that grandson is in the
  review given that it's positive and so
  on for the other two words that happen
  to be in this review and now this value
  which looks a little more complex is
  actually a value that we can calculate
  pretty easily so how are we going to
  estimate the probability that the review
  is positive well if we have some
  training data some example data of
  example reviews where each one has
  already been labeled as positive or
  negative then we can estimate the
  probability that a review is positive
  just by counting the number of positive
  samples and dividing by the total number
  of samples that we have in our training
  data and for the conditional
  probabilities the probability of loved
  given that it's positive well that's
  going to be the number of positive
  samples with loved in it divided by the
  total number of positive samples so
  let's take a look at an actual example
  to see how we could try to calculate
  these values here I've put together some
  sample data the way to interpret the
  sample data is that based on the
  training data 49% of the reviews are
  positive 51% are negative and then over
  here in this table we have some
  conditional
  probabilities we have if the review is
  positive then there's a 30% chance that
  my appears in it and if the review is
  negative there's a 20% chance that my
  appears in it and based on our training
  data among the positive reviews 1% of
  them contain the word grandson and among
  the negative reviews 2% contain the word
  grandson so using this data let's try to
  calculate this value the value we're
  interested in and to do that we'll need
  to multiply all of these values together
  the probability of positive and then all
  of these positive conditional
  probabilities and when we do that we get
  some value and then we can do the same
  thing for the negative case we're going
  to do the same thing take the
  probability that it's negative
  multiply it by all of theseal
  probabilities and we're going to get
  some other value and now these values
  don't sum to one they're not a
  probability distribution yet but I can
  normalize them and get some values and
  that tells me that we're going to
  predict that my grandson loved it we
  think there's a 68% chance probability
  0.68 that that is a positive sentiment
  review and 32 probability that it's a
  negative review so what problems might
  we run into here what could potenti go
  wrong when doing this kind of analysis
  in order to analyze whether text has a
  positive or negative sentiment well a
  couple of problems might arise one
  problem might be what if the word
  grandson never appears for any of the
  positive reviews if that were the case
  then when we try to calculate the value
  the probability that we think the review
  is positive we're going to multiply all
  these values together and we're just
  going to get zero for the positive case
  because we're going to ultimately
  multiply by that zero value and so we're
  going to say that we think there is no
  chance that the review is positive
  because it contains the word grandson
  and in our training data we've never
  seen the word grandson appear in a
  positive sentiment message before and
  that's probably not the right analysis
  because in cases of rare words it might
  be the case that in nowhere in our
  trading data did we ever see the word
  grandson appear in a message that has
  positive sentiment so what can we do to
  solve this problem well one thing we'll
  often do is some kind of additive
  smoothing where we add some value Alpha
  to value in our distribution just to
  smooth out the data a little bit and a
  common form of this is smothing where we
  add one to each value in our
  distribution in essence we pretend we've
  seen each value one more time than we
  actually have if we've never seen the
  word grandson for a positive review we
  pretend we've seen it once if we've seen
  it once we pretend we've seen it twice
  just to avoid the possibility that we
  might multiply by zero and as a result
  get some results we don't want in our
  analysis so let's see what this looks
  like in practice let's try to do some
  naive based classification in order to
  classify text as either positive or
  negative we'll take a look at
  sentiment. and what this is going to do
  is load some sample data into memory
  some examples of positive reviews and
  negative reviews and then we're going to
  train a naive based classifier on all of
  this training data training data that
  includes all of the words we see in
  positive reviews and all of the words we
  see in negative reviews and and then
  we're going to try to classify some
  input and so we're going to do this
  based on a corpus of data I have some
  example positive reviews here's some
  positive reviews it was great so much
  fun for example and then some negative
  reviews not worth it kind of cheap these
  are some examples of negative reviews so
  now let's try to run this classifier and
  see how it would classify particular
  text as either positive or negative
  we'll go ahead and run our sentiment
  analysis on this Corpus and we need to
  provide it with a review so I'll say
  something like I enjoyed it and we see
  that the classifier says there's about
  a92 probability that we think that this
  particular review is positive let's try
  something negative we'll try kind of
  overpriced and we see that there is a96
  probability now that we think that this
  particular review is negative and so our
  naive based classifier has learned what
  kinds of words tend to appear in
  positive reviews and what kinds of words
  tend to appear in negative reviews and
  as a result of that we've been able to
  design a classifier that can predict
  whether a particular review is positive
  or
  negative and so this definitely is a
  useful tool that we can use to try and
  make some predictions but we had to make
  some assumptions in order to get there
  so what if we want to now try to build
  some more sophisticated models use some
  tools from machine learning to try and
  take better advantage of language data
  to be able to draw more accurate
  conclusions and solve new kinds of tasks
  and new kinds of problems well we've
  seen a couple of times now that when we
  want to some data and take some input
  put it in a way that the computer is
  going to be able to make sense of it can
  be helpful to take that data and turn it
  into numbers ultimately and so what we
  might want to try to do is come up with
  some word representation some way to
  take a word and translate its meaning
  into numbers because for example if we
  wanted to use a neural network to be
  able to process language give our
  language to a neural network and have it
  make some predictions or perform some
  analysis there a neural network takes
  his input and produces as output a
  vector of values a vector of numbers and
  so what we might want to do is take our
  data and somehow take words and convert
  them into some kind of numeric
  representation so how might we do that
  how might we take words and turn them
  into numbers let's take a look at an
  example here's a sentence he wrote a
  book and let's say I wanted to take each
  of those words and turn it into a vector
  of values here's one way I might do that
  we'll say he is going to be a vector
  that has a one in the first position and
  the rest of the values are zero rot will
  have a one in the second position and
  the rest of the values are zero a has a
  one in the third position with the rest
  of the value zero and book has a one in
  the fourth position with the rest of the
  value zero so each of these words now
  has a distinct Vector representation and
  this is what we often call a one hot
  representation a representation of the
  meaning of a word as a vector with a
  single one and all of the rest of the
  values are zero and so when doing this
  we now have a numeric representation for
  every word and we could pass in those
  Vector representations into a neural
  network or other models that require
  some kind of numeric data as input but
  this one hot representation actually has
  a couple of problems and it's not ideal
  for a few reasons one reason is here
  we're just looking at four words but if
  you imagine a vocabulary of thousands of
  words or more these vectors are going to
  get quite long in order to have a
  distinct Vector for every possible word
  in our vocabulary and as a result of
  that these longer vectors are going to
  be more difficult to deal with more
  difficult to train and so forth and so
  that might be a problem another problem
  is a little bit more subtle if we want
  to represent a word as a vector and in
  particular the meaning of a word as a
  vector then ideally it should be the
  case that words that have similar
  meanings should also have similar Vector
  representations so that they're close to
  each other together inside a vector
  space but that's not really going to be
  the case with these one hot
  representations because if we take some
  similar words say the word wrote and the
  word authored which mean similar things
  they have entirely different Vector
  representations likewise book and novel
  those two words mean somewhat similar
  things but they have entirely different
  Vector representations because they each
  have a one in some different position
  and so that's not ideal either so what
  we might be interested in instead is
  some kind of distributed representation
  a distributed representation is the
  representation of the meaning of a word
  distributed across multiple values
  instead of just being one hot with a one
  in one position here is what a
  distributed representation of words
  might be each word is associated with
  some Vector of values with the meaning
  distributed across multiple values
  ideally in such a way that similar words
  have a similar Vector representation but
  how are we going to come up with those
  values where do those values come from
  how can we Define the meaning of a word
  in this distributed sequence of numbers
  well to do that we're going to draw
  inspiration from a quote from British
  linguist Jr fth who said You shall know
  a word by the company it keeps in other
  words we're going to define the meaning
  of a word based on the words that appear
  around it the context words around it
  take for example this context for blank
  he ate you might wonder what words could
  reasonably fill in that blank well it
  might be words like breakfast or lunch
  or dinner all of those could reasonably
  fill in that blank and so what we're
  going to say is because the words
  breakfast and lunch and dinner appear in
  a similar context that they must have a
  similar meaning and that's something our
  computer could understand and try to
  learn a computer could look at a big
  Corpus of text look at what words tend
  to appear in similar context to each
  other and use that to identify which
  words have a similar meaning and should
  therefore appear close to each other
  inside of vector space and so one common
  model for doing this is known as the
  word to V model it's a model model for
  generating word vectors a vector
  representation for Every Word by looking
  at data and looking at the context in
  which a word appears the idea is going
  to be this if you start out with all of
  the words just in some random position
  in space and train it on some training
  data what the word Toc model will do is
  start to learn what words appear in
  similar context and it will move these
  vectors around in such a way that
  hopefully words with similar meanings
  breakfast lunch and dinner book Memoir
  novel hopefully appear to be near to
  each other as vectors as well so let's
  now take a look at what word Tove might
  look like in practice when implemented
  in code what I have here inside of
  words. text is a pre-trained model where
  each of these words has some Vector
  representation trained by word to VC
  each of these words has some sequence of
  values representing its meaning
  hopefully in such a way that similar
  words are represented by similar vectors
  I also have this file vectors. Pi which
  is going to open up the words and form
  them into a dictionary and we also
  Define some useful functions like
  distance to get the distance between two
  word vectors and closest words to find
  which words are nearby in terms of
  having close vectors to each other and
  so let's give this a try we'll go ahead
  and open a python
  interpreter
  and I'm going to import these vectors
  and we might say all right what is the
  vector representation of the word book
  and we get this big long Vector that
  represents the word book as a sequence
  of values and this sequence of values by
  itself is not all that meaningful but it
  is Meaningful in the context of
  comparing it to other vectors for other
  words so we could use this distance
  function which is going to get us the
  distance between two word vectors and we
  might say what is the distance between
  the vector representation for the word
  book and the vector representation for
  the word novel and we see that it's 0.34
  you can kind of interpret zero as being
  really close together and one being very
  far apart and so now what is the
  distance between book and let's say
  breakfast well book and breakfast are
  more different from each other than book
  and novel are so I would hopefully
  expect the distance to be larger and in
  fact it is 0.64 approximately these two
  words are further away from each other
  and what about now the distance between
  let's say lunch and breakfast well
  that's about Z .2 those are even closer
  together they have a meaning that is
  closer to each other another interesting
  thing we might do is calculate the
  closest words we might say what are the
  closest words according to word DEC to
  the word book and let's say let's get
  the 10 closest words what are the 10
  closest vectors to the vector
  representation for the word book and
  when we perform that analysis we get
  this list of words the closest one is
  book itself but we also have books
  plural and then essay Memoir essays
  Nolla Anthology and so on all of these
  words mean something similar to the word
  book according to word to VC at least
  because they have a similar Vector
  representation so it seems like we've
  done a pretty good job of trying to
  capture this kind of vector
  representation of word meaning one other
  interesting side effect of word Toc is
  that it's also able to capture something
  about the relationships between words as
  well let's take a look at an example
  here for instance are two words man and
  King and these are each represented by
  word Toc as vectors so what might happen
  if I subtracted one from the other
  calculated the value King minus man well
  that will be the vector that will take
  us from man to King somehow represent
  this relationship between the vector
  representation of the word man and the
  vector representation of the word King
  and that's what this value King minus
  man represents so what would happen if I
  took the vector representation of the
  word woman and added that same value
  King minus man to it what would we get
  as the closest word to that for example
  well we could try it let's go ahead and
  go back to our python interpreter and
  give this a try I could say what is the
  closest word to the vector
  representation of the word King minus
  the representation of the word man plus
  the representation of the word woman and
  we see that the closest word is the word
  Queen we've somehow been able to capture
  the relationship between King and man
  and then when we apply it to the word
  woman we get as the result the word
  Queen so word Tove has been able to
  capture not just the words and how
  they're similar to each other but also
  something about the relationships
  between words and how those words are
  connected to each other so now that we
  have this Vector representation of words
  what can we now do with it now we can
  represent words as numbers and so we
  might try to pass those words as input
  to say a neural network neural networks
  we've seen are very powerful tools for
  identifying patterns and making
  predictions recall that a neural network
  you can think of as all of these units
  but really what the neural network is
  doing is taking some input passing it
  into the network and then producing some
  output and by providing the neural
  network with training data we're able to
  update the weights inside of the network
  so that the neural network can do a more
  accurate job of translating those inputs
  into those outputs and now that we can
  represent words as numbers that could be
  the input or output you could imagine
  passing a word in as input to a neural
  network and getting a word as output and
  so when might that be useful one common
  use for neural networks is in machine
  translation when we want to translate
  text from one language into another say
  translate English into French by passing
  English into the neural network and
  getting some French output you might
  imagine for instance that we could take
  the English word for lamp pass it into
  the neural network get the French word
  for lamp as output but in practice When
  We're translating text from one language
  to another we're usually not just
  interested in translating a single word
  from one language to another but a
  sequence say a sentence or a paragraph
  of words here for example is another
  paragraph again taken from Sherlock
  Holmes written in English and what I
  might want to do is take that entire
  sentence pass it into the neural network
  and get as output a French translation
  of the same sentence but recall that a
  neural Network's input and output needs
  to be of some fixed size and a sentence
  is not a fixed size it's variable you
  might have shorter sentences you might
  have longer sentences so somehow we need
  to solve the problem of translating a
  sequence into another sequence by means
  of a neural network and that's going to
  be true not only for machine translation
  but also for other problems problems
  like question answering if I want to
  pass as input a question something like
  what is the capital of Massachusetts
  feed that as input into the neural
  network I would hope that what I would
  get as output is a sentence like the
  capital is Boston again translating some
  sequence into some other sequence and if
  you've ever had a conversation with an
  AI chatbot or have ever asked your phone
  a question it needs to do something like
  this it needs to understand the sequence
  of words that you the human provided as
  input and then the computer needs to
  generate some sequence of words as
  output so how can we do this well one
  tool that we can use is the recurrent
  neural network which we took a look at
  last time which is a way for us to
  provide a sequence of values to a neural
  network by running the neural network
  multiple times and each time we run the
  neural network what we're going to do is
  we're going to keep track of some hidden
  State and that hidden state is going to
  be passed from one run of the neural
  network to the next run of the neural
  network keeping track of all of the
  relevant information and so let's take a
  look at how we could apply that to
  something like this and in particular
  we're going to look at an architecture
  known as an encoder decoder architecture
  where we're going to encode this
  question into some kind of hidden State
  and then use a decoder to decode that
  hidden State into the output that we're
  interested in so what's that going to
  look like we'll start with the first
  word the word what that goes into our
  neural network and it's going to produce
  some hidden State this is some
  information about the word what that our
  neural network is going to need to keep
  track of then when the second word comes
  along we're going to feed it into that
  same encoder neural network but it's
  going to get us input that hidden State
  as well so we pass in the second word we
  also get the information about the
  hidden State and that's going to
  continue for the other words in the
  input this is going to produce a new
  hidden in state and so then when we get
  to the third word the that goes into the
  encoder it also gets access to the
  hidden State and then it produces a new
  hidden state that gets passed into the
  next run when we use the word capital
  and the same thing is going to repeat
  for the other words that appear in the
  input so of Massachusetts that produces
  is one final piece of hidden State now
  somehow we need to Signal the fact that
  we're done there's nothing left in the
  input and we typically do this by
  passing some kind of special token say
  an end token into the neural network and
  now the decoding process is going to
  start we're going to generate the word '
  but in addition to generating the word
  the' this decoder network is also going
  to generate some kind of hidden State
  and so what happens the next time well
  to generate the next word it might be
  helpful to know what the first word was
  so we might pass the first word the back
  into the decoder Network it's going to
  get us input this hidden State and it's
  going to generate the next word capital
  and that's also going to generate some
  hidden State and we'll repeat that
  passing Capital into the network to
  generate the third word is and then one
  more time in order to get the fourth
  word Boston and at that point we're done
  but how do we know we're done usually
  we'll do this one more time pass Boston
  into the decoder Network and get as
  output some end token to indicate that
  that is the end of our input and so this
  then is how we could use a recurrent
  neural network to take some input encode
  it into some hidden State and then use
  that hidden state to decode it into the
  output we're interested in to visualize
  it in a slightly different way we have
  some input sequence this is just some
  sequence of words that input sequence
  goes into the encoder which in this case
  is a recurrent neural network generating
  these hidden States along the way until
  we generate some final hidden State at
  which point we start the decoding
  process again using a recurrent neural
  network that's going to generate the
  output sequence as well so we've got the
  encoder which is encoding the
  information about the input sequence
  into this hidden State and then the
  decoder which takes that hidden State
  and uses it in order to generate the
  output sequence but there are some
  problems and for many years this was the
  state-of-the-art the recurrent neural
  network and variance on this approach
  were some of the best ways we knew in
  order to perform tasks in natural
  language processing but there are some
  problems that we might want to try to
  deal with and that have been dealt with
  over the years to try and improve upon
  this kind of model and one problem you
  might notice happens in this encoder
  stage we've taken this input sequence
  the sequence of words and encoded it all
  into this final piece of hidden State
  and that final piece of hidden State
  needs to contain all of the information
  from the input sequence that we need in
  order to generate the output sequence
  and while that's possible it becomes
  increasingly difficult as the sequence
  gets larger and larger for larger and
  larger input sequences it's going to
  become more and more difficult to store
  all of the information we need about the
  input inside this single hidden State
  piece of context that's a lot of
  information to pack into just a single
  value it might be useful for us when
  generating output to not just refer to
  this one value but to all of the
  previous hidden values that have been
  generated by the encoder and so that
  might be useful but how could we do that
  we've got a lot of different values we
  need to combine them somehow so you
  could imagine adding them together
  taking the average of them for example
  but doing that would assume that all of
  these pieces of hidden state are equally
  important but that's not necessarily
  true either some of these pieces of
  hidden state are going to be more
  important than others depending on what
  word they most closely correspond to
  this piece of hidden State very closely
  corresponds to the first word of the
  input sequence this one very closely
  corresponds to the second word of the
  input sequence for example and some of
  those are going to be more important
  than others to make matters more
  complicated depending on which word of
  the output sequence we're generating
  different input words might be more or
  less important and so what we really
  want is some way to decide for ourselves
  which of the input values are worth
  paying attention to at what point in
  time and this is the key idea behind a
  mechanism known as attention attention
  is all about letting us decide which
  values are important to pay attention to
  when generating in this case the next
  word in our sequence so let's take a
  look at an example of that here's a
  sentence what is the capital of
  Massachusetts same sentence as before
  and let's imagine that we were trying to
  answer that question by generating
  tokens of output so what would the
  output look like well it's going to look
  like something like the capital is and
  let's say we're now trying to generate
  this last word here what is that last
  word how is the computer going to figure
  it out well what it's going to need to
  do is decide which values it's going to
  pay attention to and so the attention
  mechanism will allow us to calculate
  some attention scores for each word some
  value corresponding to each word
  determining how relevant is it for us to
  pay attention to that word right now and
  in this case when generating the fourth
  word of the output sequence the most
  important words to pay attention to
  might be capital and and Massachusetts
  for example that those words are going
  to be particularly relevant and there
  are a number of different mechanisms
  that have been used in order to
  calculate these attention scores it
  could be something as simple as a DOT
  product to see how similar two vectors
  are or we could train an entire neural
  network to calculate these attention
  scores but the key idea is that during
  the training process for a neural
  network we're going to learn how to
  calculate these attention scores our
  model is going to learn what is
  important to pay attention to in order
  to decide what the next word should be
  so the result of all of this calculating
  these attention scores is that we can
  calculate some value some value for each
  input word determining how important is
  it for us to pay attention to that
  particular value and recall that each of
  these input words is also associated
  with one of these hidden State context
  vectors capturing information about the
  sentence up to that point but primarily
  focused on that word in particular and
  so what we can now do is if we have all
  of these vectors and we have values
  representing how important is it for us
  to pay attention to those particular
  vectors is we can take a weighted
  average we can take all of these vectors
  multiply them by their attention scores
  and add them up to get some new Vector
  value which is going to represent the
  context from the input but specifically
  paying attention to the words that we
  think are most important and once we've
  done that that context Vector can be fed
  into our
  in order to say that the word should be
  in this case Boston so attention is this
  very powerful tool that allows any word
  when we're trying to decode it to decide
  which words from the input should we pay
  attention to in order to determine
  what's important for generating the next
  word of the output and one of the first
  places this was really used was in the
  field of machine translation here's an
  example of a diagram from the paper that
  introduced this idea which was focused
  on trying to translate English sentences
  into French sentences so we have an
  input English sentence up along the top
  and then along the left side the output
  French equivalent of that same sentence
  and what you see in all of these squares
  are the attention scores visualized
  where a lighter Square indicates a
  higher attention score and what you'll
  notice is that there's a strong
  correspondence between the French word
  and the equivalent English word that the
  French word for agreement is really
  paying attention to the English word for
  agreement in order to decide what French
  word should be generated at that point
  in time and sometimes you might pay
  attention to multiple words if you look
  at the French word for economic that's
  primarily paying attention to the
  English word for economic but also
  paying attention to the English word for
  European in this case too and so
  attention scores are very easy to
  visualize to get a sense for what is our
  machine learning model really paying
  attention to what information is it
  using in order to determine what's
  important and what's not in order to
  determine what the ultimate output token
  should be and so when we combine the
  attention mechanism with a recurrent
  neural network we can get very powerful
  and useful results where we're able to
  generate an output sequence by paying
  attention to the input sequence too but
  there are other problems with this
  approach of using a recurrent neural
  network as well in particular notice
  that every run of the neural network
  depends on the output of the previous
  step and that was important for getting
  a sense for the sequence of words and
  the ordering of those particular words
  but we can't run this unit of the neural
  network until after we've calculated the
  hidden state from the run before it from
  the previous input token and what that
  means is that it's very difficult to
  parallelize this process that as the
  input sequence get longer and longer we
  might want to use parallelism to try and
  speed up this process of training the
  neural network and making sense of all
  of this language data but it's difficult
  to do that and it's slow to do that with
  a recurrent neural network because all
  of it needs to be performed in sequence
  and that's become an increasing
  challenge as we've started to get larger
  and larger language models the more
  language data that we have available to
  us to use to train our machine learning
  models the more accurate it can be the
  better representation of language it can
  have the better understanding it can
  have and the better results that we can
  see and so we've seen this growth of
  large language models that are using
  larger and larger data sets but as a
  result they take longer and longer to
  train and so this problem that recurrent
  neural networks are not easy to
  parallelize has become an increasing
  problem and as a result of that that was
  one of the main motivations for a
  different architecture for thinking
  about how to deal with natural language
  and that's known as the Transformer
  architecture and this has been a
  significant milestone in the world of
  natural language processing for really
  increasing how well we can perform these
  kinds of natural language processing
  tasks as well as how quickly we can
  train a machine learning model to be
  able to produce effective results there
  are a number of different types of
  Transformers in terms of how they work
  what we're going to take a look at here
  is the basic architecture for how one
  might work with a Transformer to get a
  sense for what's involved and what we're
  doing so let's start with the model we
  were looking at before specifically at
  this encoder part of our encoder decoder
  architecture where we used a recurrent
  neural network to take this input
  sequence and capture all of this
  information about the hidden State and
  the information we need to know about
  that input sequence right now it all
  needs to happen in this linear
  progression but but what the Transformer
  is going to allow us to do is process
  each of the words independently in a way
  that's easy to parallelize rather than
  have each word wait for some other word
  each word is going to go through this
  same neural network and produce some
  kind of encoded representation of that
  particular input word and all of this is
  going to happen in parallel now it's
  happening for all of the words at once
  but we're really just going to focus on
  what's Happening for one word to make it
  clear but know that whatever you're
  seeing happen for this one word is going
  to happen for all of the other input
  words too so what's going on here well
  we start with some input word that input
  word goes into the neural network and
  the output is hopefully some encoded
  representation of the input word the
  information we need to know about the
  input word that's going to be relevant
  to us as we're generating the output and
  because we're doing this each word
  independently it's easy to parallelize
  we don't have to wait for the previous
  word before we run this word through the
  neural network but what did we lose in
  this process by trying to parallelize
  this whole thing well we've lost all
  notion of word ordering the order of
  words is important the sentence Sherlock
  Holmes gave the book to Watson has a
  different meaning than Watson gave the
  book to Sherlock Holmes and so we want
  to keep track of that information about
  word position in the recurrent neural
  network that happened for us
  automatically because we could run each
  word one at a time through the neural
  network get the hidden State pass it on
  to the next run of the neural network
  but that's not the case here with the
  Transformer where each word is being
  processed independent of all of the
  other ones so what are we going to do to
  try to solve that problem one thing we
  can do is add some kind of positional
  encoding to the input word the
  positional encoding is some Vector that
  represents the position of the word in
  the sentence this is the first word the
  second word the third word and so forth
  we're going to add that to the input
  word and the result of that is going to
  be a vector that captures multiple
  pieces of information it is the input
  word itself as well as where in the
  sentence it appears the result of that
  is we can pass the output of that
  addition the addition of the input word
  and the positional encoding into the
  neural network that way the neural
  network knows the word and where it
  appears in the sentence and can use both
  of those pieces of information to
  determine how best to represent the
  meaning of that word in the encoded
  representation at the end of it in
  addition to what we have here in
  addition to the positional encoding and
  this feed forward Network we're also
  going to add one additional component
  which is going to be a self attention
  step this is going to be attention where
  we're paying attention to the other
  input words because the meaning or
  interpretation of an input word might
  vary depending on the other words in the
  input as well and so we're going to
  allow each word in the input to decide
  what other words in the input it should
  pay attention to in order to decide on
  its encoded representation and that's
  going to allow us to get a better en
  coded representation for each word
  because words are defined by their
  context by the words around them and how
  they're used in that particular context
  this kind of self attention is so
  valuable in fact that often times a
  Transformer will use multiple different
  self- attention layers at the same time
  to allow for this model to be able to
  pay attention to multiple facets of the
  input at the same time we call this
  multi-headed attention where each
  attention head can pay attention to
  something different and as a result this
  Network can learn to pay attention to
  many different parts of the input for
  this input word all at the same time and
  in the spirit of deep learning these two
  steps this multi-headed self attention
  layer and this neural network layer that
  itself can be repeated multiple times
  too in order to get a deeper
  representation in order to learn deeper
  patterns within the input text and
  ultimately get a better representation
  of language in order to get useful and
  coded representations of all of the
  input words and so this is the process
  that a Transformer might use in order to
  take an input word and get it as encoded
  representation and the key idea is to
  really rely on this attention step in
  order to get information that's useful
  in order to determine how to encode that
  word and that process is going to repeat
  for all of the input words that are in
  the input sequence we're going to take
  all of the input words encode them with
  some kind of positional encoding feed
  those into the self attention and feed
  forward neural networks in order to
  ultimately get these encoded
  representations of the words that's the
  result of the encoder we get all of
  these encoded representations that will
  be useful to us when it comes time then
  to try to decode all of this information
  into the output sequence we're
  interested in and again this might take
  place in the context of machine
  translation where the output is going to
  be the same sentence in a different
  language or it might be an answer to a
  question in the case of an AI chatbot
  for example and so now let's take a look
  at how that decoder is going to work
  ultimately it's going to have a very
  similar structure anytime we're trying
  to generate the next output word we need
  to know what the previous output word is
  as well as its positional encoding where
  in the output sequence are we and we're
  going to have these same steps self
  attention because we might want an
  output word to be able to pay attention
  to other words in that same output as
  well as a neural network and that might
  itself repeat multiple times but in this
  decoder we're going to add one
  additional step we're going to add an
  additional attention step where instead
  of self attention where the output word
  is going to pay attention to other
  output words in this step we're going to
  allow the output word to pay attention
  to the encoded representations so recall
  that the encoder is taking all of the
  input words and transforming them into
  these encoded representations of all of
  the input words but it's going to be
  important for us to be able to decide
  which of those encoded representation we
  want to pay attention to when generating
  any particular token in the output
  sequence and that's what this additional
  attention step is going to allow us to
  do it's saying that every time we're
  generating a word of the output we can
  pay attention to the other words in the
  output because we might want to know
  what are the words we've generated
  previously and we want to pay attention
  to some of them to decide what word is
  going to be next in the sequence but we
  also care about paying attention to the
  input words too and we want the ability
  to decide which of these encoded
  representations of the input words are
  going to be relevant in order for us to
  generate the next step and so these two
  pieces combined together we have this
  encoder that takes all of the input
  words and produces this encoded
  representation and we have this decoder
  that is able to take the previous output
  word pay attention to that encoded input
  and then generate the next output word
  and this is one of the possible
  architectures we could use for a
  Transformer with the key idea being
  these attention steps that allow words
  to pay attention to each other during
  the training process here we can now
  much more easily parallelize this
  because we don't have to wait for all of
  the words to happen in sequence and we
  can learn how we should perform these
  attention steps the model is able to
  learn what is important to pay attention
  to what things do I need to pay
  attention to in order to be more
  accurate at predicting what the output
  word is and this has proved to be a
  tremendously effective model for
  conversational AI agents for building
  machine translation systems and there
  have been many variants proposed on this
  model too some Transformers only use an
  encoder some only use a decoder some use
  some other combination of these
  different particular features but the
  key ideas ultimately remain the same
  this real focus on trying to pay
  attention to what is most important and
  the world of natural language processing
  is fast growing and fast evolving year
  after year we keep coming up with new
  models that allow us to do an even
  better job of Performing these natural
  language related tasks all on the
  surface of solving the tricky problem
  which is our own natural language we've
  seen how the syntax and semantics of our
  language is ambiguous and introduces all
  of these new challenges that we need to
  think about if we're going to be able to
  design AI agents that are able to work
  with language effectively so as we think
  about where we've been in this class all
  of the different types of artificial
  intelligence we've considered we've
  looked at artificial intelligence in a
  wide variety of different forms now we
  started by taking a look at search
  problems where we looked at how AI can
  search for Solutions play games and find
  the optimal decision to make we talked
  about knowledge how AI can represent
  information that it knows and use that
  information to generate new knowledge as
  well then we looked at what AI can do
  when it's less certain when it doesn't
  know things for sure and we have to
  represent things in terms of probability
  we then took a look at optimization
  problems we saw how a lot of problems in
  AI can be boiled down to trying to
  maximize or minimize some function and
  we looked at strategies that AI can use
  in order to do that kind of maximizing
  and minimizing we then looked at the
  world of machine learning learning from
  data in order to figure out some
  patterns and identify how to perform a
  task by looking at the training data
  that we have available to it and one of
  the most powerful tools there was the
  neural network the sequence of units
  whose weights can be trained in order to
  allow us to really effectively go from
  input to output and predict how to get
  there by learning these underlying
  patterns and then today we took a look
  at language itself trying to understand
  how can we train the computer to be able
  to understand our natural language to be
  able to understand syntax and semantics
  make sense of and generate natural
  language which introduces a number of
  interesting problems too and we've
  really just scratched the surface of
  artificial intelligence there is so much
  interesting research and interesting new
  techniques and algorithms and ideas
  being introduced to try to solve these
  types of problems so I hope you enjoyed
  this exploration into the world of
  artificial intelligence a huge thanks to
  all the teaching staff and production
  team for making the class possible this
  was an introduction to artificial
  intelligence with python
