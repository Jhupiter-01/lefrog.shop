import os
import sys

print("=== Local Environment Check ===")
print(f"Python version: {sys.version}")
print(f"Current directory: {os.getcwd()}")

# Check components directory
components_path = os.path.join(os.path.dirname(__file__), 'components', 'ui')
if os.path.exists(components_path):
    print(f"✅ Found components directory at {components_path}")
    print(f"Number of components: {len(os.listdir(components_path))}")
else:
    print(f"❌ Missing components directory at {components_path}")

print("\n=== Script Ready for Deployment ===")
