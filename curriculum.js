// Short teaching notes extend the original source-based outline without crowding a lesson page.
const teaching = {
  '1:0':'Think of the .java file as instructions you write and the .class file as instructions prepared for the JVM. The operating system changes, but the bytecode can stay the same when a compatible JVM is available.',
  '1:1':'A class groups code, and main is the usual starting method for an application. Compilation and running are two distinct steps: javac checks and prepares the program; java starts it.',
  '1:2':'Do not fix an error by guessing. The stage of failure is a clue: the compiler points to invalid code, an exception points to a failure while running, and a wrong output points to a rule or calculation.',
  '2:0':'The declared type is a promise about the values a variable can hold. Operators combine those values, but the result also depends on operand types and precedence; integer division is the classic trap.',
  '2:1':'A String is one object containing text. An array is a fixed group of same-type values. Indexing starts at zero, so every array access needs a valid position.',
  '2:2':'Decisions select a path, loops repeat a path, and methods package a useful piece of behavior. For each one, start with the requirement: a range, a fixed choice, a number of repetitions, or reusable work.',
  '3:0':'Imagine one Student blueprint and several student objects. Each object has its own fields. A constructor gives a new object its starting values, while methods express what it can do.',
  '3:1':'Encapsulation means callers cannot put an object into an invalid state by changing its internals directly. Put the rule in a method, then every caller follows the same safe path.',
  '3:2':'Relationships describe different facts. A Course may work with an Instructor, a Car may contain an Engine, and a Car is a Vehicle. Only the last statement naturally calls for inheritance.',
  '4:0':'Inheritance is useful when a specialized class truly is a kind of the general class. Overriding changes inherited instance behavior, while super lets the subclass reuse part of its parent.',
  '4:1':'With a parent-type variable holding a child object, two questions matter: “Which methods am I allowed to call?” and “Which version runs?” The reference type answers the first; the actual object answers the second for overridden methods.',
  '4:2':'An abstract class can share state and partial behavior among close relatives. An interface is a promise of a capability that different classes can fulfill. Both help other code depend on a stable contract.',
  '5:0':'An exception is a signal that normal execution cannot continue as expected. A good handler either recovers meaningfully or passes the problem along with enough detail for the caller to decide.',
  '5:1':'Packages give a large program a map: model types, interface types, and other responsibilities can live in separate areas. Generics and enums make invalid combinations harder to express.',
  '5:2':'Modern features reduce repetition when they clarify intent. A shorter expression is useful only when a reader can still see the type, choice, or action clearly.',
  '6:0':'Collection selection begins with the requirement. Ask whether you need duplicates, index positions, unique membership, arrival order, or lookup by key before choosing a class.',
  '6:1':'A traversal reads a collection one element at a time. Enhanced for is easy to read; an Iterator gives controlled removal. Generics tell the compiler what element type belongs there.',
  '6:2':'Sorting arranges data according to a rule. Searching depends on the arrangement: binary search only makes sense when the list has already been sorted using the same rule.',
  '7:0':'Threads allow independent tasks to make progress within one program. Because threads share state, the tricky part is deciding which data can be touched by more than one task.',
  '7:1':'A Swing window is assembled from containers and controls. A click produces an event, a listener receives it, and application logic does the real work. Keeping those responsibilities separate makes the GUI easier to change.',
  '8:0':'JDBC is a set of roles, not one magical command: a connection reaches the database, a statement sends SQL, and a result set reads returned rows. Always consider what happens when an operation fails.',
  '8:1':'The user should see a clear result, but the button should not contain every rule and SQL statement. Move validation into application logic and data operations into a data-access class.'
};
for (const module of courseData.modules) module.topics.forEach((topic,index)=>{topic.explain=teaching[`${module.id}:${index}`]||'';});

const addedTopics = {
  2:[
    {title:'Literals and type conversion',lead:'The form of a literal and the type of an expression affect the value Java produces.',explain:'A long literal uses an L suffix and a float literal uses F. A widening conversion usually happens automatically, while narrowing needs a cast and can lose information. Convert before division if you need the fractional part.',points:[['Literal','A value written directly in source code, such as a number, character, text, or boolean.'],['Widening','Moving a value to a compatible larger type, usually automatically.'],['Narrowing','Moving to a smaller type with a cast; some information may be lost.'],['Integer division','Division with two integer operands drops the fractional part before any later assignment.']],example:'double exact = (double) total / count; // convert before dividing',tip:'Casting the final integer result cannot restore a fraction already discarded.'}
  ],
  3:[
    {title:'Constructor chaining and shared references',lead:'How an object is created affects its first valid state; references determine who sees later changes.',explain:'One constructor can call another in the same class with this(...), and a subclass can call its parent with super(...). Both calls must appear first. Two variables can also point to the same object, so a change through either variable is visible through both.',points:[['Default constructor','A zero-argument constructor supplied only when the class declares none.'],['Constructor chaining','One constructor delegates initialization to another constructor in the same class.'],['Shared reference','Two variables identify the same object rather than two copies.'],['Object identity','The particular runtime object that a reference points to.']],example:'Student a = new Student("Ana"); Student b = a; // both refer to one Student',tip:'Assignment of an object reference does not clone the object.'}
  ],
  4:[
    {title:'Designing a flexible hierarchy',lead:'Good OOP design gives each type one clear job and leaves room for new kinds of objects.',explain:'When Checkout works with a PaymentMethod contract, CardPayment and CashPayment can supply different behavior without changing the basic checkout flow. Add an interface for an independent capability; use composition when one object contains another.',points:[['Contract','A shared set of operations callers may rely on.'],['Composition','Building a class using another object as one of its parts.'],['Dynamic dispatch','Selecting an overridden instance method from the actual object at runtime.'],['Responsibility','The work a class should own, rather than mixing unrelated jobs.']],example:'PaymentMethod payment = new CardPayment(); payment.pay(amount);',tip:'A new subtype should fit the original contract without a chain of type checks.'}
  ],
  5:[
    {title:'Checked and unchecked exceptions',lead:'The exception category affects what the compiler requires and how callers respond.',explain:'A checked exception must be handled or declared. An unchecked exception often signals a programming or validation problem. Both still need thoughtful diagnosis; a catch block should not silently hide a broken rule.',points:[['Throwable','The common root of Java’s exception and error hierarchy.'],['Error','A serious condition represented separately from ordinary application exceptions.'],['Checked exception','An exception the compiler requires code to catch or declare.'],['Unchecked exception','A runtime exception that does not require a catch or declaration at compile time.']],example:'A file operation may declare or handle IOException; invalid input may be rejected with IllegalArgumentException.',tip:'Handle a failure where the program can make a useful decision.'},
    {title:'Propagation, cleanup, and debugging',lead:'Follow the failing call, keep the original cause, and release resources.',explain:'When a method cannot recover, the exception can travel to its caller. The stack trace shows that call path. Multiple catch blocks can react to different failure types, and resource-safe code closes files or database objects even when a failure interrupts work.',points:[['Propagation','An unhandled exception moves from a called method to its caller.'],['Stack trace','The chain of method calls leading to the failure.'],['Multiple catch','Different handlers for different exception types.'],['try-with-resources','A structure that closes declared resources when the block ends.']],example:'catch (IOException cause) { throw new DataLoadException("Could not load records", cause); }',tip:'Keep the original cause when wrapping an exception so debugging remains possible.'},
    {title:'Modern syntax in context',lead:'Each newer feature solves a particular readability or data-model problem.',explain:'Use a lambda when a small piece of behavior is passed to a functional interface. A method reference points to an existing method. A record can be a compact carrier for data, and an enhanced switch can express one result from several cases.',points:[['Functional interface','An interface with one abstract operation that a lambda can supply.'],['Method reference','A compact reference to an existing method.'],['Record','A concise data carrier for related values.'],['Enhanced switch','A form of switch that can produce a value from alternatives.'],['Pattern matching','A way to combine a type check with access to a value of that type.'],['Text block','A multi-line string form for longer text.']],example:'var label = score >= 75 ? "Pass" : "Review";',tip:'Use the feature only when it makes the intended behavior easier to read.'}
  ],
  6:[
    {title:'Pick collections by scenario',lead:'A single data-management feature may need more than one collection.',explain:'A student registry can keep a List for registration order, a Set for unique identifiers, and a Map for direct ID lookup. Each structure answers a different question, so choosing one is not always enough.',points:[['ArrayList','A List implementation useful when indexed access is important.'],['LinkedList','A List implementation suited to frequent insertions or removals in appropriate positions.'],['HashSet','A Set implementation for unique membership without a promised sorted display order.'],['HashMap','A Map implementation for key-based lookup without a promised sorted display order.']],example:'List<Student> registrationOrder; Map<String, Student> byId;',tip:'Describe your required order and lookup first, then choose implementations.'},
    {title:'Algorithm and performance choices',lead:'The fastest-looking operation is not always the fastest overall plan.',explain:'Searching an unsorted list repeatedly by unique ID suggests a Map. Sorting a list once is useful when many ordered operations follow, but sorting before every single lookup can waste work. Compare the full workflow, not one method in isolation.',points:[['Custom ordering','A Comparator can rank values by a chosen field.'],['Search precondition','Binary search needs data sorted in the same order used for comparison.'],['Negative search result','A negative binary-search result means the item was not found.'],['Trade-off','A choice between access, insertion, ordering, memory, and maintenance needs.']],example:'students.sort(Comparator.comparing(Student::getAverage).reversed());',tip:'Use a Map for repeated key lookup and a sorted List for ranking or ordered display.'}
  ],
  7:[
    {title:'Thread lifecycle and coordination',lead:'Starting a thread does not mean its work is already finished.',explain:'Calling start() schedules the thread’s run work; calling run() directly is only an ordinary method call. join() waits for completion, sleep pauses a thread, and interruption asks a task to respond. A program may need to coordinate all of these steps.',points:[['start','Begins a new thread of execution.'],['run','Contains task work; a direct call does not start a new thread.'],['join','Waits for another thread to complete.'],['sleep','Pauses the current thread for a period.'],['interrupt','Signals that a thread should notice a request to stop or change course.']],example:'worker.start(); worker.join(); // continue after worker completes',tip:'Never assume a worker has finished just because start() returned.'},
    {title:'Race conditions and safe shared state',lead:'Timing can change the result when threads touch the same data.',explain:'Incrementing a shared count reads a value, changes it, and writes it back. Two threads can overlap those steps and lose an update. Synchronize the small critical section that must act as one operation.',points:[['Shared resource','Data or an object accessed by more than one thread.'],['Race condition','A result that depends on unsafe timing between threads.'],['Critical section','The shared operation that must be protected.'],['Thread safety','Correct behavior even when multiple threads access the program concurrently.']],example:'synchronized void increment() { count++; }',tip:'Protect shared updates, but avoid locking unrelated slow work.'},
    {title:'Build a responsive Swing app',lead:'A clear GUI separates layout, event handling, and reusable calculations.',explain:'A JFrame holds the window, a JPanel groups controls, and a layout manager places them. A listener reads input when the user acts; validation checks it; a separate method calculates the answer. Slow tasks should run away from the interface event path.',points:[['Event-driven programming','The application responds to actions such as clicks and selections.'],['ActionListener','Receives a component action such as a button click.'],['Layout manager','Places controls without depending on fixed screen coordinates.'],['Event handler','Connects a user action to validation and application logic.']],example:'button.addActionListener(e -> { double score = calculateScore(); output.setText(String.valueOf(score)); });',tip:'Do not make a button listener do a long blocking task.'}
  ],
  8:[
    {title:'Database and JDBC workflow',lead:'JDBC passes a request through a driver to a relational database and returns results.',explain:'A database table stores records in rows and fields in columns. Java uses a JDBC driver and Connection to reach the database, then sends SQL through Statement or PreparedStatement. SELECT returns rows to a ResultSet; other changes report affected rows.',points:[['Relational table','A structure of rows and columns for related records.'],['JDBC driver','The component that lets JDBC communicate with a particular database.'],['Connection','The active channel between the Java program and database.'],['ResultSet cursor','A position that moves through returned rows before values can be read.']],example:'Connection con = DriverManager.getConnection(url, user, password);',tip:'Check the driver and connection setup before diagnosing later SQL code.'},
    {title:'CRUD and safe SQL',lead:'The four database actions map to four common SQL commands.',explain:'INSERT creates a record, SELECT reads it, UPDATE changes it, and DELETE removes it. PreparedStatement uses placeholders for values and binds those values separately. executeQuery returns rows; executeUpdate reports how many rows changed.',points:[['CREATE / INSERT','Add a new record.'],['READ / SELECT','Retrieve matching records.'],['UPDATE','Change existing records.'],['DELETE','Remove matching records.'],['PreparedStatement','A parameterized SQL operation with bound values.']],example:'UPDATE student SET name = ? WHERE student_id = ?',tip:'When an ID-based update changes zero rows, check whether that ID exists.'},
    {title:'Resources, failures, and transactions',lead:'A database operation is reliable only when it cleans up and reports failure clearly.',explain:'Close connections, statements, and result sets with resource-safe structures. Catch SQLException where you can give a meaningful response while preserving diagnostics. If related updates must all succeed together, a transaction groups them so failure can be rolled back.',points:[['SQLException','A database operation failure reported through JDBC.'],['try-with-resources','A structure that closes JDBC resources after the block.'],['Transaction','A group of database changes treated as one unit of work.'],['Rollback','Undoing changes from a transaction that cannot complete safely.']],example:'con.setAutoCommit(false); // commit together or roll back on failure',tip:'Do not show a raw database trace as the only message to the user.'},
    {title:'Student record manager design',lead:'Build the complete flow in small pieces that are easy to test.',explain:'The view gathers user input and displays results. A service validates rules and coordinates actions. A data-access object performs parameterized SQL and maps rows. Test create, read, update, and delete along with invalid input and missing records.',points:[['View','Swing controls and tables that display information and collect input.'],['Service','Business rules and application actions between the view and database access.'],['DAO','Data-access code that performs JDBC operations and maps records.'],['Validation','Checks required values, types, and ranges before a database operation.'],['Feedback','A clear success or error message shown after an action.']],example:'Save click → validate → service → DAO → database → refresh table → feedback',tip:'A good test checks both the saved data and what the user sees.'}
  ]
};
for (const module of courseData.modules) module.topics.push(...(addedTopics[module.id]||[]));

courseData.modules[4].topics[1].points.push(
  ['Enum behavior','An enum can store fields and methods so a fixed set of named values carries its related rules.'],
  ['Generic class','A reusable class whose element type is chosen when an object is used.'],
  ['Generic method','A reusable method with its own type parameter, often inferred from the argument.']
);
courseData.modules[5].topics[1].points.push(
  ['Generic class','A class that keeps a type parameter while working with different element types.'],
  ['Generic method','A method that keeps type information while reusing the same logic for different types.']
);
courseData.modules[6].topics[2].points.push(
  ['Thread states','A thread moves among new, runnable, blocked, waiting or timed waiting, and terminated states.'],
  ['Runnable state','A thread is eligible for execution but may not be using a CPU at that instant.']
);
courseData.modules[6].topics.push({
  title:'Choosing Swing layouts',lead:'Layout managers place components according to a rule instead of hard-coded coordinates.',
  explain:'Choose a layout from the shape of the interface: a simple row, window regions, a grid, a stack, or a flexible constrained grid. Panels can be nested to combine layouts in one screen.',
  points:[['FlowLayout','Places components left to right and wraps when needed.'],['BorderLayout','Divides a container into north, south, east, west, and center regions.'],['GridLayout','Arranges components in equal-sized rows and columns.'],['BoxLayout','Stacks components horizontally or vertically with alignment control.'],['GridBagLayout','A flexible grid layout using constraints.'],['Nested panels','Panels with different layouts combined into one interface.']],
  example:'JPanel form = new JPanel(new GridLayout(2, 2));',
  tip:'Let a layout manager do positioning instead of setting fixed pixel coordinates.'
});

// Keep stable review keys while giving Module 2 a clearer teaching sequence.
for (const module of courseData.modules) module.topics.forEach((topic,index)=>{topic.reviewKey=index});
const moduleTwo=courseData.modules[1];
const [oldValues,oldStrings,oldControlFlow,oldConversion]=moduleTwo.topics;
oldValues.title='Variables and Values';
oldValues.lead='A variable has a name, a type, and a value that can change while the program runs.';
oldValues.explain='Think of a variable as a labeled place for one value. Its type says what kind of value belongs there. A constant also holds a value, but final tells Java that it must not be reassigned.';
oldValues.points=[
  ['Variable','A named storage location whose value may change.'],
  ['Value','The data currently stored in a variable, such as a score or name.'],
  ['Declaration','A statement that gives a variable a type and name.'],
  ['Constant','A value declared with final so it cannot be reassigned.']
];
oldValues.example='int score = 85;\nscore = 90; // the value changes\nfinal double VAT_RATE = 0.12;';
oldValues.tip='The type describes what the variable may hold; the value is what it holds now.';
oldConversion.title='Literals and Type Conversion';
oldStrings.title='Strings, Arrays, and Input';
oldControlFlow.title='Decisions, Loops, and Methods';
const dataTypes={reviewKey:4,title:'Data Types',lead:'Java uses different types for whole numbers, decimals, characters, true/false values, and text.',explain:'Choose a type that matches the value and the size you need. The eight primitive types store simple values directly. String is a reference type for text, so it is not one of the eight primitives.',points:[
  ['Eight primitive types','byte, short, int, long, float, double, char, boolean.'],
  ['Whole-number types','byte and short hold smaller whole numbers; int is common; long supports larger whole numbers.'],
  ['Decimal types','float and double hold fractional numbers; double offers more precision.'],
  ['Character and boolean','char holds one character; boolean holds true or false.'],
  ['String','A reference type used for text, not a primitive type.']
],example:'int age = 20;\ndouble average = 91.5;\nchar grade = \'A\';\nboolean passed = true;\nString name = "Mika";',tip:'Use long for a very large whole number and double when a fractional result matters.'};
const operators={reviewKey:5,title:'Operators and Expressions',lead:'Operators perform actions on values; an expression combines values and operators to produce a result.',explain:'Arithmetic operators calculate. Relational operators ask a true-or-false question. Logical operators combine those answers. Assignment changes a variable. Java follows precedence rules, so use parentheses when the intended order is important.',points:[
  ['Arithmetic operators','Addition, subtraction, multiplication, division, and remainder. For example, 3 + 2 gives 5.'],
  ['Remainder','The percent operator returns what is left after whole-number division. For example, 10 % 3 gives 1.'],
  ['Assignment operators','Store or update a variable. For example, adding 2 to a score of 5 makes the new score 7.'],
  ['Relational operators','Compare values and produce true or false. For example, 5 > 3 is true.'],
  ['Logical operators','Combine or reverse true-or-false conditions using AND, OR, and NOT. For example, true AND false is false.'],
  ['Operator precedence','Multiplication and division are evaluated before addition unless parentheses change the order. For example, 2 + 3 × 4 gives 14.'],
  ['Integer division','Dividing two integer values discards the fractional part. For example, 5 divided by 2 as integers gives 2.']
],example:'int total = 2 + 3 * 4; // 14\nint remainder = 10 % 3; // 1\nboolean eligible = age >= 18 && active;',tip:'For a fractional average, divide by a decimal value such as 2.0.'};
moduleTwo.topics=[oldValues,dataTypes,operators,oldConversion,oldStrings,oldControlFlow];
const headingWord=value=>value.split(' ').map((word,index)=>index>0&&['a','an','and','or','the','in','of','to','with','for','vs.'].includes(word.toLowerCase())?word.toLowerCase():word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
for(const module of courseData.modules){module.title=headingWord(module.title);for(const topic of module.topics)topic.title=headingWord(topic.title);}

const cardReplacements = {
  'JDK / JRE':[['JDK','The development kit containing tools to compile, run, debug, document, and package Java programs.'],['JRE','The runtime environment containing the JVM and libraries needed to run Java programs.']],
  'Entry point':[['Main method','The usual starting method of a Java application.']],
  'Public class filename':[['Public class filename','A public Java class is saved in a source file with the same name as that class.']],
  'Common tools':[['Java compiler','The JDK tool that turns Java source into bytecode.'],['Java launcher','The JDK tool that starts a compiled Java class.']],
  'try / catch / finally':[['try block','The block containing work that may raise an exception.'],['catch block','The block that handles a matching exception.'],['finally block','The block commonly used for cleanup after exception handling.']],
  'throw / throws':[['throw','The keyword that explicitly signals an exception at a particular point.'],['throws','The keyword that declares exceptions a method may pass to its caller.']],
  'for / while / do-while':[['for loop','A loop suited to counted repetition.'],['while loop','A loop that checks its condition before each pass.'],['do-while loop','A loop that runs its body once before checking the condition.']],
  'Getter / setter':[['Getter','A method that reads a value from an object.'],['Setter','A method that changes a value, often after validation.']],
  'protected / package access':[['Protected access','Visibility for the declaring class, its package, and subclasses.'],['Package access','Visibility within the same package when no access modifier is written.']],
  'Thread / Runnable':[['Thread','A Java object used to run work concurrently.'],['Runnable','A description of work that a thread can execute.']],
  'join / interrupt':[['join','A thread operation that waits for another thread to complete.'],['interrupt','A signal asking a thread to notice a cancellation or change request.']],
  'Statement / PreparedStatement':[['Statement','A JDBC interface that executes SQL.'],['PreparedStatement','A JDBC interface for SQL with separately bound parameter values.']],
  'CREATE / INSERT':[['INSERT','The SQL operation that adds a database record.']],
  'READ / SELECT':[['SELECT','The SQL operation that retrieves database records.']]
};
flashcards = courseData.modules.flatMap(module=>module.topics.flatMap(topic=>topic.points.flatMap(([term,definition])=>{
  const replacement=cardReplacements[term];
  return (replacement||[[term,definition]]).map(([front,back])=>({module:module.id,term:front,definition:back}));
})));
