rm -rf /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/src/main/resources/static/admin
cd /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilAdmin
yarn generate
mv /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilAdmin/.output/public/ /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilAdmin/.output/admin/
mkdir /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/src/main/resources/static/admin
cp -r /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilAdmin/.output/admin/ /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/src/main/resources/static/admin
cd /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/

rm -rf /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/src/main/resources/static/ui
cd /Users/qifei/Documents/Code/Project/ZFCloudPan/FaziUI/
yarn generate
mv /Users/qifei/Documents/Code/Project/ZFCloudPan/FaziUI/.output/public/ /Users/qifei/Documents/Code/Project/ZFCloudPan/FaziUI/.output/ui/
mkdir /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/src/main/resources/static/ui
cp -r /Users/qifei/Documents/Code/Project/ZFCloudPan/FaziUI/.output/ui/ /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/src/main/resources/static/ui
cd /Users/qifei/Documents/Code/Project/ZFCloudPan/FazilBackend/