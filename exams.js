// Original practice questions based only on the uploaded modules and summatives.
// Each row: summative | prompt | correct choice | distractor | distractor | distractor | explanation
const examRows = `
1|A compiled Java class runs on several operating systems. What makes this possible?|A compatible JVM runs the same bytecode on each system|Every IDE rewrites the source on launch|The class file contains identical native machine code for every processor|The JAR command translates each instruction while it runs|Java compiles source into bytecode for a compatible JVM.
1|Which installation includes tools for compiling, debugging, documenting, and packaging Java?|JDK|JVM only|JRE only|A text editor only|The JDK is the development toolbox.
1|What is the usual path from a Java source file to output?|.java → javac → .class → JVM → output|.class → javac → .java → output|.java → JVM → javac → output|JRE → .java → .class → compiler|javac compiles source to bytecode; the JVM executes it.
1|You compiled Hello.java into Hello.class. Which command launches the class?|java Hello|java Hello.class|javac Hello.class|javadoc Hello|The java command uses the class name without .class.
1|A public class is named StudentApp. What should its source filename be?|StudentApp.java|Student.java|StudentApp.class|Main.java|A public class name must match its .java filename.
1|Which method signature is the usual Java application entry point?|public static void main(String[] args)|public void main(String[] args)|static String main(String[] args)|private int main()|The launcher expects the standard public static void main signature.
1|A missing semicolon prevents compilation. What kind of failure is it?|Compile-time error|Runtime exception|Logical error|Database error|The compiler rejects malformed syntax before execution.
1|A program compiles but divides an integer by zero while running. What kind of failure is it?|Runtime error|Compile-time error|Logical error only|Source-level error|The failure appears during execution.
1|A grade program runs but awards a scholarship to the wrong students. What kind of error is it?|Logical error|Syntax error|Missing JVM|Package access error|The program completes but its result breaks the intended rule.
1|You want execution to pause at a suspicious loop line. What do you set?|Breakpoint|JAR file|Import statement|Constructor|A breakpoint pauses execution so values can be inspected.
1|Which debugger action executes a call without entering its method body?|Step Over|Step Into|Step Out|Restart|Step Over completes the current line without opening the called method.
1|Which tool produces API documentation from source comments?|javadoc|javac|jdb|java|javadoc generates documentation.
1|A project has unresolved Java platform references before source errors appear. What should you inspect first?|The project's selected installed JDK|Its last printed output|The array index in main|The result of a switch statement|A valid Java platform is needed to build and run the project.
1|Which declaration fits a population larger than the usual int range?|long population = 8100000000L;|int population = 8100000000;|byte population = 8100000000;|char population = 8100000000;|A large whole number needs long and an L literal.
1|What does final communicate in a variable declaration?|The variable cannot be reassigned|The value is always a String|The variable is shared by every object|The program ends after the assignment|final prevents reassignment.
1|What is 2 + 3 * 4 in Java?|14|20|24|9|Multiplication has higher precedence than addition.
1|What is the result of 5 / 2 when both operands are int?|2|2.5|3|A compile error|Integer division discards the fractional part.
1|Which expression computes a fractional average of two int scores?|(a + b) / 2.0|(a + b) / 2|(int) (a + b) / 2|a + b / 2|A decimal operand makes the division produce a fractional result.
1|Which method compares two String values by their characters?|equals()|==|length()|toUpperCase()|equals compares text content.
1|An array has length 4. What is its last valid index?|3|4|1|5|Indexes run from 0 through length minus 1.
1|After Scanner.nextInt(), what should you do before reading a full line with nextLine()?|Consume the leftover newline with an extra nextLine()|Call nextInt() again|Close the Scanner|Convert the number to char|The numeric read leaves a newline for nextLine to consume.
1|Which structure best handles score ranges such as below 75 and 75–89?|if / else if / else|A switch on exact values only|A constructor|A package statement|if conditions naturally express ranges.
1|Which loop executes its body at least once before checking its condition?|do-while|while|for|Enhanced for|do-while checks after the body.
1|Which array-loop condition avoids accessing the index equal to length?|i < scores.length|i <= scores.length|i == scores.length|i > scores.length|The length itself is beyond the last valid index.
1|In calculateAverage(80, 90), what are 80 and 90?|Arguments|Parameters|Return types|Fields|Arguments are values supplied at a call; parameters are declared in the method.
2|What is the relationship between a class and an object?|A class is a blueprint; an object is an instance|A class is an instance; an object is a package|Both are keywords for a method|An object exists only during compilation|Objects are created from classes.
2|Which member stores an object's name?|A field|A constructor call|A package|A return type|Fields hold object state.
2|Which constructor declaration is valid inside class Book?|Book(String title) { }|void Book(String title) { }|String Book(String title) { }|new Book(String title) { }|A constructor has the class name and no return type.
2|When does Java supply a default no-argument constructor?|Only when the class declares no constructor|Whenever any constructor has parameters|Only for abstract classes|Only when all fields are public|Declaring any constructor prevents the automatic default one.
2|What does this.name = name do inside a constructor?|Assigns the parameter to the current object's field|Creates a static field|Calls the superclass constructor|Changes every object's name|this.name identifies the field of the current object.
2|Which design best prevents a bank balance from becoming negative?|Keep balance private and validate updates through a method|Make balance public so callers can fix it|Store balance as a String|Use a static balance for all accounts|Encapsulation can enforce the balance invariant.
2|What is a getter's usual role?|Read a value from an object|Start a new thread|Compile bytecode|Create a package|A getter exposes controlled reading.
2|What does a static count field represent in a Student class?|One value shared by the class|A separate count for each student|A local value inside main only|A field that cannot be changed|Static members belong to the class as a whole.
2|Why can a static method not directly use this?|It has no current object|It is always private|It runs only in the compiler|It cannot return a value|this requires an instance.
2|A Course stores an Instructor reference. Which relationship is this?|Has-a|Is-a|Overriding|Downcasting|Course contains or uses an Instructor object.
2|A Car is a specialized Vehicle. Which relationship fits?|Is-a inheritance|Has-a composition only|Unrelated classes|One-to-many multiplicity|A Car can truthfully be described as a Vehicle.
2|Which UML symbol marks a private member?|-|+|#|~|A minus sign represents private visibility.
2|In UML, what does 0..* mean?|Zero or many|Exactly one|Zero or one|At least one|The star allows any number, including zero.
2|Which superclass member can a subclass use directly?|An accessible inherited method|A private field with no accessor|A constructor as an inherited method|A private method as an override|Subclasses use accessible inherited members.
2|What must be first if a subclass constructor calls super(...)?|The super(...) call|A print statement|The return statement|The last field assignment|Superclass construction happens before subclass initialization.
2|What is method overriding?|A subclass supplies its own version of an inherited instance method|One class defines the same name with different parameters|A method creates a new object|A static method replaces a constructor|Overriding specializes inherited instance behavior.
2|Why add @Override to a subclass method?|The compiler checks that it really overrides|The method becomes static|The method can reduce visibility|The superclass constructor is skipped|The annotation catches signature mistakes.
2|Can a final instance method be overridden?|No|Yes, if the subclass is public|Yes, with a cast|Only when it is static|final prevents overriding.
2|A subclass defines a static method with its parent's method name. What happens?|The static method is hidden, not dynamically overridden|Runtime dispatch chooses it by actual object|The parent constructor is replaced|Both methods become abstract|Static methods use hiding rather than runtime overriding.
2|Which feature uses the same method name with different parameter lists?|Overloading|Overriding|Encapsulation|Composition|Overloading is selected by the compiler from the arguments.
2|Animal pet = new Dog(); pet.sound() calls which overridden method?|Dog's, because the actual object is a Dog|Animal's, because the reference is Animal|Both methods in sequence|Neither method compiles|Runtime dispatch follows the actual object's override.
2|With Animal pet = new Dog(), can pet call a Dog-only method directly?|No; the Animal reference type limits visible members|Yes; all Dog members are visible|Only when the method is private|Only inside a static method|The reference type controls which calls compile.
2|What should you check before an uncertain downcast?|instanceof|final|package|javadoc|instanceof checks the object's runtime type.
2|Which design fits unrelated classes that all must calculate payment?|A Payable interface|One shared Car superclass|A public field in every class|A single static object|An interface expresses a common capability.
2|What must a concrete subclass do with an inherited abstract method?|Implement it|Ignore it|Make the superclass final|Convert it to a field|Concrete subclasses complete required abstract behavior.
3|Where does a checked exception normally need to be addressed?|At compile time through handling or declaration|Only after the JVM exits|Only inside an enum|Only when a GUI is present|Checked exceptions are part of the method's compile-time contract.
3|What happens to an exception if a method does not handle it?|It can propagate to its caller|It always disappears|It turns into a logical error|It becomes a field|Uncaught exceptions move up the call chain.
3|What is the role of a catch block?|Handle a matching exception|Always run before try|Declare a package|Start a thread|catch receives a matching failure from try.
3|What is finally commonly used for?|Cleanup after try/catch|Choosing a generic type|Creating a class|Sorting a list|finally is a structured place for cleanup.
3|Which keyword explicitly signals a new exception at a particular line?|throw|throws|catch|final|throw creates or signals an exception now.
3|Which keyword declares that a method may pass an exception to its caller?|throws|throw|finally|static|throws appears in a method declaration.
3|A grade must be within 0–100. What is a robust first response to 130?|Reject it with a meaningful exception or validation message|Store 130 and fix the report later|Catch every exception and ignore it|Change the grade to a String|Validation protects the business rule and explains the failure.
3|Why preserve an original cause when wrapping an exception?|It keeps diagnostic information for debugging|It makes the exception unchecked|It closes every resource automatically|It changes the grade band|The original cause helps locate the root failure.
3|What does a package primarily help organize?|Related classes and access boundaries|Thread scheduling|Database rows|Array indexes|Packages group related Java types.
3|Which type models a closed set such as EXCELLENT, GOOD, and PASS?|enum|raw List|double|JPanel|An enum represents fixed named choices.
3|What is autoboxing?|Automatic conversion from a primitive to its wrapper object|Automatic conversion from String to int|A loop over a Set|Sorting a Map|Autoboxing wraps a primitive value.
3|Why can unboxing a null Integer fail?|There is no primitive int value inside null|The variable is static|The number is negative|The wrapper is in a package|Null cannot provide a primitive value.
3|What is the main benefit of List<Integer> over a raw List?|Type mismatches can be caught earlier|It guarantees sorted order|It removes duplicates|It creates threads|Generics preserve element type safety.
3|When may var infer a local variable's type?|When the local declaration has an initializer|When there is no initializer|For every field in a class|Only inside an interface|The initializer supplies the type for local inference.
3|What does a lambda supply in this module?|Compact behavior for a functional interface|A database connection|An inherited constructor|A checked exception hierarchy|A lambda expresses the one required operation of a functional interface.
3|Which collection allows duplicates and indexed access?|List|Set|Queue|Map|List is ordered and indexed, and accepts duplicates.
3|Which collection is best when membership must be unique?|Set|List|Queue|ResultSet|Set models uniqueness.
3|Which collection models first-in, first-out pending requests?|Queue|Map|Set|ArrayList by index only|Queue supports arrival-order processing.
3|Which collection supports lookup by a unique student ID key?|Map|Queue|Set only|Iterator|Map associates a key with its value.
3|Why should HashSet not be used for a required sorted display order?|It does not promise that iteration order|It cannot store Strings|It always permits duplicates|It only holds key-value pairs|HashSet is chosen for uniqueness, not sorted output.
3|Which traversal supports safe removal of matching elements while iterating?|Iterator with remove()|Enhanced for plus collection.remove()|A raw cast|binarySearch|Iterator provides an explicit safe removal operation.
3|Which traversal is simplest when you only read every element?|Enhanced for loop|Iterator.remove() on every pass|A database cursor|A constructor chain|Enhanced for is concise for read-only traversal.
3|What is Comparator useful for?|Defining a custom order such as highest grade first|Removing all duplicates automatically|Starting a new thread|Making a class abstract|Comparator supplies an ordering rule.
3|What must be true before binarySearch on a list?|The list is sorted in the search order|The list is a HashSet|Every item is null|The list is raw|Binary search assumes the data is ordered consistently.
3|A queue processes work, but users also look up requests by ID. What design fits both needs?|Use a Queue for order and a Map for ID lookup|Use only a Set for both|Use only a raw List and cast each item|Sort the queue after every request|Each collection serves a different requirement.
4|How do threads within one process differ from separate processes?|Threads share process resources|Threads never share memory|Every thread owns a separate JVM|Threads are only GUI controls|Threads share resources and need coordination.
4|What starts a new Java thread rather than just calling its task normally?|start()|run() directly|join()|sleep()|start begins separate thread execution.
4|Why use Runnable for a task?|It separates the work from the Thread object|It guarantees no shared state|It replaces every exception|It creates a JFrame|Runnable describes the task independently.
4|What does join() let one thread do?|Wait for another thread to finish|Delete a thread|Lock every object|Move a GUI component|join waits for completion.
4|What does interrupt() communicate to a worker?|A request for interruption or cancellation|Guaranteed immediate termination|A new process creation|A database rollback|Interruption is a coordination signal.
4|Two threads update the same count and lose increments. What is this?|A race condition|A package conflict|An abstract method|An SQL syntax error|Shared read-modify-write operations can interleave incorrectly.
4|Where should synchronization focus for a shared counter?|The critical read-and-update section|Every unrelated file read|Only the main method declaration|Only GUI labels|Protect the shared operation that must be atomic.
4|What role does JFrame play in Swing?|Top-level application window|Database driver|Collection iterator|Exception handler|JFrame supplies the main window.
4|What role does JPanel play?|Groups GUI components|Runs SQL|Compiles Java|Starts a process|JPanel is a container for controls.
4|What organizes Swing controls without relying on fixed pixel positions?|A layout manager|A ResultSet|A Queue|A checked exception|Layout managers arrange components adaptably.
4|What connects a button click to a response?|An event listener|A superclass constructor|An enum constant|A field initializer|Listeners react to generated events.
4|How should a slow report task be handled in a Swing app?|Run slow work separately so the interface stays responsive|Run a long loop inside the click handler|Block the window until it finishes|Remove the button listener|Long work on the interface event path makes it unresponsive.
4|What is JDBC used for?|Connecting Java code to a relational database|Drawing Swing panels|Sorting Collections|Creating threads|JDBC provides database connectivity and SQL operations.
4|What is the role of Connection?|Manage an active database connection|Store one row's columns|Draw the window|Catch all exceptions|Connection represents database connectivity.
4|Why is PreparedStatement appropriate for user-supplied values?|It separates SQL structure from bound parameter values|It automatically draws a form|It prevents all database failures|It is a subclass of JPanel|Parameterized SQL uses placeholders and bound values.
4|What does ResultSet.next() do?|Advance to the next returned row|Execute an UPDATE|Close the database driver|Sort the result table|A ResultSet cursor must move to a row before reading it.
4|Which SQL command corresponds to the Create part of CRUD?|INSERT|SELECT|UPDATE|DELETE|INSERT adds a record.
4|Which JDBC call fits a SELECT query?|executeQuery()|executeUpdate() only|setText()|start()|executeQuery returns query results.
4|Which JDBC call fits an UPDATE statement?|executeUpdate()|executeQuery() only|ResultSet.next()|Thread.join()|executeUpdate returns an affected-row count.
4|What does an affected-row count of 0 commonly mean after an ID-based UPDATE?|No matching record was changed|Every record was updated|The GUI is closed|The query returned a ResultSet|No row met the update condition.
4|Why use try-with-resources around JDBC objects?|It closes resources even when work fails|It turns SQL into bytecode|It adds a button listener|It guarantees no SQLException|Resource safety is part of reliable database code.
4|What should happen before saving form data to a database?|Trim and validate required fields and ranges|Insert raw text immediately|Show a stack trace to the user|Disable every error handler|Validation prevents invalid input from reaching the database.
4|Which flow correctly describes a Swing and JDBC save action?|GUI input → validation/service → DAO/JDBC → database → feedback|Database → compiler → JFrame → enum|JPanel → JVM → ArrayList → SQL|ResultSet → constructor → thread → print|The interface delegates rules and data access, then displays the result.
4|Where should parameterized SQL and row mapping live in a layered app?|Data access component or DAO|Inside every button's click handler|Inside a label's text|Inside an enum constant only|Separating database code makes the GUI easier to maintain.
4|What feedback should a database app give after a failed save?|A useful user message while retaining diagnostic details for developers|A raw stack trace as the only message|No message at all|Always claim success|The module emphasizes clear feedback and reliable error handling.
`;

const allExamQuestions = examRows.trim().split('\n').map((row, i) => {
  const [summative, prompt, correct, ...tail] = row.split('|');
  const explanation = tail.pop();
  return {id:i+1, summative:Number(summative), prompt, choices:[correct,...tail], correct:0, explanation};
});

const examSets = [
  {id:'exam-a',title:'Modules 1–4',subtitle:'Summatives 1 & 2',summatives:[1,2],accent:'peach'},
  {id:'exam-b',title:'Modules 5–8',subtitle:'Summatives 3 & 4',summatives:[3,4],accent:'mint'}
];
