cd C:\Code\Project\ZFCloudPan\FaziUI
$dockerTag=$(Get-Date -Format 'yyyyMMddHHmmss')
echo "ver：$dockerTag"

yarn generate

cd C:\Code\Project\ZFCloudPan\FazilBackend\src\main\resources
rm -r .\static\
echo "copy files"
cp C:\Code\Project\ZFCloudPan\FaziUI\dist\ C:\Code\Project\ZFCloudPan\FazilBackend\src\main\resources\static -recurse -force

cd C:\Code\Project\ZFCloudPan\FazilBackend\src\main\resources
rm version
New-Item version
Set-Content .\version $dockerTag

cd C:\Code\Project\ZFCloudPan\FazilBackend
echo "build Java Application"
mvn clean package
mkdir C:\Code\Project\ZFCloudPan\FazilBackend\target\config\
# cp C:\Code\Project\ZFCloudPan\FazilBackend\src\main\resources\application.yml C:\Code\Project\ZFCloudPan\FazilBackend\target\config\
cp C:\Code\Project\ZFCloudPan\FazilBackend\src\main\resources\application-docker.yaml C:\Code\Project\ZFCloudPan\FazilBackend\target\config\application.yml

cd C:\Code\Project\ZFCloudPan\FazilBackend\
echo "build docker image"
docker build -t 110.42.67.157:8088/fazil:$dockerTag .
echo "login docker"
docker login http://110.42.67.157:8088 -u admin -p Cuishihao123
echo "push docker image"
docker push 110.42.67.157:8088/fazil:$dockerTag
