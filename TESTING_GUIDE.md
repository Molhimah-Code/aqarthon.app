# 🧪 CI/CD Pipeline Testing Guide

This guide will help you test your CI/CD pipeline step by step.

## 🚀 Quick Start Testing

### 1. Local Testing

First, test your application locally:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint

# Build the application
npm run build

# Start the application
npm start
```

Visit `http://localhost:3000` to see your application running.

### 2. Docker Testing

Test the Docker container:

```bash
# Build Docker image
docker build -t aqarthon-app .

# Run container
docker run -p 3000:3000 aqarthon-app

# Test with docker-compose
docker-compose up
```

## 🔄 Pipeline Testing Steps

### Step 1: Initial Commit
```bash
# Add all files
git add .

# Commit to main branch
git commit -m "feat: initial CI/CD pipeline setup

- Add comprehensive CI/CD workflow
- Add staging and production environments
- Add approval workflows and commit tracking
- Add security scanning and quality gates"

# Push to main
git push origin main
```

### Step 2: Create Test Branches

```bash
# Create develop branch
git checkout -b develop
git push origin develop

# Create staging branch
git checkout -b staging
git push origin staging

# Create feature branch
git checkout -b feature/test-pipeline
git push origin feature/test-pipeline
```

### Step 3: Test Pull Request Workflow

1. **Create PR from feature to develop:**
   - Go to GitHub → Pull Requests → New Pull Request
   - Base: `develop` ← Compare: `feature/test-pipeline`
   - Title: "Test: CI/CD Pipeline PR Checks"
   - Description: "Testing the PR workflow and quality gates"

2. **Verify PR Checks:**
   - ✅ Code quality checks run
   - ✅ Security scans run
   - ✅ Build checks pass
   - ✅ Tests run successfully

### Step 4: Test Staging Deployment

1. **Create PR from develop to staging:**
   - Base: `staging` ← Compare: `develop`
   - Title: "Deploy: Test staging deployment"
   - Get 1 approval from any team member

2. **Verify Staging Deployment:**
   - ✅ Staging environment deployment triggers
   - ✅ Commit information is logged
   - ✅ Author tracking works
   - ✅ Slack notifications sent (if configured)

### Step 5: Test Production Deployment

1. **Create PR from staging to main:**
   - Base: `main` ← Compare: `staging`
   - Title: "Deploy: Test production deployment"
   - Get 2 approvals (Lead + Senior Developer)

2. **Verify Production Approval:**
   - ✅ Production environment requires manual approval
   - ✅ GitHub Issue created for approval
   - ✅ Slack notification sent for approval
   - ✅ Deployment proceeds after approval

## 🔍 What to Check

### GitHub Actions Tab
- [ ] All workflows run successfully
- [ ] Jobs complete without errors
- [ ] Artifacts are created
- [ ] Logs show commit information

### Branch Protection
- [ ] Direct pushes to main/staging are blocked
- [ ] PR reviews are required
- [ ] Status checks must pass
- [ ] Code owner reviews work

### Environment Protection
- [ ] Staging environment auto-deploys
- [ ] Production environment requires approval
- [ ] Environment-specific secrets work
- [ ] Branch restrictions are enforced

### Notifications
- [ ] Slack notifications work (if configured)
- [ ] GitHub Issues created for production
- [ ] PR comments show status
- [ ] Email notifications sent

## 🐛 Troubleshooting

### Common Issues

1. **Workflow doesn't trigger:**
   - Check branch protection rules
   - Verify workflow file syntax
   - Ensure correct branch names

2. **Tests fail:**
   - Run `npm test` locally first
   - Check test file syntax
   - Verify dependencies are installed

3. **Build fails:**
   - Run `npm run build` locally
   - Check webpack configuration
   - Verify all dependencies

4. **Docker build fails:**
   - Test Dockerfile locally
   - Check Docker context
   - Verify base image availability

5. **Environment approval not working:**
   - Check environment settings in GitHub
   - Verify reviewer permissions
   - Check environment protection rules

### Debug Commands

```bash
# Check workflow syntax
gh workflow list

# View workflow runs
gh run list

# View specific run logs
gh run view <run-id>

# Check branch protection
gh api repos/:owner/:repo/branches/main/protection

# Check environment settings
gh api repos/:owner/:repo/environments
```

## 📊 Expected Results

### Successful Pipeline Run Should Show:

1. **Build and Test Job:**
   ```
   ✅ Checkout code
   ✅ Setup Node.js
   ✅ Install dependencies
   ✅ Run tests (4 tests passing)
   ✅ Run linting
   ✅ Build application
   ✅ Build and push Docker image
   ✅ Commit Information logged
   ```

2. **Staging Deployment:**
   ```
   ✅ Deploy to Staging Environment
   ✅ Run Staging Tests
   ✅ Notify Staging Deployment
   ```

3. **Production Deployment:**
   ```
   ✅ Pre-deployment Checks
   ✅ Deploy to Production Environment
   ✅ Post-deployment Verification
   ✅ Notify Production Deployment
   ```

4. **Security Scan:**
   ```
   ✅ Run security audit
   ✅ Run CodeQL Analysis
   ```

## 🎯 Test Scenarios

### Scenario 1: Happy Path
- Feature → Develop → Staging → Main
- All approvals obtained
- All checks pass
- Deployments successful

### Scenario 2: Failed Tests
- Create PR with failing tests
- Verify PR is blocked
- Fix tests and verify PR unblocks

### Scenario 3: Security Issues
- Create PR with security vulnerabilities
- Verify security scan catches issues
- Fix issues and verify PR passes

### Scenario 4: Missing Approvals
- Create PR without required approvals
- Verify PR is blocked
- Get approvals and verify PR unblocks

## 📝 Test Checklist

- [ ] Local application runs successfully
- [ ] All tests pass locally
- [ ] Linting passes locally
- [ ] Build completes successfully
- [ ] Docker image builds successfully
- [ ] PR checks run automatically
- [ ] Staging deployment works
- [ ] Production approval workflow works
- [ ] Commit tracking works
- [ ] Author information is logged
- [ ] Notifications are sent
- [ ] Branch protection is enforced
- [ ] Environment protection works
- [ ] Security scans run
- [ ] Code quality gates work

## 🚨 Emergency Testing

If something goes wrong:

1. **Check GitHub Actions logs**
2. **Verify repository settings**
3. **Test locally first**
4. **Check environment configurations**
5. **Review branch protection rules**

## 📞 Support

If you encounter issues:
1. Check the logs in GitHub Actions
2. Review the setup guide
3. Test locally first
4. Contact the DevOps team

---

**Happy Testing! 🎉**

Your CI/CD pipeline is designed to be robust and reliable. Take your time testing each component to ensure everything works as expected.
