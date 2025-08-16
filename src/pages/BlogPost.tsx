import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Sample blog data - in a real app this would come from an API or database
const blogPosts = {
  1: {
    title: "Building Modern React Applications with TypeScript",
    content: `
# Building Modern React Applications with TypeScript

TypeScript has become an essential tool for building robust React applications. In this comprehensive guide, we'll explore the benefits of using TypeScript in React development and learn best practices for type-safe development.

## Getting Started with TypeScript in React

First, let's understand why TypeScript is valuable for React development. TypeScript provides static type checking, which helps catch errors at compile time rather than runtime. This leads to more reliable code and better developer experience.

### Setting Up Your Environment

To create a new React project with TypeScript, you can use Create React App with the TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

This gives you a solid foundation with TypeScript configured out of the box.

## Component Types and Interfaces

One of the key benefits of TypeScript in React is the ability to define clear interfaces for your component props:

\`\`\`typescript
interface UserProps {
  name: string;
  email: string;
  isActive: boolean;
}

const User: React.FC<UserProps> = ({ name, email, isActive }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      {isActive && <span>Active</span>}
    </div>
  );
};
\`\`\`

## Hooks with TypeScript

TypeScript works seamlessly with React hooks. Here are some examples:

### useState with TypeScript

\`\`\`typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
\`\`\`

### useEffect with TypeScript

\`\`\`typescript
useEffect(() => {
  const fetchUser = async () => {
    const response = await fetch('/api/user');
    const userData: User = await response.json();
    setUser(userData);
  };
  
  fetchUser();
}, []);
\`\`\`

## Advanced Patterns

As your application grows, you'll want to use more advanced TypeScript patterns:

### Generic Components

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Best Practices

1. **Use strict TypeScript configuration** - Enable strict mode in your tsconfig.json
2. **Define clear interfaces** - Create interfaces for all your data structures
3. **Use union types** - For values that can be one of several types
4. **Leverage utility types** - Use TypeScript's built-in utility types like Partial, Pick, etc.

## Conclusion

TypeScript transforms React development by providing type safety, better IDE support, and improved refactoring capabilities. While there's a learning curve, the benefits far outweigh the initial investment.

The combination of React and TypeScript creates a powerful development environment that scales well with team size and project complexity.
    `,
    date: "Mar 15, 2024",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Frontend"]
  },
  2: {
    title: "The Art of Clean Code: Principles and Practices",
    content: `
# The Art of Clean Code: Principles and Practices

Writing clean code is more art than science. It requires discipline, practice, and a deep understanding of what makes code readable and maintainable. In this post, we'll explore the fundamental principles that separate good code from great code.

## What is Clean Code?

Clean code is code that is easy to read, understand, and modify. It's self-documenting and follows consistent patterns that make it predictable for other developers (including your future self).

### Characteristics of Clean Code

- **Readable**: Code should read like well-written prose
- **Simple**: Complexity should be minimized wherever possible
- **Focused**: Each function and class should have a single responsibility
- **Tested**: Clean code is well-tested code

## Naming Conventions

Good names are the foundation of clean code. They should be:

### Descriptive and Meaningful

\`\`\`javascript
// Bad
const d = new Date();
const u = users.filter(x => x.active);

// Good
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
\`\`\`

### Consistent

Use the same naming patterns throughout your codebase. If you use \`getUserById\`, don't also use \`fetchUserByEmail\` - stick to one pattern.

## Functions Should Be Small

Functions should do one thing and do it well. A good rule of thumb is that a function should fit on your screen without scrolling.

### Single Responsibility Principle

\`\`\`javascript
// Bad - doing too many things
function processUser(user) {
  // Validate user
  if (!user.email || !user.name) {
    throw new Error('Invalid user');
  }
  
  // Save to database
  database.save(user);
  
  // Send welcome email
  emailService.sendWelcomeEmail(user.email);
  
  // Log the action
  logger.log('User processed: ' + user.id);
}

// Good - separated concerns
function validateUser(user) {
  if (!user.email || !user.name) {
    throw new Error('Invalid user');
  }
}

function saveUser(user) {
  return database.save(user);
}

function sendWelcomeEmail(email) {
  return emailService.sendWelcomeEmail(email);
}

function processUser(user) {
  validateUser(user);
  const savedUser = saveUser(user);
  sendWelcomeEmail(user.email);
  logger.log('User processed: ' + savedUser.id);
  return savedUser;
}
\`\`\`

## Comments and Documentation

Comments should explain "why," not "what." If you need to explain what your code does, consider refactoring to make it more self-explanatory.

### Good Comments

\`\`\`javascript
// We're using a timeout here because the API occasionally
// returns stale data immediately after an update
setTimeout(() => {
  refreshUserData();
}, 100);
\`\`\`

### Bad Comments

\`\`\`javascript
// Increment i by 1
i++;
\`\`\`

## Error Handling

Clean code handles errors gracefully and explicitly. Don't hide errors or use empty catch blocks.

\`\`\`javascript
// Bad
try {
  riskyOperation();
} catch (e) {
  // silently ignore errors
}

// Good
try {
  riskyOperation();
} catch (error) {
  logger.error('Failed to perform risky operation', error);
  throw new Error('Operation failed. Please try again.');
}
\`\`\`

## Conclusion

Clean code is an investment in the future. It takes more time upfront but saves countless hours in maintenance and debugging. Remember, code is read far more often than it's written, so optimize for readability.

The principles we've discussed are guidelines, not rigid rules. Use your judgment and always consider the context of your project and team.
    `,
    date: "Mar 10, 2024",
    readTime: "8 min read",
    tags: ["Clean Code", "Best Practices", "Development"]
  },
  3: {
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    content: `
# Mastering CSS Grid and Flexbox for Modern Layouts

CSS Grid and Flexbox are two powerful layout systems that have revolutionized how we create responsive designs. Understanding when and how to use each one is crucial for modern web development.

## Understanding the Difference

While both Grid and Flexbox are layout systems, they serve different purposes:

- **Flexbox**: One-dimensional layout (either row or column)
- **CSS Grid**: Two-dimensional layout (rows and columns simultaneously)

## Flexbox Fundamentals

Flexbox excels at distributing space and aligning items in a single dimension.

### Basic Flexbox Setup

\`\`\`css
.container {
  display: flex;
  justify-content: space-between; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  gap: 1rem; /* space between items */
}
\`\`\`

### Common Flexbox Patterns

#### Centering Content

\`\`\`css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

#### Equal Width Columns

\`\`\`css
.columns {
  display: flex;
  gap: 1rem;
}

.column {
  flex: 1; /* each column takes equal space */
}
\`\`\`

## CSS Grid Fundamentals

CSS Grid is perfect for complex layouts where you need control over both rows and columns.

### Basic Grid Setup

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto; /* rows size to content */
  gap: 1rem;
}
\`\`\`

### Advanced Grid Layouts

#### Named Grid Lines

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
  grid-template-rows:
    [header-start] 60px
    [header-end content-start] 1fr
    [content-end footer-start] 40px
    [footer-end];
}

.header {
  grid-column: sidebar-start / main-end;
  grid-row: header-start / header-end;
}
\`\`\`

#### Grid Areas

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 60px 1fr 40px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## When to Use Which

### Use Flexbox When:
- Creating navigation bars
- Centering content
- Distributing space between items
- Creating equal-height columns
- Working with one-dimensional layouts

### Use CSS Grid When:
- Creating page layouts
- Working with two-dimensional designs
- You need precise control over rows and columns
- Creating complex responsive layouts

## Responsive Design with Grid and Flexbox

### Responsive Grid

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### Responsive Flexbox

\`\`\`css
.responsive-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-item {
  flex: 1 1 250px; /* grow, shrink, basis */
}
\`\`\`

## Practical Examples

### Card Layout with Grid

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

### Navigation with Flexbox

\`\`\`css
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
\`\`\`

## Conclusion

CSS Grid and Flexbox complement each other beautifully. Grid handles the overall page structure, while Flexbox manages the components within that structure. Mastering both will give you the tools to create any layout you can imagine.

Practice with real projects, experiment with different combinations, and remember that there's often more than one correct way to achieve a layout.
    `,
    date: "Mar 5, 2024",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Design"]
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id) as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button asChild>
            <Link to="/blogs">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-6 hover:bg-secondary/30"
          >
            <Link to="/blogs" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="mb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-foreground leading-relaxed"
            style={{ 
              whiteSpace: 'pre-wrap',
              lineHeight: '1.7'
            }}
          >
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{line.substring(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground">{line.substring(3)}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-lg font-bold mt-4 mb-2 text-foreground">{line.substring(4)}</h3>;
              }
              if (line.startsWith('```')) {
                return <div key={index} className="bg-secondary/20 p-4 rounded-md font-mono text-sm my-4 border border-border/30"></div>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="mb-4 text-foreground/90">{line}</p>;
            })}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;