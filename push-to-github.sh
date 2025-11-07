#!/bin/bash

# Push to GitHub Script
# Repository: final-avantage-ai-website-

echo "🚀 Avantage AI Website - GitHub Push Script"
echo "==========================================="
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo ""
echo "📦 Repository Details:"
echo "   Name: final-avantage-ai-website-"
echo "   Owner: $github_username"
echo "   URL: https://github.com/$github_username/final-avantage-ai-website-"
echo ""

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "ℹ️  Remote 'origin' already exists. Removing it..."
    git remote remove origin
fi

# Add remote
echo "🔗 Adding remote repository..."
git remote add origin "https://github.com/$github_username/final-avantage-ai-website-.git"

echo ""
echo "⚠️  IMPORTANT: Before pushing, make sure you've created the repository on GitHub!"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: final-avantage-ai-website-"
echo "   3. Make it Public or Private"
echo "   4. DO NOT initialize with README (we already have one)"
echo "   5. Click 'Create repository'"
echo ""

read -p "Have you created the repository on GitHub? (y/n): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Push cancelled. Create the repository first, then run this script again."
    exit 1
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your code has been pushed to GitHub!"
    echo ""
    echo "🌐 View your repository at:"
    echo "   https://github.com/$github_username/final-avantage-ai-website-"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Deploy to Vercel: npm i -g vercel && vercel"
    echo "   2. Add repository description and topics on GitHub"
    echo "   3. Enable GitHub Pages if needed"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "   1. Repository doesn't exist on GitHub yet"
    echo "   2. Authentication failed (use Personal Access Token, not password)"
    echo "   3. Network connection issue"
    echo ""
    echo "💡 Try using GitHub CLI instead:"
    echo "   gh repo create final-avantage-ai-website- --public --source=. --push"
fi

